---
sidebar_position: 12
sidebar_label: 智能避障行驶
---

# 案例09:智能避障行驶

## 目的

今天我们将使用Cutebot智能赛车制作一辆自动避开障碍物的避障小车！这个小车能够通过传感器检测到障碍物，并自动躲避它们，就像是具备智能思维一样。

想象一下，当我们在道路上行驶时，遇到障碍物时需要及时躲避，以确保安全通行。现在，我们将学习如何使用传感器和编程来实现这一功能。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/images/cutebot-case-09-01.png)

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

在`当开机时`积木块中插入全速前进积木块；

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/images/case_09_01.png)

### 步骤 3

在`无限循环`积木块中设置一个`Sonar`变量，用来保存超声波返回的`Cm`值。

当超声波返回值大于`2`并且小于`20`时候，证明前方20CM处已经检测到障碍，设置左轮速度为`0`，右轮速度`-50`，向右转向一个随机时间。完成一个右转避障。

如果不是，就全速前进。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/images/case_09_02.png)


### 程序

请参考程序连接：[https://makecode.microbit.org/_YJxYhcT3vC68](https://makecode.microbit.org/_YJxYhcT3vC68)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_YJxYhcT3vC68"
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

小车全速前进，当检测到20cm之内有障碍物时，向右旋转一个角度，继续前进。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/images/cutebot-case-09.gif)

## 思考

为什么要判断返回值大于2CM。

## 常见问题

Q：使用cutebot小车时，发现小车本来正常行驶，接入超声波传感器后小车故障，无法行驶。

A：请检查超声波传感器是否插错接口，应该插在sonar接口而不是iic接口。

## 相关阅读
