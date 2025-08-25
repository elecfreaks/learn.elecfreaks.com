# Case 07: Crops Height Detection


##  Introduction
---

- The height of the crops is an important factor in determining crop yield. Deducing plants height could increase plants fertilizer tolerance and lodging resistance, and increase harvest index and final yield. This also fully shows that plants height is an important selection indicator in the breeding process.

##  Function
---
- Detect if the height of the crops is exceeding the standard with the sonar:bit.

## Products Link
---
- 1 x [microbit Smart Agriculture Kit](https://shop.elecfreaks.com/products/elecfreaks-micro-bit-smart-agriculture-kit-without-micro-bit-board?_pos=2&_sid=2c86b7764&_ss=r)

## Picture
---
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-agriculture-kit/images/microbit-Smart-Agriculture-Kit-case-01-02.png)

## Hardware Connection
---

Connect the sonar:bit to P1 and the OLED display to IIC on IoT:bit.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-agriculture-kit/images/microbit-Smart-Agriculture-Kit-case-07-03.png)

## Software Programming

---

Click "Advanced" in the MakeCode to see more choices.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-agriculture-kit/images/microbit-Smart-Agriculture-Kit-case-01-04.png)

For programming, we need to add a package: click "Extensions" at the bottom of the MakeCode drawer and search with "iot-environment-kit" in the dialogue box to download it.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-agriculture-kit/images/microbit-Smart-Agriculture-Kit-case-01-05.png)

***Notice:*** If you met a tip indicating that some codebases would be deleted due to incompatibility, you may continue as the tips say or create a new project in the menu.

## Program

---

Initialize the OLED display as 128×64.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-agriculture-kit/images/microbit-Smart-Agriculture-Kit-case-07-07.png)

Set the ultrasonic sound sensor to connect to P1 with unit in cm, save the returned value as the variable "ultrasonic_distance".

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-agriculture-kit/images/microbit-Smart-Agriculture-Kit-case-07-08.png)

Clear the OLED display and display the value from the ultrasonic sound sensor.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-agriculture-kit/images/microbit-Smart-Agriculture-Kit-case-07-09.png)

Judge if the returned value is in the scope of the threshold, if yes, it means the height of the plants is over the standards, prgram to display "x"; or program to display "√".

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-agriculture-kit/images/microbit-Smart-Agriculture-Kit-case-07-10.png)

Link: [https://makecode.microbit.org/_0UF1zaasHYM9](https://makecode.microbit.org/_0UF1zaasHYM9)

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_0UF1zaasHYM9"
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
- Detect if the height of the plants is over the threshold with the sonar:bit.
