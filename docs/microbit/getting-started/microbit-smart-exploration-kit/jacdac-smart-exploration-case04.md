# 案例四：智能小夜灯

## 简介：
人体红外传感器检测到行人经过，且光敏传感器检测到环境光强度小于5%，micro:bit显示“爱心”。

---
## 案例目的：
1. 认识人体红外传感器。

2. 认识光敏传感器。

3. 认识MakeCode中的人体红外传感器与光敏传感器编程积木块，掌握其使用方式。

---
## 所需材料：
|项目|图片|数量|
|--|--|--|
|micro:bit V2||1|
|jacdac扩展板|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20bit.png)|1|
|jacdac 10cm连接线|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac-smart-exploration-kit-10cm-cable.png)|2|
|人体红外传感器|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20Motion%20Sensor.png)|1|
|光敏传感器|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20Light%20Sensor.png)|1|

---
## 传感器原理说明：
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20Light%20Sensor.png)

**原理说明**:是一种用于检测环境光照强度的传感器。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20Motion%20Sensor.png)

**原理说明**:是一种感知人体移动的传感器。

---                 
## 连接示意图
如下图所示，将micro:bit主板插入jacdac扩展板，使用连接线将光敏传感器与人体红外传感器采用串联方式连接在jacdac扩展板金手指接口上。

**图片**

---
## 编程软件

[微软makecode](https://makecode.microbit.org/#)

---
## Makecode编程
### 步骤1：
1. **注意**：若micro:bit主板初次运行jacdac程序，请先预装一个空白jacdac程序至主板，否则跳过此步骤。

**图片**

2. 接入传感器，MakeCode自动识别并仿真呈现，在仿真区内传感器实时反馈传感器状态。

**图片**

3. 点击“ADD BLOCKS”传感器扩展模块。

   **注意**：连接新的传感器，重复执行一次“点击“ADD BLOCKS”传感器扩展模块”操作流程。

**图片**

---
## 如图所示编写程序
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/program/jacdac-smart-exploration-kit-case-0114.png)

---
## 参考程序连接：
[https://makecode.microbit.org/_RVtWqVD92ik5](https://makecode.microbit.org/_RVtWqVD92ik5)

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
        src="https://makecode.microbit.org/_RVtWqVD92ik5"
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
## 案例演示:

**图片**
