---
sidebar_position: 18
sidebar_label: Case 17：Archery Athlete
---

# Case 17: Archery Athlete

## Case Introduction

Make a smart device that simulates archery. You need to manually place the arrow on the bow and string it. Then, program the steering gear to rotate and simulate the string release action to launch the arrow. Let users experience the archery sport enabled by technology, and learn the application knowledge of mechanical transmission and steering gear control.![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-17-01.png)

## Teaching Preparation

|     Name     |            Graphic            |
| :----------: | :--------------------------: |
|   Nezha Pro Sport Kit   |   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-01.png)  |

## Teaching Objectives

Understand the principle of servo angle control and its application in simulated motion.

Master the servo programming control method.

Develop the practical ability to combine mechanical structure with programming.

## Course Introduction

Students, do you want to experience the transformation of traditional archery with technology? Today we are going to use Nezha Pro Sport Kit to make an intelligent archery device! First manually load the arrow onto the bow, pull the string, and then use the servo "one-button release" to shoot, and feel the wonder of the combination of technology and sports. Come and get started, and become an archery expert who plays with mechanics and programming!

## Learning and Exploration

Explore how the servo can simulate the release action through programming, and master the programming logic of the servo angle control and command triggering.

## Building Steps

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/files/%E5%B0%84%E7%AE%AD%E8%BF%90%E5%8A%A8%E5%91%98.pdf" type="application/pdf" width="100%" height="600px" />

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

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-17-04.png)

Program link: [https://makecode.microbit.org/_9Ppc65ggC4H8](https://makecode.microbit.org/_9Ppc65ggC4H8)

You can also download the program directly from the following webpage.

<div
style={{
position: 'relative',
paddingBottom: '60%',
overflow: 'hidden',
}}
>
<iframe
src="https://makecode.microbit.org/_9Ppc65ggC4H8"
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

After manually winding the bow, press button A to lock the arrow, and press button B to release the bow, and the arrow will be shot out.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-17.gif)

## Summary and sharing

## Extended knowledge

**Composition of bows and arrows

The bow and arrow are mainly composed of two parts: the bow and the arrow. Each part has a unique design and function:

***Bow:

Arm: It is the main elastic part of the bow. It stores elastic potential energy after winding. Traditional bow arms are often made of wood, animal tendons and other materials. Modern bow arms are mostly made of composite materials, such as glass fiber and carbon fiber, which have both strength and elasticity.

Bowstring: Connects the two ends of the bow arm and is used to transmit force. The material has evolved from early animal tendons and plant fibers to modern high-strength synthetic fibers, which can withstand large tension and are not easy to break.

Handle: Located in the middle of the bow, it is the part held by the archer. Modern bow handles are usually designed with shock absorbers to reduce vibration during archery and improve stability.

***Arrow:

Arrowheads: There are many types according to their uses. Hunting arrows are sharp and used to penetrate prey; competition arrows focus on flight stability and are generally flat or round-headed.

Arrow shaft: It is the main body of the arrow and requires a certain hardness and elasticity. The materials include wood, aluminum, carbon fiber, etc. The weight, strength and flexibility of arrow shafts of different materials vary, which affects the flight performance of the arrow.

Arrow feathers: It is installed at the tail of the arrow shaft, usually three or four pieces. The arrow feathers play a role in stabilizing the flight direction, just like the tail of an airplane, by adjusting the aerodynamic force, the arrow keeps flying in a straight line.

Arrow tail: It is located at the end of the arrow shaft and is used to connect with the bowstring. Its design must ensure that it fits closely with the bowstring, and it can be smoothly detached when the string is released without affecting the flight of the arrow.

**Mechanical principles in archery **

Conversion of elastic potential energy and kinetic energy: During the manual stringing process, the bow piece deforms and stores elastic potential energy. The greater the deformation of the bow, the more elastic potential energy is stored. When the servo simulates the string release action, the bowstring returns to its original state, and the elastic potential energy is quickly converted into the kinetic energy of the arrow, so that the arrow gains the initial velocity and flies out. According to the law of conservation of mechanical energy, under ideal conditions, the elastic potential energy stored in the bow is completely converted into the kinetic energy of the arrow, but in reality, there will be energy loss due to factors such as air resistance and friction.

Parabolic motion: The flight trajectory of the arrow after launch conforms to the parabola law and is affected by the initial launch velocity and angle. When the launch angle is 45°, the arrow can reach the farthest horizontal range without considering air resistance; in actual archery, athletes need to adjust the launch angle according to factors such as distance and wind direction.

Stability: The center of gravity design and tail wing structure of the arrow affect its flight stability. Reasonable center of gravity distribution and tail wing shape can reduce the flipping and deviation of the arrow during flight, so that it flies along the predetermined trajectory.
