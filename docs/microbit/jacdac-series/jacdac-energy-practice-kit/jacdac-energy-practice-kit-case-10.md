---
sidebar_position: 11
sidebar_label: 案例十：太阳能风扇
---

# 案例十：太阳能风扇

---

## 简介

利用micro:bit主板**LED矩阵的光敏检测功能**实时检测环境光照强度。光照越强，360°积木舵机驱动风扇叶片的**转速越快**（最低20%、最高100%）；光照越弱，转速越慢；完全黑暗时风扇以最低速20%运转（模拟待机状态）。模拟太阳能风扇——阳光越强、风扇转得越猛的真实场景。

---

## 案例目的

1. 认识micro:bit **LED矩阵的光敏检测**功能——LED复用为光传感器。
2. 理解**自动控制**——光照强度实时自动调节风扇转速。
3. 了解**太阳能**在日常生活中的实际应用——太阳能风扇、太阳能路灯等。
4. 学习**数据映射**——将光照值（0~255）映射为舵机转速，实现平滑调速。

---

## 所需材料

| 项目 | 图片 | 数量 |
|---|---|---|
| micro:bit V2 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/microbit%20%E6%AD%A3(1).png) | 1 |
| Jacdac扩展板 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20bit.png) | 1 |
| Jacdac 25cm连接线 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac-smart-exploration-kit-25cm-cable.png) | 1 |
| Jacdac舵机模块 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Sensor/Jacdac%20Servo.png) | 1 |
| 360°积木舵机 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Sensor/img_v3_0213q_cfc7e5b2-67bb-45ac-856e-d875221271ag.png) | 1 |
| USB数据线 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/usb%20cable1.png) | 1 |

---

## 搭建步骤

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case10/jacdac-energypractice-kit%2BAssembly%20Diagram%2BCase10.pdf" type="application/pdf" width="100%" height="600px" />

---

## 模型原理说明

### 360°积木舵机模块与太阳能风扇

360°积木舵机提供连续旋转动力，驱动风扇叶片旋转产生气流。舵机转速根据环境光照强度实时调节——光越强、转得越快，模拟"太阳能电池板接收到的阳光越多→输出的电功率越大→风扇转得越猛"的因果关系。

### 太阳能风扇——把阳光变成凉风

太阳能风扇由**太阳能电池板 + 电机 + 风扇叶片**三部分组成。太阳能电池板（光伏板）将太阳光能转化为电能，驱动电机旋转风扇叶片。它完全不需要电池或外部电源——只要有阳光就能工作，是"零碳排"的清洁能源应用典范。太阳帽上的小风扇、户外太阳能排风扇、太阳能汽车散热风扇，都使用这一原理。

```
太阳光 → 光伏板（光能→电能） → 电机旋转（电能→动能） → 风扇叶片推空气 → 凉风
```

---

## 传感器原理说明

本案例使用micro:bit主板**LED矩阵的光敏检测功能**作为传感器。micro:bit的LED矩阵除了显示图案外，还可以复用为光敏传感器——通过测量LED的反向漏电流来感知环境光照强度。光照值范围为0~255（0=最暗，255=最亮），程序通过`map`函数将光照值映射为舵机转速（20~100），实现光照越强、风扇转速越快的自动调速效果。

---

## 连接示意图

如下图所示，将micro:bit主板插入Jacdac扩展板，将舵机模块连接在Jacdac扩展板金手指接口上。

![连接示意图](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/%E7%A1%AC%E4%BB%B6%E8%BF%9E%E7%BA%BF%E5%9B%BE/micro%EF%BC%9Abit%20%2B%E8%88%B5%E6%9C%BA%E6%A8%A1%E5%9D%97%2B%E8%88%B5%E6%9C%BA.png)

---

## 编程软件

