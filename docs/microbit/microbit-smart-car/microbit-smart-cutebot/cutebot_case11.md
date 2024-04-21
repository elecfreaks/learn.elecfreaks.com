---
sidebar_position: 14
sidebar_label: micro:bit远程控制
---

# 案例11:micro:bit远程控制

## 目的

大家好，这节课我们将使用Cutebot智能赛车制作一辆可以使用micro:bit远程遥控的小车！

``![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/cutebot-case-11-01.png)``

## 使用材料


1 x [Cutebot套件](https://item.taobao.com/item.htm?spm=a1z10.3-c-s.w4002-18602834180.23.78b86655ZP5Yg8&id=598365555295)

1 x [micro:bit主板](https://item.taobao.com/item.htm?spm=a1z10.3-c-s.w4002-18602834180.30.5da66655OasAaH&id=562621059348)

## 软件平台

[微软 makecode](https://makecode.microbit.org/#)

## 编程

### 步骤 1

在MakeCode的代码抽屉中点击高级，查看更多代码选项。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/cutebot-pk-1.png)


为了给Cutebot套件编程，我们需要添加一个代码库。在代码抽屉底部找到“扩展”，并点击它。这时会弹出一个对话框。搜索`Cutebot`，然后点击下载这个代码库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/cutebot-pk-11.png)

注意：如果你得到一个提示说一些代码库因为不兼容的原因将被删除，你可以根据提示继续操作，或者在项目菜单栏里面新建一个项目。

### 步骤 2: 遥控器编程

在`当开机时`积木块中设置无线电组别为`1`；

当`按钮A按下`时无线发送数字`1`；

当`按钮B按下`时无线发送数字`2`；

当`按钮A+B按下`时无线发送数字`3`；

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_11_01.png)

#### 程序

请参考程序连接：[https://makecode.microbit.org/_VbpXHCC4jW3T](https://makecode.microbit.org/_VbpXHCC4jW3T)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_VbpXHCC4jW3T"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

### 步骤 3: 小车编程

在`当开机时`积木块中插入显示图标积木块，设置无线电组别为`1`，一定要和遥控端设置为同一组别，否则无法匹配。

然后在`当无线接收到数据`积木块中插入三次判断语句，分别判断无线电接收值是否为`1`，`2`，或者`3`；

当无线电收到的数字为`1`时，左转；

当无线电收到的数字为`2`时，右转；

当无线电收到的数字为`3`时，直行。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_11_02.png)

#### 程序

请参考程序连接：[https://makecode.microbit.org/_LwY8ACWsuXsv](https://makecode.microbit.org/_LwY8ACWsuXsv)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_LwY8ACWsuXsv"
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

按下遥控端microbit的A+B按钮，小车直行

按下遥控端microbit的A按钮，小车左转

按下遥控端microbit的B按钮，小车右转

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/cutebot-case-11.gif)

## 思考
---
## 常见问题
---
## 相关阅读
---
