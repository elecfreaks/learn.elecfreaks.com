---
sidebar_position: 16
sidebar_label: 16:Robot PU 事件循环
---

# Robot PU 事件循环

## 🔁 课程：事件循环（观察 → 思考 → 行动）

机器人程序不是"执行一条命令然后停止"。它们是持续运行的。

在 micro:bit MakeCode 上，常见的编程模型是事件循环：

- 注册事件处理器（按钮、无线电、手势）
- 在 `basic.forever(...)` 中运行重复逻辑
- 运行时调度这些部分，使你的程序能够多任务处理

这是 Robot PU 模式的基础：**观察 → 思考 → 行动**

---

## 1. 什么是事件循环？

事件循环是一种程序结构，其中：

- 系统等待事件
- 运行你的代码一小段时间
- 将控制权交还给运行时
- 永远重复

在 MakeCode 中：

- `basic.forever(function () { ... })` 是你的"主循环"
- `input.onButtonPressed(...)` 是事件回调

关键规则是：**做少量工作，然后返回**（不要永久阻塞）

---

## 2. 观察 → 思考 → 行动

一个健壮的机器人控制循环如下所示：

### A. 观察（感知）

读取传感器：

- `robotPu.sonarDistanceCm()`
- `input.isGesture(Gesture.FreeFall)`
- `input.rotation(Rotation.Roll)` / `input.rotation(Rotation.Pitch)`
- `input.soundLevel()`

### B. 思考（决策）

计算下一步做什么：

- 有障碍物？减速 / 转弯
- 正在摔倒？停止 / 站立
- 有重节拍？跳舞

### C. 行动（执行）

发送一个小的动作更新：

- `robotPu.walk(speed, turn)`
- `robotPu.explore()`
- `robotPu.stand()`

然后循环回到开始。

---

## 3. 为什么异步（非阻塞）动作很重要

Robot PU 运动 API 被设计为反复调用。

每次调用都会将运动推进一小步（舵机步进）。这种风格在以下意义上是"异步"的：

- 你不会调用一个函数并等待整个行走完成
- 相反，你在事件循环中持续调用它

好处：

- 按钮仍然有效
- 无线电仍然接收消息
- 传感器检查仍然运行
- 你可以即时中断 / 改变行为

如果你编写一个长阻塞循环（或一个永不返回的函数），你可能会饿死系统的其余部分。

---

## 4. 为什么事件循环对多任务处理至关重要

micro:bit 上的多任务处理不是像 PC 那样的"真正线程"。它是协作调度：

- 你的代码运行
- 你交还控制权
- 运行时运行其他任务/事件

因此你应该避免：

- 长时间运行的阻塞函数
- `forever` 内部的非常繁重的计算

相反：

- 保持每次循环迭代简短
- 使用状态变量
- 让事件循环每秒运行多次

---

## 5. 示例：一个干净的观察-思考-行动循环

此示例：

- 观察声呐距离
- 决定转向方向
- 通过调用一次运动更新来行动

```typescript
basic.forever(function () {
    // 1) Observation
    const cm = robotPu.sonarDistanceCm()

    // 2) Thinking
    let speed = 2
    let turn = 0

    if (cm > 0 && cm < 15) {
        speed = -2
        turn = 0.8
    }

    // 3) Action (one small update)
    robotPu.walk(speed, turn)
})
```

---

## 6. 示例：使用事件改变机器人"模式"

使用按钮在不同行为之间切换，而主循环持续运行。

```typescript
enum Mode {
    Stand,
    Explore,
    Walk
}

let mode = Mode.Stand

input.onButtonPressed(Button.A, function () {
    mode = Mode.Explore
})

input.onButtonPressed(Button.B, function () {
    mode = Mode.Walk
})

input.onButtonPressed(Button.AB, function () {
    mode = Mode.Stand
})

basic.forever(function () {
    if (mode == Mode.Stand) {
        robotPu.stand()
    } else if (mode == Mode.Explore) {
        robotPu.explore()
    } else {
        robotPu.walk(2, 0)
    }
})
```

---

## 7. 良好机器人事件循环检查清单

- 保持循环迭代简短
- 使用状态变量（模式、计数器、定时器）
- 响应事件（按钮/传感器）而不是阻塞等待
- 反复调用运动动作，而不是试图在一次调用中"完成整个动作"
