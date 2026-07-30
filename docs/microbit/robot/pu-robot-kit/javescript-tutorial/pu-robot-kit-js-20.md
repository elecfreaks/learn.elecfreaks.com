---
sidebar_position: 20
sidebar_label: 20:Robot PU 智能跟随者
---

# Robot PU 智能跟随者

当你将领导者跟随（全局目标）与避障（局部安全）结合时，你立即会遇到一个经典的机器人学问题：

全局导航目标经常与局部碰撞避免规则冲突。

这不仅仅是 Robot PU 的问题——无人机、自动驾驶汽车、仓储机器人和群体机器人都面临同样的挑战。

好消息是，机器人学有几种经过充分研究的算法专门针对这种情况。

以下是清晰的最佳方法分解，说明它们为什么有效，以及哪些方法对 Robot PU 实用。

## 🧠 第一部分：算法比较

### 1. 势场法（吸引力 + 排斥力）

这是最直观且对群体友好的方法。

**工作原理：**
- 领导者朝向作为**吸引力**拉动跟随者前进。
- 障碍物作为**排斥力**推开机器人。
- 机器人沿**矢量和**的方向移动。

**为什么能解决冲突：** 机器人自然地平衡"向领导者前进"和"避开障碍物"，不需要显式规则。

| 优点 | 缺点 |
|------|------|
| 简单 | 可能陷入局部极小值（如角落） |
| 平滑运动 | |
| 非常适合群体 | |

**适合 Robot PU 吗？** 是的。使用指南针 + 声呐易于实现。

---

### 2. 行为仲裁（包容架构）

这是 Rodney Brooks 著名的分层机器人架构。

**工作原理：** 定义具有优先级的行为：

1. 避开障碍物（最高优先级）
2. 跟随领导者朝向
3. 巡航前进（最低优先级）

触发时具有最高优先级的行为取得控制权。

**为什么能解决冲突：** 避障总是获胜，但只是暂时的。一旦清除障碍，机器人恢复跟随领导者。

| 优点 | 缺点 |
|------|------|
| 非常健壮 | 运动可能生硬 |
| 易于推理 | 没有行为融合 |
| 对简单传感器效果很好 | |

**适合 Robot PU 吗？** 是的。非常容易实现。

---

### 3. 向量场直方图（VFH）

势场法的更高级版本。

**工作原理：**
- 构建障碍物方向的直方图
- 选择最接近领导者朝向的安全方向

**为什么能解决冲突：** 它明确找到尽可能接近领导者朝向的无碰撞方向。

| 优点 | 缺点 |
|------|------|
| 平滑 | 更重的计算 |
| 避免局部极小值 | 需要更多调参 |
| 在真实机器人中使用（如 Pioneer 机器人） | |

**适合 Robot PU 吗？** 可能。简化后可行。

---

### 4. 动态窗口法（DWA）

用于 ROS 导航栈。

**工作原理：**
- 模拟可能的运动
- 选择避开障碍物且朝向目标的运动

**为什么能解决冲突：** 它同时优化两个目标。

| 优点 | 缺点 |
|------|------|
| 非常健壮 | 对微控制器太重 |
| 处理动力学 | 需要速度模拟 |

**适合 Robot PU 吗？** 不适合。计算成本太高。

---

### 5. Boids 风格蜂群（Reynolds 规则）

经典的群体算法。三条规则：

- **凝聚力** → 向领导者移动
- **分离** → 避开障碍物和其他机器人
- **对齐** → 匹配领导者朝向

**为什么能解决冲突：** 避障内置于"分离"规则中。

| 优点 | 缺点 |
|------|------|
| 自然的群体行为 | 更难调参 |
| 平滑运动 | 需要平衡权重 |
| 可扩展到许多机器人 | |

**适合 Robot PU 吗？** 是的。使用简单传感器效果出奇地好。

---

### 6. 混合方案：领导者朝向 + 避障覆盖

这是最简单的实用解决方案。

