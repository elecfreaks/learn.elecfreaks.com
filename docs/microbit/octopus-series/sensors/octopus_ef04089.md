﻿# 3线宽压超声波电子积木

## 简介
Sonar:bit是一个3线宽压超声波模块，它可以工作电压为3.0V-5V，3.3v或5V的单片机系统均能使用；它只需要3根线（G、V、S）就可以工作，比常规的4线超声波模块节省一个IO口。Sonar:bit量程为2cm~400cm，测量数据稳定准确，误差仅为±1cm。可应用于短距离测量、智能小车、机器人、Micro:bit、Arduino配套教学等场合。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04089_01.png)



## 特性
---
- 输入电压为3V~5V，micro:bit与arduino均能直接驱动。

- 标准的3线GVS接口，仅占用一个IO口。

## 技术规格
---


| 项目      | 规格 |
|------------------|---------------------|
| 产品名称 | 3线宽压超声波模块    |
| SKU | EF04089             |
| 输入电压 | DC 3-5V           |
| 量程 | 2~400CM           |
| 精度 | ±1cm                  |
| 尺寸 | 40.60mm × 51.60mm    |
| 净重 | 12g     |



<b>注意：当使用超声波传感器时，应该注意超声波传感器的测量范围，当障碍物与超声波传感器的距离小于2cm或者大于400cm时，超声波传感器返回值为0。</b>



## 外形与定位尺寸
---



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04089_03.png)


## 引脚接口框图

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/7E5ECzN.jpg)

超声波发射探头用于发射超声波信号。

## 主体功能模块介绍

### 超声波发射探头

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/T1xDsne.jpg)

超声波发射探头用于发射超声波信号。

### 超声波接收探头

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/JxNrz8Q.jpg)

超声波接收探头用于接收超声波信号。

### 主控芯片MCU

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/2CjnvfP.jpg)

超声波模块核心控制芯片。

### 发射信号驱动芯片

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/iOW0IN3.jpg)

发射信号驱动芯片用于提供驱动超声波发射探头的发射超声波信号。

### 接收信号处理芯片

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/VxEZ5KQ.jpg)

接收信号处理芯片用于对超声波回波信号进行接收与处理，并将处理好的信号反馈给主控芯片。

### G-V-S信号控制接口

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/N9yc6Jm.jpg)

G-V-S信号控制接口，用于外部设备控制超声波模块的工作。

## 快速上手
---

### 所需器材及连接示意图
---

- 将sonar:bit连接到iot:bit的P1端口，micro:bit连接到电脑。 连接好后如图所示：

***以iot:bit为例***



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04089_04.png)


### 步骤 1
 在MakeCode的代码抽屉中点击“高级”，点击“扩展”选项。


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04089_05.png)


为了使用超声波模块，我们需要添加一个扩展库。在代码抽屉底部找到“扩展”，并点击它。这时会弹出一个对话框，搜索”https://github.com/elecfreaks/pxt-sonarbit” ，然后点击下载这个代码库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04089_06.png)


*注意：*如果你得到一个提示说一些代码库因为不兼容的原因将被删除，你可以根据提示继续操作，或者在项目菜单栏里面新建一个项目。

### 步骤 2
在`无限循环`中，通过显示数字显示超声波的返回值。


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04089_07.png)




### 参考程序
请参考程序连接：[https://makecode.microbit.org/_eyU2yC79fXyc](https://makecode.microbit.org/_eyU2yC79fXyc)

你也可以通过以下网页直接下载程序，下载完成后即可开始运行程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_eyU2yC79fXyc"
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
- 通过micro:bit主板的5x5LED矩阵实时显示超声波模块与物体之间的距离，单位为cm。

### 注意事项

- 使用超声波传感器时应该注意超声波传感器的检测范围，并注意设定阈值，排除因为障碍物处于量程之外而导致返回值为0的情况。


## 相关案例
---

## 技术文档
---
