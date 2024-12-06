---
sidebar_position: 6
sidebar_label: 灯光控制
---

# 案例06：灯光控制

## 简介

本课程旨在向学生介绍小车车头灯的工作原理。学生将使用天蓬智能车教育版学习如何编写程序来控制小车的灯光。

## 教学目标


学习使用Makecode软件创建程序控制小车的灯光。

## 教学准备

在开始教学之前，请确保您已经准备好以下必要的材料：

| 图片 | 名称 | 数量 | 备注 |
|---|---|---|---|
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-tpbot-edu/TPBot_tianpeng_edu.png)| 天蓬智能车教育版 | 1 |   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/USB-data-cable.png) | USB数据线 | 1 |   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit.png) | micro:bit | 1 | 自行准备 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/pc.png) | PC | 1 | 自行准备 |

## 课程引入

准备好进入彩色灯光的奇妙世界了吗？在这节课中，我们将学习如何控制灯的颜色，让它们像彩虹一样变换色彩。我们会先了解光的颜色是怎么来的，以及如何用电子方式控制颜色。

## 探究活动

如何控制灯光的颜色？

## 软件

[微软makecode](https://makecode.microbit.org/#)


## 编程

在MakeCode的代码抽屉中点击`高级`，查看更多代码选项。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-tpbot/images/TPBot_tianpeng_case_01_02.png)

为了给天蓬智能车编程，我们需要添加一个扩展库。在代码抽屉底部找到`扩展`，并点击它。这时会弹出一个对话框，搜索`tpbot`，然后点击下载这个代码库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-tpbot/images/TPBot_tianpeng_case_01_03.png)


## 示例程序

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-tpbot-edu/TPBot_tianpeng_edu_case_06_07.png)

### 程序

请参考程序连接：[https://makecode.microbit.org/_hMXirhHtqXJk](https://makecode.microbit.org/_hMXirhHtqXJk)


你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_hMXirhHtqXJk"
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


当开机后，小车向前行驶，车头灯交替显示红色灯光和蓝色灯光。


## 扩展知识


**光的三原色和加色原理**


光的三原色和加色原理是色彩学中的基础概念，它们解释了光如何被用来创造各种颜色。以下是这些概念的简要介绍：

**光的三原色**
光的三原色是红色、绿色和蓝色（RGB）。这三种颜色的光可以以不同的比例混合，产生其他所有的颜色。在光的混合中，所有的光都加起来，所以这种原理被称为加色原理。

**加色原理**
加色原理是指通过增加不同颜色的光来产生新颜色的过程。当你将两种或更多的光原色混合时，它们会相加在一起，产生更亮的颜色。以下是加色原理的一些关键点：

**原色混合**：

红色 + 绿色 = 黄色
绿色 + 蓝色 = 青色
蓝色 + 红色 = 品红色

**全色光**：

当红色、绿色和蓝色光全部以最高强度混合时，它们会产生白光。

**互补色**：

每种颜色都有一个互补色，当互补色以适当比例混合时，它们会产生白光。互补色包括：
红色和青色
绿色和品红色
蓝色和黄色

**颜色饱和度和亮度**：

通过调整每种原色光的强度，可以产生不同亮度和饱和度的颜色。增加强度会使颜色更亮，减少强度会使颜色变暗或更接近黑色。

**颜色空间**：

RGB颜色模型被广泛用于电子显示设备，如电视、电脑和手机屏幕，它们通过调整RGB三原色的强度来显示数百万种颜色。
理解光的三原色和加色原理对于任何涉及光和颜色的工作都是至关重要的，无论是在艺术、设计、摄影还是视频制作等领域。通过这些原理，我们可以创造出丰富多彩的视觉体验。
