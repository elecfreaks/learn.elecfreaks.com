---
sidebar_position: 17
sidebar_label: 17:Robot PU 事件与事件处理器
---

# Robot PU 事件与事件处理器

以下是一篇关于为 Robot PU 创建自定义事件和事件处理器的全新教程，采用与参考 GitHub 教程相同的语调、节奏和结构——但不是复制它。
它教授相同的概念：事件循环、自定义事件源、以及使用 micro:bit 事件系统响应事件。

## 🤖 Robot PU 教程：创建自定义事件与事件处理器

**MakeCode + micro:bit 事件的 JavaScript 教程**

---

Robot PU 程序通常在 `basic.forever()` 循环中运行。
但有时你希望机器人对某些事情做出即时反应：

- 传感器条件
- 按钮按下
- 来自另一个机器人的消息
- 你定义的自定义触发器

这就是自定义事件和事件处理器大放异彩的地方。

micro:bit 运行时包含一个强大的事件系统，让你可以：

- 触发自己的事件
- 监听这些事件
- 在事件发生时运行回调

本教程将向你展示如何构建自己的事件驱动机器人行为。

---

## 🎯 你将学到什么

你将学习如何：

- 定义自定义事件 ID
- 使用 `control.raiseEvent()` 触发事件
- 使用 `control.onEvent()` 处理事件
- 构建一个简单的事件循环
- 从事件触发机器人动作
- 将事件与 Robot PU 传感器结合

---

## 🧱 1. micro:bit 事件系统

事件系统围绕两个函数构建：

**触发事件**

```typescript
control.raiseEvent(source, value)
```

**处理事件**

```typescript
control.onEvent(source, value, function () {
    // callback code
})
```

你为 `source` 和 `value` 选择数字。
可以将它们视为通道和消息。

---

## 🏷️ 2. 定义自己的事件 ID

为事件定义常量是一个好习惯：

```typescript
const EVT_ROBOT = 1001
const EVT_START = 1
const EVT_STOP = 2
```

这使代码可读并避免魔法数字。

---

## 🚀 3. 触发事件

你可以在任何地方触发事件：

```typescript
control.raiseEvent(EVT_ROBOT, EVT_START)
```

这不会立即运行。
相反，它被添加到 micro:bit 的事件队列中。

事件处理器将在系统处理它时立即运行。

---

## 🎧 4. 处理事件（回调）

要响应事件，注册一个处理器：

```typescript
control.onEvent(EVT_ROBOT, EVT_START, function () {
    basic.showString("GO")
})
```

当事件被触发时，此回调自动运行。

你可以为不同的值注册多个处理器：

```typescript
control.onEvent(EVT_ROBOT, EVT_STOP, function () {
    basic.showString("STOP")
})
```

---

## 🔁 5. 将事件与 Forever 循环结合

一种常见模式是：

- `forever()` 处理连续任务
- 事件触发特殊动作

示例：

```typescript
let running = false

control.onEvent(EVT_ROBOT, EVT_START, function () {
    running = true
})

control.onEvent(EVT_ROBOT, EVT_STOP, function () {
    running = false
})

basic.forever(function () {
    if (running) {
        robotPu.walk(1.5, 0)
    }
})
```

按下按钮或接收消息可以切换机器人的模式。

---

## 📡 6. 从传感器创建事件

让我们使用前方声呐分区创建一个"太近"事件。

### 步骤 1 — 定义事件 ID

```typescript
const EVT_SONAR = 2001
const EVT_TOO_CLOSE = 1
```

### 步骤 2 — 在需要时触发事件

```typescript
basic.forever(function () {
    let d = robotPu.frontDistanceArray()[2]  // center bin
    if (d > 0 && d < 12) {
        control.raiseEvent(EVT_SONAR, EVT_TOO_CLOSE)
    }
})
```

### 步骤 3 — 处理事件

```typescript
control.onEvent(EVT_SONAR, EVT_TOO_CLOSE, function () {
    robotPu.walk(0, 0)
    basic.showIcon(IconNames.No)
})
```

