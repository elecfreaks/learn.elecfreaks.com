# Case 07: Auto Lamps

##  Introduction
---

- The auto lamps are able to turn on when the night is approaching and to turn off while the daylight comes.

## Function
---

- Detect the light level with the light sensor on micro:bit, if the light level is too low, program to turn on the lamps; or to turn off the lamps.


## Products Link
---
- 1 x [microbit Smart City Kit](https://shop.elecfreaks.com/products/elecfreaks-micro-bit-smart-city-kit-without-micro-bit-board?_pos=1&_sid=ce30b50b6&_ss=r)

## Picture
---
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-city-kit/images/microbit-Smart-City-Kit-case-01-02.png)

## Hardware Connection
---

Connect the yellow LED to P1 port on IoT:bit.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-city-kit/images/microbit-Smart-City-Kit-case-07-03.png)

## Software Program

---

Click "Advanced" in the MakeCode drawer to see more choices.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-city-kit/images/microbit-Smart-City-Kit-case-01-04.png)

For programming, we need to add a package: click "Extensions" at the bottom of the MakeCode drawer and search with "iot-environment-kit" in the dialogue box to download it.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-city-kit/images/microbit-Smart-City-Kit-case-01-05.png)

***Notice:*** If you met a tip indicating that some codebases would be deleted due to incompatibility, you may continue as the tips say or create a new project in the menu.

## Program

---

Detect if the light level is below 100.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-city-kit/images/microbit-Smart-City-Kit-case-07-07.png)

If yes, set to light on the LED; or light off it.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-city-kit/images/microbit-Smart-City-Kit-case-07-08.png)


Link: [https://makecode.microbit.org/_CbKaXqeV9fb5](https://makecode.microbit.org/_CbKaXqeV9fb5)

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_CbKaXqeV9fb5"
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
- If the light level is too low, program to turn on the LED automatically; or to turn off it.
