﻿# Case 03: Smart Trash Can

##  Introduction
---

Most of the trash cans sit on the roadside are designed by throwing in the trash from the side part without lids, the bad smell are easily to get especially in hot summer days, and there are some cans with lids but require us to open it by hands, which may easily get virus and dirt attached to our body. Therefore, we could design a smart trash can to open the lids by itself while there are people appraching and close when they are leaving.

##  Function

---

Detect if there are humans approaching with the sonar:bit, program to open the lid automatically when people come and to close when they leave.

## Products Link
---
- 1 x [microbit Smart City Kit](https://shop.elecfreaks.com/products/elecfreaks-micro-bit-smart-city-kit-without-micro-bit-board?_pos=1&_sid=ce30b50b6&_ss=r)

## Picture
---
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-city-kit/images/microbit-Smart-City-Kit-case-01-02.png)

## Hardware Connection
---

Connect the sonar:bit to P1,  the servo to P2 on IoT:bit.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-city-kit/images/microbit-Smart-City-Kit-case-03-03.png)


## Software Programming

---

Click "Advanced" in the MakeCode to see more choices.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-city-kit/images/microbit-Smart-City-Kit-case-01-04.png)

For programming, we need to add a package: click "Extensions" at the bottom of the MakeCode drawer and search with "iot-environment-kit" in the dialogue box to download it.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-city-kit/images/microbit-Smart-City-Kit-case-01-05.png)

For programming, we need to add a package: click "Extensions" at the bottom of the MakeCode drawer and search with "servo" in the dialogue box to download it.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-city-kit/images/microbit-Smart-City-Kit-case-01-06.png)

## Program

---

Save the returned ultrasonic distance value as the variable “ultrasonic_distance”.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-city-kit/images/microbit-Smart-City-Kit-case-03-07.png)

Detect if there are people near the trash cans through the sonar:bit(note the detection range is 4~400cm), if the object is not in this scope, the returned value would be 0, therefore, here we need to define both of the minum and maxium value.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-city-kit/images/microbit-Smart-City-Kit-case-03-08.png)

If the varible value is in the scope, it means there are people approching the cans, program to turn on the servo and open the lid, or it closes.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-city-kit/images/microbit-Smart-City-Kit-case-03-09.png)

Link: [https://makecode.microbit.org/_d0KdmrUqs2F2](https://makecode.microbit.org/_d0KdmrUqs2F2)

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_d0KdmrUqs2F2"
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
---
- If there are people approching the cans, the lid would be opened automatically or it closes.
