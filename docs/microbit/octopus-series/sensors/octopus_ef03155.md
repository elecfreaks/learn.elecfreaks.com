# OLED显示屏

## 简介
---
- 这是一款OLED显示屏，用于打印在屏幕想要显示的数据信息（不支持显示中文）。

 ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/output/images/Xa4wAJ3.jpg)

## 特性
---
- 这个显示器是迷你型的oled显示器，直径只有1英寸，借助OLED显示屏的高对比度达到极高的清晰度。
- 该显示器由128x64个白色OLED像素组成，每个像素由控制器芯片打开或关闭。
- 显示器很小巧，OLED显示器的高对比度提供了它极强的可读性。 该显示器由128×64个单独的白色OLED像素构成，每个像素由控制器芯片打开或关闭。
- 显示器是一款无需背光自发光的模块。这降低了运行OLED所需的功率，这也是显示器具有如此高对比度的原因;我们真的很喜欢这款微型显示器的清晰度！
- 设计时板载了稳压器和内置升压转换器完全支持5V供电。直接连接到3V或5V微控制器比以往任何时候都更容易，而无需任何类型的电平转换器！

## 技术规格
---

项目 | 参数
:-: | :-:
SKU|EF03155
OLED自发光|无背光
屏幕尺寸 | 0.96
分辨率|128×64
颜色|蓝色
通讯方式|IIC
功耗|超低功耗
工作温度|-20-70℃
工作电压|3.3-5V
模块尺寸|27mm * 28mm

## 外形与定位尺寸
---

 ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/output/images/0C9CgFF.jpg)

## 快速上手
---

### 连接示意图
- CL引脚连接CL;SA引脚连接DA;V引脚连接V;G引脚连接G

***以sensor:bit为例***

 ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/output/images/JnrQKL9.png)

### 添加Package
- 在MakeCode的代码抽屉中点击Advanced，查看更多代码选项。

 ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/output/images/03155_01.png)

- 点击“Extensions”，在弹出的对话框中搜索“oled"，下载oled-ssd1306代码库。

 ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/output/images/03155_02.png)

 ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/output/images/03155_03.png)

### 如图所示编写程序
- 初始化OLED屏幕为64*128像素。
- 显示一行字符:“elecfreaks”

 ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/output/images/03155_04.png)

### 参考程序
---
请参考程序连接：[https://makecode.microbit.org/_D9AVPTPEigh9](https://makecode.microbit.org/_D9AVPTPEigh9)

你也可以通过以下网页直接下载程序，下载完成后即可开始运行程序。
<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_D9AVPTPEigh9"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>
---

### 结果
- 显示器上显示了一个elecfreaks的字样。

 ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/output/images/2ThINGK.jpg)


## Python 编程

### 步骤 1
下载压缩包并解压[Octopus_MicroPython-master](https://github.com/lionyhw/Octopus_MicroPython/archive/master.zip)
打开[Python editor](https://python.microbit.org/v/2.0)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/output/images/05001_07.png)

为了给OLED编程，我们需要添加oled.py。点击Load/Save，然后点击Show Files（1）下拉菜单，再点击Add file在本地找到下载并解压完成的Octopus_MicroPython-master文件夹，从中选择oled.py添加进来。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/output/images/05001_08.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/output/images/05001_09.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/output/images/03155_10.png)

### 步骤 2
### 参考程序
```
from microbit import *
from oled import *

display = OLED1306()
display.set_text(0, 0, "hello")
```


### 结果
- OLED显示屏显示hello。





## 相关案例
---

## 技术文档
---
[Datasheet](https://elecfreaks.com/estore/download/EF03155-Datasheet)
