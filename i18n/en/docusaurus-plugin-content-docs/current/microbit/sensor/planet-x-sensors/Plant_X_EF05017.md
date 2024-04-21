# Push Button Module(EF05017)

## Introduction


The Push button module is able to detect your press action.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/05017_01.png)

## Products Link

[ELECFREAKS PlanetX Button Sensor](https://shop.elecfreaks.com/products/elecfreaks-planetx-button-sensor?_pos=1&_sid=85e050359&_ss=r)

## Characteristic


 Designed in RJ11 connections, easy to plug.

## Specification


Item | Parameter
:-: | :-:
SKU|EF05017
Connection|RJ11
Connections type|Digit output
Power|3.3V



## Outlook



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/05017_02.png)

## Quick to Start


### Materials Required and Diagram

 Connect the Push-button module to J1 port in the Nezha expansion board as the picture shows.


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/05017_03.png)

## MakeCode Programming


### Step 1

Click "Advanced" in the MakeCode drawer to see more choices.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/05001_04.png)

We need to add a package for programming, . Click "Extensions" in the bottom of the drawer and search with "PlanetX" in the dialogue box to download it.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/05001_05.png)

***Note:*** If you met a tip indicating that the codebase will be deleted due to incompatibility, you may continue as the tips say or build a new project in the menu.

### Step 2

### Code as below:

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/05017_06.png)


### Link
Link: [https://makecode.microbit.org/_7bYWKYccY73R](https://makecode.microbit.org/_7bYWKYccY73R)

You may also download it directly below:


<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_7bYWKYccY73R"
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
 The icons display on the micro:bit accordingly with the order given by pressing button A or B or A+B.

## Python Programming


### Step 1

Download the package and unzip it: [PlanetX_MicroPython](https://github.com/lionyhw/PlanetX_MicroPython/archive/master.zip)

Go to   [Python editor](https://python.microbit.org/v/2.0)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/05001_07.png)

We need to add enum.py and button.py for programming. Click "Load/Save" and then click "Show Files (1)" to see more choices, click "Add file" to add enum.py and button.py from the unzipped package of PlanetX_MicroPython.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/05001_08.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/05001_09.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/05017_10.png)

### Step 2

### Reference

```
from microbit import *
from enum import *
from button import *

button = BUTTON(J1)
while True:
    if button.A_is_pressed():
        display.show(Image.HAPPY)
    elif button.B_is_pressed():
        display.show(Image.SAD)
    elif button.AB_is_pressed():
        display.show(Image.COW)
        sleep(500)
```


### Result
 The icons display on the micro:bit accordingly with the order given by pressing button A or B or A+B.

## Relevant File


## Technique File
