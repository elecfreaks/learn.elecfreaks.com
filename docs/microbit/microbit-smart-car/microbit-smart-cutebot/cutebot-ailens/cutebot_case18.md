﻿# AI摄像头:变色车灯

## 目的

大家好！今天我要向大家介绍一个非常有趣且具有创造性的项目，我们将使用Cutebot智能赛车搭配AI摄像头制作一辆可以通过AI摄像头识别颜色，并根据识别到的颜色自动改变车灯颜色的小车！这个项目结合了人工智能和创意设计，让我们的小车能够根据环境中的颜色自动调整车灯的颜色。让我们一起探索如何利用AI技术和颜色识别来打造一个能自动改变车灯颜色的小车吧！

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/cutebot-ailens/images/cutebot-case-18-01.png)

## 使用材料

1 × [Cutebot V3.0](https://item.taobao.com/item.htm?ft=t&id=598365555295)

1 × [Cutebot套件锂电池扩展包](https://item.taobao.com/item.htm?ft=t&id=640567252291)

1 × [AI摄像头](https://item.taobao.com/item.htm?ft=t&id=632538261754)

*注意：AI摄像头适用于 Cute bot V 3.0只有（可以看到底板上打印的版本号）。*

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/cutebot-ailens/images/cutebot-16-04.png)

## 安装方式

### 锂电池安装步骤：

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/cutebot-ailens/images/cutebot-step-01.png)

### 积木支架结构搭建步骤：

零件清单：

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/cutebot-ailens/images/cutebot-step-02.png)

搭建步骤：

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/cutebot-ailens/images/cutebot-step-03.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/cutebot-ailens/images/cutebot-step-04.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/cutebot-ailens/images/cutebot-step-05.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/cutebot-ailens/images/cutebot-step-06.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/cutebot-ailens/images/cutebot-step-07.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/cutebot-ailens/images/cutebot-step-08.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/cutebot-ailens/images/cutebot-step-09.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/cutebot-ailens/images/cutebot-step-10.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/cutebot-ailens/images/cutebot-step-11.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/cutebot-ailens/images/cutebot-step-12.png)


### AI摄像头连线方式

将连接线的RJ11接口的一端连接到AI摄像头，另一端杜邦线接口的一端连接到下图所示的位置，需要注意连接线的接口是否正确。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/cutebot-ailens/images/cutebot-step-13.png)

*注意：这个积木支架结构是可以活动的，我们可以手动调节AI摄像头的视角，在使用AI摄像头时，应该根据功能需求来调节角度。*

## 软件平台

[微软 makecode](https://makecode.microbit.org/#)

## 编程

### 步骤 1

在MakeCode的代码抽屉中点击“高级”，查看更多代码选项。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/cutebot-ailens/images/cutebot-pk-1.png)

为了给Cutebot套件编程，我们需要添加一个代码库。在代码抽屉底部找到“扩展”，并点击它。这时会弹出一个对话框。搜索`Cutebot`，然后点击下载这个代码库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/cutebot-ailens/images/cutebot-pk-11.png)


为了给AI摄像头编程，我们需要添加一个代码库。在代码抽屉底部找到“扩展”，并点击它。这时会弹出一个对话框。搜索` https://github.com/elecfreaks/pxt-PlanetX-AI`，然后点击下载这个代码库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/cutebot-ailens/images/cutebot-pk-12.png)


*注意：如果你得到一个提示说一些代码库因为不兼容的原因将被删除，你可以根据提示继续操作，或者在项目菜单栏里面新建一个项目。*

### 步骤 2

在`当开机时`中，初始化AI摄像头，切换摄像头功能为颜色识别模式，初始化转向示廓灯为P15端口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/cutebot-ailens/images/case-18-01.png)

在`无限循环`中，从摄像头获取一帧图像的信息，并判断图像中识别到的卡片颜色，如果识别到白色卡片，则设置LED车头灯以及转向示廓灯显示白色，如果识别到蓝色卡片，则设置LED车头灯以及转向示廓灯显示蓝色，以此类推，设置摄像头识别到绿色、红色、黄色、黑色的时候的车灯颜色。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/cutebot-ailens/images/case-18-02.png)

### 程序

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/cutebot-ailens/images/case-18-03.png)

请参考程序连接：[https://makecode.microbit.org/_L36f3yaJgTVH](https://makecode.microbit.org/_L36f3yaJgTVH)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_L36f3yaJgTVH"
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

## 结论

当小车根据摄像头识别到的颜色改变灯光颜色。


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/cutebot-ailens/images/cutebot-case-18.gif)

## 思考


## 常见问题

## 相关阅读
