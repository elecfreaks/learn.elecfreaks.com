﻿# 圣诞树彩灯

## 介绍
---
 圣诞树彩灯，板载6颗可编程彩虹LED，装饰圣诞节的美丽夜晚。

## 特征
---
- 圣诞树外形，适合搭建圣诞主题场景。
- 采用可编程彩虹LED，可以自定义任意色彩。
- 采用鳄鱼夹线连接，无需扩展板。

## 参数
---
|项目|参数|
|:-:|:-:|
|品名|圣诞树彩灯|
|SKU| EF03420|
|输入电压|DC 3.3~5.0V|
|尺寸|75.93mm X 50.00mm|
|净重|6.5g|


## 快速入门
---
### 准备套件
- 1 x 圣诞树彩灯
- 3 x 鳄鱼夹线（产品不包含鳄鱼夹线，请另行购买。）
- 1 x micro:bit（产品不包含micro:bit，请另行购买。）
### 硬件连接
- 黑色鳄鱼夹与micro:bit上GND端连接，黑色鳄鱼夹另一端与圣诞树彩灯右端标示G端连接
- 红色鳄鱼夹与micro:bit上3V端连接，红色鳄鱼夹另一端与圣诞树彩灯中间标示V端连接
- 黄色鳄鱼夹与micro:bit上1端口连接，黄色鳄鱼夹另一端与圣诞树彩灯中间标示S端连接

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/output/images/8uQCfYE.jpg)

### 软件编程
#### 步骤 1

- [点击打开微软makecode在线积木块编程https://makecode.microbit.org/#](https://makecode.microbit.org/#)

- 点击"高级"查看更多代码选项，并在底部找到"扩展"。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/output/images/04098_01.png)

- 搜索neopixel，添加neopixel代码库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/output/images/04098_02.png)

#### 步骤 2

- 从neopixel函数库中拖出 set strip to neopixel at pin with leds as 积木块加入'当开机时'中，设置引脚为P0，灯珠数为6，使用rgb模式。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/output/images/03420_01.png)

#### 步骤 3

- 从neopixel函数库中拖出strip rotate 积木块加入到'无限循环'中，将参数设置为1，设置为灯珠一个一个改变颜色。
- 再拖出一个strip show积木块，用于使圣诞树发出七彩光芒。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/output/images/03420_02.png)

### 程序

请参考程序连接：[https://makecode.microbit.org/_Ukp8C5M2dbr2](https://makecode.microbit.org/_Ukp8C5M2dbr2)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_Ukp8C5M2dbr2"
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

圣诞树彩灯发出七彩的光芒，为圣诞夜增添一分美丽。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/output/images/fDvmCab.gif)

## FAQ
