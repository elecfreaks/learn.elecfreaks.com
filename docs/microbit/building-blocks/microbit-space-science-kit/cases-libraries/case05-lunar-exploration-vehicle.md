---
sidebar_position: 5
sidebar_label: 案例05 月球探险车
---

# 案例04 月球探险车

## 简介

本课程旨在向学生介绍月球探险车的组成部分以及在月执行任务相关的知识。学生将使用 micro:bit 太空科创套装学习如何编写程序来控制月球探险车的运行。



## 教学目标

- 了解月球探险车的结构和运行方式。
- 了解月球探险车的执行任务知识。
- 学习月球探险车的搭建方式和编程控制。

## 教学准备

在开始教学之前，请确保您已经准备好以下必要的材料：

| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-01.png) | micro:bit  V2        |
| ------------------------------------------------------------ | -------------------- |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-05.png) | 哪吒多功能扩展盒V2   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-06.png) | 行星系列智能积木马达 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-planetx040.png) | 行星超声波传感器     |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-planetx050.png) | 行星双路巡线传感器   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-planetx070.png) | 行星紫外线传感器     |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-04.png) | 积木包               |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-02.png) | USB 数据线           |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-03.png) | 个人电脑（PC）       |

这些材料将为您提供一个完整的体验，确保您可以顺利地进行后续的操作和学习。如果您已准备好以上内容，我们可以继续进入下一步。

## 教学过程

### 课程引入

你们是否思考过月球探险车的组成以及运作方式呢？在本节课中，我们将一起探索如何通过积木结构件搭建月球探险车以及通过图形化程序控制月球探险车的运行。

准备好使用 micro:bit 太空科创套装探索太空旅行的世界了吗？现在，让我们踏上这个有趣的学习旅程吧！

### 探究活动

- 如何搭建月球探险车？
- 如果编写一个简单的程序，使月球探险车运行？
- 月球探险车如何规避月球的陨石坑和碎石？

### 案例搭建

根据现有月球探险车形式和组成，请开放讨论并合理设计积木月球探险车。

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

点击左下角的![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual07.png)，选择 **Connect Device**。

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

学生分成小组，共同完成月球探险车的制作和程序编写。

鼓励学生之间相互合作、交流和分享经验。

每个小组有机会向其他小组展示他们制作的月球探险车，并演示。

**预期效果：**。

（GIF动图）

### 总结与反思

回顾课程内容，提醒学生掌握了哪些知识和技能。

引导学生讨论他们在制作过程中遇到的问题和困难，以及如何解决这些问题。

引导学生思考月球探险车的优化和改进方向，比如还能制作哪些有趣的案例。

## 扩展知识

月球探险车，也称为月球巡视器或月球车，是在月球表面进行探索的自动化或半自动化车辆。这些车辆设计用于在月球的恶劣环境中执行一系列科学任务。下面是关于月球探险车的组成、在月球执行的任务以及相关知识：

### 组成

月球探险车的主要组成部分包括：

1. **移动平台**：通常由六个或四个轮子组成，配备有独立悬挂系统，以适应月球表面的不平地形。
2. **能源系统**：大多数月球车使用太阳能电池板作为主要能源，部分型号可能还会配备辅助电池。对于长时间的夜间操作，有的月球车会使用放射性同位素热电发生器（RTG）。
3. **科学仪器**：包括摄像头、光谱仪、显微镜、土壤分析仪、磁力计、雷达等，用于收集月球表面的物理、化学和地质信息。
4. **通信系统**：用于与地球上的控制中心通信，传输数据和接收指令。
5. **导航系统**：包括GPS替代技术、视觉导航系统等，用于自主或远程操控下的导航。
6. **机械臂**：部分月球车装备有机械臂，用于取样或执行其他精细操作。

### 执行的任务

月球探险车的主要任务包括：

1. **地形测绘**：使用车载摄像头和雷达设备绘制月球表面的详细地图。
2. **样本分析**：收集月球土壤和岩石样本，进行现场分析，了解月球的地质历史和成分。
3. **环境监测**：测量月球的辐射水平、温度变化和其他环境参数。
4. **资源勘探**：寻找水冰、矿产资源等，评估月球的潜在价值和未来基地建设的可能性。
5. **技术验证**：测试新技术，如自主导航、能源供应系统，为未来的月球基地和人类探索做准备。

### 相关知识

- **玉兔号系列**：中国嫦娥三号和四号任务中的月球车，分别在月球正面和背面进行了探索。
- **月球资源勘探者（VIPER）**：NASA计划中的月球车，旨在探索月球南极附近的水资源。
- **印度的普拉吉安号**：印度月船三号任务中的月球车，旨在研究月球表面的物质组成和环境。
- **月球车的挑战**：月球车必须面对极端温差、微重力、高剂量辐射和尘埃覆盖等环境问题。

月球探险车的设计和任务规划需要考虑月球的独特条件，包括没有大气保护、昼夜温差极大、缺乏地球上的卫星导航信号等，因此每一步都充满了挑战和技术创新。
