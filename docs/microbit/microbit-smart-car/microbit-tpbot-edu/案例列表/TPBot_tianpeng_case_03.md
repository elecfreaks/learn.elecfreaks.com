---
sidebar_position: 3
sidebar_label: 精准转向
---

# 案例03：精准转向

## 简介

本课程旨在向学生介绍图形化编程和陀螺仪的概念。学生将使用天蓬智能车教育版学习如何编写程序来控制小车的转向角度。

## 教学目标

了解陀螺仪的基本概念。

学习使用Makecode软件创建程序控制小车的转向角度。

## 教学准备

在开始教学之前，请确保您已经准备好以下必要的材料：

| 图片 | 名称 | 数量 | 备注 |
|---|---|---|---|
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot-pro/images/power-indicator-01.png)| 天蓬智能车教育版 | 1 |   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/USB-data-cable.png) | USB数据线 | 1 |   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit.png) | micro:bit | 1 | 自行准备 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/pc.png) | PC | 1 | 自行准备 |

## 课程引入

继上一节课我们成功探索了如何通过图形化程序控制天蓬智能车教育版的行驶距离后，今天我们将进入一个更加激动人心的话题：控制小车的转向角度。你是否曾经想过，如何让一辆小车像真正的汽车一样，能够灵活地转弯和避障呢？

在本节课中，我们将揭开陀螺仪的神秘面纱，并学习如何利用它来精确控制天蓬智能车的转向角度。陀螺仪是一种能够感知和测量旋转角度的传感器，它在我们的智能车中扮演着至关重要的角色。

现在，让我们开始这段激动人心的学习旅程，一起探索如何让天蓬智能车在各种环境中自如地转向吧！

## 探究活动

如何使用图形化编程模块来控制小车的转动方向？

陀螺仪的基本原理和它如何帮助我们测量角度。

## 软件

[微软makecode](https://makecode.microbit.org/#)


## 编程

在MakeCode的代码抽屉中点击`高级`，查看更多代码选项。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-tpbot/images/TPBot_tianpeng_case_01_02.png)

为了给天蓬智能车编程，我们需要添加一个扩展库。在代码抽屉底部找到`扩展`，并点击它。这时会弹出一个对话框，搜索`tpbot`，然后点击下载这个代码库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-tpbot/images/TPBot_tianpeng_case_01_03.png)


## 示例程序

在积木抽屉中拖出一个`向前方移动0厘米`的积木块和`设置小车左转0度`的积木块放入`当按钮A被按下时`中，并按以下图示修改参数。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-tpbot-edu/TPBot_tianpeng_edu_case_03_07.png)

### 程序

请参考程序连接：[https://makecode.microbit.org/_WYj3k574g31v](https://makecode.microbit.org/_WYj3k574g31v)


你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_WYj3k574g31v"
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


当按钮A被按下后，天蓬智能车先向前行驶30cm，然后原地左转90°，最后再向前行驶30cm。


## 扩展知识


陀螺仪是一种能够测量和维持方向的设备，它的原理基于角动量守恒。下面我将用简单易懂的语言来解释陀螺仪的工作原理：

**陀螺仪的基本概念**

想象你有一个旋转的陀螺，当你把它放在地上，它会保持旋转的方向不变，即使地面是倾斜的。这就是陀螺仪的基本特性：它能够抵抗方向的改变。

**陀螺仪的工作原理**

1. **高速旋转的轮子**：陀螺仪内部有一个非常小但高速旋转的轮子，我们称之为转子。这个转子就像陀螺一样，一旦开始旋转，就会保持旋转的方向。

2. **角动量**：转子的高速旋转产生了一种叫做角动量的特性。角动量是一种物理量，它描述了物体旋转的“量”。角动量越大，物体抵抗方向改变的能力就越强。

3. **外部力的影响**：当陀螺仪的外壳（框架）发生旋转时，由于角动量守恒，转子会抵抗这种旋转，保持原来的方向。这种抵抗会导致转子轴相对于外壳发生偏移。

4. **测量偏移**：陀螺仪内部装有传感器，能够检测转子轴的偏移。这些传感器可以是光电传感器或者加速度计，它们能够将机械偏移转换成电信号。

5. **信号处理**：这些电信号随后被放大、滤波和转换，最终变成数字信号，告诉我们转子轴相对于初始位置的偏移量，也就是旋转的角度。

**陀螺仪的应用**

陀螺仪的这种特性让它在很多领域都有应用，比如：

- **导航系统**：在飞机、船只和汽车的导航系统中，陀螺仪可以帮助确定方向和姿态。
- **手机和游戏控制器**：在智能手机和游戏控制器中，陀螺仪可以检测设备的倾斜和旋转，提供更自然的交互体验。
- **机器人**：在机器人技术中，陀螺仪可以帮助机器人保持平衡，或者在移动时保持正确的方向。

通过这些原理，陀螺仪能够准确地测量和维持方向，为我们的技术和设备提供了重要的支持。
