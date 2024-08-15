---
sidebar_position: 6
sidebar_label: Remote Control Cars
---

## Remote Control Cars

## Introduction

In this course, we will learn how to make a remote control cart using the cutebot smart racer and joysticks:bit. Through this, you will learn how to control the cart through the joystick. This fun project will allow you to delve deeper into the applications of robotics and programming.

## Teaching Objectives

Understand the wireless broadcasting capabilities of the micro:bit.

To be able to program a cart to move according to remote handle commands.

Develop problem solving and teamwork skills.

## Teaching Preparation

Before you start teaching, please make sure you have prepared the following necessary materials:

| **Picture** | Name | Number | **Notes** |
| --- | --- | --- | --- |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/images/cutebot_01_01.jpg) | cutebot | 1 |  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/expansion-board/images/joystick_v2_01.png) | joysticks:bit V2 | 1 | Prepare on your own |
|  | AAA battery | 5 |                     |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/USB-data-cable.png) | USB Cable | 1 |   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit.png) | micro:bit | 2 | Prepare on your own |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/pc.png) | PC | 1 | Prepare on your own |

These materials will provide you with a complete experience and ensure that you can follow through and learn smoothly. If you are ready for the above, we can move on to the next step.
﻿
﻿
## Teaching and Learning Process

### Introducing the Lesson

In this lesson, we will explore together how to make a fun RC race car by controlling the direction of travel of the cutebot smart race car with the joysticks: bit handle.
Now, let's start this fun learning journey together! Ready to explore the world of graphical programming with the cutebot smart racer?
﻿
### Exploration Activities

- How does the micro:bit's Bluetooth radio work?
- How do you program the car to respond to commands from the remote control joystick?

### Code programming

### Create a new project

Open makecode.microbit.org.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode.png)

Click to create a new project

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode-new-project-01.png)

Enter the project name and click OK.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode-new-project-02.png)

#### Basics

For more information about the Bluetooth antenna features of the micro:bit V2, check out: [https://microbit.org/get-started/features/radio-and-pins/#radio](https://microbit.org/get-started/ features/radio-and-pins/#radio)

Let's familiarize ourselves with the basic use of this feature with a simple Bluetooth communication example.

*** Transmitter ***![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/football-game-case-01-01.png)

Example link：[https://makecode.microbit.org/_5Uk2whHFuV6e](https://makecode.microbit.org/_5Uk2whHFuV6e)

***Receiving End ***

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/football-game-case-01-02.png)

Example link：[https://makecode.microbit.org/_5Uk2whHFuV6e](https://makecode.microbit.org/_5Uk2whHFuV6e)

### How to download programs to micro: bit?

Connect the PC and micro: bit V2 using a USB cable.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/connect-microbit.gif)

After a successful connection, a disk drive named `MICROBIT` is recognized on the computer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-drive.png)

Click on the bottom left corner of![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-01.png)，Select `Connect Device`.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-02.png)

Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-03.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-04.png)

Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-05.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-06.png)


Select `BBC micro:bit CMSIS-DAP` in the pop-up window and then select Connect, and at this point, our micro:bit has connected successfully.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-07.png)

Click to download the program.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-08.png)

### Results

With the A and B buttons of the first micro:bit, you can control the pattern displayed on the LED matrix of the second micro:bit.

*** Note: Please assign the wireless setup group group of micro:bit according to different subgroups in advance to prevent the classroom students from interfering with each other's signals because of the same group. ***

#### Add Software Library

Here we formally enter the production of the remote control car.

Click on Extension to enter the Extension Library Adding interface

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/add-extensions-1.png)

To program Cutebot, we need to add the software library for Cutebot. Please enter 'Cutebot' in the search bar, press Enter, and select the software library to add Cutebot.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/add-extensions-2.png)

To program joysticks: bit, we need to add a software library for joysticks: bit. Please enter 'joypicksbit' in the search bar, press enter, and select the software library to add joypicks: bit.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/add-extensions-3.png)


### Car end program

The following is an example program for the car end. Simply download the program to the micro: bit using the above method.

Example Program :[https://makecode.microbit.org/_bueAsJ15thxz](https://makecode.microbit.org/_bueAsJ15thxz)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/football-game-case-01.png)

You can also download the program directly from the following webpage.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_bueAsJ15thxz"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

### Remote control controller end program

The following is an example program for a remote controller. Simply download the program to the micro: bit using the above method.

Example program:[https://makecode.microbit.org/_5FXEbpPHkFmo](https://makecode.microbit.org/_5FXEbpPHkFmo)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/football-game-case-02.png)

You can also download the program directly from the following webpage.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_5FXEbpPHkFmo"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

### Result

The driving direction of the car can be controlled through the joystick or button of the remote control handle.
