# Case 02:跑出一个形状

![](./images/case02.png)

## 简介
 哈喽，经过上一节课的学习，我想你也体会到了 Ring:bit 智能车使用非常简单，那么我们再接再励，这节课程让  Ring:bit 智能车沿着类似五边形的路线行驶，那我们开始吧。  
## 硬件连接
 和上节课一样，发挥你灵巧的小手，将 Ring:bit 扩展版的 P1口 连接左轮舵机，P2 口连接右轮舵机。  

![](./images/case.png)

## 程序编写
编程环境的准备是必须要的，如果你还没有准备好，请参考这篇文章：[编程环境准备](https://www.yuque.com/elecfreaks-learn/picoed/gxro38)
### 代码示例
```python
# 导入程序所需要的模块
import board
from ringbit import *
from picoed import *
from time import *

# 设置两个舵机连接 Ring:bit 引脚
ringbit = Ringbit(board.P1, board.P2)

# 设置 Ring:bit 智能车沿着类似正方形的路线行驶
while True:
    ringbit.set_speed(100, 100)
    sleep(1.5)
    ringbit.set_speed(50, 0)
    sleep(1.2)
```
### 代码详解

1. 导入程序所需要的模块：`board`模块是引脚名称的通用容器，可以通过`board`模块指定要使用的引脚，ringbit模块包含对Ring:bit智能车操作的类和函数，`picoed`模块包含对按键A\B的操作函数，`time`模块包含对时间操作的函数。
```python
import board
from ringbit import *
from picoed import *
from time import *
```

2. 设置两个舵机所连接的ringbit引脚
```python
ringbit = Ringbit(board.P1, board.P2)
```

3. 设置Ring:bit智能车沿着类似正方形的路线行驶
```python
while True:
    ringbit.set_speed(100, 100)
    sleep(1.5)
    ringbit.set_speed(50, 0)
    sleep(1.2)
```
## 实验结果
Ring:bit智能车行驶的路线类似五边形。

<iframe width="560" height="315" src="https://www.youtube.com/embed/htsOxCZe_Nw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 思考
如果想让Ring:bit智能车行驶路线类似正四边形，该如何编程呢？
## 常见问题
如果你的 Ring:bit 智能车行驶路线没有类似正五边形，可以适当调节小车行驶时间和转弯时间。
## 相关阅读