**工作原理：**
- 正常情况下跟随领导者朝向
- 如果检测到障碍物 → 临时用避障转向覆盖
- 清除后 → 恢复领导者朝向

**为什么能解决冲突：** 它是包容架构和势场法之间的折衷。

| 优点 | 缺点 |
|------|------|
| 简单 | 不如势场法平滑 |
| 效果好 | |
| 可预测 | |

**适合 Robot PU 吗？** 是的。最容易实现。

---

## ⭐ Robot PU 应该使用哪个算法？

| 算法 | 在 PU 上可行？ | 难度 | 平滑度 | 备注 |
|------|---------------|------|--------|------|
| 势场法 | ✔️ | 中等 | 高 | 简单性与平滑度的最佳平衡 |
| 包容架构 | ✔️✔️ | 简单 | 中等 | 最容易实现，非常可靠 |
| VFH | ✔️ | 困难 | 高 | 很好但复杂 |
| DWA | ❌ | 非常困难 | 高 | 对 micro:bit 太重 |
| Boids | ✔️ | 中等 | 高 | 非常适合多机器人群体 |
| 混合覆盖 | ✔️✔️ | 简单 | 中等 | 实用且有效 |

如果你想要性能 + 简单性的最佳组合，选择：

- ⭐ **势场法**
- ⭐ **混合覆盖**（除非检测到障碍物，否则跟随领导者）

如果你想要真正的群体行为，选择：

- ⭐ **Boids**（凝聚力 + 分离 + 对齐）

---

## 🏆 最终推荐：混合覆盖

考虑到 micro:bit 非常有限的 RAM、没有浮点硬件和紧张的 CPU 预算，用于组合以下功能的最佳算法：

- 领导者指南针朝向跟随
- 摇杆速度跟随
- 局部避障

**不是**那些花哨的学术算法，如 VFH 或 DWA。那些太重了。

适合 micro:bit 约束并对 Robot PU 可靠工作的算法是：

### ⭐ 混合覆盖（跟随-领导者 + 避障覆盖）

这是最简单、最健壮、对微控制器最友好的解决方案。它本质上是包容架构的轻量级版本，带有一点点势场逻辑。

### 为什么这个算法是最佳选择

- ✔ **极低的 CPU 使用率** — 每次循环只需几个整数操作。
- ✔ **没有数组、直方图或浮点运算** — 完美适配 micro:bit 的微小内存。
- ✔ **可预测的行为** — 避障总是获胜，但只是暂时的。
- ✔ **易于调参** — 只需调整几个阈值。
- ✔ **与以下功能完美配合：** 指南针朝向、摇杆速度、声呐距离、无线电消息。
- ✔ **可扩展到许多跟随者** — 每个机器人运行相同的简单逻辑。

### 混合覆盖算法如何工作

1. **正常模式：** 机器人跟随领导者的朝向和速度。
2. **覆盖模式：** 如果检测到障碍物：临时忽略领导者，执行避障转向，清除后恢复跟随。
3. **平滑混合：** 转向量 = 主要是领导者朝向，但必要时被避障覆盖。

这避免了纯包容架构的"抽搐"行为和势场法的繁重数学。

### 行为优先级栈

1. 紧急停车（前方声呐 < 10cm）
2. 避障（前方声呐 < 20cm）
3. 跟随领导者朝向（指南针对齐）
4. 应用摇杆速度

这是简单、确定性的，且对 micro:bit 友好。

---

## 🤖 跟随者代码（混合覆盖）

无线电控制的朝向 + 速度，带局部避障。

