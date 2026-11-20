---
sidebar_position: 4
sidebar_label: "Case 4: Text Commands — Interact with PU"
description: Overview
---

import PUProgram from '@site/src/components/PUProgram';

# Case 4: Text Commands — Interact with PU

## Overview

This is the fourth lesson in the handheld remote-control series. The previous lessons transmitted numbers such as button commands and joystick values. Here, students send text: press A on the controller’s micro:bit to send "hello", or B to send "dance". PU responds by greeting or dancing. Students compare numeric and text commands, learn to compare strings, and explore how a robot can respond to a word.

## Preparation

| Name | Quantity | Picture | Purpose |
| :--- | :---: | :---: | :--- |
| PU robot kit | 1 kit | <img src={require("@site/docs/microbit/robot/pu-robot-kit/remote-control/images/pu-robot.png").default} alt="PU robot kit" width="280" style={{maxWidth: "280px", height: "auto", background: "white"}} /> | Robot to be controlled |
| micro:bit V2 | 2 in total | — | One board in the controller and one in PU; this lesson uses the onboard A/B buttons, so the joystick board is optional |
| USB data cables | 1 | — | Download programs |
| Computer | 1 | — | MakeCode programming |

Each group uses **two micro:bit V2 boards in total**: one in PU and one in the controller. Any board already installed in PU is included in that total.

The joystick expansion board is **optional** in this lesson. Use the A/B buttons on the controller micro:bit, not B1/B2 on the expansion board. Messages are transmitted as text over radio; this is not voice recognition.

## Learning Objectives

1. Understand that radio can transmit text messages, or strings, as well as numbers.

2. Use the controller’s send-text-message block and the robot’s text-value-received event to map text to actions.

3. Use string comparison (==) to test whether text matches, and independently program PU to greet on "hello" and dance on "dance".

4. Explore text interaction through a walkie-talkie-style robot performance, building interest in programming and text-based control.

## Lesson Introduction

So far, you have sent PU numeric codes: 1 means walk straight and 2 means jump. Today, you will send an English word instead. Press A to send "hello" and PU performs a greeting; press B to send "dance" and it dances. Would you like to teach PU more words? Today’s programming technique lets you add new text commands.

## Exploration

1. Review: Revisit onControlValueReceived(Button, ...) from Case 1. Ask how the robot distinguished command 1 from command 2. Use the if comparison to introduce comparing text.

2. New concept — text messages: Radio can send text as well as numbers. The controller uses the send-text-message block to send a word such as "hello". The robot receives it in the text-value-received event as a string. Demonstrate sending "hello" with A and "dance" with B.

3. New concept — string comparison: Use == to compare text, for example msg == "hello", with text inside double quotation marks. The contents must match exactly. Differences in upper- and lower-case letters count as differences, which is a common source of errors for beginners.

4. Test: Download both programs. Press A on the controller and observe PU’s greeting action; press B and observe its dance. If there is no response, check that the strings match exactly, including letter case and the absence of extra spaces.

## MakeCode Programming

This lesson has two programs: one for the controller and one for the PU robot. Open the corresponding shared project in MakeCode for each micro:bit, follow its blocks, and download each program to the correct board. Both programs must use the same radio group; the examples in this series use 160.

### Controller Program

Program description: Use the A and B buttons on the controller’s micro:bit. A sends the text "hello" and B sends "dance".

<PUProgram projectId="_Vbvg2XLwAigT" language="en" image={require("./images/case-04-controller-en.png").default} title={"Figure 4-1: Controller program (MakeCode blocks)"} />

### PU Robot Program

Program description: Listen for text messages. Greet when "hello" is received, and dance when "dance" is received.

<PUProgram projectId="_K9uJVM0EaUXs" language="en" image={require("./images/case-04-robot-en.png").default} title={"Figure 4-2: PU robot program (MakeCode blocks)"} />

## Classroom Activities

Hold a PU dialogue performance. Each group plans a short script of 2–3 lines using the text keywords already learned. Send each command with a button press while narrating PU’s response. Other groups observe whether the response matches the transmitted word, and discuss continuity and storytelling.

Extension challenge: Teach PU one more word. Add a controller event for pressing A+B together (Button.AB) and send "jump". Add an else if (msg == "jump") branch on the robot to trigger a jump. Both programs must be updated together.

## Summary and Sharing

Review the distinction: numeric commands are useful for action codes, while text commands are easier for people to read. String comparison lets PU map two words to two actions. Would PU still recognize a command with extra spaces or different capitalization? In the next lesson, set aside the joystick and buttons and use the micro:bit’s tilt as a steering input.
