---
sidebar_position: 6
sidebar_label: Case 06: Close a large program
---

# Case 06: Close a large program

## Introduction

This course aims to introduce students to the process operation of shutting down the Raspberry Pi system.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-read-01.png)**Note: After the XGO Rider is turned on, it needs to move back and forth slightly to keep the fuselage balanced. Please do not place the XGO Rider on the edge of the table or in a dangerous place to avoid damage. **

## Teaching objectives

Understand the Raspberry Pi system process and shut down the process.

## Teaching preparation

Before starting the teaching, please make sure you have prepared the following necessary materials:

| Picture | Name | Quantity | Note |
|---|---|---|---|
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/xgo-rider-cm4-kit-introdutin-01.png)| CM4 XGO Rider | 1 |   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-03.png) | PC | 1 | Prepare Yourself |

## Course Introduction

If we want to conduct other experiments, we must stop the big program to avoid occupying critical resources between processes. Next, let's start the learning journey.

## Exploration Activities

How to use to enter the Raspberry Pi system and close the process.

## Software

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-read-01.png)**Note: After turning on the XGO Rider, in order to keep the fuselage balanced, it needs to move back and forth slightly. Please do not place the XGO Rider on the edge of the table or in a dangerous place to avoid damage. **

### 1. Use VNC-Viewer to connect to the Raspberry Pi

After turning on the XGO Rider, enter the remote control mode interface to query the corresponding IP address. If there is no IP address, please reconnect to the network according to the network operation.

Please refer to the tutorial content of Case 03, use VNC-Viewer to remotely log in to the Raspberry Pi system, enter the Raspberry Pi system desktop and open the terminal.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/cm4-xgo-rider-kit-case07-01.png)

### 2. Check the process number

Enter the following command to find the process number of the large program

ps -ef | grep "python"

### 3. Find the process of main.py

Then find the process number of main.py. The process number is different every time you start the computer. You need to get it according to the actual situation. The tutorial here is 878.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/cm4-xgo-rider-kit-case07-02.png)

### 4. Close the process

Enter the following command to close the big program

sudo kill 878 #878 is the process number, which needs to be obtained according to the actual situation.


### 5. Check again

Make sure that the big program has been closed, and then check whether the big program is still running.

ps -ef | grep "python"

It is found that the big program has been closed.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/cm4-xgo-rider-kit-case07-03.png)

If the main program is not closed, running a separate routine will cause the car's screen to be distorted or black. You need to restart XGO Rider before the screen can be restored.
