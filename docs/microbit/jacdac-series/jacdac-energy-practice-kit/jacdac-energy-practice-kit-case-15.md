---
sidebar_position: 15
sidebar_label: 案例十五：高空风力发电机
---

# 案例十五：高空风力发电机

---

## 简介

利用micro:bit主板**内置光敏传感器**判断昼夜——只有在**白天光线充足（光敏值>30）**时风力发电机才启动。启动后，360°积木舵机的转速由micro:bit主板**麦克风检测到的声音响度**实时控制——声音越大转速越快（0~100），模拟风力发电机在光线充足时依靠气流发电的场景。光线暗（光敏值≤30）时舵机自动停止。

---

## 案例目的

1. 理解**双条件判断**——同时满足「光线充足」和「有风（声音）」两个条件才发电。
2. 认识**光敏传感器与声音传感器的组合使用**——模拟真实高空风力发电机的风速+光照感知。
3. 了解**高空风能**——在300 ~ 500米高空，风速是地面的2 ~ 3倍，是最有潜力的可再生能源之一。
4. 学习**条件嵌套**——先判断光照、再根据声音控制速度。

---

## 所需材料

| 项目 | 图片 | 数量 |
|---|---|---|
| micro:bit V2 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/microbit%20%E6%AD%A3(1).png) | 1 |
| Jacdac扩展板 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20bit.png) | 1 |
| Jacdac 10cm连接线 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac-smart-exploration-kit-10cm-cable.png) | 2 |
| Jacdac 25cm连接线 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac-smart-exploration-kit-25cm-cable.png?x-oss-credential=LTAI5t9aG6u4N7PfV6n23XUj%2F20260723%2Fcn-hongkong%2Foss%2Faliyun_v4_request&x-oss-date=20260723T103530Z&x-oss-expires=3600&x-oss-signature-version=OSS4-HMAC-SHA256&x-oss-signature=7a743de279279e3155a0804920c1b4e13b8cf452b8e1c49c3d6b2b97d8496c2e) | 1 |
| Jacdac 光敏传感器 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20Light%20Sensor.png) | 1 |
| Jacdac舵机模块 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Sensor/Jacdac%20Servo.png) | 1 |
| 360°积木舵机 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Sensor/img_v3_0213q_cfc7e5b2-67bb-45ac-856e-d875221271ag.png) | 1 |
| USB数据线 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/usb%20cable1.png) | 1 |

---

## 传感器原理说明

### micro:bit V2 内置光敏传感器与麦克风

本案例使用了micro:bit V2主板内置的两种传感器，无需外接传感器模块：

| 传感器 | 检测内容 | 本案例阈值 | 说明 |
|---|---|---|---|
| micro:bit V2 光敏传感器 | 环境光照强度 | >30（启动发电） | 光线充足→启动舵机，模拟风力发电机运行 |
| micro:bit V2 麦克风 | 声音响度 | 0~255（映射为0~100转速） | 声音越大→舵机转速越快，模拟风速大小 |

> **注意：** 本案例使用光敏传感器模拟"白天"判断，仅作为教学简化。真实的高空风力发电机可全天候运行。


## 搭建步骤

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case15/jacdac-energypractice-kit%2BAssembly%20Diagram%2BCase15.pdf" type="application/pdf" width="100%" height="600px" />

---

## 模型原理说明

### 高空风力发电机——捕捉更强劲的风

传统风力发电机建在地面或海上，塔架高度通常不超过160米。但在300~500米的高空，风速是地面的**2~3倍**且更加稳定。高空风能（High-Altitude Wind Energy）是近年来可再生能源领域最热门的研究方向之一。

| 高度 | 典型风速 | 风能密度 |
|---|---|---|
| 地面（10米） | 约4~6 m/s | 基准 |
| 塔架顶部（100~160米） | 约7~10 m/s | 约3~5倍 |
| 高空（300~500米） | 约10~15 m/s | 约8~27倍 |

