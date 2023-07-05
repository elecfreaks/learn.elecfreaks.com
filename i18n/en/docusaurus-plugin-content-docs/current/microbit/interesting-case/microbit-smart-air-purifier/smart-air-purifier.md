---
sidebar_position: 3
sidebar_label: 智能空气净化器
---

# 智能空气净化器



## 简介

室内空气质量是我们很关心的话题，本案例将使用 Octopus 系列中的灰尘传感器与电机风扇模拟室内空气质量检测和改善的过程。

本案例将灰尘传感器和电机风扇安装在木制的小房子上面，灰尘传感器能够实时检测室内空气中的灰尘浓度，并将数据传输给 micro:bit。当灰尘浓度超过设定的阈值时，micro:bit 会发出信号，控制电机风扇启动。电机风扇被安装在小房子的一侧，当接收到信号后，它会自动启动并开始吹拂室内空气。通过风扇的运转，室内的空气得以循环流动，从而有效净化室内空气，提高空气质量。

这个智能空气净化器案例不仅能够帮助学生了解和学习有关传感器和电机的原理，还能够培养他们对环境保护和健康意识的重视。学生们可以通过调整灰尘传感器的阈值，自定义空气质量的标准，并且可以通过编写代码对电机风扇的运行进行控制。

通过这个案例，学生们将能够亲自动手制作一个简单而实用的智能设备，体验创客的乐趣，并且在实践中提升他们的科学技术能力和创新思维。

## 组件清单

1 × micro:bit V2

1 × IOT:bit

1 × 八爪鱼灰尘传感器

1 × 八爪鱼电机风扇

1 × micro USB 数据线

1 × 木制小屋

## 相关知识介绍

### micro:bit 主板介绍

![](./images/microbit-smart-maker-kit-case02-01.png)

micro:bit 是一款专为青少年编程教育目的而设计的微型计算机，尺寸只有4cm x 5cm，但它拥有一系列的传感器和LED灯，可以用来控制和监测物理世界。

micro:bit 可以通过 USB 线或蓝牙连接到计算机，并使用编程软件进行编程。它支持多种编程语言，包括Microsoft MakeCode、Python和 JavaScript 等。学生可以使用这些编程语言来编写代码，控制 micro:bit 上的传感器和 LED 灯，创造各种有趣的项目。

micro:bit 的设计简单易用，适合初学者使用。它可以用于各种教育活动，如编程课程、科学实验和创客活动等。通过使用 micro:bit，学生可以培养创造力、解决问题的能力和团队合作精神。

