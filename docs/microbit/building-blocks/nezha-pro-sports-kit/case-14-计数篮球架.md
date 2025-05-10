---
sidebar_position: 15
sidebar_label: 案例十四:计数篮球架
---

# 案例十四:计数篮球架

## 案例简介

设计一款自动计数篮球架，利用超声波传感器精准检测篮球进入篮筐的瞬间，通过编程实现进球数量自动统计，并在 OLED 显示屏上实时显示。将传统篮球架升级为具备智能计数功能的运动设备，让投篮练习更具趣味性与数据化。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-14-01.png)

## 教学准备

|     名称     |            图示            |
| :----------: | :--------------------------: |
|   哪吒Pro运动套装   |   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-01.png)  |

## 教学目标

理解超声波传感器测距原理及其在运动检测中的应用。​

掌握数据统计与 OLED 屏幕实时显示的编程方法。​

培养将物理运动与电子技术结合的创新思维。

## 课程引入

同学们，在篮球训练中，一个个数投篮次数是不是很麻烦？今天我们要用哪吒 Pro 运动套装制作一个神奇的自动计数篮球架！装上超声波传感器后，它能像眼睛一样精准捕捉进球瞬间，还能自动记录得分。让我们一起用科技为篮球运动 “升级”，感受运动与编程碰撞的魅力！

## 学习探究

探究超声波传感器如何通过测距变化判断篮球入筐，以及计数逻辑的编程实现。

## 搭建步骤

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/files/%E6%AF%94%E8%B5%9B%E4%BB%BB%E5%8A%A1%E8%BD%A6.pdf" type="application/pdf" width="100%" height="600px" />

## 硬件连线

将超声波传感器连接到哪吒Pro扩展板的J1接口，将OLED显示屏连接到哪吒Pro扩展板的IIC接口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-13-03.png)

## 代码编程

进入“[makecode.microbit.org](https://makecode.microbit.org)”，点击**新建项目**。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-07.png)

在弹出窗口输入项目名称并点击**创建**。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-11.png)

点击代码抽屉中的**扩展**。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-09.png)

在弹出界面输入**nezha pro**并点击搜索图标，在显示**nezha pro**软件库后点击。同样的方式加载PlanetX软件库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-10.png)



### 示例程序


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-14-04.png)

程序链接:[https://makecode.microbit.org/_dukDdVPHe9ik](https://makecode.microbit.org/_dukDdVPHe9ik)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_dukDdVPHe9ik"
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

当篮球穿过超声波传感器检测区域时，传感器测距数据发生变化，触发计数程序，OLED 屏幕上的得分随即加 1，实时显示当前进球数量。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit.gif)

## 总结分享



## 扩展知识


**超声波传感器工作原理​**

超声波传感器通过发射高频声波，并接收反射回来的声波计算距离。其核心公式为：距离 = 声速 × 时间 ÷2。在篮球架应用中，当篮球进入检测范围，反射声波时间缩短，通过设定阈值判断是否进球。​

**运动检测技术拓展​**

除超声波检测外，运动检测还可采用红外对管、压力传感器、图像识别等技术：​

- 红外对管：通过红外光线被遮挡判断物体经过​
- 压力传感器：检测物体接触产生的压力变化​
- 图像识别：利用摄像头与 AI 算法识别运动轨迹​

**体育数据化应用​**

自动计数篮球架是体育数据化的缩影。现代体育训练与赛事中，可穿戴设备、运动捕捉系统、智能裁判技术等广泛应用，通过数据采集与分析，帮助运动员提升训练效率、优化战术策略，推动体育科技融合发展。​
