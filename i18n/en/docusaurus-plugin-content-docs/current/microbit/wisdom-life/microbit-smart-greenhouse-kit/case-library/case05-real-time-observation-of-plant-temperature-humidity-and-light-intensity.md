---
sidebar_position: 5
sidebar_label: Case 05 Real-time observation of plant temperature, humidity and light intensity

---

# Case 05 Real-time observation of plant temperature, humidity, and light intensity

## Introduction

This course will introduce students to the programming method of real-time observation of soil temperature, humidity, and light intensity in the plant growth environment through the IOT platform ThingSpeak.

## Teaching objectives

- Understand how to set multiple parameters on the ThingSpeak platform.

- Learn to simultaneously detect temperature data, soil humidity data, and light intensity data of the plant growth environment.

## Teaching preparation

Before starting teaching, please make sure you have prepared the following necessary items:

|                           Picture                            |                Name                |
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
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-016.png) |  5P female to female Dupont cable  |

These items will provide you with a complete experience, ensuring that you can smoothly carry out subsequent operations and learning. If you are ready for the above, we can proceed to the next step.

## Teaching process

### Course introduction

In the previous courses, we gradually learned how to obtain the temperature data, soil moisture data, and sunlight intensity data of the plant growth environment through programming, and change the soil moisture and light intensity of the plant through a 3V water pump and 8 rainbow light rings, and learned to view the temperature data and soil moisture data through the IOT platform ThingSpeak. In this class, we will combine all the knowledge points learned in the previous lessons and observe the data that needs to be detected during the plant growth process through programming and display it on the ThingSpeak platform.

Now, let's get started!

### Exploration activities

- How to obtain all the data that needs to be detected during the plant growth process through programming?

- How to use the ThingSpeak platform to view all the detected data?

### Assemble the smart greenhouse

Insert the micro:bit into the IOT:bit expansion board, apply traceless glue on the back of the IOT:bit expansion board, and fix it to the base of the greenhouse model, as shown below:

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-017.png)

Place the 3V water pump and 3V relay as shown in the figure below:

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-018.png)

Pour an appropriate amount of soil into the plant growth pool at the greenhouse base and place the seeds, and insert the soil moisture sensor into the soil.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-019.png)

Fix the 8 rainbow light rings to the top of the transparent cover.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-021.png)

Use traceless glue to stick the light sensor to the top of the transparent cover of the greenhouse model, as shown in the figure below.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-022.png)

Pass the connection wires of the soil moisture sensor, the connection wires of the 8 rainbow light rings, the connection wires of the light sensor, and the 3V water pump hose through the holes of the transparent outer cover of the greenhouse as shown in the figure below, and then lower it:

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-023.png)

Connect the 3V water pump, 3V relay, soil moisture sensor, light sensor and 8 rainbow LED to the IOT:bit expansion board as shown in the following wiring diagram.

|      Components      | IOT:bit corresponding pin |
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



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-case05-1.png)

Please refer to the program link: https://makecode.microbit.org/_a06HbiXK1767.

### Download the program

Use a USB data cable to connect the computer and micro:bit V2.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-06.gif)

After the connection is successful, a drive letter named **MICROBIT** will be recognized on the computer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-07.png)

Click ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-08.png) in the lower left corner and select **Connect Device**.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-09.png)

Click ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-10.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-11.png)

Click ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-12.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-13.png)



In the pop-up window, select "**BBC micro:bit CMSIS-DAP**", then select "**Connect**". At this point, our micro:bit has been successfully connected.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-14.png)

Click Downloader.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-15.png)

### ThingSpeak platform to establish a data dashboard

For the use of the ThingSpeak platform and the establishment of a dashboard, please refer to this article: [how-to-use-thinkspeak](https://wiki.elecfreaks.com/en/microbit/wisdom-life/microbit-smart-science-iot-kit/how-to-use-thinkspeak/).

Refer to the following figure:

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-18.png)

### Teamwork and Presentation

Students are divided into groups to complete the installation and programming of the smart greenhouse.

Encourage students to cooperate, communicate and share experiences with each other.

Each group has the opportunity to show the smart greenhouse they made to other groups and demonstrate.

**Expected effect:** When the soil moisture value of the plant growth is less than 200, the water pump starts to pump water and deliver it to the plant growth pool.

（GIF动图）

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-19.png)

- ### Summary and reflection

  Review the course content and remind students what knowledge and skills they have mastered.

  Guide students to discuss the problems and difficulties they encountered during the production process and how to solve these problems.

  Guide students to think about the optimization and improvement of the program, such as what interesting cases can be made with micro:bit.

  ## Expand knowledge

  ThingSpeak is an Internet of Things (IoT) platform that allows users to collect, analyze, and distribute data from sensors. It is particularly suitable for developers and enthusiasts who want to quickly set up and test IoT applications without building a complete backend service themselves.

  ### Main functions:

  1. **Data collection**: Collect data from various sensors through HTTP POST requests or using MATLAB API.

  2. **Data storage**: Store the collected data in a "channel" in the cloud.

  3. **Data analysis**: Use MATLAB or other tools to analyze data in real time.

  4. **Data visualization**: Create charts and dashboards to display data.

  5. **Event triggering**: When the data reaches a certain threshold, ThingSpeak can be configured to send an email, SMS, or perform other actions.
  6. **Data Sharing**: Data in a channel can be shared publicly or kept private.

  ### Use cases:

  - **Environmental Monitoring**: Monitor temperature, humidity, etc.

  - **Home Automation**: Monitor and control smart home devices.

  - **Industrial Monitoring**: Monitor machine status, production line efficiency, etc.

  - **Health Monitoring**: Track personal health indicators such as heart rate, number of steps, etc.
