---
sidebar_position: 2
---



# 第一节：SmartIot平台使用手册
---
SmartIot是恩孚科技出品的一个简单易用的物联网平台，3分钟连接物联网，随时上传传感器数据，并实施远程操控micro:bit。（中/英文切换暂时没有更新）

平台链接：[SmartIot云平台: https://www.smartiot.space/](https://www.smartiot.space/)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_01.png)

**请注意，使用IOT:bit连接Wi-Fi网络的时候，请确保您的Wi-Fi网络运行在2.4GHz模式下**


## SmartIot 平台账号注册
进入SmartIot 官网，点击Sign up进入注册新账号页面

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_02.png)

填好注册信息(邮箱、密码)点击Sign Up。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_03.png)

点击Sign Up注册，会发送一封邮件到你填写的账号邮箱

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_04.png)

检查你的邮箱的收件箱或者垃圾箱（可能会被识别为垃圾邮件），打开邮件中的网址以激活你的账号。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_05.png)

注册成功

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_06.png)


## SmartIot 平台登陆

在Log in下输入账号密码，并选择登陆。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_07.png)

## SmartIot 平台设备管理

点击Log in进入设备管理页面，左上角是Email为你的邮箱，右上角User Token是平台唯一识别码，对应你的账号。全网唯一，不会重复。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_08.png)

添加一个新的设备（Create new device），Topic是你的设备识别号（在账号中的唯一设备）可以修改设备名称（你只能拥有10个设备）

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_09.png)

点击右上角小齿轮可以对设备进行重命名，清除数据和删除操作;点击View Details可以进入设备以查看信息

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_10.png)


## SmartIot 平台数据上传及示例代码

设备界面里左侧为上传数据，右侧由数据和时间组成二维折线图。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_11.png)

### 编写代码

[微软makecode](https://makecode.microbit.org/#)

### 编程

进入“makecode.microbit.org”，点击“新建项目”。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/about-the-microbit-smart-climate-kit/images/smart-weather-station-kit-add-extension-01.png)

在弹出窗口输入项目名称并点击“创建”。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/about-the-microbit-smart-climate-kit/images/smart-weather-station-kit-add-extension-02.png)

点击代码抽屉中的“扩展”。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/about-the-microbit-smart-climate-kit/images/smart-weather-station-kit-add-extension-03.png)

在弹出界面输入“IOT”，按下回车键进行搜索，并选择加载IOT软件库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/about-the-microbit-smart-climate-kit/images/smart-weather-station-kit-add-extension-04.png)


**注意：如果你得到一个提示说一些代码库因为不兼容的原因将被删除，你可以根据提示继续操作，或者在项目菜单栏里面新建一个项目。**

#### 代码解释


连接SmartIot平台。User Token（暂时误写作ID）为账户唯一识别码，与账户绑定不可修改。
TOPIC，设备唯一识别码，连接时需要指定上传设备。设备号（Topic）顺序排列。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_12.png)

在SmartIot平台上获取这两个数据。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_13.png)

判断平台连接状态是否成功，成功（True），失败（False）。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_14.png)

断开与SmartIoT平台的链接。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_16.png)

上传数据到SmartIot平台，点击积木块下方`+`可添加上传数据，最多同时上传8个数据.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_17.png)

#### 测试效果

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_11.png)

远程控制积木块，当平台上的开关被触发是运行指定程序。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_15.png)

当平台连接成功后，可以点击这个开关来执行这两个积木块。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_18.png)

### 参考程序

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_19.png)

**注意：请自行填入wifi信息、user token和Topic**

请参考程序连接：[https://makecode.microbit.org/_Dvx2VuYHxRep](https://makecode.microbit.org/_Dvx2VuYHxRep)

你也可以通过以下网页修改程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_Dvx2VuYHxRep"
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
当开机时自动连接wifi并自动连接SmartIoT，随机上传0~10整数到SmartIoT。


## SmartIot 平台班级管理

将指针悬浮在右上角用户名处，会弹出一个下拉框，点击其中的class选项，进入班级管理界面。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_20.png)

点击Create Class创建班级。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_21.png)

在弹出页面输入班级名称及录入学生姓名。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_22.png)

**注意：每个名称最多可包含 15 个字符，每行一个名称（请不要留下任何空白行）。**

创建完成班级后，点击Students，进入学生信息管理界面。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_23.png)

点击Add Student可以填写学生信息

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_24.png)

点击Export可以导出全部学生数据

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_25.png)

点击Copy可以复制单个学生数据

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_26.png)

点击Reset Password可以重置学生账户密码，防止学生忘记密码

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_27.png)

点击删除可以删除学生信息

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_28.png)

## SmartIot 平台重置密码

点击`Change password`可进入密码重置界面。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_29.png)

输入旧密码和新密码即可修改密码。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_30.png)

## SmartIot 数据筛选

可通过 `Start Time` 和 `End Time`设定图表显示的数据范围。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_31.png)

或者通过数据标签选择图表的显示数据。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_32.png)

或者点击`Edit`进入设置界面。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_33.png)

通过勾选标签选择显示数据信息。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_34.png)

## SmartIot 配置共享

点击`Edit`进入设置界面。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_33.png)

点击`Copy`或者`Import`导出或者导入设备配置。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_35.png)

## SmartIot 设备共享

点击`Share`进入设备共享页面。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_36.png)

点击`ALL`设置设备为公开共享设备，有设备共享链接的人员都可以访问该设备查看数据。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_37.png)

点击`Specified`设置设备为私人共享设备，可通过邮箱指定账户共享，如果是教师账户，也可通过下方选项快速共享设备给班级成员。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_38.png)

共享设备会在`Share Device`中显示。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_39.png)

被分享者只拥有阅读权限，无法对数据对图表内容进行修改。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_40.png)
