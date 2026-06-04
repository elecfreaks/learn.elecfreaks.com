---
sidebar_position: 6
sidebar_label: 6:How to control servos and use I2C servo expansion board for Robot Pu
---

# 6:How to control servos and use I2C servo expansion board for Robot Pu

The Micro:bit's onboard power is sufficient for driving up to 3 servos reliably — and with some creative workarounds, it can stretch to support 4. However, Robot PU requires control over at least 6 servos, which exceeds the Micro:bit's native capacity. To meet these demands, we use an **I²C servo expansion board**. This not only enables connection of additional servos but also supplies the external power necessary to drive them safely and consistently.

Based on the `WK.py` file in Robot PU's repo, this hands-on tutorial walks through initializing I²C, sending commands to a servo board, and verifying movement. This guide assumes you're using a board like the **Kitronik I²C 16-servo driver** or similar, and that your Micro:bit is connected via pins 19 (SCL) and 20 (SDA).

---

## 🔌 Hardware Setup

| Component | Detail |
|-----------|--------|
| Micro:bit | V1 or V2 |
| I²C Servo Extension Board | e.g. Kitronik 16-servo board |
| Servo motor(s) | Connected to board channels |
| Power supply | External 5V recommended for servos |

**Wiring:**

| Micro:bit Pin | Servo Board |
|---------------|-------------|
| Pin 19 | SCL |
| Pin 20 | SDA |
| GND | GND |
| — | VCC → 5V (external power) |

---

## Step 1: Initialize I²C

```python
from microbit import i2c

# Optional: reinitialize with custom frequency
i2c.init(freq=100000, sda=pin20, scl=pin19)
```

This sets up the I²C bus for communication.

---

## Step 2: Scan for Devices

```python
devices = i2c.scan()
print("I2C devices found:", devices)
```

This returns a list of 7-bit addresses. Note the address of your servo board — often `0x6A` or `0x40` depending on model.

---

## Step 3: Send Servo Command

Your servo board expects a command in this format:

- **Address:** `0x6A`
- **Command format:** `[servo_number, angle]`

```python
servo_address = 0x6A
servo_number = 0x01  # Servo channel 1
angle = 90           # Degrees

# Send command to move servo
i2c.write(servo_address, bytes([servo_number, angle]))
```

This moves servo channel 1 to 90°. You can loop through angles for sweeping motion.

---

## Step 4: Sweep Servo Example

```python
from microbit import sleep

for angle in range(0, 181, 10):
    i2c.write(servo_address, bytes([servo_number, angle]))
    sleep(200)
```

This sweeps the servo from 0° to 180° in 10° increments.

---

## Step 5: Clean Up or Reset

Some boards support reset commands or zeroing out servos:

```python
# Reset servo to 0°
i2c.write(servo_address, bytes([servo_number, 0]))
```

---

## 💡 Tips from `WK.py`

The `WK.py` file uses structured I²C commands and abstracts servo control into functions. You can follow that pattern:

```python
def set_servo(channel, angle):
    i2c.write(servo_address, bytes([channel, angle]))
```

This makes your code modular and easier to maintain — especially when Robot PU starts skating or expressing hunger. 🤖
