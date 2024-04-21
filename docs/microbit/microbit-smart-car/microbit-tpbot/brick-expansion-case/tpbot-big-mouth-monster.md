---
sidebar_position: 2
sidebar_label: TPbot大嘴怪
---

# TPbot大嘴怪

## 目的

搭建一辆拥有大嘴巴的天蓬智能车。


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-case-02-01.png)

## 使用材料


[天蓬智能车](https://www.elecfreaks.com/tpbot.html)

[360度舵机](https://www.elecfreaks.com/geekservo-2kg-360-degrees-compatible-with-lego.html)

扩展积木包



## 搭建步骤

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-02-01.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-02-02.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-02-03.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-02-04.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-02-05.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-02-06.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-02-07.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-02-08.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-02-09.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-02-10.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-02-11.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-02-12.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-02-13.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-02-14.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-02-15.png)

## 硬件连接

将360°舵机连接到天蓬智能车的SERVO1端口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-case-01-02.png)


## 软件

[微软makecode](https://makecode.microbit.org/#)


## 编程



在MakeCode的代码抽屉中点击`高级`，查看更多代码选项。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-case-01-03.png)

为了给天蓬智能车编程，我们需要添加一个扩展库。在代码抽屉底部找到`扩展`，并点击它。这时会弹出一个对话框，搜索`tpbot`，然后点击下载这个代码库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-case-01-04.png)


## 示例程序

`当开机时`设置显示图标，设置连接S1的舵机转动至90°，设置小车以30%的速度向前行驶，延时2000ms，设置连接S1的舵机转动至180°。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-case-02-05.png)


### 程序

请参考程序连接：[https://makecode.microbit.org/_AYtaMUgroVbh](https://makecode.microbit.org/_AYtaMUgroVbh)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_AYtaMUgroVbh"
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


开机后，TPbot大嘴怪张开嘴巴，向前行驶2秒后停车，并闭合嘴巴。
