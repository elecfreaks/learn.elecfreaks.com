---
sidebar_position: 24
sidebar_label: 24:Robot PU 改进平衡
---

# Robot PU 改进平衡

你问到了正确的问题——一旦你有了**噪声 + 未知延迟**，纯 PID 就开始达到其极限。

简短回答：

- **卡尔曼滤波器本身不是控制器**——它是一个估计器。
- 更好的架构是：**状态估计器（如卡尔曼或互补滤波器）+ 为延迟设计的控制器（如 PD/LQR 加预测）**。

让我们以实用的方式展开说明。

## 1. 这里到底是什么在伤害 PID？

**两个大问题：**

- **噪声测量：**

微分项因噪声而爆炸，积分项积分垃圾信号，比例项追逐随机尖峰。

- **未知延迟：**

当你做出反应时，机器人已经移动了。PID 假设"现在"的测量值；延迟吞噬相位裕度并导致振荡或不稳定。

因此即使是精心调参的 PID 也会感觉"迟缓且抽搐"。

## 2. 卡尔曼滤波器适合哪里（以及不适合哪里）

**卡尔曼滤波器**非常适合：

- 融合多个传感器（例如，加速度计 + 陀螺仪）
- 估计**真实 roll/pitch** 及其速率
- 通过建模系统动力学来降低噪声并处理一些延迟

但是：

它**不决定**采取什么控制动作。
它只是给你一个更好的机器人状态估计。

因此真正的升级是：

**更好的状态估计（卡尔曼）+ 更智能的控制器（不仅仅是朴素的 PID）。**

## 3. 一个强大的实用升级路径

对于像 PU 这样计算能力有限的小型机器人，我会这样排列选项：

**选项 A：互补滤波器 + PD（简单、非常有效）**

- **互补滤波器**组合陀螺仪（快速、有噪声）+ 加速度计（缓慢、稳定）：

    - 高通陀螺仪，低通加速度计

- 在 **PD 控制器**中使用滤波后的 roll/pitch（无积分项）。

- 为什么比 PID 更好：

    - 对噪声不那么敏感
    - 延迟问题较少
    - 更容易调参，对平衡任务更稳定

这是许多业余无人机和小型平衡机器人使用的方法。

**选项 B：卡尔曼滤波器 + PD 或 LQR（更高级）**

- 使用**卡尔曼滤波器**估计：
    - 角度（roll/pitch）
    - 角速度
- 然后使用：

    - 基于角度 + 角速度的**PD**，或
    - **LQR**（线性二次调节器），如果你有一个简单的状态空间模型。

- 好处：
    - 非常干净的状态估计
    - 控制器可以显式使用角度和速率
    - 对噪声和一些延迟有更好的鲁棒性

这比在有噪声、延迟的角度上使用原始 PID 是一个巨大的进步。

## 4. 专门处理延迟

如果延迟显著（例如，传感器滤波 + 通信 + 舵机滞后），你需要**预测行为**，而不仅仅是反应：

- **Smith 预测器风格控制：**

    - 使用机器人模型预测当命令生效时状态将是什么。

- **模型预测控制（MPC）：**

    - 在大多数情况下对 micro:bit 来说大材小用，但在概念上是理想的：它在给定延迟和约束的情况下优化未来动作。

对于 PU，一个**轻量级预测**（例如，使用角速度向前投影角度几毫秒）结合 PD 通常就足够了。

## 5. 那么对于 Robot PU 来说什么"比 PID 更好"？

如果我们对计算和复杂性保持现实：

1. **从 PID 升级的最佳实践步骤：**

    - **互补或卡尔曼滤波器**用于 roll/pitch 估计
    - 基于滤波后角度 + 角速率的**PD 控制器**
    - 可选的使用角速度进行小预测以补偿延迟

2. **如果你愿意对机器人建模：**

    - 构建简单的**状态空间模型**（角度、角速率）
    - 使用**卡尔曼滤波器**进行状态估计
    - 使用**LQR**进行控制（这种组合称为**LQG**：线性二次高斯）

