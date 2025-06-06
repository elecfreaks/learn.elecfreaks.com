# 7-Seg LED Nixietube(EF05026)

##  Introduction

It is able to display the numbers and time and so on.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/sensor/planet-x-sensors/images/05026_01.png)

## Products Link

[ELECFREAKS PlanetX Segment Sensor](https://shop.elecfreaks.com/products/elecfreaks-planetx-segment-sensor?_pos=1&_sid=a2dcfb8b5&_ss=r)

## Characteristic


 Designed in RJ11 connections, easy to plug.

## Specification


Item | Parameter
:-: | :-:
SKU|EF05026
Connection|RJ11
Type of Connection|Digital input
Working Voltage|3.3V
Core IC|TM1637


## Outlook



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/sensor/planet-x-sensors/images/05026_02.png)

## Quick to Start


### Materials Required and Diagram

 Connect the 7-Seg LED Nixietube to J1 port in the Nezha expansion board as the picture shows.


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/sensor/planet-x-sensors/images/05026_03.png)

## MakeCode Programming


### Step 1

Click "Advanced" in the MakeCode drawer to see more choices.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/sensor/planet-x-sensors/images/05001_04.png)

We need to add a package for programming, . Click "Extensions" in the bottom of the drawer and search with "PlanetX" in the dialogue box to download it.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/sensor/planet-x-sensors/images/05001_05.png)

***Note:*** If you met a tip indicating that the codebase will be deleted due to incompatibility, you may continue as the tips say or build a new project in the menu.

### Step 2

### Code as below:

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/sensor/planet-x-sensors/images/05026_06.png)


### Link
Link: [https://makecode.microbit.org/_7tmRmJ2c4Khw](https://makecode.microbit.org/_7tmRmJ2c4Khw)

You may also download it directly below:


<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_7tmRmJ2c4Khw"
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
 Set it display 12.34.

## Python Programming


### Step 1

Download the package and unzip it: [PlanetX_MicroPython](https://github.com/lionyhw/PlanetX_MicroPython/archive/master.zip)

Go to  [Python editor](https://python.microbit.org/v/2.0)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/sensor/planet-x-sensors/images/05001_07.png)

We need to add enum.py and nixietube.py for programming. Click "Load/Save" and then click "Show Files (1)" to see more choices, click "Add file" to add enum.py and nixietube.py from the unzipped package of PlanetX_MicroPython.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/sensor/planet-x-sensors/images/05001_08.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/sensor/planet-x-sensors/images/05001_09.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/sensor/planet-x-sensors/images/05026_10.png)

### Step 2

### Reference

```
from microbit import *
from enum import *
from nixietube import *

tm = NIXIETUBE(J1)
n = 0
while n < 10000:
    tm.set_show_num(n)
    n += 1
```


### Result
 The numbers from 0~99999 display on the 7-Seg LED Nixietube.

## Relevant File


## Technique File
