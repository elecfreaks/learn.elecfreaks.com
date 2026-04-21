---
sidebar_position: 11
sidebar_label: 案例三:让机器人“听话”
---



# 案例三: 让机器人“听话”

## 案例简介

掌握MakeCode图形化编程基础，理解“指令与动作”的对应关系，通过拖拽编程模块、实操调试，培养学生基础编程逻辑与动手实操能力，感受编程的趣味性与实用性。

## 教学准备

| 名称 | 图示 |
| :---: | :---: |
| PU机器人套装 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/pu-robot-kit/pu-robot-01.png) |
| 编程设备（电脑） |  |
| 平整地面 |  |


## 课程目标

掌握MakeCode图形化编程基础

学会添加软件库，下载程序

通过编程控制机器人行走

## 课程引入

上节课我们用遥控器让机器人听话，今天我们要学习一种更神奇的方法——编程，通过拖拽模块、设置指令，让机器人按照我们的想法完成动作，就像给它设置了专属密码一样，接下来我们就一起走进MakeCode编程世界，解锁机器人的编程技能吧！

## 学习探究

1.  工具认知：引导学生打开电脑上的MakeCode编程页面，介绍工具的基本界面（积木抽屉、编程区），重点讲解“动作模块”“控制模块”的位置与作用，帮助学生建立对图形化编程工具的初步认知。

2.  模块学习：教师聚焦核心需求，讲解“行走”“停止”“踢腿”等基础动作模块的使用方法，演示“拖拽模块、组合指令”的操作，引导学生理解“每个模块对应一个具体动作”，明确“编程就是将多个动作模块组合，给机器人下达连贯指令”的核心逻辑。

3.  实操探究：教师给出示例任务（前进3秒→停止→踢腿1次），引导学生分组尝试拖拽对应动作模块，设置动作时长、调整模块顺序，结合数学知识计算动作时长的合理性，让学生在实践中感知“指令与动作”的对应关系，理解编程的核心原理。

## Makecode编程

### 编程平台

进入“[makecode.microbit.org](https://makecode.microbit.org)”，点击**新建项目**。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-07.png)

### 新建项目

在弹出窗口输入项目名称并点击**创建**。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-11.png)

### 添加软件库

点击代码抽屉中的**扩展**。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-09.png)

在弹出界面输入**pu robot**并点击搜索图标，在显示**pu robot**软件库后点击。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-pu-robot-kit-software-library-01.png)

### 编写程序

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/pu-robot-kit/pu-robot-case-03-01.png)

程序链接：[https://makecode.microbit.org/_DwbHT85Ve5a1](https://makecode.microbit.org/_DwbHT85Ve5a1)

### 下载程序

为了下载程序，我们需要先将PU Robot上面的micro:bit，取下来。

**micro:bit拆卸与安装**

1. 将PU机器人身体旋转90°

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/pu-robot-kit/pu-robot-kit-program-download-01.png)

2. 拧下固定螺丝

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/pu-robot-kit/pu-robot-kit-program-download-02.png)

3. 打开头盖，取出micro:bit

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/pu-robot-kit/pu-robot-kit-program-download-03.png)


  **警告:**PU机器人通电时,请勿强行扭动其关节，这将对伺服电机造成损坏。

**程序下载步骤**

使用 USB 线连接 PC 和 micro:bit V2。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual03.gif)

连接成功后，电脑上会识别出一个名为 MICROBIT 的盘符。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual06.png)

点击左下角的![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual07.png)，选择**Connect Device**。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual11.png)

点击![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual08.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual12.png)

点击![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual09.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual13.png)

在弹出窗口选择 **BBC micro:bit CMSIS-DAP**，然后选择**连接**，至此，我们的 micro:bit 就已经连接成功。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual14.png)

点击**下载程序**

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual10.png)

## 结果

PU机器人向前行走三秒后执行踢腿动作。
