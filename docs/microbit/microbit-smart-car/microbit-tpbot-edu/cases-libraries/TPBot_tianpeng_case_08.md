---
sidebar_position: 8
sidebar_label: 寻找光源
---

# 案例08：寻找光源

## 简介

本课程旨在引导学生制作寻找光源案例，结合micrro:bit的功能来制作案例。

## 教学目标

结合micro:bit的功能，实现更多的扩展案例

## 教学准备

在开始教学之前，请确保您已经准备好以下必要的材料：

| 图片 | 名称 | 数量 | 备注 |
|---|---|---|---|
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-tpbot-edu/TPBot_tianpeng_edu.png)| 天蓬智能车教育版 | 1 |   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/USB-data-cable.png) | USB数据线 | 1 |   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit.png) | micro:bit | 1 | 自行准备 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/pc.png) | PC | 1 | 自行准备 |

## 课程引入

欢迎来到这个充满挑战和创新的新课程——寻找光源。在这一节课中，我们将引导智能小车完成一项特殊的任务：在一个黑暗环境中自动寻找并朝向光源行驶。

## 探究活动

micro:bit上没有光线传感器，它是如何感应环境光强度的？
编程逻辑：掌握如何编写程序让小车根据光线强度变化调整行驶方向。

## 软件

[微软makecode](https://makecode.microbit.org/#)


## 编程

在MakeCode的代码抽屉中点击`高级`，查看更多代码选项。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-tpbot/images/TPBot_tianpeng_case_01_02.png)

为了给天蓬智能车编程，我们需要添加一个扩展库。在代码抽屉底部找到`扩展`，并点击它。这时会弹出一个对话框，搜索`tpbot`，然后点击下载这个代码库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-tpbot/images/TPBot_tianpeng_case_01_03.png)


## 示例程序

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-tpbot-edu/TPBot_tianpeng_edu_case_08_07.png)

### 程序

请参考程序连接：[https://makecode.microbit.org/_8Wm6oz6v0Vku](https://makecode.microbit.org/_8Wm6oz6v0Vku)


你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_8Wm6oz6v0Vku"
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


当开机后，小车原地旋转，当环境中有光源出现时，小车向光源方向行驶。


## 扩展知识

**micro:bit上没有光线传感器是如何感应环境光强度的？**

micro:bit感应环境光强度的原理实际上是通过其LED矩阵来实现的。虽然micro:bit并没有专门的光线传感器，但是它的LED矩阵既可以作为输出设备显示图像，也可以作为输入设备来测量光量值。具体来说，micro:bit的LED矩阵被用来感知周围的光，通过反复地将一些LED驱动器转换成输入并采样电压衰减时间，这与环境光的水平大致成正比
。

LED通常被作为发光器来使用，但它们也是基本的光电二极管，可以作为光检测器。当LED驱动电路并入时，其功能就能够被很好地展现，而无需任何额外的硬件
。micro:bit屏幕是由一个5x5的LED点阵构成。运行软件高速反复更新这个矩阵，使其位于用户视野范围内，并且不会检测到任何闪光。通过将一些LED驱动引脚反复切换成输入，并对电压衰减时间进行采样，这个LED矩阵也被应用于感应环境光。
。

简而言之，micro:bit利用其LED矩阵的光电特性，通过测量LED从驱动状态转换到输入状态时电压衰减的时间，来感应环境光的强度，从而实现光线感应的功能。这种方法虽然不是传统意义上的光线传感器，但在实际应用中能够达到类似的效果。
