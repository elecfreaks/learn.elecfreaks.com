---
sidebar_position: 2
sidebar_label: 认识cutebot智能赛车
---

# 认识cutebot智能赛车

## 课程简介

这节课我们将简单的了解cutebot智能赛车有什么功能，并通过一个简单的案例来学习如何对cutebot智能赛车进行编程。

## 课前准备

micro:bit

cutebot智能赛车

3颗 7号电池

电脑

USB数据线

## cutebot智能赛车简介
---

ELECFREAKS Cutebot是一款带有双高速电机马达的后驱智能赛车。

Cutebot同时搭载了很多车载设备，包括超声波导航距离传感器，两颗RGBLED车大灯，两颗Rainbow LED车底示廓灯，两个车道辅助巡线探头。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/images/cutebot_01_01.jpg)


## 功能模块描述

小车正前方配备超声波接口和micro:bit的IIC接口

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/images/cutebot_01_02.jpg)


前方左右两边各配备两颗RGB全彩色LED车灯，通过扩展板控制，不占用micro:bitIO口数量。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/images/cutebot_01_03.jpg)

正上方装有三颗AA电池电池盒扩展板，用来驱动整个小车。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/images/cutebot_01_04.jpg)

电池盒扩展板上同时扩展了S1、S2舵机接口和P1，P2 IO接口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/images/cutebot_01_05.jpg)

小车尾部带有红外线接收头（在电池盒下方），连接在micro:bit主板的P16接口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/images/cutebot_01_06.jpg)

小车配备可供AI摄像头连接的IIC接口

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/images/cutebot_01_12.jpg)

尾部红外线接收头旁边为小车总电源开关，同时配有一颗LED灯指示开关状态。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/images/cutebot_01_07.jpg)

左右两边为两个 微型高速直流齿轮减速电机 驱动的车轮，转速高达(300转/分钟)，享受飞驰一般的速度。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/images/cutebot_01_08.jpg)

小车底部前方有两个巡线头，用于检测黑线及边缘，连接到micro:bit主板的P13和P14接口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/images/cutebot_01_09.jpg)

小车底部前方装配一个金属万向轮，小车用 左右轮速度差的方式 完成360度全方向行驶。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/images/cutebot_01_10.jpg)

底部两侧边安装了两颗Rainbow LED 全彩灯珠，连接到micro:bit主板的P15口，需要使用扩展`Neopixel`来驱动使用，可以作为小车示廓灯或其他功能使用。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/images/cutebot_01_11.jpg)


## 快速入门
### 准备工作

将3M双面胶贴在电池盒上面。



将电池盒的电源线插入cutebot智能赛车。



将电池盒贴在cutebot智能赛车上。



安装电池




### 添加软件库

在makecode编程界面的Toolbox点击Extensions。



在弹出页面搜索`cutebot`，并点击选择cutebot的软件库。



### 软件积木块简介及示例

**使用此积木块可单独调整左轮或右轮的速度。**



示例程序:[https://makecode.microbit.org/_bk5A9eTmrE1c](https://makecode.microbit.org/_bk5A9eTmrE1c)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit-basic-06.png)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_bk5A9eTmrE1c"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>
