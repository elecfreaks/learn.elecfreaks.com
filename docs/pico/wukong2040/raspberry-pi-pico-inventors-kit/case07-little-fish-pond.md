---
sidebar_position: 14
sidebar_label: 案例07 小小养鱼池
---

# 案例07 小小养鱼池

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/wukong2040/raspberry-pi-pico-inventors-kit/images/wukong2040-inventors-case07-01.png)

## 简介

相信很多朋友想要拥有一个小小的养鱼池，在里面养很多漂亮的鱼，但是养鱼是个技术活，不仅要关注水的质量还要关注水位的高低，如果我们能实时的检测这些数据并告诉我们，那么养鱼就会变的简单很多。我们使用水位传感器与 LED 灯来制作水位监测器。

## 组件清单

1 × Raspberry Pi Pico

1 × Wukong2040 扩展板

1 × USB 数据线

1 × 水位传感器

1 × 绿色 LED 灯

1 × 红色 LED 灯

1 × 水杯

3 × 3P带扣杜邦线

## 主要组件介绍

### 水位传感器

水位传感器的工作原理非常简单。

该传感器具有一系列的共十条裸露的铜线，其中五个是电源铜线，另外五个是感测铜线。 这些走线是隔行排列的，因此每两个电源铜线之间就有一个感测铜线。

通常，这些迹线没有连接，但浸入水中时会被水桥接。 这些被水连接起来的铜线，根据水浸没的程度，电流的流通量会不一样。 就好像一个可变电阻（就像一个电位器），其电阻根据水位的变化而变化。 电阻的变化与传感器浸没的多少相对应。

电阻与水的高度成反比，原因如下： 传感器浸入的水越多，导电性就越好，阻力就越小，连通的电量值就越大。 传感器浸入的水越少，导电性越差，电阻越大，连通的电量值就越小。 传感器根据电阻产生输出电压，通过测量我们可以确定水位。

然而，纯净水是不导电的，水中的矿物质和杂质才使其具有导电性。 也就所以，在你的实验当中得出的数值会有可能与我实验的不一样。

在用作雨滴传感器也是一样的原理，雨水滴在排列的铜线表面，就可以产生连接，从而产生导电电量，就有模拟型号的变化。

## 硬件连接

按照下面连接示意图，将您的元器件连接起来：

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/wukong2040/raspberry-pi-pico-inventors-kit/images/wukong2040-inventors-case07-05.png)

## MicroBlocks 图形化编程

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/wukong2040/raspberry-pi-pico-inventors-kit/images/wukong2040-inventors-case05-04.png)

## CircuitPython 代码编程

```python
from WuKong2040 import *  # 导入WuKong2040库，使用板载蜂鸣器发出声音
from Waterlevel import *  # 导入水位传感器库，获取水位传感器返回的值
from LED import *  # 导入LED灯库，设置LED灯亮灭
import time  # 导入时间库，控制程序运行中断时间

waterlevel = Waterlevel(board.GP26)  # 创建水位传感器对象并传入引脚号
led1 = LED(board.GP0)  # 创建绿色灯对象并传入引脚号
led2 = LED(board.GP2)  # 创建红色灯对象并引入引脚号

while True:
    waterlevel_value = waterlevel.get_waterlevel()  # 将水位传感器返回的值赋值给waterlevel_value
    if waterlevel_value < 20000:
        led1.set_led(0)  # 设置LED灯亮灭，0代表灭，1代表亮
        led2.set_led(1)
        music.play(music.DADADADUM)  # 播放一段旋律
    else:
        led1.set_led(1)
        led2.set_led(0)
    time.sleep(1)
```

## 案例演示

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/wukong2040/raspberry-pi-pico-inventors-kit/images/wukong2040-inventors-kit-case07-06.gif)

## 思考

请问您能否将光线传感器加入到这个案例中，当光线强度达到一定值时红色 LED 灯亮起？



## 常见问题



## 更多信息，欢迎访问：
