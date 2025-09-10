---
sidebar_position: 5
sidebar_label: Case5:Weather Pal
---

# Weather Pal

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/tupian/nezha-pro-ocean-kit-step-05-00.png.png)

## Story Introduction

As the ship sailed away from the port, the outline of the coastline gradually became hazy, and the lighthouse on the breakwater shrank into a tiny spot on the horizon. The Hope was navigating through the vast ocean, and the noonday sun made the deck burning hot. Ian squatted down and stared at his shadow in the sunlight. He thought to himself, how nice it would be to know the current temperature and humidity. Could his friends help make this wish come true?

---

## Teaching Preparation

| Name | Illustration |
| :----: | :------------: |
| Nezha Pro Ocean Kit | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/nezha-pro-ocean-kit-products-introduction-002.png.png) |

---
## Teaching Objectives
1. Understand OLED display.

2. Understand DHT11 temperature and humidity sensor.

3. Master the use of OLED and DHT11 building blocks.

---
## Learning and Exploration

Discuss with friends where temperature and humidity sensors are used in daily life and why people need to know temperature and humidity?

## Construction Steps

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case05/nezha-pro-ocean-kit-step-05-1.png.pdf" type="application/pdf" width="100%" height="600px" />

---
## Hardware Connection
The OLED display is connected to the "IIC" port of the Nezha expansion board;

The DHT11 temperature and humidity sensor is connected to the "J1" port of the Nezha expansion board.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case05/nezha-pro-ocean-kit-step-05-2.png.png)


---
## Code Programming

Go to "[makecode.microbit.org](https://makecode.microbit.org)" and click **New Project**.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-07.png)

Enter the project name in the pop-up window and click **Create**.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-11.png)

Click **Extensions** in the code drawer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-09.png)

In the pop-up interface, enter **nezha pro** and click the search icon. After the **nezha pro** software library is displayed, click it. Load the PlanetX software library in the same way.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-10.png)

---
### Example Program

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case05/nezha-pro-ocean-kit-step-05-3.png.png)

Program link
[https://makecode.microbit.org/_9feP8JeVcKE6](https://makecode.microbit.org/_9feP8JeVcKE6)

You can also download the program directly through the following webpage.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_9feP8JeVcKE6"
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
### Download Program

Use a USB cable to connect the PC and micro:bit V2.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual03.gif)

After successful connection, a drive named MICROBIT will be recognized on the computer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual06.png)

Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual07.png) in the lower left corner and select **Connect Device**.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual11.png)

Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual08.png).

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual12.png)

Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual09.png).

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual13.png)

In the pop-up window, select **BBC micro:bit CMSIS-DAP**, then select **Connect**. So far, our micro:bit has been successfully connected.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual14.png)

Click **Download Program**

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual10.png)

---
## Case Demonstration
The OLED displays the current temperature and humidity. When the temperature is higher than 30°C, the micro:bit shows a "crying face"; otherwise, it shows a "smiling face".


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/GIF/nezha-pro-ocean-kit-step-05-00.png.gif)

---
## Extended Knowledge

The DHT11 temperature and humidity sensor is a commonly used digital temperature and humidity composite sensor, featuring simple structure, low cost, and ease of use. It is widely applied in scenarios such as smart homes, meteorological monitoring, and agricultural greenhouses. Here is a detailed introduction:

### 1. Basic Overview

Function: It can measure ambient temperature and humidity simultaneously and convert the data into digital signals for output.

Type: It is a composite sensor combining a resistive humidity sensor and an NTC (Negative Temperature Coefficient) thermistor.

Output form: Single-bus digital signal, which is convenient for direct communication with main control devices such as microcontrollers (e.g., Arduino, STM32).

### 2. Working Principle

#### 1. Humidity Measurement:

It uses a resistive humidity sensing element (polymer film), whose resistance value changes with ambient humidity. The higher the humidity, the lower the resistance value. The resistance change is converted into an electrical signal through a circuit.

#### 2. Temperature Measurement:

Temperature is detected by an NTC thermistor. When the temperature rises, the resistance value decreases, and vice versa. It is converted into an electrical signal through a circuit.

#### 3. Signal Processing:

The microcontroller inside the sensor converts the analog temperature and humidity signals into digital signals, which are output through the DATA pin using the single-bus protocol.

#### 3. Typical Application Scenarios

Smart home: Temperature and humidity monitoring modules, automatic control of air conditioners/humidifiers.

Agriculture and breeding: Greenhouse temperature and humidity monitoring, environmental regulation of livestock and poultry houses.

Meteorological stations: Construction of simple environmental monitoring equipment and small meteorological stations.

Industrial control: Warehouse temperature and humidity monitoring, equipment operating environment monitoring.
