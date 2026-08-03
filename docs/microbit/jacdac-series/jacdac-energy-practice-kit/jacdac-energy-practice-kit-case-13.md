# 案例十三：智能温室大棚

---

## 简介

同时使用**Jacdac温湿度传感器和土壤湿度传感器**实时监测温室环境。只有当三个指标全部达标（温度<35、湿度<75、土壤湿度<50）时，micro:bit LED矩阵显示**笑脸**表示"作物生长环境良好"；任一指标不达标则显示**哭脸**报警。按下**按键A**，360°积木舵机正转打开通风窗；按下**按键B**，舵机反转关闭通风窗；触摸**Logo**，舵机停止。

---

## 案例目的

1. 认识**温湿度传感器和土壤湿度传感器**——温室环境监测的核心传感器。
2. 理解**多条件逻辑判断（AND）**——所有条件同时满足才算达标。
3. 学习**多传感器融合**——综合多个传感器的读数做出综合判断。
4. 了解**智能温室大棚**在现代农业中的应用和意义。

---

## 所需材料

| 项目 | 图片 | 数量 |
|---|---|---|
| micro:bit V2 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/microbit%20%E6%AD%A3(1).png) | 1 |
| Jacdac扩展板 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20bit.png) | 1 |
| Jacdac 10cm连接线 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac-smart-exploration-kit-10cm-cable.png) | 1 |
| Jacdac 25cm连接线 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac-smart-exploration-kit-25cm-cable.png) | 2 |
| Jacdac 温湿度传感器 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Sensor/Jacdac%20HT.png) | 1 |
| Jacdac 土壤湿度传感器 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Sensor/Jacdac%20Moisture.png) | 1 |
| Jacdac舵机模块 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Sensor/Jacdac%20Servo.png) | 1 |
| 360°积木舵机 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Sensor/img_v3_0213q_cfc7e5b2-67bb-45ac-856e-d875221271ag.png) | 1 |
| USB数据线 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/usb%20cable1.png) | 1 |

---

## 传感器原理说明

### 两大温室传感器

本案例同时使用了两种Jacdac传感器，构成完整的温室环境监测系统：

| 传感器 | 检测内容 | 本案例阈值 | 在温室中的作用 |
|---|---|---|---|
| 温湿度传感器 | 环境温度 、空气湿度| <35（适宜）、<75（适宜） | 温度适中→环境舒适；过低→关窗保温、湿度适中→不闷不燥 |
| 土壤湿度传感器 | 土壤含水量 | <50（适宜） | 土壤含水量适中→不需灌溉 |


---

## 搭建步骤

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case13/jacdac-energypractice-kit%2BAssembly%20Diagram%2BCase13.pdf" type="application/pdf" width="100%" height="600px" />

---

## 模型原理说明

### 智能温室——用传感器替代农民的眼睛

传统农业中，农民靠经验判断"今天该不该通风、该不该浇水"。智能温室用传感器替代了人的感官：

| 传统方式 | 智能温室方式 | 优势 |
|---|---|---|
| 用手摸土壤判断干湿 | 土壤湿度传感器 | 精确数值、24小时不间断 |
| 凭感觉判断冷热 | 温度传感器 | 精度到0.1°C |
| 凭经验判断是否闷湿 | 湿度传感器 | 量化指标、自动记录 |

360°积木舵机在本案例中模拟温室的**电动通风窗**——正转开窗通风降温、反转关窗保温、Logo触摸停止。

---

## 连接示意图

如下图所示，将micro:bit主板插入Jacdac扩展板，用连接线将温湿度传感器、土壤湿度传感器和360°积木舵机模块连接在Jacdac扩展板金手指接口上。

![连接示意图](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/%E7%A1%AC%E4%BB%B6%E8%BF%9E%E7%BA%BF%E5%9B%BE/micro%EF%BC%9Abit%20%2B%E8%88%B5%E6%9C%BA%E6%A8%A1%E5%9D%97%2B%E8%88%B5%E6%9C%BA%2B%E5%9C%9F%E5%A3%A4%2B%E6%B8%A9%E6%B9%BF%E5%BA%A6.png)

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

![程序截图](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case13/jacdac-energypractice-kit%2BProgram%2BCase13.png)

