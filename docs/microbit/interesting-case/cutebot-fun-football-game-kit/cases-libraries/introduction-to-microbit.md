---
sidebar_position: 1
sidebar_label: 认识micro:bit
---

# 认识micro:bit

## 课程简介

这节课我们将简单的了解什么是micro:bit，micro:bit有什么功能，并通过一个简单的案例来学习如何对micro:bit进行编程。

## 课前准备

| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/USB-data-cable.png) | USB数据线 | 1 |   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit.png) | micro:bit | 1 | 自行准备 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/pc.png) | PC | 1 | 自行准备 |

## 什么是micro:bit?

micro:bit 是一款专为青少年编程教育目的而设计的微型计算机，尺寸只有4cm x 5cm，但它拥有一系列的传感器和 LED 灯，可以用来控制和监测物理世界。

micro:bit 可以通过 USB 线或蓝牙连接到计算机，并使用编程软件进行编程。它支持多种编程语言，包括 Microsoft MakeCode、Python 和 JavaScript 等。学生可以使用这些编程语言来编写代码，控制 micro:bit 上的传感器和 LED 灯，创造各种有趣的项目。

micro:bit 的设计简单易用，适合初学者使用。它可以用于各种教育活动，如编程课程、科学实验和创客活动等。通过使用 micro:bit，学生可以培养创造力、解决问题的能力和团队合作精神。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit.png)

更多关于 micro:bit 的信息，欢迎访问：[micro:bit 官网](https://microbit.org/)。

## micro:bit上有什么功能？

micro:bit从功能上区分有两个版本。

**旧版本的micro:bit功能**

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit-old.png)

**新版本的micro:bit**

对比旧版本的micro:bit，新增了蜂鸣器、可触摸徽标、麦克风。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit-new.png)

详细信息请查询micro:bit官方网站：[https://microbit.org/get-started/features/overview/](https://microbit.org/get-started/features/overview/)

## 快速入门

### 编程平台

我们通常使用[图形化编程平台makecode](https://makecode.microbit.org/)对micro:bit进行编程

编程平台入口：[https://makecode.microbit.org/](https://makecode.microbit.org/)

### 跳动的心

让我们来做一个简单的案例，快速地了解如何用makecode对micro:bit进行编程吧。

打开[https://makecode.microbit.org/](https://makecode.microbit.org/)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode.png)

新建项目

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode-new-project-01.png)

输入项目名称并点击创建。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode-new-project-02.png)

进入编辑器界面后我们可以看到Micro:bit Simulator，Toolbox，Workspace。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode-new-project-03.png)

从`Basic`中找到`forever`积木块，将其拖动到Workspace。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit-basic-01.png)

从`Basic`中找到`show icon`积木块，将其放入`forever`积木块中。

没有放到`forever`积木块中的`show icon`积木块是灰色的，此时通过Micro:bit Simulator区域我们可以看到这个积木块是不执行的。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit-basic-02.png)

放到`forever`积木块中的`show icon`积木块是蓝色的，此时通过Micro:bit Simulator区域我们可以看到这个积木块是执行的。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit-basic-03.png)

在从`Basic`中找到`pause（ms）`积木块，将其放入`forever`积木块中。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit-basic-04.png)

在`forever`积木块中，再放入一个`show icon`积木块并选择`small heart`图标，

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit-basic-05.png)

最后完成程序：[https://makecode.microbit.org/_bk5A9eTmrE1c](https://makecode.microbit.org/_bk5A9eTmrE1c)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit-basic-06.png)

你也可以通过以下网页直接下载程序。

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


从Micro:bit Simulator区域我们可以看到程序的模拟效果。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit-basic-heart.gif)

### 如何将程序下载到micro:bit？

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


### 结果

在micro:bit的LED矩阵上显示跳动的心的效果。
