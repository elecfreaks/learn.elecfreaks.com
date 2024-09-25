---
sidebar_position: 2
sidebar_label: Meet the Cutebot Car
---

# Meet the Cutebot Car

## Lesson Description

In this lesson, we will have a brief look at what the cutebot car has to offer, and learn how to program the cutebot car through a simple case study.

## Lesson Preparation

| **Picture** | **Name** | **Number** | **Notes** |
| --- | --- | --- | --- |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/cutebot.png)  | cutebot | 1 | |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/battery.png) | AAA battery | 3 | Prepare Yourself |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/USB-data-cable.png) | USB Cable | 1 |   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit.png) | micro:bit | 1 | Prepare Yourself |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/pc.png) | PC | 1 | Prepare Yourself |

## cutebot introduction

---

ELECFREAKS Cutebot is a rear-wheel drive smart racing car with dual high-speed motor motors.

Cutebot is equipped with many on-board devices at the same time, including ultrasonic navigation distance sensor, two RGBLED headlights, two Rainbow LED underbody outline lights, and two lane-assisted patrol probes.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/images/cutebot_01_01.jpg)


## Function module description

The car is equipped with an ultrasonic interface and a micro: bit IIC interface in front of it

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/images/cutebot_01_02.jpg)


Two RGB full-color LED headlights are equipped on each side of the front, which are controlled through an expansion board and do not occupy the number of micro: bit IO ports.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/images/cutebot_01_03.jpg)

There are three AA battery pack expansion boards installed directly above, which are used to drive the entire car.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/images/cutebot_01_04.jpg)

The expansion board of the battery pack also includes S1 and S2 servo interfaces, as well as P1 and P2 IO interfaces.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/images/cutebot_01_05.jpg)

The rear of the car is equipped with an infrared receiver head (under the battery box), which is connected to the P16 interface of the micro: bit.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/images/cutebot_01_06.jpg)

The car is equipped with an IIC interface for connecting AI cameras.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/images/cutebot_01_12.jpg)

Next to the rear infrared receiver is the main power switch of the car, and there is also an LED light indicating the status of the switch.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/images/cutebot_01_07.jpg)

On both sides are two miniature high-speed DC gear reduction motors driving the wheels, with a speed of up to 300 revolutions per minute, enjoying a flying speed.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/images/cutebot_01_08.jpg)

There are two line inspection heads at the front of the bottom of the car, used to detect black lines and edges, connected to the P13 and P14 interfaces of the micro: bit.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/images/cutebot_01_09.jpg)

A metal universal wheel is installed at the front of the bottom of the car, and the car travels 360 degrees in all directions using the speed difference between the left and right wheels.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/images/cutebot_01_10.jpg)

Two Rainbow LED full-color light beads are mounted on the bottom two side edges, connected to the P15 port of the micro:bit motherboard, and need to use the expansion `Neopixel` to drive the use of it, which can be used as a small car outline light or other functions.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/images/cutebot_01_11.jpg)

## Quick start

### Preparation

Plug the battery pack's power cord into the cutebot.![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/Installing-battery-01.png)

Stick 3M double-sided tape onto the battery box.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/Installing-battery-02.png)

Stick the battery box onto the Cutebot smart racing car.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/Installing-battery-03.png)

### Programming platforms

We usually use [graphical programming platform makecode](https://makecode.microbit.org/) to program the micro:bit.

Programming platform entry: [https://makecode.microbit.org/](https://makecode.microbit.org/)

### Create a new project

Open [https://makecode.microbit.org/

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode.png)

New project

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode-new-project-01.png)

Enter the project name and click Create.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode-new-project-02.png)

After entering the editor interface, we can see Micro: bit Simulator, Toolbox，Workspace.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode-new-project-03.png)



### Add software library

Click on "Extensions" in the Toolbox of the makecode programming interface.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/add-extensions-1.png)

Search for `cutbot` on the pop-up page and click to select the cutbot repository.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/add-extensions-2.png)



### Software Blocks Explanation

