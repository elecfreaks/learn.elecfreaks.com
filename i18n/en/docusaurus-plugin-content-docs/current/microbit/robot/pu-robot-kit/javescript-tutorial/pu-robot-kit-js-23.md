---
sidebar_position: 23
sidebar_label: 23:Robot PU Balancing
---

# Robot PU Balancing

## 🤖 Tutorial: Make Robot PU Balance on Tilts

Using the Robot PU MakeCode Extension

Robot PU already includes an internal IMU‑based balancing engine. When you call actions like `rest()`, `walk()`, or `explore()`, PU automatically reads the micro:bit accelerometer and adjusts its servos to stay upright. This tutorial shows you how to:

- Enable PU's built‑in balancing
- Add tilt‑reaction behaviors
- Create your own "balance training" program
- Extend it with head‑tilt feedback or sound reactions


## 1. 🧩 Setup Your MakeCode Project

1. Go to [https://makecode.microbit.org](https://makecode.microbit.org)
2. Create a **New Project**
3. Click **Extensions → Import URL**
4. Paste the repo URL: `https://github.com/robotgyms/pxt-robotpu`
5. Add any block from `robotPu` in `on start` (this triggers auto‑initialization).

**Example:**
```typescript
robotPu.rest()
```

> PU will automatically run `calibrate()` the first time any `robotPu` API is used.



## 2. 🧘 Enable Built‑In Balancing Mode

The simplest balancing behavior is `rest()`:

```typescript
basic.forever(function () {
    robotPu.rest()
})
```

### Why this works:

- **rest()** keeps PU in a stable idle pose
- It continuously uses the micro:bit accelerometer to maintain balance
- It reacts subtly to sound and tilt inputs

> This is the best starting point for tilt‑balancing practice.

## 3. 🎚️ Make PU React to Tilting

Robot PU exposes two key "tilt bias" commands via **runKeyValueCommand**:

| Key | Meaning | Range |
|-----|---------|-------|
| **#puroll** | Side tilt (left/right) | –90 to 90 degrees |
| **#pupitch** | Forward/back tilt | –90 to 90 degrees |

These values normally come from a remote gamepad, but you can generate them directly from the robot's own micro:bit.

### Example: Use PU's own accelerometer to adjust balance

```typescript
basic.forever(function () {
    let roll = input.rotation(Rotation.Roll)
    let pitch = input.rotation(Rotation.Pitch)

    // Send tilt values to PU's balancing engine
    robotPu.runKeyValueCommand("#puroll", roll)
    robotPu.runKeyValueCommand("#pupitch", pitch)
})
```

**What this does:**
- PU reads its own tilt
- You feed those tilt angles back into PU's internal stabilizer
- PU adjusts its head/body to counteract the tilt
- This creates a **self‑balancing loop**

> This is the core of "balance on tilts."


## 4. 🏋️ Balance Training Mode (Full Program)

Here's a complete program that:

- Calibrates PU
- Reads tilt continuously
- Applies smoothing
- Balances PU on uneven surfaces

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

**Why this works:**
- **rest()** maintains base stability
- **#puroll** / **#pupitch** add tilt‑compensation
- Smoothing prevents jerky servo motion
- PU becomes noticeably better at staying upright on ramps or when nudged

---

## 5. 🔊 Add Feedback (Optional)

### A. Sound reaction when PU tilts too much

```typescript
basic.forever(function () {
    let tilt = Math.abs(input.rotation(Rotation.Roll))

    if (tilt > 40) {
        robotPu.talk("I'm falling!")
    }
})
```

### B. LED color changes based on tilt

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



## 6. 🧪 Try These Challenges

- Make PU lean **into** the tilt instead of resisting it
- Add a "balance score" that increases the longer PU stays upright
- Make PU walk slowly while balancing on a tilted board
- Use **setWalkSpeedRange()** to tune stability vs. speed


## 7. 📦 Summary

To make Robot PU balance on tilts:

1. Use **rest()** for built‑in balancing
2. Feed tilt values back into PU using **#puroll** and **#pupitch**
3. Combine both in a continuous loop
4. Add smoothing and feedback for better performance

> All behaviors are supported directly by the Robot PU MakeCode extension.

A threshold‑triggered balance controller is simple, but it produces **binary behavior**: nothing happens until the tilt crosses a limit, then the robot suddenly reacts. That leads to:

- Jerky corrections
- Overshoot
- Poor stability on small tilts
- Noisy behavior near the threshold

Robot PU's **moveBalance()** already has the right inputs (observed roll/pitch vs. expected roll/pitch). What it needs is a **continuous control law**, not a threshold switch.

Below are several algorithms that are significantly better and still lightweight enough for micro:bit‑class hardware.

## ⭐ Recommended Replacement: PD (Proportional–Derivative) Balance Controller

This is the standard approach used in small robots, quadrupeds, and even drones. It is **simple, stable, and smooth**.

### Idea

Compute the error:

- e_r = r_expected – r_observed
- e_p = p_expected – p_observed


Then compute a control output:


- u_r = Kp · e_r + Kd · (e_r – e_r_prev)
- u_p = Kp · e_p + Kd · (e_p – e_p_prev)


Then apply:

```typescript
robotPu.runKeyValueCommand("#puroll", u_r)
robotPu.runKeyValueCommand("#pupitch", u_p)
```

**Why this is better:**
- Smooth, continuous correction
- No sudden jumps
- Automatically scales with tilt magnitude
- Derivative term damps oscillation

**Where to put it:**

Inside **moveBalance()**, replace the threshold logic with PD computation.


## ⭐ Even Better: PID Controller (Proportional–Integral–Derivative)

If PU tends to lean slightly even when "balanced," add an **integral term**:


- u = Kp · e + Ki · Σe + Kd · Δe


This removes long‑term bias (e.g., uneven weight distribution).

**Pros:**

- Most stable
- Eliminates drift
- Smoothest behavior

**Cons:**

- Slightly more tuning required


## ⭐ Lightweight Alternative: Linear Gain Scaling (Proportional Only)

If PD feels too complex, use a simple proportional controller:

```typescript
let rollError = expectedRoll - observedRoll
let pitchError = expectedPitch - observedPitch

let rollControl = rollError * Kp
let pitchControl = pitchError * Kp

robotPu.runKeyValueCommand("#puroll", rollControl)
robotPu.runKeyValueCommand("#pupitch", pitchControl)
```

**Why this is better than threshold:**
- Continuous
- No oscillation from threshold crossing
- Very easy to tune


## ⭐ Advanced Option: Complementary Filter + PD

If the robot moves fast or the IMU is noisy, combine accelerometer + gyro (if available) using a complementary filter:

- Fast gyro for short‑term stability
- Slow accelerometer for long‑term drift correction

Then feed the filtered angles into a PD controller.

This is how many hobby drones stabilize.

## ⭐ Most Advanced: Model Predictive Control (MPC)

This is overkill for micro:bit, but worth mentioning:

- Predicts future tilt
- Optimizes control vector
- Very stable on dynamic terrain

Not recommended unless you port PU to a more powerful MCU.

## 🧠 Summary of Recommended Upgrade

| Method | Difficulty | Smoothness | Stability | Notes |
|--------|-----------|-----------|-----------|-------|
| Threshold (current) | Easy | Poor | Poor | Discrete, jerky |
| Proportional (P) | Easy | Good | Good | Best simple upgrade |
| PD | Medium | Very good | Very good | Best overall choice |
| PID | Medium | Excellent | Excellent | Removes drift |
| Complementary Filter + PD | Medium | Excellent | Excellent | Best for noisy IMUs |

Below is a clean, modernized **PID‑based rewrite** of `moveBalance()` that replaces the threshold logic with:

- Low‑pass smoothing on sensor inputs
- Full PID control for roll and pitch
- Derivative filtering to reduce noise
- Integral anti‑windup to prevent runaway accumulation
- Clamped output to keep gait vectors safe

This version is written in **MakeCode TypeScript**, matching the style of `robotpu.ts`.


## 🔧 Improved `moveBalance()` (PID + smoothing + anti‑windup)


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

## 🧠 Why This Version Is Dramatically Better

**✔ Smooth, continuous balancing**

The low‑pass filter prevents jitter from the micro:bit accelerometer.

**✔ PID gives proportional, stable correction**

- P corrects tilt proportionally
- I removes long‑term lean (e.g., weight imbalance)
- D damps oscillation and overshoot

**✔ Anti‑windup prevents instability**

Integral terms are clamped so they never “run away.”

**✔ Derivative smoothing reduces noise**

Raw derivative from micro:bit IMU is extremely noisy; smoothing makes it usable.

**✔ Output clamping protects servos**

Ensures gait vectors stay within safe limits.
