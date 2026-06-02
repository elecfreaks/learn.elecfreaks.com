---
sidebar_position: 14
sidebar_label: 14:Robot PU State Machine
---

# Robot PU State Machine


## 🤖 Robot PU Tutorial: Using a State Machine to Build a Dance Routine

**JavaScript Tutorial for MakeCode + Robot PU**

---

Robots are great at repeating patterns, but if you try to write a dance routine using only `basic.forever()`, you quickly end up with a messy tangle of timers, pauses, and nested conditions.

A state machine gives you a clean, predictable way to organize complex robot behaviors — especially sequences like dancing.

This tutorial shows you how to:

- Understand what a state machine is
- Build a simple state machine in MakeCode
- Use events and timers to transition between states
- Implement a full Robot PU dance routine

---

## 🎯 What Is a State Machine?

A state machine is a design pattern where your robot is always in exactly one state, such as:

- IDLE
- STEP_LEFT
- STEP_RIGHT
- SPIN
- POSE

Each state defines:

- What the robot does
- When and how it transitions to the next state

Think of it like choreography:
"Do move A for 1 second → then move B for 1 second → then move C…"

---

## 🧱 1. Defining States

We'll define states using numbers or strings.
Numbers are faster, but strings are easier to read.

```typescript
enum DanceState {
    Idle,
    StepLeft,
    StepRight,
    Spin,
    Pose
}

let state = DanceState.Idle
```

---

## 🕹️ 2. State Machine Loop

We use a `forever()` loop to run the current state.

```typescript
basic.forever(function () {
    switch (state) {

        case DanceState.Idle:
            robotPu.walk(0, 0)
            break

        case DanceState.StepLeft:
            robotPu.walk(1.2, -1)
            break

        case DanceState.StepRight:
            robotPu.walk(1.2, 1)
            break

        case DanceState.Spin:
            robotPu.walk(1.5, 1)
            break

        case DanceState.Pose:
            robotPu.walk(0, 0)
            basic.showIcon(IconNames.Heart)
            break
    }

    basic.pause(20)
})
```

This loop does not decide when to change states — it only performs the current state's action.

Transitions come next.

---

## ⏱️ 3. Timed State Transitions

We'll use `control.setTimeout()` to schedule transitions.

Helper function:

```typescript
function nextState(s: DanceState, delay: number) {
    control.setTimeout(() => {
        state = s
    }, delay)
}
```

This lets us write choreography like:

`StepLeft for 800 ms → StepRight for 800 ms → Spin for 1200 ms → Pose`

---

## 💃 4. Starting the Dance Routine

Let's trigger the dance when button A is pressed.

```typescript
input.onButtonPressed(Button.A, function () {
    startDance()
})
```

The dance sequence:

```typescript
function startDance() {

    // Start with left step
    state = DanceState.StepLeft
    nextState(DanceState.StepRight, 800)

    // Then right step
    nextState(DanceState.Spin, 1600)

    // Then spin
    nextState(DanceState.Pose, 2800)

    // End in pose
    nextState(DanceState.Idle, 4000)
}
```

Notice how each `nextState()` call is offset in time.
This creates a timeline of moves.

---

## 🧠 5. Why This Works So Well

- ✔ **Clean separation** — The state machine loop handles movement; the transition scheduler handles timing
- ✔ **Easy to extend** — Add new moves by adding new states
- ✔ **Easy to debug** — You always know what state the robot is in
- ✔ **No tangled pauses** — `control.setTimeout()` avoids blocking the main loop

---

## 🕺 6. Full Dance Routine Code (Complete Example)

```typescript
enum DanceState {
    Idle,
    StepLeft,
    StepRight,
    Spin,
    Pose
}

let state = DanceState.Idle

// State machine loop
basic.forever(function () {
    switch (state) {

        case DanceState.Idle:
            robotPu.walk(0, 0)
            break

        case DanceState.StepLeft:
            robotPu.walk(1.2, -1)
            break

        case DanceState.StepRight:
            robotPu.walk(1.2, 1)
            break

        case DanceState.Spin:
            robotPu.walk(1.5, 1)
            break

        case DanceState.Pose:
            robotPu.walk(0, 0)
            basic.showIcon(IconNames.Heart)
            break
    }

    basic.pause(20)
})

// Helper: schedule next state
function nextState(s: DanceState, delay: number) {
    control.setTimeout(() => {
        state = s
    }, delay)
}

// Dance routine
function startDance() {
    state = DanceState.StepLeft
    nextState(DanceState.StepRight, 800)
    nextState(DanceState.Spin, 1600)
    nextState(DanceState.Pose, 2800)
    nextState(DanceState.Idle, 4000)
}

// Start dance on button A
input.onButtonPressed(Button.A, function () {
    startDance()
})
```

---

## 🎉 You Now Know How to Use State Machines for Robot PU

With this pattern, you can build:

- Dance routines
- Patrol loops
- Maze‑solving sequences
- Multi‑step animations
- Game logic
- Swarm behavior states

You can:

- Add music to the dance
- Add LED animations
- Add random dance variations
- Build a multi‑robot synchronized dance
