# Expansion-Sonar:bit

## Introduction
---
Sonar:bit is a 3-wire ultrasonic module with the working voltage between 3-5V. It is available to be used to 3.3V or 5V micro-controller system. With only one 3-wire(GVS) cable, it can work properly. Compared to the normal 4-wire ultrasonic module, it has saved one IO port. 

The measurement range of sonar:bit is 4cm-400cm. It can output stable and accurate measurement data with ±1cm tolerance only.

It can connect to the [Ring:bit](https://shop.elecfreaks.com/products/elecfreaks-pico-ed-ring-bit-v2-car-kit-with-pico-ed-board?_pos=2&_sid=18032a345&_ss=r) with an expansion board.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/pico/picoed/picoed-smart-car/picoed-ringbit-car-v2/images/sonar_01.png)

## Features

Input voltage:3V~5V and can be driven by micro:bit directly.

Standard 3-wire GVS connecotr, which occupies 1 IO port only.

## Parameter

| Item | Parameter | Note |
| --- | --- | --- |
| Name | [Ring:bit](https://shop.elecfreaks.com/products/elecfreaks-pico-ed-ring-bit-v2-car-kit-with-pico-ed-board?_pos=2&_sid=18032a345&_ss=r) Car v2  Sonar:bit |  |
| SKU | EF04089 |  |
| Working Voltage | DC 3-5V |  |
| Connections | 3pin GVS Connection ||
| Output signal | Analog |  |
| Measurement | 4~400cm |  |
| Size | 40.60×51.60mm |  |
| NW | 12g |  |

## Outlook and Dimensions

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/pico/picoed/picoed-smart-car/picoed-ringbit-car-v2/images/sonar_02.png)

---
## Quick to Start

### Hardware Connections

Connect the acrylic transition board to the back board with the rivets.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/pico/picoed/picoed-smart-car/picoed-ringbit-car-v2/images/sonar_03.png)

Connect the Sonar:bit to the other side of the acrylic transition board with rivets.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/pico/picoed/picoed-smart-car/picoed-ringbit-car-v2/images/sonar_04.png)

Connect the Sonar:bit to the [Ring:bit](https://shop.elecfreaks.com/products/elecfreaks-pico-ed-ring-bit-v2-car-kit-with-pico-ed-board?_pos=2&_sid=18032a345&_ss=r) breakout board with a 3-pin wire.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/pico/picoed/picoed-smart-car/picoed-ringbit-car-v2/images/sonar_05.png)



<iframe width="560" height="315" src="https://www.youtube.com/embed/EFqFEwfLRyc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Programming

Preparation for Programming: [Info](https://www.elecfreaks.com/learn-en/pico-ed/index.html)

### Samples Code

```python
# Import modules that we need
import board
from ringbit import *

# Set the pins of both wheels
ringbit = Ringbit(board.P1, board.P2)

# Change the speed in accordance with the distances detected by the sonar:bit
while True:
    if ringbit.get_distance(board.P0, Unit.cm) > 20:
        ringbit.set_speed(100, 100)
    else:
        ringbit.set_speed(0, 0)

```
### Details of the program

1.Import the modules that we need. `board` is the common container, and you can connect the pins you'd like to use through it; `ringbit` module contains classes and functions for [Ring:bit](https://shop.elecfreaks.com/products/elecfreaks-pico-ed-ring-bit-v2-car-kit-with-pico-ed-board?_pos=2&_sid=18032a345&_ss=r) smart car operations.
```python
import board
from ringbit import *
```

2.Set the pins of the servos
```python
ringbit = Ringbit(board.P1, board.P2)
```

3.While true, set the speed to be controlled by the distance value given by the sonar:bit
```python
while True:
    if ringbit.get_distance(board.P0, Unit.cm) > 20:
        ringbit.set_speed(100, 100)
    else:
        ringbit.set_speed(0, 0)
```
## Result

The Ring:bit car drives normally when there are no obstacles, stops when there are obstacles, and continues to drive when the obstacles leave.

<iframe width="560" height="315" src="https://www.youtube.com/embed/vqo8PnJyEkQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Exploration

## FAQ

## Relevant Files
