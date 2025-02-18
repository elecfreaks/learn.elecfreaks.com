﻿---
sidebar_position: 9
sidebar_label: Case 02 - A Light-controlled Dog
---

# Case 02 - A Light-controlled Dog

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/robot/xgo-robot-kit/images/xgo-2-1.png)

## Purpose

Hello , after the last lesson, you must have learned to control XGO to make some actions. In this lesson, we will continue to use richer functions to do interesting things. In this class, we use the light sensor that comes with the micro: bit to let the XGO move forward or lie down according to the intensity of the light on the micro :bit.

## Quick to Start

### Materials

[micro: bit XGO Robot Kit ](https://www.elecfreaks.com/micro-bit-xgo-robot-kit.html) × 1

[micro: bit](https://www.elecfreaks.com/bbc-micro-bit-board-for-coding-programming-microbit.html) × 1

### Working principle

1. The LEDs on the micro:bit motherboard can not only be used as output devices, but also as input devices. Light sensors measure the amount of light received by the device.
2. This means that the micro:bit program can react differently depending on the intensity of the light.
3. If the desired effect is not achieved, try lowering the numbers in the code to suit your brightness environment.

### Hardware Connections
---
We use a data cable (USB cable) to connect the computer with the micro:bit, I believe you are already very skilled.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/robot/xgo-robot-kit/images/microbit-xgo-robot-kit-22.png)

## MakeCode programming
---
### Step 1

Click Advanced in MakeCode to see more options.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/robot/xgo-robot-kit/images/microbit-xgo-robot-kit-10.png)

For programming, we need to add a package: click "Extensions" at the bottom of the MakeCode drawer, search for "XGO" in the dialog to download.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/robot/xgo-robot-kit/images/microbit-xgo-robot-kit-11.png)

***Note:*** If you encounter a prompt that some codebases will be removed due to incompatibility, you can follow the prompt to continue or create a new project in the menu.

### Step 2

#### sample program

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/robot/xgo-robot-kit/images/xgo-2-2.png)

Link: [A Light-controlled Dog](https://makecode.microbit.org/_YVJe8eefmbqo)

You can also download it directly below:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_V4YJ2i9LkYoi"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

## FAQ

If XGO doesn't move, please try adjusting the light intensity.

## Exploration

How to give more commands to XGO with light intensity?
