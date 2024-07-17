---
sidebar_position: 5
sidebar_label: Case 05 Lunar Exploration Vehicle
---

# Case 05: Lunar Exploration Vehicle

## Introduction

The purpose of this lesson is to introduce students to the components of the Lunar Exploration Vehicle (LEM) and the knowledge associated with performing missions on the Moon. Students will use the micro:bit Space Science Kit to learn how to write a program to control the operation of the rover.



## Instructional Objectives

- Understand how the Moon Exploration Rover is constructed and how it operates.
- To gain knowledge of the tasks performed by the Lunar Exploration Rover.
- Learn how to build and program the Lunar Explorer.

##  Preparation

Before starting the lesson, please make sure you have prepared the following necessary materials:

| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-01.png) | micro:bit  V2                     |
| ------------------------------------------------------------ | --------------------------------- |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-05.png) | Nezha Breakout Board V2           |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-06.png) | PlanetX Smart Motor               |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-planetx040.png) | PlanetX Sonar:bit         |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-planetx050.png) | PlanetX Line Following Sensor |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-planetx070.png) | PlanetX UV sensor                 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-04.png) | Bricks Pack                       |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-02.png) | USB cable                         |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-03.png) | Computer                          |

These materials will provide you with a complete experience and ensure that you can follow through and learn smoothly. If you are ready for the above, we can move on to the next step.

## Teaching and Learning Process

### Introducing the Lesson

Have you ever thought about the components of the Lunar Exploration Vehicle and how it works? In this lesson, we'll explore how to build a lunar rover from building blocks and how to control the operation of a lunar rover through a graphical program.

Ready to explore the world of space travel with the micro:bit Space Creation Kit? Now, let's embark on this fun learning journey!

### Exploration Activities

- How do you build a Lunar Exploration Vehicle?
- What if I write a simple program to make the Lunar Rover run?
- How can the Moon Rover avoid the craters and debris on the Moon?

### Case Study

Based on the existing forms and compositions of lunar rovers, please open up the discussion and rationalize the design of a building block lunar rover.

#### Example





### Code Programming

#### Add a software library

Go to“[makecode.microbit.org](https://makecode.microbit.org)”，and click **New Project**.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-07.png)

Enter the project name in the pop-up window and click **Create**.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-11.png)

Click on **Extension** in the code drawer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-09.png)

Type **nezha2** in the popup and click on the search icon, click on the **nezha2** repository when it is displayed. Load the **PlanetX** library in the same way.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-10.png)



### Example program



Refer to the program link:

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-read03.png)**Please adjust the speed of the Planet Series Smart Block motor appropriately for your classroom. **

### Download the program

Use the USB cable to connect the PC and the micro:bit V2.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual03.gif)

After a successful connection, a disk drive named MICROBIT will be recognized on the computer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual06.png)

Click on the bottom left corner of the ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual07.png)，and select **Connect Device**.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual11.png)

Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual08.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual12.png)

Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual09.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual13.png)

Select **BBC micro:bit CMSIS-DAP** in the popup window, and then select **Connect**, so far, our micro:bit has been connected successfully.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual14.png)

Click **Download Program**.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual10.png)



### Teamwork and Presentation

Students are divided into teams and work together to build and program the Lunar Exploration Vehicle.

Students are encouraged to collaborate, communicate and share their experiences with each other.

Each team will have the opportunity to show the other teams and demonstrate the Lunar Expedition Rover they have built.

**Expected Results:**.

（GIF动图）

### Summarize and Reflect

Review the lesson content to remind students what knowledge and skills they have acquired.

Lead students in a discussion about the problems and difficulties they encountered during the production process and how they solved them.

Guide students to think about the direction of optimization and improvement of the Lunar Exploration Vehicle, such as what other interesting cases can be made.

## Extended Knowledge

Lunar exploration vehicles, also known as lunar rovers or lunar rovers, are automated or semi-automated vehicles for exploration on the surface of the Moon. These vehicles are designed to perform a range of scientific tasks in the harsh environment of the Moon. Here's what you need to know about the composition of the Lunar Exploration Vehicle, the missions it performs on the Moon, and related knowledge:

### Composition

1. The main components of the Lunar Exploration Vehicle include:

   1. **Mobile platform**: usually consisting of six or four wheels equipped with an independent suspension system to adapt to the uneven terrain of the lunar surface.
   2. **Energy system**: most lunar rovers use solar panels as their primary energy source, and some models may also be equipped with auxiliary batteries. For prolonged nighttime operations, some lunar rovers use radioisotope thermoelectric generators (RTGs).
   3. **Scientific Instruments**: These include cameras, spectrometers, microscopes, soil analyzers, magnetometers, radars, etc., which are used to gather physical, chemical, and geological information about the lunar surface.
   4. **Communication system**: used to communicate with control centers on Earth to transmit data and receive commands.
   5. **Navigation systems**: including GPS alternative technologies, visual navigation systems, etc., for navigation under autonomous or remote control.
   6. **Mechanical arms**: some lunar rovers are equipped with mechanical arms for sampling or performing other delicate operations.

###  Missions performed

1. The main tasks of the Lunar Exploration Rover include:

   1. **Topographic mapping**: detailed mapping of the lunar surface using on-board cameras and radar equipment.
   2. **Sample Analysis**: collect lunar soil and rock samples for on-site analysis to understand the geological history and composition of the Moon.
   3. **Environmental monitoring**: Measure radiation levels, temperature changes and other environmental parameters on the Moon.
   4. **Resource exploration**: search for water ice, mineral resources, etc., and assess the potential value of the Moon and the possibility of future base construction.
   5. **Technology validation**: testing new technologies, such as autonomous navigation and energy supply systems, in preparation for future lunar bases and human exploration.

### Related Knowledge

- **Jade Rabbit Series**: Lunar rovers from China's Chang'e-3 and Chang'e-4 missions that explored the front and back of the Moon, respectively.
- **VIPER**: NASA's planned lunar rover designed to explore water resources near the Moon's south pole.
- **India's Pragyan**: a lunar rover from India's Moon Ship III mission designed to study the material composition and environment of the lunar surface.
- **Challenges of the Lunar Rover** : The rover had to face environmental problems such as extreme temperature differences, microgravity, high doses of radiation and dust cover.

Lunar rover design and mission planning need to take into account the unique conditions of the Moon, including the lack of atmospheric protection, extreme temperature differences between day and night, and the lack of satellite navigation signals from Earth, making every step challenging and technologically innovative.
