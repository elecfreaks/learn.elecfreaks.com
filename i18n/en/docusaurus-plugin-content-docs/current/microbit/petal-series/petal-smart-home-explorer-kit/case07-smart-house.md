---
sidebar_position: 9
sidebar_label: Smart House
---

# Smart House

## Introduction

In this project, we will learn how to build a smart house. By combining the previous courses and structural components, we will create a comprehensive case featuring a smart clothes drying rack, temperature-controlled fan, temperature-humidity reminder, and energy-saving lights.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/petal-series/petal-smart-home-explorer-kit/images/case-07-01.png)

## Teaching Objectives

- Review the previously learned courses.
- Complete the comprehensive production of the overall demonstration case.

## Teaching Preparations

Before starting the teaching, please ensure you have prepared the following necessary materials:

| **Image** | **Name** | **Quantity** | **Remark** |
| --- | --- | --- | --- |
| | Smart Home Explorer Kit | 1 |  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit.png) | micro:bit | 1 | Prepare separately |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/pc.png) | PC | 1 | Prepare separately |

These materials will provide you with a complete experience to ensure you can smoothly proceed with subsequent operations and learning. If you have prepared the above, we can continue to the next step.

## Course Introduction

In the previous courses, we learned about cases such as the smart clothes drying rack, temperature-controlled fan, temperature-humidity reminder, and energy-saving lights. In this lesson, we will build a comprehensive small house that integrates all these functions into a smart house.

## Project Production

### Hardware Connection

- Connect the water level sensor to the J1 interface of the Petal Base Expansion Board.
- Connect the fan module to the J2 interface of the Petal Base Expansion Board.
- Connect the RGB light to the J3 interface of the Petal Base Expansion Board.
- Connect the Adapter to the J4 interface of the Petal Base Expansion Board.
- Connect the 180-degree servo motor to the S1 interface of the Adapter.
- Connect the temperature-humidity sensor and OLED display to the IIC interface of the Petal Base Expansion Board.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/petal-series/petal-smart-home-explorer-kit/images/case-07-02.png)

### Programming Platform

We usually use the [graphical programming platform makecode](https://makecode.microbit.org/) to program the micro:bit.



Programming platform entry: https://makecode.microbit.org/

### Create a New Project

Open https://makecode.microbit.org/.https://makecode.microbit.org/

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode.png)

Create a new project.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode-new-project-01.png)

Enter the project name and click Create.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode-new-project-02.png)

### Add Software Libraries

In the makecode programming interface, click Extensions in the Toolbox.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-02.png)

In the pop-up page, search for `petal` and click to select the petal software library.


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/petal-series/petal-smart-home-explorer-kit/images/add-petal.png)

### Write the Program

Example program: [https://makecode.microbit.org/_1HFgEsKExWMq](https://makecode.microbit.org/_1HFgEsKExWMq)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/petal-series/petal-smart-home-explorer-kit/images/case-07-03.png)

You can also directly download the program through the following web page.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_1HFgEsKExWMq"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>




### How to Download the Program to micro:bit?

Connect the PC to the micro:bit V2 using a USB cable.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/connect-microbit.gif)

After a successful connection, a drive named `MICROBIT` will be recognized on the computer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-drive.png)

Click the icon in the lower left corner![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-01.png)，and select`Connect Device`。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-02.png)

click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-03.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-04.png)

click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-05.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-06.png)

In the pop-up window, select `BBC micro:bit CMSIS-DAP`, then select *Connect*. The micro:bit is now successfully connected.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-07.png)

Click to download the program.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-08.png)

### Results

- **Smart Lighting**: The rainbow light is controlled by ambient light.
- **Smart Clothes Drying Rack**: Detected by the water level sensor, the drying rack automatically retracts when rain is detected.
- **Temperature-Controlled Fan**: Automatically regulates temperature.
- **Living Environment Detection**: The OLED display shows real-time temperature, humidity, noise, light intensity, and whether it is raining.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-life-kit/1.gif)
