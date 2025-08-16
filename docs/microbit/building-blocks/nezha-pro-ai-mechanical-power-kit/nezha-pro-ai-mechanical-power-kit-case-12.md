---
sidebar_position: 13
sidebar_label: 案例十二:语音识别风扇
---

# 案例十二:语音识别风扇

## 案例简介

制作一个语音识别风扇，通过语音控制风扇风速、摇头、开启、停止等功能。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-12-01.png)

## 教学准备

|     名称     |            图示            |
| :----------: | :--------------------------: |
|   哪吒Pro AI机械动力套装   |   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-01.png)  |

## 教学目标

完成语音识别风扇的搭建，掌握风扇模块、摇头机构与语音识别传感器的组装与连接方法，实现通过语音控制风扇的开启、关闭、风速调节和摇头。

理解语音识别传感器 “指令接收与解析” 的功能，认识语音指令与风扇动作的关联，学会编程设置不同语音指令对应的风扇状态。

在调试语音识别灵敏度、风扇风速参数的过程中，培养动手能力、编程逻辑和问题解决能力，学会优化语音识别的准确性（如减少误识别）。

激发对智能家电技术的兴趣，感受 “语音交互” 的便捷性，建立 “科技让生活更智能” 的认知。

## 故事导入

带着能量水晶返回时正值正午，太阳烤得金属地面发烫，众人的额头上全是汗珠。“快启动‘风语’风扇！” 向导机器人阿极指着路边的降温装置，“它能听语音指令工作，说‘打开风扇’就转，说‘调大风速’就加快，可现在怎么喊都没反应。”​
孩子们对着风扇的麦克风喊：“打开！” 扇叶纹丝不动。阿极检查后发现语音模块的接线松了：“就像人耳朵里塞了棉花听不清话，得让它重新‘听见’指令。赶紧修好它，不然没等赶到机房，我们就要中暑啦！”

## 学习探究

语音识别传感器需要在什么环境下（如安静、无噪音）才能准确识别指令？噪音环境中，如何通过优化指令（如缩短指令、提高音量）提高识别率？

尝试设置多组语音指令（如 “打开风扇”“风扇一档”“风扇摇头”），编程时如何确保传感器 “区分” 不同指令（如避免 “打开” 和 “摇头” 混淆）？

如果风扇只能识别部分指令（如能识别 “打开”，不能识别 “关闭”），可能是哪些原因导致的？（如指令编程错误、传感器接线松动）

对比语音识别风扇与普通按键风扇、遥控风扇的使用体验，语音控制在哪些场景（如双手忙碌时）更有优势？

## 搭建步骤

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/files/nezha-pro-ai-mechanical-power-kit-case-12.pdf" type="application/pdf" width="100%" height="600px" />

## 硬件连线

将语音识别传感器连接到哪吒Pro扩展板的IIC接口，将智能电机连接到哪吒Pro扩展板的M2接口，将风扇模块连接到哪吒Pro扩展板的J1接口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-12-02.png)

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

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-12-03.png)

程序链接:[https://makecode.microbit.org/_Uhz0mRDaV1Cy](https://makecode.microbit.org/_Uhz0mRDaV1Cy)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_Uhz0mRDaV1Cy"
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

开启电源后，根据语音控制风扇开始运行。

Start device  启动风扇（默认档位一）
Turn off device 关闭风扇
Raise a level 增加一档
Lower a level 降低一档
Keep going 摇头
Pause 停止摇头

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-12.gif)


## 扩展知识

1. 语音识别的基本流程：语音识别传感器先将人类语音转换成电信号，再通过内置算法提取语音特征，与预设的指令库对比，最后输出控制信号（如让风扇动作），本案例简化了这一流程，聚焦 “指令与动作的关联”。
2. 智能音箱的语音交互：语音识别风扇的技术与智能音箱（如小爱同学、天猫精灵）类似，只是智能音箱能处理更复杂的指令（如 “播放音乐”“查询天气”），并通过联网实现更多功能，体现了语音识别技术的扩展性。
3. 语音识别的抗噪音技术：为了解决噪音环境中的识别问题，工程师会采用 “降噪算法”（过滤环境噪音）、“麦克风阵列”（多麦克风定位语音来源）等技术，未来的语音识别设备会更适应复杂环境。