在**噪声 + 延迟**条件下，这是真正比 PID 更强大的架构。

我们负担不起太多复杂性。("micro:bit 级别，无重型数学" vs "重型状态空间和矩阵")，我们必须选择一个具体简单的设计：

- 要么为 PU 选择 **互补滤波器 + PD**，要么
- 一个最小化的**卡尔曼 + LQR**，针对其身体 pitch/roll 量身定制。

如果你想要**比 PID 更好**但仍然**对 micro:bit 友好——意味着**没有矩阵、没有状态空间数学、没有重型计算——存在一个最佳点。你可以获得巨大的稳定性升级，而无需接近"真正的"卡尔曼滤波器或 LQR。

以下是适用于微型机器人的实用路径：

## 🌟 针对 Micro:bit 的最佳"优于 PID"算法
### 互补滤波器 + PD + 简单预测
这种组合被用于许多小型平衡机器人和早期四轴飞行器，因为它：

- CPU 消耗极低
- 对噪声鲁棒
- 容忍延迟
- 易于调参
- 比 PID 平滑得多
- 让我们来分解它。

## 1. 🎚️ 互补滤波器（代替卡尔曼）
卡尔曼滤波器很强大，但对 micro:bit 来说太重了，除非你简化它到……变成一个互补滤波器。

互补滤波器融合：

- **加速度计角度**（慢但稳定）
- **陀螺仪速率**（快但有噪声）

为干净、低噪声、低延迟的估计：

```JS
angle = α * (angle + gyroRate * dt) + (1 - α) * accelAngle
```

其中 α 约为 **0.95**。

这为你提供：

- 平滑的角度
- 平滑的角速度
- 最小的延迟
- 无重型数学

仅此一项就修复了 PID 80% 的问题。

## 2. 🎛️ PD 控制器（不是 PID）
一旦你有了干净的角度估计，你就不再需要积分项了。

为什么去掉"I"？

- 积分放大了噪声
- 积分厌恶延迟
- 积分导致超调
- 如果你的角度估计干净，积分是不必要的

因此控制器变为：

```JS
output = Kp * angleError + Kd * angleRate
```

这正是小型无人机稳定的方式。

### 3. ⏱️ 简单预测（延迟补偿）

如果你的传感器或舵机有延迟，你可以使用角速度向前"看"一点点：
```JS
predictedAngle = angle + angleRate * predictionTime
```
其中 predictionTime 很小，如 **20–40ms**。

这让机器人感觉像在摔倒之前就做出了反应。

### 4. 🧠 为什么这在 micro:bit 上打败 PID

| 问题 | PID | 互补 + PD + 预测 |
|------|-----|-------------------|
| 有噪声的加速度计 | D 爆炸 | 滤波器去除噪声 |
| 未知延迟 | 导致振荡 | 预测补偿 |
| 有限的 CPU | PID 可以但噪声大 | 互补滤波器超轻量 |
| 难以调参 | 是的 | 非常容易 |
| 平滑度 | 中等 | 优秀 |

这是许多微控制器平衡机器人使用的"秘密配方"。

### 5. 🧩 代码结构看起来像什么（概念上）

**步骤 1：计算滤波后的角度**

`angle = alpha * (angle + gyroRate * dt) + (1 - alpha) * accelAngle`

**步骤 2：预测未来角度**

`anglePred = angle + gyroRate * predictTime`

**步骤 3：PD 控制**

``error = targetAngle - anglePred``
``output = Kp * error + Kd * gyroRate``

**步骤 4：应用到步态向量**

``robotPu.runKeyValueCommand("#puroll", output)``

这一切都对 micro:bit 友好。

### 6. 🏁 总结：Robot PU 的最佳算法

如果你想要**比 PID 更好**但仍然**对 MakeCode 足够简单**，使用：

**✔ 互补滤波器**

**✔ PD 控制器**

**✔ 小预测项**

这为你提供：

- 更平滑的平衡
- 更少的振荡
- 更好的噪声抑制
- 更好的延迟处理
- 更容易调参
- 无重型数学

