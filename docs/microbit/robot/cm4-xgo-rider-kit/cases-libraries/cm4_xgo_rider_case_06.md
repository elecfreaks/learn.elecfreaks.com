---
sidebar_position: 6
sidebar_label: 案例06：烧录系统镜像
---

# 案例06：烧录系统镜像

## 简介

本课程旨在向学生介绍更新系统镜像操作。
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-read-01.png)**注意：XGO Rider 开机后，为保持机身平衡，需要小幅度来回移动，请不要将 XGO Rider 放在桌子边缘或者危险的地方，避免损坏。同时，XGO Rider 出厂的 TF 卡出厂已烧录镜像，可直接将 TF 卡插入树莓派使用，一般情况下无需按照本教程烧录镜像系统！！！**


## 教学目标

了解系统镜像的更新操作。

## 教学准备

在开始教学之前，请确保您已经准备好以下必要的材料：

| 图片 | 名称 | 数量 | 备注 |
|---|---|---|---|
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/)| CM4 XGO Rider | 1 |   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/) | 智能手机 | 1 |   |
| ![](https://wikimedia-ef.oss-cn-hongkong.al/otb.png) | PC | 1 | 自行准备 |


## 课程引入

随着技术的升级以及我们产品功能的增加，有可能会需要您更新系统镜像。接下来，我们开始进入学习旅程吧。

## 探究活动

如何正确的烧录系统镜像。

## 软件
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-read-01.png)**注意：XGO Rider 开机后，为保持机身平衡，需要小幅度来回移动，请不要将 XGO Rider 放在桌子边缘或者危险的地方，避免损坏。**

### 1、准备工作

硬件：准备一个 SD 卡读卡器，需要是 USB 3.0 的，将机器狗的 SD 卡拔出插入读卡器，插在电脑 USB 接口。

软件：下载 [Raspberry Pi Imager](https://www.raspberrypi.com/software/) 并安装。

### 2、启动 Raspberry Pi Imager

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/imagescm4-xgo-rider-kit-case06-01.png)

### 3、选择操作系统以及镜像文件

下载最新日期的[树莓派系统镜像](https://drive.google.com/drive/folders/1YJy-wIke6EJECcblV2LMFmRN6YSrPW-a)， 点击”选择操作系统“后选择使用自定义镜像和存储卡路径。

点击烧录，大约20分钟后结束。
**注意，系统会提示格式化，切勿格式化SD卡。**