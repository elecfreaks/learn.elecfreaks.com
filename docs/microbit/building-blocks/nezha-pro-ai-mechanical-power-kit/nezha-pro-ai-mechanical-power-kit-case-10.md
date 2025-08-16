---
sidebar_position: 11
sidebar_label: 案例十:手势识别机械臂
---

# 案例十:手势识别机械臂

## 案例简介

制作一个手势识别机械臂，通过手势控制机械臂的动作。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-10-01.png)

## 教学准备

|     名称     |            图示            |
| :----------: | :--------------------------: |
|   哪吒Pro AI机械动力套装   |   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-01.png)  |

## 教学目标

完成手势识别机械臂的搭建，掌握机械臂关节（含舵机）、夹持部件与手势识别传感器的组装与连接方法，实现通过手势控制机械臂的关节转动、夹持动作。

理解机械臂 “多关节协同” 的特点，认识手势识别与关节动作的对应关系，学会编程设置不同关节的转动角度。

在调试关节转动范围、夹持部件松紧度的过程中，培养动手能力、空间逻辑思维和问题解决能力，学会解决机械臂夹持不稳、关节卡顿的问题。

激发对机器人技术的兴趣，感受 “机械臂替代人手” 的可能性，建立 “科技延伸人类能力” 的认知。

## 故事导入

清理完碎石，众人来到被损坏的仓库。货架上的零件散落一地，负责整理的机械臂机器人 “巧手” 垂着胳膊发呆。“它本来能按手势抓取不同零件的！” 仓库管理员举着螺丝叹气，“现在连最轻的螺母都夹不住。”​
阿极操控着机械臂的关节：“看这三个自由度的关节，就像人类的肩膀、手肘和手腕。你们要让它重新理解‘抓’和‘放’的手势密码。”

## 学习探究

机械臂有几个可活动的关节？每个关节由什么部件（如舵机）控制？尝试用不同手势（如左手挥 = 控制大臂、右手挥 = 控制小臂）分别控制不同关节，如何确保动作不冲突？

机械臂的夹持力度由什么决定？（如舵机的扭矩、夹持部件的材质）如果夹持力度过大，会损坏 “被夹物体”（如泡沫块）吗？如何通过编程调整？

如果机械臂的某个关节无法达到预设角度，可能是哪些原因导致的？（如舵机功率不足、关节部件卡住）

对比人类手臂与机械臂的结构，机械臂的关节模拟了人类手臂的哪些部位（如肩膀、手肘、手腕）？两者在灵活性上有什么差异？

## 搭建步骤

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/files/nezha-pro-ai-mechanical-power-kit-case-10.pdf" type="application/pdf" width="100%" height="600px" />

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

程序链接:[https://makecode.microbit.org/_XVCJ9rAWb2ex](https://makecode.microbit.org/_XVCJ9rAWb2ex)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_XVCJ9rAWb2ex"
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

开启电源后，通过手势控制机械臂的动作。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-10.gif)


## 扩展知识

1. 工业机械臂的应用：工业机械臂广泛用于汽车制造（如焊接、组装）、电子生产（如芯片搬运）、食品加工（如包装）等领域，能实现高精度、重复性的工作，提高生产效率。
2. 机械臂的控制技术：除了手势控制，工业机械臂还通过编程控制（预设动作）、视觉控制（通过摄像头定位物体）、力反馈控制（感知夹持力度）等方式工作，本案例的手势控制是 “人机交互控制” 的一种简化形式。
3. 柔性机械臂：为了避免损坏脆弱物体（如水果、玻璃），科学家研发了柔性机械臂（用软质材料制作），结合手势控制后，可用于医疗（如微创手术）、农业（如水果采摘）等领域，体现了机械设计的 “人性化” 趋势。
