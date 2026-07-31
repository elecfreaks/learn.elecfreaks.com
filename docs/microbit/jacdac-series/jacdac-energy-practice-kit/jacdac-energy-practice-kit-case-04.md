---
sidebar_position: 4
sidebar_label: 案例四：波浪发电
---

# 案例四：波浪发电

---

## 简介

对着micro:bit主板**说话、拍手或制造声音**——声音越大，360°积木舵机驱动凸轮转速越快，"浮子"上下起伏越剧烈，模拟海浪越大、发电功率越高；声音越小，起伏越平缓；完全安静时舵机停止，模拟海面风平浪静。声音代表了"海浪的力量"。

---

## 案例目的

1. 认识**波浪发电**原理——将波浪的起伏动能转化为电能。
2. 了解**海洋能源的种类与潜力**——潮汐能、波浪能、温差能、海流能、盐差能。
3. 理解**人与海洋的关系**——海洋不仅是食物和航运的来源，更是未来清洁能源的巨大宝库。

---

## 所需材料

| 项目 | 图片 | 数量 |
|---|---|---|
| micro:bit V2 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/microbit%20%E6%AD%A3(1).png) | 1 |
| Jacdac扩展板 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20bit.png) | 1 |
| Jacdac 10cm连接线 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac-smart-exploration-kit-10cm-cable.png) | 1 |
| Jacdac舵机模块 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Sensor/Jacdac%20Servo.png) | 1 |
| 360°积木舵机 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Sensor/img_v3_0213q_cfc7e5b2-67bb-45ac-856e-d875221271ag.png) | 1 |
| USB数据线 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/usb%20cable1.png) | 1 |

---

## 传感器原理说明

本案例使用micro:bit主板内置的麦克风作为传感器，实时采集环境声音响度（0~255），将其映射为舵机转速。

## 搭建步骤

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case04/jacdac-energypractice-kit%2BAssembly%20Diagram%2BCase04.pdf" type="application/pdf" width="100%" height="600px" />

---

## 模型原理说明

### 360°积木舵机模块与凸轮——模拟波浪起伏


360°积木舵机连续旋转，输出轴上的凸轮周期性地顶起和放下"浮子"（从动件），使其做上下往复运动——模拟海面上浮子在波浪作用下的起伏状态。舵机每转一圈，浮子完成一次"上升→下降"的完整波浪周期。凸轮的设计决定了波浪的"形态"——圆滑的凸轮产生柔和的浪涌，尖锐的凸轮产生陡峭的浪峰。

>  在真实的波浪发电装置中，浮子的起伏运动通过液压系统或直线发电机直接转化为电能——每一次波浪的呼吸，都在向电网输送清洁电力。

### 波浪发电——大海的呼吸


波浪发电的基本原理是**三级能量转换**：

```
波浪的起伏动能/势能
        ↓ 一级转换
装置的运动（浮子振荡、气室水柱振动、摆体摆动）
        ↓ 二级转换
旋转机械能（涡轮/液压马达旋转）
        ↓ 三级转换
电能（发电机电磁感应）
```

三种主流的波浪发电技术：

| 技术类型 | 原理 | 特点 |
|---|---|---|
| **振荡水柱式（OWC）** | 波浪使气室内水柱上下振动，压缩空气驱动涡轮 | 转动部件不与海水接触，防腐性好，维护方便 |
| **摆式装置** | 波浪推动摆体前后或上下摆动，通过液压装置发电 | 转换效率较高，适合波浪低频大推力特性 |
| **聚波水库式** | 波浪被喇叭形波道聚拢抬高，溢入高处水库，用水位落差驱动水轮机 | 无活动部件，可靠性好，但对地形有特殊要求 |

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

![程序截图](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case04/jacdac-energypractice-kit%2BProgram%2BCase04.png)

---

## 参考程序链接

