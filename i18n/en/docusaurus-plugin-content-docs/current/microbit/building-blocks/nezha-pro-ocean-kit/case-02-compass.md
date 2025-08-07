---
sidebar_position: 2
sidebar_label: Case2:Compass
---

# Compass
## Story Introduction
Ian's eyes welled up as he looked at the "Hope". This boat was built by friends working together. A friend handed over a shell wind chime: "Hang it on the boat, and the sea won't trouble you!" Ian solemnly promised: "I'll bring back wonderful stories!"
As night fell, unease crept in quietly. Ian squatted on the shore, remembering the rumors of fishing boats going missing he'd heard at the market. Looking out at the vast sea, he felt uneasy: "In the boundless sea, can I really find my way?" Can friends help Ian find direction in the vast sea?

---

## Teaching Preparation

| Name | Illustration |
| :----------: | :--------------------------: |
| Nezha Pro Ocean Kit | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/nezha-pro-ocean-kit-products-introduction-002.png.png) |

---
## Teaching Objectives
1. Understand the development history of the compass.

2. Explore the principle of the compass.

3. Understand what a variable is and master the use of variable building blocks.

---
## Learning and Exploration

1. Discuss with your friends why a compass always points in one direction.


## Construction Steps

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case02/nezha-pro-ocean-kit-step-02-1.png.pdf" type="application/pdf" width="100%" height="600px" />

---
## Hardware Connection

Insert the micro:bit main board into the Nezha expansion board.

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

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case02/nezha-pro-ocean-kit-step-02-2.png.png)

Program link
[https://makecode.microbit.org/_HWv6bLfWRWKM](https://makecode.microbit.org/_HWv6bLfWRWKM)

You can also download the program directly through the following webpage.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_HWv6bLfWRWKM"
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

Click ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual07.png) in the lower left corner and select **Connect Device**.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual11.png)

Click ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual08.png).

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual12.png)

Click ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual09.png).

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual13.png)

In the pop-up window, select **BBC micro:bit CMSIS-DAP**, then select **Connect**. At this point, our micro:bit has been successfully connected.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual14.png)

Click **Download Program**

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual10.png)

---
## Case Demonstration

1. Gyroscope calibration

2. Using the micro:bit compass function.

**Pictures**

---
## Extended Knowledge

### Compass

#### I. Core Structure and Principle

- Magnetic needle characteristics: Made of magnetic materials such as iron and nickel, it forms an N pole (north pole) and an S pole (south pole) after magnetization. According to the principle that "like poles repel and opposite poles attract", the N pole of the magnetic needle will be attracted by the S pole of the Earth's magnetic field (near the geographic north pole), and the S pole will be attracted by the N pole of the Earth's magnetic field (near the geographic south pole), thus stably pointing to the north-south direction.

- Earth's magnetic field: The Earth is like a large magnet. The N pole of the magnetic field is near the geographic south pole, and the S pole is near the geographic north pole. The magnetic field lines of the magnetic field start from the geographic south pole and return to the geographic north pole, enabling the magnetic needle to obtain a directional force.

- Free rotation design: To reduce friction, the magnetic needle is mostly supported by a smooth axis or suspended in a liquid (such as kerosene), ensuring flexible rotation on the horizontal plane and quick response to magnetic field changes.

#### II. Key Influencing Factors

- Magnetic declination: The north and south poles of the Earth's magnetic field do not coincide with the geographic north and south poles. The angle between them is called "magnetic declination". For example, the magnetic declination in Beijing is about 5° west. When in use, the reading needs to be corrected according to the local magnetic declination to obtain the accurate geographic direction.

- External interference: Near magnets, high-voltage lines, iron-containing minerals, etc., the external magnetic field will interfere with the direction of the magnetic needle; the electromagnetic field of electronic equipment may also affect the accuracy of the compass.

#### III. Types and Development

| **Type** | **Characteristics** | **Application Scenarios** |
| --- | --- | --- |
| Traditional compass | Water-floated or dry compass, indicating direction through a floating magnetic needle or axis support, with azimuths (such as north, south, east, west) marked on the dial. | Ancient navigation, geological exploration, feng shui survey, etc. |
| Electronic compass | Uses magnetic sensors (such as Hall effect sensors) to detect magnetic fields, which are processed by circuits and display directions on the screen, with strong anti-interference ability and accurate readings. | Mobile phones, car navigation, drones and other modern devices. |
| Magnetoresistive compass | Based on the magnetoresistive effect (the resistance of the material changes when the magnetic field changes), it has high sensitivity and is suitable for precision navigation. | High-end fields such as aviation and aerospace. |

#### IV. Practical Applications and Significance

- Navigation foundation: When GPS signals are weak or there is no power supply (such as wilderness hiking, maritime distress), the compass is an important backup tool to ensure direction judgment.

- Scientific research: Geologists study the history of the Earth's magnetic field through the remanence of rocks; archaeologists use compasses to locate the orientation of ancient relics.

- Cultural symbol: As one of the four great inventions of ancient China, the compass promoted the development of the Age of Discovery and is a symbol of human exploration of the world.
