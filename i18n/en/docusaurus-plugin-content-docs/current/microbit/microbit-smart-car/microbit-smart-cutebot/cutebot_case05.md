﻿# Case 05: Automatic Headlights

## Purpose

Make your Cutebot turn on its headlights automatically in the darkness.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-smart-cutebot/images/cutebot-case-05-01.png)

## Materials

1 x Cutebot Kit

## Software Platform

[MicroSoft makecode](https://makecode.microbit.org/#)

## Programming

### Step 1

Click the "Advanced" to see more choices in the MakeCode drawer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-smart-cutebot/images/cutebot-pk-1.png)

A codebase is required for  [Cutebot](https://www.elecfreaks.com/micro-bit-smart-cutebot.html) programming, click “Add Package” at the bottom of the drawer, search ` [Cutebot](https://www.elecfreaks.com/micro-bit-smart-cutebot.html)` in the dialogue box and download it.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-smart-cutebot/images/cutebot-pk-11.png)

***Note:*** If you met a tip indicating incompatibility of the codebase, you can continue with the tips or build a new project there.

### Step 2

Set go straight at full speed in `On start`.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-smart-cutebot/images/case_05_01.png)

### Step 3

Drag "If...else..." brick into `forever` brick to judge if the light level is below `10`, if yes, set the value of both RGB LEDs as `255`, (The combined light is white).

While the value is over `10`, set the value of both RGB LEDs as `0` to turn off the lights.
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-smart-cutebot/images/case_05_02.png)


### Programming

Links: [https://makecode.microbit.org/_eybE8UXKx9hm](https://makecode.microbit.org/_eybE8UXKx9hm)

You can also download it directly below:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_eybE8UXKx9hm"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>


## Result

The headlights turn on automatically  when going into the darkness and turn off after passing the darkness area.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-smart-cutebot/images/cutebot-case-05.gif)

## Exploration

How to program to make the lights turn on in different colors when going into the darkness in different time? (The value of RGB helps to set the color)

## FAQ
---

## Relevant Files
---
