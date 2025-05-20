---
sidebar_position: 20
sidebar_label: 案例十九:走钢丝机器人
---

# 案例十九:走钢丝机器人

## 案例简介

利用运动主题 Steam 套装搭建一款走钢丝机器人，通过电机驱动橡皮筋（模拟钢丝）转动，利用摩擦力传动带动上方的独轮车小人稳定骑行。独轮车小人通过重心控制结构设计（如低重心底座、配重块）实现平衡，无需传感器辅助。让学习者在实践中理解摩擦力传动原理、重心与平衡的关系，以及机械结构在运动模拟中的应用。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-19-01.png)

## 教学准备

|     名称     |            图示            |
| :----------: | :--------------------------: |
|   哪吒Pro运动套装   |   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-01.png)  |

## 教学目标

机械原理：理解摩擦力传动的工作机制（橡皮筋转动→带动小人车轮滚动）。​

重心控制：通过配重块位置调整，掌握 “低重心 + 对称结构” 对稳定性的影响。​

电机控制：学会通过编程设置电机转速与转动方向，实现匀速 / 变速 “走钢丝”。​

跨学科融合：结合物理（摩擦力、重心）、机械工程（结构设计）与编程，解决实际运动模拟问题。


## 课程引入

**提问引导：**

走钢丝演员为什么能在细细的钢丝上保持平衡？​

如何让一个 “小人” 不用手扶，也能在 “钢丝” 上稳定骑行？

场景导入：“今天我们要打造一个会‘走钢丝’的机器人！用橡皮筋模拟钢丝，电机让‘钢丝’转动，小人靠车轮与橡皮筋的摩擦力前进。不过最神奇的是 —— 小人不会摔倒是因为我们给它设计了‘平衡秘诀’！快来通过搭结构、调重心、编程序，让小人成为‘钢丝上的舞者’吧！”

## 学习探究

探究橡皮筋转动速度与小人骑行速度的关系，分析配重块位置如何影响小人重心，研究 “摩擦力传动 + 重心控制” 如何替代传统平衡系统实现稳定运动。

## 搭建步骤

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/files/%E8%B5%B0%E9%92%A2%E4%B8%9D%E6%9C%BA%E5%99%A8%E4%BA%BA.pdf" type="application/pdf" width="100%" height="600px" />


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

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-19-04.png)

程序链接:[https://makecode.microbit.org/_M6udwiHY1EiF](https://makecode.microbit.org/_M6udwiHY1EiF)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_M6udwiHY1EiF"
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

按下按键A，独轮车机器人开始骑行，按下按键B，独轮车机器人停止骑行。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-18.gif)

## 总结分享



## 扩展知识​

**走钢丝的平衡科学​**

重心垂线法则：人体或物体的重心垂线必须落在支撑面（钢丝的投影线）内才能保持平衡。本案例中，小人通过配重块将重心固定在车轮正下方，支撑面虽窄但重心稳定。​

动态平衡 vs 静态平衡：真实走钢丝演员需通过身体微调维持动态平衡，而本案例通过静态重心设计简化问题，适合初学者理解平衡本质。​

**摩擦力传动的应用场景​**

优势：无需复杂齿轮啮合，通过弹性材料（橡皮筋）实现柔性传动，适合低速、轻载场景（如玩具、教学模型）。
​
局限性：摩擦力受张力、接触面粗糙度影响，高速时易打滑，需通过调整橡皮筋绷紧程度或轮面材质优化。​

**独轮车运动的重心控制技巧​**

真实骑行：独轮车骑手通过腰部扭转、腿部发力调整重心，而本案例的 “懒人平衡法”—— 直接将重心固定在支撑点正上方，是机械结构对人体运动的简化模拟。​

工程启示：在机器人设计中，低重心 + 对称结构是实现稳定运动的常用策略（如平衡车、机器人步行机）。
