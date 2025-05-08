---
sidebar_position: 12
sidebar_label: 案例十二:比赛任务综合测试
---

# 案例十二:比赛任务综合测试

## 案例简介

制作一辆任务车，一次完成运动场上的任务四个任务。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-12-01.png)

## 教学准备

|     名称     |            图示            |
| :----------: | :--------------------------: |
|   哪吒Pro运动套装   |   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-01.png)  |

## 教学目标

制作比赛任务车，完成全部任务

熟悉四路巡线传感器及舵机的综合应用


## 课程引入

欢迎小朋友们加入我们的STEAM奇妙旅程！在前面的课程中我们了解了小车巡线、舵机控制等知识点，这节课我们需要将这些知识点融汇贯通，完成比赛地图上的全部任务。

## 学习探究

多个舵机的联动使用

四路巡线传感器的使用

如何使用四路巡线传感器帮助小车调整行驶路线

## 搭建步骤

**小车搭建步骤**

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/files/%E6%AF%94%E8%B5%9B%E4%BB%BB%E5%8A%A1%E8%BD%A6.pdf" type="application/pdf" width="100%" height="600px" />

**取球器搭建步骤**

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/files/%E6%A1%88%E4%BE%8B%E5%8D%81%E4%BA%8C-%E6%95%B4%E4%BD%93%E4%BB%BB%E5%8A%A1%E5%AE%8C%E6%88%90-%E7%AF%AE%E7%90%83%E6%94%BE%E7%BD%AE%E4%BD%8D%E7%BD%AE.pdf" type="application/pdf" width="100%" height="600px" />

**简易球门搭建步骤**

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/files/%E6%A1%88%E4%BE%8B%E5%8D%81%E4%BA%8C-%E6%95%B4%E4%BD%93%E4%BB%BB%E5%8A%A1%E5%AE%8C%E6%88%90-%E7%AE%80%E6%98%93%E7%90%83%E9%97%A8%E6%90%AD%E5%BB%BA.pdf" type="application/pdf" width="100%" height="600px" />

**篮球架搭建步骤**

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/files/%E6%A1%88%E4%BE%8B%E5%8D%81%E4%BA%8C-%E6%95%B4%E4%BD%93%E4%BB%BB%E5%8A%A1%E5%AE%8C%E6%88%90-%E7%AE%80%E6%98%93%E7%AF%AE%E7%90%83%E6%9E%B6.pdf" type="application/pdf" width="100%" height="600px" />

## 硬件连线

将三个智能电机分别连接到哪吒Pro扩展板的M1、M2、M3接口，将四路巡线传感器连接到哪吒Pro扩展板的IIC接口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-12-03.png)

## 四路巡线传感器——学习模式

四路巡线传感器可通过按下传感器上的按键来学习地图背景和巡线轨迹（即黑色赛道）。按照以下步骤完成学习：

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/05053_04.png)

①将四路巡线传感器探头正对地图背景区域并按下学习按键；

②此时 1~4 号探头指示灯倒序依次点亮，两个学习指示灯交替闪烁；

③当巡线探头补光灯发出彩光并高频闪烁，此时应将巡线探头在背地图景和巡线轨迹上来回水平移动；

④一直来回移动，直到巡线探头补光灯停止闪烁，学习完成。

注意：使用时巡线探头的离地高度应在 8mm~16mm之间。

学习成功后，两个学习指示灯会熄灭，当巡线探头检测到巡线轨迹时，对应的探头指示灯灯会点亮。当学习失败时，空心圆、实心圆 LED 同时快闪，补光RGB 灯熄灭。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-11-01.gif)

更多信息请查看：[行星系列四路巡线传感器WIKI](https://wiki.elecfreaks.com/microbit/planetx-series/sensors/Plant_X_EF05053)

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

此程序比较复杂，请通过以下共享程序链接查看。

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

**注意：此案例因小车搭建误差，成功率并非100%，可优化程序以提高成功率**

<iframe width="560" height="315" src="https://www.youtube.com/embed/SMI4ZmuTU9M?si=_3OCxxYvTJJ1SC3V" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 总结分享



## 扩展知识
