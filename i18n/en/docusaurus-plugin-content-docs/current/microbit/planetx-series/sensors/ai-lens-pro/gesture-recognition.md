---
sidebar_position: 16
sidebar_label: Gesture Recognition
---

# Case Study: AI Gesture Command Car

Use learned gestures to command forward movement, turns, and stopping

## Introduction

Can you command a car with your hands instead of a remote? First teach AI Lens Pro four distinct gestures named “Forward,” “Left,” “Right,” and “Stop,” then use recognition results to control Cutebot.

The program stores the mapping from gestures to actions. When the camera does not recognize one of the specified gestures, the car stops and waits for a valid command.

<!-- Image placeholder: completed gesture command car -->

## Learning Objectives

1. Collect, name, and recognize custom gestures.
2. Trigger actions by matching gesture names.
3. Use mutually exclusive branches and stop on unrecognized input.
4. Improve gesture samples and action settings through testing.

## Materials

| Item | Quantity | Image |
| --- | --- | --- |
| AI Lens Pro | 1 | <!-- Image placeholder: AI Lens Pro --> |
| Cutebot robot car with micro:bit | 1 | <!-- Image placeholder: Cutebot --> |
| IIC cable and camera mount | 1 set | <!-- Image placeholder: cable and mount --> |
| Flat, open testing area | 1 | <!-- Image placeholder: testing area --> |

## Hardware Connection

1. Turn off the power and install micro:bit on Cutebot.
2. Connect AI Lens Pro to the car's **IIC port**, with the camera facing the operator ahead.
3. Adjust the mount so the camera can see the participant's hand.
4. Power on the camera, open Gesture Recognition, and follow its interface to learn and save gestures.

<!-- Image placeholder: gesture car wiring and camera direction -->

**Note:** Raise the wheels to check commands first, then test at low speed on the floor. Camera position changes as the car moves, so leaving the gesture view should stop the car immediately.

## Software Setup

1. Open [MakeCode](https://makecode.microbit.org/) and create an “AI Gesture Command Car” project.
2. Add `planetX-AI` and `cutebot` through **Extensions**.
3. Save four distinct gestures on the device as “Forward,” “Left,” “Right,” and “Stop.” Names in the program must exactly match the saved names.

<!-- Image placeholder: learning, naming, and saving four gestures -->

## Using the Blocks

### 1. Check for a Learned Gesture

Initialize the camera and switch to **Gesture Recognition**. Each loop, **Capture a Frame from AI Lens Pro**, then use **Image Contains Learned Gesture** to check for a valid result.

### 2. Match a Gesture Name

Use **Image Contains Gesture [Name]** to match a saved name. **Get Gesture Name in Image** can help diagnose mismatches. A gesture ID is the learned gesture's identifier, not a finger count.

<!-- Image placeholder: learned gesture, name matching, and wheel speed blocks -->

## Example Program: Match Gestures to Driving Actions

### How It Works

Create **Enabled**. A enables gesture control; B disables it and stops the car. In the loop, check Stop, Forward, Left, and Right in order. Unknown or missing gestures always stop the car.

### Speed Settings

| Gesture name | Left wheel | Right wheel | Action |
| --- | ---: | ---: | --- |
| Forward | 20% | 20% | Go straight |
| Left | 0% | 20% | Turn left |
| Right | 20% | 0% | Turn right |
| Stop, unknown, or no gesture | 0% | 0% | Stop |

### Build the Program

The following text describes the block logic:

```text
On start
    Initialize AI Lens Pro
    Switch to Gesture Recognition
    Set Enabled = 0
    Stop both wheels
On button A pressed
    Set Enabled = 1
On button B pressed
    Set Enabled = 0
    Stop both wheels

Forever
    Capture a frame from AI Lens Pro
    If Enabled = 0 or image does not contain learned gesture
        Stop both wheels
    Else if image contains gesture "Stop"
        Stop both wheels
    Else if image contains gesture "Forward"
        Set both wheel speeds to 20%
    Else if image contains gesture "Left"
        Set left wheel to 0%, right wheel to 20%
    Else if image contains gesture "Right"
        Set left wheel to 20%, right wheel to 0%
    Else
        Stop both wheels
    Pause 100 ms
```

<!-- Image placeholder: complete gesture command car MakeCode blocks -->
<!-- Program link placeholder: gesture command car MakeCode share link -->

**Program Notes:** A single if/else-if chain executes one action per loop. If gestures are easily confused, require three consecutive Forward or turn results before moving. Stop and missing-gesture conditions should still stop immediately.

## Download the Program

1. Connect micro:bit with a USB data cable and download the program.
2. Check that the camera is powered on and gesture samples are saved, then start the car.
3. Press A to enable control and test all four gestures. Press B to disable it.

## Demonstration

The car moves forward or turns according to learned gestures. A Stop gesture, removing the hand, or pressing B stops the car.

<!-- Video placeholder: four gesture commands and stopping on gesture loss -->

## Learning Connections

Complete the [Traffic Card Command Car](./card-recognition.md) first.

Reuse its wheel-speed table and replace cards with learned gestures. Apply the sampling methods from the classification lesson and keep the stop response for unknown input.

Next lesson: [Face-Tracking Pan-Tilt Camera](./face-detection.md).

## Questions and Extensions

1. Why should the four gestures look clearly different?
2. Might a different hand or palm orientation require more samples?
3. How does repeated confirmation affect control delay?
4. How could each turn command execute for only a short interval?
