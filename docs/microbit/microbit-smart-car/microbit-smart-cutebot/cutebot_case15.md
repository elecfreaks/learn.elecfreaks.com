---
sidebar_position: 18
sidebar_label: 寻光小车
---
# 案例15:寻光小车

## 目的

大家好！今天我要向大家介绍一个非常有趣的项目，我们将使用Cutebot智能赛车制作一辆可以自动寻找光源的小车！这个小车将利用micro:bit的光线检测功能，自动检测并朝向光源。让我们一起探索如何让小车具备自主寻找光源的能力吧！

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/cutebot-case-15-01.png)

## 使用材料

1 x [Cutebot套件](https://item.taobao.com/item.htm?spm=a1z10.3-c-s.w4002-18602834180.23.78b86655ZP5Yg8&id=598365555295)
## 软件平台

[微软 makecode](https://makecode.microbit.org/#)

## 编程

### 步骤 1

在MakeCode的代码抽屉中点击“高级”，查看更多代码选项。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/cutebot-pk-1.png)

为了给Cutebot套件编程，我们需要添加一个代码库。在代码抽屉底部找到“扩展”，并点击它。这时会弹出一个对话框。搜索`Cutebot`，然后点击下载这个代码库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/cutebot-pk-11.png)

注意：如果你得到一个提示说一些代码库因为不兼容的原因将被删除，你可以根据提示继续操作，或者在项目菜单栏里面新建一个项目。

### 步骤 2

在`无限循环`中，判断`亮度级别`的大小，当亮度级别小于设定阈值时，小车`全速左转`，当亮度级别大于设定阈值时，小车`全速前进`，

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_15_01.png)


### 程序

请参考程序连接：[https://makecode.microbit.org/_UatK2a6cgc7u](https://makecode.microbit.org/_UatK2a6cgc7u)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_UatK2a6cgc7u"
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

当没有检测到光源的时候小车原地旋转，当检测到光源时，小车全速前进。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/cutebot-case-15.gif)

## 思考
---

## 常见问题
---
## 相关阅读
---
