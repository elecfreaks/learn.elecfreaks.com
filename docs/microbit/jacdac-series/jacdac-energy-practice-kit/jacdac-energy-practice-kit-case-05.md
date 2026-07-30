---
sidebar_position: 5
sidebar_label: 案例五：风向标
---

# 案例五：风向标

---

## 简介

micro:bit主板内置的**电子罗盘（磁力计）**检测地磁方向，将主板指向的方位实时显示在5×5 LED点阵屏上——东、南、西、北、四个方位。转动micro:bit主板，模拟风向标随风转动的场景。

---

## 案例目的

1. 认识**电子罗盘（磁力计）**——一种可以检测地磁方向的MEMS传感器。
2. 学习**条件判断（if-else if-else）**——根据方位角的不同数值范围显示不同的箭头图标。
3. 了解风向标在气象观测和航海中的重要作用。

---

## 所需材料

| 项目 | 图片 | 数量 |
|---|---|---|
| micro:bit V2 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/microbit%20%E6%AD%A3(1).png) | 1 |
| Jacdac扩展板 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20bit.png) | 1 |
| Jacdac 10cm连接线 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac-smart-exploration-kit-10cm-cable.png) | 1 |
| Jacdac温湿度传感器| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Sensor/Jacdac%20HT.png?x-oss-credential=LTAI5t9aG6u4N7PfV6n23XUj%2F20260723%2Fcn-hongkong%2Foss%2Faliyun_v4_request&x-oss-date=20260723T095900Z&x-oss-expires=3600&x-oss-signature-version=OSS4-HMAC-SHA256&x-oss-signature=05c921e6d3065a86c52e372076e7307f05ef2cdfa7708f2ccff60f2d141e8991) | 1 |
| USB数据线 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/usb%20cable1.png) | 1 |

---


## 搭建步骤

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case05/jacdac-energypractice-kit%2BAssembly%20Diagram%2BCase05.pdf" type="application/pdf" width="100%" height="600px" />

---

## 模型原理说明

### 风向标——最古老的气象仪器之一

风向标是测量风向的经典工具，由**箭头、尾翼和转轴**三部分组成。风吹过时，尾翼受风面积大、空气阻力大，被吹到下风方向；箭头顺势指向上风方向——即**风的来向**。这一巧妙设计让风向标无需任何电力就能自动对准来风方向。

> 风向的命名习惯是**"从哪里来就叫什么风"**——北风从北方吹来、东风从东方吹来。气象学上用16个方位（N、NNE、NE、ENE、E……）精确记录风向。

---

## 连接示意图

如下图所示，将micro:bit主板插入Jacdac扩展板，将Jacdac温湿度连接在Jacdac扩展板金手指接口上。

![连接示意图](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/%E7%A1%AC%E4%BB%B6%E8%BF%9E%E7%BA%BF%E5%9B%BE/1.png?x-oss-credential=LTAI5t9aG6u4N7PfV6n23XUj%2F20260723%2Fcn-hongkong%2Foss%2Faliyun_v4_request&x-oss-date=20260723T100034Z&x-oss-expires=3600&x-oss-signature-version=OSS4-HMAC-SHA256&x-oss-signature=83f6b47b2e017d189303ae97139d804bff9065c58feb81bf7019705d1345d8e6)

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

![程序截图](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case05/jacdac-energypractice-kit%2BProgram%2BCase05.png)

---

## 参考程序链接

