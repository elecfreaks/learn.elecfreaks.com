# case 35 Color Recognition Car

## Introduction

A color recognition sensor is installed on the car. We can use the color recognition sensor to identify the color blocks that the car passes along the way and display it through the rainbow LED on the car.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_35_01.png)

## Quick Start



### Materials Required


Nezha expansion board × 1

micro:bit V2 × 1

motors × 2

Color sensor  × 1

Rainbow LED ring  × 1

Bricks × N

***Tips: You may need to purchase [Nezha Inventor's Kit](https://www.elecfreaks.com/nezha-inventor-s-kit-for-micro-bit-without-micro-bit-board.html) and [Purchase Interactive coding accessories pack here.](https://shop.elecfreaks.com/products/elecfreaks-interactive-coding-accessories-pack?_pos=1&_sid=c75dad35f&_ss=r) if you want all the above components.***

### Connection Diagram

Insert the micro:bit, connect the motors to M1and M4 , the color sensor to IIC port and the rainbow led ring to J1 on the Nezha expansion board as the picture shows.


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_35_03.png)



### Assembly Video




Link: [https://youtu.be/2VBr3sEPMIg](https://youtu.be/2VBr3sEPMIg)

<iframe width="560" height="315" src="https://www.youtube.com/embed/2VBr3sEPMIg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Assembly Steps


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_step_35_01.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_step_35_02.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_step_35_03.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_step_35_04.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_step_35_05.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_step_35_06.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_step_35_07.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_step_35_08.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_step_35_09.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_step_35_10.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_step_35_11.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_step_35_12.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_step_35_13.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_step_35_14.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_step_35_15.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_step_35_16.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_step_35_17.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_step_35_18.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_step_35_19.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_step_35_20.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_step_35_21.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_step_35_22.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_step_35_23.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_step_35_24.png)




## MakeCode Programming



### Step 1

Click "Advanced" in the MakeCode to see more choices.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_01_10.png)




For programming, we need to add a package: click "Extensions" at the bottom of the MakeCode drawer and search with "nezha" in the dialogue box to download it.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_03_09.png)


***Notice:*** If you met a tip indicating that some codebases would be deleted due to incompatibility, you may continue as the tips say or create a new project in the menu.

### Step 2

### Code as below:


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_35_10.png)



### Reference
Link: [https://makecode.microbit.org/_fzaisgJfKKKj](https://makecode.microbit.org/_fzaisgJfKKKj)

You may also download it directly below:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_fzaisgJfKKKj"
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
After powering on, the lights on the car turn on with the color detected from the color sensor.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case-gif-35.gif)
