# 七段四位数码管电子积木

## 简介
---




![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04056_1.jpg)




## 特性
---

- 3V电压支持micro:bit驱动

## 技术规格
---

项目 | 参数
:-: | :-:
SKU|EF04056
电源需求|3V-5.5V
引脚定义|1-CLK 2-DIO 3-VCC 4-GND
响应|快速响应和高灵敏度
电路|简单的驱动电路
稳定性|稳定耐用

## 外形与定位尺寸
---



## 快速上手
---

### 所需器材及连接示意图






### 添加Package
---
在MakeCode的代码抽屉中点击Advanced，查看更多代码选项。


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/smtcNoB.png)


点击“Extensions”，在弹出的对话框中搜索“TM1637"，下载TM1637代码库。



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04056_3.png)



### 如图所示编写程序
- 通过七段四位数码管显示数字





![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04056_5.png)





### 参考程序
请参考程序连接：[https://makecode.microbit.org/_P5HfWFAvHe8J](https://makecode.microbit.org/_P5HfWFAvHe8J)
你也可以通过以下网页直接下载程序，下载完成后即可开始运行程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_P5HfWFAvHe8J"
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
- 通过七段四位数码管显示设定数字

## Python 编程

### 步骤 1
下载压缩包并解压[Octopus_MicroPython-master](https://github.com/lionyhw/Octopus_MicroPython/archive/master.zip)
打开[Python editor](https://python.microbit.org/v/2.0)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/05001_07.png)

为了给七段四位数码管编程，我们需要添加nixietube.py。点击Load/Save，然后点击Show Files（1）下拉菜单，再点击Add file在本地找到下载并解压完成的Octopus_MicroPython-master文件夹，从中选择nixietube.py添加进来。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/05001_08.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/05001_09.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04056_10.png)

### 步骤 2
### 参考程序
```
from microbit import *
from nixietube import *

tm = NIXIETUBE(pin1, pin2)

n = 0
while 1:
    tm.set_show_num(n)
    n += 1
```


### 结果
- 在七段四位数码管显示计数。





## 相关案例
---

## 技术文档
---
