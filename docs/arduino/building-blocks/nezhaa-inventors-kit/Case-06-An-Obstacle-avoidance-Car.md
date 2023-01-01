# 避障小车
## 目的
使用[哪吒A36合1Arduino套装](https://www.elecfreaks.com/elecfreaks-nezha-a-inventor-s-kit-for-arduino.html)制作避障小车。
![](./images/neza-a-case-06-01.png)
## 购买链接
[哪吒A36合1Arduino套装](https://www.elecfreaks.com/elecfreaks-nezha-a-inventor-s-kit-for-arduino.html)

## 所需材料
![](./images/neza-a-case-06-02.png)
## 搭建步骤
![](./images/neza-a-step-06-01.png)
![](./images/neza-a-step-06-02.png)
![](./images/neza-a-step-06-03.png)
![](./images/neza-a-step-06-04.png)
![](./images/neza-a-step-06-05.png)
![](./images/neza-a-step-06-06.png)
![](./images/neza-a-step-06-07.png)
![](./images/neza-a-step-06-08.png)
![](./images/neza-a-step-06-09.png)
![](./images/neza-a-step-06-10.png)
![](./images/neza-a-step-06-11.png)
![](./images/neza-a-step-06-12.png)
![](./images/neza-a-step-06-13.png)
![](./images/neza-a-step-06-14.png)
![](./images/neza-a-step-06-15.png)
![](./images/neza-a-step-06-16.png)
![](./images/neza-a-step-06-17.png)
![](./images/neza-a-step-06-18.png)
![](./images/neza-a-step-06-19.png)
![](./images/neza-a-step-06-20.png)
![](./images/neza-a-step-06-21.png)
![](./images/neza-a-step-06-22.png)
![](./images/neza-a-step-06-23.png)
![](./images/neza-a-step-06-24.png)
![](./images/neza-a-step-06-25.png)
![](./images/neza-a-step-06-26.png)
![](./images/neza-a-step-06-27.png)
![](./images/neza-a-step-06-28.png)
![](./images/neza-a-step-06-29.png)
![](./images/neza-a-step-06-30.png)
![](./images/neza-a-step-06-31.png)
![](./images/neza-a-step-06-32.png)
![](./images/neza-a-step-06-33.png)
![](./images/neza-a-step-06-34.png)
![](./images/neza-a-step-06-35.png)
![](./images/neza-a-step-06-36.png)
![](./images/neza-a-step-06-37.png)
![](./images/neza-a-step-06-38.png)
![](./images/neza-a-step-06-39.png)
![](./images/neza-a-step-06-40.png)

## 硬件连接图
将两个[电机](https://www.elecfreaks.com/geekservo-motor-2kg-compatible-with-lego.html)分别连接到[哪吒A主控盒](https://www.elecfreaks.com/arduino-3-in-1-master-control-box.html)的M1、M2端口，将[超声波传感器](https://www.elecfreaks.com/planetx-ultrasonic.html)安装在[哪吒A主控盒](https://www.elecfreaks.com/arduino-3-in-1-master-control-box.html)的J1端口。
![](./images/neza-a-case-06-03.png)
## 编写程序
### 准备编程环境
编程环境准备步骤：请参考：[Arduino 3 in 1 Breakout Board](https://www.elecfreaks.com/learn-en/Arduino-3-in-1-box/Arduino-3-in-1-box.html)
下载并导入[哪吒A主控盒](https://www.elecfreaks.com/arduino-3-in-1-master-control-box.html)的库文件和依赖库文件后，还需要导入[超声波传感器](https://www.elecfreaks.com/planetx-ultrasonic.html)的库文件：[PlanetXUltrasonic-main.zip](https://github.com/elecfreaks/PlanetXUltrasonic/archive/refs/heads/main.zip)
下载并导入[哪吒A主控盒](https://www.elecfreaks.com/arduino-3-in-1-master-control-box.html)的接口定义文件：[RJPins-main.zip](https://github.com/elecfreaks/RJPins/archive/refs/heads/main.zip)

### 示例程序：
```
// Language ArduinoC
#include <PlanetXUltrasonic.h>
#include <NezhaA.h>
#include <RJPins.h>

PlanetXUltrasonic ultrasonicJ1(J1);    //创建一个PlanetXUltrasonic类的实例
NezhaA nezhaa;    //创建一个NezhaA类的实例
int distance;    //声明一个整形变量distance

void setup() {
  nezhaa.begin();    //初始化蜂鸣器、电机、舵机、灯光
}

void loop() {
  distance = (ultrasonicJ1.getDistance());    //将超声波传感器的返回值存入变量distance中
  if (distance > 3 && distance < 20) {    //判断变量distance的值是否大于3且小于20
    nezhaa.setMotorSpeed(M1, 15);    //设置M2端口的电机速度为15%
    nezhaa.setMotorSpeed(M2, -15);    //设置M2端口的电机速度为-15%
    delay((1) * 1000);    //延时1000ms
  } else {
    nezhaa.setMotorSpeed(M1, 20);
    nezhaa.setMotorSpeed(M2, 20);
  }
}
```

### 结果
开启电源后，避障小车向前行驶，如果遇到障碍物则自动转弯。

