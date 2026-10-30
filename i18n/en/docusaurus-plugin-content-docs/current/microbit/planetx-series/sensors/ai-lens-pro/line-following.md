---
sidebar_position: 17
sidebar_label: Line Following
---

# Case Study: AI Vision Line-Following Robot

A robot follow a track without a remote control

## Introduction

Have you ever seen a robot follow a track without a remote control? It can look at the path ahead and adjust its direction as it moves.

In this project, we will mount **AI Lens Pro** on a **Cutebot** robot car. AI Lens Pro detects a black line on the ground and reports its lateral offset and tilt angle. Cutebot changes its left and right wheel speeds to follow the line.

You will build two programs: a beginner version that checks the line direction and an advanced version that uses both offset and angle to calculate a steering value.

<!-- Image placeholder: AI Lens Pro mounted on Cutebot on a line-following track -->

## Learning Objectives

1. Learn how AI Lens Pro detects a black line.
2. Read the line's lateral offset and tilt angle, and identify its direction.
3. Use conditions and different wheel speeds to steer Cutebot.
4. Adjust a steering value to improve line-following performance.

## Materials

| Item | Quantity | Image |
| --- | --- | --- |
| AI Lens Pro | 1 | <!-- Image placeholder: AI Lens Pro --> |
| Cutebot robot car with micro:bit | 1 | <!-- Image placeholder: Cutebot --> |
| IIC cable | 1 | <!-- Image placeholder: IIC cable --> |
| Black-line track | 1 | <!-- Image placeholder: track --> |

## Hardware Connection

1. Insert the **micro:bit** into Cutebot.
2. Mount AI Lens Pro at the front of the car. Point the camera toward the black line on the ground ahead.
3. Connect AI Lens Pro to Cutebot's **IIC port** with a suitable cable.
4. Power on the devices and select the line recognition function on AI Lens Pro (follow the interface on your device).

<!-- Image placeholder: IIC wiring diagram for AI Lens Pro and Cutebot -->

**Note:** Use a dark line on a light-colored surface. Adjust the camera position so that the line is clearly visible. Turn off the power before connecting the cable.

## Software Setup

We will use **Microsoft MakeCode** for block-based programming.

