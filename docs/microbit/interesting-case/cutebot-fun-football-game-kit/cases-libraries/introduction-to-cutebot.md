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

将电池盒的电源线插入cutebot智能赛车。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/Installing-battery-01.png)

将3M双面胶贴在电池盒上面。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/Installing-battery-02.png)

将电池盒贴在cutebot智能赛车上。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/Installing-battery-03.png)

### 编程平台

我们通常使用[图形化编程平台makecode](https://makecode.microbit.org/)对micro:bit进行编程

编程平台入口：[https://makecode.microbit.org/](https://makecode.microbit.org/)

### 新建项目

打开[https://makecode.microbit.org/](https://makecode.microbit.org/)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode.png)

新建项目

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode-new-project-01.png)

输入项目名称并点击创建。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode-new-project-02.png)

进入编辑器界面后我们可以看到Micro:bit Simulator，Toolbox，Workspace。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode-new-project-03.png)



### 添加软件库

在makecode编程界面的Toolbox点击Extensions。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/add-extensions-1.png)

在弹出页面搜索`cutebot`，并点击选择cutebot的软件库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/add-extensions-2.png)



### 软件积木块解释

| 积木块 | 功能 | 参数 |
| ------ | ----- | -------- |
| https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/cutebot-block-notes-01.png | 设置小车左轮或右轮的速度 | 参数一：数值 <br> 数值范围：-100~100 <br> 参数二：数值 <br> 数值范围：-100~100 |
| https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/cutebot-block-notes-02.png | 设置小车以固定速度朝某个方向运行指定时间 | 参数一：下拉选项 <br> 可选项：前进、后退、左、右 <br> 参数二：整数 <br> 数值范围为-100~100 <br> 参数三：自然数 |
| https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/cutebot-block-notes-03.png | 设置小车全速前进 |  |
| https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/cutebot-block-notes-04.png | 设置小车全速后退 |  |
| https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/cutebot-block-notes-05.png | 设置小车全速左转 |  |
| https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/cutebot-block-notes-06.png | 设置小车全速右转 |  |
| https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/cutebot-block-notes-07.png | 设置小车立刻停车 |  |
| https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/cutebot-block-notes-08.png | 设置小车车头灯为预设颜色 | 参数一：下拉选项 <br> 可选项：右侧RGB、左侧RGB、全部 <br> 参数二：下拉选项 <br> 选项：https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/cutebot-block-notes-08-01.png |
| https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/cutebot-block-notes-09.png | 以RGB模式设置小车车头灯颜色 | 参数一：下拉选项 <br> 可选项：右侧RGB、左侧RGB、全部 <br> 参数二：自然数 <br> 数值范围：0 ~ 255 <br> 参数三：自然数 <br> 数值范围：0 ~ 255 <br> 参数四：自然数 <br> 数值范围：0 ~ 255 |
| https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/cutebot-block-notes-10.png | 关闭小车车头灯 |  |
| https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/cutebot-block-notes-11.png | 判断两个巡线传感器的状态 |  参数一：下拉选项 <br> 可选项：黑黑、白黑、黑白、白白 |
| https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/cutebot-block-notes-12.png | 分别判断两个巡线传感器的状态 | 参数一：下拉选项 <br> 可选项：左、右 <br> 参数二：下拉选项 <br> 可选项：找到、丢失 |
| https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/cutebot-block-notes-13.png | 当小车的巡线头检测到对应状态时，执行内部程序 | 参数一：下拉选项 <br> 可选项：左、右 <br> 参数二：下拉选项 <br> 可选项：找到、丢失 |
| https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/cutebot-block-notes-14.png | 检测小车前方障碍物的距离 | 参数一：下拉选项 <br> 可选项：厘米、英寸 |
| https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/cutebot-block-notes-15.png | 设置连接到指定接口的180°舵机转动到指定角度 | 参数一：下拉选项 <br> 可选项：S1、S2 <br> 参数二：自然数 <br> 数值范围：0 ~ 180 |
| https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/cutebot-block-notes-16.png | 当接收到红外信号时，执行内部程序 |  |
| https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/cutebot-block-notes-17.png | 判断接收到的红外信号信息 | 参数一：下拉选项 <br> 可选项：Menu、Up、Left、Right、Down、OK、Plus、Minus、Back、0、1、2、3、4、5、6、7、8、9 |

### 软件积木块简介及示例

#### 设置小车左轮或右轮的速度。



示例程序:[https://makecode.microbit.org/_bV3cyW8JDPp7](https://makecode.microbit.org/_bV3cyW8JDPp7)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit-cutebot-block-01.png)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_bV3cyW8JDPp7"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

### 如何将程序下载到micro:bit？

使用USB线连接PC和micro:bit V2。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/connect-microbit.gif)

连接成功后，电脑上会识别出一个名为`MICROBIT`的盘符。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-drive.png)

点击左下角的![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-01.png)，选择`Connect Device`。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-02.png)

点击![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-03.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-04.png)

点击![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-05.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-06.png)


在弹出窗口选择`BBC micro:bit CMSIS-DAP`，然后选择连接，至此，我们的micro:bit就已经连接成功。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-07.png)

点击下载程序。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-08.png)

### 结果

按下micro:bit的按键A，小车以100%的速度向前行驶。

#### 设置小车以固定速度朝某个方向运行指定时间。

