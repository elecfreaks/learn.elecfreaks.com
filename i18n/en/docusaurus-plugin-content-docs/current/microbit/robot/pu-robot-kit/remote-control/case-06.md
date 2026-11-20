---
sidebar_position: 6
sidebar_label: "Case 6: Final Challenge — Remotely Guide PU Around a Square"
description: Overview
---

import PUProgram from '@site/src/components/PUProgram';

# Case 6: Final Challenge — Remotely Guide PU Around a Square

## Overview

This final lesson combines joystick direction control from Cases 2 and 3, button commands from Case 1, robot actions from Case 4, and a new concept: variable counting. The driver guides PU around a square and presses B1 to report each corner. PU jumps and increments a counter; after four corner reports, it dances to celebrate. This practical task develops the complete process of breaking down a task, combining blocks, testing and debugging.

The driver controls the route manually. B1 reports and counts a corner; PU does not detect corners or navigate the square autonomously.

## Preparation

| Name | Quantity | Picture | Purpose |
| :--- | :---: | :---: | :--- |
| PU robot kit | 1 kit | <img src={require("@site/docs/microbit/robot/pu-robot-kit/remote-control/images/pu-robot.png").default} alt="PU robot kit" width="280" style={{maxWidth: "280px", height: "auto", background: "white"}} /> | Robot to be controlled |
| Wireless controller (joystick expansion board) | 1 | — | Joystick for direction control and B1 for corner reports |
| micro:bit V2 | 2 in total | — | One board in the controller and one in PU |
| USB data cables | 1 | — | Download programs |
| Computer | 1 | — | MakeCode programming |

Each group uses **two micro:bit V2 boards in total**: one in PU and one in the controller. Any board already installed in PU is included in that total.

## Learning Objectives

1. Understand a variable as a named box for a value, and use one to record and increment the number of reported corners.

2. Combine joystick direction control, button commands and action blocks into a complete square-route, corner-counting and celebration program.

3. Break a larger task into walking → turning → reporting a corner → counting → checking completion.

4. Work together to divide roles, debug the program, and present the completed challenge.

## Lesson Introduction

You can now use the joystick to walk forward or backward and turn in place, buttons to request actions, and text to trigger a greeting or dance. Today’s final challenge is a square patrol: guide PU around four floor markers, report each corner with a jump, and watch it dance after all four reports. How can PU remember the number of corners? A new programming tool, the variable, keeps that count. Let’s begin.

## Exploration

1. Review three skills: joystick direction decisions from Cases 2 and 3, sending a number with B1 from Case 1, and action blocks from Case 4. Ask students to describe which controller and robot blocks are needed to walk forward and turn approximately 90° in place.

2. New concept — variables: PU needs to remember how many corners have been reported. A variable is like a named box, such as corners, holding a number. Start with corners = 0. Each B1 corner report runs corners = corners + 1. When corners == 4, the program triggers a celebration dance.

3. Break down the task: ① Reuse the direction-control code from Case 3 for joystick steering. ② Extend the Case 1 button logic so that receiving 1 triggers a jump and adds 1 to the counter. ③ Add a condition that triggers a dance after four corner reports. Implement the parts separately, then combine them.

4. Test: The driver uses the joystick to reach corner 1, presses B1, and observes the jump and corner report. Continue around all four corners and check for the celebration dance. If it does not happen at corner 4, check that the variable increases for each report and the condition is corners == 4.

## MakeCode Programming

This lesson has two programs: one for the controller and one for the PU robot. Open the corresponding shared project in MakeCode for each micro:bit, follow its blocks, and download each program to the correct board. Both programs must use the same radio group; the examples in this series use 160.

### Controller Program

Program description: The joystick continuously sends forward/backward and left/right values for direction control. Pressing B1 sends the number 1 to report arrival at a corner.

<PUProgram projectId="_hbeD5KEmk6s7" language="en" image={require("./images/case-06-controller-en.png").default} title={"Figure 6-1: Controller program (MakeCode blocks)"} />

### PU Robot Program

Program description: Combine direction control from Case 3 with a variable counter. Each corner-report command 1 increments the counter and triggers a jump. When the count reaches 4, PU dances.

<PUProgram projectId="_D8H044FYRfqr" language="en" image={require("./images/case-06-robot-en.png").default} title={"Figure 6-2: PU robot program (MakeCode blocks)"} />

## Classroom Activities

Run a square patrol challenge in groups of four: driver, observer, timekeeper and scorer. Use tape to mark the four corners of a square with sides of approximately 1 metre. Guide PU around the corners and report each arrival, with a jump at every corner and a dance at the end. Compare completion time and action accuracy. During the presentations, explain how the task was divided, describe problems such as drifting or an incorrect count, and explain how they were addressed.

Extension challenges: ① Change the square to a triangle and celebrate after 3 corners by changing corners == 4 to corners == 3. ② Repeat laps by resetting the counter to 0 after reaching 3. ③ Try different actions at successive corners, such as a jump at corner 1 and a kick at corner 2, using conditions such as corners == 1, 2 or 3.

## Summary and Sharing

Review the full series: one button for one action, joystick movement, turning in place, text commands, tilt control, and finally counting within a combined task. Each lesson adds one concept to earlier learning. Consider how to extend the square patrol with ultrasonic obstacle avoidance or multiple controllers, and which parts of the programs would need to change.
