---
sidebar_position: 3
sidebar_label: 案例三：环境温湿度监测装置
---

# 案例三：环境温湿度监测装置

## 简介

本课程旨在引导学生制作一个环境温湿度检测装置，通过记录不同温湿度条件下的数据，并利用OLED显示屏本地显示数据，帮助学生了解温湿度对人体的影响。通过这个探究活动，学生将学习到如何使用DHT11温湿度传感器和Micro:bit进行数据采集和显示。

## 教学目标

了解DHT11温湿度传感器的使用

了解环境温湿度对人体的影响

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

同学们有没有遇到过在某些环境中感到闷热或过于干燥的情况？这些环境条件对我们的舒适度和健康有何影响？

通过制作一个环境温湿度检测装置，我们将能够实时监测和记录环境的温湿度数据，并根据这些数据来优化我们的室内环境。在本节课中，我们将学习如何使用DHT11温湿度传感器和Micro:bit来制作这个装置，并通过OLED显示屏来显示采集到的数据。让我们一起开始探索吧！

### 探究活动

1. 环境温湿度对人体的影响。

2. 学习如何使用micro:bit上的编程环境，编写代码来读取传感器数据。

3. 如何通过OLED显示屏将温湿度数据以可视化的方式呈现。

### 硬件连接

DHT11温湿度传感器连接到P1接口，OLED显示屏安装在IoT:bit上。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-03-06.png)

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

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-03-07.png)

2. 初始化OLED显示屏。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-03-08.png)

3. 获取当前环境温度和湿度，在获取环境温度和湿度时，需要间隔3秒。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-03-09.png)

4. 通过OLED显示屏显示当前温湿度。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-03-10.png)

请参考程序连接：[https://makecode.microbit.org/_7rgAMv5paF8w](https://makecode.microbit.org/_7rgAMv5paF8w)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_7rgAMv5paF8w"
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

*** 预期效果：连接电源后，micro:bit的LED矩阵先显示爱心，然后在OLED显示屏上显示当前温湿度。 ***

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-03.gif)

### 总结与反思

回顾课程内容，提醒学生掌握了哪些知识和技能。

引导学生讨论他们在制作过程中遇到的问题和困难，以及如何解决这些问题。

引导学生思考不同温湿度对人体的影响。

## 扩展知识

### 不同温湿度对人体的影响

不同温湿度条件对人体有不同的影响。以下是一些常见的温湿度条件及其对人体的影响：

高温高湿（闷热）：

脱水：高温高湿环境下，身体容易大量流失水分，导致脱水症状，如口渴、头晕、乏力等。
不适感：闷热的环境会使人感到不适，出汗增多，容易疲劳和失眠。
高温低湿（干燥热）：

脱水：高温下，人体容易通过出汗失去大量水分，而低湿度环境下水分蒸发速度加快，使得脱水风险增加。
皮肤问题：干燥的环境可能导致皮肤干燥、粗糙，出现皲裂和过敏等问题。
低温高湿（寒冷潮湿）：

不适感：寒冷潮湿的环境容易使人感到湿冷和不适，容易导致身体局部受寒，增加感冒和呼吸道疾病的风险。
低温低湿（干冷）：

皮肤干燥：干冷的环境可能导致皮肤水分流失，使皮肤干燥、紧绷，甚至出现瘙痒和龟裂等问题。
呼吸道问题：低温下，干燥的空气可能刺激呼吸道黏膜，引发咳嗽、喉咙痛和鼻塞等不适症状。
需要注意的是，每个人对温湿度的感受和适应能力有所不同，因此个体之间的反应可能会有所差异。此外，温湿度对人体的影响也会受到其他因素的影响，如个人健康状况、活动强度和时间等。因此，保持适宜的室内温湿度对于人体舒适和健康至关重要。
