# Case 01:全速行驶

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case01.png)

## 简介
 哈喽，接下来的课程中我们要使用代码编程驱动 Ring:bit 智能车做出一些有意思的动作，当然我们会由浅入深的讲解相关知识，本课程将实现 Ring:bit 智能车完成基本的前进后退动作，那我们开始吧。  
## 硬件连接
 其实硬件连接很简单，只需要将 Ring:bit 扩展版的 P1 口连接左轮舵机，P2 口连接右轮舵机，当然也可以接口交换，只需要在编程的时候改成相应的端口就行，但是作为初学者，建议和我们保持一致，那么发挥你灵巧的小手将它们连接起来吧。  

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case.png)

## 程序编写
想必你应该已经准备好了编程环境，如果没有准备，可以参考这篇文章：[编程环境准备](https://www.yuque.com/elecfreaks-learn/picoed/gxro38)
(只有先准备好编程环境才可以编写代码)
### 代码示例
```python
# 导入程序所需要的模块
import board
from ringbit import *
from picoed import *

# 设置两个舵机所连接的ringbit引脚
ringbit = Ringbit(board.P1, board.P2)

# 循环检测是否按下A/B按键，控制ringbit智能车前进后退
while True:
    if button_a.is_pressed():
        ringbit.set_speed(100, 100)
    elif button_b.is_pressed():
        ringbit.set_speed(-100, -100)
        
```
### 代码详解

1. 导入程序所需要的模块：`board`模块是引脚名称的通用容器，可以通过`board`模块指定要使用的引脚，  `ringbit`模块包含对 Ring:bit 智能车操作的类和函数，`picoed`模块包含对按键A\B的操作函数。
```python
import board
from ringbit import *
from picoed import *
```

2. 设置两个舵机所连接的 Ring:bit 引脚。
```python
ringbit = Ringbit(board.P1, board.P2)
```

3. 循环检测是否按下A/B按键，控制 Ring:bit 智能车前进后退。
```python
while True:
    if button_a.is_pressed():
        ringbit.set_speed(100, 100)
    elif button_b.is_pressed():
        ringbit.set_speed(-100, -100)
```
## 实验结果
当按钮A被按下时，小车全速前进。
当按钮B被按下时，小车全速后退。

<iframe width="560" height="315" src="https://www.youtube.com/embed/YRX2vkj1jmA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 思考
当同时按下A\B按键时，让小车停下，该如何编写程序呢？
## 常见问题
## 相关阅读
