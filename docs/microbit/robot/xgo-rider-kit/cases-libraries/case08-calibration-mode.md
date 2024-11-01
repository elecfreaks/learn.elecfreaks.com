---
sidebar_position: 5
sidebar_label: 案例08 标定模式
---

# 案例08 标定模式

## 简介

本课程将深入讲解双足机器人 XGO Rider 的标定模式，这是确保机器人精确姿态控制的关键步骤。学生们将学习如何手动调节机器人的姿态，并完成标定过程，以便XGO Rider能够准确地记录并复现这些姿态。



## 教学目标

- 学习并动手实践 XGO Rider 的标定模式。
- 学习 XGO Rider 进入标定模式和完成标定模式的编程指令。



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

随着使用，XGO Rider 可能会出现姿态偏差。本课程将教你如何使用**标定模式**手动调整机器人，以恢复其标准姿态。一旦标定完成，XGO Rider 会自动记录并保持这一姿态，提高操作的精确度和稳定性。通过学习这些技巧，你将优化机器人的性能。现在，让我们一起学习如何精确地调整 XGO Rider 的姿态。



### 探究活动

- XGO Rider 姿态偏差是如何出现的？
- 如何进入标定模式和完成标定？
- 如何确保在标定模式中，手动恢复的是标准姿态？



### 开始编程

#### 添加 XGO Rider 软件库

##### 1. 进入“[makecode.microbit.org](https://makecode.microbit.org)”，点击**新建项目**。



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-04.png)



##### 2. 在弹出窗口输入项目名称并点击**创建**。



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-05.png)



##### 3. 点击代码抽屉中的**扩展**，在弹出界面的搜索框中输入 **XGO Rider** 并点击搜索图标，在显示 **XGO Rider** 软件库后点击。



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-07.png)



### 示例程序



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-107.png)



**参考程序链接：**https://makecode.microbit.org/_TPh4j63xMfJk



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

- 学生分成小组，共同完成 XGO Rider 进入标定模式和完成标定模式的程序编写。


- 鼓励学生之间相互合作、交流和分享经验。


- 每个小组有机会向其他小组展示他们编程完成的 XGO Rider，并演示。

**预期效果：**



### 总结与反思

- 回顾课程内容，提醒学生掌握了哪些知识和技能？

- 引导学生讨论他们在制作过程中遇到的问题和困难，以及如何解决这些问题。

- 引导学生思考并共同讨论如何确保手动标定时是标准姿态？



## 扩展知识

制具，又称夹具或治具，是用于稳固工件以方便加工、装配、测量或检验的辅助工具，主要类型有加工制具、装配制具、焊接制具、检验制具以及专用和通用制具。制具材质与设计依据具体工件需求定制，旨在提升生产效率和确保产品质量。

对于 XGO Rider 的姿态标定，建议使用简易制具来快速准确地调整机器人至标准姿态，这类制具应设计得便于制作和使用。
