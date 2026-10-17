---
sidebar_position: 11
sidebar_label: "案例09：数据上云 · 农场实时监测站"
description: "通过 WiFi 模块（J3）配网，把温湿度、土壤、光照定时上传到 SmartIoT 网页平台，实现数据上云与曲线查看。"
---

# 案例09：数据上云 · 农场实时监测站

## 简介

通过 WiFi 模块（J3）配网，把温湿度、土壤、光照定时上传到 SmartIoT 网页平台，实现数据上云与曲线查看。

![智能温室搭建完成](./images/case_09_intro.jpg)

## 教学目标

1. 完成 WiFi 配网 `WiFi模块 J3 连接 WiFi (SSID, 密码)`。

2. 定时 `WiFi模块 J3 上传数据 主题, 内容` 到平台。

## 教学准备

| 图片 | 名称 | 数量 | 备注 |
| --- | --- | --- | --- |
|  | 未来农场套装 | 1 | 含椴木结构件 |
| ![micro:bit](./images/prep_microbit.png) | micro:bit | 1 | 自行准备 |
| ![PC](./images/prep_pc.png) | PC | 1 | 自行准备 |

## 课程引入

数据只在本地点亮屏幕还不够。上传到云端，老师和家长随时在网页看曲线，才是真正的"物联网农场"。

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

3. 输入项目名称（如 `smart_farm_09`）并点 **Create**

   ![输入项目名称并点击 Create](./images/setup_03_name_create.png)

### 添加软件库

1. 在 MakeCode 编程界面的 Toolbox 点击 **Extensions**

   ![点击 Extensions](./images/setup_04_extensions.png)

2. 在弹出页面搜索 `petal`

   ![搜索 petal](./images/setup_05_petal_search.png)

3. 选择 petal 软件库（图标带 ELECFREAKS 标识）

### 编写程序

![案例程序图](./images/program-case-09-white.png)

点击下方预览直接查看/运行完整程序；也可点击链接在 MakeCode 编辑器中打开并改造：

<div style={{ position: 'relative', paddingBottom: '60%', overflow: 'hidden' }}>
    <iframe
        title={"案例09：数据上云 · 农场实时监测站 MakeCode 示例程序"}
        src="https://makecode.microbit.org/S33971-35077-49390-44135?lang=zh-CN&embed=1"
        frameBorder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{ position: 'absolute', width: '100%', height: '100%' }}
    />
</div>

**MakeCode 分享链接**：[https://makecode.microbit.org/S33971-35077-49390-44135](https://makecode.microbit.org/S33971-35077-49390-44135)

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

每隔 5 秒将温湿度、土壤、光照 4 项数据上传到 SmartIoT 平台，可在网页端查看实时曲线。

![案例09 效果演示](./images/case_09_result.gif)

## 扩展知识

物联网（IoT），正把沉默的物变成会说话的节点。我们这节把农场数据送上云，正是“万物互联”最朴素的一次实践。以下从多个维度解析物联网与数字农业：

一、物联网的概念与架构

四层模型：感知层（传感器）→ 网络层（WiFi/蜂窝）→ 平台层（云存储与计算）→ 应用层（看板与决策）。

关键特征：全面感知、可靠传输、智能处理、主动服务。

规模惊人：全球联网设备已超 150 亿，预计十年内翻倍，农业是增长最快的领域之一。

二、数字农业的应用场景

精准种植：田块级气象、土壤、作物长势上云，生成施肥灌溉处方图。

智慧畜牧：项圈监测牛羊位置、体温、反刍，早发现病畜。

溯源与保险：从播种到餐桌数据上链，消费者扫码即见，保险公司据实理赔。

三、农业大数据的价值

从经验到证据：历史数据揭示品种、气候、产量的隐藏关系，辅助选种与排期。

预测能力：结合气象与物候模型，提前预测产量与灾害，平滑市场波动。

资源优化：用水、用肥、用工数据沉淀后，可逐年提质增效。

四、数据安全与隐私

风险点：设备被入侵可能误控农事；位置与产量数据泄露或影响经营。

防护原则：强密码、固件更新、最小权限、传输加密。

责任边界：谁拥有数据、谁可调用，需要明确规则与同意机制。

五、挑战与未来

连接成本：偏远农田网络覆盖弱，需低功耗广域网（LoRa、NB-IoT）补位。

标准割裂：不同厂商协议不通，数据孤岛仍普遍。

普惠之路：让小农户也用得起、看得懂，是数字农业真正落地的关键。

总结：上云不是目的，让数据产生行动才是。你上传的第一条温湿度，已汇入人类理解农业的宏大数据库。正如业界所说：“未来农业，先有数字，后有丰收。”
