---
sidebar_position: 7
sidebar_label: Software Library Guide
---

# Software Library Guide

## Programming Platform
Go to "[makecode.microbit.org](https://makecode.microbit.org)" and click **New Project**.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-07.png)

## Create a New Project
Enter a project name in the pop-up window and click **Create**.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-11.png)

## Add Software Library
Click **Extensions** in the code drawer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-09.png)

Type **pu robot** in the pop-up interface and click the search icon. When the **pu robot** library appears, select it.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/robot/pu-robot/microbit-pu-robot-kit-software-library-01.png)

## Block Descriptions


| Function | Command | Parameters | Details |
|:---|:---|:---|:---|
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/robot/pu-robot/microbit-pu-robot-kit-black-01.png) | Set forward speed range (Param 1) / backward speed range (Param 2) | Param 1: Numeric (0~4) Param 2: Numeric (0~3) | Configures the maximum forward / backward speed of the robot |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/robot/pu-robot/microbit-pu-robot-kit-black-02.png) | Ultrasonic sensor reading (cm / inch) |  | Returns the distance measured by the ultrasonic sensor |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/robot/pu-robot/microbit-pu-robot-kit-black-03.png) | Body roll angle |  | Returns the roll angle of the robot body |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/robot/pu-robot/microbit-pu-robot-kit-black-04.png) | Body pitch angle |  | Returns the pitch angle of the robot body |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/robot/pu-robot/microbit-pu-robot-kit-black-05.png) | Front distance array |  | Returns an array of front obstacle distances |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/robot/pu-robot/microbit-pu-robot-kit-black-06.png) | Set ambient light (Param 1) color R: (Param 2) G: (Param 3) B: (Param 4) | Param 1: Option (1/2/3/4/all) Params 2~4: Numeric (0~255) | Sets the RGB color of the ambient lights |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/robot/pu-robot/microbit-pu-robot-kit-black-07.png) | Set left eye (Param 1) / right eye (Param 2) | Param 1: Option (On/Off) Param 2: Option (On/Off) | Turns the left and right eye LEDs on or off |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/robot/pu-robot/microbit-pu-robot-kit-black-08.png) | Set left eye brightness (Param 1) | Param 1: Numeric (0~100) | Sets the brightness level of the left eye LED |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/robot/pu-robot/microbit-pu-robot-kit-black-09.png) | Set right eye brightness (Param 1) | Param 1: Numeric (0~100) | Sets the brightness level of the right eye LED |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/robot/pu-robot/microbit-pu-robot-kit-black-10.png) | Set (Param 1) servo to (Param 2) degrees | Param 1: Option (Left Foot / Left Leg / Right Foot / Right Leg / Head Yaw / Head Pitch) Param 2: Numeric (0~180, default 90) | Rotates the selected servo to a specified angle |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/robot/pu-robot/microbit-pu-robot-kit-black-11.png) | Smoothly set (Param 1) servo angle to (Param 2) with step (Param 3) | Param 1: Option (Left Foot / Left Leg / Right Foot / Right Leg / Head Yaw / Head Pitch) Param 2: Numeric (0~180, default 90) Param 3: Numeric | Smoothly rotates the selected servo to the target angle with the given step size |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/robot/pu-robot/microbit-pu-robot-kit-black-12.png) | Perform action (Param 1) | Param 1: Option (Greet / Rest / Auto Explore / Jump / Dance / Kick) | Triggers a predefined built-in action |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/robot/pu-robot/microbit-pu-robot-kit-black-13.png) | Set PU Robot to (Param 1) | Param 1: Option (Move Forward / Move Backward / Strafe Left / Strafe Right / Turn Left / Turn Right) | Sets the robot to a continuous movement mode |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/robot/pu-robot/microbit-pu-robot-kit-black-14.png) | Set (Param 1) for (Param 2) steps at speed (Param 3) | Param 1: Option (Move Forward / Move Backward / Strafe Left / Strafe Right / Turn Left / Turn Right) Param 2: Numeric Param 3: Numeric | Moves the robot in the selected direction for a set number of steps at a specified speed |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/robot/pu-robot/microbit-pu-robot-kit-black-15.png) | Speak (Param 1) | Param 1: String | Makes the robot play a given voice message |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/robot/pu-robot/microbit-pu-robot-kit-black-16.png) | Sing (Param 1) | Param 1: String | Makes the robot play a given melody or song |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/robot/pu-robot/microbit-pu-robot-kit-black-17.png) | Stop action | None | Stops all ongoing movements and actions of the robot |
