---
sidebar_position: 17
sidebar_label: 17:Robot PU Event and Event Handler
---

# Robot PU Event and Event Handler

Below is a brand‑new tutorial on creating custom events and event handlers for Robot PU, written in the same tone, pacing, and structure as the GitHub tutorial you referenced — but without copying it.
It teaches the same concepts: event loops, custom event sources, and reacting to events using the micro:bit event system.

## 🤖 Robot PU Tutorial: Creating Custom Events & Event Handlers

**JavaScript Tutorial for MakeCode + micro:bit Events**

---

Robot PU programs normally run inside a `basic.forever()` loop.
But sometimes you want your robot to react instantly to something:

- a sensor condition
- a button press
- a message from another robot
- a custom trigger you define

This is where custom events and event handlers shine.

The micro:bit runtime includes a powerful event system that lets you:

- raise your own events
- listen for those events
- run callbacks when events occur

This tutorial shows you how to build your own event‑driven robot behaviors.

---

## 🎯 What You Will Learn

You will learn how to:

- Define custom event IDs
- Raise events using `control.raiseEvent()`
- Handle events using `control.onEvent()`
- Build a simple event loop
- Trigger robot actions from events
- Combine events with Robot PU sensors

---

## 🧱 1. The micro:bit Event System

The event system is built around two functions:

**Raise an event**

```typescript
control.raiseEvent(source, value)
```

**Handle an event**

```typescript
control.onEvent(source, value, function () {
    // callback code
})
```

You choose the numbers for `source` and `value`.
Think of them as channels and messages.

---

## 🏷️ 2. Defining Your Own Event IDs

It's good practice to define constants for your events:

```typescript
const EVT_ROBOT = 1001
const EVT_START = 1
const EVT_STOP = 2
```

This makes your code readable and avoids magic numbers.

---

## 🚀 3. Raising Events

You can raise an event from anywhere:

```typescript
control.raiseEvent(EVT_ROBOT, EVT_START)
```

This does not run immediately.
Instead, it is added to the micro:bit's event queue.

The event handler will run as soon as the system processes it.

---

## 🎧 4. Handling Events (Callbacks)

To react to an event, register a handler:

```typescript
control.onEvent(EVT_ROBOT, EVT_START, function () {
    basic.showString("GO")
})
```

When the event is raised, this callback runs automatically.

You can register multiple handlers for different values:

```typescript
control.onEvent(EVT_ROBOT, EVT_STOP, function () {
    basic.showString("STOP")
})
```

---

## 🔁 5. Combining Events with a Forever Loop

A common pattern is:

- `forever()` handles continuous tasks
- events trigger special actions

Example:

```typescript
let running = false

control.onEvent(EVT_ROBOT, EVT_START, function () {
    running = true
})

control.onEvent(EVT_ROBOT, EVT_STOP, function () {
    running = false
})

basic.forever(function () {
    if (running) {
        robotPu.walk(1.5, 0)
    }
})
```

Pressing a button or receiving a message can toggle the robot's mode.

---

## 📡 6. Creating Events from Sensors

Let's create a "too close" event using the front sonar bin.

### Step 1 — Define event IDs

```typescript
const EVT_SONAR = 2001
const EVT_TOO_CLOSE = 1
```

### Step 2 — Raise the event when needed

```typescript
basic.forever(function () {
    let d = robotPu.frontDistanceArray()[2]  // center bin
    if (d > 0 && d < 12) {
        control.raiseEvent(EVT_SONAR, EVT_TOO_CLOSE)
    }
})
```

### Step 3 — Handle the event

```typescript
control.onEvent(EVT_SONAR, EVT_TOO_CLOSE, function () {
    robotPu.walk(0, 0)
    basic.showIcon(IconNames.No)
})
```

Now your robot stops instantly when something is too close.

---

## 🤝 7. Creating Events from Peer Messages

Robot PU supports peer‑to‑peer messages:

```typescript
robotPu.onPeerMessage(function (msg) {
    // msg is a string
})
```

You can convert messages into events.

Example: "hello" message → event

```typescript
const EVT_PEER = 3001
const EVT_HELLO = 1

robotPu.onPeerMessage(function (msg) {
    if (msg == "hello") {
        control.raiseEvent(EVT_PEER, EVT_HELLO)
    }
})
```

Handle the event:

```typescript
control.onEvent(EVT_PEER, EVT_HELLO, function () {
    basic.showString("Hi!")
})
```

---

## 🎭 8. Custom Robot Behaviors

You can build modular robot actions using events.

Define a "dance" event:

```typescript
const EVT_DANCE = 4001

control.onEvent(EVT_DANCE, 0, function () {
    robotPu.walk(1.5, 1)
    basic.pause(300)
    robotPu.walk(1.5, -1)
    basic.pause(300)
})
```

Trigger it with button B:

```typescript
input.onButtonPressed(Button.B, function () {
    control.raiseEvent(EVT_DANCE, 0)
})
```

---

## 🧪 9. Full Example: Event‑Driven Robot Controller

This example ties everything together:

- Button A → start
- Button B → stop
- Sonar → emergency stop
- Event loop → movement

```typescript
const EVT_CTRL = 5001
const EVT_START = 1
const EVT_STOP = 2
const EVT_EMERGENCY = 3

let running = false

// Button events
input.onButtonPressed(Button.A, function () {
    control.raiseEvent(EVT_CTRL, EVT_START)
})

input.onButtonPressed(Button.B, function () {
    control.raiseEvent(EVT_CTRL, EVT_STOP)
})

// Sonar emergency event
basic.forever(function () {
    let d = robotPu.frontDistanceArray()[2]
    if (d > 0 && d < 10) {
        control.raiseEvent(EVT_CTRL, EVT_EMERGENCY)
    }
})

// Event handlers
control.onEvent(EVT_CTRL, EVT_START, function () {
    running = true
})

control.onEvent(EVT_CTRL, EVT_STOP, function () {
    running = false
})

control.onEvent(EVT_CTRL, EVT_EMERGENCY, function () {
    running = false
    robotPu.walk(0, 0)
    basic.showIcon(IconNames.No)
})

// Main loop
basic.forever(function () {
    if (running) {
        robotPu.walk(1.5, 0)
    }
})
```

