# 案例六：人体移动检测报警器
## 简介

当人体红外检测传感器侦测到人在移动时，灯环将亮起，并发出警报声。

---

## 案例目的
1.认识人体红外传感器。

2.认识灯环。

3.认识计数循环积木块。

---
## 所需材料
|项目|图片|数量|
|--|--|--|
|micro:bit V2|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/microbit%20%E6%AD%A3(1).png)|1|
|jacdac扩展板|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20bit.png)|1|
|jacdac 10cm连接线|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac-smart-exploration-kit-10cm-cable.png)|2|
|人体红外传感器|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20Motion%20Sensor.png)|1|
|灯环|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20LED%20Ring.png)|1|
|USB数据线|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/usb%20cable1.png)|1|

---
## 传感器原理说明：
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/Jacdac%20Motion%20Sensor-1.png)

**原理说明**: 

人体红传感器：是一种感知人体移动的传感器。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/Jacdac%20LED%20Ring-1.png)

**原理说明**: 

灯环：由8个RGB灯组成的圆形光环。

---
## 连接示意图
如下图所示，将micro:bit主板插入jacdac扩展板，用连接线将人体红外传感器与灯环采用星型方式连接到jacdac扩展板金手指接口上。

**图片**

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
1. 用数据线将micro:bit主板连接到计算机。
   
   **注意**：若micro:bit主板初次运行jacdac程序，请先预装一个空白jacdac程序至主板，否则跳过此步骤。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/jacdac-smart-exploration-kit-5.png)

2. 连接传感器，MakeCode自动识别并仿真呈现，在仿真区内传感器实时反馈传感器状态。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/1jacdac-smart-exploration-kit-6.png)

3. 点击“ADD BLOCKS”传感器扩展模块。
   
   **注意**：连接新的传感器，重复执行一次“点击“ADD BLOCKS”传感器扩展模块”操作流程。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/jacdac-smart-exploration-kit-7.png)

---
## 如图所示编写程序
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/program/jacdac-smart-exploration-kit-%20case-0116.png)

---

## 参考程序连接：
[https://makecode.microbit.org/S21420-49463-47317-16127](https://makecode.microbit.org/S21420-49463-47317-16127
)

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
        src="https://makecode.microbit.org/S21420-49463-47317-16127"
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

当人体红外检测传感器侦测到人在移动时，灯环将亮起，并发出警报声。

## 思考

人体红外传感器还以应用在生活的哪些方面。
