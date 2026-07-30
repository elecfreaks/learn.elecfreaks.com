---
sidebar_position: 21
sidebar_label: 21:Robot PU 面向对象编程
---

# Robot PU 面向对象编程

完全没问题——让我们将你的智能跟随者群体机器人变成**干净、模块化、专业**的代码，使用：

- **面向对象编程（OOP）**
- **事件处理器设计模式**
- **micro:bit 事件系统（`control.raiseEvent`、`control.onEvent`）**

本教程采用与 Robot PU JavaScript 教程系列相同的风格编写，但引入了真正的软件工程结构，使你的群体代码更易于维护、扩展和调试。

## 🤖 教程：使用 OOP + 事件处理器构建干净的智能跟随者机器人

Robot PU 群体跟随者需要：

- 接收**领导者朝向 + 速度**
- 计算**转向 + 前进速度**
- 执行**避障覆盖**
- 响应**紧急情况**
- 在 `forever()` 循环中平稳运行

原始代码可以工作，但它混合了：

- 无线电解析
- 指南针数学
- 障碍物逻辑
- 运动逻辑
- 状态变量

……全部在一个地方。

让我们使用**类**和**事件驱动架构**来清理它。

## 🧱 1. 架构概述

我们将跟随者拆分为四个组件：

1. **RadioFollower（无线电跟随者）**

监听无线电消息并触发事件。

2. **NavigationController（导航控制器）**

根据领导者朝向计算转向 + 速度。

3. **ObstacleAvoidance（避障）**

监控声呐并触发紧急/避障事件。

4. **SmartFollower（智能跟随者）**

主机器人类，响应事件并驱动机器人。

这为我们提供了一个干净、模块化的系统：

``` typescript
Radio → Events → SmartFollower → Movement
Sonar → Events → SmartFollower → Movement
```

---

## 🧩 2. 定义事件 ID

我们使用 micro:bit 事件系统。

```typescript
const EVT_FOLLOWER = 7001
const EVT_UPDATE = 1
const EVT_AVOID = 2
const EVT_EMERGENCY = 3
```

---

## 📡 3. RadioFollower 类

负责：

- 接收 `"heading,speed"`
- 解析
- 触发更新事件

```typescript
class RadioFollower {
    heading: number = 0
    speed: number = 0

    constructor() {
        radio.onReceivedString(msg => {
            let parts = msg.split(",")
            if (parts.length == 2) {
                this.heading = parseInt(parts[0])
                this.speed = parseInt(parts[1])
                control.raiseEvent(EVT_FOLLOWER, EVT_UPDATE)
            }
        })
    }
}
```

---

## 🧭 4. NavigationController 类

根据领导者朝向计算转向 + 速度。

```typescript
class NavigationController {

    computeTurn(targetHeading: number): number {
        let myHeading = input.compassHeading()
        let err = targetHeading - myHeading

        if (err > 180) err -= 360
        if (err < -180) err += 360

        let turn = err / 90
        if (turn > 1) turn = 1
        if (turn < -1) turn = -1

        return turn
    }

    computeSpeed(targetSpeed: number): number {
        return targetSpeed / 50
    }
}
```

---

## 🧱 5. ObstacleAvoidance 类

监控声呐并触发事件。

```typescript
class ObstacleAvoidance {
    EMERGENCY = 10
    AVOID = 20

    constructor() {
        basic.forever(() => {
            let d = robotPu.frontDistanceArray()[2]

            if (d > 0 && d < this.EMERGENCY) {
                control.raiseEvent(EVT_FOLLOWER, EVT_EMERGENCY)
            } else if (d > 0 && d < this.AVOID) {
                control.raiseEvent(EVT_FOLLOWER, EVT_AVOID)
            }
        })
    }
}
```

---

## 🤖 6. SmartFollower 类（主机器人）

此类响应事件并驱动机器人。

```typescript
class SmartFollower {
    radio: RadioFollower
    nav: NavigationController

    constructor(r: RadioFollower, n: NavigationController) {
        this.radio = r
        this.nav = n

        control.onEvent(EVT_FOLLOWER, EVT_UPDATE, () => this.followLeader())
        control.onEvent(EVT_FOLLOWER, EVT_AVOID, () => this.avoidObstacle())
        control.onEvent(EVT_FOLLOWER, EVT_EMERGENCY, () => this.emergencyStop())
    }

    followLeader() {
        let fwd = this.nav.computeSpeed(this.radio.speed)
        let turn = this.nav.computeTurn(this.radio.heading)
        robotPu.walk(fwd, turn)
    }

    avoidObstacle() {
        robotPu.walk(1.0, 0.9)
    }

    emergencyStop() {
        robotPu.walk(0, 0)
        basic.showIcon(IconNames.No)
    }
}
```

---

## 🚀 7. 全部整合在一起

```typescript
radio.setGroup(42)

let radioFollower = new RadioFollower()
let nav = new NavigationController()
let avoid = new ObstacleAvoidance()
let follower = new SmartFollower(radioFollower, nav)
```

就是这样——跟随者现在可以干净、模块化、事件驱动地运行了。


## 🎉 你刚刚构建了什么

你现在拥有一个专业级的群体跟随者：

✔ **面向对象**

每个职责都隔离在自己的类中。

✔ **事件驱动**

没有做所有事情的大型 `forever()` 循环。

✔ **清晰的关注点分离：**

- 无线电解析
- 导航数学
- 避障
- 机器人运动

✔ **易于扩展**

你可以添加：

- 编队控制
- 间距规则
- 更平滑的避障
- 滤波
- 日志记录

而不触及核心逻辑。
