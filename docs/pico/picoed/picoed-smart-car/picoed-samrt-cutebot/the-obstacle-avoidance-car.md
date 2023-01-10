# Case 07：避障小车

## 简介
让Cutebot智能赛车向前行驶，当遇到障碍物时自动转弯。
## 硬件安装
将超声波传感器插入**sonar**的接口。
**_注意：安装超声波传感器时，不能插入IIC接口，如果将超声波传感器插入IIC接口会导致程序无法运行，超声波传感器发热。_**
![cutebot_01_02.jpg](https://cdn.nlark.com/yuque/0/2022/jpeg/12684684/1655258562310-73773cac-8981-40e2-aa47-34cff0a2327c.jpeg#clientId=u3b01b621-8dba-4&crop=0&crop=0&crop=1&crop=1&from=ui&id=ufd839cc3&margin=%5Bobject%20Object%5D&name=cutebot_01_02.jpg&originHeight=600&originWidth=600&originalType=binary&ratio=1&rotation=0&showTitle=false&size=149116&status=done&style=none&taskId=u59db3aa4-bfb1-4e78-bb96-19ebf871d92&title=)
## 准备编程环境
准备编程环境请参考：[准备编程环境](https://www.yuque.com/elecfreaks-learn/picoed/gccnpl)
## 示例代码
```python
from cutebot import *
import time

# 创建Cutebot类的实例
cutebot = Cutebot()    

# 循环检测cutebot智能赛车的超声波传感器的返回值
# 当cutebot智能赛车前方没有障碍物时，cutebot智能赛车以50%的速度向前行驶
# 当cutebot智能赛车前方有障碍物时，则设置左轮速度为50%，右轮速度为-50%
while True:
    distance = cutebot.get_distance(Unit.cm)
    if distance > 3 and distance < 20:
        cutebot.set_speed(50,-50)
        time.sleep(0.5)
    else:
        cutebot.set_speed(50,50)
```
### 代码详解

1. 导入程序所需要的模块：`cutebot`模块包含对Cutebot智能赛车操作的类和函数，`time`模块包含对时间进行操作的类和函数。
```python
from cutebot import *
import time
```

2. 创建Cutebot类的实例。
```python
cutebot = Cutebot()
```

3. 循环检测cutebot智能赛车的超声波传感器的返回值，当cutebot智能赛车前方没有障碍物时，cutebot智能赛车以50%的速度向前行驶，当cutebot智能赛车前方有障碍物时，则设置左轮速度为50%，右轮速度为-50%。
```python
while True:
    distance = cutebot.get_distance(Unit.cm)
    if distance > 3 and distance < 20:
        cutebot.set_speed(50,-50)
        time.sleep(0.5)
    else:
        cutebot.set_speed(50,50)
```
## 实验结果
开启电源后，cutebot智能赛车向前行驶，当遇到障碍物时，小车自动转头避开障碍物。
## 思考
是否可以使用cutebot智能赛车制作一辆定距跟踪的小车呢？
