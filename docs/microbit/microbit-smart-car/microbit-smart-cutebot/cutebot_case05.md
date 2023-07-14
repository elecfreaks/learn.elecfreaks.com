---
sidebar_position: 8
sidebar_label: 自动车大灯
---

# 案例05:自动车大灯

## 目的

大家好！今天我要向大家展示一个非常实用的项目，我们将制作一辆可以根据环境光强度自动打开或关闭大灯的Cutebot智能赛车！这个项目将帮助我们更好地理解光感应和自动控制的原理。

想象一下，当天色变暗时，我们需要打开车辆的大灯以提供足够的照明。相反，当光线足够明亮时，我们又希望将大灯关闭以节省能源。这次，我们将学习如何使用micro:bit的光线检测功能和条件语句来实现这个功能。

![](./images/cutebot-case-05-01.png)

## 使用材料

1 x [Cutebot套件](https://item.taobao.com/item.htm?spm=a1z10.3-c-s.w4002-18602834180.23.78b86655ZP5Yg8&id=598365555295)

## 软件平台

[微软 makecode](https://makecode.microbit.org/#)

## 编程

### 步骤 1
在MakeCode的代码抽屉中点击高级，查看更多代码选项。

![](./images/cutebot-pk-1.png)

为了给Cutebot套件编程，我们需要添加一个代码库。在代码抽屉底部找到“扩展”，并点击它。这时会弹出一个对话框。搜索`Cutebot`，然后点击下载这个代码库。

![](./images/cutebot-pk-11.png)

注意：如果你得到一个提示说一些代码库因为不兼容的原因将被删除，你可以根据提示继续操作，或者在项目菜单栏里面新建一个项目。

### 步骤 2

在`当开机时`积木块中全速前进；

![](./images/case_05_01.png)

### 步骤 3

在`无限循环`积木块中插入判断积木块，判断光线值是否小于`10`，当小于`10`的时候，左右车灯RGB值全设为`255`，(组合光为白光)。

当大于`10`的时候，设置左右车灯RGB值为`0`，关闭车灯。

![](./images/case_05_02.png)


### 程序

请参考程序连接：[https://makecode.microbit.org/_DuA0wcVT3ELP](https://makecode.microbit.org/_DuA0wcVT3ELP)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_DuA0wcVT3ELP"
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

当小车经过黑暗的地方，车灯自动点亮，离开黑暗区，车灯自动关闭。

![](./images/cutebot-case-05.gif)

## 思考

如何编程让小车再每次经过黑暗区的时候，车灯都能亮起不同的颜色。(RGB值控制颜色)


## 常见问题


## 相关阅读
