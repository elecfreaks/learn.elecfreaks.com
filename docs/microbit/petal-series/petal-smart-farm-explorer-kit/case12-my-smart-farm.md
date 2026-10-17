---
sidebar_position: 14
sidebar_label: "案例12：我的智慧农场 · 创意结业展示"
description: "综合运用前 11 课，小组完成系统联调、故障排查与创意拓展，并进行项目汇报展示。"
---

# 案例12：我的智慧农场 · 创意结业展示

## 简介

综合运用前 11 课，小组完成系统联调、故障排查与创意拓展，并进行项目汇报展示。

![智能温室搭建完成](./images/case_12_intro.jpg)

## 教学目标

1. 整合全部功能并调试。

2. 团队协作、故障排查与展示表达。

## 教学准备

| 图片 | 名称 | 数量 | 备注 |
| --- | --- | --- | --- |
|  | 未来农场套装 | 1 | 含椴木结构件 |
| ![micro:bit](./images/prep_microbit.png) | micro:bit | 1 | 自行准备 |
| ![PC](./images/prep_pc.png) | PC | 1 | 自行准备 |

## 课程引入

12 节课，你从拧螺丝到写物联网程序，已经能造一座会自己照顾自己的农场。最后一步：让它更有"你的风格"。

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

3. 输入项目名称（如 `smart_farm_12`）并点 **Create**

   ![输入项目名称并点击 Create](./images/setup_03_name_create.png)

### 添加软件库

1. 在 MakeCode 编程界面的 Toolbox 点击 **Extensions**

   ![点击 Extensions](./images/setup_04_extensions.png)

2. 在弹出页面搜索 `petal`

   ![搜索 petal](./images/setup_05_petal_search.png)

3. 选择 petal 软件库（图标带 ELECFREAKS 标识）

### 编写程序

![案例程序图](./images/program-case-12-white.png)

点击下方预览直接查看/运行完整程序；也可点击链接在 MakeCode 编辑器中打开并改造：

<div style={{ position: 'relative', paddingBottom: '60%', overflow: 'hidden' }}>
    <iframe
        title={"案例12：我的智慧农场 · 创意结业展示 MakeCode 示例程序"}
        src="https://makecode.microbit.org/_cMk7TrFyeEdb?lang=zh-CN&embed=1"
        frameBorder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{ position: 'absolute', width: '100%', height: '100%' }}
    />
</div>

**MakeCode 分享链接**：[https://makecode.microbit.org/_cMk7TrFyeEdb](https://makecode.microbit.org/_cMk7TrFyeEdb)

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

综合运用前 11 课所学，自由组合传感器与执行器，调试并展示一个完整的创意农场项目。

![案例12 效果演示](./images/case_08_result.gif)

## 扩展知识

十二节课走到这里，你已亲手把一块 micro:bit 养成了一座会思考的农场。结业不是终点，而是你作为“未来农业创变者”的起点。以下从多个维度展望农业与教育的交汇：

一、农业面临的真实挑战

人口与土地：2050 年全球人口将达约 97 亿，可耕地却不增反减，单产提升逼近天花板。

资源约束：水、肥、劳力三重紧张，气候波动放大不确定性。

营养安全：不仅要“吃饱”，更要“吃好”，对品质与多样性提出更高要求。

二、科技创新的主攻方向

生物育种：基因组技术培育耐逆、高产、营养的作物品种。

合成与替代蛋白：减少畜牧业土地与排放压力。

AI 与机器人：从巡田到采收全程智能，弥补劳力短缺。

垂直与海洋农业：向空间与海洋要食物增量。

三、STEM 教育与农业人才

做中学：像本套装这样，用真实问题串起科学、技术、工程、数学，比单向讲授更牢固。

跨学科思维：农业问题天然跨界——生物+数据+机械+商业，培养系统思考者。

兴趣种子：亲手种活一株菜、跑通一段程序，可能点燃一生的职业方向。

四、青少年可参与的行动

校园农场：建微型温室，长期观测记录，做公民科学。

创新挑战：用传感器解决身边问题（如班级绿植养护、食堂剩食）。

传播影响：把所学做成视频、展览，带动更多人关注食物与土地。

五、展望 2050

家家有“食物计算机”：厨房里的微型农场随需生产新鲜蔬菜。

农田即数据中心：每一株作物都被感知、被理解、被善待。

人与土地重修旧好：科技不是疏离自然的借口，而是重新连接的桥梁。

总结：你今天写下的每一行程序、浇下的每一滴水，都是在为那个更从容的未来投票。农业的下一个黄金时代，不属于等待的人，而属于像你一样，既懂代码、又懂泥土的创造者。正如那句话所说：“未来已经到来，只是分布尚不均匀——而你可以让它更均匀地到来。”
