# Case 11: A Simple Fan

## Purpose
---
Make a fan with [NezhaA Inventor's Kit](https://shop.elecfreaks.com/products/elecfreaks-arduino-36-in-1-nezha-a-inventors-kit?_pos=2&_sid=e1dfa3343&_ss=r).

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-case-11-01.png)

## Purchse
---
 [NezhaA Inventor's Kit](https://shop.elecfreaks.com/products/elecfreaks-arduino-36-in-1-nezha-a-inventors-kit?_pos=2&_sid=e1dfa3343&_ss=r)

## Materials Required
---
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-case-11-02.png)

## Assembly Steps
---
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-11-01.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-11-02.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-11-03.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-11-04.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-11-05.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-11-06.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-11-07.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-11-08.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-11-09.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-11-10.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-11-11.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-11-12.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-11-13.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-11-14.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-11-15.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-11-16.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-11-17.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-11-18.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-11-19.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-11-20.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-11-21.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-11-22.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-11-23.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-step-11-24.png)

## Hardware Connection
---
Connect the [motor](https://www.elecfreaks.com/geekservo-motor-2kg-compatible-with-lego.html) to M1 and the [two buttons](https://www.elecfreaks.com/planetx-button.html) to J1 port on [Nezha-A master box](https://www.elecfreaks.com/arduino-3-in-1-master-control-box.html). ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-a-case-10-03.png)



## Programming
---
### Prepare the programming

Steps for preparation please refer to: [Arduino 3 in 1 Breakout Board](https://www.elecfreaks.com/learn-en/Arduino-3-in-1-box/Arduino-3-in-1-box.html)

Import the libraries and the subsidiary libraries of [Nezha-A master box](https://www.elecfreaks.com/arduino-3-in-1-master-control-box.html) and then import the libraries of the [two buttons](https://www.elecfreaks.com/planetx-button.html):[PlanetXButton-main.zip](https://github.com/elecfreaks/PlanetXButton/archive/refs/heads/main.zip)
Download and import the self-defined library connections for [Nezha-A master box](https://www.elecfreaks.com/arduino-3-in-1-master-control-box.html): [RJPins-main.zip](https://github.com/elecfreaks/RJPins/archive/refs/heads/main.zip) 

### Sample Code:
```
// Language ArduinoC
#include <RJPins.h>
#include <NezhaA.h>
#include <PlanetXButton.h>

PlanetXButton buttonJ1(J1);    //Create an instance of PlanetXButton category
NezhaA nezhaA;    //Create an instance of NezhaA category

void setup() {
  nezhaA.begin();    //Initiliaze the buzzer, motor, servo and light
}

void loop() {
  if (buttonJ1.isPressed(C)) {    //While button C is pressed
    nezhaA.setMotorSpeed(M1, 100);   //Set the speed of the motor connecting to M1 at 50%
  }
  if (buttonJ1.isPressed(D)) {    //While button D is pressed
    nezhaA.brakeMotor(M1);
  }
}
```

### Result
After powering on, press button C to drive the motor and press button D to stop driving. 
