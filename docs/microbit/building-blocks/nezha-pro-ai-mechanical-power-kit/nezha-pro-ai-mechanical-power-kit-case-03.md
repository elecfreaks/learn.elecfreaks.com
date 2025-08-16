---
sidebar_position: 4
sidebar_label: 案例三:简易机械狗
---

# 案例三:简易机械狗

## 案例简介

制作一个简易机械狗，通过基本的齿轮传动，实现简单的机械狗。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-03-01.png)

## 教学准备

|     名称     |            图示            |
| :----------: | :--------------------------: |
|   哪吒Pro AI机械动力套装   |   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-01.png)  |

## 教学目标

完成简易机械狗的搭建，掌握齿轮传动结构的组装方法。

理解齿轮传动的基本原理（如啮合、转速与扭矩的关系），认识不同齿数齿轮配合对机械狗运动速度的影响。

在调试齿轮咬合度和电机参数的过程中，培养动手操作能力和细节观察能力，学会通过优化齿轮配合解决运动卡顿问题。

激发对机械传动技术的兴趣，感受齿轮在机器人运动中的核心作用，建立 “技术服务功能” 的认知。

## 故事导入

刚让 upright 重新站直，牧场方向就传来一阵混乱的金属碰撞声。“不好！” 阿极的传感器突然亮起红光，“看管机械羊的‘旺财’出事了！”​
众人赶到牧场，只见二十几只机械羊在围栏里横冲直撞，负责看管它们的机械狗旺财正歪歪扭扭地在原地打滑，齿轮组像卡住的链条一样无法转动。，齿轮咬合错位，它连迈步都做不到，羊群快要撞破围栏跑出去了！”​
阿极蹲下身指着旺财的齿轮结构：“现在得把错位的齿轮重新对齐，让它们像咬东西一样紧紧啮合在一起。”

## 学习探究

机械狗的运动依赖哪几组齿轮配合？尝试更换不同齿数的齿轮（如大齿轮带动小齿轮、小齿轮带动大齿轮），机械狗的速度会发生什么变化？

齿轮之间的咬合松紧度对机械狗的运动有影响吗？如果齿轮咬合过松或过紧，会出现什么问题（如打滑、卡顿）？如何调整？

## 搭建步骤

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/files/nezha-pro-ai-mechanical-power-kit-case-03.pdf" type="application/pdf" width="100%" height="600px" />

## 硬件连线

将智能电机连接到哪吒Pro扩展板的M1接口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-03-02.png)

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

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-03-03.png)

程序链接:[https://makecode.microbit.org/_d2V4Wjh34du5](https://makecode.microbit.org/_d2V4Wjh34du5)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_d2V4Wjh34du5"
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

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-03.gif)

## 扩展知识

1. 齿轮的种类与应用：除了本案例中的齿轮，生活中还有圆锥齿轮（用于改变传动方向，如汽车转向系统）、蜗杆齿轮（用于减速，如卷扬机）等，不同齿轮适用于不同的传动需求。
2. 齿轮传动的优点：齿轮传动具有传动效率高、动力传递稳定、寿命长的特点，广泛应用于自行车（链条 + 齿轮）、钟表、汽车发动机等设备中。
3. 机械狗的发展：现代机械狗（如索尼 Aibo）不仅有齿轮传动的运动结构，还加入了传感器和 AI 算法，能感知环境、与人类互动，成为 “智能陪伴机器人”。
