---
sidebar_position: 4
sidebar_label: Case 4:Exploring the relationship between water and plant growth
---

# Case 4: Exploring the relationship between water and plant growth

## Introduction

The purpose of this project is to guide students in creating an automatic watering device using the soil moisture sensor, relay module, and pump from the classroom science kit in conjunction with the micro:bit to explore the effects of water on plant growth. By monitoring soil moisture and automatically adjusting the water supply, students will learn about the importance of water to plant growth and learn basic agricultural science. This project will deepen students' understanding of physics, biology, and automation technology.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-04-01.png)

## Teaching Goal

Understand the necessity of water for plant growth.

Learn how to control a water pump using soil moisture sensors and relays.

Acquire basic skills in making an automatic watering system.

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

Water is the source of life and is vital for plant growth. In this lesson, we will explore the effects of water on plant growth and create an automatic watering device to keep plants hydrated for growth.

### Exploratory activities

1. learn how to write code to read data from a soil moisture sensor using the programming environment on the micro:bit.

2. understand the scientific units of soil moisture and its effect on plant growth.

3. explore how to use a relay to control the switching on and off of a pump to automate watering.

4. design an experiment to record plant growth under different soil moisture conditions.

5. analyze the experimental data and discuss how automatic watering promotes plant growth.

### Hardware Connection

Connect the soil moisture sensor to the P1 port of the wukong expansion board, the relay to the P2 port of the wukong expansion board, the water pump to the relay, and the OLED display to the IIC port of the wukong expansion board.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-04-06.png)

### Code Programming

***  Adding Software Libraries ***

Click``makecode.microbit.org``, and click``New Project``.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-01.png)

Click``Extensions``.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-02.png)

Search``iot-environment-kit``，Add the iot-environment-kit repository.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-03.png)

Search for ``wukong`` and add the Wukong software library.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-04.png)

***sample code ***

1. Initializes the OLED display when the power is turned on.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-04-09.png)

2. Stores the return value of the soil moisture sensor connected to port P1 into the variable Soil moisture.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-04-10.png)

3. When the value of the variable Soil moisture is less than 25, set the relay connected to the P2 port to turn on the pump, otherwise set the relay connected to the P2 port to turn off the pump;

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-04-11.png)

4. Pause for 1000ms to clear the OLED display display and show the current soil moisture on the OLED display.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-04-12.png)

Please refer to the program link：[https://makecode.microbit.org/_b2vP7K5W6KRd](https://makecode.microbit.org/_b2vP7K5W6KRd)

You can also download the program directly from the following page.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_b2vP7K5W6KRd"
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

click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-03.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-04.png)

click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-05.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-06.png)


Select `BBC micro:bit CMSIS-DAP` in the pop-up window and then select Connect, and at this point, our micro:bit has connected successfully.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-07.png)

Click to download the program.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-08.png)

### Teamwork & Presentation

Students are divided into small groups and work together to create and program cases.

Students are encouraged to cooperate, communicate and share their experiences with each other.

Each group will have the opportunity to show the cases they made and demonstrate to other groups.

*** Expected results: the OLED display shows the current soil moisture after powering on, and if the soil moisture is too low, the pump is automatically turned on to water. ***

（GIF动图）

### Summary and Reflection

Review the course content and remind students what knowledge and skills they have acquired.

Lead students in a discussion about the problems and difficulties they encountered during the production process and how they solved these problems.

Guide students to think about the importance of water for plant growth and how technology can be used to optimize the environment for plant growth.

## Expanding Knowledge

Water is vital to plant growth, and it plays several important roles throughout a plant's life cycle.

**Nutrient Transportation**: water helps plants absorb nutrients from the soil and transport those nutrients to various parts of the plant, such as leaves and fruits.

**Photosynthesis**: In photosynthesis, plants use water and sunlight to make the sugar and oxygen they need. Without water, this process cannot take place.

**Structural Support**: water also helps plants maintain their structure, allowing their stems and leaves to stay stiff.

**Temperature regulation**: Plants regulate their temperature by releasing water vapor through stomata on their leaves, which acts as a “sweat” for the plant and helps them stay cool in hot weather.

**Effects of Too Much and Not Enough**: Too much or too little water is not good for plant growth. Too much water can lead to root rot, while too little water can dry out plants and affect their growth and health.

**Environmental Protection**: By absorbing and storing water, plants help maintain ecological balance and environmental protection, such as reducing flooding and providing habitat.