📎[https://makecode.microbit.org/_3XeaWzi7FALP](https://makecode.microbit.org/_3XeaWzi7FALP)

你也可以通过以下网页直接下载程序，下载完成后即可开始运行程序。
<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_3XeaWzi7FALP"
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

将micro:bit主板**水平放置并缓慢旋转**，5*5LED显示屏东、南、西、北、四个方位，结合风向标来判断当前的风向。

---

## 思考

1. 磁力计检测的是地磁北极，而地图上的"北"是地理北极——两者并不完全重合。你知道这是为什么吗？（提示：搜索"磁偏角"）
2. 如果把micro:bit放在金属桌面或手机旁边，方向读数会发生什么变化？为什么？

---

## 知识拓展：从指南针到GPS——人类是怎么找到方向的

### 一、指南针——改变世界航海的四大发明之一

指南针是中国古代四大发明之一。早在**战国时期**（约公元前4世纪），中国人就发现了磁石的指向性，制成了最早的指南工具——**司南**（一把磁勺放在光滑铜盘上，勺柄指南）。到了**北宋**（约11世纪），中国人发明了**指南鱼**和**水浮指南针**，被广泛应用于航海。

| 时期 | 导航方式 | 精度 |
|---|---|---|
| 远古 | 观察太阳、星星、地标 | 粗略（晴天、夜晚可用） |
| 公元前4世纪 | 司南（中国） | 大致南北 |
| 11世纪 | 水浮指南针（中国） | 较好，航海必备 |
| 12~13世纪 | 指南针传入欧洲 | 开启大航海时代 |
| 15~16世纪 | 指南针+六分仪+海图 | 可跨洋航行 |
| 20世纪 | 陀螺罗经（不受磁场干扰） | 精确到0.1° |
| 21世纪 | GPS/北斗卫星导航 | 精确到米级 |

>  没有指南针就没有大航海时代——哥伦布、麦哲伦的跨洋航行，离开指南针寸步难行。一块小小的磁石，改变了人类文明的版图。

### 二、磁力计的现代应用

今天，你手上这台micro:bit里的磁力计芯片，与智能手机里的指南针功能芯片原理相同：

| 应用 | 磁力计的作用 |
|---|---|
| 手机地图导航 | 检测手机朝向，旋转地图使其始终"上北下南" |
| 无人机/飞行器 | 配合GPS，确定飞行方向和航向角 |
| 汽车导航 | 在GPS信号弱（隧道、高架下）时提供方向推算 |
| 增强现实（AR） | 确定设备朝向，将虚拟物体叠加到正确方向 |
| 地质勘探 | 探测地下矿藏和地质结构（通过局部磁场异常） |
| 考古学 | 探测地下埋藏物和古代遗址的磁场痕迹 |

---

### 三、风向标——最古老的气象仪器

风向标的历史至少可以追溯到**公元前48年**——古希腊雅典的**风之塔**（Tower of the Winds）顶部装有一个巨大的铜制风向标（人身鱼尾形状），至今仍保存完好。

| 事实 | 数据 |
|---|---|
| 风向标的英文 | Weather Vane / Wind Vane |
| 最古老的风向标 | 雅典风之塔（公元前48年） |
| 气象观测中的风向精度 | 16个方位（每个22.5°）或360°（每1°） |
| 风的命名习惯 | 以风的**来向**命名（北风=从北吹来） |
| 机场风向袋（风锥） | 不仅指示方向，袋子鼓起的程度还指示风速 |

>  **想想看：** 两千多年前的希腊人不需要电池、不需要芯片，仅凭金属片的巧妙设计就能自动指示风向。而今天的你，用一块指甲盖大小的芯片就实现了同样的功能——而且精度更高、还能同时记录数据。这就是科技进步的魅力。

---

### 四、电子罗盘 vs 传统指南针

| 对比 | 传统指南针 | 电子罗盘（磁力计） |
|---|---|---|
| 原理 | 磁针与地磁场相互作用 | MEMS芯片检测地磁分量 |
| 精度 | 约5°~10° | 可达1°~2° |
| 响应速度 | 慢（磁针惯性） | 极快（电子读取） |
| 数据输出 | 肉眼观察 | 数字信号，可编程处理 |
| 受干扰 | 震动、倾斜 | 周围金属、电磁场 |
| 功耗 | 零功耗 | 极低功耗（微瓦级） |

> micro:bit上的磁力计加上加速度计，可以组成一个完整的**姿态传感器**——知道"朝向哪里"（磁力计）和"倾斜了多少"（加速度计），两者配合就能实现3D空间中的方向追踪。这正是无人机和手机AR应用的基础技术。
