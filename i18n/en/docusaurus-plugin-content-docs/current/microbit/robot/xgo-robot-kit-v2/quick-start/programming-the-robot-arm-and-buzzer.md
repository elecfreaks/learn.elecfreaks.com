---
sidebar_position: 8
sidebar_label: Robotic Arm and Buzzer Programming
---

# Robotic Arm and Buzzer Programming

## Introduction

XGO-lite V2 has a built-in 3-DOF robotic arm and speaker. This tutorial will explain the XGO-lite V2 robot arm and speaker programming. By programming the movement of the robotic arm and the audio output from the speaker, we can achieve a variety of interesting and practical application scenarios. Robotic arm and speaker programming is a very challenging and innovative field that requires knowledge of robotic arm control, motion planning, audio processing, and more. In the following explanations, we will introduce the basic concepts and common applications of robotic arm and speaker programming. We hope that these contents can bring you inspiration and inspiration, and stimulate your enthusiasm for robot programming.

## Material Preparation

1 × micro:bit XGO Robot Kit V2

## Start Programming

This tutorial will program two devices through the graphical programming platform: MakeCode. Please open the official website link of the makecode platform: [MakeCode](https://makecode.microbit.org/#). And follow the steps below to prepare the programming environment.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite-v2-makecode-01.png)

### Programming environment preparation

1.  Click **New Project**, name the project and **Create**

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite-v2-makecode-02.png)



2. Click **Extension** and search for **XGO** in the search bar, select the XGO library, and you can load the XGO library into the makecode platform programming environment

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite-v2-makecode-03.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite-v2-makecode-03-1.png)

### Arm motion range

The end gripper of the mechanical arm moves in a plane with the X-axis as the abscissa and the Z-axis as the ordinate, and the motion trajectory is determined by the coordinates (X, Z). The figure below is a schematic diagram of the movement range and coordinates of the gripper of the robotic arm. Only when the coordinates (X, Z) are within the blue area can the robotic arm move to the coordinate position. Beyond this range, the robotic arm will not move.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite2-xz.png)

## Programming Example

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite-v2-arm-01.png)



Link: https://makecode.microbit.org/_5gjUhuK0m4TV
