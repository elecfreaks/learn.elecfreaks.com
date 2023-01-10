## 编程环境准备
1. 哈喽，你能看到这里太棒了，接下来我们编写程序需要在编程软件中进行，就像我们写作业需要在作业本上面书写的道理一样，所以，我们首先应该下载和安装编程软件，我们推荐编程软件是: [Thonny](https://thonny.org/) 。如果你已经安装了 Thonny 并选择了正确的解释器，请忽略这一步，如果没有，可以参考具体的安装步骤：[下载并安装编程软件](https://www.yuque.com/elecfreaks-learn/picoed/ggnxx2)。
2. 接下来，我们需要准备 picoed 固件，并将固件烧录到 Pico:ed 里面。固件是指设备内部保存的设备“驱动程序”，通过固件，我们写的代码才能按照标准的设备驱动实现特定机器的运行动作。固件是担任着一个系统最基础最底层工作的软件。而在硬件设备中，固件就是硬件设备的灵魂。如果你对如何将 picoed 固件烧录到  Pico:ed 里面的方法不熟悉，可以参考这篇文章：[固件安装步骤](https://www.yuque.com/elecfreaks-learn/picoed/pw6wvm)。
3. 对于我们要使用 Pico:ed 的功能，比如 A/B 按键，所以我们需要添加 picoed 库文件，同样的，如果你对添加 picoed 库文件方式不清楚，可以参考这篇文章：[添加picoed库](https://github.com/elecfreaks/circuitpython_picoed)。
## 库文件准备
在接下来的案例中，还需要其他相关的库才能保证你能完成所有的案例效果：

1. [CircuitPython_Motor](https://github.com/adafruit/Adafruit_CircuitPython_Motor/archive/refs/heads/main.zip)。`CircuitPython_Motor`库文件包含对电机、舵机的控制方法。
2. [CircuitPython_NeoPixel](https://github.com/adafruit/Adafruit_CircuitPython_NeoPixel)。`CircuitPython_NeoPixel`库文件包含对灯环的控制方法。
3. [CircuitPython_Ringbit](https://github.com/elecfreaks/circuitpython_ringbit)。`CircuitPython_Ringbit`库文件包含对 ring:bit 扩展板的控制方法。
4. 接下来，请按照添加 picoed 库文件的步骤将`adafruit_motor`、`adafruit_is31fl3731``neopixel.py``ringbit.py`放在 CIRCUITPY盘的lib文件夹中即可，如下图。

![](./images/program.png)

## ringbit 库使用
关于 ringbit 相关的操作类和函数具体用法，请参考：[Ring:bit库使用说明](https://www.yuque.com/elecfreaks-learn/picoed/ayz5ki)
