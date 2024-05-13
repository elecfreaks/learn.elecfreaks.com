---
sidebar_position: 2
sidebar_label: 案例二：风速仪
---

# 案例二：风速仪

## 简介

本课程旨在介绍如何使用智能气候套装中的风速传感器和Micro:bit微控制器来制作一个风速仪。学生将学习如何通过编程和传感器技术记录不同风速，并通过OLED显示屏本地显示风速数据。通过这个实践项目，学生将了解风的影响以及传感器和编程的应用。

## 教学目标

了解风速传感器的使用

了解风的影响

## 教学准备

在开始教学之前，请确保您已经准备好以下必要的材料：

| 图片 | 名称 |
| :-: | :-: |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-02.png) | 智能气候套装 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-03.png) | micro:bit V2 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-04.png) | 个人电脑（PC） |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-05.png) | USB 数据线 |

这些材料将为您提供一个完整的体验，确保您可以顺利地进行后续的操作和学习。如果您已准备好以上内容，我们可以继续进入下一步。

## 教学过程

### 课程引入

大家是否经常感受到风的吹拂？风是我们日常生活中常见的自然现象之一，它不仅给我们带来凉爽，还对我们周围的环境产生着影响。那么，你是否想知道当前的风速是多少呢？在本节课中，我们将一起探索如何使用智能气候套装中的风速传感器和Micro:bit微控制器制作一个风速仪。

风速仪是一种能够测量风速的装置，它通过传感器来检测空气中的风速，并将其转化为可读取的数据。我们将使用智能气候套装中的风速传感器和Micro:bit，通过编程将传感器的数据读取并在OLED显示屏上实时显示风速。

### 探究活动

1. 风速对生活的影响。

2. 学习如何使用micro:bit上的编程环境，编写代码来读取传感器数据。

3. 如何通过OLED显示屏将风速数据以可视化的方式呈现。

### 硬件连接

将风速传感器连接到P1接口，OLED显示屏连接到IIC接口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-02-06.png)

### 代码编程

*** 添加软件库 ***

进入“[makecode.microbit.org](https://makecode.microbit.org/)”，点击新建项目。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/smart-weather-station-kit-add-extension-01.png)

在弹出窗口输入项目名称并点击“创建”。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/smart-weather-station-kit-add-extension-02.png)

点击代码抽屉中的“扩展”。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/smart-weather-station-kit-add-extension-03.png)

在弹出界面输入“IOT”，按下回车键进行搜索，并选择加载IOT软件库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/smart-weather-station-kit-add-extension-04.png)

*** 示例代码 ***

1. 当开机时显示爱心图标。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-02-07.png)

2. 初始化OLED显示屏。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-02-08.png)

3. OLED显示屏显示当前风速。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-02-09.png)

请参考程序连接：[https://makecode.microbit.org/_5TYTix6W3Xyo](https://makecode.microbit.org/_5TYTix6W3Xyo)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_5TYTix6W3Xyo"
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

*** 预期效果：连接电源后，micro:bit的LED矩阵先显示爱心，然后根据当前风速在OLED显示屏上显示当前风速。 ***

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-02.gif)

### 总结与反思

回顾课程内容，提醒学生掌握了哪些知识和技能。

引导学生讨论他们在制作过程中遇到的问题和困难，以及如何解决这些问题。

引导学生思考不同风速的情况下，风对人们生活的影响。

## 扩展知识

### 风速对生活的影响

风速是指风的运动速度，它对我们的生活和周围环境有着广泛的影响。以下是一些风速对生活的影响的例子：

温度感受：当风速较高时，风会带走我们周围的热空气，使得我们感觉更凉爽。这就是为什么在炎热的夏天，微风能够给人们带来舒适感。

自然通风：适当的风速可以促进空气流通，有助于室内通风。在没有空调或风扇的情况下，微风可以帮助人们感到清爽，并减轻闷热的感觉。

风能利用：高风速是风能发电的重要条件。通过风力发电机，可以将风转化为电力，为我们的能源需求提供可再生的清洁能源。

交通运输：风速对航空和航海等交通运输方式有着重要的影响。强风和风暴可能会导致航班延误或取消，船只也需要根据风速调整航行方向和速度。

植物传播：风可以帮助植物传播花粉和种子。某些植物依赖风力将花粉传播到其他花朵上，从而实现繁殖。风也可以将植物的种子吹散到远离母体的地方，帮助植物扩散种群。

天气变化：风速是天气系统中的一个重要因素，它可以影响气温、降水和云层形成等。例如，强风可以改变云层的形态和移动速度，也会对降水分布产生影响。

这些只是风速对生活的一些常见影响，实际上，风速还与气象、环境、建筑设计等领域密切相关。通过了解风速的影响，我们可以更好地适应和利用自然环境，为我们的生活和工作创造更好的条件。


### 风速对应的等级

风速通常以不同等级来描述，这些等级基于国际上广泛采用的风力等级表。以下是风速对应的常见等级：

无风（Calm）：风速小于1节（小于1.15公里/小时）。

特征：树叶静止，烟直上。
微风（Light breeze）：风速为1-3节（1.15-3.45公里/小时）。

特征：树叶轻微摆动，可以感觉到微风吹过。
微弱风（Gentle breeze）：风速为4-6节（4.6-7.75公里/小时）。

特征：树叶和小树枝摆动，可以感受到明显的风吹动。
和风（Moderate breeze）：风速为7-10节（8.05-11.5公里/小时）。

特征：树枝和较大的叶子摆动，感觉到明显的风力。
温和风（Fresh breeze）：风速为11-16节（12.65-18.5公里/小时）。

特征：整棵树摇动，风吹动时有些困难。
强风（Strong breeze）：风速为17-21节（19.55-24.4公里/小时）。

特征：树木摇动，步行时有些困难。
疾风（High wind）：风速为22-27节（25.3-31.15公里/小时）。

特征：行走困难，风吹动时有明显的阻力。
大风（Gale）：风速为28-33节（32.2-38.25公里/小时）。

特征：树木摇晃，行走困难。
狂风（Strong gale）：风速为34-40节（39.15-46.3公里/小时）。

特征：大树摇晃，行走困难。
暴风（Storm）：风速为41-47节（47.2-54.35公里/小时）。

特征：大树折断，行走极为困难。
飓风（Hurricane）：风速大于或等于48节（55.45公里/小时以上）。

特征：破坏性风暴，严重影响人类和建筑物。
这些风力等级可以帮助人们理解和描述风的强度，并在气象预报、海上航行、户外活动等方面提供重要参考。需要注意的是，风速的实际影响还取决于其他因素，如风向、地形等。
