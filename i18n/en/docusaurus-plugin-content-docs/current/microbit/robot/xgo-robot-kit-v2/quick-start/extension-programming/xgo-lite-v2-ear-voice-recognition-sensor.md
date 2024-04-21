---
sidebar_position: 4
sidebar_label: XGO-lite V2 Ear - Voice Recognition Sensor
---

# XGO-lite V2 Ear - Speech Recognition Sensor

## Introduction

From the previous introduction, you should know that the XGO Adapter expansion board has GPIO and IIC interfaces on board, which can easily expand sensors, such as Octopus series sensors or PlantX series sensors.

In this tutorial, we will use the voice recognition sensor in the Octopus series of sensors in conjunction with XGO-lite 2 to control the movement of XGO-lite V2 through voice. Let's get started then.

## Material Preparation

1 × micro:bit XGO Robot Kit V2

1 × Octopus Voice recognition sensor

1 × 4pin Dupont wire

Transparent glue

Scissors

Screwdrivers

## Hardware Connection

1. First, you need to unscrew the two screws of the XGO Adapter expansion board with a screwdriver, and insert the 4pin Dupont cable through the bottom end of the robot arm as shown in the figure below and insert it into the pin header of the IIC (G V 19 20) interface (note the order of the connecting wires) . As shown below:

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/robot/xgo-robot-kit-v2/images/microbit-xgo-lite-v2-voice-01.png)

2. Re-fix the XGO Adapter expansion board to the head of the XGO-lite V2 with screws. Stick the transparent glue on the bottom of the voice recognition sensor, connect it with 4pin Dupont wire, and fix it on the XGO-lite V2 body. (Pay attention to the two screw positioning holes below the XGO-lite V2 head where the XGO Adapter expansion board is installed)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/robot/xgo-robot-kit-v2/images/microbit-xgo-lite-v2-voice-04.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/robot/xgo-robot-kit-v2/images/microbit-xgo-lite-v2-voice-02.png)

## Start Programming

This tutorial will program two devices through the graphical programming platform: MakeCode. Please open the official website link of the makecode platform: [MakeCode](https://makecode.microbit.org/#). And follow the steps below to prepare the programming environment.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/robot/xgo-robot-kit-v2/images/microbit-xgo-lite-v2-makecode-01.png)

### Programming environment preparation

1.  Click **New Project**, name the project and **Create**

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/robot/xgo-robot-kit-v2/images/microbit-xgo-lite-v2-makecode-02.png)



2. Click **Extension** and search for **XGO** in the search bar, select the XGO library, and you can load the XGO library into the makecode platform programming environment

   

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/robot/xgo-robot-kit-v2/images/microbit-xgo-lite-v2-makecode-03.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/robot/xgo-robot-kit-v2/images/microbit-xgo-lite-v2-makecode-03-1.png)

3. Click **Extension** and search in the search bar, select "[https://github.com/elecfreaks/pxt-ASR](https://github.com/elecfreaks/pxt-ASR)" to download the speech recognition electronics A code base for building blocks.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/robot/xgo-robot-kit-v2/images/microbit-xgo-lite-v2-voice-03.png)

### Programming Example

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/robot/xgo-robot-kit-v2/images/microbit-xgo-lite-v2-voice-05.png)



Link: https://makecode.microbit.org/_e0YKKbMAAd3p

## Demo

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/robot/xgo-robot-kit-v2/images/microbit-xgo-lite-v2-voice-06.gif)
