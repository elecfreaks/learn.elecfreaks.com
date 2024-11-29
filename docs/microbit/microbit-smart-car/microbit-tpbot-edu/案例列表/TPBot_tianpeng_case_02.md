---
sidebar_position: 2
sidebar_label: 定距巡航
---

# 案例02：定距巡航

## 简介

本课程旨在向学生介绍图形化编程和编码电机的概念。学生将使用天蓬智能车教育版学习如何编写程序来控制小车的行驶距离。

## 教学目标

了解编码电机的基本概念。

学习使用Makecode软件创建程序控制小车的行驶距离。

## 教学准备

在开始教学之前，请确保您已经准备好以下必要的材料：

| 图片 | 名称 | 数量 | 备注 |
|---|---|---|---|
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot-pro/images/power-indicator-01.png)| 天蓬智能车教育版 | 1 |   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/USB-data-cable.png) | USB数据线 | 1 |   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit.png) | micro:bit | 1 | 自行准备 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/pc.png) | PC | 1 | 自行准备 |

## 课程引入

在本节课，我们将探索如何通过图形化程序控制天蓬智能车教育版的行驶距离。你是否好奇如何使用编程来精确控制一辆小车行驶的距离呢？

现在，让我们来认识一下天蓬智能车教育版。它是一辆特殊的小车，具备编码电机，可以精确控制行驶的距离。这意味着我们可以编写程序来让它行驶特定的距离，无论是100厘米还是10厘米，我们都可以控制得非常准确。

在今天的课程中，我们将学习如何编写一个精确控制行驶距离的程序和一个精确控制行驶速度的程序，并通过实践来验证我们的程序是否有效。

现在，让我们一起动手实践吧！准备好使用天蓬智能车教育版探索图形化编程的世界了吗？让我们一起开启这个充满创造力和乐趣的学习旅程吧！

## 探究活动

如何使用图形化编程模块来控制小车的行驶距离？

精确控制行驶距离的技术有什么实际的应用场景？



## 软件

[微软makecode](https://makecode.microbit.org/#)


## 编程

在MakeCode的代码抽屉中点击`高级`，查看更多代码选项。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-tpbot/images/TPBot_tianpeng_case_01_02.png)

为了给天蓬智能车编程，我们需要添加一个扩展库。在代码抽屉底部找到`扩展`，并点击它。这时会弹出一个对话框，搜索`tpbot`，然后点击下载这个代码库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-tpbot/images/TPBot_tianpeng_case_01_03.png)



## 示例程序

在积木抽屉中拖出一个`向前方移动0厘米`的积木块放入`当按钮A被按下时`中，并将参数0修改为100。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-tpbot-edu/TPBot_tianpeng_edu_case_01_08.png)

### 程序

请参考程序连接：[https://makecode.microbit.org/_MkYeiz8RtdCW](https://makecode.microbit.org/_MkYeiz8RtdCW)


你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_MkYeiz8RtdCW"
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


当按钮A被按下后，天蓬智能车向前行驶100厘米后自动停车。


## 扩展知识


**编码电机的工作原理**

想象一下，你有一个非常特别的玩具车，这个车不仅能够前进和后退，还能准确地告诉你它转了多少圈，或者它现在面向哪个方向。这个玩具车就像是一个编码电机。

**电机部分**：编码电机里面有个电机，就像玩具车里的马达一样，当你给它能量，它就会转动。这个转动可以是一圈一圈的，也可以是一点点的小步移动。

**编码器**：编码电机还有一个特别的地方，就是它有一个叫做编码器的小装置。这个编码器就像是一个计数器，每当电机转动，它就会数一下，告诉你电机转了多少。

**控制信号**：你可以给电机发送指令，告诉它需要转多少圈或者转到哪个位置。这就像是你用手轻轻推玩具车，告诉它该往哪里走。

**反馈信号**：当电机转动时，编码器会告诉控制器（就像你的大脑）电机已经转了多少。这样，你就可以知道电机是否按照你的指令准确地转动了。

**精确控制**：因为编码器能够准确地数出电机的转动，所以你可以让电机非常精确地转动到你想要的位置，就像你能够准确地把玩具车停在你想让它停的地方。

通过这种方式，编码电机能够非常精确地控制转动，这在很多需要精确控制的机器和设备中非常有用，比如机器人手臂或者精确的机器制造。
