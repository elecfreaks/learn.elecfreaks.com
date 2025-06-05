---
sidebar_position: 9
sidebar_label: Jacdac Human Infrared Sensor
---

# Human Infrared Sensor

---
## Introduction

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/jacdac-sensors/jacdac-motion-sensor-01-02.png)

### Features

**Human Infrared Sensor:** This sensor can sensitively detect the movement status of surrounding objects and immediately output signals upon detecting dynamic changes. In security monitoring, it automatically captures intruders; in smart lighting, it enables lights to turn on when people are present and off when they leave, enhancing spatial intelligence and energy efficiency.

---
### Specifications

| Item                  | Parameter             |
|---|---|
| **Name**              | Human Infrared Sensor |
| **SKU**               | EF16010               |
| **Connection Type**   | Digital Output        |
| **Operating Voltage** | 4.15V                 |
| **Dimensions**        | 38.00mm×28.20mm (L×W) |

---
### Appearance and Dimensions

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/jacdac-sensors/jacdac-motion-sensor-01.png)

---

## Product Links

None

------

## Quick Start

### Hardware Connection

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/jacdac-sensors/jacdac-motion-sensor-01-01.png)

---
## Usage Tutorial

### Programming Software

[Microsoft MakeCode](https://makecode.microbit.org/#)

------

### MakeCode Programming

#### Step 1: How to Add Jacdac Extension

1. Go to [Microsoft MakeCode](https://makecode.microbit.org/#) and click "New Project".

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-07.png)

2. Enter the project name in the pop-up window and click "Create".

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-11.png)

---
3. Click "Extensions" in the code drawer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-09.png)

4. Enter "Jacdac" in the pop-up interface, click the search icon, and select the Jacdac library as shown.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/jacdac-smart-exploration-kit-3.png)

---
#### Step 2:

1. Connect the micro:bit to the computer with a data cable.
   **Note:** If the micro:bit runs a Jacdac program for the first time, please pre-install a blank Jacdac program on the micro:bit first; otherwise, skip this step.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/jacdac-smart-exploration-kit-5.png)

2. Connect the sensor. MakeCode will automatically recognize it and simulate its status in real time in the simulation area.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/1jacdac-smart-exploration-kit-6.png)

3. Click "ADD BLOCKS" for the sensor extension module.
   **Note:** When connecting a new sensor, repeat the operation of clicking "ADD BLOCKS" for the sensor extension module.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/jacdac-smart-exploration-kit-7.png)

---
#### Program Code Example

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/jacdac-sensors/jacdac-motion-sensor-01-03.png)

---

## Reference Program Link


https://makecode.microbit.org/_3TuVXqXMyUzs

------



You can also download it via the link.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_3TuVXqXMyUzs"
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

When the human infrared sensor detects human movement, the micro:bit displays "√"; otherwise, it displays "×".
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/jacdac-sensors/Jacdac-Motion-11-08.gif)
