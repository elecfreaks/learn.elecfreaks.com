---
sidebar_position: 1
sidebar_label: jacdac电源模块
---

# 电源模块

---
## 介绍

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/jacdac-sensors/jacdac-power-01-02.png)

### 特性

**电源模块:** 它负责整个系统的供电和管理，稳定地输出适合每个模块的电压和电流，以确保系统的稳定运行。

---
### 规格
|项目|参数|
|---|---|
|**名字**|电源模块|
|**SKU**|EF16008|
|**连接类型**|电源供应|
|**工作电压**|5V|
|**产品尺寸**|48.00mm×31.40mm （长×宽）|

---
### 外观和尺寸

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/jacdac-sensors/jacdac-power-01.png)

---
## 产品链接
暂无

---

## 使用教程
### 硬件连接图
**注意：** 电源需要自行准备。
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/jacdac-sensors/jacdac-power-01-00.png)

### 开启端口电源输出/关闭电源输出方式。
1.前往[Wed设备调试界面]（https://jacdac.github.io/jacdac-docs/dashboard/）

 ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/jacdac-sensors/jacdac-power-01-03.png)

2.使用USB数据线连接micro:bit与个人电脑,点击“设备仪表盘”再点击“连接”进行设备连接。

 ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/jacdac-sensors/jacdac-power-01-04.png)

3.点击“连接SUB”

 ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/jacdac-sensors/jacdac-power-01-05.png)

4.选择对应串口，点击连接。
 
 ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/jacdac-sensors/jacdac-power-01-06.png)

5.可以Wed调试界面中打开或关闭电源模块输出端口的状态。

若关闭端口的电源输出，端口的LED指示灯将熄灭。反之，若开启端口的电源输出，端口的LED指示灯则会亮起。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/jacdac-sensors/jacdac-power-01-07.png)

---
## 硬件连接图

 ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/jacdac-sensors/Jacdac-Servo-01-01.png)

**注意** 电源模块需要接入5V电源。
## 编程软件

[微软makecode](https://makecode.microbit.org/#)

## Makecode编程

#### 步骤1：如何添加jacdac扩展
1. 进入[微软makecode](https://makecode.microbit.org/#)，点击“新建项目”。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-07.png)

2. 在弹出窗口输入项目名称并点击创建。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-11.png)

3. 点击代码抽屉中的“扩展”。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-09.png)

4. 在弹出界面输入"jacdac"并点击搜索图标, 选择jacdac软件库，如图所示。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/jacdac-smart-exploration-kit-3.png)

---
#### 步骤2：
1. 用数据线将micro:bit主板连接到计算机。
   
   **注意**：若micro:bit主板初次运行jacdac程序，请先预装一个空白jacdac程序至主板，否则跳过此步骤。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/jacdac-smart-exploration-kit-5.png)

2. 连接传感器，MakeCode自动识别并仿真呈现，在仿真区内传感器实时反馈传感器状态。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/1jacdac-smart-exploration-kit-6.png)

3. 点击“ADD BLOCKS”传感器扩展模块。
   
   **注意**：连接新的传感器，重复执行一次“点击“ADD BLOCKS”传感器扩展模块”操作流程。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/jacdac-smart-exploration-kit-7.png)

---
#### 如图编写程序

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/jacdac-sensors/jacdac-button-01-03.png)


---
## 参考程序连接

链接

[https://makecode.microbit.org/_7C43iwgjJFuX](https://makecode.microbit.org/_7C43iwgjJFuX)

---
你还可以通过链接下载。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_7C43iwgjJFuX"
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
按下按钮传感器，micro:bit显示“√”。松开按钮传感器，micro:bit 显示“×”
