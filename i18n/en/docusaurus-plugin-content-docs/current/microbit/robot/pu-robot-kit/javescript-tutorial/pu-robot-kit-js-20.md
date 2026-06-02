---
sidebar_position: 20
sidebar_label: 20:Robot PU Smart Follower
---

# Robot PU Smart Follower

When you combine leader‑following (global goal) with obstacle avoidance (local safety), you immediately run into a classic robotics problem:

Global navigation goals often conflict with local collision‑avoidance rules.

This is not just a Robot PU issue — it’s the same challenge faced by drones, autonomous cars, warehouse robots, and swarm robots.

The good news is that robotics has several well‑studied algorithms designed exactly for this situation.

Below is a clear breakdown of the best approaches, why they work, and which ones are practical for Robot PU.

## 🧠 Part 1: Algorithm Comparison

### 1. Potential Fields (Attractive + Repulsive Forces)

This is the most intuitive and swarm‑friendly method.

**How it works:**
- The leader heading acts as an **attractive force** pulling the follower forward.
- Obstacles act as **repulsive forces** pushing the robot away.
- The robot moves in the direction of the **vector sum**.

**Why it solves the conflict:** The robot naturally balances "Go toward the leader" and "Avoid obstacles" without needing explicit rules.

| Pros | Cons |
|------|------|
| Simple | Can get stuck in local minima (e.g., corners) |
| Smooth motion | |
| Works well for swarms | |

**Perfect for Robot PU?** Yes. Easy to implement with compass + sonar.

---

### 2. Behavior Arbitration (Subsumption Architecture)

This is Rodney Brooks' famous layered robot architecture.

**How it works:** You define behaviors with priorities:

1. Avoid obstacles (highest priority)
2. Follow leader heading
3. Cruise forward (lowest priority)

The highest‑priority behavior that triggers takes control.

**Why it solves the conflict:** Obstacle avoidance always wins, but only temporarily. Once clear, the robot resumes following the leader.

| Pros | Cons |
|------|------|
| Very robust | Motion can be jerky |
| Easy to reason about | No blending of behaviors |
| Works well with simple sensors | |

**Perfect for Robot PU?** Yes. Very easy to implement.

---

### 3. Vector Field Histogram (VFH)

A more advanced version of potential fields.

**How it works:**
- Build a histogram of obstacle directions
- Choose the safest direction closest to the leader's heading

**Why it solves the conflict:** It explicitly finds a collision‑free direction that is as close as possible to the leader's heading.

| Pros | Cons |
|------|------|
| Smooth | More computation |
| Avoids local minima | Requires more tuning |
| Used in real robots (e.g., Pioneer robots) | |

**Perfect for Robot PU?** Possibly. Works if simplified.

---

### 4. Dynamic Window Approach (DWA)

Used in ROS navigation stack.

**How it works:**
- Simulates possible motions
- Chooses the one that avoids obstacles and moves toward the goal

**Why it solves the conflict:** It optimizes both goals simultaneously.

| Pros | Cons |
|------|------|
| Very robust | Too heavy for microcontrollers |
| Handles dynamics | Requires velocity simulation |

**Perfect for Robot PU?** No. Too computationally expensive.

---

### 5. Boids‑Style Flocking (Reynolds Rules)

Classic swarm algorithm. Three rules:

- **Cohesion** → move toward leader
- **Separation** → avoid obstacles and other robots
- **Alignment** → match leader heading

**Why it solves the conflict:** Obstacle avoidance is built into the "separation" rule.

| Pros | Cons |
|------|------|
| Natural swarm behavior | Harder to tune |
| Smooth motion | Requires balancing weights |
| Scales to many robots | |

**Perfect for Robot PU?** Yes. Works surprisingly well with simple sensors.

---

### 6. Hybrid: Leader Heading + Obstacle Avoidance Override

This is the simplest practical solution.

**How it works:**
- Normally follow leader heading
- If obstacle detected → temporarily override with avoidance turn
- After clearing → resume leader heading

**Why it solves the conflict:** It's a compromise between subsumption and potential fields.

| Pros | Cons |
|------|------|
| Easy | Not as smooth as potential fields |
| Works well | |
| Predictable | |

**Perfect for Robot PU?** Yes. Easiest to implement.

---

