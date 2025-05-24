---
sidebar_position: 16
sidebar_label: 案例十五:计数篮球架-2
---

# 案例十五:计数篮球架-2

## 案例简介

利用运动主题 Steam 套装制作一款智能篮球计数器，通过碰撞传感器精准检测篮球落入篮筐的瞬间，实时统计进球次数并通过 LED 屏显示。无需人工计数，让篮球训练或小游戏实现自动化数据记录，帮助学习者理解传感器在运动场景中的应用原理，掌握 “物理碰撞→电子信号→数据处理” 的信息转化逻辑。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-15-01.png)

## 教学准备

|     名称     |            图示            |
| :----------: | :--------------------------: |
|   哪吒Pro运动套装   |   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-01.png)  |

## 教学目标

传感器原理：理解碰撞传感器（微动开关）的工作机制，掌握 “接触 - 触发 - 信号” 的物理转化过程。
​
编程逻辑：学会通过条件判断语句（如if）识别传感器信号，实现计数器的累加与显示。​

工程设计：掌握传感器与机械结构的结合方法（如传感器安装位置对检测精度的影响）。​

运动应用：体会科技如何辅助运动训练，理解 “数据化运动” 的实际价值（如统计投篮命中率）。

## 课程引入

篮球比赛中裁判如何判断进球？如果是自己练习，怎么快速知道投进了多少球？​

能不能让篮筐自己 “数” 进球次数？场景导入：“今天我们要给篮筐装上‘智能大脑’！当篮球穿过篮筐时，碰撞传感器会像裁判一样立刻‘看到’进球，主控板马上记录次数并显示在屏幕上。无论是练习投篮还是和同学比赛，这个计数器都能让你专注运动，数据交给科技处理！”

## 学习探究

探究碰撞传感器如何识别“进球碰撞”，分析传感器安装角度对检测准确率的影响，研究如何通过编程实现 “防重复计数”（如两次进球需间隔 1 秒以上）。

## 搭建步骤

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/files/%E8%AE%A1%E6%95%B0%E7%AF%AE%E7%90%83%E6%9E%B6-2.pdf" type="application/pdf" width="100%" height="600px" />

## 硬件连线

将碰撞传感器连接到哪吒Pro扩展板的J1接口，将OLED显示屏连接到哪吒Pro扩展板的IIC接口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-15-03.png)

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


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-15-04.png)

程序链接:[https://makecode.microbit.org/_H3d7gHP279HD](https://makecode.microbit.org/_H3d7gHP279HD)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_H3d7gHP279HD"
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

投篮后篮球触碰篮筐内侧的微动开关，传感器触发信号，主控板接收到信号后计数 + 1，LED 屏实时更新数字（如从 “0” 变为 “1”）。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-15.gif)

## 总结分享

在实际测试中，我们可以发现，如果不加入万向轮进行配重，小球的重量无法触发碰撞传感器，加上万向轮进行配重之后，小球进入篮筐后可以触发碰撞传感器，但还是会出现触发不灵敏的情况。

**优化方向**

替换投篮用的小球为更重的小球

结构优化，延长跷跷板结构，使碰撞传感器更容易被触发

## 扩展知识


**碰撞传感器工作原理​**

微动开关结构：内部含金属簧片，按压时触点闭合（导通电路），松开时触点断开（断开电路）。本案例中，篮球触压开关时，主控板检测到引脚电平从高（5V）变为低（0V），判定为一次有效进球。​

去抖处理：实际碰撞中开关可能因震动产生多次误触发，编程时需添加 20-50ms 的延时过滤短时间内的重复信号。

**运动数据化的价值​**

训练优化：通过统计进球次数计算命中率（如投 50 次进 30 次，命中率 60%），针对性改进投篮姿势。​

游戏化运动：设置 “1 分钟限时挑战”，计数器实时显示成绩，增加运动趣味性（可连接蜂鸣器，进球时播放提示音）。​

**传感器类型扩展​**

非接触式方案：替换为红外对管传感器（安装在篮筐两侧），通过检测光束遮挡判断进球，避免机械磨损（适合高频使用场景）。​

压力传感器升级：在篮筐底部铺设压力感应片，通过压力变化识别进球（可区分空心球与碰筐进球）。
