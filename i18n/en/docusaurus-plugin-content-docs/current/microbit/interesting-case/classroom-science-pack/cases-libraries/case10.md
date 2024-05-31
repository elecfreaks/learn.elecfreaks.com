---
sidebar_position: 10
sidebar_label: Case 10:Simulated Greenhouse Environment
---

# Case 10: Simulated Greenhouse Environment

## Introduction

In this case, students will build a simulated greenhouse environment using the classroom science kit, using temperature and humidity sensors to monitor changes in temperature and humidity. By controlling the temperature conditions in the simulated greenhouse, students will observe and analyze the effects of temperature changes on plant growth to gain a deeper understanding of the dependence of plant growth on ambient temperature.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-10-01.png)

## Teaching Goal

Understand the effects of temperature on plant growth.

Learn to use temperature and humidity sensors to collect environmental data.

Analyze the specific effects of changes in ambient temperature on plant growth.

## Teaching Preparation

Before you begin teaching, please make sure you have the following necessary materials ready:

| Picture | Name |
| :-: | :-: |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-01-02.png) | classroom science kit |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-03.png) | micro:bit V2 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-04.png) | personal computer（PC） |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-05.png) | USB Cable |

These materials will provide you with a complete experience and ensure that you can follow through and learn smoothly. If you are ready for the above, we can move on to the next step.

## Teaching Process

### Introduction of the course

Greenhouses provide a controlled environment for plants to grow, with temperature being one of the most critical factors. In this lesson, we will investigate the effects of temperature on plant growth by building a simulated greenhouse environment.

### Exploratory activities

1. learn the importance of the greenhouse environment for plant growth.

2. explore how to monitor the ambient temperature using a temperature and humidity sensor.

3. design an experiment to record data on plant growth under different temperature conditions.

4. analyze the specific effects of temperature changes on plant growth

### Hardware Connection

Connect the temperature and humidity sensor to the P1 port of the wukong expansion board.

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

1. Display the heart icon, initialize the rainbow lights to 4 and connect to the P16 port, set the lights to white.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-10-09.png)

2. The current temperature is displayed via an LED matrix.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-10-10.png)

Please refer to the program link：[https://makecode.microbit.org/_XF48ydY92TPH](https://makecode.microbit.org/_XF48ydY92TPH)

You can also download the program directly from the following page.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_XF48ydY92TPH"
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

Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-01.png)，Choose`Connect Device`。

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

Each group will have the opportunity to show the cases they have made and demonstrate to the other groups.

*** Expected results: the rainbow light is always on when the machine is turned on, temperature changes in the simulated greenhouse are monitored by the temperature and humidity sensors, and the effects of these changes on plant growth are observed and recorded. ***



### Summary and Reflection

Review the course content and remind students what knowledge and skills they have acquired.

Lead students in a discussion of the problems and difficulties they encountered during the production process and how they were resolved.

Guide students to think about the use of simulated greenhouse environments in modern agriculture.

## Expanding Knowledge

*** Plant response to temperature ***
Plant growth rate, flowering time and fruiting rate are all closely related to temperature. Different plants have different adaptations to temperature and understanding these characteristics is essential for agricultural cultivation.

*** Greenhouse effect ***
A greenhouse raises the internal temperature by trapping solar radiation, creating a warm and stable environment for plants to grow.

*** Environmental Monitoring ***
In modern agriculture, environmental monitoring is key to ensuring healthy crop growth. By monitoring environmental factors such as temperature, humidity, and light, farmers can make timely adjustments to greenhouse conditions to optimize crop growth.
