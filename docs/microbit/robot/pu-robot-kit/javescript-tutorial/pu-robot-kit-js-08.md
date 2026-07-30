---
sidebar_position: 8
sidebar_label: 8:Robot PU电机驱动（舵机+I2C）
---

# 8:Robot PU电机驱动（舵机+I2C）

## 课程：Robot PU的舵机与I2C控制

本课解释Robot PU如何使用多个舵机进行运动，为什么使用基于I2C的舵机控制器，以及扩展如何协调平滑的多舵机运动。

### 你将学到
1. 什么是舵机，Robot PU如何使用舵机进行运动。

2. Robot PU为什么通过I2C驱动舵机，而不是直接由micro:bit引脚驱动。

3. I2C基础（SDA/SCL、地址、读/写）。

4. 如何在MakeCode静态TypeScript中编程I2C。

5. 内部WK类如何协调：

    1. 渐进式舵机运动（逐步移动）以控制速度。

    2. 同时移动多个舵机。

    3. 检测运动何时完成。

### 知识点

[https://makecode.microbit.org/javascript/functions](https://makecode.microbit.org/javascript/functions)

[https://makecode.microbit.org/courses/blocks-to-javascript/writing-functions](https://makecode.microbit.org/courses/blocks-to-javascript/writing-functions)

[https://en.wikipedia.org/wiki/Function_(computer_programming)](https://en.wikipedia.org/wiki/Function_(computer_programming))

[https://makecode.microbit.org/reference/pins](https://makecode.microbit.org/reference/pins)

[https://makecode.microbit.org/v2/device/pins](https://makecode.microbit.org/v2/device/pins)

[https://en.wikipedia.org/wiki/I2C](https://en.wikipedia.org/wiki/I2C)

[https://makecode.microbit.org/reference/pins/i2c-read-number](https://makecode.microbit.org/reference/pins/i2c-read-number)

### 1. 函数：将复杂电机序列包装成一致的API
当你的机器人程序越来越大时，"原始电机命令"会变得难以阅读：

- 大量重复的 `robotPu.servo(...)` 调用
- 大量魔法数字（角度、延迟）
- 容易不小心以错误的顺序移动关节
- 解决方案是定义一小组函数，作为你自己的"迷你API"。

好的电机API的目标：

- 命名一致（`pose...`、`step...`、`do...`）
- 单位一致（角度用度，时间用毫秒）
- 关节顺序清晰（始终一致）
- 安全范围（钳制角度）

### 1.1. 关节列表辅助函数

Robot PU公共API使用 `robotPu.servo(joint, angle)` 控制单个关节。

定义一个单一的标准关节顺序并在各处复用。

```js
const JOINTS: robotPu.ServoJoint[] = [
    robotPu.ServoJoint.LeftFoot,
    robotPu.ServoJoint.LeftLeg,
    robotPu.ServoJoint.RightFoot,
    robotPu.ServoJoint.RightLeg,
    robotPu.ServoJoint.HeadYaw,
    robotPu.ServoJoint.HeadPitch
]
```

### 1.2. 钳制+姿态应用辅助函数

```js
function clampInt(x: number, lo: number, hi: number): number {
    if (x < lo) return lo
    if (x > hi) return hi
    return x
}

function applyPose(angles: number[]): void {
    const n = Math.min(JOINTS.length, angles.length)
    for (let i = 0; i < n; i++) {
        const a = clampInt(Math.round(angles[i]), 0, 180)
        robotPu.servo(JOINTS[i], a)
    }
}
```

现在你可以编写可读、一致的代码，例如：

```js
const POSE_STAND = [90, 90, 90, 90, 90, 80]
const POSE_DUCK  = [10, 150, 170, 30, 40, 125]

applyPose(POSE_STAND)
basic.pause(500)
applyPose(POSE_DUCK)
```

### 1.3. 平滑过渡（一个可复用的"移动到姿态"API）
此辅助函数以小幅增量在姿态之间插值。

``` js
function lerp(a: number, b: number, t: number): number {
    return a + (b - a) * t
}

function transitionPose(fromPose: number[], toPose: number[], steps: number, stepMs: number): void {
    const safeSteps = Math.max(1, Math.round(steps))
    for (let k = 0; k <= safeSteps; k++) {
        const t = k / safeSteps
        let pose: number[] = []
        for (let i = 0; i < JOINTS.length; i++) {
            pose.push(lerp(fromPose[i], toPose[i], t))
        }
        applyPose(pose)
        basic.pause(stepMs)
    }
}
```

示例：

```js
transitionPose(POSE_STAND, POSE_DUCK, 12, 30)
basic.pause(500)
transitionPose(POSE_DUCK, POSE_STAND, 12, 30)
```


### 1.4. 将复杂动作包装到一个函数中
当动作用名称表达时，你的顶层程序会变得更加清晰。

```js
function doBow(): void {
    const neutral = POSE_STAND
    const bowPose = [90, 90, 90, 90, 90, 140]
    transitionPose(neutral, bowPose, 10, 20)
    basic.pause(200)
    transitionPose(bowPose, neutral, 10, 20)
}

input.onButtonPressed(Button.A, function () {
    doBow()
})
```

注意：

- 这与扩展内部使用的思路相同：将运动分解为可复用的构建块。
- 如果你以后更改机器人的"安全角度"，只需更新 `applyPose()` 即可。


### 2. Robot PU的舵机（它们在做什么）

Robot PU是一个多关节机器人：每个关节由舵机驱动，期望目标位置（通常用角度表示，如 `0..180`）。

当你"行走"、"跳舞"、"踢腿"等时，Robot PU并不是只发送一个命令；它在不断移动多个关节到目标姿态。

### 2.1 舵机映射：左脚/左腿/右脚/右腿/头部
在扩展内部，Robot PU将其舵机视为6个通道（索引 `0..5`）。你会在 `setTrim(...)` 中看到这个顺序反映出来：

- `0`：左脚
- `1`：左腿
- `2`：右脚
- `3`：右腿
- `4`：头部偏航（左/右转）
- `5`：头部俯仰（上/下看）

这也是为什么许多步态对待：

1. **腿**作为 `[0, 1, 2, 3]`
2. **头/身体**作为 `[4, 5]`

这是一张展示舵机角度如何映射到机器人位置的表格。当机器人从一个位置变换到另一个位置时，它会行走、跳跃和跳舞。你只需编程位置序列，并使用算法使机器人保持平衡。

# 机器人舵机角度控制表
| 机器人位置 | 左脚舵机角度 | 左腿舵机角度 | 右脚舵机角度 | 右腿舵机角度 | 颈部舵机角度（头部偏航） | 头部舵机角度（头部俯仰） | 备注 |
|----------------|----------------------|---------------------|-----------------------|----------------------|-----------------------------|------------------------------|-------|
| 站立          | 90                   | 90                  | 90                    | 90                   | 90                          | 90                           | 机器人笔直站立 |
| 跳跃           | 130                  | 90                  | 50                    | 90                   | 90                          | 30                           | 机器人抬脚跳跃，抬头 |
| 下蹲           | 0                    | 85                  | 180                   | 95                   | 90                          | 90                           | 机器人蹲下，折叠脚 |
| 校准          | 90                   | 60                  | 90                    | 120                  | 90                          | 90                           | 机器人通过脚跟对齐进行校准。 |
| 侧移1    | 75                   | 90                  | 30                    | 90                   | 135                         | 105                          | 机器人向左踮脚 |
| 侧移2    | 150                  | 90                  | 105                   | 90                   | 45                          | 105                          | 机器人向右踮脚 |

在 `Parameters.stateTargets` 中，姿态 `0` 是中性**站立**姿态，姿态 `1` 是紧凑的**下蹲**姿态。

以下是使机器人逐个到达位置的示例。

关键思路：

- `robotPu.setMode(robotPu.Mode.API)` 告诉机器人你正在直接控制关节（而不是运行行走/舞蹈状态机）。
- `radio.onReceived...` 处理程序是可选的。仅当你希望同时通过游戏手柄/遥控器使用 `robotPu.runStringCommand(...)` 和 `robotPu.runKeyValueCommand(...)` 来控制机器人时才需要。
- `robotPu.setChannel(166)` 必须与你的控制器/游戏手柄的无线电通道匹配。

```js
robotPu.setChannel(166)
robotPu.setMode(robotPu.Mode.API)

function setAllJoints(angle: number): void {
    robotPu.servo(robotPu.ServoJoint.LeftFoot, angle)
    robotPu.servo(robotPu.ServoJoint.LeftLeg, angle)
    robotPu.servo(robotPu.ServoJoint.RightFoot, angle)
    robotPu.servo(robotPu.ServoJoint.RightLeg, angle)
    robotPu.servo(robotPu.ServoJoint.HeadYaw, angle)
    robotPu.servo(robotPu.ServoJoint.HeadPitch, angle)
}

function pos1 () {
    setAllJoints(90)
}

radio.onReceivedString(function (receivedString) {
    robotPu.runStringCommand(receivedString)
})
radio.onReceivedValue(function (name, value) {
    robotPu.runKeyValueCommand(name, value)
})

function pos2 () {
    setAllJoints(70)
}

basic.forever(function () {
    pos1()
    basic.pause(500)
    pos2()
    basic.pause(500)
}
```
上传到Robot PU看看会发生什么：

[https://makecode.microbit.org/_dVfeMjYiHecy](https://makecode.microbit.org/_dVfeMjYiHecy)

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_dVfeMjYiHecy"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

### 3. 为什么使用基于I2C的舵机控制（micro:bit的限制）

micro:bit可以使用PWM（`pins.servoWritePin(...)`）驱动舵机，但Robot PU需要**多个舵机**同时平稳运动。

尝试直接从micro:bit驱动多个舵机时的典型约束：

1. **有限的PWM时序预算：** 舵机需要精确的脉冲时序；在软件中做多个通道很难。
2. **硬件PWM通道限制：** micro:bit内置的PWM支持实际上只能同时处理少量舵机（通常最多约4个），否则会出现时序冲突/抖动。
3. **CPU时间：** Robot PU还需要运行逻辑循环、传感器读取、无线电等。
4. **引脚数量：** 多个独立的PWM输出将消耗大量引脚。
5. **一致性：** 专用控制器即使你的代码忙碌时也能生成稳定的脉冲。

功率和电压约束也很重要：

1. **舵机供电不足：** micro:bit的3V引脚和板载稳压器并非设计用于提供多个舵机可能消耗的浪涌电流（如果尝试，经常出现电压跌落/复位）。
2. **某些舵机电压过低：** micro:bit是3.3V逻辑，虽然许多舵机能接受3.3V控制信号，但许多业余级舵机期望~5V电源以获得全扭矩/速度。

为解决这个问题，Robot PU使用了一个板载控制器，通过I2C接收紧凑的命令，并处理多舵机脉冲生成。

#### 3.1. micro:bit引脚（Robot PU的边缘连接器基础）
Robot PU使用micro:bit边缘连接器来获取电源和I2C总线。

#### A. Robot PU的重要引脚

- **`P19`：** I2C `SCL`（时钟）
- **`P20`：** I2C `SDA`（数据）
- **`3V`：** micro:bit 3.3V输出（逻辑级电源）
- **`GND`：** 地参考

重要：

- `P19/P20` 是默认的I2C引脚。如果你使用I2C设备（或Robot PU的舵机控制器），请避免将这些引脚改作他用。

#### B. 电源注意事项（舵机消耗的电流远高于micro:bit能提供的）

即使micro:bit有 `3V` 引脚：

- 不要尝试从micro:bit的 `3V` 为多个舵机供电。
- 突然的舵机负载可能导致**电压跌落/复位**。

Robot PU通过拥有自己的电机供电路径和板载控制器来解决这个问题。micro:bit主要发送**命令**，而不是电力。

#### C. `pins` API如何与I2C关联

Robot PU将底层 `pins.i2c...` 调用隐藏在扩展中，但了解底层在发生什么是有帮助的。

示例：简单的I2C寄存器读取

```js
// 示例模式：从I2C设备读取一个1字节的寄存器
const addr = 0x10
const reg = 0x03

pins.i2cWriteNumber(addr, reg, NumberFormat.UInt8LE)
const value = pins.i2cReadNumber(addr, NumberFormat.UInt8LE)
basic.showNumber(value)
```

示例：类似扫描的检查（"设备是否有响应？"）

```js
const addr = 0x10

// 许多设备会对单个字节的写入回复ACK。
// 如果地址错误，根据设备行为，你可能会看到0或类似错误的值。
pins.i2cWriteNumber(addr, 0x00, NumberFormat.UInt8LE)
basic.showString("OK")
```
**注意：**

- 不同的I2C芯片有不同的寄存器映射；以上展示了模式，而非Robot PU的内部协议。
- 在Robot PU中，`WK` 使用 `pins.i2cWriteBuffer(...)` 发送4字节数据包。

### 4. I2C基础（它是什么）
I2C是一种双线通信总线：

1. `SDA` = 数据线
2. `SCL` = 时钟线

在micro:bit边缘连接器上，通常为：

1. `P20` = SDA
2. `P19` = SCL

每个I2C设备有一个**地址**（通常显示为7位十六进制，如 0x10, 0x68, 0x3C）。

Robot PU的控制器地址在扩展中由WK类字段表示：


```js
// 在 WK 内部
this.i2cAddress = 16 // 十进制 == 0x10 十六进制
```
### 5. 在MakeCode（STS）中编程I2C
在MakeCode中，你通常使用缓冲区与I2C设备通信：

1. 构建一个包含寄存器/命令和数据字节的小 `Buffer`。
2. 使用 `pins.i2cWriteBuffer(address, buffer)` 发送它。
3. 可选地使用 `pins.i2cReadBuffer(...)` / `pins.i2cReadNumber(...)` 读取返回字节。

#### 示例：写入命令数据包
```js
let addr = 0x10
let buf = pins.createBuffer(4)

buf.setNumber(NumberFormat.UInt8LE, 0, 0x03) // 示例寄存器
buf.setNumber(NumberFormat.UInt8LE, 1, 90)   // 示例角度
buf.setNumber(NumberFormat.UInt8LE, 2, 0)
buf.setNumber(NumberFormat.UInt8LE, 3, 0)

pins.i2cWriteBuffer(addr, buf)
```
这与Robot PU内部使用的模式相同：构建一个4字节数据包并发送它。


### 6. WK类：Robot PU如何实际驱动运动
`WK` 是内部"硬件链接"，通过I2C发送电机/舵机/灯光命令。

#### 6.1 即时舵机命令（`WK.servo`）
`WK.servo(sr, a)` 将单个舵机通道设置为一个角度。

关键思路：

1. 角度被钳制到安全范围（`0..180`）。
2. 根据舵机索引计算"寄存器"值。
3. 通过I2C写入一个4字节数据包。

概念上：

```js
// 简化思路（与 WK 中的模式匹配）
let reg = servoIndex + 3
let packet = pins.createBuffer(4)
packet.setNumber(NumberFormat.UInt8LE, 0, reg)
packet.setNumber(NumberFormat.UInt8LE, 1, angle)
packet.setNumber(NumberFormat.UInt8LE, 2, 0)
packet.setNumber(NumberFormat.UInt8LE, 3, 0)
pins.i2cWriteBuffer(0x10, packet)
```

#### 6.2 渐进式舵机运动（`WK.servoStep`）—— 控制速度

如果你在一次调用中从角度 `20` 跳到 `160`，运动看起来会很"突兀"并可能震动机器人。

Robot PU改为使用**步进**：

1. 计算误差 = `目标 - 当前`。
2. 每次更新只移动一小步（"步长"）。
3. 每个节拍重复，直到误差很小。

在实际代码中，每个舵机的当前目标存储在 `Parameters.servoTarget[idx]` 中并逐步更新。

这就是Robot PU如何在不依赖延迟的情况下控制运动"速度"。步长越小 = 动作越慢、越平滑。

以下是每个电机以不同速度移动的示例，由步长和暂停控制：

[https://makecode.microbit.org/_i9YJmw1ieKDM](https://makecode.microbit.org/_i9YJmw1ieKDM)


<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_i9YJmw1ieKDM"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>


```js
function pos1 () {
    basic.showNumber(1)
    resetErr()
    while (!(allErrZero())) {
        leftFeetErr = robotPu.servoStepStatus(robotPu.ServoJoint.LeftFoot, 90, 2)
        leftLegErr = robotPu.servoStepStatus(robotPu.ServoJoint.LeftLeg, 90, 4)
        rightFeetErr = robotPu.servoStepStatus(robotPu.ServoJoint.RightFoot, 90, 2)
        rightLegErr = robotPu.servoStepStatus(robotPu.ServoJoint.RightLeg, 90, 4)
        headPitchErr = robotPu.servoStepStatus(robotPu.ServoJoint.HeadPitch, 90, 3)
        headYawErr = robotPu.servoStepStatus(robotPu.ServoJoint.HeadYaw, 90, 1)
        basic.pause(20)
    }
}
function allErrZero () {
    return leftFeetErr == 0 && leftLegErr == 0 && rightFeetErr == 0 && rightLegErr == 0 && headYawErr == 0 && headYawErr == 0
}
function pos2 () {
    basic.showNumber(2)
    resetErr()
    while (!(allErrZero())) {
        leftFeetErr = robotPu.servoStepStatus(robotPu.ServoJoint.LeftFoot, 70, 4)
        leftLegErr = robotPu.servoStepStatus(robotPu.ServoJoint.LeftLeg, 71, 2)
        rightFeetErr = robotPu.servoStepStatus(robotPu.ServoJoint.RightFoot, 70, 4)
        rightLegErr = robotPu.servoStepStatus(robotPu.ServoJoint.RightLeg, 71, 2)
        headPitchErr = robotPu.servoStepStatus(robotPu.ServoJoint.HeadPitch, 70, 1)
        headYawErr = robotPu.servoStepStatus(robotPu.ServoJoint.HeadYaw, 72, 3)
        basic.pause(20)
    }
}
function resetErr () {
    leftFeetErr = 1
    leftLegErr = 1
    rightFeetErr = 1
    rightLegErr = 1
    headPitchErr = 1
    headYawErr = 1
}
let headYawErr = 0
let headPitchErr = 0
let rightLegErr = 0
let rightFeetErr = 0
let leftLegErr = 0
let leftFeetErr = 0
robotPu.setChannel(166)
basic.forever(function () {
    pos1()
    pos2()
})
```
你可以借助数组更好地包装电机函数。

[https://makecode.microbit.org/_1ey03L4iwRbK](https://makecode.microbit.org/_1ey03L4iwRbK)

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_1ey03L4iwRbK"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

```js
function pose(target: number [], step: number [], pauseMS: number) {
    basic.showNumber(1)
    resetErr()
    while (!(allErrZero())) {
        leftFeetErr = robotPu.servoStepStatus(robotPu.ServoJoint.LeftFoot, target[0], step[0])
        leftLegErr = robotPu.servoStepStatus(robotPu.ServoJoint.LeftLeg, target[1], step[1])
        rightFeetErr = robotPu.servoStepStatus(robotPu.ServoJoint.RightFoot, target[2], step[2])
        rightLegErr = robotPu.servoStepStatus(robotPu.ServoJoint.RightLeg, target[3], step[3])
        headPitchErr = robotPu.servoStepStatus(robotPu.ServoJoint.HeadPitch, target[4], step[4])
        headYawErr = robotPu.servoStepStatus(robotPu.ServoJoint.HeadYaw, target[5], step[5])
        basic.pause(pauseMS)
    }
}
function allErrZero () {
    return leftFeetErr == 0 && leftLegErr == 0 && rightFeetErr == 0 && rightLegErr == 0 && headYawErr == 0 && headYawErr == 0
}

function resetErr () {
    leftFeetErr = 1
    leftLegErr = 1
    rightFeetErr = 1
    rightLegErr = 1
    headPitchErr = 1
    headYawErr = 1
}
let headYawErr = 0
let headPitchErr = 0
let rightLegErr = 0
let rightFeetErr = 0
let leftLegErr = 0
let leftFeetErr = 0
robotPu.setChannel(166)
let targets : number [][] = [[90,90,90,90,90,90], [70,72,70,72,71,75]]
let stepSizes: number [][] = [[1,1,1,1,1,1],[1,2,1,2,1,1]]
basic.forever(function () {
    pose(targets[0], stepSizes[0], 20)
    pose(targets[1], stepSizes[1], 20)
})
```
#### 6.3 同时移动多个舵机
行走是一种协调的姿态。Robot PU在每个更新周期中同时更新多个舵机。

在 `WK.move(...)` 中，支持两组：

**`sync_list`（同步列表）：** 必须一起到达姿态的舵机。
**`async_list`（异步列表）：** 可以以不同速度移动的舵机（用于风格或平衡）。

在每个更新节拍中，代码为**每个**列表中的**每个**舵机调用 `servoStep(...)` 。这意味着所有这些舵机同时前进。

这种"每节拍多小步"的方法让PU在不阻塞的情况下平滑移动多个关节。

#### 6.4 检测运动何时完成

Robot PU需要知道何时已到达姿态，以便进入序列中的下一个姿态。

在 `WK` 内部：

1. 每个 `servoStep` 更新 `Parameters.servoErr[idx]`。
2. `isServoIdle(servoList, p)` 检查每个舵机的误差是否"足够接近"（目前为 `< 1`）。

当 `isServoIdle(sync_list, p)` 变为 true 时，`WK.move(...)` 进入下一个状态并递增 `numSteps`。

这为你提供了清晰的"姿态完成"信号，无需舵机上有物理位置传感器。


### 7. 整合在一起（思维模型）

当Robot PU正在"执行一个动作"（行走/跳舞等）时，控制循环大致如下：

1. 选择一个目标姿态（一组目标角度）。
2. 每个更新节拍：
    1. 将每个舵机朝其目标步进（小幅增量）。
    2. 跟踪误差。
    3. 当所有必需舵机都足够接近时，进入下一个姿态。

这种组合（I2C + 步进 + 完成检测）使PU的运动变得平滑且可重复。

### 8. 示例：站立 → 自由落体时下蹲 → 再次站立

此示例使用micro:bit加速度计手势 `Gesture.FreeFall` 来检测机器人何时处于自由落体状态。

程序行为：

1. 从正常的站立姿态开始（`Parameters.stateTargets` 中的姿态索引 `0`）。
2. 当自由落体发生时，移动到保护性下蹲姿态（姿态索引 `1`）。
3. 当自由落体结束时，等待几秒，然后命令机器人再次站立。

#### 8.1 加载Robot PU扩展（MakeCode）

1. 打开 [https://makecode.microbit.org](https://makecode.microbit.org)
2. 点击**新建项目**
3. 点击**扩展**
4. 搜索Robot PU扩展（如果从GitHub安装，则粘贴GitHub仓库URL）
5. 添加它，然后切换到**JavaScript**

### 8.2 定义两个姿态（来自 `Parameters.stateTargets`）

以下是我们将使用的两个姿态（来自代码中的 `Parameters.stateTargets` 表）：

1. 站立姿态（索引 `0`）：`[90, 90, 90, 90, 90, 80]`
2. 下蹲/蹲伏姿态（索引 `1`）：`[10, 150, 170, 30, 40, 125]`

舵机索引顺序为：

1. `0` 左脚
2. `1` 左腿
3. `2` 右脚
4. `3` 右腿
5. `4` 头部偏航
6. `5` 头部俯仰

#### 8.3 即时运动（快速但突兀）使用 `WK.servo`
这直接发送最终角度。立竿见影，但看起来可能很"突兀"并可能震动机器人。

```js
let wk = new WK()

let stand = [90, 90, 90, 90, 90, 80]
let duck = [10, 150, 170, 30, 40, 125]

// 直接跳到站立，暂停，然后直接跳到下蹲
for (let i = 0; i < 6; i++) wk.servo(i, stand[i])
basic.pause(2000)
for (let i = 0; i < 6; i++) wk.servo(i, duck[i])
```

#### 8.4 渐进式运动（平滑）使用 `WK.servoStep`
`servoStep(target, sp, idx, pr)` 每次更新将一个舵机移动一小步：

1. **步长** `sp` 控制速度。
2. 在循环中重复调用它。
3. 使用 `wk.isServoIdle(...)` 知道何时到达。
```js
let pr = new Parameters()
let wk = new WK()

let stand = [90, 90, 90, 90, 90, 80]
let duck = [10, 150, 170, 30, 40, 125]
let all = [0, 1, 2, 3, 4, 5]

let target = duck
let stepSize = 2 // 越小 = 越慢/越平滑，越大 = 越快

basic.forever(function () {
    for (let i of all) {
        wk.servoStep(target[i], stepSize, i, pr)
    }

    if (wk.isServoIdle(all, pr)) {
        // 交换目标以比较来回效果
        target = (target == duck) ? stand : duck
        basic.pause(500)
    }

    basic.pause(5)
})
```

#### 8.5 使用 `WK.move` 的自由落体行为（来自 `Parameters` 的姿态索引）
此版本直接使用姿态索引（`0` 表示站立，`1` 表示下蹲），并依赖 `WK.move(...)` 驱动所有舵机（内部带步进+完成检测）。

```js
let pr = new Parameters()
let wk = new WK()

let allServos = [0, 1, 2, 3, 4, 5]
let POSE_STAND = 0
let POSE_DUCK = 1

let pose = POSE_STAND
let fallEndTS = -1

basic.forever(function () {
    let falling = input.isGesture(Gesture.FreeFall)

    if (falling) {
        pose = POSE_DUCK
        fallEndTS = -1
    } else {
        if (pose == POSE_DUCK && fallEndTS < 0) {
            fallEndTS = control.millis()
        }
        if (fallEndTS >= 0 && control.millis() - fallEndTS > 2000) {
            pose = POSE_STAND
        }
    }

    // 驱动选定的姿态（单状态序列）
    wk.move(pr, [pose], allServos, 2.0, [], 0.5)

    basic.pause(5)
})
```
### 功夫与太极
舵机快速移动是**功夫**。舵机缓慢（渐进式）移动是**太极**。


<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_MYeJexhjrH3H"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

### 为Robot PU添加手臂
使用**4个舵机**为Robot PU添加简单的**上/下手臂**：

- 2个舵机连接Robot PU舵机控制器（**I2C总线**）使用**5V**（强劲）
- 2个舵机直接连接到micro:bit的**P14**和**P15**使用**3.3V**（较弱）
如果你的扩展板提供独立的**5V舵机电源**，你可以选择将P14/P15舵机重新接线以使用5V（建议用于更强壮的手臂）。

### 硬件/接线
#### I2C舵机（备用关节）用于Robot PU肩膀
使用Robot PU舵机控制器输出：

- `robotPu.ServoJoint.Reserve1`
- `robotPu.ServoJoint.Reserve2`

#### 这些由板载舵机电源供电（通常为5V）。

引脚舵机（micro:bit）用于Robot PU前臂
将另外两个舵机连接到：

- 信号：`P14` 和 `P15`
- 电源：micro:bit 3.3V（可用但较弱）
- 地：与机器人共地

Robot PU将抬起手臂说"Up up up"，放下手臂说"Down down down"。


<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_a70JhiFLAWFu"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>
