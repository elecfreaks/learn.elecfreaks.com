---
sidebar_position: 6
sidebar_label: 案例06：关闭大程序
---

# 案例06：关闭大程序

## 简介

本课程旨在向学生介绍关闭树莓派系统的进程操作。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-read-01.png)**注意：XGO Rider 开机后，为保持机身平衡，需要小幅度来回移动，请不要将 XGO Rider 放在桌子边缘或者危险的地方，避免损坏。**


## 教学目标

了解树莓派系统进程以及关闭进程。

## 教学准备

在开始教学之前，请确保您已经准备好以下必要的材料：

| 图片 | 名称 | 数量 | 备注 |
|---|---|---|---|
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/)| CM4 XGO Rider | 1 |   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/) | 智能手机 | 1 |   |
| ![](https://wikimedia-ef.oss-cn-hongkong.al/otb.png) | PC | 1 | 自行准备 |


## 课程引入

如果我们要进行其它实验时，为了避免进程间对临界资源的占用，我们必须停止大程序。接下来，我们开始进入学习旅程吧。

## 探究活动

如何使用进入树莓派系统并关闭进程。

## 软件

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-read-01.png)**注意：XGO Rider 开机后，为保持机身平衡，需要小幅度来回移动，请不要将 XGO Rider 放在桌子边缘或者危险的地方，避免损坏。**

### 1、使用 VNC-Viewer 连接树莓派

将 XGO Rider 开机后，进入遥控模式界面，即可查询到对应的 IP 地址。若没有 IP 地址，请按照联网操作重新联网。

请参考案例03教程内容，使用 VNC-Viewer 远程登录树莓派系统，进入树莓派系统桌面并打开终端。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/cm4-xgo-rider-kit-case07-01.png)

### 2、查看进程号

输入以下的命令 查出大程序的进程号

ps -ef | grep "python"

### 3、找到 main.py 的进程

然后找到 mian.py的进程号，每次开机的进程号都不一样，需要根据实际情况去获取，教程这里是878。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/cm4-xgo-rider-kit-case07-02.png)

### 4、关闭进程

输入以下指令即可关闭大程序

sudo kill 878  #878为进程号，需要根据实际情况获取。
​
### 5、再次检查

确保大程序已经关闭，再查一下大程序是否还运行。

ps -ef | grep "python"

发现大程序已经关闭了。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/cm4-xgo-rider-kit-case07-03.png)

如果大程序没关闭的情况下，运行了单独的例程会导致小车的屏幕花屏、黑屏的情况，需要重启 XGO Rider 后，屏幕才能恢复。
