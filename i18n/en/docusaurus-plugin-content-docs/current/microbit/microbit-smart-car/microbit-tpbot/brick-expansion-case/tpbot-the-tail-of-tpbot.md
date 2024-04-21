---
sidebar_position: 12
sidebar_label: TPbot Tail
---

# The Tail of the TPBot

## Purpose

搭To build a TPBot with a tail.


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-case-12-01.png)

## Materials Requested


[TPBot Smart Car](https://www.elecfreaks.com/tpbot.html)

[360 degrees servo](https://www.elecfreaks.com/geekservo-2kg-360-degrees-compatible-with-lego.html)

Bricks Pack



## Assembly Steps

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-12-01.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-12-02.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-12-03.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-12-04.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-12-05.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-12-06.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-12-07.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-12-08.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-12-09.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-12-10.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-12-11.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-12-12.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-12-13.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-12-14.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-12-15.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-12-16.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-12-17.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-12-18.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-12-19.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-12-20.png)

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


## Samples program

While `on start`, set to show an icon and while pressing button A, make the cart drive forward and while pressing button B, make the cart stops driving; in `forever` block, set the servo to drive to 200 degrees, pause for 200ms, set the servo to drive to 160 degress and pause another 200ms.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-case-12-05.png)


### Program

Reference program: [https://makecode.microbit.org/_HzrR61h65b94](https://makecode.microbit.org/_HzrR61h65b94)

You may download it directly here:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_HzrR61h65b94"
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


The TPBot starts shaking the tail after powering on, while pressing button A, TPBot drives forward and press button B to stop it.
