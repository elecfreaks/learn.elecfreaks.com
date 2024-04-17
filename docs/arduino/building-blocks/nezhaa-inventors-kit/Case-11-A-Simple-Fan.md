# 简易小风扇
## 目的
使用[哪吒A36合1Arduino套装](https://www.elecfreaks.com/elecfreaks-nezha-a-inventor-s-kit-for-arduino.html)制作简易小风扇。
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/arduino/building-blocks/nezhaa-inventors-kit/images/neza-a-case-11-01.png)
## 购买链接
[哪吒A36合1Arduino套装](https://www.elecfreaks.com/elecfreaks-nezha-a-inventor-s-kit-for-arduino.html)
## 所需材料
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/arduino/building-blocks/nezhaa-inventors-kit/images/neza-a-case-11-02.png)
## 搭建步骤
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/arduino/building-blocks/nezhaa-inventors-kit/images/neza-a-step-11-01.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/arduino/building-blocks/nezhaa-inventors-kit/images/neza-a-step-11-02.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/arduino/building-blocks/nezhaa-inventors-kit/images/neza-a-step-11-03.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/arduino/building-blocks/nezhaa-inventors-kit/images/neza-a-step-11-04.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/arduino/building-blocks/nezhaa-inventors-kit/images/neza-a-step-11-05.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/arduino/building-blocks/nezhaa-inventors-kit/images/neza-a-step-11-06.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/arduino/building-blocks/nezhaa-inventors-kit/images/neza-a-step-11-07.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/arduino/building-blocks/nezhaa-inventors-kit/images/neza-a-step-11-08.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/arduino/building-blocks/nezhaa-inventors-kit/images/neza-a-step-11-09.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/arduino/building-blocks/nezhaa-inventors-kit/images/neza-a-step-11-10.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/arduino/building-blocks/nezhaa-inventors-kit/images/neza-a-step-11-11.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/arduino/building-blocks/nezhaa-inventors-kit/images/neza-a-step-11-12.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/arduino/building-blocks/nezhaa-inventors-kit/images/neza-a-step-11-13.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/arduino/building-blocks/nezhaa-inventors-kit/images/neza-a-step-11-14.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/arduino/building-blocks/nezhaa-inventors-kit/images/neza-a-step-11-15.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/arduino/building-blocks/nezhaa-inventors-kit/images/neza-a-step-11-16.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/arduino/building-blocks/nezhaa-inventors-kit/images/neza-a-step-11-17.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/arduino/building-blocks/nezhaa-inventors-kit/images/neza-a-step-11-18.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/arduino/building-blocks/nezhaa-inventors-kit/images/neza-a-step-11-19.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/arduino/building-blocks/nezhaa-inventors-kit/images/neza-a-step-11-20.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/arduino/building-blocks/nezhaa-inventors-kit/images/neza-a-step-11-21.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/arduino/building-blocks/nezhaa-inventors-kit/images/neza-a-step-11-22.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/arduino/building-blocks/nezhaa-inventors-kit/images/neza-a-step-11-23.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/arduino/building-blocks/nezhaa-inventors-kit/images/neza-a-step-11-24.png)
## 硬件连接图
将[电机](https://www.elecfreaks.com/geekservo-motor-2kg-compatible-with-lego.html)连接到[哪吒A主控盒](https://www.elecfreaks.com/arduino-3-in-1-master-control-box.html)的M1端口，将[两颗按钮](https://www.elecfreaks.com/planetx-button.html)安装在[哪吒A主控盒](https://www.elecfreaks.com/arduino-3-in-1-master-control-box.html)的J1端口。
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/arduino/building-blocks/nezhaa-inventors-kit/images/neza-a-case-10-03.png)
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
    nezhaA.setMotorSpeed(M1, 100);   //设置M1端口的电机速度为50%
  }
  if (buttonJ1.isPressed(D)) {    //当检测到按键D被按下时
    nezhaA.brakeMotor(M1);
  }
}
```

### 结果
开启电源后，按下C按钮后，风扇开始转动，按下D按钮后，风扇停止转动。

