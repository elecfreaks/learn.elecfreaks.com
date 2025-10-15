# micro:bit Arcade Pro Kit

## Product Introduction
The micro:bit Arcade Pro Kit is a color display gamepad-style expansion board designed specifically for the micro:bit V2. It includes a 240 × 320 TFT color display, 4 directional buttons, two action buttons (A and B), a reset button, a menu button, and a power switch. It is compatible with jacdac sensors and building block structures.

Featuring a compact design and comfortable grip, the micro:bit Arcade Pro Kit can be paired with the micro:bit V2 to enable offline game play on Microsoft's Arcade programming platform. It helps children create their own games and understand the principles behind games through a simple and engaging approach. Additionally, it supports custom game characters, diverse scene designs, and plot creation. With block-based programming software, anyone can easily realize interesting electronic creations and unlimited game ideas.

Beyond serving as a game programming learning tool, the micro:bit Arcade Pro Kit can also function as a remote control.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/retro-arcade/microbit-arcade-pro-kit/microbit-arcade-pro-kit.png)

## Features
- Can act as a remote control to communicate with and control robot cars
- Can serve as an expanded handheld game console for creating personalized games via block-based programming
- Can work as a jacdac-series expansion board to connect external jacdac sensors

## Basic Specifications

| Item | Specification |
|---|---|
| Product Name | micro:bit Arcade Pro |
| SKU | EF08438 |
| Product Dimensions | 140mm (L) × 82mm (W) × 21mm (H) (excluding micro:bit main board) |
| Product Weight | 102g (including battery and case) |
| Interface Type | Type-C, micro:bit, jacdac |
| Display Type | TFT LCD Display |
| Display Specification | 240 × 320 |
| Power Supply | Lithium Battery Power Supply |
| Charging Voltage | 5V |
| Charging Current | 1A |
| Maximum Operating Voltage | 4.2V |
| Rated Operating Voltage | 3.7V |
| Minimum Operating Voltage | 3.5V |
| Standby Current | 0.03A |
| jacdac Supply Voltage | 4.2V |
| Maximum Current of jacdac Interface | 1A |
| Charging Time | 65min |

## Package Contents
- Arcade Pro Kit × 1
- Type-C Cable × 1
- Lanyard × 1
- User Manual × 1

## Product Description

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/retro-arcade/microbit-arcade-pro-kit/microbit-arcade-pro-kit-01.png)

## Power Switch Operation

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/retro-arcade/microbit-arcade-pro-kit/microbit-arcade-pro-kit-02.png)

## Indicator Light Status

| Working Status | Light Status |
|---|---|
| In Operation | Green Light |
| Low Battery (20% remaining power) | Red Light |
| Auto Shutdown Due to Extremely Low Battery | Red Light Flashes for 5 Seconds, Then Auto Shutdown |
| Charging | Flashing Red Light |
| Fully Charged | Green Light |

## Quick Start
Welcome to the Retro Arcade Pro User Guide! This document only provides a simple program writing example to test if the device is in normal working condition.

For more related knowledge, please refer to: [https://arcade.makecode.com/](https://arcade.makecode.com/)

Click on the corresponding project to access the project tutorial and learn through the process of creating games.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/expansion-board/microbit-retro-arcade-se/images/microbit-retro-arcade-28.png)

## Programming Platform
Arcade Game Programming Platform URL: [https://arcade.makecode.com](https://arcade.makecode.com)

### Introduction to the Programming Page
1. Click the area marked "1" to enter a project name and create a project to start programming.
2. The area below the mark "2" contains simple tutorials provided by the platform and game works shared by the community.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/expansion-board/microbit-retro-arcade-se/images/microbit-retro-arcade-08.png)

**For beginners, the programming interface can be roughly divided into 3 key sections to understand initially:**
1. Online Simulator: Simulates and runs the program in real time according to the logic of the code.
2. Programming Block Panel: Drag programming blocks from here to write code.
3. Code Editing Area: Drag blocks from the panel and assemble them here to complete the creation of game characters, interfaces, and logic.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/expansion-board/microbit-retro-arcade-se/images/microbit-retro-arcade-09.png)

## Quick Creation
Click "New Project".

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/expansion-board/microbit-retro-arcade-se/images/microbit-retro-arcade-10.png)

Enter a project name to create a new project.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/expansion-board/microbit-retro-arcade-se/images/microbit-retro-arcade-11.png)

Create a sprite, then click the gray rectangle in the block to open the image editor.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/expansion-board/microbit-retro-arcade-se/images/microbit-retro-arcade-12.png)

You can customize the sprite image or select a preset sprite from the image library. Control the sprite's movement using the "move sprite with buttons" block.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/expansion-board/microbit-retro-arcade-se/images/microbit-retro-arcade-13.png)

Set the background color of the screen.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/expansion-board/microbit-retro-arcade-se/images/microbit-retro-arcade-14.png)

To prevent the sprite from moving outside the screen, set the sprite to stay within the screen boundaries.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/expansion-board/microbit-retro-arcade-se/images/microbit-retro-arcade-15.png)

## Program Download Tutorial
Currently, for the official Arcade platform, the micro:bit V2 (nRF52833) is still in the testing phase. Therefore, you first need to go to the platform's settings page to enable the experimental version of the hardware option.

Click the small gear icon in the upper right corner of the programming interface and select `About`.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/expansion-board/microbit-retro-arcade-se/images/microbit-retro-arcade-16.png)

In the pop-up page, select `Experiments`.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/expansion-board/microbit-retro-arcade-se/images/microbit-retro-arcade-17.png)

Ensure that "Experimental Hardware" is in the `Enabled` state (this setting only needs to be configured once).

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/expansion-board/microbit-retro-arcade-se/images/microbit-retro-arcade-18.png)

Then return to the programming homepage, click the download button in the lower left corner. In the pop-up hardware selection window, scroll to the bottom and select `micro:bit Retro Shield`.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/expansion-board/microbit-retro-arcade-se/images/microbit-retro-arcade-19.png)

Click "Download" to obtain a .hex file. Drag this file into the MICROBIT drive, and it can then run on the micro:bit V2 + micro:bit Retro Arcade.
