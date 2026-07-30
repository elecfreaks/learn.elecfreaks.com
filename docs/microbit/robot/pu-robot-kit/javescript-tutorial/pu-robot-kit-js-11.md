---
sidebar_position: 11
sidebar_label: 11:Robot PU MusicLib
---

# 11:Robot PU MusicLib

## 课程：MusicLib节拍+速度检测（同步艺术动作）
### 引言
Robot PU在其身体运动与音乐同步时可以看起来很艺术。

在micro:bit上，麦克风通过 `input.soundLevel()` 提供**响度**（振幅）。

本课聚焦于节奏：

- 检测**节拍**
- 估算**速度（BPM）**
- 将**舞蹈/身体运动**同步到这些节拍

### 知识点

[https://makecode.microbit.org/types/array](https://makecode.microbit.org/types/array)

[https://arcade.makecode.com/courses/csintro2/arrays](https://arcade.makecode.com/courses/csintro2/arrays)

[https://en.wikipedia.org/wiki/Circular_buffer](https://en.wikipedia.org/wiki/Circular_buffer)

[https://en.wikipedia.org/wiki/Nyquist%E2%80%93Shannon_sampling_theorem](https://en.wikipedia.org/wiki/Nyquist%E2%80%93Shannon_sampling_theorem)

[https://en.wikipedia.org/wiki/Quasi-peak_detector](https://en.wikipedia.org/wiki/Quasi-peak_detector)

### 问题定义

我们希望Robot PU能够：

- 检测节拍何时发生（拍手/鼓击/强烈节奏）
- 估算速度使机器人保持"合拍"
- 在拍子上触发较大的动作，在拍子之间触发较小的动作

约束条件：

- `input.soundLevel()` 仅提供振幅，因此我们可以很好地做节拍/速度检测。
- 仅凭 `soundLevel` 从房间音频中检测真实的音乐音高/音符是不可靠的。

### 基本解决思路

有两种实用的方法：

- **内部 `MusicLib`**（扩展开发）
    - 使用环形缓冲区+自适应阈值
    - 输出节拍事件和平滑的周期
- **MakeCode友好的节拍检测器**（普通项目）
    - 阈值+冷却时间避免双重触发
    - 平滑测量的节拍周期

一旦我们有了节拍+速度：

- 计算 `BPM ≈ 60000 / periodMs`
- 使用**节拍时钟**调度动作重音

### MakeCode中的数组（对音乐+速度有用）
数组让你存储一系列值，比如：

- 最近的响度样本
- 最近的节拍周期（毫秒）
- 音乐音轨：`freqs[]` + `dursMs[]` 数组

## A. 创建和索引数组

```js
let freqs: number[] = [262, 294, 330, 349]
let dursMs: number[] = [250, 250, 250, 500]

basic.showNumber(freqs[0])
basic.showNumber(dursMs[3])
```

**注意：**

- 数组索引从 `0` 开始
- `freqs.length` 是元素数量

## B. 循环遍历数组（播放简短的曲调）

```js
function playToneSequence(freqs: number[], dursMs: number[]): void {
    const n = Math.min(freqs.length, dursMs.length)
    for (let i = 0; i < n; i++) {
        const f = freqs[i]
        const d = dursMs[i]
        if (f <= 0) music.rest(d)
        else music.playTone(f, d)
    }
}

playToneSequence([262, 294, 330, 0, 330], [200, 200, 400, 120, 400])
```
## C. 随时间构建数组（收集节拍周期）

```js
let periods: number[] = []
let lastBeatMs = 0

function recordBeat(now: number): void {
    const p = now - lastBeatMs
    lastBeatMs = now
    if (p > 150 && p < 2000) {
        periods.push(p)
    }
}

input.onButtonPressed(Button.A, function () {
    const now = control.millis()
    recordBeat(now)
    basic.showNumber(periods.length)
})
```

**注意：**

- `periods.push(value)` 追加一个项目
- 如果一直追加，内存会增长。对于长时间运行的程序，推荐使用固定大小的环形缓冲区（下一节）。

## 子采样、奈奎斯特定理和选择桶+环形缓冲区大小

由于 `input.soundLevel()` 已经是振幅/包络值（而非原始音频样本），我们通常做**子采样**：

- 每 `bucketMs` 采样一次响度
- 可选地在桶内取平均（或峰值）
- 在那个较低速率的信号上运行节拍检测

这比真正的音频处理便宜得多，而且当你只关心**速度**时是正确的工具。


### A. 奈奎斯特定理（应用于节拍/速度，而非音高）
奈奎斯特定理说：要测量最大频率为 `fMax` 的信号，你需要采样率 `fs > 2 * fMax`。

对于速度：

- `BPM` 对应于以Hz为单位的节拍频率：`fBeat = BPM / 60`
- 对于 `BPM_MAX = 300`，`fBeatMax = 300 / 60 = 5 Hz`
- 奈奎斯特要求：`fs > 10 Hz` => `bucketMs < 100 ms`

因此，如果你想可靠地检测高达**300 BPM**的速度，选择约：

- `bucketMs = 50`（20 Hz）—— 能力允许时推荐
- `bucketMs = 80`（12.5 Hz）—— 通常可以
- `bucketMs = 125`（8 Hz）—— 对于较慢的音乐可以，但低于300 BPM的奈奎斯特要求，可能会错过快速节拍

重要：

- 这个奈奎斯特推理是关于**节拍事件速率**，而非音符音高。

### B. 速度范围25–300 BPM => 周期范围

- `BPM_MIN = 25` => `periodMaxMs = 60000 / 25 = 2400 ms`
- `BPM_MAX = 300` => `periodMinMs = 60000 / 300 = 200 ms`

你的检测器应该拒绝不可能的周期（太小/太大）以减少误触发。

### C. 环形缓冲区窗口长度（多少桶？）

环形缓冲区大小主要关乎**稳定性vs延迟**：

- 更大的窗口 = 更稳定的阈值/更平滑的速度
- 更小的窗口 = 对速度变化反应更快

经验法则：

- 要估算接近慢速端（25 BPM）的速度，尝试在你的历史中保持至少~3拍
- `3 * periodMaxMs = 3 * 2400 = 7200 ms`

所以一个好的起点是：

- `windowMs = 8000` 到 `12000`

然后计算：

- `ringSize = windowMs / bucketMs`

示例：

- `bucketMs=50`, `windowMs=8000` => `ringSize=160`
- `bucketMs=80`, `windowMs=8000` => `ringSize=100`
- `bucketMs=100`, `windowMs=8000` => `ringSize=80`

### D. 建议的常量（MakeCode TypeScript）

```js
const BPM_MIN = 25
const BPM_MAX = 300

const PERIOD_MIN_MS = Math.idiv(60000, BPM_MAX) // 200ms
const PERIOD_MAX_MS = Math.idiv(60000, BPM_MIN) // 2400ms

// 选择 bucketMs 使 bucketMs < 100ms 以满足300 BPM的奈奎斯特要求
const BUCKET_MS = 50

// 为25 BPM的稳定性保留~3个慢拍的历史
const WINDOW_MS = 8000
const RING_SIZE = Math.idiv(WINDOW_MS, BUCKET_MS)

// 典型节拍冷却时间：防止在同一拍子上双重触发
const COOLDOWN_MS = Math.max(100, Math.idiv(PERIOD_MIN_MS, 2))
```

**注意：**

- 如果CPU负载高，先尝试 `BUCKET_MS = 80`（并重新计算 `RING_SIZE`）。
- 如果你希望对速度变化反应更快，减少 `WINDOW_MS`（但如果关心25 BPM的稳定性，保持在~7200ms以上）。


## 实现

### A. 使用内部MusicLib（扩展开发）
Robot PU扩展有一个内部辅助类 `MusicLib`（在 `robotpu.ts` 中定义）。

它提供：

- `isABeat(timestampMs, loudness, snr, sampleMs = 125): boolean`
- `period (ms)`：估计的拍间时间

重要：

- `MusicLib` **不作为公共MakeCode积木API导出**。
- 只有在你编辑/运行扩展源代码内部的代码时，才能实例化 `new MusicLib()`。

示例（扩展开发）：

```js
let now = 0
let micLoudness = 0
let musicDetector = new MusicLib()

basic.forever(function () {
    micLoudness = input.soundLevel()
    now = control.millis()
    musicDetector.isABeat(now, micLoudness, 1.005)
    basic.pause(5)
})

basic.forever(function () {
    if (randint(0, 300) == 0) {
        basic.showNumber(musicDetector.period)
    } else {
        led.plotBarGraph(micLoudness,255)
    }
})
```

示例程序可从以下下载

[https://makecode.microbit.org/_0qMPvR9cjRu5](https://makecode.microbit.org/_0qMPvR9cjRu5)

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_0qMPvR9cjRu5"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

### B. MakeCode友好的节拍检测器（公共项目）
如果你在编写普通的MakeCode项目，自己实现一个简单的节拍检测器：

```js

let lastBeatMs = 0
let periodMs = 500
let threshold = 140

function onBeat(now: number): void {
    // 周期估计（平滑）
    const newPeriod = now - lastBeatMs
    if (newPeriod > 150 && newPeriod < 2000) {
        periodMs = (periodMs * 3 + newPeriod) / 4
    }
    lastBeatMs = now
}

basic.forever(function () {
    const now = control.millis()
    const s = input.soundLevel()

    // 冷却时间防止双重触发
    if (s > threshold && (now - lastBeatMs) > periodMs * 0.4) {
        onBeat(now)
        led.toggle(2, 2)
    }
})

```

## 技术解释

### A. 节拍检测
从响度检测节拍通常是：

- 测量响度
- 检测峰值（超过阈值）
- 添加冷却时间（防止一次击打计数两次）

## 峰值检测（局部最大值+迟滞）

最简单的检测器使用单一阈值：

- `if (s > threshold) => beat`

但在真实音频中，一个节拍"击打"通常在几个采样中保持响亮，可能会产生双重触发。

更稳健的方法是**峰值检测**：

- 寻找**局部最大值**（上升然后下降）
- 使用**迟滞**（高阈值触发，低阈值重新激活）
- 仍然保留**冷却时间**作为安全网

当你子采样到桶中时（例如 `BUCKET_MS = 50` 或 `80`），这种方法特别有效。

示例：分桶峰值检测器

```js

const BUCKET_MS = 50

let thresholdHigh = 160
let thresholdLow = 120

let lastBeatMs = 0
let periodMs = 500

let armed = true

let s2 = 0
let s1 = 0
let s0 = 0

function onBeat(now: number): void {
    const newPeriod = now - lastBeatMs
    if (newPeriod > 150 && newPeriod < 2000) {
        periodMs = (periodMs * 3 + newPeriod) / 4
    }
    lastBeatMs = now
    led.toggle(2, 2)
}

basic.forever(function () {
    basic.pause(BUCKET_MS)
    const now = control.millis()

    // 移位样本：s2（旧） <- s1 <- s0（新）
    s2 = s1
    s1 = s0
    s0 = input.soundLevel()

    // s1处局部最大值：上升然后下降
    const isPeak = (s1 > s2) && (s1 >= s0)

    // 当响度回落时重新激活
    if (!armed && s1 < thresholdLow) {
        armed = true
    }

    // 仅在超过thresholdHigh的峰值上触发
    if (armed && isPeak && s1 > thresholdHigh) {
        // 冷却时间（也可避免噪声误报）
        if (now - lastBeatMs > periodMs * 0.4) {
            armed = false
            onBeat(now)
        }
    }
})

```
**注意：**

- 首先调整 `thresholdHigh` 直到它在真实节拍上触发。
- 将 `thresholdLow` 设置得比 `thresholdHigh` 低，使检测器仅在声音下降后重新激活。
- 如果你看到接近300 BPM的快速节拍被错过，减少 `BUCKET_MS`。

`MusicLib` 通过使用环形缓冲区和自适应阈值更稳健地做到这一点。

## 环形缓冲区（循环缓冲区）模式

环形缓冲区仅存储最近N个样本：

- 固定内存（不会增长）
- 非常适合平滑/降噪
- 在 `MusicLib` 内部用于保持最近音频能量的窗口

以下是一个用于节拍周期的最小环形缓冲区，以及用于稳定BPM的移动平均。

```js

const RB_SIZE = 8
let rb: number[] = [0, 0, 0, 0, 0, 0, 0, 0]
let rbIndex = 0
let rbCount = 0

function rbPush(value: number): void {
    rb[rbIndex] = value
    rbIndex = (rbIndex + 1) % RB_SIZE
    rbCount = Math.min(RB_SIZE, rbCount + 1)
}

function rbAverage(): number {
    if (rbCount == 0) return 0
    let sum = 0
    for (let i = 0; i < rbCount; i++) {
        sum += rb[i]
    }
    return sum / rbCount
}

let lastBeatMs2 = 0

function onBeat2(now: number): void {
    const p = now - lastBeatMs2
    lastBeatMs2 = now
    if (p > 150 && p < 2000) {
        rbPush(p)
    }
}

basic.forever(function () {
    const now = control.millis()
    const s = input.soundLevel()

    if (s > threshold && (now - lastBeatMs2) > 150) {
        onBeat2(now)
    }
})

input.onButtonPressed(Button.B, function () {
    const avgPeriod = rbAverage()
    if (avgPeriod > 0) {
        basic.showNumber(Math.round(60000 / avgPeriod))
    } else {
        basic.showNumber(0)
    }
})

```
**注意：**

- 这是一个也可以复用于响度窗口的模式（存储最近的 `soundLevel()` 样本）。
- 如果你想要加权平均（最近的样本权重更大），稍微增加环形缓冲区大小并在求和中应用权重。

### B. 速度估算
一旦你有了估计的节拍周期：

- `BPM ≈ 60000 / periodMs`

示例（按按钮A显示BPM）：

```js
input.onButtonPressed(Button.A, function () {
    const bpm = Math.round(60000 / periodMs)
    basic.showNumber(bpm)
})
```
### C. 同步运动（让Robot PU看起来有艺术感）
关键技巧是**节拍时钟**：

- 在拍子上做大动作（重拍）
- 在拍子之间做较小的运动
- 每N拍改变风格

示例：在每个拍子上"弹跳"，否则继续跳舞。
```js
let beatCount = 0

function onBeatMotion(): void {
    beatCount += 1

    // 大的重音动作
    for (let i = 0; i < 120; i++) {
        robotPu.jump()
    }

    // 每8拍改变风格
    if (beatCount % 8 == 0) {
        robotPu.talk("yeah")
    }
}

basic.forever(function () {
    const now = control.millis()
    const s = input.soundLevel()

    if (s > threshold && (now - lastBeatMs) > periodMs * 0.4) {
        onBeat(now)
        onBeatMotion()
    } else {
        // 拍子之间：持续运动
        robotPu.dance()
    }
})
```
**注意：**

- `robotPu.dance()` 内部已经对音乐有反应，但添加你自己的节拍时钟让你可以设计编舞。
- 如果跳跃太剧烈，替换为短促的 `walk(...)`、`sideStep(...)` 或 `stand()`。

## 测试

- **节拍测试**

- 播放有清晰节拍的音乐（或拍手）

- 确认节拍指示器（LED切换/条形图）每拍仅触发一次

- **速度测试**

- 按按钮A显示BPM

- 验证BPM稳定（不要大幅跳动）

- **艺术同步测试**

- 运行"在拍子上弹跳"示例

- 调整 `threshold` 直到机器人在拍子上可靠地移动

### 后续步骤
- **调整阈值**适应不同环境（安静房间vs嘈杂房间）
- **自适应阈值**：跟踪背景噪声并自动设置阈值
- **不同编舞**：在弱拍上摆动头/腰，在重拍上做步伐重音
- **更多功能**：检测"drop"（突然响度增加）来切换舞蹈套路
