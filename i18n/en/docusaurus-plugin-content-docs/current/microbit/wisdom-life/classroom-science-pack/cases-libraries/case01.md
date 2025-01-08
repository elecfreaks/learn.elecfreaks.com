---
sidebar_position: 1
sidebar_label: Case1:The Mystery Of Light And Color
---

# Case1：The Mystery Of Light And Color

## Introduction

The purpose of this project is to guide students in exploring the principles of color mixing in light using the rainbow lamps onboard the Wukong Expansion Board in the CLASSROOM Science Kit. By lighting and observing the yellow light and purple light of the rainbow lamp, students will learn how to create new colors by combining different colors of light. Through this project, students will learn basic optics and programming skills while stimulating their interest in scientific exploration.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-01-01.png)

## Teaching Goal

Understand the principle of color mixing of light.

Learn the basics of optics.

Acquire basic programming skills to control LED lights using micro:bit.

## Teaching Preparation

Before you begin teaching, please make sure you have the following necessary materials ready:

| Picture | Name |
| :-: | :-: |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-01-02.png) | classroom Science kit |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-03.png) | micro:bit V2 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-04.png) | Personal Computer（PC） |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-05.png) | USB cable |

These materials will provide you with a complete experience and ensure that you can follow through and learn smoothly. If you are ready for the above, we can move on to the next step.

## Teaching Process

### Introduction of the course

Have you ever wondered why there are seven colors in the rainbow? Why is it that when we mix certain colors of light, they can create new colors? In this lesson, we will explore the mysteries of light and color and learn how light mixes colors.

We will use the rainbow light and micro:bit from the CLASSROOM science kit to program the rainbow light to control the specific colors it glows. This device will help us observe and understand how different colors of light mix together to form new colors.

Ready? Now, let's embark on this fun learning journey and explore the mysteries of light and color!

### Exploratory activities

1. learn how to write code to control rainbow lights using the programming environment on the micro:bit.

2. Understand how to control the brightness of individual rainbow lights.

3. learn how to adjust the brightness of the lights to create different color effects.



### Hardware Connection

This case uses 4 rainbow lights on the Wukong expansion board for the experiment, the rainbow lights are connected to pin P16.


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-01-06.png)

### Code Programming

*** Adding Software Libraries ***

Open ``makecode.microbit.org``and click``New Project``.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-01.png)

Click``Extensions``.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-02.png)

Search ``iot-environment-kit``，Add the iot-environment-kit software library.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-03.png)

Search``wukong``，Add the wukong software library.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-04.png)

*** sample code  ***

1. When the power is turned on, the heart icon is displayed.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-01-09.png)

2. Initialize the rainbow lights to 4 and connect them to the P16 port, set the rainbow light brightness to 2.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-01-10.png)

3. When button A is pressed, the rainbow light shows purple light; when button B is pressed, the rainbow light shows yellow light.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-01-11.png)


Please refer to the program link：[https://makecode.microbit.org/_XM8XaJKs86UY](https://makecode.microbit.org/_XM8XaJKs86UY)

You can also download the program directly from the following page.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_XM8XaJKs86UY"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>
*** Download the program***

Use the USB cable to connect the PC to the micro:bit V2.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/connect-microbit.gif)

After a successful connection, a disk drive named `MICROBIT` is recognized on the computer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-drive.png)

Click on the bottom left corner of![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-01.png)，choose`Connect Device`。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-02.png)

Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-03.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-04.png)

Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-05.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-06.png)


Select `BBC micro:bit CMSIS-DAP` in the pop-up window and then select Connect, and at this point, our micro:bit has connected successfully.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-07.png)

Click to download the program.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-08.png)

### Teamwork & Presentation

Students are divided into small groups and work together to create and program cases.

Students are encouraged to cooperate, communicate and share their experiences with each other.

Each group will have the opportunity to present the cases they have produced and demonstrate them to the other groups.

*** Expected effect: the LED matrix of micro:bit displays the love heart icon after power on, when button A is pressed, the rainbow light displays purple light, when button B is pressed, the rainbow light displays yellow light.***

（GIF动图）

### Summary and Reflection

Review the course content and remind students what knowledge and skills they have acquired.

Lead students in a discussion of the problems and difficulties they encountered during the production process and how they resolved them.

Guide students to think about how the principle of color mixing of light is used in everyday life, such as color television and stage lighting.

## Expanding Knowledge

The principle of color mixing of light is an important concept in the field of optics that deals with how different colors of light can be combined to form new colors. Here is some extended knowledge of the color mixing principle of light:

Additive color mixing: when different colors of light shine together at the same time, they mix together to form new colors. This is called additive color mixing, and is typified by color TVs and computer monitors, which use red, green, and blue light to produce a wide range of colors.

Subtractive color mixing: In pigments or dyes, particles of different colors absorb some light and reflect others. When multiple pigments are mixed, they absorb more light, resulting in darker colors. This is subtractive color mixing and is often used in painting and printing.

Primary Colors of Light: In additive color mixing, red, green, and blue are considered the three primary colors of light. These three colors of light can be mixed to produce white.

Color perception: The optic cone cells in the human eye are sensitive to different wavelengths of light, enabling us to see colors. Different wavelengths of light correspond to different colors.

By understanding the principle of color mixing of light, students can better understand how we perceive colors and how colors are used in technology and art.
