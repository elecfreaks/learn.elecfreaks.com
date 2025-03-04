﻿# 案例09 测谎仪

## 目的
---

- 制作一个“测谎仪”。

## 使用材料
---
- 1 X [智能家居套件（含主板）](https://item.taobao.com/item.htm?ft=t&id=609328225464)

## 背景知识
---

- 土壤湿度传感器电子积木模块借助两极的差值，可以检测物体的导电性。


### 什么是“测谎仪”

- 当人说谎的时候，身体会有一些细微变化，测谎仪进行探测，从而判定，是否说谎，这就是测谎仪。

### 提醒器原理

- 当人体处于紧张的状态时，皮肤的导电性会增强，土壤湿度传感器就会检测到皮肤导电性的变化。我们可以根据这个来判断一个人是否在说谎。



## 结构场景搭建
---

- 一个安静而舒适的房间。
测试时需将测试者的手指与土壤湿度传感器如下图固定住效果会更好。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-home-kit/images/K242fJs.png)

## 硬件连接图
---
将P1口与土壤湿度传感器连接
OLED显示器插入IIC接口

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-home-kit/images/vb2Z4a0.jpg)

## 软件
---
[微软makecode](https://makecode.microbit.org/#)


## 编程
---
### 步骤 1
在MakeCode的代码抽屉中点击“高级”，查看更多代码选项。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-home-kit/images/smart_home_kit_case_01_01.png)

为了给智慧家居套件编程，我们需要添加一个代码库。在代码抽屉底部找到“扩展”，并点击它。这时会弹出一个对话框。搜索“smarthome"，然后点击下载这个代码库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-home-kit/images/smart_home_kit_case_01_02.png)

注意：如果你得到一个提示说一些代码库因为不兼容的原因将被删除，你可以根据提示继续操作，或者在项目菜单栏里面新建一个项目。


### 步骤 2

- 从“基本”中拖出一个“当开机时”积木块，初始化OLED显示屏，并显示提示信息。
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-home-kit/images/smart_home_kit_case_09_03.png)

### 步骤 3

- 首先读取P1引脚的土壤湿度传感器的数据，记录两个手指每秒钟的导电性，然后根据这些值计算出平均值。测试者没有说谎的时候，即为Calm（平静）数值。
然后使用“将数组‘list’中的元素逐个取出”积木块，计算出第一分钟获取读数的标准偏差，标准偏差说明了一个读数的差值，一个较大的标准偏差，是从理论上讲说明测试者不够平静，最好在平静的状态下进行测试。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-home-kit/images/smart_home_kit_case_09_04.png)

### 步骤 4
- 拖入“无限循环”语句，编写代码令micro:bit每五秒测量一次平均导电性，作为下一阶段判定的依据。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-home-kit/images/smart_home_kit_case_09_05.png)

### 步骤 5
- 对受试者的测试数据，进行判定，当所得出的reading 这个值的平均值高于标准偏差的平均值，我们可以得出结论，测试者的皮肤导电性明显增强，因为他在说谎，此时microbit led显示屏上会显示一个X的形状。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-home-kit/images/smart_home_kit_case_09_06.png)

### 步骤 6
- 当判定的值小于标准偏差5次偏差的平均值，那么说明测试者的皮肤导电性没有改变，此时测试者没有说谎。
此时micro:bit led显示屏上会显示一个√的形状。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-home-kit/images/smart_home_kit_case_09_07.png)

### 程序

请参考程序连接：[https://makecode.microbit.org/_gvHXo5WVM8cP](https://makecode.microbit.org/_gvHXo5WVM8cP)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_gvHXo5WVM8cP"
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

- 将手指放在土壤湿度传感器上，等待约10秒，测试正式开始，当测试者说谎，测谎仪上显示x，当测试者说真话，测谎仪上显示√。

## 思考
---

- 有什么方式能让测试的结果更加精确？

## 常见问题
---


## 相关阅读
---
