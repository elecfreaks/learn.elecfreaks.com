# 案例二：水力发电

---
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Jacdac%E8%83%BD%E6%BA%90%E5%AE%9E%E8%B7%B5%E5%A5%97%E4%BB%B6/3.%E9%A3%8E%E5%8A%9B%E5%8F%91%E7%94%B5.jpg)
---

## 简介

对着micro:bit主板**说话、拍手或制造声音**——声音越大，LED灯环越亮、360°积木舵机驱动水轮发电机转速越快，模拟水流越湍急、发电功率越高；声音越小，LED越暗、舵机越慢；完全安静时LED熄灭、舵机停止，模拟水枯停机。声音代表了"水流的力量"。

---

## 案例目的

1. 认识**水力发电站**，了解其将水的势能转化为电能的基本原理。
2. 理解**能量转换链条**——水的势能→水的动能→水轮机旋转动能→发电机电磁感应→电能。
3. 了解水力发电的**优点与缺点**，建立对可再生能源的全面认知。

---

## 所需材料

| 项目 | 图片 | 数量 |
|---|---|---|
| micro:bit V2 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/microbit%20%E6%AD%A3(1).png) | 1 |
| Jacdac扩展板 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20bit.png) | 1 |
| Jacdac 10cm连接线 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac-smart-exploration-kit-10cm-cable.png) | 1 | 
| Jacdac 25cm连接线 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac-smart-exploration-kit-25cm-cable.png) | 1 |
| Jacdac舵机模块 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Sensor/Jacdac%20Servo.png) | 1 |
| Jacdac灯环 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20LED%20Ring.png) | 1 |
| 360°积木舵机 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Sensor/img_v3_0213q_cfc7e5b2-67bb-45ac-856e-d875221271ag.png) | 1 |
| USB数据线 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/usb%20cable1.png) | 1 |

---

## 传感器原理说明

本案例使用micro:bit主板内置的麦克风作为传感器，实时采集环境声音响度（0~255），将其映射为舵机转速和LED灯环亮度。

## 搭建步骤

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case03/jacdac-energypractice-kit%2BAssembly%20Diagram%2BCase03.pdf" type="application/pdf" width="100%" height="600px" />

---

## 模型原理说明

### 360°积木舵机模块与水轮发电机模型

360°积木舵机提供连续旋转动力，安装在水轮发电机模型的中心轴上。舵机旋转时带动水轮叶片转动，模拟水流冲击水轮机旋转、进而驱动发电机发电的过程。舵机转速对应"水流大小"——转速越快，代表水流越湍急、发电功率越高。

### 水力发电站——大坝的能量密码

水力发电站的核心原理是利用**水的落差**来发电。水从高处流向低处时，蕴含的**重力势能**转化为**动能**——这股高速水流冲击水轮机叶片使其旋转，水轮机再带动发电机，通过**电磁感应**将旋转动能转化为电能。整个过程不燃烧任何燃料，零碳排放。

>  **关键公式：** 水力发电功率 ≈ 水的密度 × 重力加速度 × 水流量 × 水头高度。水头（落差）越高、流量越大，发电功率就越大。一个100米高的水头，每吨水落下可发电约0.27度。

---

## 连接示意图

如下图所示，将micro:bit主板插入Jacdac扩展板，用连接线将舵机模块与LED灯环采用**菊花链方式**连接在Jacdac扩展板金手指接口上。

![连接示意图](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/%E7%A1%AC%E4%BB%B6%E8%BF%9E%E7%BA%BF%E5%9B%BE/micro%EF%BC%9Abit%20%2B%E8%88%B5%E6%9C%BA%E6%A8%A1%E5%9D%97%2B%E8%88%B5%E6%9C%BA%2BLED.png)

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

![程序截图](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case03/jacdac-energypractice-kit%2BProgram%2BCase03.png)

---

