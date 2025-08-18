---
sidebar_position: 17
sidebar_label: 案例十六:语音识别甲虫
---

# 案例十六:语音识别甲虫

## 案例简介

制作一辆语音识别甲虫，通过语音控制甲虫的功能。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-16-01.png)

## 教学准备

|     名称     |            图示            |
| :----------: | :--------------------------: |
|   哪吒Pro AI机械动力套装   |   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-01.png)  |

## 教学目标

完成语音识别甲虫的搭建，掌握巡线传感器、超声波传感器、语音识别传感器与电机的组装与连接方法，实现 “语音控制”“避障模式”“巡线模式” 三大功能的协同工作。

理解不同传感器的功能分工（语音识别传感器接收指令、超声波传感器检测障碍、巡线传感器识别线路），学会编程实现 “语音切换模式”（如语音指令切换避障 / 巡线）及模式下电机的动作控制（如避障时转弯、巡线时沿线路前进）。

在调试传感器灵敏度、模式切换逻辑、电机动作协调性的过程中，培养动手实践能力、多模块协同思维和问题解决能力（如解决巡线偏移、避障不及时、模式切换卡顿等问题）。

激发对 “多传感器融合 + 仿生机器人” 的探索兴趣，感受 “智能控制 + 环境感知” 的技术魅力，建立 “科技模拟生物感知与动作” 的认知。

## 故事导入

所有零件就位后，阿极严肃起来：“最后一步，要把修复芯片送入服务器内部。那里空间太小，只有‘小强’能进去。” 一只形似蟑螂的微型机器人从工具箱里爬出来。​
“它能听语音钻缝隙、转弯。” 阿极演示着，“说‘前进五厘米’，它就会精确移动。小心点，服务器内部的线路就像迷宫。” 当孩子们成功指挥小强把芯片插入接口时，整个村庄的灯光突然亮起 —— 所有机器人都恢复了正常。​
村长带着村民们欢呼着涌进来，阿极笑着对孩子们说：“看，你们不仅修复了机器人，还学会了用科技创造奇迹。这才是真正的科创魔法！”

## 学习探究

语音识别传感器需要接收哪些核心指令？（如 “甲虫前进”“切换避障模式”“切换巡线模式”）编程时如何确保语音指令能精准触发 “语音控制” 与 “自动模式（避障 / 巡线）” 的切换？

避障模式下，超声波传感器如何工作？（如检测到前方障碍物距离小于多少时，电机带动甲虫转弯）如果超声波传感器检测不准，可能导致甲虫出现什么问题（如碰撞障碍物、误触发转弯）？

巡线模式下，巡线传感器如何识别线路（如识别黑色引导线）？调整传感器的高度或角度，会对巡线效果产生什么影响？（如高度过高导致识别不到线路、角度倾斜导致沿线路跑偏）

尝试在 “避障模式” 下叠加语音指令（如 “暂停避障，前进 5 厘米”），编程时如何处理 “自动模式” 与 “手动语音指令” 的优先级？如果两者冲突（如避障要转弯，语音要前进），该如何优化逻辑？

对比甲虫在 “手动语音控制”“避障模式”“巡线模式” 下的电机动作，电机的转速、转向调整有什么不同？（如避障转弯时单侧电机减速，巡线时微调两侧电机转速保持线路）

## 搭建步骤

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/files/nezha-pro-ai-mechanical-power-kit-case-16.pdf" type="application/pdf" width="100%" height="600px" />

## 硬件连线

将语音识别传感器连接到哪吒Pro扩展板的IIC接口，将巡线传感器连接到哪吒Pro扩展板的J1接口，将超声波传感器连接到哪吒Pro扩展板的J2接口，将两个智能电机连接到哪吒Pro扩展板的M2、M3接口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-16-02.png)

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

程序链接:[https://makecode.microbit.org/_foyHy3f3w4Mh](https://makecode.microbit.org/_foyHy3f3w4Mh)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_foyHy3f3w4Mh"
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

开启电源后，根据语音控制甲虫运行。

Avoid_object 避障
Line_tacking 巡线
Full speed ahead 前进
Reversing 后退
Turn left 左转
Turn right 右转
Turn off device 停止设备


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-16-1.gif)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-16-2.gif)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-16-3.gif)

## 扩展知识

1. 仿生机器人的 “感知 - 动作” 逻辑：真实甲虫通过触角（感知障碍）、复眼（识别环境）判断方向，本案例的超声波传感器（模拟触角避障）、巡线传感器（模拟复眼识别线路）+ 语音识别传感器（模拟 “外部指令接收”），正是对甲虫 “感知 - 动作” 系统的科技模拟，体现了 “自然启发科技” 的仿生设计思路。
2. 多传感器融合技术：本案例中，三种传感器并非独立工作 —— 语音识别传感器负责 “指令输入与模式切换”，超声波 / 巡线传感器负责 “环境感知”，电机负责 “动作执行”，这种 “多传感器协同” 的技术叫 “传感器融合”。它广泛应用于自动驾驶汽车（摄像头 + 雷达 + 超声波传感器）、工业机器人（视觉 + 力传感器），核心是让设备更全面、精准地理解环境并做出反应。
3. 模式切换的实际应用：生活中很多设备都有 “手动 / 自动模式”，比如扫地机器人（手动遥控清洁 / 自动避障清扫）、洗衣机（手动选择程序 / 自动感应衣物重量调参数）。本案例的甲虫机器人模式切换，正是这种 “人性化设计” 的微型体现 —— 既可以通过语音手动控制 “玩”，也能通过自动模式 “自主工作”，兼顾趣味性与功能性。
4. 微型智能机器人的场景潜力：类似语音识别甲虫的微型机器人，未来可用于狭窄环境作业（如通过巡线模式进入管道检测，避障模式避开管道内凸起，语音控制切换工作状态）、农业监测（沿作物行巡线，遇障碍自动避障，语音指令调取监测数据），其小巧的体型 + 多模式能力，能解决大型设备无法进入的场景需求。
