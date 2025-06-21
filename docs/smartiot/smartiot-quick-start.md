---
sidebar_position: 1
---

# SmartIoT Quick Start

## 简介

SmartIot是恩孚科技出品的一个简单易用的物联网平台，3分钟连接物联网，随时上传传感器数据，并实施远程操控micro:bit。

平台链接：[https://www.smartiot.space/](https://www.smartiot.space/)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-01.png)

**请注意，使用IOT:bit/花瓣系列WIFI模块/行星系列WIFI模块连接Wi-Fi网络的时候，请确保您的Wi-Fi网络运行在2.4GHz模式下**

## 语言切换

SmartIoT平台支持多种语言（机器翻译），用户可以自己选择对应语言。

点击右上角切换语言按钮。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-02.png)

选择语言进行切换。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-03.png)

如果可选语言中无法满足需求或翻译错误，可以点击下载模板自行翻译。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-04.png)

翻译完成后点击上传，自行上传翻译文件，此翻译功能只能适用于本地机器。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-05.png)


## SmartIoT 账号注册

进入SmartIot 官网，点击Login进入账号登录页面。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-06.png)

点击Create an Account进入注册新账号页面。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-07.png)

填好注册信息(邮箱、用户名、密码)点击Sign Up。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-08.png)

点击Sign Up注册，会发送一封邮件到你填写的账号邮箱。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-09.png)

检查你的邮箱的收件箱或者垃圾箱（可能会被识别为垃圾邮件），打开邮件中的网址以激活你的账号。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_05.png)

注册成功。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_06.png)



## 登陆 SmartIot

在Log in下输入账号密码，并选择登陆。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-10.png)

## SmartIot 平台设备管理

点击Log in进入设备管理页面，左上角是用户名，个人邮箱，User Token是平台唯一识别码，对应你的账号。全网唯一，不会重复。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-11.png)

添加一个新的设备（Create new device），Topic是你的设备识别号（在账号中的唯一设备）。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-12.png)

可以修改设备名称及配置设备（你只能拥有10个设备）。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-13.png)

点击图标可以对设备进行重命名，清除数据和删除操作;点击View Details可以进入设备以查看信息。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-14.png)

## SmartIot 平台数据上传及示例代码

SmartIot 平台支持最多八条数据上传。

设备界面里上方表格为上传数据，下方由数据和时间组成二维折线图。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-15.png)

### 编写代码

[微软makecode](https://makecode.microbit.org/#)

### 编程

进入“makecode.microbit.org”，点击“新建项目”。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/about-the-microbit-smart-climate-kit/images/smart-weather-station-kit-add-extension-01.png)

在弹出窗口输入项目名称并点击“创建”。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/about-the-microbit-smart-climate-kit/images/smart-weather-station-kit-add-extension-02.png)

点击代码抽屉中的“扩展”。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/about-the-microbit-smart-climate-kit/images/smart-weather-station-kit-add-extension-03.png)

在弹出界面输入“Petal”，按下回车键进行搜索，并选择加载IOT软件库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-16.png)


**注意：如果你得到一个提示说一些代码库因为不兼容的原因将被删除，你可以根据提示继续操作，或者在项目菜单栏里面新建一个项目。**

#### 代码解释


连接SmartIot平台。User Token 为账户唯一识别码，与账户绑定不可修改。
TOPIC，设备唯一识别码，连接时需要指定上传设备。设备号（Topic）顺序排列。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_12.png)

在SmartIot平台上获取这两个数据。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-17.png)

判断平台连接状态是否成功，成功（True），失败（False）。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_14.png)

点击积木块下方`+`可添加上传数据，最多同时上传8个数据.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_17.png)

#### 测试效果

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-18.png)

远程控制积木块，当平台上的开关被触发时运行指定程序。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_15.png)

当平台连接成功后，可以点击这个开关来执行这两个积木块。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-19.png)

### 参考程序

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-20.png)

**注意：请自行填入wifi信息、user token和Topic**

请参考程序连接：[https://makecode.microbit.org/_8230fd1aL6Y0](https://makecode.microbit.org/_8230fd1aL6Y0)

你也可以通过以下网页修改程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_8230fd1aL6Y0"
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

当开机时自动连接wifi并自动连接SmartIoT，随机上传0~10整数到SmartIoT。

## 设备页面组件管理

点击左上角Add Component。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-42.png)

在弹出窗口选择组件及尺寸。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-43.png)


### 折线图

最多可显示8组数据，适用于展示数据变化趋势。

可通过 `Start Time` 和 `End Time`设定图表显示的数据范围。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-32.png)

或者通过数据标签选择图表的显示数据。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-33.png)

或者点击`Edit`进入设置界面。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-34.png)

通过勾选标签选择显示数据信息。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-35.png)

### 饼状图

最多可显示8组数据，便于呈现数据占比关系。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-44.png)

### 仪表盘

可显示1组数据，直观展示关键指标。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-45.png)

可设置不同阈值区间的表盘颜色

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-46.png)

### 数据显示

可显示1组数据，精确呈现具体数据数值。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-47.png)

### 状态指示灯

可显示1组数据，实现数据可视化预警。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-48.png)

可设置不同阈值区间的LED灯的颜色

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-49.png)

## SmartIot 平台班级管理

点击class management选项，进入班级管理界面，如果发现需要教师账号激活码，请联系ELECFREAKS官方人员，邮箱**support@elecfreaks.com**。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-21.png)

点击Create Class创建班级。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-22.png)

在弹出页面输入班级名称及录入学生姓名。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-23.png)

**注意：每个名称最多可包含 15 个字符，每行一个名称（请不要留下任何空白行）。**

创建完成班级后，点击图标，进入学生信息管理界面。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-24.png)

点击Add Student可以填写学生信息

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-25.png)

点击Export可以导出全部学生数据

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-26.png)

点击复制图标可以复制单个学生数据

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-27.png)

点击Reset Password可以重置学生账户密码，防止学生忘记密码

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-28.png)

点击删除可以删除学生信息

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-29.png)

## SmartIot 平台重置密码

点击下图所指示图标即可进入密码重置界面。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-30.png)

输入旧密码和新密码即可修改密码。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-31.png)


## SmartIot 配置共享

点击`Copy`或者`Import`导出或者导入设备配置。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-36.png)

## SmartIot 设备共享

点击`Share`进入设备共享页面。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-37.png)

点击`ALL`设置设备为公开共享设备，有设备共享链接的人员都可以访问该设备查看数据。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-38.png)

点击`Specified`设置设备为私人共享设备，可通过邮箱指定账户共享，如果是教师账户，也可通过下方选项快速共享设备给班级成员。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-39.png)

共享设备会在`Share Device`中显示。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-40.png)

被分享者只拥有阅读权限，无法对数据对图表内容进行修改。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-41.png)
