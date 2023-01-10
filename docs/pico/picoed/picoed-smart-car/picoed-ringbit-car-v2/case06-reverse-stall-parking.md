# Case 06:倒车入库


![](./images/case06.png)

## 简介
哈喽，我们通过编程让 Ring:bit 智能车做出了很多的事情，那我们同样也可以让它实现自动的开到停车位停车。所以，这节课我们来实现 Ring:bit 智能车倒车入库的动作，那我们开始吧。  
## 硬件连接
将Ring:bit 套件拿出来，发挥你们灵动的小手将 Ring:bit 扩展版的P1口连接左轮舵机，P2口连接右轮舵机。  

![](./images/case.png)

## 程序编写
编程环境准备是必须要的，如果你还没有准备，可以参考这篇文章：[编程环境准备](https://www.yuque.com/elecfreaks-learn/picoed/gxro38)
### 代码示例
```python
# 导入程序所需要的模块
import board
from ringbit import *
from picoed import *
from time import *

# 设置Ring:bit智能车的左右轮子的引脚
ringbit = Ringbit(board.P1, board.P2)

# 设置按下 Pico:ed 的A/B按键更改 Ring:bit 智能车的左右轮子的速度
while True:
    if button_a.is_pressed():
        ringbit.set_speed(-100, -60)
        sleep(3)
        ringbit.set_speed(0, 0)
    elif button_b.is_pressed():
        ringbit.set_speed(100, 60)
        sleep(3)
        ringbit.set_speed(0, 0)
```
### 代码详解

1. 导入程序所需要的模块：`board`模块是引脚名称的通用容器，可以通过`board`模块指定要使用的引脚，`ringbit`模块包含对Ring:bit智能车操作的类和函数，`random`模块包含产生随机数的函数。
```python
import board
from ringbit import *
from picoed import *
from time import *
```

2. 设置Ring:bit智能车的左右轮子的引脚
```python
ringbit = Ringbit(board.P1, board.P2)
```

3. 设置按下 Pico:ed 的A/B按键更改 Ring:bit 智能车的左右轮子的速度
```python
while True:
    if button_a.is_pressed():
        ringbit.set_speed(-100, -60)
        sleep(3)
        ringbit.set_speed(0, 0)
    elif button_b.is_pressed():
        ringbit.set_speed(100, 60)
        sleep(3)
        ringbit.set_speed(0, 0)while True:

```
## 效果展示
按下 Pico:ed 的A/B按键，Ring:bit智能车实现倒车入库和开出车库的效果。

<iframe width="560" height="315" src="https://www.youtube.com/embed/47CdNDNtrmw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 思考
能否实现先让Ring:bit智能车直线行走一段距离后再进行倒车入库呢？尝试做出来和大家分享！
## 常见问题
## 相关阅读
