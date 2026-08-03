---
sidebar_position: 7
sidebar_label: 案例六：风力发电
---

# 案例六：风力发电

---

## 简介

倾斜micro:bit主板来控制"风力"的大小——**倾斜角度越大，代表风力越强**，360°积木舵机驱动风力发电机叶片旋转的转速也越快；将主板放平时（无风状态），叶片停止转动。通过加速度计感知倾斜角度并实时调节转速，模拟风力发电机随风运转的真实场景。

---

## 案例目的

1. 认识**风力发电机**，了解其将风能转化为电能的基本原理。
2. 认识micro:bit主板的**加速度计**——一种可以感知倾斜角度和运动状态的MEMS传感器。
3. 了解**陀螺仪与加速度计**的区别及各自在生活中的应用。
4. 学习**多条件分支（if-else if-else）**——根据倾斜角度划分风力等级，程序在不同等级下执行不同转速。
5. 了解风能在人类能源利用史中的重要地位。

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

## 传感器原理说明

本案例使用micro:bit主板内置的加速度计作为传感器，检测主板的倾斜角度（前后方向），将倾斜角度映射为不同的风力等级和对应的舵机转速。

## 搭建步骤

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case06/jacdac-energypractice-kit%2BAssembly%20Diagram%2BCase06.pdf" type="application/pdf" width="100%" height="600px" />

---

## 模型原理说明

### 风力发电机——捕捉风的能量


风力发电机由**塔架、叶片、机舱（含发电机）**三大部分组成。风吹动叶片旋转，通过主轴将旋转动能传递给发电机，发电机利用电磁感应原理将动能转化为电能。简单来说：

```
风能 → 叶片旋转（动能） → 齿轮箱变速 → 发电机旋转 → 电磁感应 → 电能
```

叶片转得越快，发电机输出的功率就越大。一台现代大型风力发电机（10 MW）在满发状态下，每小时可发电**10,000度**——足够一个普通家庭使用约**3年**。

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

![程序截图](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case06/jacdac-energypractice-kit%2BProgram%2BCase06.png)

---

## 参考程序链接

