---
sidebar_position: 5
sidebar_label: 避障行驶
---

# 案例05：避障行驶

## 简介

本课程旨在向学生介绍小车避障行驶的原理和超声波传感器的工作原理。学生将使用天蓬智能车教育版学习如何编写程序来控制小车的避障行驶。

## 教学目标

了解超声波传感器的工作原理

学习使用Makecode软件创建程序控制小车的避障行驶。

## 教学准备

在开始教学之前，请确保您已经准备好以下必要的材料：

| 图片 | 名称 | 数量 | 备注 |
|---|---|---|---|
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-tpbot-edu/TPBot_tianpeng_edu.png)| 天蓬智能车教育版 | 1 |   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/USB-data-cable.png) | USB数据线 | 1 |   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit.png) | micro:bit | 1 | 自行准备 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/pc.png) | PC | 1 | 自行准备 |

## 课程引入

欢迎进入我们的智能车编程课程的新篇章——避障行驶。在之前的课程中，我们学习了如何控制智能车的行驶距离和转向角度，以及如何让小车沿着预定的路径巡线行驶。今天，我们将探索如何让智能车像真正的驾驶员一样，能够识别并避开障碍物，安全地到达目的地。

**避障行驶的重要性**
避障行驶是自动驾驶技术中的一项基本功能，它涉及到环境感知、决策制定和车辆控制等多个方面。通过这项技术，智能车能够在复杂的环境中脱颖而出，确保行驶的安全性和效率。

**超声波传感器的工作原理**
我们将首先了解超声波传感器，是如何工作的。超声波传感器通过发射超声波并接收其回波来测量与障碍物之间的距离。这一原理简单却强大，它为我们的智能车提供了“看到”障碍物的能力。

**小车如何实现避障行驶**
接下来，我们将探讨小车是如何利用这些传感器数据来实现避障行驶的。当传感器检测到前方有障碍物时，小车需要做出决策，是停下来、绕过去还是采取其他行动。我们将学习如何通过编程来控制小车的行为，使其能够自动避开障碍物。

## 探究活动

超声波传感器是如何工作的？

怎么让小车避障行驶呢？

## 软件

[微软makecode](https://makecode.microbit.org/#)


## 编程

在MakeCode的代码抽屉中点击`高级`，查看更多代码选项。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-tpbot/images/TPBot_tianpeng_case_01_02.png)

为了给天蓬智能车编程，我们需要添加一个扩展库。在代码抽屉底部找到`扩展`，并点击它。这时会弹出一个对话框，搜索`tpbot`，然后点击下载这个代码库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-tpbot/images/TPBot_tianpeng_case_01_03.png)


## 示例程序

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-tpbot-edu/TPBot_tianpeng_edu_case_05_07.png)

### 程序

请参考程序连接：[https://makecode.microbit.org/_dtKFUyYtu8mV](https://makecode.microbit.org/_dtKFUyYtu8mV)


你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_dtKFUyYtu8mV"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>


## 结论


当开机后，小车向前行驶，如果遇到障碍物，则自动转向90度。


## 扩展知识


**超声波传感器的工作原理**

超声波传感器的工作原理基于声波的发射和接收，它可以用来测量距离、速度或者检测物体的存在。以下是超声波传感器工作原理的简洁介绍：

**发射声波**

**发射器**
超声波传感器有一个发射器，它能够发出高频的声波（超声波），这些声波人耳是听不到的。

**接收反射**

**声波反射**
当发射的声波遇到障碍物时，它们会像回声一样反射回来。

**接收器**
传感器上还有一个接收器，用来接收这些反射回来的声波。

**计算距离**

**时间测量**
传感器通过测量声波发射出去到接收回来的时间，来计算距离。因为声波的传播速度是已知的，所以可以通过时间来计算出传感器和障碍物之间的距离。

**应用场景**

超声波传感器被广泛应用于各种场合，比如自动门的感应、机器人的避障系统、汽车的倒车雷达等。

通过这种简单而有效的方式，超声波传感器能够帮助设备和机器“感知”周围的环境，实现自动控制和智能交互。