This is a clean, modular event‑driven robot architecture.

---

## 🎉 You Now Know How to Build Custom Events

You learned how to:

- Define event IDs
- Raise events with `control.raiseEvent()`
- Handle events with `control.onEvent()`
- Build event‑driven robot behaviors
- Combine events with sensors and peer messages

This is the foundation for:

- multi‑robot games
- reactive navigation
- swarm robotics
- modular robot architectures
- state machines

---

# 🐝 Leader‑Follower Swarm Tutorial

A leader‑follower swarm is one of those robotics ideas that feels almost magical the first time you see it: one robot moves freely, and the others sense, interpret, and react to follow it as a coordinated group. With Robot PU, you can build a surprisingly capable swarm using nothing more than:

- peer‑to‑peer messages
- simple distance sensing
- micro:bit events
- a bit of behavioral logic

Let's sketch out a clean, approachable design that you can build on.

---

## 🧭 What a Leader‑Follower Swarm Actually Does

In a swarm like this:

- **One robot is the leader** — It moves however it wants — manually, randomly, or using its own navigation logic.
- **Other robots are followers** — They don't know the leader's plan. They simply react to:
  - the leader's broadcasted state
  - their own sensor readings
  - local events

This is exactly how real swarm robotics works: **local rules → global behavior**.

---

## 📡 Communication Model

Robot PU supports peer messaging:

```typescript
robotPu.onPeerMessage(function (msg) {
    // msg is a string
})
```

The leader can broadcast:

- its direction
- its speed
- a "stop" or "go" command
- a "danger" alert

Followers interpret these messages and adjust their behavior.

---

## 🧱 Event‑Driven Architecture

We'll use the micro:bit event system to keep the code clean:

```typescript
control.raiseEvent(source, value)
control.onEvent(source, value, handler)
```

This lets you separate:

- message parsing
- movement logic
- sensor reactions

into modular pieces.

---

## 👑 Leader Robot Logic

The leader robot periodically broadcasts its movement state.

Example: Leader broadcasts direction every 200 ms

```typescript
basic.forever(function () {
    let dir = "forward"   // or "left", "right", "stop"
    robotPu.sendPeerMessage(dir)
    basic.pause(200)
})
```

You can replace `"forward"` with joystick input, button input, or autonomous navigation.

---

## 🐝 Follower Robot Logic

Followers listen for messages and convert them into events.

### Step 1 — Define event IDs

```typescript
const EVT_SWARM = 6001
const EVT_FWD = 1
const EVT_LEFT = 2
const EVT_RIGHT = 3
const EVT_STOP = 4
```

### Step 2 — Convert messages into events

```typescript
robotPu.onPeerMessage(function (msg) {
    if (msg == "forward") control.raiseEvent(EVT_SWARM, EVT_FWD)
    else if (msg == "left") control.raiseEvent(EVT_SWARM, EVT_LEFT)
    else if (msg == "right") control.raiseEvent(EVT_SWARM, EVT_RIGHT)
    else if (msg == "stop") control.raiseEvent(EVT_SWARM, EVT_STOP)
})
```

### Step 3 — Event handlers define follower behavior

```typescript
control.onEvent(EVT_SWARM, EVT_FWD, function () {
    robotPu.walk(1.5, 0)
})

control.onEvent(EVT_SWARM, EVT_LEFT, function () {
    robotPu.walk(1.2, -1)
})

control.onEvent(EVT_SWARM, EVT_RIGHT, function () {
    robotPu.walk(1.2, 1)
})

control.onEvent(EVT_SWARM, EVT_STOP, function () {
    robotPu.walk(0, 0)
})
```

Now the follower robot mirrors the leader's movement.

---

## 🛑 Adding Collision Avoidance (Local Autonomy)

A good swarm robot doesn't blindly follow — it reacts to its own sensors.

Example: Emergency stop event

```typescript
const EVT_EMERGENCY = 9

basic.forever(function () {
    let d = robotPu.frontDistanceArray()[2]
    if (d > 0 && d < 12) {
        control.raiseEvent(EVT_SWARM, EVT_EMERGENCY)
    }
})
```

Handler overrides swarm commands:

```typescript
control.onEvent(EVT_SWARM, EVT_EMERGENCY, function () {
    robotPu.walk(0, 0)
    basic.showIcon(IconNames.No)
})
```

This gives you a hybrid swarm:

- **global behavior** from the leader
- **local safety** from each follower

---

## 🧠 Optional: Distance‑Based Following

If you want a more realistic swarm, followers can maintain a distance from the leader.

- The leader broadcasts its distance to the follower (or vice‑versa).
- Followers adjust speed based on:
  - too far → speed up
  - too close → slow down
  - just right → match speed

This is how real robot swarms maintain formation.

---

## 🎉 What You've Built

You now have the foundation of a leader‑follower swarm:

- Leader broadcasts movement
- Followers convert messages into events
- Event handlers drive movement
- Local sensors override unsafe commands
- The whole system is modular and scalable

Add more followers and they'll all fall into formation automatically.

If you want, you can extend this into:

- a three‑robot chain
- a V‑formation swarm
- a flocking algorithm (Boids)
- a maze‑solving swarm
