---
sidebar_position: 4
sidebar_label: Line Patrol
---

# Case 04: Line Patrol

## Introduction

This course aims to introduce students to the principle of line patrol and the working principle of line patrol sensors. Students will use TPbot Edu to learn how to write programs to control the car to travel along the line.

## Teaching objectives

Understand the working principle of line patrol sensors

Understand how the car patrols the line

Learn to use Makecode software to create programs to control the car's line patrol.

## Teaching preparation

Before starting teaching, make sure you have prepared the following necessary materials:

| Picture | Name | Number | Note |
|---|---|---|---|
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-tpbot-edu/TPBot_tianpeng_edu.png)| TPbot Edu | 1 |   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/USB-data-cable.png) | USB Cable | 1 |   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit.png) | micro:bit | 1 | Prepare Yourself |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/pc.png) | PC | 1 | Prepare Yourself |

## Course Introduction

Welcome back to our Smart Car Programming Course! In the previous lessons, we learned how to control the driving distance and steering angle of the smart car. Today we will enter a new field: the working principle of the line patrol sensor and how to make the car follow the line.

**The mysterious world of line patrol sensors**
For smart cars, line patrol sensors are like its eyes, helping it to identify and follow the predetermined path. Are you curious about how these sensors work? How do they help the car "see" and follow the line? In this lesson, we will unveil the mystery of line patrol sensors and have a deep understanding of how they work.

**The secret of car line patrol driving**
After understanding the working principle of line patrol sensors, we will explore how the car uses these sensors to follow the line. We will learn how the car adjusts its driving direction through the information collected by the sensors to ensure that it can move accurately along the line.

**Use Makecode software to program and control**
Finally, we will practice and learn how to use Makecode software to create a program to control the car to follow the line. Makecode is an intuitive and easy-to-use programming platform that will help us simplify the programming process and allow us to quickly write line-following programs for the car.

## Exploration Activities

How does the line-following sensor work?

How to make the car follow the line?

## Software

[Microsoft Makecode](https://makecode.microbit.org/#)

## Programming

Click `Advanced` in the code drawer of MakeCode to see more code options.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-02.png)

In order to program TPbot Edu, we need to add an extension library. Find `Extensions` at the bottom of the code drawer and click it. A dialog box will pop up, search for `tpbot`, and then click to download this code library.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-tpbot/images/TPBot_tianpeng_case_01_03.png)


## Sample Program

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-tpbot-edu/TPBot_tianpeng_edu_case_04_07.png)

### Program

Please refer to the program link: [https://makecode.microbit.org/_JTVgLEhW6DCU](https://makecode.microbit.org/_JTVgLEhW6DCU)

You can also download the program directly from the following website.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_JTVgLEhW6DCU"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>


## Conclusion

When powered on, the car patrols the line.

## Extended knowledge

**Working principle of line patrol sensor**

The working principle of line patrol sensor is actually quite interesting. It is like a robot's eyes, helping it to identify and move along a specific path. Let me explain it to you in detail:

**Basic principle**

The working principle of line patrol sensor is based on the characteristics of reflected light. It emits light (usually infrared) and then detects the reflection of these lights. When the sensor detects a black line on the ground, the black absorbs light and the reflected light is less, so the sensor will output a low-level signal; conversely, if a white line or background is detected, the white reflects more light, so the sensor will output a high-level signal.

**Structural composition**

Line patrol sensor usually consists of a set of infrared transmitters and receivers, which are arranged almost in parallel. When the line mark passes through the gap between the transmitter and the receiver, the receiver directly receives the reflected light.

**How to use**

In actual applications, the line patrol sensor is fixed to the bottom of the robot, usually placed vertically or horizontally to avoid interference from other factors. As the robot moves along the line, the line patrol sensor will continuously detect the line markings on the ground and output the corresponding electrical signals to tell the robot which direction it should go.

**Advantages and Features**

The main advantages of line patrol sensors are low cost, ease of use and high-precision detection capabilities. They are very useful in the fields of industrial automation, robot control and autonomous driving.

Through these principles, line patrol sensors can help robots or automated equipment accurately determine whether they are on the predetermined line, so as to make corresponding actions, such as adjusting direction or stopping movement. In this way, the robot can automatically walk and navigate along a specific line.****
