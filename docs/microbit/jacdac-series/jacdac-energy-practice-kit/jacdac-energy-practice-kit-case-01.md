# 案例一：仿古水车

---

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Jacdac%E8%83%BD%E6%BA%90%E5%AE%9E%E8%B7%B5%E5%A5%97%E4%BB%B6/1.%E4%BB%BF%E6%B0%B4%E8%BD%A6.jpg)

---
## 简介

360°积木舵机的转速与micro:bit主板**麦克风检测到的声音响度**实时关联——声音越大转速越快、声音越小转速越慢，模拟水流冲击水轮带动水车的场景：声音代表了"水流的力量"。

---

## 案例目的

1. 了解**声音传感器**——一种可检测环境声音的响度.
2. 理解**数据映射**——将麦克风采集的模拟量（声音值）映射为舵机转速，实现连续控制。
3. 认识**筒车（水车）**——古代利用水力自动提水灌溉的机械装置。
4. 了解古代水利灌溉工程及水能在人类文明发展中的关键作用。

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
| Jacdac能源实践套件积木 |  | 1 |

---

## 传感器原理说明

本案例使用micro:bit主板内置的麦克风作为传感器，实时采集环境声音响度（0~255），将其映射为舵机转速。

## 搭建步骤

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case01/jacdac-energypractice-kit%2BAssembly%20Diagram%2BCase01.pdf" width="100%" height="600px" />

---

## 模型原理说明

### 360°积木舵机模块与水车模型

360°积木舵机提供连续旋转动力，安装在水车轮盘的中心轴上。舵机旋转时带动整个轮盘转动，轮盘外缘安装的竹筒（或小水斗）依次进入"水面"取水、旋转至最高点后将水倾倒入水槽，模拟筒车自动汲水灌溉的过程。

---

## 连接示意图

如下图所示，将micro:bit主板插入Jacdac扩展板，用连接线将360°积木舵机模块采用**菊花链方式**连接在Jacdac扩展板金手指接口上。

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

![程序截图](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case01/jacdac-energypractice-kit%2BProgram%2BCase01.png)

---

## 参考程序链接

