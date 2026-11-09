---
sidebar_position: 12
sidebar_label: Self-Learning Classification
---

# Case Study: AI Model Classification Assistant

Teach the camera two models, then test whether it can tell them apart

## Introduction

What if the built-in model does not recognize your own creations? Use AI Lens Pro self-learning to learn two visually different models as ID 1 and ID 2, then display the recognized category number on micro:bit.

Start with front-view samples, then add side views, different distances, and backgrounds. Compare classification results to explore how training data affects performance.

<!-- Image placeholder: classification assistant with two models -->

## Learning Objectives

1. Map custom categories to IDs.
2. Use buttons to learn the object at the image center.
3. Read the learned object's ID and confidence.
4. Test with samples that were not used during learning.

## Materials

| Item | Quantity | Image |
| --- | --- | --- |
| AI Lens Pro | 1 | <!-- Image placeholder: AI Lens Pro --> |
| micro:bit and compatible breakout board with IIC port | 1 set | <!-- Image placeholder: controller and board --> |
| IIC cable and USB data cable | 1 each | <!-- Image placeholder: cables --> |
| Visually distinct models | 2 types | <!-- Image placeholder: models A and B --> |
| Stand, background paper, and test sheet | 1 set | <!-- Image placeholder: learning area --> |

## Hardware Connection

1. Turn off the power, install micro:bit, and connect the camera to the board's **IIC port**.
2. Fix the camera and display platform so the object to learn is at the image center.
3. Power on AI Lens Pro before starting the controller program.
4. Present only one model at a time during learning and testing. Keep hands and other objects from hiding it.

<!-- Image placeholder: wiring and central learning region -->

## Software Setup

This project uses **Microsoft MakeCode** for block-based programming.

1. Open [MakeCode](https://makecode.microbit.org/) and create a project named “AI Model Classification Assistant.”
2. In **Extensions**, search for `planetX-AI` and add the AI Lens Pro extension.
3. In the toolbox, find the **AI Lens Pro** Basic Settings and self-learning blocks, and the micro:bit button event blocks.
4. Define **ID 1 = Model A, ID 2 = Model B**.

## Using the Blocks

### 1. Learn the Object at the Image Center

Initialize the camera and switch to **Self-Learning (Feature Learning)**. Use **Learn Object at Image Center as ID [1/2]**. When viewing the same model from another angle, keep the same ID to add samples to that category.

### 2. Check Results and Read Confidence

Capture a frame, then use **Image Contains Learned Object [0]** to check for any learned object. Here, 0 means “any.” Only read the **ID** and **Confidence** after a valid result.

`planetX-AI` v1.1.1 returns confidence on a 0–1 scale; this example starts with a threshold of **0.8**. For other versions, inspect the actual output and verify its scale before choosing a threshold.

### 3. Forget a Category

Use **Forget Learned Object [1/2]** to retrain a specific category. In this block, 0 deletes all categories, unlike its meaning in the detection block. This example does not automatically clear learned data on start.

<!-- Image placeholder: learning, detection, ID/confidence, and forgetting blocks -->

## Example Program: Learn with Buttons and Display Categories

### How It Works

A learns the current model as ID 1; B learns it as ID 2. Pause recognition during learning. In the loop, display a number only when the ID is 1 or 2 and confidence reaches the threshold. Otherwise show a question mark or clear the screen.

### Operation Settings

| Action or result | Program behavior |
| --- | --- |
| Press A | Learn central object as ID 1 |
| Press B | Learn central object as ID 2 |
| ID 1 or 2 with sufficient confidence | Display the ID |
| Insufficient confidence or another ID | Show question mark |
| No learned object detected | Clear screen |

### Build the Program

The following text describes the block logic:

```text
On start
    Initialize AI Lens Pro
    Switch to Self-Learning
    Set Learning = 0, Threshold = 0.8

On button A pressed
    If Learning = 0
        Set Learning = 1
        Learn central object as ID 1
        Pause 1000 ms
        Set Learning = 0
On button B pressed
    If Learning = 0
        Set Learning = 1
        Learn central object as ID 2
        Pause 1000 ms
        Set Learning = 0

Forever
    If Learning = 0
        Capture a frame from AI Lens Pro
        If image contains any learned object (parameter 0)
            Set ID = learned object's ID
            Set Confidence = learned object's confidence
            If (ID = 1 or ID = 2) and Confidence ≥ Threshold
                Show number ID
            Else
                Show custom question mark
        Else
            Clear screen
    Pause 200 ms
```

<!-- Image placeholder: complete model classification assistant MakeCode blocks -->
### Example Program

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_gRP0JP78f4UY"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

[Open the Model Classification Assistant MakeCode blocks](https://makecode.microbit.org/_gRP0JP78f4UY)

**Program Notes:** The 1000 ms pause is a starting point for testing, not a guaranteed learning duration. Confirm completion on the device before continuing. If necessary, increase the pause based on measurements or use a completion-status block available in your version. Confidence indicates model similarity and does not guarantee a correct category.

## Download the Program

1. Connect micro:bit with a USB data cable and download. Power on the camera before starting the controller.
2. Present model A and press A; change its angle and press A again. Repeat for model B using button B.
3. Test angles, distances, and backgrounds not used for learning. Record correct, incorrect, and unrecognized results.

## Demonstration

After learning two models, the device displays 1 or 2 for results meeting the threshold. Lower-confidence results show a question mark; no valid result clears the screen.

<!-- Video placeholder: learning two categories, testing angles, and adding samples -->

## Learning Connections

Complete the [Target Position Indicator](./object-tracking.md) first.

Choose two models the Desktop Object Inspector could not recognize. Add samples using the distances, angles, and lighting from the observation diary, then test previously unseen arrangements.

Next lesson: [Raised-Hand Counter](./pose-recognition.md).

## Questions and Extensions

1. Why might a side-view test fail after learning only the front view?
2. What might the camera learn if each category always has a different background?
3. How do incorrect and unrecognized results change when the threshold rises from 0.8 to 0.9?
4. What learning and display changes are needed for a third category?
