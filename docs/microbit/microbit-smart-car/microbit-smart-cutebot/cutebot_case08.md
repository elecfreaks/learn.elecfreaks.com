---
sidebar_position: 11
sidebar_label: 沿着黑线行驶
---

# 案例08:沿着黑线行驶

## 目的

大家好！今天我要向大家介绍一个很酷的项目，我们将使用Cutebot智能赛车制作一辆巡线小车！这个小车可以沿着黑色路线行驶，就像是在跟踪一条隐藏的路径。让我们一起探索如何利用传感器和编程来实现这个有趣的功能吧！

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/images/cutebot-case-08-01.png)

## 使用材料

1 x [Cutebot套件](https://item.taobao.com/item.htm?spm=a1z10.3-c-s.w4002-18602834180.23.78b86655ZP5Yg8&id=598365555295)

1 x 巡线地图(自制或使用Cutebot套装内地图)

## 软件平台

[微软 makecode](https://makecode.microbit.org/#)

## 编程

### 步骤 1

在MakeCode的代码抽屉中点击高级，查看更多代码选项。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/images/cutebot-pk-1.png)

为了给Cutebot套件编程，我们需要添加一个代码库。在代码抽屉底部找到“扩展”，并点击它。这时会弹出一个对话框。搜索`Cutebot`，然后点击下载这个代码库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/images/cutebot-pk-11.png)

注意：如果你得到一个提示说一些代码库因为不兼容的原因将被删除，你可以根据提示继续操作，或者在项目菜单栏里面新建一个项目。

### 步骤 2

在`当开机时`积木块中显示图标，选择一颗心；

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/images/case_08_01.png)

### 步骤 3

在`无限循环`积木块中插入三次`if`(判断)积木块。

首先判断巡线头状态是否为 ○ ● ，即左巡线头未检测到黑线，右巡线头检测到黑线。

将左轮速度设置为`50`，右轮速度`10`，利用速度差完成右转，回归黑线道路。

再判断巡线头是否为 ● ○ ，左转回归黑线。

当巡线头为 ● ● ，证明小车在黑线上，以`50`的速度直行。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/images/case_08_02.png)


### 程序

请参考程序连接：[https://makecode.microbit.org/_V53Y9HMygAVp](https://makecode.microbit.org/_V53Y9HMygAVp)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_V53Y9HMygAVp"
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

小车按照地图黑线匀速前进，偏离黑线会保持速度和方向行驶，直到回归黑线。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/images/cutebot-case-08.gif)

## 思考

如何在Cutebot自带地图外侧的白圈内行驶而不驶出地图。



## 常见问题

## 相关阅读
