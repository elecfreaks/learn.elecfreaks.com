---
sidebar_position: 6
sidebar_label: 免接触垃圾桶
---

# 免接触垃圾桶

## 简介

在本项目中，我们将学习如何制作一个免接触垃圾桶，利用超声波传感器监测是否有人靠近，当有人靠近时，自动打开垃圾桶。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-life-kit/images/case-06-01.png)

## 教学目标

复习超声波传感器的使用方式

学习如何使用硬件和工具去解决生活中的问题

## 教学准备

在开始教学之前，请确保您已经准备好以下必要的材料：

| **图片** | **名称** | **数量** | **备注** |
| --- | --- | --- | --- |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-life-kit/images/microbit-smart-life-kit.png) | 智慧生活套装 | 1 |  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/USB-data-cable.png) | USB数据线 | 1 |   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit.png) | micro:bit | 1 | 自行准备 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/pc.png) | PC | 1 | 自行准备 |

这些材料将为您提供一个完整的体验，确保您可以顺利地进行后续的操作和学习。如果您已准备好以上内容，我们可以继续进入下一步。

## 课程引入

垃圾桶是我们生活中常见的藏污纳垢的地方，隐藏着大量的细菌和病毒，但我们的日常生活中不可避免会产生一些垃圾，那么怎么尽量让我们与垃圾桶的接触减少到最低呢？

## 项目制作

### 硬件连接

将超声波传感器连接到wukong扩展板的P1接口，180°舵机连接到wukong扩展板的S1接口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-life-kit/images/case-06-02.png)

### 编程平台

我们通常使用[图形化编程平台makecode](https://makecode.microbit.org/)对micro:bit进行编程

编程平台入口：[https://makecode.microbit.org/](https://makecode.microbit.org/)

### 新建项目

打开[https://makecode.microbit.org/](https://makecode.microbit.org/)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode.png)

新建项目

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode-new-project-01.png)

输入项目名称并点击创建。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode-new-project-02.png)

### 添加软件库

在makecode编程界面的Toolbox点击Extensions。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-02.png)

在弹出页面搜索`iot-environment-kit`，并点击选择iot-environment-kit的软件库。


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-03.png)

在弹出页面搜索`wukong`，并点击选择wukong软件库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-04.png)


### 编写程序

示例程序：[https://makecode.microbit.org/_9mhFH7d5pDJi](https://makecode.microbit.org/_9mhFH7d5pDJi)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-life-kit/images/case-06-03.png)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_9mhFH7d5pDJi"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>




### 如何将程序下载到micro:bit？

使用USB线连接PC和micro:bit V2。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/connect-microbit.gif)

连接成功后，电脑上会识别出一个名为`MICROBIT`的盘符。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-drive.png)

点击左下角的![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-01.png)，选择`Connect Device`。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-02.png)

点击![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-03.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-04.png)

点击![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-05.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-06.png)


在弹出窗口选择`BBC micro:bit CMSIS-DAP`，然后选择连接，至此，我们的micro:bit就已经连接成功。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-07.png)

点击下载程序。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-08.png)


### 结果

当有人靠近免接触垃圾桶时，垃圾桶自动开启盖子。


## 扩展知识

**智能垃圾桶的优点**
智能垃圾桶作为一种新兴的家居产品，相较于传统垃圾桶，具有许多显著的优点：

自动感应开盖：智能垃圾桶通常配备红外感应器，当人的手或物体接近时，桶盖会自动开启，避免手动接触，更加卫生方便。

自动打包和换袋：一些智能垃圾桶具备自动打包垃圾袋的功能，方便用户更换垃圾袋，保持垃圾桶的清洁。

分类提示和教育：智能垃圾桶可以通过语音或屏幕提示，指导用户正确分类垃圾，有助于提升公众的环保意识和垃圾分类知识。

数据收集与分析：部分智能垃圾桶能够收集使用数据，帮助管理人员了解垃圾的种类和数量，优化垃圾处理流程。

节能和环保：智能垃圾桶设计上注重节能，通常使用电池供电，耗电低，且密封性能好，减少异味和蚊虫问题。

提高效率：智能垃圾桶的自动开盖功能可以加快垃圾投放速度，提高公共区域的清洁效率。

美观设计：智能垃圾桶在外观设计上往往更加现代化和美观，可以融入不同的家居或公共环境。

减少异味：智能垃圾桶通常具有良好的密封性，可以防止垃圾异味散发，保持环境清新。

智能杀菌：一些高端智能垃圾桶具备杀菌功能，可以减少细菌滋生，保护用户健康。

社区宣传：智能垃圾桶还可以作为社区宣传工具，通过语音播报等方式进行环保宣传和信息通知。

智能垃圾桶的这些优点使其成为提升生活品质和推动环保的重要工具。然而，它们也存在一些缺点，如需要定期更换电池、对环境的适应性要求较高、以及可能的成本问题。不过，随着技术的进步和成本的降低，这些缺点正在逐渐被克服。
