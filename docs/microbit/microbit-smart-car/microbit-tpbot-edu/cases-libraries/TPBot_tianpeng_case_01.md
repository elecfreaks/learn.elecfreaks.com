---
sidebar_position: 1
sidebar_label: 行驶控制
---

# 案例01：行驶控制

## 简介

本项目中，我们将用不同的方法控制天蓬智能车行驶。

## 教学目标

了解天蓬智能车的行驶控制
掌握使用micro:bit控制天蓬智能车的基本编程技能。

## 教学准备

在开始教学之前，请确保您已经准备好以下必要的材料：

| 图片 | 名称 | 数量 | 备注 |
|---|---|---|---|
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot-pro/images/power-indicator-01.png)| 天蓬智能车教育版 | 1 |   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/USB-data-cable.png) | USB数据线 | 1 |   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit.png) | micro:bit | 1 | 自行准备 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/pc.png) | PC | 1 | 自行准备 |

## 课程引入
在本节课，我们将一起探索如何通过图形化程序控制天蓬智能车向前行驶。你们是否想过如何使用编程来控制一辆智能赛车呢？编程是一种让计算机或机器人按照我们的指令执行任务的方式。今天，我们将学习如何使用图形化编程来控制天蓬智能车。

现在，让我们一起开始这个有趣的学习旅程吧！准备好使用天蓬智能车探索图形化编程的世界了吗？

## 探究活动

如何编写一个简单的程序，使小车向前行驶？

调整速度和行驶时间的参数对小车的运动有什么影响？

除了向前行驶，还能通过编程控制小车做什么其他动作吗？

## 软件
---
[微软makecode](https://makecode.microbit.org/#)


## 编程
---


在MakeCode的代码抽屉中点击`高级`，查看更多代码选项。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-tpbot/images/TPBot_tianpeng_case_01_02.png)

为了给天蓬智能车编程，我们需要添加一个扩展库。在代码抽屉底部找到`扩展`，并点击它。这时会弹出一个对话框，搜索`tpbot`，然后点击下载这个代码库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-tpbot/images/TPBot_tianpeng_case_01_03.png)

## 示例程序一

在积木抽屉中拖出一个设置左右轮速度的积木块放入`当开机时`积木块中，并将参数都设置为100。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-tpbot/images/TPBot_tianpeng_case_01_04.png)

### 程序

请参考程序连接：[https://makecode.microbit.org/_0r5C5L029L9m](https://makecode.microbit.org/_0r5C5L029L9m)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_UatK2a6cgc7u"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>
---

## 结论

天蓬智能车会一直向前行驶

## 示例程序二

在积木抽屉中拖出一个`向前进速度为100%持续0秒`的积木块放入`当开机时`积木块中，并将参数都设置为速度100、持续3秒。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-tpbot/images/TPBot_tianpeng_case_01_05.png)

### 程序

请参考程序连接：[https://makecode.microbit.org/_XXH3yP66oRRp](https://makecode.microbit.org/_XXH3yP66oRRp)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_UatK2a6cgc7u"
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


天蓬智能车全速前进三秒后停车

## 示例程序三

在积木抽屉中拖出一个`向前进速度为100%`的积木块放入`当按钮A被按下时`中，然后设置暂停2000ms，然后在积木抽屉中拖出`立刻停车`放入`当按钮A被按下时`中。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-tpbot/images/TPBot_tianpeng_case_01_06.png)

### 程序

请参考程序连接：[https://makecode.microbit.org/_7YPHM8Tkfbka](https://makecode.microbit.org/_7YPHM8Tkfbka)


你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_7YPHM8Tkfbka"
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


当按钮A被按下后，天蓬智能车全速前进两秒后停车
