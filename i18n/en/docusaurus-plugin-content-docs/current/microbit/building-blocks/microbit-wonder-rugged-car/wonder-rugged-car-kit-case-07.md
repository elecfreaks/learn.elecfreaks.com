﻿# Case 07: Remote Control

## Purpose
---

- Build a Wonder Rugged Kit that can be controlled by Joystick:bit.

## Products Link

[Wonder Rugged Car Kit](https://shop.elecfreaks.com/products/elecfreaks-micro-bit-wonder-rugged-car-kit-without-micro-bit-board)
[Joystick:bit](https://shop.elecfreaks.com/products/elecfreaks-micro-bit-joystick-bit-v2-kit?_pos=1&_sid=d4f46b0e5&_ss=r)

## Background Knowledge

------

## Software

------

[MicroSoft makecode](https://makecode.microbit.org/#)

## Program

------

### Step 1

Click "Advanced" in the drawer of MakeCode to see more choices.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-wonder-rugged-car/images/Mecanum_wheel_car_kit_case_01_01.png)

For programming the Wonder Rugged Kit, we need to add a package. Click "Extensions" at the bottom of the drawer and then search "Wukong" in the dialogue box to download it.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-wonder-rugged-car/images/Mecanum_wheel_car_kit_case_01_02.png)

For programming the Joystick:bit, we need to add a package. Click "Extensions" at the bottom of the drawer and then search "joystickbit" in the dialogue box to download it.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-wonder-rugged-car/images/Mecanum_wheel_car_kit_case_07_04.png)



***Note:*** If you get a warning indicating some packages will be removed because of incompatibility issues, you can follow the prompts or create a new project in the menu.

### Step 2

Below is the code for Wonder Rugged Kit:


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-wonder-rugged-car/images/Mecanum_wheel_car_kit_case_07_05.png)


Begin with radio set group and initialize the servos. Save the radio received value in `I` to control the movement of the car.


### Step 3

Below is the code for Joystick:bit:


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-wonder-rugged-car/images/Mecanum_wheel_car_kit_case_07_06.png)


Begin with the radio set group and send number through the status of the joystick handle and the buttons.


### Program

Links for Wonder Rugged Kit: [https://makecode.microbit.org/_MC9gcKYXpJxW](https://makecode.microbit.org/_MC9gcKYXpJxW)

You can also download it directly below:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_MC9gcKYXpJxW"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>


Links for Joystick:bit: [https://makecode.microbit.org/_e5dHb6c9xbt8](https://makecode.microbit.org/_e5dHb6c9xbt8)

You can also download it directly below:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_U9zgLViDgKKz"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

### Result

The movement of the car can be controlled via Joystick:bit.

## Exploration

------

## FAQ

------

## Relevant Files

---
