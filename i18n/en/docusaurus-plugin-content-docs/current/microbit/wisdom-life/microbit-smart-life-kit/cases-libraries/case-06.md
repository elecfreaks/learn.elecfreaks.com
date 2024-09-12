---
sidebar_position: 6
sidebar_label: Touchless Trash Can
---

# Touchless Trash Can

## Introduction

In this project, we will learn how to make a touchless trash can that uses an ultrasonic sensor to detect if someone is approaching and automatically opens the trash can when someone approaches.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-life-kit/images/case-06-01.png)

## Teaching Objectives

Review the use of ultrasonic sensors

Learn how to use hardware and tools to solve problems in life

## Teaching Preparation

Before starting teaching, please make sure you have prepared the following necessary materials:

| **Picture** | **Name** | **Number** | **Note** |
| --- | --- | --- | --- |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-life-kit/images/microbit-smart-life-kit.png) | Smart Life Kit | 1 |  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/USB-data-cable.png) | USB Cable | 1 |   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit.png) | micro:bit | 1 | Prepare Yourself |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/pc.png) | PC | 1 | Prepare Yourself |

These materials will provide you with a complete experience, ensuring that you can smoothly carry out subsequent operations and learning. If you are ready for the above, we can proceed to the next step.

## Course Introduction

Trash cans are common places in our lives where dirt and filth are hidden, hiding a large number of bacteria and viruses, but some garbage is inevitably produced in our daily lives, so how can we minimize our contact with trash cans?

## Project Production

### Hardware Connection

Connect the ultrasonic sensor to the P1 interface of the wukong expansion board, and the 180° servo to the S1 interface of the wukong expansion board.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-life-kit/images/case-06-02.png)

### Programming platform

We usually use [graphical programming platform makecode](https://makecode.microbit.org/) to program micro:bit

Programming platform entrance: [https://makecode.microbit.org/](https://makecode.microbit.org/)

### Create a new project

Open [https://makecode.microbit.org/](https://makecode.microbit.org/)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode.png)

New Project

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode-new-project-01.png)

Enter a project name and click Create.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode-new-project-02.png)

### Add software library

Click Extensions in the Toolbox of the MakeCode programming interface.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-02.png)

Search for iot-environment-kit on the pop-up page and click to select the iot-environment-kit software library.


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-03.png)

Search for wukong on the pop-up page and click to select the wukong software library.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-04.png)

### Write a program

Sample program: [https://makecode.microbit.org/_9mhFH7d5pDJi](https://makecode.microbit.org/_9mhFH7d5pDJi)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-life-kit/images/case-06-03.png)

You can also download the program directly from the following web page.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_9mhFH7d5pDJi"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>




### How to download the program to micro:bit?

Use a USB cable to connect PC and micro:bit V2.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/connect-microbit.gif)

After the connection is successful, a drive named `MICROBIT` will be recognized on the computer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-drive.png)

Click ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-01.png) in the lower left corner and select `Connect Device`.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-02.png)

Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-03.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-04.png)

Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-05.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-06.png)


In the pop-up window, select `BBC micro:bit CMSIS-DAP`, and then select Connect. At this point, our micro:bit has been successfully connected.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-07.png)

Click Downloader.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-08.png)

### result

When someone approaches the touch-free trash can, the trash can automatically opens its lid.


## Expand knowledge

**Advantages of Smart Trash Cans**
As an emerging household product, smart trash cans have many significant advantages over traditional trash cans:

Automatic sensor lid opening: Smart trash cans are usually equipped with infrared sensors. When a person's hand or object approaches, the lid will automatically open, avoiding manual contact and making it more hygienic and convenient.

Automatic packaging and bag changing: Some smart trash cans have the function of automatically packing garbage bags, making it convenient for users to change garbage bags and keep the trash can clean.

Classification tips and education: Smart trash cans can guide users to correctly classify garbage through voice or screen prompts, helping to improve the public's environmental awareness and garbage classification knowledge.

Data collection and analysis: Some smart trash cans can collect usage data to help managers understand the type and quantity of garbage and optimize the garbage disposal process.

Energy saving and environmental protection: The design of smart trash cans focuses on energy saving. They are usually battery-powered, have low power consumption, and have good sealing performance, reducing odor and mosquito problems.

Improve efficiency: The automatic lid opening function of smart trash cans can speed up garbage placement and improve the cleaning efficiency of public areas.

Beautiful design: Smart trash cans tend to be more modern and beautiful in appearance design, and can be integrated into different homes or public environments.

Reduce odor: Smart trash cans usually have good sealing properties, which can prevent the odor of garbage from dispersing and keep the environment fresh.

Intelligent sterilization: Some high-end smart trash cans have sterilization functions, which can reduce the growth of bacteria and protect users’ health.

Community publicity: Smart trash cans can also be used as community publicity tools to carry out environmental protection publicity and information notifications through voice broadcasts and other methods.

These advantages of smart trash cans make them an important tool to improve the quality of life and promote environmental protection. However, they also have some disadvantages, such as the need for regular battery replacement, high adaptability to the environment, and possible cost issues. However, with the advancement of technology and reduction of costs, these shortcomings are gradually being overcome.
