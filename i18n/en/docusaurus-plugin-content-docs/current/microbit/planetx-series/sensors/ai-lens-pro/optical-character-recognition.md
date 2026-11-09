---
sidebar_position: 10
sidebar_label: Optical Character Recognition
---

# Case Study: AI Text Command Display

Read words on paper and use them to switch display patterns

## Introduction

Can a device read a paper sign saying “GO” or “STOP” and respond? Use AI Lens Pro optical character recognition (OCR) to read printed text, then show an arrow or stop pattern on micro:bit.

These are ordinary text signs for OCR testing, rather than the supplied traffic sign cards. The project focuses on reading and matching text and handling recognition failures.

<!-- Image placeholder: completed text command display -->

## Learning Objectives

1. Understand how OCR reads text from an image.
2. Check for text and retrieve its content.
3. Compare string matching with checking whether text exists.
4. Observe how font, lighting, tilt, and whitespace affect results.

## Materials

| Item | Quantity | Image |
| --- | --- | --- |
| AI Lens Pro | 1 | <!-- Image placeholder: AI Lens Pro --> |
| micro:bit and compatible breakout board with IIC port | 1 set | <!-- Image placeholder: controller and board --> |
| IIC cable and USB data cable | 1 each | <!-- Image placeholder: cables --> |
| GO and STOP signs, black text on white paper | 1 each | <!-- Image placeholder: text signs --> |
| Camera stand | 1 | <!-- Image placeholder: stand --> |

## Hardware Connection

1. Turn off the power, install micro:bit, and connect AI Lens Pro to the board's **IIC port**.
2. Fix the camera so the signs face it directly, minimizing glare and tilt.
3. Connect micro:bit to the computer with a USB data cable to view text output.
4. Power on AI Lens Pro before running the controller program.

<!-- Image placeholder: wiring and sign placement -->

## Software Setup

This project uses **Microsoft MakeCode** for block-based programming.

1. Open [MakeCode](https://makecode.microbit.org/) and create a project named “AI Text Command Display.”
2. In **Extensions**, search for `planetX-AI` and add the AI Lens Pro extension.
3. In the toolbox, find the **AI Lens Pro** Basic Settings and OCR blocks, and the micro:bit text comparison, serial, and LED pattern blocks.
4. After downloading and connecting the device, open MakeCode's device data viewer to observe the raw OCR text.

## Using the Blocks

### 1. Check Whether Text Was Recognized

Initialize the camera and switch to **OCR**. Each loop, **Capture a Frame from AI Lens Pro**, then use **Image Contains Text** to check for a valid result.

### 2. Read and Match Content

Use **Get Recognized Text** to store the result in **Text**, then compare it with `GO` and `STOP`. Alternatively, use **Recognized Text Equals [Text]**. Case, spaces, and line breaks can affect exact matching.

When no text is detected, do not treat a failure message as a command. Inspect the raw serial output before deciding whether to trim whitespace or normalize case.

<!-- Image placeholder: text detection, retrieval, and string comparison -->

## Example Program: Switch Patterns with Text Commands

### How It Works

Read the text from one frame, output it through serial, and compare the complete result. `GO` shows a forward arrow, `STOP` shows a square outline, other text shows a question mark, and no text clears the screen.

### Display Settings

| OCR result | LED display |
| --- | --- |
| GO | Forward arrow |
| STOP | Square outline |
| Other valid text | Custom question mark |
| No text recognized | Clear screen |

### Build the Program

The following text describes the block logic:

```text
On start
    Initialize AI Lens Pro
    Switch to OCR

Forever
    Capture a frame from AI Lens Pro
    If image contains text
        Set Text = recognized text
        Serial write Text
        If Text = "STOP"
            Show square outline
        Else if Text = "GO"
            Show forward arrow
        Else
            Show custom question mark
    Else
        Set Text = empty string
        Clear screen
    Pause 300 ms
```

<!-- Image placeholder: complete text command display MakeCode blocks -->
### Example Program

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_8igMc7fRp1Um"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

[Open the Text Command Display MakeCode blocks](https://makecode.microbit.org/_8igMc7fRp1Um)

**Program Notes:** Show one sign at a time with a single line of clear text. Verify the workflow with short English commands first, then try other characters supported by the installed model. Detecting text does not guarantee that it was read correctly; compare the output with the original.

## Download the Program

1. Connect micro:bit with a USB data cable and download the program.
2. Power on the camera, start the controller, and open the device data viewer.
3. Show GO, STOP, and other text. Compare the serial output and patterns, then remove the sign.

## Demonstration

Recognizing GO or STOP displays the corresponding pattern. Unfamiliar text displays a question mark, and removing the sign clears the screen.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/ai-lens-pro/ai-lens-pro-opticalcharacterrecognition-01.gif)

<!-- Video placeholder: raw OCR text and corresponding patterns -->

## Learning Connections

Complete the [Desktop Object Inspector](./object-recognition.md) first.

Compare the previous lesson's category name with the raw text read here. Keep the GO and STOP signs; later, you can replace display patterns with car start and stop actions.

Next lesson: [Target Position Indicator](./object-tracking.md).

## Questions and Extensions

1. Why might text be recognized without triggering its pattern?
2. What changes when a sign is tilted, made smaller, or printed in another font?
3. How could you handle surrounding spaces and differences in case?
4. Can you compare text commands with decoded QR or barcode content as two input methods?
