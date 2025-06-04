---
sidebar_position: 2
sidebar_label: Jacdac Rotary Encoder
---

# Rotary Encoder

------

## Introduction![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/jacdac-sensors/jacdac-rotray-encoder-01-02.png)

### Features

**Rotary Encoder Sensor:** Provides precise rotational feedback. Through rotation, it generates encoded signals to accurately reflect rotation direction and step count. It is widely used in parameter adjustment scenarios such as volume control and menu selection, allowing users to make fine adjustments while rotating.

------

### Specifications

| Item                  | Parameter             |
| --------------------- | --------------------- |
| **Name**              | Rotary Encoder        |
| **SKU**               | EF16003               |
| **Connection**        | Analog Output         |
| **Operating Voltage** | 4.15V                 |
| **Product Size**      | 38.00mm×28.00mm (L×W) |

------

### Appearance and Dimensions

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/jacdac-sensors/jacdac-rotray-encoder-01.png)

---
## Product Links

None

------

## Quick Start

### Hardware Connection Diagram

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/jacdac-sensors/jacdac-rotray-encoder-01-01.png)

---
## Usage Tutorials

### Programming Software

[Microsoft MakeCode](https://makecode.microbit.org/#)

------

### MakeCode Programming

#### Step 1: Adding the Jacdac Extension

1. Go to [Microsoft MakeCode](https://makecode.microbit.org/#) and click **New Project**.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-07.png)

2. Enter a project name in the pop-up window and click **Create**.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-11.png)

3. Click **Extensions** in the code drawer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-09.png)

4. Type "Jacdac" in the search bar, click the magnifying glass icon, and select the **Jacdac** software library as shown.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/jacdac-smart-exploration-kit-3.png)

---
#### Step 2:

1. Connect the micro:bit to your computer using a data cable.
   **Note**: If this is the first time running a Jacdac program on the micro:bit, preload a blank Jacdac program first. Skip this step if already done.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/jacdac-smart-exploration-kit-5.png)

2. Connect the sensor. MakeCode will automatically detect it and simulate the sensor status in the emulator.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/1jacdac-smart-exploration-kit-6.png)

3. Click **ADD BLOCKS** for the sensor extension module.
   **Note**: Repeat this step each time you connect a new sensor.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/jacdac-smart-exploration-kit-7.png)

---
#### Program Code

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/jacdac-sensors/jacdac-rotray-encoder-sensor-01-03(1).png)

---
## Reference Program

Link:
https://makecode.microbit.org/_1jp3gk6amULU

------



You can also download it via the embedded link below:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_1jp3gk6amULU"
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

When the rotation angle of the rotary encoder is **> 0**, the micro:bit displays "√"; otherwise, it displays "×".
