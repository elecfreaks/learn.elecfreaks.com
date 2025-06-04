---
sidebar_position: 5
sidebar_label:  Jacdac Soil Moisture Sensor
---

# Soil Moisture Sensor

------

## Introduction

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/jacdac-sensors/jacdac-%20moisture-sensor-01-02.png)

### Features

**Soil Moisture Sensor:** Detects the moisture content of specific media, such as soil. In horticulture, it helps gardeners accurately assess soil dryness for scientific irrigation. In industrial processes requiring humidity control, it provides critical data to maintain optimal humidity levels and ensure smooth operations.

------

### Specifications

| Item                  | Parameter             |
| --------------------- | --------------------- |
| **Name**              | Soil Moisture Sensor  |
| **SKU**               | EF16006               |
| **Connection**        | Analog Output         |
| **Operating Voltage** | 4.15V                 |
| **Product Size**      | 38.00mm×81.00mm (W×L) |

------

### Appearance and Dimensions

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/jacdac-sensors/jacdac-%20moisture-sensor-01.png)

---

## Product Links

None

------

## Quick Start

### Hardware Connection Diagram

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/jacdac-sensors/jacdac-%20moisture-sensor-01-01.png)

---
## Usage Tutorials

### Programming Software

[Microsoft MakeCode](https://makecode.microbit.org/#)

------

### MakeCode Programming

#### Step 1: Adding the Jacdac Extension

1. Go to [Microsoft MakeCode](https://makecode.microbit.org/#) and click **New Project**.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-07.png)

2. 
   Enter a project name in the pop-up window and click **Create**.

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

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/jacdac-sensors/Jacdac-Moisture-Sensor-01-03.png)


---
## Reference Program


https://makecode.microbit.org/_AAALazD9MevC

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
        src="https://makecode.microbit.org/_AAALazD9MevC"
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

If the soil moisture sensor reading is <50%, the micro:bit displays "√"; otherwise, it displays "×".
