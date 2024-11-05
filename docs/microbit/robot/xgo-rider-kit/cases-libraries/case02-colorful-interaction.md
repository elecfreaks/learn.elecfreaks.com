---
sidebar_position: 2
sidebar_label: 案例02 炫彩互动
---

# 案例02 炫彩互动

## 简介

在本课程中，我们将引导学生探索 XGO Rider 的彩虹灯功能，学习如何通过颜色块和三原色两种编程方法来控制灯光，以及如何通过编程使扬声器播放音乐。学生将深入了解颜色三原色的原理、扬声器的发声机制，以及如何通过编程实现对这些功能的控制。



## 教学目标

- 理解颜色三原色原理。
- 学会通过编程方式控制彩虹灯颜色变化。
- 理解扬声器发声原理。
- 学习如何通过编程命令使扬声器播放音乐。



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

上一节课程我们编写了第一个 XGO Rider 编程控制程序，理解了micro:bit 与 XGO Rider 之间的通信串口设置原理。本节课，我们将深入学习如何通过编程控制XGO Rider的炫彩灯光和音乐律动，让机器人的表演更加生动有趣。

接下来，跟着本节课的教程一起学习机器人的炫彩灯光与音乐律动的编程控制知识吧。



### 探究活动

- **三原色探究**：为什么红、绿、蓝被称为三原色？其他颜色是否也可以作为原色？
- **声音原理**：声音是如何产生的？人类能听到的声音范围是多少？
- **编程控制**：如何通过编程控制 XGO Rider 的彩虹灯和扬声器？



### 开始编程

#### 添加 XGO Rider 软件库

##### 1. 进入“[makecode.microbit.org](https://makecode.microbit.org)”，点击**新建项目**。



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-04.png)



##### 2. 在弹出窗口输入项目名称并点击**创建**。



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-05.png)



##### 3. 点击代码抽屉中的**扩展**，在弹出界面的搜索框中输入 **XGO Rider** 并点击搜索图标，在显示 **XGO Rider** 软件库后点击。



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-07.png)



### 示例程序



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-101.png)



**参考程序链接：**https://makecode.microbit.org/_DaqEiW09mRef



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

- 学生分成小组，共同完成 XGO Rider 彩虹灯与扬声器程序编写。


- 鼓励学生之间相互合作、交流和分享经验。


- 每个小组有机会向其他小组展示他们编程成果，并进行演示。

**预期效果：**

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case1002.gif)

### 总结与反思

- 回顾本课程内容，确认学生已掌握的知识和技能。
- 引导学生讨论在制作过程中遇到的问题和困难，以及解决方案。
- 思考如何进一步优化编程，使彩虹灯随音乐变化。



## 扩展知识

### 三原色原理

三原色是色彩理论中的基本概念，指的是三种基本颜色，它们可以通过不同比例的混合来产生一系列其他颜色。在不同的色彩系统中，三原色的定义有所差异。

1. **光的三原色**：在光的加色模型中，三原色通常被定义为红色（Red）、绿色（Green）和蓝色（Blue），简称为 RGB。这一模型基于人眼视网膜上的三种感光细胞，它们分别对红、绿、蓝光最为敏感。通过调整这三种颜色光的强度，可以合成人眼所能感知的广泛色彩范围。因此，RGB模型被广泛应用于电视、电脑显示器以及其他显示技术中。

2. **颜料的三原色**：在颜料的减色模型中，三原色则为青色（Cyan）、品红色（Magenta）和黄色（Yellow），简称 CMY。这些颜色的颜料通过吸收或反射不同波长的光来产生混合色彩。在印刷领域，CMY 颜色模型因其能够通过青、品红、黄三种墨水的不同比例混合来复制出丰富的色彩而得到广泛应用。

三原色之所以被选为红色、绿色和蓝色（或青色、品红色和黄色），是因为这些颜色在视觉光谱中分布较为均匀，且人眼对它们的敏感度较高。从数学角度来看，任何颜色都可以视为这三种颜色的线性组合，这使得它们成为构建色彩空间的理想基础。

然而，需要注意的是，尽管理论上可以通过三原色的混合来合成任何颜色，但由于物理限制（例如颜料的纯度、显示设备的亮度和对比度等），并非所有颜色都能被完美地复制。此外，某些特殊颜色，如金色和银色，通常不包含在传统的三原色模型中，因为它们是通过光的反射而非吸收来实现的。



### 声音产生原理

声音是由振动产生的。当物体振动时，会使周围的介质（如空气、水或固体）中的分子产生压缩和稀疏的波动，这些波动以波的形式传播，形成声波。声波的传播需要介质，但在真空中无法传播。

**声音的产生原理：**

1. **振动**：物体振动是声音产生的基础。当物体振动时，它会使周围的介质分子产生位移。
2. **介质**：声音需要介质来传播。在固体、液体和气体中，声波的传播速度不同，通常在固体中最快，在气体中最慢。
3. **波形**：声波是一种机械波，它通过介质中的分子传递能量。声波的波形可以是简单的正弦波，也可以是更复杂的波形，这取决于声源的振动特性。

**人类可以听到的声音范围：** 人类听觉系统对声音的频率范围有一定的限制。大多数人能够听到的声音频率范围大约在20赫兹（Hz）到20,000赫兹（20kHz）之间。这个范围被称为听觉范围。

1. **低频声音**：20Hz是人耳能够感知的最低频率，这个频率以下的声音被称为次声波。
2. **高频声音**：20kHz是大多数人能够听到的最高频率，这个频率以上的声音被称为超声波。

需要注意的是，随着年龄的增长，人耳对高频声音的敏感度会逐渐下降，这使得老年人可能无法听到20kHz的高频声音。此外，个体差异也会影响一个人能够听到的声音频率范围。

声音的响度（或强度）通常用分贝（dB）来衡量。0分贝是人耳能够感知到的最微弱的声音，而超过120分贝的声音可能会对人耳造成疼痛或损伤。日常对话的声音大约在60分贝左右。
