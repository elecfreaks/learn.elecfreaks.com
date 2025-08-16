---
sidebar_position: 8
sidebar_label: 案例七:手势识别赛车
---

# 案例七:手势识别赛车

## 案例简介

制作一个手势识别赛车，通过手势控制小车行驶。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-07-01.png)

## 教学准备

|     名称     |            图示            |
| :----------: | :--------------------------: |
|   哪吒Pro AI机械动力套装   |   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-01.png)  |

## 教学目标

完成手势识别赛车的搭建，掌握赛车底盘、电机与手势识别传感器的组装与连接方法，实现通过手势控制赛车的前进、转弯、停止。

理解手势识别传感器的工作原理（如捕捉手部动作轨迹），学会编程将特定手势（如向前挥、向右挥）与赛车动作关联。

激发对智能交互技术的兴趣，感受 “手势控制” 的便捷性，建立 “人机交互多样化” 的认知。

## 故事导入

加固栅栏时锯倒的几根粗圆木不小心挡住了通往指挥中心的小路，众人正发愁怎么挪开，交通机器人推着一辆流线型小车跑过来：“试试‘闪电’赛车！它能沿着栅栏外侧的小路绕过去报信，可现在只会在原地画圈。”​
孩子们看到赛车的手势传感器闪着红光。阿极捡起一根树枝在车前方挥舞：“它靠识别手势行动 —— 向前挥是加速，向右摆是转弯，就像给它指路的魔法棒。你看传感器镜头被木屑挡住了，难怪认不出指令。” 远处的齿轮野兽发出咆哮，阿极催促道：“得快点让它跑起来，指挥中心还等着我们报告栅栏加固情况呢！”

## 学习探究

手势识别传感器需要在什么距离范围内才能准确识别手势？距离过远或过近会出现什么问题（如识别不到、误识别）？

尝试设置不同的手势指令（如向前挥 = 前进、向后挥 = 后退、向左挥 = 左转），编程时如何确保手势与赛车动作 “一一对应”？

如果赛车出现 “误动作”（如未做手势却移动），可能是哪些原因导致的？（如环境光线过强、手势挥动太快）

对比手势控制与遥控器控制赛车的方式，手势控制的优势和不足分别是什么？（如无需手持设备、受环境干扰大）

## 搭建步骤

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/files/nezha-pro-ai-mechanical-power-kit-case-07.pdf" type="application/pdf" width="100%" height="600px" />

## 硬件连线

将手势识别传感器连接到哪吒Pro扩展板的IIC接口，将两个智能电机分别连接到哪吒Pro扩展板的M1和M2接口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-07-02.png)

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

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-07-03.png)

程序链接:[https://makecode.microbit.org/_2EuYKHF23aDX](https://makecode.microbit.org/_2EuYKHF23aDX)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_2EuYKHF23aDX"
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

开启电源后，手势识别赛车根据手势指令开始行驶。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-07.gif)


## 扩展知识

1. 手势识别的技术类型：常用红外手势传感器（通过红外光反射检测手部动作），此外还有视觉手势传感器（通过摄像头捕捉图像识别），广泛用于手机解锁、VR 游戏、智能家电控制等领域。
2. 智能赛车的发展：现代智能赛车不仅支持手势控制，还能通过 AI 算法实现自主避障、循迹行驶（如跟随黑线），甚至通过手机 APP 实现更复杂的控制（如自定义手势）。
3. 人机交互的未来趋势：除了手势，语音、眼神、脑电波等都可能成为人机交互的方式，比如未来的汽车可能通过手势控制空调、音响，让操作更安全便捷。
