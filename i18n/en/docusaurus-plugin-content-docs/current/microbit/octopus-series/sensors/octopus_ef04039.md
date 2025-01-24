﻿# Octopus Analog Voltage Divider Brick OBVoltage(EF04039)

## Introduction

The Voltage Divider can detect the supply voltage upto 50V and  is based on resistor(1K and 15K Precision resistors).

 ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/sensor/octopus-sensors/sensor/images/fl6I2w5.jpg)



## Characteristics

 The voltage detection module allows the input voltage to reduce 16 times. As the micro:bit analog input voltage is 3.3V, so voltage detection module's input voltage can not be greater than the 3.3Vx16 = 52.8V. Because of the micro:bit's 10 bit ADC, that means sampling resolution are 0.003225V（3.3V / 1023）.So the module's minimum input voltage is 0.00489Vx3.3=0.01064V.
 Tips: All of Octopus bricks have supported Scratch programming.

## Specifications


Item | Parameter
:-: | :-:
SKU|EF04039
Type|Analog
Input Voltage（DC）|Utmost: 50V，Lowest: 0.01064V
Detection Scope|Upto 50V

## Outlook and Dimensions

 ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/sensor/octopus-sensors/sensor/images/doEjdcR.png)

## Quick to Start

### Materials used and connection diagram

 Connect to the P1 port as the picture shows

  Take sensor:bit for example

 ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/sensor/octopus-sensors/sensor/images/fcHzFyT.png)

### Add Package

### Program as the picture shows

 ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/sensor/octopus-sensors/sensor/images/6DO11mU.png)

### Reference
Links: [https://makecode.microbit.org/_AXD2gM3J36Jz](https://makecode.microbit.org/_AXD2gM3J36Jz)

You can also download the links below:


<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_AXD2gM3J36Jz"
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
 The current voltage is showing on the micro:bit.

## Relevant Cases


## Technique Files