[微软 MakeCode](https://makecode.microbit.org/#)

---

## MakeCode 编程

### 步骤1：如何添加 Jacdac 扩展

1. 进入[微软 MakeCode](https://makecode.microbit.org/#)，点击 **"新建项目"**。

   ![新建项目](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-07.png)

2. 在弹出窗口输入项目名称并点击 **"创建"**。

   ![创建项目](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-11.png)

3. 点击代码抽屉中的 **"扩展"**。

   ![扩展](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-09.png)

4. 在弹出界面输入 **"Jacdac"** 并点击搜索图标，选择 Jacdac 软件库，如图所示。

   ![搜索Jacdac](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/jacdac-smart-exploration-kit-3.png)

---

### 步骤2：连接硬件

1. 用数据线将micro:bit主板连接到计算机。

   > **注意：** 若micro:bit主板初次运行Jacdac程序，请先预装一个空白Jacdac程序至主板，否则跳过此步骤。

   ![连接micro:bit](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/jacdac-smart-exploration-kit-5.png)

2. 连接传感器，MakeCode自动识别并仿真呈现，在仿真区内传感器实时反馈传感器状态。

   ![传感器仿真](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/1jacdac-smart-exploration-kit-6.png)

3. 点击 **"ADD BLOCKS"** 传感器扩展模块。

   > **注意：** 连接新的传感器，重复执行一次"点击'ADD BLOCKS'传感器扩展模块"操作流程。

   ![ADD BLOCKS](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/jacdac-smart-exploration-kit-7.png)

---

## 如图所示编写程序

![程序截图](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case10/jacdac-energypractice-kit%2BProgram%2BCase10.png)

---

## 参考程序链接

📎[https://makecode.microbit.org/_2aFbbrEteHf1](https://makecode.microbit.org/_2aFbbrEteHf1)

你也可以通过以下网页直接下载程序，下载完成后即可开始运行程序。
<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_2aFbbrEteHf1"
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

用手电筒或手机闪光灯照射micro:bit主板的LED矩阵时，风扇叶片**高速旋转**（最高100%转速）——阳光越强、风力越大；用手遮挡LED矩阵（模拟阴天），风扇转速自动降低至约20%最低速运转；移开遮挡物后，风扇转速立即回升。光照强度实时决定风扇转速，无需任何手动操作。

---

## 思考

1. 如果想让风扇在光照低于某个阈值时自动关闭（保护电机不被反复低速启动），可以怎样改进程序？
2. 真实的太阳能产品（如太阳能路灯、太阳能充电宝）为什么通常都配有**蓄电池**？

---

## 程序逻辑说明

| 触发条件 | 动作 | 来源 |
|---|---|---|
| 光照强度变化（持续检测） | 将光照值（0~255）映射为舵机转速（20~100），光照越强转速越快，光照越弱转速越慢 | micro:bit LED矩阵光敏检测 |
| 完全黑暗（光照值≈0） | 舵机以最低转速20%运转（模拟待机状态） | micro:bit LED矩阵光敏检测 |
| 强光照射（光照值≈255） | 舵机以最高转速100%全速运转 | micro:bit LED矩阵光敏检测 |

---

## 知识拓展：太阳能——地球上最"大方"的免费能源

### 一、太阳能到底有多"大方"

地球每**1.5小时**从太阳接收到的能量，就相当于全人类**整整一年**的能源消耗总量。太阳每秒钟通过核聚变释放的能量约为**3.8×10²⁶瓦**，其中到达地球大气层顶部的约**1.7×10¹⁷瓦**——是地球所有化石燃料储量总和的**十万倍**。

| 关键数据 | 数值 |
|---|---|
| 2025年全球太阳能装机容量 | 约 **2,900 GW** |
| 2025年全球新增太阳能 | **647 GW**，占全球新增可再生能源的79% |
| 2024年全球太阳能发电量 | **2,132 TWh**，占全球电力**6.9%** |
| 太阳能组件价格（2024年） | 约**0.10美元/瓦**，一年内下跌约45% |
| 光伏组件过去十年降价幅度 | 约 **90%** |

### 二、太阳能产品的日常应用

太阳能不仅仅用于大型发电站，它已经深入我们的日常生活：

| 产品 | 原理 | 典型功率 |
|---|---|---|
| 太阳能计算器 | 微小光伏板驱动LCD显示屏 | < 0.01 W |
| 太阳能风扇帽 | 光伏板 → 小电机 → 风扇 | 0.5~2 W |
| 太阳能路灯 | 白天光伏板充电 → 蓄电池 → 夜间LED照明 | 20~100 W |
| 太阳能充电宝 | 折叠光伏板 → 充电电路 → USB输出 | 5~28 W |
| 家用屋顶光伏 | 光伏组件阵列 → 逆变器 → 家庭用电+并网 | 3~10 kW |

### 三、自动控制的智慧

本案例展示了纯自动控制的理念——micro:bit的LED矩阵光敏传感器实时检测光照强度，程序自动将光照值映射为风扇转速，无需任何人工操作。光照越强，风扇转得越快；光照越弱，风扇转得越慢；完全黑暗时风扇以最低速运转（模拟待机状态）。

自动控制的核心优势在于"无需人为干预"——系统通过传感器感知环境变化，由程序自主做出决策并驱动执行器动作。这种"感知→决策→执行"的闭环逻辑，正是从恒温器到自动驾驶汽车等一切智能系统的基础。真实的太阳能产品（如太阳能路灯、太阳能排风扇）正是依靠这样的自动控制逻辑，实现了全天候无人值守运行。
