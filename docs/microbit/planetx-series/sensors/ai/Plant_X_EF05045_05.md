﻿# 比比谁脸大

## 目的
通过AI摄像头识别人脸宽度并显示。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/ai/images/05035_01.png)


---

### 所需器材及连接示意图
---

- 如下图所示，将AI摄像头连接到哪吒扩展板的IIC端口，将OLED显示屏连接到哪吒扩展板的IIC。


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/ai/images/05035_05_03.png)



## makecode编程
---

### 步骤 1
在MakeCode的代码抽屉中点击“高级”，查看更多代码选项。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/ai/images/05001_04.png)

为了AI摄像头编程，我们需要添加一个扩展库。在代码抽屉底部找到“扩展”，并点击它。这时会弹出一个对话框，搜索”PlanetX“，然后点击下载这个代码库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/ai/images/05001_05.png)

*注意：*如果你得到一个提示说一些代码库因为不兼容的原因将被删除，你可以根据提示继续操作，或者在项目菜单栏里面新建一个项目。
### 步骤 2

### 如图所示编写程序

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/ai/images/05035_05_06.png)


### 参考程序
请参考程序连接：[https://makecode.microbit.org/_3f4fVxg95e2f](https://makecode.microbit.org/_3f4fVxg95e2f)

你也可以通过以下网页直接下载程序，下载完成后即可开始运行程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_3f4fVxg95e2f"
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

### 结果
- 通过oled显示屏显示当前人脸宽度。
