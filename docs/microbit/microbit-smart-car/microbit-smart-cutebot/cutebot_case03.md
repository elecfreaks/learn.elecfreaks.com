---
sidebar_position: 6
sidebar_label: 8字舞蹈
---


# 案例03:8字舞蹈

## 目的

大家好！今天我将向大家介绍一个非常有趣的项目，我们将制作一辆能够沿着8字轨迹运行的Cutebot智能赛车！你们准备好了吗？

在之前的课程中，我们学习了如何控制Cutebot智能赛车前进、后退以及实现平稳的起步动作。这次，我们将进一步扩展我们的编程技能，通过调整左右轮的速度差来实现转向，从而让Cutebot沿着8字轨迹运行。

想象一下，当我们在赛道上驾驶车辆时，要在转弯时调整方向盘的位置。类似地，我们可以通过编程来控制Cutebot智能赛车的左右轮速度差，从而实现转向效果。

让我们一起动手实践吧！我们将使用编程工具，编写一段程序来控制Cutebot按照8字轨迹运行。通过调整左右轮的速度差，我们可以实现转弯和直线行驶的切换。上传程序到Cutebot智能赛车上，看看它是如何沿着8字轨迹灵活运动的。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/cutebot-case-03-01.png)

## 使用材料

1 x [Cutebot套件](https://item.taobao.com/item.htm?spm=a1z10.3-c-s.w4002-18602834180.23.78b86655ZP5Yg8&id=598365555295)

## 软件平台

[微软 makecode](https://makecode.microbit.org/#)

## 编程

### 步骤 1

在MakeCode的代码抽屉中点击高级，查看更多代码选项。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/cutebot-pk-1.png)

为了给Cutebot套件编程，我们需要添加一个代码库。在代码抽屉底部找到“扩展”，并点击它。这时会弹出一个对话框。搜索`Cutebot`，然后点击下载这个代码库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/cutebot-pk-11.png)

注意：如果你得到一个提示说一些代码库因为不兼容的原因将被删除，你可以根据提示继续操作，或者在项目菜单栏里面新建一个项目。

### 步骤 2

在`当开机时`积木块中显示图标，选择一颗心；

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_03_01.png)

### 步骤 4

在`无限循环`积木块中依次插入`全速前进`和`设置左右轮速度`积木块。

将8轨迹分为6段，先直行200ms，设置左轮速度大于右轮速度，完成右转1000ms，然后直行200ms，完成8字的上半段小圆圈。

同理，完成下半圆

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_03_02.png)

### 程序

请参考程序连接：[https://makecode.microbit.org/_JwcXcFF0F82k](https://makecode.microbit.org/_JwcXcFF0F82k)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_JwcXcFF0F82k"
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

小车以8字的轨迹行进。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/cutebot-case-03.gif)

## 思考
---
如果想要让小车以一个正方形轨迹行驶，如何编程。



## 常见问题
---
## 相关阅读
---
