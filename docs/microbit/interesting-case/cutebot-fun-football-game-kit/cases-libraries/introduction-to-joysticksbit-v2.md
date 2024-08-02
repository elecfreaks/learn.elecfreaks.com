---
sidebar_position: 5
sidebar_label: 了解Joysticks:bit V2
---

# 了解Joysticks:bit V2

## 课程简介

这节课我们将简单的了解Joysticks:bit V2的功能和使用。

## 课前准备

micro:bit

Joysticks:bit V2

2颗 7号电池

电脑

USB数据线

## Joysticks:bit V2简介
---

Joystick:bit V2是一款基于micro:bit 的游戏手柄。它包含可控制4个方向的手柄和4个未定义的按钮。同时也搭配了蜂鸣器和振动马达，增强了游戏体验。它外观小巧，手感舒适，可远程遥控。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/images/cutebot_01_01.jpg)


## 功能性模块介绍
---

### 手柄

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/expansion-board/images/joystick_v2_05.png)

 X & Y分别连接至micro:bit 主板的P1,P2接口。

 ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/expansion-board/images/joystick_v2_16.png)

 X & Y的坐标信息。

### 蜂鸣器

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/expansion-board/images/joystick_v2_06.png)

无源蜂鸣器连接至micro:bit 的P0 接口。

### 振动马达

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/expansion-board/images/joystick_v2_07.png)

振动马达连接至P16接口。

### 按钮

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/expansion-board/images/joystick_v2_08.png)

 C、D、E、F 按钮相应的连接至micro:bit 的P12、P13、P14、P15 接口。


## 快速入门
### 准备工作

将组装joystick:bit。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/install-handle-01.png)

### 编程平台

我们通常使用[图形化编程平台makecode](https://makecode.microbit.org/)对micro:bit进行编程

编程平台入口：[https://makecode.microbit.org/](https://makecode.microbit.org/)

### 新建项目

打开[https://makecode.microbit.org/](https://makecode.microbit.org/)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode.png)

新建项目

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode-new-project-01.png)

输入项目名称并点击创建。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode-new-project-02.png)

进入编辑器界面后我们可以看到Micro:bit Simulator，Toolbox，Workspace。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode-new-project-03.png)



### 添加软件库

在makecode编程界面的Toolbox点击Extensions。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/add-extensions-1.png)

为了给joysticks:bit编程，我们需要添加joysticks:bit的软件库。请在搜索栏输入`joysticksbit`，按下回车键后，选择添加joysticks:bit的软件库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/add-extensions-3.png)



### 软件积木块解释

| 积木块 | 功能 | 参数 |
| ------ | ----- | -------- |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/joysticks-block-notes-01.png) | 设置手柄震动 | 参数一：自然数 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/joysticks-block-notes-02.png)  | 获取摇杆X轴或者Y轴的返回值 | 参数一：下拉选项 <br /> 选项：X轴、Y轴 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/joysticks-block-notes-03.png)  | 当指定按键处于设定状态时，运行内部程序 | 参数一：下拉选项 <br /> 选项：C、D、E、F <br /> 参数二：下拉选项 <br /> 选项：按下、松开 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/joysticks-block-notes-04.png)  | 判断按键状态 | 参数一：下拉选项 <br /> 选项：C、D、E、F |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/joysticks-block-notes-05.png)  | 初始化手柄 |  |

### 示例程序

示例程序:[https://makecode.microbit.org/_FgL6MY6L7YVq](https://makecode.microbit.org/_FgL6MY6L7YVq)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit-cutebot-block-01.png)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_FgL6MY6L7YVq"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

### 如何将程序下载到micro:bit？

使用USB线连接PC和micro:bit V2。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/connect-microbit.gif)

连接成功后，电脑上会识别出一个名为`MICROBIT`的盘符。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-drive.png)

点击左下角的![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-01.png)，选择`Connect Device`。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-02.png)

点击![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-03.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-04.png)

点击![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-05.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-06.png)


在弹出窗口选择`BBC micro:bit CMSIS-DAP`，然后选择连接，至此，我们的micro:bit就已经连接成功。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-07.png)

点击下载程序。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-08.png)

### 结果

按下手柄的C按键，micro:bit的LED矩阵显示当前摇杆的X轴的返回值，且手柄震动500ms，按下手柄的E按键，micro:bit的LED矩阵显示当前摇杆的Y轴的返回值，且手柄震动500ms。
