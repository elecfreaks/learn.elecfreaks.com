---
sidebar_position: 1
sidebar_label: Jacdac Power Module
---

# Power Module

------

## Introduction

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/jacdac-sensors/jacdac-power-01-02.png)

### Features

**Power Module:** It is responsible for power supply and management of the entire system, stably outputting voltage and current suitable for each module to ensure stable system operation.

------

### Specifications

| Item                  | Parameter             |
| --------------------- | --------------------- |
| **Name**              | Power Module          |
| **SKU**               | EF16008               |
| **Connection Type**   | Power Supply          |
| **Operating Voltage** | 5V                    |
| **Dimensions**        | 48.00mm×31.40mm (L×W) |

------

### Appearance and Dimensions

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/jacdac-sensors/jacdac-power-01.png)

---
## Product Links

None

---

## Usage Tutorial

### Hardware Connection Diagram

**Note:** Please prepare a 5V power supply separately.![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/jacdac-sensors/jacdac-power-01-00.png)

### Methods to Turn On/Off Port Power Output

1. Go to the [Web Device Debugging Interface]（https://jacdac.github.io/jacdac-docs/dashboard/）

 ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/jacdac-sensors/jacdac-power-01-08.png)

2.Connect the micro:bit to a computer via a USB data cable, click "Device Dashboard" and then "Connect" to establish a device connection.

 ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/jacdac-sensors/jacdac-power-01-04.png)

3.Click "Connect USB".

 ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/jacdac-sensors/jacdac-power-01-05.png)

4.Select the corresponding serial port and click "Connect".

 ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/jacdac-sensors/jacdac-power-01-06.png)

5.You can turn on or off the power output of the power module's ports in the web debugging interface.

If the power output of a port is turned off, the port's LED indicator will turn off. Conversely, if the power output of a port is turned on, the port's LED indicator will turn on.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/jacdac-sensors/jacdac-power-01-07.png)

---
## Hardware Connection Diagram

 ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/jacdac-sensors/Jacdac-Servo-01-01.png)

**Note:** The power module needs to be connected to a 5V power supply.

## Programming Software

[Microsoft MakeCode](https://makecode.microbit.org/#)

## MakeCode Programming

#### Step 1: How to Add Jacdac Extension

1. Go to [Microsoft MakeCode](https://makecode.microbit.org/#) and click "New Project".

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-07.png)

2. Enter the project name in the pop-up window and click "Create".

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-11.png)

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

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/jacdac-sensors/jacdac-power-01-03.png)


---
## Reference Program Link

https://makecode.microbit.org/_bW1btg9VzLg9



You can also download and run it via the embedded link:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_bW1btg9VzLg9"
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

The servo rotates from 0° to 90°, then to 180°, and then back from 180° to 0°.
