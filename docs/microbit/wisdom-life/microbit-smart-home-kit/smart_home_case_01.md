﻿# 案例01 声光控制灯

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-home-kit/images/OyHm1YO.jpg)
## 目的
---


- 制作一个声光控制的多彩LED灯。

## 使用材料
---

- 1 x [智能家居套件（含主板）](https://item.taobao.com/item.htm?ft=t&id=609328225464)
- 1 x 瓦楞纸板

## 背景知识
---

### 声光控灯原理
- 白天光线较强时，受光控自锁，有声响也不通电开灯；当傍晚环境光线变暗后，开关自动进入待机状态，遇有说话声、脚步声等声响时，会立即通电,亮灯，延时一段时间后自动断电；能延长灯泡寿命6倍以上，节电率达90%；既可避免摸黑找开关造成的摔伤碰伤，又可杜绝楼道灯有人开、没人关的现象。


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-home-kit/images/ZUlVGdQ.png)

## 结构场景搭建
---
准备一把美工刀和一些瓦楞纸板。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-home-kit/images/PuJE7uj.jpg)

搭建成如图样式：

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-home-kit/images/Ttp5RK9.jpg)

将元器件按如图摆放黏贴。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-home-kit/images/7uAAhWi.jpg)


## 硬件连接图
---
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-home-kit/images/j3m26Nl.png)

单颗彩虹LED连接到sensorbit的P1口；

声音检测模块连接到P2口；

光线传感器模块连接到P3口。

## 软件
---
[微软makecode](https://makecode.microbit.org/#)
IO口使用注意事项

因为本案例中使用到P3接口，而P3接口同时也被板载LED点阵显示屏占用，故需要禁用板载LED点阵显示功能，以避免产生错误的数据。

## 编程
---
### 步骤 1
在MakeCode的代码抽屉中点击“高级”，查看更多代码选项。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-home-kit/images/smart_home_kit_case_01_01.png)

为了给智慧家居套件编程，我们需要添加一个代码库。在代码抽屉底部找到“扩展”，并点击它。这时会弹出一个对话框。搜索“smarthome"，然后点击下载这个代码库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-home-kit/images/smart_home_kit_case_01_02.png)

注意：如果你得到一个提示说一些代码库因为不兼容的原因将被删除，你可以根据提示继续操作，或者在项目菜单栏里面新建一个项目。

### 步骤 2

在“基本”中拖出一个“无限循环”积木块，在其中插入显示数字积木块。

从“LED”中拖出一“LED启用'false'”积木块，选择false，以禁用板载LED点阵显示屏功能。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-home-kit/images/smart_home_kit_case_01_03.png)

### 步骤 3

在“无限循环”积木块中，首先插入读取光线值模块，赋值给light变量。

然后判断光线值是否大于50，大于则为白天，小于则为黑夜。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-home-kit/images/smart_home_kit_case_01_04.png)

### 步骤 4

当判断光线值小于50，也就是黑夜的时候，插入读取声音音量模块，赋值给noise变量。

然后判断音量是否大于70，以检测是否有人发声。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-home-kit/images/smart_home_kit_case_01_05.png)

### 步骤 5

当判断有超过70dB的声音时，彩虹led亮起白色光，延迟10秒钟，长亮10秒，然后关闭。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-home-kit/images/smart_home_kit_case_01_06.png)

### 程序

请参考程序连接：[https://makecode.microbit.org/_E5LA935g0ieq](https://makecode.microbit.org/_E5LA935g0ieq)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_E5LA935g0ieq"
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

**注意：** 不同区域光线亮度不同，以实测为准。

## 结论
---
白天光线充足时，不管发出多大声音灯都不会亮起，当黑夜来临，拍一下手，发出一些声音，灯就亮起10秒。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-home-kit/images/31mzhfy.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-home-kit/images/ymeyq3M.jpg)

## 思考
---
如何将单颗彩虹LED发光编程为彩虹色。

## 常见问题
---


## 相关阅读
---
