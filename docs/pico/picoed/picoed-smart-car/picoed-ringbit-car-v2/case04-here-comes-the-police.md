# Case 04:警察来了


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/picoed/picoed-smart-car/picoed-ringbit-car-v2/images/case04.png)

## 简介
哈喽，我们在日常生活中看见警车感觉很酷炫，特别是上面的彩灯的颜色变化，给我们紧张和时间紧迫的感觉，同时也想坐在上面感受一下，那么这节课就可以让我们实现拥有“警车”的心愿，接下来我们将让 Ring:bit 智能车化身警察车，那我们开始吧。  
## 硬件连接
需要将 Ring:bit Car 套件拿出来，发挥你灵动的小手将 Ring:bit 扩展版的 P1 口连接左轮舵机，P2 口连接右轮舵机。
P0口连接 Ring:bit Car 专用扩展板。  

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/picoed/picoed-smart-car/picoed-ringbit-car-v2/images/case0401.png)

将专用扩展板上的拨片开关，拨到 Rainbow LED。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/picoed/picoed-smart-car/picoed-ringbit-car-v2/images/case0402.png)

## 程序编写
编程环境准备是必须要的，如果你还没有准备，可以参考这篇文章：[编程环境准备](https://www.yuque.com/elecfreaks-learn/picoed/gxro38)
### 代码示例
```python
# 导入程序所需要的模块
import board
from ringbit import *
from time import *
from picoed import *

# 设置两个舵机的引脚以及专用扩展板的引脚和引脚方向
ringbit = Ringbit(board.P1, board.P2)
ringbit.init_rainbow_leds(board.P0, 2)

# 在屏幕上画一个方框
# 首先绘制顶部和底部边缘
for x in range(display.width):
    display.pixel(x, 0, 50)
    display.pixel(x, display.height - 1, 50)
    
# 现在绘制左右边缘
for y in range(display.height):
    display.pixel(0, y, 50)
    display.pixel(display.width - 1, y, 50)
    
# 随机变化两个LED灯的RGB数值，检测是否按下A/B按键，控制智能车速度
while True:
    ringbit.rainbow_leds[0] = (0, 255, 0)
    ringbit.rainbow_leds[1] = (0, 0, 255)
    sleep(0.5)
    ringbit.rainbow_leds[0] = (0, 0, 255)
    ringbit.rainbow_leds[1] = (0, 255, 0)
    sleep(0.5)
    if button_a.is_pressed():
        ringbit.set_speed(0, 0)
    elif button_b.is_pressed():
        ringbit.set_speed(100, 100)

```
### 代码详解

1. 导入程序所需要的模块：`board`模块是引脚名称的通用容器，可以通过`board`模块指定要使用的引脚，`ringbit`模块包含对Ring:bit智能车操作的类和函数，`picoed`模块包含对按键A\B的操作函数，`time`模块包含对时间操作的函数，`digitalio`模块包含对基本数字IO访问的类，`neopixel_write`包含对灯带操作的函数。
```python
import board
from ringbit import *
from time import *
from picoed import *
```

2. 设置两个舵机的引脚以及专用扩展板的引脚和引脚方向
```python
ringbit = Ringbit(board.P1, board.P2)
ringbit.init_rainbow_leds(board.P0, 2)
```

3. 在屏幕上画一个方框。
```python
for x in range(display.width):
    display.pixel(x, 0, 50)
    display.pixel(x, display.height - 1, 50)
for y in range(display.height):
    display.pixel(0, y, 50)
    display.pixel(display.width - 1, y, 50)
```

4. 循环改变两颗LED灯的RGB数值
```python
while True:
    ringbit.rainbow_leds[0] = (0, 255, 0)
    ringbit.rainbow_leds[1] = (0, 0, 255)
    sleep(0.5)
    ringbit.rainbow_leds[0] = (0, 0, 255)
    ringbit.rainbow_leds[1] = (0, 255, 0)
    sleep(0.5)
```

5. 检测是否按下A/B按键，控制智能车速度
```python
    if button_a.is_pressed():
        ringbit.set_speed(0, 0)
    elif button_b.is_pressed():
        ringbit.set_speed(100, 100)
```
## 实验结果
按下按钮A，小车停车，灯光变换。
按下按钮B，小车底部LED灯的灯光颜色随机变换的同时小车全速前进。

<iframe width="560" height="315" src="https://www.youtube.com/embed/2ACq1lhTegU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 思考
让你的小车闪亮黄白急救警灯，如何编写代码？
## 常见问题
## 相关阅读
