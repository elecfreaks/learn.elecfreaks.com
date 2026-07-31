---
sidebar_position: 2
---

# 如何使用MQTT功能

## 什么是MQTT？

在了解MQTT的功能使用之前，我们先了解一下什么是MQTT。

MQTT 全称 Message Queuing Telemetry Transport，中文译为消息队列遥测传输协议，是一种基于 TCP/IP 协议、采用发布 / 订阅（Pub/Sub）模型的轻量级物联网通信标准协议。

### 基础背景

1999 年由 IBM 为石油管道远程低带宽监测场景设计，后来成为物联网行业事实标准，专门针对单片机、传感器、电池供电设备、弱网环境做极致优化，现在广泛用于智能家居、工业设备、STEAM 教育机器人、云设备远程管控等场景。

### 核心本质

它并不是真正意义上的 “消息队列”（不会持久堆积消息），核心是通过一台中间服务器转发数据，实现设备与设备、设备与服务器之间解耦通信。

### MQTT 五大核心特性

**超轻量化数据包**

协议最小头部仅 2 字节，报文体量极小，流量消耗极低，非常适合 4G/WiFi 低流量嵌入式设备。

**发布 - 订阅解耦架构**

发送方（发布者）和接收方（订阅者）不需要直接建立连接，互不感知，全部由中间服务器转发，架构灵活易扩展。

**三级 QoS 消息可靠性保障**

- QoS0：最多一次，发完即弃，无回执（温湿度定时上报首选）
- QoS1：至少一次，保证送达，可能重复接收（设备开关指令）
- QoS2：恰好一次，严格只送达一次（计费、重要控制指令）

**实用物联网专属机制**

- 遗嘱消息：设备异常掉线、断电时，服务器自动推送离线通知；
- 保留消息：新上线订阅设备可直接获取该主题最后一条最新状态；
- 心跳保活：定时发送心跳包，判定设备在线 / 离线状态。

**Topic 主题路由机制**

通过层级化主题字符串分发消息，用/分割层级，支持通配符批量订阅。

## 如何使用SmartIoT的MQTT功能


打开SmartIoT平台

平台链接：[https://www.smartiot.space/](https://www.smartiot.space/)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-01.png)


注册并登录账号，具体操作流程请阅读[快速入门文档](https://wiki.elecfreaks.com/smartiot/how-to-use-mqtt-feature-quick-start)

打开MQTT功能选项

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/how-to-use-mqtt-feature-01.png)

点击`新建话题`

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/how-to-use-mqtt-feature-02.png)

在弹出窗口填写`显示名称`和`Topic`，并点击保存

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/how-to-use-mqtt-feature-03.png)

点击`访问管理`切换到访问管理页面，并点击新建账户

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/how-to-use-mqtt-feature-04.png)

在弹出窗口填写`用户名`和`密码`，设置`权限`，并点击提交，使用同样的操作，新建两个账号

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/how-to-use-mqtt-feature-05.png)

切换到`MQTT网页客户端`填写`客户端 ID`、`用户名`、`密码`、`订阅主题`、`Topic`，并点击`连接服务器`及`订阅`，即可连上MQTT服务器发送消息

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/how-to-use-mqtt-feature-06.png)

编辑消息内容，点击`发布消息`即可在消息查看栏看到信息

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/how-to-use-mqtt-feature-07.png)

## 如何通过本地设备发布或订阅消息

这里以花瓣系列为例

### 硬件连接

将WIFI模块连接到Prtal:bit的J3接口上

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/how-to-use-mqtt-feature-08.png)

### 编写代码

[微软makecode](https://makecode.microbit.org/#)

### 编程

进入“makecode.microbit.org”，点击“新建项目”。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/about-the-microbit-smart-climate-kit/images/smart-weather-station-kit-add-extension-01.png)

在弹出窗口输入项目名称并点击“创建”。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/about-the-microbit-smart-climate-kit/images/smart-weather-station-kit-add-extension-02.png)

点击代码抽屉中的“扩展”。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/about-the-microbit-smart-climate-kit/images/smart-weather-station-kit-add-extension-03.png)

在弹出界面输入“Petal”，按下回车键进行搜索，并选择加载Petal软件库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-16.png)


**注意：如果你得到一个提示说一些代码库因为不兼容的原因将被删除，你可以根据提示继续操作，或者在项目菜单栏里面新建一个项目。**

#### 示例代码

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/how-to-use-mqtt-feature-09.png)

请参考程序连接：[https://makecode.microbit.org/_Wyoa0F67qDxW](https://makecode.microbit.org/_Wyoa0F67qDxW)

你也可以通过以下网页修改程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_Wyoa0F67qDxW"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

## 结果

按下按键A之后，平台接收到`hello`信息，micro:bit的LED矩阵同步显示信息。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/how-to-use-mqtt-feature-10.png)
