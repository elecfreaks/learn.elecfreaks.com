---
sidebar_position: 17
sidebar_label: 案例十六:颜色分类器
---

# 案例十六:颜色分类器

## 案例简介

设计一款基于哪吒 Pro 运动套装的颜色分类器，利用颜色传感器精准识别红、蓝两种小球颜色，并通过舵机控制挡板实现自动分类。该装置可模拟运动训练中的器材整理场景，将颜色识别技术与机械传动结合，让球类分拣变得智能又高效。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-16-01.png)

## 教学准备

|     名称     |            图示            |
| :----------: | :--------------------------: |
|   哪吒Pro运动套装   |   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-01.png)  |

## 教学目标

理解基于 HUE 值的颜色识别原理及传感器数据读取方法。​

掌握舵机角度控制与条件判断编程逻辑。​

培养将传感器技术应用于实际运动场景的创新思维。


## 课程引入

同学们，运动场上散落着不同颜色的训练小球，一个个分拣太麻烦啦！今天我们要用哪吒 Pro 运动套装制作一个神奇的颜色分类器！它能一眼认出小球颜色，还能指挥挡板自动把球分到不同区域。快来化身科技小能手，让球类分拣变得像变魔术一样有趣！

## 学习探究

探究颜色传感器如何识别 HUE 值并进行颜色判定，以及舵机根据颜色信号执行分类动作的编程实现。

## 搭建步骤

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/files/%E6%AF%94%E8%B5%9B%E4%BB%BB%E5%8A%A1%E8%BD%A6.pdf" type="application/pdf" width="100%" height="600px" />


## 硬件连线

将OLED显示屏和颜色识别传感器连接到哪吒Pro扩展板的IIC接口，将两个智能舵机分别连接到哪吒Pro扩展板的M1、M2接口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-16-03.png)

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

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-15-05.png)

程序链接:[https://makecode.microbit.org/_gif2bx60zehe](https://makecode.microbit.org/_gif2bx60zehe)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_gif2bx60zehe"
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

将小车放置在启动区的左上角，贴近边缘，按下micro:bit上面的按键A即可让机器人从启动区开始运动，并完成全部任务

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-16.gif)

## 总结分享



## 扩展知识​

**颜色传感器工作原理​**

颜色传感器利用 HUE（色相）值实现颜色检测。HUE 作为色彩的基本属性，决定了颜色的类别，如红色、蓝色等。传感器通过捕获光线中的光谱信息，并将其转换为相应的 HUE 数值。当物体反射的光线进入传感器时，内部的光电元件将光信号转变为电信号，随后通过算法将电信号解析为 HUE 值，并与预先设定的颜色 HUE 阈值进行对比，以此判断物体的颜色。通过设定不同的 HUE 值范围，能够精确识别红色、蓝色等多种颜色。

**舵机控制技术​**

舵机是一种角度可控的伺服电机，通过 PWM（脉冲宽度调制）信号控制转动角度：​

- 信号周期：标准舵机信号周期为 20ms​
- 脉冲宽度：0.5ms - 2.5ms 脉冲宽度对应 0° - 180° 转动范围​
- 控制方式：通过编程改变脉冲宽度，实现精确角度控制​

**运动场景中的自动化应用​**

颜色分类器可延伸至更多运动场景：​

- 器材整理：自动分拣不同颜色的训练器材​
- 体能训练：按颜色区分不同重量的哑铃或阻力带​
- 趣味运动：设计颜色识别闯关游戏，提升训练趣味性
