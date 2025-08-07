---
sidebar_position: 5
sidebar_label: 案例五：天气小伙伴
---

# 天气小伙伴

## 故事导入

随着船只驶离港口，海岸线的轮廓逐渐变得朦胧，防波堤上的灯塔也缩小成海平线上微小的光点。希望号在浩瀚的海洋中航行，正午的阳光使得甲板热得发烫。小恩蹲下身子，注视着自己在阳光下的影子。小恩心中暗想，要是能知道此时此刻的温度和湿度该有多好，小伙伴们能帮助实现他的想法吗？

--- 

## 教学准备

|     名称     |            图示            |
| :----------: | :--------------------------: |
|   哪吒Pro海洋套件  |   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/nezha-pro-ocean-kit-products-introduction-002.png.png)  |

--- 
## 教学目标 
1.认识OLED显示。

2.认识DHT11温湿度传感器。

3.掌握OLED与DHT11积木块的使用。

--- 

## 学习探究

1.与小伙伴讨论生活中哪些地方使用了温湿度传感器,人们为什么要知道温湿度呢？

## 搭建步骤

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case05/nezha-pro-ocean-kit-step-05-1.png.pdf" type="application/pdf" width="100%" height="600px" />

--- 

## 硬件连接
OLED显示屏连接在哪吒扩展板“IIC”端口；

DHT11温湿度传感器连接在哪吒扩展板“J1”端口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case05/nezha-pro-ocean-kit-step-05-2.png.png)


--- 
## 代码编程

进入“[makecode.microbit.org](https://makecode.microbit.org)”，点击**新建项目**。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-07.png)

在弹出窗口输入项目名称并点击**创建**。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-11.png)

点击代码抽屉中的**扩展**。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-09.png)

在弹出界面输入**nezha pro**并点击搜索图标，在显示**nezha pro**软件库后点击。同样的方式加载PlanetX软件库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-10.png)

---
### 示例程序

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case05/nezha-pro-ocean-kit-step-05-3.png.png)

程序链接
[https://makecode.microbit.org/_9feP8JeVcKE6](https://makecode.microbit.org/_9feP8JeVcKE6)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_9feP8JeVcKE6"
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
### 下载程序

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

---
## 案例演示
OLED显示当前的温湿度，当温度＞30°，micro:bit显示“哭脸”，否则micro:bit显示“笑脸”。

**图片**

---
## 扩展知识

DHT11 温湿度传感器是一款常用的数字式温湿度复合传感器，具有结构简单、成本低、使用方便等特点，广泛应用于智能家居、气象监测、农业大棚等场景。以下是关于它的详细介绍：

### 一、基本概述

功能：可同时测量环境温度和湿度，并将数据转换为数字信号输出。

类型：属于电阻式湿度传感器和 NTC（负温度系数）热敏电阻组合的复合传感器。

输出形式：单总线数字信号，便于与单片机（如 Arduino、STM32）等主控设备直接通信。

### 二、工作原理

#### 1.湿度测量：

利用电阻式湿度传感元件（高分子聚合物薄膜），其电阻值随环境湿度变化而变化。湿度越高，电阻值越低，通过电路将电阻变化转换为电信号。

#### 2.温度测量：

通过 NTC 热敏电阻检测温度，温度升高时电阻值降低，反之升高，经电路转换为电信号。

#### 3.信号处理：

传感器内部的单片机将温湿度模拟信号转换为数字信号，通过 DATA 引脚以单总线协议输出。

#### 三、典型应用场景

智能家居：温湿度监测模块、空调 / 加湿器自动控制。

农业与养殖：大棚温湿度监控、畜禽舍环境调节。

气象站：简易环境监测设备、小型气象站搭建。

工业控制：仓库温湿度监控、设备运行环境监测。
