---
sidebar_position: 16
sidebar_label: 16:Robot PU Event Loop
---

# Robot PU Event Loop

## 🔁 Lesson: Event Loop (Observation → Thinking → Action)

Robot programs are not "one command then stop". They run continuously.

On micro:bit MakeCode, the common programming model is an event loop:

- you register event handlers (buttons, radio, gestures)
- you run repeated logic in `basic.forever(...)`
- the runtime schedules these pieces so your program can multitask

This is the foundation for the Robot PU pattern: **Observation → Thinking → Action**

---

## 1. What is an event loop?

An event loop is a program structure where:

- the system waits for events
- runs your code for a short time
- returns control back to the runtime
- repeats forever

In MakeCode:

- `basic.forever(function () { ... })` is your "main loop"
- `input.onButtonPressed(...)` are event callbacks

The key rule is: **do small work, then return** (don't block forever)

---

## 2. Observation → Thinking → Action

A robust robot control loop looks like this:

### A. Observation (sense)

Read sensors:

- `robotPu.sonarDistanceCm()`
- `input.isGesture(Gesture.FreeFall)`
- `input.rotation(Rotation.Roll)` / `input.rotation(Rotation.Pitch)`
- `input.soundLevel()`

### B. Thinking (decide)

Compute what to do next:

- obstacle? slow down / turn
- falling? stop / stand
- loud beat? dance

### C. Action (act)

Send one small action update:

- `robotPu.walk(speed, turn)`
- `robotPu.explore()`
- `robotPu.stand()`

Then loop back.

---

## 3. Why async (non-blocking) actions are important

Robot PU motion APIs are designed to be called repeatedly.

Each call advances the motion a little bit (servo stepping). This style is "async" in the sense that:

- you do not call one function and wait for the whole walk to finish
- instead, you keep calling it in the event loop

Benefits:

- buttons still work
- radio still receives messages
- sensor checks still run
- you can interrupt / change behavior instantly

If you write a long blocking loop (or a function that never returns), you can starve the rest of the system.

---

## 4. Why the event loop is critical for multitasking

Multitasking on micro:bit is not "real threads" like a PC. It's cooperative scheduling:

- your code runs
- you return control
- the runtime runs other tasks/events

So you should avoid:

- long-running blocking functions
- very heavy computation inside `forever`

Instead:

- keep each loop iteration short
- use state variables
- let the event loop run many times per second

---

## 5. Example: a clean observation-thinking-action loop

This example:

- observes sonar distance
- decides a turn direction
- acts by calling one motion update

```typescript
basic.forever(function () {
    // 1) Observation
    const cm = robotPu.sonarDistanceCm()

    // 2) Thinking
    let speed = 2
    let turn = 0

    if (cm > 0 && cm < 15) {
        speed = -2
        turn = 0.8
    }

    // 3) Action (one small update)
    robotPu.walk(speed, turn)
})
```

---

## 6. Example: using events to change robot "mode"

Use buttons to switch between behaviors, while the main loop keeps running.

```typescript
enum Mode {
    Stand,
    Explore,
    Walk
}

let mode = Mode.Stand

input.onButtonPressed(Button.A, function () {
    mode = Mode.Explore
})

input.onButtonPressed(Button.B, function () {
    mode = Mode.Walk
})

input.onButtonPressed(Button.AB, function () {
    mode = Mode.Stand
})

basic.forever(function () {
    if (mode == Mode.Stand) {
        robotPu.stand()
    } else if (mode == Mode.Explore) {
        robotPu.explore()
    } else {
        robotPu.walk(2, 0)
    }
})
```

---

## 7. Checklist for good robot event loops

- Keep loop iterations short
- Use state variables (mode, counters, timers)
- React to events (buttons/sensors) instead of blocking waits
- Call motion actions repeatedly instead of trying to "finish the whole motion" in one call
