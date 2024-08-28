---
sidebar_position: 2
sidebar_label: Case 02 Establish a real-time dashboard of temperature and humidity in the plant growth environment

---

# Case 02 Establish a real-time dashboard of temperature and humidity in the plant growth environment

## Introduction

This course will introduce students to the WiFi function of the IOT:bit expansion board and the IOT cloud data platform ThingSpeak. Students will use the ThingSpeak platform to view the surrounding temperature and soil humidity data of the plants in the smart plant Dapeng kit in real time.

## Teaching objectives

- Understand the WiFi function of the IOT:bit expansion board and the network programming method.

- Understand how to use the IOT cloud data platform and establish a data dashboard.

## Teaching preparation

Before starting teaching, make sure you have prepared the following necessary items:

|                             图片                             |                名称                |
| :----------------------------------------------------------: | :--------------------------------: |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-014.png) |             micro:bit              |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-020.png) |              IOT:bit               |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-030.png) |          3V Relay Module           |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-040.png) |       3V Vertical Water Pump       |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-050.png) |        8 Rainbow LED Light         |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-060.png) | Octopus Soil Moisture Sensor Brick |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-070.png) |        Octopus Light Sensor        |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-078.png) |          Greenhouse Model          |
|                                                              |                                    |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-090.png) |         Double-sided Tape          |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-011.png) |          Flat Screwdriver          |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-012.png) |                 PC                 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-013.png) |             USB Cable              |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-015.png) |   4P male to female Dupont line    |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-016.png) |           5P母对母杜邦线           |

These items will provide you with a complete experience, ensuring that you can smoothly carry out subsequent operations and learning. If you have prepared the above content, we can proceed to the next step.

## Teaching process

### Course introduction

In the last course, we used the smart greenhouse to obtain the temperature data and soil moisture data of the plant growth environment and displayed them on the micro:bit LED display, but this method cannot view the historical data of temperature and humidity or real-time viewing. In this course, we will use the WiFi function of IOT:bit to upload the temperature and humidity data to the IOT cloud data platform ThingSpeak, so that we can intuitively see the changing trends and historical data of the temperature and humidity of the plant growth environment.

Now, let's get started!

### Exploration activities

- How to correctly establish the ThingSpeak platform data dashboard?

- How to program the use of the WiFi function of IOT:bit?

### ThingSpeak platform to establish a data dashboard

For the use of the ThingSpeak platform and the establishment of a dashboard, please refer to this article: [how-to-use-thinkspeak](https://wiki.elecfreaks.com/en/microbit/wisdom-life/microbit-smart-science-iot-kit/how-to-use-thinkspeak/).

Refer to the following figure:

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-21.png)

### Assemble the smart greenhouse kit

Insert the micro:bit into the IOT:bit expansion board, apply traceless glue on the back of the IOT:bit expansion board, and fix it to the base of the greenhouse model, as shown below:

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-017.png)

Place the 3V water pump and 3V relay as shown in the figure below:

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-018.png)

Pour an appropriate amount of soil into the plant growth pool at the greenhouse base and place the seeds, and insert the soil moisture sensor into the soil.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-019.png)

Fix the 8 rainbow light rings to the top of the transparent cover.![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-021.png)Use traceless glue to stick the light sensor to the top of the transparent cover of the greenhouse model, as shown in the figure below.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-022.png)

Pass the connection wires of the soil moisture sensor, the connection wires of the 8 rainbow light rings, the connection wires of the light sensor, and the 3V water pump hose through the holes of the transparent outer cover of the greenhouse as shown in the figure below, and then lower it:

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-023.png)

Connect the 3V water pump, 3V relay, soil moisture sensor, light sensor and 8 rainbow LED to the IOT:bit expansion board as shown in the following wiring diagram.

|      Component       | IOT:bit corresponding pin |
| :------------------: | :-----------------------: |
|    8 rainbow LED     |            P1             |
| soil moisture sensor |            P2             |
|     light sensor     |            P3             |
|       3V relay       |            P9             |

​			

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-026.png)

Pour an appropriate amount of water into the water tank at the bottom of the greenhouse.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-024.png)

Connect the power supply to the IOT:bit expansion board using the USB cable, then turn on the power switch.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-025.png)

### Coding

#### Add software library

Go to "[makecode.microbit.org](https://makecode.microbit.org/)" and click "**New Project**".

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-01.png)



Enter a project name in the pop-up window and click "**Create**".

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-02.png)



In the opened programming interface, click "**Extensions**" in the programming block drawer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-03.png)



After opening the extension page, enter "**iot-environment-kit**" in the search bar, click Search, and select the "**iot-environment-kit**" programming building block library in the search results.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-04.png)



After adding successfully, you can see "**ESP8266_IoT**, **OLED**, **RTC1307**, **Octopus**" in the programming block drawer column.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-05.png)



### Sample Code



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-case02-1.png)

Please refer to the program link: https://makecode.microbit.org/_0f7cFqb5LdX0.

### Download the program

Use a USB data cable to connect the computer and micro:bit V2.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-06.gif)

After the connection is successful, a drive letter named **MICROBIT** will be recognized on the computer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-07.png)

Click ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-08.png) in the lower left corner and select **Connect Device**.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-09.png)

Click ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-10.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-11.png)

Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-12.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-13.png)



In the pop-up window, select "**BBC micro:bit CMSIS-DAP**", then select "**Connect**". At this point, our micro:bit has been successfully connected.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-14.png)

Click Downloader.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-15.png)

### Teamwork and Presentation

Students are divided into groups to complete the installation and programming of the smart greenhouse.

Students are encouraged to cooperate, communicate and share experiences with each other.

Each group has the opportunity to show the smart greenhouse they made to other groups and demonstrate.

**Expected results: ** Changing the temperature or soil moisture of the smart greenhouse will change the dashboard data on the ThingSpeak platform.

（GIF动图）

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-20.png)

### Summary and reflection

Review the course content and remind students what knowledge and skills they have mastered.

Guide students to discuss the problems and difficulties they encountered during the production process and how to solve these problems.

Guide students to think about the optimization and improvement of the program, such as what interesting cases can be made using micro:bit.

## Expand knowledge

**Introduction to the ThingSpeak platform**: ThingSpeak is a free Internet platform for collecting, analyzing and visualizing real-time data. It allows users to create their own data streams and upload data in various ways, including sensors, devices or other sources. ThingSpeak provides a range of tools for real-time monitoring and analysis of data, and can be integrated with other applications and devices. Users can create their own dashboards and charts to visualize data, and can access data through APIs for customized data analysis and processing. ThingSpeak also supports data storage and sharing, making it easy for users to share their data with others. In short, ThingSpeak is a powerful platform that helps users collect, analyze and share real-time data.
