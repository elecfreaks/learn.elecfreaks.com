# 机械爬虫
## 目的
使用[哪吒A36合1Arduino套装](https://www.elecfreaks.com/elecfreaks-nezha-a-inventor-s-kit-for-arduino.html)制作机械爬虫。
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-case-10-01.png)
## 购买链接
[哪吒A36合1Arduino套装](https://www.elecfreaks.com/elecfreaks-nezha-a-inventor-s-kit-for-arduino.html)

## 所需材料
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-case-10-02.png)
## 搭建步骤
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-10-01.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-10-02.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-10-03.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-10-04.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-10-05.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-10-06.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-10-07.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-10-08.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-10-09.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-10-10.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-10-11.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-10-12.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-10-13.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-10-14.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-10-15.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-10-16.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-10-17.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-10-18.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-10-19.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-10-20.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-10-21.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-10-22.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-10-23.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-10-24.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-10-25.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-10-26.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-10-27.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-10-28.png)
## 硬件连接图
将[电机](https://www.elecfreaks.com/geekservo-motor-2kg-compatible-with-lego.html)连接到[哪吒A主控盒](https://www.elecfreaks.com/arduino-3-in-1-master-control-box.html)的M1端口。
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-case-09-03.png)
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
开启电源后，机械爬虫开始向前爬行。
