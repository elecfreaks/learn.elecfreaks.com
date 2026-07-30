---
sidebar_position: 23
sidebar_label: 23:Robot PU 平衡控制
---

# Robot PU 平衡控制

## 🤖 教程：让 Robot PU 在倾斜面上保持平衡

使用 Robot PU MakeCode 扩展程序

Robot PU 已经包含一个内部基于 IMU 的平衡引擎。当你调用 `rest()`、`walk()` 或 `explore()` 等动作时，PU 会自动读取 micro:bit 加速度计并调整舵机以保持直立。本教程将向你展示如何：

- 启用 PU 的内置平衡功能
- 添加倾斜反应行为
- 创建自己的"平衡训练"程序
- 通过头部倾斜反馈或声音反应进行扩展


## 1. 🧩 设置你的 MakeCode 项目

1. 前往 [https://makecode.microbit.org](https://makecode.microbit.org)
2. 创建一个**新项目**
3. 点击**扩展 → 导入 URL**
4. 粘贴仓库 URL：`https://github.com/robotgyms/pxt-robotpu`
5. 在 `on start` 中添加任何 `robotPu` 块（这会触发自动初始化）。

**示例：**
```typescript
robotPu.rest()
```

> PU 将在首次使用任何 `robotPu` API 时自动运行 `calibrate()`。


## 2. 🧘 启用内置平衡模式

最简单的平衡行为是 `rest()`：

```typescript
basic.forever(function () {
    robotPu.rest()
})
```

### 为什么这有效：

- **rest()** 保持 PU 处于稳定的空闲姿态
- 它持续使用 micro:bit 加速度计来维持平衡
- 它对声音和倾斜输入做出微妙反应

> 这是倾斜平衡练习的最佳起点。

## 3. 🎚️ 让 PU 对倾斜做出反应

Robot PU 通过 **runKeyValueCommand** 暴露两个关键的"倾斜偏置"命令：

| 键 | 含义 | 范围 |
|-----|------|------|
| **#puroll** | 侧向倾斜（左/右） | –90 到 90 度 |
| **#pupitch** | 前/后倾斜 | –90 到 90 度 |

这些值通常来自远程手柄，但你可以直接从机器人自己的 micro:bit 生成它们。

### 示例：使用 PU 自己的加速度计调整平衡

```typescript
basic.forever(function () {
    let roll = input.rotation(Rotation.Roll)
    let pitch = input.rotation(Rotation.Pitch)

    // Send tilt values to PU's balancing engine
    robotPu.runKeyValueCommand("#puroll", roll)
    robotPu.runKeyValueCommand("#pupitch", pitch)
})
```

**这做了什么：**
- PU 读取自己的倾斜
- 你将这些倾斜角度反馈到 PU 的内部稳定器中
- PU 调整其头部/身体以抵消倾斜
- 这创建了一个**自平衡回路**

> 这是"在倾斜面上保持平衡"的核心。


## 4. 🏋️ 平衡训练模式（完整程序）

以下是一个完整的程序：

- 校准 PU
- 连续读取倾斜
- 应用平滑
- 在不平坦表面上平衡 PU

```typescript
robotPu.calibrate()

basic.forever(function () {
    // Read tilt
    let roll = input.rotation(Rotation.Roll)
    let pitch = input.rotation(Rotation.Pitch)

    // Smooth the values (optional)
    roll = roll / 2
    pitch = pitch / 2

    // Feed into PU's stabilizer
    robotPu.runKeyValueCommand("#puroll", roll)
    robotPu.runKeyValueCommand("#pupitch", pitch)

    // Keep PU in rest pose while balancing
    robotPu.rest()
})
```

**为什么这有效：**
- **rest()** 保持基础稳定性
- **#puroll** / **#pupitch** 添加倾斜补偿
- 平滑防止生硬的舵机运动
- PU 在斜坡上或被轻推时保持直立的能力明显提高

---

## 5. 🔊 添加反馈（可选）

### A. PU 倾斜过大时发出声音反应

```typescript
basic.forever(function () {
    let tilt = Math.abs(input.rotation(Rotation.Roll))

    if (tilt > 40) {
        robotPu.talk("I'm falling!")
    }
})
```

### B. 基于倾斜的 LED 颜色变化

```typescript
basic.forever(function () {
    let tilt = Math.abs(input.rotation(Rotation.Pitch))

    if (tilt < 20) {
        robotPu.sing("C5")
    } else if (tilt < 40) {
        robotPu.sing("A")
    } else {
        robotPu.sing("F")
    }
})
```


## 6. 🧪 尝试这些挑战

- 让 PU **朝向**倾斜方向倾斜，而不是抵抗它
- 添加一个"平衡分数"，PU 保持直立的时间越长分数越高
- 让 PU 在倾斜板上缓慢行走的同时保持平衡
- 使用 **setWalkSpeedRange()** 来调整稳定性 vs. 速度


## 7. 📦 总结

让 Robot PU 在倾斜面上保持平衡：

1. 使用 **rest()** 进行内置平衡
2. 使用 **#puroll** 和 **#pupitch** 将倾斜值反馈给 PU
3. 在连续循环中结合两者
4. 添加平滑和反馈以获得更好的性能

> 所有行为均由 Robot PU MakeCode 扩展程序直接支持。

基于阈值触发的平衡控制器很简单，但它产生**二元行为**：在倾斜超过限制之前什么都不发生，然后机器人突然反应。这导致：

- 生硬的修正
- 超调
- 小倾斜时稳定性差
- 阈值附近的噪声行为

Robot PU 的 **moveBalance()** 已经有正确的输入（观察到的 roll/pitch vs. 预期的 roll/pitch）。它需要的是**连续控制律**，而不是阈值开关。

以下是几个明显更好且对 micro:bit 级硬件足够轻量的算法。

## ⭐ 推荐替代方案：PD（比例-微分）平衡控制器

这是小型机器人、四足机器人甚至无人机中使用的标准方法。它**简单、稳定且平滑**。

### 思路

计算误差：

- e_r = r_expected – r_observed
- e_p = p_expected – p_observed


然后计算控制输出：


- u_r = Kp · e_r + Kd · (e_r – e_r_prev)
- u_p = Kp · e_p + Kd · (e_p – e_p_prev)


然后应用：

```typescript
robotPu.runKeyValueCommand("#puroll", u_r)
robotPu.runKeyValueCommand("#pupitch", u_p)
```

**为什么更好：**
- 平滑、连续的修正
- 没有突然的跳变
- 自动随倾斜幅度缩放
- 微分项阻尼振荡

**放在哪里：**

在 **moveBalance()** 内部，用 PD 计算替换阈值逻辑。


## ⭐ 更好：PID 控制器（比例-积分-微分）

如果 PU 即使在"平衡"状态下也倾向于略微倾斜，添加**积分项**：


- u = Kp · e + Ki · Σe + Kd · Δe


这消除了长期偏置（例如，不均匀的重量分布）。

**优点：**

- 最稳定
- 消除漂移
- 最平滑的行为

**缺点：**

- 需要稍多的调参


## ⭐ 轻量替代方案：线性增益缩放（仅比例）

如果 PD 感觉太复杂，使用简单的比例控制器：

```typescript
let rollError = expectedRoll - observedRoll
let pitchError = expectedPitch - observedPitch

let rollControl = rollError * Kp
let pitchControl = pitchError * Kp

robotPu.runKeyValueCommand("#puroll", rollControl)
robotPu.runKeyValueCommand("#pupitch", pitchControl)
```

**为什么比阈值好：**
- 连续
- 没有阈值穿越引起的振荡
- 非常容易调参


## ⭐ 高级选项：互补滤波器 + PD

如果机器人移动很快或 IMU 噪声大，使用互补滤波器组合加速度计 + 陀螺仪（如果可用）：

- 快速陀螺仪用于短期稳定性
- 慢速加速度计用于长期漂移纠正

然后将滤波后的角度输入 PD 控制器。

这是许多业余无人机稳定的方式。

## ⭐ 最高级：模型预测控制（MPC）

这对 micro:bit 来说是大材小用，但值得一提：

- 预测未来倾斜
- 优化控制向量
- 在动态地形上非常稳定

除非你将 PU 移植到更强大的 MCU，否则不推荐。

## 🧠 推荐升级总结

| 方法 | 难度 | 平滑度 | 稳定性 | 备注 |
|------|------|--------|--------|------|
| 阈值（当前） | 简单 | 差 | 差 | 离散、生硬 |
| 比例（P） | 简单 | 好 | 好 | 最佳简单升级 |
| PD | 中等 | 非常好 | 非常好 | 最佳整体选择 |
| PID | 中等 | 优秀 | 优秀 | 消除漂移 |
| 互补滤波器 + PD | 中等 | 优秀 | 优秀 | 最适合噪声 IMU |

以下是对 `moveBalance()` 的**基于 PID 的清晰现代化重写**，用以下内容替换阈值逻辑：

- 传感器输入的低通平滑
- Roll 和 Pitch 的完整 PID 控制
- 微分滤波以减少噪声
- 积分抗饱和以防止失控积累
- 钳制输出以保持步态向量安全

此版本用 **MakeCode TypeScript** 编写，匹配 `robotpu.ts` 的风格。


## 🔧 改进的 `moveBalance()`（PID + 平滑 + 抗饱和）


```typescript
// --- PID tuning parameters ---
const KP = 0.35
const KI = 0.02
const KD = 0.15

// --- Smoothing filter (0–1, higher = smoother) ---
const SMOOTH = 0.6

// --- Output limits (protect servos) ---
const MAX_OUT = 40

// --- Internal PID state ---
let prevRollError = 0
let prevPitchError = 0
let rollIntegral = 0
let pitchIntegral = 0

// --- Derivative smoothing ---
const DERIV_SMOOTH = 0.5
let prevRollDeriv = 0
let prevPitchDeriv = 0


export function moveBalance(
    observedRoll: number,
    observedPitch: number,
    expectedRoll: number,
    expectedPitch: number
) {
    // -----------------------------
    // 1. Smooth the sensor readings
    // -----------------------------
    let roll = observedRoll * (1 - SMOOTH) + expectedRoll * SMOOTH
    let pitch = observedPitch * (1 - SMOOTH) + expectedPitch * SMOOTH

    // -----------------------------
    // 2. Compute errors
    // -----------------------------
    let rollError = expectedRoll - roll
    let pitchError = expectedPitch - pitch

    // -----------------------------
    // 3. Integral term with anti‑windup
    // -----------------------------
    rollIntegral += rollError
    pitchIntegral += pitchError

    // Clamp integrals to prevent runaway
    rollIntegral = Math.constrain(rollIntegral, -MAX_OUT, MAX_OUT)
    pitchIntegral = Math.constrain(pitchIntegral, -MAX_OUT, MAX_OUT)

    // -----------------------------
    // 4. Derivative term (with smoothing)
    // -----------------------------
    let rollDerivRaw = rollError - prevRollError
    let pitchDerivRaw = pitchError - prevPitchError

    let rollDeriv = prevRollDeriv * DERIV_SMOOTH + rollDerivRaw * (1 - DERIV_SMOOTH)
    let pitchDeriv = prevPitchDeriv * DERIV_SMOOTH + pitchDerivRaw * (1 - DERIV_SMOOTH)

    prevRollDeriv = rollDeriv
    prevPitchDeriv = pitchDeriv

    prevRollError = rollError
    prevPitchError = pitchError

    // -----------------------------
    // 5. PID output
    // -----------------------------
    let rollOut = KP * rollError + KI * rollIntegral + KD * rollDeriv
    let pitchOut = KP * pitchError + KI * pitchIntegral + KD * pitchDeriv

    // Clamp output to safe range
    rollOut = Math.constrain(rollOut, -MAX_OUT, MAX_OUT)
    pitchOut = Math.constrain(pitchOut, -MAX_OUT, MAX_OUT)

    // -----------------------------
    // 6. Apply to gait control
    // -----------------------------
    robotPu.runKeyValueCommand("#puroll", rollOut)
    robotPu.runKeyValueCommand("#pupitch", pitchOut)
}
```

---

## 🧠 为什么此版本显著更好

**✔ 平滑、连续的平衡**

低通滤波器防止 micro:bit 加速度计的抖动。

**✔ PID 提供比例、稳定的修正**

- P 按比例纠正倾斜
- I 消除长期倾斜（例如，重量不平衡）
- D 阻尼振荡和超调

**✔ 抗饱和防止不稳定**

积分项被钳制，使其永远不会"失控"。

**✔ 微分平滑减少噪声**

来自 micro:bit IMU 的原始微分噪声极大；平滑使其可用。

**✔ 输出钳制保护舵机**

确保步态向量保持在安全限制内。
