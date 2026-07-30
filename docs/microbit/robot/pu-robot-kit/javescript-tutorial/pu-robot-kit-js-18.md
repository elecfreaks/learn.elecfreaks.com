---
sidebar_position: 18
sidebar_label: 18:Robot PU 动作
---

# Robot PU 动作

## 🤖 课程：Robot PU 动作（异步运动）

大多数 Robot PU 动作被设计为异步的，以防止 micro:bit 卡死。

许多运动块返回状态码：

- **0**：动作已达到完成边界（一个"步" / 状态已完成）
- **1**：动作仍在运行（继续调用它）

这让你可以通过反复调用动作直到观察到足够的 `0` 返回事件来自行构建"同步"行为。

---

## 1. 动作 API（你可以调用的）

### 运动动作（返回状态数字）

- `robotPu.walk(speed, turn)`
- `robotPu.sideStep(direction)`
- `robotPu.explore()`
- `robotPu.dance()`
- `robotPu.kick()`
- `robotPu.jump()`
- `robotPu.rest()`
- `robotPu.stand()`

### 运动动作（语句版本，返回 void）

这些是相同的动作，但不返回代码，因此更难精确排序：

- `robotPu.walkDo(speed, turn)`
- `robotPu.sideStepDo(direction)`
- `robotPu.exploreDo()`
- `robotPu.danceDo()`
- `robotPu.kickDo()`
- `robotPu.jumpDo()`
- `robotPu.restDo()`
- `robotPu.standDo()`

### 非运动动作（通常是同步的）

- `robotPu.greet()`
- `robotPu.talk(text)`
- `robotPu.sing(text)`
- `robotPu.setMode(mode)`（切换内部行为状态机）

---

## 2. 为什么动作是异步的

像行走或横移这样的运动不是"一个电机指令"。它是一系列身体姿态，必须随时间反复更新。

如果一个块试图在一次调用中完成整个运动（阻塞式），它可能：

- 冻结按钮/无线电事件
- 饿死后台任务
- 让整个系统感觉"卡住"

因此 Robot PU 动作 API 被设计为在循环中反复调用。

---

## 3. "同步"与"异步"模式比较

### A. 同步（阻塞）思路（我们避免的）

这种风格可能导致卡死：

```typescript
// (Concept only) A blocking API would look like this.
// robotPu.walkBlocking(3)
// robotPu.sideStepBlocking(-1)
```

### B. 异步（推荐）

你多次调用该动作。每次调用推进运动。

```typescript
let rc = robotPu.walk(2, 0)
if (rc == 0) {
    // A completion boundary happened (a gait state finished)
}
```

---

## 3.5 示例：调用 walk() 100 次（不检查返回值）

有时你只想在固定时间内"驱动"运动，而不关心步数计数。

此模式忽略返回值，仅反复调用 `walk(...)`：

```typescript
for (let i = 0; i < 100; i++) {
    robotPu.walk(2, 0) // ignore rc
}
```

---

## 3.6 JavaScript"函数指针"（回调）

在 JavaScript / TypeScript 中，你可以将函数存储在变量中并将其传递给另一个函数。这通常被称为回调（类似于 C 语言中"函数指针"的概念）。

在本课程中，我们将类似 `() => number` 的函数传递给诸如 `doCompletions(...)` 的辅助函数。

示例：

```typescript
function myAction(): number {
    return robotPu.walk(2, 0)
}

function do400Times(run: () => number): void {
    let done = 0
    while (done < 400) {
        const rc = run()
        done += 1
    }
}

// Pass a function *reference* (do not call it here)
do400Times(myAction)

// Or pass an inline anonymous function (arrow function)
do400Times(() => robotPu.walk(2, 0))
```

关键思想：

- `robotPu.walk(2, 0)` 立即调用函数并产生一个数字。
- `() => robotPu.walk(2, 0)` 产生一个我们可以在之后多次调用的函数。

---

## 4. 如何"等待完成"（安全构建同步行为）

最安全的模式是：

1. 调用动作
2. 如果它返回 `1`，说明仍在运行（继续调用）
3. 当它返回 `0` 时，将其视为用于计数的完成边界

### A. 等待一个完成事件

```typescript
function waitOneCompletion(run: () => number): void {
    while (true) {
        const rc = run()
        if (rc == 0) return
    }
}
```

### B. 在循环中计数完成次数

```typescript
function doCompletions(run: () => number, completions: number): void {
    let done = 0
    while (done < completions) {
        const rc = run()
        if (rc == 0) done += 1
    }
}
```

注意：

- "完成"的含义取决于动作（通常是一个步态/状态边界）。
- 对于某些步态，一个物理"步"由多个内部状态组成。如果你的步态每步使用 2 个状态，那么你将每步看到 `rc == 0` 两次。

---

## 5. 最终程序：向前行走，向左横移，跳跃，站立

要求：

- 向前行走 3 步（如果每步 2 个状态，计数 `return == 0` 6 次）
- 向左横移 3 步
- 跳跃 1 次
- 站立

```typescript
function doCompletions(run: () => number, completions: number): void {
    let done = 0
    while (done < completions) {
        const rc = run()
        if (rc == 0) done += 1
    }
}

// 1) Walk forward: 3 steps
// If your gait uses 2 states per step, count 0 six times
doCompletions(() => robotPu.walk(2, 0), 6)

// 2) Side step left: 3 steps
// direction: negative = left, positive = right
doCompletions(() => robotPu.sideStep(-0.2), 6)

// 3) Jump one time
doCompletions(() => robotPu.jump(), 4)

// 4) Stand (return to neutral)
doCompletions(() => robotPu.stand(), 1)
```
