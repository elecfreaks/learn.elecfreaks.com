---
sidebar_position: 1
sidebar_label: 案例一：光与色彩的奥秘
---

# 案例一：光与色彩的奥秘

## 简介

本项目旨在引导学生使用classroom科学套装中悟空扩展板上板载的彩虹灯探索光的混色原理。通过点亮并观察彩虹灯的黄色灯光和紫色灯光，学生将了解如何通过组合不同颜色的光来创造新的颜色。通过这个项目，学生将学习基础的光学知识和编程技能，同时激发他们对科学探索的兴趣。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-01-01.png)

## 教学目标

理解光的混色原理。

学习基础的光学知识。

掌握使用micro:bit控制LED灯的基本编程技能。

## 教学准备

在开始教学之前，请确保您已经准备好以下必要的材料：

| 图片 | 名称 |
| :-: | :-: |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-01-02.png) | classroom科学套装 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-03.png) | micro:bit V2 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-04.png) | 个人电脑（PC） |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-05.png) | USB 数据线 |

这些材料将为您提供一个完整的体验，确保您可以顺利地进行后续的操作和学习。如果您已准备好以上内容，我们可以继续进入下一步。

## 教学过程

### 课程引入

你有没有想过，为什么彩虹有七种颜色？为什么当我们混合某些颜色的光时，它们可以产生新的颜色？在本节课中，我们将探索光与色彩的奥秘，了解光的混色原理。

我们将使用classroom科学套装中的彩虹灯和micro:bit，通过编程控制彩虹灯的特定颜色发光。这个装置能够帮助我们观察和理解不同颜色的光如何混合在一起，形成新的颜色。

准备好了吗？现在，让我们一起踏上这个有趣的学习旅程，探索光与色彩的奥秘吧！

### 探究活动

1. 学习如何使用micro:bit上的编程环境，编写代码来控制彩虹灯。

2. 理解如何控制单个彩虹灯的亮灭。

3. 学习如何调整灯光的亮度，创造不同的颜色效果。



### 硬件连接

此案例使用wukong扩展板上的4颗彩虹灯进行实验，彩虹灯连接引脚为P16。


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-01-06.png)

### 代码编程

*** 添加软件库 ***

打开``makecode.microbit.org``并点击``新建项目``.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-01.png)

点击``扩展``.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-02.png)

搜索``iot-environment-kit``，添加iot-environment-kit软件库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-03.png)

搜索``wukong``，添加wukong软件库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-04.png)

*** 示例代码 ***

1. 当开机时，显示爱心图标。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-01-09.png)

2. 初始化彩虹灯为4颗并连接到P16端口，设置彩虹灯亮度为2。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-01-10.png)

3. 当按键A被按下时，彩虹灯显示紫色灯光；当按键B被按下时，彩虹灯显示黄色灯光。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-01-11.png)


请参考程序连接：[https://makecode.microbit.org/_XM8XaJKs86UY](https://makecode.microbit.org/_XM8XaJKs86UY)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_XM8XaJKs86UY"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

*** 下载程序 ***

使用USB线连接PC和micro:bit V2。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/connect-microbit.gif)

连接成功后，电脑上会识别出一个名为`MICROBIT`的盘符。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-drive.png)

点击左下角的![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-01.png)，选择`Connect Device`。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-02.png)

点击![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-03.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-04.png)

点击![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-05.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-06.png)


在弹出窗口选择`BBC micro:bit CMSIS-DAP`，然后选择连接，至此，我们的micro:bit就已经连接成功。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-07.png)

点击下载程序。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-08.png)

### 团队合作与展示

学生分成小组，共同完成案例的制作和程序编写。

鼓励学生之间相互合作、交流和分享经验。

每个小组有机会向其他小组展示他们制作的案例，并演示。

*** 预期效果：开机后micro:bit的LED矩阵显示爱心图标，当按键A被按下时，彩虹灯显示紫色灯光，当按键B被按下时，彩虹灯显示黄色灯光。 ***

（GIF动图）

### 总结与反思

回顾课程内容，提醒学生掌握了哪些知识和技能。

引导学生讨论他们在制作过程中遇到的问题和困难，以及如何解决这些问题。

引导学生思考光的混色原理在日常生活中的应用，如彩色电视和舞台灯光等。

## 扩展知识

光的混色原理是光学领域的一个重要概念，它涉及到不同颜色的光如何组合在一起形成新的颜色。以下是光的混色原理的一些扩展知识：

加色混色：当不同颜色的光同时照射在一起时，它们混合在一起形成新的颜色。这被称为加色混色，其典型例子是彩色电视和计算机显示器，它们使用红、绿、蓝三种颜色的光来产生广泛的颜色。

减色混色：在颜料或染料中，不同颜色的粒子吸收一部分光并反射另一部分光，当多种颜料混合时，它们吸收更多的光，从而产生较暗的颜色。这是减色混色，常用于绘画和印刷。

光的三原色：在加色混色中，红、绿、蓝被认为是光的三原色。这三种颜色的光可以混合产生白色。

颜色感知：人类眼睛中的视锥细胞对不同波长的光敏感，使我们能够看到颜色。不同波长的光对应不同的颜色。

通过了解光的混色原理，学生可以更好地理解我们是如何感知颜色的，以及颜色在科技和艺术中的应用。
