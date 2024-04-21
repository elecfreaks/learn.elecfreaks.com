# case 19：The Automatic Laundry Rack

## Introduction

When people are not at home, if it suddenly rains, we will be able to go home to pick up the clothes, and the clothes will get wet. Thus, we can use soil moisture sensor and servos to make a simple automatic drying rack. When the soil moisture sensor detects rain, it controls the servo to automatically retract the clothes rod to keep the clothes from getting wet. When the soil moisture sensor does not detect rain, it automatically extends the clothes rod to dry the clothes.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_19_01.png)

## Quick to Start

### Materials

Nezha expansion board × 1

micro:bit × 1

360°servo × 1

Bricks × n

***Tips: You may need to purchase [Nezha Inventor's Kit](https://www.elecfreaks.com/nezha-inventor-s-kit-for-micro-bit-without-micro-bit-board.html) if you want all the above compoents.***

### Connections Diagram

Connect the micro:bit with the Nezha expansion board, connect the servo to S1 port and the soil moisture sensor to J1 port on Nezha expansion board.


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_19_03.png)



### Assembly Video


Video reference: [https://youtu.be/t2mYccra8Vw](https://youtu.be/t2mYccra8Vw)

<iframe width="560" height="315" src="https://www.youtube.com/embed/t2mYccra8Vw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Assembly Steps


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_step_19_01.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_step_19_02.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_step_19_03.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_step_19_04.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_step_19_05.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_step_19_06.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_step_19_07.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_step_19_08.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_step_19_09.png)





## MakeCode Programming



### Step 1
Click "Advanced" in the MakeCode drawer to see more choices.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_01_10.png)

We need to add a package for programming. Click "Extensions" in the bottom of the drawer and search with "PlanetX" in the dialogue box to download it.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_01_11.png)



We need to add a package for programming. Click "Extensions" in the bottom of the drawer and search with "Nezha" in the dialogue box to download it.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_03_09.png)


***Note:*** If you met a tip indicating that the codebase will be deleted due to incompatibility, you may continue as the tips say or build a new project in the menu.



### Step 2



### Programme as the picture shows:


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_19_15.png)



### Link
Link：[https://makecode.microbit.org/_2Ub6zkdT8RbY](https://makecode.microbit.org/_2Ub6zkdT8RbY)

You may also downoad it directly below:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_2Ub6zkdT8RbY"
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
While rainning, the detected value from the soil moisture sensor is over the setting point, the laundry rack folds back in case of the clothes getting wet; while the sun comes out, the the detected value from the soil moisture sensor is below the setting point, and the the laundry rack stretches out to dry the clothes.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case-gif-19.gif)
