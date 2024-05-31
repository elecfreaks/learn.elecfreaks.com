---
sidebar_position: 9
sidebar_label: Case 9:Exploring The Effects Of Light On Plant Growth
---

# Case 9: Exploring The Effects Of Light On Plant Growth

## Introduction

The purpose of this project is to guide students in building a plant growth monitoring device using a classroom science kit and a micro:bit. Using LED lights to simulate different lighting conditions, students will be able to observe and record plant growth changes, and then analyze and graph plant growth curves. This project will deepen students' understanding of botany and environmental science, as well as hone their experimental design and data analysis skills.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-09-01.png)

## Teaching Goal

Understand the basic conditions and environmental factors for plant growth.

Master the use of LED lights to simulate different light conditions.

Draw and analyze plant growth curves.

## Teaching Preparation

Before you begin teaching, please make sure you have the following necessary materials ready:

| Picture | Name |
| :-: | :-: |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-01-02.png) | classroom science kit |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-03.png) | micro:bit V2 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-04.png) | Personal computer（PC） |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-05.png) | USB cable |

These materials will provide you with a complete experience and ensure that you can follow through and learn smoothly. If you are ready for the above, we can move on to the next step.

## Teaching Process

### Introduction of the course

Light is one of the key environmental factors for plant growth and development. It not only affects a plant's photosynthesis, but also its biological clock and growth cycle. In this lesson, we will simulate different light conditions by building a plant growth monitoring device and observe how these conditions affect plant growth.

### Exploratory activities

1. learn the basic conditions and environmental factors for plant growth.

2. Design control group experiments using LED lights to simulate different light conditions.

3. Record the growth data of plants under different light conditions regularly and plot the growth curves.

4. analyze the pattern of plant growth under light conditions.

### Hardware Connection

This case uses 4 rainbow lights on the wukong expansion board for the experiment, the rainbow lights are connected to pin P16.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-01-06.png)

### Code Programming

*** Add Software Library ***

Open ``makecode.microbit.org`` and click ``New Project``.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-01.png)

Click on ``Extension``.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-02.png)

Search for ``iot-environment-kit`` to add the iot-environment-kit repository.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-03.png)

*** sample code ***

1. Display the heart icon, initialize the rainbow lights to 4 and connect to port P16, set the variable ``lightness`` to 255.


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-09-09.png)

2. The value of the variable ``lightness`` is adjusted by button control.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-09-10.png)

3. Set the brightness to ``lightness`` and set the light to white.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-09-11.png)






Please refer to the program link：[https://makecode.microbit.org/_0Hk1dfCuEg38](https://makecode.microbit.org/_0Hk1dfCuEg38)

You can also download the program directly from the following page.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_0Hk1dfCuEg38"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>
*** Download the program ***

Use the USB cable to connect the PC to the micro:bit V2.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/connect-microbit.gif)

After a successful connection, a disk drive named `MICROBIT` is recognized on the computer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-drive.png)

Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-01.png)，choose `Connect Device`。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-02.png)

Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-03.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-04.png)

Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-05.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-06.png)


Select `BBC micro:bit CMSIS-DAP` in the pop-up window and then select Connect, and at this point, our micro:bit has connected successfully.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-07.png)

Click to download program.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-08.png)


### Teamwork & Presentation

Students are divided into small groups and work together to create and program cases.

Students are encouraged to cooperate, communicate and share their experiences with each other.

Each group will have the opportunity to show the cases they made and demonstrate to the other groups.

*** Expected results: Control the light brightness of a rainbow lamp by pressing a button ***



### Summary and Reflection

Review the course content and remind students what knowledge and skills they have acquired.

Lead students in a discussion of the problems and difficulties they encountered during the production process and how they resolved them.

Guide students to think about practical applications of light for plant growth, such as agricultural production and plant cultivation.

## Expanding Knowledge

*** Photosynthesis in plants ***
Photosynthesis is the process by which plants convert carbon dioxide and water into glucose and oxygen by absorbing light energy through chlorophyll under light conditions.

*** Photoperiod ***
The photoperiod, or photoperiod, is the length of time a plant receives light and darkness during the day. Different plants have different photoperiod requirements, which have important implications for plant growth and flowering.

*** Growth Curve ***
A growth curve is a graph that describes plant growth over time and can be used to analyze the growth rate and growth stage of a plant.
