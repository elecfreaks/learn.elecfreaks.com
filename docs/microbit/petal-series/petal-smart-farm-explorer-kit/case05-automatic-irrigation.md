---
sidebar_position: 7
sidebar_label: "案例05：智能灌溉 · 土壤联动自动浇水"
description: "当土壤湿度低于阈值，自动开启水泵（J2）浇水几秒，再关闭并等待渗透——打造全自动灌溉闭环。"
---

# 案例05：智能灌溉 · 土壤联动自动浇水

## 简介

当土壤湿度低于阈值，自动开启水泵（J2）浇水几秒，再关闭并等待渗透——打造全自动灌溉闭环。

![智能温室搭建完成](./images/case_05_intro.jpg)

## 教学目标

1. 用 `水泵模块 J2 开启/关闭` 控制水泵。

2. 实现"湿度低→浇水→等待→停止"的闭环逻辑。

## 教学准备

| 图片 | 名称 | 数量 | 备注 |
| --- | --- | --- | --- |
|  | 未来农场套装 | 1 | 含椴木结构件 |
| ![micro:bit](./images/prep_microbit.png) | micro:bit | 1 | 自行准备 |
| ![PC](./images/prep_pc.png) | PC | 1 | 自行准备 |

## 课程引入

农民伯伯要定时浇水，还怕浇多烂根、浇少旱死。让 micro:bit 当"自动园丁"：土干了就浇，够了就停，省水又省心。

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

3. 输入项目名称（如 `smart_farm_05`）并点 **Create**

   ![输入项目名称并点击 Create](./images/setup_03_name_create.png)

### 添加软件库

1. 在 MakeCode 编程界面的 Toolbox 点击 **Extensions**

   ![点击 Extensions](./images/setup_04_extensions.png)

2. 在弹出页面搜索 `petal`

   ![搜索 petal](./images/setup_05_petal_search.png)

3. 选择 petal 软件库（图标带 ELECFREAKS 标识）

### 编写程序

![案例程序图](./images/program-case-05-white.png)

点击下方预览直接查看/运行完整程序；也可点击链接在 MakeCode 编辑器中打开并改造：

<div style={{ position: 'relative', paddingBottom: '60%', overflow: 'hidden' }}>
    <iframe
        title={"案例05：智能灌溉 · 土壤联动自动浇水 MakeCode 示例程序"}
        src="https://makecode.microbit.org/S07385-00120-67972-25420?lang=zh-CN&embed=1"
        frameBorder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{ position: 'absolute', width: '100%', height: '100%' }}
    />
</div>

**MakeCode 分享链接**：[https://makecode.microbit.org/S07385-00120-67972-25420](https://makecode.microbit.org/S07385-00120-67972-25420)

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

当土壤湿度 < 30 时，水泵自动开启 3 秒浇水；浇水后等待 5 秒渗透，循环判断。

![案例05 效果演示](./images/case_05_result.gif)

## 扩展知识

水，是农业的血脉，也是人类最紧张的资源账单之一。我们做的“土壤联动自动浇水”，正是用一滴水的智慧回应一场全球危机。以下从多个维度解析水资源与节水灌溉：

一、全球水资源现状

总量有限且分布不均：地球 97.5% 是咸水，淡水仅占 2.5%，其中可用河湖水不足 1%。

缺水人口：联合国数据显示，全球约 20 亿人生活在严重缺水地区，到 2025 年三分之二国家将面临压力。

水质危机：污染使可用淡水进一步缩减，农业面源污染是河湖富营养化的主因之一。

二、农业用水的“大头”与浪费

占比惊人：农业灌溉耗掉全球淡水取用的约 70%，在发展中国家更高。

效率低下：传统漫灌水利用率仅 40%~50%，大量蒸发、渗漏、径流流失。

隐性浪费：凭经验浇水常“浇过头”，既浪费水又淹坏根系，还助长病害。

三、节水灌溉技术

滴灌：将水点滴到根部，水利用率可达 90% 以上，以色列据此在沙漠种出高产农业。

喷灌与微喷：模拟降雨，适合叶菜与大田，比漫灌节水 30%~50%。

智能联动：如本套装，用土壤湿度触发水泵，按需给水、不多不少，是“会算账的灌溉”。

四、智能灌溉的经济与生态效益

省钱省工：自动灌溉减少人工巡查，水肥一体还可同步追肥。

保护生态：少引河水、少排尾水，下游湿地与鱼类受益。

气候韧性：干旱年景下，精准用水能让作物挺过关键需水期，稳产保收。

五、个人节水行动

家庭收集雨水浇花、洗菜水二次利用。

选用节水器具，缩短淋浴时间。

支持节水认证农产品，推动农业水效提升。

总结：每一滴被精准送到的水，都是对地球水账的一次修复。你写的“干则开泵、湿则停泵”几行程序，背后站着的是全球 70 亿人的用水未来。正如水文学家所言：“我们不是从祖先那里继承了水，而是向子孙借用了它。”
