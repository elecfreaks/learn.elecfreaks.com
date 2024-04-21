# 生气的cutebot

## 目的

大家好！今天我要向大家介绍一个有趣的项目，我们将使用Cutebot智能赛车搭配8×16点阵屏幕来显示表情！这个项目将让我们的小车能够通过点阵屏幕展示不同的表情，就像是具有情感一样。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/cutebot-case-25-01.png)

## 使用材料

1 × [Cutebot 智能赛车](https://www.elecfreaks.com/micro-bit-smart-cutebot.html)

1 × [ELECFREAKS 8x16 Matrix Module](https://www.elecfreaks.com/8x16-matrix-module.html)




### 硬件连接
将8*16点阵屏插入cutebot智能赛车的IIC接口，需要注意连接接口是否正确。





## 软件平台
[微软 makecode](https://makecode.microbit.org/#)

## 编程
### 添加扩展
在MakeCode的代码抽屉中点击“高级”，查看更多代码选项。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/cutebot-case-24-01.png)

为了给Cutebot套件编程，我们需要添加一个代码库。在代码抽屉底部找到“扩展”，并点击它。这时会弹出一个对话框。搜索`Cutebot`，然后点击下载这个代码库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/cutebot-case-24-02.png)


为了给8*16点阵屏编程，我们需要添加一个代码库。在代码抽屉底部找到“扩展”，并点击它。这时会弹出一个对话框。搜索` https://github.com/elecfreaks/pxt-Matrix-8x16 `，然后点击下载这个代码库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/cutebot-case-25-03.png)


*注意：如果你得到一个提示说一些代码库因为不兼容的原因将被删除，你可以根据提示继续操作，或者在项目菜单栏里面新建一个项目。*

### 程序

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/cutebot-case-25-04.png)

请参考程序连接：[https://makecode.microbit.org/_cK3FCa8vh2V3](https://makecode.microbit.org/_cK3FCa8vh2V3)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_cK3FCa8vh2V3"
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

当micro:bit V2的徽标被触摸，则8×16点阵屏显示表情，并且cutebot智能赛车向前行驶。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/cutebot-case-25.gif)


## 思考
