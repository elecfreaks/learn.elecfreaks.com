---
sidebar_position: 11
sidebar_label: 案例11 不倒翁
---

# 案例11 不倒翁

## 简介

本课程旨在教授学生如何利用编程命令控制 XGO Rider 执行周期性的左右晃动动作。通过本课程的学习，学生将掌握如何设置时间周期，以及如何通过编程实现 XGO Rider 的左右晃动，从而增强其在各种应用场景下的动态表现力和互动性。



## 教学目标

- 理解周期性运动的基本原理。
- 学习控制 XGO Rider 执行周期性左右晃动的编程命令。
- 掌握设置时间周期的方法，以实现精确的晃动控制。



## 教学准备

在开始教学之前，请确保您已经准备好以下必要的材料：

| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-01.png) | micro:bit  V2  |
| :----------------------------------------------------------: | :------------: |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-19.png) | XGO-Rider 整机 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-02.png) |   USB 数据线   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-03.png) | 个人电脑（PC） |

这些材料将为您提供一个完整的体验，确保您可以顺利地进行后续的操作和学习。如果您已准备好以上内容，我们可以继续进入下一步。



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-read-01.png)**XGO Rider 开机后，为保持机身平衡，需要小幅度来回移动，请不要将 XGO Rider 放在桌子边缘或者危险的地方，避免损坏。**



## 教学过程

### 课程引入

周期性运动是机器人动态表现中的重要元素，它不仅能够增加机器人的趣味性，还能在某些应用场景中提供有效的交互方式。在本课程中，你将学习如何通过编程使 XGO Rider 进行周期性的左右晃动，这将有助于你理解时间周期在运动控制中的作用，以及如何通过编程实现精确的运动控制。



### 探究活动

- 机器人如何实现周期性的左右晃动？
- 如何通过编程指令控制 XGO Rider 的晃动周期？
- 是否可以通过调整参数来优化晃动的平滑度和效果？



### 开始编程

#### 添加 XGO Rider 软件库

##### 1. 进入“[makecode.microbit.org](https://makecode.microbit.org)”，点击**新建项目**。



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-04.png)



##### 2. 在弹出窗口输入项目名称并点击**创建**。



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-05.png)



##### 3. 点击代码抽屉中的**扩展**，在弹出界面的搜索框中输入 **XGO Rider** 并点击搜索图标，在显示 **XGO Rider** 软件库后点击。



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-07.png)



### 示例程序



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-110.png)



**参考程序链接：**https://makecode.microbit.org/_L0i3AdMmxLpC



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

- 学生分成小组，共同完成 XGO Rider 周期性左右晃动的程序编写。


- 鼓励学生之间相互合作、交流和分享经验。


- 每个小组有机会向其他小组展示他们编程完成的 XGO Rider，并演示。

**预期效果：**



### 总结与反思

- 回顾课程内容，提醒学生掌握了哪些知识和技能？

- 引导学生讨论他们在制作过程中遇到的问题和困难，以及如何解决这些问题。

- 引导学生思考并共同讨论如何更有效的实现周期性运动控制。



## 扩展知识

周期性运动控制是机器人动态行为设计中的一个重要方面，它涉及到对机器人运动的精确时间和空间控制。在实际应用中，这通常需要考虑机器人的动力学特性、传感器反馈以及环境因素。通过学习周期性运动的控制，学生不仅能够提升编程技能，还能加深对机器人运动学和控制理论的理解。此外，现代机器人技术常常结合先进的算法，如PID控制，来实现更加稳定和精确的运动控制。
