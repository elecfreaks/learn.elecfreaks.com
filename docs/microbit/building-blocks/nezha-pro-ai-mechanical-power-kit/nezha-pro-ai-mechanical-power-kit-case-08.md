---
sidebar_position: 9
sidebar_label: 案例八:手势识别台灯
---

# 案例八:手势识别台灯

## 案例简介

制作一个手势识别台灯，通过手势控制台灯启动、关闭、切换灯光。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-08-01.png)

## 教学准备

|     名称     |            图示            |
| :----------: | :--------------------------: |
|   哪吒Pro AI机械动力套装   |   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-01.png)  |

## 教学目标

完成手势识别台灯的搭建，掌握台灯支架、灯光模块与手势识别传感器的组装与连接方法，实现通过手势控制台灯的开启、关闭、灯光调节。

理解手势识别传感器与灯光模块的协作原理，学会编程将特定手势（如挥手、停留）与灯光状态（亮、灭、灯光颜色）关联。

在调试传感器灵敏度、灯光亮度参数的过程中，培养动手能力和编程逻辑，学会解决手势识别延迟、灯光亮度不均匀的问题。

激发对智能家居技术的兴趣，感受 “无接触控制” 的便捷性，建立 “科技改善生活” 的认知。

## 故事导入

傍晚，指挥中心突然停电。黑暗中传来 “咔哒” 声，阿极点亮了应急灯：“别慌，试试‘光影’台灯。它能通过手势调节亮度，可惜现在只会闪。”​
孩子们在微光中研究台灯的红外传感器：“当手在传感器前划过，就像给它发送密码。” 阿极的眼睛在黑暗中闪着绿光，“就像魔法师挥魔杖变光明一样。”

## 学习探究

尝试设计不同的手势对应灯光功能（如向上挥 = 开灯、向下挥 = 关灯、左右挥 = 调节亮度），编程时如何设置亮度的 “渐变” 效果（如从暗到亮逐步变化）？

环境光线对姿势识别传感器的准确性有影响吗？在强光或弱光环境下，如何调整传感器参数（如灵敏度）提高识别率？

如果台灯出现 “灯光闪烁” 或 “手势无响应”，可能是哪些原因导致的？（如灯光模块接线松动、传感器与灯光模块干扰）

对比手势识别台灯与普通按键台灯、声控台灯的使用体验，手势控制在哪些场景（如双手拿东西时）更有优势？

## 搭建步骤

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/files/nezha-pro-ai-mechanical-power-kit-case-08.pdf" type="application/pdf" width="100%" height="600px" />

## 硬件连线

将手势识别传感器、OLED显示屏连接到哪吒Pro扩展板的IIC接口，将智能电机连接到哪吒Pro扩展板的M1接口，将彩虹灯环连接到哪吒Pro扩展板的J1接口，碰撞传感器连接到哪吒Pro扩展板的J2接口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-08-02.png)

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

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-08-03.png)

程序链接:[https://makecode.microbit.org/_gHJJCvUY0Jcd](https://makecode.microbit.org/_gHJJCvUY0Jcd)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_gHJJCvUY0Jcd"
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

开启电源后，通过手势识别控制灯光开启、关闭、灯光颜色，通过碰撞传感器可简单控制灯光开启和关闭，OLED显示当前灯光颜色。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-08.gif)


## 扩展知识

1. 手势识别在智能家居中的应用：除了台灯，手势识别还用于智能电视（挥手换台）、智能冰箱（挥手开门）、智能镜子（手势调节功能）等，核心是通过 “无接触操作” 提升使用便捷性。
2. 灯光控制技术的发展：从手动开关到声控、遥控，再到手势、语音控制，灯光控制技术的升级体现了 “以人为本” 的设计理念，让家电更贴合人类的使用习惯。
3. 传感器的抗干扰设计：为了减少环境光线、噪音对传感器的影响，工程师会在传感器内部添加滤波电路、算法优化（如忽略杂乱信号），本案例可尝试通过遮挡强光、保持手势稳定提升识别效果。
