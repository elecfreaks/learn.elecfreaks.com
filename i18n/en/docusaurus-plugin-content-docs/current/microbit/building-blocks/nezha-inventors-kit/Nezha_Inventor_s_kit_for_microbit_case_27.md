# Case 27: The Distance Indicator

## Introduction

This is a distance detection device. In order to prevent the spread of the epidemic, people should maintain a certain social distance in public. This device can display the distance between the carrier and the person in front of it on the screen.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_27_01.png)

## Quick Start



### Materials Required


Nezha expansion board × 1

micro:bit V2 × 1

sonar sensor  × 1

Bricks × n

***Tips: You may need to purchase [Nezha Inventor's Kit](https://www.elecfreaks.com/nezha-inventor-s-kit-for-micro-bit-without-micro-bit-board.html) if you want all the above compoents.***

### Connection Diagram

Inset the micro:bit, and connect the sonar:bit to J1 port on Nezha expansion board.


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_27_03.png)



### Assembly Video


Video link: [https://youtu.be/0HgP_YVgNJU](https://youtu.be/0HgP_YVgNJU)

<iframe width="560" height="315" src="https://www.youtube.com/embed/0HgP_YVgNJU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


### Assembly Steps

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_step_27_01.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_step_27_02.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_step_27_03.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_step_27_04.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_step_27_05.png)


## MakeCode Programming



### Step 1


Click "Advanced" in the MakeCode drawer to see more choices.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_01_10.png)




We need to add a package for programming. Click "Extensions" in the bottom of the drawer and search with "nezha" to download it.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_03_09.png)

***Note:*** If you met a tip indicating the codebase might be deleted due to incompatibility, you may continue as the tips say or create a new project in the menu.

### Step 2


### Programme as the pictures indicate


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_27_10.png)



### Reference

Link: [https://makecode.microbit.org/_Vb69KzLR3Dhe](https://makecode.microbit.org/_Vb69KzLR3Dhe)

You may download it directly below:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_Vb69KzLR3Dhe"
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
After powering on, the detected distance displays on the micro:bit.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case-gif-27.gif)
