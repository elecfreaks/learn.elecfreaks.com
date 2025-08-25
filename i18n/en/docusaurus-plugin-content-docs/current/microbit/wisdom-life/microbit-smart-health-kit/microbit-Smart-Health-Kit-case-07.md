# Case 07: Humidity&Temp. Monitor


##  Introduction
---

- The most comfortable indoors temperature for us is 15-18℃. If the indoor air is not circulating or the relative humidity is less than 35%, and the indoor temperature exceeds 25℃, we will begin to absorb heat from the outside which would make us feel hot. If the temperature exceeds 35°C, the sweat glands will start to activate, and the body temperature accumulates through sweating slightly, which could increase the heartbeat and accelerate blood circulation, we might feel dizzy and fatigue at the same time.
- A healthy humidity environment is 45%-65%. Such humidity conditions are the best to us, and various germs are not easy to spread. Humidity higher than 65% will cause discomfort to the human respiratory system and mucous membranes and reduce immunity.

## Function
---

- Detect the humidity and temperature from the DHT11 sensor and display them on the OLED screen.

## Products Link
---
- 1 x [micro:bit Smart Health Kit](https://shop.elecfreaks.com/products/elecfreaks-micro-bit-smart-health-kit-without-micro-bit-board?_pos=1&_sid=2b45d49aa&_ss=r)

## Picture
---
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-health-kit/images/microbit-Smart-Health-Kit-case-01-02.png)

## Hardware Connection
---

Connect the DHT11 sensor to P1 and the OLED to IIC on sensor:bit.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-health-kit/images/microbit-Smart-Health-Kit-case-07-03.png)


## Software Programming
---
Click "Advanced" in the MakeCode to see more choices.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-health-kit/images/microbit-Smart-Health-Kit-case-01-04.png)

For programming, we need to add a package: click "Extensions" at the bottom of the MakeCode drawer and search with "smarthome" in the dialogue box to download it.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-health-kit/images/microbit-Smart-Health-Kit-case-01-05.png)

***Notice:*** If you met a tip indicating that some codebases would be deleted due to incompatibility, you may continue as the tips say or create a new project in the menu.

## Program

---
Initialize the OLED screen.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-health-kit/images/microbit-Smart-Health-Kit-case-07-07.png)

Save the returned value of the humidity from the DHT11 sensor connecting to P1 as the variable "RH" and the temperature as the variable "Temp", note a 2000ms pause is required in this operation due to the characteristics of the hardware.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-health-kit/images/microbit-Smart-Health-Kit-case-07-08.png)

Clear the OLED screen and display the humidity and temperature value on the OLED screen.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-health-kit/images/microbit-Smart-Health-Kit-case-07-09.png)




Link: [https://makecode.microbit.org/_FDCczvJfCHUF](https://makecode.microbit.org/_FDCczvJfCHUF)

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_FDCczvJfCHUF"
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
- Display the humidity and temperature value on the OLED screen.
