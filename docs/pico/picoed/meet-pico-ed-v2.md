---
sidebar_position: 1
sidebar_label: Pico:ed V2
---

# 认识 Pico:ed V2
## 前言
[Pico:ed V2](https://item.taobao.com/item.htm?spm=a1z10.3-c-s.w4002-18602834180.9.50e666558ZthdZ&id=680221594556) 是恩孚科技基于树莓派 Pico 而开发的一款教育开发板。[Pico:ed V2](https://item.taobao.com/item.htm?spm=a1z10.3-c-s.w4002-18602834180.9.50e666558ZthdZ&id=680221594556) 采用了广受好评的 RP2040 微控制器，在一代的基础上我们特别加入了一个复位按钮，更方便使用者的操作使用。[Pico:ed V2](https://item.taobao.com/item.htm?spm=a1z10.3-c-s.w4002-18602834180.9.50e666558ZthdZ&id=680221594556) 采用更加圆润的外形：头部改变为弧形，引脚边缘采用波浪形设计，这样让使用者在使用时不易伤手。
[Pico:ed V2 ](https://item.taobao.com/item.htm?spm=a1z10.3-c-s.w4002-18602834180.9.50e666558ZthdZ&id=680221594556)保留两个可编程按钮和固件烧录按钮，单独的供电接口和 USB 连接接口，板载 7× 17 LED点阵屏，可以显示更多的图案和文字。[Pico:ed V2](https://item.taobao.com/item.htm?spm=a1z10.3-c-s.w4002-18602834180.9.50e666558ZthdZ&id=680221594556) 采用的是 CircuitPython/C++ 编程方式，可以单独对它进行编程学习，同时也可以和我们公司其他教育产品结合使用，比如：Ring:bit Car V2、 Cutebot Car V2、Starter Kit 等产品，在学习编程的同时，启动你的发明创造思维。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/picoed/images/picoed-wiki.png)


## Pico:ed V2 功能

### 正面功能介绍：

#### A/B 按键
Pico:ed V2 正面有两个可编程输入按钮，左边是 A 键，右边是 B 键。可以单独对每个按键进行编程，也可以一起使用。一般用于触发事件，比如按下 A 键，点亮与之相连的 LED 灯。关于具体的使用方式可以参考：[按键](https://www.yuque.com/elecfreaks-learn/picoed/yc06co)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/picoed/images/pico-v2-01.png)

#### 引脚
Pico:ed V2 底部边缘可以看到一条条金色条纹--引脚。引脚是用来与外界相连的元器件进行物理连接的方式，可以结合恩孚科技推出的相应的扩展板或者鳄鱼夹线来扩展 Pico:ed V2 更多的可用性，并且引脚口边缘我们采用了波浪形设计，不仅外观更美，而且不易伤手，同时在连接扩展板或使用鳄鱼夹线时，连接更加牢固。你最开始使用的可能是0、1、2号引脚，关于引脚的具体使用方式可以参考：[小小科学家-案例01 LED](https://www.yuque.com/elecfreaks-learn/picoed/ig010b/edit) 。
3V 电源引脚可以对外部元器件进行供电，GND 引脚是接地线，此引脚被用来形成电回路。更多详细引脚		定义，可以查看**引脚图**。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/picoed/images/pico-v2-02.png)![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/picoed/images/pico-v2-03.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/picoed/images/pico-v2-04.png)

#### LED 灯矩阵屏幕和标志指示灯
当你拿到 Pico:ed V2 时，第一眼看到的可能就是正面大大的 LED 灯矩阵屏幕。LED 灯又叫发光二极管，可以控制发光和关闭，是通用的输出设备。它由 7×17 个 LED 灯组成，可以丰富的显示你想要的图案。而且，我们已经写好了一些有趣的图案，您可以查看并尝试：[LED 灯矩阵屏幕](https://www.yuque.com/elecfreaks-learn/picoed/tne8fm)
特别之处，我们还加入了一个标志指示灯，当然，标志指示灯同样可以编程，它的引脚号是 GP25。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/picoed/images/pico-v2-05.png)![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/picoed/images/pico-v2-06.png)

### 背面功能介绍：

#### 微控制器
Pico:ed V2 背面很重要的一个部件应该就是微控制器：RP2040。如同上文所说，RP2040 是树莓派推出的一款为创客教育而生的微控制器，小小的芯片，性能却相当强悍，而且灵活的 I/O 允许它几乎与任何外界元器件数据交换。更过详细信息您可以参考：[Raspberry Pi RP2040](https://www.raspberrypi.com/products/rp2040/)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/picoed/images/pico-v2-07.png)

#### 蜂鸣器
我们希望您在编程中可以有更多的交互功能，所以，我们加入了蜂鸣器元器件，它是无源蜂鸣器。蜂鸣器作为常用的输出设备，在很多设备中都有使用，当然加入的蜂鸣器是可编程的，您可以通过编程控制它播放不同的音乐。关于具体蜂鸣器的使用，您可以查看这篇文章：[音乐播放](https://www.yuque.com/elecfreaks-learn/picoed/pwdmqz)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/picoed/images/pico-v2-08.png)

#### 复位按键和固件烧录按键

在背面我们同样放置了两个按钮，但是这两个按钮具有特定的功能：左边按钮是固件烧录按钮，右边按钮是复位按钮。固件烧录按钮是在您初次使用烧录固件的时候使用的，在烧录固件的时候需要按住它。复位按钮可以重新让编写的程序运行。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/picoed/images/pico-v2-09.png)


#### USB 插槽和电池盒插槽
可以给 Pico:ed V2 供电的方式有两种：USB 供电，电池盒供电。同时，USB 接口也是程序烧录接口，外接电池盒接口可以连接 2 节 AAA( 7 号) 电池。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/picoed/images/pico-v2-10.png)![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/picoed/images/pico-v2-11.png)



### 功能汇总

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/picoed/images/pico-v2-12.png)![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/picoed/images/pico-v2-13.png)


## 规格参数
| 产品名称 | ELECFREAKS Pico:ed V2 |
| --- | --- |
| 微控制器 | RP2040 |
| 随机存取存储器 | 264KB |
| 闪存 | 2MB |
| 通用输入输出 | 19针通用边缘连接器 |
|  | 4 × 模拟输入 |
|  | 3 × GPIO 鳄鱼夹连接口 |
|  | 2 × IIC 接口 |
|  | 2 × SPI  接口 |
|  | 2 × UART 接口 |
| 可编程按钮 | 2个 |
| LED矩阵 | 7 × 17 LED灯矩阵屏幕 |
| 蜂鸣器 | 1个无源蜂鸣器 |
| 长宽尺寸 | 52 × 42mm |
| 电源 | USB供电或者两节1.5V电池 |
| 编程方式 | CircuitPython/MicroPython/C/C++ |



## 相关链接
淘宝购买地址：[恩孚科技 Pico:ed V2](https://item.taobao.com/item.htm?spm=a1z10.3-c-s.w4002-18602834180.9.50e666558ZthdZ&id=680221594556)