| Block | Founction | Parameter |
| ------ | ----- | -------- |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/cutebot-block-notes-01.png) | Set the speed of the left or right wheel of the car | Parameter 1: Value<br/>Value range: -100~100<br/>Parameter 2: Value<br/>Value range: -100~100 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/cutebot-block-notes-02.png) | Set the car to run at a fixed speed in a certain direction for a specified time | Parameter 1: Drop down options<br/>Available options: Forward, Backward, Left, Right<br/>Parameter 2: Integer<br/>Value range is -100~100<br/>Parameter 3: Natural numbers |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/cutebot-block-notes-03.png) | Set the car to move forward at full speed |  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/cutebot-block-notes-04.png) | Set the car to move backwards at full speed |  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/cutebot-block-notes-05.png) | Set the car to turn left at full speed |  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/cutebot-block-notes-06.png) | Set the car to turn right at full speed |  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/cutebot-block-notes-07.png) | 设置小车立刻停车 |  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/cutebot-block-notes-08.png) | Set the car to stop immediately | Parameter 1: dropdown options<br/>optional: right RGB, left RGB, all<br/>Parameter 2: dropdown options<br/>options：![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/cutebot-block-notes-08-01.png) |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/cutebot-block-notes-09.png) | Set the color of the car headlights in RGB mode | Parameter 1: dropdown options<br/>optional: right RGB, left RGB, all<br/>Parameter 2: natural numbers<br/>numerical range: 0~255<br/>Parameter 3: natural numbers<br/>numerical range: 0~255<br/>Parameter 4: natural numbers<br/>numerical range: 0~255<br/> |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/cutebot-block-notes-10.png) | Turn off the car headlights |  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/cutebot-block-notes-11.png) | Determine the status of two line patrol sensors | Parameter 1: Drop down options<br/>Available options: Black Black, White Black, Black White, White White |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/cutebot-block-notes-12.png) | Determine the status of two line patrol sensors separately | Parameter 1: dropdown options<br/>optional: left, right<br/>Parameter 2: dropdown options<br/>optional: found, lost |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/cutebot-block-notes-13.png) | When the patrol head of the car detects the corresponding status, execute the internal program | Parameter 1: dropdown options<br/>optional: left, right<br/>Parameter 2: dropdown options<br/>optional: found, lost |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/cutebot-block-notes-14.png) | Detect the distance of obstacles in front of the car | Parameter 1: Drop down options<br/>Available options: centimeters, inches |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/cutebot-block-notes-15.png) | Set the 180 ° servo connected to the specified interface to rotate to the specified angle | Parameter 1: Drop down options<br/>Available options: S1, S2<br/>Parameter 2: Natural numbers<br/>Value range: 0~180 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/cutebot-block-notes-16.png) | When receiving infrared signals, execute internal programs |  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/cutebot-block-notes-17.png) | Determine the received infrared signal information | Parameter 1: Drop down options<br/>Available options: Menu Up、Left、Right、Down、OK、Plus、Minus、Back、0、1、2、3、4、5、6、7、8、9 |

### Software Building Blocks Introduction and Examples

#### Sets the speed of the left or right wheel of the cart.



Sample Programs:[https://makecode.microbit.org/_bV3cyW8JDPp7](https://makecode.microbit.org/_bV3cyW8JDPp7)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit-cutebot-block-01.png)

You can also download the program directly from the following webpage.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_bV3cyW8JDPp7"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

### How to download programs to micro: bit?

Connect the PC and micro: bit V2 using a USB cable.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/connect-microbit.gif)

After a successful connection, a disk drive named `MICROBIT` will be recognized on the computer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-drive.png)

Click on the bottom left corner of the![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-01.png)，and select `Connect Device`.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-02.png)

Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-03.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-04.png)

Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-05.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-06.png)


Select `BBC micro:bit CMSIS-DAP` in the pop-up window and then select Connect, and at this point, our micro:bit has connected successfully.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-07.png)

Click to download the program.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-08.png)

### Result

Pressing key A of micro:bit moves the cart forward at 100%.

#### sets the cart to run at a fixed speed in a certain direction for a specified time.

