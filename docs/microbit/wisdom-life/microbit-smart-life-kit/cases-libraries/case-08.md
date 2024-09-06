---
sidebar_position: 8
sidebar_label: 智能药盒
---

# 智能药盒

## 简介

在本项目中，我们将学习如何制作一个智能药盒，可以通过按下碰撞传感器来控制智能药盒出药，通过OLED显示屏显示吃药次数，利用光线传感器检测药盒周围的环境光强度，当环境光强度超过阈值时，自动发出警报，提醒使用者不要在强光环境下保存药品。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-life-kit/images/case-08-01.png)

## 教学目标

制作智能药盒案例

学习如何使用硬件和工具去解决生活中的问题

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

生活中，经常是家里有老年人因为记忆力衰退而忘记吃药的情况发生，让家人担心，因此我们生活中是需要一个东西解决这个问题，并且借此表达自己对亲人关心，那么我们是否可以自己制作一个呢？

## 项目制作

### 硬件连接

将光线传感器连接到wukong扩展板的P1接口，碰撞传感器连接到wukong扩展板的P2接口，将OLED显示屏连接到wukong扩展板的IIC接口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-life-kit/images/case-08-02.png)

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

示例程序：[https://makecode.microbit.org/_9mhFH7d5pDJi](https://makecode.microbit.org/_9mhFH7d5pDJi)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-life-kit/images/case-08-03.png)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_9mhFH7d5pDJi"
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

当智能风扇监测到周围环境温度高于预设温度时，自动开启风扇进行降温。


## 扩展知识

**智能药盒的优化**

智能药盒是一种通过技术手段帮助用户更好地管理药物摄入的设备，它具有多种功能和优点：

1. **提醒服药**：智能药盒可以通过声音、光线、手机APP推送等多种方式提醒用户按时服药，对于记忆力减退的老年人或者忙碌的现代人来说，这是一个非常实用的功能。

2. **记录用药情况**：一些智能药盒能够记录用户的用药情况，包括用药时间、频率和剂量，有助于医生了解患者的用药依从性，从而调整治疗方案。

3. **提高用药依从性**：智能药盒通过定时提醒和记录，有助于提高患者的用药依从性，减少因忘记服药而导致的治疗效果不佳或病情反复。

4. **远程监控**：智能药盒通常可以与家人或护理人员的手机APP相连，实现远程监控，让家人能够及时了解患者的用药情况。

5. **个性化设置**：用户可以根据自己的用药需求，通过手机APP对智能药盒进行个性化设置，包括设置不同的提醒时间和用药计划。

6. **数据共享**：智能药盒的数据可以通过云服务进行共享，方便医生和家庭成员访问，有助于实现更好的健康管理。

7. **娱乐功能**：部分智能药盒还集成了娱乐功能，如播放音乐、语音问候等，增加了与用户的互动性，提高了用户体验。

8. **适老化设计**：考虑到老年人的使用习惯，智能药盒通常具有简单直观的操作界面，方便老年人使用。

9. **安全性**：智能药盒可以通过锁定功能防止儿童误食药品，提高了家庭用药的安全性。

10. **节省医疗成本**：通过提高用药依从性和治疗效果，智能药盒有助于减少因治疗不当导致的重复就医和额外医疗成本。

智能药盒的这些优点使其成为现代健康管理的有力工具，尤其对于需要长期服药的患者来说，智能药盒提供了一个便捷、有效的解决方案。随着技术的不断进步，未来智能药盒的功能将更加多样化和智能化。
