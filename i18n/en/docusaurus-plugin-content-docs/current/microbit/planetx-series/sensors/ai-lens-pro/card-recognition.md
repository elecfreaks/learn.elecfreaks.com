---
sidebar_position: 15
sidebar_label: Card Recognition
---

# Case Study: AI Traffic Card Command Car

Let a car read traffic cards and follow their instructions

## Introduction

Can a car respond when you show the camera Forward, Left, Right, or Stop cards? Use AI Lens Pro to recognize the supplied traffic sign cards, then control the Nezha2 car's wheel speeds with conditions.

Show one card at a time. The car continuously follows the currently visible card, and stops if the card leaves the frame or is not recognized.

<!-- Image placeholder: completed traffic card command car -->

## Learning Objectives

1. Identify the different condition blocks for number, letter, traffic sign, and object cards.
2. Map traffic sign cards to forward movement, differential turns, and stopping with Nezha2 combined wheel blocks.
3. Set instruction priorities through conditional branches.
4. Observe how distance, angle, and occlusion affect recognition.

## Materials

| Item | Quantity | Image |
| --- | --- | --- |
| AI Lens Pro | 1 | <!-- Image placeholder: AI Lens Pro --> |
| Nezha2 two-motor car with micro:bit, controller, motors, wheels, and chassis | 1 | <!-- Image placeholder: Nezha2 two-motor car --> |
| IIC cable and camera mount | 1 set | <!-- Image placeholder: cable and mount --> |
| Supplied traffic sign cards | 1 set | <!-- Image placeholder: forward, left, right, stop cards --> |

## Hardware Connection

1. Turn off the power and install micro:bit on the Nezha2 controller. Connect AI Lens Pro to its **IIC port**, the left wheel motor to **M1**, and the right wheel motor to **M2**.
2. Mount the camera facing forward so a held card can face it directly.
3. Power on the camera and wait for its main menu before starting the car program.

<!-- Image placeholder: traffic card car wiring -->

**Note:** Raise the wheels to check actions first, then test slowly on an open floor. “Left” means the car's own left.

## Software Setup

1. Open [MakeCode](https://makecode.microbit.org/) and create an “AI Traffic Card Command Car” project.
2. Add the AI Lens Pro extension `https://github.com/elecfreaks/pxt-planetx-ai` and Nezha2 extension `https://github.com/elecfreaks/pxt-nezha2` through **Extensions**.
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

The table shows target wheel speeds. Use one Move Forward block for straight travel, one combined wheel-speed block for each turn, and Stop Movement to stop. There is no need to set the two motors separately.

| Card | Left wheel | Right wheel | Action |
| --- | ---: | ---: | --- |
| Stop | 0% | 0% | Stop |
| Forward | 20% | 20% | Go straight |
| Left | 0% | 20% | Turn left |
| Right | 20% | 0% | Turn right |
| Other or unrecognized | 0% | 0% | Stop |

### Combined Wheel Blocks

On start, set the running motors to left wheel **M1** and right wheel **M2**. Use **Move forward at 20% speed** for straight travel, the **Set left/right wheel speeds and start motors** block for turns, and **Stop movement** to stop. These blocks keep each wheel action together. Positive wheel speeds mean forward; do not manually negate the left wheel speed.

### Build the Program

The following text describes the block logic:

```text
On start
    Set running motors to left wheel M1 and right wheel M2
    Stop movement
    Initialize AI Lens Pro
    Switch to Card Recognition

Forever
    Capture a frame from AI Lens Pro
    If image contains Stop traffic card
        Stop movement
    Else if image contains Forward traffic card
        Move forward at 20% speed
    Else if image contains Left traffic card
        Set left wheel speed to 0%, right wheel speed to 20%, and start motors
    Else if image contains Right traffic card
        Set left wheel speed to 20%, right wheel speed to 0%, and start motors
    Else
        Stop movement
    Pause 100 ms
```

<!-- Image placeholder: complete traffic card command car MakeCode blocks -->
[Open the traffic card car program with combined wheel blocks](https://makecode.microbit.org/_4gcC8u3TJHXj)

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

Replace “recognition result → pattern” with wheel movement. Verify forward, turn, and stop actions, then reuse the M1 left/M2 right setup and the forward, combined wheel-speed, and stop blocks for gesture control in the next lesson.

Next lesson: [Gesture Command Car](./gesture-recognition.md).

## Questions and Extensions

1. Why should Stop have the highest priority?
2. How would you handle conflicting cards shown together?
3. How could number cards change the speed parameter in the Move Forward block?
4. Can you store instructions in a list, then execute the entire route after a button press?
