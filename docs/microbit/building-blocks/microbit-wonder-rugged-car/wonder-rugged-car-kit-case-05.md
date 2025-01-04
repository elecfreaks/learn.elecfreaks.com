﻿---
sidebar_position: 7
sidebar_label: 炫彩小车
---

# 麦克纳姆轮小车套件案例05：炫彩小车

## 目的
---

- 使用麦克纳姆轮小车套件制作一辆拥有炫彩车灯的小车

## 使用材料
---

- [麦克纳姆轮小车套件（淘宝购买链接）](https://item.taobao.com/item.htm?ft=t&id=604443327840)

## 背景知识
---

## 软件
---

[微软makecode](https://makecode.microbit.org/#)

## 编程
---

### 步骤 1
 在MakeCode的代码抽屉中点击“高级”，查看更多代码选项。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-wonder-rugged-car/images/Mecanum_wheel_car_kit_case_01_01.png)

为了给麦克纳姆轮小车套件编程，我们需要添加一个扩展库。在代码抽屉底部找到“扩展”，并点击它。这时会弹出一个对话框，搜索”wukong”，然后点击下载这个代码库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-wonder-rugged-car/images/Mecanum_wheel_car_kit_case_01_02.png)

*注意：*如果你得到一个提示说一些代码库因为不兼容的原因将被删除，你可以根据提示继续操作，或者在项目菜单栏里面新建一个项目。

### 步骤 2

点击`悟空`选择`麦克纳姆轮`模块。



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-wonder-rugged-car/images/Mecanum_wheel_car_kit_case_01_03.png)


### 步骤 3

如图所示，在`当开机时`中插入`设置麦克纳姆轮`积木块，并设置相应舵机连接口，插入`设置氛围灯模式`积木块，设置为呼吸灯模式，并初始化LED灯模块。



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-wonder-rugged-car/images/Mecanum_wheel_car_kit_case_05_05.png)


### 步骤 4

如图所示，设置小车向前移动，设置变量`i`以5为幅度递增，然后设置LED灯显示彩虹特效，参数设置为`i`。



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-wonder-rugged-car/images/Mecanum_wheel_car_kit_case_05_06.png)


### 程序

请参考程序连接：[https://makecode.microbit.org/_icqM2MK7WEyM](https://makecode.microbit.org/_icqM2MK7WEyM)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_icqM2MK7WEyM"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

### 现象

小车开启后向前行驶，而且氛围灯为呼吸模式，LED车灯彩虹变色。

## 思考
---

## 常见问题
---
## 相关阅读
---
