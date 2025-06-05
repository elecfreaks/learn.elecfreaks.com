# Case 6: Human motion detection alarm

## Introduction

When the human infrared detection sensor detects a person moving, the light ring will light up and an alarm will sound.

---

## Case purpose

1. Understand the human infrared sensor.

2. Understand the light ring.

3. Understand the counting loop building block.

---

## Required materials

|Item|Picture|Quantity|
|--|--|--|
|micro:bit V2|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/microbit%20%E6%AD%A3(1).png)|1|
|Jacdac expansion board|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20bit.png)|1|
|Jacdac 10cm connection line|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac-smart-exploration-kit-10cm-cable.png)|2|
|Human infrared sensors|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20Motion%20Sensor.png)|1|
|Light Ring|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20LED%20Ring.png)|1|
|USB Cable|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/usb%20cable1.png)|1|

---
## Sensor principle description:
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/Jacdac%20Motion%20Sensor-1.png)

**Principle description**:

Human body red sensor: a sensor that senses human movement.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/Jacdac%20LED%20Ring-1.png)

**Principle description**:

Light ring: a circular light ring composed of 8 RGB lights.

---

## Connection diagram

As shown in the figure below, insert the micro:bit into the Jacdac expansion board, and use the connecting wire to connect the human infrared sensor and the light ring to the gold finger interface of the Jacdac expansion board in a star shape.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/hardware-connection-diagram/jacdac-smart-exploration-kit-case-06.png)

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

---
3. Click "Extend" in the code drawer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-09.png)

4. In the pop-up interface, enter "Jacdac" and click the search icon, select the Jacdac software library, as shown in the figure.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/jacdac-smart-exploration-kit-3.png)

---
### Step 2：
1. Connect micro:bit to the computer with a data cable.

   **Note**: If the micro:bit is running the Jacdac program for the first time, please pre-install a blank Jacdac program on the motherboard, otherwise skip this step.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/jacdac-smart-exploration-kit-5.png)

2. Connect the sensor, MakeCode will automatically identify and simulate it, and the sensor will provide real-time feedback of the sensor status in the simulation area.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/1jacdac-smart-exploration-kit-6.png)

3. Click "ADD BLOCKS" sensor expansion module.

   **Note**: To connect a new sensor, repeat the "Click "ADD BLOCKS" sensor expansion module" operation proces

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/jacdac-smart-exploration-kit-7.png)

---
## Write the program as shown
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/program/jacdac-smart-exploration-kit-%20case-0116.png)

## Reference program link:

[https://makecode.microbit.org/S21420-49463-47317-16127](https://makecode.microbit.org/S21420-49463-47317-16127
)

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
        src="https://makecode.microbit.org/S21420-49463-47317-16127"
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

When the human infrared detection sensor detects a person moving, the light ring will light up and an alarm will sound.
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/hardware-connection-diagram/jacdac-smart-exploration-kit-case-0621.gif)

## Thinking

What other aspects of life can the human infrared sensor be used in?
