---
sidebar_position: 10
sidebar_label: 案例九:手势识别推土机
---

# 案例九:手势识别推土机

## 案例简介

制作一个手势识别推土机，通过手势控制推土机的前进方向和铲斗抬升和放下。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-09-01.png)

## 教学准备

|     名称     |            图示            |
| :----------: | :--------------------------: |
|   哪吒Pro AI机械动力套装   |   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-01.png)  |

## 教学目标

完成手势识别推土机的搭建，掌握推土机底盘、推土铲（含传动部件）与手势识别传感器的组装与连接方法，实现通过手势控制推土机的前进、后退、推土铲升降。

理解手势识别传感器与电机（控制底盘、推土铲）的协作原理，学会编程将特定手势与推土机的不同动作关联。

在调试推土铲升降幅度、手势与动作对应关系的过程中，培养动手能力、空间思维和问题解决能力，学会优化推土机的操作流畅性。

激发对工程机械设备的兴趣，感受 “智能控制” 在工业场景的应用潜力，建立 “小模型模拟大工程” 的认知。

## 故事导入

第二天清晨，旋翼报告：栅栏外堆积了很多碎石，挡住了跳跳的巡逻路线。“该轮到‘铁铲’出场了！” 工程队机器人指着陷在碎石堆里的推土机，“它能按手势前进后退，现在却像块石头。”​
孩子们发现铁铲的手势传感器被灰尘覆盖了。“就像人类眼睛进了沙子看不清东西。” 阿极笑着说，“清理干净后，试试向前挥动手臂 —— 这是让它前进的指令。”

## 学习探究

推土机的推土铲升降需要依赖哪个部件（如电机、舵机）？如何通过手势指令（如向上挥 = 升铲、向下挥 = 降铲）控制这个部件的动作幅度？

如果推土机在前进时推土铲无法正常升降，可能是哪些原因导致的？（如推土铲传动部件卡住、电机动力不足）

对比真实推土机与模型的操作方式，真实推土机的驾驶员如何控制推土铲？模型的手势控制模拟了真实操作的哪个优势（如远距离控制）？

## 搭建步骤

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/files/nezha-pro-ai-mechanical-power-kit-case-09.pdf" type="application/pdf" width="100%" height="600px" />

## 硬件连线

将手势识别传感器连接到哪吒Pro扩展板的IIC接口，将两个智能电机连接到哪吒Pro扩展板的M1、M2接口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-09-02.png)

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

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-09-03.png)

程序链接:[https://makecode.microbit.org/_8Jkdmi9MdaRV](https://makecode.microbit.org/_8Jkdmi9MdaRV)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_8Jkdmi9MdaRV"
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

开启电源后，通过手势控制推土机的前进方向和铲斗抬升和放下。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-09.gif)


## 扩展知识

1. 真实推土机的工作原理：真实推土机通过液压系统控制推土铲的升降和倾斜，具有动力大、能处理坚硬土壤的特点，本案例用电机 / 舵机模拟液压系统的 “精准控制” 功能。
2. 智能工程机械的发展：现代工程机械设备（如挖掘机、推土机）开始加入智能控制技术，如通过遥控器、手势甚至 AI 算法实现自动化作业（如无人推土机在矿山工作），减少人工操作风险。
3. 手势控制的工业价值：在工业场景中，工人可能戴着手套或手上有油污，手势控制可避免接触设备按键，减少故障风险，同时实现远距离操作（如控制危险环境中的机械）。
