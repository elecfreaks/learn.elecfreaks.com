---
sidebar_position: 7
sidebar_label: 案例07：树莓派系统扩容
---

# 案例07：树莓派系统扩容

## 简介

本课程旨在向学生介绍树莓派系统扩容的操作。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-read-01.png)**注意：XGO Rider 开机后，为保持机身平衡，需要小幅度来回移动，请不要将 XGO Rider 放在桌子边缘或者危险的地方，避免损坏。**


## 教学目标

了解树莓派系统扩容操作。

## 教学准备

在开始教学之前，请确保您已经准备好以下必要的材料：

| 图片 | 名称 | 数量 | 备注 |
|---|---|---|---|
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/)| CM4 XGO Rider | 1 |   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/) | 智能手机 | 1 |   |
| ![](https://wikimedia-ef.oss-cn-hongkong.al/otb.png) | PC | 1 | 自行准备 |


## 课程引入

因为出厂的镜像，系统只有15G,而sd卡的系统为32G.如果想要使用剩下的空间，可以看本教程。接下来，我们开始进入学习旅程吧。

## 探究活动

如何查看树莓派系统空间以及进行扩容。

## 软件

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-read-01.png)**注意：XGO Rider 开机后，为保持机身平衡，需要小幅度来回移动，请不要将 XGO Rider 放在桌子边缘或者危险的地方，避免损坏。**

### 1、使用 VNC-Viewer 连接树莓派

将 XGO Rider 开机后，进入遥控模式界面，即可查询到对应的 IP 地址。若没有 IP 地址，请按照联网操作重新联网。

请参考案例03教程内容，使用 VNC-Viewer 远程登录树莓派系统，进入树莓派系统桌面并打开终端。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/cm4-xgo-rider-kit-case07-01.png)

### 2、查看系统空间

输入下方指令，查询一下空间

df -h

可以看到树莓派系统的空间

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/cm4-xgo-rider-kit-case08-01.png)

### 3、扩容

输入以下指令进行扩容。

sudo raspi-config

就会进入此界面。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/cm4-xgo-rider-kit-case08-02.png)

选择第 6 个选项，按回车键。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/cm4-xgo-rider-kit-case08-03.png)

然后选择第 1 个选项，选确定。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/cm4-xgo-rider-kit-case08-04.png)

在这界面再按回车，然后选择Finish.之后重启 XGO Rider 即可。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/cm4-xgo-rider-kit-case08-05.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/cm4-xgo-rider-kit-case08-06.png)

重启 XGO Rider。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/cm4-xgo-rider-kit-case08-07.png)

再次查询空间。

df -h

发现扩容完成.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/cm4-xgo-rider-kit-case08-08.png)
