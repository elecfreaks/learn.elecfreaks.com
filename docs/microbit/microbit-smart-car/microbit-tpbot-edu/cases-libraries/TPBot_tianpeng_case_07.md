---
sidebar_position: 7
sidebar_label: 走方格
---

# 案例07：走方格

## 简介

本课程旨在引导学生制作走方格案例，复习编码电机及陀螺仪的相关知识。

## 教学目标


学习使用Makecode软件创建程序控制小车的行驶路线。

## 教学准备

在开始教学之前，请确保您已经准备好以下必要的材料：

| 图片 | 名称 | 数量 | 备注 |
|---|---|---|---|
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-tpbot-edu/TPBot_tianpeng_edu.png)| 天蓬智能车教育版 | 1 |   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/USB-data-cable.png) | USB数据线 | 1 |   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit.png) | micro:bit | 1 | 自行准备 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/pc.png) | PC | 1 | 自行准备 |

## 课程引入

大家好！欢迎来到这个充满乐趣和挑战的新课程。今天，我们将一起探索如何使用编程来控制小车，让它在一张特别的地图上完成预设的路线任务。这不仅是一个编程练习，也是一个逻辑思维和策略规划的挑战。

**课程背景**
我们有一张由6个格子组成的地图，每个格子是一个20cm的正方形方格。这张地图将成为我们的小车探险的舞台。你的任务是编写程序，让小车沿着预设的路线，从一个格子移动到另一个格子，直到完成整个任务。

## 探究活动

理解坐标系统：如何确定小车在地图上的位置。
编程逻辑：如何编写程序让小车按照指定的路线移动。
调试与测试：如何测试和调整你的程序，确保小车能够顺利完成任务。

## 软件

[微软makecode](https://makecode.microbit.org/#)


## 编程

在MakeCode的代码抽屉中点击`高级`，查看更多代码选项。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-tpbot/images/TPBot_tianpeng_case_01_02.png)

为了给天蓬智能车编程，我们需要添加一个扩展库。在代码抽屉底部找到`扩展`，并点击它。这时会弹出一个对话框，搜索`tpbot`，然后点击下载这个代码库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-tpbot/images/TPBot_tianpeng_case_01_03.png)


## 示例程序

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-tpbot-edu/TPBot_tianpeng_edu_case_07_07.png)

### 程序

请参考程序连接：[https://makecode.microbit.org/_eDCTrrP6eeXA](https://makecode.microbit.org/_eDCTrrP6eeXA)


你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_eDCTrrP6eeXA"
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


当开机后，小车按预定的路线行驶。


## 扩展知识

**坐标系统**

坐标系统是数学和物理学中用来确定空间中点的位置的一种方法。以下是坐标基础知识的简要介绍：

**一维坐标系统（数轴）**
最简单的坐标系统是一维的，通常表现为一条直线，称为数轴。
在数轴上，每个点都有一个数值坐标，可以是正数、负数或零。
数轴上的正方向通常向右，负方向向左。
**二维坐标系统（平面直角坐标系）**
二维坐标系统扩展了一维系统，允许我们在平面上确定点的位置。
它由两条互相垂直的数轴组成，通常称为x轴（水平）和y轴（垂直）。
这两条轴相交的点称为原点，其坐标为(0, 0)。
任何平面上的点都可以通过一对数值坐标(x, y)来确定，其中x表示水平方向的位置，y表示垂直方向的位置。
**三维坐标系统（空间直角坐标系）**
三维坐标系统进一步扩展了二维系统，允许我们在三维空间中确定点的位置。
它由三条互相垂直的数轴组成，通常称为x轴、y轴和z轴。
这三个轴相交的点也是原点，其坐标为(0, 0, 0)。
空间中的任何点都可以通过三个数值坐标(x, y, z)来确定，其中x、y和z分别表示点在三个轴上的位置。
**坐标的表示**
在坐标系统中，坐标通常以有序对或有序三元组的形式表示。
例如，在二维坐标系中，点A的坐标可以表示为(3, 4)，表示点A在x轴上距离原点3个单位，在y轴上距离原点4个单位。
在三维坐标系中，点B的坐标可以表示为(2, 5, -1)，表示点B在x轴上距离原点2个单位，在y轴上距离原点5个单位，在z轴上距离原点1个单位的负方向。
**坐标的应用**
坐标系统在数学、物理、工程、计算机图形学等领域有着广泛的应用。
在地图制作和导航中，坐标系统用于确定地理位置。
在计算机图形和游戏开发中，坐标系统用于确定屏幕上对象的位置。
理解坐标系统是理解更复杂数学概念和参与许多科学及技术活动的基础。
