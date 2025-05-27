---
sidebar_position: 22
sidebar_label: Case 21：Motorcycle Robot
---

# Case 21: Motorcycle Robot

## Case Introduction

Use Nezha Pro Sport Kit to build a two-wheeled motorcycle robot, adopting the classic layout of rear-wheel motor drive + front-wheel steering gear to simulate the movement logic of a real motorcycle. By programming to control the motor speed and steering gear angle, basic functions such as forward movement, steering, and speed regulation are realized, helping learners understand the mechanical linkage principle of "power system + steering system", master the basic control methods of motors and steering gears, and experience the complete engineering process from mechanical construction to programming and debugging.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-21-01.png)
## Teaching Preparation

|     Name     |            Graphic            |
| :----------: | :--------------------------: |
|   Nezha Pro Sport Kit   |   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-01.png)  |

## Teaching objectives

Mechanical transmission: Understand the motorcycle movement principle of "rear-wheel drive + front-wheel steering" and master the mechanical installation method of motors and servos.

Control technology: Learn to set the motor speed (PWM adjustment) and servo angle through programming to achieve straight-line driving and steering operations.

Programming logic: Master the control process of "input command → main control board processing → actuator action" and understand the application of conditional statements (such as if) in motion control.

Interdisciplinary integration: Combine physics (gear transmission ratio), engineering (structural stability), and programming (modular control) knowledge to cultivate system integration capabilities.

## Course introduction

How does the referee judge the goal in a basketball game? If you practice by yourself, how can you quickly know how many goals you have scored?

Can the basket "count" the number of goals by itself? Scene introduction: "Today we are going to equip the basket with an 'intelligent brain'! When the basketball passes through the basket, the collision sensor will immediately 'see' the goal like a referee, and the main control board will immediately record the number and display it on the screen. Whether you are practicing shooting or competing with classmates, this counter allows you to focus on sports and let technology handle the data!"

## Learning and Exploration

Explore the relationship between motor speed and robot driving speed, analyze the influence of steering angle of servo on turning radius, and study how to improve driving stability by adjusting the front and rear wheelbase.

## Building steps

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/files/%E6%91%A9%E6%89%98%E8%BD%A6.pdf" type="application/pdf" width="100%" height="600px" />

## Hardware connection

Connect the two smart motors to the M1 and M4 ports of the Nezha Pro expansion board respectively.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-06-01-01.png)

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


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-21-04.png)

Program link: [https://makecode.microbit.org/_L6k80WEzcUCz](https://makecode.microbit.org/_L6k80WEzcUCz)

You can also download the program directly from the following webpage.

<div
style={{
position: 'relative',
paddingBottom: '60%',
overflow: 'hidden',
}}
>
<iframe
src="https://makecode.microbit.org/_L6k80WEzcUCz"
frameborder="0"
sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
style={{
position: 'absolute',
width: '100%',
height: '100%',
}}
/>
</div>

## Download Program

Connect PC and micro:bit V2 with USB cable.

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

## Case demonstration

Press button A to move the motorcycle forward, and press button B to stop.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/nezha-pro-sports-kit-case-21.gif)

## Summary and sharing

## Extended knowledge

**Physics knowledge in motorcycle sports**
Steering geometry: The intersection of the front wheel steering axis and the ground must be located inside the tire contact point (Ackerman steering principle) to reduce tire slip during steering. This case simulates this feature through the connecting rod length.
Inertia effect: Sudden steering at high speed may cause rollover due to centrifugal force, and stability can be improved by lowering the center of gravity (adding chassis counterweights).
