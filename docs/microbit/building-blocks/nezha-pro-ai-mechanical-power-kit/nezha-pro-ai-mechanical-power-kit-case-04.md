---
sidebar_position: 5
sidebar_label: 案例四:震动机器人
---

# 案例四:震动机器人

## 案例简介

制作一个震动机器人，通过震动让机器人移动。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-04-01.png)

## 教学准备

|     名称     |            图示            |
| :----------: | :--------------------------: |
|   哪吒Pro AI机械动力套装   |   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-01.png)  |

## 教学目标

完成震动机器人的搭建，掌握电机与偏心部件（如偏心轮）的组装方法，理解震动产生的原理，实现机器人的移动功能。

认识 “偏心运动产生震动” 的物理现象，了解电机转速与震动强度、机器人移动速度的关联。

在调试偏心部件位置、电机转速的过程中，培养观察能力和实验探究能力，学会分析震动大小对机器人移动稳定性的影响。

感受 “非常规运动方式” 的创意，激发对物理现象与机械设计结合的兴趣，建立 “问题导向” 的设计思维（如针对松软地面用震动移动）。

## 故事导入

修好旺财，看着它重新把机械羊赶进羊圈后，众人跟着阿极来到村庄边缘的沙地。负责巡逻边界的震动机器人 “跳跳” 正趴在沙地上微微颤抖，却怎么也挪不动身子。“沙地太软，普通行走方式根本行不通。” 阿极踢了踢脚下的沙子，“跳跳的秘密武器是肚子里的齿轮加速结构和凸轮 —— 大齿轮带动小齿轮转得飞快，让凸轮像偏心的小轮子一样疯狂转动，产生的震动才能让它在沙面上蹦跳着前进。”​
他拆开跳跳的外壳，指着卡住的齿轮组：“你看，这里的加速齿轮卡住了，凸轮转得比蜗牛还慢，自然没法产生足够的震动。得让齿轮重新咬合，让小齿轮跟着大齿轮高速转动起来。” 远处突然卷起沙尘，阿极的传感器发出尖锐警报：“齿轮野兽快到边界了，必须让跳跳恢复巡逻！”

## 学习探究

震动机器人的 “震动” 是如何产生的？如果去掉电机上的偏心部件（如偏心轮），机器人还能移动吗？为什么？

调整偏心部件的重量或安装位置（如靠近电机轴一端、远离一端），机器人的震动强度和移动方向会发生什么变化？

电机转速调快或调慢时，机器人的移动速度和稳定性有什么不同？尝试在不同地面（如桌面、地毯）测试，观察移动效果的差异。

对比震动机器人与四足 / 双足机器人的移动方式，震动移动适合在哪些场景（如狭窄缝隙、松软沙地）使用？

## 搭建步骤

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/files/nezha-pro-ai-mechanical-power-kit-case-04.pdf" type="application/pdf" width="100%" height="600px" />

## 硬件连线

将智能电机连接到哪吒Pro扩展板的M2接口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-04-02.png)

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

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-04-03.png)

程序链接:[https://makecode.microbit.org/_cjJRtzT5sAr2](https://makecode.microbit.org/_cjJRtzT5sAr2)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_cjJRtzT5sAr2"
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

开启电源后，按下按键A，简易机械狗向前行走，按下按键B，简易机械狗停止行走。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-04.gif)

## 扩展知识

偏心运动的生活应用：手机震动、电动按摩器、洗衣机脱水桶的平衡控制，都利用了 “偏心部件转动产生震动” 的原理，只是通过不同设计控制震动的强度和方向。

震动机器人的实际价值：在工业领域，微型震动机器人可用于管道检测（通过震动在管道内移动）；在科研领域，可模拟昆虫的 “跳跃式” 移动，探索复杂环境中的移动方案。

震动与平衡：震动机器人的移动方向难以精确控制，这是因为震动的随机性；现实中，工程师会通过添加传感器（如陀螺仪）和控制算法，让震动机器人实现定向移动。
