# 蓝色电位器电子积木

## 简介
---
octopus蓝色电位器电子积木是一个10K的电位器模块。通过旋转电位器旋钮来改变电阻值，既能实现分压，又能为单片机的模拟输入IO口提供模拟量信号。该模块接口采用3线防反插接口，可以方便使用GVS线连接。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/input/images/04085.JPG)

## 特性
---
- 采用3线防反插接口。
- 无需用螺丝刀，徒手旋转即可调节电阻。
- 结构紧凑。

## 参数
---

项目 | 参数
:-: | :-:
品名|Octopus蓝色电位器电子积木
SKU|EF04085
标称阻值范围|0-10K
工作电压|DC 2.7-5.5V
接口|GVS防反插接口
尺寸|详见下图
净重|3.5g

### 外型尺寸

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/input/images/octopus_board.png)

## 快速上手
---

### 硬件连接
将该模块连接至micro:bit扩展板P1口。（如下图）

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/input/images/04085.png)

### 软件编程
打开[Makecode在线编辑器](https://makecode.microbit.org/)，编写代码，使电位器控制micro:bit主板LED点阵灯的变化。

程序代码链接：[https://makecode.microbit.org/_8FFaqMHP34Vj](https://makecode.microbit.org/_8FFaqMHP34Vj)

你也能通过下列窗口直接下载代码
<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_8FFaqMHP34Vj"
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
旋转电位器旋钮，模拟输入值会以柱形图的形式显示在micro:bit屏幕上。

## Python 编程

### 步骤 1
下载压缩包并解压[Octopus_MicroPython-master](https://github.com/lionyhw/Octopus_MicroPython/archive/master.zip)
打开[Python editor](https://python.microbit.org/v/2.0)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/input/images/05001_07.png)

为了给电位器模块编程，我们需要添加trimpot.py。点击Load/Save，然后点击Show Files（1）下拉菜单，再点击Add file在本地找到下载并解压完成的Octopus_MicroPython-master文件夹，从中选择trimpot.py添加进来。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/input/images/05001_08.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/input/images/05001_09.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/input/images/04041_10.png)

### 步骤 2
### 参考程序
```
from microbit import *
from trimpot import *

s = TRIMPOT(pin1)
while True:
    display.scroll(s.get_analog())
```


### 结果
- 通过LED矩阵显示电位器的返回值。


## 常见问题
---
