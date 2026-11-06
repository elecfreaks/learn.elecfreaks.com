---
sidebar_position: 8
sidebar_label: Facial Expression Recognition
---

# Case Study: AI Expression Mirror

Let micro:bit respond to your expression with a pattern

## Introduction

Smile at the camera and see a smile on micro:bit. Would you like to try another expression? This project uses AI Lens Pro to recognize facial expressions and displays different patterns on the micro:bit LED matrix for happy, sad, and other results.

First match expressions to patterns, then add repeated confirmation to make the display more stable.

<!-- Image placeholder: completed expression mirror -->

## Learning Objectives

1. Check whether a recognizable expression is present.
2. Use conditional branches to match expressions to LED patterns.
3. Compare immediate updates with updates after repeated confirmation.
4. Observe the effects of lighting, occlusion, and face angle.

## Materials

| Item | Quantity | Image |
| --- | --- | --- |
| AI Lens Pro | 1 | <!-- Image placeholder: AI Lens Pro --> |
| micro:bit and compatible breakout board with IIC port | 1 set | <!-- Image placeholder: controller and board --> |
| IIC cable and USB data cable | 1 each | <!-- Image placeholder: cables --> |
| Camera stand | 1 | <!-- Image placeholder: stand --> |

## Hardware Connection

1. Turn off the power and insert micro:bit into the breakout board.
2. Connect AI Lens Pro to the board's **IIC port** and mount it near face height.
3. Face the micro:bit LED matrix toward the participant and use even lighting in front of the camera.
4. Power on AI Lens Pro and wait for its main menu before starting the controller program.

<!-- Image placeholder: wiring and mounting -->

## Software Setup

1. Open [MakeCode](https://makecode.microbit.org/) and create an “AI Expression Mirror” project.
2. Add `planetX-AI` through **Extensions**.
3. Find the AI Lens Pro expression recognition blocks and the micro:bit show icon and clear screen blocks.

## Using the Blocks

### 1. Update Expression Results

Initialize AI Lens Pro and switch to **Expression Recognition** on start. In the loop, **Capture a Frame from AI Lens Pro** before checking expressions.

### 2. Check Expressions and Display Patterns

Use **Image Contains Any/Happy/Sad Expression** as conditions. Read **Get Expression Name in Image** to help check the result. With multiple people present, the name refers to the central face by default, so start with one participant.

<!-- Image placeholder: expression conditions and show icon blocks -->

## Example Program: Match Expressions to Patterns

### How It Works

Check for any recognizable expression first, then distinguish happy, sad, and other results. Clear the display when none is detected so a previous face's result does not remain on screen.

### Display Settings

| Result | micro:bit display |
| --- | --- |
| Happy | Happy face |
| Sad | Sad face |
| Other recognizable expression | Diamond |
| No recognizable expression | Clear screen |

### Build the Program

The following text describes the block logic:

```text
On start
    Initialize AI Lens Pro
    Switch to Expression Recognition
    Clear screen

Forever
    Capture a frame from AI Lens Pro
    If image contains any expression
        If image contains happy expression
            Show happy face
        Else if image contains sad expression
            Show sad face
        Else
            Show diamond
    Else
        Clear screen
    Pause 100 ms
```

<!-- Image placeholder: complete expression mirror MakeCode blocks -->
<!-- Program link placeholder: expression mirror MakeCode share link -->

**Program Notes:** Expression recognition classifies an image; it does not establish the participant's actual feelings. If results change too frequently, add Candidate, Consecutive Count, and Displayed Result variables. Update the display after the same candidate appears three times in a row. Reset the count when the candidate changes, and clear the state when no one is present.

## Download the Program

1. Connect micro:bit to the computer with a USB data cable and download from MakeCode.
2. Power on AI Lens Pro, start the controller program, and have one person face the camera.
3. Try different expressions, then leave the frame to check both the patterns and screen clearing.

## Demonstration

When the participant smiles, the LED matrix shows a happy face. A sad classification shows a sad face, and other results show a diamond. The screen clears when no one is in view.

<!-- Video placeholder: expressions and LED responses -->

## Learning Connections

Complete the [Image Observation Exhibition](./photo-album.md) first.

Use “recognition result → display pattern” as your first vision program. In the next lesson, keep the frame refresh and branching structure but change the input from expressions to desktop objects.

Next lesson: [Desktop Object Inspector](./object-recognition.md).

## Questions and Extensions

1. Why might the result change when the same person changes their angle?
2. How does confirming three times versus five times affect response speed?
3. Can you add custom patterns for more expressions?
4. How would you record recognition results under different lighting conditions?
