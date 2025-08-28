---
sidebar_position: 13
sidebar_label: Book Protection Device
---

# Book Protection Device

## Introduction

In this project, we will learn how to make a book protection device.



**Note: This case cannot use the set of structural parts to simulate the application scenario, but can realize the basic case production.**

## Teaching Objectives

Review the use of temperature and humidity sensors

## Teaching Preparation

Before starting the teaching, please make sure you have prepared the following necessary materials:

| **Picture**                                                  | **Name**                | **Quantity** | **Remarks**         |
| --- | --- | --- | --- |
| | Smart Home Explorer Kit | 1 |  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit.png) | micro:bit | 1 | Prepare by yourself |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/pc.png) | PC | 1 | Prepare by yourself |

These materials will provide you with a complete experience and ensure that you can proceed smoothly with the subsequent operations and learning. If you have prepared the above contents, we can move on to the next step.

## Course Introduction

In this class, we will make a book protection device. When the temperature and humidity sensor detects that the temperature or humidity is not suitable for book preservation, it will automatically display a red light for warning.

## Project Production

### Hardware Connection

Connect the temperature and humidity sensor to the IIC interface of the Petal Basic Expansion Board.

Connect the RGB LED to the J1 interface of the Petal Basic Expansion Board.


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/petal-series/petal-smart-home-explorer-kit/images/case-11-02.png)

### Programming Platform

We usually use the [graphical programming platform makecode](https://makecode.microbit.org/) to program the micro:bit.



Programming platform entrance: https://makecode.microbit.org/

### Create a New Project

Open https://makecode.microbit.org/https://makecode.microbit.org/)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode.png)

Create a new project

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode-new-project-01.png)

Enter the project name and click Create.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode-new-project-02.png)

### Add Software Library

Click Extensions in the Toolbox of the makecode programming interface.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-02.png)

Search for `petal` on the pop - up page and click to select the petal software library.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/petal-series/petal-smart-home-explorer-kit/images/add-petal.png)

### Write the Program

Sample program: https://makecode.microbit.org/_efohxYEmbLbXhttps://makecode.microbit.org/_efohxYEmbLbX)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/petal-series/petal-smart-home-explorer-kit/images/case-11-03.png)

You can also download the program directly through the following web page.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_efohxYEmbLbX"
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

Use a USB cable to connect the PC and micro:bit V2.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/connect-microbit.gif)

After successful connection, a drive named `MICROBIT` will be recognized on the computer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-drive.png)

Click ![img](data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2734%27%20height=%2728%27/%3e)![image](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-01.png) in the lower left corner and select `Connect Device`.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-02.png)

Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-03.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-04.png)

Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-05.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-06.png)


In the pop - up window, select `BBC micro:bit CMSIS - DAP`, then select Connect. So far, our micro:bit has been connected successfully.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-07.png)

Click to download the program.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-08.png)

### Result

When the temperature and humidity sensor detects that the temperature or humidity is not suitable for book preservation, it will automatically display a red light for warning.

## Extended Knowledge

Generally speaking, the suitable temperature and humidity standards for book preservation are: the temperature is controlled between 14℃ and 24℃, and the relative humidity is controlled between 45% and 60%. When the temperature is higher than 24℃ or lower than 14℃, and the humidity is higher than 60% or lower than 45%, it may cause damage to books. High temperature can easily make the book paper brittle and yellow; high humidity can easily breed mold and cause paper to stick; low humidity can make the paper dry and brittle, reducing the life of books. Applying this standard to intelligent devices, we can monitor and warn through temperature and humidity sensors.


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/petal-series/petal-smart-home-explorer-kit/images/case-11.gif)
