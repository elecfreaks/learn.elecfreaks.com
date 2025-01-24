# 模拟水位传感器电子积木

## 简介
---

Octopus Water level sensor是我们OCTOPUS系列的水位传感器电子积木，它的基本设计是根据OCTOPUS电子积木系列设定的，它的外形、PCB固定孔、电子积木的接口的设定是相同的。

模拟水位电子积木是一款简单易用、性价比高的传感器，通过具有一系列的暴露的平行导线测量其水量大小而判断水位。

轻松完成水量到模拟信号的转换，输出的模拟值可以直接被micor:bit读取，达到水位报警的功能。

特别注意：MAX水位线上方元件不防水，请勿将其没入水中。


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04094_01.jpg)



## 特性
---
- 简单、使用方便、体积小巧。
- 采用3V供电，可支持micro:bit。
- 接线方便。

## 参数
---
- 品名：模拟水位传感器电子积木
- SKU：EF04094
- 工作电压：DC 3~5.5V
- 连接模式：G-GND，V-VCC，S-信号引脚
- 尺寸：59.15 x 19mm
- 净重：5.5g

## 外型与定位尺寸
---

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04094_01.png)

## 快速上手
---
### 硬件连接

将模块通过带扣杜邦线插入sensor:bit上的P1引脚，将micro:bit主板插入sensor:bit。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04094_02.png)

### 软件编程

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04094_03.png)


程序代码链接：[https://makecode.microbit.org/_4urWJCMeuh4L](https://makecode.microbit.org/_4urWJCMeuh4L)

你也能通过下列窗口直接下载代码
<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_4urWJCMeuh4L"
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

点阵显示屏显示当前水位值。


## Python 编程

### 步骤 1
下载压缩包并解压[Octopus_MicroPython-master](https://github.com/lionyhw/Octopus_MicroPython/archive/master.zip)
打开[Python editor](https://python.microbit.org/v/2.0)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/05001_07.png)

为了给水位传感器编程，我们需要添加waterlevel.py。点击Load/Save，然后点击Show Files（1）下拉菜单，再点击Add file在本地找到下载并解压完成的Octopus_MicroPython-master文件夹，从中选择waterlevel.py添加进来。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/05001_08.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/05001_09.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04094_10.png)

### 步骤 2
### 参考程序
```
from microbit import *
from waterlevel import *

s = WATERLEVEL(pin1)
while True:
    display.scroll(s.get_waterlevel())
```


### 结果
- 通过LED矩阵显示水位传感器的返回值。



## 常见问题
