---
sidebar_position: 8
sidebar_label: Finding a light source
---

# Case 08: Finding a light source

## Introduction

This course aims to guide students to create a case of finding a light source, combining the functions of micro:bit to create a case.

## Teaching objectives

Combining the functions of micro:bit to achieve more extended cases

## Teaching preparation

Before starting teaching, please make sure you have prepared the following necessary materials:

| Picture | Name | Number | Note |
|---|---|---|---|
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-tpbot-edu/TPBot_tianpeng_edu.png)| TPbot Edu | 1 |   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/USB-data-cable.png) | USB Cable | 1 |   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit.png) | micro:bit | 1 | Prepare Yourself |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/pc.png) | PC | 1 | Prepare Yourself |

## Course Introduction

Welcome to this new course full of challenges and innovations - Finding Light Sources. In this lesson, we will guide the smart car to complete a special task: automatically find and drive towards a light source in a dark environment.

## Exploration Activities

There is no light sensor on the micro:bit, how does it sense the ambient light intensity?

Programming Logic: Master how to write a program to let the car adjust its driving direction according to the change of light intensity.

## Software

[Microsoft MakeCode](https://makecode.microbit.org/#)

## Programming

Click `Advanced` in the code drawer of MakeCode to view more code options.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-tpbot/images/TPBot_tianpeng_case_01_02.png)

In order to program TPbot Edu, we need to add an extension library. Find `Extensions` at the bottom of the code drawer and click it. A dialog box will pop up, search for `tpbot`, and then click to download this code library.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-tpbot/images/TPBot_tianpeng_case_01_03.png)


## Sample Program

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-tpbot-edu/TPBot_tianpeng_edu_case_08_07.png)

### Program

Please refer to the program link: [https://makecode.microbit.org/_8Wm6oz6v0Vku](https://makecode.microbit.org/_8Wm6oz6v0Vku)

You can also download the program directly from the following website.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_8Wm6oz6v0Vku"
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

When powered on, the car rotates in place, and when a light source appears in the environment, the car moves towards the light source.

## Extended Knowledge

**How does micro:bit sense ambient light intensity without a light sensor? **

The principle of micro:bit sensing ambient light intensity is actually achieved through its LED matrix. Although micro:bit does not have a dedicated light sensor, its LED matrix can be used as an output device to display images and as an input device to measure light values. Specifically, the LED matrix of micro:bit is used to sense the ambient light by repeatedly converting some LED drivers into inputs and sampling the voltage decay time, which is roughly proportional to the level of ambient light.

LEDs are usually used as light emitters, but they are also basic photodiodes that can be used as light detectors. When the LED driver circuit is incorporated, its function can be well demonstrated without any additional hardware.

The micro:bit screen is composed of a 5x5 LED dot matrix. Running software repeatedly updates this matrix at high speed so that it is within the user's field of view and no flash is detected. This LED matrix is also used to sense ambient light by repeatedly switching some LED drive pins to input and sampling the voltage decay time.
.

In short, micro:bit uses the photoelectric characteristics of its LED matrix to sense the intensity of ambient light by measuring the voltage decay time when the LED switches from the drive state to the input state, thereby realizing the light sensing function. Although this method is not a light sensor in the traditional sense, it can achieve similar effects in practical applications.