现在当有东西太近时，你的机器人会立即停止。

---

## 🤝 7. 从对等消息创建事件

Robot PU 支持点对点消息：

```typescript
robotPu.onPeerMessage(function (msg) {
    // msg is a string
})
```

你可以将消息转换为事件。

示例："hello" 消息 → 事件

```typescript
const EVT_PEER = 3001
const EVT_HELLO = 1

robotPu.onPeerMessage(function (msg) {
    if (msg == "hello") {
        control.raiseEvent(EVT_PEER, EVT_HELLO)
    }
})
```

处理事件：

```typescript
control.onEvent(EVT_PEER, EVT_HELLO, function () {
    basic.showString("Hi!")
})
```

---

## 🎭 8. 自定义机器人行为

你可以使用事件构建模块化的机器人动作。

定义一个"舞蹈"事件：

```typescript
const EVT_DANCE = 4001

control.onEvent(EVT_DANCE, 0, function () {
    robotPu.walk(1.5, 1)
    basic.pause(300)
    robotPu.walk(1.5, -1)
    basic.pause(300)
})
```

用按钮 B 触发它：

```typescript
input.onButtonPressed(Button.B, function () {
    control.raiseEvent(EVT_DANCE, 0)
})
```

---

## 🧪 9. 完整示例：事件驱动机器人控制器

此示例将所有内容整合在一起：

- 按钮 A → 启动
- 按钮 B → 停止
- 声呐 → 紧急停车
- 事件循环 → 运动

```typescript
const EVT_CTRL = 5001
const EVT_START = 1
const EVT_STOP = 2
const EVT_EMERGENCY = 3

let running = false

// Button events
input.onButtonPressed(Button.A, function () {
    control.raiseEvent(EVT_CTRL, EVT_START)
})

input.onButtonPressed(Button.B, function () {
    control.raiseEvent(EVT_CTRL, EVT_STOP)
})

// Sonar emergency event
basic.forever(function () {
    let d = robotPu.frontDistanceArray()[2]
    if (d > 0 && d < 10) {
        control.raiseEvent(EVT_CTRL, EVT_EMERGENCY)
    }
})

// Event handlers
control.onEvent(EVT_CTRL, EVT_START, function () {
    running = true
})

control.onEvent(EVT_CTRL, EVT_STOP, function () {
    running = false
})

control.onEvent(EVT_CTRL, EVT_EMERGENCY, function () {
    running = false
    robotPu.walk(0, 0)
    basic.showIcon(IconNames.No)
})

// Main loop
basic.forever(function () {
    if (running) {
        robotPu.walk(1.5, 0)
    }
})
```

这是一个干净、模块化的事件驱动机器人架构。

---

## 🎉 你现在知道如何构建自定义事件了

你学到了如何：

- 定义事件 ID
- 使用 `control.raiseEvent()` 触发事件
- 使用 `control.onEvent()` 处理事件
- 构建事件驱动机器人行为
- 将事件与传感器和对等消息结合

这是以下内容的基础：

- 多机器人游戏
- 响应式导航
- 群体机器人
- 模块化机器人架构
- 状态机

---

# 🐝 领导者-跟随者群体教程

领导者-跟随者群体是机器人学中那些第一次看到时几乎感到神奇的想法之一：一个机器人自由移动，其他机器人感知、解读并响应，作为一个协调的群体跟随它。使用 Robot PU，你只需要：

- 点对点消息
- 简单的距离感知
- micro:bit 事件
- 一点行为逻辑

就可以构建一个出奇强大的群体。

让我们勾勒出一个干净、易上手的设计，你可以在此基础上进行构建。

---

## 🧭 领导者-跟随者群体实际上做什么

在这样的群体中：

- **一个机器人是领导者** — 它按照自己的意愿移动——手动、随机或使用自己的导航逻辑。
- **其他机器人是跟随者** — 它们不知道领导者的计划。它们仅响应：
  - 领导者广播的状态
  - 自己的传感器读数
  - 本地事件

这正是真实群体机器人的工作方式：**局部规则 → 全局行为**。

---

