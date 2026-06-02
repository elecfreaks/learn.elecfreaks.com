---
sidebar_position: 19
sidebar_label: 19:Robot PU Follows the Leader
---

# Robot PU Follows the Leader

Here’s a clean, practical example showing multiple Robot PU robots acting as followers, all controlled by one gamepad robot that broadcasts:

Compass heading → direction
Joystick Y → speed
Every follower receives the radio message, extracts the heading + speed, and drives accordingly.

This pattern scales to any number of robots.

## 🕹️ Leader Robot (Gamepad Controller)

The leader reads:

- Compass heading using `input.compassHeading()`
- Joystick speed using `robotPu.joystickY()` (or your own joystick input)

Then it broadcasts both values in a single radio packet.

```typescript
// Leader (Gamepad) Robot
radio.setGroup(42)

basic.forever(function () {
    // Compass heading: 0–359 degrees
    let heading = input.compassHeading()

    // Joystick Y: -100 to +100 (forward/backward)
    let speed = robotPu.joystickY()

    // Pack into a string: "heading,speed"
    let msg = heading + "," + speed

    radio.sendString(msg)
    basic.pause(80)
})
```

The leader does not move — it only broadcasts control signals.

---

## 🤖 Follower Robots (All Other Robots)

Each follower robot:

1. Receives `"heading,speed"`
2. Parses the two numbers
3. Converts heading into a turn value
4. Converts speed into a forward velocity
5. Drives toward the leader's heading

### 📡 Step 1 — Radio Setup

```typescript
radio.setGroup(42)
```

All robots must use the same group.

### 📨 Step 2 — Receive and Parse Messages

```typescript
let targetHeading = 0
let targetSpeed = 0

radio.onReceivedString(function (msg) {
    let parts = msg.split(",")
    targetHeading = parseInt(parts[0])
    targetSpeed = parseInt(parts[1])
})
```

### 🧭 Step 3 — Heading Error → Turn Command

Followers compare:

**leader heading – my heading**

This gives a heading error that we convert into a turn value.

```typescript
function headingError(): number {
    let myHeading = input.compassHeading()
    let error = targetHeading - myHeading

    // Wrap error to [-180, +180]
    if (error > 180) error -= 360
    if (error < -180) error += 360

    return error
}
```

### 🚗 Step 4 — Convert Error → Turn Amount

```typescript
function computeTurn(): number {
    let err = headingError()

    // Scale error to turn value (-1 to +1)
    let turn = err / 90
    if (turn > 1) turn = 1
    if (turn < -1) turn = -1

    return turn
}
```

### 🏎️ Step 5 — Convert Joystick Speed → Forward Speed

```typescript
function computeSpeed(): number {
    // joystick Y is -100..100 → convert to -2..2
    return targetSpeed / 50
}
```

### 🔁 Step 6 — Main Follower Loop

```typescript
basic.forever(function () {
    let fwd = computeSpeed()
    let turn = computeTurn()

    robotPu.walk(fwd, turn)
    basic.pause(20)
})
```

---

## 🎉 What You Now Have

With this setup:

- The leader robot acts like a wireless gamepad
- All followers align themselves to the leader's compass heading
- Joystick Y controls speed
- Heading controls direction
- The swarm stays synchronized
- Any number of followers can join

This is the foundation for:

- leader‑follower swarms
- formation control
- synchronized robot movement
- remote teleoperation of multiple robots

You can extend this into:

- V‑formation swarm
- Boids flocking behavior
- Obstacle‑avoiding followers
- Leader handoff (dynamic leadership)