[https://makecode.microbit.org/_WAqP0ebpAc6a](https://makecode.microbit.org/_WAqP0ebpAc6a)

你也可以通过以下网页直接下载程序，下载完成后即可开始运行程序。
<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_WAqP0ebpAc6a"
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

水车转动速度随着检测到的声音值（0~255）的大小变化。

---

## 思考

1. 如果想让水车转速根据"水流大小"变化，可以怎样改进程序？
2. 除了灌溉，筒车/水车的旋转动力还可以用来做什么？（提示：回顾之前学过的案例）

---

## 程序逻辑说明

| 触发条件 | 动作 | 来源 |
|---|---|---|
| 检测声音大小 | 360°积木舵机以映射值的速度持续旋转，驱动水车 | micro:bit 声音传感器 |


---

## 知识拓展：水车——转动人类文明的千年巨轮

### 一、筒车——不用电的"自动灌溉机器人"

在电力发明之前的一千多年里，筒车是人类最先进的自动灌溉工具。它的巧妙之处在于**不需要任何人力或畜力**——完全依赖流水的自然力量：

```
                        ┌────────────────────────────┐
                        │       筒车工作流程          │
                        └────────────┬───────────────┘
                                     │
        ┌────────────────────────────┼────────────────────────────┐
        ▼                            ▼                            ▼
   ┌──────────┐               ┌──────────┐               ┌──────────┐
   │ 水流冲击  │               │ 水轮旋转  │               │ 自动汲水  │
   │ 受水板    │  ──────────►  │ 带动竹筒  │  ──────────►  │ 倒入水槽  │
   └──────────┘               └──────────┘               └──────────┘
   自然力输入                  动能传递                     灌溉输出
```

| 结构组件 | 作用 | 材料 |
|---|---|---|
| 受水板 | 承受水流冲击，驱动轮体旋转 | 木板 |
| 大轮盘（双环） | 支撑竹筒、传递旋转力 | 粗竹/圆木 |
| 竹筒（20~42个） | 舀水容器，随轮旋转自动取水倒水 | 粗竹筒，斜向安装 |
| 水槽 | 收集竹筒倾倒的水，导入渠道 | 木槽/竹槽 |
| 轮轴与支架 | 支撑整个轮体 | 硬木 |

> **关键设计：** 竹筒的内端（筒底）和外端（筒口）不在同一半径上——筒底所在的外环半径大于筒口所在的内环。这样在低处时筒口高于筒底（可以盛水），到高处时筒口低于筒底（自动倾泻）。仅凭这一个几何巧思，实现了"自动灌水、自动倒水"的完美循环。

---

### 二、筒车的历史——跨越千年的水利智慧

| 时期 | 重要发展 | 灌溉能力 |
|---|---|---|
| **隋唐**（约7世纪） | 筒车起源，杜甫有"连筒灌小园"诗句 | 单架日灌数十亩 |
| **唐代**（9世纪） | 陈章作《水轮赋》，记载制造规章 | 广泛用于南方水田 |
| **南宋** | 张孝祥诗："转此大法轮，救汝旱岁苦" | 浙赣湘粤桂普遍使用 |
| **元代** | 王祯《农书》详绘图解，记载"高转筒车" | 提水高度可达十丈以上 |
| **明代**（1556年） | 段续在兰州创制**黄河大水车**，轮径达**16~20米** | 单架昼夜灌**数百亩** |
| **清代** | 黄河沿岸水车达**300余架** | 灌溉**十万亩**田地 |
| **当代** | 兰州黄河大水车制作技艺列入**国家级非物质文化遗产** | 文化保护与旅游展示 |

> 一架明代兰州黄河大水车的轮径超过五层楼高，装有40多个大木斗，昼夜不息可灌溉300亩以上农田——相当于约28个标准足球场的面积。

---

### 三、水车与人类文明——全球视角

水车并非中国独有，它几乎是所有古代文明不约而同的伟大发明：

| 文明 | 水车名称 | 最早记载 | 驱动方式 | 主要用途 |
|---|---|---|---|---|
| 古印度 | Araghaṭṭa（阿拉格哈塔） | 约公元前350年 | 河流水力 | 灌溉 |
| 古中国 | 筒车 | 约公元7世纪（唐代） | 河流水力 | 灌溉 |
| 古埃及/中东 | Noria（诺里亚） | 公元前1世纪已有文献记载 | 河流水力 | 灌溉 |
| 古希腊/罗马 | Tympanum / Noria | 维特鲁威记载（约公元前25年） | 水力/畜力 | 灌溉+矿山排水 |

水车代表了人类最早的"动力革命"——在此之前，所有的机械动力都来自人或动物的肌肉。水车第一次让人类**免费借用了大自然的能量**，这一思想直接启发了后来的蒸汽机、水轮机和水力发电站。

---

### 四、从筒车到三峡——水能利用的两千年进化

从唐代筒车到现代水电站，人类利用水能的方式在不断升级：

| 时代 | 水能装置 | 功率 | 灌溉/供电规模 |
|---|---|---|---|
| 7世纪 | 竹木筒车 | 约0.1~0.5 kW | 日灌数十亩 |
| 16世纪 | 兰州大水车 | 约1~3 kW | 日灌数百亩 |
| 19世纪末 | 第一座水电站（美国，1882年） | 12.5 kW | 供电约250盏灯 |
| 20世纪中 | 胡佛水坝（美国，1936年） | 2,080 MW | 供电约130万户 |
| 21世纪 | 三峡水电站（中国，2012年竣工） | **22,500 MW** | 供电约**6000万**人 |

> 一座三峡水电站的发电功率，大约相当于**4500万架**唐代筒车同时运转。然而——唐代筒车完全零碳排、零污染，且维护成本几乎为零。现代科技与古老智慧，各有其不可替代的价值。

---

### 五、筒车给我们的启示

| 启示 | 说明 |
|---|---|
| **善用自然之力** | 筒车不烧油、不耗电，零碳排运行——是最纯粹的绿色能源应用。今天人类大力发展太阳能、风能、水能，本质上是在延续筒车时代的理念。 |
| **简单即美** | 筒车的核心结构仅含木轮、竹筒、水槽三部分，无齿轮、无轴承精加工，却能昼夜不息精准运转——好的工程不一定复杂。 |
| **因地制宜的智慧** | 南方用竹（轻便耐水）、北方用木（坚固耐久）、黄河沿岸造巨型水车（水流量大），古人根据当地材料和水文条件设计最适合的方案。 |
| **if-else 的哲学** | 筒车的工作逻辑本质上就是一个 if-else：如果（水流冲击）{ 旋转汲水 } 否则 { 静止等待 }。你今天编写的声控程序，遵循的正是同一套决策逻辑。程序中的 if-else，就像水车的水闸——**决定动力的开与关**。 |

>  **思考：** 两千年前，古人面对奔流的溪水，想到用木轮和竹筒来借力灌溉；今天，你面对一块电路板和几行代码，同样在完成一件事——用智慧和工具，让机器替你工作。从筒车到舵机，从水轮到传感器，改变的只是载体，不变的是人类创造与改造世界的冲动。