更多关于 micro:bit 的信息，欢迎访问：[micro:bit 官网](https://microbit.org/)。

### IOT:bit  扩展板介绍

![](./images/microbit-smart-maker-kit-case02-01-1.png)

IOT:bit 是一款专为 micro:bit 设计的扩展板，它能够将 micro:bit 变成一个强大的物联网设备。通过连接各种传感器和执行器，IOT:bit 可以实现与互联网的连接和数据传输，让 micro:bit 具备更多的智能功能。

IOT:bit 板载了众多GPIO接口，可以方便地连接各种模块和传感器，实现对环境和物体的监测和控制。

IOT:bit 支持 Wi-Fi 功能，通过与 micro:bit 的连接，使用 Wi-Fi 功能连接到互联网，或者通过蓝牙与其他设备进行数据传输。这使得 micro:bit 可以与云平台、手机或其他物联网设备进行数据交互，实现更多的应用场景。

IOT:bit 的设计简单易用，适合中小学教育和创客项目，可以帮助学生们更好地理解物联网的原理和应用，培养他们的创新思维和科学技术能力。

无论是在课堂教学中还是个人创客项目中，IOT:bit 都是一个强大而有趣的工具。

更多关于 IOT:bit 的信息，欢迎访问：[IOT:bit 物联网扩展板介绍 Wiki 链接](http://wiki.elecfreaks.com/en/microbit/expansion-board/iot-bit/)。

### 八爪鱼系列灰尘传感器

![](./images/microbit-smart-maker-kit-case02-01-4.png)

灰尘传感器是一种空气质量传感器，用于检测空气中的微尘颗粒物浓度。

它使用红外光散射原理来测量颗粒物的浓度。传感器内部包含一个红外光源和一个光敏元件。当空气中的颗粒物通过传感器时，它们会散射红外光，光敏元件会测量到散射光的强度。根据散射光的强度，传感器可以估计出空气中颗粒物的浓度。

灰尘传感器具有高灵敏度和快速响应的特点。它可以检测直径在0.5到2.5微米之间的颗粒物，这些颗粒物通常是空气中最危险的微尘颗粒物，如细菌、花粉、烟雾等。传感器输出的电压信号与颗粒物的浓度成正比。

这种传感器通常用于空气净化器、空气质量监测设备和工业环境监测等领域。它可以帮助人们了解周围空气的质量，并采取相应的措施来改善空气质量。

关于更多灰尘传感器的信息，欢迎访问：[八爪鱼系列灰尘传感器介绍 Wiki 链接](http://wiki.elecfreaks.com/en/microbit/sensor/octopus-sensors/sensor/octopus_ef11083/)。

### 八爪鱼系列电机风扇

![](./images/microbit-smart-maker-kit-case02-01-3.png)

电机是依据电磁感应定律实现电能转换为动能的一种装置。该电机的基本部件包括电枢和定子。电枢线圈是电机的分类非常多，在本案例里，我们用到的是直流电机。当在电机两端加上直流电压时，电机会旋转，电压越高，旋转的速度越快。

![](./images/microbit-smart-maker-kit-case02-01-2.gif)

关于更多电机风扇的信息，欢迎访问：[八爪鱼系列电机风扇介绍 Wiki 链接](http://wiki.elecfreaks.com/en/microbit/sensor/octopus-sensors/output/octopus_ef04059/)。

## 硬件连接

### 木制房屋搭建步骤



### 八爪鱼传感器连接示意图

灰尘传感器的 LED IN 连接 IOT:bit  的 P1,OUT 连接 P2，电机风扇连接 P16

## 开始编程

### 编程准备

本案例的控制程序将在 micro:bit 官方编程平台：MakeCode上完成编写。请点击并打开 MakeCode 官方链接：https://makecode.microbit.org/。如下图所示：

![](./images/microbit-smart-maker-kit-case02-02.png)



第一步需要新建项目文件，请点击“New Project”，输入项目名称并点击“Create”。

![](./images/microbit-smart-maker-kit-case02-03.png)



第二步需要添加 iot-environment-kit 库文件，点击积木库列表中的"Extensions"，输入“iot-environment-kit”搜索并添加。在返回的编程界面中看到已经将 iot-environment-kit 库文件添加成功。

![](./images/microbit-smart-maker-kit-case02-04.png)

### 编程示例

![](./images/microbit-smart-maker-kit-case02-05.png)



程序示例链接：https://makecode.microbit.org/S78289-58742-68994-22523

## 案例演示



## 思考

室内温湿度的变化也是我们很关心的话题。通过本案例的学习，请您举一反三思考使用八爪鱼系列的温湿度传感器检测室内的温湿度数值变化并在达到某一阈值时发出警报的作品如何实现？

## 常见问题

1. 八爪鱼系列的电机风扇需要采用 IOT:bit  扩展板中 USB 充电口供电，否则无法运行。
2. 请将 IOT:bit  的电源开关打开。
3. 在将 micro:bit 插入和拔出 IOT:bit  的插槽的时候，请按住 micro:bit 左右两侧操作，这样更容易操作。

## 更多信息，欢迎访问：

ELECFREAKS 官方网站：[ELECFREAKS 官网](https://www.elecfreaks.com/)。
