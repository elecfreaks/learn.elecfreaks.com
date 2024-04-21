# Case 75: The Magic Painter

## Introduction

In nature, we usually see many beautiful shapes with regular patterns, such as snowflakes, plum blossoms, beehives, etc. When we see these beautiful shapes, we will admire the charm of nature and at the same time, we will want to draw them. Today we will make a piece that can draw many beautiful and regular shapes.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/75_1.png)

### Materials Required

Nezha expansion board × 1

micro:bit V2 × 1

Servos × 1

[ELECFREAKS PlanetX UV Sensor](https://www.elecfreaks.com/planetx-uv.html) × 1

Motors × 2

Bricks × n

**Note: If you want all of the above components, you may purchase the [Nezha 48 IN 1 Inventor's Kit](https://www.elecfreaks.com/nezha-inventor-s-kit-for-micro-bit-without-micro-bit-board.html?_pos=3&_sid=7e0550154&_ss=r)**.



### Assembly Steps

Components Details

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/75_2.png)

Build it as the assembly steps suggest:

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/75_3.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/75_4.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/75_5.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/75_6.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/75_7.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/75_8.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/75_9.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/75_10.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/75_11.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/75_12.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/75_13.png)

## Connection Diagram

We need to connect the Motors to the M1 and M4 ports， and the UV sensor to the J1 port on Nezha expansion board.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/75_14.png)


##  MakeCode Programming

### Step 1

Click “Advanced” in the MakeCode drawer to see more choices.



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/49_10.png)



We need to add a package for programming. Click “Extensions” at the bottom of the drawer and search with “nezha” to download it.



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/49_11.png)



We need to add a package for programming. Search with “PlanetX” in the dialogue box and click to download it.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/49_12.png)



*Notice*: If you met a tip indicating that some codebases would be deleted due to incompatibility, you may continue as the tips say or create a new project in the menu.

### Reference

The program is displayed below:

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/75_15.png)

Link: https://makecode.microbit.org/_dmJ3isbKLLYV

You may also download it directly:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_dmJ3isbKLLYV"
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

We can see that when the UV intensity changes, the graphics drawn by the painter are changed, and you can also improve the program to draw more graphics.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/75_16.gif)
