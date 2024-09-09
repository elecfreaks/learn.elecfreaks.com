---
sidebar_position: 2
---



# 第一节：KidsIot平台使用手册
---
- KidsIot是恩孚科技出品的一个简单易用的物联网平台，3分钟连接物联网，实施远程操控microbit。（中/英文切换文暂时没有更新）
 平台链接：[KidsIoT云平台: https://www.smartiot.space/](https://www.smartiot.space/)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/kidsiot_01.jpg)

**请注意，使用IOT:bit连接Wi-Fi网络的时候，请确保您的Wi-Fi网络运行在2.4GHz模式下**

## KidsIoT 平台账号注册

- 进入KidsIoT 官网，点击Sing up进入注册新账号页面

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/kidsiot_02.jpg)

- 填好注册信息(邮箱、密码)点击Sign Up。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/kidsiot_03.jpg)

- 点击Sign Up注册，会发送一封邮件到你填写的账号邮箱

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/kidsiot_04.jpg)

- 检查你的邮箱的收件箱或者垃圾箱（可能会被识别为垃圾邮件），打开邮件中的网址以激活你的账号。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/kidsiot_05.jpg)

- 注册成功

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/kidsiot_06.jpg)


## KidsIoT 平台使用指南

- 点击主页上的Sign in，进入登陆界面

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/kidsiot_07.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/kidsiot_08.jpg)

- 点击Log in进入设备管理页面，左上角是User Name为你的邮箱，右上角User Token（现有误写为ID，后期会改为Token）是平台唯一识别码，对应你的账号。全网唯一，不会重复。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/kidsiot_09.jpg)

- 添加一个新的设备（Create new device），Topic是你的设备识别号（在账号中的唯一设备）可以修改设备名称（你只能拥有10个设备）
- 点击Details可以进入设备以查看信息，点击Delete以删除设备


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/kidsiot_10.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/kidsiot_11.jpg)


- 设备界面里左侧为上传数据，右侧由数据和时间组成二维折线图，可以选择要显示的数据，也可以导出数据（export data）
- Remote Control可以下发指令控制microbit。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/kidsiot_12.jpg)

## 编写代码
---

[微软makecode](https://makecode.microbit.org/#)

### 编程
---
### 模块连接图
- 将光线传感器模块连接到P1口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/case_ts_17.png)

### 添加软件库
- 在MakeCode的代码抽屉中点击Advanced，查看更多代码选项。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/iot_bit_11.jpg)

- 为了给IOT物联网环境科学套件编程，我们需要添加一个扩展库。在代码抽屉底部找到“Extension”，并点击它。这时会弹出一个对话框。搜索“IOT"，然后点击下载这个代码库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/iot_bit_12.jpg)


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/kidsiot_13.jpg)


***注意：如果你得到一个提示说一些代码库因为不兼容的原因将被删除，你可以根据提示继续操作，或者在项目菜单栏里面新建一个项目。

### 代码解释

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/kidsiot_14.jpg)

连接Kids’Iot平台。User Token（暂时误写作ID）为账户唯一识别码，与账户绑定不可修改。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/kidsiot_15.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/kidsiot_16.jpg)


 TOPIC，设备唯一识别码，连接时需要指定上传设备。设备号（Topic）顺序排列。

- - - - -

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/kidsiot_17.jpg)

上传一个整数到KidsIot平台，会在这里显示。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/kidsiot_18.jpg)
- - - - -

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/kidsiot_19.jpg)

判断平台连接状态是否成功，成功（True），失败（False）。
可以自己编写重连机制以保证连接稳定。
- - - - -

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/kidsiot_20.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/kidsiot_21.jpg)

当平台连接成功后，可以点击这个开关来执行这两个积木块。

### 参考程序

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/kidsiot_22.jpg)

请参考程序连接：[https://makecode.microbit.org/_PiHUCFiY2He9](https://makecode.microbit.org/_PiHUCFiY2He9)

你也可以通过以下网页修改程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_PiHUCFiY2He9"
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
当开机时连接WIFI
循环判断是否连接WIFI，如果连接显示颗大心，如果未连接就继续连接。
循环判断kidsIot平台是否连接，如果连接显示一颗小心，如果未连接就继续连接。
循环判断如果KidsIot连接成功则上传一个数据“连接到P1的光线数据”到平台
如果平台开关打开播放音乐“Power Up”
如果平台开关关闭播放音调“Power Down”
