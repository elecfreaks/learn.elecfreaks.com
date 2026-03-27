---
sidebar_position: 5
sidebar_label: XGO 2 Overview
---

# XGO2 Overview

## XGO2 Architecture Diagram

The XGO2 robot dog features a core architecture comprised of two main components. The first is the Raspberry XGO-CM4/CM5, an artificial intelligence module serving as the host computer responsible for all AI tasks. The second is a slave computer developed with ESP32, which manages the power system, servo drive, and core gait algorithm of the robot dog. Communication between the host and slave occurs through a serial port.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/pico/cm4-xgo-robot-kit/images/cm4-xgo-overview-01.png)

XGO2 architecture

## XGO2 Structure

The primary physical framework of XGO2 is made up of aluminum alloy structural parts and serial bus servos. The legs are made of ABS. PH2.0 4-pin cables connect the XGO-CM4 module and driver board, and everything is powered by two 18650 lithium batteries inside.

The structure is depicted in the exploded diagrams below.

XGO-lite2  3D : [XGO-lite2 3D model Download](https://drive.google.com/drive/folders/1m7UkYkFK1r1mkiaNGKb9vu-NmsO1vhvu?usp=share_link) .

XGO-mini2 3D: [XGO-mini2 3D model Download](https://drive.google.com/drive/folders/15PVrd4aRQLLVUnuNcEL2TR3LvbrGuc87?usp=share_link) .

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/pico/cm4-xgo-robot-kit/images/cm4-xgo-overview-02.png)



XGO-lite2

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/pico/cm4-xgo-robot-kit/images/cm4-xgo-overview-03.png)



XGO-mini2

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/pico/cm4-xgo-robot-kit/images/cm4-xgo-overview-04.png)



leg , servo ID

## XGO-CM4 / XGO-CM5 Module

This AI module adopts the Raspberry Pi CM4/CM5 technical solution. It is equipped with a 2.0-inch IPS color display, four programmable buttons, a 5MP camera, a digital microphone and a cavity speaker. As an AI terminal with human-computer interaction capabilities, it supports image recognition, face detection, voice recognition and other functions to help students learn AI knowledge.

[XGO-CM4 carrier board schematic Download](https://drive.google.com/file/d/1QnI0QfcOz2QENuufSl5sco3uHnJT6hEt/view?usp=share_link).

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/pico/cm4-xgo-robot-kit/images/cm4-xgo-overview-05.png)

XGO-CM4

## XGO2 Driver

This is a bus servo control board based on [ESP32](https://drive.google.com/file/d/1g_VkQ1Yl64d9Jzcs3MkiN2hhNxQXjvLK/view?usp=share_link) ，it controls XGO2's 15 bus servos and reads the current angle, load, voltage, mode, and other information of each servo, and can use the serial port to communicate with the Raspberry Pi computer.

[XGO-lite2 driver board schematic Download](https://drive.google.com/drive/folders/1BOxCXLa-zUld4KJEwGjWyR7R4VV0N0T2?usp=share_link).

[XGO-mini2 driver board schematic Download](https://drive.google.com/drive/folders/1Bn9FrDBKyHysEEdINcRndsG4CmKC1Rr7?usp=share_link).

## XGO-mini2 Servo

The modular servo joint of XGO-mini is composed of a DC hollow cup motor, a metal reduction gear set, a 12-bit magnetic encoder and an integrated control circuit. It has its own closed-loop control and planning algorithm, high-speed bus communication, 360-degree angle control, and supports speed, position, current, temperature feedback and control parameter adjustment functions providing high-performance. The customized joints provides PID parameter adjustment, optimizes the joint impedance characteristics (compliance), and based on the basic kinematic gait planning, combined with the consideration of the center of gravity and the feedback of the IMU, as well as the requirements of the upper-level control commands, real-time adjustments can be performed. At the same time, a large speed ratio and high-efficiency reducer is used, which ensures lexibility and improves on the load-to-weight ratio.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/pico/cm4-xgo-robot-kit/images/cm4-xgo-overview-06.png)

## XGO-lite2 Servo

The steering gear adopts plastic shell, metal gear box, iron core motor, TTL control board and high-quality potentiometer, and the output head adopts 25T type. It has a stall torque of 2.3kg.cm, an effective control angle of 300 degrees, and can switch between servo mode and continuous motor operation mode. In addition, the steering gear can also feedback position, speed, voltage, temperature and load parameters, so as to realize overload protection.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/pico/cm4-xgo-robot-kit/images/microbit-xgo-lite2-introduce-07.png)
