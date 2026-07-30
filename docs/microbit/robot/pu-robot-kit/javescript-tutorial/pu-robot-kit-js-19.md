---
sidebar_position: 19
sidebar_label: 19:Robot PU 跟随领导者
---

# Robot PU 跟随领导者

以下是一个干净、实用的示例，展示多个 Robot PU 机器人作为跟随者，全部由一个手柄机器人控制，该手柄机器人广播：

指南针朝向 → 方向
摇杆 Y → 速度
每个跟随者接收无线电消息，提取朝向 + 速度，并相应地驱动。

此模式可扩展到任意数量的机器人。

## 🕹️ 领导者机器人（手柄控制器）

领导者读取：

- 使用 `input.compassHeading()` 获取指南针朝向
- 使用 `robotPu.joystickY()`（或你自己的摇杆输入）获取摇杆速度

然后在一个无线电数据包中广播这两个值。

```typescript
// Leader (Gamepad) Robot
radio.setGroup(42)

basic.forever(function () {
    // Compass heading: 0–359 degrees
    let heading = input.compassHeading()

    // Joystick Y: -100 to +100 (forward/backward)
    let speed = robotPu.joystickY()

    // Pack into a string: "heading,speed"
    let msg = heading + "," + speed

    radio.sendString(msg)
    basic.pause(80)
})
```

领导者不移动——它只广播控制信号。

---

## 🤖 跟随者机器人（所有其他机器人）

每个跟随者机器人：

1. 接收 `"heading,speed"`
2. 解析两个数字
3. 将朝向转换为转向值
4. 将速度转换为前进速度
5. 朝向领导者的朝向驱动

### 📡 步骤 1 — 无线电设置

```typescript
radio.setGroup(42)
```

所有机器人必须使用相同的组。

### 📨 步骤 2 — 接收并解析消息

```typescript
let targetHeading = 0
let targetSpeed = 0

radio.onReceivedString(function (msg) {
    let parts = msg.split(",")
    targetHeading = parseInt(parts[0])
    targetSpeed = parseInt(parts[1])
})
```

### 🧭 步骤 3 — 朝向误差 → 转向命令

跟随者比较：

**领导者朝向 – 我的朝向**

这给出了一个朝向误差，我们将其转换为转向值。

```typescript
function headingError(): number {
    let myHeading = input.compassHeading()
    let error = targetHeading - myHeading

    // Wrap error to [-180, +180]
    if (error > 180) error -= 360
    if (error < -180) error += 360

    return error
}
```

### 🚗 步骤 4 — 将误差转换为转向量

```typescript
function computeTurn(): number {
    let err = headingError()

    // Scale error to turn value (-1 to +1)
    let turn = err / 90
    if (turn > 1) turn = 1
    if (turn < -1) turn = -1

    return turn
}
```

### 🏎️ 步骤 5 — 将摇杆速度转换为前进速度

```typescript
function computeSpeed(): number {
    // joystick Y is -100..100 → convert to -2..2
    return targetSpeed / 50
}
```

### 🔁 步骤 6 — 跟随者主循环

```typescript
basic.forever(function () {
    let fwd = computeSpeed()
    let turn = computeTurn()

    robotPu.walk(fwd, turn)
    basic.pause(20)
})
```

---

## 🎉 你现在拥有什么

通过此设置：

- 领导者机器人像一个无线手柄一样工作
- 所有跟随者将自己对准领导者的指南针朝向
- 摇杆 Y 控制速度
- 朝向控制方向
- 群体保持同步
- 任意数量的跟随者都可以加入

这是以下内容的基础：

- 领导者-跟随者群体
- 编队控制
- 同步机器人运动
- 多个机器人的远程遥操作

你可以扩展为：

- V 形编队群体
- Boids 蜂群行为
- 避障跟随者
- 领导者切换（动态领导权）
