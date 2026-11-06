---
sidebar_position: 18
sidebar_label: Color Recognition
---

# Case Study: AI Color Sorting Station

Recognize colors and automatically move balls into matching bins

## Introduction

How does a sorting machine separate products by color? Mount AI Lens Pro on a model sorting station, identify a red or blue ball at the loading position, and control motors to turn, release the ball, and return.

This project uses **Color Recognition** to identify the ball's surface color. Load only one ball at a time and let it cover the sampling region at the image center. Wait until sorting finishes before loading the next ball.

<!-- Image placeholder: completed station with loading point and red/blue bins -->

## Learning Objectives

1. Distinguish standard color recognition from learned color recognition.
2. Refresh images and check for red and blue.
3. Use fixed-angle motor movements to sort objects.
4. Use task states to prevent repeated commands during an action.

## Materials

| Item | Quantity | Image |
| --- | --- | --- |
| AI Lens Pro | 1 | <!-- Image placeholder: AI Lens Pro --> |
| Nezha Pro breakout box with micro:bit | 1 | <!-- Image placeholder: Nezha Pro --> |
| PlanetX Smart Brick Motor | 2 | <!-- Image placeholder: smart motors --> |
| IIC and motor cables | As required | <!-- Image placeholder: cables --> |
| Sorting mechanism with red and blue bins | 1 set | <!-- Image placeholder: sorting structure --> |
| Red and blue balls | Several of each | <!-- Image placeholder: balls --> |

## Hardware Connection

1. Turn off the power and insert micro:bit into the Nezha Pro breakout box.
2. Connect AI Lens Pro to the **IIC port**, with the image center aimed at the loading position.
3. Connect the release motor to **M1** and the left/right sorting motor to **M2**.
4. Place the bins under the corresponding release positions. Adjust the gate so one ball can rest steadily at the recognition position.
5. Power on AI Lens Pro and wait for its main menu before starting micro:bit.

<!-- Image placeholder: IIC, M1, M2 wiring and mechanism -->

**Note:** Test motor directions and travel without a ball first. Keep the background and bins out of the sampling region to avoid identifying their colors instead of the ball's.

## Software Setup

Use **Microsoft MakeCode** for graphical programming.

1. Open [MakeCode](https://makecode.microbit.org/) and create an “AI Color Sorting Station” project.
2. Search for and add `planetX-AI` through **Extensions**.
3. Add the Nezha Pro extension by searching for `nezha pro`. The reference program uses `pxt-nezha2`.
4. Find AI Lens Pro Basic Settings and Color Recognition, and the Nezha Pro motor blocks.

<!-- Image placeholder: adding planetX-AI and Nezha Pro extensions -->

## Using the Blocks

### 1. Select a Color Recognition Mode

Use **Initialize AI Lens Pro**, then **Switch to Color Recognition**. Select **Standard Color Recognition** for this project; red and blue do not need learning first. For custom colors, switch to learned color recognition and learn them in advance.

### 2. Refresh and Check Color

Each detection cycle, **Capture a Frame from AI Lens Pro**, then check red or blue with **Image Contains Color**. In standard mode, the ball should cover the central sampling region.

### 3. Move Motors by Angle

Nezha Pro motor blocks specify a port, speed, direction, and angle. M2 selects the sorting direction, M1 releases the ball, then reverse movements return the mechanism to its starting position.

<!-- Image placeholder: color conditions and fixed-angle motor blocks -->

## Example Program: Recognize a Color and Complete One Sort

### How It Works

Create **Task Started** and **Target Color**. Detect color while idle. Lock the task once red or blue is recognized, finish the entire motion sequence, and return to idle.

### Action Settings

| Result | M2 sorting movement | M1 release movement | Return movement |
| --- | --- | --- | --- |
| Red | Clockwise 140° | Clockwise 60° | M1 counterclockwise 60°, M2 counterclockwise 140° |
| Blue | Counterclockwise 140° | Clockwise 60° | M1 counterclockwise 60°, M2 clockwise 140° |
| Other color or no ball | Stay in position | Do not release | Wait for the next detection |

These angles come from the reference program, with all motors at 10% speed. Adjust angles for your transmission ratio, mounting direction, and bin positions.

### Build the Program

Open the existing [color sorting station MakeCode reference program](https://makecode.microbit.org/_ewM6y56YCb0v). On start it also turns M1 clockwise by 40°, waits one second, and resets the relative angles of M1 and M2. Check that this initial movement suits your mechanism.

After switching to Color Recognition in the reference program, explicitly add the block selecting Standard Color Recognition. Use the following logic to understand and build the program:

```text
On start
    Initialize AI Lens Pro
    Switch to Color Recognition
    Select Standard Color Recognition
    Complete initial positioning for the mechanism
    Set Task Started = 0

Forever
    If Task Started = 0
        Capture a frame from AI Lens Pro
        If image color is red
            Set Target Color = Red, Task Started = 1
        Else if image color is blue
            Set Target Color = Blue, Task Started = 1

    If Task Started = 1
        Move M2 toward the bin selected by Target Color
        Wait for M2 to arrive
        Turn M1 clockwise 60°; wait for arrival and pause 1000 ms
        Turn M1 counterclockwise 60°; wait for arrival
        Turn M2 back 140°; wait for arrival
        Pause 500 ms
        Set Task Started = 0
    Pause 100 ms
```

<!-- Image placeholder: complete color sorting station MakeCode blocks -->

**Program Notes:** Pause color checks during a task so the moving mechanism does not trigger another task. Confirm each fixed-angle movement has finished before starting the next one. If using multiple forever loops, coordinate recognition and action with the task variable.

## Download the Program

1. Connect micro:bit with a USB data cable and download from MakeCode.
2. Power on AI Lens Pro before the controller program and check the mechanism without a ball.
3. Load one red ball. After sorting and returning, test a blue ball.

## Demonstration

Red balls go to the red bin and blue balls to the blue bin. The mechanism returns to the loading position after release. Other colors do not trigger sorting.

<!-- Video placeholder: continuous red/blue sorting and return -->

## Learning Connections

Complete the [Face-Tracking Pan-Tilt Camera](./face-detection.md) first.

Apply the Raised-Hand Counter's once-per-action structure to lock a sorting task. Keep release, return, and idle states for the later ball gripper's opening, closing, and confirmation workflow.

Next lesson: [Vision Line-Following Robot](./line-following.md).

## Questions and Extensions

1. Why lock a sorting task instead of changing direction whenever the current color changes?
2. How should you adjust the sampling region and background if the background is also red?
3. Require three consecutive detections of the same color before sorting. Compare accidental triggers.
4. How could you add a green bin and count the balls sorted by color?
