---
sidebar_position: 17
sidebar_label: Face Detection
---

# Case Study: AI Face-Tracking Pan-Tilt Camera

Keep a face near the center of the image by moving the camera

## Introduction

How would a video call change if the camera could turn to follow you? Use AI Lens Pro to detect a face and read its center coordinates, then use two motors to adjust the mount's horizontal and vertical directions.

When the face moves away from the image center, the mount turns toward it. It stops inside the center range, and both motors stop when no face is detected. This project tracks face position without learning a person's name first.

<!-- Image placeholder: completed face-tracking pan-tilt camera -->

## Learning Objectives

1. Distinguish face detection from identifying a learned face.
2. Read a face's center X and Y coordinates.
3. Control two axes with a center range and stepped speeds.
4. Define stop conditions for target loss and mechanical travel limits.

## Materials

| Item | Quantity | Image |
| --- | --- | --- |
| AI Lens Pro | 1 | <!-- Image placeholder: AI Lens Pro --> |
| Nezha Pro breakout box with micro:bit | 1 | <!-- Image placeholder: Nezha Pro --> |
| PlanetX Smart Brick Motor | 2 | <!-- Image placeholder: smart motors --> |
| Two-axis mount and base | 1 set | <!-- Image placeholder: pan-tilt mechanism --> |
| IIC and motor cables | As required | <!-- Image placeholder: cables --> |

## Hardware Connection

1. Turn off the power and insert micro:bit into the Nezha Pro breakout box.
2. Fix AI Lens Pro to the mount and connect it to the **IIC port**.
3. Connect the horizontal motor to **M1** and the vertical motor to **M2**.
4. Place the mount near the middle of its travel. Leave slack in the cables and check the usable range of each axis.
5. Power on AI Lens Pro and wait for its main menu before starting the controller program.

<!-- Image placeholder: IIC, M1, M2 wiring and axis directions -->

**Note:** Test each axis separately at low speed and check which directions correspond to positive and negative speeds. Set suitable angle limits to prevent reaching mechanical stops or winding up cables.

## Software Setup

1. Open [MakeCode](https://makecode.microbit.org/) and create an “AI Face-Tracking Pan-Tilt Camera” project.
2. Add `planetX-AI` and `nezha pro` through **Extensions**. The reference program uses the `pxt-nezha2` motor library.
3. Find face recognition, frame refresh, motor start, and motor stop blocks.

<!-- Image placeholder: face recognition and Nezha Pro motor categories -->

## Using the Blocks

### 1. Check for a Face

Each loop, **Capture a Frame from AI Lens Pro**, then check **Image Contains Face**. Read coordinates only if a face exists; otherwise stop both motors.

### 2. Read Face Center Coordinates

Use **Get X Position/Y Position of Face in Image**. With multiple faces present, queries default to the face nearest the image center, so begin with one person.

Place a face in the image center and record the returned values as **Cx** and **Cy**. For 640 × 480 coordinates, start with **Cx = 320, Cy = 240**. If your firmware returns another scale, use the measured center and adjust all thresholds accordingly.

### 3. Control Both Axes

Positive and negative speeds control direction; use speed 0 or the stop block to stop. The following settings retain the reference program's direction convention: positive M1 turns the camera left, and negative M2 tilts it upward. Reverse an axis's speed signs if your mechanism is mounted differently.

<!-- Image placeholder: face condition, coordinate, and motor speed blocks -->

## Example Program: Two-Axis Tracking with Stepped Speeds

### How It Works

Calculate horizontal error **Ex = X - Cx** and vertical error **Ey = Y - Cy**. Use higher speeds for larger errors, lower speeds near the center, and stop within the center range. Capture only one frame per loop so both axes use the same face position.

### Speed Settings

| Axis error | Motor speed | Action |
| --- | ---: | --- |
| Ex ≤ -40 | M1: 15% | Turn left faster |
| -40 < Ex ≤ -10 | M1: 5% | Turn left slowly |
| -10 < Ex < 10 | M1: 0% | Stop horizontal movement |
| 10 ≤ Ex < 40 | M1: -5% | Turn right slowly |
| Ex ≥ 40 | M1: -15% | Turn right faster |
| Ey ≤ -30 | M2: -30% | Tilt upward faster |
| -30 < Ey ≤ -10 | M2: -10% | Tilt upward slowly |
| -10 < Ey < 10 | M2: 0% | Stop vertical movement |
| 10 ≤ Ey < 30 | M2: 10% | Tilt downward slowly |
| Ey ≥ 30 | M2: 30% | Tilt downward faster |

These are initial tuning values. Your transmission may require lower speeds or different error ranges.

### Build the Program

Open the existing [face-tracking pan-tilt MakeCode reference program](https://makecode.microbit.org/_167gxtLXVfkv). It uses thresholds centered near (160, 120) and has no stop branch for missing faces. Check your device's coordinate scale and add stop and travel-limit handling before use.

The following is the recommended block logic:

```text
On start
    Initialize AI Lens Pro
    Switch to Face Recognition
    Set Cx = 320, Cy = 240 (adjust after measurement)
    Stop M1 and M2

Forever
    Capture a frame from AI Lens Pro
    If image contains face
        Set Ex = face X position - Cx
        Set Ey = face Y position - Cy
        Set M1 speed according to the horizontal error table
        Set M2 speed according to the vertical error table
        If an axis has reached a limit and is commanded farther outward
            Stop that axis
    Else
        Stop M1 and M2
    Pause 50 ms
```

<!-- Image placeholder: complete blocks with face-loss stop and travel limits -->

**Program Notes:** A center range reduces repeated movement caused by small recognition fluctuations. Use motor angle feedback for limits: establish each axis's starting angle and permitted range, then allow only inward motion when an axis reaches its boundary.

## Download the Program

1. Connect micro:bit with a USB data cable and download from MakeCode.
2. Power on the camera, start the mount program, and place one face centrally to verify Cx and Cy.
3. Move slowly left, right, up, and down. Leave the frame and confirm that both axes stop.

## Demonstration

The mount adjusts horizontally and vertically to bring a moving face back near the center. The relevant motors stop when the face disappears or an axis reaches its travel limit.

<!-- Video placeholder: two-axis tracking, target loss, and travel limits -->

## Learning Connections

Complete the [Gesture Command Car](./gesture-recognition.md) first.

Reuse the Target Position Indicator's coordinate ranges and replace arrows with motor directions. Add the vertical axis after horizontal tracking works, building feedback-control tuning experience for aligning the car with a ball later.

Next lesson: [Color Sorting Station](./color-recognition.md).

## Questions and Extensions

1. Why can a very small center range cause repeated back-and-forth motion?
2. If the camera turns farther away from the face, should you check coordinates or motor direction?
3. Why might the tracked person change when several people appear?
4. Try making speed vary continuously with position error and compare it with stepped control.