1. Open [MakeCode](https://makecode.microbit.org/) and create a **New Project**.
2. Select **Extensions** from the toolbox.
3. Search for `cutebot` and add the Cutebot extension.
4. Open **Extensions** again. Search for `planetX-AI` and add the AI Lens Pro extension.
5. Find the Cutebot and AI Lens Pro blocks in the toolbox.

<!-- Image placeholder: New Project in MakeCode -->
<!-- Image placeholder: adding the cutebot extension -->
<!-- Image placeholder: adding the planetX-AI extension -->

## Using the Blocks

### 1. Read the Line Offset and Angle

Use this block to read the detected line's **lateral offset** or **tilt angle**. Choose the value you want to read from the block's menu.

<!-- Image placeholder: line offset / tilt angle reading block -->

- **Offset D:** The horizontal distance between the detected line and the center of the image. For a 640-pixel-wide image, the range is **-320 to +320 px**. Negative values mean left, positive values mean right, and 0 means centered.
- **Angle A:** The line's tilt relative to the image reference direction. Negative values mean a left tilt; positive values mean a right tilt.

For example, **D = -80 px** means that the line is about 80 pixels left of the image center.

### 2. Check the Line Direction

This block compares the tilt angle with a threshold and reports whether the line is **left, centered, or right**. It can be used in an **if / else** condition.

<!-- Image placeholder: line direction checking block -->

Set the threshold to **5°** for this project:

| Tilt angle | Result |
| --- | --- |
| A < -5° | Left |
| -5° ≤ A ≤ 5° | Centered |
| A > 5° | Right |

A smaller threshold makes steering more responsive. A larger threshold can reduce frequent changes caused by small angle variations.

## Program 1: Beginner — Follow the Line by Direction

### How It Works

AI Lens Pro checks the direction of the black line. Cutebot then adjusts its wheel speeds:

- **Left:** Slow down the left wheel and speed up the right wheel to turn left.
- **Centered:** Run both wheels at the same speed to move forward.
- **Right:** Speed up the left wheel and slow down the right wheel to turn right.

### Speed Settings

| Line direction | Left wheel | Right wheel | Action |
| --- | ---: | ---: | --- |
| Left (A < -5°) | 15% | 45% | Turn left |
| Centered (-5° ≤ A ≤ 5°) | 35% | 35% | Go straight |
| Right (A > 5°) | 45% | 15% | Turn right |

### Build the Program

<!-- Image placeholder: complete beginner MakeCode blocks -->

<!-- Hidden program logic for editors:
On start:
    Initialize AI Lens Pro; select line recognition mode.
Forever:
    If line direction is Left (threshold 5°): left wheel 15%, right wheel 45%.
    Else if line direction is Right: left wheel 45%, right wheel 15%.
    Else: left wheel 35%, right wheel 35%.
    Pause 50 ms.
-->

**Program Explanation:** The program keeps checking the direction of the line. When the line tilts left, the faster right wheel turns the car left. When the line tilts right, the faster left wheel turns it right. When the line is nearly centered, Cutebot moves straight. Try changing the threshold from **5° to 8°**. Does the car turn more or less often?

**Note:** This beginner program only checks the line angle. If a straight line appears far from the image center, the car may not correct its position in time.

## Program 2: Advanced — Follow the Line with a Steering Value

### How It Works

A direction-only program does not tell us how far the car has moved away from the line. The advanced program reads both **offset D** and **angle A**, calculates a steering value **S**, and chooses wheel speeds based on the result.

Use this starting formula:

\[
S=\frac{3D}{320}+\frac{A}{45}
\]

- **D:** Lateral offset, from -320 to +320 px.
- **A:** Line tilt angle (this example assumes a range of -90° to +90° for scaling).
- **S:** Steering value. A negative value means steer left; a positive value means steer right. A larger absolute value calls for a stronger correction.

For example, if **D = 80 px** and **A = 15°**:

\[
S=\frac{3\times80}{320}+\frac{15}{45}\approx1.08
\]

The value is positive, so Cutebot makes a small turn to the right.

### Speed Settings

The advanced program uses lower speeds to help prevent the car from leaving the track.

| Steering value S | Left wheel | Right wheel | Action |
| --- | ---: | ---: | --- |
| S ≤ -3 | 10% | 30% | Sharp left turn |
| -3 < S ≤ -1.5 | 12% | 32% | Medium left turn |
| -1.5 < S < -0.3 | 20% | 28% | Small left turn |
| -0.3 ≤ S ≤ 0.3 | 25% | 25% | Go straight |
| 0.3 < S < 1.5 | 28% | 20% | Small right turn |
| 1.5 ≤ S < 3 | 32% | 12% | Medium right turn |
| S ≥ 3 | 30% | 10% | Sharp right turn |

**Tip:** These speeds are starting values. Battery level, surface friction, and wheel condition may affect steering. Adjust them while testing.

### Build the Program

Create the variables **D**, **A**, and **S**. In a **forever** loop, read the distance and angle, calculate **S**, and select the wheel speeds using **if / else** blocks.

<!-- Image placeholder: complete advanced MakeCode blocks -->

<!-- Hidden program logic for editors:
On start:
    Initialize AI Lens Pro; select line recognition mode.
Forever:
    D = read line offset.
    A = read line angle.
    S = D * 3 / 320 + A / 45.
    If S <= -3: left 10%, right 30%.
    Else if S <= -1.5: left 12%, right 32%.
    Else if S < -0.3: left 20%, right 28%.
    Else if S <= 0.3: left 25%, right 25%.
    Else if S < 1.5: left 28%, right 20%.
    Else if S < 3: left 32%, right 12%.
    Else: left 30%, right 10%.
    Pause 50 ms.
-->

**Program Explanation:** As the line moves farther from the image center or tilts more, the absolute value of **S** increases. The car makes a stronger steering correction. As it approaches the center, the wheel speeds become closer, helping Cutebot move more smoothly. This version uses both the line's **position** and **direction**.

**Note:** Check that the angle signs match the car's steering direction. If AI Lens Pro provides a line-detected status, add a check before the speed controls and stop both wheels when no line is detected.

## Download the Program

1. Connect the micro:bit on Cutebot to your computer with a USB cable.
2. Select **Download** in MakeCode and transfer the program to the micro:bit.
3. Place Cutebot on the track, turn it on, and observe how it moves.

<!-- Image placeholder: connecting the micro:bit and downloading the program -->
<!-- Program link placeholder: beginner MakeCode share link -->
<!-- Program link placeholder: advanced MakeCode share link -->

## Demo

Place Cutebot on the black-line track and start the program. Watch how it changes direction to follow the line.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/ai-lens-pro/ai-lens-pro-linefollowing-01.gif)
<!-- Video placeholder: beginner line-following demo -->
<!-- Video placeholder: advanced line-following demo -->

## Think and Explore

1. Why does the right wheel need to move faster when the car turns left?
2. What happens when you change the beginner program's threshold from 5° to 10°?
3. Why does the advanced program use both offset and tilt angle?
4. Change the straight-line speed or steering thresholds. Which settings work best on a curved track?
