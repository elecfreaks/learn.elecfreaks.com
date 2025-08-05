---
sidebar_position: 2
sidebar_label: Fixed Distance Cruise
---

# Case 02: Fixed Distance Cruise

## Introduction

This course aims to introduce students to the concepts of graphical programming and encoder motors. Students will use TPbot Edu to learn how to write programs to control the distance traveled by the car.

## Teaching Objectives

Understand the basic concepts of encoder motors.

Learn to use Makecode software to create programs to control the distance traveled by the car.

## Teaching Preparation

Before starting teaching, please make sure you have prepared the following necessary materials:

| Picture | Name | Number | Note |
|---|---|---|---|
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-tpbot-edu/TPBot_tianpeng_edu.png)| TPbot Edu | 1 |   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/USB-data-cable.png) | USB Cable | 1 |   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit.png) | micro:bit | 1 | Prepare Yourself |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/pc.png) | PC | 1 | Prepare Yourself |

## Course Introduction

In this lesson, we will explore how to control the distance of TPbot Edu through graphical programming. Are you curious about how to use programming to accurately control the distance a car travels?

Now, let's get to know TPbot Edu. It is a special car with an encoder motor that can accurately control the distance it travels. This means that we can write a program to make it travel a specific distance, whether it is 100 cm or 10 cm, we can control it very accurately.

In today's class, we will learn how to write a program to accurately control the distance traveled and a program to accurately control the speed of travel, and verify whether our program works through practice.

Now, let's get hands-on! Are you ready to explore the world of graphical programming with TPbot Edu? Let's start this creative and fun learning journey together!

## Exploration Activities

How to use the graphical programming module to control the distance traveled by the car?

What are the practical application scenarios of the technology of accurately controlling the distance traveled?

## Software

[Microsoft MakeCode](https://makecode.microbit.org/#)

## Programming

Click `Advanced` in the code drawer of MakeCode to see more code options.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-02.png)

In order to program TPbot Edu, we need to add an extension library. Find `Extensions` at the bottom of the code drawer and click it. A dialog box will pop up, search for `tpbot`, and then click to download this code library.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-tpbot/images/TPBot_tianpeng_case_01_03.png)



## Sample program

Drag a block called "Move forward 0 cm" from the block drawer and put it into "When button A is pressed", and change parameter 0 to 100.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-tpbot-edu/TPBot_tianpeng_edu_case_01_08.png)

### Program

Please refer to the program link: [https://makecode.microbit.org/_hhAaqM30JU66](https://makecode.microbit.org/_hhAaqM30JU66)

You can also download the program directly from the following website.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_hhAaqM30JU66"
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

When button A is pressed, the Tianpeng smart car moves forward 100 cm and then stops automatically.

## Extended knowledge

**How encoder motors work**

Imagine that you have a very special toy car that can not only move forward and backward, but also tell you exactly how many turns it has made or which direction it is facing now. This toy car is like an encoder motor.

**Motor part**: There is a motor inside the encoder motor, just like the motor in the toy car, and when you give it energy, it will turn. This rotation can be in circles or in small steps.

**Encoder**: Another special thing about the encoder motor is that it has a small device called an encoder. This encoder is like a counter. Every time the motor turns, it counts and tells you how much the motor has turned.

**Control signal**: You can send instructions to the motor to tell it how many turns it needs to turn or where to turn. It's like you gently push the toy car with your hand to tell it where to go.

**Feedback signal**: When the motor turns, the encoder tells the controller (like your brain) how much the motor has turned. This way, you can know if the motor is rotating exactly as you instructed.

**Precise control**: Because the encoder can accurately count the rotation of the motor, you can make the motor rotate very precisely to the position you want, just like you can park a toy car exactly where you want it to stop.

In this way, the encoder motor can be controlled to rotate very accurately, which is very useful in many machines and equipment that require precise control, such as robot arms or precise machine manufacturing.
