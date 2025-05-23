﻿# case 11 DC motor

## Introduction ##

 The servo is a device that can transfer electric energy to kinetic energy based on a law of electromagnetic induction. In this case, we will use a switch to turn the motor on and off.

## Products Link

[ELECFREAKS Experiment Box Kit](https://shop.elecfreaks.com/products/elecfreaks-experiment-box-kit-without-micro-bit-board?_pos=1&_sid=ac099db2f&_ss=r)

## Hardware Connect ##

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/circuit-design/microbit-experiment-box-kit/images/rKbr0NQ.png)

 Connect circuit as above picture and put 2 AAA batteries into batteries pack.

## Principles of Circuits ##

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/circuit-design/microbit-experiment-box-kit/images/cBDx8Qv.png)

 The GND of slot on micro:bit is into innards of batteries' GND to generate the current loop.

## Introduction of Components ##

### DC Motor
 There are many categories of motors, but a motor basically transforms electric energy into kinetic energy according to the rule of electromagnetic induction. When the direct voltage was added on the two sides of the motor, the motor turns. The higher the voltage, the faster the rotation.
 The experiment box included a DC motor, and it connects a fan to show rotation.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/circuit-design/microbit-experiment-box-kit/images/case-13-4.png)

***Note:*** Please note the positive and the negative when you are connecting.

## Software

### Step 1

 Click [makecode https://makecode.microbit.org/#](https://makecode.microbit.org/#)。

 Click on "New Project" and set a new Project.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/circuit-design/microbit-experiment-box-kit/images/t34k5Zb.png)


### Step 2

 Under the on start block, Wirte 0 to the P0 port to prevent motor from mis operated. Set pull pin P1 to up for waiting button signal.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/circuit-design/microbit-experiment-box-kit/images/hHQ0Ayz.png)

### Step 3

 Judge the value of P1 if it is equal to 0. If it is, write 1 to the P0 port for starting the servo; If it is not, write 0 to the P0 port to stopping the servo.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/circuit-design/microbit-experiment-box-kit/images/3UfQLdB.png)


### Program

 Program link：[https://makecode.microbit.org/_Y94cmyMePXsh](https://makecode.microbit.org/_Y94cmyMePXsh)

 You also could directly download program by visiting website as below:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_Y94cmyMePXsh"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>


## Result

  Press switch, the motor runs; press it again, the motor stops.


## Think

 How can we use the trimpot to control the speed of the motor?

## Questions



## More Information
