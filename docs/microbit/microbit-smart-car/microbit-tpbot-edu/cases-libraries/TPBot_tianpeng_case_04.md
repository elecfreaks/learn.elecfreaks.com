---
sidebar_position: 4
sidebar_label: 巡线行驶
---

# 案例04：巡线行驶

## 简介

本课程旨在向学生介绍小车巡线行驶的原理和巡线传感器的工作原理。学生将使用天蓬智能车教育版学习如何编写程序来控制小车的沿线行驶。

## 教学目标

了解巡线传感器的工作原理

了解小车是如何巡线行驶的

学习使用Makecode软件创建程序控制小车的巡线行驶。

## 教学准备

在开始教学之前，请确保您已经准备好以下必要的材料：

| 图片 | 名称 | 数量 | 备注 |
|---|---|---|---|
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-tpbot-edu/TPBot_tianpeng_edu.png)| 天蓬智能车教育版 | 1 |   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/USB-data-cable.png) | USB数据线 | 1 |   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit.png) | micro:bit | 1 | 自行准备 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/pc.png) | PC | 1 | 自行准备 |

## 课程引入

欢迎回到我们的智能车编程课程！在前几节课中，我们学习了如何控制智能车的行驶距离和转向角度，今天我们将进入一个全新的领域：巡线传感器的工作原理以及如何让小车实现巡线行驶。

**巡线传感器的神秘世界**
巡线传感器，对于智能车来说，就像是它的眼睛，帮助它识别并沿着预定的路径行驶。你是否好奇这些传感器是如何工作的？它们是如何帮助小车“看到”并遵循线条的？在本节课中，我们将揭开巡线传感器的神秘面纱，深入了解它们的工作原理。

**小车巡线行驶的秘密**
了解了巡线传感器的工作原理后，我们将探讨小车是如何利用这些传感器来巡线行驶的。我们将学习小车是如何通过传感器收集的信息来调整自己的行驶方向，以确保能够精确地沿着线条前进。

**使用Makecode软件编程控制**
最后，我们将动手实践，学习如何使用Makecode软件来创建控制小车巡线行驶的程序。Makecode是一个直观且易于使用的编程平台，它将帮助我们简化编程过程，让我们能够快速地为小车编写巡线程序。

## 探究活动

巡线传感器是如何工作的？

怎么让小车沿线行驶呢？

## 软件

[微软makecode](https://makecode.microbit.org/#)


## 编程

在MakeCode的代码抽屉中点击`高级`，查看更多代码选项。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-tpbot/images/TPBot_tianpeng_case_01_02.png)

为了给天蓬智能车编程，我们需要添加一个扩展库。在代码抽屉底部找到`扩展`，并点击它。这时会弹出一个对话框，搜索`tpbot`，然后点击下载这个代码库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-tpbot/images/TPBot_tianpeng_case_01_03.png)


## 示例程序

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-tpbot-edu/TPBot_tianpeng_edu_case_04_07.png)

### 程序

请参考程序连接：[https://makecode.microbit.org/_JTVgLEhW6DCU](https://makecode.microbit.org/_JTVgLEhW6DCU)


你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_JTVgLEhW6DCU"
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


当开机后，小车巡线行驶。


## 扩展知识


**巡线传感器的工作原理**

巡线传感器的工作原理其实挺有趣的，就像是一个机器人的眼睛，帮助它识别并沿着特定的路径前进。下面我来给你详细解释一下：

**基本原理**

巡线传感器的工作原理基于反射光的特性。它通过发射光线（通常是红外线），然后检测这些光线反射回来的情况。当传感器检测到地面上有黑线时，由于黑色吸收光线，反射回来的光较少，传感器就会输出一个低电平的信号；反之，如果检测到的是白线或背景，由于白色反射光线较多，传感器就会输出一个高电平信号。

**结构组成**

巡线传感器通常由一组红外线发射器和接收器组成，它们几乎是平行排列的。当线路标记通过发射器和接收器之间的间隙时，接收器会直接接收到反射光。

**使用方法**

在实际应用中，巡线传感器被固定在机器人的底部，通常采用竖直或横向放置以避免受到其他因素的干扰。机器人沿着线路行驶时，巡线传感器会不断检测地面上的线路标记，并输出对应的电信号，告诉机器人应该往哪个方向走。

**优势特点**

巡线传感器的主要优势在于成本低廉、易于使用和高精度的检测能力。它们在工业自动化、机器人控制和自动驾驶领域中非常有用。

通过这些原理，巡线传感器能够帮助机器人或自动化设备准确地判断自己是否在预定的线路上，从而做出相应的动作，比如调整方向或停止运动等。这样，机器人就能够沿着特定的线路自动行走和导航了。
