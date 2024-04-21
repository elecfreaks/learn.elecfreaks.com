# case 10 rainbow led ring

## Introduction ##

 The RGB Rainbow LED Ring is made of 8 ws2818b pixels in a cascade connection. Its most notable characteristic is single IO control and infinite cascade. In this case, we will drive the RGB Rainbow LED with the micro:bit to make the rainbow colours rotate around the ring.

## Products Link

[ELECFREAKS Experiment Box Kit](https://shop.elecfreaks.com/products/elecfreaks-experiment-box-kit-without-micro-bit-board?_pos=1&_sid=ac099db2f&_ss=r)

## Hardware Connect ##

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/zm91HVe.png)

 Connect circuit as above picture and put 2 AAA batteries into batteries pack.


## Principles of Circuits ##

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/plRaylG.png)

 The GND of slot on micro:bit is into innards of batteries' GND to generate the current loop.

## Introduction of Components ##

###  RGB Rainbow LED Ring（8 LEDs）
 The RGB Rainbow LED Ring is made of 8 ws2812b pixels in a cascade connection. Each ws2812b is made of an integrated control circuit and a RGB chip.
 The first pixel receives 24bits of data through the DIN (Data IN) port, while the rest of the data is sent to the following pixels through the DOUT (Data OUT) port. With this automatic transformation forwarding technique, only the speed of data transmission is affected, not the quantity of data transmitted.
 The experiment box included a set of RGB Rainbow LED（8 LEDs）.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/vCBPKXo.png)

***Note:*** Please note the positive and the negative when you are connecting.

## Software

### Step 1

 Click [makecode https://makecode.microbit.org/#](https://makecode.microbit.org/#)。

 Click on "New Project" and set a new Project.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/t34k5Zb.png)

 Click Advanced for more code blocks and find the Extensions at the bottom of the column.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/Zg0fO6x.png)

 Search "neopixel" and add the neopixel.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pqB776X.png)

### Step 2
 Under the on start block, initialize the LED, set pin to P0 with 8 LEDs and use the RGB colour.
 Then, set the rainbow from 1 to 360.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/aamdVlu.png)

### Step 3
 Now the colour of the LED has been set, but we need a show block to make it works.
 Next, set rotate pixels to rotate the colour of the LED in a ring.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/5juGvN5.png)

### Program

 Program link：[https://makecode.microbit.org/_LJAe7W97fDat](https://makecode.microbit.org/_LJAe7W97fDat)

 You also could directly download program by visiting website as below:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_LJAe7W97fDat"
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

 We can see a rainbow rotates on the LED ring.
 ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/23vhDKK.gif)

## Think

 How can we make the ring blink like an eye?

## Questions



## More Information
