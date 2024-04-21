---
sidebar_position: 1
sidebar_label: Obstacles Clearance Car
---

# Obstacles Clearance Car

## Purpose

To create an obstacle clerance TPBot car.


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-case-01-01.png)

## Materials Requested


[TPBot Smart Car](https://www.elecfreaks.com/tpbot.html)

[360 degrees servo](https://www.elecfreaks.com/geekservo-2kg-360-degrees-compatible-with-lego.html)

Bricks Pack



## Assembly Steps

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-01-01.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-01-02.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-01-03.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-01-04.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-01-05.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-01-06.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-01-07.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-01-08.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-01-09.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-01-10.png)



## Hardware Connections

Connect the 360° servo to servo 1 port on the TPBot.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-case-01-02.png)


## Software

[Microsoft makecode](https://makecode.microbit.org/#)


## Program



Click "Advanced" in the makecode drawer to see more choices.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-case-01-03.png)

For programming the TPBot, we need to add the extensions. Click "Extensions" at the bottom of the drawer and search with `tpbot` in the box, then download it.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-case-01-04.png)


## Samples

While `on start`, set to show an icon and make the car drive forward at the speed of 30%; in `forever` block, set the servo connecting with S1 to ratote to 180 degrees, then pause for 1000ms, set that servo to 0 degree, and pause 1000ms.
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-case-01-05.png)


### Program

Reference link: [https://makecode.microbit.org/_CAXezWdyX0Mm](https://makecode.microbit.org/_CAXezWdyX0Mm)

You may download it directly here:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_CAXezWdyX0Mm"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

## Conclusion


The cart moves forward and the servo continues rotating in different directions.
