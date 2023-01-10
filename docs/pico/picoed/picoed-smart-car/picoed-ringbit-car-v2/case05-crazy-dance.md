# Case 05:疯狂舞蹈


![](./images/case05.png)

## 简介
哈喽，经过四节课程的学习，我们应该认识到 Ring:bit 智能车功能强大，能做出非常多的事情，那么这节课我们来做一个比较简单的事情，就是让 Ring:bit 智能车“跳舞”，那么这节课我们将让 Ring:bit 智能车随心起舞，那我们开始吧。  
## 硬件连接
将Ring:bit 套件拿出来，发挥你们灵动的小手将 Ring:bit 扩展版的P1口连接左轮舵机，P2口连接右轮舵机。  

![](./images/case.png)

## 程序编写
编程环境准备是必须要的，如果你还没有准备，可以参考这篇文章：[编程环境准备](https://www.yuque.com/elecfreaks-learn/picoed/gxro38)
### 代码示例
```python
# 导入程序所需要的模块
import board
from random import *
from ringbit import *
from time import *

# 设置Ring:bit智能车的左右轮子的引脚
ringbit = Ringbit(board.P1, board.P2)

# 设置Ring:bit智能车的左右轮子的速度为（-100， 100）之间的随机值
while True:
    left_wheel = randint(-100, 100)
    right_wheel = randint(-100, 100)
    ringbit.set_speed(left_wheel, right_wheel)
    sleep(0.5)
```
### 代码详解

1. 导入程序所需要的模块：`board`模块是引脚名称的通用容器，可以通过`board`模块指定要使用的引脚，`ringbit`模块包含对Ring:bit智能车操作的类和函数，`random`模块包含产生随机数的函数。
```python
import board
from random import *
from ringbit import *
from time import *
```

2. 设置Ring:bit智能车的左右轮子的引脚
```python
ringbit = Ringbit(board.P1, board.P2)
```

3. 设置Ring:bit智能车的左右轮子的速度为（-100， 100）之间的随机值
```python
while True:
    left_wheel = randint(-100, 100)
    right_wheel = randint(-100, 100)
    ringbit.set_speed(left_wheel, right_wheel)
    sleep(0.5)
```
## 实验结果
上电之后，小车开始随机前后左右不同速度行驶。

<iframe width="560" height="315" src="https://www.youtube.com/embed/-gWBk3IHrqg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 思考
选择你喜欢的舞蹈，根据舞蹈动作设计一套 Ring:bit 智能车的动作
## 常见问题
## 相关阅读
