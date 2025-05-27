---
sidebar_position: 20
sidebar_label: Case 19：Tightrope Walking Robot
---

# Case 19: Tightrope Walking Robot

## Case Introduction

Use Nezha Pro Sport Kit to build a tightrope walking robot. The motor drives the rubber band (simulating the steel wire) to rotate, and the friction force transmission drives the unicycle figure above to ride stably. The unicycle figure achieves balance through the center of gravity control structure design (such as low center of gravity base, counterweight block), without the assistance of sensors. Let learners understand the principle of friction force transmission, the relationship between center of gravity and balance, and the application of mechanical structure in motion simulation in practice.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-19-01.png)

## Teaching Preparation

|     Name     |            Graphic            |
| :----------: | :--------------------------: |
|   Nezha Pro Sport Kit   |   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-01.png)  |

## Teaching objectives

Mechanical principles: Understand the working mechanism of friction transmission (rubber band rotates → drives the wheels of the little man to roll).

Center of gravity control: By adjusting the position of the counterweight, master the impact of "low center of gravity + symmetrical structure" on stability.

Motor control: Learn to set the motor speed and rotation direction through programming to achieve uniform/variable speed "tightrope walking".

Interdisciplinary integration: Combine physics (friction, center of gravity), mechanical engineering (structural design) and programming to solve practical motion simulation problems.

## Course introduction

**Question guidance:**

Why can tightrope walkers maintain balance on thin wires?

How can a "little man" ride stably on a "wire" without holding on with his hands?

Scene introduction: "Today we are going to build a robot that can 'walk on a tightrope'! Use rubber bands to simulate the tightrope, the motor makes the 'wire' rotate, and the robot moves forward by the friction between the wheels and the rubber bands. But the most amazing thing is that the robot will not fall because we have designed a 'balance secret' for it! Come and make the robot a 'dancer on a tightrope' by building structures, adjusting the center of gravity, and programming!"

## Learning and Exploration

Explore the relationship between the speed of the rubber band rotation and the robot's riding speed, analyze how the position of the counterweight block affects the robot's center of gravity, and study how "friction transmission + center of gravity control" can replace the traditional balance system to achieve stable movement.

## Building steps

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/files/%E8%B5%B0%E9%92%A2%E4%B8%9D%E6%9C%BA%E5%99%A8%E4%BA%BA.pdf" type="application/pdf" width="100%" height="600px" />

## Hardware connection

Connect the smart servo to the M1 port of the Nezha Pro expansion board.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-17-02.png)

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

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-19-04.png)

Program link: [https://makecode.microbit.org/_M6udwiHY1EiF](https://makecode.microbit.org/_M6udwiHY1EiF)

You can also download the program directly from the following webpage.

<div
style={{
position: 'relative',
paddingBottom: '60%',
overflow: 'hidden',
}}
>
<iframe
src="https://makecode.microbit.org/_M6udwiHY1EiF"
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

Use a USB cable to connect PC and micro:bit V2.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual03.gif)

After the connection is successful, a drive named MICROBIT will be recognized on the computer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual06.png)

Click ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual07.png) in the lower left corner and select **Connect Device**.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual11.png)

Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual08.png).

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual12.png)

Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual09.png).

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual13.png)

In the pop-up window, select **BBC micro:bit CMSIS-DAP**, and then select **Connect**. At this point, our micro:bit has been successfully connected.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual14.png)

Click **Download the program**

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual10.png)

## Case demonstration

Press button A to start the unicycle robot, and press button B to stop the unicycle robot.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-19.gif)

## Summary and sharing

## Extended knowledge

**Balance science of tightrope walking**

The vertical line rule of the center of gravity: The vertical line of the center of gravity of a human body or object must fall within the support surface (the projection line of the wire) to maintain balance. In this case, the little man fixed the center of gravity directly below the wheel through the counterweight. Although the support surface is narrow, the center of gravity is stable.

Dynamic balance vs. static balance: Real tightrope walkers need to maintain dynamic balance through body fine-tuning, while this case simplifies the problem through static center of gravity design, which is suitable for beginners to understand the essence of balance.

**Application scenarios of friction transmission**

Advantages: No complex gear meshing is required, and flexible transmission is achieved through elastic materials (rubber bands), which is suitable for low-speed and light-load scenarios (such as toys and teaching models).

Limitations: Friction is affected by tension and contact surface roughness. It is easy to slip at high speeds, and it is necessary to adjust the tightness of the rubber band or optimize the wheel surface material.

**Unicycle center of gravity control skills**

Real riding: Unicycle riders adjust their center of gravity by twisting their waist and exerting force on their legs, while the "lazy balance method" in this case - directly fixing the center of gravity just above the support point, is a simplified simulation of human movement by mechanical structure.

Engineering inspiration: In robot design, low center of gravity + symmetrical structure is a common strategy to achieve stable movement (such as balance bikes, robot walkers).
