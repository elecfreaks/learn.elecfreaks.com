---
sidebar_position: 6
sidebar_label: 案例06 返回器
---

# 案例06 返回器

## 简介

本课程旨在向学生介绍返回器的组成部分以及在月执行任务相关的知识。学生将使用 micro:bit 太空科创套装学习如何编写程序来控制返回器的运行。



## 教学目标

- 了解返回器的结构和运行方式。
- 了解返回器的执行任务知识。
- 学习返回器的搭建方式和编程控制。

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

你们是否思考过返回器的组成以及运作方式呢？在本节课中，我们将一起探索如何通过积木结构件搭建返回器以及通过图形化程序控制返回器的运行。

准备好使用 micro:bit 太空科创套装探索太空旅行的世界了吗？现在，让我们踏上这个有趣的学习旅程吧！

### 探究活动

- 如何搭建返回器？
- 如果编写一个简单的程序，使返回器运行？
- 返回器如何与返回器

### 案例搭建

根据现有返回器形式和组成，请开放讨论并合理设计积木返回器。

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

学生分成小组，共同完成返回器的制作和程序编写。

鼓励学生之间相互合作、交流和分享经验。

每个小组有机会向其他小组展示他们制作的返回器，并演示。

**预期效果：**。

（GIF动图）

### 总结与反思

回顾课程内容，提醒学生掌握了哪些知识和技能。

引导学生讨论他们在制作过程中遇到的问题和困难，以及如何解决这些问题。

引导学生思考返回器的优化和改进方向，比如还能制作哪些有趣的案例。

## 扩展知识

登月过程中的返回器是完成月球着陆任务的关键组件，它负责将航天员和科学设备安全地从环月轨道带到月球表面，并在任务完成后将航天员带回环月轨道。返回器的设计非常复杂，需要具备多种功能以应对月球环境的挑战。下面是一些关于返回器组成的通用知识：

### 基本组成

1. **登月舱**：
   - 这是返回器中包含航天员的部分，也称为乘员舱或指令舱。它通常包含生命支持系统、通信设备、导航系统和紧急逃生装置。
2. **推进舱**：
   - 包含主发动机和推进剂储罐，用于控制返回器的下降速度和方向，确保平稳着陆和再次起飞。
3. **着陆腿和缓冲装置**：
   - 用于吸收着陆时的冲击，防止返回器倾覆或损坏。
4. **太阳能电池板**：
   - 提供电力，尤其是在长期任务中，用于给电子设备供电和保持生命支持系统的运行。
5. **姿态控制系统**：
   - 包括小型推进器和反作用轮，用于在太空中调整返回器的姿态。
6. **导航和制导系统**：
   - 使用激光测距仪、惯性导航单元和星象仪来确定位置和速度，确保准确着陆。
7. **科学仪器和实验设备**：
   - 可能包含相机、光谱仪、地震仪等，用于执行科学研究和数据收集。
8. **月球车或其他地面交通工具**：
   - 一些返回器可能会携带月球车或漫游车，以便航天员可以离开返回器进行更广泛的探索。
9. **样本采集和存储系统**：
   - 如果任务包括收集月球样本，那么返回器将包含用于采集和保存样本的设备。

### 特殊设计考量

- **动力系统**：为了在月球上着陆和起飞，返回器必须使用不同于化学火箭的推进系统，因为月球上没有大气层来产生升力。通常使用液态燃料和氧化剂的组合。
- **重量和体积限制**：返回器必须尽可能轻便，以减少发射成本和提高效率。同时，它需要有足够的空间容纳航天员和设备。
- **热控系统**：月球表面的温度变化极大，返回器必须能够维持内部的适宜温度。
- **冗余系统**：为了保证航天员的安全，许多关键系统都有备份，以防万一某个部件出现故障。

### 具体实例

- **美国阿波罗计划的鹰号返回器**：由登月舱和上升舱组成，后者用于重返环月轨道。
- **中国的“揽月”返回器**：属于中国载人登月计划的一部分，设计用于运送航天员往返月球表面。
- **NASA的Nova C返回器**：使用甲烷和氧气作为燃料，旨在探索月球南极区域。

每个返回器的设计都会根据其具体任务需求和所使用的航天器架构而有所不同。
