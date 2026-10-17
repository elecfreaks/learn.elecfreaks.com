---
sidebar_position: 13
sidebar_label: "案例11：全功能智慧农场 · 云端集成"
description: "整合第 9、10 课：本地自动联动 + 数据上云 + 网页远程控制，形成完整物联网智慧农场。"
---

# 案例11：全功能智慧农场 · 云端集成

## 简介

整合第 9、10 课：本地自动联动 + 数据上云 + 网页远程控制，形成完整物联网智慧农场。

![智能温室搭建完成](./images/case_11_intro.jpg)

## 教学目标

1. 合并本地闭环与云端通信。

2. 理解"自动 + 远程"双模式共存。

## 教学准备

| 图片 | 名称 | 数量 | 备注 |
| --- | --- | --- | --- |
|  | 未来农场套装 | 1 | 含椴木结构件 |
| ![micro:bit](./images/prep_microbit.png) | micro:bit | 1 | 自行准备 |
| ![PC](./images/prep_pc.png) | PC | 1 | 自行准备 |

## 课程引入

单独的功能都会了，今天让它们一起工作：平时自动养护，你在平台还能随时插手。这才是"智慧"农场。

## 项目制作

### 硬件连接

按本课「教学准备」表格把对应模块接到 micro:bit 花瓣扩展板指定接口（J1/J2/J3/J4 或 IIC）。

### 编程平台

图形化编程平台 [MakeCode](https://makecode.microbit.org/)：[https://makecode.microbit.org/](https://makecode.microbit.org/)

### 新建项目

1. 打开 [https://makecode.microbit.org/](https://makecode.microbit.org/)

   ![MakeCode 首页](./images/setup_01_newproject_home.png)

2. 点 **New Project** 新建项目

   ![点击 New Project](./images/setup_02_newproject_click.png)

3. 输入项目名称（如 `smart_farm_11`）并点 **Create**

   ![输入项目名称并点击 Create](./images/setup_03_name_create.png)

### 添加软件库

1. 在 MakeCode 编程界面的 Toolbox 点击 **Extensions**

   ![点击 Extensions](./images/setup_04_extensions.png)

2. 在弹出页面搜索 `petal`

   ![搜索 petal](./images/setup_05_petal_search.png)

3. 选择 petal 软件库（图标带 ELECFREAKS 标识）

### 编写程序

![案例程序图](./images/program-case-11-white.png)



点击下方预览直接查看/运行完整程序；也可点击链接在 MakeCode 编辑器中打开并改造：

<div style={{ position: 'relative', paddingBottom: '60%', overflow: 'hidden' }}>
    <iframe
        title={"案例11：全功能智慧农场 · 云端集成 MakeCode 示例程序"}
        src="https://makecode.microbit.org/_AekceqTebTR5?lang=zh-CN&embed=1"
        frameBorder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{ position: 'absolute', width: '100%', height: '100%' }}
    />
</div>

**MakeCode 分享链接**：[https://makecode.microbit.org/_AekceqTebTR5](https://makecode.microbit.org/_AekceqTebTR5)

> 你也可以通过以下网页直接下载程序到 micro:bit。

### 如何将程序下载到 micro:bit？

1. 使用 USB 线连接 PC 和 micro:bit V2。

![USB 连接 micro:bit](./images/download_01_usb.png)

2. 连接成功后，电脑上会识别出一个名为 `MICROBIT` 的盘符。

![MICROBIT 盘符](./images/download_02_microbit_disk.png)

3. 在 MakeCode 左下角点 `...` → 选择 **Connect Device**。

![点击左下角的 ...](./images/download_03_dots.png)

![选择 Connect Device](./images/download_04_connect_device.png)

4. 在弹窗里点 **Next**。

![Next](./images/download_05_next.png)

5. 在 micro:bit 上按住背面按钮不放，屏幕出现 "PAIRING MODE" 时松开；回到网页点 **Pair**，从列表选 `BBC micro:bit CMSIS-DAP` 后点 **连接**。

![Pair 弹窗](./images/download_06_pair_popup.png)

![Pair 按钮](./images/download_07_pair.png)

![选择 BBC micro:bit CMSIS-DAP](./images/download_08_select_cmsis.png)

![连接成功](./images/download_09_connected.png)

6. 最后点 **Download** 把程序下载到 micro:bit。

![Download 按钮](./images/download_10_button.png)

## 结果

本地自动闭环 + 数据上云 + 网页远程控制三位一体：土壤联动灌溉、光照联动补光、温湿度显示+警报，云端可查可控。

![案例11 效果演示](./images/case_08_result.gif)

## 扩展知识

当感知、控制、网络与决策被拧成一股绳，单体智能便升维为“生态系统”。我们的全功能智慧农场，正是这场集成的缩影。以下从多个维度解析智慧农业生态系统：

一、系统集成的价值

1+1>2：单项技术各自为战价值有限，打通后数据互馈、协同决策，整体效能跃升。

统一入口：一块看板统管灌溉、补光、通风、报警，降低操作负担。

闭环自治：本地自动保底、云端统筹优化，兼顾稳定与智能。

二、智慧农业的产业链

上游：传感器、芯片、通信模块、智能装备制造商。

中游：平台与算法公司，提供数据与决策服务。

下游：种植户、合作社、商超与消费者，共享透明供应链。

政策与金融：补贴、保险、碳交易为生态注入活水。

三、可持续农业的支点

节水节肥：精准投入减少浪费与污染，保护水土。

减碳增收：光伏农业、循环水培降低碳足迹，绿色溢价反哺农户。

韧性供给：本地化、智能化生产增强对冲击的抵御力。

四、政策与标准

国家战略：多国将智慧农业列入粮食安全与乡村振兴核心。

标准建设：数据接口、通信协议、安全规范统一，才能破除孤岛。

试点示范：园区与学校先行，积累可复制模式。

五、全球案例启示

荷兰：以玻璃温室+数据驱动，成为单位面积产出最高的农业强国。

以色列：滴灌与物联网让荒漠变粮仓，技术对外输出。

中国：北斗、5G、无人机规模化应用，走出特色智慧农业路。

总结：智慧农场不是设备的堆砌，而是一套会呼吸、会学习、会协作的生命系统。你集成的这一座微型农场，正映射着人类农业从“靠天”到“知天、用天、顺天”的文明跃迁。
