---
sidebar_position: 5
sidebar_label: 案例五：智能气候站
---

# 案例四：环境灰尘监测装置

## 简介

本课程旨在通过制作智能气候站，结合前面使用智能气候套装制作的四个案例，引导学生深入了解气候变化和其对环境和人类的影响。通过探究活动，学生将能够掌握气候数据收集和分析的基本技能，进一步认识气候变化的重要性，并了解如何采取措施应对气候变化。

## 教学目标

知识目标：学生将了解气候变化对环境和人类的影响，掌握气候数据收集和分析的基本技能，以及智能气候套装的使用方法和原理。

技能目标：学生将能够搭建智能气候站并使用传感器记录环境中的温度、湿度和空气质量等数据，学会使用图表或图形展示和分析数据。

态度目标：学生将培养对气候变化的认识和关注，形成积极的环保意识和行动计划，以及团队合作和探究精神。

扩展目标：学生将进一步扩展知识，了解气候变化的原因和影响，以及国际社会为减缓气候变化所采取的行动，鼓励学生进行独立研究和深入思考相关议题。

通过达成以上教学目标，学生将在气候主题教学中获得综合的知识、技能和态度，并能积极参与到环境保护和气候变化应对的实际行动中。

## 教学准备

在开始教学之前，请确保您已经准备好以下必要的材料：

| 图片 | 名称 |
| :-: | :-: |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-02.png) | 智能气候套装 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-03.png) | micro:bit V2 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-04.png) | 个人电脑（PC） |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-05.png) | USB 数据线 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-05-05.png) | ELECFREAKS Smart Home Material Pack |

这些材料将为您提供一个完整的体验，确保您可以顺利地进行后续的操作和学习。如果您已准备好以上内容，我们可以继续进入下一步。

为了更好的将风速传感器安装到ELECFREAKS Smart Home Material Pack上，我们可以通过激光切割制作一个简单的结构件。

请查看以下文件：

## 教学过程

### 课程引入

欢迎各位同学们！今天我们将进入一个引人入胜的主题——气候变化。你是否好奇地想知道，气候变化对我们的生活和环境意味着什么？你是否想了解如何利用科技来探索和解决这一全球性的挑战？那么今天，我们将一起制作一个令人兴奋的智能气候站，通过使用智能气候套装的传感器和设备，我们将探索并分析环境中的温度、湿度和空气质量等数据。我们不仅将了解气候变化的重要性，还将学习如何采取措施来应对这一全球性挑战。让我们一起探索气候变化的奥秘，培养环保意识，并成为改变世界的力量！准备好了吗？让我们开始吧！

### 探究活动

分组实践：将学生分成小组，每个小组使用之前制作的智能气候套装中的传感器和设备搭建一个智能气候站。

数据收集：学生使用智能气候站记录环境中的温度、湿度和空气质量等数据，可以选择不同的时间段进行记录，并将数据保存。

数据分析：学生分析收集到的数据，观察温度、湿度和空气质量之间的关系，以及它们在不同时间段的变化趋势。学生可以使用图表或图形呈现数据分析结果。

讨论和总结：学生在小组内讨论数据分析的结果，并回答以下问题：我们的环境中存在哪些气候变化的迹象？这些变化可能对我们的生活产生什么影响？我们能采取哪些措施来应对气候变化？

### 硬件连接

风速传感器连接到P1接口，紫外线传感器连接到P2接口，灰尘传感器的LED连接到P3接口，out连接到P4接口，DHT11温湿度传感器连接到P10接口，并将OLED显示屏安装在IoT:bit上。



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


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-04-07.png)


请参考程序连接：[https://makecode.microbit.org/_a7sXEcgtc1M3](https://makecode.microbit.org/_a7sXEcgtc1M3)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_a7sXEcgtc1M3"
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

*** 预期效果：连接电源后，在OLED显示屏上显示当前温湿度、风速、紫外线强度、噪音强度、灰尘浓度。 ***

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-05.gif)

