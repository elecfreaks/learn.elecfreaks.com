# 案例八：石油磕头机

---

## 简介

按下micro:bit主板的**按键A**，舵机开始往复转动，模拟石油磕头机（游梁式抽油机）的工作状态；按下micro:bit主板的**徽章（Logo）**，舵机停止转动。

---

## 案例目的

1. 认识舵机模块。
2. 认识MakeCode中的按键A模块与按徽章模块。
3. 了解什么是石油。

---

## 所需材料

| 项目 | 图片 | 数量 |
|---|---|---|
| micro:bit V2 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/microbit%20%E6%AD%A3(1).png) | 1 |
| Jacdac扩展板 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20bit.png) | 1 |
| Jacdac 10cm连接线 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac-smart-exploration-kit-10cm-cable.png) | 2 |
| 舵机模块 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20Servo.png) | 1 |
| USB数据线 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/usb%20cable1.png) | 1 |

---

## 传感器原理说明

*本案例未使用新的外接传感器模块，通过micro:bit主板自带的按键A和徽章Logo即可完成控制。*

---

## 搭建步骤

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case01/nezha-pro-ocean-kit-step-01-1.png.pdf" type="application/pdf" width="100%" height="600px" />

---

## 模型原理说明

### 舵机模块（360°连续旋转舵机）

![舵机模块](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smart-exploration-kit/images/sensor/Jacdac%20Servo-1.png)

舵机模块（360°连续旋转舵机）：是一种可以360°连续旋转的电机模块，通过控制信号调节旋转速度和方向，而非像普通舵机那样固定在某个角度。常用于驱动机器人车轮、传送带、模拟机械往复运动等场景。

### 石油磕头机

![石油磕头机](placeholder-oil-pump.png)

石油磕头机（游梁式抽油机）是油田采油的主要设备之一，通过电动机驱动，带动游梁上下往复摆动，从而带动抽油杆将地下的石油抽取到地面。因其外形动作类似"磕头"而得名。

> 💡 **小知识：** 石油是一种深埋地下的化石燃料，由古代生物遗体经过数百万年的地质作用形成，被称为"工业的血液"，是汽油、柴油、塑料、化纤等产品的重要原料。

---

## 连接示意图

如下图所示，将micro:bit主板插入Jacdac扩展板，用连接线将舵机模块采用**菊花链方式**连接在Jacdac扩展板金手指接口上。

![连接示意图](placeholder-connection-diagram.png)

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

   > **⚠️ 注意：** 若micro:bit主板初次运行Jacdac程序，请先预装一个空白Jacdac程序至主板，否则跳过此步骤。

   ![连接micro:bit](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/jacdac-smart-exploration-kit-5.png)

2. 连接传感器，MakeCode自动识别并仿真呈现，在仿真区内传感器实时反馈传感器状态。

   ![传感器仿真](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/1jacdac-smart-exploration-kit-6.png)

3. 点击 **"ADD BLOCKS"** 传感器扩展模块。

   > **⚠️ 注意：** 连接新的传感器，重复执行一次"点击'ADD BLOCKS'传感器扩展模块"操作流程。

   ![ADD BLOCKS](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/jacdac-smart-exploration-kit-7.png)

---

## 如图所示编写程序

![程序截图](placeholder-program-screenshot.png)

---

## 参考程序链接

📎 [待补充程序链接]()

你也可以通过以下网页直接下载程序，下载完成后即可开始运行程序。

---

## 结果

按下micro:bit主板的**按键A**，舵机开始正转与反转交替运行，模拟石油磕头机上下往复运动的工作状态；按下micro:bit主板的**徽章（Logo触摸键）**，舵机停止转动。

---

## 思考

1. 舵机还可以应用在生活中的哪些场景？
2. 除了石油磕头机，你还知道哪些石油开采设备？

---

## 程序逻辑说明

| 触发条件 | 动作 | 来源 |
|---|---|---|
| 按下按键A | 舵机正转 → 延时 → 反转 → 延时，循环往复 | micro:bit V2 按键A |
| 按下徽章Logo | 舵机停止转动 | micro:bit V2 徽章触摸键 |

---

## 知识拓展：石油与我们的未来

### 一、石油——现代文明的"血液"

石油不仅仅是汽油和柴油的来源，它深刻渗透在现代生活的每一个角落：

| 石油制品 | 日常用途 |
|---|---|
| 汽油、柴油、航空煤油 | 汽车、卡车、飞机、轮船的燃料 |
| 塑料（聚乙烯、聚丙烯等） | 手机外壳、文具、玩具、包装袋、水管 |
| 化纤（涤纶、腈纶、尼龙） | 衣物、书包、运动鞋、地毯 |
| 化肥、农药 | 农业生产，保障粮食供应 |
| 沥青 | 公路、机场跑道铺设 |
| 合成橡胶 | 轮胎、密封圈、鞋底 |
| 药品、化妆品 | 阿司匹林、凡士林、口红、洗发水 |

