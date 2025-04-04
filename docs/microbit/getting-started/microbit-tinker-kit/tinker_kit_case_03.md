﻿# 课程_03 电子琴

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-tinker-kit/images/TJvoaaV.jpg)

## 制作目标
---

- 学习micro:bit和电位器的使用。
- 学习制作一个电子琴。


## 所需材料
---
 
- 1 x BBC micro:bit
- 1 x USB线
- 1 x 蜂鸣器模块
- 1 x 电位器模块
- 1 x 扩展板

**温馨提示: 如果你想要以上所有这些元器件，你可以购买我们的[micro:bit小小发明家套件](https://item.taobao.com/item.htm?spm=a230r.7195193.1997079397.9.z3IMPf&id=564707672256&abbucket=5)。**


## 制作过程
---

### 步骤1

将蜂鸣器模块插入扩展板上的P0。确保正极插入扩展板上的黄色信号引脚，负极插入黑色接地引脚。
将电位器模块插入P1。确保线的颜色和扩展板上引脚的颜色一致。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-tinker-kit/images/zSbp5LP.jpg)


### 步骤2

在MakeCode中，我们将用一个变量来追踪电位器的值。变量就像水桶一样可以装载这些不断变化的数值。
在变量选择区域，创建一个新的变量命名为reading (或者是你喜欢的其他名称)。
我们想要把这个reading的变量设置为电位器的模拟值，而不仅仅是数字。
读取电位器的模拟值可以让我们从电位器上获得一系列信号，而不仅仅是数字0和1。在Pins抽屉里面找到下面这个积木块。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-tinker-kit/images/Tinker_Kit_case_03_01.png)


### 步骤3  

通过展示变量reading的读数来获取电位器的最大值和最小值。
逆时针旋转电位器的旋钮，你将会得到最小值；顺时针旋转则会获得最大值。
你发现了数值是如何变动的吗？那是因为micro:bit需要一点时间来在屏幕上显示一串数字。之后，你就会看到一个新的数值。电位器的数值可能在最前面哦！ 

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-tinker-kit/images/Tinker_Kit_case_03_02.png)


### 步骤4  

现在我们要开始用你刚刚读取的电位器的数值来制作音符。音乐积木块的音符不像电位器的数值一样广泛。因此，我们想让电位器的最大值与音调最高的音符对应。
在MakeCode的piano按键中找到最高的音符和最低的音符。
使用MakeCode代码选择区域的map积木块来编辑所有的值。 

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-tinker-kit/images/Tinker_Kit_case_03_03.png)


### 步骤5  

你可能注意到上一步我们创建了一个新的变量，叫做note。把变量note设置为映射的数值。使用变量note让音乐响起。然后把所有代码下载到你的micro:bit上，你就可以听到声音啦！

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-tinker-kit/images/2NiVA0B.jpg)

如果你不想自己动手编写这些代码的话，你可以从下面这个链接下载程序的完整代码：

[https://makecode.microbit.org/_Cd0WuXfsUW44](https://makecode.microbit.org/_Cd0WuXfsUW44)

### 太棒啦！  

现在你已经学会了如何用电位器来播放音乐。你可以尝试着控制LED，舵机以及其他的元件。 如果你用了其他的模拟传感器，你就会明白怎样使用了！


## 常见问题
---
