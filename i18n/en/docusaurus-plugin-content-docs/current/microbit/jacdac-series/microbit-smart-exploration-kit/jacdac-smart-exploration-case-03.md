# Case 3: Magnetic Field Agent Team

## Introduction:

When the magnet is close to the magnetic sensor, the micro:bit displays the "√" icon and makes a sound. When the magnet is away from the magnetic sensor, the micro:bit displays the "×" icon.

---

## Case Purpose:

1. Understand the magnetic sensor and master its use.

2. Understand the magnetic sensor programming building blocks in MakeCode.

---

## Required Materials:

|Item|Picture|Quantity|
|--|--|--|
|micro:bit V2|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/microbit%20%E6%AD%A3(1).png)|1|
|Jacdac expansion board|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20bit.png)|1|
|Jacdac 10cm connection wire|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac-smart-exploration-kit-10cm-cable.png)|1|
|Magnetic sensor|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20Magnet%20Sensor.png)|1|
|USB Cable|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/usb%20cable1.png)|1|

---
## 传感器原理说明：
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/Jacdac%20Magnet%20Sensor-1.png)

**Principle description**

Magnetic sensor: a sensor used to measure the strength and direction of a magnetic field.

---

## Connection diagram

As shown in the figure below, insert the micro:bit into the Jacdac expansion board and use a connecting wire to connect the magnetic sensor to the gold finger interface of the Jacdac expansion board.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/hardware-connection-diagram/jacdac-smart-exploration-kit-case-03.png)

---
## Programming software

[Microsoft Makecode](https://makecode.microbit.org/#)

---

## Makecode programming

### Step 1: How to add Jacdac extension

1. Enter [Microsoft Makecode](https://makecode.microbit.org/#) and click "New Project".

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-07.png)

2. Enter a project name in the pop-up window and click Create.![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-11.png)

---
3. Click "Extend" in the code drawer.”

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-09.png)

4. In the pop-up interface, enter "Jacdac" and click the search icon, select the Jacdac software library, as shown in the figure.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/jacdac-smart-exploration-kit-3.png)

---
### Step 2:

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
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/program/jacdac-smart-exploration-kit-case-0113.png)

---
## Reference program link:

[https://makecode.microbit.org/_h6DFV70EqF5c](https://makecode.microbit.org/_h6DFV70EqF5c)

---

You can also download the program directly from the following webpage, and start running the program after downloading.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_h6DFV70EqF5c"
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

When the magnetic sensor detects a magnet, the micro:bit displays the "√" icon and makes a sound. When the magnet moves away from the magnetic sensor, the micro:bit displays the "×" icon.
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/hardware-connection-diagram/jacdac-smart-exploration-kit-case-0321.gif)

## Thinking

Can the magnetic sensor detect magnetic poles? You can try it yourself.
