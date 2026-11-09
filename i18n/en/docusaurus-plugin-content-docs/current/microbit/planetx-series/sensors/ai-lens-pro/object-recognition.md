---
sidebar_position: 9
sidebar_label: Object Recognition
---

# Case Study: AI Desktop Object Inspector

Teach your program to respond to mice and keyboards on a desk

## Introduction

Can a camera tell us which category a desktop object belongs to? Use AI Lens Pro object recognition to detect model-supported items such as a mouse or keyboard, show a corresponding letter on micro:bit, and output the recognized name through serial.

Object recognition uses the device's existing model. Show one item at a time first, then try several together to explore the differences between category detection, object count, and the central target's name.

<!-- Image placeholder: completed desktop object inspector -->

## Learning Objectives

1. Distinguish built-in object recognition from self-learning classification.
2. Check whether a specified object is present.
3. Read the object count and central target's name.
4. Compare results across backgrounds, angles, and distances.

## Materials

| Item | Quantity | Image |
| --- | --- | --- |
| AI Lens Pro | 1 | <!-- Image placeholder: AI Lens Pro --> |
| micro:bit and compatible breakout board with IIC port | 1 set | <!-- Image placeholder: controller and board --> |
| IIC cable and USB data cable | 1 each | <!-- Image placeholder: cables --> |
| Mouse, keyboard, and other supported objects | 1 each | <!-- Image placeholder: test objects --> |
| Stand and plain desk mat | 1 set | <!-- Image placeholder: observation station --> |

## Hardware Connection

1. Turn off the power and insert micro:bit into the breakout board.
2. Connect AI Lens Pro to the board's **IIC port** and mount the camera facing the display area on the desk.
3. Connect micro:bit to the computer with a USB data cable to view serial output.
4. Power on the camera and wait for its main menu before starting the controller program.

<!-- Image placeholder: wiring and camera view -->

## Software Setup

This project uses **Microsoft MakeCode** for block-based programming.

1. Open [MakeCode](https://makecode.microbit.org/) and create a project named “AI Desktop Object Inspector.”
2. In **Extensions**, search for `planetX-AI` and add the AI Lens Pro extension.
3. In the toolbox, find the **AI Lens Pro** Basic Settings and object recognition blocks, and the micro:bit LED display and serial blocks.
4. After downloading and connecting the device, open MakeCode's device data viewer in a browser that supports WebUSB.

## Using the Blocks

### 1. Check Supported Objects

Initialize the camera and switch to **Object Recognition**. Capture a frame each loop, then use **Image Contains Mouse/Keyboard/Recognizable Object**. Supported categories come from the current block menu; entering an arbitrary name does not add a category to the model.

### 2. Read the Name and Count

**Get Total Number of Recognized Objects** returns the count in the current frame. **Get Object Name in Image** returns the central target's name. A mouse being present does not mean that the central target must be the mouse.

<!-- Image placeholder: category, count, and name blocks -->

## Example Program: Display an Object Category

### How It Works

Read the count each frame, then show a prompt in the priority order mouse, keyboard, other objects. Output the name and count through serial so you can compare them with the camera view.

### Display Settings

| Result | LED prompt | Serial output |
| --- | --- | --- |
| Mouse present | M | Central target's name and current count |
| Otherwise, keyboard present | K | Central target's name and current count |
| Otherwise, another supported object present | O | Central target's name and current count |
| No object detected | Clear screen | Count 0 and a not-detected message |

### Build the Program

The following text describes the block logic:

```text
On start
    Initialize AI Lens Pro
    Switch to Object Recognition

Forever
    Capture a frame from AI Lens Pro
    Set Count = total recognized objects
    Serial write value "count" = Count
    If image contains a recognizable object
        Serial write central object's name
        If image contains mouse
            Show letter M
        Else if image contains keyboard
            Show letter K
        Else
            Show letter O
    Else
        Clear screen
        Serial write "Not detected"
    Pause 200 ms
```

<!-- Image placeholder: complete desktop object inspector MakeCode blocks -->
### Example Program

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_auEd2fihkXwk"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

[Open the Desktop Object Inspector MakeCode blocks](https://makecode.microbit.org/_auEd2fihkXwk)

**Program Notes:** The LED category follows the condition priority, while the serial name belongs to the central target. They may differ when several objects appear together. A frame's object count is not a cumulative count of items passing through the area.

## Download the Program

1. Connect micro:bit with a USB data cable and download the program.
2. Power on the camera, start the controller, and open the device data viewer.
3. Show a mouse and keyboard separately, then together. Compare the LED prompt, name, and count.

## Demonstration

A mouse produces M, a keyboard produces K, and other supported objects produce O. Serial output shows the central target's name and count. Remove the objects to clear the screen.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/ai-lens-pro/ai-lens-pro-objectrecognition-01.gif)

<!-- Video placeholder: single-object and multiple-object comparisons -->

## Learning Connections

Complete the [Expression Mirror](./facial-expression-recognition.md) first.

Reuse its conditional branches and add name and count observations. Record any models the built-in model cannot recognize for the later self-learning lesson.

Next lesson: [Text Command Display](./optical-character-recognition.md).

## Questions and Extensions

1. Why can the model not automatically recognize every desktop item?
2. Are the count and category stable when half an object is hidden?
3. How could self-learning add a custom object category?
4. What state checks would you need to count objects passing through the display area?
