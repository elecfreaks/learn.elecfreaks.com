---
sidebar_position: 3
sidebar_label: "Case 3: Joystick Steering — Turn PU in Place"
description: Overview
---

import PUProgram from '@site/src/components/PUProgram';

# Case 3: Joystick Steering — Turn PU in Place

## Overview

This is the third lesson in the handheld remote-control series. A two-legged robot can turn in place as well as walk straight or sideways. Building on Case 2, students change only two robot-side direction parameters: SideRight → RightTurn and SideLeft → LeftTurn. Left/right joystick input then turns PU rather than moving it sideways. Comparing the two programs helps students understand how direction parameters select different leg movements and behaviours.

## Preparation

| Name | Quantity | Picture | Purpose |
| :--- | :---: | :---: | :--- |
| PU robot kit | 1 kit | <img src={require("@site/docs/microbit/robot/pu-robot-kit/remote-control/images/pu-robot.png").default} alt="PU robot kit" width="280" style={{maxWidth: "280px", height: "auto", background: "white"}} /> | Robot to be controlled |
| Wireless controller (joystick expansion board) | 1 | — | Provide joystick input |
| micro:bit V2 | 2 in total | — | One board in the controller and one in PU |
| USB data cables | 1 | — | Download programs |
| Computer | 1 | — | MakeCode programming |

Each group uses **two micro:bit V2 boards in total**: one in PU and one in the controller. Any board already installed in PU is included in that total.

## Learning Objectives

1. Understand turning in place and the difference between sideways movement (Side) and turning (Turn).

2. Make a small change to an existing program by replacing two direction parameters, and observe how a code change alters behaviour.

3. Use left/right joystick input to turn PU in place, combining turning and forward walking to follow a route.

4. Compare the programs from Cases 2 and 3 to practise identifying differences and applying existing knowledge to a new task.

## Lesson Introduction

PU can now move forward, backward and sideways. But at a corner it can only shuffle sideways without changing where it faces. People can stop, turn on the spot, and then walk in a new direction. Today, PU will learn to do the same: move the joystick left or right and it turns in place. You only need to change two lines in the previous program. Which ones do you think they are?

## Exploration

1. Review: Revisit the robot-side direction branches from Case 2. Ask which parameter makes PU move sideways to the right and how this differs from turning right. Invite students to locate the sideways-right and right-turn options.

2. New concept — sideways movement and turning: Sideways movement changes position without changing the robot’s heading. Turning rotates the body in place to face a new direction. Demonstrate replacing SideRight and SideLeft with RightTurn and LeftTurn, leaving the rest of the program unchanged.

3. Compare the two programs: Ask students to mark the two changed direction parameters. Discuss why the controller program does not need to change: the joystick sends the same values, while the robot interprets left/right input differently.

4. Test: Download both programs and move the joystick left or right to observe turning in place. Compare it with the sideways movement in Case 2 and describe the difference in control.

## MakeCode Programming

This lesson has two programs: one for the controller and one for the PU robot. Open the corresponding shared project in MakeCode for each micro:bit, follow its blocks, and download each program to the correct board. Both programs must use the same radio group; the examples in this series use 160.

### Controller Program

Program description: The controller uses the same logic as Case 2. It only transmits forward/backward and left/right joystick values, so no logic changes are needed.

<PUProgram projectId="_dTx3ikiWV5ag" language="en" image={require("./images/case-03-controller-en.png").default} title={"Figure 3-1: Controller program (MakeCode blocks)"} />

### PU Robot Program

Program description: Start with the robot program from Case 2 and change its two sideways-movement branches to turning-in-place branches.

<PUProgram projectId="_Fi5VUPFyofpf" language="en" image={require("./images/case-03-robot-en.png").default} title={"Figure 3-2: PU robot program (MakeCode blocks)"} />

## Classroom Activities

Mark an L-shaped or S-shaped route with tape. The driver uses the joystick to follow it, turning approximately 90° at each corner before walking straight again. Compare route accuracy and completion time. The observer records over-turning, under-turning or missed turns and gives feedback to the driver.

Extension challenge: Make PU turn through a complete circle before walking away. Adjust the turning step count to produce a 360° turn, for example about 12 steps, and refine it for the actual floor and servos. Combine this turn with forward movement.

## Summary and Sharing

Review how changing two direction parameters changed sideways movement into turning in place. The controller and its transmitted values stayed the same; only the receiver’s interpretation changed. This illustrates how dividing a program into modules helps reuse code. PU can now walk forward, backward and sideways, and turn. In the next lesson, you will replace numeric commands with text messages.
