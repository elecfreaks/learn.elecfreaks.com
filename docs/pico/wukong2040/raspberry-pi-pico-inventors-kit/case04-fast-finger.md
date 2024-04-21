---
sidebar_position: 11
sidebar_label: 案例04 眼疾手快
---

# 案例04 眼疾手快

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/wukong2040/raspberry-pi-pico-inventors-kit/images/wukong2040-inventors-case04-01.png)

## 简介

在有些游乐场我们能看到跳舞机，挑战者根据屏幕上显示的动作做出相应的动作。在这个过程中，挑战者学习舞蹈动作的同时，也是对观察力和反应能力的锻炼。本案例使用 Wukong2040 的A\B按键和两颗彩虹灯来制作快速反应的效果，那我们开始吧。

## 组件清单

1 × Raspberry Pi Pico

1 × Wukong2040 扩展板

1 × USB 数据线

1 × OLED 屏幕

## 相关知识介绍

### 按键

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/wukong2040/raspberry-pi-pico-inventors-kit/images/wukong2040-inventors-case04-02.png)

Wukong2040 扩展板上的按键原理是基于电子开关的工作原理。主板上有两个按键，分别是 A 和 B 按键。

每个按键都是一个机械开关，当按键被按下时，内部的金属接触点会闭合，导通电流。通过检测按键是否闭合，可以判断按键是否被按下。

在 Wukong2040 扩展板上，按键的闭合状态通过 GPIO 引脚来检测。当按键闭合时，相应的 GPIO 引脚会被拉低，即电位为 0。而当按键未闭合时，引脚会保持高电平状态，即电位为 1。

通过读取 GPIO 引脚的电平状态，可以判断按键是否被按下。在编程环境中，可以使用相应的代码来检测按键的状态，并执行相应的操作。

### OLED 显示屏幕

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/wukong2040/raspberry-pi-pico-inventors-kit/images/wukong2040-inventors-case04-03.png)

0.96寸 OLED 显示模块采用 SSD1306 驱动芯片，有128x64个自发光的白色像素点，采用 IIC/SPI 两种通信方式，默认设置为 IIC。具有功耗低、对比度高等优点，可用于许多显示应用，例如：各类传感器的数值显示；mini 小游戏机；智能穿戴设备等。

0.96寸 OLED 模块支持3.3V和5V，内部上电复位处理和默认 IIC 通信方式让接线更加方便简单，若想使用 SPI，只需改变一个电阻位置即可。另外显示屏采用了铝合金外框封装，在保护屏幕不受损伤的同时，也能防止您在使用过程中，不被屏幕的玻璃边缘划伤。

## 硬件连接

按照下面连接示意图，将您的元器件连接起来：

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/wukong2040/raspberry-pi-pico-inventors-kit/images/wukong2040-inventors-case04-06.png)

## MicroBlocks 图形化编程

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/wukong2040/raspberry-pi-pico-inventors-kit/images/wukong2040-inventors-case04-05.png)

## CircuitPython 代码编程

```python
# 导入相应的库文件
from WuKong2040 import *
from OLED import *
from random import *
import time

# 创建使用对象
wukong2040 = WuKong2040()
oled = OLED(board.GP17, board.GP16)

# 初始化得分变量为 0
score = 0

while True:
    num = randint(0, 1)  # 随机生成彩虹灯的编号
    r = randint(0, 10)
    g = randint(0, 10)
    b = randint(0, 10)
    wukong2040.rainbow_led(num, r, g, b)  # 设置随机编号彩虹灯的随机颜色
    time.sleep(0.1)
    wukong2040.rainbow_led(num, 0, 0, 0)
    time.sleep(1)
    oled.set_clear()
    if wukong2040.button_is_pressed("ButtonA") and num == 0:  # 检测编号为 0 的彩虹灯亮起后 A 是否键被按下
        score += 1  # 得分＋1
    if wukong2040.button_is_pressed("ButtonB") and num == 1:  # 检测编号为 1 的彩虹灯亮起后 B键是否被按下
        score += 1

    # 记录得分并显示在OLED屏幕上
    oled.set_show(0, 0, "Score:")
    oled.set_show(37, 0, score)
```



## 案例演示

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/wukong2040/raspberry-pi-pico-inventors-kit/images/wukong2040-inventors-kit-case04-06.gif)

## 思考

请问您能制作当 0 号彩虹灯亮起后按下 B 键得分加 1 ，当 1 号彩虹灯亮起后按下 A 键得分加 1 的程序吗？



## 常见问题



## 更多信息，欢迎访问：

[micro:bit Accessories Store | ELECFREAKS](https://www.elecfreaks.com/)
