# Nezha Expansion Board(EF05043)

## Introduction
---
Nezha is an expanstion board for micro:bit with multuple functions available. It equips with four servos connections, four motors connections and seven sensors connections. All of the connections are required with RJ11 connectors that are fool-proofing and easy to plug. It is also compatible to Lego and Fischertechnik bricks and is available to get them connected with the electric modules,  thus it allows students to easily create their own amazing micro:bit projects.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/03444_01.png)

## Products Link

[Nezha Breakout Board](https://shop.elecfreaks.com/products/elecfreaks-nezha-breakout-board?_pos=1&_sid=943411ed7&_ss=r)


## Characteristics
---
- RJ11 connections,  easy to plug.
## Specification
---

| Project | Parameters |
| ------------------- | ----------------------------------- |
| Product Name | Nezha Breakout Board V1 |
| SKU | EF05043 |
| Dimensions | 81.9 × 59.8 × 27.8 mm |
| GW| 97 g (including lithium battery, excluding micro:bit board and peripheral accessories) |
| Charging Voltage | 5V |
| Charging Time | 120min |
| Battery Capacity | 3.3Wh |
| Max. Working Voltage | 4.2V |
| Rated Working Voltage | 3.7V |
| Min. Working Voltage | 3.2V |
| Motor Output Voltage | 5V |
| Motor Max. Output Current | 2.8A |
| Servo Interface Output Voltage | 5.6V |
| Servo Interface Max. Output Current | 3.0A |
| RJ11 Sensor Interface Output Voltage | 3.4V |
| RJ11 sensor interface max.output current | 1.6A |
| Continuous use time | 2 hours (actual use time may vary due to test environment, different load conditions, etc.) |
| Servo interface | 4 |
| TT motor interface | 4 |
| Fischertechnik motor interface | 4 |
| Sensor interface | 7 |

## Outlook and Dimensions
---


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/03444_03.png)


## Main Parts Introduction
---

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/expansion-board/images/03444_04.png)

[https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/expansion-board/file/nezha-Main-Parts-Introduction-V1.2.pdf](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/expansion-board/file/nezha-Main-Parts-Introduction-V1.2.pdf)

## Add Package
---

Click "Advanced" in the MakeCode drawer to see more choices.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/03444_05.png)

We need to add a package for programming. Click "Extensions" in the bottom of the drawer and search with "nezha" in the dialogue box to download it.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/03444_06.png)

***Note:*** If you met a tip indicating that the codebase will be deleted due to incompatibility, you may continue as the tips say or build a new project in the menu.

## Ways of Operation
---
### TT Motor

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/03444_07.png)

### Code as below:


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/03444_08.png)


### Link
Link: [https://makecode.microbit.org/_8g40hhK9rLvW](https://makecode.microbit.org/_8g40hhK9rLvW)

You may also download it directly below:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_8g40hhK9rLvW"
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
Press button A to drive both motors; press button B to stop the motor connecting to M1; press both A&B to stop both motors.


### Servo

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/03444_09.png)

### Code as below:


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/03444_10.png)


### Link
Link: [https://makecode.microbit.org/_L8rfzu3ELEyg](https://makecode.microbit.org/_L8rfzu3ELEyg)

You may also download it directly below:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_L8rfzu3ELEyg"
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
Press button A to drive the 180° servo to 0°; press button B to drive the 360° servo to 360°; press button A&B to continuously drive the servo at the speed of  100%.

## Python Programming
---

### Step 1

Download the package and unzip it: [PlanetX_MicroPython](https://github.com/lionyhw/PlanetX_MicroPython/archive/master.zip)

Go to  [Python editor](https://python.microbit.org/v/2.0)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/05001_07.png)

We need to add nezha.py for programming. Click "Load/Save" and then click "Show Files (1)" to see more choices, click "Add file" to add nezha.py from the unzipped package of PlanetX_MicroPython.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/03444_11.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/03444_12.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/03444_13.png)

### Step 2
### Reference
```
from microbit import *
from nezha import *

nezha = NEZHA()
nezha.set_motors(1, 100)
while True:
    nezha.set_servo(1, 90)
    sleep(1000)
    nezha.set_servo(1, 0)
    sleep(1000)


```


### Result
- The motor connecting to M1 drives at the speed of 100%; The servo connecting to S1 drives to 90° and pause one second, then it drives to 0° and pause another second, and it continuously drives in this pace.

## Relevant File

---

## Technique File

---
