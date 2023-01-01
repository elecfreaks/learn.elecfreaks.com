# 基础小车
## 目的
使用[哪吒A36合1Arduino套装](https://www.elecfreaks.com/elecfreaks-nezha-a-inventor-s-kit-for-arduino.html)制作基础小车。
![](./images/neza-a-case-04-01.png)
## 购买链接
[哪吒A36合1Arduino套装](https://www.elecfreaks.com/elecfreaks-nezha-a-inventor-s-kit-for-arduino.html)

## 所需材料
![](./images/neza-a-case-04-02.png)
## 搭建步骤
![](./images/neza-a-step-04-01.png)
![](./images/neza-a-step-04-02.png)
![](./images/neza-a-step-04-03.png)
![](./images/neza-a-step-04-04.png)
![](./images/neza-a-step-04-05.png)
![](./images/neza-a-step-04-06.png)
![](./images/neza-a-step-04-07.png)
![](./images/neza-a-step-04-08.png)
![](./images/neza-a-step-04-09.png)
![](./images/neza-a-step-04-10.png)
![](./images/neza-a-step-04-11.png)
![](./images/neza-a-step-04-12.png)
![](./images/neza-a-step-04-13.png)
![](./images/neza-a-step-04-14.png)
![](./images/neza-a-step-04-15.png)
![](./images/neza-a-step-04-16.png)
![](./images/neza-a-step-04-17.png)
![](./images/neza-a-step-04-18.png)
![](./images/neza-a-step-04-19.png)
![](./images/neza-a-step-04-20.png)
![](./images/neza-a-step-04-21.png)
![](./images/neza-a-step-04-22.png)
![](./images/neza-a-step-04-23.png)
![](./images/neza-a-step-04-24.png)
![](./images/neza-a-step-04-25.png)
![](./images/neza-a-step-04-26.png)
![](./images/neza-a-step-04-27.png)
![](./images/neza-a-step-04-28.png)
![](./images/neza-a-step-04-29.png)
![](./images/neza-a-step-04-30.png)
![](./images/neza-a-step-04-31.png)
![](./images/neza-a-step-04-32.png)
![](./images/neza-a-step-04-33.png)

## 硬件连接图
将两个[电机](https://www.elecfreaks.com/geekservo-motor-2kg-compatible-with-lego.html)分别连接到[哪吒A主控盒](https://www.elecfreaks.com/arduino-3-in-1-master-control-box.html)的M1、M2端口。
![](./images/neza-a-case-04-03.png)
## 编写程序
### 准备编程环境
编程环境准备步骤：请参考：[Arduino 3 in 1 Breakout Board](https://www.elecfreaks.com/learn-en/Arduino-3-in-1-box/Arduino-3-in-1-box.html)
### 示例程序：
```
// Language ArduinoC
#include <NezhaA.h>

NezhaA nezhaA;    //创建一个NezhaA类的实例

void setup() {
  nezhaA.begin();    //初始化蜂鸣器、电机、舵机、灯光
  nezhaA.setMotorSpeed(M1, 100);   //设置M1端口的电机速度为100%
  nezhaA.setMotorSpeed(M2, 30);   //设置M2端口的电机速度为30%
}

void loop() {
}
```
### 结果
开启电源后，基础小车沿着圆形轨迹行驶。