> 📊 **数据说话：** 2024年，全球每天消耗约 **1.03亿桶** 石油，全年消耗约 **374亿桶**。自1900年以来，人类已累计开采约 **1.57万亿桶** 石油。石油占全球化石燃料碳排放的 **32%**，仅次于煤炭（41%）。

---

### 二、我们面临的真实现状与挑战

#### 🔴 挑战一：资源终将枯竭

| 关键数据 | 数值 |
|---|---|
| 全球已探明石油储量 | 约 **1.73万亿桶** |
| 按目前速度可开采年限 | 约 **47年** |
| 中国石油对外依存度（2024年） | **71.9%** |
| 中国全年原油进口量 | **5.53亿吨** |

这意味着：按照目前的消耗速度，已探明的石油储量大约只够用到 **2070年前后**。虽然技术进步会不断发现新油田，但勘探难度越来越大、成本越来越高。对中国而言，超过70%的石油依赖进口，能源安全形势严峻。

#### 🔴 挑战二：气候与环境危机

- **2024年全球化石燃料碳排放达到374亿吨，创历史新高**，同比增长0.8%。
- 石油开采过程中的泄漏事故（如海上钻井平台溢油）对海洋生态造成毁灭性打击。
- 塑料污染触目惊心：全球每年约 **800万吨** 塑料流入海洋，相当于每分钟向大海倾倒一卡车的塑料垃圾。
- 石油化工生产过程中排放的废水、废气威胁着水源和空气质量。

#### 🔴 挑战三：地缘政治与能源安全

石油资源分布极不均匀，中东地区（沙特阿拉伯、伊拉克、科威特等）拥有全球近一半的探明储量。一旦产油地区发生战争或政治动荡，全球油价就会剧烈波动，直接影响到每个国家的经济发展和每个人的生活成本。

---

### 三、希望的曙光——能源转型进行时

面对挑战，全球正在加速拥抱清洁能源。**好消息是，变革已经发生：**

#### 🟢 太阳能：增长最快的能源

| 年份 | 全球新增太阳能装机 | 累计装机 |
|---|---|---|
| 2024年 | **582 GW** | **2.25 TW（2.25万亿瓦）** |
| 2025年 | **647 GW** | **约2.9 TW** |

- 2024年全球太阳能发电量达到 **2,132 TWh**，占全球电力的 **6.9%**。
- 太阳能组件价格在过去一年暴跌约 **45%**，降至每瓦仅约 **0.10美元**。
- **99个国家** 在过去五年中太阳能装机翻倍，**23个国家** 太阳能发电占比已超过10%（匈牙利以25%领先全球）。
- **中国** 2025年新增太阳能装机 **378 GW**，装机总量提前六年完成了2030年风光总装机目标。

#### 🟢 风能：强势反弹

- 2025年全球新增风电装机 **167 GW**，同比增长 **47%**，累计装机约 **1,300 GW**。
- 2024年全球风电发电量达 **2,494 TWh**，占全球电力的 **8.1%**。
- 风能与太阳能合计，2024年为全球贡献了 **31.9%** 的电力（含水电等全部可再生能源）。

#### 🟢 电动汽车：改写石油需求

- 中国成品油消费在2024年首次出现下降（↓1.7%），这是一个**历史性拐点**。
- 新能源汽车大规模普及，正从根源上减少交通领域对石油的依赖。
- 中国石油对外依存度从高位首次回落0.5个百分点，标志着能源转型初见成效。

---

### 四、我们应该怎么做

面对石油资源枯竭和环境危机的双重挑战，每个人都可以贡献力量：

| 行动方向 | 具体做法 |
|---|---|
| **节约能源** | 随手关灯、合理设置空调温度（夏季不低于26℃）、优先选择公共交通或骑行步行 |
| **减少塑料使用** | 自带水杯、购物袋，拒绝一次性塑料制品，做好垃圾分类 |
| **支持新能源** | 了解太阳能、风能、氢能等清洁能源知识，向身边的人宣传环保理念 |
| **培养科学兴趣** | 认真学习科学知识，未来投身能源技术、环境保护等领域的创新研究 |
| **践行低碳生活** | 节约用纸、光盘行动、旧物回收利用，每一个小习惯都能减少碳足迹 |

> 💡 **思考：** 石油给了我们现代文明，但它的时代终将过去。未来的能源世界，将由你们这一代人亲手塑造。你今天学到的每一个编程积木、每一个传感器原理，都可能成为明天改变世界的起点。

---

> 📚 *数据来源：IEA全球能源评论2025、全球碳预算2024、REN21全球可再生能源报告2025、Ember全球电力评论、中国石油集团经济技术研究院《2024年油气行业发展报告》*

---

> 📝 *此文档基于 ELECFREAKS WIKI 原始内容生成，保留了基本框架，可自由修改调整。*
