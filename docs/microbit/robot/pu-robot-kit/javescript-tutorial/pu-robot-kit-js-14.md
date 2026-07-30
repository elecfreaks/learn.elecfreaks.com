---
sidebar_position: 14
sidebar_label: 14:Robot PU 状态机
---

# Robot PU 状态机


## 🤖 Robot PU 教程：使用状态机构建舞蹈程序

**MakeCode + Robot PU 的 JavaScript 教程**

---

机器人擅长重复模式，但如果你只使用 `basic.forever()` 编写舞蹈程序，很快就会陷入定时器、暂停和嵌套条件的混乱之中。

状态机为你提供了一种干净、可预测的方式来组织复杂的机器人行为——尤其是像跳舞这样的序列。

本教程将向你展示如何：

- 理解什么是状态机
- 在 MakeCode 中构建一个简单的状态机
- 使用事件和定时器在状态之间转换
- 实现一个完整的 Robot PU 舞蹈程序

---

## 🎯 什么是状态机？

状态机是一种设计模式，机器人始终处于且仅处于一个状态，例如：

- IDLE（空闲）
- STEP_LEFT（左踏步）
- STEP_RIGHT（右踏步）
- SPIN（旋转）
- POSE（摆姿势）

每个状态定义了：

- 机器人做什么
- 何时以及如何转换到下一个状态

可以把它想象成编舞：
"做动作 A 持续 1 秒 → 然后做动作 B 持续 1 秒 → 然后做动作 C……"

---

## 🧱 1. 定义状态

我们将使用数字或字符串来定义状态。
数字更快，但字符串更易读。

```typescript
enum DanceState {
    Idle,
    StepLeft,
    StepRight,
    Spin,
    Pose
}

let state = DanceState.Idle
```

---

## 🕹️ 2. 状态机循环

我们使用 `forever()` 循环来运行当前状态。

```typescript
basic.forever(function () {
    switch (state) {

        case DanceState.Idle:
            robotPu.walk(0, 0)
            break

        case DanceState.StepLeft:
            robotPu.walk(1.2, -1)
            break

        case DanceState.StepRight:
            robotPu.walk(1.2, 1)
            break

        case DanceState.Spin:
            robotPu.walk(1.5, 1)
            break

        case DanceState.Pose:
            robotPu.walk(0, 0)
            basic.showIcon(IconNames.Heart)
            break
    }

    basic.pause(20)
})
```

这个循环不决定何时改变状态——它只执行当前状态的动作。

状态转换在下一步处理。

---

## ⏱️ 3. 定时状态转换

我们将使用 `control.setTimeout()` 来安排转换。

辅助函数：

```typescript
function nextState(s: DanceState, delay: number) {
    control.setTimeout(() => {
        state = s
    }, delay)
}
```

这让我们可以像这样编写编舞：

`左踏步 800ms → 右踏步 800ms → 旋转 1200ms → 摆姿势`

---

## 💃 4. 启动舞蹈程序

让我们通过按下按钮 A 来触发舞蹈。

```typescript
input.onButtonPressed(Button.A, function () {
    startDance()
})
```

舞蹈序列：

```typescript
function startDance() {

    // Start with left step
    state = DanceState.StepLeft
    nextState(DanceState.StepRight, 800)

    // Then right step
    nextState(DanceState.Spin, 1600)

    // Then spin
    nextState(DanceState.Pose, 2800)

    // End in pose
    nextState(DanceState.Idle, 4000)
}
```

注意每个 `nextState()` 调用在时间上是偏移的。
这就创建了一条动作的时间线。

---

## 🧠 5. 为什么这样做如此有效

- ✔ **清晰的分离** — 状态机循环处理运动；转换调度器处理时序
- ✔ **易于扩展** — 通过添加新状态来增加新动作
- ✔ **易于调试** — 你始终知道机器人当前处于哪个状态
- ✔ **没有复杂的暂停** — `control.setTimeout()` 避免阻塞主循环

---

## 🕺 6. 完整舞蹈程序代码（完整示例）

```typescript
enum DanceState {
    Idle,
    StepLeft,
    StepRight,
    Spin,
    Pose
}

let state = DanceState.Idle

// State machine loop
basic.forever(function () {
    switch (state) {

        case DanceState.Idle:
            robotPu.walk(0, 0)
            break

        case DanceState.StepLeft:
            robotPu.walk(1.2, -1)
            break

        case DanceState.StepRight:
            robotPu.walk(1.2, 1)
            break

        case DanceState.Spin:
            robotPu.walk(1.5, 1)
            break

        case DanceState.Pose:
            robotPu.walk(0, 0)
            basic.showIcon(IconNames.Heart)
            break
    }

    basic.pause(20)
})

// Helper: schedule next state
function nextState(s: DanceState, delay: number) {
    control.setTimeout(() => {
        state = s
    }, delay)
}

// Dance routine
function startDance() {
    state = DanceState.StepLeft
    nextState(DanceState.StepRight, 800)
    nextState(DanceState.Spin, 1600)
    nextState(DanceState.Pose, 2800)
    nextState(DanceState.Idle, 4000)
}

// Start dance on button A
input.onButtonPressed(Button.A, function () {
    startDance()
})
```

---

## 🎉 你现在知道如何为 Robot PU 使用状态机了

有了这个模式，你可以构建：

- 舞蹈程序
- 巡逻循环
- 迷宫求解序列
- 多步动画
- 游戏逻辑
- 群体行为状态

你还可以：

- 为舞蹈添加音乐
- 添加 LED 动画
- 添加随机舞蹈变体
- 构建多机器人同步舞蹈
