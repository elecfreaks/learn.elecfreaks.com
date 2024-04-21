---
sidebar_position: 4
sidebar_label: 案例四：环境灰尘监测装置
---

# 案例四：环境灰尘监测装置

## 简介

本课程旨在引导学生使用智能气候套装制作一个环境灰尘监测装置，并通过OLED显示屏实时显示环境中的灰尘浓度。通过这个实践项目，学生将深入了解环境灰尘的概念、影响因素以及如何测量和监测它。此外，学生还将通过探究活动和扩展知识了解灰尘对环境和人体健康的重要性。

## 教学目标

了解环境灰尘的概念和对环境的影响。

学习使用灰尘传感器和Micro:bit制作环境灰尘监测装置。

了解如何通过OLED显示屏实时显示环境中的灰尘浓度。

探究灰尘对环境和人体健康的重要性。

## 教学准备

在开始教学之前，请确保您已经准备好以下必要的材料：

| 图片 | 名称 |
| :-: | :-: |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-02.png) | 智能气候套装 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-03.png) | micro:bit V2 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-04.png) | 个人电脑（PC） |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-05.png) | USB 数据线 |

这些材料将为您提供一个完整的体验，确保您可以顺利地进行后续的操作和学习。如果您已准备好以上内容，我们可以继续进入下一步。

## 教学过程

### 课程引入

同学们是否曾经在某些环境中注意到可见的灰尘？是否思考过环境中的灰尘会对我们的生活产生什么影响呢？今天，我们将进入一个有趣的探索之旅，通过制作一个环境灰尘检测装置，来监测环境中的灰尘浓度。这个装置将帮助我们更好地了解环境的清洁程度，并探索灰尘对我们和周围环境的重要性。不仅如此，我们还将通过OLED显示屏实时显示灰尘浓度数据，为我们的实践项目增添了一份科技的魅力。准备好了吗？让我们开始这个令人兴奋的学习之旅吧！"

### 探究活动

1. 了解环境灰尘的概念和对环境的影响。

2. 学习使用灰尘传感器和Micro:bit制作环境灰尘监测装置。

3. 了解如何通过OLED显示屏实时显示环境中的灰尘浓度。

4. 探究灰尘对环境和人体健康的重要性。

### 硬件连接

灰尘传感器的LED连接到P1接口，out连接到P2接口，OLED显示屏安装在IoT:bit上。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-04-06.png)

### 代码编程

*** 添加软件库 ***

进入“[makecode.microbit.org](https://makecode.microbit.org/)”，点击新建项目。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/smart-weather-station-kit-add-extension-01.png)

在弹出窗口输入项目名称并点击“创建”。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/smart-weather-station-kit-add-extension-02.png)

点击代码抽屉中的“扩展”。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/smart-weather-station-kit-add-extension-03.png)

在弹出界面输入“IOT”，按下回车键进行搜索，并选择加载IOT软件库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/smart-weather-station-kit-add-extension-04.png)

*** 示例代码 ***

1. 当开机时显示爱心图标。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-04-07.png)

2. 初始化OLED显示屏。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-04-08.png)

3. 获取环境灰尘浓度并显示在OLED显示屏。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-04-09.png)


请参考程序连接：[https://makecode.microbit.org/_M4kMsw6sy0q3](https://makecode.microbit.org/_M4kMsw6sy0q3)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_M4kMsw6sy0q3"
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

*** 预期效果：连接电源后，micro:bit的LED矩阵先显示爱心，然后在OLED显示屏上显示当前灰尘浓度。 ***

（GIF动图）

### 总结与反思

回顾课程内容，提醒学生掌握了哪些知识和技能。

引导学生讨论他们在制作过程中遇到的问题和困难，以及如何解决这些问题。

引导学生思考灰尘对环境和人体健康的影响。

引导学生进一步研究和探索其他环境监测装置的应用。

## 扩展知识

### 灰尘对环境和人体健康的影响

灰尘对环境的影响：

空气质量下降：灰尘中可能含有微小颗粒物，如灰尘、花粉、细菌、病毒、化学物质等。这些颗粒物在空气中悬浮，使空气质量下降，影响生态平衡和生物多样性。

土壤退化：大量的灰尘沉积在土壤表面，可能导致土壤质量下降。灰尘中的化学物质、重金属等污染物质可能渗入土壤，影响植物生长和土壤的肥力。

建筑物和设备受损：灰尘可以在建筑物和设备表面积聚，形成灰尘层，逐渐损害建筑物的外观和结构。这对房屋、文物和基础设施等都可能造成损害。

灰尘对人体健康的影响：

呼吸道问题：灰尘中的微小颗粒物可以被吸入呼吸道，引发呼吸道问题。长期暴露于高浓度的灰尘中可能导致咳嗽、喘息、气短和呼吸困难等症状。对哮喘和过敏等呼吸系统疾病的患者尤其敏感。

心血管健康：某些研究显示，长期暴露于高浓度灰尘中可能与心血管疾病的发生和加重有关。微小颗粒物进入血液循环后，可能引发炎症反应，影响血管功能和心脏健康。

过敏和哮喘：灰尘中的花粉、细菌、真菌孢子等可能引发过敏反应和哮喘发作。敏感的人可能出现打喷嚏、鼻塞、皮肤瘙痒、眼部刺激等症状。

毒性物质暴露：某些灰尘中可能含有有害的化学物质和重金属，如铅、汞、石棉等。长期暴露于这些有害物质可能对人体的内脏器官、神经系统和免疫系统造成损害。

了解灰尘对环境和人体健康的影响，有助于我们采取适当的措施来减少灰尘的产生和暴露。这包括定期清洁、通风良好的环境、佩戴口罩、避免接触有害物质等。同时，定期监测和评估环境中的灰尘浓度也是重要的措施，以保护我们的健康和创造更清洁的生活环境。
