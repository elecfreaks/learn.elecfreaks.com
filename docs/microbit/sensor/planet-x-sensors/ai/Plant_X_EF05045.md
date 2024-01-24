---
sidebar_position: 1
sidebar_label: 产品介绍
---

# 产品介绍

## 简介

二郎神是一款简单易用的人工智能摄像头，支持人脸识别、颜色识别、卡片识别、巡线追踪、小球识别、机器学习等功能。它把复杂人工智能概念封装成学生可感知、易理解、有趣味的硬件模块。

仅需一个按键即可完成AI训练，摆脱繁琐的训练和复杂的视觉算法，让你更加专注于项目的构思和实现。

![](./images/05035_01.png)

## 特性

RJ11端口设计，防止误插，易于使用。

## 技术规格


项目 | 参数
:-: | :-:
SKU|EF05045
产品重量（毛重）| 约170g
产品尺寸|145mm × 92mm × 40mm（长 × 宽 × 高）
接口|RJ11
接口类型|IIC
工作电压|3.3V
工作电流|300mA
核心IC|V831


AI摄像头的原点（0,0）在屏幕的左下角，X轴和Y轴的范围为：X（0 ~ 224），Y（0 ~ 224）。

## 产品清单

项目 | 数量
:-: | :-:
AI Lens|1
红色小球|1
蓝色小球|1
RJ11线材|1
RJ11转杜邦线|1
卡片|41


## 外形与定位尺寸


![](./images/05035_02.png)

## 程序积木块释义


| 分布 | 积木命令 | 说明 | 备注 |
| ------------ | ------------------------------------------------------- | ------------------------------------------------------------ |------------------------------------------------------------ |
| **基础** | ![](./images/ai-program-01.png)  | 初始化AI摄像头 |  |
| | ![](./images/ai-program-02.png) | 设置当前使用的功能 | 功能可选项有：卡片识别、人脸识别、小球识别、巡线识别、颜色识别、特征学习 |
| | ![](./images/ai-program-03.png) | 从摄像头获取一帧图像 |  |
| **小球识别** | ![](./images/ai-program-04.png)  | 判断图片中是否存在小球 | 置信度>=83则判断为ture |
| | ![](./images/ai-program-05.png) | 判断图片中是否存在红色/蓝色小球 | 置信度>=83则判断为ture |
| | ![](./images/ai-program-06.png) | 从图像中获取小球的总个数 |  |
| | ![](./images/ai-program-07.png) | 从图像中获取小球的相关数据 | 相关数据包含：X坐标、Y坐标、尺寸、置信度、小球ID；其中小球坐标为识别框的中心坐标，返回坐标的范围为[0 ~ 244] |
| **人脸识别** | ![](./images/ai-program-08.png)  | 判断图片中是否存在人脸 | 置信度>=83则判断为ture |
| | ![](./images/ai-program-09.png) | 从图像中获取人脸的总个数 |  |
| | ![](./images/ai-program-10.png) | 从图像中获取人脸的相关数据 | 相关数据包含：X坐标、Y坐标、宽、高、置信度、人脸ID；其中人脸坐标为识别框的中心坐标，返回坐标的范围为[0 ~ 244] |
| **卡片识别** | ![](./images/ai-program-13.png)  | 判断图片中是否存在数字卡片 | 置信度>=83则判断为ture |
| | ![](./images/ai-program-14.png) | 判断图片中是否存在字母卡片 | 置信度>=83则判断为ture |
| | ![](./images/ai-program-15.png) | 判断图片中是否存在交通符号卡片 | 置信度>=83则判断为ture |
| | ![](./images/ai-program-16.png) | 判断图片中是否存在图像卡片 | 置信度>=83则判断为ture |
| | ![](./images/ai-program-11.png) | 从图像中获取卡片的总个数 |  |
| | ![](./images/ai-program-12.png) | 从图像中获取卡片的相关数据 | 相关数据包含：X坐标、Y坐标、尺寸、置信度、卡片ID；其中卡片坐标为识别框的中心坐标，返回坐标的范围为[0 ~ 244] |
| **颜色识别** | ![](./images/ai-program-17.png)  | 判断图片中是否存在预设颜色的颜色卡片 | 置信度>=83则判断为ture |
| | ![](./images/ai-program-18.png) | 从图像中获取颜色卡片的总个数 | **此积木块不可用** |
| | ![](./images/ai-program-19.png) | 从图像中获取卡片的相关数据 | 相关数据包含：X坐标、Y坐标、尺寸、置信度、颜色ID；其中颜色卡片坐标为识别框的中心坐标，返回坐标的范围为[0 ~ 244] |
| **巡线识别** | ![](./images/ai-program-20.png)  | 从图像中获取黑线的相关数据 | 相关数据有：偏移角度Θ [0 ~ 180]、偏移距离ρ[0 ~ 96]、线段长度[0 ~ 200] |
| | ![](./images/ai-program-21.png) | 判断图像中包含的黑线的偏移方向 |  |
| **特征学习** | ![](./images/ai-program-22.png)  | 学习画面中的对象为ID[1 ~ 5] | |
| | ![](./images/ai-program-23.png) | 清除已学习对象 |  |
| | ![](./images/ai-program-24.png) | 判断图像中是否包含对象ID[1 ~ 5] | 置信度>=83则判断为ture |
| | ![](./images/ai-program-25.png) | 从图像中获取对象ID[1 ~ 5]的置信度 | |

