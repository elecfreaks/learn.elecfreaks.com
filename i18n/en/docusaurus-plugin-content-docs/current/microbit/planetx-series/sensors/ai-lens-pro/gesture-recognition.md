---
sidebar_position: 16
sidebar_label: Gesture Recognition
---

# Case Study: AI Gesture Command Car

Use learned gestures to command forward movement, turns, and stopping

## Introduction

Can you command a car with your hands instead of a remote? First teach AI Lens Pro four distinct gestures named “Forward,” “Left,” “Right,” and “Stop,” then use recognition results to control a Nezha2 two-motor car.

The program stores the mapping from gestures to actions. When the camera does not recognize one of the specified gestures, the car stops and waits for a valid command.

<!-- Image placeholder: completed gesture command car -->

## Learning Objectives

1. Collect, name, and recognize custom gestures.
2. Match gesture names to Nezha2 forward, combined wheel-speed, and stop blocks.
3. Use mutually exclusive branches and stop on unrecognized input.
4. Improve gesture samples and action settings through testing.

## Materials

| Item | Quantity | Image |
| --- | --- | --- |
| AI Lens Pro | 1 | <!-- Image placeholder: AI Lens Pro --> |
| Nezha2 two-motor car with micro:bit, controller, motors, wheels, and chassis | 1 | <!-- Image placeholder: Nezha2 two-motor car --> |
| IIC cable and camera mount | 1 set | <!-- Image placeholder: cable and mount --> |
| Flat, open testing area | 1 | <!-- Image placeholder: testing area --> |

## Hardware Connection

1. Turn off the power and install micro:bit on the Nezha2 controller. Connect the left wheel motor to **M1** and the right wheel motor to **M2**.
2. Connect AI Lens Pro to the car's **IIC port**, with the camera facing the operator ahead.
3. Adjust the mount so the camera can see the participant's hand.
4. Power on the camera, open Gesture Recognition, and follow its interface to learn and save gestures.

<!-- Image placeholder: gesture car wiring and camera direction -->

**Note:** Raise the wheels to check commands first, then test at low speed on the floor. Camera position changes as the car moves, so the car should stop when the next recognition cycle confirms that the gesture has left the frame.

## Software Setup

1. Open [MakeCode](https://makecode.microbit.org/) and create an “AI Gesture Command Car” project.
2. Add the AI Lens Pro extension `https://github.com/elecfreaks/pxt-planetx-ai` and Nezha2 extension `https://github.com/elecfreaks/pxt-nezha2` through **Extensions**.
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

Keep the M1 left/M2 right setup from the card lesson. Use one Move Forward block for straight travel and one combined wheel-speed block for each turn. Use Stop Movement when B is pressed, Stop is recognized, or there is no valid instruction.

| Gesture name | Left wheel | Right wheel | Action |
| --- | ---: | ---: | --- |
| Forward | 20% | 20% | Go straight |
| Left | 0% | 20% | Turn left |
| Right | 20% | 0% | Turn right |
| Stop, unknown, or no gesture | 0% | 0% | Stop |

### Combined Wheel Blocks

On start, set the running motors to left wheel **M1** and right wheel **M2**. Use **Move forward at 20% speed** for straight travel, the **Set left/right wheel speeds and start motors** block for turns, and **Stop movement** to stop. These blocks keep each wheel action together. Positive wheel speeds mean forward; do not manually negate the left wheel speed.

### Build the Program

The following text describes the block logic:

```text
On start
    Set running motors to left wheel M1 and right wheel M2
    Initialize AI Lens Pro
    Switch to Gesture Recognition
    Set Enabled = 0
    Stop movement
On button A pressed
    Set Enabled = 1
On button B pressed
    Set Enabled = 0
    Stop movement

Forever
    Capture a frame from AI Lens Pro
    If Enabled = 0 or image does not contain learned gesture
        Stop movement
    Else if image contains gesture "Stop"
        Stop movement
    Else if image contains gesture "Forward"
        Move forward at 20% speed
    Else if image contains gesture "Left"
        Set left wheel speed to 0%, right wheel speed to 20%, and start motors
    Else if image contains gesture "Right"
        Set left wheel speed to 20%, right wheel speed to 0%, and start motors
    Else
        Stop movement
    Pause 100 ms
```

<!-- Image placeholder: complete gesture command car MakeCode blocks -->
### Example Program

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_YRDJgyTW9XLD"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

[Open the gesture car program with combined wheel blocks](https://makecode.microbit.org/_YRDJgyTW9XLD)

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

Reuse its motor-port setup and combined wheel blocks, replacing card conditions with learned-gesture conditions. Add button A to enable control and button B to disable it. Apply the sampling methods from the classification lesson and keep the stop response for unknown input.

Next lesson: [Face-Tracking Pan-Tilt Camera](./face-detection.md).

## Questions and Extensions

1. Why should the four gestures look clearly different?
2. Might a different hand or palm orientation require more samples?
3. How does repeated confirmation affect control delay?
4. How could calling Stop Movement after a differential turn limit each turn to a short interval?
