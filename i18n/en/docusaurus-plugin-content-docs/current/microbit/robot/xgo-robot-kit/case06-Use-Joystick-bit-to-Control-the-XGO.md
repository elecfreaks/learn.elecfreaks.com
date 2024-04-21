---
sidebar_position: 13
sidebar_label: Case 06 - Use Joystick:bit to Control the XGO
---

# Case 06 -Use Joystick:bit to Control the XGO

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/robot/xgo-robot-kit/images/xgo-6-1.png)

## Purpose

Hello, in the first few lessons, we basically programmed the program first and then controlled the XGO movement, so we cannot control the XGO in real time. Then, in this lesson, we will realize the real-time control of the XGO through the remote control. Therefore, in this lesson, we will Implement [Joystick:bit](https://shop.elecfreaks.com/products/elecfreaks-micro-bit-joystick-bit-v2-kit?_pos=2&_sid=6d5690385&_ss=r) to control XGO to make actions. For related documents of joystick:bit, please refer to: [Joystick:bit](https://shop.elecfreaks.com/products/elecfreaks-micro-bit-joystick-bit-v2-kit?_pos=2&_sid=6d5690385&_ss=r).

## Materials

1 × [micro:bit XGO Robot Kit](https://www.elecfreaks.com/micro-bit-xgo-robot-kit.html)

1 × [Joystick:bit](https://shop.elecfreaks.com/products/elecfreaks-micro-bit-joystick-bit-v2-kit?_pos=2&_sid=6d5690385&_ss=r)



## Working principle

We use a data cable (USB cable) to connect the computer with the micro:bit

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/robot/xgo-robot-kit/images/microbit-xgo-robot-kit-22.png)



## Software Platform

[Makecode](https://makecode.microbit.org/#)

## MakeCode programming

---

### Step 1

Click Advanced in MakeCode to see more options.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/robot/xgo-robot-kit/images/microbit-xgo-robot-kit-10.png)

For programming, we need to add a package: click "Extensions" at the bottom of the MakeCode drawer, and search for "XGO" in the dialog to download.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/robot/xgo-robot-kit/images/microbit-xgo-robot-kit-11.png)

***Note:*** If you encounter a prompt that some codebases will be removed due to incompatibility, you can follow the prompt to continue or create a new project in the menu.

## Code

#### samples:

###### Program the Joystick:bit

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/robot/xgo-robot-kit/images/case06-01.png)

###### Program XGO

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/robot/xgo-robot-kit/images/case06-02.png)



Link: [Joystick program](https://makecode.microbit.org/_gPjJh9HEUYUm)

Or you can download it directly:

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

Link: [XGO Program](https://makecode.microbit.org/_LhKY78KcAFHa)

Or you can download it directly:

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

If XGO doesn't walk, check the power status of the XGO and the Joystick:bit.

## Exploration

Can we control the XGO with the C/D/E/F buttons on the Joysitck:bit?
