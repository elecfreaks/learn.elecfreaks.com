﻿# Case 05: Temp.&Moisture Detection in the Library


##  Introduction
---

A stable temperature(among 14℃-24℃ ) and moisture(45%-60%) in the liabrary helps to protect the books from the breeding of the insects in high temperature and moisture environment or the brittleness growing in low temperature and moisture environment.

##  Function

---

Detect the temperature and moisture value from DHT11 sensor and display them on the OLED screen, if the values are not in the normal scope that we set, program to light on the LEDs for reminding.

## Products Link
---
- 1 x [microbit Smart City Kit](https://shop.elecfreaks.com/products/elecfreaks-micro-bit-smart-city-kit-without-micro-bit-board?_pos=1&_sid=ce30b50b6&_ss=r)

## Picture
---
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-city-kit/images/microbit-Smart-City-Kit-case-01-02.png)

## Hardware Connection
---

Connect the DHT11 sensor to P1,  the red LED to P2 and the OLED display to IIC on IoT:bit.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-city-kit/images/microbit-Smart-City-Kit-case-05-03.png)

## Software Programming

---

Click "Advanced" in the MakeCode to see more choices.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-city-kit/images/microbit-Smart-City-Kit-case-01-04.png)

For programming, we need to add a package: click "Extensions" at the bottom of the MakeCode drawer and search with "iot-environment-kit" in the dialogue box to download it.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-city-kit/images/microbit-Smart-City-Kit-case-01-05.png)


***Notice:*** If you met a tip indicating that some codebases would be deleted due to incompatibility, you may continue as the tips say or create a new project in the menu.

## Program
---

Drag the show icon in the on start block, save the returned temperature value as variable "Temp" and the moisture value as "RH", as there is a 3-sec interval between getting the value of temperature and moisture, we need to add a 5-sec pause here.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-city-kit/images/microbit-Smart-City-Kit-case-05-07.png)

Initialize the OLED screen and display the returned value on it.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-city-kit/images/microbit-Smart-City-Kit-case-05-08.png)

Judge if the current temperature is a proper value to preserve the books, if not, the red led lights on or it turns off.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-city-kit/images/microbit-Smart-City-Kit-case-05-09.png)

Judge if the current moisture is a proper value to preserve the books, if not, the red led lights on or it turns off.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-city-kit/images/microbit-Smart-City-Kit-case-05-10.png)

Link: [https://makecode.microbit.org/_66MTVUHcs2wz](https://makecode.microbit.org/_66MTVUHcs2wz)

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_66MTVUHcs2wz"
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
- The current temperature and moisture values display on the OLED screen, if they are in the proper scopes, the red led turns off or it turns on.
