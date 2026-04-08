---
sidebar_position: 1
sidebar_label: Desktop-Grade Wheeled-Legged Robot Dog (XGO-mini3W) User Manual
---

# Power On & Charging
## Power On & Initialization Guide

This chapter describes the standard startup procedure for the XGO series robot. To ensure accurate calibration of internal sensors and safe operation of the device, please strictly follow the instructions below.

## Core Safety Warnings (Critical Safety Protocol)

**DO NOT power on while holding the robot**

During startup, the internal Inertial Measurement Unit (IMU) performs automatic zero-offset calibration.

**Risk Description:**
Holding or shaking the robot during startup will cause drift in the IMU calibration data, leading to errors in attitude calculation, abnormal motor oscillation, or uncontrolled movements.

**Operating Instructions:**
Before powering on, place the robot on a flat, stable surface.

# Quadruped Robot Startup Procedure

**Applicable Model: XGO-Mini3W**

System power-on includes two phases: **Static Self-Test** and **Dynamic Reset**. Please follow these steps:

1. Placement
Place the robot in a prone position (belly down) on a flat surface.

**Checkpoint:** Ensure all limb joints are naturally folded with no physical interference or jamming.

2. Power On

Short press the power button on the robot’s back.

**Status Indicator:**
The circular LED around the power button will flash rapidly, then stay solid on, indicating that the underlying circuit is powered on.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-robot-kit/images/cm4-xgo-inspection-01.gif)

**Power Off**
Press the power button on the back. The circular light will blink slowly, the robot dog will lie down gradually, the robotic arm will retract, and the light will turn off, indicating the system is fully shut down.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-robot-kit/images/cm4-xgo-inspection-02.gif)

3. Motion Control Unit Initialization ("Wake-up" Sequence)

The robot will automatically run a self-test and reset sequence:

**Standing Reset:** The body slowly lifts to the default standing height.

**Robotic Arm Self-Test:** The arm automatically performs Deploy and Retract motions to verify joint servo status.

**Initialization Complete:** When the robotic arm is fully retracted and the body remains standing still, the motion control system has finished startup.

4. Operating System Ready

When the screen lights up and displays the XGO-OS user interface, the robot enters the fully ready state.

**Note:** Do not force shutdown or cut off power during the initialization sequence.

# Charging Procedure

**Locate the Charging Port**

XGO-mini3w (Quadruped): The charging port is usually located on the robot’s belly, a DC round port.

**Status Indicators**
Check the LED indicator on the power adapter to confirm charging status:
- 🔴 Solid Red: Charging. The battery is receiving power in constant-current / constant-voltage mode.
- 🟢 Solid Green: Fully Charged. The battery is full; please disconnect the power supply.

**Note:** When the battery is extremely low on some models, the indicator may take 1–2 minutes to turn red after plugging in the charger.

**Charging Duration**
- A full charge typically takes 1.5 – 2 hours (depending on remaining power and battery type).
- Overcharging beyond 12 hours is strictly prohibited.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-robot-kit/images/cm4-xgo-preparation-04.gif)
