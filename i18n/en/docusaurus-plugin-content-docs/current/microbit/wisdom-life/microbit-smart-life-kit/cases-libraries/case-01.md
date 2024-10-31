---
sidebar_position: 1
sidebar_label: Smart Light
---

# Smart Light

## Introduction

In this project, we will learn how to make a smart light that uses a light sensor to monitor ambient light. When insufficient light is detected, the system automatically turns on the LED light to provide sufficient lighting.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-life-kit/images/case-01-01.png)

## Teaching Objectives

Understand how to use light sensors

Master the basic programming skills of using micro:bit to control LED lights.

## Teaching Preparation

Before starting teaching, please make sure you have prepared the following necessary materials:

| **Picture** | **Name** | **Number** | **Note** |
| --- | --- | --- | --- |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-life-kit/images/microbit-smart-life-kit.png) | Smart Life Kit | 1 |  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/USB-data-cable.png) | USB Cable | 1 |   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit.png) | micro:bit | 1 | Prepare on your own |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/pc.png) | PC | 1 | Prepare on your own |

These materials will provide you with a complete experience, ensuring that you can smoothly carry out subsequent operations and learning. If you have prepared the above content, we can proceed to the next step.

## Course Introduction

Some lights in public places are automatically sensed, and there is no need to press the switch by hand, which can save energy and reduce emissions. So how does this light realize intelligent opening? Can we make one ourselves?

## Project Production

### Hardware Connection

Connect the light sensor to the P1 interface of the Wukong expansion board, connect the rainbow light to the P2 interface of the Wukong expansion board, and insert the OLED display into the IIC interface.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-life-kit/images/case-01-02.png)

### Programming platform

We usually use [graphical programming platform makecode](https://makecode.microbit.org/) to program micro:bit

Programming platform entrance: [https://makecode.microbit.org/](https://makecode.microbit.org/)

### Create a new project

Open [https://makecode.microbit.org/](https://makecode.microbit.org/)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode.png)

New Project

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode-new-project-01.png)

Enter a project name and click Create.![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode-new-project-02.png)

### Add software library

Click Extensions in the Toolbox of the MakeCode programming interface.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-02.png)

Search for iot-environment-kit on the pop-up page and click to select the software library of iot-environment-kit.


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-03.png)

Search for wukong on the pop-up page and click to select the wukong software library.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-04.png)

### Write a program

Sample program：[https://makecode.microbit.org/_cvA28PcpAWLJ](https://makecode.microbit.org/_cvA28PcpAWLJ)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-life-kit/images/case-01-03.png)

You can also download the program directly from the following web page.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_cvA28PcpAWLJ"
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

### Results

After turning on, the smart light automatically turns on or off the rainbow light according to the ambient light intensity.

**For demonstration purposes, materials not included in the set were used in the result display, such as wooden houses, water cups, etc.**

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-life-kit/1.gif)

## Extended knowledge

**Application of smart light-controlled lights in life**

Smart light-controlled lights are widely used in life. They improve the convenience, energy saving and comfort of lighting systems through intelligent control. Here are some specific application scenarios:

Home automation: In a home environment, smart light-controlled lights can automatically adjust the brightness and color temperature according to the daily living habits of residents, such as automatically reducing the brightness at night to create a comfortable sleeping environment, or gradually lighting up in the morning to simulate sunrise to help people wake up more naturally.

Energy-saving lighting: Smart light-controlled lights can automatically switch on and off according to changes in ambient light, such as reducing or turning off artificial lighting when natural light is sufficient, thereby saving energy.

Security lighting: In the field of security monitoring, smart light-controlled lights can automatically light up when abnormal activities are detected, which serves as a warning and deterrent.

Commercial lighting: In commercial environments such as shopping malls, supermarkets and office buildings, smart light-controlled lights can automatically adjust lighting according to the flow of people and time, which is both energy-saving and can meet the lighting needs of different scenarios.

Public lighting: In public areas such as streets, parks and squares, smart light-controlled lamps can automatically adjust the brightness according to the season, weather and time to ensure the uniformity and safety of lighting.

Educational lighting: In educational places such as schools and libraries, smart light-controlled lamps can provide appropriate light, reduce eye fatigue and improve learning efficiency.

Medical lighting: In hospitals and clinics, smart light-controlled lamps can provide appropriate lighting according to different medical activities and patient needs, such as providing shadowless lamp effects in operating rooms.

Hotel lighting: Hotel rooms can provide a variety of lighting modes such as reading mode and relaxation mode through smart light-controlled lamps to improve the comfort and satisfaction of guests.

Smart curtain system: Combined with the smart curtain system, smart light-controlled lamps can automatically adjust the brightness according to the opening and closing of the curtains to ensure the appropriateness of indoor light.

Emergency lighting: In emergency situations, such as fire or earthquake, smart light-controlled lamps can automatically switch to emergency lighting mode to guide people to evacuate safely.

These applications of smart light-controlled lamps not only improve the quality of life, but also help save energy and reduce emissions, and are an important part of modern smart home and smart city construction. With the advancement of technology and the increasing demand for intelligence among consumers, the application of smart light-controlled lamps will become more extensive and in-depth.
