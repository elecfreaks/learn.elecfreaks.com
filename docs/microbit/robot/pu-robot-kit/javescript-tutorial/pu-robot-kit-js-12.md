---
sidebar_position: 12
sidebar_label: 12:Robot PU Maze Runner
---

# Robot PU Maze Runner

## Maze Solver Tutorial (Robot PU)

This tutorial shows how to solve a maze using a classic strategy:

- Follow the right wall
- Follow the left wall

For simply-connected mazes (no "floating islands" of walls), either rule is guaranteed to reach an exit if one exists.

Robot PU doesn't need a full map for this approach. It just needs to decide "turn / forward / turn around" based on sonar distance.

---

## Knowledge

- [MakeCode Loops](https://makecode.microbit.org/blocks/loops)
- [MakeCode JavaScript Statements](https://makecode.microbit.org/javascript/statements)
- [Maze-solving Algorithm – Wikipedia](https://en.wikipedia.org/wiki/Maze-solving_algorithm)

---

## Prerequisites

- Add the Robot PU extension in MakeCode
- Build a maze with walls the sonar can see (cardboard boxes, books, foam blocks)
- Use a surface with good traction (avoid glossy tables)

---

## What You Will Build

- A simple autonomous maze solver using `robotPu.walk(speed, turn)`
- A choice of right-hand or left-hand wall following

---

## Robot PU APIs Used

Robot PU is an interactive STEM buddy controlled by a micro:bit. In this maze project, we rely on:

| API | Description |
|-----|-------------|
| `robotPu.walk(speed, turn)` | Movement |
| `robotPu.frontDistanceArray()` | Sonar scan |

---

## Why Wall-Following Works (and When It Fails)

### What "Guaranteed to Solve" Means

If the maze is **simply connected** (all walls are connected to the outer boundary), then:

- Keeping your **right hand** on the wall (**right-hand rule**) will eventually lead you to the exit.
- Keeping your **left hand** on the wall (**left-hand rule**) will eventually lead you to the exit.

### When It Can Fail

Wall-following can **loop forever** in mazes with **islands** (walls not connected to the outer boundary). In those mazes, you need mapping (like `2d-map.md`) + exploration.

---

## Sensing Strategy: `frontDistanceArray()` Bins

Robot PU's sonar faces ~35° downward. While walking, PU naturally sways, and the extension maintains a small "front scan" array.

In this updated tutorial we use:

**Front scan array:** `robotPu.frontDistanceArray()`

It returns **5 distance bins** from left to right:

| Index | Direction |
|-------|-----------|
| `d[0]` | Far left |
| `d[1]` | Left |
| `d[2]` | Center / Front |
| `d[3]` | Right |
| `d[4]` | Far right |

These bins are designed to give you a simple "left / front / right" view without moving the head.

Then we decide the next motion using a **priority order**.

---

## Decision Rule (Right-Hand Rule)

1. If **right** is open → turn right
2. Else if **front** is open → go forward
3. Else if **left** is open → turn left
4. Else → turn around

---

## Implementation: Right-Hand Rule (Recommended Starting Point)

Copy this code into the **JavaScript tab** of the MakeCode Editor.

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

## Follow Left Wall Variant

If you want to follow the **left wall** instead, flip the priority order:

1. If **left** is open → turn left
2. Else if **front** is open → go forward
3. Else if **right** is open → turn right
4. Else → turn around

You can implement it by changing the decision section:

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

## Testing and Calibration

### Build a Maze
- Use cardboard walls or blocks that sonar can detect.
- Make the corridors wide enough for Robot PU to walk.

### Tune Thresholds
- If PU scrapes walls → increase `OPEN_CM` and/or reduce `FWD_SPEED`
- If PU refuses to enter corridors → decrease `OPEN_CM`

### Tune Turning
- If turns are too small → increase turn duration in `turnRight90ish()` / `turnLeft90ish()`
- If turns overshoot → decrease duration or reduce `TURN_BIAS`

---

## Troubleshooting

| Symptom | Fix |
|---------|-----|
| Robot scrapes walls | Increase `OPEN_CM`; slow down: reduce `FWD_SPEED` |
| Robot turns too late and bonks | Increase `TOO_CLOSE_CM`; increase the emergency turn duration |
| Robot oscillates in narrow corridors | Reduce `TURN_BIAS`; reduce `TURN_SPEED` |
| Robot gets stuck turning in place | Reduce `OPEN_CM` (it may think everything is blocked); increase `stepForward()` duration slightly |

---

## Next Steps (Upgrade Path)

Wall following is simple and robust, but it does not "understand" the maze.

**Next upgrades** (based on `2d-map.md`):

1. **Local map validation**: update a 5×5 occupancy grid from the same left/front/right scans.
2. **Detect loops**: if you revisit the same local pattern many times, switch strategy.
3. **Hybrid solver**: follow the wall, but if stuck, use the occupancy map to choose an alternative.
