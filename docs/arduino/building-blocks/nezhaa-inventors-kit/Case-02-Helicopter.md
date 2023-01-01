# 直升机
## 目的
使用[哪吒A36合1Arduino套装](https://www.elecfreaks.com/elecfreaks-nezha-a-inventor-s-kit-for-arduino.html)制作直升机。
![](./images/neza-a-case-02-01.png)
## 购买链接
[哪吒A36合1Arduino套装](https://www.elecfreaks.com/elecfreaks-nezha-a-inventor-s-kit-for-arduino.html)

## 所需材料
![](./images/neza-a-case-02-02.png)
## 搭建步骤
![](./images/neza-a-step-02-01.png)
![](./images/neza-a-step-02-02.png)
![](./images/neza-a-step-02-03.png)
![](./images/neza-a-step-02-04.png)
![](./images/neza-a-step-02-05.png)
![](./images/neza-a-step-02-06.png)
![](./images/neza-a-step-02-07.png)
![](./images/neza-a-step-02-08.png)
![](./images/neza-a-step-02-09.png)
![](./images/neza-a-step-02-10.png)
![](./images/neza-a-step-02-11.png)
![](./images/neza-a-step-02-12.png)
![](./images/neza-a-step-02-13.png)
![](./images/neza-a-step-02-14.png)
![](./images/neza-a-step-02-15.png)
![](./images/neza-a-step-02-16.png)
![](./images/neza-a-step-02-17.png)
![](./images/neza-a-step-02-18.png)
![](./images/neza-a-step-02-19.png)
![](./images/neza-a-step-02-20.png)
![](./images/neza-a-step-02-21.png)
![](./images/neza-a-step-02-22.png)
![](./images/neza-a-step-02-23.png)
![](./images/neza-a-step-02-24.png)
![](./images/neza-a-step-02-25.png)
![](./images/neza-a-step-02-26.png)
![](./images/neza-a-step-02-27.png)
![](./images/neza-a-step-02-28.png)
![](./images/neza-a-step-02-29.png)
![](./images/neza-a-step-02-30.png)
![](./images/neza-a-step-02-31.png)
## 硬件连接图
将[电机](https://www.elecfreaks.com/geekservo-motor-2kg-compatible-with-lego.html)连接到[哪吒A主控盒](https://www.elecfreaks.com/arduino-3-in-1-master-control-box.html)的M1端口。
![](./images/neza-a-case-02-03.png)
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
  nezhaA.setMotorSpeed(M1, 100);    //设置连接至M1端口的电机速度为100%
}

void loop() {

}

```

### 结果
开启电源后，螺旋桨开始转动。
![](./images/neza-a-case-02-04.gif)