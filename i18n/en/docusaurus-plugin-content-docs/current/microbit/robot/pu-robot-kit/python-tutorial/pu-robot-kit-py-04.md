---
sidebar_position: 4
sidebar_label: 4:The Configure File of Robot Pu
---

# 4:The Configure File of Robot Pu


This tutorial walks through how to use a text-based configuration file — `pu.txt` — to dynamically set up Robot PU's identity, communication channel, and servo trimming angles using Micro:bit's Python environment. This will save your time pressing buttons to adjust radio channels after Robot PU boots up or gets reset.

---

## 📁 What is `pu.txt`?

`pu.txt` is a simple text configuration file saved alongside your Python scripts on the Micro:bit. It contains:

- **Line 1:** Robot PU's name
- **Line 2:** Communication channel (e.g. for radio signals)
- **Line 3:** Trimming angles for 6 servos:
  - Left foot
  - Left leg
  - Right foot
  - Right leg
  - Neck yaw
  - Neck pitch

**Sample content of `pu.txt`:**

```
Jack Peu
166
-5, -5.0, -5, -5.0, -9.0, 0.0
```

---

## 📄 Step 1: Create `pu.txt`

Use any plain text editor to create `pu.txt` and place it in your Micro:bit's file system alongside your Python program. Use the `uflash` tool or the **Mu editor**.

**Example file content:**

```
Mike Peu
170
-5, -7.0, -5, -5.0, -9.0, 0.0
```

Then save it directly to Micro:bit via drag-and-drop or file system access.

---

## 🧠 Step 2: Read the Configuration in Python and Apply to Robot PU

```python
def read_config(self):
    try:
        with open("pu.txt", 'r') as f:
            c = f.read().split('\n')
            self.sn = c[0]
            self.groupID = int(c[1])
            pr.s_tr = [float(i) for i in c[2].split(',')]
    except:
        pass
```

---

## 🎯 Summary

- `pu.txt` allows flexible updates **without rewriting Python code**.
- Trimming values help fine-tune servo calibration, essential for balanced motion.
- You can reuse this configuration logic across different robot profiles just by swapping the file.

---

## 📁 How Mu Editor Copies Files to the Micro:bit File System

The Mu editor provides a simple and visual way to copy files to and from the MicroPython file system on the Micro:bit. Here's how it works.

### 🧠 MicroPython File System Basics

- When MicroPython is flashed onto the Micro:bit, it creates a small internal file system.
- This file system is **not accessible via USB** like a flash drive — you need a tool like Mu or `microfs`.

### 🖥️ Using Mu's "Files" Button

1. Connect your Micro:bit via USB.
2. Flash a MicroPython script onto it using Mu (even a blank one).
3. Click the **"Files"** button in Mu's toolbar.
4. A pane opens showing:
   - Files on your **computer** (left)
   - Files on the **Micro:bit** (right)
5. Drag and drop files between the two panes.
   - In the `pu.txt` case, drag `pu.txt` from the **right pane** to the **left pane** to retrieve it, or from left to right to deploy it.

> ✅ You can copy `.py` files, text files (`pu.txt`), or data logs to the Micro:bit, and retrieve files written by your MicroPython code.

---

## ⚠️ Important Notes

- You **must** have MicroPython flashed onto the Micro:bit for the file system to work.
- Flashing a new `.hex` file **erases the file system**, so copy files before reflashing.
- Avoid toggling the "Files" pane while the Micro:bit is busy — wait for Mu to confirm actions are complete.

---

## 🧪 Behind the Scenes

Mu uses tools like:

| Tool | Purpose |
|------|---------|
| `uflash` | Flash Python scripts onto the Micro:bit |
| `microfs` | Manage files over serial connection |

These tools interact with the Micro:bit's **internal flash memory** — not the USB mass storage interface.

> For a visual guide, check out [Mu's official tutorial on copying files](https://codewith.mu/).
