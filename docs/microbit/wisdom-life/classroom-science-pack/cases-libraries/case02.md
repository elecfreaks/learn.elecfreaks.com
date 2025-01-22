---
sidebar_position: 2
sidebar_label: 案例二：温湿度—影响我们生活的关键因素
---

# 案例二：温湿度—影响我们生活的关键因素

## 简介

本项目旨在引导学生使用classroom科学套装中的DHT11温湿度传感器探索温度和湿度的基本概念。通过检测环境温湿度，学生将了解温度、湿度的含义、单位以及它们对人体的影响。通过这个项目，学生将学习基础的物理知识，掌握使用传感器和微控制器来收集环境数据，并激发他们对环境科学的兴趣。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-02-01.png)

## 教学目标

理解温度和湿度的基本概念。

学习温度和湿度的测量单位及其科学意义。

掌握使用DHT11温湿度传感器和micro:bit收集环境数据的方法。

## 教学准备

在开始教学之前，请确保您已经准备好以下必要的材料：

| 图片 | 名称 |
| :-: | :-: |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-01-02.png) | classroom科学套装 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-03.png) | micro:bit V2 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-04.png) | 个人电脑（PC） |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-05.png) | USB 数据线 |

这些材料将为您提供一个完整的体验，确保您可以顺利地进行后续的操作和学习。如果您已准备好以上内容，我们可以继续进入下一步。

## 教学过程

### 课程引入

温度和湿度是影响我们日常生活的两个关键环境因素。它们不仅影响我们的舒适度，还与健康密切相关。在本节课中，我们将使用DHT11温湿度传感器和micro:bit来监测和分析我们周围环境的温度和湿度。

### 探究活动

1. 学习如何使用micro:bit上的编程环境，编写代码来读取DHT11传感器的数据。

2. 理解温度和湿度的科学单位（摄氏度和百分比）。

3. 探索如何将温湿度数据实时显示在OLED屏幕上。

4. 分析不同环境下的温湿度数据，讨论其对人体健康和日常生活的潜在影响。



### 硬件连接

将DHT11温湿度传感器连接到wukong扩展板的P1端口，OLED显示屏连接到wukong扩展板的IIC端口。


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-02-06.png)

### 代码编程

*** 添加软件库 ***

打开``makecode.microbit.org``并点击``新建项目``.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-01.png)

点击``扩展``.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-02.png)

搜索``iot-environment-kit``，添加iot-environment-kit软件库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-03.png)

搜索``wukong``，添加wukong软件库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-04.png)

*** 示例代码 ***

1. 当开机时，初始化OLED显示屏。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-02-09.png)

2. 将连接到P1端口的DHT11温湿度传感器返回的温度值存入变量Temp中，暂停3000ms；将连接到P1端口的DHT11温湿度传感器返回的湿度值存入变量DH中，暂停3000ms。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-02-10.png)

3. 清除OLED显示屏，在OLED显示屏上显示当前温度，在OLED显示屏上显示当前湿度。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-02-11.png)


请参考程序连接：[https://makecode.microbit.org/_2JEfrXWsWEvw](https://makecode.microbit.org/_2JEfrXWsWEvw)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_2JEfrXWsWEvw"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

*** 下载程序 ***

使用USB线连接PC和micro:bit V2。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/connect-microbit.gif)

连接成功后，电脑上会识别出一个名为`MICROBIT`的盘符。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-drive.png)

点击左下角的![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-01.png)，选择`Connect Device`。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-02.png)

点击![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-03.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-04.png)

点击![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-05.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-06.png)


在弹出窗口选择`BBC micro:bit CMSIS-DAP`，然后选择连接，至此，我们的micro:bit就已经连接成功。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-07.png)

点击下载程序。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-08.png)

### 团队合作与展示

学生分成小组，共同完成案例的制作和程序编写。

鼓励学生之间相互合作、交流和分享经验。

每个小组有机会向其他小组展示他们制作的案例，并演示。

*** 预期效果：开机后OLED显示屏显示当前环境温湿度。 ***

（GIF动图）

### 总结与反思

回顾课程内容，提醒学生掌握了哪些知识和技能。

引导学生讨论他们在制作过程中遇到的问题和困难，以及如何解决这些问题。

引导学生思考温湿度对人体健康和日常生活的影响，以及如何利用科技手段改善生活环境。

## 扩展知识

*** 温度 ***
温度是物质冷热程度的量度。
常见的温度单位有摄氏度 (°C)、华氏度 (°F) 和开尔文 (K)。
温度的变化会引起物质的热胀冷缩现象。
温度会影响物质的物理状态，例如水在 0°C 时会结冰，在 100°C 时会沸腾。

*** 湿度 ***
湿度是指空气中水蒸气的含量。
常见的湿度单位有相对湿度 (%) 和绝对湿度 (g/m³)。
湿度会影响人体的舒适度，例如高湿度会让人感到闷热，低湿度会让人感到干燥。

*** 温湿度对人体的影响 ***
适宜的温湿度对人体健康非常重要。
过高的温度会导致中暑，过低的温度会导致冻伤。
过高的湿度会导致人体感到闷热，过低的湿度会导致人体感到干燥。
