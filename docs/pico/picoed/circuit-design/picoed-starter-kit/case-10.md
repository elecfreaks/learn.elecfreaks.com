---
sidebar_position: 13
sidebar_label: 电机
---

# 电机

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-ed-starter-kit-case-10-01.png)

## 简介
电机是依据电磁感应定律实现电能转换为动能的一种装置。在这节课程中，我们将用一个开关来控制电机的启动与停止。

## 元件清单

### 硬件：
1 × Pico:ed
1 × USB线
1 × 面包板扩展板
1 × 面包板83 x 55 mm
1 × 5V 迷你电机
1 × TIP 120 NPN 三极管
1 × 1N4007 二极管
1 × 100 欧姆电阻
2 × 鳄鱼夹线
1 × 自锁开关
若干跳线

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-ed-starter-kit-case-10-02.png)

## 主要元件介绍

### 电机
电机是依据电磁感应定律实现电能转换为动能的一种装置。电机的分类非常多，在本案例里，我们用到的是直流电机。当在电机两端加上直流电压时，电机会旋转，电压越高，旋转的速度越快。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-ed-starter-kit-case-10-03.png)

### 二极管
二极管是一种具有两个电极的原件，一端为阳极，一端为阴极，它只允许电流从阳极向阴极方向移动，可以把它想象成电子版的止逆阀。 对于普通的二极管，可以通过管体表面颜色来区分正负极，有白线的一端为负极。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-ed-starter-kit-case-10-04.png)


### 鳄鱼夹线
鳄鱼夹线与跳线的作用一样。有些器件不方便用跳线连接，可以考虑用鳄鱼夹来连线。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-ed-starter-kit-case-10-05.png)

本次实验，我们就是用鳄鱼夹线来连接我们的电机。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-ed-starter-kit-case-10-06.png)

## 实验步骤

### 硬件连接
根据下面的图片将你的元件连接起来：

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-ed-starter-kit-case-10-07.png)

Pico:ed的IO口的驱动电流非常微弱的，不足以直接驱动电机。这时候，我们就需要用到三极管将IO信号的电流放大，用三极管放大IO口信号电流的电路图与上一课驱动蜂鸣器的电路图非常类似，唯一的区别是在电机两端加上了一个二极管。该二极管在此电路中叫做续流二极管。
电机里面有线圈，线圈在通过电流时，会在其两端产生感应电动势。当电流消失时，其感应电动势会对电路中的元件产生反向电压，有可能会损坏器件，续流二极管在电路中反向并联在线圈的两端，当电感线圈断电时其两端的电动势并不立即消失，此时残余电动势通过二极管释放。这是一种经典保护设计。
原理图如下：

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-ed-starter-kit-case-10-08.png)

连接完成后如图：

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-ed-starter-kit-case-10-09.png)

## 程序编程
编程环境准备请参考：[编程环境介绍](https://www.yuque.com/elecfreaks-learn/picoed/er7nuh)

### 代码示例：
```python
# 导入程序所需要的模块
import board
import digitalio

# 设置电机和自锁开关连接的引脚以及引脚方向
motor = digitalio.DigitalInOut(board.P0_A0)
locking = digitalio.DigitalInOut(board.P1_A1)
motor.direction = digitalio.Direction.OUTPUT
locking.direction = digitalio.Direction.INPUT

# 设置自锁开关上拉
locking.pull = digitalio.Pull.UP

# 循环判断自锁开关的状态来改变电机的状态
while True:
    if locking.value == False:
        motor.value = True
    else:
        motor.value = False
```

### 代码详解

1. 导入程序所需要的支持模块。`board`模块是引脚名称的通用容器，可以通过`board`库指定要使用的引脚，`digitalio`模块包含提供对基本数字IO的访问的类。
```python
import board
import digitalio
```

2. 设置电机和自锁开关连接的引脚以及引脚方向，设置电机初始值为 True、自锁开关上拉。
```python
motor = digitalio.DigitalInOut(board.P0_A0)
locking = digitalio.DigitalInOut(board.P1_A1)
motor.direction = digitalio.Direction.OUTPUT
locking.direction = digitalio.Direction.INPUT
```
如果你所使用的引脚不是 P0_A0 和 P1_A1，那么可以在 Thonny 编辑器下方的 shell 窗口中输入以下代码并回车查看其他引脚的编号。
```python
>>> import board
>>> help(board)
object <module 'board'> is of type module
  __name__ -- board
  board_id -- elecfreaks_picoed
  BUZZER_GP0 -- board.BUZZER_GP0
  I2C0_SDA -- board.BUZZER_GP0
  I2C0_SCL -- board.I2C0_SCL
  BUZZER -- board.BUZZER
  BUZZER_GP3 -- board.BUZZER
  P4 -- board.P4
  P5 -- board.P5
  ...
```

3. 设置自锁开关上拉。
```python
locking.pull = digitalio.Pull.UP
```

3. 循环判断自锁开关的状态来改变电机的状态。
```python
while True:
    if locking.value == False:
        motor.value = True
    else:
        motor.value = False
```

## 实验结果
按下按钮时，电机开始旋转，再按一次，电机停止旋转。 **注意**：Pico:ed 的电源电压比较低，只有3V，按下按钮时，电机有可能不能启动，遇到这种情况，请用手拨动一下电机的扇叶，电机方能正常旋转。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-ed-starter-kit-case-10.gif)

## 思考
如果要用电位器对电机进行速度控制，该如何设计电路与编程？

## 常见问题

## 更多信息，欢迎访问：
[恩孚科技官方文档](https://www.elecfreaks.com/learn-en/)
