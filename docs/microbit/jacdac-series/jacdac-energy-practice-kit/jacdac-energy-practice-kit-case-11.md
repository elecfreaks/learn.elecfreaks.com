# 案例十一：太阳能追踪

---
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Jacdac%E8%83%BD%E6%BA%90%E5%AE%9E%E8%B7%B5%E5%A5%97%E4%BB%B6/%E5%A4%AA%E9%98%B3%E8%83%BD%E8%BF%BD%E5%85%89.jpg)

---
## 简介

利用**两组光敏传感器**——micro:bit主板自带的LED矩阵光敏传感器和Jacdac外接光敏传感器——实时对比左右两侧的光照强度。360°积木舵机驱动太阳能板模型**自动转向较亮的一侧**（，直到两侧光照值趋近平衡，实现太阳能板自动追光对准光源。光照方向改变时，系统自动重新调整方向。

---

## 案例目的

1. 认识**太阳能发电**原理——将太阳光能直接转化为电能。
2. 了解**追光系统/自动跟踪**原理——通过差分比较实现太阳能板始终正对光源。
3. 了解**光能利用**在人类能源体系中的重要地位。

---

## 所需材料

| 项目 | 图片 | 数量 |
|---|---|---|
| micro:bit V2 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/microbit%20%E6%AD%A3(1).png) | 1 |
| Jacdac扩展板 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20bit.png) | 1 |
| Jacdac 10cm连接线 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac-smart-exploration-kit-10cm-cable.png) | 1 |
| Jacdac 25cm连接线 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac-smart-exploration-kit-25cm-cable.png) | 1 |
|Jacdac 光敏传感器 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20Light%20Sensor.png) | 1 |
| Jacdac舵机模块 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Sensor/Jacdac%20Servo.png) | 1 |
| 360°积木舵机 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Sensor/img_v3_0213q_cfc7e5b2-67bb-45ac-856e-d875221271ag.png) | 1 |
| USB数据线 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/usb%20cable1.png) | 1 |

---

## 传感器原理说明

### 双传感器追光原理

将两组光敏传感器分别放置在太阳能板模型的**左侧和右侧**，模拟"左眼"和"右眼"。程序持续比较两边的光照值：

```
左侧光敏（micro:bit内置）      右侧光敏（Jacdac外接）
        │                              │
        └──────────┬───────────────────┘
                   ↓
              比较两侧光照值
                   ↓
    ┌──────────────┼──────────────┐
    ↓              ↓              ↓
 左边亮        两边接近         右边亮
    ↓              ↓              ↓
 舵机左转      舵机停止        舵机右转
（追光）    （对准光源✓）     （追光）
```

---

## 搭建步骤

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case11/jacdac-energypractice-kit%2BAssembly%20Diagram%2BCase11.pdf" type="application/pdf" width="100%" height="600px" />

---

## 模型原理说明

### 360°积木舵机模块与追光太阳能板

360°积木舵机驱动一块小型太阳能板模型旋转。舵机根据两组光敏传感器的读数差自动调整方向——差值越大转得越快，差值越小转得越慢，差值消失则停止。整个系统构成一个**闭环反馈控制**：传感器（眼）→ 程序判断（脑）→ 舵机动作（手）→ 太阳能板移动 → 传感器重新读数（眼），循环往复，直到对准光源。

### 太阳能发电——把阳光变成电

太阳能电池板（光伏板）的核心是**半导体材料**（通常是硅）。当太阳光（光子）照射到光伏板上时，光子的能量将硅原子中的电子"撞"出来，形成自由电子。光伏板内部的**PN结**内建电场将这些自由电子定向驱动，从而产生电流。整个过程不涉及任何机械运动、不燃烧任何燃料——是真正"静止发电"的清洁能源。

```
太阳光（光子） → 激发硅原子电子 → PN结电场定向驱动 → 直流电流 → 电能
```

---

## 连接示意图

如下图所示，将micro:bit主板插入Jacdac扩展板，用连接线将光敏传感器和舵机模块采用**菊花链方式**连接在Jacdac扩展板金手指接口上。

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

![程序截图](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case11/jacdac-energypractice-kit%2BProgram%2BCase11.png)

---

## 参考程序链接

