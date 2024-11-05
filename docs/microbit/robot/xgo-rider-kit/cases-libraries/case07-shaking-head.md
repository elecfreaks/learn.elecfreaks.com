---
sidebar_position: 7
sidebar_label: 案例07 摇头晃脑
---

# 案例07 摇头晃脑

## 简介

本课程旨在教授学生如何通过编程来精确控制 XGO Rider 的机身倾斜角度。我们将深入讲解如何发送命令调节机器人的左右倾斜角度，并实时获取姿态角度数据，这对于维持机器人的动态平衡至关重要。



## 教学目标

- 学习 XGO Rider 调节机身倾斜角度编程命令。
- 学习读取 XGO Rider 姿态角度的编程命令。



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

在现代机器人技术中，精确的姿态控制是实现复杂动作和保持稳定的关键。本课程将带你学习如何通过编程来调节其机身的左右倾斜角度。你将掌握发送特定命令来控制机器人的姿态，以及如何获取和解读姿态角度数据，这对于机器人在各种地形上保持平衡至关重要。



### 探究活动

- XGO Rider 机身倾斜角度范围是多少？
- XGO Rider 机身倾斜角度的极限范围是多少？
- XGO Rider 有哪些姿态角度数据？



### 开始编程

#### 添加 XGO Rider 软件库

##### 1. 进入“[makecode.microbit.org](https://makecode.microbit.org)”，点击**新建项目**。



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-04.png)



##### 2. 在弹出窗口输入项目名称并点击**创建**。



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-05.png)



##### 3. 点击代码抽屉中的**扩展**，在弹出界面的搜索框中输入 **XGO Rider** 并点击搜索图标，在显示 **XGO Rider** 软件库后点击。



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-07.png)



### 示例程序



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-106.png)



**参考程序链接：**https://makecode.microbit.org/_8ghXsJWTtEv4



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

- 学生分成小组，共同完成 XGO Rider 机身倾斜和读取姿态角度的程序编写。


- 鼓励学生之间相互合作、交流和分享经验。


- 每个小组有机会向其他小组展示他们编程完成的 XGO Rider，并演示。

**预期效果：**



### 总结与反思

- 回顾课程内容，提醒学生掌握了哪些知识和技能？

- 引导学生讨论他们在制作过程中遇到的问题和困难，以及如何解决这些问题。

- 引导学生思考并共同讨论如何确定 XGO Rider 机身倾斜极限角度。



## 扩展知识

在机器人中，姿态控制是确保机器人能够稳定行走和执行动作的关键技术。Roll、Pitch 和 Yaw 是描述机器人或任何物体在三维空间中旋转的三个基本角度，它们通常用于航空航天、机器人学、航海和虚拟现实等领域。下面是每个术语的具体解释：

1. **Roll（横滚）**：
   - 横滚是指物体绕其自身的 X 轴旋转。在双足机器人中，这通常指的是机器人身体相对于水平面的倾斜程度。例如，如果机器人的上半身向左或向右倾斜，那么它的横滚角度就会发生变化。

2. **Pitch（俯仰）**：
   - 俯仰是指物体绕其自身的 Y 轴旋转。在双足机器人中，俯仰通常描述机器人身体的前后倾斜。如果机器人向前倾斜头部或向后仰，那么它的俯仰角度就会改变。

3. **Yaw（偏航）**：
   - 偏航是指物体绕其自身的 Z 轴旋转。在双足机器人中，偏航描述的是机器人身体的左右旋转。如果机器人向左或向右转动身体，那么它的偏航角度就会相应变化。

这些角度的控制对于双足机器人的平衡和运动至关重要。通过精确地控制这些角度，机器人能够适应不同的地形，避免跌倒，并执行复杂的动作。在实际应用中，这些角度通常由传感器（如六轴惯性测量单元IMU）测量，并由控制算法进行调节，以确保机器人的稳定性和灵活性。
