# 绿色圆形LED

## 简介
---
Octopus 5mmLED灯模块，能和micro:bit/Arduino板搭配起来实现调整环境光的功能。

 ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/output/images/SNPuLwe.jpg)

## 特性
---
- 三线端口防止错误插拔，易于使用。

## 技术规格
---

项目 | 参数
:-: | :-:
SKU|04062
电压|3.3V-5V
重量|5克

## 外形与定位尺寸
---
 ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/output/images/cdNd1Kw.png)

## 快速上手
---

### 所需器材及连接示意图
如图连接扩展板的P0口

***以octupus：bit为例***

 ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/output/images/KsTl0U6.png)


### 如图所示编写程序
- 向P0引脚中每隔一秒钟写入1或0.

 ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/output/images/AAzv9pn.png)

### 参考程序
请参考程序连接：[https://makecode.microbit.org/_J82V5PgzghKR](https://makecode.microbit.org/_J82V5PgzghKR)

你也可以通过以下网页直接下载程序，下载完成后即可开始运行程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_J82V5PgzghKR"
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
- led灯一秒钟闪一次

## Python 编程

### 步骤 1
下载压缩包并解压[Octopus_MicroPython-master](https://github.com/lionyhw/Octopus_MicroPython/archive/master.zip)
打开[Python editor](https://python.microbit.org/v/2.0)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/output/images/05001_07.png)

为了给LED灯编程，我们需要添加led.py。点击Load/Save，然后点击Show Files（1）下拉菜单，再点击Add file在本地找到下载并解压完成的Octopus_MicroPython-master文件夹，从中选择led.py添加进来。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/output/images/05001_08.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/output/images/05001_09.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/output/images/04036_10.png)

### 步骤 2
### 参考程序
```
from microbit import *
from led import *

l = LED(pin1)
while True:
    l.set_led(1,100)
    sleep(500)
    l.set_led(0,0)
    sleep(500)
```


### 结果
- LED灯每秒闪烁一次。


## 相关案例
---

## 技术文档
---
