﻿---
sidebar_position: 2
sidebar_label: 准备编程环境
---

当你开始写 Pico:ed 的程序代码时，我们推荐使用集成开发环境 [Thonny](https://thonny.org),根据你的电脑系统选择合适的版本进行安装即可。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/picoed/images/pico-v2-thonny-01.png)

安装完成后打开 [Thonny](https://github.com/thonny/thonny/releases/download/v3.3.13/thonny-3.3.13.exe)，选择菜单栏中的 Tools，选择 Options。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/picoed/images/pico-v2-thonny-02.png)

在弹出窗口的菜单栏选择 Interpreter，点击下拉箭头，选择 CircuitPython，点击 OK。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/picoed/images/pico-v2-thonny-03.png)

添加成功后即可开始编程，建议点击 View，勾选打开 shell 和 Files 视图。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/picoed/images/pico-v2-thonny-04.png)

# 固件安装

下载Pico:ed的固件：[Pico:ed固件](https://circuitpython.org/board/elecfreaks_picoed/)。
下载完成后，按下Pico:ed背面的固件下载按钮。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/picoed/images/pico-v2-firmware-01.png)

在按下固件下载按钮的情况下，插入USB数据线，当电脑端出现一个名称为RPI-RP2的盘符即可松开固件下载按钮。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/picoed/images/pico-v2-firmware-02.png)

将下载下来的固件发送到打开名称为RPI-RP2的盘符中。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/picoed/images/pico-v2-firmware-03.png)

等固件下载成功后pico:ed会自动重新连接，连接完成后为一个名称为CIRCUITPY的盘符。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/picoed/images/pico-v2-firmware-04.png)

下载成功后即可在CIRCUITPY中code.py文件中进行编程。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/picoed/images/pico-v2-firmware-05.png)


## FAQ：

### 如何获得最新版本的固件？
1.点击链接进入circuitpython官网的Pico:ed的固件下载页面：[https://circuitpython.org/board/elecfreaks_picoed/](https://circuitpython.org/board/elecfreaks_picoed/)。
2.点击下拉箭头，选择对应的语言并下载即可。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/picoed/images/pico-v2-firmware-06.png)

### 如何查看Pico:ed当前的固件版本？
打开编程软件Thonny，点击View，勾选打开shell视图，通过USB线将Pico:ed连接至电脑，即可查看当前的固件版本。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/picoed/images/pico-v2-firmware-07.png)

如何下载并安装Thonny，请查看：[下载并安装编程软件](https://www.yuque.com/elecfreaks-learn/picoed/ggnxx2)
