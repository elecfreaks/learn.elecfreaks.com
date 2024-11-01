---
sidebar_position: 15
sidebar_label: 案例15 与 Joystick 联动
---

# 案例15 与 Joystick 联动

## 简介

在本课程中，我们将介绍如何使用 Joystick:bit V2 遥控器实现对 XGO Rider 的远程控制。学生将会学习micro:bit 无线组编程方式以及 Joystick:bit V2 的编程使用。通过结合这两款创新设备，您将能够体验到更有趣的互动方式，为 XGO Rider 带来更丰富的功能和动作。



## 教学目标

- 了解 Joystick V2 遥控器的使用和编程方式。
- 学习 Joystick V2 与 XGO Rider 进行通信的编程。



## 教学准备

在开始教学之前，请确保您已经准备好以下必要的材料：

| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-01.png) | micro:bit  V2 * 2 |
| :----------------------------------------------------------: | :---------------: |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-19.png) |  XGO-Rider 整机   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-20.png) | Joysticks V2 手柄 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-02.png) |    USB 数据线     |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-03.png) |  个人电脑（PC）   |



这些材料将为您提供一个完整的体验，确保您可以顺利地进行后续的操作和学习。如果您已准备好以上内容，我们可以继续进入下一步。



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-read-01.png)**XGO Rider 开机后，为保持机身平衡，需要小幅度来回移动，请不要将 XGO Rider 放在桌子边缘或者危险的地方，避免损坏。**



## 教学过程

### 课程引入

Joystick:bit V2 与 XGO Rider 都是使用 micro:bit 为主控制器，可以基于 micro:bit V2 的蓝牙功能，让两块主控制器之间可以进行相互通信。所以，本教程将通过图形化编程平台：MakeCode 对两款设备进行编程。不论您是初学者还是专业人士，通过本教程，您将能够轻松掌握遥控 XGO Rider 的方法，并为您的研究、教学或娱乐项目带来更多创意和灵感。让我们一起开始吧！



### 探究活动

- Joysticks V2 如何进行编程？
- Joysticks V2 如何与 XGO Rider 进行通信？



### 开始编程

#### 添加 XGO Rider 与 Joysticksbit 软件库

##### 1. 进入“[makecode.microbit.org](https://makecode.microbit.org)”，点击**新建项目**。



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-04.png)



##### 2. 在弹出窗口输入项目名称并点击**创建**。



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-05.png)



##### 3. 点击代码抽屉中的**扩展**，在弹出界面的搜索框中输入 **XGO Rider** 并点击搜索图标，在显示 **XGO Rider** 软件库后点击。



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-07.png)

#### 4. 添加 joystickbit 库文件。如下图所示：

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-21.png)



### XGO Rider 示例程序



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-116.png)



**参考程序链接：**https://makecode.microbit.org/_4EYafjTwgUTf



### Joysticks V2 示例程序



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-117.png)



**参考程序链接：**https://makecode.microbit.org/_cuRV7LaiMgH5



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-read03.png)**因为 XGO Rider 的表演模式中有前进和后退，请将 XGO Rider 放置在宽敞的平地上运行。**



### 下载程序

##### 1. 使用 USB 线连接 PC 和 micro:bit V2。



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-09.gif)



##### 2. 连接成功后，电脑上会识别出一个名为 MICROBIT 的盘符。



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-10.png)



##### 3. 点击左下角的![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-11.png)，选择**Connect Device**。



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-12.png)



##### 4. 点击![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-13.png)。



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-14.png)



##### 5. 点击![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-15.png)。



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-16.png)



##### 6. 在弹出窗口选择 **BBC micro:bit CMSIS-DAP**，然后选择**连接**，至此，我们的 micro:bit 就已经连接成功。



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-17.png)



##### 7. 点击**下载程序**。



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-18.png)

### 团队合作与展示

- 学生分成小组，共同完成Joysticks V2 遥控 XGO Rider  的代码编写。


- 鼓励学生之间相互合作、交流和分享经验。


- 每个小组有机会向其他小组展示他们编程完成的 XGO Rider，并演示。

**预期效果：**



### 总结与反思

- 回顾课程内容，提醒学生掌握了哪些知识和技能？

- 引导学生讨论他们在制作过程中遇到的问题和困难，以及如何解决这些问题。

- 引导学生思考并共同讨论如何更有效的确保双足机器人的平衡。



## 扩展知识

关于更多 Joysticks V2 的信息，您可以参考这篇文章：[Joystick:bit V2(EF08231) | LEARN](https://wiki.elecfreaks.com/en/microbit/expansion-board/joystick-bit-v2/)
