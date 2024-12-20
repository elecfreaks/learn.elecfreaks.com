# 行星系列电磁铁

## 简介

专为 steam 教育打造的电磁铁，结构精巧，性能稳定。助力学生探索电磁奥秘，在实践中领悟科学原理，开启创意与知识交融的学习之旅。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/05072_01.png)

## 特性

RJ11端口设计，防止误插，易于使用。

## 技术规格


项目 | 参数
:-: | :-:
SKU|EF05072
接口|RJ11
接口类型|IIC
工作电压|3.3V
产品尺寸|长51mm x 宽28mm x 高31.6mm
产品重量|32.7g(不含包装)
有效区间|8~16 mm
垂直承重能力|1kg

## 外形与定位尺寸

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/05072_02.png)


## 快速上手

### 连接示意图

如下图所示，将电磁铁连接到哪吒Pro多功能扩展盒的J1端口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/05072_03.png)

## makecode编程

### 步骤 1

在MakeCode的代码抽屉中点击“高级”，查看更多代码选项。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/05001_04.png)

为了给四路巡线传感器编程，我们需要添加一个扩展库。在代码抽屉底部找到“扩展”，并点击它。这时会弹出一个对话框，搜索”PlanetX“，然后点击下载这个代码库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/05001_05.png)


*注意：*如果你得到一个提示说一些代码库因为不兼容的原因将被删除，你可以根据提示继续操作，或者在项目菜单栏里面新建一个项目。

### 步骤 2
### 如图所示编写程序

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/05072_06.png)


### 参考程序

请参考程序连接：[https://makecode.microbit.org/_8AW5PC63LiXj](https://makecode.microbit.org/_8AW5PC63LiXj)

你也可以通过以下网页直接下载程序，下载完成后即可开始运行程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_8AW5PC63LiXj"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>


### 结果
按下A键后，电磁铁吸起铁片，按下B键后，电磁铁放下铁片。
