## 简介
哈喽，接下来你要使用的 Sonar:bit 是一个3线宽压超声波模块，它的工作电压为3.0V-5V，3.3V或5V的单片机系统均能使用；它只需要3根线（G、V、S）就可以工作，比常规的4线超声波模块节省一个 IO 口。Sonar:bit 量程为4cm~400cm，测量数据稳定准确，误差仅为±1cm。
它可以使用扩展片与 Ring:bit 连接，为 Ring:bit 小车扩展超声波功能。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/picoed/picoed-smart-car/picoed-ringbit-car-v2/images/sonar_01.png)

## 特性
输入电压为3V~5V，Pico:ed 能直接驱动。
标准的3线 GVS 接口，仅占用一个 IO 口。
## 参数
| **项目** | **参数** | **备注** |
| --- | --- | --- |
| 品名 | Ring:bit Car v2 专用超声波扩展模块 |  |
| SKU | EF04089 |  |
| 工作电压 | DC 3-5V |  |
| 接口 | 3pin GVS 接口 | 
 |
| 输出信号类型 | 模拟 |  |
| 量程 | 4~400cm |  |
| 尺寸 | 40.60×51.60mm |  |
| 净重 | 12g |  |

## 外形与安装定位尺寸

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/picoed/picoed-smart-car/picoed-ringbit-car-v2/images/sonar_02.png)

## 快速上手
### 硬件连接
首先使用铆钉将扩展亚克力连接到Ring:bit小车后板插口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/picoed/picoed-smart-car/picoed-ringbit-car-v2/images/sonar_03.png)

再将Sonar:bit使用铆钉连接到扩展亚克力板上方。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/picoed/picoed-smart-car/picoed-ringbit-car-v2/images/sonar_04.png)

使用3pin连接线连接到 Ring:bit 扩展板，扩展完成。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/picoed/picoed-smart-car/picoed-ringbit-car-v2/images/sonar_05.png)

<iframe width="560" height="315" src="https://www.youtube.com/embed/EFqFEwfLRyc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 程序编写
想必你应该已经准备好了编程环境，如果没有准备，可以参考这篇文章：[编程环境准备](https://www.yuque.com/elecfreaks-learn/picoed/gxro38)
### 代码示例
```python
# 导入程序所需要的模块
import board
from ringbit import *

# 设置Ring:bit左右轮子舵机的引脚
ringbit = Ringbit(board.P1, board.P2)

# 根据超声波传感器检测的距离改变小车速度
while True:
    if ringbit.get_distance(board.P0, Unit.cm) > 20:
        ringbit.set_speed(100, 100)
    else:
        ringbit.set_speed(0, 0)

```
### 代码详解

1. 导入程序所需要的模块：`board`模块是引脚名称的通用容器，可以通过`board`模块指定要使用的引脚，`ringbit`模块包含对Ring:bit智能车操作的类和函数。
```python
import board
from ringbit import *
```

2. 设置Ring:bit左右轮子两个舵机的引脚。
```python
ringbit = Ringbit(board.P1, board.P2)
```

3. 根据超声波传感器检测的距离更改小车的速度。
```python
while True:
    if ringbit.get_distance(board.P0, Unit.cm) > 20:
        ringbit.set_speed(100, 100)
    else:
        ringbit.set_speed(0, 0)
```
## 实验结果
Ring:bit 小车在没有障碍物的时候正常行驶，有障碍物则停下，当障碍物离开继续行驶。

<iframe width="560" height="315" src="https://www.youtube.com/embed/vqo8PnJyEkQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 思考

## 常见问题
## 相关阅读