[https://makecode.microbit.org/_HHgJmiT3XXFr](https://makecode.microbit.org/_HHgJmiT3XXFr)

你也可以通过以下网页直接下载程序，下载完成后即可开始运行程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_HHgJmiT3XXFr"
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

对着micro:bit主板**大声说话或拍手**时，360°积木舵机高速旋转驱动凸轮，浮子剧烈上下起伏，模拟"狂风巨浪、满负荷发电"；轻声细语时，起伏平缓，模拟"微风细浪"；完全安静时，舵机停止、浮子静止，模拟"海面如镜"。声音大小实时控制波浪强度。

---

## 思考

1. 舂米机案例中用了凸轮，波浪发电站也用了凸轮——同一个机构，一个在模拟捶打谷物，一个在模拟波浪起伏。你还想到了哪些可以用凸轮来模拟的自然现象或生产动作？
2. 波浪发电面临的最大挑战之一是"台风"——巨浪可能摧毁发电装置。如果你是工程师，你会怎么设计来应对极端天气？

---

## 程序逻辑说明

| 触发条件 | 动作 | 来源 |
|---|---|---|
| 检测声音大小 | 360°积木舵机以映射值的速度旋转，驱动凸轮带动浮子上下起伏 | micro:bit 声音传感器 |

---

## 知识拓展：蓝色能源——海洋，人类未开发的超级电池

### 一、大海从不休息——为什么海洋能如此诱人

地球表面约**71%**被海洋覆盖。海洋每天吸收的太阳能相当于约**2500亿桶**石油燃烧释放的热量——大约是2024年全球石油日消耗量的**2,400倍**。更重要的是，海洋能具有陆地可再生能源不具备的优势：

| 对比维度 | 太阳能 | 风能 | 海洋能 |
|---|---|---|---|
| 间歇性 | 夜间为零 | 时大时小 | **潮汐规律、波浪持续** |
| 可预测性 | 受云层影响 | 难以精确预报 | **潮汐可提前数年精确预报** |
| 空间占用 | 占用大量陆地 | 占用大量陆地 | 在海面/海下，不争陆地资源 |
| 能量密度 | 约0.2 kW/m² | 约0.5 kW/m² | **海水密度是空气的832倍，低速也可产出大能量** |

> 全球海洋能理论蕴藏量估计高达**10¹⁰~10¹¹ kW**量级（即100亿到1000亿千瓦），约为当前全球电力装机总量的**10~100倍**。然而，截止2024年底，全球实际投入运行的海洋能装机仅约**513 MW**（0.513 GW）——不到理论潜力的**百万分之一**。

---

### 二、海洋能源家族——五种"蓝色能源"

| 能源类型 | 能量来源 | 技术成熟度 | 全球理论蕴藏量 | 中国资源优势区域 |
|---|---|---|---|---|
| **潮汐能** | 月球和太阳引力引起海面升降 | ✅ 已商业化（法国La Rance 240 MW，韩国Sihwa 254 MW） | ~10⁹ kW级 | 浙江、福建 |
| **波浪能** | 风吹海面形成波浪 | 🔧 实海况样机测试中 | ~10⁹ kW级 | 浙江、福建、广东、台湾 |
| **温差能** | 表层与深层海水温度差（约20°C） | 🔬 比例样机测试中 | ~10¹⁰ kW级 | 南海（占中国99%） |
| **海流/潮流能** | 地球自转、温差、引力等驱动海水流动 | 🔧 全比例样机测试中 | ~10⁸ kW级 | 舟山群岛 |
| **盐差能** | 淡水与海水盐度差异产生的渗透压 | 🧪 实验室验证阶段 | ~10⁹ kW级 | 各大江河入海口 |

---

### 三、波浪发电——捕捉大海每一次呼吸

波浪是风与海水相互作用的结果。风吹过海面，将部分动能传递给海水，形成波浪。波浪可以长途传播数千公里而不显著衰减——在太平洋中部形成的涌浪，可以一直传到万里之外的海岸线上。

| 波浪发电关键事实 | 数据 |
|---|---|
| 全球波浪能理论蕴藏量 | 约**2×10⁹ kW（20亿千瓦）** |
| 中国沿海波浪年平均功率 | 约**1.3×10⁷ kW（1,300万千瓦）** |
| 台风巨浪功率密度 | 可达每米迎波面**数千kW** |
| 2024年欧洲波浪能累计装机 | 约**13.5 MW**（仅830 kW在运行） |
| 全球海洋能新增装机（2024年） | 仅**1.6 MW** |

> 波浪能目前仍处于**工程样机实海况测试阶段**——这意味着全世界还没有一座真正商业化的波浪发电站。一个蕴藏量万亿级别的能源宝库，正等待着工程师们打开它的钥匙。而你的舵机凸轮模型，正是探索这个宝库的第一步。

---

### 四、人与海洋——从恐惧到敬畏再到共生

| 时代 | 人与海洋的关系 | 典型事件 |
|---|---|---|
| 远古时代 | **恐惧与神秘** | 神话中的海神、龙王、海怪 |
| 大航海时代（15~17世纪） | **征服与探索** | 哥伦布横跨大西洋、麦哲伦环球航行、海上丝绸之路 |
| 工业时代（19~20世纪） | **掠夺与污染** | 过度捕捞、海洋石油开采、塑料污染（每年约800万吨入海） |
| 当代（21世纪） | **觉醒与共存** | 海洋保护区、碳汇渔业、海洋牧场、海洋清洁能源开发 |

今天，人类正站在一个新的起点上。海洋不再是需要"征服"的对象，也不再是取之不尽的"免费垃圾场"，而是需要**与之共生**的巨大生态和能源伙伴：

| 维度 | 海洋给予人类 | 人类回馈海洋 |
|---|---|---|
| 食物 | 全球约**30亿**人依赖海产品作为主要蛋白质来源 | 发展可持续渔业、打击非法捕捞、建立海洋保护区 |
| 气候 | 海洋吸收了全球约**25%**的CO₂排放和**90%**的额外热量 | 减少碳排放、控制海洋酸化 |
| 能源 | 潮汐、波浪、温差、海流、盐差——五种"蓝色能源" | 开发清洁海洋能技术，不破坏海洋生态 |
| 运输 | 全球约**90%**的货物通过海运 | 使用低硫燃料、减少船舶噪音保护鲸类 |
| 药物 | 海洋生物是新药研发的重要来源（抗癌、抗病毒等） | 保护海洋生物多样性，不过度采集 |

>  **思考：** 你的舵机凸轮模型每一次"浮子"的起落，都在模拟大海的一次呼吸。地球上的潮汐和波浪已经存在了数十亿年——早在人类出现之前，早在化石燃料形成之前。学会从大海的呼吸中获取能量，就是学会与这个星球最古老的力量和谐共生。未来的蓝色能源时代，等待着你们去开创。

---
