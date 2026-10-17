---
sidebar_position: 9
sidebar_label: "案例07：环境警报 · 温湿度异常提醒"
description: "当温度或湿度超过安全范围，RGB 亮红灯、OLED 显示警报文字，并播放内置旋律提醒。"
---

# 案例07：环境警报 · 温湿度异常提醒

## 简介

当温度或湿度超过安全范围，RGB 亮红灯、OLED 显示警报文字，并播放内置旋律提醒。

![智能温室搭建完成](./images/case_07_intro.jpg)

## 教学目标

1. 用温湿度 + RGB + OLED + 内置 `music` 做复合警报。

2. 理解多条件"或"逻辑。

## 教学准备

| 图片 | 名称 | 数量 | 备注 |
| --- | --- | --- | --- |
|  | 未来农场套装 | 1 | 含椴木结构件 |
| ![micro:bit](./images/prep_microbit.png) | micro:bit | 1 | 自行准备 |
| ![PC](./images/prep_pc.png) | PC | 1 | 自行准备 |

## 课程引入

大棚"发烧"或"受潮"都要立刻知道。我们用红灯 + 文字 + 音乐三重警报，确保管理员一眼/一听就发现异常。

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

3. 输入项目名称（如 `smart_farm_07`）并点 **Create**

   ![输入项目名称并点击 Create](./images/setup_03_name_create.png)

### 添加软件库

1. 在 MakeCode 编程界面的 Toolbox 点击 **Extensions**

   ![点击 Extensions](./images/setup_04_extensions.png)

2. 在弹出页面搜索 `petal`

   ![搜索 petal](./images/setup_05_petal_search.png)

3. 选择 petal 软件库（图标带 ELECFREAKS 标识）

### 编写程序

![案例程序图](./images/program-case-07-white.png)

点击下方预览直接查看/运行完整程序；也可点击链接在 MakeCode 编辑器中打开并改造：

<div style={{ position: 'relative', paddingBottom: '60%', overflow: 'hidden' }}>
    <iframe
        title={"案例07：环境警报 · 温湿度异常提醒 MakeCode 示例程序"}
        src="https://makecode.microbit.org/S62425-59545-55623-68126?lang=zh-CN&embed=1"
        frameBorder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{ position: 'absolute', width: '100%', height: '100%' }}
    />
</div>

**MakeCode 分享链接**：[https://makecode.microbit.org/S62425-59545-55623-68126](https://makecode.microbit.org/S62425-59545-55623-68126)

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

当温度 > 30℃ 或湿度 > 80% 时，RGB 亮红灯、OLED 显示 "ALERT!" 并播放内置旋律。

![案例07 效果演示](./images/case_07_result.gif)

## 扩展知识

警报，是人类对抗不确定性的最早发明之一——从烽火台到烟雾报警器，本质都是“在危险发生前喊一声”。我们的环境警报系统，是把这套古老智慧搬进了温室。以下从多个维度解析环境监测与预警：

一、预警系统的社会价值

争取时间：早期预警能把“突发”变“可防”。台风预警可让沿海提前撤离，避免重大伤亡。

降低损失：农业上，霜冻、暴雨预警能让农户抢收、覆膜，单次可挽回数成收成。

公共安心：可靠的预警提升社会信任，减少谣言与恐慌。

二、极端天气预警

气象预警分级：我国采用蓝、黄、橙、红四级，逐级提升紧急程度，对应不同响应动作。

农业敏感点：气温骤降伤苗、持续高湿诱病、干热风逼熟，均需针对性预警。

技术支撑：卫星、雷达、自动站组成分钟级监测网，AI 模型提升短时预报精度。

三、农业灾害预警

墒情预警：土壤过干触发灌溉提醒，过湿提醒排涝，防烂根与倒伏。

病虫害预警：结合温湿度与历史数据，提前数天预测白粉病、蚜虫爆发窗口。

设施安全：大风预警提示加固温室，防掀膜损棚。

四、预警系统的技术架构

感知层：传感器（如本套装温湿度、土壤、光敏）负责“看见”环境。

传输层：有线/无线把数据送上控制器或云端。

决策层：设定阈值（如温度>35℃报警），满足条件即触发声、光、消息。

这正是你这节搭出的“感知—判断—提醒”闭环。

五、公众参与与素养

学会读预警信号与图标，不忽视低级预警的升级可能。

学校可建微型预警台，让学生理解“阈值”与“响应”的工程逻辑。

社区应定期演练，让预警真正转化为行动而非噪音。

总结：最好的警报，是让人来得及做点什么。你让 micro:bit 在异常时闪灯鸣响的那一秒，和气象局的红色预警，遵循的是同一个朴素真理——早一步知道，就多一分安全。