```typescript
// -----------------------------
// Radio setup
// -----------------------------
radio.setGroup(42)

// Leader broadcasts: "heading,speed"
// heading = 0..359 degrees
// speed   = -100..100 (joystick Y)
let targetHeading = 0
let targetSpeed = 0

radio.onReceivedString(function (msg) {
    let parts = msg.split(",")
    if (parts.length == 2) {
        targetHeading = parseInt(parts[0])
        targetSpeed = parseInt(parts[1])
    }
})

// -----------------------------
// Hybrid Override Parameters
// -----------------------------
const EMERGENCY_STOP_CM = 10     // hard stop
const AVOID_CM = 20              // avoidance threshold
const AVOID_TURN = 0.9           // strong turn
const FOLLOW_GAIN = 1 / 90       // heading error → turn

// -----------------------------
// Helper: heading error
// -----------------------------
function headingError(): number {
    let myHeading = input.compassHeading()
    let err = targetHeading - myHeading

    // Wrap to [-180, +180]
    if (err > 180) err -= 360
    if (err < -180) err += 360

    return err
}

// -----------------------------
// Helper: compute turn from heading
// -----------------------------
function computeFollowTurn(): number {
    let err = headingError()
    let turn = err * FOLLOW_GAIN

    // clamp to [-1, +1]
    if (turn > 1) turn = 1
    if (turn < -1) turn = -1

    return turn
}

// -----------------------------
// Helper: compute forward speed
// -----------------------------
function computeFollowSpeed(): number {
    // joystick Y (-100..100) → speed (-2..2)
    return targetSpeed / 50
}

// -----------------------------
// Main loop: Hybrid Override
// -----------------------------
basic.forever(function () {

    // Read center sonar bin
    let d = robotPu.frontDistanceArray()[2]

    // 1) Emergency stop
    if (d > 0 && d < EMERGENCY_STOP_CM) {
        robotPu.walk(0, 0)
        basic.showIcon(IconNames.No)
        return
    }

    // 2) Obstacle avoidance override
    if (d > 0 && d < AVOID_CM) {
        // Turn away from obstacle (turn right)
        robotPu.walk(1.0, AVOID_TURN)
        return
    }

    // 3) Normal follow mode
    let fwd = computeFollowSpeed()
    let turn = computeFollowTurn()

    robotPu.walk(fwd, turn)
    basic.pause(20)
})
```

### 工作原理

**正常模式：**
- 机器人将其指南针对准到领导者的朝向
- 机器人匹配领导者的摇杆速度
- 平滑、协调的群体运动

**覆盖模式：**
当声呐检测到障碍物时触发：
- 如果危险接近则紧急停车
- 如果中等接近则避障转向
- 领导者命令被暂时忽略
- 一旦清除，机器人恢复跟随

这确保了：安全性、平滑性、低 CPU 使用率、对多个跟随者的可扩展性。

---

## 🎮 领导者机器人（手柄控制器）代码

向所有跟随者广播朝向 + 速度。

```typescript
// -------------------------------------
// Leader Gamepad for Robot PU Swarm
// Compass heading + joystick speed → radio
// -------------------------------------

radio.setGroup(42)   // All robots must use the same group

basic.forever(function () {

    // 1. Compass heading (0–359 degrees)
    let heading = input.compassHeading()

    // 2. Joystick Y speed (-100..100)
    // Forward = positive, backward = negative
    let speed = robotPu.joystickY()

    // 3. Pack into a simple string: "heading,speed"
    let msg = heading + "," + speed

    // 4. Broadcast to all followers
    radio.sendString(msg)

    basic.pause(80)   // ~12.5 updates per second
})
```

### 工作原理

- ✔ **指南针朝向** — 领导者的方向成为群体的全局方向。
- ✔ **摇杆速度** — 领导者控制群体的移动速度：前推 → 群体前进，后拉 → 群体后退，居中 → 群体停止。
- ✔ **无线电广播** — 每个跟随者接收相同的 `"heading,speed"` 数据包并相应地做出反应。
- ✔ **更新频率** — 80ms 是一个最佳值：足够快以实现平滑控制，足够慢以避免无线电拥塞。

### 可选增强

- 按钮 A/B 切换"编队模式"
- "停止所有机器人"紧急广播
- 滤波以实现更平滑的摇杆控制
- 使用倾斜控制代替摇杆的版本
- 发送领导者位置 (x,y) 用于编队控制的版本
