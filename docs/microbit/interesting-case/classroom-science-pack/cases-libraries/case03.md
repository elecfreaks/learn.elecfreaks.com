---
sidebar_position: 3
sidebar_label: 案例三：探索土壤湿度与植物生长的关系
---

# 案例三：探索土壤湿度与植物生长的关系

## 简介

本项目旨在引导学生使用classroom科学套装中的土壤湿度传感器来探索土壤湿度对植物生长的影响。通过监测不同土壤湿度条件下植物的生长情况，学生将了解土壤湿度对植物生长的重要性。通过这个项目，学生将学习基础的生物学知识，掌握使用传感器和微控制器来收集环境数据，并激发他们对生态学的兴趣。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-03-01.png)

## 教学目标

理解土壤湿度对植物生长的重要性。

学习如何使用土壤湿度传感器和micro:bit收集土壤湿度数据。

掌握数据分析的基本方法，探究土壤湿度与植物生长的关系。

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

植物需要水来生长，但是多少水才是合适的？过多的水和过少的水都会影响植物的生长。在本节课中，我们将使用土壤湿度传感器和micro:bit来监测土壤的湿度，并探究土壤湿度对植物生长的影响。

### 探究活动

1. 学习如何编写代码来读取土壤湿度传感器的数据。

2. 设计一个实验，比较不同土壤湿度条件下植物的生长情况。

3. 分析实验数据，讨论土壤湿度对植物生长的影响。

### 硬件连接

将土壤湿度传感器连接到wukong扩展板的P1端口，OLED显示屏连接到wukong扩展板的IIC端口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-03-06.png)

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

1. 当开机时，显示爱心图标，初始化OLED显示屏。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-03-09.png)

2. 将连接到P1端口的土壤湿度传感器的返回值存入变量Soil moisture中，在OLED显示屏上显示当前土壤湿度。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-03-10.png)

3. 暂停1000ms，清空OLED显示屏显示内容。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-03-11.png)


请参考程序连接：[https://makecode.microbit.org/_KYwM1gDxFUxt](https://makecode.microbit.org/_KYwM1gDxFUxt)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_KYwM1gDxFUxt"
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

*** 预期效果：开机后OLED显示屏显示当前土壤湿度。 ***

（GIF动图）

### 总结与反思

回顾课程内容，提醒学生掌握了哪些知识和技能。

引导学生讨论他们在制作过程中遇到的问题和困难，以及如何解决这些问题。

引导学生思考土壤湿度对植物生长的影响，以及如何利用科技手段优化植物生长环境。

## 扩展知识

土壤湿度对植物生长有着显著的影响，它直接关系到植物根系的吸水能力、养分的吸收以及植物整体的生长状况。以下是土壤湿度对植物生长的一些主要影响。
**根系吸水**：适宜的土壤湿度可以保证植物根系有效吸收水分，维持正常的生理活动。
**养分吸收**：水分是植物吸收土壤中养分的媒介，土壤湿度适宜有助于植物更好地吸收必需的矿物质和营养。
**土壤通气性**：湿度过高会导致土壤中空气含量降低，影响根系的呼吸作用，长期湿润还可能导致根系腐烂。
**影响土壤结构**：土壤湿度的不均衡会影响土壤的物理结构，如结块或侵蚀，这对植物根系的生长和土壤微生物的活动不利。
**生长速率**：土壤湿度对植物的生长速率有直接影响，适宜的湿度可以促进植物快速生长，而不适宜的湿度则可能导致生长缓慢。
