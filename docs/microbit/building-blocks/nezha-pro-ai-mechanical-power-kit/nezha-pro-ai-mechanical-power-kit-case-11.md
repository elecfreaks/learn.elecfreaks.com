---
sidebar_position: 12
sidebar_label: 案例十一：手势识别挖掘车
---

# 案例十一：手势识别挖掘车

## 案例简介

制作一个手势识别挖掘车，通过手势控制挖掘车的行驶和动作。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-11-01.png)

## 教学准备

|     名称     |            图示            |
| :----------: | :--------------------------: |
|   哪吒Pro AI机械动力套装   |   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-01.png)  |

## 教学目标

完成手势识别挖掘车的搭建，掌握挖掘车底盘、挖掘臂（含传动部件）与手势识别传感器的组装与连接方法，实现通过手势控制挖掘车的移动、挖掘臂升降和铲斗开合。

理解挖掘车 “多动作协同” 的原理（如移动 + 挖掘臂动作），认识手势指令与挖掘动作的对应关系，学会编程协调不同部件的动作。

在调试挖掘臂活动范围、铲斗开合角度的过程中，培养动手能力、逻辑思维和空间想象能力，学会解决挖掘动作卡顿、铲斗无法铲起 “模拟土壤”（如小石子）的问题。

激发对工程机器人的兴趣，感受 “智能挖掘” 的技术魅力，建立 “科技助力工程建设” 的认知。

## 故事导入

整理仓库时，大家发现储备的能量水晶快用完了。“水晶藏在东边的矿山里。” 阿极调出地图，“但挖掘车‘钻地鼠’罢工了，它需要手势指挥挖掘方向。”​
在矿山入口，孩子们看到钻地鼠的钻头卡在岩石里。“当你们向左挥手，它就向左挖；向下挥手，就会加深挖掘。” 阿极演示着，“就像指挥家指挥交响乐，每个手势都有特殊含义。”

## 学习探究

挖掘车的挖掘臂和铲斗分别由什么部件（如电机、舵机）控制？尝试用手势指令（如向前挥 = 挖掘臂下降、向后挥 = 挖掘臂上升、握拳 = 铲斗闭合）控制挖掘动作，如何确保动作连贯？

挖掘车在移动时同时控制挖掘臂，会出现动力不足的情况吗？如何通过编程优化（如优先保证移动动力，再控制挖掘臂）？

如果铲斗无法紧密闭合（导致 “模拟土壤” 漏出），可能是哪些原因导致的？（如铲斗部件连接松动、舵机转动角度不足）

对比真实挖掘车与模型的结构，真实挖掘车的挖掘臂如何实现 “大力量挖掘”？（提示：参考液压系统）模型的传动部件模拟了真实挖掘车的哪个功能？

## 搭建步骤

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/files/nezha-pro-ai-mechanical-power-kit-case-11.pdf" type="application/pdf" width="100%" height="600px" />

## 硬件连线

将手势识别传感器连接到哪吒Pro扩展板的IIC接口，将三个智能电机连接到哪吒Pro扩展板的M1、M2、M3接口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-10-02.png)

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

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-10-03.png)

程序链接:[https://makecode.microbit.org/_ik31qLKCJW5C](https://makecode.microbit.org/_ik31qLKCJW5C)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_ik31qLKCJW5C"
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

开启电源后，通过手势控制挖掘车的行驶和动作。。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-11.gif)


## 扩展知识

1. 真实挖掘车的核心部件：真实挖掘车依赖液压系统提供强大的动力，挖掘臂的升降、铲斗的开合都通过液压油缸驱动，能铲起数吨重的土壤或岩石，本案例用电机 / 舵机模拟液压系统的 “动作控制” 功能。
2. 智能挖掘车的发展：现代挖掘车开始加入 GPS 定位、视觉识别和手势控制技术，如通过手势控制挖掘臂的精准定位，或通过 AI 算法识别挖掘对象（如区分土壤和岩石），提高挖掘效率。
3. 挖掘车的应用场景：挖掘车是工程建设的核心设备，用于房屋建设（地基开挖）、道路修建（土方工程）、矿山开采（矿石挖掘）等领域，其机械结构和控制技术的进步直接影响工程进度。
