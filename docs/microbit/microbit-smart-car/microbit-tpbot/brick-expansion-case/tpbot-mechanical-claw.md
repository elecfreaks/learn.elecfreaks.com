---
sidebar_position: 10
sidebar_label: TPbot机械爪
---

# TPbot投石车

## 目的

搭建一辆有机械爪的TPbot。


![](./images/tpbot-brick-expansion-case-10-01.png)

## 使用材料


[天蓬智能车](https://www.elecfreaks.com/tpbot.html)

[360度舵机](https://www.elecfreaks.com/geekservo-2kg-360-degrees-compatible-with-lego.html)

扩展积木包



## 搭建步骤

![](./images/tpbot-brick-expansion-step-10-01.png)

![](./images/tpbot-brick-expansion-step-10-02.png)

![](./images/tpbot-brick-expansion-step-10-03.png)

![](./images/tpbot-brick-expansion-step-10-04.png)

![](./images/tpbot-brick-expansion-step-10-05.png)

![](./images/tpbot-brick-expansion-step-10-06.png)

![](./images/tpbot-brick-expansion-step-10-07.png)

![](./images/tpbot-brick-expansion-step-10-08.png)

![](./images/tpbot-brick-expansion-step-10-09.png)

![](./images/tpbot-brick-expansion-step-10-10.png)

![](./images/tpbot-brick-expansion-step-10-11.png)

![](./images/tpbot-brick-expansion-step-10-12.png)

![](./images/tpbot-brick-expansion-step-10-13.png)

![](./images/tpbot-brick-expansion-step-10-14.png)

![](./images/tpbot-brick-expansion-step-10-15.png)

![](./images/tpbot-brick-expansion-step-10-16.png)

![](./images/tpbot-brick-expansion-step-10-17.png)

![](./images/tpbot-brick-expansion-step-10-18.png)

![](./images/tpbot-brick-expansion-step-10-19.png)

![](./images/tpbot-brick-expansion-step-10-20.png)

![](./images/tpbot-brick-expansion-step-10-21.png)

![](./images/tpbot-brick-expansion-step-10-22.png)

![](./images/tpbot-brick-expansion-step-10-23.png)

## 硬件连接

将360°舵机连接到天蓬智能车的SERVO1端口。

![](./images/tpbot-brick-expansion-case-01-02.png)


## 软件

[微软makecode](https://makecode.microbit.org/#)


## 编程



在MakeCode的代码抽屉中点击`高级`，查看更多代码选项。

![](./images/tpbot-brick-expansion-case-01-03.png)

为了给天蓬智能车编程，我们需要添加一个扩展库。在代码抽屉底部找到`扩展`，并点击它。这时会弹出一个对话框，搜索`tpbot`，然后点击下载这个代码库。

![](./images/tpbot-brick-expansion-case-01-04.png)


## 示例程序

`当开机时`设置显示图标，当A键按下时，设置连接S1的舵机转动至225°，当B键按下时，设置连接S1的舵机转动至255°。

![](./images/tpbot-brick-expansion-case-04-05.png)


### 程序

请参考程序连接：[https://makecode.microbit.org/_FzL3uY6ojM8C](https://makecode.microbit.org/_FzL3uY6ojM8C)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_FzL3uY6ojM8C"
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


当A键按下时，机械爪抓住物体，当B键按下时，机械爪松开物体。
