---
sidebar_position: 16
sidebar_label: 案例09 噪音检测器
---


# 案例09 噪音监测器

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/wukong2040/raspberry-pi-pico-inventors-kit/images/wukong2040-inventors-case09-01.png)

## 简介

当我们正在专心学习时，周围是令人烦躁的汽车鸣笛声以及行人的吵闹声，这是一件痛苦又无奈的体验。同时，我们知道周围环境噪音超过60分贝的时候是可以向有关部门进行投诉举报的，那么现在我们可以使用噪音传感器以及OLED显示屏实时监测噪音的大小。

## 组件清单

1 × Raspberry Pi Pico

1 × Wukong2040 扩展板

1 × USB 数据线

1 × 噪音传感器

1 × OLED 显示屏幕

1 × 3P带扣杜邦线

## 相关知识介绍

### 噪音等级划分

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/wukong2040/raspberry-pi-pico-inventors-kit/images/wukong2040-inventors-case09-02.png)

根据国家环境法规定，城市五类区域的环境噪声最高限值：

1、疗养区、高级别墅区、高级宾馆区，昼间50分贝、夜间40分贝。

2、以居住、文教机关 为主的区域，昼间55分贝、夜间45分贝。

3、居住、商业、工业混杂区，昼间60分贝、夜间50分贝。

4、工业区，昼间65分贝、夜间55分贝。

5、城市中的道路交通干线道路、内河航道、铁 路主、次干线两侧区域，昼间70分贝、夜间55分贝，(夜间指22点到次日晨6点)。

### 声音的度量

声音本质是一种波，通过空气传播到人耳引起耳膜的震动，其实声音的大小就是反应震动的强烈。声音的强弱用“分贝（db）”表示，有一个需要了解的知识点，声音分贝值上升10db，并不是在原有的基础上增加了10db，而是表示音量上升了10倍，一般夜间环境声音在40db以内属于正常范围，白天在50db属于正常范围。如果人长期在70db的环境中，开始损坏听力神经，声音达到90db以上就会让听力受损。可以通过比较熟悉的场景来认识一下声音的分贝值。

- 清晨鸟叫声在15分贝左右，人们感到舒适安静；
- 你和好朋友在耳边说悄悄话的声音在30分贝左右；
- 当家中洗衣机滚筒高速旋转时的声音在40分贝左右；
- 在你逛繁华的商业街时周围的环境声音在70分贝左右；

## 硬件连接

按照下面连接示意图，将您的元器件连接起来：

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/wukong2040/raspberry-pi-pico-inventors-kit/images/wukong2040-inventors-case09-05.png)

## MicroBlocks 图形化编程

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/wukong2040/raspberry-pi-pico-inventors-kit/images/wukong2040-inventors-case09-04.png)

## CircuitPython 代码编程

```python
from Noise import *  # 导入噪音传感器库
from OLED import *  # 导入OLED屏幕库
import time  # 导入时间库

noise = Noise(board.GP26)  # 创建噪音传感器对象并传入引脚号
oled = OLED(board.GP17, board.GP16)  # 创建OLED屏幕对象并传入SDA-GP17,SCL-GP16引脚号

while True:
    noise_value = noise.get_noise()  # 获取噪音传感器的值并赋值给 noise_value
    oled.set_show(0, 0, "DB:")  # 在坐标（0，0）的位置开始显示字符“DB”
    oled.set_show(20, 0, int(noise_value / 655.35))  # 在坐标（20，0）的位置开始显示内容
    time.sleep(0.5)
    oled.set_clear()  # 清除OLED屏幕显示
```

## 案例演示

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/wukong2040/raspberry-pi-pico-inventors-kit/images/wukong2040-inventors-kit-case09-06.gif)

## 思考

请问您能否设置监测声音的临界值，当达到这个值时蜂鸣器发出警报？



## 常见问题



## 更多信息，欢迎访问：

[micro:bit Accessories Store | ELECFREAKS](https://www.elecfreaks.com/)
