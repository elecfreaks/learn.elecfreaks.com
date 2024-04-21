---
sidebar_position: 19
sidebar_label: 案例12 - 精准寻宝的 XGO
---

# 案例12 - 精准寻宝的 XGO

## 介绍

哈喽，我们都知道狗狗的嗅觉是很灵敏的，如果我们丢失物品的时候会让狗狗帮我们寻找，那么我们是否可以让 XGO 帮我们寻找宝藏呢？这篇文章是我们实现的思路，同时欢迎小精灵们可以有更优秀的方法。

## 快速开始

### 使用材料

[micro:bit XGO Robot Kit 套件](https://www.elecfreaks.com/micro-bit-xgo-robot-kit.html) × 1

[micro:bit](https://www.elecfreaks.com/bbc-micro-bit-board-for-coding-programming-microbit.html) × 1

磁铁 × 1

### 工作原理

1. micro:bit有一个称为磁力计的指南针传感器，用于测量磁场。 它可以感应地球的磁场，因此你可以将其用作指南针。
2. 首次使用micro:bit指南针时，必须进行校准。 屏幕上会出现一个小游戏，你必须将micro:bit倾斜以点亮每个LED，然后就可以使用了。

### 硬件连接

我们使用数据线（USB 线）将电脑与 micro:bit 相连，相信你已经很熟练了。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-robot-kit/images/microbit-xgo-robot-kit-22.png)

## MakeCode 编程

XGO 的程序编写是在 [Makecode](https://makecode.microbit.org/#) 平台进行; Makecode平台可以使用图形化编程，同时还可以使用python代码编程和JavaScript代码编程；

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-robot-kit/images/microbit-xgo-robot-kit-10.png)

### 步骤一

- 新建项目，命名程序名后点击积木库中的**扩展**按钮，如下：

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-robot-kit/images/microbit-xgo-robot-kit-12.png)

- 在输入框输入：XGO 或者 XGO Robot Kit 搜索到 xgo 扩展库，如下：

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-robot-kit/images/microbit-xgo-robot-kit-13.png)

**_注意:_** 如果您遇到提示某些代码库由于不兼容而将被删除的提示

### 步骤二

#### 示例程序

##### 寻宝XGO程序

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-robot-kit/images/microbit-xgo-robot-kit-case12-01.png)

同时，可以直接下载下方程序：

[https://makecode.microbit.org/_HHPLrvRbvWFM](https://makecode.microbit.org/_HHPLrvRbvWFM)

##### 显示器程序

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-robot-kit/images/microbit-xgo-robot-kit-case12-02.png)

[](https://makecode.microbit.org/_Y2b7w5iYTEz2)

同时，可以直接下载下方程序：

[https://makecode.microbit.org/_Y2b7w5iYTEz2](https://makecode.microbit.org/_Y2b7w5iYTEz2)

### 效果演示

### 相关问题

因为不同的磁铁磁性强度是不同的，这节课的程序所使用的磁力数据大小只作为参考，要根据你拿到的磁铁适当调节数据。

### 思考

如果有两块磁铁相互影响 XGO 的感应时，如何处理呢？
