---
sidebar_position: 5
sidebar_label: 5:Use MU editor to Program Robot Pu
---

# 5:Use MU editor to Program Robot Pu


This tutorial teaches how to use MU Editor to write, flash, and manage MicroPython programs and configuration files for Robot PU, giving you a simple interface to bring your robot to life.

---

## 🧰 What Is MU Editor?

MU Editor is a beginner-friendly Python IDE designed for microcontroller programming — especially BBC Micro:bit, which Robot PU uses as its brain. With MU, you can:

- ✏️ Write and edit MicroPython programs
- 🚀 Flash code directly to Micro:bit
- 📦 Upload external files (like `pu.txt`)
- 🪲 Use the REPL (interactive shell) for live testing and debugging

---

## 🪜 Step-by-Step Guide

### 1️⃣ Install MU Editor

1. Visit [https://codewith.mu](https://codewith.mu)
2. Download the version for your OS (Windows, macOS, Linux)
3. Install and open MU Editor

---

### 2️⃣ Connect Your Micro:bit

1. Plug in Micro:bit via USB cable
2. MU should detect it automatically
3. If not, click the **Mode** button and select **BBC micro:bit**

---

### 3️⃣ Write Your Program

Start a new Python file and write your Robot PU logic, like reading configuration and initializing servos.

**Example snippet:**

```python
def read_config(filename="pu.txt"):
    try:
        with open(filename) as f:
            lines = [line.strip() for line in f.readlines()]
        name = lines[0]
        channel = int(lines[1])
        trims = [int(x) for x in lines[2].split(",")]
        return name, channel, trims
    except:
        return "DefaultPu", 1, [0]*6

pu_name, pu_channel, pu_trims = read_config()
display.scroll("Hello " + pu_name)
```

> 💡 **Tip:** Robot PU's logic should live in a separate `.py` file for easy reuse and editing.

---

### 4️⃣ Flash the Code to Micro:bit

> 📌 The `pu.txt` file must be in the same directory as your `.py` script to be read properly.

1. Click **Flash** to upload your Python script
2. Micro:bit will reboot with your new code running

---

### 5️⃣ Upload the Configuration File

1. Click the **Files** button in MU Editor
2. Use the interface to upload `pu.txt` — drag from the **right pane** (Micro:bit) to the **left pane** (computer) to retrieve, or left to right to deploy

**Example `pu.txt` content:**

```
RobotPu
7
5,-3,2,-4,0,1
```

---

### 6️⃣ Use REPL for Live Testing

1. Click **REPL** for interactive shell access
2. You can:
   - Test variables (e.g., `pu_trims`)
   - Adjust behavior dynamically
   - Print sensor readings or debug outputs

```python
print("Trims:", pu_trims)
```

---

## 🔄 Iterating & Updating

Whenever you want to tweak Robot PU's behavior or calibration:

1. Edit the `pu.txt` file with new values
2. Use MU's file manager to re-upload
3. Flash the updated code if needed

> You can now tune Robot PU's movement, communication channel, and even its persona — without touching a line of code!

---

## 🧑‍🔬 Bonus Tips

- **Save different versions** of `pu.txt` for multiple robot personalities
- **Use comments** in `.py` code to document logic — great for learning and sharing!
- **Add REPL commands** like servo testing routines for quick field adjustments
