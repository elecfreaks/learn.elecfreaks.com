# 积木发射器
## 目的
使用[哪吒A36合1Arduino套装](https://www.elecfreaks.com/elecfreaks-nezha-a-inventor-s-kit-for-arduino.html)制作积木发射器。
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-case-07-01.png)
## 购买链接
[哪吒A36合1Arduino套装](https://www.elecfreaks.com/elecfreaks-nezha-a-inventor-s-kit-for-arduino.html)

## 所需材料
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-case-07-02.png)
## 搭建步骤
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-07-01.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-07-02.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-07-03.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-07-04.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-07-05.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-07-06.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-07-07.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-07-08.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-07-09.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-07-10.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-07-11.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-07-12.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-07-13.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-07-14.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-07-15.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-07-16.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-07-17.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-07-18.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-07-19.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-07-20.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-07-21.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-07-22.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-07-23.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-07-24.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-07-25.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-07-26.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-07-27.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-07-28.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-07-29.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-07-30.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-07-31.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-07-32.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-07-33.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-07-34.png)
## 硬件连接图
将[电机](https://www.elecfreaks.com/geekservo-motor-2kg-compatible-with-lego.html)连接到哪吒A主控盒的M1端口，将[两颗按钮](https://www.elecfreaks.com/planetx-button.html)安装在哪吒A主控盒的J1端口。
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-case-07-03.png)
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
    nezhaA.setMotorSpeed(M1, 30);   //设置M1端口的电机速度为50%
    delay((0.5) * 1000);    //延时500ms
    nezhaA.brakeMotor(M1);    //设置M1端口的电机停止转动
  }
  if (buttonJ1.isPressed(D)) {    //当检测到按键D被按下时
    nezhaA.setMotorSpeed(M1, -100);
    delay((0.5) * 1000);
    nezhaA.brakeMotor(M1);
  }
}
```
### 结果
开启电源后，按下C按钮后，积木发射器收起击打杆，按下D按钮后，击打杆将积木击飞过去。

