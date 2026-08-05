# Case 5: Wind Vane

---

## Introduction

The **electronic compass (magnetometer)** built into the micro:bit V2 board detects the direction of Earth's magnetic field and displays the board's current orientation on the 5×5 LED matrix in real time — showing the four cardinal directions: East, South, West, and North. Rotate the micro:bit V2 board to simulate a wind vane turning with the wind.

---

## Learning Objectives

1. Learn about the **electronic compass (magnetometer)** — a MEMS sensor capable of detecting geomagnetic direction.
2. Learn **conditional branching (if-else if-else)** — displaying different arrow icons based on different ranges of azimuth angle values.
3. Understand the important role of wind vanes in meteorological observation and navigation.

---

## Required Materials

| Item | Image | Quantity |
|---|---|---|
| micro:bit V2 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/microbit%20%E6%AD%A3(1).png) | 1 |
| Jacdac Expansion Board | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20bit.png) | 1 |
| Jacdac 10cm Connector Cable | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac-smart-exploration-kit-10cm-cable.png) | 1 |
| Jacdac Temperature & Humidity Sensor | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Sensor/Jacdac%20HT.png) | 1 |
| USB Cable | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/usb%20cable1.png) | 1 |

---

## Sensor Principle

This case uses the built-in magnetometer (electronic compass) of the micro:bit V2 as the sensor. It detects the direction of Earth's magnetic field and outputs azimuth angle data ranging from 0° to 360°. The program displays corresponding arrow icons based on different azimuth angle ranges.

## Assembly Steps

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case05/jacdac-energypractice-kit%2BAssembly%20Diagram%2BCase05.pdf" type="application/pdf" width="100%" height="600px" />

---

## Model Principle

### Wind Vane — One of the Oldest Meteorological Instruments

The wind vane is a classic tool for measuring wind direction, consisting of three parts: an **arrow, a tail fin, and a pivot axis**. When the wind blows, the tail fin — which has a larger surface area and greater air resistance — is pushed to the downwind side. The arrow then points in the upwind direction — i.e., **the direction the wind is coming from**. This ingenious design allows the wind vane to automatically align with the oncoming wind direction without any electricity.

> The naming convention for wind direction is: **"named after where it comes from"** — a north wind blows from the north, an east wind from the east. In meteorology, wind direction is precisely recorded using 16 compass points (N, NNE, NE, ENE, E, ...).

---

## Connection Diagram

As shown below, insert the micro:bit V2 board into the Jacdac expansion board, and connect the Jacdac Temperature & Humidity Sensor to the Jacdac expansion board's edge connector.

![Connection Diagram](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/%E7%A1%AC%E4%BB%B6%E8%BF%9E%E7%BA%BF%E5%9B%BE/1.png)

---

## Programming Software

