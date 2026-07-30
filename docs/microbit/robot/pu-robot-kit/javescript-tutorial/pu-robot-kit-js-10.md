---
sidebar_position: 10
sidebar_label: 10:Robot PU与小黄人
---

# 10:Robot PU与小黄人

## 课程：Robot PU小黄人合唱四重奏（通过无线电通道的4个音轨）
### 引言
本课将**四台Robot PU**变成一个"小黄人合唱四重奏"。

每台机器人演奏**一个声部**，声部根据机器人的**无线电通道编号**自动选择。

你可以排好多个Robot PU，通过更改通道快速分配不同的声部。

### 知识点：

[https://makecode.microbit.org/reference/radio](https://makecode.microbit.org/reference/radio)

[https://en.wikipedia.org/wiki/Synchronization_(computer_science)](https://en.wikipedia.org/wiki/Synchronization_(computer_science))

### 问题定义

我们希望一种简单的方式来协调多台机器人：

- 每台Robot PU恰好演奏**4**个歌曲声部中的一个
- 选择是确定性的且易于配置
- 机器人可以共享相同的代码，但根据其**无线电通道**表现出不同的行为

### 基本解决思路
- **4个音轨：** 实现 `track1()`、`track2()`、`track3()`、`track4()`。
- **通道→音轨映射：** 使用：`trackIndex = robotPu.channel() % 4`，将通道映射如下：
    - channel % 4 == 0 → track1
    - channel % 4 == 1 → track2
    - channel % 4 == 2 → track3
    - channel % 4 == 3 → track4
- **快速分配：** 使用按钮更改无线电通道，然后按标志按钮开始演唱映射的声部。

### 实现
将此程序复制到你的MakeCode **JavaScript** 编辑器中。

运行前注意事项：

- 按钮**A**增加通道。
- 按钮**B**减少通道。
- **标志按钮**启动由 `channel % 4` 选择的歌声。
- `robotPu.greet()` 初始化Robot PU。

```js
function track3 () {
   music.rest(music.beat(BeatFraction.Breve))
   // ... (大量 music.playTone 内容保持不变)
   started = 0
}

function track4 () {
   started = 1
   // ... (大量 music.playTone 内容保持不变)
   started = 0
}
function track1 () {
   music.rest(music.beat(BeatFraction.Breve))
   // ... (大量 music.playTone 内容保持不变)
   started = 0
}
function track2 () {
   music.rest(music.beat(BeatFraction.Breve))
   // ... (大量 music.playTone 内容保持不变)
   started = 0
// 按按钮B向后转圈行走
input.onButtonPressed(Button.B, function () {
   robotPu.changeChannel(-1)
})
// 监听无线电键值对命令
radio.onReceivedValue(function (name, value) {
   robotPu.runKeyValueCommand(name, value)
})
// 按标志按钮使用set mode跳舞
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
   track = robotPu.channel() % 4
   if (track == 0) {
       track1()
   } else if (track == 1) {
       track2()
   } else if (track == 2) {
       track3()
   } else {
       track4()
   }
})
let track = 0
let started = 0
// 通过问候初始化机器人
robotPu.greet()
```
示例程序可从 [https://makecode.microbit.org/S24031-00421-18959-80697](https://makecode.microbit.org/S24031-00421-18959-80697) 下载


### 完整四重奏原声模板（男高音/口哨/男中音/贝斯）
本节提供一个**可运行**的四重奏"原声"模板（4个独立声部），使用 `music.playTone(...)`。

使用的映射：

- `track = 0` = 男高音独奏（旋律）
- `track = 1` = 口哨
- `track = 2` = 男中音
- `track = 3` = 贝斯

使用的速度/时间设置：

- `music.setTempo(...)`（参见下方MIDI注释）
- 时长以毫秒表示在 `tracksDursMs[]` 中

要将此与上述同步方法一起使用：

- 保留现有的 `radio` 处理程序。
- 将你想要的音符序列填入 `tracksFreqs[]` 和 `tracksDursMs[]`。

继续转录工作流程（可重复）：

对于每个声部（男高音/口哨/男中音/贝斯），**逐小节**进行。
对于每个小节，追加到 `tracksFreqs[trackId]` 和 `tracksDursMs[trackId]`。
使用频率 `0` 表示休止。

```js
robotPu.setChannel(166)
// 在此处设置你的速度。下面的MIDI提取脚本使用此BPM将tick转换为毫秒。
music.setTempo(120)
music.setVolume(255)
let track = 0
let started = 0

function playTrack(freqs: number[], dursMs: number[]) {
    for (let i = 0; i < freqs.length; i++) {
        if (freqs[i] <= 0) music.rest(dursMs[i])
        else music.playTone(freqs[i], dursMs[i])
    }
}

// (... 完整的 tracksFreqs 和 tracksDursMs 数组保持不变 ...)

function playSelectedTrack () {
    const n = tracksFreqs.length
    if (n <= 0) return
    const idx = ((track % n) + n) % n
    started = 1
    playTrack(tracksFreqs[idx], tracksDursMs[idx])
    started = 0
}

// (... 其余代码保持不变 ...)
```
<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_X4wcbC4Akaai"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

也可以从此处下载：[https://makecode.microbit.org/_fq9VkJYgY8qM](https://makecode.microbit.org/_fq9VkJYgY8qM)

上传到4台Robot PU的micro:bit。按micro:bit的按钮A或B将每台Robot PU的音轨设置为0,1,2,3。

然后将此游戏手柄程序加载到游戏手柄的micro:bit：[https://makecode.microbit.org/_Lp31Ec4tXXM8](https://makecode.microbit.org/_Lp31Ec4tXXM8)

当你将游戏手柄面朝下时，4台Robot PU的合唱将开始。

### 使用GenAI为任何四重奏歌曲生成 `freqs[]` + `durs[]`

只需在Microsoft Copilot中使用以下提示：

---
let tracksFreqs: number[][] = []
let tracksDursMs: number[][] = []
---
提示：生成一个约60秒的合唱四重奏，类似于小黄人香蕉歌。使用javascript，将频率打包为tracksFreqs作为number[][]，将持续时间打包为tracksDursMs作为number[][]

然后，从Copilot输出中复制粘贴代码以替换上面的代码。

以下是示例。
```js
// (... 完整的示例代码保持不变，包含男高音/口哨/男中音/贝斯四声部 ...)
```

另一个示例：

```js
// (... 第二个完整的示例代码保持不变 ...)
```
### 从MIDI文件生成 `freqs[]` + `durs[]`（推荐）
如果你的项目根目录中有 `Minions Banana Song.mid`，你可以直接从MIDI生成可粘贴的数组。

此仓库中的MIDI有4个音轨（每个通道一个）：

Track 0: 电钢琴（经典）
Track 1: 大钢琴
Track 2: 音乐盒
Track 3: 原声吉他（经典）
建议的四重奏声部映射：

男高音独奏 = Track 3（原声吉他）
口哨 = Track 2（音乐盒）
男中音 = Track 0（电钢琴）
贝斯 = Track 1（大钢琴）
在本地运行以下命令以打印可粘贴到 `tracksFreqs[]` / `tracksDursMs[]` 的数组：
```js
.venv/bin/python - <<'PY'
import mido
// (... Python MIDI 提取脚本保持不变 ...)
PY
```
**注意：**

- 此提取是单声道的（一次一个音符）。如果MIDI音轨包含和弦，将保留最高的音符。
- 如果你想要不同的映射，在 `mapping` 中交换音轨编号。

### 技术解释

**A. 为什么"channel % 4"有效**

`robotPu.channel()` 返回当前无线电组ID。

使用取模运算：

- 保持映射稳定
- 允许你使用任何通道号（0–255）
- 保证你始终落在4个音轨之一

这是在相同设备间分配角色的常用技术。

**B. 音轨如何触发**

代码仅在你按下**标志按钮**时触发音轨：

- 读取 `robotPu.channel()`
- 计算 `track = channel % 4`
- 根据值调用 `track1..track4()`

按钮A/B只更改通道；它们不开始演唱。

**C. 无线电监听器**

此程序还注册了：

- `radio.onReceivedString(...)` → `robotPu.runStringCommand(...)`
- `radio.onReceivedValue(...)` → `robotPu.runKeyValueCommand(name, value)`

因此你可以在准备四重奏的同时通过无线电控制Robot PU。

### 测试

**A. 单机器人测试**

将程序烧录到一台Robot PU。

按**A**几次更改通道。

按**标志按钮**开始演唱。

验证当 `channel % 4` 变化时你得到不同的音轨。

**B. 四重奏测试（4台机器人）**

- 将相同的程序烧录到**4台Robot PU**。

- 将每台机器人设置为不同的通道组，使 `channel % 4` 不同：

    - 机器人1：通道0（track1）
    - 机器人2：通道1（track2）
    - 机器人3：通道2（track3）
    - 机器人4：通道3（track4）

- 按每台机器人的**标志按钮**开始各自的声部。

提示：

- 如果音轨开始时间很重要，尝试倒数并一起按下标志按钮。

### 后续步骤
- **通过无线电同步开始时间**
    - 从控制器micro:bit广播单个"START"消息
    - 所有机器人在收到消息时开始各自的音轨
- **添加编舞**
    - 在节拍边界调用 robotPu.dance() / robotPu.walk(...) 让合唱看起来更生动
- **添加指挥界面**
    - 一个独立的micro:bit用于分配通道并广播开始/停止命令

### 同步方法（实用选项）
当多台机器人必须一起开始一首歌时，有几种常见的同步策略。每种在复杂度与精度之间都有权衡。

**A. 手动倒数（最简单）**

- 有人数"3, 2, 1, 开始"，所有人按下标志按钮。

- 适用于演示，但人类会引入较大的计时误差。

**B. 无线电START触发（好）**

- 指挥micro:bit发送单个无线电消息如 `START`。

- 每台机器人在收到消息时开始。

- 比人类好，但机器人之间仍可能有小的到达时间差异。

**指挥代码（发送START）**
```js
radio.setGroup(166)

input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendString("START")
})
```
**机器人代码（接收时开始）**

将此粘贴到四重奏程序底部附近（注册无线电处理程序的地方）。

```js
radio.setGroup(166)

radio.onReceivedString(function (msg: string) {
    if (msg == "START") {
        // 选择角色并立即开始
        track = robotPu.channel() % 4
        if (track == 0) track1()
        else if (track == 1) track2()
        else if (track == 2) track3()
        else track4()
    }
})
```
### C. 按时间戳开始（micro:bit上最佳）

- 指挥发送**未来开始时间**，如 startAt = control.millis() + 800。
- 每台机器人等待直到自己的 control.millis() 达到 startAt 才开始。
- 即使无线电数据包到达时间略有不同，机器人仍能一起开始。

为什么比 `START` 更好：

- 无线电数据包传递时间会变化。共享的未来时间戳使开始时间具有确定性。
- 你还可以在开始前发送速度和其他"设置"。

最小指挥示例：

```js
radio.setGroup(166)

input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    const startAt = control.millis() + 800
    radio.sendValue("startAt", startAt)
})
```
最小机器人示例：
```js
radio.setGroup(166)
let startAt = -1

radio.onReceivedValue(function (name: string, value: number) {
    if (name == "startAt") {
        startAt = value
        control.inBackground(function () {
            while (control.millis() < startAt) {
                basic.pause(5)
            }
            track = robotPu.channel() % 4
            if (track == 0) track1()
            else if (track == 1) track2()
            else if (track == 2) track3()
            else track4()
        })
    }
})
```
### D. 速度/节拍一致（重要）
即使同步开始了，如果机器人不共享相同的速度，它们也可能漂移。

- 指挥广播速度如 `bpm=120`。
- 机器人在开始前调用 `music.setTempo(bpm)`。

**指挥代码（广播BPM）**
```js
radio.setGroup(166)
let bpm = 120

input.onButtonPressed(Button.A, function () {
    bpm += 5
})

input.onButtonPressed(Button.B, function () {
    bpm -= 5
})

input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    bpm = Math.max(60, Math.min(200, bpm))
    radio.sendValue("bpm", bpm)
})
```
**机器人代码（应用BPM）**
```js
let bpm = 120

radio.onReceivedValue(function (name: string, value: number) {
    if (name == "bpm") {
        bpm = value
        music.setTempo(bpm)
    }
})
```
提示：

- 如果你使用**按时间戳开始**，先发送 `bpm`，再发送 `startAt`。

### E. 重同步/"小节信标"（可选）
对于长歌曲，你可以定期广播"小节编号"或"拍号"，以便所有人可以纠正漂移。

简单模式：

- 指挥每小节发送一个 `barStartAt` 时间戳。
- 机器人重新对齐到最新的 `barStartAt`（小幅修正）并继续。

**指挥代码（小节信标循环）**
```js
radio.setGroup(166)

let bpm = 120
let running = false

function barMs(): number {
    return Math.idiv(60000, bpm) * 4
}

input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    running = !running
})

basic.forever(function () {
    if (!running) {
        basic.pause(50)
        return
    }

    const now = control.millis()
    const barStartAt = now + 200
    radio.sendValue("barStartAt", barStartAt)
    basic.pause(barMs())
})
```
**机器人代码（使用小节信标）**
```js
let barStartAt = -1

radio.onReceivedValue(function (name: string, value: number) {
    if (name == "barStartAt") {
        barStartAt = value
    }
})

// 在你的音轨代码中，偶尔检查 barStartAt 并修正时间。
// 一种简单的方法是在开始 *下一* 乐句/小节之前等待 barStartAt。
```
**注意：**

如果你也将音轨代码变成"小节感知"（拆分为乐句），重同步最有用。
对于这个四重奏示例（预写的 `music.playTone(...)` 序列），重同步更难，除非你将音轨重构为小节大小的块。

### F. 领导者/跟随者（指挥）模式
如果你想让一台机器人充当"领导者"而不是单独的指挥micro:bit：

- 选一台Robot PU作为**领导者**。
- 领导者广播 `bpm` 和 `startAt`。
- 跟随者监听并开始。

领导者可以通过通道选择，例如：

- 如果 `robotPu.channel() % 4` == 0 则为领导者

**领导者代码片段（广播）**

```js
radio.setGroup(166)
let bpm = 120

function amLeader(): boolean {
    return (robotPu.channel() % 4) == 0
}

input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (!amLeader()) return
    radio.sendValue("bpm", bpm)
    radio.sendValue("startAt", control.millis() + 800)
})
```
跟随者使用上述方法C/D中显示的相同接收逻辑。

### 同步的小黄人合唱：一个指挥+多台Robot PU
在这种模式中：

- 所有Robot PU运行相同的四重奏代码。
- 每台机器人使用 `track = robotPu.channel() % 4` 选择其声部。
- 一个指挥micro:bit同时启动所有机器人。

### A. 指挥micro:bit代码（广播速度+startAt）

将此烧录到你的指挥（游戏手柄micro:bit或任何micro:bit）。

```js
radio.setGroup(166)

let bpm = 120

input.onButtonPressed(Button.A, function () {
    bpm += 5
})

input.onButtonPressed(Button.B, function () {
    bpm -= 5
})

// 按标志按钮一起启动所有人
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    bpm = Math.max(60, Math.min(200, bpm))
    radio.sendValue("bpm", bpm)

    // 未来一点时间开始，让所有机器人都能收到数据包
    const startAt = control.millis() + 800
    radio.sendValue("startAt", startAt)
})
```
### B. Robot PU代码更改（监听startAt）
将此接收器逻辑添加到四重奏程序中（靠近注册无线电处理程序的底部）。它将**同步**启动正确的音轨。

```js
let startAt = -1
let bpm = 120

radio.onReceivedValue(function (name: string, value: number) {
    // 保留现有的:
    // robotPu.runKeyValueCommand(name, value)

    if (name == "bpm") {
        bpm = value
    } else if (name == "startAt") {
        startAt = value
        control.inBackground(function () {
            // 在开始前应用共享速度
            music.setTempo(bpm)

            // 等待直到约定的开始时间
            while (control.millis() < startAt) {
                basic.pause(5)
            }

            // 选择角色并开始该声部
            track = robotPu.channel() % 4
            if (track == 0) track1()
            else if (track == 1) track2()
            else if (track == 2) track3()
            else track4()
        })
    }
})
```
**注意：**

- `control.inBackground(...)` 防止无线电回调阻塞。
- 使用 `startAt` 比"接收时立即开始"更可靠。
- 如果你已经使用 `radio.onReceivedValue` 进行 `robotPu.runKeyValueCommand(...)`，将逻辑合并到一个处理程序中。

### 测试清单
- 将四重奏代码烧录到所有Robot PU。
- 设置每台机器人的通道使 `channel % 4` 覆盖 0,1,2,3。
- 将指挥代码烧录到控制器micro:bit。
- 在指挥上按标志按钮，确认所有机器人同时开始。
