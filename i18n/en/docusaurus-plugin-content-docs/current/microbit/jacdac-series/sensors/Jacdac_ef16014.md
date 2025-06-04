---
sidebar_position: 6
sidebar_label:  Jacdac Accelerometer Gyroscope
---

# Accelerometer Gyroscope
---
## Introduction

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/jacdac-sensors/jacdac-msr-gyro-01-02.png)

### Features

**Accelerometer Gyroscope**: Can accurately measure an object's angular velocity and acceleration, while real-time tracking of the object's rotation and tilting dynamics, ensuring precise motion sensing and smooth operation of devices.

---
### Specifications

| Item                   | Parameter                          |
| ---------------------- | ---------------------------------- |
| **Name**               | Accelerometer Gyroscope            |
| **SKU**                | EF16014                            |
| **Connection Type**    | Analog Output                      |
| **Operating Voltage**  | 4.15V                              |
| **Product Dimensions** | 38.00mm × 28.20mm (Length × Width) |

---
### Appearance and Dimensions

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/jacdac-sensors/jacdac-msr-gyro-01.png)

---

## Product Links



------

## Quick Start

### Hardware Connection Diagram

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/jacdac-sensors/jacdac-msr-gyro-01-01.png)

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

3. Click "Extensions" in the code drawer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-09.png)

4. Enter "Jacdac" in the pop-up interface and click the search icon. Select the Jacdac software library as shown.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/jacdac-smart-exploration-kit-3.png)

---
#### Step 2:

1. Connect the micro:bit to the computer using a data cable.
   **Note**: If the micro:bit is running a Jacdac program for the first time, please pre-install a blank Jacdac program on the micro:bit first; otherwise, skip this step.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/jacdac-smart-exploration-kit-5.png)

2. Connect the sensor. MakeCode will automatically recognize it and simulate its status. The sensor will provide real-time feedback in the simulation area.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/1jacdac-smart-exploration-kit-6.png)

3. Click "ADD BLOCKS" for the sensor extension module.
   **Note**: When connecting a new sensor, repeat the operation of clicking "ADD BLOCKS" for the sensor extension module.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/jacdac-smart-exploration-kit-7.png)

---
#### Program Example as Shown

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/jacdac-sensors/jacdac-Gyro-01-03.png)


---
## Reference Program Link

https://makecode.microbit.org/_PPLLhc8vYHij



You can also download it via the embedded link:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_PPLLhc8vYHij"
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

## Results

- When the gyroscope tilts left, the micro:bit displays "×".
- When it tilts right, the micro:bit displays "√".
- When it tilts upward, the micro:bit displays "❤️".
- When it tilts downward, the micro:bit displays "♡".
