---
sidebar_position: 14
sidebar_label: 案例十三:语音识别叉车
---

# 案例十三:语音识别叉车

## 案例简介

制作一个语音识别叉车，通过语音控制叉车行驶与车叉抬升与放下。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-13-01.png)

## 教学准备

|     名称     |            图示            |
| :----------: | :--------------------------: |
|   哪吒Pro AI机械动力套装   |   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-01.png)  |

## 教学目标

完成语音识别叉车的搭建，掌握叉车底盘、货叉升降机构与语音识别传感器的组装与连接方法，实现通过语音控制叉车的前进、后退、货叉升降。

理解语音识别传感器与电机（控制底盘、货叉）的协作原理，学会编程将特定语音指令（如 “叉车前进”“货叉上升”）与叉车动作关联。

在调试货叉升降高度、语音识别距离的过程中，培养动手能力、编程逻辑和问题解决能力，学会解决货叉升降卡顿、语音指令响应延迟的问题。

激发对工业智能设备的兴趣，感受 “语音控制” 在物流场景的应用潜力，建立 “科技提升物流效率” 的认知。

## 故事导入

赶到核心机房外，大家发现大门被沉重的合金板挡住了。“‘大力士’叉车能移开它！” 守卫机器人喊道，“但它只认语音指令，现在像聋子一样！”​
孩子们对着叉车的麦克风尝试：“启动！” 叉车毫无反应。阿极调试着语音模块：“它需要清晰的指令，就像士兵听命令一样。试试说‘升起货叉’。”

## 学习探究

叉车的货叉升降需要依赖哪个部件（如电机、舵机）？如何通过语音指令控制货叉的升降高度？

尝试设置 “连续指令”（如 “叉车前进→货叉上升→叉车后退”），编程时如何确保动作按顺序执行而不混乱？

如果叉车在执行 “货叉上升” 指令时同时移动，可能是哪些原因导致的？（如编程时动作逻辑冲突、传感器误识别）

对比真实叉车与模型的操作方式，真实叉车的驾驶员如何控制货叉？语音控制的叉车在物流仓库中能解决什么问题（如减少驾驶员操作步骤）？

## 搭建步骤

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/files/nezha-pro-ai-mechanical-power-kit-case-13.pdf" type="application/pdf" width="100%" height="600px" />

## 硬件连线

将语音识别传感器连接到哪吒Pro扩展板的IIC接口，将三个智能电机连接到哪吒Pro扩展板的M1、M2、M3接口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-13-02.png)

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

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-13-03.png)

程序链接:[https://makecode.microbit.org/_7hWct7a1pe1m](https://makecode.microbit.org/_7hWct7a1pe1m)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_7hWct7a1pe1m"
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

开启电源后，根据语音控制叉车开始运行。

Full speed ahead 前进
Reversing 后退
Turn left 左转
Turn right 右转
Start device 抬起叉子
Turn off device 放下叉子

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-13.gif)


## 扩展知识

1. 真实叉车的应用：真实叉车是物流仓库、工厂的核心搬运设备，用于货物的装卸、搬运，按动力可分为电动叉车、燃油叉车，本案例用电机模拟电动叉车的 “动力驱动” 和 “货叉控制” 功能。
2. 智能物流的发展：现代物流仓库开始采用 “无人叉车”（AGV 叉车），结合语音识别、视觉识别技术，能实现自主导航、自动装卸货，减少人工成本，提高搬运效率（如亚马逊仓库的无人叉车）。
3. 语音控制的工业优势：在工业场景中，工人可能需要同时操作多个设备，语音控制可解放双手（如无需按按键），同时实现 “远距离指挥”（如在仓库外控制叉车搬运货物），提升操作安全性。