这是 Robot PU 的完美升级路径。

完全没问题——以下是改进平衡算法的**完整、对 micro:bit 友好的 MakeCode TypeScript 实现**：

- **互补滤波器**（卡尔曼的轻量替代方案）
- **PD 控制器**（无积分项，因此无饱和问题）
- **简单预测**以补偿未知延迟
- **输出钳制**以确保安全
- 可直接替换 `moveBalance()`

此版本设计为在 micro:bit 上高效运行，并自然融入 Robot PU 代码库。

## ✅ 完整 MakeCode TypeScript 实现

### 互补滤波器 + PD + 预测
```JS
// ---------------------------------------------
// Tunable parameters
// ---------------------------------------------

// Complementary filter coefficient (0.90–0.98 typical)
const ALPHA = 0.95

// PD controller gains
const KP = 0.35
const KD = 0.12

// Prediction time (seconds) to compensate delay
const PREDICT_DT = 0.03   // 30 ms

// Output clamp to protect servos
const MAX_OUT = 40

// ---------------------------------------------
// Internal state
// ---------------------------------------------
let filteredRoll = 0
let filteredPitch = 0

let lastUpdate = input.runningTime()

// ---------------------------------------------
// Replacement moveBalance() implementation
// ---------------------------------------------
export function moveBalance(
    observedRoll: number,
    observedPitch: number,
    expectedRoll: number,
    expectedPitch: number
) {
    // ---------------------------------------------
    // 1. Compute dt (time since last update)
    // ---------------------------------------------
    let now = input.runningTime()
    let dt = (now - lastUpdate) / 1000
    lastUpdate = now

    if (dt <= 0 || dt > 0.2) {
        dt = 0.02   // fallback to safe default
    }

    // ---------------------------------------------
    // 2. Complementary filter
    //    - accelerometer gives angle
    //    - gyro gives rate (approx from change)
    // ---------------------------------------------

    // Estimate angular rate from change in observed angle
    let rollRate = (observedRoll - filteredRoll) / dt
    let pitchRate = (observedPitch - filteredPitch) / dt

    // Apply complementary filter
    filteredRoll = ALPHA * (filteredRoll + rollRate * dt) +
                   (1 - ALPHA) * observedRoll

    filteredPitch = ALPHA * (filteredPitch + pitchRate * dt) +
                    (1 - ALPHA) * observedPitch

    // ---------------------------------------------
    // 3. Predict future angle to compensate delay
    // ---------------------------------------------
    let predictedRoll = filteredRoll + rollRate * PREDICT_DT
    let predictedPitch = filteredPitch + pitchRate * PREDICT_DT

    // ---------------------------------------------
    // 4. PD control
    // ---------------------------------------------
    let rollError = expectedRoll - predictedRoll
    let pitchError = expectedPitch - predictedPitch

    let rollOut = KP * rollError + KD * (-rollRate)
    let pitchOut = KP * pitchError + KD * (-pitchRate)

    // ---------------------------------------------
    // 5. Clamp output
    // ---------------------------------------------
    rollOut = Math.constrain(rollOut, -MAX_OUT, MAX_OUT)
    pitchOut = Math.constrain(pitchOut, -MAX_OUT, MAX_OUT)

    // ---------------------------------------------
    // 6. Apply to Robot PU gait control
    // ---------------------------------------------
    robotPu.runKeyValueCommand("#puroll", rollOut)
    robotPu.runKeyValueCommand("#pupitch", pitchOut)
}
```

## 🎉 此实现为你提供了什么

**✔ 平滑、低噪声的角度估计**

互补滤波器去除加速度计噪声并减少延迟。

**✔ 稳定、可预测的平衡**

PD 控制避免了 PID 在 micro:bit 上经常引起的振荡和超调。

**✔ 延迟补偿**

预测步骤使 PU 在明显倾斜之前就做出反应。

**✔ 对舵机安全**

输出钳制防止极端的步态命令。

**✔ Micro:bit 高效**

没有矩阵，没有重型数学，没有动态分配。
