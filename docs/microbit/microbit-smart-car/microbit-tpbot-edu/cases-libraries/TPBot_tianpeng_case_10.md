---
sidebar_position: 10
sidebar_label: 声音控制
---

# 案例10：声音控制

## 简介

本课程旨在引导学生制作声控小车的案例，结合micrro:bit的功能来制作案例。

## 教学目标

结合micro:bit的功能，实现更多的扩展案例

## 教学准备

在开始教学之前，请确保您已经准备好以下必要的材料：

| 图片 | 名称 | 数量 | 备注 |
|---|---|---|---|
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot-pro/images/power-indicator-01.png)| 天蓬智能车教育版 | 1 |   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/USB-data-cable.png) | USB数据线 | 1 |   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit.png) | micro:bit | 1 | 自行准备 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/pc.png) | PC | 1 | 自行准备 |

## 课程引入

大家好！欢迎来到这节充满创意和挑战的课程，今天我们将一起探索如何用声音来控制小车的行驶速度。想象一下，你的小车能够响应周围的声音，音量越大，它跑得越快；音量越小，它跑得越慢。这不仅是一个编程项目，也是对声音与运动之间关系的有趣探索。

## 探究活动

了解如何使用声音传感器来检测环境音量。
编程逻辑：掌握如何编写程序让小车根据音量的变化来控制行驶速度。

## 软件

[微软makecode](https://makecode.microbit.org/#)


## 编程

在MakeCode的代码抽屉中点击`高级`，查看更多代码选项。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-tpbot/images/TPBot_tianpeng_case_01_02.png)

为了给天蓬智能车编程，我们需要添加一个扩展库。在代码抽屉底部找到`扩展`，并点击它。这时会弹出一个对话框，搜索`tpbot`，然后点击下载这个代码库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-tpbot/images/TPBot_tianpeng_case_01_03.png)


## 示例程序

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-tpbot-edu/TPBot_tianpeng_edu_case_10_07.png)

### 程序

请参考程序连接：[https://makecode.microbit.org/_1pJXAKfkw3C7](https://makecode.microbit.org/_1pJXAKfkw3C7)


你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_1pJXAKfkw3C7"
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


小车根据声音响度自动调整行驶速度。


## 扩展知识

**声音的传播原理**
声音是一种机械波，它通过介质（如空气、水或固体）传播。以下是声音传播的基本原理：

1. 声源振动
声音的传播始于声源的振动。当一个物体振动时，它会使周围的介质（如空气分子）也产生振动。这些振动以波的形式向外扩散。

2. 介质中的传播
声音需要介质来传播，因为声音波是介质粒子间的相互作用。在气体（如空气）中，这些粒子是分离的，在液体和固体中，粒子之间的联系更为紧密。

3. 压缩和稀疏
当声源振动时，它会使介质中的粒子被压缩（推得更近）和稀疏（拉得更远）。这种压缩和稀疏的模式形成了声波。

4. 纵波
声音波是一种纵波，这意味着介质粒子的振动方向与波的传播方向相同。例如，在空气中，声波传播时，空气粒子上下振动，而声波向前传播。

5. 波速和频率
声波的传播速度取决于介质的性质，如密度和弹性。在固体中，声波传播速度最快，其次是液体，最慢的是气体。声波的频率决定了声音的音调，频率越高，音调越高。

6. 反射、折射和衍射
当声波遇到障碍物或通过不同介质的边界时，它们可以被反射、折射或衍射。反射是声波遇到障碍物后反弹回来的现象；折射是声波从一种介质进入另一种介质时速度改变导致方向改变的现象；衍射是声波遇到小孔或障碍物时绕过它们继续传播的现象。

7. 人耳感知
当声波到达人耳时，它们会引起耳膜振动。这些振动通过耳内的骨头和液体传递到内耳，刺激毛细胞，最终转化为神经信号，被大脑识别为声音。

声音的传播是一个复杂的过程，涉及到物理、生理和心理多个层面。理解声音的传播原理有助于我们更好地理解声音技术，如扬声器、麦克风和声呐系统等。