## 使用RJ11转杜邦线的接线方式

如果使用没有RJ11扩展接口的micro:bit扩展板时，由于micro: bit的USB接口供电能力较弱，所以需要选择使用外部电源的USB接口或者锂电池进行供电的扩展板，比如：Sensor:bit，IOT:bit，悟空扩展板等。

当使用没有RJ11扩展接口的micro:bit扩展板时，可以使用RJ11转杜邦线的连接线，将RJ11接口连接摄像头，杜邦线接口的一端黑线接GND，红线接VCC，绿线接P19（SCL）端口，黄线接P20（SDA）端口；如果使用过程中摄像头无法启动，请尝试给AI摄像头单独供电。

![](./images/05035_03.png)

以iot:bit为例：

![](./images/05035_04.png)

注意：

1.当使用哪吒扩展板之外的micro:bit扩展板连接AI摄像头时，添加扩展库应搜索PlanetX-AI

2.当使用一键学习功能时，如果重启电源，则需要对物品重新进行学习。

3.下载程序后，如果发现AI摄像头处于启动页，无法正常运行，需要完全断电然后重启，保证AI摄像头初始化成功。





## AI摄像头固件更新

AI摄像头会不定期更新一些新功能和性能优化，在发布新版本固件后，需要手动对AI摄像头进行固件更新。

*注意：AI摄像头有AiCam V1.2和AiCam V1.7两个硬件版本，两个版本的固件不通用*

### 如何检查当前硬件版本

AI摄像头有AiCam V1.2和AiCam V1.7两个版本，AiCam V1.7版本的背后有一个固件下载按键，我们可以根据固件下载按键或版本号对这两个版本的摄像头进行区分。

![](./images/AI-gj-08.png)


### 如何检查当前固件版本


摄像头开机页面右下角会提示当前版本号，（如果没有提示，则是最旧的版本请及时更新）

![](./images/AI-gj-05.png)

