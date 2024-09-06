---
sidebar_position: 3
sidebar_label: 智能洗手台
---

# 智能洗手台

## 简介

在本项目中，我们将学习如何制作一个智能洗手台，利用超声波传感器精准检测人体靠近。一旦检测到人，系统自动触发水泵，实现自动出水功能，无需手动操作，既卫生又便捷。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-life-kit/images/case-03-01.png)

## 教学目标

了解超声波传感器的使用方式

了解继电器及水泵的使用方式

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

2019年开始，新冠病毒疫情肆虐全球，给人民生产生活造成了极大的影响。关于防止病毒感染，我们要保持社交距离，要勤洗手保持卫生等，我们发现在公共场所的洗手台和家里的有些区别，公共场所中很多水龙头不用用手触碰，大大减少了交叉感染的风险，它是怎么实现的呢？我们能不能自己做一个呢？

## 项目制作

### 硬件连接

将超声波传感器连接到wukong扩展板的P1接口，将继电器连接到wukong扩展板的P2接口，将水泵连接到继电器上，OLED显示屏连接到wukong扩展板的IIC接口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-life-kit/images/case-03-02.png)

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

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-life-kit/images/case-03-03.png)

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


## 扩展知识

**智能洗手台的应用**

智能洗手台的应用在现代生活中越来越广泛，它们通常集成了多种智能功能，以提高用户体验和卫生标准。以下是智能洗手台的一些主要应用：

1. **公共卫生提升**：智能洗手台可以通过自动感应出水、自动给皂和烘干等功能，减少细菌的传播，提高公共卫生水平。

2. **节水节能**：通过智能控制，智能洗手台能够控制水流和肥皂的用量，从而节约水资源和洗涤剂，实现环保节能。

3. **商业和公共场所**：在商场、机场、学校、医院等公共场所，智能洗手台提供了便利和高效的洗手解决方案，增强了这些场所的服务功能。

4. **家庭使用**：家庭中的智能洗手台可以提供定制化的使用体验，如根据家庭成员的不同身高自动调节高度，或者通过语音控制激活洗手功能。

5. **提高效率**：在餐饮服务业，智能洗手台可以快速提供清洁的洗手环境，帮助工作人员节省时间，提高工作效率。

6. **教育和培养良好习惯**：在学校等教育机构，智能洗手台可以教育孩子们养成良好的洗手习惯，预防疾病。

7. **特殊需求适配**：对于行动不便或有特殊需求的人群，智能洗手台可以通过自动升降等功能，提供更加人性化的服务。

8. **科技感和现代感**：智能洗手台的引入，增强了空间的科技感和现代感，提升了场所的整体形象。

智能洗手台的发展趋势表明，它们将继续集成更多高科技功能，如通过物联网技术进行远程监控和维护，或者结合人工智能提供更加个性化的服务。随着技术的不断进步，智能洗手台将更加普及，成为现代生活中不可或缺的一部分。
