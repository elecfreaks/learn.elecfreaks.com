---
sidebar_position: 5
sidebar_label: 案例二 简易机械爪
---

# 简易机械爪

## 目的


搭建一辆使用AI摄像头识别路牌的Cutebot Pro智能赛车。


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot-pro/cases-libraries/extended-case/images/cutebot-pro-extended-case-01-01.png)


## 使用材料


[Cutebot Pro智能赛车](https://www.elecfreaks.com/elecfreaks-smart-cutebot-pro-programming-robot-car-for-micro-bit.html)

[AI摄像头](https://www.elecfreaks.com/elecfreaks-smart-ai-lens-kit.html)

[ELECFREAKS Mechanical Catch](https://shop.elecfreaks.com/products/elecfreaks-mechanical-catch-use-with-cutebot)


## 搭建步骤

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot-pro/cases-libraries/extended-case/images/cutebot-pro-extended-case-step-01-01.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot-pro/cases-libraries/extended-case/images/cutebot-pro-extended-case-step-01-02.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot-pro/cases-libraries/extended-case/images/cutebot-pro-extended-case-step-01-03.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot-pro/cases-libraries/extended-case/images/cutebot-pro-extended-case-step-01-04.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot-pro/cases-libraries/extended-case/images/cutebot-pro-extended-case-step-01-05.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot-pro/cases-libraries/extended-case/images/cutebot-pro-extended-case-step-01-06.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot-pro/cases-libraries/extended-case/images/cutebot-pro-extended-case-step-01-07.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot-pro/cases-libraries/extended-case/images/cutebot-pro-extended-case-step-01-08.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot-pro/cases-libraries/extended-case/images/cutebot-pro-extended-case-step-01-09.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot-pro/cases-libraries/extended-case/images/cutebot-pro-extended-case-step-01-10.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot-pro/cases-libraries/extended-case/images/cutebot-pro-extended-case-step-01-11.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot-pro/cases-libraries/extended-case/images/cutebot-pro-extended-case-step-01-12.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot-pro/cases-libraries/extended-case/images/cutebot-pro-extended-case-step-01-13.png)



## 硬件连接

将AI摄像头连接到Cutebot Pro智能赛车的IIC端口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot-pro/cases-libraries/extended-case/images/cutebot-pro-extended-case-01-02.png)


## 软件

[微软makecode](https://makecode.microbit.org/#)


## 编程


在MakeCode的代码抽屉中点击`高级`，查看更多代码选项。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot-pro/cases-libraries/extended-case/images/cutebot-pro-extended-case-01-03.png)

为了给Cutebot Pro智能赛车编程，我们需要添加一个扩展库。在代码抽屉底部找到`扩展`，并点击它。这时会弹出一个对话框，搜索`CutebotPro`，然后点击下载这个代码库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot-pro/cases-libraries/extended-case/images/cutebot-pro-extended-case-01-04.png)

为了给AI摄像头编程，我们需要添加一个扩展库。在代码抽屉底部找到`扩展`，并点击它。这时会弹出一个对话框，搜索`PlanetX-AI`，然后点击下载这个代码库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot-pro/cases-libraries/extended-case/images/cutebot-pro-extended-case-01-05.png)


## 示例程序

`当开机时`初始化AI摄像头，并`设置为卡片识别模式`；

`当按钮A被按下时`设置小车`以30%的速度向前行驶`；

在`无限循环`中，`获取一帧图像`,当`识别到图像为向右转`并且`卡片尺寸大于100`时，`设置小车向右转90°`。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot-pro/cases-libraries/extended-case/images/cutebot-pro-extended-case-01-06.png)


### 程序

请参考程序连接：[https://makecode.microbit.org/_aRxCqsMuY8iq](https://makecode.microbit.org/_aRxCqsMuY8iq)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_aRxCqsMuY8iq"
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


按下按键A后，小车向前行驶，当遇到向右转的路牌时，自动右转90°，并停止行驶。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot-pro/cases-libraries/extended-case/images/cutebot-pro-extended-case-01.gif)


## 扩展知识

*** AI路牌识别的应用及发展 ***

AI路牌识别是一种基于人工智能技术的图像识别应用，用于检测、识别和理解道路上的交通路牌。以下是AI路牌识别的应用和发展方面的一些关键点：

交通管理：AI路牌识别可以帮助交通管理部门监测道路上的交通标志和路牌情况。它可以自动检测和识别交通标志，提供实时的交通信息和指示，帮助驾驶员和行人遵守交通规则和导航。

自动驾驶：在自动驾驶车辆的发展中，AI路牌识别是关键技术之一。它可以帮助自动驾驶车辆辨识和理解道路上的交通标志和指示，以便做出相应的决策和行驶计划。

导航和路径规划：AI路牌识别可以用于实时导航系统，帮助司机和行人确定正确的行驶方向和路径规划。它可以识别路牌上的道路名称、交叉口指示和限速信息，为用户提供准确的导航指引。

城市规划和交通优化：AI路牌识别可以为城市规划和交通优化提供宝贵的数据。通过分析和识别路牌信息，可以了解道路网络的结构、交通流量和交通状况，从而优化交通规划、改善道路设施和提升城市交通效率。

安全监控：AI路牌识别可以用于交通安全监控系统。它可以实时监测道路上的交通标志和路牌，检测异常情况，例如损坏的路牌或缺失的标志。这有助于及时修复和维护交通设施，确保道路的安全性和可靠性。

AI路牌识别的发展已经取得了显著进展，主要得益于深度学习和计算机视觉技术的不断发展。随着算法的不断优化和硬件的提升，AI路牌识别的准确性和实时性得到了显著提升。未来，预计AI路牌识别将进一步发展，更加智能化和全面化，为交通管理、自动驾驶和城市规划等领域带来更多的便利和效益。
