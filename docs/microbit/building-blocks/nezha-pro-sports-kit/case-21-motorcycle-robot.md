---
sidebar_position: 22
sidebar_label: 案例二十一:摩托机器人
---

# 案例二十一:摩托机器人

## 案例简介

利用运动主题 Steam 套装搭建一款双轮摩托车机器人，采用后轮电机驱动 + 前轮舵机转向的经典布局，模拟真实摩托车的运动逻辑。通过编程控制电机转速与舵机角度，实现前进、转向、调速等基础功能，帮助学习者理解 “动力系统 + 转向系统” 的机械联动原理，掌握电机与舵机的基础控制方法，体验从机械搭建到编程调试的完整工程流程。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-21-01.png)
## 教学准备

|     名称     |            图示            |
| :----------: | :--------------------------: |
|   哪吒Pro运动套装   |   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-01.png)  |

## 教学目标

机械传动：理解 “后轮驱动 + 前轮转向” 的摩托车运动原理，掌握电机与舵机的机械安装方式。​

控制技术：学会通过编程设置电机转速（PWM 调节）和舵机角度，实现直线行驶与转向操作。​

编程逻辑：掌握 “输入指令→主控板处理→执行器动作” 的控制流程，理解条件语句（如if）在运动控制中的应用。​

跨学科融合：结合物理（齿轮传动比）、工程（结构稳定性）、编程（模块化控制）知识，培养系统整合能力。

## 课程引入

篮球比赛中裁判如何判断进球？如果是自己练习，怎么快速知道投进了多少球？​

能不能让篮筐自己 “数” 进球次数？场景导入：“今天我们要给篮筐装上‘智能大脑’！当篮球穿过篮筐时，碰撞传感器会像裁判一样立刻‘看到’进球，主控板马上记录次数并显示在屏幕上。无论是练习投篮还是和同学比赛，这个计数器都能让你专注运动，数据交给科技处理！”

## 学习探究

探究电机转速与机器人行驶速度的关系，分析舵机转向角度对转弯半径的影响，研究如何通过调整前后轮轴距提升行驶稳定性。

## 搭建步骤

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/files/%E6%91%A9%E6%89%98%E8%BD%A6.pdf" type="application/pdf" width="100%" height="600px" />

## 硬件连线

将两个智能电机分别连接到哪吒Pro扩展板的M1接口和M4接口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-06-01-01.png)

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


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-21-04.png)

程序链接:[https://makecode.microbit.org/_L6k80WEzcUCz](https://makecode.microbit.org/_L6k80WEzcUCz)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_L6k80WEzcUCz"
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

按下按键A，摩托车向前行驶，按下按键B，摩托车停止行驶。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/nezha-pro-sports-kit-case-21.gif)

## 总结分享



## 扩展知识


**摩托车运动中的物理知识​**
转向几何：前轮转向轴与地面的交点需位于轮胎接地点内侧（阿克曼转向原理），减少转向时的轮胎滑动，本案例通过连杆长度模拟这一特性。​
惯性影响：高速行驶时突然转向可能因离心力导致侧翻，可通过降低重心（加装底盘配重）提升稳定性。​
