---
sidebar_position: 3
sidebar_label: Programming environment preparation
---

## Programming environment construction
1. We need to write programs in programming software, so we should first download and install the programming software, our recommended programming software is: [Thonny](https://thonny.org/). If you have already installed Thonny and selected the correct interpreter, please ignore this step, if not, you can refer to the specific installation steps at: [Download and install programming software](https://www.yuque.com/elecfreaks-learn/picoed/ggnxx2).
2. Next, we need to prepare the firmware for pico:ed and burn it into Pico:ed. The firmware is the device "driver" that is stored inside the device and through which the code we write can follow the standard device driver to achieve the operation of a particular machine. Firmware is the software that does the most basic and lowest-level work of a system. In a hardware device, the firmware is the soul of the hardware device. If you are not familiar with how to burn pico:ed firmware into Pico:ed, you can refer to this article: [Firmware Installation Procedure](https://www.yuque.com/elecfreaks-learn/picoed/pw6wvm)
3. For the functions we want to use Pico:ed, such as the A/B button, we need to add the pico:ed library file, again, if you are not sure about the way to add the pico:ed library file, you can refer to this article: [Adding the picoed library](https://www.yuque.com/elecfreaks-learn/picoed/wkzbth)

## Preparation of library files required for the case
In the next cases, other relevant libraries are needed to ensure that you can complete all the case effects.

1. [CircuitPython_IS31FL3731](https://github.com/adafruit/Adafruit_CircuitPython_IS31FL3731/archive/refs/heads/main.zip).`CircuitPython_IS31FL3731`'s library file contains methods to control Pico:ed's LED display.
2. [CircuitPython_Motor](https://github.com/adafruit/Adafruit_CircuitPython_Motor/archive/refs/heads/main.zip).`CircuitPython_Motor`'s library file contains the control methods for motors and servos.
3. Next, just follow the steps to add the picoed library files and place `adafruit_motor`, `adafruit_is31fl3731`in the lib folder of the CIRCUITPY disk, as shown below.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-ed-starter-kit-lib-01.png)

The code for the next cases is written in the code.py file on the CIRCUITPY disk, using the installed Thonny to open the code.py and write the code.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-ed-starter-kit-lib-02.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-ed-starter-kit-lib-03.png)
