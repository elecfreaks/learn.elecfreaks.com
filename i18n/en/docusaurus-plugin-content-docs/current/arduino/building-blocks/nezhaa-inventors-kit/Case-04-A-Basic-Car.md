# Case 04: A Basic Car

## Purpose
---
Make a basic car with [NezhaA Inventor's Kit](https://shop.elecfreaks.com/products/elecfreaks-arduino-36-in-1-nezha-a-inventors-kit?_pos=2&_sid=e1dfa3343&_ss=r).

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-case-04-01.png)

## Purchse
---
 [NezhaA Inventor's Kit](https://shop.elecfreaks.com/products/elecfreaks-arduino-36-in-1-nezha-a-inventors-kit?_pos=2&_sid=e1dfa3343&_ss=r)

## Materials Required
---
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-case-04-02.png)

## Assembly Steps
---
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-04-01.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-04-02.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-04-03.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-04-04.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-04-05.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-04-06.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-04-07.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-04-08.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-04-09.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-04-10.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-04-11.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-04-12.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-04-13.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-04-14.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-04-15.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-04-16.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-04-17.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-04-18.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-04-19.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-04-20.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-04-21.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-04-22.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-04-23.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-04-24.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-04-25.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-04-26.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-04-27.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-04-28.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-04-29.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-04-30.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-04-31.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-04-32.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-04-33.png)

## Hardware Connections
---
Connect two [motors](https://www.elecfreaks.com/geekservo-motor-2kg-compatible-with-lego.html) to M1 and M2 port on [Nezha-A master box](https://www.elecfreaks.com/arduino-3-in-1-master-control-box.html). ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-case-04-03.png)

## Programming
---
### Prepare the programming

Steps for preparation please refer to: [Arduino 3 in 1 Breakout Board](https://www.elecfreaks.com/learn-en/Arduino-3-in-1-box/Arduino-3-in-1-box.html)

### Sample Projects:
```
// Language ArduinoC
#include <NezhaA.h>

NezhaA nezhaA;    //Create an instance of NezhaA category

void setup() {
  nezhaA.begin();    //Initiliaze the buzzer, motor, servo and light
  nezhaA.setMotorSpeed(M1, 100);   //Set the speed of the motor connecting to M1 at 100%
  nezhaA.setMotorSpeed(M2, 30);   //Set the speed of the motor connecting to M2 at 30%
}

void loop() {
}
```
### Result
After powering on, the basic car drives with a curve routine. 

