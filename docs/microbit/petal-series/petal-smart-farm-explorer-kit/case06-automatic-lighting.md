---
sidebar_position: 8
sidebar_label: "案例06：智能补光 · 光照联动彩虹灯"
description: "环境光不足时自动点亮 RGB 彩灯补光，光线充足时熄灭，模拟现代大棚补光。"
---

# 案例06：智能补光 · 光照联动彩虹灯

## 简介

环境光不足时自动点亮 RGB 彩灯补光，光线充足时熄灭，模拟现代大棚补光。

![智能温室搭建完成](./images/case_06_intro.jpg)

## 教学目标

1. 复用光敏与 RGB 联动。

2. 理解"光照不足→开灯"的自动化逻辑。

## 教学准备

| 图片 | 名称 | 数量 | 备注 |
| --- | --- | --- | --- |
|  | 未来农场套装 | 1 | 含椴木结构件 |
| ![micro:bit](./images/prep_microbit.png) | micro:bit | 1 | 自行准备 |
| ![PC](./images/prep_pc.png) | PC | 1 | 自行准备 |

## 课程引入

冬天日照短，作物长不好。大棚用补光灯"人造太阳"。我们让 RGB 灯在暗时自动亮起，像给植物开了盏台灯。

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

3. 输入项目名称（如 `smart_farm_06`）并点 **Create**

   ![输入项目名称并点击 Create](./images/setup_03_name_create.png)

### 添加软件库

1. 在 MakeCode 编程界面的 Toolbox 点击 **Extensions**

   ![点击 Extensions](./images/setup_04_extensions.png)

2. 在弹出页面搜索 `petal`

   ![搜索 petal](./images/setup_05_petal_search.png)

3. 选择 petal 软件库（图标带 ELECFREAKS 标识）

### 编写程序

![案例程序图](./images/program-case-06-white.png)

点击下方预览直接查看/运行完整程序；也可点击链接在 MakeCode 编辑器中打开并改造：

<div style={{ position: 'relative', paddingBottom: '60%', overflow: 'hidden' }}>
    <iframe
        title={"案例06：智能补光 · 光照联动彩虹灯 MakeCode 示例程序"}
        src="https://makecode.microbit.org/_doMbueU2MRCo?lang=zh-CN&embed=1"
        frameBorder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{ position: 'absolute', width: '100%', height: '100%' }}
    />
</div>

**MakeCode 分享链接**：[https://makecode.microbit.org/_doMbueU2MRCo](https://makecode.microbit.org/_doMbueU2MRCo)

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

环境光不足（< 100 lux）时，RGB 彩灯亮白色补光；光线充足时自动熄灭。

![案例06 效果演示](./images/case_06_result.gif)

## 扩展知识

光，对植物而言不仅是“看清世界”的条件，更是“做饭的炉火”——光合作用的能量源。我们的智能补光系统，本质是把太阳的活儿接过来一部分。以下从多个维度解析人造光照农业：

一、补光的科学原理

光配方：叶绿素主要吸收红光（约 660nm）与蓝光（约 450nm），红蓝组合最利于生长；远红光、绿光则在形态建成中有特殊作用。

光周期调控：用人工光照延长“白昼”，可让短日照作物提前开花，或延迟其开花以错峰上市。

强度匹配：不同作物光饱和点不同，草莓约 300~500 μmol/m²/s，补光过量反而耗能无益。

二、LED 植物工厂

什么是植物工厂：在封闭空间用 LED 替代阳光、用营养液替代土壤，全程可控的“农业车间”。

典型案例：日本 Spreads、荷兰 PlantLab 等实现生菜周年量产；新加坡在写字楼里种菜供应市民。

优势：不靠天、不占良田、零农药、单位面积产量可达露地数十倍。

三、特殊环境的种植突破

太空农业：国际空间站用红蓝 LED 种植生菜，为长期载人任务提供新鲜食物与心理慰藉。

极地与海岛：南极科考站、远洋舰船用补光种植，摆脱补给依赖。

城市废墟再生：废弃工厂、防空洞改造为地下农场，重塑都市食物系统。

四、能耗与可持续性

电费是生命线：植物工厂约 60%~80% 成本来自电费，LED 效率与光伏结合是降本关键。

碳足迹权衡：虽耗电，但省下长途运输与冷藏的排放，本地化生产常总体更低碳。

循环利用：LED 余热可回收用于加温，营养液闭环减少水耗 90% 以上。

五、未来展望

光谱可调芯片让“定制作物”成为可能（如高番茄红素番茄）。

AI 根据作物实时长势动态调光，进一步逼近自然效率。

家庭微型植物工厂走入厨房，人人可当“都市农夫”。

总结：补光不是对阳光的取代，而是对它的延展与补位。你让 RGB 彩灯随光照亮起的那一刻，其实就是参与了一场延续千年的“向光而生”实验。正如植物学家所说：“给植物对的光，它就能在 anywhere 生长。”
