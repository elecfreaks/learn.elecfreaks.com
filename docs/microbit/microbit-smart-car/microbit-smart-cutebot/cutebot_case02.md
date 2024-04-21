---
sidebar_position: 5
sidebar_label: 均匀加速
---

# 案例02:均匀加速

## 目的

大家好！今天我们将继续探索Cutebot智能赛车的功能，并学习如何实现平稳的起步。在之前的案例中，我们发现后驱的Cutebot在起步时速度非常快，甚至使得万向轮离开地面。这次，我们将学习如何均匀地加速，以实现一个更平稳的起步动作。

在现实生活中，许多车辆在启动时都会采取缓慢加速的方式，这样可以保证起步时的平稳性。我们也可以通过编程来控制Cutebot智能赛车以相同的方式起步。

在编写程序之前，我们需要了解加速度的概念。加速度是一个物体在单位时间内速度变化的量。如果我们希望Cutebot以均匀的加速度起步，我们需要将相应的指令写入程序中。

通过这个案例，我们将学习如何控制Cutebot智能赛车以平稳的方式起步。这个过程涉及到加速度的概念和编程技巧。编程可以帮助我们控制机器并实现我们的想法。继续保持好奇心和探索的精神，让我们一起享受这个充满创造力和想象力的编程之旅吧！

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/images/cutebot-case-02-01.png)

## 使用材料

1 x [Cutebot套件](https://item.taobao.com/item.htm?spm=a1z10.3-c-s.w4002-18602834180.23.78b86655ZP5Yg8&id=598365555295)

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

并且将速度变量`speed`设置为0，意味着初始速度为0。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/images/case_02_01.png)

### 步骤 3


在`无限循环`积木块中插入设置左右轮速度积木块，将速度值设置为`speed`，然后将`speed`加一。

并且判断如果`speed`速度等于`100`的时候，速度已经为最大值，将速度`speed`设置为0，重新起步。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/images/case_02_02.png)

### 程序

请参考程序连接：[https://makecode.microbit.org/_1H8HYi5K5LHh](https://makecode.microbit.org/_1H8HYi5K5LHh)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_1H8HYi5K5LHh"
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

小车循环完成匀速起步，不会因为车速过快使前轮离地。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/images/cutebot-case-02.gif)

## 思考

如何编写让小车匀加速后匀减速。

## 常见问题
---
## 相关阅读
---
