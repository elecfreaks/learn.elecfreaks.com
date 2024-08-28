---
sidebar_position: 4
sidebar_label: Quick Start Guide
---

# Quick Start Guide

This Quick Start Guide will provide you with a concise guide to using the Smart Greenhouse Suite. Whether you have programming experience or not, this guide will help you get up to speed quickly with the basics. Through simple steps, you will learn how to assemble the Smart Greenhouse Shed and create a real-world example to experience.

## Preparation

Before you start the Quick Start, make sure you have the following necessary materials ready:

Translated with DeepL.com (free version)

|                           Picture                            |                Name                 |
| :----------------------------------------------------------: | :---------------------------------: |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-014.png) |              micro:bit              |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-020.png) |               IOT:bit               |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-030.png) |           3V Relay Module           |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-040.png) |       3V Vertical Water Pump        |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-050.png) |         8 Rainbow LED Light         |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-060.png) | Octopus Soil Moisture Sensor Brick  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-070.png) |        Octopus Light Sensor         |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-078.png) |          Greenhouse Model           |
|                                                              |                                     |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-090.png) |          Double-sided Tape          |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-011.png) |          Flat Screwdriver           |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-012.png) |                 PC                  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-013.png) |              USB Cable              |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-015.png) |  4 Pin Male to Female Dupont line   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-016.png) | 5 Pin female to female Dupont cable |

These materials will provide you with a complete experience and ensure that you can follow through and learn smoothly. Once you have the above materials ready, let's move on to the next step.

## Quick start

## 1. Assembling the Greenhouse

Insert the micro:bit into the IOT:bit expansion board, and after applying non-marking adhesive on the back of the IOT:bit expansion board, secure it to the top of the Greenhouse Shed model base, as shown below:

Translated with DeepL.com (free version)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-017.png)

Place the 3V water pump and 3V relay as shown in the figure below:

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-018.png)

Pour an appropriate amount of soil into the plant growth pool at the greenhouse base and place the seeds, and insert the soil moisture sensor into the soil.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-019.png)

Attach the 8 rainbow light rings to the top of the clear outer cover.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-021.png)

Use non-marking tape to stick the light sensor to the top of the transparent cover of the greenhouse model, as shown in the figure below.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-022.png)

Pass the connection wires of the soil moisture sensor, the connection wires of the 8 rainbow light rings, the connection wires of the light sensor, and the 3V water pump hose through the holes of the greenhouse transparent cover as shown in the figure below, and then lower it:

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-023.png)

Connect the 3V water pump, 3V relay, soil moisture sensor, light sensor and 8 rainbow LEDs to the IOT:bit expansion board as shown in the following wiring diagram.

|      Component       | IOT:bit corresponding pin |
| :------------------: | :-----------------------: |
| 8 Rainbow LED Light  |            P1             |
| Soil Moisture Sensor |            P2             |
|     Light Sensor     |            P3             |
|   3V Relay Module    |            P9             |

​			

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-026.png)

Pour an appropriate amount of water into the water tank at the bottom of the greenhouse.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-024.png)

Connect the power supply to the IOT:bit expansion board using the USB cable, then turn on the power switch.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-025.png)

## 2. Download the program

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-027.png)

Download the program ：[microbit-smart-greenhouse-kit.hex](https://www.elecfreaks.com/download/microbit-smart-greenhouse-kit.hex)

Use a USB cable to connect PC and micro:bit V2.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual03.gif)

After the connection is successful, a drive letter named MICROBIT will be recognized on the computer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual06.png)

Copy the downloaded program file [microbit-smart-greenhouse-kit.hex](https://www.elecfreaks.com/download/microbit-smart-greenhouse-kit.hex) to MICROBIT.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-read03.png)After the download is successful, the micro:bit V2 will automatically disconnect and reconnect. At this time, the program file [microbit-smart-greenhouse-kit.hex](https://www.elecfreaks.com/download/microbit-smart-greenhouse-kit.hex) you copied to MICROBIT will disappear. This is normal.



## 3. Effect Demonstration



