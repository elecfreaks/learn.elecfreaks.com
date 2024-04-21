# Case 10: The Mechanical Crawler

## Purpose
---
Make a mechanical crawler with [NezhaA Inventor's Kit](https://shop.elecfreaks.com/products/elecfreaks-arduino-36-in-1-nezha-a-inventors-kit?_pos=2&_sid=e1dfa3343&_ss=r).

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-case-10-01.png)

## Purchse
---
 [NezhaA Inventor's Kit](https://shop.elecfreaks.com/products/elecfreaks-arduino-36-in-1-nezha-a-inventors-kit?_pos=2&_sid=e1dfa3343&_ss=r)

## Materials Required
---
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-case-10-02.png)

## Assembly Steps
---
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

## Hardware Connections
---
Connect the [motor](https://www.elecfreaks.com/geekservo-motor-2kg-compatible-with-lego.html) to M1 port on [Nezha-A master box](https://www.elecfreaks.com/arduino-3-in-1-master-control-box.html). 

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-case-09-03.png)

## Programming
---
### Prepare the programming

Steps for preparation please refer to: [Arduino 3 in 1 Breakout Board](https://www.elecfreaks.com/learn-en/Arduino-3-in-1-box/Arduino-3-in-1-box.html).

### Sample Code: 

```
// Language ArduinoC
#include <NezhaA.h>

NezhaA nezhaA;    //Create an instance of Nezha category

void setup() {
  nezhaA.begin();    //Initiliaze the buzzer, motor, servo and light
  nezhaA.setMotorSpeed(M1, 100);    //Set the speed of the motor connecting to M1 at 100%
}

void loop() {

}

```
### Result
After powering on, it crawls forward. 
