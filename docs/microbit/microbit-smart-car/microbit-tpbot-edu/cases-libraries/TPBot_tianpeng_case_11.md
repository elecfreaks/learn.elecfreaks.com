---
sidebar_position: 11
sidebar_label: 定距跟车
---

# 案例11：定距跟车

## 简介

本课程旨在引导学生制作定距跟车的案例，结合micrro:bit的功能来制作案例。

## 教学目标

理解定距跟车的原理：学习如何通过传感器监测前车的距离，并根据这个距离调整小车的速度。

## 教学准备

在开始教学之前，请确保您已经准备好以下必要的材料：

| 图片 | 名称 | 数量 | 备注 |
|---|---|---|---|
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-tpbot-edu/TPBot_tianpeng_edu.png)| 天蓬智能车教育版 | 1 |   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/USB-data-cable.png) | USB数据线 | 1 |   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit.png) | micro:bit | 1 | 自行准备 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/pc.png) | PC | 1 | 自行准备 |

## 课程引入

欢迎来到我们的最新课程——定距跟车技术。在这个课程中，我们将探索如何让我们的小车像经验丰富的驾驶员一样，能够在行驶过程中自动保持与前车的安全距离。这是一个既实用又充满挑战的技术，它涉及到传感器的应用、数据处理和智能决策等多个方面。

## 探究活动

超声波传感器的应用场景有哪些？

## 软件

[微软makecode](https://makecode.microbit.org/#)


## 编程

在MakeCode的代码抽屉中点击`高级`，查看更多代码选项。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-tpbot/images/TPBot_tianpeng_case_01_02.png)

为了给天蓬智能车编程，我们需要添加一个扩展库。在代码抽屉底部找到`扩展`，并点击它。这时会弹出一个对话框，搜索`tpbot`，然后点击下载这个代码库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-tpbot/images/TPBot_tianpeng_case_01_03.png)


## 示例程序

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-tpbot-edu/TPBot_tianpeng_edu_case_11_07.png)

### 程序

请参考程序连接：[https://makecode.microbit.org/_0pwh2iHkLhLq](https://makecode.microbit.org/_0pwh2iHkLhLq)


你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_0pwh2iHkLhLq"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>


## 结论


小车自动保持与前车的距离。


## 扩展知识

**超声波传感器在生活中的应用**
超声波传感器因其非接触式测量、精度高、响应快等优点，在各个领域得到了广泛的应用。以下是一些超声波传感器在生活中的应用实例：

1. 汽车辅助驾驶系统
超声波传感器被广泛应用于汽车辅助驾驶系统中，如倒车雷达，它们通过安装在车辆四周的多个探头帮助驾驶员感知周围环境，提供盲点检测，并在有人处于盲区时提醒驾驶员。

2. 工业自动化
在工业自动化领域，超声波传感器用于检测产品的位置和距离，确保生产过程的精度和安全，包括物料搬运和装配线上的定位控制。

3. 液位监测
超声波传感器适用于各种储罐内液体高度的实时监控，广泛应用于水库、水箱和化学罐体的液位监控。

4. 智能家居
超声波传感器在智能家居中也有广泛应用，如自动门、智能垃圾桶和防盗系统，提供便捷和安全的居家环境。
