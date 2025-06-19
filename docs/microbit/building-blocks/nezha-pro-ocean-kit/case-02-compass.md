---
sidebar_position: 2
sidebar_label: 案例二：指南针
---

# 指南针
## 故事导入
小恩望着 “希望号” 眼眶发热。这艘船是朋友们齐心协力造的。朋友递来贝壳风铃：“挂船上，大海就不会为难你！” 小恩郑重承诺：“等我带回奇妙故事！”
夜幕降临，不安却悄悄爬上心头。小恩蹲在岸边，想起集市听闻的渔船失踪传闻，望着茫茫的大海，满心忐忑：“茫茫大海，真能找到方向吗？”小伙伴能帮助小恩在茫茫大海中寻找到方向吗？

--- 

## 教学准备

|     名称     |            图示            |
| :----------: | :--------------------------: |
|   哪吒Pro海洋套件  |   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/nezha-pro-ocean-kit-products-introduction-002.png.png)  |

--- 
## 教学目标 
1.了解指南针的发展历史。

2.探索指南针的原理 。

3.了解什么是变量，掌握变量积木块的使用。

--- 

## 学习探究

1、与小伙伴讨论一下指南针的为什么始终指向一个方向。
2、与小伙伴探讨一下指南针为何始终指向同一方向。

## 搭建步骤

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case02/nezha-pro-ocean-kit-step-02-1.png.pdf" type="application/pdf" width="100%" height="600px" />

--- 

## 硬件连接

把micro:bit主板插入哪吒扩展板上。 

--- 
## 代码编程

进入“[makecode.microbit.org](https://makecode.microbit.org)”，点击**新建项目**。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-07.png)

在弹出窗口输入项目名称并点击**创建**。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-11.png)

点击代码抽屉中的**扩展**。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-09.png)

在弹出界面输入**nezha pro**并点击搜索图标，在显示**nezha pro**软件库后点击。同样的方式加载PlanetX软件库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-10.png)

---
### 示例程序

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case02/nezha-pro-ocean-kit-step-02-2.png.png)

程序链接
[https://makecode.microbit.org/_HWv6bLfWRWKM](https://makecode.microbit.org/_HWv6bLfWRWKM)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_HWv6bLfWRWKM"
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
### 下载程序

使用 USB 线连接 PC 和 micro:bit V2。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual03.gif)

连接成功后，电脑上会识别出一个名为 MICROBIT 的盘符。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual06.png)

点击左下角的![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual07.png)，选择**Connect Device**。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual11.png)

点击![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual08.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual12.png)

点击![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual09.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual13.png)

在弹出窗口选择 **BBC micro:bit CMSIS-DAP**，然后选择**连接**，至此，我们的 micro:bit 就已经连接成功。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual14.png)

点击**下载程序**

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual10.png)

---
## 案例演示

1.陀螺仪矫正

2.是使用micro:bit指南针功能。

**图片**

---
## 扩展知识

### 指南针

#### 一、核心构造与原理

- 磁针特性：由铁、镍等磁性材料制成，磁化后形成 N 极（北极）和 S 极（南极）。根据 “同名磁极相斥，异名磁极相吸” 原理，磁针的 N 极会被地球磁场的 S 极（地理北极附近）吸引，S 极则被地球磁场的 N 极（地理南极附近）吸引，从而稳定指向南北方向。

- 地球磁场：地球如同一个大磁体，磁场的 N 极在地理南极附近，S 极在地理北极附近。磁场的磁力线从地理南极出发，回到地理北极，使磁针获得定向力。

- 自由转动设计：为减少摩擦，磁针多通过光滑轴支撑或悬浮在液体（如煤油）中，确保能在水平面上灵活转动，快速响应磁场变化。

#### 二、关键影响因素

- 地磁偏角：地球磁场的南北极与地理南北极不重合，两者的夹角称为 “地磁偏角”。例如，北京地区的地磁偏角约为西偏 5°，使用时需根据当地磁偏角修正读数，才能得到准确的地理方向。

- 外界干扰：靠近磁铁、高压线、含铁矿物等地，外界磁场会干扰磁针指向；电子设备的电磁场也可能影响指南针精度。

#### 三、类型与发展

|**类型**|**特点**|**应用场景**|
|---|---|---|
|传统罗盘|水浮式或旱罗盘，通过磁针漂浮或轴支撑指示方向，刻度盘标有方位（如东南西北）。	|古代航海、地质勘探、风水勘测等。|
|电子指南针|利用磁传感器（如霍尔效应传感器）检测磁场，经电路处理后在屏幕显示方向，抗干扰能力强、读数精准。|手机、车载导航、无人机等现代设备。|
|磁阻指南针|基于磁阻效应（磁场变化时材料电阻改变），灵敏度高，适合精密导航。|航空、航天等高端领域。|

#### 四、实际应用与意义

- 导航基础：在 GPS 信号弱或无电源时（如荒野徒步、海上遇险），指南针是重要的备用工具，确保方向判断。

- 科学研究：地质学家通过岩石剩磁研究地球磁场历史；考古学家利用指南针定位古代遗迹方位。

- 文化象征：作为中国古代四大发明之一，指南针推动了大航海时代的发展，是人类探索世界的标志性工具。
