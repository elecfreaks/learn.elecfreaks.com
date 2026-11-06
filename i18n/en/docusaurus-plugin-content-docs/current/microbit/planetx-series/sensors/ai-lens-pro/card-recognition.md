---
sidebar_position: 15
sidebar_label: Card Recognition
---

# Case Study: AI Traffic Card Command Car

Let a car read traffic cards and follow their instructions

## Introduction

Can a car respond when you show the camera Forward, Left, Right, or Stop cards? Use AI Lens Pro to recognize the supplied traffic sign cards, then control the Cutebot wheel speeds with conditions.

Show one card at a time. The car continuously follows the currently visible card, and stops if the card leaves the frame or is not recognized.

<!-- Image placeholder: completed traffic card command car -->

## Learning Objectives

1. Identify the different condition blocks for number, letter, traffic sign, and object cards.
2. Map traffic sign cards to actions.
3. Set instruction priorities through conditional branches.
4. Observe how distance, angle, and occlusion affect recognition.

## Materials

| Item | Quantity | Image |
| --- | --- | --- |
| AI Lens Pro | 1 | <!-- Image placeholder: AI Lens Pro --> |
| Cutebot robot car with micro:bit | 1 | <!-- Image placeholder: Cutebot --> |
| IIC cable and camera mount | 1 set | <!-- Image placeholder: cable and mount --> |
| Supplied traffic sign cards | 1 set | <!-- Image placeholder: forward, left, right, stop cards --> |

## Hardware Connection

1. Turn off the power, install micro:bit, and connect AI Lens Pro to Cutebot's **IIC port**.
2. Mount the camera facing forward so a held card can face it directly.
3. Power on the camera and wait for its main menu before starting the car program.

<!-- Image placeholder: traffic card car wiring -->

**Note:** Raise the wheels to check actions first, then test slowly on an open floor. “Left” means the car's own left.

## Software Setup

1. Open [MakeCode](https://makecode.microbit.org/) and create an “AI Traffic Card Command Car” project.
2. Add `planetX-AI` and `cutebot` through **Extensions**.
3. Find the traffic sign conditions in Card Recognition; do not confuse them with general Object Recognition.

## Using the Blocks

### 1. Refresh Card Results

Initialize the camera and switch to **Card Recognition**. Each loop, **Capture a Frame from AI Lens Pro** before checking cards.

### 2. Check Traffic Signs

Use **Image Contains Traffic Sign Card Forward/Left/Right/Stop**. **Get Total Number of Cards in Image** reports the current frame's count, not the cumulative number of cards that have passed the camera.

<!-- Image placeholder: traffic sign conditions and card count blocks -->

## Example Program: Follow the Card

### How It Works

Check Stop first, followed by Forward, Left, and Right. Stop when nothing matches. Execute only one branch per frame to avoid repeatedly overwriting actions when several cards appear.

### Speed Settings

| Card | Left wheel | Right wheel | Action |
| --- | ---: | ---: | --- |
| Stop | 0% | 0% | Stop |
| Forward | 20% | 20% | Go straight |
| Left | 0% | 20% | Turn left |
| Right | 20% | 0% | Turn right |
| Other or unrecognized | 0% | 0% | Stop |

### Build the Program

The following text describes the block logic:

```text
On start
    Initialize AI Lens Pro
    Switch to Card Recognition
    Stop both wheels

Forever
    Capture a frame from AI Lens Pro
    If image contains Stop traffic card
        Stop both wheels
    Else if image contains Forward traffic card
        Set both wheel speeds to 20%
    Else if image contains Left traffic card
        Set left wheel to 0%, right wheel to 20%
    Else if image contains Right traffic card
        Set left wheel to 20%, right wheel to 0%
    Else
        Stop both wheels
    Pause 100 ms
```

<!-- Image placeholder: complete traffic card command car MakeCode blocks -->
<!-- Program link placeholder: traffic card command car MakeCode share link -->

**Program Notes:** This program uses continuous instructions. Turn amount depends on display duration, speed, and floor conditions; it is not an exact 90° turn. For one action per card, add an Executed state and require removing the card before enabling another action.

## Download the Program

1. Connect micro:bit to the computer with a USB data cable and download from MakeCode.
2. Power on the camera before running the car. Show each of the four cards.
3. Remove the card and confirm that the car stops. Compare recognition at different presentation angles.

## Demonstration

The car moves forward or turns according to the traffic card. A Stop card or removing the card stops the car.

<!-- Video placeholder: card commands and stopping after card removal -->

## Learning Connections

Complete the [Rhythm Flasher](./rhythm-detection.md) first.

Replace “recognition result → pattern” with wheel movement. Verify forward, turn, and stop actions, then keep the wheel-speed settings for gesture control in the next lesson.

Next lesson: [Gesture Command Car](./gesture-recognition.md).

## Questions and Extensions

1. Why should Stop have the highest priority?
2. How would you handle conflicting cards shown together?
3. How could number cards select different driving speeds?
4. Can you store instructions in a list, then execute the entire route after a button press?
