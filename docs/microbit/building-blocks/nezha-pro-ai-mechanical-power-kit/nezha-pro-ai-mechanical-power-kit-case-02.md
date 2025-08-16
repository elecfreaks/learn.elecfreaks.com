---
sidebar_position: 3
sidebar_label: 案例二:双足行走机器人
---

# 案例二:双足行走机器人

## 案例简介

制作一个双足行走机器人，通过基本的连杆机构，实现简单的双足行走机器人。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-02-01.png)

## 教学准备

|     名称     |            图示            |
| :----------: | :--------------------------: |
|   哪吒Pro AI机械动力套装   |   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-01.png)  |

## 教学目标

完成双足行走机器人的搭建，掌握双足腿部连杆机构的组装技巧，能正确连接并调试电机，实现机器人的基本行走动作。

理解双足行走的平衡原理，认识连杆机构在模拟人类 / 动物腿部运动中的作用，区分双足与四足行走的结构差异。

在调试机器人平衡和行走节奏的过程中，提升逻辑思维能力和耐心，学会通过调整电机转速、连杆角度解决行走不稳的问题。

感受双足行走机器人的技术难点，激发对人体运动力学和机器人控制技术的探索兴趣。

## 故事导入

修复铁蛋后，众人刚走进村庄广场，就听见 “哐当” 巨响。负责升旗仪式的双足机器人 “ upright” 正用头撞旗杆，它的两条腿像两根僵硬的木棍。“它本来能模仿人类走路的！” 面包店的机器人老板举着烤焦的齿轮面包跑过来，“昨天系统故障后，膝盖关节就锁死了。”​
阿极投影出人类行走的慢动作：“看到没？走路时一条腿支撑，另一条腿要像钟摆一样摆动。你们得给 upright 装上能灵活转动的膝关节。”

## 学习探究

为什么双足机器人比四足机器人更容易 “摔倒”？如何通过调整结构或电机参数提高稳定性？

电机的正反转与机器人腿部的 “迈步” 动作有什么关联？尝试设置电机交替转动的时间间隔，观察机器人是否能实现连续行走。

如果机器人只能向一侧倾斜行走，可能是哪些原因导致的？（如两侧连杆长度不一致、电机转速不同）


## 搭建步骤

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/files/nezha-pro-ai-mechanical-power-kit-case-02.pdf" type="application/pdf" width="100%" height="600px" />

## 硬件连线

将两个智能电机分别连接到哪吒Pro扩展板的M2和M3接口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-02-02.png)

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

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-02-03.png)

程序链接:[https://makecode.microbit.org/_ffgi7UXiHEL8](https://makecode.microbit.org/_ffgi7UXiHEL8)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_ffgi7UXiHEL8"
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

开启电源后，四足机器人向前行走，当遇到障碍物时自动后退。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-02.gif)

## 扩展知识

1. 双足机器人的平衡控制：现实中的双足机器人（如本田 ASIMO）会通过陀螺仪、加速度传感器实时检测身体姿态，再调整腿部动作保持平衡，本案例通过简化的连杆结构模拟基础平衡。
2. 人体行走的力学原理：人类行走时，身体重心会随腿部动作轻微上下移动，双足机器人需要通过连杆和电机的协同，尽量减少重心波动以避免倾倒。
3. 双足机器人的应用：未来双足机器人可能用于家庭服务（如陪伴、清洁）、危险环境作业（如灾后救援），能在人类生活的 “双腿友好型” 场景（如楼梯、狭窄通道）中灵活移动。
