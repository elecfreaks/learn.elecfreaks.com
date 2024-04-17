---
sidebar_position: 8
sidebar_label: 案例01 星光点点
---

# 案例01 星光点点

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/wukong2040/raspberry-pi-pico-inventors-kit/images/wukong2040-inventors-case01-03.png)

## 简介

每当我们看到星星点点的夜空时，我们会感受到星河的美丽。其实，我们可以使用 LED 灯与电位传感器模拟出这样的场景。本案例中，我们将使用电位传感器控制 LED 灯的闪烁频率，达到点点星光的效果，如果在黑暗环境下效果会更好哦。

## 组件清单

1 × Raspberry Pi Pico

1 × Wukong2040 扩展板

1 × USB 数据线

1 × 红色 LED 灯

1 × 蓝色电位传感器

2 × 3P带扣杜邦线

## 主要组件介绍

### LED 灯

LED 是 Light Emitting Diode（发光二极管）的缩写。这是一种半导体二极管。它可以将电能转换成光能。当电流经过的时候，它就会发光。

LED 本质上也属于二极管的一种。就拿普通的二极管来说，比如当我们给它加正向电压时，它就能导通，而加反向电压的话，这个二极管就会截止。这是因为 N 区有更多的自由电子，而 P 区有更多的空穴，当我们加正向电压时，电子会被电场吸引而与空穴复合，自由电子和空穴复合的时候会释放热量。LED 灯的原理和这个二极管类似，但是当自由电子和空穴复合的时候，它对外释放光能。

为什么一个发热，而另一个为什么发光呢？这完全取决于半导体的材料。
普通二极管采用的半导体材料是硅，硅原子最外层有4个电子，纯净的硅晶体的原子最外层能形成稳定的8电子结构，它的 N 区是在纯净的硅原子中掺杂了5价磷，所以最外层多出来一个自由电子，而它的 P 区是在纯净的硅原子中掺杂了3价硼，这样就导致他最外层缺少一个电子形成空穴，当我们给他施加正向电压自由电子就会和空穴复合，复合的同时就会释放热量。之所以会释放热量，是归这种物质决定的，而 LED 采用的半导体材料不是硅而是化合物，比如氮化钾，氮原子最外层有5个电子，钾最外层有3个电子，所以纯净的氮化钾中氮原子和钾原子最外层也都能形成稳定的8电子结构。它的 N 区是在纯净的氮化钾中掺杂了四价硅，这样就导致最外层多出一个电子，P 区是在氮化钾中掺杂了二价镁，导致最外层缺少一个电子形成空穴。LED 的半导体结构是这样的，当我们给它加正向电压自由电子与空穴复合，复合之后产生光子，LED 就是这样发光的。还有就是它发出的光是蓝色的，这是由于氮化镓这种材料决定的。关于其他 LED 灯颜色，可以查阅相关资料了解。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/wukong2040/raspberry-pi-pico-inventors-kit/images/wukong2040-inventors-case01-01.png)

### 电位传感器

电位器是一种可调的电子元件。 它是由一个电阻体和一个转动或滑动系统组成。 当电阻体的两个固定触点之间外加一个电压时，通过转动或滑动系统改变触点在电阻体上的位置，在动触点与固定触点之间便可得到一个与动触点位置成一定关系的电压。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/wukong2040/raspberry-pi-pico-inventors-kit/images/wukong2040-inventors-case01-02.png)

### 硬件连接

按照下面连接示意图，将您的元器件连接起来：

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/wukong2040/raspberry-pi-pico-inventors-kit/images/wukong2040-inventors-case01-05.png)

### 图形化编程

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/wukong2040/raspberry-pi-pico-inventors-kit/images/wukong2040-inventors-case01-04.png)

### 代码编程

```python
from Trimpot import *  # 导入电位传感器的库
import time  # 导入时间库
from LED import *  # 导入LED灯的库

trimpot = Trimpot(board.GP26)  # 创建电位传感器对象，并传入引脚号
led = LED(board.GP0)  # 创建LED灯对象，并传入引脚号

while True:
    for i in range(100):  # led灯的亮度在该循环中增加
        led.set_led_bright(i)  # 设置led灯的亮度
        time.sleep(trimpot.get_trimpot() / 6553500)  # 通过改变电位器的值改变led灯亮度改变的时间

    for j in range(100):  # led灯的亮度在该循环中降低
        led.set_led_bright(100 - j)
        time.sleep(trimpot.get_trimpot() / 6553500)
```

### 案例演示

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/wukong2040/raspberry-pi-pico-inventors-kit/images/wukong2040-inventors-kit-case01-06.gif)

### 思考

请问您可以改变LED灯的亮度吗？

### 常见问题



### 更多信息，欢迎访问：

[micro:bit Accessories Store | ELECFREAKS](https://www.elecfreaks.com/)