[https://makecode.microbit.org/_5uu7PU2ojFTc](https://makecode.microbit.org/_5uu7PU2ojFTc)

你也可以通过以下网页直接下载程序，下载完成后即可开始运行程序。
<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_5uu7PU2ojFTc"
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

将micro:bit主板**水平放置**时，舵机静止，无风状态；轻轻向前倾斜主板（小角度），舵机以**低转速**旋转——微风拂过；倾斜角度增大到中等，舵机**中速**旋转——风力渐强；大幅度倾斜，舵机**高速**旋转——强风来袭。倾斜角度实时决定"风力大小"和叶片转速。

---

## 思考

1. 加速度计除了检测倾斜，还能感知什么动作？（提示：摇晃、自由落体）
2. 如果把micro:bit贴在自行车轮上旋转，加速度计读数会怎样变化？

---

## 程序逻辑说明

| 触发条件 | 动作 | 来源 |
|---|---|---|
| 主板水平放置（倾斜角度小） | 舵机静止，无风状态 | micro:bit 加速度计 |
| 主板轻微倾斜（小角度） | 舵机低转速旋转，模拟微风 | micro:bit 加速度计 |
| 主板中等倾斜 | 舵机中速旋转，模拟风力渐强 | micro:bit 加速度计 |
| 主板大幅度倾斜 | 舵机高速旋转，模拟强风 | micro:bit 加速度计 |

---

## 知识拓展：风能——从帆船到海上风电场的万年之旅

### 一、风——人类最早的"免费能源"

在煤炭、石油被发现以前，风和水是人类仅有的两种可以大规模利用的自然动力。风能利用的历史，几乎与人类文明的历史一样长：

| 时期 | 风能利用方式 | 代表 |
|---|---|---|
| 约公元前5000年 | 风帆行船 | 古埃及尼罗河帆船 |
| 约公元前200年 | 风力提水 | 波斯（今伊朗）垂直轴风车 |
| 公元7–13世纪 | 风车排水与研磨 | 波斯风车西传→欧洲风车、中国立帆式风车 |
| 12世纪 | 欧洲风车普及 | 荷兰风车排水造田（详见风车案例） |
| 1887–1888年 | 第一台风力发电机 | 苏格兰James Blyth建造（为度假屋供电）；美国Charles Brush建造12kW风机 |
| 1941年 | 第一台兆瓦级风机 | 美国Vermont州Smith-Putnam风机，1.25 MW |
| 1970s | 石油危机推动风电复兴 | 丹麦率先大规模部署 |
| 1991年 | 世界首个海上风电场 | 丹麦Vindeby，11台450kW风机 |
| 2025年 | 全球风电总装机达1,299 GW | 57个国家新建风电，中国装机超520 GW |

---

### 二、风力发电机是怎么工作的

现代风力发电机主要由以下部件组成：

```
                        ┌──────────────────────────────┐
                        │      风力发电机结构           │
                        └──────────────┬───────────────┘
                                       │
     ┌─────────┐  ┌────────┐  ┌───────┴───────┐  ┌──────────┐
     │ 叶片     │  │ 机舱    │  │  塔架         │  │ 基础      │
     │ (Blades) │  │(Nacelle)│  │  (Tower)     │  │(Foundation)│
     └────┬────┘  └───┬────┘  └───────────────┘  └──────────┘
          │           │
    ┌─────┴─────┐ ┌──┴──────────────┐
    │ 风推动旋转 │ │ 齿轮箱 → 发电机  │
    │ 捕捉风能   │ │ 动能 → 电能     │
    │ 最长140m+ │ │ 偏航系统→对风  │
    └───────────┘ └─────────────────┘
```

| 部件 | 功能 | 有趣的事实 |
|---|---|---|
| 叶片 | 捕捉风能，将风的动能转化为旋转动能 | 现代叶片最长超过**140米**，比一个足球场还长 |
| 机舱（含发电机） | 将旋转动能转化为电能 | 内部装有偏航系统，会根据风向自动旋转机舱对准来风 |
| 塔架 | 将风机托举到高空获取更强更稳的风 | 现代风机塔架高度可达**140米**，约50层楼高 |
| 基础 | 将整个结构牢牢固定 | 海上风机基础重达**数千吨**，相当于一艘小型军舰 |

> **关键数据：** 一台10 MW的海上风力发电机，叶片每转一圈大约需要4-5秒，但这一圈就能发电约**15度**。按此计算，一台风机一年可发电约**4,000万度**——足够约**12,000个**中国家庭使用一整年。

---

### 三、风电——全球能源转型的排头兵

| 关键数据 | 数值 |
|---|---|
| 2025年全球新增风电装机 | **165 GW**，同比增长40%，创历史纪录 |
| 2025年底全球累计风电装机 | 约 **1,299 GW（13亿千瓦）** |
| 2024年全球风电发电量 | **2,494 TWh**，占全球电力8.1% |
| 全球风电最大国家 | **中国**（520 GW，占全球约40%） |
| 全球最大海上风电场 | 英国Dogger Bank（规划总容量3.6 GW） |
| 全球单机最大风机 | 中国明阳智能MySE 18.X-20MW（已下线） |
| 2024年风电行业就业人数 | 全球约**160万人** |
| 57个国家 | 在2025年有新建风电项目 |

>  2024年，**丹麦**全国约55%（2024年数据）的电力来自风电，居全球第一。爱尔兰（36%）、乌拉圭（35%）、葡萄牙（29%）紧随其后。在这些国家，每三度电中就有一度来自风的馈赠。

---


### 四、风的未来——还有多少潜力等待发掘

| 展望 | 内容 |
|---|---|
| **漂浮式海上风电** | 传统海上风机需要固定在海床上（水深<60米），漂浮式风机可以部署在深水区域（>60m），将风电资源扩大数倍。日本、挪威、苏格兰已建成示范项目。 |
| **高空风能** | 在300-500米高空，风速是地面的2-3倍且更稳定。多家公司正在研发系留式风筝/无人机发电系统，用轻质缆绳替代重塔架。 |
| **风机回收** | 早期风机的玻璃纤维叶片退役后难以回收。2025年起，多家制造商开始推出**可回收叶片**，退役后材料可重新利用。 |
| **风电+储能** | 风时有时无？搭配大型储能电池或氢能（用多余风电电解水制氢），实现"削峰填谷"，让风电24小时可用。 |

> 据国际能源署（IEA）预测，到2050年，风电和太阳能将共同提供全球约**70%**的电力。今天你在micro:bit上控制的小小舵机叶片，明天可能就会成长为海面上直径超过200米的巨型风轮。**风一直在吹，关键在于我们是否准备好了去捕捉它。**
