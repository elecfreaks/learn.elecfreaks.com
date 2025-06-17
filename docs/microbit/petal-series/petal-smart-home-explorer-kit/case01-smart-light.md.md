---
sidebar_position: 3
sidebar_label: 智能灯
---

# 智能灯

## 简介

在本项目中，我们将学习如何制作一个智能灯，采用micro:bit监测环境光照。当检测到光线不足时，系统自动触发LED灯组提供照明，实现自动化光控功能。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/smart-home-explorer-kit/images/case-01-01.png)

## 教学目标

了解micro:bit是如何检测光线强度的。

掌握使用micro:bit控制LED灯的基本编程技能。

理解光控逻辑在智能家居中的实际应用场景。

## 教学准备

在开始教学之前，请确保您已经准备好以下必要的材料：

| **图片** | **名称** | **数量** | **备注** |
| --- | --- | --- | --- |
| | 智能家居探索者套装 | 1 |  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit.png) | micro:bit | 1 | 自行准备 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/pc.png) | PC | 1 | 自行准备 |

这些材料将为您提供一个完整的体验，确保您可以顺利地进行后续的操作和学习。如果您已准备好以上内容，我们可以继续进入下一步。

## 课程引入

在现代建筑中，光控照明系统已广泛应用于：
- 地下车库自动启停照明
- 教室自然光联动补光系统
- 智能家居夜间自动感应夜灯
其核心原理是通过光敏元件将光信号转化为电信号，再由微控制器执行逻辑判断。

**思考互动**：观察生活中光控灯的工作特点，尝试分析其与手动开关灯的本质区别？

## 项目制作

### 硬件连接

将彩虹灯连接到花瓣基础扩展板的J1接口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/smart-home-explorer-kit/images/case-01-02.png)

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

在弹出页面搜索`petal`，并点击选择petal的软件库。


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-03.png)


### 编写程序

示例程序：[https://makecode.microbit.org/_7Yv4EfLiC53y](https://makecode.microbit.org/_7Yv4EfLiC53y)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/smart-home-explorer-kit/images/case-01-03.png)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_7Yv4EfLiC53y"
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

开机后，智能灯根据环境光强度自动点亮或者熄灭彩虹灯。



## 扩展知识

**智能光控灯在生活中的应用**

智能光控灯在生活中的应用非常广泛，它们通过智能化的控制提高了照明系统的便利性、节能性和舒适度。以下是一些具体的应用场景：

家庭自动化：在家庭环境中，智能光控灯可以根据居民的日常生活习惯自动调节亮度和色温，比如在晚上自动降低亮度以营造舒适的睡眠环境，或者在早晨模拟日出逐渐亮起，帮助人们更自然地醒来。

节能照明：智能光控灯能够根据环境光线的变化自动开关，例如在自然光线充足时减少或关闭人工照明，从而节省能源。

安全照明：在安全监控领域，智能光控灯可以在检测到异常活动时自动亮起，起到警示和威慑作用。

商业照明：商场、超市和办公楼等商业环境中，智能光控灯可以根据人流量和时间自动调节照明，既节能又能满足不同场景的照明需求。

公共照明：在街道、公园和广场等公共区域，智能光控灯可以根据季节、天气和时间自动调整亮度，保证照明的均匀性和安全性。

教育照明：在学校和图书馆等教育场所，智能光控灯可以提供适宜的光线，减少眼睛疲劳，提高学习效率。

医疗照明：在医院和诊所，智能光控灯可以根据不同的医疗活动和病人需求提供适当的照明，比如在手术室提供无影灯效果。

酒店照明：酒店房间可以通过智能光控灯提供多种照明模式，如阅读模式、放松模式等，以提升住客的舒适度和满意度。

智能窗帘系统：与智能窗帘系统结合，智能光控灯可以根据窗帘的开合自动调节亮度，确保室内光线的适宜。

紧急照明：在紧急情况下，如火灾或地震，智能光控灯可以自动切换到紧急照明模式，引导人们安全疏散。

智能光控灯的这些应用不仅提高了生活质量，还有助于节能减排，是现代智能家居和智能城市建设的重要组成部分。随着技术的进步和消费者对智能化需求的增加，智能光控灯的应用将更加广泛和深入。
