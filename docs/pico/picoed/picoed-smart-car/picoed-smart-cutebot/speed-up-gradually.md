---
sidebar_position: 5
---

# Case 02：均匀加速

## 简介
控制cutebot均匀加速，直到达到最高速度。
## 准备编程环境
准备编程环境请参考：[准备编程环境](https://www.yuque.com/elecfreaks-learn/picoed/gccnpl)
## 示例代码
```python
from cutebot import *
from time import *

# 创建Cutebot类的实例
cutebot = Cutebot()
# 创建变量cutebot_speed，用于保存cutebot智能赛车的速度值
cutebot_speed = 0

# 设置cutebot智能赛车的速度从0~100均匀加速
while True:
    if cutebot_speed > 100:
        cutebot_speed = 100
    cutebot.set_speed(cutebot_speed,cutebot_speed)
    cutebot_speed = cutebot_speed + 1
    sleep(0.02)
```
### 代码详解

1. 导入程序所需要的模块：`cutebot`模块包含对Cutebot智能赛车操作的类和函数，`time`模块包含对时间操作的函数。
```python
from cutebot import *
from time import *
```

2. 创建Cutebot类的实例。
```python
cutebot = Cutebot()
```

3. 创建变量cutebot_speed，用于保存cutebot智能赛车的速度值。
```python
cutebot_speed = 0
```

4. 设置cutebot智能赛车的速度从0~100均匀加速。
```python
while True:
    if cutebot_speed > 100:
        cutebot_speed = 100
        cutebot.set_speed(cutebot_speed,cutebot_speed)
        cutebot_speed = cutebot_speed + 1
    sleep(0.02)
```
## 实验结果
开启电源后，cutebot智能赛车的速度从0~100均匀加速。
## 思考
如何让小车均匀加速后再均匀减速？
