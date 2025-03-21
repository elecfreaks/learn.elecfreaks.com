﻿---
sidebar_position: 9
---


# iot套件案例03：环境质量监测站

## 目的
---

- 制作一个环境质量监测站。

## 使用材料
---
- 1 x [IOT:kit(物联网环境科学套件):https://www.elecfreaks.com/store](https://www.elecfreaks.com/store/micro-bit-smart-science-iot-kit-with-micro-bit.html)

## 背景知识
---
### 什么是环境检测

环境监测是利用GIS技术对环境监测网络进行设计,环境监测收集的信息又能通过GIS适时储存和显示，并对所选评价区域进行详细的场地监测和分析。

## 硬件连接图
---

如图所示，将光线传感器模块连接到`P1`口。

BME280模块连接到`IIC`接口`SCL-P19` `SDA-P20`。

OLED屏幕连接`IIC`接口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/case_03_01.png)

## 软件
---

[微软makecode](https://makecode.microbit.org/#)

## 编程
---

### 步骤 1
- 在MakeCode的代码抽屉中点击高级，查看更多代码选项。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/iot_bit_11.png)

- 为了给IoT物联网环境科学套件编程，我们需要添加一个扩展库。在代码抽屉底部找到“扩展”，并点击它。这时会弹出一个对话框。搜索“IOT"，然后点击下载这个代码库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/iot_bit_12.png)

*注意：*如果你得到一个提示说一些代码库因为不兼容的原因将被删除，你可以根据提示继续操作，或者在项目菜单栏里面新建一个项目。

### 步骤 2

在`当开机时`中插入`initialize OLED`积木块，参数填入`64*128`。

初始化OLED屏幕为`64`像素*`128`像素。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/case_03_02.png)

### 步骤 2

在`无限循环`中依次插入`show string`积木块，`show number`积木块。

显示当前光线值，温度以及湿度值。

插入`insert newline`积木块，另起一行。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/case_03_03.png)

### 程序

请参考程序连接：[https://makecode.microbit.org/_MfjUxjL5TA7M](https://makecode.microbit.org/_MfjUxjL5TA7M)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_MfjUxjL5TA7M"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>
### 现象
---

每分钟显示当前环境的光线值、温度值、湿度值。

## 思考
---

如何统计一天内的数据。

## 常见问题
---

## 相关阅读
---
