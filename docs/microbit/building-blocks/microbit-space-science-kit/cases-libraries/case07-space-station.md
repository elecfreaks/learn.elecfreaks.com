---
sidebar_position: 7
sidebar_label: 案例07 空间站
---

# 案例07 空间站

## 简介

本课程旨在向学生介绍空间站的组成部分以及在月执行任务相关的知识。学生将使用 micro:bit 太空科创套装学习如何编写程序来控制空间站的运行。



## 教学目标

- 了解空间站的结构和运行方式。
- 了解空间站的执行任务知识。
- 学习空间站的搭建方式和编程控制。

## 教学准备

在开始教学之前，请确保您已经准备好以下必要的材料：

| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-01.png) | micro:bit  V2        |
| ------------------------------------------------------------ | -------------------- |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-05.png) | 哪吒多功能扩展盒V2   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-06.png) | 行星系列智能积木马达 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-planetx040.png) | 行星超声波传感器     |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-planetx050.png) | 行星双路巡线传感器   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-04.png) | 积木包               |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-02.png) | USB 数据线           |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-03.png) | 个人电脑（PC）       |

这些材料将为您提供一个完整的体验，确保您可以顺利地进行后续的操作和学习。如果您已准备好以上内容，我们可以继续进入下一步。

## 教学过程

### 课程引入

你们是否思考过空间站的组成以及运作方式呢？在本节课中，我们将一起探索如何通过积木结构件搭建空间站以及通过图形化程序控制空间站的运行。

准备好使用 micro:bit 太空科创套装探索太空旅行的世界了吗？现在，让我们踏上这个有趣的学习旅程吧！

### 探究活动

- 如何搭建空间站？
- 如果编写一个简单的程序，使空间站运行？
- 空间站如何与空间站

### 案例搭建

根据现有空间站形式和组成，请开放讨论并合理设计积木空间站。

#### 示例





### 代码编程

#### 添加软件库

进入“[makecode.microbit.org](https://makecode.microbit.org)”，点击**新建项目**。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-07.png)

在弹出窗口输入项目名称并点击**创建**。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-11.png)

点击代码抽屉中的**扩展**。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-09.png)

在弹出界面输入 **nezha2** 并点击搜索图标，在显示 **nezha2** 软件库后点击。同样的方式加载 **PlanetX** 软件库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-10.png)



### 示例程序



参考程序链接：

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-read03.png)**请根据课堂实际情况适当调整行星系列智能积木马达速度。**

### 下载程序

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

点击**下载程序**。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual10.png)



### 团队合作与展示

学生分成小组，共同完成空间站的制作和程序编写。

鼓励学生之间相互合作、交流和分享经验。

每个小组有机会向其他小组展示他们制作的空间站，并演示。

**预期效果：**。

（GIF动图）

### 总结与反思

回顾课程内容，提醒学生掌握了哪些知识和技能。

引导学生讨论他们在制作过程中遇到的问题和困难，以及如何解决这些问题。

引导学生思考空间站的优化和改进方向，比如还能制作哪些有趣的案例。

## 扩展知识

空间站是人类在地球轨道上建立的大型载人航天器，用于长期进行科学研究、技术试验和观测地球等活动。它们通常由多个模块组成，这些模块可以连接在一起形成一个复杂的生活和工作环境。下面是对空间站组成及相关背景的介绍：

### 空间站的组成

空间站的组成因设计和任务需求而异，但基本组成部分包括：

1. **核心舱**：
   - 也称为主控舱，是空间站的中枢，包含了生命支持系统、通信系统和动力系统等重要设施。
   - 核心舱负责管理整个空间站的运作，是航天员日常生活和工作的主要区域。
2. **实验舱**：
   - 专门用于科学实验和技术试验，可能包含各种实验室设备和研究工具。
   - 实验舱可以有多个，根据不同的研究领域和任务需求进行配置。
3. **生活舱**：
   - 提供航天员休息、睡眠、餐饮和娱乐的设施。
   - 包括卧室、餐厅、健身房和卫生间等。
4. **对接舱/气闸舱**：
   - 对接舱用于与载人飞船和货运飞船的对接，是人员和物资进出空间站的通道。
   - 气闸舱则是航天员进行太空行走时穿脱航天服和调节内外气压的地方。
5. **服务舱**：
   - 包含推进系统、电源系统、冷却系统等，为整个空间站提供动力和支持。
6. **专用设备舱**：
   - 用于安装特定的科学仪器或实验设备，如天文望远镜、粒子物理探测器等。
7. **太阳电池翼**：
   - 安装在外壳，为整个空间站提供电力。
8. **桁架结构**：
   - 用于支撑太阳电池翼、散热器和通信天线等外部组件。

### 空间站的背景

空间站的发展经历了几个阶段，从最早的苏联礼炮系列、美国天空实验室，到后来的和平号空间站和国际空间站（ISS）。

- **礼炮系列**：苏联于1971年发射了世界上第一个空间站——礼炮1号。
- **天空实验室**：美国在1973年至1974年间运营了天空实验室，这是美国的第一个空间站。
- **和平号空间站**：苏联/俄罗斯的和平号空间站在1986年至2001年间运行，是历史上第一个长期载人的空间站。
- **国际空间站（ISS）**：自1998年开始建造，是目前最大的空间站，由多个国家合作运营，包括美国、俄罗斯、日本、加拿大和欧洲航天局成员国。
- **中国空间站**：中国正在建设自己的空间站，名为天宫空间站，由天和核心舱、问天实验舱和梦天实验舱组成，预计在2022年底完成初步建设。

空间站的建设和运营代表了人类在太空长期居住和工作的能力，对科学研究、技术进步和国际合作有着深远的影响。
