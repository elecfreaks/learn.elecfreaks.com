---
sidebar_position: 1
sidebar_label: "Case 1: First Steps in Wireless Control — Make PU Walk and Jump with Buttons"
description: Overview
---

import PUProgram from '@site/src/components/PUProgram';

# Case 1: First Steps in Wireless Control — Make PU Walk and Jump with Buttons

## Overview

This is the first lesson in the handheld remote-control series. Building on basic PU robot action programming, students establish a radio connection between a wireless controller, fitted with a second micro:bit, and the PU robot. They program B1 to send command 1 and B2 to send command 2, so that a button press triggers a corresponding action. The lesson introduces radio communication and command mapping, preparing students for joystick control and text commands in later lessons.

## Preparation

| Name | Quantity | Picture | Purpose |
| :--- | :---: | :---: | :--- |
| PU robot kit | 1 kit | <img src={require("@site/docs/microbit/robot/pu-robot-kit/remote-control/images/pu-robot.png").default} alt="PU robot kit" width="280" style={{maxWidth: "280px", height: "auto", background: "white"}} /> | Robot to be controlled; its installed micro:bit V2 counts toward the two-board total |
| Wireless controller (joystick expansion board) | 1 | — | Holds the second micro:bit and provides B1/B2 buttons |
| micro:bit V2 | 2 in total | — | One board in the controller and one in PU; two boards in total |
| USB data cables | 1 | — | Download the program to each micro:bit in turn |
| Computer | 1 | — |  |

Each group uses **two micro:bit V2 boards in total**: one in PU and one in the controller. Any board already installed in PU is included in that total.

Before programming, follow the [official quick start](../pu-robot-kit-quick-start.md) to fit two AAA batteries in the controller and turn it on. The pictures below show battery installation and the power switch. These lessons download custom programs to both boards; their radio group is **160**, rather than the factory firmware’s displayed channel number.

<img src={require("@site/docs/microbit/robot/pu-robot-kit/remote-control/images/pu-controller-batteries.png").default} alt="Controller battery installation" width="560" style={{maxWidth: "100%", height: "auto", background: "white"}} />

<img src={require("@site/docs/microbit/robot/pu-robot-kit/remote-control/images/pu-controller-power.png").default} alt="Controller power switch" width="560" style={{maxWidth: "100%", height: "auto", background: "white"}} />

## Learning Objectives

1. Understand the wireless controller and radio communication, especially the requirement for both devices to use the same radio group.

2. Use the controller-side blocks for setting the controller radio group and initializing controller buttons, together with the robot-side block for enabling remote control, to connect the two devices.

3. Understand the mapping from a button press to a transmitted number and then to a robot action. Independently program B1 to make PU walk straight and B2 to make it jump.

4. Work in pairs to observe, test and debug remote control, following the complete input → transmission → execution chain.

## Lesson Introduction

You have already programmed PU to walk straight and jump. Until now, you first downloaded a program through a USB cable, and PU then followed its script. Today, you will give PU a remote controller: press a controller button and the robot responds with an action. How does the controller communicate with PU? How does PU know which action a button should trigger? Keep these questions in mind as you explore wireless control.

## Exploration

1. Review: Ask which blocks make PU walk straight and jump. Invite students to demonstrate the action blocks, revisiting walk forward and the jump action. Explain that these blocks alone make the robot follow a predefined sequence.

2. New concept — a wireless walkie-talkie: Two micro:bits can communicate using radio waves, but their radio groups must match, just as two walkie-talkies need the same channel. Demonstrate ‘set controller radio group 160’ on the controller and ‘enable remote control on group 160’ on the robot. Emphasize that both values must be 160.

3. New concept — buttons and commands: B1 and B2 are command inputs. With the program loaded, B1 sends the number 1 over radio and B2 sends 2. The robot receives a number and uses an if statement to decide which action to perform. This conditional decision is the main programming concept of the lesson.

4. Test: Download the two programs to the corresponding boards. Press B1 and observe whether PU walks forward for 4 steps and then stops; press B2 and observe whether it jumps. If there is no response, check that the radio groups match, check controller power, and then download the programs again.

## MakeCode Programming

This lesson has two programs: one for the controller and one for the PU robot. Open the corresponding shared project in MakeCode for each micro:bit, follow its blocks, and download each program to the correct board. Both programs must use the same radio group; the examples in this series use 160.

### Controller Program

Program description: Set the radio group and initialize the buttons, then repeatedly check B1 and B2. B1 sends the number 1; B2 sends 2.

<PUProgram projectId="_PiyhAo3Xv3sU" language="en" image={require("./images/case-01-controller-en.png").default} title={"Figure 1-1: Controller program (MakeCode blocks)"} />

### PU Robot Program

Program description: Listen on radio group 160. When the robot receives 1, walk forward for 4 steps; when it receives 2, jump.

<PUProgram projectId="_Ua3gkkA4XEFe" language="en" image={require("./images/case-01-robot-en.png").default} title={"Figure 1-2: PU robot program (MakeCode blocks)"} />

## Classroom Activities

Work in pairs, with a driver and an observer. Mark a finish line 1 metre away on the floor. The driver presses B1 to make PU walk straight; compare how accurately the groups stop at the line. Then place a low piece of cardboard as an obstacle and press B2 to attempt a jump over it. After each demonstration, discuss whether actions were clear and whether the robot started and stopped as expected.

Extension challenge: Change the B2 action from jump to dance by replacing Action.Jump with Action.Dance. Then assign another action to B3, such as Action.Kick, to explore how one button can map to one action.

## Summary and Sharing

Use the demonstrations to review the key idea: the controller sends numbers and PU maps them to actions. Both devices must use the same radio group. The robot’s if statements turn received numbers into visible movements. In the next lesson, you will use the joystick as a direction control for PU.
