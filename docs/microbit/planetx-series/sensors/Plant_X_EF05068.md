# PS2手柄套装

## 简介

PS2手柄是一款适用于遥控机器人、智能车、机械臂等多类型多结构的遥控手柄,我们可以利用手柄的摇杆、按键等控制机器人完成相对对应的动作。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/ef05068-01.png)

**注意：手柄套装包含一个手柄和一个接收器,两者通讯已被强制绑定,不可用另外的手柄或接收器配对。接收器连接到哪吒Pro扩展盒中使用。将两节7号电池安装在手柄背部,向左拨动位于两个摇杆中间的开机键,即可完成开机操作。**
**无配对状态下,30s后启动休眠模式;开机并配对完成,5分钟无按键按下,自动启动休眠模式,按下START即可唤醒手柄。**

## 特性

RJ11端口设计，防止误插，易于使用。

手柄与接收器绑定，多个手柄同时使用的情况下不会相互影响。

## 技术规格

项目 | 参数
:-: | :-:
SKU|EF05068
接口|RJ11
接口类型|IIC
工作电压|3.3V




## 外形与定位尺寸
---


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/ef05068-02.png)


## 快速上手

### 所需器材及连接示意图

如下图所示，将PS2手柄适配器连接到哪吒扩展板的IIC端口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/ef05068_03.png)

## makecode编程

### 步骤 1

在MakeCode的代码抽屉中点击“高级”，查看更多代码选项。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/05001_04.png)

为了给光线传感器编程，我们需要添加一个扩展库。在代码抽屉底部找到“扩展”，并点击它。这时会弹出一个对话框，搜索”PlanetX“，然后点击下载这个代码库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/05001_05.png)

*注意：*如果你得到一个提示说一些代码库因为不兼容的原因将被删除，你可以根据提示继续操作，或者在项目菜单栏里面新建一个项目。

### 步骤 2
### 如图所示编写程序

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/ef05068_04.png)


### 参考程序
请参考程序连接：[https://makecode.microbit.org/_Ma4PDshtPXJf](https://makecode.microbit.org/_Ma4PDshtPXJf)

你也可以通过以下网页直接下载程序，下载完成后即可开始运行程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_Ma4PDshtPXJf"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>
---

### 结果

手柄可以控制micro:bit上LED矩阵显示的内容。
