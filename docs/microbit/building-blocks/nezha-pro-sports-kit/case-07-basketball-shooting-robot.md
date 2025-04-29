---
sidebar_position: 8
sidebar_label: 案例七:投篮机器人
---

# 案例七:投篮机器人

## 案例简介

设计一款投篮机器人。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-07-01.png)

## 教学准备

|     名称     |            图示            |
| :----------: | :--------------------------: |
|   哪吒Pro运动套装   |   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-01.png)  |

## 教学目标

了解makecode的基本使用

程序下载方式

## 课程引入

欢迎小朋友们加入我们的STEAM奇妙旅程！今天，我们将一起探索如何制作一个投篮机器人。在这个项目中，我们将学习到如何通过简单的机械传动来控制机器人的运动。不需要复杂的编程知识，只需动手组装和调整，你就能创造出一个投篮机器人。让我们一起开启这段激动人心的STEAM学习之旅，激发你的创造力和解决问题的能力！

## 学习探究

micro:bit程序下载方式

## 搭建步骤

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/files/%E6%8A%95%E7%AF%AE%E6%9C%BA%E5%99%A8%E4%BA%BA.pdf" type="application/pdf" width="100%" height="600px" />

## 硬件连线

将碰撞传感器连接到哪吒Pro扩展板的J1接口，将智能电机连接到哪吒Pro扩展板的M4接口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-07-03.png)

## 代码编程

进入“[makecode.microbit.org](https://makecode.microbit.org)”，点击**新建项目**。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-07.png)

在弹出窗口输入项目名称并点击**创建**。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-11.png)

点击代码抽屉中的**扩展**。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-09.png)

在弹出界面输入**nezha pro**并点击搜索图标，在显示**nezha pro**软件库后点击。同样的方式加载**PlanetX**软件库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-10.png)

### 示例程序

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-07-02.png)

程序链接:[https://makecode.microbit.org/_8vgFCod711oo](https://makecode.microbit.org/_8vgFCod711oo)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_8vgFCod711oo"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

## 下载程序

使用 USB 线连接 PC 和 micro:bit V2。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual03.gif)

连接成功后，电脑上会识别出一个名为 MICROBIT 的盘符。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual06.png)

点击左下角的![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual07.png)，选择**Connect Device**。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual11.png)

点击![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual08.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual12.png)

点击![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual09.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual13.png)

在弹出窗口选择 **BBC micro:bit CMSIS-DAP**，然后选择**连接**，至此，我们的 micro:bit 就已经连接成功。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual14.png)

点击**下载程序**

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual10.png)


## 案例演示

按下micro:bit上面的按键A即可让投篮机器人开始准备投篮，按下micro:bit上面的按键B即可让投篮机器人开始准备投篮。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-07.gif)

## 总结分享



## 扩展知识

**micro:bit的功能有哪些？**

micro:bit 是一款专为青少年编程教育设计的微型电脑开发板，具有多种功能，以下是其主要功能介绍：

***输入功能***

按钮输入：micro:bit 正面有 A、B 两个可编程按钮，可单独或组合使用，用于触发各种事件，如开始、暂停、选择等操作。

触摸输入：v2 版 micro:bit 的金色徽标可作为触摸传感器，相当于一个额外的按键，为程序增加了新的输入方式。

传感器输入：包括光线传感器、温度传感器、加速度传感器和指南针传感器，可检测周围光线强度、环境温度、设备的加速度和移动状态、地球磁场方向等信息。

***输出功能***

LED 显示：有 25 颗可独立编程的 LED 灯，以 5×5 网格状排列，可显示文字、数字、图像和动画等，用于展示信息或与用户进行交互。

声音输出：v2 版配备了扬声器，能够播放声音和旋律，可用于制作音乐、音效等项目，增加了项目的趣味性。

***通信功能***

无线电通讯：支持无线电通信，可在多块 micro:bit 板子之间进行无线数据传输，用于创建多人游戏、互动项目等。

蓝牙低能量：通过蓝牙低能量天线，micro:bit 可以与电脑、手机、平板等设备进行无线通信，实现设备间的连接和控制。

***扩展功能***

引脚接口：在 micro:bit 连接器边缘有 25 个外部接口引脚，通过这些引脚可以连接电机、LED 灯、传感器等各种外部电子元器件，扩展其功能。

USB 接口：用于连接电脑，实现程序的下载、上传和调试，同时也可为 micro:bit 提供电源。
