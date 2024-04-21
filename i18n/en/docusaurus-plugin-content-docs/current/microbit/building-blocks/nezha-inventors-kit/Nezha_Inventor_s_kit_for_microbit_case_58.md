# Case 58: Smart Washing Machine

## Introduction

With the improvement of people's living standards and the upgrading of household appliances technology, we rely more and more on the washing machine for this chore, so we learn to make a smart washing machine in this lesson, and we can press different buttons to select different functions, let's start.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/58_1.jpg)

### Materials Required

Nezha expansion board × 1

micro:bit V2 × 1

RJ11 cable × 1

Bricks × n

**Note: If you want all of the above components, you may purchase the [Nezha 48 IN 1 Inventor's Kit](https://www.elecfreaks.com/nezha-inventor-s-kit-for-micro-bit-without-micro-bit-board.html)**.



### Assembly Steps

Component Details

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/58_2.jpg)

Build it as the assembly steps suggest:

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/58_3.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/58_4.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/58_5.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/58_6.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/58_7.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/58_8.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/58_9.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/58_10.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/58_11.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/58_12.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/58_13.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/58_14.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/58_15.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/58_16.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/58_17.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/58_18.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/58_19.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/58_20.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/58_21.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/58_22.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/58_23.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/58_24.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/58_25.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/58_26.jpg)

## Connection Diagram

Connect the four motors to the M1, M2.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/58_27.jpg)


##  MakeCode Programming

### Step 1

Click “Advanced” in the MakeCode drawer to see more choices.



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/49_10.png)



For programming the servo, we need to add a package. Click “Extensions” at the bottom of the drawer and search with “nezha” to download it.



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/49_11.png)



For programming the PIR sensor, we need to add a package. Search with “PlanetX” in the dialogue box and click to download it.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/49_12.png)



*Notice*: If you met a tip indicating that some codebases would be deleted due to incompatibility, you may continue as the tips say or create a new project in the menu.

### Reference

The program is shown below:

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/58_28.jpg)

Link: https://makecode.microbit.org/_fLAKpugFgdLW

You may also download it directly:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_5jUeetL6oKqi"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>


The remote control program is shown below:

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/58_29.jpg)

Link: https://makecode.microbit.org/_C6LAycMHibK1

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_C6LAycMHibK1"
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

As we can see, we use the remote control to control the speed of rotation of the turntable of the smart washing machine.
