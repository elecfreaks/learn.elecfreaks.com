---
sidebar_position: 3
sidebar_label: 案例三 积木机械爪小车
---

# 积木机械爪小车

## 目的


使用积木搭建的机械爪的Cutebot Pro智能赛车。


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/cutebot-pro-extended-case-03-01.png)


## 使用材料


[Cutebot Pro智能赛车](https://www.elecfreaks.com/elecfreaks-smart-cutebot-pro-programming-robot-car-for-micro-bit.html)

[科创扩展包](https://shop.elecfreaks.com/products/elecfreaks-tpbot-science-and-technology-pack?_pos=3&_sid=11fe49ca3&_ss=r)

[ELECFREAKS micro:bit Electronic Joystick:bit V2 Kit](https://www.elecfreaks.com/joystick-bit-2-kit-for-micro-bit.html)



## 搭建步骤

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/cutebot-pro-extended-case-step-03-01.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/cutebot-pro-extended-case-step-03-02.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/cutebot-pro-extended-case-step-03-03.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/cutebot-pro-extended-case-step-03-04.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/cutebot-pro-extended-case-step-03-05.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/cutebot-pro-extended-case-step-03-06.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/cutebot-pro-extended-case-step-03-07.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/cutebot-pro-extended-case-step-03-08.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/cutebot-pro-extended-case-step-03-09.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/cutebot-pro-extended-case-step-03-10.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/cutebot-pro-extended-case-step-03-11.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/cutebot-pro-extended-case-step-03-12.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/cutebot-pro-extended-case-step-03-13.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/cutebot-pro-extended-case-step-03-14.png)

## 硬件连接

将舵机连接到Cutebot Pro智能赛车的S1端口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/cutebot-pro-extended-case-03-02.png)


## 软件

[微软makecode](https://makecode.microbit.org/#)


## 编程


在MakeCode的代码抽屉中点击`高级`，查看更多代码选项。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/cutebot-pro-extended-case-02-03.png)

为了给Cutebot Pro智能赛车编程，我们需要添加一个扩展库。在代码抽屉底部找到`扩展`，并点击它。这时会弹出一个对话框，搜索`CutebotPro`，然后点击下载这个代码库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/cutebot-pro-extended-case-02-04.png)

为了给joystick:bit V2编程，我们需要添加一个扩展库。在代码抽屉底部找到`扩展`，并点击它。这时会弹出一个对话框，搜索`joystickbit`，然后点击下载这个代码库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/cutebot-pro-extended-case-02-05.png)


## 示例程序

### 手柄端

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/cutebot-pro-extended-case-02-06.png)


### 程序

请参考程序连接：[https://makecode.microbit.org/_DHyiYdULjKg0](https://makecode.microbit.org/_DHyiYdULjKg0)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_DHyiYdULjKg0"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

### 小车端

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/cutebot-pro-extended-case-03-07.png)


### 程序

请参考程序连接：[https://makecode.microbit.org/_dfmJjPJ1yMqp](https://makecode.microbit.org/_dfmJjPJ1yMqp)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_dfmJjPJ1yMqp"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

## 结论


通过手柄摇杆控制小车行驶路线，按下手柄按键C可以控制小车机械爪夹取物品，松开按键C则机械爪放开物品。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/cutebot-pro-extended-case-03.gif)

## 扩展知识

*** 遥控机械爪小车的的发展 ***

遥控机械爪小车在技术和应用方面都有不断的发展。以下是该领域的一些主要发展趋势：

自主化和智能化：随着人工智能和自主导航技术的进步，遥控机械爪小车正朝着自主化和智能化方向发展。它们可以通过搭载传感器、视觉系统和机器学习算法来实现自主导航和环境感知能力，减少对操作员的依赖，提高工作效率和安全性。

多功能和模块化设计：为了适应不同的应用需求，遥控机械爪小车越来越注重多功能和模块化设计。这意味着可以根据具体任务的需求，灵活地更换、升级或添加不同类型的机械爪和附件，以完成更广泛的任务。

高效能源和长续航力：随着电池技术的改进和能源管理系统的优化，遥控机械爪小车的能源效率和续航能力不断提高。这使得它们能够在更长时间内持续工作，减少充电或更换电池的频率，提高工作效率和使用便利性。

物联网和云平台集成：遥控机械爪小车与物联网和云平台的集成也是发展的趋势之一。通过将小车连接到互联网，可以实现远程监控、数据共享和远程操作等功能。同时，云平台可以提供数据存储和分析、远程控制和任务调度等服务，进一步提升小车的智能化和协作能力。

新材料和结构设计：为了提高机械爪小车的负载能力、稳定性和耐用性，新材料和结构设计的研究也在进行中。轻量化材料、高强度结构和灵活机械爪设计等方面的创新，可以使小车更加适应各种复杂环境和任务要求。

总体而言，遥控机械爪小车的发展趋势是朝着自主化、智能化、多功能化和高效能源等方向发展。这将为各个领域的应用提供更多的机会和解决方案，推动其在工业、农业、仓储、救援等领域的广泛应用。
