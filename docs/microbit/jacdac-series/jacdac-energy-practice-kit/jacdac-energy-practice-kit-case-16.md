---
sidebar_position: 16
sidebar_label: 案例十六：智能土壤湿度装置
---

# 案例十六：智能土壤湿度装置

---

## 简介

利用**Jacdac土壤湿度传感器**实时检测土壤含水量。通过**Jacdac LED灯环**的颜色和亮度直观表示土壤湿度状态：**红灯高亮（100%）**=土壤干燥急需浇水（湿度<20）；**蓝灯中亮（80%）**=土壤偏干（湿度20 ~ 50）；**绿灯低亮（60%）**=土壤湿润适宜（湿度50 ~ 70）；**灯灭**=土壤过湿（湿度>70）。一个简单的三色指示器，让浇水不再靠猜。

---

## 案例目的

1. 理解**多阈值分级判断**（if-elif-elif-else）——根据数值落入的不同区间执行不同动作。
2. 学习**LED颜色编码**——用红/蓝/绿三色直观传递"干/中/湿"信息。
3. 了解**精准灌溉**在现代农业中的节水意义。

---

## 所需材料

| 项目 | 图片 | 数量 |
|---|---|---|
| micro:bit V2 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/microbit%20%E6%AD%A3(1).png) | 1 |
| Jacdac扩展板 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20bit.png) | 1 |
| Jacdac 25cm连接线 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac-smart-exploration-kit-25cm-cable.png?x-oss-credential=LTAI5t9aG6u4N7PfV6n23XUj%2F20260723%2Fcn-hongkong%2Foss%2Faliyun_v4_request&x-oss-date=20260723T103530Z&x-oss-expires=3600&x-oss-signature-version=OSS4-HMAC-SHA256&x-oss-signature=7a743de279279e3155a0804920c1b4e13b8cf452b8e1c49c3d6b2b97d8496c2e) | 1 |
| Jacdac 土壤湿度传感器 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Sensor/Jacdac%20Moisture.png?x-oss-credential=LTAI5t9aG6u4N7PfV6n23XUj%2F20260730%2Fcn-hongkong%2Foss%2Faliyun_v4_request&x-oss-date=20260730T070857Z&x-oss-expires=3600&x-oss-signature-version=OSS4-HMAC-SHA256&x-oss-signature=76e60b19c37a958cfc83165846ecee1803f392c1410e3919a3ddcb2dc73ae5d3) | 1 |
| Jacdac LED灯环 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20LED%20Ring.png) | 1 |
| USB数据线 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/usb%20cable1.png) | 1 |

---

## 传感器原理说明

### 土壤湿度传感器

Jacdac土壤湿度传感器通过测量土壤的**介电常数**（或电阻率）来推算含水量。水分子是极性分子，含水量越高，土壤的介电常数越大（或电阻率越低）。传感器将这一物理量转化为模拟数值输出。

| 湿度范围 | 土壤状态 | LED指示 | 建议 |
|---|---|---|---|
| 0~20 | 干燥 | 红灯 亮度100% |  急需浇水！ |
| 20~50 | 偏干 | 蓝灯 亮度80% |  可以适当浇水 |
| 50~70 |  湿润 | 绿灯 亮度60% | 湿度适宜，无需浇水 |
| 70+ |  过湿 | 灯灭 | 停止浇水，防止烂根 |

> 大多数植物的根系适宜含水量在**50%~70%**之间。低于50%开始缺水胁迫，高于80%则根系缺氧、可能烂根。精确控制土壤湿度是农业灌溉中最关键的环节。

---

## 搭建步骤

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case16/jacdac-energypractice-kit%2BAssembly%20Diagram%2BCase16.pdf" type="application/pdf" width="100%" height="600px" />

---

## 模型原理说明

### 土壤湿度传感器——植物的"口渴计"

传统种植中，人们用手指插入土壤判断干湿——粗糙且不精确。土壤湿度传感器相当于植物的"电子口渴计"：

| 传统方法 | 传感器方法 |
|---|---|
| 手指试探，主观判断 | 精确数值，客观量化 |
| 每天只能检查几次 | 24小时持续监测 |
| 只能判断表层 | 可测量根系深度湿度 |
| 无法记录历史 | 可连接物联网长期追踪 |

本案例将传感器读数转化为三色LED直观显示——红灯停（缺水）、绿灯行（适宜）、蓝灯提醒（偏干需要关注）——就像交通信号灯一样简单易懂。

---

## 连接示意图

如下图所示，将micro:bit主板插入Jacdac扩展板，用连接线将土壤湿度传感器和LED灯环连接在Jacdac扩展板金手指接口上。

![连接示意图](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/%E7%A1%AC%E4%BB%B6%E8%BF%9E%E7%BA%BF%E5%9B%BE/micro%EF%BC%9Abit%20%2B%E5%9C%9F%E5%A3%A4%2BLED.png?x-oss-credential=LTAI5t9aG6u4N7PfV6n23XUj%2F20260730%2Fcn-hongkong%2Foss%2Faliyun_v4_request&x-oss-date=20260730T080921Z&x-oss-expires=3600&x-oss-signature-version=OSS4-HMAC-SHA256&x-oss-signature=24175d7c5f434ac1efa21eeb91f789d2714b573cd8886fa35531c5b09b7db318)

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

   > ** 注意：** 若micro:bit主板初次运行Jacdac程序，请先预装一个空白Jacdac程序至主板，否则跳过此步骤。

   ![连接micro:bit](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/jacdac-smart-exploration-kit-5.png)

