# Case 06：巡线行驶

## 简介
让Cutebot智能赛车沿着黑线行驶。
## 准备编程环境
准备编程环境请参考：[准备编程环境](https://www.yuque.com/elecfreaks-learn/picoed/gccnpl)
## 示例代码
```python
from cutebot import *

# 创建Cutebot类的实例
cutebot = Cutebot()    

# 循环检测cutebot智能赛车的巡线头的状态
# 当两个巡线头都在黑线上时，cutebot智能赛车以50%的速度向前行驶
# 当右边的巡线头偏离黑线时，则设置左轮速度为0%，右轮速度为100%
# 当左边的巡线头偏离黑线时，则设置左轮速度为100%，右轮速度为0%
while True:
    tracing = cutebot.get_tracking()
    if tracing == '11':
        cutebot.set_speed(50,50)
    if tracing == '10':
        cutebot.set_speed(0,100)
    if tracing == '01':
        cutebot.set_speed(100,0)
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

3. 循环检测cutebot智能赛车的巡线头的状态，当两个巡线头都在黑线上时，cutebot智能赛车以50%的速度向前行驶，当右边的巡线头偏离黑线时，则设置左轮速度为0%，右轮速度为100%，当左边的巡线头偏离黑线时，则设置左轮速度为100%，右轮速度为0%。
```python
while True:
    tracing = cutebot.get_tracking()
    if tracing == 11:
        cutebot.set_speed(50,50)
        if tracing == 10:
            cutebot.set_speed(0,100)
            if tracing == 01:
        cutebot.set_speed(100,0)
```
## 实验结果
开启电源后，cutebot智能赛车沿着黑线行驶。
## 思考
是否可以使用cutebot智能赛车制作一辆防止跌落的小车呢？
