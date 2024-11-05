---
sidebar_position: 4
sidebar_label: 案例04 还能跑多久
---

# 案例04 还能跑多久

## 简介

在本课程中，我们将指导学生掌握通过编程来控制 XGO Rider 的移动及监测其电池电量的方法。学生不仅会学到如何编程设定 XGO Rider 的不同行进速度，还将了解如何编写代码来读取电量信息，从而为后续的编程任务打下坚实的基础。



## 教学目标

- 学会通过编程方式获取 XGO Rider 当前电量。
- 了解电机的基本原理。
- 学习通过编程方式设置 XGO Rider 前后运动。



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

在先前的学习过程中，我们已经熟悉了如何使用编程语言与 XGO Rider 建立连接并执行基本指令。正如驾驶者需要了解车辆的状态一样，在操控 XGO Rider 时，掌握其运行状态也同样关键。本节课，我们将带领大家探索如何通过编程来调整 XGO Rider 的移动速度，并实时监测其电池电量。这将使你能够更精确地控制你的机器人伙伴，并确保它始终处于最佳的工作状态。现在，让我们一起踏入这段充满挑战与乐趣的学习旅程。



### 探究活动

- 如何通过编程获取 XGO Rider 的电量数据，并绘制电量消耗曲线？
- 如何利用编程控制 XGO Rider 的运动？
- 如何测量 XGO Rider 的运动速度？



### 开始编程

#### 添加 XGO Rider 软件库

##### 1. 进入“[makecode.microbit.org](https://makecode.microbit.org)”，点击**新建项目**。



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-04.png)



##### 2. 在弹出窗口输入项目名称并点击**创建**。



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-05.png)



##### 3. 点击代码抽屉中的**扩展**，在弹出界面的搜索框中输入 **XGO Rider** 并点击搜索图标，在显示 **XGO Rider** 软件库后点击。



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-07.png)



### 示例程序



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-103.png)



**参考程序链接：**https://makecode.microbit.org/_FKt9pHT1iRUr



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

- 学生分成小组，共同完成 XGO Rider 运动控制以及获取电量的程序编写。


- 鼓励学生之间相互合作、交流和分享经验。


- 每个小组有机会向其他小组展示他们编程完成的 XGO Rider，并演示。

**预期效果：**



### 总结与反思

- 回顾课程内容，提醒学生掌握了哪些知识和技能？

- 引导学生讨论他们在制作过程中遇到的问题和困难，以及如何解决这些问题。

- 引导学生思考并共同讨论如何编程实现 XGO Rider 的速度在每一段固定时间内逐步提升。



## 扩展知识

XGO Rider 采用的是 FOC 轮毂一体化电机。 FOC 轮毂一体化电机是指将 FOC （Field-Oriented Control，场向控制或矢量控制）技术与轮毂电机相结合的一种电机类型。 FOC 技术是一种先进的电机控制方法，它通过对电机磁场的精确控制来优化电机性能，使得电机可以更高效、更平滑地运行，并能提供更好的动态响应。

###  FOC 轮毂一体化电机的特点

- **集成度高**： FOC 轮毂一体化电机将电机直接安装在轮毂内，减少了传动系统的复杂性和重量，提高了整体的集成度。
- **直接驱动**：由于电机直接安装在轮毂内部，因此不需要链条、皮带或齿轮等传统传动组件，实现了直接驱动。
- **高效节能**： FOC 技术的应用使得电机在运行时能保持较高的效率，减少了能量损失，从而达到节能的效果。
- **响应迅速**： FOC 控制能够快速调整电机的输出，使得电机对速度和扭矩变化的响应更快。
- **平稳运行**：由于 FOC 技术可以精确控制电机的磁场，所以电机运行更加平稳，噪音更低。

### 技术优势

- **控制精度**： FOC 技术允许对电机的转矩和磁场进行解耦控制，这意味着可以独立控制电机的磁场和转矩，从而获得更高的控制精度。
- **适应性强**： FOC 控制算法可以很好地适应负载变化，即使在负载变化较大的情况下也能维持良好的性能。

### 应用领域

 FOC 轮毂一体化电机因其上述优点，在电动车、电动自行车、电动滑板车、机器人等领域得到了广泛应用。特别是在追求高性能、轻量化设计的产品中，这种类型的电机提供了显著的优势。

总之， FOC 轮毂一体化电机结合了先进的电机控制技术和结构设计上的创新，为现代电动交通工具带来了更高的性能表现和用户体验。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-05-4.gif)
