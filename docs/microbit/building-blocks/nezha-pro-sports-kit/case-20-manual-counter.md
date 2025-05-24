---
sidebar_position: 21
sidebar_label: 案例二十:手动计数器
---

# 案例二十:手动计数器

## 案例简介

制作一款基于哪吒 Pro 运动套装的手动计数器，通过按下按键 C 或按键 D，实现对应数值的独立计数，并在 OLED 显示屏上实时展示。该计数器可应用于运动训练中的次数统计，如击剑训练中的有效刺击计数、投篮训练中的命中次数统计等场景，将简单的按键操作与数字显示相结合，打造便捷的手动计数工具。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-20-01.png)

## 教学准备

|     名称     |            图示            |
| :----------: | :--------------------------: |
|   哪吒Pro运动套装   |   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-01.png)  |

## 教学目标

理解按键事件触发机制与变量自增逻辑。​

掌握在 OLED 显示屏上动态更新不同数值的编程方法。​

培养将基础编程技能应用于实际运动场景的能力。


## 课程引入

同学们，在击剑训练时想要记录有效刺击次数，或是投篮训练时想统计命中次数，靠脑子数可太难了！今天我们用哪吒 Pro 运动套装制作一个超实用的手动计数器！按下按键 C、D 就能让数字自动增加，还能在屏幕上看得清清楚楚。快来动手打造属于你的运动小助手，让计数变得轻松又准确！

## 学习探究

探究按键触发事件的编程响应方式，以及如何实现不同按键对应独立计数变量的自增与显示。

## 搭建步骤

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/files/%E6%89%8B%E5%8A%A8%E8%AE%A1%E6%95%B0%E5%99%A8.pdf" type="application/pdf" width="100%" height="600px" />

## 硬件连线

将按钮模块连接到哪吒Pro扩展板的J1接口，将OLED显示器连接到哪吒Pro扩展板的IIC接口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-20-03.png)

## 代码编程

进入“[makecode.microbit.org](https://makecode.microbit.org)”，点击**新建项目**。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-07.png)

在弹出窗口输入项目名称并点击**创建**。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-11.png)

点击代码抽屉中的**扩展**。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-09.png)

在弹出界面输入**nezha pro**并点击搜索图标，在显示**nezha pro**软件库后点击。同样的方式加载PlanetX软件库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-10.png)



### 示例程序

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-20-04.png)

程序链接:[https://makecode.microbit.org/_6amKXJLV5U14](https://makecode.microbit.org/_6amKXJLV5U14)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_6amKXJLV5U14"
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
l
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual13.png)

在弹出窗口选择 **BBC micro:bit CMSIS-DAP**，然后选择**连接**，至此，我们的 micro:bit 就已经连接成功。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual14.png)

点击**下载程序**

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual10.png)

## 案例演示

按下按键 C，显示屏上 “C 计数” 数值加 1；按下按键 D，“D 计数” 数值增加。多次按键后，可清晰看到两个独立计数数值在屏幕上动态更新。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-20.gif)

## 总结分享



## 扩展知识

**按键事件编程原理​**

按键本质是通过改变电路通断产生电平变化，在编程中，需设置引脚为输入模式监测电平信号。当按键按下，引脚电平从高电平变为低电平（或反之），触发预设的事件函数，实现计数变量的自增操作。同时，为避免按键抖动造成误触发，常采用软件延时消抖或状态机消抖等处理方法。​

**变量与数据存储​**

在手动计数器程序中，每个计数对应一个独立变量。变量是编程中存储数据的 “容器”，可根据需求改变数值。除了基本的整数变量，还存在浮点型、字符型等多种数据类型，在更复杂的程序中，数组、列表等数据结构能实现大量数据的有序存储与处理。​

**数学在计数中的应用​**

计数本质是数学中的加法运算，通过每次按键触发 “+1” 操作实现数值累加。在实际应用中，可拓展为减法计数（如倒计时）、乘法计数（批量统计）等运算，将数学原理与编程逻辑结合，能创造出功能更丰富的计数器，例如带有倍数统计、差值计算的复合型计数器。
