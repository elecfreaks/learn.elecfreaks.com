---
sidebar_position: 18
sidebar_label: 案例十七:射箭运动员
---

# 案例十七:射箭运动员

## 案例简介

制作一款模拟射箭运动的智能装置，需手动将箭矢安置在弓上并完成上弦，通过编程控制舵机转动模拟放弦动作，实现箭矢发射。让用户体验科技赋能的射箭运动，同时学习机械传动与舵机控制的应用知识。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-17-01.png)

## 教学准备

|     名称     |            图示            |
| :----------: | :--------------------------: |
|   哪吒Pro运动套装   |   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-01.png)  |

## 教学目标

理解舵机角度控制原理及其在模拟运动中的应用。​

掌握舵机编程控制方法。​

培养将机械结构与编程结合的实践能力。


## 课程引入

同学们，想体验用科技改造传统射箭运动吗？今天我们要用哪吒 Pro 运动套装制作一个智能射箭装置！先手动把箭矢装上弓、拉好弦，再通过舵机 “一键放弦” 发射，感受科技与运动结合的奇妙。快来动手，成为玩转机械与编程的射箭小达人！

## 学习探究

探究舵机如何通过编程实现放弦动作的模拟，掌握舵机角度控制与指令触发的编程逻辑。

## 搭建步骤

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/files/%E6%AF%94%E8%B5%9B%E4%BB%BB%E5%8A%A1%E8%BD%A6.pdf" type="application/pdf" width="100%" height="600px" />


## 硬件连线

将智能舵机连接到哪吒Pro扩展板的M1接口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-17-03.png)

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

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-16-04.png)

程序链接:[https://makecode.microbit.org/_RTJHpJcRkF4P](https://makecode.microbit.org/_RTJHpJcRkF4P)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_RTJHpJcRkF4P"
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

手动上弦后，按下按键A卡住箭矢，按下按键B完成放弦动作，箭矢射出。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-17.gif)

## 总结分享



## 扩展知识​

**弓箭的组成​**

弓箭主要由弓和箭两大部分构成，各部分都有着独特的设计和功能：​

***弓：​***

弓臂：是弓的主要弹性部件，上弦后储存弹性势能。传统弓臂常用木材、动物筋等材料制作，现代弓臂多采用复合材料，如玻璃纤维、碳纤维，兼具强度和弹性。​

弓弦：连接弓臂两端，用于传递力量。材质从早期的动物筋、植物纤维，发展到现代的高强度合成纤维，能承受较大拉力且不易断裂。​

弓把：位于弓的中间位置，是射手握持的部分。现代弓把通常设计有减震装置，可减少射箭时的震动，提升稳定性。​

***箭：***​

箭头：根据用途分为多种类型，狩猎箭头尖锐锋利，用于穿透猎物；比赛箭头注重飞行稳定性，一般为平头或圆头设计。​

箭杆：是箭的主体，要求有一定的硬度和弹性。材质有木质、铝质、碳纤维等，不同材质的箭杆重量、强度和柔韧性有所差异，影响箭矢的飞行性能。​

箭羽：安装在箭杆尾部，通常为三片或四片。箭羽起到稳定飞行方向的作用，如同飞机的尾翼，通过调整空气动力，使箭矢保持直线飞行。​

箭尾：位于箭杆末端，用于与弓弦连接。其设计需保证与弓弦紧密配合，同时在放弦时能顺利脱离，不影响箭矢飞行。

**射箭运动中的力学原理​**

弹性势能与动能的转化：在手动上弦过程中，弓片发生形变，储存弹性势能，弓的形变程度越大，储存的弹性势能越多。当舵机模拟放弦动作时，弓弦恢复原状，弹性势能迅速转化为箭矢的动能，使箭矢获得初速度飞射出去。根据机械能守恒定律，在理想状态下，弓储存的弹性势能全部转化为箭矢的动能，但实际中会因空气阻力、摩擦等因素存在能量损耗。​

抛物线运动：箭矢发射后的飞行轨迹符合抛物线规律，受发射初速度和角度影响 。发射角度为 45° 时，在不考虑空气阻力的情况下，箭矢可达到最远的水平射程；而在实际射箭运动中，运动员需要根据距离、风向等因素调整发射角度。​

稳定性：箭矢的重心设计、尾翼结构影响其飞行稳定性 。合理的重心分布和尾翼形状能够减少箭矢飞行过程中的翻转和偏移，使其沿着预定轨迹飞行。
