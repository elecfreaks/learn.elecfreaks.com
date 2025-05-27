---
sidebar_position: 15
sidebar_label: Case 14：Counting Basketball Stand
---

# Case 14: Counting Basketball Stand

## Case Introduction

Design an automatic counting basketball stand, which can automatically count the number of goals through programming and display them in real time on the OLED display. Upgrade the traditional basketball stand to a sports device with intelligent counting function, making shooting practice more interesting and data-based.![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-14-01.png)

## Teaching Preparation

|     Name     |            Graphic            |
| :----------: | :--------------------------: |
|   Nezha  Pro Sport Kit   |   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-01.png)  |

## Teaching Objectives

Understand the distance measurement principle of ultrasonic sensors and their application in motion detection.

Master the programming methods of data statistics and real-time display on OLED screens.

Cultivate innovative thinking that combines physical movement with electronic technology.

## Course Introduction

Students, is it troublesome to count the number of shots one by one during basketball training? Today we are going to use Nezha Pro Sport Kit to make a magical automatic counting basketball stand! After installing the ultrasonic sensor, it can accurately capture the moment of scoring like an eye, and can also automatically record the score. Let's use technology to "upgrade" basketball and feel the charm of the collision between sports and programming!

## Learning Exploration

Explore how ultrasonic sensors can determine whether a basketball has entered the basket through distance measurement changes, and the programming implementation of counting logic.

## Building Steps

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/files/%E8%AE%A1%E6%95%B0%E7%AF%AE%E7%90%83%E6%9E%B6.pdf" type="application/pdf" width="100%" height="600px" />

## Hardware connection

Connect the ultrasonic sensor to the J1 interface of the Nezha Pro expansion board, and connect the OLED display to the IIC interface of the Nezha Pro expansion board.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-14-03.png)

## Code Programming

Go to "[makecode.microbit.org](https://makecode.microbit.org)" and click **New Project**.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-07.png)

Enter a project name in the pop-up window and click **Create**.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-11.png)

Click **Extension** in the code drawer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-09.png)

In the pop-up interface, enter **nezha pro** and click the search icon. Click it when the **nezha pro** software library is displayed. Load the PlanetX software library in the same way.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-10.png)



### Sample Program


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-14-04.png)

Program link: [https://makecode.microbit.org/_dukDdVPHe9ik](https://makecode.microbit.org/_dukDdVPHe9ik)

You can also download the program directly from the following website.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_dukDdVPHe9ik"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>
## Download the program

Use a USB cable to connect PC and micro:bit V2.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual03.gif)

After the connection is successful, a drive named MICROBIT will be recognized on the computer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual06.png)

Click ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual07.png) in the lower left corner and select **Connect Device**.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual11.png)

Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual08.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual12.png)

Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual09.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual13.png)

In the pop-up window, select **BBC micro:bit CMSIS-DAP**, and then select **Connect**. At this point, our micro:bit has been successfully connected.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual14.png)

Click **Download the program**

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual10.png)

## Summary and sharing

**Phenomenon**

During the theoretical verification process, placing a small ball in front of the ultrasonic sensor can be detected, but in actual testing, we found that if the ball passes quickly, the ultrasonic sensor will not be able to detect it.

**Optimization direction**

1. From the above cases, we found that the ultrasonic sensor is not sensitive to the fast-passing basketball trigger and is easy to fail to detect. We can modify the basketball stand on the original basis and change from ultrasonic detection to physical contact collision sensor detection.
2. Install a baffle under the basket and open it after the ball is detected to ensure that the ball stays long enough for the ultrasonic sensor to detect the ball.

## Extended knowledge

**Working principle of ultrasonic sensor**

The ultrasonic sensor calculates the distance by emitting high-frequency sound waves and receiving the reflected sound waves. The core formula is: distance = speed of sound × time ÷ 2. In the basketball stand application, when the basketball enters the detection range, the reflected sound wave time is shortened, and the threshold is set to determine whether the goal is scored.

**Extension of motion detection technology**

In addition to ultrasonic detection, motion detection can also use infrared tubes, pressure sensors, image recognition and other technologies:

- Infrared tubes: judge the passage of objects by blocking infrared light
- Pressure sensors: detect pressure changes caused by contact with objects
- Image recognition: use cameras and AI algorithms to identify motion trajectories

**Sports data application**

Automatic counting basketball stands are the epitome of sports data. In modern sports training and competitions, wearable devices, motion capture systems, and intelligent refereeing technologies are widely used. Through data collection and analysis, they help athletes improve training efficiency, optimize tactical strategies, and promote the integration and development of sports technology.
