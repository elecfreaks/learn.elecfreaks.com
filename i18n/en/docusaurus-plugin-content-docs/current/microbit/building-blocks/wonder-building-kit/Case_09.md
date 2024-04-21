# Case 09: Automatic Doors

## Purpose
---
To make an automatic door.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case-09-01.png)

## Link:
---
[micro:bit Wonder Building Kit](https://www.elecfreaks.com/micro-bit-wonder-building-kit-without-micro-bit-board.html)

## Materials Required
---
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case-09-02.png)

Video link:
[https://youtu.be/JimDF7ArSjQ](https://youtu.be/JimDF7ArSjQ)


## Bricks build-up
---


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/step-case-09-01.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/step-case-09-02.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/step-case-09-03.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/step-case-09-04.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/step-case-09-05.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/step-case-09-06.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/step-case-09-07.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/step-case-09-08.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/step-case-09-09.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/step-case-09-10.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/step-case-09-11.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/step-case-09-12.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/step-case-09-13.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/step-case-09-14.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/step-case-09-15.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/step-case-09-16.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/step-case-09-17.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/step-case-09-18.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/step-case-09-19.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/step-case-09-20.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/step-case-09-21.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/step-case-09-22.png)

## Installation Mthods of Hardwares

Install the sonar:bit with the bricks.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/Wonder-Building-Kit-step-sonar-bit-3.png)

## Hardware Connection

Connect a [sonar:bit](https://www.elecfreaks.com/sonar-bit-for-micro-bit-ultrasonic-sensor-distance-measuring-3v-5v.html) to P1 and the [servo](https://www.elecfreaks.com/geekservo-2kg-360-degrees-compatible-with-lego.html) to S0 port on [Wukong breakout board](https://www.elecfreaks.com/wukong-board-with-lego-holder-for-micro-bit.html).

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/Wonder-Building-Kit-case-09-06.png)

## Software Platform
---
[MakeCode](https://makecode.microbit.org/)

## Coding
---
### Add extensions
Click "Advanced" in the MakeCode to see more choices.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case-01-03.png)

Search with Wukong in the dialogue box to download it.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case-01-04.png)

 Search with https://github.com/elecfreaks/pxt-sonarbit in the dialogue box to add the sonar:bit extension.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case-04-04.png)



### Program

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case-09-03.png)

Link:[https://makecode.microbit.org/_eUPf4XEudVKY](https://makecode.microbit.org/_eUPf4XEudVKY)

### Result

When the ultrasonic sensor detects someone passing by, it will display √ on the micro:bit and control the servo to open the door and close it automatically after 5 seconds, if the ultrasonic sensor does not detect anyone, it will keep displaying × on the micro:bit and the door is closed.