Sample Program:[https://makecode.microbit.org/_6sc5d0ij3WL9](https://makecode.microbit.org/_6sc5d0ij3WL9)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit-cutebot-block-02.png)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_6sc5d0ij3WL9"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>
*** Result: After pressing button A, the cart travels forward at 50% for 5 seconds and then stops. ***

#### Set the cart to move forward at full speed.

Sample Program :[https://makecode.microbit.org/_eup6qgbb2gYz](https://makecode.microbit.org/_eup6qgbb2gYz)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit-cutebot-block-03.png)

You can also download the program directly from the following web.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_eup6qgbb2gYz"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>
*** RESULT: The trolley moves at full speed when button A is pressed. ***

#### Set the cart to go backward at full speed.

Sample program :[https://makecode.microbit.org/_acjeice30TKp](https://makecode.microbit.org/_acjeice30TKp)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit-cutebot-block-04.png)

You can also download the program directly from the following web.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_acjeice30TKp"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>
*** RESULT: When button A is pressed, the trolley goes backward at full speed. ***

#### Set the cart to turn left at full speed.

Sample program :[https://makecode.microbit.org/_0PfPA7f83Rmo](https://makecode.microbit.org/_0PfPA7f83Rmo)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit-cutebot-block-05.png)

You can also download the program directly from the following web.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_0PfPA7f83Rmo"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>
*** RESULT: After pressing key A, the trolley turns to the left. ***

#### Set the cart to turn right at full speed.

Sample program :[https://makecode.microbit.org/_Pz2ebkPvH8p1](https://makecode.microbit.org/_Pz2ebkPvH8p1)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit-cutebot-block-06.png)

You can also download the program directly from the following web.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_Pz2ebkPvH8p1"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>
*** RESULT: The trolley turns to the right when button A is pressed. ***

#### Set the cart to stop immediately.

Sample program :[https://makecode.microbit.org/_XDDPKvarbfrK](https://makecode.microbit.org/_XDDPKvarbfrK)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit-cutebot-block-07.png)

You can also download the program directly from the following web.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_XDDPKvarbfrK"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>
*** Result: After pressing button A, the cart travels forward at full speed for 5 seconds and then stops. ***

#### Set the headlight of the cart to the preset color.

Sample program :[https://makecode.microbit.org/_FxxXC2e6LTHF](https://makecode.microbit.org/_FxxXC2e6LTHF)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit-cutebot-block-08.png)

You can also download the program directly from the following web.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_FxxXC2e6LTHF"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>
*** RESULT: When button A is pressed, the trolley LED headlight shows red. ***

#### Set the cart headlight color in RGB mode.

Sample program :[https://makecode.microbit.org/_DJTUyJiesU9q](https://makecode.microbit.org/_DJTUyJiesU9q)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit-cutebot-block-09.png)

You can also download the program directly from the following web.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_DJTUyJiesU9q"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>
*** Result: The LED headlight of the trolley shows green when button A is pressed. ***

#### Turn off the cart headlight.

Sample Program :[https://makecode.microbit.org/_ersCDADdWWV4](https://makecode.microbit.org/_ersCDADdWWV4)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit-cutebot-block-10.png)

You can also download the program directly from the following web.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_ersCDADdWWV4"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>
*** Result: When the power is turned on, the trolley headlight shows blue light, and when key A is pressed, the trolley LED headlight goes out. ***


#### Determine the status of the two roving sensors.

Sample program :[https://makecode.microbit.org/_8dbgTr2ku0Ko](https://makecode.microbit.org/_8dbgTr2ku0Ko)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit-cutebot-block-11.png)

You can also download the program directly from the following web.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_8dbgTr2ku0Ko"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>
*** RESULTS: After turning on the power, the micro:bit displays a heart icon when both of the cart's roving heads detect a black area, and the micro:bit displays a smiley face icon when both of the cart's roving heads detect a white area. ***

#### Judge the status of the two rover sensors respectively.

Sample Program :[https://makecode.microbit.org/_PwmF7fP6agxC](https://makecode.microbit.org/_PwmF7fP6agxC)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit-cutebot-block-12.png)

You can also download the program directly from the following web.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_PwmF7fP6agxC"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>
*** RESULTS: After power on, the micro:bit displays a heart icon when all black lines are detected on the left side of the trolley's roving head, and a smiley face icon when all black lines are detected on the right side of the trolley's roving head. ***


#### Execute the internal program when the wire patrol head of the cart detects the corresponding state.

Example program:[https://makecode.microbit.org/_cpLdyi79t9pb](https://makecode.microbit.org/_cpLdyi79t9pb)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit-cutebot-block-13.png)

You can also download the program directly from the following web.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_cpLdyi79t9pb"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>
*** Result: after power on, micro:bit displays the love heart icon when all the black lines are detected by the patrol head on the left side of the cart ***

#### Detect the distance of obstacles in front of the cart.

Example program:[https://makecode.microbit.org/_czUc7rFp4Eu2](https://makecode.microbit.org/_czUc7rFp4Eu2)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit-cutebot-block-14.png)

You can also download the program directly from the following web.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_czUc7rFp4Eu2"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>
*** Result: micro:bit displays the distance between the obstacle in front of the trolley and the trolley when the power is turned on ***

#### Set the 180° servo connected to the specified interface to rotate to the specified angle.

Sample Program:[https://makecode.microbit.org/_99PFCsWEFbTR](https://makecode.microbit.org/_99PFCsWEFbTR)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit-cutebot-block-15.png)

You can also download the program directly from the following web.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_99PFCsWEFbTR"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>
*** Result: Control the rotation angle of the servo connected to S1 by means of the A and B buttons. ***


#### Execute internal program when IR signal is received.

*** Note: This case needs to be tested with an IR remote controller. ***

Example program :[https://makecode.microbit.org/_LV7E45CaML5t](https://makecode.microbit.org/_LV7E45CaML5t)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit-cutebot-block-16.png)

You can also download the program directly from the following web.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_LV7E45CaML5t"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>
*** Result: When an infrared signal is received, the heart icon is displayed. ***

#### Judge the information of received IR signal.

*** Note: This case needs to be tested with an infrared remote controller. ***

Example program :[https://makecode.microbit.org/_7hm0LUXxAYjR](https://makecode.microbit.org/_7hm0LUXxAYjR)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit-cutebot-block-17.png)

You can also download the program directly from the following web.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_7hm0LUXxAYjR"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>
*** Result: A smiley face icon is displayed when an infrared signal is received that the Menu has been pressed. ***



For more examples of cutebot, please check out the：[https://wiki.elecfreaks.com/en/microbit/microbit-smart-car/microbit-smart-cutebot/](https://wiki.elecfreaks.com/en/microbit/microbit-smart-car/microbit-smart-cutebot/)
