---
sidebar_position: 5
sidebar_label: "Case 5: Motion Control — Tilt the Controller to Turn PU"
description: Overview
---

import PUProgram from '@site/src/components/PUProgram';

# Case 5: Motion Control — Tilt the Controller to Turn PU

## Overview

This is the fifth lesson in the handheld remote-control series. Instead of using buttons or a joystick, students use the micro:bit’s built-in accelerometer. Tilting the controller micro:bit right makes PU turn right; tilting left makes it turn left; holding it level stops turning. A joystick expansion board is not required. Students read the roll angle and follow the physical orientation → sensor value → control command chain, gaining another input method for the final challenge.

## Preparation

| Name | Quantity | Picture | Purpose |
| :--- | :---: | :---: | :--- |
| PU robot kit | 1 kit | <img src={require("@site/docs/microbit/robot/pu-robot-kit/remote-control/images/pu-robot.png").default} alt="PU robot kit" width="280" style={{maxWidth: "280px", height: "auto", background: "white"}} /> | Robot to be controlled |
| Wireless controller (joystick expansion board) | 1 | — | Hold the controller micro:bit and provide tilt input |
| micro:bit V2 | 2 in total | — | One board in the controller and one in PU; this lesson uses the onboard accelerometer |
| USB data cables | 1 | — | Download programs |
| Computer | 1 | — | MakeCode programming |

Each group uses **two micro:bit V2 boards in total**: one in PU and one in the controller. Any board already installed in PU is included in that total.

## Learning Objectives

1. Understand the accelerometer and roll angle: a level controller is near 0°, tilting right is positive, and tilting left is negative.

2. Read Rotation.Roll and transmit it over radio, turning physical orientation into data.

3. Use an angle threshold, such as ±20°, to filter hand movement and map tilt to left/right turns.

4. Explore motion-based robot interaction and consider other body movements that could control PU.

## Lesson Introduction

You have controlled PU with buttons and a joystick. Today, hold the micro:bit flat in your hand like a steering wheel. Tilt your hand right and PU turns right; tilt left and it turns left; level your hand and it stops turning. The micro:bit’s accelerometer acts like a level, sensing the board’s tilt. How can an angle become a turning command? Let your hand’s orientation become the remote control.

## Exploration

1. Review: Recall the robot-side read value → apply dead zone → execute action pattern from Cases 2 and 3. Ask which direction parameters turn the robot left and right, and revisit LeftTurn and RightTurn.

2. New concept — accelerometer and roll: The micro:bit uses its built-in accelerometer to determine tilt. Roll describes left/right tilt: near 0° when level, positive to the right, and negative to the left. Demonstrate input.rotation(Rotation.Roll) while tilting the controller. You can first display the number on the LEDs to observe the changes.

3. New concept — tilt threshold: A hand-held board will move slightly, so use a ±20° threshold. Turning is triggered only beyond 20°, helping filter small movements. Send the angle using SendControlType.Roll; read ControlValueType.Roll on the robot and compare the value.

4. Test: Download both programs. Tilt the controller right by more than 20° to turn PU right, tilt left to turn left, and return it to level to stop turning. Consider whether a larger angle makes PU turn faster. In this lesson, the angle selects direction only; it is not used to vary speed.

## MakeCode Programming

This lesson has two programs: one for the controller and one for the PU robot. Open the corresponding shared project in MakeCode for each micro:bit, follow its blocks, and download each program to the correct board. Both programs must use the same radio group; the examples in this series use 160.

### Controller Program

Program description: Repeatedly read the controller’s left/right tilt angle (roll) and transmit it to the robot over radio.

<PUProgram projectId="_UKT8WdHw91V6" language="en" image={require("./images/case-05-controller-en.png").default} title={"Figure 5-1: Controller program (MakeCode blocks)"} />

### PU Robot Program

Program description: Read the received roll angle r. Turn right when r is above 20°, or left when r is below -20°.

<PUProgram projectId="_710F4p7RDAfz" language="en" image={require("./images/case-05-robot-en.png").default} title={"Figure 5-2: PU robot program (MakeCode blocks)"} />

## Classroom Activities

Try a human steering-wheel challenge. A student holds the controller at one end of the area, with PU at the other end. On the teacher’s ‘turn right’ instruction, tilt the board to turn PU in place. Compare how few inputs each driver needs to face the original direction again. Increase the difficulty by combining tilt and instructions in a ‘turn right 90° → walk straight’ task. Swap driver and observer roles and discuss control stability.

Extension challenge: Add another axis. Use forward/backward tilt (Rotation.Pitch) to make PU walk forward or backward. Send the pitch angle through SendControlType.Speed, then use the sign of the received Speed value to choose direction, referring to Case 2.

## Summary and Sharing

Review the motion-control chain: the accelerometer converts orientation into an angle, which the program converts into a turning command. Unlike joystick control, the input is the orientation of the whole hand or body rather than a finger movement. You now know four input methods: buttons, joystick, text and tilt. The final lesson combines joystick direction, button actions and a variable counter in a square patrol challenge.