## 📡 通信模型

Robot PU 支持对等消息传递：

```typescript
robotPu.onPeerMessage(function (msg) {
    // msg is a string
})
```

领导者可以广播：

- 它的方向
- 它的速度
- "停止"或"前进"命令
- "危险"警报

跟随者解读这些消息并调整其行为。

---

## 🧱 事件驱动架构

我们将使用 micro:bit 事件系统来保持代码清晰：

```typescript
control.raiseEvent(source, value)
control.onEvent(source, value, handler)
```

这让你可以将：

- 消息解析
- 运动逻辑
- 传感器反应

分离为模块化片段。

---

## 👑 领导者机器人逻辑

领导者机器人定期广播其运动状态。

示例：领导者每 200ms 广播一次方向

```typescript
basic.forever(function () {
    let dir = "forward"   // or "left", "right", "stop"
    robotPu.sendPeerMessage(dir)
    basic.pause(200)
})
```

你可以将 `"forward"` 替换为摇杆输入、按钮输入或自主导航。

---

## 🐝 跟随者机器人逻辑

跟随者监听消息并将其转换为事件。

### 步骤 1 — 定义事件 ID

```typescript
const EVT_SWARM = 6001
const EVT_FWD = 1
const EVT_LEFT = 2
const EVT_RIGHT = 3
const EVT_STOP = 4
```

### 步骤 2 — 将消息转换为事件

```typescript
robotPu.onPeerMessage(function (msg) {
    if (msg == "forward") control.raiseEvent(EVT_SWARM, EVT_FWD)
    else if (msg == "left") control.raiseEvent(EVT_SWARM, EVT_LEFT)
    else if (msg == "right") control.raiseEvent(EVT_SWARM, EVT_RIGHT)
    else if (msg == "stop") control.raiseEvent(EVT_SWARM, EVT_STOP)
})
```

### 步骤 3 — 事件处理器定义跟随者行为

```typescript
control.onEvent(EVT_SWARM, EVT_FWD, function () {
    robotPu.walk(1.5, 0)
})

control.onEvent(EVT_SWARM, EVT_LEFT, function () {
    robotPu.walk(1.2, -1)
})

control.onEvent(EVT_SWARM, EVT_RIGHT, function () {
    robotPu.walk(1.2, 1)
})

control.onEvent(EVT_SWARM, EVT_STOP, function () {
    robotPu.walk(0, 0)
})
```

现在跟随者机器人镜像领导者的运动。

---

## 🛑 添加碰撞避免（局部自主）

一个好的群体机器人不会盲目跟随——它会响应自己的传感器。

示例：紧急停车事件

```typescript
const EVT_EMERGENCY = 9

basic.forever(function () {
    let d = robotPu.frontDistanceArray()[2]
    if (d > 0 && d < 12) {
        control.raiseEvent(EVT_SWARM, EVT_EMERGENCY)
    }
})
```

处理器覆盖群体指令：

```typescript
control.onEvent(EVT_SWARM, EVT_EMERGENCY, function () {
    robotPu.walk(0, 0)
    basic.showIcon(IconNames.No)
})
```

这为你提供了一个混合群体：

- **全局行为**来自领导者
- **局部安全**来自每个跟随者

---

## 🧠 可选：基于距离的跟随

如果你想要更逼真的群体，跟随者可以保持与领导者的距离。

- 领导者广播其与跟随者的距离（反之亦然）。
- 跟随者根据以下条件调整速度：
  - 太远 → 加速
  - 太近 → 减速
  - 刚刚好 → 匹配速度

这就是真实机器人群体保持队形的方式。

---

## 🎉 你构建了什么

你现在拥有了领导者-跟随者群体的基础：

- 领导者广播运动
- 跟随者将消息转换为事件
- 事件处理器驱动运动
- 局部传感器覆盖不安全的指令
- 整个系统是模块化且可扩展的

添加更多跟随者，它们将自动进入编队。

如果你愿意，可以扩展到：

- 三机器人链条
- V 形编队群体
- 蜂群算法（Boids）
- 迷宫求解群体
