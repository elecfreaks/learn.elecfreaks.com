---
sidebar_position: 3
sidebar_label: Case 03 Dynamically adjust the light of the plant growth environment
---
# Case 03 Dynamically adjust the light of the plant growth environment

## Introduction

This course will introduce students to the use and programming of the 8-piece rainbow light ring device of the Octopus series and the programming method of the light sensor of the micro:bit V2. Students will use the 8-piece rainbow light ring to change the light of the plant growth environment, including light intensity and color, and use the micro:bit V2 to measure the light intensity of daylight.

## Teaching objectives

- Understand the connection and programming methods of the 8-piece rainbow light ring of the Octopus series.

- Understand the programming method of the light sensor using the micro:bit V2.

## Teaching preparation

Before starting teaching, make sure you have prepared the following necessary items:

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

In the previous course, we obtained the temperature data and soil moisture data of the plant growth environment and clearly saw the changes in the data through the ThingSpeak platform. However, light is also one of the essential conditions for plant growth. Therefore, in this course, we will use the light sensor of micro:bit V2 to detect the light intensity of sunlight and use 8 rainbow light rings to change the light intensity and light color of plants.

Now, let's get started!

### Exploration activities

- How to control the color and light intensity of 8 rainbow light rings through programming?

- How to use the light sensor of micro:bit V2 to measure the intensity of sunlight?

## Assemble the smart greenhouse

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

Go to "[makecode.microbit.org](https://makecode.microbit.org/)" and click "**New Project**".![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-01.png)



Enter a project name in the pop-up window and click "**Create**".

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-02.png)



In the opened programming interface, click "**Extensions**" in the programming block drawer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-03.png)



After opening the extension page, enter "**iot-environment-kit**" in the search bar, click Search, and select the "**iot-environment-kit**" programming building block library in the search results.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-04.png)



After adding successfully, you can see "**ESP8266_IoT**, **OLED**, **RTC1307**, **Octopus**" in the programming block drawer column.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-05.png)

Similarly, you also need to add the official "**neopixel**" library file.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-16.png)



Similarly, you also need to add the official "**neopixel**" library file.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-17.png)



### Sample Code



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-case03-1.png)

Please refer to the program link: https://makecode.microbit.org/_7ok7XX1XX4rs.

### Download the program

Use a USB data cable to connect the computer and micro:bit V2.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-06.gif)

Please refer to the program link: https://makecode.microbit.org/_7ok7XX1XX4rs.

### Download the program

Use a USB data cable to connect the computer and micro:bit V2.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-07.png)Click ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-08.png) in the lower left corner and select **Connect Device**.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-09.png)

Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-10.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-11.png)

Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-12.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-13.png)



In the pop-up window, select "**BBC micro:bit CMSIS-DAP**", then select "**Connect**". At this point, our micro:bit has been successfully connected.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-14.png)

Click Downloader.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-15.png)

### Teamwork and Presentation

Students are divided into groups to complete the installation and programming of the smart greenhouse.

Encourage students to cooperate, communicate and share experiences with each other.

Each group has the opportunity to show the smart greenhouse they made to other groups and demonstrate.

**Expected effect:** As the light intensity of the plant's surrounding environment changes, the 8 rainbow light rings emit light of different brightness and different colors.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-case3.gif)

### Summary and reflection

Review the course content and remind students what knowledge and skills they have mastered.

Guide students to discuss the problems and difficulties they encountered during the production process and how to solve these problems.

Guide students to think about the optimization and improvement direction of the program, such as what interesting cases can be made using micro:bit.

## Expand knowledge

**Plant light adjustment**: In the process of plant growth, light intensity and wavelength are very important environmental factors, which can directly affect the growth and development of plants. In order to make the plants grow best, the light intensity and wavelength need to be adjusted dynamically.

First of all, for light intensity, it needs to be adjusted according to the type and growth stage of the plant. Generally speaking, plants need stronger light intensity during their vigorous growth period to promote photosynthesis and accelerate plant growth. However, the light intensity cannot be too high, otherwise it will cause photoinhibition of plants and even cause plant death. Therefore, when adjusting the light intensity, it is necessary to decide according to the specific situation of the plant.

Secondly, in terms of wavelength, different plants have different requirements for the wavelength of light. Generally speaking, blue light and red light play an important role in the growth and development of plants. Blue light contributes to the morphological construction and photosynthesis of plants, while red light contributes to the growth and development of plants. Therefore, when adjusting the wavelength, different wavelength combinations need to be selected according to the specific needs of the plants.

In addition, in addition to adjusting the light intensity and wavelength, other environmental factors such as light time and temperature should also be paid attention to. The length of light time will also affect the growth and development of plants, and the temperature will also affect the photosynthesis and respiration of plants. Therefore, while adjusting the light intensity and wavelength, other environmental factors also need to be reasonably controlled.

In summary, in order to achieve the best growth of plants, it is necessary to dynamically adjust the light intensity and wavelength, as well as other related environmental factors. The specific adjustment method needs to be determined according to the type and growth stage of the plant.
