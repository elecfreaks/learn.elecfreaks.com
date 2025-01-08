---
sidebar_position: 9
sidebar_label: 案例九：探索光照对植物生长的影响
---

# 案例九：探索光照对植物生长的影响

## 简介

本项目旨在引导学生使用classroom科学套装和micro:bit搭建一个植物生长监测装置。通过LED灯模拟不同的光照条件，学生将能够观察和记录植物的生长变化，进而分析和绘制植物的生长曲线。此项目将加深学生对植物学和环境科学的理解，同时锻炼他们的实验设计和数据分析能力。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-09-01.png)

## 教学目标

理解植物生长的基本条件和环境因素。

掌握使用LED灯模拟不同光照条件的方法。

绘制并分析植物的生长曲线。

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

光照是植物生长发育的关键环境因素之一。它不仅影响植物的光合作用，还影响其生物钟和生长周期。在本节课中，我们将通过搭建一个植物生长监测装置来模拟不同的光照条件，并观察这些条件如何影响植物的生长。

### 探究活动

1. 学习植物生长的基本条件和环境因素。

2. 设计对照组实验，使用LED灯模拟不同的光照条件。

3. 定期记录不同光照条件下植物的生长数据，并绘制生长曲线。

4. 分析光照条件下植物生长的规律。

### 硬件连接

此案例使用wukong扩展板上的4颗彩虹灯进行实验，彩虹灯连接引脚为P16。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-01-06.png)

### 代码编程

*** 添加软件库 ***

打开``makecode.microbit.org``并点击``新建项目``.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-01.png)

点击``扩展``.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-02.png)

搜索``iot-environment-kit``，添加iot-environment-kit软件库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-03.png)


*** 示例代码 ***

1. 显示爱心图标，初始化彩虹灯为4颗并连接到P16端口，设置变量``lightness``为255。


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-09-09.png)

2. 通过按钮控制调节变量``lightness``的数值。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-09-10.png)

3. 设置亮度为``lightness``，设置灯光为白色。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-09-11.png)






请参考程序连接：[https://makecode.microbit.org/_0Hk1dfCuEg38](https://makecode.microbit.org/_0Hk1dfCuEg38)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_0Hk1dfCuEg38"
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

*** 预期效果：通过按键控制彩虹灯的灯光亮度 ***



### 总结与反思

回顾课程内容，提醒学生掌握了哪些知识和技能。

引导学生讨论他们在制作过程中遇到的问题和困难，以及如何解决这些问题。

引导学生思考光照对植物生长的实际应用，如农业生产和植物栽培。

## 扩展知识

*** 植物的光合作用 ***
光合作用是植物在光照条件下，通过叶绿素吸收光能，将二氧化碳和水转化为葡萄糖和氧气的过程。

*** 光照周期 ***
光照周期，或称光周期，是指植物在一天中所接受光照和黑暗的时间长度。不同的植物对光照周期的需求不同，这对植物的生长和开花有重要影响。

*** 生长曲线 ***
生长曲线是描述植物生长随时间变化的图形，可以用来分析植物的生长速率和生长阶段。
