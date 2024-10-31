---
sidebar_position: 2
sidebar_label: 水位检测装置
---

# 水位检测装置

## 简介

在本项目中，我们将学习如何制作一个水位检测装置，该装置通过水位传感器实时监测水位变化，并将这些数据转化为舵机的转动角度，直观地反映当前水位。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-life-kit/images/case-02-01.png)

## 教学目标

了解水位传感器的使用方式

掌握使用micro:bit控制舵机转动角度的基本编程技能。

## 教学准备

在开始教学之前，请确保您已经准备好以下必要的材料：

| **图片** | **名称** | **数量** | **备注** |
| --- | --- | --- | --- |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-life-kit/images/microbit-smart-life-kit.png) | 智慧生活套装 | 1 |  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/USB-data-cable.png) | USB数据线 | 1 |   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit.png) | micro:bit | 1 | 自行准备 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/pc.png) | PC | 1 | 自行准备 |

这些材料将为您提供一个完整的体验，确保您可以顺利地进行后续的操作和学习。如果您已准备好以上内容，我们可以继续进入下一步。

## 课程引入

水位监测装置对于确保水资源的合理利用、保护和管理至关重要，我们能自己制作一个简易的水位检测装置吗？

## 项目制作

### 硬件连接

将水位传感器连接到悟空扩展板的P1接口，将180°舵机连接到悟空扩展板的S1接口，将OLED显示屏插入悟空扩展板的IIC接口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-life-kit/images/case-02-02.png)

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

### 添加软件库

在makecode编程界面的Toolbox点击Extensions。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-02.png)

在弹出页面搜索`iot-environment-kit`，并点击选择iot-environment-kit的软件库。


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-03.png)

在弹出页面搜索`wukong`，并点击选择wukong软件库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-04.png)


### 编写程序

示例程序：[https://makecode.microbit.org/_4uRc4hUcAWXx](https://makecode.microbit.org/_4uRc4hUcAWXx)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-life-kit/images/case-02-03.png)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_4uRc4hUcAWXx"
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

点击![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-05.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-06.png)


在弹出窗口选择`BBC micro:bit CMSIS-DAP`，然后选择连接，至此，我们的micro:bit就已经连接成功。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-07.png)

点击下载程序。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-08.png)


### 结果

开机后，OLED显示当前的水位值，并通过舵机的转动角度更加直观的体现当前水位情况。

**为了演示效果，结果展示中使用了套装中没有的物料，比如：木质房屋、水杯等。**

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-life-kit/3.gif)

## 扩展知识

**为什么要做水位监测装置？**

水位监测装置对于确保水资源的合理利用、保护和管理至关重要。它们在多个领域发挥着重要作用，包括但不限于：

水资源管理：水位监测装置可以帮助监测水库、河流、湖泊和地下水位，确保水资源的有效管理和调度，防止水资源的浪费，并在干旱或洪水等极端天气条件下提供重要的数据支持。

农业灌溉：在农业领域，水位监测装置能够确保农田得到适量的灌溉，提高灌溉效率，减少水资源的浪费，并有助于作物的健康成长。

环境监测：水位监测装置对于监测环境变化，如气候变化对水位的影响、水质污染等，具有重要作用。它们可以提供关于水体健康状况的重要数据，帮助环境保护和生态研究。

工业应用：在工业领域，水位监测装置用于监控工业过程中的液体水位，确保生产过程的安全和效率，如化工、石油和水处理厂等。

防洪和灾害预警：水位监测装置能够实时监测水位变化，为防洪预警系统提供数据，帮助相关部门及时采取措施，减少洪水等自然灾害的影响。

城市排水系统：在城市基础设施中，水位监测装置能够监测排水管道的水位，及时发现并处理排水不畅等问题，保障城市排水系统的正常运行。

水电站和大坝安全：水位监测装置对于水电站的运行管理和大坝的安全监测至关重要，它们可以监测水库的水位变化，确保水电站的发电效率和大坝结构的安全。

科研和教育：在科研和教育领域，水位监测装置可以作为研究工具，帮助学生和研究人员更好地理解水文学、环境科学和生态学等领域的知识。

综上所述，水位监测装置的应用广泛，它们不仅有助于提高水资源的利用效率，还对环境保护、灾害预防和工业生产等方面发挥着重要作用。随着技术的发展，水位监测装置的精度和可靠性将进一步提高，为水资源的可持续管理和保护提供更加有力的支持。
