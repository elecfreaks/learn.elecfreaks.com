---
sidebar_position: 13
sidebar_label: 案例13 门门卫巡逻
---

# 案例13 门卫巡逻

## 简介

在本课程中，学生将学习如何编程使 XGO Rider 执行类似门卫兵的来回运动，这种运动模式对于理解机器人的路径重复和任务自动化至关重要。学生将通过实际操作来掌握循环控制和条件判断的编程技巧，从而提升其在自动化和机器人编程领域的应用能力。



## 教学目标

- 掌握循环控制和条件判断的编程概念。
- 学习实现 XGO Rider 周期往复运动的编程方法。
- 增强学生对机器人任务自动化的理解。



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

门卫兵的来回巡逻是自动化任务的一个典型例子。在本课程中，学生将学习如何通过编程让 XGO Rider 模拟这一行为，这不仅能够加深学生对机器人运动控制的理解，还能锻炼他们实现自动化任务的能力。



### 探究活动

- 机器人如何在没有外部指令的情况下执行重复任务？
- 如何通过编程实现 XGO Rider 的来回运动？
- 有哪些策略可以优化机器人的巡逻路径？



### 开始编程

#### 添加 XGO Rider 软件库

##### 1. 进入“[makecode.microbit.org](https://makecode.microbit.org)”，点击**新建项目**。



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-04.png)



##### 2. 在弹出窗口输入项目名称并点击**创建**。



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-05.png)



##### 3. 点击代码抽屉中的**扩展**，在弹出界面的搜索框中输入 **XGO Rider** 并点击搜索图标，在显示 **XGO Rider** 软件库后点击。



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-07.png)



### 示例程序



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-115.png)



**参考程序链接：**https://makecode.microbit.org/_RW2KcM7R65t3



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

- 学生分组进行编程实践，共同探索来回运动的实现方法。
- 鼓励学生分享他们的解决方案和编程经验。
- 每组学生将有机会展示他们的 XGO Rider 来回运动成果。

**预期效果：**



### 总结与反思

- 总结学生在本课程中所学知识和技能。

- 讨论在编程实践中遇到的问题及其解决策略。
- 思考如何改进程序以提高任务自动化的效率。



## 扩展知识

在自动化和机器人领域，任务的重复性和可预测性是实现自动化的关键。通过本课程，学生将学习到如何利用编程技术来控制机器人执行重复性任务，这对于未来在智能家居、安全监控等领域的应用具有重要意义。此外，学生还将了解到如何通过编程优化机器人的行为，以适应不同的环境和任务需求。
