# 小叉车
## 目的
使用[哪吒A36合1Arduino套装](https://www.elecfreaks.com/elecfreaks-nezha-a-inventor-s-kit-for-arduino.html)制作小叉车。
![](./images/neza-a-case-03-01.png)
## 购买链接
[哪吒A36合1Arduino套装](https://www.elecfreaks.com/elecfreaks-nezha-a-inventor-s-kit-for-arduino.html)
## 所需材料
![](./images/neza-a-case-03-02.png)
## 搭建步骤
![](./images/neza-a-step-03-01.png)
![](./images/neza-a-step-03-02.png)
![](./images/neza-a-step-03-03.png)
![](./images/neza-a-step-03-04.png)
![](./images/neza-a-step-03-05.png)
![](./images/neza-a-step-03-06.png)
![](./images/neza-a-step-03-07.png)
![](./images/neza-a-step-03-08.png)
![](./images/neza-a-step-03-09.png)
![](./images/neza-a-step-03-10.png)
![](./images/neza-a-step-03-11.png)
![](./images/neza-a-step-03-12.png)
![](./images/neza-a-step-03-13.png)
![](./images/neza-a-step-03-14.png)
![](./images/neza-a-step-03-15.png)
![](./images/neza-a-step-03-16.png)
![](./images/neza-a-step-03-17.png)
![](./images/neza-a-step-03-18.png)
![](./images/neza-a-step-03-19.png)
![](./images/neza-a-step-03-20.png)
![](./images/neza-a-step-03-21.png)
![](./images/neza-a-step-03-22.png)
![](./images/neza-a-step-03-23.png)
![](./images/neza-a-step-03-24.png)
![](./images/neza-a-step-03-25.png)
![](./images/neza-a-step-03-26.png)
![](./images/neza-a-step-03-27.png)
![](./images/neza-a-step-03-28.png)
![](./images/neza-a-step-03-29.png)
![](./images/neza-a-step-03-30.png)
![](./images/neza-a-step-03-31.png)
![](./images/neza-a-step-03-32.png)
![](./images/neza-a-step-03-33.png)
![](./images/neza-a-step-03-34.png)
![](./images/neza-a-step-03-35.png)
![](./images/neza-a-step-03-36.png)
![](./images/neza-a-step-03-37.png)
![](./images/neza-a-step-03-38.png)
![](./images/neza-a-step-03-39.png)
![](./images/neza-a-step-03-40.png)
![](./images/neza-a-step-03-41.png)
![](./images/neza-a-step-03-42.png)
![](./images/neza-a-step-03-43.png)
![](./images/neza-a-step-03-44.png)
![](./images/neza-a-step-03-45.png)
![](./images/neza-a-step-03-46.png)
![](./images/neza-a-step-03-47.png)
![](./images/neza-a-step-03-48.png)
![](./images/neza-a-step-03-49.png)
![](./images/neza-a-step-03-50.png)

## 硬件连接图
将两个[电机](https://www.elecfreaks.com/geekservo-motor-2kg-compatible-with-lego.html)分别连接到哪吒A主控盒的M1、M2端口，将[两颗按钮](https://www.elecfreaks.com/planetx-button.html)安装在哪吒A主控盒的J1端口。
![](./images/neza-a-case-03-03.png)
## 编写程序
### 准备编程环境
编程环境准备步骤：请参考：[Arduino 3 in 1 Breakout Board](https://www.elecfreaks.com/learn-en/Arduino-3-in-1-box/Arduino-3-in-1-box.html)
下载并导入[哪吒A主控盒](https://www.elecfreaks.com/arduino-3-in-1-master-control-box.html)的库文件和依赖库文件后，还需要导入[两颗按钮](https://www.elecfreaks.com/planetx-button.html)模块的库文件：[PlanetXButton-main.zip](https://github.com/elecfreaks/PlanetXButton/archive/refs/heads/main.zip)
下载并导入[哪吒A主控盒](https://www.elecfreaks.com/arduino-3-in-1-master-control-box.html)的接口定义文件：[RJPins-main.zip](https://github.com/elecfreaks/RJPins/archive/refs/heads/main.zip)
### 示例程序：
```
// Language ArduinoC
#include <RJPins.h>
#include <NezhaA.h>
#include <PlanetXButton.h>

PlanetXButton buttonJ1(J1);    //创建一个PlanetXButton类的实例
NezhaA nezhaA;    //创建一个NezhaA类的实例

void setup() {
  nezhaA.begin();    //初始化蜂鸣器、电机、舵机、灯光
}

void loop() {
  if (buttonJ1.isPressed(C)) {    //当检测到按键C被按下时
    nezhaA.setMotorSpeed(M1, 50);   //设置M1端口的电机速度为50%
    delay((2) * 1000);    //延时2000ms
    nezhaA.brakeMotor(M1);    //设置M1端口的电机停止转动
    nezhaA.setMotorSpeed(M2, 100);   //设置M2端口的电机速度为100%
    delay((1) * 1000);
    nezhaA.brakeMotor(M2);    //设置M2端口的电机停止转动
  }
  if (buttonJ1.isPressed(D)) {    //当检测到按键D被按下时
    nezhaA.setMotorSpeed(M1, -50);
    delay((2) * 1000);
    nezhaA.brakeMotor(M1);
    nezhaA.setMotorSpeed(M2, -100);
    delay((1) * 1000);
    nezhaA.brakeMotor(M2);
  }
}
```
### 结果
开启电源后，按下C按钮后，小车向前行驶2秒，自动抬起车叉；按下D按钮后，小车向后行驶2秒，自动放下车叉。

