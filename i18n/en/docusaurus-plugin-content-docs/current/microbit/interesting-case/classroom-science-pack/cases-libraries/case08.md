---
sidebar_position: 8
sidebar_label: Case 8:The Human Body's Electrical Waves
---

# Case 8: The Human Body's Electrical Waves

## Introduction

The purpose of this project is to guide students in exploring the mysteries of the human body's electrical waves using the soil moisture sensor and micro:bit from the CLASSROOM Science Kit. By detecting voltage changes in the human body and presenting the data on an OLED display, students will understand the fundamentals of human electrophysiological activity, learn how to use sensors to collect bioelectrical signals, and stimulate their interest in human physiology.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-08-01.png)

## Teaching Goal

Understand the basic principles of electrophysiologic activity in the human body.

Learn how to detect body voltage using a soil moisture sensor.

Master the use of micro:bit to present data.

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

The human body is like a bioelectric power station, with organs such as our heart, brain and muscles producing weak electrical signals as they work. These electrical signals can be detected by specific sensors and used to analyze our health. Today, we will explore the body's electrical waves using a soil moisture sensor and a micro:bit.

### Exploratory activities

1. learn the basic principles of electrophysiological activity in the human body.

2. Explore how to detect voltage changes in the human body using a soil moisture sensor.

### Hardware Connection

Connect the soil moisture sensor to the P1 port of the wukong expansion board.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-03-06.png)

### Code Programming

*** Adding Software Libraries ***

Open ``makecode.microbit.org`` and click ``New Project``.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-01.png)

Click on ``Extension``.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-02.png)

Search for ``iot-environment-kit`` to add the iot-environment-kit repository.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-03.png)

*** sample code ***

1. Read the current voltage detected by the soil moisture sensor through the serial port.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-08-09.png)






Please refer to the program link：[https://makecode.microbit.org/_89Y4tFKdWAfk](https://makecode.microbit.org/_89Y4tFKdWAfk)

You can also download the program directly from the following page.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_89Y4tFKdWAfk"
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

Click to download the program.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-08.png)

### makecode serial window

please click``Show data``

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/show-data-01.png)

Viewing data

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/case-08-data-01.png)

### Teamwork & Presentation

Students are divided into small groups and work together to create and program cases.

Students are encouraged to cooperate, communicate and share their experiences with each other.

Each group will have the opportunity to present the case they have made and demonstrate it to the other groups.

*** Expected results: view voltage data from the human body via makecode. ***



### Summary and Reflection

Review the course content and remind students what knowledge and skills they have acquired.

Lead students in a discussion of the problems and difficulties they encountered during the production process and how they resolved them.

Guide students to think about the use of human electrophysiological signals in medical diagnosis and how technology can be used to improve the accuracy of health monitoring.

## Expanding Knowledge

*** Bioelectricity ***
Bioelectrical phenomena are electrical phenomena that occur within an organism or between an organism and its external environment. Electrophysiological activity in the human body is generated by the flow of ions controlled by ion channels in the cell membrane.

*** Application of sensors ***
Sensors are devices that convert non-electrical physical quantities (e.g., light, sound, pressure, humidity, etc.) into electrical signals. In this project, the soil moisture sensor is used as a sensor to detect voltage changes in the human body.

*** Measurement of biological signals ***
Measurement of biological signals is an important field in biomedical engineering and medical diagnostics. By measuring and analyzing bioelectrical signals, doctors can understand the health status of their patients and diagnose and treat them accordingly.
