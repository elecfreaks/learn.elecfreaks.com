# Lesson 03 Trimpot

 ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/circuit-design/microbit-starter-kit/images/eN8vvty.jpg)

## Introduction:

Trimpot （or potentiometer) is a kind of common pressure adjustment components. In the following experiment, we are going to read output voltage on trimpot and display it on the  micro:bit 5*5 LED screen with bar graph.

## Components List:

### Hardware:

- 1 x Micro:bit Board
- 1 x Micro-B USB Cable
- 1 x Microbit Breadboard Adapter
- 1 x Transparent Breadboard - 83 * 55 mm
- 1 x 10K Trimpot
- n x Breadborad jumper wire 65pcs pack

***Tips: If you want to buy all components above, you may need Elecfreaks Micro:bit [Starter Kit](https://www.elecfreaks.com/micro-bit-starter-kit.html) .***

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/circuit-design/microbit-starter-kit/images/W4tseua.jpg)

## Major Components Introduction

### Trimpot

Trimpot is a kind of adjustable electronic components. It contains a resistor and a rotary or sliding system. When add an outer voltage on the two fixed contact spots of the resistor,  the contact spot of the resistor can be changed by the rotary or the sliding system,  a voltage with certain relationship with the place of movable contact spot is formed between movable contact spot and two fixed contact spots. Most of the time, it works as a voltage divider.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/circuit-design/microbit-starter-kit/images/uhr2hkg.jpg)

## Experimental Procedure

### Hardware Connection
Connect your components according to the picture below:

- 1.Connect the P0 port of the breadboard adapter with the S port of the Trimpot.
- 2.Connect the other two ports with the GND and 3V power supply ports.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/circuit-design/microbit-starter-kit/images/ONL9HWv.jpg)

You would see as  below after you finish the connection:

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/circuit-design/microbit-starter-kit/images/dFGjHMH.jpg)

### Software Programming

Click to open [Microsoft Makecode](https://makecode.microbit.org/), write the following code in the editor.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/circuit-design/microbit-starter-kit/images/JHZUvh2.png)

### Program as the picture shows:

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/circuit-design/microbit-starter-kit/images/PinA4U7.png)

### Details for the code:
- Analog read the signal(0~1023) from P0 port and show it on the micro:bit in the form of bar graph.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/circuit-design/microbit-starter-kit/images/PinA4U7.png)

### Reference
Links:[https://makecode.microbit.org/_A2a4C65woMoc](https://makecode.microbit.org/_A2a4C65woMoc)

You can also download the links directly below:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_A2a4C65woMoc"
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

Rotate the Trimpot button, voltage value will be displayed on micro:bit in the form of bar graph. When voltage read is “0”, the LED screen display a pixel spot only. While the voltage becomes 3.3V, LED screen will be fully illuminated.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/circuit-design/microbit-starter-kit/images/D5VDTS5.gif)


## Exploration

If we want to use Trimpot to adjust the brightness of a LED, how can we design the circuit and program?

## FAQ
