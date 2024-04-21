# case 03 Auto Windows


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/krV05be.jpg)
## Goal



 Make a smart wardrobe

## Materials


1 x [ELECFREAKS micro:bit Smart Home Kit](https://www.elecfreaks.com/micro-bit-smart-home-kit.html)
 1 x corrugated board

## Background

### What is smart wardrobe
 Smart wardrobe could automatically open and let people take cloth. A slight push and the door open.At the same time, wardrobe door was setted low noise, it will not disturb sleep.

### Smart wardrobe operation
 Controling crash detect module using micro:bit and receive crash signal.The micro:bit will control servo to open the door with light up when it received signal.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/Pq9yMxM.png)

## Practical operation

Materials: corrugated board and cutter

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/PuJE7uj.jpg)

Build as below picture：

Front side：

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/lNqGReU.jpg)

Back side：

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/mDXBxp3.jpg)


Paste devices as below piture:

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/8sS6pSt.jpg)


## Hardware connect


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/k1tNYcb.png)





## Software

[makecode](https://makecode.microbit.org/#)

Edge Connector Data Sheet



## Programming

### Step 1
Go to MakeCode page, click Advanced in the code block and click on Extensions.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/2qCyzQ7.png)

We need to add a new codebase for programming of smart home. Finding “Add Package” in the bottom of code block and click it. Then a message box will show up, search “smart home"， and download this new codebase.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/QR2s7LD.png)

***Note:*** If there is a hint says some codebase will be deleted because of incompatibility. Don't worry. You could go ahead as the hint or build a new item in item menu bar.


### Step 2

Drag on start from Basic and snap into set pull pin P2 to up.

Drag servo write pin from Pin, choose P7, set P7 to 180° and set door to -1 for closing the door。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/rNh3b8D.png)

### Step 3

If digital read P2, the door variables will be contrary.If door variables is true, rainbow LED shows
white, servo turns 0 °with door opens and pause 2 seconds.


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/N1sMg3r.png)

### Step 4

If door variables is false, servo turns 180° with door closes, pause 2 seconds and the rainbow
LED off.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/twe7XV2.png)


### Programming

Make code：[https://makecode.microbit.org/_2J3VR42c29cw](https://makecode.microbit.org/_2J3VR42c29cw)

You also could directly download program visit website as below:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_2J3VR42c29cw"
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

Turning of the servo will drive the door open with rainbow led light up.

Front side：

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/XyAjCbV.jpg)

Back side：

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/mEbCjUQ.jpg)

## Think

How to make a clothes racks ?

## Questions



## More information
