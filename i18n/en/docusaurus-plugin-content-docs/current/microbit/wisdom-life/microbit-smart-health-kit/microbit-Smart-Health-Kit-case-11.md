﻿# Case 11: Smart Trash Can


##  Introduction
---

- If the trash can has no lid, it is easy to emit peculiar smell and affect the surrounding environment, but if the lid is closed and requires to be opened manually, it is easy to cause secondary pollution. Thus, we can design a smart trash can that automatically opens the lid when someone approaches.

## Function
---

- Detect if there are humans approaching with the PIR sensor, program to open the lid automatically when people come.

## Products Link
---
- 1 x [micro:bit Smart Health Kit](https://shop.elecfreaks.com/products/elecfreaks-micro-bit-smart-health-kit-without-micro-bit-board?_pos=1&_sid=2b45d49aa&_ss=r)

## Picture
---
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-health-kit/images/microbit-Smart-Health-Kit-case-01-02.png)

## Hardware Connection
---

Connect the PIR sensor to P1 and the servo to P2 on sensor:bit.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-health-kit/images/microbit-Smart-Health-Kit-case-01-03.png)

## Software Programming
---
Click "Advanced" in the MakeCode to see more choices.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-health-kit/images/microbit-Smart-Health-Kit-case-01-04.png)

For programming, we need to add a package: click "Extensions" at the bottom of the MakeCode drawer and search with "smarthome" in the dialogue box to download it.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-health-kit/images/microbit-Smart-Health-Kit-case-01-05.png)

For programming, we need to add a package: click "Extensions" at the bottom of the MakeCode drawer and search with "servo" in the dialogue box to download it.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-health-kit/images/microbit-Smart-Health-Kit-case-01-06.png)

***Notice:*** If you met a tip indicating that some codebases would be deleted due to incompatibility, you may continue as the tips say or create a new project in the menu.

## Program

---
Judge the value of the variable "IR", if yes, program to display a "√" and set the servo to drive to 0° to open the lid of the trash can; or to display a "×" and set the servo to drive to 180° to close the lid.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-health-kit/images/microbit-Smart-Health-Kit-case-01-07.png)



Link: [https://makecode.microbit.org/_aXkgzhcmeVrh](https://makecode.microbit.org/_aXkgzhcmeVrh)

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_aXkgzhcmeVrh"
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
