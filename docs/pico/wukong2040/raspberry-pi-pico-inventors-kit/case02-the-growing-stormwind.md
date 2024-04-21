---
sidebar_position: 9
sidebar_label: 案例02 暴风的成长
---

# 案例02 暴风的成长

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/wukong2040-inventors-case02-01.png)

## 简介

有时我们会从新闻中看到某地出现龙卷风摧毁经过的房屋和树木的事件，我们虽然不能身临其境体会龙卷风的破坏力，但是我们可以使用电机风扇和超声波传感器制作风速可变的龙卷风，而且越靠近超声波传感器风力越大。

## 组件清单

1 × Raspberry Pi Pico

1 × Wukong2040 扩展板

1 × USB 数据线

1 × 带扇叶风扇

1 × 超声波传感器

1 × 3P带扣杜邦线

## 主要组件介绍

### 电机

电机是依据电磁感应定律实现电能转换为动能的一种装置。该电机的基本部件包括电枢和定子。电枢线圈是电机的分类非常多，在本案例里，我们用到的是直流电机。当在电机两端加上直流电压时，电机会旋转，电压越高，旋转的速度越快。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/wukong2040-inventors-case02-02.gif)

具体我们从动图就能很好理解，在磁场中放置线圈，通过流动的电流，线圈会被一侧的磁极排斥，同时被另一侧磁极所吸引，在这种作用下不断旋转。在旋转过程中令通向线圈中的电流反向流动，使其持续旋转。电机中有个叫"换向器"的部分是靠"电刷"供电的，"电刷"的位置在"转向器"上方，随着旋转不断移动。通过改变电刷的位置，可使电流方向发生变化。换向器和电刷是 DC 电机的旋转所不可或缺的结构。

### 超声波传感器

超声波传感器定期发射短且高频的声波，这些波在空气中以声音的速度传播，如果他们遇到物体，将以回声信号返回到传感器，由此传感器可以通过计算发出信号到接收回声之间的时间间隔来计算传感器和目标物之间的距离。

传感器和被测物体之间的距离是通过测量声波飞行的时间来计算的，而不是靠声波的强度，超声波传感器对背景抑制效果明显。几乎所有反射声波的材料，不管是什么颜色，都能被超声波传感器检测到，包括透明材料或薄膜。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/wukong2040-inventors-case02-03.png)

### 硬件连接

按照下面连接示意图，将您的元器件连接起来：

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/wukong2040-inventors-case02-04.png)

### 图形化编程

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/wukong2040-inventors-case02-05.png)

### 代码编程

```python
from Distance import *  # 导入超声波传感器的库
from Fan import *  # 导入电机风扇的库

fan = Fan(board.GP0)  # 创建电机风扇对象，并传入引脚号
distance = Distance(board.GP17, board.GP16)  # 创建超声波传感器对象，并传入引脚号

while True:
    num = distance.get_distance()  # 获取超声波传感器侦测障碍物的距离值并赋值给num
    if num >= 20:  # 判断障碍物距离超声波的距离是否大于20cm
        num = 20
    fan.set_fan(100 - num * 5)  # 设置电机风扇的速度
```

### 案例演示

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/wukong2040-inventors-kit-case02-06.gif)

### 思考

请问您能否将效果改为越靠近电机风扇风力越小呢？

### 常见问题



### 更多信息，欢迎访问：

[micro:bit Accessories Store | ELECFREAKS](https://www.elecfreaks.com/)