示例程序:[https://makecode.microbit.org/_6sc5d0ij3WL9](https://makecode.microbit.org/_6sc5d0ij3WL9)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit-cutebot-block-02.png)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_6sc5d0ij3WL9"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

*** 结果：按下按键A后，小车以50%的速度朝前行驶5秒后停下。 ***

#### 设置小车全速前进。

示例程序:[https://makecode.microbit.org/_eup6qgbb2gYz](https://makecode.microbit.org/_eup6qgbb2gYz)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit-cutebot-block-03.png)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_eup6qgbb2gYz"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

*** 结果：按下按键A后，小车全速前进。 ***

#### 设置小车全速后退。

示例程序:[https://makecode.microbit.org/_acjeice30TKp](https://makecode.microbit.org/_acjeice30TKp)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit-cutebot-block-04.png)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_acjeice30TKp"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

*** 结果：按下按键A后，小车全速倒退。 ***

#### 设置小车全速左转。

示例程序:[https://makecode.microbit.org/_0PfPA7f83Rmo](https://makecode.microbit.org/_0PfPA7f83Rmo)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit-cutebot-block-05.png)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_0PfPA7f83Rmo"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

*** 结果：按下按键A后，小车向左转。 ***

#### 设置小车全速右转。

示例程序:[https://makecode.microbit.org/_Pz2ebkPvH8p1](https://makecode.microbit.org/_Pz2ebkPvH8p1)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit-cutebot-block-06.png)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_Pz2ebkPvH8p1"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

*** 结果：按下按键A后，小车向右转。 ***

#### 设置小车立刻停车。

示例程序:[https://makecode.microbit.org/_XDDPKvarbfrK](https://makecode.microbit.org/_XDDPKvarbfrK)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit-cutebot-block-07.png)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_XDDPKvarbfrK"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

*** 结果：按下按键A后，小车全速向前行驶5秒，然后停车。 ***

#### 设置小车车头灯为预设颜色。

示例程序:[https://makecode.microbit.org/_FxxXC2e6LTHF](https://makecode.microbit.org/_FxxXC2e6LTHF)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit-cutebot-block-08.png)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_FxxXC2e6LTHF"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

*** 结果：按下按键A后，小车LED车头灯显示红色。 ***

#### 以RGB模式设置小车车头灯颜色。

示例程序:[https://makecode.microbit.org/_DJTUyJiesU9q](https://makecode.microbit.org/_DJTUyJiesU9q)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit-cutebot-block-09.png)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_DJTUyJiesU9q"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

*** 结果：按下按键A后，小车LED车头灯显示绿色。 ***

#### 关闭小车车头灯。

示例程序:[https://makecode.microbit.org/_ersCDADdWWV4](https://makecode.microbit.org/_ersCDADdWWV4)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit-cutebot-block-10.png)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_ersCDADdWWV4"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

*** 结果：开启电源后，小车车头灯显示蓝色灯光，按下按键A后，小车LED车头灯熄灭。 ***


#### 判断两个巡线传感器的状态。

示例程序:[https://makecode.microbit.org/_8dbgTr2ku0Ko](https://makecode.microbit.org/_8dbgTr2ku0Ko)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit-cutebot-block-11.png)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_8dbgTr2ku0Ko"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

*** 结果：开启电源后，当小车两个巡线头都检测到黑色区域时，micro:bit显示爱心图标，当小车两个巡线头都检测到白色区域时，micro:bit显示笑脸图标。 ***

#### 分别判断两个巡线传感器的状态。

示例程序:[https://makecode.microbit.org/_PwmF7fP6agxC](https://makecode.microbit.org/_PwmF7fP6agxC)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit-cutebot-block-12.png)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_PwmF7fP6agxC"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

*** 结果：开启电源后，当小车左侧巡线头都检测到黑线时，micro:bit显示爱心图标，当小车右侧巡线头都检测到黑线时，micro:bit显示笑脸图标。 ***


#### 当小车的巡线头检测到对应状态时，执行内部程序。

示例程序:[https://makecode.microbit.org/_cpLdyi79t9pb](https://makecode.microbit.org/_cpLdyi79t9pb)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit-cutebot-block-13.png)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_cpLdyi79t9pb"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

*** 结果：开启电源后，当小车左侧巡线头都检测到黑线时，micro:bit显示爱心图标 ***

#### 检测小车前方障碍物的距离。

示例程序:[https://makecode.microbit.org/_czUc7rFp4Eu2](https://makecode.microbit.org/_czUc7rFp4Eu2)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit-cutebot-block-14.png)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_czUc7rFp4Eu2"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

*** 结果：开启电源后，micro:bit显示小车前方障碍物与小车的距离 ***

#### 设置连接到指定接口的180°舵机转动到指定角度。

示例程序:[https://makecode.microbit.org/_99PFCsWEFbTR](https://makecode.microbit.org/_99PFCsWEFbTR)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit-cutebot-block-15.png)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_99PFCsWEFbTR"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

*** 结果：通过A、B按键控制连接到S1的舵机的转动角度。 ***


#### 当接收到红外信号时，执行内部程序。

*** 注意：此案例需要搭配红外遥控器进行测试。 ***

示例程序:[https://makecode.microbit.org/_LV7E45CaML5t](https://makecode.microbit.org/_LV7E45CaML5t)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit-cutebot-block-16.png)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_LV7E45CaML5t"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

*** 结果：当接受到红外信号时，显示爱心图标。 ***

#### 判断接收到的红外信号信息。

*** 注意：此案例需要搭配红外遥控器进行测试。 ***

示例程序:[https://makecode.microbit.org/_7hm0LUXxAYjR](https://makecode.microbit.org/_7hm0LUXxAYjR)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit-cutebot-block-17.png)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_7hm0LUXxAYjR"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

*** 结果：当接受到Menu被按下的红外信号时，显示笑脸图标。 ***



关于cutebot的更多案例，请查看：[https://wiki.elecfreaks.com/en/microbit/microbit-smart-car/microbit-smart-cutebot/](https://wiki.elecfreaks.com/en/microbit/microbit-smart-car/microbit-smart-cutebot/)
