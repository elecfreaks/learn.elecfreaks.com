# Case 03:转弯画圆


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case03.png)

## 简介
哈喽，上一节课我们让 Ring:bit 智能车跑出了一个形状，但是有时候我们需要画一个圆，而且需要将圆留在纸张或者地板上面，那么这节课我们实现让 Ring:bit 智能车顺时针画一个圈，那我们开始吧。  
## 硬件连接
 发挥你灵动的小手，将 Ring:bit 扩展板的 P1 口连接左轮舵机，P2口连接右轮舵机。  

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case.png)

 并且将铅笔绑定在 Ring:bit Car 的尾板上，相信你可以做到。  

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case0301.png)

## 程序编写
编程环境准备是必须要的，如果你还没有准备，可以参考这篇文章：[编程环境准备](https://www.yuque.com/elecfreaks-learn/picoed/gxro38)
### 代码示例
```python
# 导入程序所需要的模块
import board
from ringbit import *
from picoed import *

# 设置两个舵机连接的 Ring:bit 的引脚
ringbit = Ringbit(board.P1, board.P2)

# 首先绘制顶部和底部边缘
for x in range(display.width):
    display.pixel(x, 0, 50)
    display.pixel(x, display.height - 1, 50)
    
# 现在绘制左右边缘
for y in range(display.height):
    display.pixel(0, y, 50)
    display.pixel(display.width - 1, y, 50)

# 循环检测是否按下A\B按键，让 Ring:bit 智能车画圆或者停下
while True:
    if button_a.is_pressed():
        ringbit.set_speed(100, 50)
    elif button_b.is_pressed():
        ringbit.set_speed(0, 0)

```
### 代码详解

1. 导入程序所需要的模块：`board`模块是引脚名称的通用容器，可以通过`board`模块指定要使用的引脚，  `ringbit` 模块包含对 Ring:bit 智能车操作的类和函数，`picoed`模块包含对按键A\B的操作函数。
```python
import board
from ringbit import *
from picoed import *
```

2. 设置两个舵机所连接的 Ring:bit 引脚
```python
ringbit = Ringbit(board.P1, board.P2)
```

3. 设置方形LED灯矩阵
```python
for x in range(display.width):
    display.pixel(x, 0, 50)
    display.pixel(x, display.height - 1, 50)
for y in range(display.height):
    display.pixel(0, y, 50)
    display.pixel(display.width - 1, y, 50)
```

4. 循环检测是否按下A\B按键，让 Ring:bit 智能车画圆或者停下
```python
while True:
    if button_a.is_pressed():
        ringbit.set_speed(100, 50)
    elif button_b.is_pressed():
        ringbit.set_speed(0, 0)
```
## 实验结果
按下按钮A，小车顺时针画了一个圈。
按下按钮B，停车。

<iframe width="560" height="315" src="https://www.youtube.com/embed/fEO9EPXERHM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 思考
让你的小车画一个8字，如何编程？
## 常见问题
## 相关阅读
