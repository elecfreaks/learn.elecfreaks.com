﻿# 案例10 报警装置

## 目的
---

- 制作一个简易的报警装置。

## 使用材料
---

- 1 X  [智能家居套件（含主板）](https://item.taobao.com/item.htm?ft=t&id=609328225464)

## 背景知识
---

- 碰撞电子积木是一个能传递碰撞信号的模块，当弹片被触碰，发出触碰信号，当弹片释放，发出释放信号。


### 什么是简易的报警装置

- 我们将会制作一个简易的报警装置。当碰撞传感器检测到物体被拿走，彩虹LED电子积木将会显示红色。如果没有检测到物体被拿走，彩虹LED电子积木将会显示绿色。我们可以在 OLED 屏幕上看到这个物品的保存状态。


### 简易的报警装置原理

- 物品被放置在触碰模块上，物品压住触碰模块时，传递物品安全的信息，彩虹led发出绿色的光。
- 当物品被拿走，触碰模块弹片被释放，传递物品被拿走的信息，彩虹led发出红色的警示光。



## 结构场景搭建
---

- 准备剪刀，胶水和一些瓦楞纸板。
- 搭建成如图样式：

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-home-kit/images/w7D8Dw4.jpg)

将元器件按如图摆放黏贴。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-home-kit/images/CjEr1qT.jpg)


## 硬件连接图
---
P1口连接碰撞电子积木
P2口连接彩虹LED电子积木
IIC口接OLED显示屏

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-home-kit/images/7ifVFg1.jpg)

## 软件
---
[微软makecode](https://makecode.microbit.org/#)


## 编程
---
### 步骤 1
在MakeCode的代码抽屉中点击“高级”，查看更多代码选项。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-home-kit/images/smart_home_kit_case_01_01.png)

为了给智能家居套件编程，我们需要添加一个代码库。在代码抽屉底部找到“扩展”，并点击它。这时会弹出一个对话框。搜索“smarthome"，然后点击下载这个代码库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-home-kit/images/smart_home_kit_case_01_02.png)


注意：如果你得到一个提示说一些代码库因为不兼容的原因将被删除，你可以根据提示继续操作，或者在项目菜单栏里面新建一个项目。


### 步骤 2

从“基本”中拖出一个“当开机时”积木块, 从OLED函数库中拖出initialize OLED积木块，初始化OLED显示屏。
从“流光溢彩灯”函数库中拖出“将‘strip’设为”积木块，将P2口的彩虹led设置为单颗灯，使用RGB模式。
然后从“智能家庭”函数库中拖出“设置碰撞传感器的连接” 积木块，设置为P1口，用来检测碰撞模块的按压情况。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-home-kit/images/smart_home_kit_case_10_03.png)

### 步骤 3
在“无限循环”中，拖入一个判断语句，用来监测按钮是否触碰模块是否被按下。
当触碰模块被触发，使用show string 积木块将“your treasure is safe ”显示在OLED显示屏上，并将彩虹led灯显示为绿色，显示安全信号。
当触碰模块未被触发，同样使用show string 积木块将“your treasure not safe ”显示在OLED显示屏上，并将彩虹led设置为红色警示色。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-home-kit/images/smart_home_kit_case_10_04.png)



### 程序

请参考程序连接：[https://makecode.microbit.org/_HsM6PrRhAA9c](https://makecode.microbit.org/_HsM6PrRhAA9c)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_HsM6PrRhAA9c"
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
---

- 当物品被放在触碰模块上，彩虹led显示绿色，OLED显示屏显示财产安全。当物品被拿走，彩虹led显示红色，OLED显示屏显示财产不安全。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-home-kit/images/gUJKXeu.gif)

## 思考
---

- 除了保护财产，智能家居套件能不能用来制作入侵防卫？

## 常见问题
---


## 相关阅读
---
