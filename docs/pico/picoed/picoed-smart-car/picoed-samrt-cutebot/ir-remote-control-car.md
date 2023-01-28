---
sidebar_position: 11
---

# Case 08：红外遥控小车

## 简介
通过遥控器控制小车行驶。
## 准备编程环境
准备编程环境请参考：[准备编程环境](https://www.yuque.com/elecfreaks-learn/picoed/gccnpl)
## 红外遥控键值表
| 按键 | 返回值 | 按键 | 返回值 | 按键 | 返回值 |
| --- | --- | --- | --- | --- | --- |
| 电源 | 11 |
 |
 | MENU | 12 |
| + | 13 | 上 | 14 | 返回 | 15 |
| 左 | 16 | OK | 17 | 右 | 18 |
| - | 19 | 下 | 20 | 0 | 0 |
| 1 | 1 | 2 | 2 | 3 | 3 |
| 4 | 4 | 5 | 5 | 6 | 6 |
| 7 | 7 | 8 | 8 | 9 | 9 |

## 示例代码
```python
from cutebot import *

# 创建Cutebot类的实例
cutebot = Cutebot()

# 循环检测cutebot智能赛车的红外接收器接收到的值
# 根据接收到的值控制cutebot智能赛车的行驶路线
while True:
    Ir = cutebot.get_ir_value()
    if Ir == 14:
        cutebot.set_speed(50, 50)
    if Ir == 16:
        cutebot.set_speed(-30, 30)
    if Ir == 17:
        cutebot.set_speed(0, 0)
    if Ir == 18:
        cutebot.set_speed(30, -30)
    if Ir == 20:
        cutebot.set_speed(-50, -50)
```
### 代码详解

1. 导入程序所需要的模块：`cutebot`模块包含对Cutebot智能赛车操作的类和函数。
```python
from cutebot import *
```

2. 创建Cutebot类的实例。
```python
cutebot = Cutebot()
```

3. 循环检测cutebot智能赛车的红外接收器接收到的值，根据接收到的值控制cutebot智能赛车行驶。
```python
while True:
    Ir = cutebot.get_ir_value()
    if Ir == 14:
        cutebot.set_speed(50, 50)
    if Ir == 16:
        cutebot.set_speed(-30, 30)
    if Ir == 17:
        cutebot.set_speed(0, 0)
    if Ir == 18:
        cutebot.set_speed(30, -30)
    if Ir == 20:
        cutebot.set_speed(-50, -50)
```
## 实验结果
开启电源后，通过红外遥控器控制cutebot智能赛车行驶。
## 思考
可以通过红外遥控控制cutebot智能赛车的更多功能吗？
