﻿# Case 04: Alcohol Detection Device

##  Introduction
---

- If you drink a lot of alcohol in a short time, it is easy to cause gastric mucosal damage and gastric bleeding, thus, we could make an alcohol detection device for reminding.

## Function
---

- Detect the concentration of the alcohol with the Alcohol sensor and display the value on OLED screen, if the concentration is over the threshold, program to turn on the red LED for reminding.

## Products Link
---
- 1 x [micro:bit Smart Health Kit](https://shop.elecfreaks.com/products/elecfreaks-micro-bit-smart-health-kit-without-micro-bit-board?_pos=1&_sid=2b45d49aa&_ss=r)

## Picture
---
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-health-kit/images/microbit-Smart-Health-Kit-case-01-02.png)

## Hardware Connection
---

Connect the alcohol sensor to PI, the rainbow LED to P2, the crash sensor to P9 and the OLED to IIC on sensor:bit.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-health-kit/images/microbit-Smart-Health-Kit-case-04-03.png)

## Software Programming
---

Click "Advanced" in the MakeCode to see more choices.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-health-kit/images/microbit-Smart-Health-Kit-case-01-04.png)

For programming, we need to add a package: click "Extensions" at the bottom of the MakeCode drawer and search with "smarthome" in the dialogue box to download it.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-health-kit/images/microbit-Smart-Health-Kit-case-01-05.png)

For programming, we need to add a package: click "Extensions" at the bottom of the MakeCode drawer and search with "servo" in the dialogue box to download it.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-health-kit/images/microbit-Smart-Health-Kit-case-01-06.png)

***Notice:*** If you met a tip indicating that some codebases would be deleted due to incompatibility, you may continue as the tips say or create a new project in the menu.

## Program
---
Drag the "on start" block from the drawer, set the crash sensor to connect to P9, initialize the OLED display and set the strip to connect to P2 with 1 led.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-health-kit/images/microbit-Smart-Health-Kit-case-04-07.png)

While the crash sensor is pressed, save the returned value from the alcohol sensor connecting to P1 as the variable "i" and display it on the OLED screen.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-health-kit/images/microbit-Smart-Health-Kit-case-04-08.png)

Judge the value of the variable "i", if it's over 50, set the rainbow LED to light on in red; or set it to light on in green.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-health-kit/images/microbit-Smart-Health-Kit-case-04-09.png)




Link: [https://makecode.microbit.org/_1e3fAF0gp8Uv](https://makecode.microbit.org/_1e3fAF0gp8Uv)

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_1e3fAF0gp8Uv"
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
- Press the crash sensor to detect the alcohol concentration and display the value on the OLED screen, if the value is over the threshold, program to light on the LED in red; or light on the LED in green.
