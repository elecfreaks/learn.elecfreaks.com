# 大甲虫
## 目的
使用[哪吒A36合1Arduino套装](https://www.elecfreaks.com/elecfreaks-nezha-a-inventor-s-kit-for-arduino.html)制作大甲虫。
![](./images/neza-a-case-08-01.png)
## 购买链接
[哪吒A36合1Arduino套装](https://www.elecfreaks.com/elecfreaks-nezha-a-inventor-s-kit-for-arduino.html)
## 所需材料
![](./images/neza-a-case-08-02.png)
## 搭建步骤
![](./images/neza-a-step-08-01.png)
![](./images/neza-a-step-08-02.png)
![](./images/neza-a-step-08-03.png)
![](./images/neza-a-step-08-04.png)
![](./images/neza-a-step-08-05.png)
![](./images/neza-a-step-08-06.png)
![](./images/neza-a-step-08-07.png)
![](./images/neza-a-step-08-08.png)
![](./images/neza-a-step-08-09.png)
![](./images/neza-a-step-08-10.png)
![](./images/neza-a-step-08-11.png)
![](./images/neza-a-step-08-12.png)
![](./images/neza-a-step-08-13.png)
![](./images/neza-a-step-08-14.png)
![](./images/neza-a-step-08-15.png)
![](./images/neza-a-step-08-16.png)
![](./images/neza-a-step-08-17.png)
![](./images/neza-a-step-08-18.png)
![](./images/neza-a-step-08-19.png)
![](./images/neza-a-step-08-20.png)
![](./images/neza-a-step-08-21.png)
![](./images/neza-a-step-08-22.png)
![](./images/neza-a-step-08-23.png)
![](./images/neza-a-step-08-24.png)
![](./images/neza-a-step-08-25.png)
![](./images/neza-a-step-08-26.png)
![](./images/neza-a-step-08-27.png)
![](./images/neza-a-step-08-28.png)
![](./images/neza-a-step-08-29.png)
![](./images/neza-a-step-08-30.png)
![](./images/neza-a-step-08-31.png)
![](./images/neza-a-step-08-32.png)
![](./images/neza-a-step-08-33.png)
![](./images/neza-a-step-08-34.png)
![](./images/neza-a-step-08-35.png)
![](./images/neza-a-step-08-36.png)
![](./images/neza-a-step-08-37.png)
![](./images/neza-a-step-08-38.png)
![](./images/neza-a-step-08-39.png)
![](./images/neza-a-step-08-40.png)
![](./images/neza-a-step-08-41.png)
![](./images/neza-a-step-08-42.png)
![](./images/neza-a-step-08-43.png)
![](./images/neza-a-step-08-44.png)
![](./images/neza-a-step-08-45.png)
![](./images/neza-a-step-08-46.png)
![](./images/neza-a-step-08-47.png)
![](./images/neza-a-step-08-48.png)
![](./images/neza-a-step-08-49.png)
![](./images/neza-a-step-08-50.png)
![](./images/neza-a-step-08-51.png)
![](./images/neza-a-step-08-52.png)
![](./images/neza-a-step-08-53.png)
![](./images/neza-a-step-08-54.png)
![](./images/neza-a-step-08-55.png)
![](./images/neza-a-step-08-56.png)
![](./images/neza-a-step-08-57.png)
![](./images/neza-a-step-08-58.png)
![](./images/neza-a-step-08-59.png)
![](./images/neza-a-step-08-60.png)
![](./images/neza-a-step-08-61.png)
![](./images/neza-a-step-08-62.png)



## 硬件连接图
将两个[电机](https://www.elecfreaks.com/geekservo-motor-2kg-compatible-with-lego.html)分别连接到[哪吒A主控盒](https://www.elecfreaks.com/arduino-3-in-1-master-control-box.html)的M1、M2端口，将[超声波传感器](https://www.elecfreaks.com/planetx-ultrasonic.html)安装在[哪吒A主控盒](https://www.elecfreaks.com/arduino-3-in-1-master-control-box.html)的J1端口，[两路巡线传感器](https://www.elecfreaks.com/planetx-tracking.html)安装在[哪吒A主控盒](https://www.elecfreaks.com/arduino-3-in-1-master-control-box.html)的J2端口。
![](./images/neza-a-case-08-03.png)
## 编写程序

### 准备编程环境
编程环境准备步骤：请参考：[Arduino 3 in 1 Breakout Board](https://www.elecfreaks.com/learn-en/Arduino-3-in-1-box/Arduino-3-in-1-box.html)
下载并导入[哪吒A主控盒](https://www.elecfreaks.com/arduino-3-in-1-master-control-box.html)的库文件和依赖库文件后，还需要导入[两路巡线传感器](https://www.elecfreaks.com/planetx-tracking.html)的库文件：[PlanetXTracking-main.zip](https://github.com/elecfreaks/PlanetXTracking/archive/refs/heads/main.zip)
下载并导入[哪吒A主控盒](https://www.elecfreaks.com/arduino-3-in-1-master-control-box.html)的库文件和依赖库文件后，还需要导入[超声波传感器](https://www.elecfreaks.com/planetx-ultrasonic.html)的库文件：[PlanetXUltrasonic-main.zip](https://github.com/elecfreaks/PlanetXUltrasonic/archive/refs/heads/main.zip)
下载并导入[哪吒A主控盒](https://www.elecfreaks.com/arduino-3-in-1-master-control-box.html)的接口定义文件：[RJPins-main.zip](https://github.com/elecfreaks/RJPins/archive/refs/heads/main.zip)

## 示例程序：
```
// Language ArduinoC
#include <NezhaA.h>
#include <RJPins.h>
#include <PlanetXTracking.h>
#include <PlanetXUltrasonic.h>

PlanetXTracking trackingJ2(J2);    //创建一个PlanetXTracking类的实例
NezhaA nezhaa;    //创建一个NezhaA类的实例
PlanetXUltrasonic ultrasonicJ1(J1);    //创建一个PlanetXUltrasonic类的实例
int distance;    //声明一个整形变量distance

void setup() {
  nezhaa.begin();    //初始化蜂鸣器、电机、舵机、灯光
}

void loop() {
  distance = (ultrasonicJ1.getDistance());    //将超声波传感器的返回值存入变量distance中
  if (distance > 3 && distance < 20) {    //判断变量distance的值是否大于3且小于20
    nezhaa.setMotorSpeed(M1, 0);    //设置M1端口的电机速度为0%
    nezhaa.setMotorSpeed(M2, 0);    //设置M2端口的电机速度为0%
  } 
  else {
    if (trackingJ2.isTracked(Right)) {
      nezhaa.setMotorSpeed(M1, 0);    //设置M1端口的电机速度为0%
      nezhaa.setMotorSpeed(M2, 20);    //设置M2端口的电机速度为20%
    }
    if (trackingJ2.isTracked(Left)) {
      nezhaa.setMotorSpeed(M1, 20);    //设置M1端口的电机速度为20%
      nezhaa.setMotorSpeed(M2, 0);    //设置M2端口的电机速度为0%
    }  
  }  
}
```

### 结果
开启电源后，大甲虫沿线行走，当遇到障碍物时自动停下。
