---
sidebar_position: 4
sidebar_label: 案例四：探索水与植物生长的关系
---

# 案例四：探索水与植物生长的关系

## 简介

本项目旨在引导学生使用classroom科学套装中的土壤湿度传感器、继电器模块和水泵，结合micro:bit制作一个自动浇灌装置，以探索水对植物生长的影响。通过监测土壤湿度并自动调节水分供给，学生将了解水对植物生长的重要性，并学习基础的农业科学知识。此项目将加深学生对物理、生物学和自动化技术的了解。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-04-01.png)

## 教学目标

理解水对植物生长的必要性。

学习如何使用土壤湿度传感器和继电器控制水泵。

掌握制作自动浇灌系统的基本技能。

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

水是生命之源，对于植物的生长至关重要。在本节课中，我们将探索水对植物生长的影响，并制作一个自动浇灌装置来保持植物生长所需的水分。

### 探究活动

1. 学习如何使用micro:bit上的编程环境，编写代码来读取土壤湿度传感器的数据。

2. 理解土壤湿度的科学单位及其对植物生长的影响。

3. 探索如何使用继电器控制水泵的开关，实现自动浇灌。

4. 设计一个实验，记录不同土壤湿度条件下植物的生长情况。

5. 分析实验数据，讨论自动浇灌对植物生长的促进作用。

### 硬件连接

将土壤湿度传感器连接到wukong扩展板的P1端口，继电器连接到wukong扩展板的P2端口，水泵连接到继电器上，OLED显示屏连接到wukong扩展板的IIC端口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-04-06.png)

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

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-04-09.png)

2. 将连接到P1端口的土壤湿度传感器的返回值存入变量Soil moisture中.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-04-10.png)

3. 当变量Soil moisture的值小于25时，设置连接到P2端口的继电器打开水泵，否则设置连接到P2端口的继电器关闭水泵；

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-04-11.png)

4. 暂停1000ms，清空OLED显示屏显示内容，在OLED显示屏上显示当前土壤湿度。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-04-12.png)

请参考程序连接：[https://makecode.microbit.org/_b2vP7K5W6KRd](https://makecode.microbit.org/_b2vP7K5W6KRd)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_b2vP7K5W6KRd"
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

*** 预期效果：开机后OLED显示屏显示当前土壤湿度，如果土壤湿度过低，则自动开启水泵浇水。 ***

（GIF动图）

### 总结与反思

回顾课程内容，提醒学生掌握了哪些知识和技能。

引导学生讨论他们在制作过程中遇到的问题和困难，以及如何解决这些问题。

引导学生思考水对植物生长的重要性，以及如何利用科技手段优化植物生长环境。

## 扩展知识

水对植物的生长至关重要，它在植物的整个生命周期中扮演着多个重要角色。

**养分运输**：水帮助植物从土壤中吸收养分，并将这些养分输送到植物的各个部分，比如叶子和果实。

**光合作用**：在光合作用中，植物使用水和阳光来制造它们所需的糖分和氧气。没有水，这个过程就无法进行。

**结构支持**：水还帮助植物保持结构，使得植物的茎和叶子能够保持硬挺。

**温度调节**：植物通过叶子上的气孔释放水蒸气来调节自身的温度，这就像植物的“汗水”，帮助它们在炎热的天气中保持凉爽。

**过量和不足的影响**：水太多或太少都不利于植物的生长。水太多可能导致根部腐烂，而水太少则会使植物干枯，影响其生长和健康。

**环境保护**：植物通过吸收和储存水分，有助于维持生态平衡和环境保护，比如减少洪水和提供栖息地。
