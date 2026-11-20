---
sidebar_position: 2
sidebar_label: "Case 2: Joystick Control — Move PU Forward, Backward, Left and Right"
description: Overview
---

import PUProgram from '@site/src/components/PUProgram';

# Case 2: Joystick Control — Move PU Forward, Backward, Left and Right

## Overview

This is the second lesson in the handheld remote-control series. Building on button commands from Case 1, students use the joystick to control PU’s movement in four directions. Unlike a button, the joystick provides continuously changing sensor values. Students read those values, filter small fluctuations with a dead zone, and use if statements to map joystick direction to movement. This continuous input → direction decision approach prepares them for turning in the next lesson.

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

1. Understand the two joystick axes: forward/backward and left/right produce continuous values of approximately -1 to +1, with values near 0 when centred.

2. Understand why a dead zone filters small fluctuations around the centre and helps prevent unintended movement.

3. Use conditional branches to map the two joystick values to forward, backward, left and right movement.

4. Practise remote control to understand continuous input → decision → execution, while developing observation and debugging skills.

## Lesson Introduction

In the previous lesson, B1 and B2 each sent a command for a single action. A remote-controlled vehicle works differently: push the joystick to move forward, pull it back to reverse, and return it to the centre to stop. Today, you will use the joystick as PU’s steering and throttle controls. Push forward or backward to walk in that direction; move it left or right to move sideways. How does a joystick communicate direction, and how does PU decide where to go? Try it and find out.

## Exploration

1. Review: Recall the three steps for connecting the two boards: set the radio group → initialize controller buttons or enable remote control → respond to commands with if statements. Ask which direction parameter makes PU move forward, and revisit the MoveDirection options.

2. New concept — two joystick axes: The joystick contains two potentiometers arranged at right angles. One measures forward/backward input, called the speed axis here; the other measures left/right input, called the turn axis. Values vary approximately from -1 to +1: forward is near +1, backward near -1, and centre near 0. Demonstrate reading the speed and turn values while moving the joystick.

3. New concept — dead zone and direction decisions: A centred joystick may not read exactly 0. Small fluctuations could otherwise trigger movement. Set a threshold of 0.3: respond when the value is above 0.3 or below -0.3, and ignore small movements within the dead zone. The robot uses four conditional branches to map the two axes to four directions.

4. Test: Download both programs. Push forward and observe PU walking forward for 4 steps; pull back to reverse; move the joystick left or right for sideways movement. Return it to the centre and observe whether PU remains still. If small fluctuations continue to trigger movement, check that the 0.3 dead zone has been retained.

## MakeCode Programming

This lesson has two programs: one for the controller and one for the PU robot. Open the corresponding shared project in MakeCode for each micro:bit, follow its blocks, and download each program to the correct board. Both programs must use the same radio group; the examples in this series use 160.

### Controller Program

Program description: Repeatedly read the forward/backward value y and the left/right value x, then transmit both to the robot over radio every 0.1 seconds.

<PUProgram projectId="_cE88LgAMC6oU" language="en" image={require("./images/case-02-controller-en.png").default} title={"Figure 2-1: Controller program (MakeCode blocks)"} />

### PU Robot Program

Program description: Repeatedly read the received forward/backward value y and left/right value x. Apply a 0.3 dead zone and four conditional branches to select PU’s movement direction.

<PUProgram projectId="_DPJ5qw3KDiRJ" language="en" image={require("./images/case-02-robot-en.png").default} title={"Figure 2-2: PU robot program (MakeCode blocks)"} />

## Classroom Activities

Mark a cross on the floor and place PU in the centre. The teacher calls instructions such as ‘forward two spaces’, ‘backward one space’ or ‘sideways right one space’. The driver moves the joystick while the observer records direction and positioning. Compare how smoothly each pair coordinates its actions.

Extension challenge: Change the walking distance from 4 steps to 6 and observe the longer movement. Then change the dead zone from 0.3 to 0.1 and observe how smaller joystick movements trigger a response. Discuss how dead-zone size affects control.

## Summary and Sharing

Review how the joystick converts the driver’s intention into continuous axis values, and how the robot translates those values into four directions using a dead zone and conditional branches. In the next lesson, replace sideways movement with turning in place, allowing PU to change its heading at a corner.