### 总结与反思

回顾课程内容，提醒学生掌握了哪些知识和技能。

引导学生讨论他们在制作过程中遇到的问题和困难，以及如何解决这些问题。

引导学生主动了解气候变化的原因和影响，以及国际社会为减缓气候变化所采取的行动。

## 扩展知识

### 气候变化的原因和影响

气候变化的原因和影响是一个复杂而广泛的话题，这里我们简单的了解一些基本的信息：

原因：

温室气体排放：人类活动导致了大量温室气体的排放，主要包括二氧化碳（CO2）、甲烷（CH4）、氧化亚氮（N2O）等。这些气体在大气中形成一个"温室效应"，使得地球的表面温度升高。

化石燃料的使用：燃烧化石燃料如煤、石油和天然气释放出大量的二氧化碳。这是主要的温室气体排放来源之一。

森林砍伐：森林是地球上最重要的二氧化碳吸收者之一，但大规模的森林砍伐导致了二氧化碳的释放，破坏了森林的吸收能力。

工业活动：工业过程的能源使用和排放也是温室气体的重要来源。

影响：

气候极端事件增加：气候变化导致了更频繁和更严重的极端天气事件，如暴雨、干旱、飓风和洪水等。这些事件对人类的生活、农业、基础设施和生态系统造成严重影响。

海平面上升：全球变暖导致冰川和极地冰层融化，从而导致海平面上升。这将威胁沿海地区的居民和生态系统，增加海洋侵蚀和洪涝风险。

生物多样性丧失：气候变化对生态系统产生压力，导致物种灭绝和生物多样性的丧失。许多动植物无法适应快速变化的气候条件，生态平衡受到破坏。

农业和粮食安全威胁：气候变化对农作物生长季节、水资源和农业病虫害等产生影响，威胁到粮食安全和农民的生计。

健康风险增加：气候变化导致空气污染、疾病传播和饮用水供应问题。极端热浪和自然灾害还会对人类健康产生直接影响。

这些只是气候变化原因和影响的一小部分，它们之间相互交织，对我们的星球和我们自身的生活产生深远的影响。因此，对气候变化问题的认识和应对变得尤为重要。

### 国际社会为减缓气候变化所采取的行动

国际社会为减缓气候变化所采取的行动包括以下几个主要方面：

1. 《巴黎协定》：巴黎协定是联合国于2015年通过的一项重要国际气候变化协议。该协定旨在通过全球合作控制全球变暖，将全球平均气温上升控制在1.5摄氏度以内，并采取行动减少温室气体排放。各国自愿提交减排目标，并定期向联合国报告其减排进展。

2. 温室气体减排承诺：许多国家采取了具体的减排承诺。其中，一些国家承诺实现碳中和，即在特定时间将自己的温室气体排放量降至零或将排放量与吸收量平衡。一些国家还制定了具体的减排目标和政策，促进可再生能源的发展，提高能源效率，并推动清洁能源转型。

3. 可再生能源推广：国际社会鼓励和支持可再生能源的发展和应用，如太阳能、风能、水能等。许多国家采取了政策和措施，通过减少对化石燃料的依赖，促进可再生能源的使用，以减少温室气体的排放。

4. 国际合作和技术转让：各国在减缓气候变化方面开展广泛的合作和技术转让。发达国家向发展中国家提供资金、技术和能力建设支持，帮助他们应对气候变化挑战并实现可持续发展。

5. 推动可持续发展议程：可持续发展议程是联合国的全球发展框架，旨在实现经济、社会和环境的可持续发展。减缓气候变化是可持续发展目标之一，各国在推动可持续发展议程中也积极采取行动，以实现气候变化和可持续发展的双重目标。

这些行动代表了国际社会在减缓气候变化方面的努力和合作。然而，面对气候变化的挑战，仍需要进一步加强国际合作，采取更加积极和有力的行动，以实现全球气候的可持续未来。
