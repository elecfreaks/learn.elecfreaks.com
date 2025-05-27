---
sidebar_position: 17
sidebar_label: Case 16：Color Classifier
---

# Case 16: Color Classifier

## Case Introduction

Design a color sorter based on Nezha Pro Sport Kit, use color sensors to accurately identify the colors of red and blue balls, and use the steering gear to control the baffle to achieve automatic sorting. The device can simulate the equipment sorting scene in sports training, combining color recognition technology with mechanical transmission to make ball sorting smart and efficient.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-16-01.png)

## Teaching Preparation

|     Name     |            Graphic            |
| :----------: | :--------------------------: |
|   Nezha Pro Sport Kit   |   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-01.png)  |

## Teaching Objectives

Understand the principle of color recognition based on HUE value and the method of reading sensor data.

Master the programming logic of servo angle control and conditional judgment.

Cultivate innovative thinking to apply sensor technology to actual sports scenes.

## Course Introduction

Students, there are training balls of different colors scattered on the sports field. It is too troublesome to sort them one by one! Today we are going to use Nezha Pro Sport Kit to make a magical color sorter! It can recognize the color of the ball at a glance, and can also command the baffle to automatically sort the balls into different areas. Come and become a little tech expert and make ball sorting as fun as magic!

## Learning Exploration

Explore how the color sensor recognizes the HUE value and makes color judgment, and the programming implementation of the servo to perform classification actions according to the color signal.

## Building Steps

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/files/%E9%A2%9C%E8%89%B2%E5%88%86%E7%B1%BB%E5%99%A8%E6%90%AD%E5%BB%BA%E5%9B%BE.pdf" type="application/pdf" width="100%" height="600px" />

## Hardware connection

Connect the OLED display and color recognition sensor to the IIC interface of the Nezha Pro expansion board, and connect the two smart servos to the M1 and M2 interfaces of the Nezha Pro expansion board respectively.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-16-03.png)

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

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-16-04.png)

Program link: [https://makecode.microbit.org/_RTJHpJcRkF4P](https://makecode.microbit.org/_RTJHpJcRkF4P)

You can also download the program directly from the following website.

<div
style={{
position: 'relative',
paddingBottom: '60%',
overflow: 'hidden',
}}
>
<iframe
src="https://makecode.microbit.org/_RTJHpJcRkF4P"
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

Place the robot in the upper left corner of the start area, close to the edge, and press the A button on the micro:bit to start the robot from the start area and complete all tasks

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-16.gif)

- ## Summary and sharing

  ## Extended knowledge

  ** Working principle of color sensor**

  Color sensor uses HUE (hue) value to detect color. HUE, as the basic attribute of color, determines the category of color, such as red, blue, etc. The sensor captures the spectral information in the light and converts it into the corresponding HUE value. When the light reflected by the object enters the sensor, the internal photoelectric element converts the light signal into an electrical signal, and then analyzes the electrical signal into a HUE value through an algorithm, and compares it with the pre-set color HUE threshold to determine the color of the object. By setting different HUE value ranges, multiple colors such as red and blue can be accurately identified.

  **Servo control technology**

  A servo is an angle-controllable servo motor that controls the rotation angle through a PWM (pulse width modulation) signal:

  - Signal cycle: The standard servo signal cycle is 20ms
  - Pulse width: 0.5ms - 2.5ms pulse width corresponds to a rotation range of 0° - 180°
  - Control method: Programmatically change the pulse width to achieve precise angle control

  **Automated application in sports scenes**

  Color classifiers can be extended to more sports scenes:

  - Equipment sorting: Automatically sorting training equipment of different colors
  - Physical training: Distinguish dumbbells or resistance bands of different weights by color
  - Fun sports: Design color recognition game to enhance the fun of training