## 参考程序链接

 [https://makecode.microbit.org/_1gAhi03bcemx](https://makecode.microbit.org/_1gAhi03bcemx)

你也可以通过以下网页直接下载程序，下载完成后即可开始运行程序。
<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_1gAhi03bcemx"
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

声音响度实时关联——声音越大，360°积木舵机转速越快、Jacdac灯环越亮；声音越小，360°积木舵机转速越慢、Jacdac灯环越暗，模拟水力发电站。

---

## 思考

1. 水力发电和水车提水（筒车案例）都利用了水的力量，它们有什么不同？
2. 如果你生活的地方没有大河，还能用哪些方式发电？

---

## 程序逻辑说明

| 触发条件 | 动作 | 来源 |
|---|---|---|
| 检测声音大小 | 360°积木舵机以映射值的速度旋转，驱动水轮发电机；LED灯环亮度随声音大小变化 | micro:bit 声音传感器 |

---

## 知识拓展：水力发电——从一滴水到一座城市的光明

### 一、水的能量从哪来——能量转换的科

一滴水从几百米高的水库落下，到底经历了什么？下面是水力发电中完整的能量转换链条：

```
太阳辐射          蒸发水汽         云层降水          高山水库
（核聚变能）  →   （热能）    →   （重力势能）  →   （重力势能储存）
                                                         ↓
                                                   水从高处落下
                                                         ↓
                                                    水的动能
                                                   （高速水流）
                                                         ↓
                                                 冲击水轮机叶片
                                                         ↓
                                                  水轮机旋转动能
                                                   （机械旋转）
                                                         ↓
                                                 发电机电磁感应
                                                 （切割磁力线）
                                                         ↓
                                                      电能
                                                   （千家万户）
```

| 转化阶段 | 能量形式变化 | 在哪里发生 | 效率 |
|---|---|---|---|
| 阶段一 | 重力势能 → 水的动能 | 压力管道（水从大坝高处冲下） | 约95% |
| 阶段二 | 水的动能 → 旋转动能 | 水轮机（水流冲击叶片旋转） | 约90~95% |
| 阶段三 | 旋转动能 → 电能 | 发电机（转子切割磁力线） | 约95~98% |
| **综合效率** | | | **约85~92%** |

 水力发电的综合能量转换效率高达 **85%~92%**，是所有发电方式中最高的之一。作为对比：火力发电约35%~45%，太阳能光伏约15%~22%，风力发电约35%~45%。一吨水从100米高处落下，理论上可发电约0.27度——足以让一盏LED灯连续亮10小时。

---

### 二、水力发电站是怎么建起来的

一座大型水力发电站通常包含以下核心组成部分：

```
                            ┌─────────────────────────────┐
                            │      水力发电站剖面图        │
                            └─────────────┬───────────────┘
                                          │
    ┌─────────┐    ┌─────────┐    ┌───────┴───────┐    ┌──────────┐
    │ 水库     │    │ 大坝     │    │  发电厂房      │    │ 输电线路  │
    │(Reservoir)│   │ (Dam)   │    │(Powerhouse)   │    │(Transmission)│
    └────┬────┘    └────┬────┘    └───────┬───────┘    └─────┬────┘
         │              │                 │                  │
    储存水量        拦截河水          水轮机+发电机       输送到电网
    提供水头        形成落差          将水能→电能         千家万户
```

| 组成部分 | 功能 | 有趣的事实 |
|---|---|---|
| **水库** | 储存大量水，提供稳定的水头和流量 | 三峡水库总库容**393亿立方米**，相当于2800个西湖 |
| **大坝** | 拦截河水，形成水位落差 | 三峡大坝高**181米**，长约**2.3公里**，相当于60层楼高 |
| **压力管道** | 将水库高处的水引导至低处的水轮机 | 水流速度可达每秒数十米，冲击力极强 |
| **水轮机** | 将水流动能转化为旋转机械能 | 单个水轮机转轮直径可达**10米以上**，重达数百吨 |
| **发电机** | 利用电磁感应将旋转动能转化为电能 | 三峡单台发电机功率**700 MW**，一台就够一个中型城市用电 |
| **尾水管** | 将做完功的水排回下游河道 | 保证下游河流生态不断流 |

---

### 三、全球水电——数据中的巨人

| 关键数据 | 数值 |
|---|---|
| 2024年全球水电总装机 | **1,283 GW（12.83亿千瓦）** |
| 2024年全球水电发电量 | 约**4,200 TWh**，占全球电力约**14.3%** |
| 水电全球发电成本 | 约**0.057美元/度**（最低的可再生能源之一） |
| 全球最大水电站 | **中国三峡水电站**，装机**22.5 GW**，年发电约**800~1,000亿度** |
| 水电使用国家数 | **134个**国家拥有水电资源 |
| 全球最老仍运行的水电站 | 部分超过**100年**（水电站寿命极长） |
| 中国水电装机 | 超过**420 GW**，连续多年全球第一 |

| 排名 | 国家 | 水电装机容量 | 占本国电力比例 |
|---|---|---|---|
| 1 | 中国 | ~420 GW | 约16% |
| 2 | 巴西 | ~110 GW | 约63% |
| 3 | 美国 | ~102 GW | 约6% |
| 4 | 加拿大 | ~83 GW | 约60% |
| 5 | 俄罗斯 | ~56 GW | 约17% |

> 在**巴西、加拿大、挪威、委内瑞拉**等国，水电占全国电力的一半以上。挪威几乎**100%**的电力来自水力发电，是世界上最"水"的国家。

---

### 四、水力发电的AB面——没有完美的能源

####  优点

| 优点 | 说明 |
|---|---|
| **转化效率极高** | 85%~92%，远超火电（~40%）和光伏（~20%） |
| **零碳排放运行** | 发电过程不燃烧任何化石燃料，不排温室气体 |
| **可调度/响应快** | 水电机组可在数分钟内从停机达到满功率，远快于火电和核电，适合调峰 |
| **寿命极长** | 大坝和水电站可使用**50~100年**，长期投资回报极高 |
| **运营成本低** | 建成后"燃料"免费（水从天上来），运维成本远低于火电 |
| **多功能综合利用** | 同一座大坝可同时承担：发电、防洪、灌溉、供水、航运、旅游、养殖 |

三峡工程除了发电，还使长江中下游防洪标准从**"十年一遇"提高到"百年一遇"**，保护了约1,500万人口的安全。

#### 缺点

| 缺点 | 说明 | 真实案例 |
|---|---|---|
| **淹没大片土地** | 水库蓄水会淹没上游农田、森林、村镇甚至古城 | 三峡水库淹没面积**1,084平方公里**，约等于深圳全市面积的一半 |
| **人口迁移** | 全球因建坝被迫迁移的人口估计高达**8,000万** | 三峡工程移民约**130万人**，是人类历史上最大规模的水库移民 |
| **生态破坏** | 大坝阻断鱼类洄游、改变河流水温水质、破坏水生生态 | 长江中华鲟因葛洲坝和三峡大坝阻断洄游通道，已极度濒危 |
| **泥沙淤积** | 泥沙被拦截在库区，下游三角洲失去泥沙补充而退缩 | 埃及阿斯旺大坝建成后，尼罗河三角洲每年退缩数十米 |
| **水库温室气体** | 热带地区淹没的植被腐烂产生甲烷（温室效应是CO₂的25倍） | 部分热带水库在蓄水初期，淹没植被腐烂产生的**甲烷**排放强度较高——但这一现象仅限于特定地区和蓄水初期，并非水电的普遍特征。 |
| **受气候影响** | 干旱导致发电量大幅下降 | 2021年全球干旱使水力发电量下降**0.4%**，部分国家降幅超20% |

 **核心矛盾：** 水电是清洁的——但建坝的过程不"清洁"；水电是绿色的——但淹没的森林也是绿色的。水电是不是真正的"绿色能源"，取决于我们如何在发电效益与生态代价之间找到平衡。

---

### 五、水电的未来——从大坝到"微型水电站"

| 趋势 | 说明 |
|---|---|
| **抽水蓄能** | 用多余电力（如夜间风电）将水抽回高处水库，用电高峰时再放水发电——相当于一个巨大的"水电池"。目前占全球储能的**90%以上** |
| **小型/微型水电** | 不建大坝，利用天然溪流的小落差发电（几十到几千瓦），对生态影响小，适合偏远山区和农村 |
| **老旧水电站改造** | 全球约40%的水电设备已运行超过40年，通过技术改造可提升效率10%~20% |
| **鱼道改进** | 设计更友好的鱼梯和鱼道，帮助洄游鱼类翻越大坝 |
| **环境流量保障** | 强制水电站向下游释放维持生态所需的最小水量，保证河流不断流 |

 **思考：** 你的舵机模型模拟的是水轮机旋转发电，而现实中最大的挑战是——如何在发电的同时，不给河流和生活在河边的人们带来不可逆转的伤害。未来的工程师们，这个难题等着你们来解决。
