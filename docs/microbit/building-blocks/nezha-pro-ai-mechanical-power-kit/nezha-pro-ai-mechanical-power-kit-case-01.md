---
sidebar_position: 2
sidebar_label: 案例一:简易四足机器人
---

# 案例一:简易四足机器人

## 案例简介

制作一个简易的四足机器人，通过基本的连杆机构，实现简易四足机器人的行走。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-01-01.png)

## 教学准备

|     名称     |            图示            |
| :----------: | :--------------------------: |
|   哪吒Pro AI机械动力套装   |   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-01.png)  |

## 教学目标

完成简易四足机器人的搭建，掌握连杆机构的组装方法，能正确连接电机与超声波传感器，理解各部件的协作关系。

初步认识连杆机构的运动原理，了解超声波传感器的功能（如距离检测），学会通过电机控制机器人腿部的屈伸动作。

在调试机器人行走和传感器检测的过程中，培养动手实践能力、观察分析能力和问题解决能力（如调整连杆长度优化行走姿态）。

激发对仿生机器人的兴趣，感受机械结构与生物运动的关联，建立 “科技模仿自然” 的初步认知。

## 故事导入

“叮 ——” 微型传送舱的警报声惊醒了睡梦中的小工程师们。屏幕上突然弹出全息影像：机器人村庄的村长正焦急地跺脚，他脚下的金属地面布满裂纹。“帮帮我们！” 村长的声音带着电流杂音，“核心系统崩溃后，最基础的巡逻机器人都瘫了，森林里的齿轮野兽要闯进村子啦！”​
孩子们跟着全息地图来到村口，只见四足机器人 “铁蛋” 趴在地上，四条腿的连杆全松了。“得先让铁蛋站起来！”

## 学习探究

四足机器人的腿部由几组连杆组成？调整连杆的长度或角度，会对机器人的行走姿态（如步幅大小、稳定性）产生什么影响？

超声波传感器在机器人上的作用是什么？如何通过传感器让机器人避开前方障碍物？尝试改变传感器的检测距离，观察机器人的反应。

电机的转速快慢会影响机器人的行走速度吗？如果机器人出现 “跛行”（某条腿不动），可能是哪些原因导致的？（从连杆连接、电机接线等角度分析）

对比四足机器人与现实中四足动物（如猫、狗）的行走方式，它们的腿部运动有哪些相似或不同之处？

## 搭建步骤

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/files/nezha-pro-ai-mechanical-power-kit-case-01.pdf" type="application/pdf" width="100%" height="600px" />

## 硬件连线

将智能电机连接到哪吒Pro扩展板的M2接口，超声波传感器连接到哪吒Pro扩展板的J1接口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-01-02.png)

## 代码编程

进入“[makecode.microbit.org](https://makecode.microbit.org)”，点击**新建项目**。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-07.png)

在弹出窗口输入项目名称并点击**创建**。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-11.png)

点击代码抽屉中的**扩展**。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-09.png)

在弹出界面输入**nezha pro**并点击搜索图标，在显示**nezha pro**软件库后点击。同样的方式加载PlanetX软件库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-10.png)

## 示例程序

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-01-03.png)

程序链接:[https://makecode.microbit.org/_c6ge4pJFp3qo](https://makecode.microbit.org/_c6ge4pJFp3qo)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_c6ge4pJFp3qo"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

## 下载程序

使用 USB 线连接 PC 和 micro:bit V2。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual03.gif)

连接成功后，电脑上会识别出一个名为 MICROBIT 的盘符。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual06.png)

点击左下角的![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual07.png)，选择**Connect Device**。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual11.png)

点击![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual08.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual12.png)

点击![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual09.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual13.png)

在弹出窗口选择 **BBC micro:bit CMSIS-DAP**，然后选择**连接**，至此，我们的 micro:bit 就已经连接成功。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual14.png)

点击**下载程序**

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual10.png)


## 案例演示

开启电源后，四足机器人向前行走，当遇到障碍物时自动后退。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-01.gif)

## 扩展知识

1. 仿生机器人的灵感来源：许多四足机器人（如波士顿动力的 Spot）都模仿了动物的骨骼和肌肉结构，连杆机构就相当于机器人的 “骨骼”，电机则类似 “肌肉”，帮助实现灵活运动。
2. 超声波传感器的应用场景：除了机器人避障，超声波传感器还用于汽车倒车雷达、水位检测、工业测距等领域，核心原理是通过发射和接收超声波计算距离。
3. 连杆机构的生活应用：生活中的剪刀、雨伞开合结构、折叠椅等，都用到了连杆机构，其核心是通过多根杆的转动或移动，实现特定的运动轨迹。
