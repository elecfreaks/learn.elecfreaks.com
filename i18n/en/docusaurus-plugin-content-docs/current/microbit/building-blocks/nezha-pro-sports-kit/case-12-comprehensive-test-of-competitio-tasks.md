---
sidebar_position: 13
sidebar_label: Case 12：Comprehensive test of competition tasks
---

# Case 12: Comprehensive test of competition tasks

## Case introduction

Make a task vehicle to complete four tasks on the sports field at one time.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-12-01.png)

## Teaching Preparation

|     Name     |            Graphics            |
| :----------: | :--------------------------: |
|   Nezha Pro Sport Kit   |   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-01.png)  |

## Teaching objectives

Make a competition task car and complete all tasks

Be familiar with the comprehensive application of four-way patrol line sensors and servos

## Course introduction

Welcome children to join our STEAM wonderful journey! In the previous courses, we learned about the knowledge points such as car patrol line and servo control. In this class, we need to integrate these knowledge points and complete all tasks on the competition map.

## Learning and exploration

Linkage use of multiple servos

Use of four-way patrol line sensors

How to use four-way patrol line sensors to help the car adjust its driving route

## Building steps

**Car building steps**

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/files/%E6%AF%94%E8%B5%9B%E4%BB%BB%E5%8A%A1%E8%BD%A6.pdf" type="application/pdf" width="100%" height="600px" />

**Ball Retrieval Machine Construction Steps**

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/files/%E6%A1%88%E4%BE%8B%E5%8D%81%E4%BA%8C-%E6%95%B4%E4%BD%93%E4%BB%BB%E5%8A%A1%E5%AE%8C%E6%88%90-%E7%AF%AE%E7%90%83%E6%94%BE%E7%BD%AE%E4%BD%8D%E7%BD%AE.pdf" type="application/pdf" width="100%" height="600px" />

**Simple goal building steps**

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/files/%E6%A1%88%E4%BE%8B%E5%8D%81%E4%BA%8C-%E6%95%B4%E4%BD%93%E4%BB%BB%E5%8A%A1%E5%AE%8C%E6%88%90-%E7%AE%80%E6%98%93%E7%90%83%E9%97%A8%E6%90%AD%E5%BB%BA.pdf" type="application/pdf" width="100%" height="600px" />

**Basketball stand construction steps**

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/files/%E6%A1%88%E4%BE%8B%E5%8D%81%E4%BA%8C-%E6%95%B4%E4%BD%93%E4%BB%BB%E5%8A%A1%E5%AE%8C%E6%88%90-%E7%AE%80%E6%98%93%E7%AF%AE%E7%90%83%E6%9E%B6.pdf" type="application/pdf" width="100%" height="600px" />

## Hardware connection

Connect the three smart motors to the M1, M2, and M3 interfaces of the Nezha Pro expansion board respectively, and connect the four-way line patrol sensor to the IIC interface of the Nezha Pro expansion board.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-12-03.png)

## Four-way line patrol sensor - learning mode

The four-way line patrol sensor can learn the map background and line patrol track (i.e. black track) by pressing the button on the sensor. Follow the steps below to complete the learning:

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

Program link: [https://makecode.microbit.org/_gif2bx60zehe](https://makecode.microbit.org/_gif2bx60zehe)

You can also download the program directly from the following webpage.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_gif2bx60zehe"
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

After the connection is successful, a drive letter named MICROBIT will be recognized on the computer.

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

## Case Demonstration

Place the car in the upper left corner of the start area, close to the edge, and press the A button on the micro:bit to start the robot from the start area and complete all tasks

**Note: Due to the error in the car construction, the success rate of this case is not 100%, and the program can be optimized to increase the success rate**

<iframe width="560" height="315" src="https://www.youtube.com/embed/SMI4ZmuTU9M?si=_3OCxxYvTJJ1SC3V" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Summary and sharing

## Expand your knowledge
