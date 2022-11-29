---
sidebar_position: 21
sidebar_label: 农田防护装置
---
# 农田防护装置


制作一个农田防护装置。

## 使用材料

[TOOCA L1 Laser Engraver](https://www.elecfreaks.com/elecfreaks-tooca-laser-1.html)

[Smart Agriculture Kit](https://www.elecfreaks.com/micro-bit-smart-agriculture-kit-without-micro-bit-board.html)

2.8mm椴木板

## 相关参数

|Model|TOOCA L1 Laser Engraver|
|:-------:|:-------:|
|耗材材质|椴木板|
|厚度|2.8mm|
|功率|100%|
|速度|240mm/min|
|通过次数|3|

注意：本案例以2.8mm的椴木板为例，如果需要使用不同厚度或者使用不同的材料，请自行修改图纸并参考TF卡中的`Recommended parameter`修改软件的参数。

## 图纸下载链接


[农田防护装置.dxf](https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/elecfreaks/learn-en/blob/master/tooca-laser-1/file/Cutting/farmland-protection-device/farmland-protection-device.dxf)


## 硬件连接方式


将超声波传感器连接到IOT:bit的P1端口，将人体红外传感器连接到IOT:bit的P2端口。

![](./images/tooca-laser-1-case-10-02.png)

## 软件编程



点击扩展，

![](./images/tooca-laser-1-case-10-03.png)

在弹出页面输入“iot-environment-kit”，点击搜索。

![](./images/tooca-laser-1-case-10-04.png)




## 编程


设置超声波传感器连接到P1端口，测距单位为cm，并保存返回值到变量“ultrasonic_distance”中，设置人体红外传感器连接到P2端口，并保存返回值到变量“IR”中。


![](./images/tooca-laser-1-case-10-05.png)

判断变量“ultrasonic_distance”的值是否在阈值内，如果是，则判断变量“IR”的返回值是否为1，如果变量“IR”的返回值为1，则设置LED矩阵显示图标，并且蜂鸣器发出警报声否则关闭灯光。

![](./images/tooca-laser-1-case-10-06.png)

如果变量“ultrasonic_distance”的值不在阈值内，则切换显示的图标。

![](./images/tooca-laser-1-case-10-07.png)

Link: [https://makecode.microbit.org/_5PbACb8kLcqr](https://makecode.microbit.org/_5PbACb8kLcqr)

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_5PbACb8kLcqr"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

## 结果
当有人靠近农田时，农田保护装置将会切换显示的图标，并且发出警报声提醒他人不要靠近。

## 效果展示

![](./images/tooca-laser-1-case-10-01.png)

![](./images/tooca-laser-1-case-10-08.png)
