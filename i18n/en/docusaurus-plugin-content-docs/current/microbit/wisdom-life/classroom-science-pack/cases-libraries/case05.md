---
sidebar_position: 5
sidebar_label: Case 5:Exploring force interactions
---

# Case 5: Exploring Force Interactions

## Introduction

The purpose of this project is to guide students in exploring force interactions using the rudder and micro:bit from the CLASSROOM science kit. By programming the servos to control the rotation of the servos and changing the motion of the servos through keystroke inputs, students will learn about the relationship between force and motion and the principles of Newton's third law - action and reaction forces. This program will deepen students' understanding and application of fundamental concepts in physics.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-05-01.png)

## Teaching Goal

Understand force interactions and Newton's third law.

Learn how to control the motion of a servo using micro:bit.


## Teaching Preparation

Before you begin teaching, please make sure you have the following necessary materials ready:

| 图片 | 名称 |
| :-: | :-: |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-01-02.png) | classroom science kit |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-03.png) | micro:bit V2 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-04.png) | Personal computer （PC） |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-05.png) | USB cable |

These materials will provide you with a complete experience and ensure that you can follow through and learn smoothly. If you are ready for the above, we can move on to the next step.

## Teaching Process

### Introduction of the course

A force is the result of an interaction between objects. When we push on an object, it gives us an equal reaction force. In this lesson, we will explore force interactions by controlling the rotation of the rudder.

### Exploratory activities

1. learn how to use the programming environment on the micro:bit to write code to control the rotation of a servo.

2. understand the basic principles of servo rotation and force interactions.


### Hardware Connection

Connect the servo to the S1 interface of the wukong expansion board.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-05-06.png)

### Code Programming

*** Adding Software Libraries ***

Open ``makecode.microbit.org`` and click ``New Project``.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-01.png)

Click on ``Extensions``.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-02.png)

Search for ``iot-environment-kit`` to add the iot-environment-kit repository.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-03.png)

Search for ``wukong`` and add the wukong software library.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-04.png)

*** sample code ***

1. When the power is turned on, the Yes icon is displayed.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-05-09.png)

2. When key A is pressed, set the 180° servo connected to S1 to rotate to the 0 degree position and display the big heart icon.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-05-10.png)

3. When button B is pressed, set the 180° servo connected to S1 to rotate to the 180° position, displaying the small heart icon.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-05-11.png)


Please refer to the program link：[https://makecode.microbit.org/_iE0FRyLoA7ak](https://makecode.microbit.org/_iE0FRyLoA7ak)

You can also download the program directly from the following page.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_iE0FRyLoA7ak"
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

Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-03.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-04.png)

Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-05.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-06.png)

Select `BBC micro:bit CMSIS-DAP` in the pop-up window and then select Connect, and at this point, our micro:bit has connected successfully.![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-07.png)

Click to download the program.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-08.png)

### Teamwork & Presentation

Students are divided into small groups and work together to create and program cases.

Students are encouraged to cooperate, communicate and share their experiences with each other.

Each group will have the opportunity to present the case they have made and demonstrate it to the other groups.

*** Expected results: observing the interaction of forces by controlling the rotation of a servo with the push of a button. ***

（GIF动图）

### Summary and Reflection

Review the course content and remind students what knowledge and skills they have acquired.

Lead students in a discussion about the problems and difficulties they encountered during the production process and how they solved them.

Guide students to think about real-life applications of force interactions, such as rocket launches and rowing boats.

## Expanding Knowledge

**Forces**: A force is an action of an object on an object that can change the state of motion of the object, including the speed and direction of motion.

**Force Interaction**: according to Newton's third law, forces interact, i.e., action and reaction forces always occur in pairs, are equal in magnitude and opposite in direction.

**Types of Forces**: In the experiment of pushing a wooden block, the rudder exerts a pushing force on the block, which is a contact force. There are also non-contact forces such as gravity and magnetism.

**Effects of forces**: forces can have two effects: one is to change the shape of an object and the other is to change the state of motion of an object.

**Relation between force and motion**: force is the cause of changing the state of motion of an object, but the object will remain in its original state of rest or uniform linear motion if it is not subjected to a force, which is the content of Newton's first law.

**Energy Conversion**: a servo converts electrical energy into mechanical energy to propel a wooden block, an example of energy conversion.

**Force Interaction and Everyday Phenomena**: force interaction is not only found in the abstract concepts of physics, it is ubiquitous in our daily lives. For example, when we walk, our feet exert a backward force on the ground, and according to Newton's third law, the ground also gives our feet a force of equal magnitude but in the opposite direction, and this reaction force propels us forward.
