---
sidebar_position: 5
---

# MicroBlocks-Pico:ed v2 Quick Start

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-microblocks-1.png)

> This tutorial will introduce you to the way you can programmatically interact with Pico:ed v2 on the MicroBlocks platform.

## MicroBlocks Introduction

MicroBlocks is an open source blocks programming platform that allows you to learn programming while interacting with your microcontroller. Although MicroBlocks is just one of many graphical programming platforms, what really makes MicroBlocks stand out is its combination of live programming and autonomous operation.

Its excellent features are listed below:

* MicroBlocks is a real-time programming environment, no need to wait for the program to be compiled and downloaded, just click on the code block and see the result instantly.
* MicroBlocks allows you to control each component by writing separate scripts for each and and running them at the same time.
* MicroBlocks can run on a wide range of microcontroller boards. Scripts controlling various components run the same on different machines with similar components, and are ignored if any component is not present. So the code you write is highly portable.
* MicroBlocks scripts are stored on the microcontroller like a memory stick. They can be shared by exchanging the microcontrollers and loading on-board scripts to the IDE for further editing, providing easy access and sharing.

> For more information about MicroBlocks programming platform, you can visit its official website: [MicroBlocks official website](https://microblocks.fun/).

## Programming Preparation

First, you need to open the MicroBlocks official website in your computer browser and click the "**Run**" button in the upper right corner to enter the block programming interface.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-microblocks-2.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-microblocks-3.png)

Click on the small gear icon in the upper left corner of the MicroBlocks programming platform screen, select the "**updata firmware on board**" option from the drop-down options, and select "**Elecfreaks Pico:ed**" firmware.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-microblocks-4.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-microblocks-5.png)

According to the pop-up window that appears, first you need to press the "**BOOTSEL**" button on the back of the Pico:ed v2 (* where ① is the BOOTSEL button and ② is the RESET button*), and connect the Pico:ed v2 to your computer using the USB cable, then click the "**OK**" button on the MicroBlocks platform pop-up window to save the firmware to the "**RPI-RP2**" disk.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-microblocks-6.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-microblocks-7.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-microblocks-8.png)

After you have finished loading the firmware of Pico:ed v2 to the microcontroller, you still need to connect MicroBlocks platform with Pico:ed v2 before you start programming. Click on the USB cable female icon in the menu bar, click on the "**connect**" option, and in the pop-up window, select "**PicoArduino**", (*COM19 is the recognized port number of this computer, the number shown here may be different than the one shown on your computer). When you click "**connect**" you can see the menu bar USB cable female icon change to a green background, which proves that it has been successfully connected. Now you can start programming.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-microblocks-9.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-microblocks-10.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-microblocks-11.png)

## Start programming

Next, we will learn to program each programmable component of the Pico:ed v2 board, such as the A/B buttons, the 7x17 LED screen, the buzzer, the gold finger pins, and the on-board LED indicator (pin number 25) that is unique to the Pico:ed v2. Let's get started.

#### Light up the Pico:ed v2 on-board LED logo indicator

Tap on the "**Output**" category in the Block Categories menu and drag the "**set user LED** "  block to the edit area on the right. The "**set user LED**" block has two modes(on/off) corresponding to the Pico:ed v2 on-board LEDs(on/off) status, see them in the figure below:

> Tip: To program in MicroBlocks platform, you don't need to download your program to the microcontroller. Just click on the blocks in the Blocks Palette or the ones you have dragged to the editing area and you can see the results immediately.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-microblocks-12.png)

#### Light up the Pico:ed v2 LED light matrix screen

To program the Pico:ed v2 LED light matrix screen you need to add the " **TFT**" library. Click on the "**Libraries**" right side of the "**+** ", select "**Graphics**" from the options that appear, then double click on the "**TFT**" library, or single-click and select "**Open** " and you're done adding the TFT library to the IDE.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-microblocks-13.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-microblocks-14.png)

##### Lights up each LED on the 7*17 LED matrix screen

The MicroBlocks platform defines the coordinates of the LEDs in the upper left corner of the Pico:ed v2 7*17 LED matrix screen as zero (0, 0) and the coordinates of the LEDs in the lower right corner as (16, 6). You can use the "set TFT pixel x()y()to()" block to light up or light down each LED.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-microblocks-16.png)

Examples are as follows:

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-microblocks-15.png)

