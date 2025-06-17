---
sidebar_position: 10
sidebar_label: Rain Sensing Window
---

# Rain Sensing Window

## Introduction

In this project, we will learn how to make a rain sensing window.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/smart-home-explorer-kit/images/case-08-01.png)

**Note: This case cannot be used with the kit's structural components for actual application scenario simulation, but basic case production can be achieved.**

## Teaching Objectives

Understand the working principle of the rain sensing window.

## Teaching Preparations

Before starting the teaching, please ensure you have prepared the following necessary materials:

| **Image** | **Name** | **Quantity** | **Remarks** |
| --- | --- | --- | --- |
| <!-- 套装产品图 -->| Smart Home Explorer Kit | 1 |  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit.png) | micro:bit | 1 | Prepare separately |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/pc.png) | PC | 1 | Prepare separately |

These materials will provide you with a complete experience to ensure you can smoothly proceed with subsequent operations and learning. If you have prepared the above, we can continue to the next step.

## Course Introduction

In this lesson, we will make a rain sensing window that automatically closes when it rains.
The rain sensing window detects the accumulation of rainwater on the windowsill through a water level sensor. When rain is detected, it automatically drives a servo motor to raise the window sill baffle to prevent rainwater from splashing into the room. At the same time, the OLED display shows "Rainy Mode", and the rainbow light presents a blue breathing light effect, providing intelligent protection for home life.

## Project Production

### Hardware Connection

- Connect the water level sensor to the J1 interface of the Petal Base Expansion Board.
- Connect the RGB light to the J3 interface of the Petal Base Expansion Board.
- Connect the Adapter to the J4 interface of the Petal Base Expansion Board.
- Connect the 180-degree servo motor to the S1 interface of the Adapter.
- Connect the OLED display to the IIC interface of the Petal Base Expansion Board.


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/smart-home-explorer-kit/images/case-08-02.png)

### Programming Platform

We usually use the [graphical programming platform makecode](https://makecode.microbit.org/) to program the micro:bit.



Programming platform entry: https://makecode.microbit.org/

### Create a New Project

Open https://makecode.microbit.org/.https://makecode.microbit.org/)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode.png)

Create a new project.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode-new-project-01.png)

Enter the project name and click Create.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode-new-project-02.png)

### Add Software Libraries

In the makecode programming interface, click Extensions in the Toolbox.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-02.png)

In the pop-up page, search for `petal` and click to select the petal software library.


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-03.png)

###  Write the Program

Example program: https://makecode.microbit.org/_bzq5Xj70wJDthttps://makecode.microbit.org/_bzq5Xj70wJDt)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/smart-home-explorer-kit/images/case-08-03.png)

You can also directly download the program through the following web page.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_bzq5Xj70wJDt"
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

Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-03.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-04.png)

Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-05.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-06.png)


In the pop-up window, select `BBC micro:bit CMSIS-DAP`, then select Connect. At this point, our micro:bit is successfully connected.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-07.png)

Click to download the program.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-08.png)

### Results

When rain is detected, the servo motor is automatically driven to raise the window sill baffle to prevent rainwater from splashing into the room. At the same time, the OLED display shows "Rainy Mode", and the rainbow light presents a blue breathing light effect, providing intelligent protection for home life.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-life-kit/1.gif)
