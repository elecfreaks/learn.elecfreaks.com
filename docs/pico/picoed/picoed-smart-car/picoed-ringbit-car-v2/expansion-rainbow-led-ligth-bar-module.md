## 简介
哈喽，接下来你要使用的 Ring:bit Car V2灯条模块是 Ring:bit 二代小车的专用扩展模块，连接简单功能强大，一卡一锁为你的 Ring:bit 小车扩展更多灯带。
搭载8颗 Rainbow LED 灯珠，全彩色，可以实现自动车灯、彩虹车灯等功能。
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/picoed/picoed-smart-car/picoed-ringbit-car-v2/images/Rainbow_01.png)

## 特性
输入电压为3V~5V，Ring:bit 能直接驱动。
标准的3线 GVS 接口，仅占用一个 IO 口。
8颗小型灯珠，更加省电。
每颗灯珠都可以独立编程，显示 RGB 色彩。
## 参数
| **项目** | **参数** | **备注** |
| --- | --- | --- |
| 品名 | Ring:bit Car v2 专用灯条扩展模块 |  |
| SKU | EF03425 |  |
| 工作电压 | DC 3-5V |  |
| 接口 | Ring:bit Car 专用弹针卡口 | 螺丝固定 |
| 输出信号类型 | 模拟 |  |
| 搭载灯珠 | 8颗 |  |
| 尺寸 | 60.8×33.20mm |  |
| 净重 | 5.7g |  |

## 外形与安装定位尺寸
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/picoed/picoed-smart-car/picoed-ringbit-car-v2/images/Rainbow_02.png)

## 快速上手
### 硬件连接
首先将灯条模块插入 Ring:bit 小车底板插口。随后在反面用两颗螺丝固定。扩展完成。

<iframe width="560" height="315" src="https://www.youtube.com/embed/h08lXLCV2nQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 程序编写
想必你应该已经准备好了编程环境，如果没有准备，可以参考这篇文章：[编程环境准备](https://www.yuque.com/elecfreaks-learn/picoed/gxro38)
### 代码示例
```python
# 导入程序所需要的库文件
import board
from ringbit import *
from digitalio import *
from neopixel_write import *
from time import *
from random import *

# 设置 Ring:bit 小车的左右轮子引脚和灯条引脚以及引脚方向
ringbit = Ringbit(board.P1, board.P2)
pin = DigitalInOut(board.P0)
pin.direction = Direction.OUTPUT

# 设置小车初始速度
ringbit.set_speed(100, 100)

# 循环改变灯条颜色
while True:
    rings = []
    for i in range(30):
        rings.append(randint(0, 255))
    neopixel_write(pin, bytearray(rings))
    sleep(0.1)
```
### 代码详解

1. 导入程序所需要的模块：`board`模块是引脚名称的通用容器，可以通过`board`模块指定要使用的引脚，`ringbit`模块包含对 Ring:bit 智能车操作的类和函数，`time`模块包含对时间操作的函数，`digitalio`模块包含对基本数字IO访问的类，`neopixel_write`包含对灯带操作的函数，`random`模块包含可以返回随机数的函数。
```python
import board
from ringbit import *
from digitalio import *
from neopixel_write import *
from time import *
from random import *
```

2. 设置两个舵机的引脚以及专用扩展板的引脚和引脚方向。
```python
ringbit = Ringbit(board.P1, board.P2)
pin = DigitalInOut(board.P0)
pin.direction = Direction.OUTPUT
```

3. 设置小车初始速度
```python
ringbit.set_speed(100, 100)
```

4. 循环改变灯条每颗 LED 灯的 RGB 数值，检测是否按下 A\B 按键设置 Ring:bit 智能车的左右轮子的速度。
```python
while True:
    rings = []
    for i in range(30):
        rings.append(randint(0, 255))
    neopixel_write(pin, bytearray(rings))
    sleep(0.1)
```

## 实验结果
Ring:bit 智能车底部两颗灯以及灯条随机变换颜色，呈现五彩斑斓的效果；

<iframe width="560" height="315" src="https://www.youtube.com/embed/MzSyhNCl7n4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 常见问题
## 相关阅读
