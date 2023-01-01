# 手持机械爪
## 目的
使用[哪吒A36合1Arduino套装](https://www.elecfreaks.com/elecfreaks-nezha-a-inventor-s-kit-for-arduino.html)制作手持机械爪。
![](./images/neza-a-case-12-01.png)
## 购买链接
[哪吒A36合1Arduino套装](https://www.elecfreaks.com/elecfreaks-nezha-a-inventor-s-kit-for-arduino.html)
## 所需材料
![](./images/neza-a-case-12-02.png)
## 搭建步骤
![](./images/neza-a-step-12-01.png)
![](./images/neza-a-step-12-02.png)
![](./images/neza-a-step-12-03.png)
![](./images/neza-a-step-12-04.png)
![](./images/neza-a-step-12-05.png)
![](./images/neza-a-step-12-06.png)
![](./images/neza-a-step-12-07.png)
![](./images/neza-a-step-12-08.png)
![](./images/neza-a-step-12-09.png)
![](./images/neza-a-step-12-10.png)
![](./images/neza-a-step-12-11.png)
![](./images/neza-a-step-12-12.png)
![](./images/neza-a-step-12-13.png)
![](./images/neza-a-step-12-14.png)
![](./images/neza-a-step-12-15.png)
![](./images/neza-a-step-12-16.png)
![](./images/neza-a-step-12-17.png)
![](./images/neza-a-step-12-18.png)
![](./images/neza-a-step-12-19.png)
![](./images/neza-a-step-12-20.png)
![](./images/neza-a-step-12-21.png)
![](./images/neza-a-step-12-22.png)
![](./images/neza-a-step-12-23.png)
![](./images/neza-a-step-12-24.png)
![](./images/neza-a-step-12-25.png)
![](./images/neza-a-step-12-26.png)
![](./images/neza-a-step-12-27.png)
![](./images/neza-a-step-12-28.png)
![](./images/neza-a-step-12-29.png)
![](./images/neza-a-step-12-30.png)
## 硬件连接图
将[电机](https://www.elecfreaks.com/geekservo-motor-2kg-compatible-with-lego.html)连接到[哪吒A主控盒](https://www.elecfreaks.com/arduino-3-in-1-master-control-box.html)的M1端口，将[两颗按钮](https://www.elecfreaks.com/planetx-button.html)安装在[哪吒A主控盒](https://www.elecfreaks.com/arduino-3-in-1-master-control-box.html)盒的J1端口。
![](./images/neza-a-case-12-03.png)
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
int flag;    //创建变量flag用于记录机械爪的状态

void setup() {
  nezhaA.begin();    //初始化蜂鸣器、电机、舵机、灯光
}

void loop() {
  if ((buttonJ1.isPressed(C)) && (flag == 0)) {    //当检测到按键C被按下且flag等于0时
    nezhaA.setMotorSpeed(M1, 100);   //设置M1端口的电机速度为100%
    delay((1) * 1000);    //延时2000ms
    nezhaA.brakeMotor(M1);    //设置M1端口的电机停止转动
    flag = 1;    //设置flag等于1，标识机械爪为松开的状态
  }
  if ((buttonJ1.isPressed(D)) && (flag == 1)) {    //当检测到按键D被按下时
    nezhaA.setMotorSpeed(M1, -100);   //设置M1端口的电机速度为-100%
    delay((1) * 1000);    //延时2000ms
    nezhaA.brakeMotor(M1);    //设置M1端口的电机停止转动
    flag = 0;    //设置flag等于0，标识机械爪为抓取物品的状态
  }
}
```

### 结果
先调整机械爪到适合抓取物品的位置，开启电源后，按下C按钮后，机械爪松开物品，按下D按钮后，机械爪抓住物品。
