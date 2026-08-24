# 案例九：内燃机

---

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Jacdac%E8%83%BD%E6%BA%90%E5%AE%9E%E8%B7%B5%E5%A5%97%E4%BB%B6/%E5%86%85%E7%87%83%E6%9C%BA.jpg)

---


## 简介

按住Jacdac**外接按钮模块**不放，360°积木舵机持续旋转，通过曲柄连杆机构将旋转运动转化为活塞的往复直线运动，模拟内燃机点火运转；松开按钮，舵机停止，模拟发动机熄火。按钮按下=油门踩下，松开=熄火。

---


## 案例目的

1. 认识**内燃机**，了解其将燃料化学能转化为机械能的工作原理。
2. 认识**曲柄连杆机构**——将旋转运动与往复运动互相转化的核心机械结构。
3. 了解**能源转换链条**——化学能→热能→动能→机械能，体会能量形态的变化过程。

---

## 所需材料

| 项目 | 图片 | 数量 |
|---|---|---|
| micro:bit V2 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/microbit%20%E6%AD%A3(1).png) | 1 |
| Jacdac扩展板 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20bit.png) | 1 |
| Jacdac 25cm连接线 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac-smart-exploration-kit-25cm-cable.png) | 2 |
|Jacdac按钮传感器|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20Button%20sensor.png)|1|
| Jacdac舵机模块 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Sensor/Jacdac%20Servo.png) | 1 |
| 360°积木舵机 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Sensor/img_v3_0213q_cfc7e5b2-67bb-45ac-856e-d875221271ag.png) | 1 |
| USB数据线 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/usb%20cable1.png) | 1 |
| Jacdac能源实践套件积木 |  | 1 |

---

## 搭建步骤

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case09/jacdac-energypractice-kit%2BAssembly%20Diagram%2BCase09.pdf" type="application/pdf" width="100%" height="600px" />

---

## 模型原理说明

### 曲柄连杆机构


曲柄连杆机构是内燃机中最核心的传动部件，由三个关键部分组成：

| 部件 | 运动方式 | 在本模型中的实现 |
|---|---|---|
| **曲轴（曲柄）** | 绕轴心连续旋转 | 360°积木舵机输出轴直接驱动 |
| **连杆** | 复杂的平面摆动 | 一端铰接在曲柄销上，一端连接活塞 |
| **活塞** | 沿气缸壁往复直线运动 | 在"气缸"（滑轨）中上下滑动 |

工作循环如下：

```
舵机旋转 → 曲柄销做圆周运动 → 连杆摆动 → 活塞上下往复
     ↑                                              ↓
  旋转动能                                  直线运动（模拟做功）
```

每旋转一圈，活塞完成一次完整的上下往复（从上止点到下止点再回到上止点）——对应四冲程发动机的两个行程周期。

### 内燃机——工业时代的"心脏"


内燃机是一种将燃料在气缸内部燃烧产生的高温高压气体热能，直接转化为机械能的动力装置。与蒸汽机（燃料在外部锅炉中燃烧）不同，内燃机的燃烧发生在气缸内部，结构更紧凑、热效率更高。自1876年德国工程师**尼古拉斯·奥托**发明第一台实用四冲程内燃机以来，它驱动了汽车、飞机、轮船、工程机械等几乎所有现代交通工具，深刻改变了人类的生活方式。

---

## 传感器原理说明

本案例使用**Jacdac外接按钮模块**作为输入传感器。按钮模块是一种数字开关传感器，按下时电路导通输出高电平信号（1），松开时电路断开输出低电平信号（0）。程序通过持续检测按钮的按下/松开状态来控制舵机的运转与停止，实现"按住=油门踩下、松开=熄火"的直观控制逻辑。

---

## 连接示意图

如下图所示，将micro:bit主板插入Jacdac扩展板，将舵机模块连接在Jacdac扩展板金手指接口上。

![连接示意图](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/%E7%A1%AC%E4%BB%B6%E8%BF%9E%E7%BA%BF%E5%9B%BE/micro%EF%BC%9Abit%20%2B%E8%88%B5%E6%9C%BA%E6%A8%A1%E5%9D%97%2B%E8%88%B5%E6%9C%BA%2B%E6%8C%89%E9%94%AE.png)

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

![程序截图](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case09/jacdac-energypractice-kit%2BProgram%2BCase09.png)

---

## 参考程序链接

📎[https://makecode.microbit.org/_REC9MMYeX3rP](https://makecode.microbit.org/_REC9MMYeX3rP)

你也可以通过以下网页直接下载程序，下载完成后即可开始运行程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_REC9MMYeX3rP"
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

按住Jacdac**外接按钮模块**时，360°积木舵机全速旋转，曲柄带动连杆和活塞上下往复运动，模拟内燃机点火运转——"油门踩到底"；松开按钮，舵机立即停止，活塞静止，模拟发动机熄火。按住=运转、松开=熄火，简单直观。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/%E6%A8%A1%E5%9E%8BGIF/%E5%86%85%E7%87%83%E6%9C%BA.gif)

