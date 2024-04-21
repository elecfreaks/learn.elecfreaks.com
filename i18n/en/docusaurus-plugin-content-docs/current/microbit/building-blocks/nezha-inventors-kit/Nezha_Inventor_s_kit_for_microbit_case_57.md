# Case 57: An Unmanned Bus

## Introduction

Now, with the maturity of artificial intelligence and driverless technology, driverless buses are beginning to appear, and the fares are lower. Therefore, in this class, we will make an unmanned bus work to experience the riding mode of unmanned bus and the convenience of future transportation.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/57_1.jpg)

### Materials Required

Nezha expansion board × 1

micro:bit V2 × 1

Crash sensor× 1

Ultrasonic sensor × 1

RJ11 cable × 1

Bricks × n

**Note: If you want all of the above components, you may purchase the [Nezha 48 IN 1 Inventor's Kit](https://www.elecfreaks.com/nezha-inventor-s-kit-for-micro-bit-without-micro-bit-board.html)**.



### Assembly Steps

Component Details

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/57_2.jpg)

Build it as the assembly steps suggest:

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/57_3.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/57_4.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/57_5.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/57_6.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/57_7.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/57_8.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/57_9.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/57_10.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/57_11.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/57_12.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/57_13.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/57_14.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/57_15.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/57_16.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/57_17.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/57_18.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/57_19.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/57_20.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/57_21.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/57_22.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/57_23.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/57_24.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/57_25.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/57_26.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/57_27.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/57_28.jpg)

## Connection Diagram

Connect the four motors to the M1, M4,  the crash sensor to J1 port, the Ultrasonic sensor to J2 port.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/57_29.jpg)


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

The program is shown in the figure below:

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/57_30.jpg)

Link: https://makecode.microbit.org/_Cz7hETb9V9pL

You may also download it directly:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_Cz7hETb9V9pL"
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

We can see that when the bus encounters a bus stop it will stop and wait for passengers to get on, and after passengers get on the bus and press the crash sensor the bus will leave again.
