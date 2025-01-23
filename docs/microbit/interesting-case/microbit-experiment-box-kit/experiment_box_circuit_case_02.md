﻿---
sidebar_position: 4
sidebar_label: 电位器控制风扇转速
---

# 电路设计案例02：电位器控制风扇转速

## 简介 ##
---
使用实验箱套件完成一个纯电路设计，不使用micro:bit编程，用电位器控制电机的转速。

## 硬件连线图 ##
---

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/circuit-design/microbit-experiment-box-kit/images/VO9NEwe.png)

- 使用香蕉线按如上图连接电路，电池盒内放入2颗7号AAA电池。

## 主要元件介绍 ##
---
### 电位器 ###

- 电位器既可作三端元件使用也可作二端元件使用。后者可视作一可变电阻器。
- 可变电阻器，阻值可以调整的电阻器，用于需要调节电路电流或需要改变电路阻值的场合。可变电阻器可以改变信号发生器的特性，使灯光变暗，启动电动机或控制它的转速。
- 在电路原理图中使用如下电路符号表示。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/circuit-design/microbit-experiment-box-kit/images/H4BlhWs.jpg)


### N-MOS管 ###

- 当NMOS作为开关元件时候，当栅极G高于一定电压时，漏极D与源极S导通。漏极D与源极S电势相等。电路接通。

- 在电路原理图中使用如下电路符号表示。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/circuit-design/microbit-experiment-box-kit/images/pAPvoYd.jpg)

### 直流电机 ###

- 直流电动机是将直流电能转换为机械能的电动机。因其良好的调速性能而在电力拖动中得到广泛应用。直流电动机按励磁方式分为永磁、他励和自励3类。实验箱上板载了一颗3V永磁直流电机，电机转速与电压值成正比。启动电压为2V，额定电压为3V。
- 在电路原理图中使用如下电路符号表示。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/circuit-design/microbit-experiment-box-kit/images/w9gVNIj.jpg)

## 电路分析 ##
---

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/circuit-design/microbit-experiment-box-kit/images/HH1dh6R.png)

- 电位器电阻值增大的时候，一方面做为电机分压电阻，一方面向mos管栅极(G)输出电压信号。
- 当电位器旋至一定角度，mos管导通，电机电路连通，电机转动。
- 当电位器继续旋转，分压效果逐渐减小，电机电压逐渐增加，电机转速逐渐增加，直到旋钮旋转到底，分压效果消失，电机转速达到最高。

## 结论
---

- 电位器旋钮旋到一定角度电机启动，继续旋转转速逐渐增加，直到旋转到底转速打到最高。

## 思考
---

- 如何用电位器控制LED灯的亮度，如何设计电路。

## 常见问题
---

## 相关阅读
---
