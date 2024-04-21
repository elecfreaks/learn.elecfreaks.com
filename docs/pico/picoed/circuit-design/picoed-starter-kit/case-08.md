---
sidebar_position: 11
sidebar_label: 舵机
---

# 舵机

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-ed-starter-kit-case-08-01.png)


## 简介
舵机是一种位置（角度）伺服的驱动器，适用于那些需要角度不断变化并可以保持的控制系统。在这节课程中，我们将用 Pico:ed 控制舵机在行程范围内循环转动。

## 元件清单

### 硬件：
1 × Pico:ed
1 × USB线
1 × 面包板扩展板
1 ×面包板83 × 55mm
1 × TowerPro SG-90舵机
若干杜邦线

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-ed-starter-kit-case-08-02.png)


## 主要元件介绍

### 舵机
舵机由直流电机、减速齿轮组、电位器和控制电路组成的一套自动控制系统。通过发送信号，指定输出轴旋转角度。舵机一般而言都有最大旋转角度（比如180度）。与普通直流电机的区别主要在，直流电机是一圈圈转动的，舵机只能在一定角度内转动，不能一圈圈转（数字舵机可以在舵机模式和电机模式中切换，没有这个问题）。普通直流电机无法反馈转动的角度信息，而舵机可以。用途也不同，普通直流电机一般是整圈转动做动力用，舵机是控制某物体转动一定角度用，如机器人的关节。 舵机的伺服系统由可变宽度的脉冲来进行控制，控制线是用来传送脉冲的。脉冲的参数有最小值，最大值，和频率。一般而言，舵机的基准信号都是周期为20ms，宽度为1.5ms。这个基准信号定义的位置为中间位置。舵机有最大转动角度，中间位置的定义就是从这个位置到最大角度与最小角度的量完全一样。最重要的一点是，不同舵机的最大转动角度可能不相同，但是其中间位置的脉冲宽度是一定的，那就是1.5ms。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-ed-starter-kit-case-08-03.png)

舵机有很多规格，但所有的舵机都有外接三根线，分别用棕、红、橙三种颜色进行区分（品牌不同，颜色可能会略有差异），棕色为接地线，红色为电源正极线，橙色为信号线。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-ed-starter-kit-case-08-04.png)

## 实验步骤

### 硬件连接
根据下面的图片将你的元件连接起来：1.将舵机与扩展板的P1口连接

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-ed-starter-kit-case-08-05.png)

连接完成如图：

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-ed-starter-kit-case-08-06.png)

## 程序编程
编程环境准备请参考：[编程环境介绍](https://www.yuque.com/elecfreaks-learn/picoed/er7nuh)

### 代码示例：
```python
# 导入程序所需要的模块
import time
import board
import pwmio
from adafruit_motor import servo

# 设置舵机的引脚和创建舵机对象
pwm = pwmio.PWMOut(board.P1_A1, duty_cycle=2 ** 15, frequency=50)
my_servo = servo.Servo(pwm)

# 循环旋转舵机
while True:
    for angle in range(0, 180, 5):
        my_servo.angle = angle
        time.sleep(0.05)
    for angle in range(180, 0, -5):
        my_servo.angle = angle
        time.sleep(0.05)
```

### 代码详解

1. 导入程序所需要的支持模块。`board`模块是引脚名称的通用容器，可以通过`board`库指定要使用的引脚，`time`模块包含对时间设置的函数。`pwmio`模块包含提供对基本脉冲 IO 的访问的类，`adafruit_motor`模块包含对舵机操作的类。
```python
import time
import board
import pwmio
from adafruit_motor import servo
```

2. 设置舵机的引脚和创建舵机对象。
```python
pwm = pwmio.PWMOut(board.P1_A1, duty_cycle=2 ** 15, frequency=50)
my_servo = servo.Servo(pwm)
```
如果你所使用的引脚不是 P1_A1，那么可以在 Thonny 编辑器下方的 shell 窗口中输入以下代码并回车查看其他引脚的编号。
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

3. 使用无限循环设置舵机在0~180度之间来回旋转。
```python
while True:
    for angle in range(0, 180, 5):
        my_servo.angle = angle
        time.sleep(0.05)
    for angle in range(180, 0, -5):
        my_servo.angle = angle
        time.sleep(0.05)
```

## 实验结果
舵机在0~180度之间来回旋转。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-ed-starter-kit-case-08.gif)


## 思考
如果我们想用温度传感器和舵机做一个指针温度计，那么我们该如何设计电路与编程？

## 常见问题

## 更多信息，欢迎访问：
[恩孚科技官方文档](https://www.elecfreaks.com/learn-en/)
