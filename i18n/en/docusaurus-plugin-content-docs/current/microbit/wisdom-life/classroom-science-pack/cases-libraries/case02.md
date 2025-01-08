---
sidebar_position: 2
sidebar_label:  Case 2:Temperature and Humidity - Key Factors Affecting Our Lives
---

# Case 2: Temperature And Humidity - Key Factors Affecting Our Lives

## Introduction

The purpose of this project is to guide students in exploring the basic concepts of temperature and humidity using the DHT11 Temperature and Humidity Sensor from the CLASSROOM Science Kit. By detecting the temperature and humidity of the environment, students will learn the meaning of temperature and humidity, their units, and how they affect the human body. Through this project, students will learn basic physics, master the use of sensors and microcontrollers to collect environmental data, and spark their interest in environmental science.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-02-01.png)

## Teaching Goal

Understand the basic concepts of temperature and humidity.

Learn the units of measurement of temperature and humidity and their scientific significance.

Learn how to collect environmental data using the DHT11 temperature and humidity sensor and micro:bit.

## Teaching Preparation

Before you begin teaching, please make sure you have the following necessary materials ready:

| Picture | Name |
| :-: | :-: |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-01-02.png) | classroom Science Kit |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-03.png) | micro:bit V2 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-04.png) | personal computer（PC） |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-05.png) | USB cable |

These materials will provide you with a complete experience and ensure that you can follow through and learn smoothly. If you are ready for the above, we can move on to the next step.

## Teaching Process

### Introduction of the course

Temperature and humidity are two key environmental factors that affect our daily lives. They not only affect our comfort, but are also closely related to our health. In this lesson, we will use the DHT11 temperature and humidity sensor and micro:bit to monitor and analyze the temperature and humidity of our surroundings.

### Exploratory activities

1. learn how to write code to read data from a DHT11 sensor using the programming environment on the micro:bit.

2. Understand the scientific units of temperature and humidity (degrees Celsius and percentages).

3. explore how to display temperature and humidity data in real time on an OLED screen.

4. analyze temperature and humidity data in different environments and discuss their potential impact on human health and daily life.



### Hardware Connection

Connect the DHT11 temperature and humidity sensor to the P1 port of the wukong expansion board and the OLED display to the IIC port of the wukong expansion board.


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-02-06.png)

### Code Programming

***  Adding Software Libraries  ***

Open ``makecode.microbit.org``and click``New Project``.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-01.png)

Click``Extensions``.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-02.png)

Search``iot-environment-kit``，Add the iot-environment-kit repository.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-03.png)

Search``wukong``，Add the wukong software library.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-04.png)

*** sample code ***

1. Initializes the OLED display when the power is turned on.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-02-09.png)

2. The temperature value returned by the DHT11 temperature and humidity sensor connected to the P1 port is stored in the variable Temp and paused for 3000ms; the humidity value returned by the DHT11 temperature and humidity sensor connected to the P1 port is stored in the variable DH and paused for 3000ms.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-02-10.png)

3. Clear the OLED display to show the current temperature on the OLED display and the current humidity on the OLED display.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-02-11.png)


Please refer to Program Link：[https://makecode.microbit.org/_2JEfrXWsWEvw](https://makecode.microbit.org/_2JEfrXWsWEvw)

You can also download the program directly from the following page.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_2JEfrXWsWEvw"
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

click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-01.png)，choose`Connect Device`。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-02.png)

click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-03.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-04.png)

click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-05.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-06.png)

Select `BBC micro:bit CMSIS-DAP` in the pop-up window and then select Connect, and at this point, our micro:bit has connected successfully.![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-07.png)

Click to download the program.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-08.png)

### Teamwork & Presentation

Students are divided into small groups and work together to create and program cases.

Students are encouraged to cooperate, communicate, and share their experiences with each other.

Each group will have the opportunity to present the cases they have produced and demonstrate them to the other groups.

*** Expected results: OLED display shows current ambient temperature and humidity after power on. ***

（GIF动图）

### Summary and Reflection

Review the course content and remind students what knowledge and skills they have acquired.

Lead students to discuss the problems and difficulties they encountered during the production process and how they solved these problems.

Guide students to think about the effects of temperature and humidity on human health and daily life, and how technology can be used to improve the living environment.

## Expanding Knowledge

*** Temperature ***
Temperature is a measure of how hot or cold a substance is.
Common units of temperature are degrees Celsius (°C), degrees Fahrenheit (°F), and Kelvin (K).
Changes in temperature cause substances to expand and contract.
Temperature affects the physical state of a substance, for example, water freezes at 0°C and boils at 100°C.

*** Humidity ***
Humidity is the amount of water vapor in the air.
Common units of humidity are relative humidity (%) and absolute humidity (g/m³).
Humidity affects human comfort, e.g. high humidity makes you feel stuffy and low humidity makes you feel dry.

*** Effects of temperature and humidity on the human body ***
The right temperature and humidity are important for human health.
Too high a temperature can lead to heat stroke and too low a temperature can lead to frostbite.
Excessive humidity can cause the body to feel stuffy and low humidity can cause the body to feel dry.
