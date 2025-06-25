---
sidebar_position: 8
sidebar_label: Smart Clothes Drying Rack
---

# Smart Clothes Drying Rack

## Introduction

In this project, we will learn how to make a smart clothes drying rack. Using a micro:bit board, water level sensor, and servo motor connected via a Petal Base Expansion Board, this project achieves the intelligent function of automatically retracting the drying rod in rainy weather and extending it in sunny weather. By making a drying rack that can "sense the weather," you can experience the application of the Internet of Things in daily life.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/petal-series/petal-smart-home-explorer-kit/images/case-06-01.png)

## Teaching Objectives

- Understand the role of the water level sensor and learn to detect rainwater.
- Master the control method of the servo motor to achieve automatic extension and retraction of the drying rod.
- Use graphical programming to implement the logic of "rain triggering the drying rod action."

## Teaching Preparations

Before starting the teaching, please ensure you have prepared the following necessary materials:

| **Image** | Name | **数量** | **Remarks** |
| --- | --- | --- | --- |
| <!-- 套装产品图 -->| Smart Home Explorer Kit | 1 |  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit.png) | micro:bit | 1 | Prepare separately |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/pc.png) | PC | 1 | Prepare separately |

These materials will provide you with a complete experience to ensure you can smoothly proceed with subsequent operations and learning. If you have prepared the above, we can continue to the next step.

## Course Introduction

What if it suddenly rains while drying clothes? Traditional drying racks need to be retracted manually, and clothes are easily wetted. Today, we will make an **automatic drying rack**: when the water level sensor detects rain, the servo motor will automatically rotate to retract the drying rod; after the rain stops, the drying rack can automatically extend. No more worrying about forgetting to collect clothes!

## Project Production

### Hardware Connection

- Connect the water level sensor to the J1 interface of the Petal Base Expansion Board.
- Connect the Adapter to the J2 interface of the Petal Base Expansion Board.
- Connect the servo motor to the S1 interface of the Adapter.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/petal-series/petal-smart-home-explorer-kit/images/case-06-02.png)

### Programming Platform

We usually use the [graphical programming platform makecode](https://makecode.microbit.org/) to program the micro:bit.



Programming platform entry: https://makecode.microbit.org/

### Create a New Project

Open https://makecode.microbit.org/.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode.png)

Create a new project

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode-new-project-01.png)

Enter the project name and click Create.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode-new-project-02.png)

### Add Software Libraries

In the makecode programming interface, click Extensions in the Toolbox.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-02.png)

In the pop-up page, search for `petal` and click to select the petal software library.


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-03.png)

### Write the Program

Example program: [https://makecode.microbit.org/_KVLL2cbfpWChJ](https://makecode.microbit.org/_KVLL2cbfpWChJ)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-life-kit/images/case-01-03.png)

You can also directly download the program through the following web page.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_KVLL2cbfpWChJ"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>




### How to Download the Program to micro:bit?

Connect the PC to the micro:bit V2 using a USB cable.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/connect-microbit.gif)

1. After a successful connection, a drive named `MICROBIT` will be recognized on the computer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-drive.png)

Click the icon in the lower left corner![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-01.png)，and chose`Connect Device`。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-02.png)click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-03.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-04.png)

click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-05.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-06.png)

In the pop-up window, select `BBC micro:bit CMSIS-DAP`, then select *Connect*. The micro:bit is now successfully connected.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-07.png)

Click to download the program.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-08.png)

### Results

After powering on, the smart light automatically turns on or off the rainbow light according to the ambient light intensity.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-life-kit/1.gif)

## Extended Knowledge
