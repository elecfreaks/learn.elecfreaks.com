---
sidebar_position: 7
sidebar_label: Case 7:Exploring the Mysteries of Sound
---

# Case 7: Exploring the Mysteries of Sound

## Introduction

The purpose of this project is to guide students in exploring the measurement of sound intensity using the micro:bit. By reading data from a microphone and displaying the current noise intensity on an OLED display, students will gain an understanding of the physical properties of sound, learn how to use sensors to collect ambient sound data, and stimulate their interest in the science of acoustics.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-07-01.png)

## Teaching Goal

Understand the physical concept of sound intensity.
Learn how to measure sound intensity using a noise sensor.
Learn how to display data using micro:bit and OLED displays.

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

Sound is an integral part of our daily lives, but do you know how to scientifically measure the intensity of sound? In this lesson, we will use noise sensors and micro:bits to monitor and analyze the intensity of sound in our surroundings.

### Exploratory activities


1. learn the scientific unit of sound intensity (decibel).

2. design an experiment to compare the intensity of sound in different environments.




### Hardware Connection

Connect the OLED display to the IIC port of the wukong expansion board.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-06-06.png)

### Code Programming

***  Adding Software Libraries ***

Open ``makecode.microbit.org`` and click ``New Project``.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-01.png)

Click on ``Extensions``.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-02.png)

Search for ``iot-environment-kit`` to add the iot-environment-kit repository.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-03.png)

*** sample code ***

1. Initializes the OLED display when the power is turned on.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-07-09.png)

2. Displays the current ambient sound intensity via the OLED display.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-07-10.png)




Please refer to the program link：[https://makecode.microbit.org/_iq3AfTUY9MUu](https://makecode.microbit.org/_iq3AfTUY9MUu)

You can also download the program directly from the following page.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_iq3AfTUY9MUu"
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

Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-01.png)，choose`Connect Device`。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-02.png)

Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-03.png).

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-04.png)

Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-05.png).

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-06.png)


Select `BBC micro:bit CMSIS-DAP` in the pop-up window and then select Connect, and at this point, our micro:bit has connected successfully.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-07.png)

Click to download the program.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-08.png)

### Teamwork & Presentation

Students are divided into small groups and work together to create and program cases.

Students are encouraged to cooperate, communicate and share their experiences with each other.

Each group will have the opportunity to show the cases they have produced and demonstrate to the other groups.

*** Expected results: OLED display shows the current noise intensity of the environment in real time. ***



### Summary and Reflection

Review the course content and remind students what knowledge and skills they have acquired.

Lead students to discuss the problems and difficulties they encountered during the production process and how they solved these problems.

Guide students to think about the effects of noise pollution on humans and the environment, and how technology can be used to reduce noise pollution.

## Expanding Knowledge

*** Physical properties of sound ***
Sound is produced by vibration and travels through a medium such as air. The intensity of sound is measured in decibels (dB), a logarithmic unit that indicates the relative magnitude of sound pressure levels.

*** Noise pollution ***
Noise pollution is unwanted or unpleasant sound in the environment. Prolonged exposure to high noise levels can cause hearing damage and may lead to other health problems.

*** Application of sensors ***
A sensor is a device that converts a physical quantity (e.g., sound, light, temperature, etc.) into an electrical signal. In this project, the noise sensor converts sound intensity into an electrical signal for micro:bit reading and processing.
