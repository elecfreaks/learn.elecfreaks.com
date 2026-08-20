# 案例二：舂米机

---

## 简介

按下micro:bit主板的**按键A**，360°积木舵机以全速（-100）旋转驱动凸轮机构，模拟古代舂米机往复舂捣谷物的动作；按下**按键B**，舵机停止转动。

---

## 案例目的

1. 认识舂米机（水碓）——古代利用水力加工粮食的机械设备。
2. 理解**事件驱动编程**——通过**按键A和按键B**分别控制舵机的启动与停止。
3. 认识**凸轮机构**——将旋转运动转化为往复直线运动的机械原理。
4. 了解古代粮食加工历史及人类对水能的智慧应用。

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

本案例未使用新的外接传感器模块，通过micro:bit主板自带的按键A和按键B即可完成控制。

## 搭建步骤

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case02/jacdac-energypractice-kit%2BAssembly%20Diagram%2BCase02.pdf" type="application/pdf" width="100%" height="600px" />

---

## 模型原理说明

### 360°积木舵机模块与凸轮机构

360°积木舵机提供连续旋转动力，安装在舵机输出轴上的**凸轮**是一个带突起的不规则圆盘。凸轮旋转时，其突起部分周期性地顶起舂杵（从动件），当凸轮突起转过之后，舂杵在重力作用下下落，砸入石臼中的谷物。这样，舵机每旋转一圈，舂杵就完成一次"抬起→下落→舂捣"的动作循环。

| 环节 | 动作 | 机械原理 |
|---|---|---|
| ① 凸轮推程 | 凸轮突起顶起舂杵 | 旋转 → 上升 |
| ② 舂杵抬升 | 舂杵被顶至最高点 | 势能积累 |
| ③ 凸轮回程 | 凸轮突起转离 | 支撑消失 |
| ④ 舂杵下落 | 舂杵在重力作用下砸入臼中 | 势能 → 动能 → 冲击力 |
| ⑤ 循环重复 | 凸轮继续旋转，下一轮舂捣开始 | 连续旋转 → 间歇冲击 |

>  **核心原理：凸轮机构是将连续旋转运动转化为间歇往复直线运动的最经典机械结构之一。**

### 舂米机（水碓）

舂米机，中国古代称"碓"（duì），最早是一种人力脚踏的脱壳工具——人踩踏板使碓头抬起，松脚后碓头砸入石臼中舂捣谷物。**西汉末年**（约公元1世纪），中国人发明了**水碓**——利用水流冲击水轮，水轮轴上的拨板间断拨动碓杆，实现自动舂米。三国时期（公元260–270年），杜预发明**连机碓**，一个水轮可同时驱动4–12个碓头工作，效率提高十倍以上。

---

## 连接示意图

如下图所示，将micro:bit主板插入Jacdac扩展板，用连接线将舵机模块连接在Jacdac扩展板金手指接口上。

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

![程序截图](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case02/jacdac-energypractice-kit%2BProgram%2BCase02.png)

---

## 参考程序链接

