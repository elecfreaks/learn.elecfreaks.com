﻿# case 05 Water Level Alarming

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-home-kit/images/ll8HfKH.jpg)
## Goal



 Make a water level alarming.

## Materials


1 x [ELECFREAKS micro:bit Smart Home Kit](https://www.elecfreaks.com/micro-bit-smart-home-kit.html)
 1 x tank

## Background

### What is water level alarming
 We can't live without water, but much water will cause flood. Water level alarming can detect water level, micro:bit will received signals when the water level over security line and control lift pump to pumping.

### Water level alarming operation
 When micro：bit received signal of soil moisture sensor,relay will drive and supply power to lift pump for pumping redundant water.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-home-kit/images/OsjzuWx.png)

## Practical operation

Preparing a tank and paste devices as below piture:

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-home-kit/images/ztW3W42.jpg)

## Hardware connect


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-home-kit/images/LRBAV68.png)

While connecting the cables with the Relay, please use screwdrivers to loosen the screws on the Relay first to make sure the cables get connected properly.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-home-kit/images/smart_home_kit_case_05_06.png)




## Software

[makecode](https://makecode.microbit.org/#)

Edge Connector Data Sheet



## Programming

### Step 1
Go to MakeCode page, click Advanced in the code block and click on Extensions.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-home-kit/images/2qCyzQ7.png)

We need to add a new codebase for programming of smart home. Finding “Add Package” in the bottom of code block and click it. Then a message box will show up, search “smart home"， and download this new codebase.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-home-kit/images/QR2s7LD.png)

***Note:*** If there is a hint says some codebase will be deleted because of incompatibility. Don't worry. You could go ahead as the hint or build a new item in item menu bar.

### Step 2

Snap if statement into forever,set analog read pin P2 > 500, that's say when P2 > 500, the water level is higher than security line.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-home-kit/images/xa3pCF4.png)

### Step 3

Set start melody "ba ding" repeating once as alarming voice, set digital write pin P1 to 1 as driving the pumping.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-home-kit/images/zhdgMcI.png)

### Step 4
Else，set digital write pin P1 to 0 as turning off the pump.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-home-kit/images/lfQVbVh.png)

### Programming

Make code：[https://makecode.microbit.org/_9KqHhp1J45ho](https://makecode.microbit.org/_9KqHhp1J45ho)

You also could directly download program visit website as below:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_9KqHhp1J45ho"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

## Result

When the water level over security line,micro:bit will control lift pump to pumping.

Pumping:

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-home-kit/images/991WoLx.jpg)

Stop pumping:

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/wisdom-life/microbit-smart-home-kit/images/hPf3xtQ.jpg)

## Think

How to use micro:bit control water level in fish tank ?

## Questions



## More information