## ⭐ Which Algorithm Should You Use for Robot PU?

| Algorithm | Works on PU? | Difficulty | Smoothness | Notes |
|-----------|-------------|------------|------------|-------|
| Potential Fields | ✔️ | Medium | High | Best balance of simplicity + smoothness |
| Subsumption | ✔️✔️ | Easy | Medium | Easiest to implement, very reliable |
| VFH | ✔️ | Hard | High | Great but complex |
| DWA | ❌ | Very Hard | High | Too heavy for micro:bit |
| Boids | ✔️ | Medium | High | Great for multi‑robot swarms |
| Hybrid Override | ✔️✔️ | Easy | Medium | Practical and effective |

If you want the best mix of performance + simplicity, go with:

- ⭐ **Potential Fields**
- ⭐ **Hybrid Override** (Follow leader unless obstacle detected)

If you want true swarm behavior, go with:

- ⭐ **Boids** (Cohesion + Separation + Alignment)

---

## 🏆 Final Recommendation: Hybrid Override

Given the micro:bit's very limited RAM, no floating‑point hardware, and tight CPU budget, the best algorithm for combining:

- Leader compass‑heading following
- Joystick speed following
- Local obstacle avoidance

is NOT the fancy academic ones like VFH or DWA. Those are too heavy.

The algorithm that fits the micro:bit's constraints and works reliably for Robot PU is:

### ⭐ Hybrid Override (Follow‑Leader + Obstacle‑Avoidance Override)

This is the simplest, most robust, and most microcontroller‑friendly solution. It's essentially a lightweight version of subsumption architecture, with a tiny dash of potential‑field logic.

### Why This Algorithm Is the Best Choice

- ✔ **Extremely low CPU usage** — Only a few integer operations per loop.
- ✔ **No arrays, histograms, or floating‑point math** — Perfect for micro:bit's tiny memory.
- ✔ **Predictable behavior** — Obstacle avoidance always wins, but only temporarily.
- ✔ **Easy to tune** — Just adjust a few thresholds.
- ✔ **Works beautifully with:** compass heading, joystick speed, sonar distance, radio messages.
- ✔ **Scales to many followers** — Every robot runs the same simple logic.

### How the Hybrid Override Algorithm Works

1. **Normal mode:** Robot follows the leader's heading and speed.
2. **Override mode:** If an obstacle is detected: temporarily ignore the leader, perform avoidance turn, resume following once clear.
3. **Smooth blending:** Turn amount = mostly leader heading, but overridden by obstacle avoidance when needed.

This avoids the "twitchy" behavior of pure subsumption and the heavy math of potential fields.

### Behavior Priority Stack

1. Emergency stop (front sonar < 10 cm)
2. Obstacle avoidance (front sonar < 20 cm)
3. Follow leader heading (compass alignment)
4. Apply joystick speed

This is simple, deterministic, and micro:bit‑friendly.

---

## 🤖 Follower Code (Hybrid Override)

Radio‑controlled heading + speed, with local obstacle avoidance.

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

### How This Works

**Normal Mode:**
- Robot aligns its compass to the leader's heading
- Robot matches the leader's joystick speed
- Smooth, coordinated swarm movement

**Override Mode:**
Triggered when sonar detects an obstacle:
- Emergency stop if dangerously close
- Avoidance turn if moderately close
- Leader commands are ignored temporarily
- Once clear, robot resumes following

This ensures: Safety, Smoothness, Low CPU usage, Scalability to many followers.

---

## 🎮 Leader Robot (Gamepad Controller) Code

Broadcasts heading + speed to all followers.

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

### How It Works

- ✔ **Compass heading** — The leader's orientation becomes the global direction for the swarm.
- ✔ **Joystick speed** — The leader controls how fast the swarm moves: Push forward → swarm advances, Pull back → swarm reverses, Center → swarm stops.
- ✔ **Radio broadcast** — Every follower receives the same `"heading,speed"` packet and reacts accordingly.
- ✔ **Update rate** — 80 ms is a sweet spot: Fast enough for smooth control, slow enough to avoid radio congestion.

### Optional Enhancements

- Button A/B to toggle "formation modes"
- A "stop all robots" emergency broadcast
- Filtering for smoother joystick control
- A version that uses tilt control instead of joystick
- A version that sends leader position (x,y) for formation control
