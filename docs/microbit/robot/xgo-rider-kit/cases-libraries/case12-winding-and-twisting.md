---
sidebar_position: 12
sidebar_label: 案例12 蜿蜒曲折
---

# 案例12 蜿蜒曲折

## 简介

在本课程中，学生们将学习如何通过编程使 XGO Rider 执行复杂的 Z 字形前进动作。这不仅涉及对机器人运动控制的深入理解，还需要学生掌握路径规划的相关知识。通过本课程的学习，学生们将能够提升他们在机器人编程和控制方面的综合应用能力。



## 教学目标

- 理解 Z 字形前进动作的运动学原理。
- 学习如何通过编程实现 XGO Rider 的 Z 字形路径规划。
- 提高学生的问题解决能力和创新思维。



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

Z 字形前进是一种常见的机器人路径规划动作，它要求机器人在前进过程中能够灵活地改变方向，以适应不同的环境和任务需求。在本课程中，我们将引导学生学习如何通过编程使 XGO Rider 执行 Z 字形前进动作，这将帮助学生更好地理解机器人的运动控制和路径规划。



### 探究活动

- 机器人在执行 Z 字形前进时，其运动学原理是什么？
- 如何通过编程实现 XGO Rider 的 Z 字形路径规划？



### 开始编程

#### 添加 XGO Rider 软件库

##### 1. 进入“[makecode.microbit.org](https://makecode.microbit.org)”，点击**新建项目**。



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-04.png)



##### 2. 在弹出窗口输入项目名称并点击**创建**。



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-05.png)



##### 3. 点击代码抽屉中的**扩展**，在弹出界面的搜索框中输入 **XGO Rider** 并点击搜索图标，在显示 **XGO Rider** 软件库后点击。



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-07.png)



### 示例程序



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-111.png)



**参考程序链接：**https://makecode.microbit.org/_3gw411CxqEz0



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

- 学生分成小组，共同完成 XGO Rider Z 字形前进的程序编写。


- 鼓励学生之间相互合作、交流和分享经验。


- 每个小组有机会向其他小组展示他们编程完成的 XGO Rider，并演示。

**预期效果：**

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case10012.gif)

### 总结与反思

- 回顾课程内容，提醒学生掌握了哪些知识和技能？

- 引导学生讨论他们在制作过程中遇到的问题和困难，以及如何解决这些问题。

- 引导学生思考并共同讨论如何优化 XGO Rider 的 Z 字形前进动作。



## 扩展知识

Z 字形前进动作的运动学原理涉及到机器人的转向机制和路径规划算法。在实际应用中，这通常需要机器人能够感知周围环境并实时调整其运动轨迹。传感器，如超声波传感器、红外传感器或摄像头，可以提供必要的环境信息，帮助机器人避免障碍物并规划最佳路径。

在编程实现 Z 字形前进时，可以采用多种算法，如 A* 搜索算法、Dijkstra 算法或基于行为的路径规划方法。这些算法可以根据机器人的当前位置、目标位置和环境信息，计算出一条最优或可行的路径。

此外，Z 字形前进还可以通过控制机器人的左右轮速差来实现，这种方法需要精确控制电机的速度和方向，以保证机器人能够平稳地执行 Z 字形动作。

通过本课程的学习，学生们不仅能够掌握 Z 字形前进的编程技巧，还能够深入理解机器人运动控制和路径规划的基本原理，为将来在更复杂的机器人应用中打下坚实的基础。
