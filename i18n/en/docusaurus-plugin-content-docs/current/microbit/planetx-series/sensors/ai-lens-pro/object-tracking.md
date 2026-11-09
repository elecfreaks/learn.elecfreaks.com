---
sidebar_position: 11
sidebar_label: Object Tracking
---

# Case Study: AI Target Position Indicator

Select an object and continuously indicate its horizontal position

## Introduction

Can a camera keep following an object without knowing its name? Place an object inside a selection box and press A to start tracking. micro:bit then shows a left arrow, center pattern, or right arrow according to its position.

Tracking follows changes in the selected target's position. A missing target produces a question mark. To select another object, press B to stop, then select again.

<!-- Image placeholder: completed target position indicator -->

## Learning Objectives

1. Distinguish object category recognition from selected-target tracking.
2. Set a selection box and start or stop tracking.
3. Check tracking activity and target-loss states.
4. Use target coordinates to build a position indicator.

## Materials

| Item | Quantity | Image |
| --- | --- | --- |
| AI Lens Pro | 1 | <!-- Image placeholder: AI Lens Pro --> |
| micro:bit and compatible breakout board with IIC port | 1 set | <!-- Image placeholder: controller and board --> |
| IIC cable and USB data cable | 1 each | <!-- Image placeholder: cables --> |
| Distinctive, textured toy or model | 1 | <!-- Image placeholder: target --> |
| Stand and contrasting background | 1 set | <!-- Image placeholder: test area --> |

## Hardware Connection

1. Turn off the power, install micro:bit, and connect the camera to the board's **IIC port**.
2. Mount the camera and keep its position fixed during testing.
3. Place the target at the image center with a clear contrast against the background.
4. Power on AI Lens Pro before starting the controller.

<!-- Image placeholder: wiring and target selection -->

## Software Setup

1. Open [MakeCode](https://makecode.microbit.org/) and create an “AI Target Position Indicator” project.
2. Add `planetX-AI` through **Extensions**.
3. Find the object tracking, button event, and LED display blocks.

## Using the Blocks

### 1. Select an Object and Start Tracking

Use **Start Tracking Object in Selection Box**. Explicitly set the top-left corner to **(220, 140)** and bottom-right to **(420, 340)**, creating a central 200 × 200-pixel region. This avoids depending on default box sizes that may differ between versions.

Place only the intended target in the box, then press A. Do not repeatedly start tracking in the loop, because that would keep selecting targets again.

### 2. Check Status Before Reading Position

Check **Is Object Tracking Active?**, then **Is Tracked Object Lost?**. Only read **Get X Position of Tracked Object** when the target is valid.

This example uses 640 × 480 coordinates and a center range of X = 280–360. If the actual coordinate scale differs, adjust both the box and display thresholds.

<!-- Image placeholder: tracking start, active, lost, and coordinate blocks -->

## Example Program: Indicate Left, Center, or Right

### How It Works

A selects the current object in the box; B stops tracking. The main loop only refreshes and reads results. Show a direction for a valid target, a question mark for a lost target, and a blank screen when tracking is inactive.

### Display Settings

| State or position | Display |
| --- | --- |
| Not started or stopped | Clear screen |
| Tracking active but target lost | Question mark |
| X below 280 | Left arrow |
| X from 280 to 360 | Small central square |
| X above 360 | Right arrow |

### Build the Program

The following text describes the block logic:

```text
On start
    Initialize AI Lens Pro
    Switch to Object Tracking
    Clear screen
On button A pressed
    Start tracking object in box (220, 140, 420, 340)
On button B pressed
    Stop object tracking
    Clear screen

Forever
    Capture a frame from AI Lens Pro
    If tracking is active
        If tracked object is lost
            Show custom question mark
        Else
            Set X = tracked object's X position
            If X < 280
                Show left arrow
            Else if X > 360
                Show right arrow
            Else
                Show small central square
    Else
        Clear screen
    Pause 100 ms
```

<!-- Image placeholder: complete target position indicator MakeCode blocks -->
### Example Program

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_5gWXjbhMDHr0"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

[Open the Target Position Indicator MakeCode blocks](https://makecode.microbit.org/_5gWXjbhMDHr0)

**Program Notes:** Do not automatically select another object when the target is lost. Observe whether your firmware recovers the original target. If not, press B, place the target back inside the box, and press A to select it again.

## Download the Program

1. Connect micro:bit with a USB data cable and download from MakeCode.
2. Power on the camera, start the controller, place the target in the box, and press A.
3. Move the object slowly left and right, then out of frame. Press B to stop tracking.

## Demonstration

The LED display indicates when the target is on the left, in the center, or on the right. Moving it out of frame produces a lost-target prompt; stopping tracking clears the screen.

<!-- Video placeholder: selection, horizontal tracking, loss, and reselection -->

## Learning Connections

Complete the [Text Command Display](./optical-character-recognition.md) first.

Move from asking “What is it?” to “Where is it?” Build a horizontal position indicator and record the center range. Later, transfer this coordinate-error logic to the face-tracking mount and ball pickup car.

Next lesson: [Model Classification Assistant](./self-learning-classification.md).

## Questions and Extensions

1. Why should the selection box contain only one target where possible?
2. What happens when similar objects cross paths?
3. How could the position indicator become a motor-driven camera mount?
4. Could changes in target width and height indicate whether it is moving nearer or farther away?
