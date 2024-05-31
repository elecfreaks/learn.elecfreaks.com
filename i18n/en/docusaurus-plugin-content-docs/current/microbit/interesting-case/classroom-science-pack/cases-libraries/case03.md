---
sidebar_position: 3
sidebar_label: Case 3:Exploring the relationship between soil moisture and plant growth
---

# Case 3: Exploring The Relationship Between Soil Moisture And Plant Growth

## Introduction

The purpose of this project is to guide students in exploring the effects of soil moisture on plant growth using the Soil Moisture Sensor in the classroom science kit. By monitoring plant growth under different soil moisture conditions, students will learn the importance of soil moisture on plant growth. Through this project, students will learn basic biology, master the use of sensors and microcontrollers to collect environmental data, and spark their interest in ecology.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-03-01.png)

## Teaching Goal

Understand the importance of soil moisture for plant growth.

Learn how to collect soil moisture data using a soil moisture sensor and micro:bit.

Learn basic methods of data analysis to explore the relationship between soil moisture and plant growth.

## Teaching Preparation

Before you begin teaching, please make sure you have the following necessary materials ready:

| Picture | Name |
| :-: | :-: |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-01-02.png) | classroom科学套装 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-03.png) | micro:bit V2 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-04.png) | personal computer（PC） |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-05.png) | USB cable |

These materials will provide you with a complete experience and ensure that you can follow through and learn smoothly. If you are ready for the above, we can move on to the next step.

## Teaching Process

### Introduction of the course

Plants need water to grow, but how much is the right amount? Too much water and too little water can affect plant growth. In this lesson, we will use a soil moisture sensor and a micro:bit to monitor soil moisture and explore the effects of soil moisture on plant growth.

### Exploratory activities

1. learn how to write code to read data from a soil moisture sensor.

2. design an experiment to compare plant growth under different soil moisture conditions.

3. analyze the experimental data and discuss the effects of soil moisture on plant growth.

### Hardware Connection

Connect the soil moisture sensor to the P1 port of the wukong expansion board and the OLED display to the IIC port of the wukong expansion board.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-03-06.png)

### Code Programming

*** Adding Software Libraries ***

Open``makecode.microbit.org``, and click``New Project``.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-01.png)

Click``Extensions``.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-02.png)

Search``iot-environment-kit``，add iot-environment-kit software library.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-03.png)

Search``wukong``，Add the wukong software library.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-04.png)

*** sample code ***

1. When the power is turned on, the heart icon is displayed to initialize the OLED display.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-03-09.png)

2. The return value from the soil moisture sensor connected to the P1 port is stored in the variable Soil moisture, which shows the current soil moisture on the OLED display.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-03-10.png)

3. Pause for 1000ms to clear the OLED display display.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-03-11.png)


Please refer to Program Connections：[https://makecode.microbit.org/_KYwM1gDxFUxt](https://makecode.microbit.org/_KYwM1gDxFUxt)

You can also download the program directly from the following page.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_KYwM1gDxFUxt"
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

click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-05.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-06.png)

Select `BBC micro:bit CMSIS-DAP` in the pop-up window and then select Connect, and at this point, our micro:bit has connected successfully.

Click to download the program.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-08.png)

### Teamwork & Presentation

Students are divided into small groups and work together to create and program cases.

Students are encouraged to cooperate, communicate and share their experiences with each other.

Each group will have the opportunity to present the cases they have produced and demonstrate them to the other groups.

*** Expected results: The OLED display shows the current soil moisture after power on. ***

（GIF动图）

### Summary and Reflection

Review the course content and remind students what knowledge and skills they have acquired.

Lead students in a discussion of the problems and difficulties they encountered during the production process and how they resolved them.

Guide students to think about the effects of soil moisture on plant growth and how technology can be used to optimize the environment for plant growth.

## Expanding Knowledge

Soil moisture has a significant impact on plant growth, which is directly related to the ability of the plant root system to absorb water, nutrient uptake, and overall plant growth. The following are some of the main effects of soil moisture on plant growth.

**Root water absorption**: Appropriate soil moisture can ensure that the plant root system can effectively absorb water to maintain normal physiological activities.

**Nutrient Absorption**: Water is the medium through which plants absorb nutrients from the soil, and proper soil moisture helps plants better absorb essential minerals and nutrients.

**Soil aeration**: Excessive humidity will result in lower air content in the soil, affecting root respiration, and prolonged wetness may also lead to root rot.

**Impact on soil structure**: Uneven soil moisture can affect the physical structure of the soil, such as caking or erosion, which is detrimental to plant root growth and soil microbial activity.

**GROWTH RATE**: Soil moisture has a direct effect on the growth rate of plants. Suitable moisture can promote rapid growth, while unsuitable moisture may lead to slow growth.
