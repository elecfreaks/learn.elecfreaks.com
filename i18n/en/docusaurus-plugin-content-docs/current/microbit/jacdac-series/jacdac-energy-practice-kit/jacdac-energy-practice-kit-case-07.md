# Case 7: Dutch Windmill

---

## Introduction

Press **button A** on the micro:bit V2 board, and the 360° building-block servo begins rotating continuously in a single direction, driving the windmill blades — simulating a Dutch windmill in operation. Press **button B** on the micro:bit V2 board, and the servo stops rotating.

---

## Learning Objectives

1. Learn about the 360° building-block servo module and understand how it differs from a standard servo.
2. Learn the concept of event-driven programming — controlling program start and stop through button events.
3. Understand sequential execution structure — code runs in the order it is written.
4. Explore the history, culture, and wind energy utilization of Dutch windmills.

---

## Required Materials

| Item | Image | Quantity |
|---|---|---|
| micro:bit V2 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/microbit%20%E6%AD%A3(1).png) | 1 |
| Jacdac Expansion Board | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20bit.png) | 1 |
| Jacdac 25cm Connector Cable | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac-smart-exploration-kit-25cm-cable.png) | 1 |
| Jacdac Servo Module | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Sensor/Jacdac%20Servo.png) | 1 |
| 360° Building-Block Servo | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Sensor/img_v3_0213q_cfc7e5b2-67bb-45ac-856e-d875221271ag.png) | 1 |
| USB Cable | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/usb%20cable1.png) | 1 |

---

## Assembly Steps

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case07/jacdac-energypractice-kit%2BAssembly%20Diagram%2BCase07.pdf" type="application/pdf" width="100%" height="600px" />

---

## Model Principle

### 360° Building-Block Servo Module

The 360° building-block servo (continuous rotation servo) differs from a standard 180° servo: a standard servo only rotates to a specified angular position (e.g., 0°–180°), whereas a 360° building-block servo can rotate continuously. Its rotation direction and speed are controlled by setting a speed value — positive values for forward rotation, negative for reverse, and 0 for stop. It is ideal for simulating scenarios that require continuous rotation, such as windmills and wheels.

### Dutch Windmill

The Dutch windmill is an iconic symbol of the Netherlands, first appearing in the 13th century. The Netherlands is a low-lying country — known as the "Low Countries" — with approximately one-quarter of its land below sea level. Windmills were initially used primarily for drainage and land reclamation — pumping water out of low-lying areas to turn marshes into arable farmland. Over time, windmill applications expanded to include grinding grain, pressing oil, sawing wood, and other industrial uses, making them the "power engine" of Dutch history.

---

## Sensor Principle

This case does not use an external sensor module; control is achieved entirely through the built-in button A and button B of the micro:bit V2 board.

---

## Connection Diagram

As shown below, insert the micro:bit V2 board into the Jacdac expansion board, and connect the 360° building-block servo module to the Jacdac expansion board's edge connector.

![Connection Diagram](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/%E7%A1%AC%E4%BB%B6%E8%BF%9E%E7%BA%BF%E5%9B%BE/micro%EF%BC%9Abit%20%2B%E8%88%B5%E6%9C%BA%E6%A8%A1%E5%9D%97%2B%E8%88%B5%E6%9C%BA.png)

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

![Program Screenshot](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case07/jacdac-energypractice-kit%2BProgram%2BCase07.png)

---

## Reference Program Link

