﻿# Case 09: Crops Sunshade Device


##  Introduction
---

- Although the growth of plants depends on photosynthesis. However, the strong light may also cause physiological damage to plants. When the light is too strong, it is easy to cause leaf burn or sunburn, thus, we can make a crop sunshade device to protect the crops.

##  Function
---
- Detect the light intensity through the light sensor on the micro:bit, if it's strong, program to drive the servo to lift the sunshade device.

## Products Link
---
- 1 x [microbit Smart Agriculture Kit](https://shop.elecfreaks.com/products/elecfreaks-micro-bit-smart-agriculture-kit-without-micro-bit-board?_pos=2&_sid=2c86b7764&_ss=r)

## Picture
---
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-agriculture-kit/images/microbit-Smart-Agriculture-Kit-case-01-02.png)

## Hardware Connection

---

Connect the servo to P1 on IoT:bit.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-agriculture-kit/images/microbit-Smart-Agriculture-Kit-case-08-03.png)

## Software Programming

---

Click "Advanced" in the MakeCode to see more choices.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-agriculture-kit/images/microbit-Smart-Agriculture-Kit-case-01-04.png)

For programming, we need to add a package: click "Extensions" at the bottom of the MakeCode drawer and search with "servo" in the dialogue box to download it.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-agriculture-kit/images/microbit-Smart-Agriculture-Kit-case-01-06.png)

***Notice:*** If you met a tip indicating that some codebases would be deleted due to incompatibility, you may continue as the tips say or create a new project in the menu.

## Program

---

In forever block, judge if the light intensity is over 200.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-agriculture-kit/images/microbit-Smart-Agriculture-Kit-case-09-07.png)

If yes, program the servo to drive to 90°; or set the servo to drive to 0°.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-agriculture-kit/images/microbit-Smart-Agriculture-Kit-case-09-08.png)



Link: [https://makecode.microbit.org/_6vu8k1cwqXVM](https://makecode.microbit.org/_6vu8k1cwqXVM)

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_6vu8k1cwqXVM"
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
- If the light intensity is too strong, the sunshade device will be lifted automatically to protect the crops.