---

## 思考

1. 曲柄连杆机构和之前舂米机中的凸轮机构，有什么相同和不同之处？
2. 如果把舵机换成用手转动曲轴，你能感受到活塞在不同位置的阻力差异吗？为什么？

---

## 程序逻辑说明

| 触发条件 | 动作 | 来源 |
|---|---|---|
| 按住外接按钮模块（按下不放） | 360°积木舵机以全速（100）持续旋转，模拟内燃机点火运转 | Jacdac 按钮传感器 |
| 松开外接按钮模块 | 360°积木舵机立即停止旋转，模拟发动机熄火 | Jacdac 按钮传感器 |

---

## 知识拓展：内燃机——150年的热力革命

### 一、四冲程——内燃机的灵魂节拍

四冲程内燃机的一个完整工作循环包含四个行程，曲轴旋转两圈（720°），完成一次"进气→压缩→做功→排气"：

```
        ┌──────────────────────────────────────────────────────┐
        │                四冲程工作循环                         │
        └──────────────────────────────────────────────────────┘

  冲程1：进气                   冲程2：压缩
  ┌──────────┐                ┌──────────┐
  │ 进气门开  │                │ 两门关闭  │
  │ 排气门关  │                │ 活塞上行  │
  │ 活塞下行  │                │ 气体被压  │
  │ 吸入油气  │                │ 温压骤升  │
  └──────────┘                └──────────┘
       ↓                            ↓
  冲程4：排气                   冲程3：做功（唯一输出动力的冲程）
  ┌──────────┐                ┌──────────┐
  │ 进气门关  │                │ 两门关闭  │
  │ 排气门开  │                │ 火花点火  │
  │ 活塞上行  │                │ 燃气燃烧  │
  │ 排出废气  │                │ 推动活塞  │
  └──────────┘                └──────────┘
```

| 冲程 | 活塞方向 | 进气门 | 排气门 | 缸内发生什么 |
|---|---|---|---|---|
| **① 进气** | 下行（上止点→下止点） | 开 | 关 | 吸入汽油与空气的混合气 |
| **② 压缩** | 上行（下止点→上止点） | 关 | 关 | 混合气被压缩，温度升至约400°C |
| **③ 做功** | 下行（上止点→下止点） | 关 | 关 | 火花塞点火！燃气燃烧膨胀，推动活塞——**唯一输出动力的冲程** |
| **④ 排气** | 上行（下止点→上止点） | 关 | 开 | 燃烧后的废气被推出气缸 |

> **关键洞察：** 四个冲程中，只有**做功冲程**对外输出动力，其余三个冲程都在消耗能量。这就是为什么发动机需要**飞轮**——在做功冲程储存能量，在其他三个冲程释放能量维持运转。你的舵机模型中没有飞轮，但在真实发动机中，飞轮对平稳运转至关重要。曲轴每两圈（720°）中，只有约180°在真正"发力"。

---

### 二、内燃机中的能源转换——能量形态的四级跳跃

一箱汽油，如何在发动机中变成车轮的转动？这其中发生了四次能量形态的转化：

```
化学能               热能                 动能                机械能
(Chemical)    →    (Thermal)     →    (Kinetic)     →    (Mechanical)
                                                          
 汽油分子            燃烧产生             高温气体             活塞→连杆
 中的化学             2000°C+              急速膨胀             →曲轴旋转
 键能                高温高压             推动活塞             →飞轮输出
                                                                
   ↓                   ↓                    ↓                   ↓
 存储在               气缸内               气体分子             曲轴末端的
 燃料中               释放                 的集体运动            可用旋转力
```

| 转化阶段 | 能量形态变化 | 在哪发生 | 效率损失 |
|---|---|---|---|
| **阶段一** 化学能→热能 | 燃料燃烧释放化学键能，产生高温高压气体 | 气缸燃烧室 | 约2~5%（燃烧不完全） |
| **阶段二** 热能→动能 | 高温气体膨胀，推动活塞高速运动 | 气缸内（做功冲程） | 约30~35%（热量散失到冷却系统） |
| **阶段三** 动能→排气热 | 未利用的热能随废气排出 | 排气管 | 约30%（尾气带走） |
| **阶段四** 动能→机械能 | 活塞直线运动通过连杆转化为曲轴旋转 | 曲柄连杆机构 | 约6%（摩擦损失） |

