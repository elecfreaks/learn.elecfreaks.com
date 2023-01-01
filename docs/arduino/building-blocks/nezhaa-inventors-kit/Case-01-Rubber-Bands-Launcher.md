# 皮筋发射器

## 目的

使用[哪吒A36合1Arduino套装](https://www.elecfreaks.com/elecfreaks-nezha-a-inventor-s-kit-for-arduino.html)制作皮筋发射器。
![](./images/neza-a-case-01-01.png)

## 购买链接

[哪吒A36合1Arduino套装](https://www.elecfreaks.com/elecfreaks-nezha-a-inventor-s-kit-for-arduino.html)

## 所需材料

![](./images/neza-a-case-01-02.png)

## 搭建步骤

![](./images/neza-a-step-01-01.png)
![](./images/neza-a-step-01-02.png)
![](./images/neza-a-step-01-03.png)
![](./images/neza-a-step-01-04.png)
![](./images/neza-a-step-01-05.png)
![](./images/neza-a-step-01-06.png)
![](./images/neza-a-step-01-07.png)
![](./images/neza-a-step-01-08.png)
![](./images/neza-a-step-01-09.png)
![](./images/neza-a-step-01-10.png)
![](./images/neza-a-step-01-11.png)
![](./images/neza-a-step-01-12.png)
![](./images/neza-a-step-01-13.png)
![](./images/neza-a-step-01-14.png)
![](./images/neza-a-step-01-15.png)
![](./images/neza-a-step-01-16.png)
![](./images/neza-a-step-01-17.png)
![](./images/neza-a-step-01-18.png)
![](./images/neza-a-step-01-19.png)
![](./images/neza-a-step-01-20.png)
![](./images/neza-a-step-01-21.png)
![](./images/neza-a-step-01-22.png)
![](./images/neza-a-step-01-23.png)
![](./images/neza-a-step-01-24.png)
![](./images/neza-a-step-01-25.png)
![](./images/neza-a-step-01-26.png)
![](./images/neza-a-step-01-27.png)
![](./images/neza-a-step-01-28.png)
![](./images/neza-a-step-01-29.png)
![](./images/neza-a-step-01-30.png)
![](./images/neza-a-step-01-31.png)
![](./images/neza-a-step-01-32.png)
![](./images/neza-a-step-01-33.png)
![](./images/neza-a-step-01-34.png)

搭建完成后，还需要安装橡皮筋：

![](./images/neza-a-case-01-03.gif)

## 硬件连接图

将[两颗按钮](https://www.elecfreaks.com/planetx-button.html)连接到[哪吒A主控盒](https://www.elecfreaks.com/arduino-3-in-1-master-control-box.html)的J1端口，将[舵机](https://www.elecfreaks.com/geekservo-2kg-360-degrees-compatible-with-lego.html)连接到[哪吒A主控盒](https://www.elecfreaks.com/arduino-3-in-1-master-control-box.html)的S1端口。
![](./images/neza-a-case-01-04.png)

## 编写程序

### 准备编程环境
编程环境准备步骤：请参考：[Arduino 3 in 1 Breakout Board](https://www.elecfreaks.com/learn-en/Arduino-3-in-1-box/Arduino-3-in-1-box.html)
下载并导入[哪吒A主控盒](https://www.elecfreaks.com/arduino-3-in-1-master-control-box.html)的库文件和依赖库文件后，还需要导入[两颗按钮](https://www.elecfreaks.com/planetx-button.html)模块的库文件：[PlanetXButton-main.zip](https://github.com/elecfreaks/PlanetXButton/archive/refs/heads/main.zip)
下载并导入[哪吒A主控盒](https://www.elecfreaks.com/arduino-3-in-1-master-control-box.html)的接口定义文件：[RJPins-main.zip](https://github.com/elecfreaks/RJPins/archive/refs/heads/main.zip)

### 示例程序：
```
#include <PlanetXButton.h>
#include <NezhaA.h>
#include <RJPins.h>

PlanetXButton buttonJ1(J1);    //创建一个PlanetXButton类的实例
NezhaA nezhaA;    //创建一个NezhaA类的实例

void setup() {
  nezhaA.begin();    //初始化蜂鸣器、电机、舵机、灯光
}

void loop() {
  if (buttonJ1.isPressed(C)) {    //当检测到按键C被按下时
    nezhaA.setServoAngle(S1, 190);    //设置S1端口的舵机角度为200度
  }
  if (buttonJ1.isPressed(D)) {
    nezhaA.setServoAngle(S1, 270);
  }
}
```

### 结果
通过按键控制皮筋发射器发射橡皮筋。
![](./images/neza-a-case-01-05.gif)
**注意：**控制发射的舵机角度需要根据具体使用的橡皮筋数量进行调整，使用过多的橡皮筋会导致拉力过大，损坏用于控制发射的舵机，建议用于发射的橡皮筋不超过三个。
