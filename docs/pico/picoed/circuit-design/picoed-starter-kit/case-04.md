---
sidebar_position: 7
sidebar_label: 光敏二极管
---

# 光敏二极管

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-ed-starter-kit-case-04-01.png)

## 简介
光敏二极管是一种半导体材料制成的电阻，其电导率随着光照强度的变化而变化。 利用这一特性制成不同形状和受光面积的光敏二极管。 光线越强阻值就越低，光控开关通常就是以光敏二极管为核心元件。光敏二极管广泛应用于玩具、灯具、照相机等行业。这节课程中，我们要根据光敏二极管收到的光照强度不同，在 Pico:ed 上面显示不同信息。

## 元件清单

### 硬件：
1 × Pico:ed
1 × USB线
1 × 面包板扩展板
1 × 面包板83 × 55mm
1 × 光敏二极管
1 × 10k欧姆电阻
若干杜邦线

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-ed-starter-kit-case-04-02.png)

## 主要元件介绍

### 光敏二极管
光敏二极管是用 CdS 或 CdSe 等半导体材料制成的特殊电阻器，其工作原理是基于内光电效应。光照愈强，阻值就愈低，随着光照强度的升高，电阻值迅速降低，亮电阻值可小至1KΩ以下。光敏二极管对光线十分敏感，其在无光照时，呈高阻状态，暗电阻一般可达1.5MΩ。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-ed-starter-kit-case-04-03.png)

## 实验步骤

### 硬件连接
根据下面的图片将你的元件连接起来：

1. 将光敏二极管与P0口连接；
2. 将10kΩ电阻与光敏二极管串联。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-ed-starter-kit-case-04-04.png)

连接完成后如图：

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-ed-starter-kit-case-04-05.png)

## 程序编程
编程环境准备请参考：[编程环境介绍](https://www.yuque.com/elecfreaks-learn/picoed/er7nuh)

### 代码示例：
```python
# 导入程序所需要的模块
import board
import analogio
from picoed import display

# 设置光敏电阻连接的引脚和读取模拟电压作为亮度的参考值
light = analogio.AnalogIn(board.P0_A0)
light_value = 40000

# 判断光敏电阻的模拟电压值是否小于参考值，根据判断结果显示不同效果
while True:
    light_new = light.value
    if light_new < light_value:
        display.scroll("Dark")
    else:
        display.scroll("Bright")
```

### 代码详解

1. 导入程序所需要的支持模块。`board`模块是引脚名称的通用容器，可以通过`board`库指定要使用的引脚，`picoed`模块可以设置Pico:ed的LED灯的效果， `analogio` 模块包含提供对模拟 IO 的访问的类。`time`模块包含对时间设置的函数。
```python
import board
import analogio
from picoed import display
```

2. 设置光敏二极管连接的引脚和读取模拟电压作为亮度的参考值。
```python
light = analogio.AnalogIn(board.P0_A0)
light_value = 40000
```

3. 判断实时光敏二极管的模拟电压值是否小于参考值，根据判断结果显示“Bright”或者“Dark”。
```python
while True:
    light_new = light.value
    if light_new < light_value:
        display.scroll("Dark")
    else:
        display.scroll("Bright")
```

## 实验结果
开灯时，Pico:ed的LED屏幕上显示“Bright”，而关灯后，屏幕上显示“Dark”。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-ed-starter-kit-case-04.gif)

## 思考
如果想要用光敏二极管来控制一颗 LED 的开与关，那么我们该如何设计电路与编程？

## 常见问题

## 更多信息，欢迎访问：
[恩孚科技官方文档](https://www.elecfreaks.com/learn-en/)
