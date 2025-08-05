---
sidebar_position: 1
sidebar_label: Driving Control
---

# Case 01: Driving Control

## Introduction

In this project, we will use different methods to control the driving of TPbot Edu.

## Teaching Objectives

Understand the driving control of TPbot Edu
Master the basic programming skills of using micro:bit to control TPbot Edu.

## Teaching Preparation

Before starting the teaching, please make sure you have prepared the following necessary materials:

| Picture | Name | Number | Note |
|---|---|---|---|
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-tpbot-edu/TPBot_tianpeng_edu.png)| TPbot Edu | 1 |   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/USB-data-cable.png) | USB Cable | 1 |   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit.png) | micro:bit | 1 | Prepare Yourself |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/pc.png) | PC | 1 | Prepare Yourself |

## Course Introduction

In this class, we will explore how to control TPbot Edu to drive forward through a graphical program. Have you ever thought about how to use programming to control a smart racing car? Programming is a way to make a computer or robot perform tasks according to our instructions. Today, we will learn how to use graphical programming to control the Tianpeng smart car.

Now, let's start this interesting learning journey together! Are you ready to explore the world of graphical programming with TPbot Edu?

## Exploration Activities

How to write a simple program to make the car drive forward?

What effect does adjusting the speed and driving time parameters have on the movement of the car?

In addition to driving forward, what other actions can be controlled by programming the car?

## Software

---

[Microsoft MakeCode](https://makecode.microbit.org/#)

## Programming

---

Click `Advanced` in the code drawer of MakeCode to view more code options.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-02.png)

In order to program TPbot Edu, we need to add an extension library. Find `Extensions` at the bottom of the code drawer and click it. A dialog box will pop up, search for `tpbot`, and then click to download this code library.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-tpbot/images/TPBot_tianpeng_case_01_03.png)

## Sample program 1

Drag a block for setting the left and right wheel speeds from the block drawer and put it into the `When power on` block, and set all parameters to 100.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-tpbot/images/TPBot_tianpeng_case_01_04.png)

### Program

Please refer to the program link: [https://makecode.microbit.org/_0r5C5L029L9m](https://makecode.microbit.org/_0r5C5L029L9m)

You can also download the program directly from the following website.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_0r5C5L029L9m"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>
---

## Conclusion

TPbot Edu will keep moving forward

## Sample program 2

Drag a block called `Forward speed 100% for 0 seconds` from the block drawer and put it into the `When powered on` block, and set the parameters to 100 speed and 3 seconds.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-tpbot/images/TPBot_tianpeng_case_01_05.png)

### Program

Please refer to the program link: [https://makecode.microbit.org/_XXH3yP66oRRp](https://makecode.microbit.org/_XXH3yP66oRRp)

You can also download the program directly from the following website.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_XXH3yP66oRRp"
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

TPbot Edu moves forward at full speed for three seconds and then stops

## Sample program three

Drag a block with a forward speed of 100% from the block drawer and put it in the block when button A is pressed, then set a pause of 2000ms, then drag a block with a stop immediately from the block drawer and put it in the block when button A is pressed.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-tpbot/images/TPBot_tianpeng_case_01_06.png)

### Program

Please refer to the program link: [https://makecode.microbit.org/_7YPHM8Tkfbka](https://makecode.microbit.org/_7YPHM8Tkfbka)

You can also download the program directly from the following website.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_7YPHM8Tkfbka"
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

When button A is pressed, TPbot Edu moves forward at full speed for two seconds and then stops.
