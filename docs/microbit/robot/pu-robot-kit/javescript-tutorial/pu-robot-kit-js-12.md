---
sidebar_position: 12
sidebar_label: 12:Robot PU 迷宫跑者
---

# Robot PU 迷宫跑者

## 迷宫求解教程（Robot PU）

本教程展示如何使用经典策略求解迷宫：

- 跟随右侧墙壁
- 跟随左侧墙壁

对于简单连通迷宫（没有"浮动孤岛"墙壁），只要存在出口，任一规则都能保证到达。

Robot PU 不需要完整的迷宫地图。它只需要根据声呐距离判断"转弯 / 直行 / 掉头"。

---

## 知识准备

- [MakeCode 循环](https://makecode.microbit.org/blocks/loops)
- [MakeCode JavaScript 语句](https://makecode.microbit.org/javascript/statements)
- [迷宫求解算法 - Wikipedia](https://en.wikipedia.org/wiki/Maze-solving_algorithm)

---

## 前置条件

- 在 MakeCode 中添加 Robot PU 扩展
- 搭建一个声呐能检测到墙壁的迷宫（纸板箱、书本、泡沫块）
- 使用摩擦力良好的地面（避免光滑桌面）

---

## 你将构建什么

- 一个使用 `robotPu.walk(speed, turn)` 的简单自主迷宫求解器
- 可以选择右手法则或左手法则进行墙壁跟随

---

## 使用的 Robot PU API

Robot PU 是一个由 micro:bit 控制的交互式 STEM 伙伴。在这个迷宫项目中，我们依赖以下 API：

| API | 描述 |
|-----|------|
| `robotPu.walk(speed, turn)` | 运动控制 |
| `robotPu.frontDistanceArray()` | 声呐扫描 |

---

## 为什么墙壁跟随有效（以及何时失效）

### "保证能解"的含义

如果迷宫是**简单连通**的（所有墙壁都与外边界相连），那么：

- 将**右手**贴在墙上（**右手法则**）最终会引导你到达出口。
- 将**左手**贴在墙上（**左手法则**）最终会引导你到达出口。

### 何时会失败

墙壁跟随在包含**孤岛**（不与外边界相连的墙壁）的迷宫中可能会**永远循环**。对于这类迷宫，你需要建图（如 `2d-map.md`）+ 探索。

---

## 传感策略：`frontDistanceArray()` 分区

Robot PU 的声呐面向下方约 35°。在行走过程中，PU 会自然摇摆，扩展程序维护一个小型"前方扫描"数组。

在本更新教程中我们使用：

**前方扫描数组：** `robotPu.frontDistanceArray()`

它返回从左到右的 **5 个距离分区**：

| 索引 | 方向 |
|------|------|
| `d[0]` | 最左侧 |
| `d[1]` | 左侧 |
| `d[2]` | 中央 / 前方 |
| `d[3]` | 右侧 |
| `d[4]` | 最右侧 |

这些分区旨在让你无需移动头部就能获得简单的"左 / 前 / 右"视图。

然后我们使用**优先级顺序**来决定下一步动作。

---

## 决策规则（右手法则）

1. 如果**右侧**畅通 → 右转
2. 否则如果**前方**畅通 → 直行
3. 否则如果**左侧**畅通 → 左转
4. 否则 → 掉头

---

## 实现：右手法则（推荐起点）

将此代码复制到 MakeCode 编辑器的 **JavaScript 标签页**。

```typescript
function clampInt (x: number, lo: number, hi: number) {
    if (x < lo) {
        return lo
    }
    if (x > hi) {
        return hi
    }
    return x
}
let leftOpen = false
let frontOpen = false
let rightOpen = false
let dRight = 0
let dFront = 0
let dLeft = 0
let d: number[] = []
let t0 = 0
let TURN_BIAS = 0
let FWD_SPEED = 0

robotPu.setChannel(166)
// Distance thresholds (cm)
// These align with the extension's internal safety thresholds (~7.5cm danger + ~20cm caution)
let OPEN_CM = 30
// Movement tuning
FWD_SPEED = 4
// Turn bias: -1 left, +1 right
TURN_BIAS = 0.
basic.forever(function () {
    robotPu.sonarScan()
    // 1) Read 5-bin front scan (left -> right)
    d = robotPu.frontDistanceArray()
    dLeft = (dLeft * 9+ d[0]) * 0.1
    dFront = (dFront * 9 + d[2]) * 0.1
    dRight = (dRight * 9 + d[4]) *0.1
    rightOpen = dRight > OPEN_CM
    frontOpen = dFront > OPEN_CM *0.8
    leftOpen = dLeft > OPEN_CM * 0.4
    FWD_SPEED = Math.map(Math.max(dRight, dLeft), 7, 20, -1, 3)
    // 3) Right-hand rule priority
    if (rightOpen) {
        robotPu.walk(FWD_SPEED, 0.2)
    } else if (frontOpen) {
        robotPu.walk(FWD_SPEED, 0)
    } else {
        robotPu.explore()
    }
    radio.sendValue("fd0", d[0])
    radio.sendValue("fd1", d[1])
    radio.sendValue("fd2", d[2])
    radio.sendValue("fd3", d[3])
    radio.sendValue("fd4", d[4])
    radio.sendValue("broll", robotPu.bodyRoll())
    radio.sendValue("bpitch", robotPu.bodyPitch())
})
```
<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_TCuaMFC7U03s"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

---

## 跟随左侧墙壁变体

如果你想跟随**左侧墙壁**，只需翻转优先级顺序：

1. 如果**左侧**畅通 → 左转
2. 否则如果**前方**畅通 → 直行
3. 否则如果**右侧**畅通 → 右转
4. 否则 → 掉头

你可以通过修改决策部分来实现：

```typescript
// Left-hand rule priority
if (leftOpen) {
    turnLeft90ish()
} else if (frontOpen) {
    stepForward()
} else if (rightOpen) {
    turnRight90ish()
} else {
    turnAround()
}
```

---

## 测试与校准

### 搭建迷宫
- 使用声呐能检测到的纸板墙或积木块。
- 走廊宽度应足够 Robot PU 通行。

### 调整阈值
- 如果 PU 剐蹭墙壁 → 增大 `OPEN_CM` 和/或减小 `FWD_SPEED`
- 如果 PU 拒绝进入走廊 → 减小 `OPEN_CM`

### 调整转弯
- 如果转弯角度太小 → 增加 `turnRight90ish()` / `turnLeft90ish()` 中的转弯持续时间
- 如果转弯过度 → 减少持续时间或降低 `TURN_BIAS`

---

## 问题排查

| 症状 | 解决方案 |
|------|----------|
| 机器人剐蹭墙壁 | 增大 `OPEN_CM`；减速：减小 `FWD_SPEED` |
| 机器人转弯太晚并撞墙 | 增大 `TOO_CLOSE_CM`；增加紧急转弯持续时间 |
| 机器人在狭窄走廊中振荡 | 减小 `TURN_BIAS`；减小 `TURN_SPEED` |
| 机器人在原地转圈 | 减小 `OPEN_CM`（可能认为所有方向都被挡住）；略微增加 `stepForward()` 的持续时间 |

---

## 后续步骤（升级路径）

墙壁跟随简单而稳健，但它并不"理解"迷宫。

**下一步升级**（基于 `2d-map.md`）：

1. **局部地图验证**：从相同的左/前/右扫描更新 5×5 占用网格。
2. **检测循环**：如果多次重访相同的局部模式，切换策略。
3. **混合求解器**：跟随墙壁，但如果卡住，使用占用地图选择替代路径。
