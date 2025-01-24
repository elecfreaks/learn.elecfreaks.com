﻿# WIFI模块

## 简介
基于AI-WB2-12F模块，可让micro:bit连接上物联网平台，实现数据的上传与反向控制。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/05043_01.png)

## 特性
---
- RJ11端口设计，防止误插，易于使用。
## 技术规格
---

项目 | 参数
:-: | :-:
SKU|EF05036
接口|RJ11
接口类型|串口通信
核心IC|BL602






## 外形与定位尺寸
---


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/05043_02.png)


## 快速上手
---

### 所需器材及连接示意图
---

- 如下图所示，将WIFI模块连接到哪吒扩展板的J1端口，将LED灯连接在哪吒扩展板的J2端口。


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/05043_03.png)

---



## SmartIot平台
---
- smartIot是恩孚科技出品的一个简单易用的物联网平台，3分钟连接物联网，实施远程操控microbit。（中/英文切换文暂时没有更新）
 平台链接：[smartIoT云平台: https://www.smartiot.space/](https://www.smartiot.space/)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/smartiot_01.jpg)

## SmartIoT 平台账号注册

- 进入smartIoT 官网，点击Sing up进入注册新账号页面

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/smartiot_02.jpg)

- 填好注册信息(邮箱、密码)点击Sign Up。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/smartiot_03.jpg)

- 点击Sign Up注册，会发送一封邮件到你填写的账号邮箱

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/smartiot_04.jpg)

- 检查你的邮箱的收件箱或者垃圾箱（可能会被识别为垃圾邮件），打开邮件中的网址以激活你的账号。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/smartiot_05.jpg)

- 注册成功

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/smartiot_06.jpg)


## SmartIoT 平台使用指南

- 点击主页上的Sign in，进入登陆界面

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/smartiot_07.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/smartiot_08.jpg)

- 点击Log in进入设备管理页面，左上角是User Name为你的邮箱，右上角User Token（现有误写为ID，后期会改为Token）是平台唯一识别码，对应你的账号。全网唯一，不会重复。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/smartiot_09.jpg)

- 添加一个新的设备（Create new device），Topic是你的设备识别号（在账号中的唯一设备）可以修改设备名称（你只能拥有10个设备）


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/smartiot_10.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/smartiot_11.jpg)


- 设备界面里左侧为上传数据，右侧由数据和时间组成二维折线图，可以选择要显示的数据，也可以导出数据（export data）
- Remote Control可以下发指令控制microbit。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/smartiot_12.jpg)

## 编写代码
---

[微软makecode](https://makecode.microbit.org/#)

### 编程
---
### 添加软件库
在MakeCode的代码抽屉中点击“高级”，查看更多代码选项。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/05001_04.png)

为了给WIFI模块编程，我们需要添加一个扩展库。在代码抽屉底部找到“扩展”，并点击它。这时会弹出一个对话框，搜索”PlanetX“，然后点击下载这个代码库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/05001_05.png)

*注意：*如果你得到一个提示说一些代码库因为不兼容的原因将被删除，你可以根据提示继续操作，或者在项目菜单栏里面新建一个项目。

### 代码解释

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/smartiot_14.jpg)

连接smart’Iot平台。User Token为账户唯一识别码，与账户绑定不可修改。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/smartiot_15.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/smartiot_16.jpg)


 TOPIC，设备唯一识别码，连接时需要指定上传设备。设备号（Topic）顺序排列。

- - - - -

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/smartiot_17.jpg)

上传一个整数到smartIot平台，会在这里显示。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/smartiot_18.jpg)
- - - - -

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/smartiot_19.jpg)

判断平台连接状态是否成功，成功（True），失败（False）。
可以自己编写重连机制以保证连接稳定。
- - - - -

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/smartiot_20.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/smartiot_21.jpg)

当平台连接成功后，可以点击这个开关来执行这两个积木块。

### 参考程序

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/05043_06.png)

请参考程序连接：[https://makecode.microbit.org/_4eoUoJLffWsf](https://makecode.microbit.org/_4eoUoJLffWsf)

你也可以通过以下网页修改程序。
<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_4eoUoJLffWsf"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

### 现象
---
- 当开机时连接WIFI
- 循环判断是否连接WIFI，如果连接显示颗大心，如果未连接就继续连接。
- 循环判断smartIot平台是否连接，如果连接显示一颗小心，如果未连接就继续连接。
- 循环判断如果smartIot连接成功则上传一个数据“从0至10之间选取随机数”到平台
- 如果平台开关打开点亮LED灯
- 如果平台开关关闭熄灭LED灯
