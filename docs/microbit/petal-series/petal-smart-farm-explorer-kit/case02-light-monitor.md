---
sidebar_position: 4
sidebar_label: "案例02：光照感知 · 光线小助手"
description: "用 micro:bit 内置光敏检测环境光，把光照值显示在 OLED 上；当光线不足时 RGB 彩灯亮黄灯提示\"该补光了\"。"
---

# 案例02：光照感知 · 光线小助手

## 简介

用 micro:bit 内置光敏检测环境光，把光照值显示在 OLED 上；当光线不足时 RGB 彩灯亮黄灯提示"该补光了"。

![智能温室搭建完成](./images/case_02_intro.jpg)

## 教学目标

1. 使用 `input.lightLevel()` 读取环境光。

2. 用 OLED 模块显示数值。

3. 用 RGB 彩灯做状态提示。

## 教学准备

| 图片 | 名称 | 数量 | 备注 |
| --- | --- | --- | --- |
|  | 未来农场套装 | 1 | 含椴木结构件 |
| ![micro:bit](./images/prep_microbit.png) | micro:bit | 1 | 自行准备 |
| ![PC](./images/prep_pc.png) | PC | 1 | 自行准备 |

## 课程引入

植物靠光进行光合作用。阴天和室内光线弱，作物就"吃不饱"。如果能随时看到光照强度，并在太暗时亮灯提醒，是不是很贴心？

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

3. 输入项目名称（如 `smart_farm_02`）并点 **Create**

   ![输入项目名称并点击 Create](./images/setup_03_name_create.png)

### 添加软件库

1. 在 MakeCode 编程界面的 Toolbox 点击 **Extensions**

   ![点击 Extensions](./images/setup_04_extensions.png)

2. 在弹出页面搜索 `petal`

   ![搜索 petal](./images/setup_05_petal_search.png)

3. 选择 petal 软件库（图标带 ELECFREAKS 标识）

### 编写程序

![案例程序图](./images/program-case-02-white.png)

点击下方预览直接查看/运行完整程序；也可点击链接在 MakeCode 编辑器中打开并改造：

<div style={{ position: 'relative', paddingBottom: '60%', overflow: 'hidden' }}>
    <iframe
        title={"案例02：光照感知 · 光线小助手 MakeCode 示例程序"}
        src="https://makecode.microbit.org/_9LtTcbWdJgFJ?lang=zh-CN&embed=1"
        frameBorder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{ position: 'absolute', width: '100%', height: '100%' }}
    />
</div>

**MakeCode 分享链接**：[https://makecode.microbit.org/_9LtTcbWdJgFJ](https://makecode.microbit.org/_9LtTcbWdJgFJ)

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

OLED 实时显示当前光照值；当光线不足（< 100 lux）时，RGB 彩灯亮黄色提示。

![案例02 效果演示](./images/case_02_result.gif)

## 扩展知识

光，是地球上几乎所有生命的能量来源，也是调节人体与生物节律的“隐形时钟”。我们搭建的光照小助手测量的，正是这股维系生命的能量。以下从多个维度解析光环境对人类与生态的影响：

一、光对人体生理的深层影响

昼夜节律：视网膜中的光敏细胞（ipRGC）接收蓝光信号，经视神经直送下丘脑“生物钟”，指挥褪黑素分泌。长期昼夜颠倒会打乱节律，导致失眠、代谢紊乱。

情绪与认知：冬季日照不足地区（如北欧）季节性抑郁发病率显著升高；充足光照能提升血清素水平，改善情绪与注意力。

视力健康：自然光促进儿童视网膜发育，研究显示每日户外活动 2 小时可显著降低近视发生率。

二、光污染问题

定义与现状：过度或不当的人工照明即为光污染。全球约 80% 人口生活在“光雾霾”下，三分之一的人已无法用肉眼看见银河。

生态干扰：海龟幼崽因城市灯光误向内陆爬行而夭折；候鸟在亮塔间迷失撞亡；昆虫趋光聚集，破坏食物链底层。

能源浪费：美国估计每年因不合理户外照明浪费的电力超过 30 亿美元，伴生大量碳排放。

三、植物的光周期现象

长日照与短日照：菊花、大豆属短日照植物，只在昼短夜长时开花；小麦、菠菜属长日照植物，反之开花。

光质差异：红光促茎叶生长，蓝光控株型紧凑，远红光影响种子萌发——这正是本套装“智能补光”一课的科学基础。

农业应用：通过人工调控光照时长与光谱，可实现反季节开花、周年生产。

四、照明节能与绿色用光

LED 革命：相比白炽灯，LED 节能 70%~80%，且可精准调光谱，是植物工厂的首选光源。

智能调光：人体感应、日光补偿等技术让“该亮处亮、该暗处暗”，避免无效耗能。

暗夜保护：多地立法限制夜间溢光，设立“暗夜公园”以恢复生态与观星权利。

五、健康用光建议

白天多接触自然光，尤其上午，有助于校准生物钟。

夜间减少屏幕蓝光，卧室使用暖色低照度光源。

城市夜景宜“见光不见灯”，用截光型灯具减少天空溢光。

总结：光既是养分的源头，也是需要被尊重的生态因子。你用 micro:bit 测量的每一勒克斯，都是理解这庞大光网络的一个支点。正如生态学家所言：“黑暗不是光明的缺失，而是生命另一半的节律。”
