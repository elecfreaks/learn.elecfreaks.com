# Case 2: Visualized Sound

## Introduction

Use the microphone of micro:bit to capture the sound loudness and the strength of micro:bit v2 analyzer to control the light ring through the jacdac cable. Press the "B" button on the motherboard to turn on the function; press the "A" button to turn off the function.

---

## Case Purpose

1. Understand the light ring and what RGB color is.

2. Understand the light ring programming blocks in MakeCode.

---

## Required Materials

|Item|Picture|Quantity|
|--|--|--|
|micro:bit V2|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/microbit%20%E6%AD%A3(1).png)|1|
|Jacdac expansion board|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20bit.png)|1|
|Jacdac 10cm connection wire|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac-smart-exploration-kit-10cm-cable.png)|1|
|Light Ring|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20LED%20Ring.png)|1|
|USB Cable|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/usb%20cable1.png)|1|

---
## Sensor Principle Description
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/Jacdac%20LED%20Ring-1.png)

**Principle description**:

Light ring: a circular light ring composed of 8 RGB lights.

---

## Connection diagram

As shown in the figure below, insert the micro:bit into the Jacdac expansion board and use the connecting wire to connect the light ring to the gold finger interface of the Jacdac expansion board.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/hardware-connection-diagram/jacdac-smart-exploration-kit-case-02.png)

---
## Programming software

[Microsoft Makecode](https://makecode.microbit.org/#)

---

## Makecode programming

### Step 1: How to add Jacdac extension

1. Enter [Microsoft Makecode](https://makecode.microbit.org/#) and click "New Project".

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-07.png)

2. In the pop-up window, enter a project name and click Create.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-11.png)


3. Click "Extend" in the code drawer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-09.png)

4. In the pop-up interface, enter "Jacdac" and click the search icon, select the Jacdac software library, as shown in the figure.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/jacdac-smart-exploration-kit-20.png)

---
### Step 2：
1. Connect micro:bit to the computer with a data cable.
   
   **Note**: If the micro:bit is running the Jacdac program for the first time, please pre-install a blank Jacdac program to the micro:bit, otherwise skip this step.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/jacdac-smart-exploration-kit-5.png)

2. Connect the sensor, MakeCode will automatically identify and simulate it, and the sensor will provide real-time feedback of the sensor status in the simulation area.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/1jacdac-smart-exploration-kit-6.png)

3. Click on "ADD BLOCKS" sensor expansion module.
   
   **Note**: To connect a new sensor, repeat the "Click on "ADD BLOCKS" sensor expansion module" operation process.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/jacdac-smart-exploration-kit-7.png)

---
## Write the program as shown
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/program/jacdac-smart-exploration-kit-case-0112.png)---

## Reference program link

[https://makecode.microbit.org/_fqJ0EwTMFH12](https://makecode.microbit.org/_fqJ0EwTMFH12)

You can also download the program directly from the following webpage, and start running the program after downloading.

---

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_fqJ0EwTMFH12"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

---
## Result

The microphone of micro:bit detects the ambient sound volume, and the LED light of the light ring will jump in a circle according to the volume of the sound. Press button A on the micro:bit to turn on the LED light, and press button B on the motherboard to turn off the LED light.
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/hardware-connection-diagram/jacdac-smart-exploration-kit-case-0221.gif)

## Thinking

What is the difference between decibel and frequency of sound?

