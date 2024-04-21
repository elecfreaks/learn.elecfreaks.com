---
sidebar_position: 5
sidebar_label: remote door opener
---


# remote door opener

## 功能简介

当有人访问房子时，按动碰撞传感器，此时门锁端的micro:bit发送信号通知遥控端的micro:bit，当遥控端的micro:bit接收到信号时，显示图案，此时按下遥控端的micro:bit的A按键，则门锁端的micro:bit显示笑脸图标并控制舵机打开房门，并在OLED显示屏上显示“Welcome”，如果按下遥控端的micro:bit的B按键，则门锁端的micro:bit显示×图标，并在OLED显示屏上显示“Refused to enter”。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-smart-home-kit/images/remote-door-opener-01.png)

## 课前准备

2 × micro:bit V2

1 × Classrom Smart Home Kit

1 × micro USB 数据线

1 × Smart Home Material Pack

## 课程目标

了解micro:bit的无线通信功能。

了解碰撞传感器和舵机的工作原理。

掌握OLED显示屏的使用方法。

## 探究问题

micro:bit的无线通信是否可以同时和多个micro:bit进行通信？

使用micro:bit的无线通信功能时，如何防止相互干扰的？

碰撞传感器和舵机时如何工作的？

## 扩展知识

*** 碰撞传感器的工作原理 ***

碰撞传感器通过内部的机械结构来完成电路的导通和中断，当碰撞传感器的外部探测臂受到碰撞，探测臂受力下压，带动碰撞传感器内部的簧片拨动，从而电路的导通状态发生改变。

*** 舵机的工作原理 ***

伺服电机通常被称为舵机，它是一种带有输出轴的小装置。当我们向伺服器发送一个控制信号时，输出轴就可以转到特定的位置。只要控制信号持续不变，伺服机构就会保持轴的角度位置不改变。如果控制信号发生变化，输出轴的位置也会相应发生变化。日常生活中，舵机常被用于遥控飞机、遥控汽车、机器人等领域。

控制线用于传输角度控制信号。这个角度是由控制信号脉冲的持续时间决定的，这叫做脉冲编码调制（PCM）。舵机的控制一般需要一个20ms左右的时基脉冲，该脉冲的高电平部分一般为0.5ms-2.5ms范围，总间隔为2ms。脉冲的宽度将决定马达转动的距离。例如：1.5毫秒的脉冲，电机将转向90度的位置（通常称为中立位置，对于180°舵机来说，就是90°位置）。如果脉冲宽度小于1.5毫秒，那么电机轴向朝向0度方向。如果脉冲宽度大于1.5毫秒，轴向就朝向180度方向。以180度舵机为例，对应的控制关系是这样的：

>0.5ms————-0度；
>1.0ms————45度；
>1.5ms————90度；
>2.0ms———–135度；
>2.5ms———–180度；

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-smart-home-kit/images/remote-door-opener-02.gif)

## 硬件连接

碰撞传感器连接到IOT:bit的P2端口，将舵机连接到IOT:bit的P1端口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-smart-home-kit/images/remote-door-opener-02.png)

## 软件编程

### 添加软件库

打开[makecode编程平台](https://makecode.microbit.org/)

点击新建项目，在弹出的窗口填入项目名称并点击新建。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-smart-home-kit/images/remote-door-opener-03.png)

点击扩展

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-smart-home-kit/images/remote-door-opener-04.png)

在弹出界面的搜索栏输入servo，点击搜索，在搜索结果中选择舵机的软件库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-smart-home-kit/images/remote-door-opener-05.png)

### 安装须知

在安装舵机前，需要先调整舵机角度。

当按键A被按下时，控制连接到P1的舵机转动到90度。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-smart-home-kit/images/remote-door-opener-06.png)

编写并下载程序。

舵机位置初始化程序:[https://makecode.microbit.org/S33825-77887-10264-59836](https://makecode.microbit.org/S33825-77887-10264-59836)

按下micro:bit上的按键A，控制舵机转动到90度。

转动传动杆，让房门处于关闭状态，调整完成后再将传动杆安装到舵机上。

### 程序详解

*** 门锁端程序 ***

当开机时，

设置micro:bit的LED矩阵显示爱心图标，以确保程序下载成功；

初始化OLED显示屏；

设置无线通信组别为1；

初始化舵机角度为90°；

设置P2引脚上拉。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-smart-home-kit/images/remote-door-opener-07.png)

在无限循环中判断连接在P2引脚的碰撞传感器是否被按下，

当碰撞传感器被按下时，无线发送数字1，延迟200ms，防止按键抖动，

否则无线发送数字0。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-smart-home-kit/images/remote-door-opener-08.png)

当无线通信接收到信号时；

如果接收到的信号为“Open”；

则OLED显示屏显示“Welcome”；

控制连接到P1的舵机转动到0°，将门打开，暂停5000ms，然后控制舵机转动到90°，将门关闭；

清除OLED显示屏显示信息，micro:bit的LED矩阵显示爱心图标；

否则如果接收到的信号为“Refused”；

则OLED显示屏显示“Refused to enter”；

micro:bit的LED矩阵显示错误图标，暂停5000ms；

清除OLED显示屏显示信息，micro:bit的LED矩阵显示爱心图标；

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-smart-home-kit/images/remote-door-opener-09.png)


程序链接：[https://makecode.microbit.org/S43729-79384-22654-20945](https://makecode.microbit.org/S43729-79384-22654-20945)


*** 遥控端程序 ***

当开机时，

设置无线通信组别为1；

设置micro:bit的LED矩阵显示爱心图标，以确保程序下载成功；

设置变量`key`为false。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-smart-home-kit/images/remote-door-opener-10.png)

当无线通信接收到信号时；

如果接收到的信号为1；

则设置变量`radio`的值为1；

如果接收到的信号为0；

则设置变量`radio`的值为0；

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-smart-home-kit/images/remote-door-opener-11.png)

在无限循环中判断变量`radio`的值，

当变量`radio`的值为1时，

设置micro:bit的LED矩阵显示菱形图标；

设置变量`key`为ture；

当变量`key`为ture时，进入循环，判断按键A或者按键B是否按下；

当按键A被按下时，micro:bit的LED矩阵显示笑脸图标，无线通信发送`Open`，设置变量`key`为false；

当按键B被按下时，micro:bit的LED矩阵显示错误图标，无线通信发送`Refused`，设置变量`key`为false；

当变量`key`为false时，自动跳出循环，micro:bit的LED矩阵显示爱心图标。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-smart-home-kit/images/remote-door-opener-12.png)


程序链接：[https://makecode.microbit.org/S60091-73106-37070-71707](https://makecode.microbit.org/S60091-73106-37070-71707)

## 案例演示


当有人访问房子时，按动碰撞传感器，此时门锁端的micro:bit发送信号通知遥控端的micro:bit，当遥控端的micro:bit接收到信号时，显示图案，此时按下遥控端的micro:bit的A按键，则门锁端的micro:bit显示笑脸图标并控制舵机打开房门，并在OLED显示屏上显示“Welcome”，如果按下遥控端的micro:bit的B按键，则门锁端的micro:bit显示×图标，并在OLED显示屏上显示“Refused to enter”。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-smart-home-kit/images/remote-door-opener.gif)
