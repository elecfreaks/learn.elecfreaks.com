---
sidebar_position: 9
sidebar_label: 9:Robot PU与音乐
---

# 9:Robot PU与音乐

## 课程：micro:bit上的音乐理论（节奏、速度、音高、音阶、和弦）
本课使用 `music.playTone()` 播放声音的小型MakeCode JavaScript程序来教授**音乐理论**。

### 知识点

[https://makecode.microbit.org/reference/music/](https://makecode.microbit.org/reference/music/)

[https://makecode.microbit.org/blocks/math](https://makecode.microbit.org/blocks/math)

[https://arcade.makecode.com/courses/csintro3/intro/math](https://arcade.makecode.com/courses/csintro3/intro/math)

[https://makecode.microbit.org/types/number](https://makecode.microbit.org/types/number)

[https://en.wikipedia.org/wiki/Octave](https://en.wikipedia.org/wiki/Octave)

[https://en.wikipedia.org/wiki/Chord_(music)](https://en.wikipedia.org/wiki/Chord_(music))

重要限制：

- 内置音调输出通常为**单音**（一次一个频率）。
- micro:bit麦克风仅通过 `input.soundLevel()`（0–255）提供**响度（振幅）**。没有额外的音频硬件+DSP，你通常**无法从内置麦克风检测真实的音高/音符**。

### 为什么音乐是数学
音乐感觉像艺术，但我们听到的很多东西可以用数字和模式来描述：

- **节奏是时间的分数**
    - 音符有时长，如全音符、二分音符、四分音符、八分音符。
    - 这只是将时间划分为相等的部分（例如，2个八分音符等于1个四分音符）。
- **速度是速率**
    - 以BPM（每分钟节拍数）表示的速度就是"60秒内有多少拍"。
    - 如果你能估算拍间的时间（periodMs），就可以用 60000 / periodMs 计算BPM。
- **音高是频率（通常是比率）**
    - 一个音符是在某个频率上振动的声波（如A4为440 Hz）。
    - 音乐音程是比率：频率翻倍听起来像是"同一个音符"高了一个八度。
- **歌曲使用模式**
    - 重复的节拍、重复的和弦进行和重复的段落（主歌/副歌）都是模式+时序。
    - 这就是为什么简单的数据结构（持续时间数组、循环和平均值）对音乐分析有用。

## 1. 音乐理论练习册（micro:bit + `music.playTone()`）
本节通过小型程序教授核心音乐理论，你可以在micro:bit上运行。因为 `music.playTone()` 是**一次一个频率**，我们将把和声（和弦）视为**琶音/扫弦**。

### 1.1. 设置辅助函数（音高+时序）
```js

// 等律调音辅助函数
function midiToHz(n: number): number {
    return 440 * Math.pow(2, (n - 69) / 12)
}

// 速度辅助函数
function bpmToBeatMs(bpm: number): number {
    return 60000 / bpm
}

```
### 1.2. 节奏：节拍、音符时长和模式
将音符时长视为节拍的分数：

- `1.0` = 1拍（四分音符）
- `0.5` = 半拍（八分音符）
- `2.0` = 2拍（二分音符）

**示例：每4拍有重音的节拍器**

```js

const bpm = 120
const beatMs = bpmToBeatMs(bpm)
let beat = 0

basic.forever(function () {
    const accent = (beat % 4 == 0)
    music.playTone(accent ? 880 : 440, 40)
    basic.pause(Math.round(beatMs - 40))
    beat++
})

```
**示例：简单的鼓点模式（使用低/高音模拟底鼓/军鼓）**

```js

const bpm = 110
const beatMs = bpmToBeatMs(bpm)

// 16步模式（4拍，每步为16分音符）
// 1 = 播放，0 = 休止
const kick: number[]  = [1,0,0,0,  0,0,1,0,  1,0,0,0,  0,1,0,0]
const snare: number[] = [0,0,0,0,  1,0,0,0,  0,0,0,0,  1,0,0,0]

for (let bar = 0; bar < 4; bar++) {
    for (let step = 0; step < 16; step++) {
        if (kick[step]) music.playTone(120, 30)
        if (snare[step]) music.playTone(330, 30)
        basic.pause(Math.round(beatMs / 4))
    }
}

```
### 1.3. 音高：频率、八度和移调
以下是micro:bit上易于演奏的常用音阶参考表。频率四舍五入到整Hz（对 `music.playTone()` 来说足够好了）。

| 音阶（C大调） | MIDI | 频率（Hz） |
|-----------------|------|----------------|
| C4              | 60   | 262            |
| D4              | 62   | 294            |
| E4              | 64   | 330            |
| F4              | 65   | 349            |
| G4              | 67   | 392            |
| A4              | 69   | 440            |
| B4              | 71   | 494            |
| C5              | 72   | 523            |

**示例：从表格播放音阶**

```js

const cMajorMidi: number[] = [60, 62, 64, 65, 67, 69, 71, 72]
for (let i = 0; i < cMajorMidi.length; i++) {
    music.playTone(Math.round(midiToHz(cMajorMidi[i])), 220)
    basic.pause(20)
}

```
**示例：使用 `2^(1/12)` 播放半音阶**

```js

const start = 60 // C4
for (let i = 0; i <= 12; i++) {
    const hz = Math.round(midiToHz(start + i))
    music.playTone(hz, 180)
    basic.pause(20)
}

```
**示例：将旋律移调N个半音**
```js

const melody: number[] = [60, 62, 64, 67, 64, 62, 60] // C D E G E D C
const transpose = 5 // 向上纯四度

for (let i = 0; i < melody.length; i++) {
    const hz = Math.round(midiToHz(melody[i] + transpose))
    music.playTone(hz, 180)
    basic.pause(20)
}

```
### 1.4. 音程：半音距离
音程是两个音符之间"相差多少个半音"。

**示例：音程训练器（按A听，按B显示数字）**
```js
const root = 60 // C4
let interval = 0

input.onButtonPressed(Button.A, function () {
    interval = Math.randomRange(0, 12)
    music.playTone(Math.round(midiToHz(root)), 250)
    basic.pause(50)
    music.playTone(Math.round(midiToHz(root + interval)), 250)
})

input.onButtonPressed(Button.B, function () {
    basic.showNumber(interval)
})
```
### 1.5. 音阶和调性
使用音阶步骤（以半音为单位）保持在"调内"。

**示例：C大调音阶（度数1..7）**
```js
const majorScale: number[] = [0, 2, 4, 5, 7, 9, 11]
const root = 60 // C4

for (let i = 0; i < majorScale.length; i++) {
    music.playTone(Math.round(midiToHz(root + majorScale[i])), 200)
    basic.pause(20)
}
music.playTone(Math.round(midiToHz(root + 12)), 250)
```
**示例：自然小调音阶（A小调）**
```js
const naturalMinor: number[] = [0, 2, 3, 5, 7, 8, 10]
const root = 57 // A3

for (let i = 0; i < naturalMinor.length; i++) {
    music.playTone(Math.round(midiToHz(root + naturalMinor[i])), 200)
    basic.pause(20)
}
music.playTone(Math.round(midiToHz(root + 12)), 250)
```
**示例：五声音阶和布鲁斯音阶（非常适合即兴创作）**
```js
const majorPentatonic: number[] = [0, 2, 4, 7, 9]
const minorPentatonic: number[] = [0, 3, 5, 7, 10]
const blues: number[] = [0, 3, 5, 6, 7, 10]

const root = 60 // C4
const scale = blues

for (let i = 0; i < 24; i++) {
    const idx = Math.randomRange(0, scale.length - 1)
    const octave = (Math.randomRange(0, 5) == 0) ? 12 : 0
    const midi = root + scale[idx] + octave
    music.playTone(Math.round(midiToHz(midi)), 150)
    basic.pause(20)
}
```
**示例：从随机音阶度数生成旋律**
```js
const majorScale: number[] = [0, 2, 4, 5, 7, 9, 11]
const root = 60 // C4
const bpm = 120
const beatMs = bpmToBeatMs(bpm)

for (let i = 0; i < 32; i++) {
    const degree = Math.randomRange(0, 6)
    const octave = (Math.randomRange(0, 4) == 0) ? 12 : 0
    const midi = root + majorScale[degree] + octave
    music.playTone(Math.round(midiToHz(midi)), Math.round(beatMs * 0.5))
    basic.pause(10)
}
```
### 1.6. 和弦与进行（micro:bit风格）
和弦是同时演奏多个音符。由于 `music.playTone()` 一次只能一个频率，你通常通过**琶音**（快速依次演奏音符）或**扫弦**（添加小间隙）来表示和弦。

**示例：和弦辅助函数（大三/小三/减/sus2/sus4）**
```js
function chordOffsets(quality: string): number[] {
    if (quality == "maj") return [0, 4, 7]
    if (quality == "min") return [0, 3, 7]
    if (quality == "dim") return [0, 3, 6]
    if (quality == "sus2") return [0, 2, 7]
    if (quality == "sus4") return [0, 5, 7]
    return [0, 4, 7]
}

function playChordArp(rootMidi: number, quality: string, noteMs: number, spacingMs: number = 0): void {
    const offs = chordOffsets(quality)
    for (let i = 0; i < offs.length; i++) {
        music.playTone(Math.round(midiToHz(rootMidi + offs[i])), noteMs)
        if (spacingMs > 0) basic.pause(spacingMs)
    }
}

playChordArp(60, "maj", 120)
basic.pause(80)
playChordArp(69, "min", 120)
```
**示例：C大调的I–V–vi–IV（C–G–Am–F）**
```js
const roots: number[] = [60, 67, 69, 65]
const qual: string[] = ["maj", "maj", "min", "maj"]

for (let bar = 0; bar < 2; bar++) {
    for (let i = 0; i < roots.length; i++) {
        // 每个和弦扫弦两次
        playChordArp(roots[i], qual[i], 120, 15)
        playChordArp(roots[i], qual[i], 120, 15)
    }
}
```
**示例：A调12小节布鲁斯**
```js
// 保持简单：使用大三和弦替代布鲁斯和声
const A = 57 // A3
const D = 62 // D4
const E = 64 // E4

const progRoots: number[] = [
    A, A, A, A,
    D, D, A, A,
    E, D, A, E
]

for (let i = 0; i < progRoots.length; i++) {
    playChordArp(progRoots[i], "maj", 110, 12)
    playChordArp(progRoots[i], "maj", 110, 12)
}
```
### 1.7. 歌曲结构：段落+重复
一种实用的写歌模式是构建"段落"（A、B、副歌）然后排序。

**示例：作为音符数组的A/B段落**
```js
const A: number[] = [60, 62, 64, 67, 64, 62, 60]
const B: number[] = [67, 69, 71, 72, 71, 69, 67]

function playSection(section: number[], bpm: number): void {
    const beatMs = bpmToBeatMs(bpm)
    for (let i = 0; i < section.length; i++) {
        music.playTone(Math.round(midiToHz(section[i])), Math.round(beatMs * 0.5))
        basic.pause(10)
    }
}

playSection(A, 120)
playSection(A, 120)
playSection(B, 120)
playSection(A, 120)
```
### 2. 总结
你可以将节奏建模为时长数组和循环。

音高映射到频率，等律调音使用 `2^((n - 69) / 12)`。

音阶和调性限制音符选择，使旋律听起来"有意图"。

micro:bit上的和弦通常表示为琶音/扫弦。

### 3. AI歌曲作曲器（思路）
"AI歌曲作曲器"不必复杂。其核心是一个程序，它：

- **选择音符**（通常随机），但仅从**音阶**或**和弦**中选择，以保持在调内。

- **选择节奏**，从一小组拍子长度中选择，使律动保持一致。

- **使用模式**，如重复、呼应与响应和段落（A/B），使其听起来像歌曲而非噪音。

在micro:bit上，你可以结合以下内容构建一个简单的作曲器：

- `Math.randomRange(...)` 用于变化
- 数组（音符、音阶步骤、时长）
- `midiToHz(...)` 辅助函数 + `music.playTone(...)`

### 4. AI作曲器：用5种音阶作为种子
一种简单的"AI作曲器"策略是让用户选择一个种子音阶，然后通过以下方式生成旋律：

- **限制音符**在该音阶内（保持连贯性）
- **复用节奏模式**（使其听起来像歌曲）
- **生成两个**段落（A和B）并播放A–A–B–A

在此示例中，"种子输入"是使用按钮**选择5种音阶中的1种**。

- 按**A**循环音阶种子（1–5）
- 按**B**作曲+播放

```js
// 5音阶种子作曲器
// 按A更改种子（1..5），按B作曲并播放。

function midiToHz(n: number): number {
    return 440 * Math.pow(2, (n - 69) / 12)
}

function bpmToBeatMs(bpm: number): number {
    return 60000 / bpm
}

// 音阶定义为半音偏移
const SCALE_NAMES: string[] = ["Major", "Natural minor", "Major pentatonic", "Minor pentatonic", "Blues"]
const SCALES: number[][] = [
    [0, 2, 4, 5, 7, 9, 11],      // 大调
    [0, 2, 3, 5, 7, 8, 10],      // 自然小调
    [0, 2, 4, 7, 9],             // 大调五声
    [0, 3, 5, 7, 10],            // 小调五声
    [0, 3, 5, 6, 7, 10]          // 布鲁斯
]

// 一致的节奏使随机音符听起来有音乐感
// 1.0 = 1拍，0.5 = 半拍
const RHYTHM: number[] = [0.5, 0.5, 1, 1, 0.5, 0.5, 1, 2]

// 从音阶中选择音符，略微偏向根音和五音
function pickScaleMidi(rootMidi: number, scale: number[]): number {
    const r = Math.randomRange(0, 9)
    let idx = 0

    if (r <= 2) idx = 0 // 根音
    else if (r == 3 && scale.length > 4) idx = 4 // 五音（如果存在）
    else idx = Math.randomRange(0, scale.length - 1)

    const octave = (Math.randomRange(0, 7) == 0) ? 12 : 0
    return rootMidi + scale[idx] + octave
}

function playMelody(rootMidi: number, scale: number[], bpm: number, bars: number): void {
    const beatMs = bpmToBeatMs(bpm)
    for (let bar = 0; bar < bars; bar++) {
        for (let i = 0; i < RHYTHM.length; i++) {
            const midi = pickScaleMidi(rootMidi, scale)
            const ms = Math.round(RHYTHM[i] * beatMs)
            music.playTone(Math.round(midiToHz(midi)), ms)
            basic.pause(10)
        }
    }
}

let seed = 0
basic.showNumber(seed + 1)

input.onButtonPressed(Button.A, function () {
    seed = (seed + 1) % 5
    basic.showNumber(seed + 1)
})

input.onButtonPressed(Button.B, function () {
    const scale = SCALES[seed]
    const bpm = 120

    // 为micro:bit扬声器/蜂鸣器选择一个舒适的寄存器
    const rootMidi = 60 // C4

    // A段落：2小节
    playMelody(rootMidi, scale, bpm, 2)
    // A段落重复
    playMelody(rootMidi, scale, bpm, 2)
    // B段落：向上移动根音（变奏）
    playMelody(rootMidi + 5, scale, bpm, 2)
    // 回到A
    playMelody(rootMidi, scale, bpm, 2)
})
```
### 5. AI作曲器（种子+旋律+和弦）
如果你想让歌曲感觉更"完整"，可以添加一个简单的**和声层**。

由于micro:bit是单音的，我们不能同时播放旋律与和弦音。相反，我们通过以下方式模拟：

- 在每小节开头（或每个乐句之前）播放快速的**和弦琶音**
- 然后播放旋律音符

和弦根音从简单的进行（I–V–vi–IV）中选择，但映射到你选择的**5种种子音阶**上。

如何使用此程序：

- **步骤1：** 创建一个新的MakeCode micro:bit项目并切换到JavaScript。
- **步骤2：** 粘贴下方完整代码（作为完整程序运行）。
- **步骤3：** 下载/烧录到micro:bit。
- **步骤4：** 按**A**选择种子音阶（LED显示1到5）。
- **步骤5：** 按**B**生成并播放带和弦+旋律的短歌。

听什么：

- 在每小节开头，你应该听到快速的**3音和弦琶音**。
- 之后，你将听到从所选音阶生成的**旋律音符**。
- 歌曲形式是**A–A–B–A**（B段落将根音向上移动以进行变奏）。

简单调整：

- 更改 `bpm` 以调整速度。
- 更改 `rootMidi` 将整首歌向上/下移动音高。
- 更改 `progression`（度数）尝试新的和弦模式。
- 更改 `RHYTHM` 数组创建不同的律动。

```js
// (...完整代码见原文...)
```
（代码内容较长，保持原样。完整代码请参考原文第5节。）

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_idAeDcTefA65"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>
