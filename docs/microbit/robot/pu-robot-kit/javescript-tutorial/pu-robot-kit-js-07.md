---
sidebar_position: 7
sidebar_label: 7:Robot PU传感器（观测篇）
---

# 7:Robot PU传感器（观测篇）

## Robot PU通过以下组合"感知"世界：

- micro:bit内置传感器（IMU、按钮、麦克风）
- Robot PU附加传感器（超声波声呐）
本课展示你可以使用哪些传感器API，以及如何构建简单的观测行为。

知识点

[https://makecode.microbit.org/types](https://makecode.microbit.org/types)

[https://makecode.microbit.org/javascript/types](https://makecode.microbit.org/javascript/types)

[https://arcade.makecode.com/types](https://arcade.makecode.com/types)

[https://microbit.org/get-started/features/sensors/](https://microbit.org/get-started/features/sensors/)


### 1. 有哪些传感器可用？
#### A. micro:bit运动传感器（IMU）

micro:bit具有加速度计（以及磁力计，取决于板卡/运行时）。在MakeCode中，你可以使用以下方式读取运动数据：

- `input.isGesture(Gesture.FreeFall)`
- `input.isGesture(Gesture.Shake)`
- `input.rotation(Rotation.Roll)` / `input.rotation(Rotation.Pitch)`
Robot PU内部使用FreeFall（自由落体）检测作为其安全行为的一部分（参见扩展中的updateStates()逻辑）。

#### B. micro:bit按钮
- `input.onButtonPressed(Button.A, ...)`
- `input.onButtonPressed(Button.B, ...)`
- `input.onButtonPressed(Button.AB, ...)`
按钮在手动控制/测试中非常有用。

#### C. micro:bit麦克风（声音强度）
- `input.soundLevel()` 返回0–255的值
Robot PU在某些行为中使用声音强度（例如，一些舞蹈/休息行为会对音频做出反应）。

#### D. 超声波声呐（距离）
Robot PU包含HCSR04超声波传感器接口。在此扩展中，你可以使用以下方式读取：
- `robotPu.sonarDistanceCm()`
接线说明（扩展使用的默认引脚）：
触发：`P2`
回波：`P8`

### 2. 示例：在LED显示屏上显示声呐距离

``` js
 basic.forever(function () {
     const cm = robotPu.sonarDistanceCm()
     basic.showNumber(Math.round(cm))
     basic.pause(200)
 })
 ```


### 3. 示例：障碍物停止/后退（声呐）
这是一个简单的反应式行为：

- 如果有物体太近，停止并后退/转向
- 否则，继续向前走

```js
 basic.forever(function () {
     const cm = robotPu.sonarDistanceCm()

     if (cm > 0 && cm < 20) {
         // 太近：转向避开
         for (let i = 0; i < 200; i++) {
             robotPu.walk(-2, 0)
         }
         for (let i = 0; i < 200; i++) {
             robotPu.walk(2, 0.8)
         }
     } else {
         // 畅通：向前走
         robotPu.walk(2, 0)
     }
 })
 ```
**注意：**

**`robotPu.walk(...)`是一个当你重复调用时会持续前进的动作。**
**声呐读数可能有噪声；如果出现抖动，考虑取平均值。**

### 4. 示例：跌落/自由落体安全响应（IMU）
micro:bit可以检测自由落体手势。

你可以使用它来停止运动并恢复到安全姿态：


``` js
 basic.forever(function () {
     if (input.isGesture(Gesture.FreeFall)) {
         // 尝试停止运动并恢复姿态
         for (let i = 0; i < 200; i++) {
             robotPu.stand()
         }
     } else {
         robotPu.walk(2, 0)
     }
 })
```

### 5. 示例：拍手跳（麦克风）
```js
 basic.forever(function () {
     const s = input.soundLevel()
     if (s > 140) {
         // 跳一下（重复调用直到看到完成边界）
         for (let i = 0; i < 200; i++) {
             robotPu.jump()
         }
     }
 })
```


### 6. 示例：通过无线电发送前方距离数组（键值对）

本示例使用**两个micro:bit**：

- Robot PU micro:bit = **发送方**
- 游戏手柄 micro:bit = **接收方**

发送方使用`radio.sendValue(key, value)`传输5个数值。

#### A. 发送方（Robot PU）代码
```js
radio.onReceivedString(function (receivedString) {
    robotPu.runStringCommand(receivedString)
})
radio.onReceivedValue(function (name, value) {
    robotPu.runKeyValueCommand(name, value)
})
let d: number[] = []
robotPu.setChannel(166)
basic.forever(function () {
    d = robotPu.frontDistanceArray()
    radio.sendValue("fd0", d[0])
    radio.sendValue("fd1", d[1])
    radio.sendValue("fd2", d[2])
    radio.sendValue("fd3", d[3])
    radio.sendValue("fd4", d[4])
    radio.sendValue("broll", robotPu.bodyRoll())
    radio.sendValue("bpitch", robotPu.bodyPitch())
    basic.pause(100)
})
```
**注意：**

- `robotPu.frontDistanceArray()`返回5个区间值，从左到右覆盖前方视野。
- 如果你在其他地方已经使用特定的无线电组/通道，请保持两台设备一致。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_4Lt19v4b6hwx"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>



### B. 接收方（游戏手柄）代码

接收方监听5个键值，并在5×5 LED显示屏上绘制**5列**图形。

```js
radio.setGroup(166)

 let d: number[] = [0, 0, 0, 0, 0]
 let minD = 0

 function clampInt(x: number, lo: number, hi: number): number {
     if (x < lo) return lo
     if (x > hi) return hi
     return x
 }

 function updateMinDistance(): void {
     minD = d[0]
     for (let i = 1; i < 5; i++) {
         if (d[i] < minD) minD = d[i]
     }
 }

function drawDistances () {
    basic.clearScreen()
    for (let x2 = 0; x2 <= 4; x2++) {
        h = Math.map(d[x2], 2, 50, 5, 0)
        for (let y2 = 4; y2 >= h; y2--) {
            led.plot(x2, y2)
        }
    }
}

 radio.onReceivedValue(function (name: string, value: number) {
     if (name == "fd0") d[0] = value
     else if (name == "fd1") d[1] = value
     else if (name == "fd2") d[2] = value
     else if (name == "fd3") d[3] = value
     else if (name == "fd4") d[4] = value
 })

 basic.forever(function () {
     const distance = clampInt(minD, 0, 100)

     // 越近 = 频率越高
     let pitch = Math.map(distance, 2, 100, 2000, 200);

     // 越近 = 蜂鸣越快
     let pulseDelay = Math.map(distance, 2, 100, 100, 800);

     // 播放乒声
     music.playTone(pitch, 50);

     // 等待下一次脉冲
     basic.pause(pulseDelay);
 })

```

**注意：**

- LED可视化将距离（0–100cm）映射为列高度。
- 你可以通过更改`100`cm最大范围来调整显示映射。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_cMF7t5PRRPer"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>


### 7. 总结

- 使用 `robotPu.sonarDistanceCm()` 以厘米为单位测量距离。
- 使用 `input.isGesture(…)` 和 `input.rotation(…)` 进行运动感知。
- 使用 `input.soundLevel()` 实现声音反应行为。
- 在测试期间使用按钮进行简单的手动触发。
