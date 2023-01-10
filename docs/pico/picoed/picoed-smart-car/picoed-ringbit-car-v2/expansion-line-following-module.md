## 简介
哈喽，接下来使用的 Ring:bit Car V2 巡线模块是 Ring:bit 二代小车的专用扩展模块，连接简单，功能强大，一卡一锁为你的 Ring:bit 小车扩展巡线功能。
专用巡线扩展板搭载了双红外探头，有效探测距离2~12mm，可以完成巡线绕圈，黑线检测，边缘检测等功能。
## 特性
输入电压为3V~5V，Pico:ed 能直接驱动。
标准的3线GVS接口，仅占用一个IO口。
利用红外光探测，抗干扰能力强。
## 参数
| **项目** | **参数** | **备注** |
| --- | --- | --- |
| 品名 | Ring:bit Car v2 专用巡线扩展模块 |  |
| SKU | EF03424 |  |
| 工作电压 | DC 3-5V |  |
| 接口 | Ring:bit Car 专用弹针卡口 | 螺丝固定 |
| 输出信号类型 | 模拟 |  |
| 有效距离 | 2~12mm |  |
| 尺寸 | 34.15×27.20mm |  |
| 净重 | 4.7g |  |

## 外形与安装定位尺寸
![](./images/line_01.png)
## 快速上手
### 硬件连接

首先将巡线模块插入 Ring:bit 小车底板插口。随后在反面用两颗螺丝固定。就这样扩展完成了，感觉很简单呢。



## 程序编写
想必你应该已经准备好了编程环境，如果没有准备，可以参考这篇文章：[编程环境准备](https://www.yuque.com/elecfreaks-learn/picoed/gxro38)
### 代码示例
```python
# 导入程序所需要的模块
import board
from ringbit import *
from time import *

# 设置Ring:bit智能车左右轮子的引脚
ringbit = Ringbit(board.P1, board.P2)

# 设置Ring:bit智能车初始速度
ringbit.set_speed(100, 100)

# 获取巡线传感器的值并根据获取的值设置Ring:bit智能车左右轮子不同速度
while True:
    value = ringbit.get_tracking(board.P0)
    if value == 10:
        ringbit.set_speed(0, 100)
        sleep(0.1)
    elif value == 01:
        ringbit.set_speed(100, 0)
        sleep(0.1)
    elif value == 11:
        ringbit.set_speed(100, 100)
        sleep(0.1)
```
### 代码详情

1. 导入程序所需要的模块：`board`模块是引脚名称的通用容器，可以通过`board`模块指定要使用的引脚，`ringbit`模块包含对Ring:bit智能车操作的类和函数，`time`模块包含对时间操作的函数。
```python
import board
from ringbit import *
from time import *
```

2. 设置Ring:bit智能车左右轮子的引脚
```python
ringbit = Ringbit(board.P1, board.P2)
```

3. 设置Ring:bit智能车初始速度
```python
ringbit.set_speed(100, 100)
```

4. 获取巡线传感器的值并根据获取的值设置Ring:bit智能车左右轮子不同速度
```python
while True:
    value = ringbit.get_tracking(board.P0)
    if value == 10:
        ringbit.set_speed(0, 100)
        sleep(0.1)
    elif value == 01:
        ringbit.set_speed(100, 0)
        sleep(0.1)
    elif value == 11:
        ringbit.set_speed(100, 100)
        sleep(0.1)
```
### 实验结果
我们可以实现缓慢的巡线绕圈跑，你的Ring:bit 智能车是否和下图中的类似呢？

<iframe width="560" height="315" src="https://www.youtube.com/embed/cbKEO6snbjM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 思考

## 常见问题

## 更多问题，欢迎访问：
[恩孚科技官方文档](https://www.elecfreaks.com/learn-en/)
