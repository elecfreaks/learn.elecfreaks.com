---
sidebar_position: 7
sidebar_label: 案例六:锯木机器人
---

# 案例六:锯木机器人

## 案例简介

制作一个锯木机器人，通过控制舵机往复转动让机器人模拟锯木动作。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-06-01.png)

## 教学准备

|     名称     |            图示            |
| :----------: | :--------------------------: |
|   哪吒Pro AI机械动力套装   |   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-01.png)  |

## 教学目标

完成锯木机器人的搭建，掌握舵机与 “锯片” 部件的组装方法，能正确连接舵机并编程控制其往复转动，实现模拟锯木动作。

理解舵机 “角度可控” 的特点，认识往复转动与锯木动作的关联，学会通过编程设置舵机的转动角度和频率。

激发对工业机械的兴趣，感受舵机在精准控制中的作用，建立 “技术模拟工业生产” 的认知。

## 故事导入

修好旋翼后，它传回的影像显示：齿轮野兽正用尖牙啃咬村庄的防护栏。“得赶紧加固栅栏！” 木匠机器人推着一堆圆木过来，“但我的锯木头机器人‘锯齿’不动了，没法把木头锯成木板。”​
孩子们发现锯片旁边的电机连接线松了。阿极按下启动键，电机只发出 “嗡嗡” 的空转声：“它的原理很简单，就像家里的电动锯子，电机直接带动锯片转动，电机转起来就能带动锯片工作。”

## 学习探究

舵机的往复转动角度（如 0°-90°、0°-180°）对锯木机器人的 “锯木效果” 有什么影响？角度过大或过小会导致什么问题？

调整舵机的转动频率（如每秒往复 1 次、每秒往复 2 次），锯木动作的 “效率” 会发生变化吗？

对比真实电锯（如手提电锯）与锯木机器人的动作，真实电锯的锯片是连续转动还是往复运动？两者的适用场景有什么不同？

## 搭建步骤

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/files/nezha-pro-ai-mechanical-power-kit-case-06.pdf" type="application/pdf" width="100%" height="600px" />

## 硬件连线

将智能电机连接到哪吒Pro扩展板的M2接口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-06-02.png)

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

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-06-03.png)

程序链接:[https://makecode.microbit.org/_CdFHfTU17aV7](https://makecode.microbit.org/_CdFHfTU17aV7)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_CdFHfTU17aV7"
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

开启电源后，锯木机器人开始运行。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-06.gif)


## 扩展知识

1. 舵机的应用场景：舵机因能精准控制角度，广泛用于机器人关节（如机械臂、机器人手指）、遥控玩具（如遥控车转向、航模机翼调整）、智能家居（如自动窗帘角度控制）等领域。

2. 锯切工具的发展：从手工锯（依赖人力往复）到电动锯（电机带动连续转动或往复），再到工业数控锯（精准控制锯切角度和速度），锯切技术的进步离不开机械控制技术的升级。

3. 舵机的工作原理：舵机内部包含电机、齿轮组、电位器和控制电路，通过接收信号调整电机转动，再通过齿轮减速和电位器反馈，实现精准的角度定位，这也是它能实现往复转动的核心原因。
