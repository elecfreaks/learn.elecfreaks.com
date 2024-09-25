---
sidebar_position: 6
sidebar_label: 遥控小车
---

# 遥控小车

## 简介

在本课程中，我们将学习如何使用cutebot智能赛车和joysticks:bit制作一辆遥控小车。通过这个案例，你将了解如何通过手柄对小车进行控制。这个有趣的项目将让你深入探索机器人技术和编程的应用。

## 教学目标

了解micro:bit的无线广播功能。

能够通过编程实现小车根据遥控手柄指令进行移动。

培养问题解决和团队合作能力。

## 教学准备
在开始教学之前，请确保您已经准备好以下必要的材料：

| **图片** | **名称** | **数量** | **备注** |
| --- | --- | --- | --- |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/cutebot.png) | cutebot | 1 |  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/joysticksbit.png) | joystick:bit V2 | 1 |  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/battery.png) | 7号电池 | 5 | 自行准备 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/USB-data-cable.png) | USB数据线 | 1 |   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit.png) | micro:bit | 2 | 自行准备 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/pc.png) | PC | 1 | 自行准备 |

这些材料将为您提供一个完整的体验，确保您可以顺利地进行后续的操作和学习。如果您已准备好以上内容，我们可以继续进入下一步。


## 教学过程
### 课程引入

在本节课，我们将一起探索如何通过joysticks：bit手柄来控制cutebot智能赛车的行驶方向，制作一辆有趣的遥控赛车。
现在，让我们一起开始这个有趣的学习旅程吧！准备好使用cutebot智能赛车探索图形化编程的世界了吗？
### 探究活动
- micro:bit的蓝牙广播是如何使用的？
- 如何使用编程让小车响应遥控手柄的指令？
### 代码编程

### 新建项目

打开makecode.microbit.org。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode.png)

点击新建项目

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode-new-project-01.png)

输入项目名称并点击确定。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode-new-project-02.png)

#### 基础知识

关于micro:bit V2的蓝牙天线功能，请查看：[https://microbit.org/get-started/features/radio-and-pins/#radio](https://microbit.org/get-started/features/radio-and-pins/#radio)

我们通过一个简单的蓝牙通信案例来熟悉这个功能的基本使用。

*** 发送端 ***

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/football-game-case-01-01.png)

例程链接：[https://makecode.microbit.org/_5Uk2whHFuV6e](https://makecode.microbit.org/_5Uk2whHFuV6e)

*** 接收端 ***

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/football-game-case-01-02.png)

例程链接：[https://makecode.microbit.org/_5Uk2whHFuV6e](https://makecode.microbit.org/_5Uk2whHFuV6e)

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

通过第一个micro:bit的A、B按键，可以控制第二个micro:bit的LED矩阵上显示的图案。

*** 注意：请提前根据不同分组分配micro:bit的无线设置组组别，防止课堂上的同学们相互之间因为组别相同而产生信号干扰。 ***

#### 添加软件库

下面我们正式进入遥控小车的制作。

点击扩展，进入扩展软件库添加界面

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/add-extensions-1.png)

为了给cutebot智能赛车编程，我们需要添加cutebot智能赛车的软件库。请在搜索栏输入`cutebot`，按下回车键后，选择添加cutebot智能赛车的软件库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/add-extensions-2.png)

为了给joysticks:bit编程，我们需要添加joysticks:bit的软件库。请在搜索栏输入`joysticksbit`，按下回车键后，选择添加joysticks:bit的软件库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/add-extensions-3.png)


### 小车端程序

以下是小车端的示例程序，依照以上方式将程序下载到micro:bit即可。

示例程序:[https://makecode.microbit.org/_bueAsJ15thxz](https://makecode.microbit.org/_bueAsJ15thxz)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/football-game-case-01.png)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_bueAsJ15thxz"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

### 遥控手柄端程序

以下是遥控手柄的示例程序，依照以上方式将程序下载到micro:bit即可。

示例程序:[https://makecode.microbit.org/_5FXEbpPHkFmo](https://makecode.microbit.org/_5FXEbpPHkFmo)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/football-game-case-02.png)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_5FXEbpPHkFmo"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

### 结果

可通过遥控手柄的摇杆或者按钮控制小车的行驶方向。
