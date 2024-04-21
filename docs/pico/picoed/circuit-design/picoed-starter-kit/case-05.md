---
sidebar_position: 8
sidebar_label: 三色LED
---

# 三色LED

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-ed-starter-kit-case-05-01.png)

## 简介
三色 LED 是 LED 灯的一种。它能够发出红、绿、蓝三种不同颜色的光线。在这节课程中，我们将让 RGB LED 在红、绿、蓝三种颜色之间渐变转换。

## 元件清单

### 硬件：
1 × Pico:ed
1 × USB线
1 × 面包板扩展板
1 × 面包板83×55mm
1 × RGB LED
3 × 100欧姆电阻
若干杜邦线

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-ed-starter-kit-case-05-02.png)


## 主要元件介绍

### 三色 LED
三色 LED 是 LED 的一种，把红色 LED、绿色 LED、蓝色 LED 集合成一个元件，就是 RGB LED。我们都知道，光的三原色分别为红色、绿色、蓝色，利用这三种颜色进行不同组份地组合，能够合成出万物所有的颜色。同样，利用 RGB LED 进行不同亮度的组合，能够形成无数种颜色。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-ed-starter-kit-case-05-03.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-ed-starter-kit-case-05-04.png)

三色 LED分为两种类型，分别为共阴极与共阳极：共阴极的 RGB LED 公共端接 GND；共阳极的 RGB LED 公共端接 VCC。在本实验中，我们选用共阴极的三色 LED。

## 实验步骤

### 硬件连接
根据下面的图片将你的元件连接起来：

1.将led灯的RGB信号引脚分别对应连接扩展板的P0，P1，P2口，并连接一个100Ω的电阻。

2.将GND与扩展板GND通过面包板连接。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-ed-starter-kit-case-05-05.png)

连接完成后如图：

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-ed-starter-kit-case-05-06.png)

## 程序编程
编程环境准备请参考：[编程环境介绍](https://www.yuque.com/elecfreaks-learn/picoed/er7nuh)

### 代码示例：
```
# 导入程序所需要支持的模块
import board
import digitalio
import time
from picoed import button_a, button_b

# 设置三色LED的引脚和引脚方向
led_0 = digitalio.DigitalInOut(board.P0)
led_1 = digitalio.DigitalInOut(board.P1)
led_2 = digitalio.DigitalInOut(board.P2)
led_0.direction = digitalio.Direction.OUTPUT
led_1.direction = digitalio.Direction.OUTPUT
led_2.direction = digitalio.Direction.OUTPUT

# 判断A\B按键是否按下以及进行的操作
while True:
    if button_a.is_pressed() and button_b.is_pressed():
        led_0.value = False
        led_1.value = False
        led_2.value = True
    elif button_a.is_pressed():
        led_0.value = True
        led_1.value = False
        led_2.value = False
    elif button_b.is_pressed():
        led_0.value = False
        led_1.value = True
        led_2.value = False
    else:
        led_0.value = True
        led_1.value = True
        led_2.value = True
    time.sleep(0.1)
```

### 代码详解

1. 导入程序所需要的支持模块。`board`模块是引脚名称的通用容器，可以通过`board`库指定要使用的引脚，`digitalio`模块包含提供对基本数字 IO 的访问的类，`time`模块包含对时间设置的函数，`picoed`模块包含对按键A\B的操作函数。
```python
import board
import digitalio
import time
from picoed import button_a, button_b
```

2. 设置面包板扩展板连接 LED 所使用的引脚以及引脚方向。
```python
led_0 = digitalio.DigitalInOut(board.P0)
led_1 = digitalio.DigitalInOut(board.P1)
led_2 = digitalio.DigitalInOut(board.P2)
led_0.direction = digitalio.Direction.OUTPUT
led_1.direction = digitalio.Direction.OUTPUT
led_2.direction = digitalio.Direction.OUTPUT
```
如果你所使用的引脚不是 P0_A0 和 P1_A1，那么可以在 Thonny 编辑器下方的 shell 窗口中输入以下代码并回车查看其他引脚的编号。
```python
>>> import board
>>> help(board)
object <module 'board'> is of type module
  __name__ -- board
  board_id -- elecfreaks_picoed
  BUZZER_GP0 -- board.BUZZER_GP0
  I2C0_SDA -- board.BUZZER_GP0
  I2C0_SCL -- board.I2C0_SCL
  BUZZER -- board.BUZZER
  BUZZER_GP3 -- board.BUZZER
  P4 -- board.P4
  P5 -- board.P5
  ...
```

3. 判断 A\B 按键是否按下以及进行的操作。当 A 按下时，设置 led_0 值为`True`, led_1 和 led_2 为`False`，同理，编写当 B 按下时，当 A+B 按下时的代码如下。
```python
while True:
    if button_a.is_pressed() and button_b.is_pressed():
        led_0.value = False
        led_1.value = False
        led_2.value = True
    elif button_a.is_pressed():
        led_0.value = True
        led_1.value = False
        led_2.value = False
    elif button_b.is_pressed():
        led_0.value = False
        led_1.value = True
        led_2.value = False
    else:
        led_0.value = True
        led_1.value = True
        led_2.value = True
    time.sleep(0.1)
```

## 实验结果
按下按钮 A，LED 发出红光， 按下按钮 B，LED 发出绿光， 同时按下按钮 A 和 B， LED 发出蓝光。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-ed-starter-kit-case-05.gif)


## 思考
如果想要用三色 LED 发出青色、品红色、黄色的光线，该如何设计电路与编程？

## 常见问题

## 更多信息，欢迎访问：
[恩孚科技官方文档](https://www.elecfreaks.com/learn-en/)
