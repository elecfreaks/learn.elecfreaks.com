---
sidebar_position: 11
sidebar_label: TPbot Tail Wing
---

# TPbot Tail Wing

## Purpose

To build a TPBot with a tail wing.


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-case-11-01.png)

## Materials Requested


[TPBot Smart Car](https://www.elecfreaks.com/tpbot.html)

[360 degrees servo](https://www.elecfreaks.com/geekservo-2kg-360-degrees-compatible-with-lego.html)

Bricks Pack



## Assembly Steps

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-11-01.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-11-02.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-11-03.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-11-04.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-11-05.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-11-06.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-11-07.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-11-08.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-11-09.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-11-10.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-11-11.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-11-12.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-11-13.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-11-14.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-11-15.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-11-16.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-step-11-17.png)

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

While `on start`, set to show an icon and while pressing button A,  make the TPBot drive at full speed and the servo connecting to S1 drive to 120 degrees, then pause for 2000ms and stop the car, set the servo connecting with S1 to ratote to 90 degrees.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/tpbot-brick-expansion-case-11-05.png)


### Program

Reference program: [https://makecode.microbit.org/_2x8LaCRwXaz6](https://makecode.microbit.org/_2x8LaCRwXaz6)

You may download it directly here:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_2x8LaCRwXaz6"
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

While pressing button A, the cart moves forward and the tail wing raises up, after two seconds, the cart stops moving the the wing lies down.