[Link to demonstration programs such as lighting LEDs by coordinates](https://microblocks.fun/run/microblocks.html#scripts=GP%20Scripts%0Adepends%20%27TFT%27%0A%0Ascript%20549%2088%20%7B%0AwhenStarted%0Aforever%20%7B%0A%20%20%27%5Btft%3AsetPixel%5D%27%200%200%20%28colorSwatch%2035%20190%2030%20255%29%0A%20%20waitMillis%20500%0A%20%20%27%5Btft%3AsetPixel%5D%27%2016%200%20%28colorSwatch%2035%20190%2030%20255%29%0A%20%20waitMillis%20500%0A%20%20%27%5Btft%3AsetPixel%5D%27%2016%206%20%28colorSwatch%2035%20190%2030%20255%29%0A%20%20waitMillis%20500%0A%20%20%27%5Btft%3AsetPixel%5D%27%200%206%20%28colorSwatch%2035%20190%2030%20255%29%0A%20%20waitMillis%20500%0A%20%20%27%5Bdisplay%3AmbDisplayOff%5D%27%0A%20%20waitMillis%20500%0A%7D%0A%7D%0A%0A)

There are also blocks for drawing shapes in the TFT block library for you to try them out. Here is a very interesting case for reference:

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-microblocks-1.gif)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-microblocks-17.png)

[Links to graphical case programs](https://microblocks.fun/run/microblocks.html#scripts=GP%20Scripts%0Adepends%20%27TFT%27%0A%0Ascript%20443%2089%20%7B%0AwhenStarted%0Aforever%20%7B%0A%20%20%27%5Bdisplay%3AmbDisplayOff%5D%27%0A%20%20%27%5Btft%3Arect%5D%27%200%202%203%203%20%28colorSwatch%2035%20190%2030%20255%29%0A%20%20%27%5Btft%3Arect%5D%27%204%201%205%205%20%28colorSwatch%2035%20190%2030%20255%29%0A%20%20%27%5Btft%3Arect%5D%27%2010%200%207%207%20%28colorSwatch%2035%20190%2030%20255%29%0A%20%20waitMillis%20500%0A%20%20%27%5Bdisplay%3AmbDisplayOff%5D%27%0A%20%20%27%5Btft%3AroundedRect%5D%27%200%202%203%203%202%20%28colorSwatch%2035%20190%2030%20255%29%0A%20%20%27%5Btft%3AroundedRect%5D%27%204%201%205%205%202%20%28colorSwatch%2035%20190%2030%20255%29%0A%20%20%27%5Btft%3AroundedRect%5D%27%2010%200%207%207%202%20%28colorSwatch%2035%20190%2030%20255%29%0A%20%20waitMillis%20500%0A%20%20%27%5Bdisplay%3AmbDisplayOff%5D%27%0A%20%20%27%5Btft%3Aline%5D%27%200%200%206%206%20%28colorSwatch%2035%20190%2030%20255%29%0A%20%20%27%5Btft%3Aline%5D%27%200%200%2016%200%20%28colorSwatch%2035%20190%2030%20255%29%0A%20%20%27%5Btft%3Aline%5D%27%2016%200%2016%206%20%28colorSwatch%2035%20190%2030%20255%29%0A%20%20waitMillis%20500%0A%20%20%27%5Bdisplay%3AmbDisplayOff%5D%27%0A%20%20%27%5Btft%3Atriangle%5D%27%201%201%2015%201%206%206%20%28colorSwatch%2035%20190%2030%20255%29%0A%20%20waitMillis%20500%0A%20%20%27%5Bdisplay%3AmbDisplayOff%5D%27%0A%20%20waitMillis%20500%0A%20%20for%20i%2017%20%7B%0A%20%20%20%20local%20%27brightness%27%20%28i%20%2B%200%29%0A%20%20%20%20%27%5Btft%3Aline%5D%27%20%28i%20-%201%29%200%20%28i%20-%201%29%206%20%285%20%2A%20i%29%0A%20%20%7D%0A%20%20waitMillis%201000%0A%7D%0A%7D%0A%0A)

#### A/B key programming

Programming button interactions is relatively easy to learn. You can use the following commands directly from the "**Control**" and "**Input**"  Blocks Categories menu.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-microblocks-18.png)

An example of A/B button programming is as follows.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-microblocks-19.png)

[A\B Button Programming Case Links](https://microblocks.fun/run/microblocks.html#scripts=GP%20Scripts%0Adepends%20%27TFT%27%0A%0Ascript%20725%20128%20%7B%0AwhenButtonPressed%20%27A%27%0A%27%5Btft%3Arect%5D%27%200%200%2017%207%20%28colorSwatch%2035%20190%2030%20255%29%0A%7D%0A%0Ascript%20727%20216%20%7B%0AwhenStarted%0Aforever%20%7B%0A%20%20if%20%28buttonB%29%20%7B%27%5Bdisplay%3AmbDisplayOff%5D%27%7D%0A%7D%0A%7D%0A%0A)

#### Buzzer Programming

To program the buzzer, you need to add the "**Ringtone**" block library and the "**Tone**" block library. As shown in the figure below.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-microblocks-20.png)