> 风能功率与风速的**三次方**成正比——风速翻倍，功率增至8倍。这就是为什么工程师们想方设法把风力发电机送上高空。

360°积木舵机驱动叶片旋转，模拟高空风力发电机在强劲气流中持续发电的场景。

---

## 连接示意图

如下图所示，将micro:bit主板插入Jacdac扩展板，用连接线将360°积木舵机模块、光敏传感器连接在Jacdac扩展板金手指接口上。

![连接示意图](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/%E7%A1%AC%E4%BB%B6%E8%BF%9E%E7%BA%BF%E5%9B%BE/micro%EF%BC%9Abit%20%2B%E8%88%B5%E6%9C%BA%E6%A8%A1%E5%9D%97%2B%E8%88%B5%E6%9C%BA%2B%E5%85%89%E6%95%8F.png)

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

![程序截图](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case15/jacdac-energypractice-kit%2BProgram%2BCase15.png)

---

## 参考程序链接

📎[https://makecode.microbit.org/_8jiRxMVJ93v1](https://makecode.microbit.org/_8jiRxMVJ93v1)

你也可以通过以下网页直接下载程序，下载完成后即可开始运行程序。
<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_8jiRxMVJ93v1"
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

在**光线充足时（光敏值>30）**，对着micro:bit主板大声说话或拍手，360°积木舵机开始旋转——声音越大转速越快（0~100），模拟白天风力发电机随风运转；安静下来舵机停止。用手遮挡LED矩阵**模拟天黑或阴天（光敏值≤30）**后，无论声音多大，舵机保持静止——"光线不足不发电"。

---

## 思考

1. 本案例用声音模拟风速，如果要真实测量风速，需要什么传感器？（提示：风速计/风杯）
2. 为什么高空风力发电机选择在300~500米高度？为什么不飞得更高？（提示：航空安全、系留缆绳重量）

---

## 程序逻辑说明

| 触发条件 | 动作 | 来源 |
|---|---|---|
| 光敏值 ＞ 30（天亮）且检测到声音 | 360°积木舵机转速=声音值(0~255)→映射(0~100)，声音越大转得越快 | micro:bit V2 光敏 + 麦克风 |
| 光敏值 ＞ 30（天亮）且完全安静 | 舵机停止（映射值为0） | micro:bit V2 光敏 + 麦克风 |
| 光敏值 ≤30（天黑） | 舵机停止转动 | micro:bit V2 光敏 |

---

## 知识拓展：高空风能——下一代清洁能源

### 一、为什么要把风力发电机送上高空

地面风受地形、建筑、植被的摩擦影响，速度慢、不稳定。随着高度增加，地表摩擦力减小，风速显著增大。这一现象叫**风切变（Wind Shear）**：

| 高度 | 风速倍数（相对于10米） | 功率倍数 |
|---|---|---|
| 10米（地面） | ×1.0 | ×1 |
| 100米（塔架顶部） | ×1.5~2.0 | ×3~8 |
| 300米 | ×2.0~2.5 | ×8~16 |
| 500米 | ×2.5~3.0 | ×16~27 |

### 二、高空风能技术路线

目前全球有多家公司和技术路线在竞逐高空风能：

| 技术路线 | 原理 | 代表公司 |
|---|---|---|
| **系留风筝式** | 大型风筝在空中做"8字形"飞行，通过系留缆绳拉动地面发电机 | Kitekraft |
| **系留无人机式** | 多旋翼无人机携带小型风力发电机升空，通过电缆传输电力 | Altaeros（浮空气球+涡轮） |
| **高空浮空器式** | 氦气飞艇将风力涡轮带到300~600米高度 | Altaeros BAT |

> 据估计，高空风能的理论蕴藏量远大于地面风能。然而，技术仍处于早期阶段——如何让一个数百米长的系留系统在雷暴、结冰和极端大风中安全运行，是最大的工程难题。值得注意的是，真实的高空风力发电机可全天候运行（白天和夜间均可发电），本案例使用光敏传感器判断"光线充足→发电"仅为教学简化设计。

---
