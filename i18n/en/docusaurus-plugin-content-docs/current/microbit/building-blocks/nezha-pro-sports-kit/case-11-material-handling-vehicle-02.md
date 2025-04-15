---
sidebar_position: 12
sidebar_label: Case 11：Material handling vehicle 2
---

# Case 11: Material handling vehicle 2

## Case introduction

Design a material handling vehicle.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-10-01.png)

## Teaching Preparation

|     Name     |            Graphics            |
| :----------: | :--------------------------: |
|   Nezha Sport Kit   |   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-01.png)  |

## Teaching objectives

Make a material transporter and complete the specified tasks

Be familiar with the use of four-way patrol sensors

## Course introduction

Welcome children to join our wonderful STEAM journey! Today, we will explore how to make a material transporter. Through programming, let the material transporter complete the specified transport tasks. Let us start this exciting STEAM learning journey together and stimulate your creativity and problem-solving ability!

## Learning and exploration

Linkage use of multiple servos

Use of four-way patrol sensors

How to use four-way patrol sensors to help the car adjust its driving route

## Building steps

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/files/%E8%BF%90%E5%8A%A8%E5%A4%B9%E7%88%AA%E8%BD%A6.pdf" type="application/pdf" width="100%" height="600px" />

## Hardware connection

Connect the four smart motors to the M1, M2, M3, and M4 interfaces of the Nezha Pro expansion board respectively, and connect the four-way patrol sensor to the IIC interface of the Nezha Pro expansion board.

Hardware connection diagram

## Four-way patrol sensor - learning mode

The four-way patrol sensor can learn the map background and patrol track (i.e. the black track) by pressing the button on the sensor. Follow the steps below to complete the learning:

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/05053_04.png)

①Focus the four-way line patrol sensor probe on the map background area and press the learning button;

②At this time, the 1st to 4th probe indicator lights are lit in reverse order, and the two learning indicators flash alternately;

③When the line patrol probe fill light emits colorful light and flashes at a high frequency, the line patrol probe should be moved back and forth horizontally on the background map and the line patrol track;

④Keep moving back and forth until the line patrol probe fill light stops flashing, and the learning is completed.

Note: When using, the height of the line patrol probe from the ground should be between 8mm and 16mm.

After successful learning, the two learning indicators will go out. When the line patrol probe detects the line patrol track, the corresponding probe indicator light will light up. When learning fails, the hollow circle and solid circle LEDs flash quickly at the same time, and the fill light RGB light goes out.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-11-01.gif)

For more information, please visit: [Plant Series Four-way Line Patrol Sensor WIKI](https://wiki.elecfreaks.com/microbit/planetx-series/sensors/Plant_X_EF05053)

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

This program is relatively complex, please view it through the following shared program link.

Program link: [https://makecode.microbit.org/_CvogK9RvqWgT](https://makecode.microbit.org/_CvogK9RvqWgT)

You can also download the program directly from the following webpage.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_CvogK9RvqWgT"
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

## Case demonstration

Press button A on the micro:bit to make the line-patrol kicking robot start moving from the starting area, adjust its posture and driving route through the black lines on the map, and kick the football to complete the shooting action.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-11-02.gif)

## Summary and sharing

## Expand your knowledge
