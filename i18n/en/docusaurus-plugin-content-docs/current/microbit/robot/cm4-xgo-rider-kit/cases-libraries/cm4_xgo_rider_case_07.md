---
sidebar_position: 7
sidebar_label: Case 07:Raspberry Pi System Expansion
---

# Case 07: Raspberry Pi System Expansion

## Introduction

This course aims to introduce students to the operation of Raspberry Pi system expansion.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-read-01.png)**Note: After XGO Rider is turned on, it needs to move back and forth slightly to keep the body balanced. Please do not place XGO Rider on the edge of the table or in dangerous places to avoid damage. **

## Teaching Objectives

Understand the operation of Raspberry Pi system expansion.

## Teaching Preparation

Before starting the teaching, please make sure you have prepared the following necessary materials:

| Picture | Name | Quantity | Note |
|---|---|---|---|
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/xgo-rider-cm4-kit-introdutin-01.png)| CM4 XGO Rider | 1 |   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-03.png) | PC | 1 | Prepare Yourself |

## Course Introduction

Because of the factory image, the system is only 15G, and the SD card system is 32G. If you want to use the remaining space, you can read this tutorial. Next, let's start the learning journey.

## Exploration Activities

How to view the Raspberry Pi system space and expand it.

## Software

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-read-01.png)**Note: After turning on the XGO Rider, in order to keep the fuselage balanced, it needs to move back and forth slightly. Please do not place the XGO Rider on the edge of the table or in a dangerous place to avoid damage. **

### 1. Use VNC-Viewer to connect to the Raspberry Pi

After turning on the XGO Rider, enter the remote control mode interface to query the corresponding IP address. If there is no IP address, please reconnect to the network according to the network operation.

Please refer to the tutorial content of Case 03, use VNC-Viewer to remotely log in to the Raspberry Pi system, enter the Raspberry Pi system desktop and open the terminal.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/cm4-xgo-rider-kit-case07-01.png)

### 2. Check the system space

Enter the command below to check the space

df -h

You can see the space of the Raspberry Pi system

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/cm4-xgo-rider-kit-case08-01.png)

### 3. Expand capacity

Enter the following command to expand capacity.

sudo raspi-config

You will enter this interface.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/cm4-xgo-rider-kit-case08-02.png)

Select option 6 and press Enter.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/cm4-xgo-rider-kit-case08-03.png)

Then select option 1 and click OK.![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/cm4-xgo-rider-kit-case08-04.png)

Press Enter on this interface and select Finish. Then restart XGO Rider.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/cm4-xgo-rider-kit-case08-05.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/cm4-xgo-rider-kit-case08-06.png)

Restart XGO Rider.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/cm4-xgo-rider-kit-case08-07.png)

Query the space again.

df -h

It is found that the expansion is complete.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/cm4-xgo-rider-kit-case08-08.png)
