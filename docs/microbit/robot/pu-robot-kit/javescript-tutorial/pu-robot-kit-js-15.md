---
sidebar_position: 15
sidebar_label: 15:Robot PU 自动驾驶
---

# Robot PU 自动驾驶

## 课程：使用声呐进行自动驾驶导航（Explore）

Robot PU 可以使用超声波声呐距离传感器进行导航。扩展程序提供了 `explore()` 动作，实现了一个简单的基于声呐的"自动驾驶"功能。

本课程解释：

- Robot PU 使用哪些声呐数据
- `robotPu.explore()` 内部如何工作
- 如何在自己的程序中安全使用它

---

## 1. 声呐距离传感器

Robot PU 使用 HCSR04 型超声波传感器。

在此扩展程序中：

- 读取距离（厘米）：`robotPu.sonarDistanceCm()`
- 扩展程序使用的默认接线引脚：
  - 触发（Trigger）：P2
  - 回声（Echo）：P8

---

## 2. 最简单的自动驾驶：重复调用 explore()

`robotPu.explore()` 是一个动作（反复调用时会逐步推进）。最简单的"自动驾驶"循环是：

```typescript
basic.forever(function () {
    robotPu.explore()
})
```

注意：

- `explore()` 读取声呐，更新其内部导航状态，然后调用 `walk(speed, turn)`。
- `turn` 是范围在 -1.0 到 1.0 之间的偏置值。

---

## 3. explore() 如何工作（高层概述）

在内部（`robotpu.ts` 中），`explore()` 执行以下步骤：

### A. 构建一个小型距离"点云"

Robot PU 维护一个内部距离数组：

```
pr.exploreDistance（长度 4）
```

可以将其视为从左到右的 4 个方向"分区"。

每次 `explore()` 运行时：

- 决定更新哪个分区索引 `d_i`（0..3）
- 读取当前声呐距离
- 使用滚动平均值仅更新该分区：

```
exploreDistance[d_i] = (exploreDistance[d_i] + sonarCm) * 0.5
```

这相当于一个简单的低通滤波器，用于降低噪声。

### B. 将点云转换为转向

辅助函数 `getTurnFromSonar(distances, turnGain)` 计算距离读数的加权"质心"：

- 如果右侧空间更多 → 右转
- 如果左侧空间更多 → 左转

它返回 [-1, 1] 范围内的转向值。

### C. 将障碍物距离转换为速度

`setExploreParam()` 查看最小距离并计算目标速度：

- 如果有足够空间 → 趋近前向速度
- 如果太近 → 减速或后退

它还会用低通滤波器平滑速度和方向，使运动不那么抖动。

### D. 执行运动

最后：

- `explore()` 调用 `walk(exploreSpeed, exploreDirection)`

因此你可以将 `explore()` 理解为：

`声呐感知 → 转向决策 → 行走输出`

---

## 4. 示例：使用按钮启动/停止自动驾驶

```typescript
let enabled = false

input.onButtonPressed(Button.A, function () {
    enabled = !enabled
})

basic.forever(function () {
    if (enabled) {
        robotPu.explore()
    } else {
        robotPu.stand()
    }
})
```

---

## 5. 示例：声呐太近时安全停车

即使在使用自动驾驶时，添加自己的"紧急停车"也很有帮助：

```typescript
basic.forever(function () {
    const cm = robotPu.sonarDistanceCm()

    if (cm > 0 && cm < 8) {
        // Too close: stop and stand for a moment
        for (let i = 0; i < 200; i++) {
            robotPu.stand()
        }
    } else {
        robotPu.explore()
    }
})
```

---

## 6. 总结

- `robotPu.sonarDistanceCm()` 以厘米为单位返回距离。
- `robotPu.explore()` 实现基于声呐的自动驾驶：
  - 构建 4 分区距离"点云"
  - 使用加权质心计算转向
  - 根据障碍物距离计算速度
  - 通过 `walk(speed, turn)` 驱动运动
