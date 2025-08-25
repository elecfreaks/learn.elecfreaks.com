---
sidebar_position: 6
sidebar_label: Case 6:micro:bit feature counter
---

# Case 6: micro:bit Feature Counter

## Introduction

The purpose of this project is to guide students in exploring the basics of population statistics using the sensors and micro:bits in the CLASSROOM science kit. By creating a population trait counter, students will be able to quantify the characteristics of a specific population, such as plant species, number of animals, etc. This project will help students learn the basics of ecology, acquire skills in data collection and processing, and stimulate their interest in the study of biodiversity.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-06-01.png)

## Teaching Goal

Understand the basic concepts of population statistics.
Learn how to use sensors for data collection.
Learn how to use micro:bit for data processing and display.

## Teaching Preparation

Before you begin teaching, please make sure you have the following necessary materials ready:

| Picture | Name |
| :-: | :-: |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-01-02.png) | classroom science kit |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-03.png) | micro:bit V2 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-04.png) | personal computer（PC） |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-05.png) | USB cable |

These materials will provide you with a complete experience and ensure that you can follow through and learn smoothly. If you are ready for the above, we can move on to the next step.

## Teaching Process

### Introduction of the course

Counting and characterizing populations of organisms in a given area is an important task in ecological studies. It helps us understand biodiversity, population structure, and ecosystem health. Today, we will use micro:bit and OLED to create a population characterization counter to record and count different population characteristics by pressing keys.

### Exploratory activities


1. Explore how sensor data can be processed using micro:bit.
2. Design a program that implements feature counting and displays it on an OLED screen in real time.




### Hardware Connection

Connect the OLED display to the IIC port of the wukong expansion board.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-06-06.png)

### Code Programming

*** Adding Software Libraries ***

Open ``makecode.microbit.org`` and click ``New Project``.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-01.png)

Click on``Extensions``.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-02.png)

Search for ``iot-environment-kit`` to add the iot-environment-kit repository.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-03.png)

*** sample code ***

1. Initializes the OLED display when the power is turned on.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-06-09.png)

2. When key A is pressed, the variable A is added 1 and when key B is pressed.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-06-10.png)

3. When the values of A and B are displayed separately and the screen information is cleared after two seconds.![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-06-11.png)


Please refer to the program link：[https://makecode.microbit.org/_dp0btUKLi1qv](https://makecode.microbit.org/_dp0btUKLi1qv)

You can also download the program directly from the following page.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_dp0btUKLi1qv"
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

Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-01.png)，Choose`Connect Device`。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-02.png)

Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-03.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-04.png)

Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-05.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-06.png)


Select `BBC micro:bit CMSIS-DAP` in the pop-up window and then select Connect, and at this point, our micro:bit has connected successfully.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-07.png)

Click to download the program.![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-08.png)

### Teamwork & Presentation

Students are divided into small groups and work together to create and program the case.

Students are encouraged to cooperate, communicate and share their experiences with each other.

Each group will have the opportunity to present the cases they have made and demonstrate to the other groups.

*** Expected Result: A,B is counted by pressing keys and the data is displayed on the OLED display. ***



### Summary and Reflection

Review the course content and remind students what knowledge and skills they have acquired.

Lead students in a discussion of the problems and difficulties they encountered in making the counter and how they resolved them.

Guide students to think about the use of population characterization counters in ecological studies and how science and technology can be used to conserve biodiversity.

## Expanding Knowledge

*** Biodiversity ***

Biodiversity refers to the rich variety of life forms on Earth, including the diversity of living species, the diversity of genetic variation and the diversity of ecosystems.

*** Population statistics ***

A population count is a method used in ecology to estimate the number of specific species in a given area. Accurate population counts are essential for species conservation and ecosystem management.

*** Data processing ***

In biological research, data collected need to be processed and analyzed by appropriate statistical methods to draw scientific conclusions.
