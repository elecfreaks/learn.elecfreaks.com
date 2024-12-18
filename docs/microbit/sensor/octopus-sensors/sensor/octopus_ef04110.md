# TFT2.4寸显示屏

## 简介

TFT2.4寸显示屏，一款专为教育场景设计的高性能彩色屏幕。这款显示屏以其卓越的色彩表现和高分辨率图像展示能力，为您的项目带来生动的视觉体验，内置折线图、饼状图、柱状图图表模板，让您的数据展示更加直观和专业。

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


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/03047_01.png)

## 快速上手
---
### 硬件连接

将模块S0连接到P15口，S1连接到P1，S2连接到P8，S3连接到P12，OUT连接到P2，VCC连接电源，GND连接接地。将micro:bit主板插入octopus:bit。
将OLED连接到IIC接口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/03047_02.png)

### 软件编程

添加扩展[https://github.com/DoraLC/pxt-tcs3200-color-sensor](https://github.com/DoraLC/pxt-tcs3200-color-sensor)到makecode，在OLED上显示检测到的RGB值。

程序代码链接：[https://makecode.microbit.org/_JU5Dau19mE9c](https://makecode.microbit.org/_JU5Dau19mE9c)

你也能通过下列窗口直接下载代码
<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_JU5Dau19mE9c"
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

OLED显示屏显示当前红蓝绿的值。

## 常见问题

首次使用或重启或更换灯等，请调整WB（白平衡）

调整白平衡时，先固定好颜色传感器，然后将一个白色物体放置在颜色传感器之下，两者相距10mm左右，然后按下按键A初始化颜色传感器。当OLED显示屏显示出RGB值都为255后，替换不同颜色的物体进行检测，并记录RGB值，将RGB值输入Windows画图工具的颜色选取功能中，查看颜色是否正确，如果颜色正确，则调整成功。
