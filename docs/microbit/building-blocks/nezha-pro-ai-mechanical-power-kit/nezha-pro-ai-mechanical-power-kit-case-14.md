---
sidebar_position: 15
sidebar_label: 案例十四:语音识别灯
---

# 案例十四:语音识别灯

## 案例简介

制作一个语音识别灯，通过语音控制灯亮灭。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-14-01.png)

## 教学准备

|     名称     |            图示            |
| :----------: | :--------------------------: |
|   哪吒Pro AI机械动力套装   |   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-01.png)  |

## 教学目标

完成语音识别灯的搭建，掌握灯光模块、灯座结构与语音识别传感器的组装与连接方法，实现通过语音控制灯的开启、关闭、亮度调节和颜色切换（若有彩色灯）。

理解语音识别传感器 “指令解析” 的功能，认识语音指令与灯光状态的关联，学会编程设置不同指令对应的灯光参数（如亮度值、颜色代码）。

在调试灯光亮度、语音识别灵敏度的过程中，培养动手能力、编程逻辑和问题解决能力，学会解决灯光闪烁、语音指令误响应的问题。

激发对智能家居技术的兴趣，感受 “语音控灯” 的便捷性，建立 “科技让生活更舒适” 的认知。

## 故事导入

进入核心机房，里面漆黑一片。“这里的灯光由‘星光’系统控制。” 阿极的声音在黑暗中回荡，“说‘开灯’它就亮，说‘调亮’会变亮。可惜现在失灵了。”​
孩子们在黑暗中摸索：“开灯！” 头顶的灯管闪烁了一下。“它在努力识别呢。” 阿极鼓励道，“就像你们学外语，要慢慢适应发音。”

## 学习探究

如果灯光模块支持颜色切换，如何通过语音指令（如 “灯变红色”“灯变蓝色”）设置不同颜色？编程时需要调用哪些模块（如灯光颜色控制模块）？

尝试设置 “场景指令”（如 “睡前模式”= 灯变暗、“阅读模式”= 灯变亮），编程时如何将多个灯光参数（亮度、颜色）与一个语音指令关联？

环境噪音（如电视声、说话声）会影响语音识别灯的准确性吗？如何通过优化指令（如使用独特指令 “小灯打开” 而非 “打开”）减少误识别？

对比语音识别灯与智能音箱控制的灯（如通过 “小爱同学” 控灯），两者的技术原理有什么不同？（提示：是否依赖联网）

## 搭建步骤

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/files/nezha-pro-ai-mechanical-power-kit-case-14.pdf" type="application/pdf" width="100%" height="600px" />

## 硬件连线

将语音识别传感器连接到哪吒Pro扩展板的IIC接口，将彩虹灯环连接到哪吒Pro扩展板的J1接口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-14-02.png)

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

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-14-03.png)

程序链接:[https://makecode.microbit.org/_9fUX8MiLK3z7](https://makecode.microbit.org/_9fUX8MiLK3z7)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_9fUX8MiLK3z7"
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

开启电源后，根据语音控制灯光设备运行。

Start device  开灯
Turn off device 关灯


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-14.gif)


## 扩展知识

1. 语音识别灯的技术分类：本案例是 “本地语音控制灯”（指令预设在传感器中，无需联网），而智能音箱控制的灯是 “联网语音控制灯”（通过云端解析指令），前者响应更快，后者可支持更复杂的指令。
2. 智能家居的联动：语音识别灯可与其他智能家居联动，如 “说‘回家模式’= 灯打开 + 空调开启 + 窗帘关闭”，这需要通过 “智能家居网关” 实现不同设备的通信，体现了 “万物互联” 的趋势。
3. 灯光的健康价值：现代语音识别灯还可加入 “护眼模式”（如调节色温），通过语音指令快速切换，避免长时间看冷光损伤眼睛，体现了 “科技兼顾健康” 的设计理念。
