---
sidebar_position: 16
sidebar_label: 案例十五:语音识别运载车
---

# 案例十五:语音识别运载车

## 案例简介

制作一辆语音识别运载车，通过语音控制车的行驶方向及车斗抬升、放下。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-15-01.png)

## 教学准备

|     名称     |            图示            |
| :----------: | :--------------------------: |
|   哪吒Pro AI机械动力套装   |   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-01.png)  |

## 教学目标

完成语音识别运载车的搭建，掌握运载车底盘、载物平台与语音识别传感器的组装与连接方法，实现通过语音控制运载车的前进、后退、转弯和停止。

理解语音识别传感器与电机（控制底盘）的协作原理，学会编程将特定语音指令（如 “运载车前进”“运载车左转”）与运载车的运动状态关联。

在调试运载车行驶方向、语音指令响应速度的过程中，培养动手能力、编程逻辑和问题解决能力，学会解决运载车跑偏、语音指令无响应的问题。

激发对智能搬运设备的兴趣，感受 “语音控制” 在运输场景的应用，建立 “科技简化搬运工作” 的认知。

## 故事导入

灯光亮起后，众人看到核心服务器旁散落着零件。“需要把这些零件运到维修台。” 系统工程师指着角落里的运载车，“‘小火车’能听语音指令移动，现在却纹丝不动。”​
孩子们尝试：“前进！” 运载车的轮子转了转。“很好！” 阿极拍手，“再试试‘左转’，让它准确停到维修台前。”

## 学习探究

运载车的 “转弯” 动作需要控制哪个电机？

尝试在运载车上放置 “模拟货物”（如小积木），语音控制运载车移动时，货物容易掉落吗？如何优化载物平台（如增加围栏）或行驶速度避免掉落？

如果运载车在执行 “后退” 指令时方向跑偏，可能是哪些原因导致的？

对比语音识别运载车与真实物流运载车（如快递分拣车），真实运载车如何实现 “精准运输”？（提示：参考 GPS、视觉导航）

## 搭建步骤

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/files/nezha-pro-ai-mechanical-power-kit-case-15.pdf" type="application/pdf" width="100%" height="600px" />

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

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-15-03.png)

程序链接:[https://makecode.microbit.org/_dzvgAz4R5MJJ](https://makecode.microbit.org/_dzvgAz4R5MJJ)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_dzvgAz4R5MJJ"
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

开启电源后，根据语音控制运载车运行。

Full speed ahead 前进
Reversing 停车
Turn left 左转
Turn right 右转
Execute function one 抬起车斗
Turn off device 放下车斗


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-15.gif)


## 扩展知识

1. 能运载车的实际应用：真实场景中的智能运载车（如 AGV 分拣车）广泛用于快递仓库、工厂车间，通过激光导航、视觉导航实现自主行驶，结合语音控制后，可由工人 “远程指挥” 搬运路线，提高灵活性。
2. 语音控制的运输优势：在狭窄的仓库通道中，工人难以跟随运载车操作，语音控制可实现 “远距离指挥”（如在货架旁说 “运载车到 A 区”），减少操作难度，同时避免碰撞。
3. 运载车的动力与载重：真实运载车的载重能力取决于电机功率和底盘结构，本案例的小型运载车虽载重有限，但核心原理与真实运载车一致 —— 通过电机动力实现运动，通过控制算法保证方向准确。
