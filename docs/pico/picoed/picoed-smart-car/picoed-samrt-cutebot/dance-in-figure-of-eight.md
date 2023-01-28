---
sidebar_position: 6
---

# Case 03：8字舞蹈

## 简介
让Cutebot智能赛车沿着8字轨迹行驶。
## 准备编程环境
准备编程环境请参考：[准备编程环境](https://www.yuque.com/elecfreaks-learn/picoed/gccnpl)
## 示例代码
```python
from cutebot import *
from time import *

# 创建Cutebot类的实例
cutebot = Cutebot()

# 通过控制cutebot智能赛车的左右轮的速度差来完成转向
while True:
    cutebot.set_speed(100,50)
    sleep(2)
    cutebot.set_speed(50,100)
    sleep(2)
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

3. 通过控制cutebot智能赛车的左右轮的速度差来完成转向。
```python
while True:
    cutebot.set_speed(100,50)
    sleep(2)
    cutebot.set_speed(50,100)
    sleep(2)
```
## 实验结果
开启电源后，cutebot智能赛车以8字形的轨迹行驶。
## 思考
如果想要让小车以一个正方形轨迹行驶，应该如何编程？
