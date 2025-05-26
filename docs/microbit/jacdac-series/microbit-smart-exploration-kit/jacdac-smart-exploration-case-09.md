# 案例九：比一比谁的手速快

## 简介：

两位玩家同时按下自己的按钮传感器，看谁能率先完成10次按压，从而赢得游戏。

---
## 案例目的：

1.认识MakeCode中的变量积木

2.认识MakeCode中的数字运算积木

---
## 所需材料：
|项目|图片|数量|
|--|--|--|
|micro:bit V2|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/microbit%20%E6%AD%A3(1).png)|1|
|jacdac扩展板|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20bit.png)|1|
|jacdac 10cm连接线|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac-smart-exploration-kit-10cm-cable.png)|2|
|按钮传感器|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20Button%20sensor.png)|2|
|USB数据线|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/usb%20cable1.png)|1|

---
## 传感器原理说明：
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/Jacdac%20Button-1.png)

**原理说明**

按钮传感器：用于检测按钮状态的传感器，输出携带有“0”和“1”的信号。

---                 
## 连接示意图
如下图所示，如下图所示，将micro:bit主板插入Jacdac扩展板，并使用连接线将两个按钮传感器以星型连接的方式连接至Jacdac扩展板的金手指接口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/hardware-connection-diagram/jacdac-smart-exploration-kit-case-09.png)

---
## 编程软件

[微软makecode](https://makecode.microbit.org/#)

---
## Makecode编程
### 步骤1：如何添加Jacdac扩展
1. 进入[微软makecode](https://makecode.microbit.org/#)，点击“新建项目”。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-07.png)

2. 在弹出窗口输入项目名称并点击创建。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-11.png)

---
3. 点击代码抽屉中的“扩展”。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-09.png)

4. 在弹出界面输入"Jacdac"并点击搜索图标, 选择Jacdac软件库，如图所示。

![]（https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/jacdac-smart-exploration-kit-3.png)

---
### 步骤2：
1. 用数据线将micro:bit主板连接到计算机。
   
   **注意**：若micro:bit主板初次运行Jacdac程序，请先预装一个空白Jacdac程序至主板，否则跳过此步骤。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/jacdac-smart-exploration-kit-5.png)

2. 连接传感器，MakeCode自动识别并仿真呈现，在仿真区内传感器实时反馈传感器状态。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/1jacdac-smart-exploration-kit-6.png)

3. 点击“ADD BLOCKS”传感器扩展模块。
   
   **注意**：连接新的传感器，重复执行一次“点击“ADD BLOCKS”传感器扩展模块”操作流程。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/jacdac-smart-exploration-kit-7.png)

---
## 如图所示编写程序
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/program/jacdac-smart--exploration-kit-case-0119.png)

---
## 参考程序连接：
[https://makecode.microbit.org/S04563-87350-86165-83144](https://makecode.microbit.org/S04563-87350-86165-83144)

---
你也可以通过以下网页直接下载程序，下载完成后即可开始运行程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/S04563-87350-86165-83144"
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
## 结果

检测到A按钮传感器被按下时，micro:bit主板左侧的两列LED灯中将亮起一个LED灯，用于计数。同样，当检测到B按钮传感器被按下时，主板右侧的两列LED灯中将亮起一个LED灯，用于计数。比赛的目标是看谁能够快速按下对应的按钮传感器10次，该玩家即为获胜方。如果需要重新开始游戏，请按micro:bit主板的复位键。

## 思考

变量与常量有什么区别。


