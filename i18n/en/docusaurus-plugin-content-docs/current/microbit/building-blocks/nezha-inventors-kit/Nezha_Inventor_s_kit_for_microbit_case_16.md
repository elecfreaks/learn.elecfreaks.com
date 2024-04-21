# Case 16: Memory Test

## Introduction

This is a memory testing device. The red and green lights on the device will light up randomly. After all the light instructions are displayed, you need to press the corresponding buttons according to the order of the lights, (A stands for red, B stands for green) , If in the correct order, the micro:bit displays "√", otherwise the micro:bit displays a sad face.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_16_01.png)

## Quick to Start

### Materials

Nezha expansion board × 1

micro:bit × 1

LED-red  × 1

LED-green  × 1

RJ11 wires × 2

Bricks × n

***Tips: You may need to purchase [Nezha Inventor's Kit](https://www.elecfreaks.com/nezha-inventor-s-kit-for-micro-bit-without-micro-bit-board.html) if you want all the above compoents.***

### Connection Diagram

Connect the green LED to J1 port and red LED to J2 port on the Nezha expansion board as the picture shows.


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_16_03.png)


### Assembly Video

Video link:[https://youtu.be/ie4sO5qNvfM](https://youtu.be/ie4sO5qNvfM)

<iframe width="560" height="315" src="https://www.youtube.com/embed/ie4sO5qNvfM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Assembly Steps

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_step_16_01.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_step_16_02.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_step_16_03.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_step_16_04.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_step_16_05.png)




## MakeCode Programming



### Step 1


Click "Advanced" in the MakeCode drawer to see more choices.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_01_10.png)

We need to add a package for programming. Click "Extensions" in the bottom of the drawer and search with "PlanetX" in the dialogue box to download it.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_01_11.png)



***Note:*** If you met a tip indicating that the codebase will be deleted due to incompatibility, you may continue as the tips say or build a new project in the menu.

### Step 2



### Programme as the picture shows:

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_16_15.png)


### Link
Link: [https://makecode.microbit.org/_RXyWcdDkYWm3](https://makecode.microbit.org/_RXyWcdDkYWm3)

You may also downoad it directly below:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_RXyWcdDkYWm3"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>


### Result
The red and green LEDs light on at random, press button A while the red lights on; press button B while the green lights on, if you press them at the right sequence(A for red and B for green ), the micro:bit display a "√" or it displays a sad face.


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case-gif-16.gif)
