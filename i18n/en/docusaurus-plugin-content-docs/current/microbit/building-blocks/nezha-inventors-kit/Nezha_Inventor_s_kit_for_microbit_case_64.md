# Case 64: The Intelligent Forklift

## Introduction

If you have visited large company warehouses or open air lumber mills, you can see a lot of industrial handling vehicles to move goods, which not only saves manpower but also greatly improves work efficiency. If you want to experience the thrill of lifting thousands of kilograms of cargo with your fingers, you can consider buying a forklift, but this is not only expensive, but also time-consuming and labor-intensive. You can use Nezha kit to create a smart forklift that can move goods according to our instructions.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/64_1.jpg)

### Materials Required

Nezha expansion board × 1

micro:bit V2 × 1

Speech recognition module × 1

Motors × 2

360° Servo × 1

RJ11 cables × 1

Bricks × n

**Note: If you want all of the above components, you may purchase the [Nezha 48 IN 1 Inventor's Kit](https://www.elecfreaks.com/nezha-inventor-s-kit-for-micro-bit-without-micro-bit-board.html)**.



### Assembly Steps

Component Details

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/64_2.jpg)

Build it as the assembly steps suggest:

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/64_3.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/64_4.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/64_5.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/64_6.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/64_7.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/64_8.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/64_9.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/64_10.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/64_11.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/64_12.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/64_13.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/64_14.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/64_15.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/64_16.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/64_17.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/64_18.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/64_19.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/64_20.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/64_21.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/64_22.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/64_23.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/64_24.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/64_25.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/64_26.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/64_27.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/64_28.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/64_29.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/64_30.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/64_31.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/64_32.jpg)

## Connection Diagram

Connect the motors to M1, M4 port, the speech recognition module to IIC and the servo to S1 ports as the diagram suggests:

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/64_33.png)


##  MakeCode Programming

### Step 1

Click “Advanced” in the MakeCode drawer to see more choices.



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/49_10.png)



For programming the servos and the motors, we need to add a package.  Click “Extensions” at the bottom of the drawer and search with “nezha” to download it.



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/49_11.png)



For programming the speech recognition module, we need to add a package. Search with “PlanetX” in the dialogue box and click to download it.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/49_12.png)



*Notice*: If you met a tip indicating that some codebases would be deleted due to incompatibility, you may continue as the tips say or create a new project in the menu.

### Reference

The program is shown below:

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/64_34.jpg)

Link: https://makecode.microbit.org/_5HDgoyM2ceFu

You may also download it directly:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_5HDgoyM2ceFu"
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

We can see that the forklift can be controlled by voice to drive to the designated cargo, and then it can pick up the cargo and deliver it to the designated destination.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/64_35.gif)
