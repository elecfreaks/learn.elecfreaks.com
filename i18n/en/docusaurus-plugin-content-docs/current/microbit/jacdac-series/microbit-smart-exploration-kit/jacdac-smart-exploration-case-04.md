# Case 4: Smart Night Light

## Introduction:

When the human infrared sensor detects a pedestrian passing by and the light sensor detects that the ambient light intensity is less than 5%, the micro:bit displays a "heart".

---

## Case Purpose:

1. Learn about the human infrared sensor.

2. Learn about the light sensor.

3. Learn about the human infrared sensor and light sensor programming blocks in MakeCode.

---
## 所需材料：
|Item|Picture|Quantity|
|--|--|--|
|micro:bit V2|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/microbit%20%E6%AD%A3(1).png)|1|
|jacdac Expansion board|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20bit.png)|1|
|jacdac 10cm Connection Wire|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac-smart-exploration-kit-10cm-cable.png)|2|
|Human infrared sensor|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20Motion%20Sensor.png)|1|
|Light Sensor|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20Light%20Sensor.png)|1|
|USB Cable|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/usb%20cable1.png)|1|

---
## Sensor principle description:
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/Jacdac%20Light%20Sensor-1.png)

**Principle description**

Photosensitive sensor: a sensor used to detect the intensity of ambient light.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/Jacdac%20Motion%20Sensor-1.png)

**Principle description**:

Human infrared sensor: a sensor that senses human movement.

---

## Connection diagram

As shown in the figure below, insert the micro:bit into the jacdac expansion board, and use the connecting wire to connect the light sensor and the human infrared sensor to the gold finger interface of the jacdac expansion board in a daisy chain manner.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/hardware-connection-diagram/jacdac-smart-exploration-kit-case-04.png)

---
## Programming software

[Microsoft Makecode](https://makecode.microbit.org/#)

---

## Makecode programming

### Step 1: How to add jacdac extension

1. Enter [Microsoft Makecode](https://makecode.microbit.org/#) and click "New Project".

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-07.png)

2. In the pop-up window, enter a project name and click Create.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-11.png)

---
3. Click "Extend" in the code drawer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-09.png)

4. In the pop-up interface, enter "jacdac" and click the search icon, select the jacdac software library, as shown in the figure.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/jacdac-smart-exploration-kit-3.png)

---
### Step 2:

1. Connect micro:bit to the computer with a data cable.

**Note**: If the micro:bit is running the jacdac program for the first time, please pre-install a blank jacdac program on the motherboard, otherwise skip this step.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/jacdac-smart-exploration-kit-5.png)

2. Connect the sensor, MakeCode will automatically identify and simulate it, and the sensor will provide real-time feedback of the sensor status in the simulation area.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/1jacdac-smart-exploration-kit-6.png)

3. Click on "ADD BLOCKS" sensor expansion module.
   
   **Note**: To connect a new sensor, repeat the "Click on "ADD BLOCKS" sensor expansion module" operation process.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/jacdac-smart-exploration-kit-7.png)

---
## Write the program as shown
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/program/jacdac-smart-exploration-kit-case-0114.png)---

## Reference program link:

[https://makecode.microbit.org/_RVtWqVD92ik5](https://makecode.microbit.org/_RVtWqVD92ik5)

---

You can also download the program directly from the following website, and start running the program after downloading.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_RVtWqVD92ik5"
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

The human infrared sensor detects a pedestrian passing by, and the light sensor detects that the ambient light intensity is less than 5%, and the micro:bit displays "heart".

## Thinking

In addition to the case in this lesson, are there other programming methods to achieve the same function?
