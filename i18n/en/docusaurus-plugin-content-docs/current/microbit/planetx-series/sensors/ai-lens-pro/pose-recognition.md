---
sidebar_position: 13
sidebar_label: Pose Recognition
---

# Case Study: AI Raised-Hand Counter

Recognize raising and lowering a hand, and count completed actions

## Introduction

How can a device record one complete hand-raising action during a classroom activity? Use AI Lens Pro to recognize a human pose and count once when it changes from not raised to raised. Holding a hand up does not keep increasing the count.

Lowering the arm enables the next count. This helps distinguish a continuous state from an action event.

<!-- Image placeholder: completed raised-hand counter -->

## Learning Objectives

1. Detect human poses and check for a raised hand.
2. Use state variables to identify a change in action.
3. Confirm results across consecutive frames to reduce unstable counts.
4. Handle leaving the frame and resetting the counter.

## Materials

| Item | Quantity | Image |
| --- | --- | --- |
| AI Lens Pro | 1 | <!-- Image placeholder: AI Lens Pro --> |
| micro:bit and compatible breakout board with IIC port | 1 set | <!-- Image placeholder: controller and board --> |
| IIC cable and USB data cable | 1 each | <!-- Image placeholder: cables --> |
| Camera stand and activity space | 1 set | <!-- Image placeholder: activity area --> |

## Hardware Connection

1. Turn off the power, install micro:bit, and connect AI Lens Pro to the board's **IIC port**.
2. Mount the camera so the participant's head, torso, and arms are fully visible.
3. Mark a standing position on the floor. Test with one person first.
4. Power on the camera before starting the controller program.

<!-- Image placeholder: wiring and full-body framing -->

## Software Setup

This project uses **Microsoft MakeCode** for block-based programming.

1. Open [MakeCode](https://makecode.microbit.org/) and create a project named “AI Raised-Hand Counter.”
2. In **Extensions**, search for `planetX-AI` and add the AI Lens Pro extension.
3. In the toolbox, find the **AI Lens Pro** Basic Settings and pose recognition blocks, and the micro:bit number display and variable blocks.
4. Check the raised-hand options supported by your firmware.

## Using the Blocks

### 1. Detect a Person and a Raised Hand

Initialize the camera and switch to **Pose Recognition**. Capture a frame each loop. Check **Image Contains Human Pose** first, then **Human Pose in Image Is Hand Raised**.

### 2. Read Pose Information

Read the pose name, position, or keypoint coordinates to help observation. Queries select the central person by default when several people are present. A learned pose ID identifies a category, not a persistent personal identity.

<!-- Image placeholder: human detection, raised-hand condition, and pose data -->

## Example Program: Count Each Raise Once

### How It Works

Create **Count**, **Can Count**, **Raised Frames**, and **Lowered Frames**. Three consecutive not-raised frames enable counting. Three consecutive raised frames add one and lock the action until lowering is confirmed again.

### State Settings

| Input state | Response |
| --- | --- |
| Person present and not raised for three frames | Enable next count |
| Raised for three frames while counting is enabled | Add one and lock the action |
| Hand remains raised | Keep count unchanged |
| No human pose detected | Clear frame counters and require lowering again |

### Build the Program

The following text describes the block logic:

```text
On start
    Initialize AI Lens Pro
    Switch to Pose Recognition
    Set Count = 0, Can Count = 0
    Set Raised Frames = 0, Lowered Frames = 0
    Show number 0
On button A pressed
    Set Count = 0, Can Count = 0
    Set Raised Frames = 0, Lowered Frames = 0
    Show number 0

Forever
    Capture a frame from AI Lens Pro
    If image contains human pose
        If human pose is hand raised
            Increase Raised Frames by 1; set Lowered Frames = 0
            If Raised Frames ≥ 3 and Can Count = 1
                Increase Count by 1; set Can Count = 0
                Show Count
        Else
            Increase Lowered Frames by 1; set Raised Frames = 0
            If Lowered Frames ≥ 3
                Set Can Count = 1
    Else
        Set Raised Frames = 0, Lowered Frames = 0, Can Count = 0
    Pause 100 ms
```

<!-- Image placeholder: complete raised-hand counter MakeCode blocks -->
### Example Program

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_XL6WXebcYeEM"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

[Open the Raised-Hand Counter MakeCode blocks](https://makecode.microbit.org/_XL6WXebcYeEM)

**Program Notes:** “Not raised” depends on the current classification. Occlusion and classification errors may still affect counting, so test with one person in a fixed position. Scrolling larger numbers takes time; alternatively, display the total only when B is pressed or use an external display.

## Download the Program

1. Connect micro:bit with a USB data cable and download.
2. Power on the camera and start the controller. Have the participant lower their arms first.
3. Raise and lower a hand repeatedly and check the count. Press A to reset.

## Demonstration

Each completed lower-then-raise action adds one. Holding a hand up does not add more counts. After leaving the frame, the participant must confirm the lowered state again.

<!-- Video placeholder: counting, holding the pose, and resetting -->

## Learning Connections

Complete the [Model Classification Assistant](./self-learning-classification.md) first.

Extend recognition displays into action-event recording. Keep the consecutive-confirmation and once-per-action structures for sorting tasks and pickup position confirmation later.

Next lesson: [Rhythm Flasher](./rhythm-detection.md).

## Questions and Extensions

1. Why would adding one whenever “hand raised” is true count one raise many times?
2. Will quick movements still register if confirmation changes from three frames to five?
3. How could relative shoulder and wrist keypoint positions help detect a raised hand?
4. Can you create a challenge requiring a specified number of actions?