[https://makecode.microbit.org/_hK6K3yigEW0v](https://makecode.microbit.org/_hK6K3yigEW0v)

你也可以通过以下网页直接下载程序，下载完成后即可开始运行程序。
<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_hK6K3yigEW0v"
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

当光源照到追光太阳能模型上时，两组光敏传感器分别检测左右两侧的光照强度。如果一侧较亮，舵机自动向暗侧旋转带动太阳能板转向光源，直到两侧光照值相近（差值<阈值）后停止。移动光源位置时，系统自动重新追踪，始终保持太阳能板正对光源。

---

## 思考

1. 如果只用一组光敏传感器（比如只有micro:bit的LED矩阵），能否实现追光？为什么？
2. 真实的太阳能追踪系统为什么通常不追求完美对准（允许几度的偏差），你能猜出原因吗？

---

## 程序逻辑说明

| 触发条件 | 动作 | 来源 |
|---|---|---|
| 左侧光照值 < 右侧光照值（差值>阈值） | 360°积木舵机向左旋转，太阳能板转向光源方向 | micro:bit LED矩阵光敏 + Jacdac光敏传感器 |
| 右侧光照值 < 左侧光照值（差值>阈值） | 360°积木舵机向右旋转，太阳能板转向光源方向 | micro:bit LED矩阵光敏 + Jacdac光敏传感器 |
| 两侧光照值接近（差值≤阈值） | 舵机停止，太阳能板正对光源 | micro:bit LED矩阵光敏 + Jacdac光敏传感器 |

---

## 知识拓展：追光逐日——太阳能与人类的阳光捕手之梦

### 一、向日葵的智慧——为什么要追光

在大自然中，向日葵（Helianthus annuus）的幼嫩花盘一天中会跟随太阳从东转到西，这种现象叫**向日性（heliotropism）**。植物追光靠的是生长素分布不均——背光面生长素浓度高、细胞伸长快，导致茎向光弯曲。成熟向日葵停止追踪，花盘固定朝向东方——面朝早晨的太阳有助于更快升温，吸引传粉昆虫。

人类从向日葵身上学到了一个道理：**始终正对光源，才能接收最多的能量。** 太阳能追踪系统正是这一自然智慧的工程实现：

| 追踪方式 | 相对固定角度的增益 | 描述 |
|---|---|---|
| **无追踪（固定安装）** | 基准（100%） | 太阳能板以一个固定角度安装，只在正午前后效率最高 |
| **单轴追踪** | **+15%~25%** | 沿一个方向（通常是东西方向）追踪太阳，成本约增加10~15% |
| **双轴追踪** | **+30%~45%** | 沿水平和垂直两个方向精确追踪，始终正对太阳，成本约增加25~35% |


### 二、太阳能——地球上最"大方"的能源

地球每**1.5小时**接收到的太阳能，就相当于全人类**整整一年**的能源消耗。太阳每秒钟通过核聚变释放的能量约为**3.8×10²⁶瓦**，其中到达地球大气层顶部的约**1.7×10¹⁷瓦**——是地球所有化石燃料储量总和的**十万倍**。

| 全球太阳能关键数据 | 数值 |
|---|---|
| 2025年全球太阳能装机容量 | 约 **2,900 GW（29亿千瓦）** |
| 2025年全球新增太阳能 | **647 GW**，占全球新增可再生能源约79% |
| 2024年全球太阳能发电量 | **2,132 TWh**，占全球电力**6.9%** |
| 组件价格（2024年） | 约**0.10美元/瓦**，一年暴跌45% |
| 全球最大太阳能电站 | 中国青海塔拉滩光伏电站，装机**15.7 GW**，面积相当于一个新加坡 |
| 太阳能增长最快国家 | 中国（2025年新增378 GW），99个国家五年内装机翻倍 |

> 太阳能发电量在2015年~2024年间增长了约**16倍**，是人类历史上增长最快的能源形式。光伏组件价格在过去十年下降了约**90%**，让太阳能从"昂贵的未来能源"变成了"最便宜的新建电力"。

---

### 三、从沙子到电站——太阳能电池是怎么造出来的

太阳能电池板的核心材料是**硅**——地球上最丰富的元素之一，占地壳质量的约**27.7%**，仅次于氧。从沙子（主要成分二氧化硅SiO₂）到能发电的电池板，需要经历以下关键步骤：

```
沙子（SiO₂）
    ↓ 高温冶炼（约2000°C）
工业硅（纯度~99%）
    ↓ 化学提纯
多晶硅（纯度99.9999%，即"6个9"）
    ↓ 拉单晶或铸多晶
硅锭（单晶或多晶）
    ↓ 切片（厚度约0.15~0.2mm）
硅片（wafer）
    ↓ 掺杂（磷/硼）→ 形成PN结
电池片（cell）
    ↓ 串联封装（玻璃+EVA+背板）
光伏组件（panel）
    ↓ 安装到电站
太阳能发电站
```

>  一块标准太阳能电池板的寿命可达**25~30年**，期间几乎不需要维护。25年后，其发电效率仍能保持初始的**80%以上**。

---

### 四、追光原理的跨学科应用

你在这个案例中实现的"差分比较追光"，原理远不止用于太阳能板：

| 应用领域 | 追光原理的体现 |
|---|---|
| **天文望远镜** | 自动导星系统追踪天体运动，补偿地球自转 |
| **机器人导航** | 红外循迹小车用双传感器比较左右反光强度，保持在黑线上 |
| **自动门控制** | 红外传感器检测到人体靠近时自动开门，与追光系统的双传感器差分比较逻辑一脉相承 |
| **人脸追踪** | 摄像头识别到人脸后，云台自动旋转使人脸保持在画面中央 |
| **声音定位** | 双麦克风阵列比较声音到达两个麦克风的时间差，定位声源方向 |
| **植物研究** | 研究向日葵的向光性分子机制，启发人工光合作用系统 |

>  **洞察：** 你在micro:bit上写的那几行追光代码——"比较两个值 → 向差值方向移动 → 直到平衡"——与许多高端自动控制系统的算法，本质上遵循的是**同一套逻辑**。朴素但通用。

---

### 五、追光与未来——太空中的太阳能

人类对追光最大的想象，或许不在沙漠里，而在太空中：

- **太空太阳能电站（Space-Based Solar Power）**：在距离地球**36,000公里**的地球同步轨道上，建超大型太阳能电池阵列。太空没有大气吸收、没有云层遮挡、没有昼夜交替——日照强度是地表的**1.4倍**且24小时不间断。收集到的电能通过微波或激光传回地球。
- 日本、美国、欧洲航天局等多个国家和组织均已启动太空太阳能研究计划，探索从太空向地球无线传输清洁能源的可行性。
- 这一构想最大的技术难题之一是**极高精度的追光对准**——从36,000公里外要把微波束精确地打在地面接收天线上（几公里的圆盘），容错弧度极小。

>  **思考：** 你今天用两组光敏传感器实现的追光模型，正是这一切宏大工程的起点。人类学会了追光，就有了无尽的可能性。太阳每秒都在免费发放能量——学会"捕获"它，就是学会了与宇宙和谐共处。