---

## 参考程序链接

[https://makecode.microbit.org/_ac7XFk7rE4Fa](https://makecode.microbit.org/_ac7XFk7rE4Fa)

你也可以通过以下网页直接下载程序，下载完成后即可开始运行程序。
<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_ac7XFk7rE4Fa"
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

当温度<35、湿度<75、土壤湿度<50**三个条件同时满足**时，micro:bit LED矩阵显示**笑脸**，表示温室环境适宜作物生长。任一指标超标（温度≥35或湿度≥75或土壤湿度≥50），立即显示**哭脸**报警。按下**按键A**，360°积木舵机正转（100），模拟打开通风窗；按下**按键B**，舵机反转（-100），模拟关闭通风窗；触摸**Logo**，舵机停止。

---

## 思考

1. 真实的温室需要同时监测温度、湿度、光照、CO₂浓度等多种参数——如果增加光照传感器，程序应该怎么修改？
2. 本例中三个条件是"全部达标才开心"，如果改为"任一超标就报警"，逻辑应该怎么改？（提示：AND → OR）

---

## 程序逻辑说明

| 触发条件 | 动作 | 来源 |
|---|---|---|
| 温度<35 且 湿度<75 且 土壤湿度<50（环境适宜） | LED矩阵显示笑脸 | Jacdac 温湿度+土壤湿度传感器 |
| 任一指标超标（温度≥35或湿度≥75或土壤湿度≥50） | LED矩阵显示哭脸 | Jacdac 温湿度+土壤湿度传感器 |
| 按下按键A | 360°积木舵机正转（100），模拟打开通风窗 | micro:bit V2 按键A |
| 按下按键B | 360°积木舵机反转（-100），模拟关闭通风窗 | micro:bit V2 按键B |
| 触摸Logo | 360°积木舵机停止转动 | micro:bit V2 Logo触摸键 |

---

## 知识拓展：智能温室——当农业遇上物联网

### 一、什么是智能温室

智能温室（Smart Greenhouse）是集**传感器监测、自动控制和数据分析**于一体的现代农业生产系统。它通过部署多种传感器实时采集环境数据，由控制系统自动调节温度、湿度、光照、灌溉等，为作物创造最适宜的生长环境。

| 传统种植 | 智能温室 |
|---|---|
| 靠天吃饭，受气候影响大 | 环境可控，全年稳产 |
| 人工浇水施肥，凭经验 | 传感器精确监测，自动灌溉施肥 |
| 病虫害发现晚，损失大 | 提前预警，精准防治 |
| 水肥浪费严重 | 节水节肥30%~50% |
| 产量不稳定 | 产量可**显著提高** |

### 二、温室环境参数标准

| 环境参数 | 适宜范围（大多数作物） | 传感器类型 |
|---|---|---|
| 温度 | 20°C~30°C（白天）/ 15°C~20°C（夜间） | 温度传感器 |
| 空气湿度 | 60%~80% | 湿度传感器 |
| 土壤湿度 | 50%~70%田间持水量 | 土壤湿度传感器 |
| 光照强度 | 20,000~50,000 lux | 光敏传感器 |
| CO₂浓度 | 800~1,200 ppm | CO₂传感器 |

> 据联合国粮农组织（FAO）统计，到2050年全球人口将达**97亿**，粮食需求将增加约**60%**。智能温室为代表的精准农业，是应对这一挑战的关键技术之一。

---

### 三、AND逻辑——从代码到生活

本案例的核心逻辑——**多条件同时满足（AND）**——不仅仅存在于代码中：

| 场景 | AND逻辑 |
|---|---|
| 考试合格 | 语文及格 AND 数学及格 AND 英语及格 |
| 火箭发射 | 天气OK AND 设备OK AND 轨道OK AND 通信OK |
| 手机解锁 | 人脸匹配 AND 注视屏幕（防照片解锁） |
| 温室达标 | 温度OK AND 湿度OK AND 土壤OK |

>  你写的这个三条件AND判断程序，和SpaceX火箭发射前的"Go/No-Go"检查——数千个条件必须全部绿灯才能点火——遵循的是**同一套逻辑**。编程思维，无处不在。

---
