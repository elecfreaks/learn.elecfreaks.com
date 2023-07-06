---
sidebar_position: 8
---

# Case 05：炫彩灯光


## 简介
让Cutebot智能赛车向前行驶，并随机显示灯光颜色。
## 准备编程环境
准备编程环境请参考：[准备编程环境](https://www.yuque.com/elecfreaks-learn/picoed/gccnpl)
## 示例代码
```python
from cutebot import *
from random import *
from time import *

# 创建Cutebot类的实例
cutebot = Cutebot()

# 设置cutebot智能赛车以50%的速度向前行驶
cutebot.set_speed(50,50)
# 初始化彩虹灯
cutebot.init_rainbow_leds()

# 循环控制cutebot智能赛车的车头灯和示廓灯随机显示灯光颜色
while True:
    R = randint(0, 255)
    G = randint(0, 255)
    B = randint(0, 255)
    cutebot.set_light(RGB.left,R,G,B)
    cutebot.set_light(RGB.right,R,G,B)
    cutebot.rainbow_leds[0] = (R,G,B)
    cutebot.rainbow_leds[1] = (R,G,B)
    sleep(1)
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

3. 设置cutebot智能赛车以50%的速度向前行驶，初始化彩虹灯。
```python
cutebot.set_speed(50,50)
cutebot.init_rainbow_leds()
```

4. 循环控制cutebot智能赛车的车头灯和示廓灯随机显示灯光颜色
```python
while True:
    R = randint(0, 255)
    G = randint(0, 255)
    B = randint(0, 255)
    cutebot.set_light(RGB.left,R,G,B)
    cutebot.set_light(RGB.right,R,G,B)
    cutebot.rainbow_leds[0] = (R,G,B)
    cutebot.rainbow_leds[1] = (R,G,B)
    sleep(1)
```
## 实验结果
开启电源后，cutebot智能赛车向前行驶，在行驶过程中随机切换车头灯和示廓灯的灯光颜色。
## 思考
如何让示廓灯根据cutebot智能赛车的行驶速度自动切换颜色呢？
