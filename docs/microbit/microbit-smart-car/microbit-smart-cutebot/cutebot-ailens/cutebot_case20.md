﻿# AI摄像头:一键学习

## 目的

大家好！今天我要向大家介绍一个非常有趣且具有创新性的项目，我们将使用Cutebot智能赛车搭配AI摄像头实现摄像头的一键学习功能！这个项目将使我们的小车能够通过摄像头快速学习并识别不同的物体或颜色。让我们一起探索如何利用AI技术和摄像头的学习功能，让我们的小车具备智能识别能力吧！

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/cutebot-ailens/images/cutebot-case-20-01.png)

## 使用材料
---
- 1 × [Cutebot V3.0](https://item.taobao.com/item.htm?ft=t&id=598365555295)
- 1 × [Cutebot套件锂电池扩展包](https://item.taobao.com/item.htm?ft=t&id=640567252291)
- 1 × [AI摄像头](https://item.taobao.com/item.htm?ft=t&id=632538261754)

*注意：AI摄像头适用于 Cute bot V 3.0只有（可以看到底板上打印的版本号）。*

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/cutebot-ailens/images/cutebot-16-04.png)

## 安装方式
---
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


### AI摄像头连线方式：
将连接线的RJ11接口的一端连接到AI摄像头，另一端杜邦线接口的一端连接到下图所示的位置，需要注意连接线的接口是否正确。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/cutebot-ailens/images/cutebot-step-13.png)

*注意：这个积木支架结构是可以活动的，我们可以手动调节AI摄像头的视角，在使用AI摄像头时，应该根据功能需求来调节角度。*

## 软件平台
---
[微软 makecode](https://makecode.microbit.org/#)

## 编程
---
### 步骤 1
- 在MakeCode的代码抽屉中点击“高级”，查看更多代码选项。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/cutebot-ailens/images/cutebot-pk-1.png)

- 为了给Cutebot套件编程，我们需要添加一个代码库。在代码抽屉底部找到“扩展”，并点击它。这时会弹出一个对话框。搜索`Cutebot`，然后点击下载这个代码库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/cutebot-ailens/images/cutebot-pk-11.png)


为了给AI摄像头编程，我们需要添加一个代码库。在代码抽屉底部找到“扩展”，并点击它。这时会弹出一个对话框。搜索` https://github.com/elecfreaks/pxt-PlanetX-AI`，然后点击下载这个代码库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/cutebot-ailens/images/cutebot-pk-12.png)


*注意：如果你得到一个提示说一些代码库因为不兼容的原因将被删除，你可以根据提示继续操作，或者在项目菜单栏里面新建一个项目。*

### 步骤 2

- 在`当开机时`中，初始化AI摄像头，切换摄像头功能为特征学习模式。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/cutebot-ailens/images/case-20-01.png)

- 当按钮A被按下时，学习画面中的对象为ID1。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/cutebot-ailens/images/case-20-02.png)

- 在`无限循环`中，从摄像头获取一帧图像的信息，如果图像中包含对象ID1，则设置LED车头灯颜色为蓝色，LED矩阵显示√，否则设置LED车头灯显示红色，LED矩阵显示×。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/cutebot-ailens/images/case-20-03.png)



### 程序

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/cutebot-ailens/images/case-20-04.png)



请参考程序连接：[https://makecode.microbit.org/_8Xe7ERhxEgza](https://makecode.microbit.org/_8Xe7ERhxEgza)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_8Xe7ERhxEgza"
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
---
- 当按钮A被按下时，学习图像中的对象为ID1，学习完成后，当识别到ID1时，LED车头灯显示蓝色，LED矩阵显示√，否则设置LED车头灯显示红色，LED矩阵显示×。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/cutebot-ailens/images/cutebot-case-20.gif)


## 思考
---

## 常见问题
---
## 相关阅读
---
