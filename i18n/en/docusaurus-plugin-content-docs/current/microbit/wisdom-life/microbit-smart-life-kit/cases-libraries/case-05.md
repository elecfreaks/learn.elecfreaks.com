---
sidebar_position: 5
sidebar_label: Smart Fan
---

# Smart Fan

## Introduction

In this project, we will learn how to make a smart fan, using temperature and humidity sensors to monitor the current temperature, and automatically turn on the fan to cool down when the temperature is higher than the threshold.![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-life-kit/images/case-05-01.png)

## Teaching objectives

Understand how to use the DHT11 temperature and humidity sensor

Understand how to use the fan module

## Teaching preparation

Before starting the teaching, please make sure you have prepared the following necessary materials:

| **Picture** | **Name** | **Number** | **Note** |
| --- | --- | --- | --- |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-life-kit/images/microbit-smart-life-kit.png) | Smart Life Kit | 1 |  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/USB-data-cable.png) | USB Cable | 1 |   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit.png) | micro:bit | 1 | Prepare Yourself |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/pc.png) | PC | 1 | Prepare Yourself |

These materials will provide you with a complete experience, ensuring that you can smoothly carry out subsequent operations and learning. If you are ready for the above content, we can proceed to the next step.

## Course Introduction

The right temperature is essential for human health and comfort. The normal body temperature range of the human body is approximately between 36.3℃ and 37.2℃. In terms of ambient temperature, scientific research shows that the human body feels most comfortable when the ambient temperature is between 18℃ and 25℃ and the relative humidity is between 40% and 70%. This temperature range helps maintain the thermal balance of the human body, without the need to generate additional heat to keep warm or to dissipate heat through sweating. Can we make a smart fan that can automatically start and stop according to the indoor temperature?

## Project Production

### Hardware Connection

Connect the DHT11 temperature and humidity sensor to the P1 interface of the wukong expansion board, the fan module to the P2 interface of the wukong expansion board, and the OLED display to the IIC interface of the wukong expansion board.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-life-kit/images/case-05-02.png)

### Programming platform

We usually use [graphical programming platform makecode](https://makecode.microbit.org/) to program micro:bit

Programming platform entrance: [https://makecode.microbit.org/](https://makecode.microbit.org/)

### Create a new project

Open [https://makecode.microbit.org/](https://makecode.microbit.org/)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode.png)

New Project

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode-new-project-01.png)

Enter a project name and click Create.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode-new-project-02.png)

### Add software library

Click Extensions in the Toolbox of the MakeCode programming interface.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-02.png)

Search for iot-environment-kit on the pop-up page and click to select the iot-environment-kit software library.


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-03.png)

Search for wukong on the pop-up page and click to select the wukong software library.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-04.png)

### Write a program

Sample program: [https://makecode.microbit.org/_VReMzUepM99U](https://makecode.microbit.org/_VReMzUepM99U)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-life-kit/images/case-05-03.png)

You can also download the program directly from the following web page.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_VReMzUepM99U"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>




### How to download the program to micro:bit?

Use a USB cable to connect PC and micro:bit V2.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/connect-microbit.gif)

After the connection is successful, a drive named `MICROBIT` will be recognized on the computer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-drive.png)

Click ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-01.png) in the lower left corner and select `Connect Device`.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-02.png)

Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-03.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-04.png)

Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-05.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-06.png)


In the pop-up window, select `BBC micro:bit CMSIS-DAP`, and then select Connect. At this point, our micro:bit has been successfully connected.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-07.png)

Click Downloader.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-08.png)

### Result

When the smart fan detects that the ambient temperature is higher than the preset temperature, it automatically turns on the fan to cool down.

## Extended knowledge

Temperature Temperature is a measure of the hotness or coldness of a substance. Common temperature units are Celsius (°C), Fahrenheit (°F), and Kelvin (K). Changes in temperature cause thermal expansion and contraction of substances. Temperature affects the physical state of a substance, for example, water freezes at 0°C and boils at 100°C.

Humidity Humidity refers to the amount of water vapor in the air. Common humidity units are relative humidity (%) and absolute humidity (g/m³). Humidity affects human comfort, for example, high humidity makes people feel stuffy and low humidity makes people feel dry.

Effects of temperature and humidity on the human body Appropriate temperature and humidity are very important to human health. Too high a temperature can cause heat stroke, and too low a temperature can cause frostbite. Too high a humidity can make the human body feel stuffy, and too low a humidity can make the human body feel dry.
