---
sidebar_position: 2
sidebar_label: 案例02：树莓派教程-SSH与VNC远程登录
---

# 案例02：树莓派教程-SSH与VNC远程登录

## 简介

本课程旨在向学生介绍 SSH 与 VNC 远程登录操作。
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-read-01.png)**注意：XGO Rider 开机后，为保持机身平衡，需要小幅度来回移动，请不要将 XGO Rider 放在桌子边缘或者危险的地方，避免损坏。**


## 教学目标

了解 SSH 与 VNC 远程登录的基本概念与实际操作。

## 教学准备

在开始教学之前，请确保您已经准备好以下必要的材料：

| 图片 | 名称 | 数量 | 备注 |
|---|---|---|---|
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/xgo-rider-cm4-kit-introdutin-01.png)| CM4 XGO Rider | 1 |   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-03.png) | PC | 1 | 自行准备 |


## 课程引入

有没有想过，当你把树莓派塞进机器人、挂在墙上的电子相框，甚至部署在千里之外的服务器机房后，如何不用插键盘、鼠标、显示器，也能轻松操控它？
——远程控制就是你的答案！

本课将带你掌握两大「远程神器」：

🔹 SSH：用一行命令直连树莓派终端，像黑客一样高效管理代码、安装服务

🔹 VNC：直接看到树莓派的图形化桌面，鼠标点点就能操作，仿佛屏幕就在眼前

📢 准备好让你的树莓派摆脱「线制」了吗？

下一分钟开始，你的电脑就是树莓派的超级遥控器！

## 探究活动

如何使用 putty 软件使用 SSH 服务远程登录树莓派操作系统。

使用 VNC-Viewer 软件远程登录树莓派桌面。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-read-01.png)**注意：XGO Rider 开机后，为保持机身平衡，需要小幅度来回移动，请不要将 XGO Rider 放在桌子边缘或者危险的地方，避免损坏。**

## 软件

SSH 远程登录需要保证电脑主机和树莓派在同一个局域网才可以正常使用。如果树莓派连接网线或者 WiFi 信号，请确认电脑连接的网络信号与树莓派在同一局域网。

### 1、获取 XGO Rider 树莓派 IP 地址

将 XGO Rider 开机后，进入遥控模式界面，即可查询到对应的 IP 地址。若没有 IP 地址，请按照联网操作重新联网。

### 2、putty 远程登陆

打开 putty 软件，使用 SSH 服务远程登录树莓派操作系统。putty 软件的官方下载链接：https://www.putty.org/


输入用户名（pi）和密码（pi）。如果您更改过用户名与密码，请根据实际情况输入。

### 3、VNC 远程登陆

打开 VNC-Viewer 软件，使用 VNC 服务远程登录树莓派桌面。VNC-Viewer 软件的官方下载链接：https://www.realvnc.com/en/connect/download/viewer/


输入 VNC 密码（pi），按 OK 即可进入桌面。
