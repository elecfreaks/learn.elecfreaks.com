---
sidebar_position: 5
sidebar_label: 案例05 勇闯天桥
---

# 案例05 勇闯天桥

## 简介

在本课程中，我们将引领学生深入探索双足机器人的动态平衡机制，并掌握六轴惯性测量单元（IMU）传感器的原理。学生们将通过编程实践，学习如何控制 XGO Rider 动态平衡模式的打开与关闭，从而提升其操作的灵活性与稳定性。



## 教学目标

- 了解六轴惯性测量单元（IMU）传感器的原理。
- 学习 XGO Rider 动态平衡模式打开和关闭的编程指令。



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

随着技术发展，双足机器人的动态平衡控制变得越来越重要。在这节课，你将了解六轴 IMU 传感器如何监测机器人姿态，并编程控制平衡模式。这将加深你对机器人运动学的理解，并提高你的操作技能。通过实践，你将确保 XGO Rider 在不同环境中稳定运行，无论是平地还是复杂地形。



### 探究活动

- 双足机器人如何维持其平衡？
- 如何通过编程来启动或停止 XGO Rider 的动态平衡功能？
- 有没有更高效的方法来确保双足机器人的平衡？



### 开始编程

#### 添加 XGO Rider 软件库

##### 1. 进入“[makecode.microbit.org](https://makecode.microbit.org)”，点击**新建项目**。



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-04.png)



##### 2. 在弹出窗口输入项目名称并点击**创建**。



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-05.png)



##### 3. 点击代码抽屉中的**扩展**，在弹出界面的搜索框中输入 **XGO Rider** 并点击搜索图标，在显示 **XGO Rider** 软件库后点击。



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-07.png)



### 示例程序



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-104.png)



**参考程序链接：**https://makecode.microbit.org/_UiLekADsvUMf



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

- 学生分成小组，共同完成 XGO Rider 动态平衡模式打开和关闭两种模式切换的程序编写。


- 鼓励学生之间相互合作、交流和分享经验。


- 每个小组有机会向其他小组展示他们编程完成的 XGO Rider，并演示。

**预期效果：**



### 总结与反思

- 回顾课程内容，提醒学生掌握了哪些知识和技能？

- 引导学生讨论他们在制作过程中遇到的问题和困难，以及如何解决这些问题。

- 引导学生思考并共同讨论如何更有效的确保双足机器人的平衡。



## 扩展知识

IMU，即惯性测量单元（Inertial Measurement Unit），是一种用于测量和报告一个物体的特定力、角速度以及在某些情况下，磁场周围物体的方向的设备。IMU 通常由以下几个主要部分组成：

1. **加速度计**：测量沿一个或多个轴的线性加速度。
2. **陀螺仪**：测量围绕一个或多个轴的角速度。
3. **磁力计**：测量地球磁场的方向，用于确定物体的绝对或相对方向。

IMU 传感器在多种应用中都非常有用，包括但不限于：

- **航空航天**：用于飞行器的导航系统，帮助确定飞行器的精确位置、速度和方向。
- **机器人技术**：帮助机器人理解其在空间中的位置和运动状态，对于行走机器人来说尤其重要，因为它们需要保持平衡和导航。
- **汽车工业**：在车辆的动态稳定控制系统中使用，如防抱死制动系统（ABS）和电子稳定程序（ESP）。
- **智能手机和可穿戴设备**：用于运动检测、方向感知和用户界面的交互。
- **虚拟现实（VR）和增强现实（AR）**：用于头部跟踪，提供更自然和沉浸式的用户体验。

IMU 传感器可以提供实时数据，这对于需要快速响应的系统来说是至关重要的。然而，IMU 传感器的数据通常需要通过复杂的算法进行融合和校正，以提高测量的准确性和可靠性。
