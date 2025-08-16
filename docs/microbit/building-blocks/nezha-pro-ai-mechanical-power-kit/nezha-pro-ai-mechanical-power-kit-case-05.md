---
sidebar_position: 6
sidebar_label: 案例五:直升机
---

# 案例五:直升机

## 案例简介

制作一架直升机，通过齿轮传动让螺旋桨转动起来。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-05-01.png)

## 教学准备

|     名称     |            图示            |
| :----------: | :--------------------------: |
|   哪吒Pro AI机械动力套装   |   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-01.png)  |

## 教学目标

完成直升机模型的搭建，掌握齿轮传动结构与螺旋桨的组装方法，能正确连接动力部件，实现螺旋桨的稳定转动。

理解齿轮传动如何将电机动力传递到螺旋桨，认识螺旋桨转动与 “升力” 模拟的关联，了解齿轮转速对螺旋桨转动速度的影响。

在调试齿轮咬合、螺旋桨安装角度的过程中，培养动手能力和细节把控能力，学会解决螺旋桨转动卡顿、偏心的问题。

激发对航空航天技术的兴趣，感受机械结构与飞行原理的关联，建立 “科技实现飞行梦想” 的初步认知。

## 故事导入

跳跳重新开始巡逻的同时，天空传来奇怪的嗡鸣。负责侦查的直升机机器人 “旋翼” 歪歪扭扭地坠落在屋顶，螺旋桨断了。“它本来能飞到云层上观察野兽动向的！” 瞭望塔的机器人指着天空，“现在我们像瞎了眼一样！”​
阿极展开直升机的机械图：“看这组齿轮，发动机的动力要通过它们传到螺旋桨。就像自行车链条带动车轮，缺了它可不行。”

## 学习探究

直升机模型中，电机的动力通过几组齿轮传递到螺旋桨？尝试更换不同齿数的齿轮，螺旋桨的转动速度会发生什么变化？

螺旋桨的安装角度对其 “模拟升力” 有影响吗？如果螺旋桨安装过松或角度倾斜，会出现什么问题（如转动时晃动、噪音大）？

对比真实直升机与模型的结构，模型中的齿轮传动模拟了真实直升机的哪个核心部件（如减速器）？为什么真实直升机需要减速器？

如果想让直升机模型实现 “转向”，可以在现有结构上添加什么部件？（提示：参考真实直升机的尾桨）

## 搭建步骤

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/files/nezha-pro-ai-mechanical-power-kit-case-05.pdf" type="application/pdf" width="100%" height="600px" />

## 硬件连线

将智能电机连接到哪吒Pro扩展板的M2接口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-05-02.png)

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

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-05-03.png)

程序链接:[https://makecode.microbit.org/_7mTR09dis6g1](https://makecode.microbit.org/_7mTR09dis6g1)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_7mTR09dis6g1"
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

开启电源后，按下按键A，螺旋桨开始运行，按下按键B，螺旋桨停止运行。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-05.gif)

## 扩展知识

1. 真实直升机的飞行原理：直升机通过主螺旋桨旋转产生向上的升力，尾桨则用于抵消主螺旋桨的反扭矩（防止机身旋转），本案例通过简化的齿轮传动模拟主螺旋桨的动力传递。

2. 齿轮减速器的作用：真实直升机的发动机转速很高，需要通过减速器（多组齿轮配合）降低螺旋桨的转速，避免螺旋桨因转速过快断裂，同时提高扭矩（带动螺旋桨克服空气阻力）。

3. 直升机的应用场景：直升机具有垂直起降、悬停的优势，广泛用于救援（如山区救援）、运输（如低空物资运输）、医疗（如紧急医疗转运）等领域，其核心机械传动系统是安全飞行的关键。
