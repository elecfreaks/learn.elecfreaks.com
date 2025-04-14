# 案例一：比一比

## 简介

按下按钮传感器，micro:bit主板随机显示1~6的数字，与小伙伴比一比数字大小。

---

## 案例目的
1. 认识按钮传感器，了解按钮传感器的工作原理。

2. 认识MakeCode中的按钮传感器编程积木块，掌握其使用方式。
---
## 所需材料
|项目|图片|数量|
|--|--|--|
|micro:bit V2|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/microbit%20%E6%AD%A3(1).png)|1|
|jacdac扩展板|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20bit.png)|1|
|jacdac 10cm连接线|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac-smart-exploration-kit-10cm-cable.png)|1|
|按钮传感器|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20Button%20sensor.png)|1|
|USB数据线|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/usb%20cable1.png)|1|

---
## 传感器原理说明：
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20Button%20sensor.png)

**原理说明**: 

按钮传感器：用于检测按钮状态的传感器，输出携带有“0”和“1”的信号。

---
## 连接示意图
如下图所示，将micro:bit主板插入jacdac扩展板，用连接线将按钮传感器连接到jacdac扩展板金手指接口上。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/hardware-connection-diagram/jacdac-smart-exploration-kit-case-011.png)

---
## 编程软件

[微软makecode](https://makecode.microbit.org/#)

---
## Makecode编程
### 步骤1：如何添加jacdac扩展
1. 进入[微软makecode](https://makecode.microbit.org/#)，点击“新建项目”。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-07.png)

2. 在弹出窗口输入项目名称并点击创建。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-11.png)

---
3. 点击代码抽屉中的“扩展”。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-09.png)

4. 在弹出界面输入"jacdac"并点击搜索图标, 选择jacdac软件库，如图所示。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/jacdac-smart-exploration-kit-20.png)

---
### 步骤2：
1. 用数据线连接将micro:bit主板连接到计算机。
   
   **注意**：若micro:bit主板初次运行jacdac程序，请先预装一个空白jacdac程序至主板，否则跳过此步骤。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/jacdac-smart-exploration-kit-21.png)

3. 连接传感器，MakeCode自动识别并仿真呈现，在仿真区内传感器实时反馈传感器状态。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/1jacdac-smart-exploration-kit-22.png)

4. 点击“ADD BLOCKS”传感器扩展模块。
   
   **注意**：连接新的传感器，重复执行一次“点击“ADD BLOCKS”传感器扩展模块”操作流程。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/jacdac-smart-exploration-kit-23.png)

---

## 如图所示编写程序
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/program/jacdac-smart-exploration-kit-case-0111.png)

---

## 参考程序连接：
[https://makecode.microbit.org/_FEADwWWVCU31](https://makecode.microbit.org/_FEADwWWVCU31)

你也可以通过以下网页直接下载程序，下载完成后即可开始运行程序。

---
<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_FEADwWWVCU31"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

---

## 案例演示

**图片**
