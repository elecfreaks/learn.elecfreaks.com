﻿# Case 10 Smart Crashproof Car

## Purpose

- Make a smart crashproof car with a Sonar:bit.

## Materials

- 1 x [Ring:bit Car kit](https://shop.elecfreaks.com/products/elecfreaks-micro-bit-ring-bit-v2-car-kit-without-micro-bit-board?_pos=4&_sid=66ba68dec&_ss=r)
- 1 x micro:bit
- 1 x [Sonar:bit](https://shop.elecfreaks.com/products/elecfreaks-octopus-sonar-bit?_pos=1&_sid=206cda736&_ss=r)


## Hardware Connection

- Connect the left servo to P1, right servo to P2 and Sonar:bit to P0 of the Ring:bit.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_10_01.png)

## Software Programming

[Microsoft makecode online coding https://makecode.microbit.org/#](https://makecode.microbit.org/#)

## Software

### Step 1
- Click "Advanced" in the drawer of MakeCode to see more choices.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-ringbit-car-v2/images/2qCyzQ7.png)

- We need to add a package for programming the kit. Click "Extensions" in the drawer and search “ringbit" in the dialogue box to download it.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-ringbit-car-v2/images/1Wq2Mov.jpg)

- We also need to add a package for programming the Sonar:bit. Click "Extensions" in the drawer and search “`https://github.com/elecfreaks/pxt-sonarbit`" in the dialogue box to download it.

***Note:***  if you are informed that it will be deleted due to incompatibility of the codebase, you can go on with the tips or create a new project in the menu.

### Step 2

- Drag the pins selection bricks for servos in the `On start` brick, the pins numbers are set according to the actual connection port.
- Move forward at full speed.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_10_02.png)

### Step 3

- Set variate `sonar` in the `forever` brick and read the detected value from the Sonar:bit to it.
- Drag the `if` brick and judge if the value given by `sonar` is below 10 and not equal to 0.
- If yes, set the speed of right wheel to 100 and the left to 0 to turn left with 500ms for obstacle avoidance.
- If not, move forward at full speed.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_10_03.png)

### Reference

Links: [https://makecode.microbit.org/_RTwFcMeA1MMY](https://makecode.microbit.org/_RTwFcMeA1MMY)

You can also download it below:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_RTwFcMeA1MMY"
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


- The Ring:bit car turns left automatically when detecting any obstacle 10cm in front of it.

## Exploration


- Question: Why we need to judge if the value is not 0 ?
- Answer: The detection value is also 0 if beyond the detection scope of Sonar:bit.

## FAQ
