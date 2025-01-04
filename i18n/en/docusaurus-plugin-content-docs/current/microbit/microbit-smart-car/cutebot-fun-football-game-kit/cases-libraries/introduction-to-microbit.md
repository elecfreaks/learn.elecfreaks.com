---
sidebar_position: 1
sidebar_label: Introduction to micro:bit
---

# Getting to know micro:bit

## Course Description

In this lesson, we will take a brief look at what a micro:bit is, what it does, and learn how to program a micro:bit through a simple case study.

## Class Preparation


| **Picture** | **Name** | **Number** | **Notes** |
| --- | --- | --- | --- |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/USB-data-cable.png) | USB Cable | 1 |   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit.png) | micro:bit | 1 | Prepare Yourself |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/pc.png) | PC | 1 | Prepare Yourself |

## What is micro:bit?

The micro:bit is a miniature computer designed for educational programming purposes for young people. It measures only 4cm x 5cm, but it has a range of sensors and LEDs that can be used to control and monitor the physical world.

The micro:bit can be connected to a computer via a USB cable or Bluetooth and programmed using programming software. It supports a variety of programming languages, including Microsoft MakeCode, Python, and JavaScript. Students can use these programming languages to write code to control the sensors and LEDs on the micro:bit to create a variety of fun projects.

The micro:bit is designed to be easy to use and suitable for beginners. It can be used for a variety of educational activities such as programming courses, science experiments, and maker activities. By using the micro:bit, students can develop creativity, problem-solving skills and teamwork.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit.png)

For more information about micro:bit, please visit: [micro:bit official website](https://microbit.org/).

## What are the features on micro:bit?

There are two versions of micro:bit in terms of functionality.

**Functionality of the older version of micro:bit**

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit-old.png)

**New version of micro:bit**

New buzzer, touchable logo, microphone compared to the old version of micro:bit.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit-new.png)

For detailed information, please check the official micro:bit website: [https://microbit.org/get-started/features/overview/](https://microbit.org/get-started/features/overview/)

## Quick Start

### Programming platform

We usually use [graphical programming platform makecode](https://makecode.microbit.org/) to program micro:bit.

Programming platform entry: [https://makecode.microbit.org/](https://makecode.microbit.org/)

### The beating heart ###

Let's make a quick example of how to program a micro:bit with makecode.

Open [https://makecode.microbit.org/](https://makecode.microbit.org/)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode.png)

New Project

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode-new-project-01.png)

Enter a project name and click Create.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode-new-project-02.png)

After entering the editor interface, we can see Micro:bit Simulator, Toolbox, and Workspace.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode-new-project-03.png)

Find the `forever` block from `Basic` and drag it to the Workspace.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit-basic-01.png)

Find the `show icon` block from `Basic` and put it into the `forever` block.

The `show icon` block that is not put into the `forever` block is gray. At this time, we can see from the Micro:bit Simulator area that this block is not executed.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit-basic-02.png)

The `show icon` block placed in the `forever` block is blue. At this time, we can see that this block is executed in the Micro:bit Simulator area.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit-basic-03.png)

Find the `pause (ms)` block in `Basic` and put it inside the `forever` block.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit-basic-04.png)

Inside the `forever` block, add a `show icon` block and select the `small heart` icon.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit-basic-05.png)

Final completion of the program：[https://makecode.microbit.org/_bk5A9eTmrE1c](https://makecode.microbit.org/_bk5A9eTmrE1c)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit-basic-06.png)

You can also download the program directly from the following web page.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_bk5A9eTmrE1c"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>


From the Micro:bit Simulator area we can see the simulation effect of the program.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit-basic-heart.gif)

### How to download the program to micro:bit?

Use a USB cable to connect PC and micro:bit V2.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/connect-microbit.gif)

After the connection is successful, a drive letter named `MICROBIT` will be recognized on the computer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-drive.png)

Click the ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-01.png) in the lower left corner and select `Connect Device`.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-02.png)

Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-03.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-04.png)

Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-05.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-06.png)

In the pop-up window, select `BBC micro:bit CMSIS-DAP`, and then select Connect. At this point, our micro:bit has been successfully connected.![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-07.png)

Click Download.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-08.png)

### Results

The effect of displaying a beating heart on a micro:bit LED matrix.
