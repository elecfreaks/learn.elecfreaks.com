---
sidebar_position: 21
sidebar_label: 21:Robot PU Object-Oriented Programming
---

# Robot PU Object-Oriented Programming

Absolutely — let’s turn your smart‑follower swarm robot into something **clean, modular, and professional** using:

- **Object‑Oriented Programming (OOP)**
- **Event Handler Design Pattern**
- **micro:bit event system (`control.raiseEvent`, `control.onEvent`)**

This tutorial is written in the same style as the Robot PU JavaScript tutorials, but introduces real software‑engineering structure so your swarm code becomes easier to maintain, extend, and debug.

## 🤖 Tutorial: Building a Clean Smart‑Follower Robot Using OOP + Event Handlers

Robot PU swarm followers need to:

- Receive **leader heading + speed**
- Compute **turn + forward velocity**
- Perform **obstacle avoidance override**
- React to **emergency conditions**
- Run smoothly inside a `forever()` loop

The original code works, but it mixes:

- radio parsing
- compass math
- obstacle logic
- movement logic
- state variables

…all in one place.

Let’s clean it up using **classes** and **event‑driven architecture**.

## 🧱 1. Architecture Overview

We'll split the follower into four components:

1. **RadioFollower**

Listens for radio messages and raises events.

2. **NavigationController**

Computes turn + speed based on leader heading.

3. **ObstacleAvoidance**

Monitors sonar and raises emergency/avoidance events.

4. **SmartFollower**

The main robot class that reacts to events and drives the robot.

This gives us a clean, modular system:

``` typescript
Radio → Events → SmartFollower → Movement
Sonar → Events → SmartFollower → Movement
```

---

## 🧩 2. Define Event IDs

We use the micro:bit event system.

```typescript
const EVT_FOLLOWER = 7001
const EVT_UPDATE = 1
const EVT_AVOID = 2
const EVT_EMERGENCY = 3
```

---

## 📡 3. RadioFollower Class

Responsible for:

- Receiving `"heading,speed"`
- Parsing
- Raising an update event

```typescript
class RadioFollower {
    heading: number = 0
    speed: number = 0

    constructor() {
        radio.onReceivedString(msg => {
            let parts = msg.split(",")
            if (parts.length == 2) {
                this.heading = parseInt(parts[0])
                this.speed = parseInt(parts[1])
                control.raiseEvent(EVT_FOLLOWER, EVT_UPDATE)
            }
        })
    }
}
```

---

## 🧭 4. NavigationController Class

Computes turn + speed from leader heading.

```typescript
class NavigationController {

    computeTurn(targetHeading: number): number {
        let myHeading = input.compassHeading()
        let err = targetHeading - myHeading

        if (err > 180) err -= 360
        if (err < -180) err += 360

        let turn = err / 90
        if (turn > 1) turn = 1
        if (turn < -1) turn = -1

        return turn
    }

    computeSpeed(targetSpeed: number): number {
        return targetSpeed / 50
    }
}
```

---

## 🧱 5. ObstacleAvoidance Class

Monitors sonar and raises events.

```typescript
class ObstacleAvoidance {
    EMERGENCY = 10
    AVOID = 20

    constructor() {
        basic.forever(() => {
            let d = robotPu.frontDistanceArray()[2]

            if (d > 0 && d < this.EMERGENCY) {
                control.raiseEvent(EVT_FOLLOWER, EVT_EMERGENCY)
            } else if (d > 0 && d < this.AVOID) {
                control.raiseEvent(EVT_FOLLOWER, EVT_AVOID)
            }
        })
    }
}
```

---

## 🤖 6. SmartFollower Class (Main Robot)

This class reacts to events and drives the robot.

```typescript
class SmartFollower {
    radio: RadioFollower
    nav: NavigationController

    constructor(r: RadioFollower, n: NavigationController) {
        this.radio = r
        this.nav = n

        control.onEvent(EVT_FOLLOWER, EVT_UPDATE, () => this.followLeader())
        control.onEvent(EVT_FOLLOWER, EVT_AVOID, () => this.avoidObstacle())
        control.onEvent(EVT_FOLLOWER, EVT_EMERGENCY, () => this.emergencyStop())
    }

    followLeader() {
        let fwd = this.nav.computeSpeed(this.radio.speed)
        let turn = this.nav.computeTurn(this.radio.heading)
        robotPu.walk(fwd, turn)
    }

    avoidObstacle() {
        robotPu.walk(1.0, 0.9)
    }

    emergencyStop() {
        robotPu.walk(0, 0)
        basic.showIcon(IconNames.No)
    }
}
```

---

## 🚀 7. Putting It All Together

```typescript
radio.setGroup(42)

let radioFollower = new RadioFollower()
let nav = new NavigationController()
let avoid = new ObstacleAvoidance()
let follower = new SmartFollower(radioFollower, nav)
```

That's it — the follower now runs cleanly, modularly, and event‑driven.


## 🎉 What You Just Built

You now have a professional‑grade swarm follower:

✔ **Object‑oriented**

Each responsibility is isolated in its own class.

✔ **Event‑driven**

No giant `forever()` loop doing everything.

✔ **Clean separation of concerns:**

- Radio parsing
- Navigation math
- Obstacle avoidance
- Robot movement

✔ **Easy to extend**

You can add:

- formation control
- spacing rules
- smoother avoidance
- filtering
- logging

without touching the core logic.
