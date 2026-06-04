---
sidebar_position: 7
sidebar_label: 7:How to collect AI training data for Robot Pu
---

# 7:How to collect AI training data for Robot Pu



This guide outlines techniques for extracting sensor and actuator data from Robot PU, such as servo positions, IMU values, temperature, sound levels, compass data, radio signals, and distance readings. You'll also learn how to retrieve this data via the REPL or write it to a file — despite the Micro:bit's tiny disk space!

---

## 🎯 Target Data Streams

Robot PU can log the following data:

| Type | Source / Function |
|------|------------------|
| Servo positions | Based on current trim or movement commands |
| IMU data (accel, gyro) | `accelerometer.get_x()`, `get_y()`, `get_z()` |
| Sound level | `microphone.sound_level()` |
| Temperature | `temperature()` |
| Radio signal strength | From received messages + signal metadata |
| Compass heading | `compass.heading()` |
| Distance sensor | Custom code via ultrasonic, IR, etc. |

---

## 📦 Step 1: Create a Data Logging Function

```python
def collect_data(servo_angles, distance_sensor_read):
    data = {
        "servo": servo_angles,
        "accel": (accelerometer.get_x(), accelerometer.get_y(), accelerometer.get_z()),
        "sound": microphone.sound_level(),
        "temp": temperature(),
        "compass": compass.heading(),
        "distance": distance_sensor_read(),
    }
    return data
```

---

## 🧪 Step 2: Use REPL to Collect Snapshots

MU Editor's REPL (interactive shell) lets you manually execute commands and view output instantly.

1. Click **REPL** in MU Editor.
2. Run:

```python
data = collect_data([30, -20, 15, -10, 0, 5], lambda: 42)  # Mock distance function
print(data)
```

3. Manually copy & paste results to build a training dataset in another tool like Excel or Jupyter.

---

## 📁 Step 3: Write to File (Limited Size Strategy)

Because Micro:bit's file storage is limited (~30 KB), keep writes compact and infrequent:

```python
def log_data_to_file(filename="log.txt", data={}):
    try:
        with open(filename, "a") as f:
            # Compress as comma-separated values
            line = ",".join([str(v) for v in data.values()])
            f.write(line + "\n")
    except Exception as e:
        print("Write error:", e)
```

> ⚠️ **Note:** Limit writes to essential values, or sample periodically (e.g. every 10 seconds).

---

## 📡 Step 4: Alternative – Radio Broadcast to Logger Micro:bit

Use one Micro:bit to **transmit** data, and another to **log** it on a computer.

**Sender Micro:bit:**

```python
radio.config(channel=7)
radio.on()
data = collect_data([10, 20, 30, 40, 50, 60], lambda: 42)
radio.send(str(data))
```

**Receiver Micro:bit:**

```python
radio.config(channel=7)
radio.on()
while True:
    incoming = radio.receive()
    if incoming:
        print(incoming)  # Capture via REPL or file
```

---

## 🧰 Bonus: Real-Time Graphing (Optional with MU Plotter)

- Send numeric values via `print()` in MU Editor
- MU's **Plotter** mode will graph them in real time

```python
print(microphone.sound_level())
```

> Great for visualizing trends before exporting data!

---

## 🚀 Wrap-Up

| Strategy | When to Use |
|----------|------------|
| REPL snapshots | Manual collection and quick one-off samples |
| Write to local file | Short sessions, watch the ~30 KB storage limit |
| Radio broadcast to logger | Long-term or continuous data collection |
| CSV formatting | Keep output compact and consistent for downstream tools |
