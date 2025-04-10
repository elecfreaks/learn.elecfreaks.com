---
sidebar_position: 5
sidebar_label: 案例05：JupyterLab 环境搭建与使用
---

# 案例05：JupyterLab 环境搭建与使用

## 简介

本课程旨在向学生介绍JupyterLab环境搭建与使用操作。
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-read-01.png)**注意：XGO Rider 开机后，为保持机身平衡，需要小幅度来回移动，请不要将 XGO Rider 放在桌子边缘或者危险的地方，避免损坏。**


## 教学目标

了解 JupyterLab 的实际操作。

## 教学准备

在开始教学之前，请确保您已经准备好以下必要的材料：

| 图片 | 名称 | 数量 | 备注 |
|---|---|---|---|
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/)| CM4 XGO Rider | 1 |   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/) | 智能手机 | 1 |   |
| ![](https://wikimedia-ef.oss-cn-hongkong.al/otb.png) | PC | 1 | 自行准备 |


## 课程引入

JupyterLab 是 Jupyter Notebook 的新一代用户界面，它提供了一个全新的、更加强大和灵活的交互式计算环境。JupyterLab 环境使用需要电脑与树莓派在同一个局域网才能正常使用。出厂系统默认开机启动 JupyterLab 服务。接下来，我们开始进入学习旅程吧。

## 探究活动

如何使用 JupyterLab 界面。

## 软件
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-read-01.png)**注意：XGO Rider 开机后，为保持机身平衡，需要小幅度来回移动，请不要将 XGO Rider 放在桌子边缘或者危险的地方，避免损坏。**

### 1、获取 XGO Rider 树莓派 IP 地址

将 XGO Rider 开机后，进入遥控模式界面，即可查询到对应的 IP 地址。若没有 IP 地址，请按照联网操作重新联网。


### 2、开启 JupyterLab 环境

打开电脑端的浏览器，在地址栏输入树莓派的IP地址+端口号：192.168.206.179:8888
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/cm4-xgo-rider-kit-case04-01.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/cm4-xgo-rider-kit-case04-02.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/cm4-xgo-rider-kit-case04-03.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/cm4-xgo-rider-kit-case04-04.png)

### 3、WinSCP 远程传输文件

双击打开桌面 WinSCP 图标，进入 WinSCP 软件。打开 WinSCP 软件后出现以下登录界面。

File protocol：文件协议选择 SFTP，Host name：树莓派 IP 地址，Port number：默认 22 就可以，User name：树莓派用户名(pi)，Password：登录密码(pi)。

输入正确的信息后可以点击 Save 保存一下填写的信息，下次登录的时候不用重复输入。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/cm4-xgo-rider-kit-case04-05.png)

点击 Login 登录成功后会显示以下界面，左边的是 win 电脑的文件夹，右边的是树莓派的文件夹。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/cm4-xgo-rider-kit-case04-06.png)

文件传输有三种操作方式，第一种是直接把文件从左边拉到右边，或者从右边拉到左边，系统会自动复制一份文件传输过去。

第二种是鼠标选中文件，然后按一下 F5 键，则被选中的文件会复制一份到另一边。

第三种是选中文件点击鼠标右键，如果是从 win 电脑传到树莓派则点击 upload。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/cm4-xgo-rider-kit-case04-07.png)

会弹出一个提示，可以选择不再提示，并且点击 OK，则文件自动传输过去。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/cm4-xgo-rider-kit-case04-08.png)

如果从树莓派传文件到 win 电脑上，则按鼠标右键选中文件，选择 Download。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/cm4-xgo-rider-kit-case04-09.png)

注意：文件传输需要电脑和树莓派在同一个局域网下，并且树莓派已开启SSH服务才可以进行。有时若遇见传输文件失败一般是树莓派这边的权限不够，请在用户 pi 目录权限范围内操作。
