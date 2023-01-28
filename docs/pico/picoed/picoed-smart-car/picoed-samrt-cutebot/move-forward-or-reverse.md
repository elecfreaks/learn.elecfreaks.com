---
sidebar_position: 4
---

# Case 01：前进、后退

## 简介
使用pico:ed上的A、B按键来控制cutebot智能车完成基本的前进、后退动作。
## 准备编程环境
准备编程环境请参考：[准备编程环境](https://www.yuque.com/elecfreaks-learn/picoed/gccnpl)
## 示例代码
```python
from picoed import *
from cutebot import *

# 创建Cutebot类的实例
cutebot = Cutebot()

# 循环检测是否按下A/B按键，控制cutebot智能赛车前进后退
while True:
    if button_a.is_pressed():
        cutebot.set_speed(50,50)
    if button_b.is_pressed():
        cutebot.set_speed(-50,-50)
```
### 代码详解

1. 导入程序所需要的模块：`cutebot`模块包含对Cutebot智能赛车操作的类和函数，`picoed`模块包含对按键A\B的操作函数。
```python
from picoed import *
from cutebot import *
```

2. 创建Cutebot类的实例
```python
cutebot = Cutebot()
```

3. 循环检测是否按下A/B按键，控制cutebot智能赛车前进后退
```python
while True:
    if button_a.is_pressed():
        cutebot.set_speed(50,50)
    if button_b.is_pressed():
        cutebot.set_speed(-50,-50)
```
## 实验结果
当按钮A按下时，小车全速前进。
当按钮B按下时，小车全速后退。
## 思考
当同时按下A\B按键时，让小车停下，该如何编写程序呢？
