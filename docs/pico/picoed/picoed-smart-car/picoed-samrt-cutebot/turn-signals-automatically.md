# Case 04：自动转向灯

## 简介
让Cutebot智能赛车按照随机路线行驶，并且自动打开转向灯。
## 准备编程环境
准备编程环境请参考：[准备编程环境](https://www.yuque.com/elecfreaks-learn/picoed/gccnpl)
## 示例代码
```python
from cutebot import *
from random import *
from time import *

# 创建Cutebot类的实例
cutebot = Cutebot()

# 通过控制cutebot智能赛车的左右轮的速度为（0， 100）之间的随机值,并根据智能赛车的行驶方向自动点亮转向灯
while True:
    left_speed = randint(0, 100)
    right_speed = randint(0, 100)
    if left_speed > right_speed:
        cutebot.set_light(RGB.left,0,0,0)
        cutebot.set_light(RGB.right,255,255,0)
    if left_speed < right_speed:
        cutebot.set_light(RGB.left,255,255,0)
        cutebot.set_light(RGB.right,0,0,0)
    cutebot.set_speed(left_speed,right_speed)
    sleep(2)
```
### 代码详解

1. 导入程序所需要的模块：`cutebot`模块包含对Cutebot智能赛车操作的类和函数，`time`模块包含对时间操作的函数，`random`模块包含产生随机数的函数。
```python
from cutebot import *
from random import *
from time import *
```

2. 创建Cutebot类的实例。
```python
cutebot = Cutebot()
```

3. 通过控制cutebot智能赛车的左右轮的速度为（0， 100）之间的随机值,并根据智能赛车的行驶方向自动点亮转向灯。
```python
while True:
    left_speed = randint(0, 100)
    right_speed = randint(0, 100)
    if left_speed > right_speed:
        cutebot.set_light(RGB.left,0,0,0)
        cutebot.set_light(RGB.right,255,255,0)
        if left_speed < right_speed:
            cutebot.set_light(RGB.left,255,255,0)
            cutebot.set_light(RGB.right,0,0,0)
            cutebot.set_speed(left_speed,right_speed)
    sleep(2)
```
## 实验结果
开启电源后，cutebot智能赛车以随机的轨迹行驶，并根据智能赛车的行驶方向自动点亮转向灯。
## 思考
当小车左右轮速度一致时，如何通过编程让cutebot智能赛车的两个车头灯同时点亮呢？
