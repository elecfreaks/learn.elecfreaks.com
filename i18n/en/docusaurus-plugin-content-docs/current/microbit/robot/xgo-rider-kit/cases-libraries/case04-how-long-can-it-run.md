---
sidebar_position: 4
sidebar_label: Case 04 How long can it run
---

# Case 04 How long can it run

## Introduction

In this course, we will guide students to master the method of controlling the movement of XGO Rider and monitoring its battery power through programming. Students will not only learn how to program the different travel speeds of XGO Rider, but also understand how to write code to read the power information, thus laying a solid foundation for subsequent programming tasks.

## Teaching objectives

- Learn to obtain the current power of XGO Rider through programming.

- Understand the basic principles of motors.
- Learn to set the forward and backward movement of XGO Rider through programming.

## Teaching preparation

Before starting teaching, please make sure you have prepared the following necessary materials:

| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-01.png) | micro:bit  V2 |
| :----------------------------------------------------------: | :-----------: |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-19.png) |   XGO-Rider   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-02.png) |   USB Cable   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-03.png) |      PC       |

These materials will provide you with a complete experience and ensure that you can smoothly carry out subsequent operations and learning. If you are ready for the above, we can proceed to the next step.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-read-01.png)**After turning on the XGO Rider, in order to keep the fuselage balanced, it needs to move back and forth slightly. Please do not place the XGO Rider on the edge of the table or in a dangerous place to avoid damage. **

## Teaching process

### Course introduction

In the previous learning process, we have become familiar with how to use programming languages to establish a connection with the XGO Rider and execute basic instructions. Just as the driver needs to understand the status of the vehicle, it is also critical to master the operating status when operating the XGO Rider. In this class, we will lead you to explore how to adjust the movement speed of the XGO Rider through programming and monitor its battery power in real time. This will allow you to control your robot partner more precisely and ensure that it is always in the best working condition. Now, let's embark on this challenging and fun learning journey together.

### Exploration Activities

- How to obtain the power data of XGO Rider through programming and draw the power consumption curve?

- How to use programming to control the movement of XGO Rider?

- How to measure the movement speed of XGO Rider?

### Start Programming

#### Add XGO Rider Software Library

##### 1. Go to "[makecode.microbit.org](https://makecode.microbit.org)" and click **New Project**.



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-04.png)



##### 2. Enter the project name in the pop-up window and click **Create**.



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-05.png)



##### 3. Click **Extension** in the code drawer, enter **XGO Rider** in the search box on the pop-up interface and click the search icon. Click it after the **XGO Rider** software library is displayed.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-07.png)



### Sample Program



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-103.png)



**Reference program link: **https://makecode.microbit.org/_FKt9pHT1iRUr



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-read03.png)**Because XGO Rider's performance mode has forward and backward movement, please place XGO Rider on a spacious flat ground. **

### Download the program

##### 1. Use a USB cable to connect PC and micro:bit V2.



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-09.gif)



##### 2. After the connection is successful, a drive letter named MICROBIT will be recognized on the computer.



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-10.png)



##### 3. Click ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-11.png) in the lower left corner and select **Connect Device**.



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-12.png)



##### 4. Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-13.png)。



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-14.png)



##### 5. Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-15.png)。



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-16.png)



##### 6. Select **BBC micro:bit CMSIS-DAP** in the pop-up window, and then select **Connect**. Now our micro:bit has been successfully connected.



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-17.png)



##### 7. Click **Download Program**.



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-18.png)



### Teamwork and Presentation

- Students are divided into groups to jointly complete the programming of XGO Rider motion control and power acquisition.

- Students are encouraged to cooperate, communicate and share experiences with each other.

- Each group has the opportunity to show their programmed XGO Rider to other groups and demonstrate.

**Expected results:**

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case1004.gif)

### Summary and reflection

- Review the course content and remind students what knowledge and skills they have mastered?

- Guide students to discuss the problems and difficulties they encountered during the production process and how to solve these problems.

- Guide students to think and discuss together how to program to achieve the gradual increase of the speed of XGO Rider in each fixed period of time.

## Expanded knowledge

XGO Rider uses FOC wheel-hub integrated motor. FOC wheel-hub integrated motor refers to a type of motor that combines FOC (Field-Oriented Control, field-oriented control or vector control) technology with wheel-hub motor. FOC technology is an advanced motor control method that optimizes motor performance by precisely controlling the motor magnetic field, allowing the motor to run more efficiently, more smoothly, and provide better dynamic response.

### Features of FOC hub-integrated motor

- **High integration**: The FOC hub-integrated motor installs the motor directly in the hub, reducing the complexity and weight of the transmission system and improving the overall integration.
- **Direct drive**: Since the motor is directly installed inside the hub, there is no need for traditional transmission components such as chains, belts or gears, and direct drive is achieved.
- **High efficiency and energy saving**: The application of FOC technology enables the motor to maintain high efficiency during operation, reducing energy loss, thereby achieving energy saving.
- **Fast response**: FOC control can quickly adjust the output of the motor, making the motor respond faster to changes in speed and torque.
- **Smooth operation**: Since FOC technology can accurately control the magnetic field of the motor, the motor runs more smoothly and with lower noise.

### Technical Advantages

- **Control Accuracy**: FOC technology allows for decoupled control of the motor's torque and magnetic field, which means that the motor's magnetic field and torque can be independently controlled, resulting in higher control accuracy.

- **Strong Adaptability**: The FOC control algorithm can adapt well to load changes and maintain good performance even when the load changes are large.

### Application Fields

Due to the above advantages, FOC wheel-integrated motors have been widely used in electric vehicles, electric bicycles, electric scooters, robots and other fields. Especially in products that pursue high performance and lightweight design, this type of motor provides significant advantages.

In short, FOC wheel-integrated motors combine advanced motor control technology and innovations in structural design to bring higher performance and user experience to modern electric vehicles.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-05-4.gif)