2. 连接传感器，MakeCode自动识别并仿真呈现，在仿真区内传感器实时反馈传感器状态。

   ![传感器仿真](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/1jacdac-smart-exploration-kit-6.png)

3. 点击 **"ADD BLOCKS"** 传感器扩展模块。

   > **注意：** 连接新的传感器，重复执行一次"点击'ADD BLOCKS'传感器扩展模块"操作流程。

   ![ADD BLOCKS](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/jacdac-smart-exploration-kit-7.png)

---

## 如图所示编写程序

![程序截图](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case16/jacdac-energypractice-kit%2BProgram%2BCase16.png)

---

## 参考程序链接

📎[https://makecode.microbit.org/_0JXiAC5rCeYd](https://makecode.microbit.org/_0JXiAC5rCeYd)

你也可以通过以下网页直接下载程序，下载完成后即可开始运行程序。
<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_0JXiAC5rCeYd"
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

将土壤湿度传感器的探头**插入干燥土壤**中，LED灯环**亮红色（亮度100%）**——"缺水！需要浇水"。缓慢向土壤中加水，湿度值逐渐上升，LED从红色变为**蓝色（亮度80%）**——"土壤正在吸水"。继续加水至适宜湿度，LED变为**绿色（亮度60%）**——"湿度正好"。如果加水过多，LED**熄灭**——"太湿了，停止浇水！"。整个过程不需要看任何数字，光凭LED颜色就能判断土壤状态。

---

## 思考

1. 除了LED灯环颜色，还可以用什么方式来表示土壤湿度？（提示：声音、micro:bit 5×5 LED矩阵显示表情）
2. 如果要把这个装置变成真正的"自动浇水系统"，还需要增加什么执行器？

---

## 程序逻辑说明

| 触发条件 | 动作 | 来源 |
|---|---|---|
| 土壤湿度 < 20（干燥） | LED灯环亮红色，亮度100%——急需浇水警告 | Jacdac 土壤湿度传感器 |
| 土壤湿度 20~50（偏干） | LED灯环亮蓝色，亮度80%——偏干，可适当浇水 | Jacdac 土壤湿度传感器 |
| 土壤湿度 50~70（适宜） | LED灯环亮绿色，亮度60%——湿度适宜 | Jacdac 土壤湿度传感器 |
| 土壤湿度 > 70（过湿） | LED灯环熄灭——过湿警告，停止浇水 | Jacdac 土壤湿度传感器 |

---

## 知识拓展：从"手摸"到"电子感知"——精准灌溉革命

### 一、全球水危机与农业用水

农业是全球最大的淡水消耗者，占人类淡水取用量的约**70%**。然而，传统灌溉方式中约有**50%~60%**的水因蒸发、渗漏和径流而浪费，从未真正到达植物根部。

| 灌溉方式 | 水利用效率 | 适用场景 |
|---|---|---|
| 大水漫灌 | 30%~40% | 传统农业 |
| 喷灌 | 60%~70% | 大面积农田 |
| 滴灌 | 90%~95% | 温室、果园、高价值作物 |
| **传感器精准灌溉** | **95%+** | **智能温室、垂直农场** |

>  中国农业用水占总用水量的约**62%**，但灌溉水有效利用系数仅为**0.57**（以色列为0.87）。如果全面推广传感器精准灌溉，中国每年可节水**数百亿立方米**——相当于**南水北调中线工程年调水量的数倍**。

### 二、if-elif-else——多级分类的编程范型

本案例的四级湿度判断（if-elif-elif-else）是多级分类思维的编程体现：

```
if 湿度 < 20: 红灯 → 干燥
elif 湿度 < 50:  蓝灯 → 偏干
elif 湿度 < 70:  绿灯 → 适宜
else:  灭灯 → 过湿
```

这一结构在生活中有无数应用：

| 应用场景 | 分类依据 | 多级输出 |
|---|---|---|
| 成绩等级 | 分数 | 90+优秀/80+良好/60+及格/<60不及格 |
| 天气预报 | 温度 | 高温红色/橙色/黄色预警 |
| 空气质量 | AQI指数 | 优/良/轻度/中度/重度/严重污染 |
| 手机电量 | 百分比 | 100%绿色/20%黄色/10%红色闪烁 |

### 三、土壤湿度——不只是浇水那么简单

植物根系需要空气和水分的微妙平衡。土壤过干，根系无法吸收水分和养分；土壤过湿，根系缺氧导致烂根。不同植物对土壤湿度的需求完全不同：

| 植物类型 | 适宜湿度范围 | 浇水频率 |
|---|---|---|
| 仙人掌/多肉 | 20%~40% | 每周一次或更少 |
| 番茄/辣椒 | 50%~70% | 每1~2天 |
| 水稻 | 80%~100%（淹水） | 持续淹水 |
| 兰花 | 40%~60%（透气） | 每3~5天 |

>  **思考：** 土壤湿度传感器返回的数值（0~100或0~255）并不是真实的土壤含水百分比，而是传感器输出的**相对值**。在真实应用中，需要通过"烘干称重法"等标准方法进行**标定**，才能将传感器读数转化为准确的土壤含水量百分比。标定，是所有传感器工程中不可或缺的关键步骤。

---