The "**play ringtone**" block in the "**Ringtone**" library allows you to compose any ringtones you want. If you are looking for already written ringtones, the website link below has a collection of nearly 10,000 ringtones for you to choose from.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-microblocks-21.png)

[Ringtone Library Website Link](http://microblocks.fun/mbtest/NokringTunes.txt)

The "**Tone**" library allows you to set how long to play a specific note, and also how often to play it, etc.

An example of how the buzzer is programmed is as follows.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-microblocks-22.png)

[Link to buzzer case demo program](https://microblocks.fun/run/microblocks.html#scripts=GP%20Scripts%0Adepends%20%27Ringtone%27%20%27Tone%27%0A%0Ascript%20597%20128%20%7B%0AwhenButtonPressed%20%27B%27%0A%27play%20ringtone%27%20%27Pacman%3Ad%3D16%2Co%3D6%2Cb%3D140%3A%0Ab5%2Cb%2Cf%23%2Cd%23%2C8b%2C8d%23%2Cc%2Cc7%2Cg%2Cf%2C8c7%2C8e%2Cb5%2Cb%2Cf%23%2Cd%23%2C8b%2C8d%23%2C32d%23%2C32e%2Cf%2C32f%2C32f%23%2Cg%2C32g%2C32g%23%2Ca%2C8b%27%0A%7D%0A%0Ascript%20596%20248%20%7B%0AwhenStarted%0Anum%20%3D%200%0A%7D%0A%0Ascript%20781%20239%20%7B%0AwhenButtonPressed%20%27B%27%0Anum%20%2B%3D%2050%0A%27play%20frequency%27%20num%20500%0A%7D%0A%0A)

#### Programming the Pico:ed v2 pins

Next we will use the Pico:ed Starter Kit to demonstrate the control of LEDs by the MicroBlocks platform, using the Pico:ed v2 gold finger pins. This example can also be reproduced if you have alligator wires, leds, 100Ω resistors and other components.

Pico:ed Starter Kit purchasing link: [Pico:ed Starter Kit ](https://www.elecfreaks.com/elecfreaks-pico-ed-starter-kit.html).

Hardware Connections

Connect your components according to the following pictures.

1. connect the short pins of the LEDs to GND.

2. Connect the long pins of the LEDs to the P0 and P1 ports through a resistor.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-microblocks-23.png)

After the connection is completed, the picture is as follows.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-microblocks-24.png)

The Pico:ed v2 pin programming demonstration case is programmed as follows.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-microblocks-25.png)

[Link to Pico:ed v2 pin programming demo case](https://microblocks.fun/run/microblocks.html#scripts=GP%20Scripts%0A%0Ascript%20576%20175%20%7B%0AwhenStarted%0Aforever%20%7B%0A%20%20digitalWriteOp%200%20true%0A%20%20digitalWriteOp%201%20false%0A%20%20waitMillis%20500%0A%20%20digitalWriteOp%200%20false%0A%20%20digitalWriteOp%201%20true%0A%20%20waitMillis%20500%0A%7D%0A%7D%0A%0A)

Case presentation

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-microblocks-2.gif)

#### Concluding remarks

The above is a simple demonstration of how Pico:ed v2 is programmed in MicroBlocks platform. You can explore more interesting and fun programming cases. We also welcome you to share your programs with us at our official media account. We will update the collection with the selected programs and you are welcome to follow and participate in the discussion:

Facebook: [https://www.facebook.com/ElecFreaksTech](https://www.facebook.com/ElecFreaksTech)

Discord: [https://discord.gg/WuJ8xPW8jQ](https://discord.gg/WuJ8xPW8jQ?fbclid=IwAR3jqK85hconVmG3LBhdmDN5_kTne63ES7t9OKP6dX15JLsPxbxIKYLiS-g)

YouTube: [https://www.youtube.com/ELECFREAKS](https://www.youtube.com/ELECFREAKS)

Twitter: [https://twitter.com/ELECFREAKS](https://twitter.com/ELECFREAKS?fbclid=IwAR3Q5Ne8aSKifktAFkGJfC1IQcI0X8cgrWk4kBDnAdyG7kIEPlRDXuh4dho)

Official web: [https://shop.elecfreaks.com](https://shop.elecfreaks.com/?fbclid=IwAR0fYII-qA1lU7TV8ye3Tl9hs4wyHQ0qtHF1WCQnTYF29Okj1lGGaGXeZbk)
