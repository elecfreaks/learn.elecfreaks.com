# TFT2.4寸显示屏

## 简介

TFT2.4寸显示屏，一款专为教育场景设计的高性能彩色屏幕。这款显示屏以其卓越的色彩表现和高分辨率图像展示能力，为您的项目带来生动的视觉体验，内置折线图、饼状图、柱状图图表模板，让您的数据展示更加直观和专业。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04110_01.png)

## 特点

彩色显示：色彩丰富，图像清晰。
图形与文本显示：无论是复杂的图形还是清晰的文本，我们的显示屏都能轻松呈现，满足您对视觉信息展示的需求。
内置图表模板：为了简化数据可视化过程，我们内置了折线图、饼状图、柱状图等多种图表模板，让您的数据展示更加直观和专业。

## 规格参数

品名：TFT2.4寸显示屏
SKU：EF04110
屏幕分辨率：240*320(RGB)
工作电压：3.3V~5V
工作电流：60mA
连接模式：IIC
尺寸：长72mm x 宽68mm x 高8mm
净重：23g（不含包装）

## 外型与定位尺寸


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04110_02.png)
l
## 快速上手

### 硬件连接

将TFT2.4寸显示屏连接到iot:bit的IIC接口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04110_03.png)

### 软件编程

#### 添加扩展

添加扩展[https://github.com/ZY2516/tft_lcd](https://github.com/ZY2516/tft_lcd)到makecode。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04110_04.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04110_05.png)

#### 积木块定义

| 分类 | 积木块 | 功能定义 |
| --- | --- | --- |
| **基础** | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04110_block_01.png) | 开启或关闭背光 |
|  | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04110_block_02.png) | 清空屏幕显示内容 |
|  | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04110_block_03.png) | 设置背景颜色为预设颜色 |
|  | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04110_block_04.png) | 设置画笔/字体颜色 |
|  | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04110_block_05.png) | 清除第一行内容 |
|  | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04110_block_06.png) | 在第N（1~8）行显示文本信息 |
|  | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04110_block_07.png) | 在第N（1~8）行显示数字信息 |
|  | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04110_block_08.png) | 在指定坐标位置显示文本信息 |
|  | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04110_block_09.png) | 在指定坐标位置显示数字信息 |
| **图形** | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04110_block_10.png) | 设定线条起点和终点并绘制线条 |
|  | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04110_block_11.png) | 设定矩形的对角线起点、终点及是否填充并绘制矩形 |
|  | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04110_block_12.png) | 设定圆形的圆心、半径及是否填充并绘制圆形 |
|  | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04110_block_13.png) | 绘制一个弧形加载器并设定其背景颜色 |
|  | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04110_block_14.png) | 显示进度条 |
| **图表** | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04110_block_15.png) | 绘制一个柱状图/折线图，并初始化其数据域、列数、每组数据的颜色及标签 |
|  | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04110_block_16.png) | 设定柱状图/折线图中每列数据的标签名及数据输入 |
|  | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04110_block_17.png) | 绘制一个饼状图，并设置其中数据、标签及颜色 |

#### 示例程序

程序代码链接：[https://makecode.microbit.org/_7rXKwwR6JgLK](https://makecode.microbit.org/_7rXKwwR6JgLK)

你也能通过下列窗口直接下载代码
<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_7rXKwwR6JgLK"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

### 结果

每次按下按键A之后，都会切换显示功能
功能一：线条、矩形、圆形、文字显示
功能二：柱状图显示
功能三：折线图显示
功能四：饼状图显示
功能五：进度条显示
功能六：加载图显示
按下徽标后，随机切换背景颜色及画笔颜色
