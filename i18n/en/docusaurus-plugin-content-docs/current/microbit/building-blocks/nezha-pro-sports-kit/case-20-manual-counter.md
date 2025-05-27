---
sidebar_position: 21
sidebar_label: Case 20：Manual Counter
---

# Case 20: Manual Counter

## Case Introduction

Make a manual counter based on Nezha Pro Sport Kit. By pressing button C or button D, the corresponding value can be counted independently and displayed in real time on the OLED display. This counter can be used for counting the number of times in sports training, such as counting effective stabs in fencing training and counting the number of hits in shooting training. It combines simple button operation with digital display to create a convenient manual counting tool.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-20-01.png)

## Teaching Preparation

|     Name     |            Graphic            |
| :----------: | :--------------------------: |
|   Nezha Pro Sport Kit   |   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-01.png)  |

## Teaching Objectives

Understand the trigger mechanism of key events and the logic of variable increment.

Master the programming method of dynamically updating different values on the OLED display.

Develop the ability to apply basic programming skills to actual sports scenarios.

## Course Introduction

Students, if you want to record the number of effective stabs during fencing training, or want to count the number of hits during shooting training, it is too difficult to count with your brain! Today we use the Nezha Pro sports suit to make a super practical manual counter! Pressing buttons C and D will automatically increase the number, and you can see it clearly on the screen. Come and build your own sports assistant to make counting easy and accurate!

## Learning and Exploration

Explore the programming response method of key trigger events, and how to realize the increment and display of independent counting variables corresponding to different buttons.

## Construction Steps

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/files/%E6%89%8B%E5%8A%A8%E8%AE%A1%E6%95%B0%E5%99%A8.pdf" type="application/pdf" width="100%" height="600px" />

## Hardware connection

Connect the button module to the J1 interface of the Nezha Pro expansion board, and connect the OLED display to the IIC interface of the Nezha Pro expansion board.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-20-03.png)

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

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-20-04.png)

Program link: [https://makecode.microbit.org/_6amKXJLV5U14](https://makecode.microbit.org/_6amKXJLV5U14)

You can also download the program directly from the following website.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_6amKXJLV5U14"
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
l
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual13.png)

In the pop-up window, select **BBC micro:bit CMSIS-DAP**, and then select **Connect**. At this point, our micro:bit has been successfully connected.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual14.png)

Click **Download the program**

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual10.png)

## Case demonstration

Press button C, and the "C count" value on the display will increase by 1; press button D, and the "D count" value will increase. After pressing the button multiple times, you can clearly see the two independent count values dynamically updated on the screen.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-20.gif)

## Summary and sharing

## Extended knowledge

**Key event programming principle**

The essence of a key is to change the level by changing the on-off state of the circuit. In programming, the pin needs to be set to input mode to monitor the level signal. When the key is pressed, the pin level changes from high level to low level (or vice versa), triggering the preset event function to realize the self-increment operation of the counting variable. At the same time, in order to avoid false triggering caused by key jitter, software delay debounce or state machine debounce is often used.

**Variables and data storage**

In the manual counter program, each count corresponds to an independent variable. Variables are "containers" for storing data in programming, and the value can be changed according to needs. In addition to basic integer variables, there are also various data types such as floating point and character types. In more complex programs, data structures such as arrays and lists can realize the orderly storage and processing of large amounts of data.

**Application of mathematics in counting**

Counting is essentially an addition operation in mathematics, and the value accumulation is realized by triggering the "+1" operation each time a key is pressed. In practical applications, it can be expanded to operations such as subtraction counting (such as countdown) and multiplication counting (batch statistics). Combining mathematical principles with programming logic can create more functional counters, such as compound counters with multiple statistics and difference calculations.
