---
sidebar_position: 12
sidebar_label: 蜂鸣器
---

# 蜂鸣器


![](./images/pico-ed-starter-kit-case-09-01.png)


## 简介
蜂鸣器是一种一体化结构的电子讯响器，广泛应用于计算机、打印机、复印机、报警器、电子玩具、汽车电子设备、电话机、定时器等电子产品中作发声器件。这节课程中，我们用 Pico:ed 驱动蜂鸣器，让它发出不同的音节，就像警报声一样。

## 元件清单

### 硬件：
1 × Pico:ed
1 × USB线
1 × 面包板扩展板
1 × 面包板83 × 55mm
1 × 蜂鸣器
1 × TIP 120 NPN 三极管
1 × 100 欧姆电阻
若干杜邦线

![](./images/pico-ed-starter-kit-case-09-02.png)

## 主要元件介绍

### 蜂鸣器
蜂鸣器是一种发声器件，它由振动装置和谐振装置组成。按照控制方式分类，可把蜂鸣器又分为有源型与无源型。

![](./images/pico-ed-starter-kit-case-09-03.png)

有源型蜂鸣器的工作发声原理是：蜂鸣器内部集成振荡系统与放大取样电路，当有直流电源通过蜂鸣器时会使谐振装置产生声音信号，有源型蜂鸣器的工作发声原理图如下：

![](./images/pico-ed-starter-kit-case-09-04.png)

无源型蜂鸣器的工作发声原理是：方波信号输入谐振装置转换为声音信号输出，无源型蜂鸣器的工作发声原理图如下：

![](./images/pico-ed-starter-kit-case-09-05.png)

注：本次实验，我们使用的是无源蜂鸣器。

## 三极管
三极管是一种控制电流的半导体器件，其作用是把微弱信号放大成幅度值较大的电信号。

![](./images/pico-ed-starter-kit-case-09-06.png)

如果直接把 Pico:ed 产生的 PWM 信号输入至蜂鸣器，蜂鸣器只会发出微弱的声音，这是因为IO口的驱动电流通常都是非常微弱的，不足以直接驱动蜂鸣器这类器件。这时候，我们就需要用到三极管将 PWM 信号的电流放大，从而让蜂鸣器能发出正常的声响。 用三极管驱动蜂鸣器，典型应用电路如下：

![](./images/pico-ed-starter-kit-case-09-07.png)


## 实验步骤

### 硬件连接
根据下面的图片将你的元件连接起来：
1.将蜂鸣器与100Ω电阻以及三级管串连，连接P0口

![](./images/pico-ed-starter-kit-case-09-08.png)

连接完成后如图：

![](./images/pico-ed-starter-kit-case-09-09.png)


## 程序编程
编程环境准备请参考：[编程环境介绍](https://www.yuque.com/elecfreaks-learn/picoed/er7nuh)

### 代码示例
```
# 导入程序所需要的模块
import board
import pwmio
import time

# 设置蜂鸣器所使用的引脚和使用音节播放函数
piezo = pwmio.PWMOut(board.P0_A0, duty_cycle=0,frequency=440, variable_frequency=True)
def play_note(note):
    piezo.frequency = note
    piezo.duty_cycle = 65535 // 2
    time.sleep(0.25)
    piezo.duty_cycle = 0
    time.sleep(0.05)

# 循环播放特定音节
while True:
    play_note(494)
    time.sleep(0.2)
    play_note(262)
    time.sleep(0.2)
    play_note(294)
    time.sleep(0.2)
```

### 代码详解

1. 导入程序所需要的支持模块。`board`模块是引脚名称的通用容器，可以通过`board`模块指定要使用的引脚，该`pwmio`模块包含提供对基本脉冲 IO 的访问的类，`time`模块包含提供对时间访问的函数。
```
import board
import pwmio
import time
```

2. 设置蜂鸣器所使用的引脚和使用音节播放函数。
```
piezo = pwmio.PWMOut(board.P0_A0, duty_cycle=0,frequency=440, variable_frequency=True)
def play_note(note):
    piezo.frequency = note
    piezo.duty_cycle = 65535 // 2
    time.sleep(0.25)
    piezo.duty_cycle = 0
    time.sleep(0.05)
```
如果你所使用的引脚不是 P0_A0，那么可以在 Thonny 编辑器下方的 shell 窗口中输入以下代码并回车查看其他引脚的编号。
```
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

3. 循环播放特定音节。
```
while True:
    play_note(494)
    time.sleep(0.2)
    play_note(262)
    time.sleep(0.2)
    play_note(294)
    time.sleep(0.2)
```

## 实验结果
蜂鸣器发出的声响在几个特定音节间来回循环。

![](./images/pico-ed-starter-kit-case-09.gif)

## 思考
如果我们想用温度传感器与蜂鸣器做一个高温报警器，那么我们该如何设计电路与编程？

## 常见问题

## 更多信息，欢迎访问：
[恩孚科技官方文档](https://www.elecfreaks.com/learn-en/)
