---
sidebar_position: 15
sidebar_label: 15:Robot PU Autopilot
---

#Robot PU Autopilot

## Lesson: Autopilot Navigation with Sonar (Explore)

Robot PU can navigate using an ultrasonic sonar distance sensor. The extension provides an `explore()` action that implements a simple sonar-based "autopilot".

This lesson explains:

- what sonar data Robot PU uses
- how `robotPu.explore()` works internally
- how to use it safely in your own programs

---

## 1. Sonar distance sensor

Robot PU uses an HCSR04-style ultrasonic sensor.

In this extension:

- Read distance (cm): `robotPu.sonarDistanceCm()`
- Default wiring pins used by the extension:
  - Trigger: P2
  - Echo: P8

---

## 2. The simplest autopilot: call explore() repeatedly

`robotPu.explore()` is an action (it advances when called repeatedly). The simplest "autopilot" loop is:

```typescript
basic.forever(function () {
    robotPu.explore()
})
```

Notes:

- `explore()` reads sonar, updates its internal navigation state, then calls `walk(speed, turn)`.
- `turn` is a bias in the range -1.0 .. 1.0.

---

## 3. How explore() works (high-level)

Internally (in `robotpu.ts`), `explore()` does these steps:

### A. Build a small "point cloud" of distances

Robot PU maintains an internal distance array:

```
pr.exploreDistance (length 4)
```

Think of it as 4 directional "bins" from left to right.

Each time `explore()` runs:

- it decides which bin index `d_i` to update (0..3)
- it reads current sonar distance
- it updates only that bin using a rolling average:

```
exploreDistance[d_i] = (exploreDistance[d_i] + sonarCm) * 0.5
```

This acts like a simple low-pass filter to reduce noise.

### B. Convert the point cloud into steering

The helper `getTurnFromSonar(distances, turnGain)` computes a weighted "center of mass" of the distance readings:

- if open space is more on the right, turn right
- if open space is more on the left, turn left

It returns a turn value in [-1, 1].

### C. Convert obstacle distance into speed

`setExploreParam()` looks at the minimum distance and computes a target speed:

- if there is room, it approaches a forward speed
- if too close, it slows down or backs up

It also smooths both speed and direction with low-pass filters so motion is less jittery.

### D. Execute the motion

Finally:

- `explore()` calls `walk(exploreSpeed, exploreDirection)`

So you can think of `explore()` as:

`sonar perception → steering decision → walking output`

---

## 4. Example: start/stop autopilot with buttons

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

## 5. Example: safety stop if sonar is too close

Even when using autopilot, it can be helpful to add your own "emergency stop":

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

## 6. Summary

- `robotPu.sonarDistanceCm()` gives distance in cm.
- `robotPu.explore()` implements a sonar-based autopilot:
  - builds a 4-bin distance "point cloud"
  - computes steering using a weighted center-of-mass
  - computes speed from obstacle distance
  - drives motion via `walk(speed, turn)`
