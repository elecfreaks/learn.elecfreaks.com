﻿# 18B20温度传感器

## 简介
18B20温度传感器是基于Maxim IC DS18B20 1-Wire的数字温度传感器。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/05041_01.png)

## 特性
---
- RJ11端口设计，防止误插，易于使用。
## 技术规格
---

项目 | 参数
:-: | :-:
SKU|EF05041
接口|RJ11
接口类型|数字输出
工作电压|3.3V






## 外形与定位尺寸
---


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/05041_02.png)


## 快速上手
---

### 所需器材及连接示意图
---

- 如下图所示，将18B20温度传感器连接到哪吒扩展板的J1端口，并将OLED显示屏连接到哪吒扩展板的IIC端口。


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/05041_03.png)



## makecode编程
---

### 步骤 1
在MakeCode的代码抽屉中点击“高级”，查看更多代码选项。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/05001_04.png)

为了给18B20温度传感器编程，我们需要添加一个扩展库。在代码抽屉底部找到“扩展”，并点击它。这时会弹出一个对话框，搜索”PlanetX“，然后点击下载这个代码库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/05001_05.png)

*注意：*如果你得到一个提示说一些代码库因为不兼容的原因将被删除，你可以根据提示继续操作，或者在项目菜单栏里面新建一个项目。
### 步骤 2
### 如图所示编写程序

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/05041_06.png)


### 参考程序
请参考程序连接：[https://makecode.microbit.org/_i9fFoEC6t3mq](https://makecode.microbit.org/_i9fFoEC6t3mq)

你也可以通过以下网页直接下载程序，下载完成后即可开始运行程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_i9fFoEC6t3mq"
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
- 通过OLED显示屏显示18B20温度传感器的返回值。

## 相关案例
---

## 技术文档
---