[Microsoft MakeCode](https://makecode.microbit.org/#)

---

## MakeCode Programming

### Step 1: Adding the Jacdac Extension

1. Go to [Microsoft MakeCode](https://makecode.microbit.org/#) and click **"New Project"**.

   ![New Project](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-07.png)

2. Enter a project name in the pop-up window and click **"Create"**.

   ![Create Project](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-11.png)

3. Click **"Extensions"** in the code drawer.

   ![Extensions](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-09.png)

4. In the pop-up interface, type **"Jacdac"** and click the search icon, then select the Jacdac software library as shown.

   ![Search Jacdac](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/jacdac-smart-exploration-kit-3.png)

---

### Step 2: Connecting the Hardware

1. Use a USB cable to connect the micro:bit V2 board to the computer.

   > **Note:** If this is the first time running a Jacdac program on the micro:bit V2, please pre-load a blank Jacdac program onto the board first. Otherwise, skip this step.

   ![Connect micro:bit](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/jacdac-smart-exploration-kit-5.png)

2. Connect the sensor. MakeCode will automatically detect and simulate it in the simulator area, where sensor status is displayed in real time.

   ![Sensor Simulation](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/1jacdac-smart-exploration-kit-6.png)

3. Click **"ADD BLOCKS"** to add the sensor extension module.

   > **Note:** When connecting a new sensor, repeat the "click 'ADD BLOCKS'" workflow once.

   ![ADD BLOCKS](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/jacdac-smart-exploration-kit-7.png)

---

## Write the Program as Shown

![Program Screenshot](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case05/jacdac-energypractice-kit%2BProgram%2BCase05.png)

---

## Reference Program Link

[https://makecode.microbit.org/_3XeaWzi7FALP](https://makecode.microbit.org/_3XeaWzi7FALP)

You can also download the program directly from the webpage below. Once downloaded, you can start running the program.
<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_3XeaWzi7FALP"
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

Place the micro:bit V2 board **horizontally and rotate it slowly**. The 5×5 LED matrix **displays** arrow icons for the four cardinal directions — East, South, West, and North — using the magnetometer reading to determine the board's current orientation.

---

## Think

1. The magnetometer detects magnetic north, while the "north" on a map is geographic north — the two do not perfectly coincide. Do you know why? (Hint: search for "magnetic declination")
2. What happens to the direction reading if you place the micro:bit on a metal desk or near a phone? Why?

---

## Program Logic

| Trigger Condition | Action | Source |
|---|---|---|
| Magnetometer detects azimuth angle | Based on azimuth angle range (0°–360°), determines direction and displays arrow icons for East, South, West, and North on the 5×5 LED matrix | micro:bit Magnetometer |

---

## Knowledge Extension: From Compass to GPS — How Humans Found Their Way

### I. The Compass — One of the Four Great Inventions That Changed World Navigation

The compass is one of ancient China's Four Great Inventions. As early as the **Warring States period** (~4th century BCE), the Chinese had discovered the directional properties of lodestone and created the earliest navigation tool — the **sinan** (a magnetic spoon placed on a smooth bronze plate, with the handle pointing south). By the **Northern Song Dynasty** (~11th century CE), the Chinese invented the **guide fish** and **floating compass**, which were widely applied to navigation.

| Period | Navigation Method | Accuracy |
|---|---|---|
| Ancient times | Observing sun, stars, landmarks | Rough (clear days / nights only) |
| 4th century BCE | Sinan (China) | Rough north-south |
| 11th century | Floating compass (China) | Good; essential for navigation |
| 12th–13th century | Compass introduced to Europe | Opened the Age of Sail |
| 15th–16th century | Compass + sextant + nautical charts | Transoceanic voyages possible |
| 20th century | Gyrocompass (unaffected by magnetic fields) | Accurate to 0.1° |
| 21st century | GPS / BeiDou satellite navigation | Accurate to meter level |

> Without the compass, there would have been no Age of Sail — Columbus and Magellan's transoceanic voyages would have been impossible without it. A small piece of lodestone changed the map of human civilization.

### II. Modern Applications of the Magnetometer

The magnetometer chip in your micro:bit works on the same principle as the compass chips in smartphones:

| Application | Magnetometer's Role |
|---|---|
| Phone map navigation | Detects phone orientation, rotates map to keep "north up" |
| Drones / aircraft | Works with GPS to determine flight heading and yaw angle |
| Car navigation | Provides dead reckoning when GPS signal is weak (tunnels, underpasses) |
| Augmented Reality (AR) | Determines device orientation to overlay virtual objects in the correct direction |
| Geological surveying | Detects underground mineral deposits and geological structures (via local magnetic anomalies) |
| Archaeology | Detects magnetic traces of buried objects and ancient sites |

---

### III. The Wind Vane — The Oldest Meteorological Instrument

The history of the wind vane dates back at least to **48 BCE** — the **Tower of the Winds** in ancient Athens, Greece, had a large bronze wind vane (in the shape of a Triton) mounted on top, which is still well-preserved today.

| Fact | Data |
|---|---|
| English name | Weather Vane / Wind Vane |
| Oldest surviving wind vane | Tower of the Winds, Athens (48 BCE) |
| Meteorological wind direction precision | 16 compass points (22.5° each) or 360° (1° each) |
| Wind naming convention | Named after the direction the wind comes **from** |
| Airport windsock | Indicates both direction and speed (by how inflated it is) |

> **Think about it:** Over two thousand years ago, the Greeks — without batteries, without chips — created a device that could automatically indicate wind direction using only clever metal-sheet design. Today, you achieve the same function with a chip the size of a fingernail — and with higher precision, plus the ability to simultaneously record data. That is the beauty of technological progress.

---

### IV. Electronic Compass vs. Traditional Compass

| Comparison | Traditional Compass | Electronic Compass (Magnetometer) |
|---|---|---|
| Principle | Magnetic needle interacts with Earth's magnetic field | MEMS chip detects geomagnetic field components |
| Accuracy | ~5°–10° | Up to 1°–2° |
| Response speed | Slow (needle inertia) | Extremely fast (electronic readout) |
| Data output | Visual observation | Digital signal, programmable |
| Interference susceptibility | Vibration, tilt | Nearby metal, electromagnetic fields |
| Power consumption | Zero | Ultra-low (microwatt range) |

> The magnetometer on the micro:bit, combined with its accelerometer, can form a complete **attitude sensor** — knowing "which direction it faces" (magnetometer) and "how much it's tilted" (accelerometer). Together, these enable 3D spatial orientation tracking — the foundational technology behind drones and phone AR applications.
