---
sidebar_position: 13
sidebar_label: 定距跟车
---

# 案例10:定距跟车

## 目的

大家好！今天我要向大家介绍一个令人惊叹的项目，我们将使用Cutebot智能赛车制作一辆可以定距跟车的小车！这个小车可以通过传感器感知前方的障碍物，并保持一定的距离。它就像是具备智能思维一样，能够自动调整速度来保持安全距离。

想象一下，当我们驾驶车辆跟随其他车辆时，我们需要保持一定的安全距离，以防止碰撞。现在，我们将学习如何使用传感器和编程来实现这一功能。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/images/cutebot-case-10-01.png)

## 使用材料

1 x [Cutebot套件](https://item.taobao.com/item.htm?spm=a1z10.3-c-s.w4002-18602834180.23.78b86655ZP5Yg8&id=598365555295)

1 x 超声波探头(自备或使用Cutebot套装内探头)

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

在`当开机时`积木块中插入设置左右轮速度积木块；

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/images/case_10_01.png)

### 步骤 3

在`无限循环`积木块中设置一个`Sonar`变量，用来保存超声波返回的`Cm`值。

当超声波返回值大于`5`并且小于`10`时候，位置刚好小车停止。

再判断超声波返回值小于`5`的时候，小车距离手太近了，后退。

如果都不是，则距离手太远了，前进追上手并且保持位置停止。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/images/case_10_02.png)


### 程序

请参考程序连接：[https://makecode.microbit.org/_1MreEP9HVgWg](https://makecode.microbit.org/_1MreEP9HVgWg)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_1MreEP9HVgWg"
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

小车距离手太远会前进靠近，太近远离，当距离合适的时候就停止。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/images/cutebot-case-10.gif)

## 思考

---

## 常见问题

---
## 相关阅读

---
