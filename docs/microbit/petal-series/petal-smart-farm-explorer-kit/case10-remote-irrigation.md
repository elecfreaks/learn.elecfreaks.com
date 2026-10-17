---
sidebar_position: 12
sidebar_label: "案例10：远程灌溉 · 网页端控制浇水"
description: "在 SmartIoT 网页端创建远程开关，下发指令控制本地水泵（J2）启停，脱离现场也能浇水。"
---

# 案例10：远程灌溉 · 网页端控制浇水

## 简介

在 SmartIoT 网页端创建远程开关，下发指令控制本地水泵（J2）启停，脱离现场也能浇水。

![智能温室搭建完成](./images/case_10_intro.jpg)

## 教学目标

1. 用 `WiFi模块 J3 当接收到指令 执行` 接收平台指令。

2. 指令触发 `水泵模块 J2 开启/关闭`。

## 教学准备

| 图片 | 名称 | 数量 | 备注 |
| --- | --- | --- | --- |
|  | 未来农场套装 | 1 | 含椴木结构件 |
| ![micro:bit](./images/prep_microbit.png) | micro:bit | 1 | 自行准备 |
| ![PC](./images/prep_pc.png) | PC | 1 | 自行准备 |

## 课程引入

出门忘了浇水？在手机/电脑网页点一下，家里的农场自己浇水。这就是远程控制的魅力。

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

3. 输入项目名称（如 `smart_farm_10`）并点 **Create**

   ![输入项目名称并点击 Create](./images/setup_03_name_create.png)

### 添加软件库

1. 在 MakeCode 编程界面的 Toolbox 点击 **Extensions**

   ![点击 Extensions](./images/setup_04_extensions.png)

2. 在弹出页面搜索 `petal`

   ![搜索 petal](./images/setup_05_petal_search.png)

3. 选择 petal 软件库（图标带 ELECFREAKS 标识）

### 编写程序

![案例程序图](./images/program-case-10-white.png)

点击下方预览直接查看/运行完整程序；也可点击链接在 MakeCode 编辑器中打开并改造：

<div style={{ position: 'relative', paddingBottom: '60%', overflow: 'hidden' }}>
    <iframe
        title={"案例10：远程灌溉 · 网页端控制浇水 MakeCode 示例程序"}
        src="https://makecode.microbit.org/S00825-83623-47060-49548?lang=zh-CN&embed=1"
        frameBorder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{ position: 'absolute', width: '100%', height: '100%' }}
    />
</div>

**MakeCode 分享链接**：[https://makecode.microbit.org/S00825-83623-47060-49548](https://makecode.microbit.org/S00825-83623-47060-49548)

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

在 SmartIoT 网页端发送 "pump_on" / "pump_off" 指令，micro:bit 接收后控制水泵 J2 启停。

![案例10 效果演示](./images/case_10_result.gif)

## 扩展知识

远程控制，正把“在场操作”变为“随手操控”。我们这节用网页端浇水，是把农事从田头搬进了口袋。以下从多个维度解析远程控制与无人农场：

一、远程控制的技术基础

指令闭环：网页/手机发出指令→云端转发→设备接收执行→状态回传，形成“人在千里，手在田间”。

通信保障：稳定的网络与低延迟，是远程可靠的前提；断网需有本地兜底。

安全机制：身份认证、指令签名防止误控或恶意操控。

二、无人农场的现实实践

黑龙江建三江：水稻插秧、施肥、收割全流程无人化，一人可管千亩。

荷兰温室集群：光照、水肥、气候全远程托管，农户靠手机巡园。

畜牧远程：远程投喂、清粪、环控，减少人畜接触与疫病传播。

三、对农民角色的改变

从体力到脑力：农民更多做“监控、决策、维护”，而非“面朝黄土”。

新技能需求：读数据、用 App、基础排障成为新农人的必修课。

价值提升：经验型老农的知识被数字化沉淀，可服务更大面积。

四、数字鸿沟问题

接入门槛：偏远地区网络、设备、培训不足，可能把小农户甩在门外。

成本负担：智能硬件与流量费用对低收入农户仍是压力。

包容设计：需低价套件（如本套装）、本地语言界面与社区培训来弥合差距。

五、未来农业劳动力

人机协作：人定策略、机器执行，而非完全无人。

年轻返乡：科技让农业变“酷”，吸引青年与女性回流乡村。

弹性生产：按需远程调度，应对极端天气与市场突变更从容。

总结：远程控制不是让农人消失，而是让一个人的能力被放大数倍。你在网页上点下的那一次“开泵”，连接的正是农业从体力密集型走向知识密集型的时代转身。
