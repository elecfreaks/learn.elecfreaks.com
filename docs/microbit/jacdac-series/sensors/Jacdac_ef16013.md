---
sidebar_position: 12
sidebar_label:  Jacdac磁力传感器
---

# 磁力传感器

---
## 介绍

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/jacdac-sensors/jacdac-magnet-sensor-01-02.png)


### 特性

**jacdac磁力传感器：** 是用霍尔效应来检测磁场变化，并将磁场强度转换为电信号。常用于电机转速检测，通过感应转子的磁场变化来推断转速;在电子罗盘等应用中，它可以准确确定导航和定位设备的方向。

---
### 规格
|项目|参数|
|---|---|
|**名字**|磁力传感器|
|**SKU**|EF16013|
|**连接类型**|模拟输出|
|**工作电压**|4.15V|
|**产品尺寸**|38.00mm×28.20mm(长×宽)|

---
### 外观和尺寸

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/jacdac-sensors/jacdac-magnet-sensor-01.png)

---

### 产品链接
暂无

---
## 快速开始

### 硬件连接图

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/jacdac-sensors/jacdac-magnet-sensor-01-01.png)

---
## 使用教程
### 编程软件

[微软makecode](https://makecode.microbit.org/#)

---
### Makecode编程

#### 步骤1：如何添加Jacdac扩展
1. 进入[微软makecode](https://makecode.microbit.org/#)，点击“新建项目”。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-07.png)

2. 在弹出窗口输入项目名称并点击创建。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-11.png)


3. 点击代码抽屉中的“扩展”。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-09.png)

4. 在弹出界面输入"Jacdac"并点击搜索图标, 选择Jacdac软件库，如图所示。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/jacdac-smart-exploration-kit-3.png)

---
#### 步骤2：
1. 用数据线将micro:bit主板连接到计算机。
   
   **注意**：若micro:bit主板初次运行jacdac程序，请先预装一个空白Jacdac程序至主板，否则跳过此步骤。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/jacdac-smart-exploration-kit-5.png)

2. 连接传感器，MakeCode自动识别并仿真呈现，在仿真区内传感器实时反馈传感器状态。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/1jacdac-smart-exploration-kit-6.png)

3. 点击“ADD BLOCKS”传感器扩展模块。
   
   **注意**：连接新的传感器，重复执行一次“点击“ADD BLOCKS”传感器扩展模块”操作流程。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/jacdac-smart-exploration-kit-7.png)

---
#### 如图编写程序

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/jacdac-sensors/jacdac-magnet-sensor-01-03.png)

---
## 参考程序连接

链接

[https://makecode.microbit.org/_51DU2LPKPHpx]https://makecode.microbit.org/_51DU2LPKPHpx)

---
你还可以通过链接下载

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_51DU2LPKPHpx"
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
磁力传感器检测磁铁，micro:bit 显示“√”，否则micro:bit 显示“×”。
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/hardware-connection-diagram/jacdac-smart-exploration-kit-case-0321.gif)