> **综合效率：** 一台典型的汽油发动机，最终只有约**25%~35%**的燃料能量转化为有用的机械功。这意味着加100元的汽油，真正用来推动汽车前进的能量只值25~35元，其余65~75元变成了热——从散热器和排气管白白散失到空气中。

---

### 三、内燃机发展史——四位改变世界的工程师

| 年份 | 人物 | 国籍 | 里程碑 |
|---|---|---|---|
| 1673年 | 惠更斯（Christiaan Huygens） | 荷兰 | 首次提出用火药在气缸内燃烧推动活塞的构想，虽未成功，但播下了内燃机的种子 |
| 1824年 | 萨迪·卡诺（Sadi Carnot） | 法国 | 提出"卡诺循环"理论，揭示了热机效率的理论上限，为内燃机奠定热力学理论基础 |
| 1860年 | 勒诺瓦（Étienne Lenoir） | 比利时 | 制造世界第一台实用的内燃机（二冲程、无压缩），热效率仅约4% |
| 1861年 | 德·罗夏（Alphonse Beau de Rochas） | 法国 | 在论文中首次完整提出四冲程循环理论（进气→压缩→膨胀做功→排气），指出压缩是提高效率的关键 |
| **1876年** | **尼古拉斯·奥托**（Nicolaus Otto） | **德国** | **发明第一台实用四冲程内燃机**，热效率达到14%，被称为"内燃机之父"。四冲程循环因此被命名为"奥托循环" |
| 1885年 | 戴姆勒与迈巴赫（Daimler & Maybach） | 德国 | 在奥托发动机基础上开发出高速汽油机，制成世界上第一辆摩托车 |
| **1897年** | **鲁道夫·狄塞尔**（Rudolf Diesel） | **德国** | **发明压燃式柴油机**，热效率达26%，远高于同期汽油机。柴油（diesel）的英文名即为纪念他 |

>  **效率进化：** 从勒诺瓦1860年的4%，到奥托1876年的14%，再到狄塞尔1897年的26%，最后到现代汽油机的35%+和柴油机的40%+——160年间，人类将内燃机的效率提升了10倍以上。

---

### 四、曲柄连杆机构——旋转与往复之间的翻译官

在数学上，曲柄连杆机构的运动可以精确描述：

设曲柄半径为r，连杆长度为l，曲柄转角为θ：

- **活塞位移公式**（从上止点起算）：
  ```
  x = r(1 - cosθ) + l - √(l² - r²sin²θ)
  ```

- **关键几何关系**：当曲柄销在最高点（θ=0°）时活塞处于**上止点（TDC）**；曲柄转过180°时活塞处于**下止点（BDC）**。活塞的总行程 = 2 × 曲柄半径。

| 曲柄转角 | 活塞位置 | 对应的四冲程阶段（以做功冲程为例） |
|---|---|---|
| 0°（上止点） | 最高处 | 火花塞点火，燃烧开始 |
| 90° | 快速下行 | 燃气燃烧膨胀，活塞被猛力下推 |
| 180°（下止点） | 最低处 | 做功冲程结束，排气门即将打开 |
| 270° | 上行中 | 排气冲程 |
| 360°（上止点） | 回到最高处 | 完成两个冲程，下一个循环开始 |

你的舵机模型恰好演示了这一运动规律——舵机输出的连续旋转（曲轴），经连杆转化为活塞的往复滑动。虽然模型中舵机是"动力源"（旋转产生往复），而在真实发动机中方向相反——活塞是动力源（燃烧推动），曲轴输出旋转——但**曲柄连杆机构的双向可逆性**正是其精妙之处。

---

### 五、内燃机与能源未来

如今，我们站在内燃机时代与电动时代的交汇点：

| | 内燃机 | 电动机 |
|---|---|---|
| 能源来源 | 汽油/柴油（化石燃料） | 电池/电网（可来自清洁能源） |
| 效率 | 25%~40% | 85%~95% |
| 碳排放 | 尾气直接排放CO₂ | 零尾气排放（发电可能间接排放） |
| 能量密度 | 极高（1kg汽油≈12kWh） | 较低（1kg锂电池≈0.25kWh） |
| 成熟度 | 150年历史，极度成熟 | 快速发展中 |

>  尽管电动车正在普及，内燃机并未退出历史舞台。2024年，全球仍有超过**14亿**辆燃油车在道路上行驶，每年还新增约**7,000万辆**。在航空、远洋航运、重型工程机械等领域，内燃机因其极高的能量密度和便捷的燃料加注，仍然难以被完全替代。未来的方向可能是**混合动力**（内燃机+电机协同）、**氢燃料内燃机**（燃烧氢气，零碳排放）、以及**合成燃料**（用可再生能源制造的碳中和燃料）——内燃机的故事，远未结束。

