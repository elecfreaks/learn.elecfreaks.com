---
sidebar_position: 3
sidebar_label: XGO-lite V2 Obtain ambient temperature and humidity data
---

# XGO-lite V2 Obtain ambient temperature and humidity data

## Introduction

From the previous introduction, you should know that the XGO Adapter expansion board has GPIO and IIC interfaces on board, which can easily expand sensors, such as Octopus series sensors or PlantX series sensors.

In this tutorial, we will use the DHT11 temperature and humidity sensor in the Octopus series of sensors to combine with XGO-lite 2 to obtain the temperature and humidity data of the surrounding environment. Let's get started then.

## Material Preparation

1 × micro:bit XGO Robot Kit V2

1 × Octopus Temperature And Humidity Sensor

1 × 3pin electronic building block buckle cable

Transparent glue

Scissors

Screwdrivers

## Hardware Connection

1. First, you need to unscrew the two screws of the XGO Adapter expansion board with a screwdriver, and insert the 3pin electronic building block buckle cable through the bottom end of the robot arm as shown in the figure below and insert it into the pin header of the GPIO interface (note the order of the connection cables). As shown below:![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite-v2-DHT11-01.png)

2. Re-fix the XGO Adapter expansion board to the head of the XGO-lite V2 with screws. Stick the transparent glue on the bottom of the DHT11 sensor of the Octopus series, connect it to the buckle end of the 3pin electronic building block buckle cable, and fix it to the XGO-lite V2 body. (Pay attention to the two screw positioning holes below the XGO-lite V2 head where the XGO Adapter expansion board is installed)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite-v2-DHT11-02.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite-v2-DHT11-03.png)

## Start Programming

This tutorial will program two devices through the graphical programming platform: MakeCode. Please open the official website link of the makecode platform: [MakeCode](https://makecode.microbit.org/#). And follow the steps below to prepare the programming environment.![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite-v2-makecode-01.png)

### Programming environment preparation

1.  Click **New Project**, name the project and **Create**

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite-v2-makecode-02.png)



2. Click **Extension** and search for **XGO** in the search bar, select the XGO library, and you can load the XGO library into the makecode platform programming environment

   

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite-v2-makecode-03.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite-v2-makecode-03-1.png)

3. Click **Extension** and search in the search bar, select **iot-environment-kit** library, you can load **iot-environment-kit** library into makecode platform programming environment

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite-v2-DHT11-04.png)

### Programming Example

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite-v2-DHT11-05.png)



Link: https://makecode.microbit.org/_KksKV6Hz7h5H

## Demo

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite-v2-DHT11-06.gif)
