---
sidebar_position: 8
sidebar_label: 8:PWM, Eye control, and DC motor control for Robot Pu
---

# 8:PWM, Eye control, and DC motor control for Robot Pu


> PWM is the magic wand behind Robot Pu's expressive eyelids and gentle motor hum. This tutorial unwraps pulse-width modulation (PWM), then shows how to use it in MicroPython with Micro:bit to control eye blink, brightness, and DC motors.

---

## ⚡️ What is PWM?

**Pulse-Width Modulation (PWM)** is a technique where you switch a signal ON and OFF rapidly, varying the proportion of "ON time" (the **duty cycle**) to control things like brightness, speed, or position.

| Duty Cycle | Signal State | Effect |
|------------|-------------|--------|
| 0% | Always OFF | No output |
| 50% | Equal ON/OFF | Medium intensity or speed |
| 100% | Always ON | Full output |

---

## 👁️ Controlling Robot Pu's Eyes with PWM

Robot Pu's expressive power comes from two traits:

- **Eye blink** — simulated by toggling an LED or moving a servo
- **Eye brightness** — adjusted by changing the LED PWM duty cycle

---

### 🌟 Blinking with LED and PWM

```python
from microbit import *

def blink_eye(pin, delay=200):
    pin.write_digital(1)
    sleep(delay)
    pin.write_digital(0)
    sleep(delay)

while True:
    blink_eye(pin1)  # Blink Robot Pu's left eye
```

---

### 🌈 Adjusting Brightness (`write_analog`)

Micro:bit pins support PWM via `write_analog(value)` where value ranges from **0–1023**:

```python
for intensity in range(0, 1024, 50):
    pin1.write_analog(intensity)
    sleep(50)
```

- `0` = fully OFF
- `1023` = fully ON
- Sweep brightness smoothly for expressive transitions!

---

## 🔧 Controlling a DC Motor with PWM

When Robot Pu needs to skate, roll, or wiggle—PWM makes it dynamic.

### ⚙️ Wiring Notes

| Component | Connection |
|-----------|-----------|
| DC motor | Motor driver board (e.g. L293D) |
| Micro:bit pin0 | Motor driver PWM input |
| Motor power | External 5–6V supply |

### 🚀 Drive Motor with PWM

```python
from microbit import *

def set_motor_speed(speed_percent):
    value = int(speed_percent * 1023 / 100)
    pin0.write_analog(value)

# Example: Vary speed gradually
for speed in range(0, 101, 10):
    set_motor_speed(speed)
    sleep(200)
```

This lets Robot Pu accelerate gracefully, or respond to emotion states like excitement or fatigue. Combine with sensor feedback (e.g. IMU or power levels) to make it adaptive!

---

## 🧪 Bonus: Servo Blinking with PWM

If Robot Pu's eyelid is servo-controlled, use PWM-based servo control instead:

```python
def blink_servo(pin, open_angle=90, close_angle=0, delay=300):
    pin.write_analog(open_angle)
    sleep(delay)
    pin.write_analog(close_angle)
    sleep(delay)

while True:
    blink_servo(pin2)
```

> ⚠️ Micro:bit's direct PWM for servos can be jittery — consider using an I²C PWM board for smoother control.

---

## 🗺️ Emotion State → PWM Expression Map

The following diagram maps Robot Pu's internal emotional states to PWM-driven output behaviors:

```
Emotion State
├── Hungry
│   ├── LED_Brightness_Low  →  analog_value_300
│   ├── Motor_Speed_Low     →  analog_value_400
│   └── Eyelid_Blinking_Slow → blink_delay_500ms
│
├── Sleepy
│   ├── LED_Brightness_Low  →  analog_value_100
│   ├── Motor_Off           →  analog_value_0
│   └── Eyelid_Closed       →  servo_angle_0
│
└── Happy
    ├── LED_Brightness_High →  analog_value_900
    ├── Motor_Speed_High    →  analog_value_800
    └── Eyelid_Blinking_Fast → blink_delay_100ms
```

### 🧠 How to Use This

Think of each PWM node (like `write_analog(300)`) as part of Robot Pu's **expressive toolkit**. Adjust the duty cycle in code depending on its internal emotional "state," which could be calculated from sensors, battery levels, or timers.

| Emotion | LED Brightness | Motor Speed | Blink Delay |
|---------|---------------|-------------|-------------|
| Hungry  | 300 (low)     | 400 (slow)  | 500 ms (slow) |
| Sleepy  | 100 (dim)     | 0 (off)     | Closed (no blink) |
| Happy   | 900 (bright)  | 800 (fast)  | 100 ms (fast) |

---

## 📦 Summary

| Feature | API | Range |
|---------|-----|-------|
| Digital blink | `pin.write_digital(0/1)` | ON or OFF |
| LED brightness | `pin.write_analog(value)` | 0–1023 |
| Motor speed | `pin.write_analog(value)` | 0–1023 |
| Servo angle (basic) | `pin.write_analog(angle)` | 0–180 (approx.) |

> 💡 For precise servo control with 6+ servos, always use an **I²C PWM expansion board** — direct Micro:bit PWM is limited and can be unstable for servo-heavy applications like Robot Pu.