[https://makecode.microbit.org/_R8wF0r2ktJR5](https://makecode.microbit.org/_R8wF0r2ktJR5)

你也可以通过以下网页直接下载程序，下载完成后即可开始运行程序。
<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_R8wF0r2ktJR5"
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

按下micro:bit主板的**按键A**，360°积木舵机以全速旋转驱动凸轮机构，舂杵开始上下往复舂捣，模拟水碓开始工作；按下**按键B**，积木舵机停止转动，舂杵停止舂捣，模拟关闭水闸、水车停转。

---

## 思考

1. 除了舂米，凸轮机构在生活中还有哪些应用？（提示：观察缝纫机、发动机气门）
2. 如果想让舂杵的下落更有力，可以怎样改进凸轮的形状？

---

## 程序逻辑说明

| 触发条件 | 动作 | 来源 |
|---|---|---|
| 按下按键A | 360°积木舵机以全速（-100）旋转，驱动凸轮机构，舂杵开始上下往复舂捣 | micro:bit 按键A |
| 按下按键B | 360°积木舵机停止转动，舂杵停止舂捣 | micro:bit 按键B |

---

## 知识拓展：从人力舂米到水力自动化——粮食加工的千年进化

### 一、一粒米的旅程——人类为什么要"舂米"

稻谷从田间收割后并不能直接食用。每粒稻谷外面包裹着一层坚硬的**谷壳（稻壳）**，需要将其去除才能得到可食用的大米。在没有机器的古代，人类最早用石头砸、用木棒捣，后来发明了**杵臼**（chǔ jiù）——一个石臼配一根木杵，手动上下捶打脱壳。

| 加工方式 | 出现年代 | 效率（每人/天） | 劳动强度 |
|---|---|---|---|
| 石砸/手剥 | 新石器时代（约1万年前） | 约5–10公斤 | 极高 |
| 杵臼（手持） | 约5000年前 | 约15–20公斤 | 很高 |
| 脚踏碓 | 战国时期（约公元前400年） | 约50–80公斤 | 较高 |
| 水碓（单碓） | 西汉末年（约公元1世纪） | 约150–300公斤 | 极低（自动化） |
| 连机碓（4–12头） | 三国时期（公元260年） | 约600–3600公斤 | 极低（自动化） |
| 现代碾米机 | 19世纪末至今 | 每小时数吨 | 零（全自动） |

>  从杵臼到连机碓，效率提升了**300倍以上**。水碓是人类历史上最早实现"生产自动化"的伟大发明之一。

---

### 二、水碓——古代中国的"智能工厂"

水碓被誉为古代最精巧的水力机械之一，它集成了三项核心技术：

```
                         ┌─────────────────────────┐
                         │      水碓系统结构        │
                         └──────────┬──────────────┘
            ┌───────────────────────┼───────────────────────┐
            ▼                       ▼                       ▼
    ┌───────────────┐     ┌───────────────┐     ┌───────────────┐
    │   动力部分     │     │   传动部分     │     │   工作部分     │
    │   （水轮）     │ ──► │  （横轴+拨板）  │ ──► │  （碓杆+碓头） │
    └───────────────┘     └───────────────┘     └───────────────┘
    水流冲击水轮旋转       横轴上的拨板间断       拨板压下碓杆尾端
    势能→动能             拨动碓杆                碓头抬起→自由下落
    （自然力输入）         （旋转→往复转换）       （冲击做功）
```

| 技术要素 | 对应原理 | 本案例中的实现 |
|---|---|---|
| 水轮旋转 | 水力→旋转动能 | 360°积木舵机旋转 |
| 拨板/凸轮 | 旋转→往复直线运动 | 凸轮机构 |
| 碓头舂捣 | 重力下落冲击 | 凸轮推程后的自由回落 |
| 水流大小控制转速 | 输入能量调节 | 麦克风声音值→转速映射 |

---

### 三、水碓对古代社会的影响

- **人口增长支撑**：南朝时期，水碓普及使粮食加工效率大幅提升，支撑了江南地区人口快速增长。据史料记载，仅洛阳附近的谷水流域，鼎盛时期就建有水碓**数十座**。
- **米价下降**：西晋文献记载，水碓推广后洛阳地区米价下降约**三成**，普通百姓的生活成本显著降低。
- **用途扩展**：水碓不仅用于舂米，还被用于捣碎药材、研磨香料、舂瓷土（制瓷原料）、捣纸浆（造纸原料）、粉碎矿石等，堪称古代的"万能粉碎机"。
- **传承至今**：浙江苍南碗窑村在鼎盛时期建有上百座水碓用于舂瓷土；福建、江西、湖南等地的山区，直到**20世纪90年代**仍有水碓在正常使用。

---

### 四、从水碓看人类对水能的智慧应用

| 时期 | 水能利用方式 | 代表发明 |
|---|---|---|
| 公元前4000年 | 水流运输 | 古埃及尼罗河帆船 |
| 公元前1世纪 | 水力提水 | 古希腊阿基米德螺旋泵 |
| 公元1世纪 | 水力舂米 | 中国水碓 |
| 公元1世纪 | 水力研磨 | 古希腊/罗马水磨 |
| 公元3世纪 | 水力鼓风 | 中国水排（冶铁鼓风） |
| 公元3–4世纪 | 水力纺纱 | 中国水力大纺车 |
| 19世纪末 | 水力发电 | 世界上第一座水电站（美国威斯康星州，1882年） |
| 21世纪 | 抽水蓄能/潮汐能 | 三峡水电站（22,500 MW）、海上潮汐电站 |

截至2024年，水电仍是全球最大的可再生电力来源，占全球发电量的约**14.3%**，为超过**10亿**人口提供清洁电力。而这一切的源头，可以追溯到两千年前中国古人面对一条小溪时闪现的灵感："何不让流水替人来舂米？"

---

### 五、循环——从机械到程序

水碓的工作节奏体现了"循环"的深刻智慧：

| | 机械循环（水碓） | 程序循环（本案例代码） |
|---|---|---|
| **动力源** | 水流持续冲击水轮 | 循环积木块反复执行代码 |
| **重复单元** | 水轮一圈 = 舂杵一次舂捣 | 循环一次 = 读取声音+调节转速 |
| **调节机制** | 水量大→水轮快→舂捣频率高 | 按键A按下→舵机全速转→舂捣频率高 |
| **停止条件** | 关闭水闸阻断水流 | 按键B按下→舵机停止 |

>  **思考：** 古代工匠用机械实现了"自动化循环"，今天的程序员用代码实现"程序循环"。两千年的技术进步，背后是同一套逻辑：**发现重复 → 构建循环 → 持续优化**。你正在编写的这段舂米机程序，延续的就是这份跨越千年的工程智慧。

---