AiCam V1.2版本固件 v1.0.12 [点击下载](https://github.com/elecfreaks/learn-cn/raw/master/microbitplanetX/ai/v1.0.12.kfpkg)。

AiCam V1.7版本固件 v2.0.1[点击下载](https://github.com/elecfreaks/learn-cn/raw/master/microbitplanetX/ai/PhoenixSuit-master.zip)。

AiCam V1.7版本固件 v2.0.4[点击下载](https://www.elecfreaks.com/download/AI-Cam-V2.0.1-V2.0.4.zip)。

AiCam V1.7版本软件包 v2.0.1[点击下载](https://github.com/elecfreaks/learn-cn/releases/download/V2.0.1/AI-Cam-V1.7-V2.0.1.zip)。

AiCam V1.7版本软件包 v2.0.4[点击下载](https://www.elecfreaks.com/download/AI-Cam-V2.0.1-V2.0.4-Upgrade-File.zip)。

## AiCam V1.2固件更新方式

1.首先安装摄像头串口驱动程序：

windows系统下载[CH341SerSetup.exe](https://github.com/elecfreaks/learn-cn/raw/master/microbitplanetX/ai/CH341SerSetup.exe)并解压。

macOS系统下载[CH34x_Install_V1.5.pkg](https://github.com/elecfreaks/learn-cn/raw/master/microbitplanetX/ai/CH34x_Install_V1.5.pkg)。


2.安装固件下载软件kflash。

windows系统下载[kflash_gui_v1.6.5_2_windows.7z](https://github.com/elecfreaks/learn-cn/raw/master/microbitplanetX/ai/kflash_gui_v1.6.5_2_windows.7z)。

macOS系统下载[kflash_gui_v1.6.5_2_macOS.dmg](https://github.com/elecfreaks/learn-cn/raw/master/microbitplanetX/ai/kflash_gui_v1.6.5_2_macOS.dmg)。

windows系统解压完成后打开文件夹kflash_gui，找到kflash_gui.exe程序。

![](./images/AI-gj-01.png)

macOS系统下载完成后打开下图图标。

![](./images/AI-gj-06.png)

3.双击打开kflash_gui.exe程序，点击打开文件，在文件夹中选择并打开 最新版固件 v1.0.12 [点击下载](https://github.com/elecfreaks/learn-cn/raw/master/microbitplanetX/ai/v1.0.12.kfpkg)。

![](./images/AI-gj-02.png)

然后使用USB连接AI摄像头。

![](./images/AI-gj-03.png)

最后选择端口（不同电脑端口号可能会有差异），并点击下载即可，然后等待下载完成即可

![](./images/AI-gj-04.png)

## AiCam V1.7固件更新方式

使用USB连接AI摄像头。

![](./images/AI-gj-03.png)

当摄像头启动后,如果电脑弹出一个U盘，则只需要更新软件包即可进行更新。否则需要先更新驱动程序再更新固件后，最后更新软件包。

### 驱动更新方式
下载AiCam V1.7版本固件 v2.0.1[点击下载](https://github.com/elecfreaks/learn-cn/raw/master/microbitplanetX/ai/PhoenixSuit-master.zip)，并解压。
打开右键点击此电脑，选择管理。

![](./images/AI-gj-09.png)

打开的设备管理器

![](./images/AI-gj-10.png)

拔下USB线，在完全断电的情况下按下固件下载按钮，然后再使用USB连接AI摄像头，进入固件下载模式。

![](./images/AI-gj-15.png)

进入固件下载模式后，设备管理器中会出现一个未知设备。

![](./images/AI-gj-11.png)

右键此未知设备然后点击更新驱动。

![](./images/AI-gj-12.png)

选择浏览我的电脑以查找驱动程序。

![](./images/AI-gj-13.png)

选择路径为`PhoenixSuit-master`文件夹里面的`Drivers`文件夹，然后点击下一页即可。

![](./images/AI-gj-14.png)

### 固件更新方式

选择`PhoenixSuit-master`目录下的`PhoenixSuit.exe`，打开固件更新软件。

![](./images/AI-gj-16.png)

点击`一键刷机`，点击`浏览`，根据需要升级的固件版本选择[AI-Cam-V1.7-V2.0.1](https://github.com/elecfreaks/learn-cn/releases/download/V2.0.1/AI-Cam-V1.7-V2.0.1.zip)中的`tina_v831-sipeed_uart0_ov9732.img`，或者[AiCam V1.7版本固件 v2.0.4](https://www.elecfreaks.com/download/AI-Cam-V2.0.1-V2.0.4.zip)中的`ef831-2.0.4-ov9732-2022-11-30.img`。点击立即升级。

*** 这里以V2.0.1版本固件升级为例 ***

![](./images/AI-gj-18.png)

![](./images/AI-gj-19.png)

拔下USB线，在完全断电的情况下按下固件下载按钮，然后再使用USB连接AI摄像头，进入固件下载模式。

![](./images/AI-gj-15.png)

当连接成功后，固件更新软件会提示是否进行格式化，请选择`是`。

![](./images/AI-gj-17.png)

请耐心等待格式化完成，当提示固件烧写完成后，点击确定，并重新连接AI摄像头。

![](./images/AI-gj-21.png)

### 更新软件包步骤

*** 此处以V2.0.1版本为例 ***

下载并解压[AiCam V1.7版本软件包 v2.0.1](https://github.com/elecfreaks/learn-cn/releases/download/V2.0.1/AI-Cam-V1.7-V2.0.1.zip)，打开U盘,将`AI-Cam-V1.7-V2.0.1`文件夹中的`maix_dist`，`res`两个文件拷贝到U盘中,**等待拷贝完成,然后手动卸载U盘**.重新连接AI摄像头即可。

![](./images/AI-gj-22.png)



### FAQ

1.如果在macOS系统下，安装固件下载软件的过程中遇到了由于无法验证开发者而无法安装的情况。

![](./images/AI-gj-07.png)

请访问[https://support.apple.com/zh-cn/HT202491](https://support.apple.com/zh-cn/HT202491)获取解决方法。

2.当使用AI摄像头时，点击下载出现错误提示，可能是PlanetX的软件库已经损坏。

![](./images/AI-FAQ-01.png)

可能是以下两种情况：

（1）软件库较为老旧，请新建项目，重新添加软件库再进行测试。


（2）同时添加PlanetX软件库和PlanetX-AI软件库冲突，请点击图中红框位置“JaveScript”切换编程界面，点击资源管理器，按需删除PlanetX软件库或者PlanetX-AI软件库；

![](./images/AI-FAQ-03.png)

删除后资源管理器应该不再出现错误提示；

![](./images/AI-FAQ-04.png)

如果删除后发现视觉识别积木块丢失，请尝试重新添加对应的软件库，如果重新添加软件库无法解决此问题，请按下图所示重置makecode编程平台，注意：重置平台后所有保存在makecode上的项目都会被清理，注意保存项目文件到电脑中。

![](./images/AI-FAQ-05.png)
