---
sidebar_position: 29
---

# Case 28 避障巡线车

## 简介

在这个项目中，我们将使用哪吒发明家套装V2制作一辆智能小车，它不仅能够沿着黑线进行巡线，还能够在巡线的同时避开障碍物。我们将学习双路巡线传感器和超声波传感器的工作原理，并将它们应用到小车的制作中。


![](./images/nezha-inventors-kit-v2-case-28-01.png)



## 教学目标

- 理解双路巡线传感器的工作原理
- 理解超声波传感器的工作原理
- 学会使用哪吒发明家套装V2进行机械结构搭建
- 学会安装和连接双路巡线传感器和超声波传感器
- 学会编写程序控制小车进行巡线和避障

## 教学准备

[哪吒发明家套装 V2](https://www.elecfreaks.com/nezha-inventor-s-kit-v2-for-micro-bit.html)


## 教学过程

### 引入

>向学生介绍避障巡线车制作的背景和目标，激发学生的兴趣和好奇心。

现在，让我们一起思考一下：如果我们有一辆小车，它不仅能够自动沿着黑线行驶，还能够智能地避开障碍物，那将是多么有趣和实用的机器人呢？这个小车能够在追踪黑线的同时，通过超声波传感器检测前方障碍物，并采取相应的动作来避开它们。

在本次课程中，我们将深入了解双路巡线传感器和超声波传感器的工作原理，并将它们应用到巡线小车的制作中。我们将学习如何搭建小车的机械结构，并将双路巡线传感器和超声波传感器安装到车身上。通过编写程序，我们将实现小车在巡线的同时能够智能地避开障碍物。

### 探究

>分组讨论，让学生思考如何用积木材料来制作一辆避障巡线车。

- 双路巡线传感器是如何工作的？它是如何识别黑线的？
- 超声波传感器是如何工作的？它是如何检测前方的障碍物的？
- 如何将双路巡线传感器和超声波传感器与哪吒发明家套装V2连接并进行编程控制？
- 在小车巡线的同时，如何根据超声波传感器的信号智能地避开障碍物？

### 实践

>分组动手，按照自己的设计方案，用积木材料来制作一辆避障巡线车。

按照自己的设计方案，用积木材料来制作一辆避障巡线车。

#### 示例

##### 搭建步骤

![](./images/nezha-inventors-kit-v2-step-28-01.png)

![](./images/nezha-inventors-kit-v2-step-28-02.png)

![](./images/nezha-inventors-kit-v2-step-28-03.png)

![](./images/nezha-inventors-kit-v2-step-28-04.png)

![](./images/nezha-inventors-kit-v2-step-28-05.png)

![](./images/nezha-inventors-kit-v2-step-28-06.png)

![](./images/nezha-inventors-kit-v2-step-28-07.png)

![](./images/nezha-inventors-kit-v2-step-28-08.png)

![](./images/nezha-inventors-kit-v2-step-28-09.png)

![](./images/nezha-inventors-kit-v2-step-28-10.png)

![](./images/nezha-inventors-kit-v2-step-28-11.png)

![](./images/nezha-inventors-kit-v2-step-28-12.png)

![](./images/nezha-inventors-kit-v2-step-28-13.png)

![](./images/nezha-inventors-kit-v2-step-28-14.png)

![](./images/nezha-inventors-kit-v2-step-28-15.png)

![](./images/nezha-inventors-kit-v2-step-28-16.png)

![](./images/nezha-inventors-kit-v2-step-28-17.png)

![](./images/nezha-inventors-kit-v2-step-28-18.png)

![](./images/nezha-inventors-kit-v2-step-28-19.png)

![](./images/nezha-inventors-kit-v2-step-28-20.png)

![](./images/nezha-inventors-kit-v2-step-28-21.png)

![](./images/nezha-inventors-kit-v2-step-28-22.png)

![](./images/nezha-inventors-kit-v2-step-28-23.png)

![](./images/nezha-inventors-kit-v2-step-28-24.png)

**搭建完成**

![](./images/nezha-inventors-kit-v2-case-28-01.png)

### 硬件连接

将巡线传感器连接到哪吒扩展板的J1接口，超声波传感器连接到哪吒扩展板的J2接口，电机连接到哪吒扩展板的M1、M2接口。

![](./images/nezha-inventors-kit-v2-case-28-02.png)

### 软件编程

打开编程平台[makecode](https://makecode.microbit.org/#)

新建项目

![](./images/nezha-inventors-kit-v2-case-19-03.png)

点击扩展

![](./images/nezha-inventors-kit-v2-case-19-04.png)

在搜索栏搜索`PlanetX`添加行星系列传感器的扩展库

![](./images/nezha-inventors-kit-v2-case-19-05.png)

在搜索栏搜索`nezha`添加哪吒扩展板的扩展库

![](./images/nezha-inventors-kit-v2-case-19-06.png)

编写程序

![](./images/nezha-inventors-kit-v2-case-28-07.png)


程序链接:[https://makecode.microbit.org/_V4mTg3PiwPjy](https://makecode.microbit.org/_V4mTg3PiwPjy)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_V4mTg3PiwPjy"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

## 展示

>分组展示，尝试制作遥控遥控，比较各组的成果和效果。

#### 示例案例效果

小车沿着黑线行驶，当遇到障碍物时则自动停车。

![](./images/nezha-inventors-kit-v2-case-28.gif)

### 反思

>分组分享，让每组的学生分享自己的制作过程和心得，总结自己遇到的问题和解决办法，评价自己的优点和不足。