[https://makecode.microbit.org/_heHEYF3b2Lm5](https://makecode.microbit.org/_heHEYF3b2Lm5)

You can also download the program directly from the webpage below. Once downloaded, you can start running the program.
<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_heHEYF3b2Lm5"
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

Press **button A** on the micro:bit V2 board, and the 360° building-block servo begins rotating continuously in a single direction, simulating a Dutch windmill spinning in the breeze. Press **button B**, and the servo stops rotating.

---

## Think

1. Besides Dutch windmills, what other rotating objects in daily life could be simulated with a 360° building-block servo?
2. If you wanted the windmill to change speed based on "wind strength," how could you modify the program?

---

## Program Logic

| Trigger Condition | Action | Source |
|---|---|---|
| Button A pressed | 360° building-block servo rotates continuously at full speed (100) in a single direction, simulating windmill rotation | micro:bit Button A |
| Button B pressed | 360° building-block servo stops rotating, simulating windmill shutdown | micro:bit Button B |

---

## Knowledge Extension: Dutch Windmills — From Ancient Wisdom to Modern Wind Energy

### I. Windmills — A National Symbol of the Netherlands

When people think of the Netherlands, the first things that come to mind are tulips, windmills, and wooden shoes. The windmill became a symbol of the Netherlands because of the country's unique geographic conditions.

| Fact | Data |
|---|---|
| Dutch land below sea level | ~**26%** |
| Highest point in the Netherlands | Only **322 m** above sea level (at the border with Belgium and Germany) |
| Total windmills built in Dutch history | Over **10,000** |
| Traditional windmills still standing | ~**1,200** |
| Kinderdijk windmill network (UNESCO World Heritage) | **19 windmills**, built around 1740 |

The country's name "Netherlands" literally means "low countries." For centuries, the Dutch used windmills to pump water out of low-lying areas, essentially "seizing" livable land from the sea and marshes. An old Dutch proverb says: **"God created the world, but the Dutch created the Netherlands."**

---

### II. How Windmills Work

A traditional Dutch windmill converts wind energy into mechanical energy through the following steps:

```
Wind → Pushes windmill blades to rotate → Transmits power via main shaft → Gear set adjusts speed →
├── Drives waterwheel / Archimedes' screw (drainage)
├── Drives millstones (grinding grain)
├── Drives oil press (oil extraction)
└── Drives sawmill (wood cutting)
```

The top of the windmill (the cap) can rotate 360°, keeping the blades always facing the oncoming wind — this is why Dutch windmills look like "hat-wearing" towers.

---

### III. From Windmill to Wind Turbine — A Microcosm of the Energy Revolution

Dutch windmills are an early model of humanity's use of renewable energy. Today, wind energy has become one of the world's most important clean energy sources:

| Global Wind Energy Key Data | Value |
|---|---|
| 2025 global new wind installations | **167 GW**, up 47% year-on-year |
| 2025 global cumulative wind capacity | ~**1,300 GW** |
| 2024 global wind electricity generation | **2,494 TWh**, 8.1% of global electricity |
| Global wind + solar share (2024) | Combined **15%** of global electricity |
| World's largest single wind turbine | Rated at **26 MW**, blade length over 150 meters |

> Comparison: A modern large wind turbine (10 MW) generates in one day (~72 MWh) roughly the drainage work that a traditional Dutch windmill would take **several months** to accomplish. The progress of technology is breathtaking, but ancient wisdom is equally worthy of remembrance.

---

### IV. What Dutch Windmills Teach Us

| Lesson | Explanation |
|---|---|
| **Adapt to local conditions** | The Netherlands is windy and low-lying — windmills were the optimal solution. Good problem-solving leverages local advantages. |
| **Live in harmony with nature** | Facing a harsh geographic environment, the Dutch did not fight nature but adapted to the patterns of wind and water, using wisdom to cooperate with nature in creating living space. |
| **Clean energy foresight** | Hundreds of years ago, the Dutch were already using zero-carbon wind energy to power their entire nation's industry and agriculture. The answers to today's global energy transition challenges may well be hidden in historical wisdom. |
| **Fusion of technology and culture** | Windmills are both production tools and cultural symbols. Good technology should benefit humanity and blend into everyday life. |

> **Reflection:** From the simple windmills of the 13th century to today's giant offshore wind turbines, the story of humanity harnessing wind energy spans over 800 years. What will future wind energy technology look like? Perhaps its inventor is you — the person learning to code right now.
