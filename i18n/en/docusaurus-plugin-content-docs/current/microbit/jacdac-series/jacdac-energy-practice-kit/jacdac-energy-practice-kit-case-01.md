# Case 1: Antique-Style Waterwheel

---

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Jacdac%E8%83%BD%E6%BA%90%E5%AE%9E%E8%B7%B5%E5%A5%97%E4%BB%B6/1.%E4%BB%BF%E6%B0%B4%E8%BD%A6.jpg)

---

## Introduction

The rotation speed of the 360° building-block servo is linked in real time to the **sound level detected by the micro:bit's built-in microphone** — the louder the sound, the faster the rotation; the quieter the sound, the slower the rotation. This simulates a waterwheel being driven by flowing water: the sound represents the "force of the water current."

---

## Learning Objectives

1. Understand the **sound sensor** — a component that detects ambient sound levels.
2. Understand **data mapping** — mapping the analog input from the microphone (sound level) to servo speed for continuous control.
3. Learn about the **noria (waterwheel)** — an ancient mechanical device that uses water power to automatically lift water for irrigation.
4. Explore ancient water conservancy and irrigation projects and the critical role of water power in the development of human civilization.

---

## Required Materials

| Item | Image | Quantity |
|---|---|---|
| micro:bit V2 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/microbit%20%E6%AD%A3(1).png) | 1 |
| Jacdac Expansion Board | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20bit.png) | 1 |
| Jacdac 10cm Connector Cable | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac-smart-exploration-kit-10cm-cable.png) | 1 |
| Jacdac Servo Module | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Sensor/Jacdac%20Servo.png) | 1 |
| 360° Building-Block Servo | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Sensor/img_v3_0213q_cfc7e5b2-67bb-45ac-856e-d875221271ag.png) | 1 |
| USB Cable | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/usb%20cable1.png) | 1 |
| Jacdac Energy Practice Kit Building Blocks |  | 1 |

---

## Sensor Principle

This case uses the built-in microphone of the micro:bit V2 as the sensor. It captures ambient sound levels (0–255) in real time and maps them to the servo rotation speed.

## Assembly Steps

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case01/jacdac-energypractice-kit%2BAssembly%20Diagram%2BCase01.pdf" width="100%" height="600px" />

---

## Model Principle

### 360° Building-Block Servo and the Waterwheel Model

The 360° building-block servo provides continuous rotational power and is mounted on the central axle of the waterwheel. As the servo rotates, it drives the entire wheel. Bamboo tubes (or small water buckets) mounted around the wheel's rim enter the "water surface" in sequence to collect water, then rotate to the highest point and pour the water into a trough — simulating the automatic water-lifting and irrigation process of an ancient noria.

---

## Connection Diagram

As shown below, insert the micro:bit V2 board into the Jacdac expansion board, and use a cable to connect the 360° building-block servo module to the Jacdac expansion board's edge connector via **daisy-chaining**.

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

2. Connect the sensor. MakeCode will automatically detect and simulate it in the simulator area, where the sensor status is displayed in real time.

   ![Sensor Simulation](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/1jacdac-smart-exploration-kit-6.png)

3. Click **"ADD BLOCKS"** to add the sensor extension module.

   > **Note:** When connecting a new sensor, repeat the "click 'ADD BLOCKS'" workflow once.

   ![ADD BLOCKS](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/jacdac-smart-exploration-kit-7.png)

---

## Write the Program as Shown

![Program Screenshot](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case01/jacdac-energypractice-kit%2BProgram%2BCase01.png)

---

## Reference Program Link

[https://makecode.microbit.org/_WAqP0ebpAc6a](https://makecode.microbit.org/_WAqP0ebpAc6a)

You can also download the program directly from the webpage below. Once downloaded, you can start running the program.
<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_WAqP0ebpAc6a"
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

The waterwheel rotation speed varies with the detected sound level (0–255).

---

## Think

1. If you wanted the waterwheel speed to vary according to the "strength of the water flow," how could you improve the program?
2. Besides irrigation, what else could the rotational power of a noria/waterwheel be used for? (Hint: review the cases you've learned previously.)

---

## Program Logic

| Trigger Condition | Action | Source |
|---|---|---|
| Sound level detected | 360° building-block servo rotates continuously at a speed mapped from the sound value, driving the waterwheel | micro:bit Sound Sensor |

---

## Knowledge Extension: The Waterwheel — The Millennial Giant Wheel That Turned Human Civilization

### I. The Noria — An "Automatic Irrigation Robot" Without Electricity

Over a thousand years before the invention of electricity, the noria was humanity's most advanced automatic irrigation tool. Its brilliance lies in the fact that it requires **no human or animal power** — it relies entirely on the natural force of flowing water:

```
                        ┌────────────────────────────┐
                        │     Noria Workflow          │
                        └────────────┬───────────────┘
                                     │
        ┌────────────────────────────┼────────────────────────────┐
        ▼                            ▼                            ▼
   ┌──────────┐               ┌──────────┐               ┌──────────┐
   │ Water    │               │ Wheel    │               │ Auto     │
   │ strikes  │  ──────────►  │ rotates  │  ──────────►  │ water    │
   │ paddles  │               │ + tubes  │               │ pouring  │
   └──────────┘               └──────────┘               └──────────┘
    Natural force input        Kinetic transfer           Irrigation output
```

| Component | Function | Material |
|---|---|---|
| Paddles | Receive water impact, drive wheel rotation | Wood planks |
| Large wheel (dual rings) | Support bamboo tubes, transmit rotational force | Thick bamboo / round wood |
| Bamboo tubes (20–42 pcs) | Water containers; rotate with wheel to auto-fill and auto-pour | Thick bamboo, installed at an angle |
| Water trough | Collect water poured from bamboo tubes, channel into irrigation ditches | Wood / bamboo trough |
| Axle & frame | Support the entire wheel structure | Hardwood |

> **Key Design:** The inner end (bottom) and outer end (mouth) of each bamboo tube are not on the same radius — the outer ring (where the tube bottom sits) has a larger radius than the inner ring (where the tube mouth sits). This way, at low positions the mouth is higher than the bottom (holding water), and at high positions the mouth is lower than the bottom (auto-pouring). This single geometric cleverness achieves the perfect cycle of "automatic filling, automatic pouring."

---

### II. History of the Noria — Millennia of Hydraulic Wisdom

| Period | Key Development | Irrigation Capacity |
|---|---|---|
| **Sui–Tang** (~7th century) | Noria origins; poet Du Fu wrote verses about "linked tubes irrigating small gardens" | Dozens of mu per day per unit |
| **Tang Dynasty** (9th century) | Chen Zhang authored *Ode to the Waterwheel*, documenting manufacturing regulations | Widely used in southern rice paddies |
| **Southern Song** | Poet Zhang Xiaoxiang wrote: "Turn this great dharma-wheel, save you from the drought's bitter years" | Commonly used in Zhejiang, Jiangxi, Hunan, Guangdong, Guangxi |
| **Yuan Dynasty** | Wang Zhen's *Agricultural Treatise* detailed illustrations, documented "high-lift noria" | Lifting height over 10 zhang (~30+ meters) |
| **Ming Dynasty** (1556) | Duan Xu built the **Yellow River Giant Waterwheel** in Lanzhou, diameter up to **16–20 meters** | A single unit irrigated **several hundred mu** day and night |
| **Qing Dynasty** | Over **300 waterwheels** along the Yellow River | Irrigated over **100,000 mu** of farmland |
| **Modern Era** | Lanzhou Yellow River Giant Waterwheel craftsmanship listed as **National Intangible Cultural Heritage** | Cultural preservation & tourism display |

> A single Ming Dynasty Lanzhou Yellow River Giant Waterwheel had a diameter exceeding a five-story building's height, carried over 40 large wooden buckets, and could irrigate over 300 mu of farmland nonstop day and night — equivalent to about 28 standard football fields.

---

### III. Waterwheels and Human Civilization — A Global Perspective

The waterwheel was not unique to China — it was a great invention independently developed by virtually every ancient civilization:

| Civilization | Waterwheel Name | Earliest Record | Drive Method | Primary Use |
|---|---|---|---|---|
| Ancient India | Araghaṭṭa | ~350 BCE | River current | Irrigation |
| Ancient China | Noria (筒车) | ~7th century CE (Tang) | River current | Irrigation |
| Ancient Egypt / Middle East | Noria | Documented from 1st century BCE | River current | Irrigation |
| Ancient Greece / Rome | Tympanum / Noria | Recorded by Vitruvius (~25 BCE) | Water / animal power | Irrigation + mine drainage |

The waterwheel represents humanity's earliest "power revolution" — before it, all mechanical power came from human or animal muscle. The waterwheel was the first device that let humans **borrow nature's energy for free**, a concept that directly inspired the later development of steam engines, water turbines, and hydroelectric power stations.

---

### IV. From Noria to Three Gorges — Two Millennia of Water Energy Evolution

From Tang Dynasty norias to modern hydroelectric stations, the way humans harness water energy has continuously upgraded:

| Era | Water Energy Device | Power | Irrigation / Power Supply Scale |
|---|---|---|---|
| 7th century | Bamboo-wood noria | ~0.1–0.5 kW | Dozens of mu irrigated per day |
| 16th century | Lanzhou Giant Waterwheel | ~1–3 kW | Several hundred mu per day |
| Late 19th century | First hydroelectric station (USA, 1882) | 12.5 kW | Powered ~250 lights |
| Mid 20th century | Hoover Dam (USA, 1936) | 2,080 MW | Powered ~1.3 million homes |
| 21st century | Three Gorges Dam (China, completed 2012) | **22,500 MW** | Powers ~**60 million** people |

> The power output of one Three Gorges Dam is equivalent to approximately **45 million** Tang Dynasty norias running simultaneously. And yet — the Tang noria was completely zero-carbon, zero-pollution, with near-zero maintenance costs. Modern technology and ancient wisdom each have irreplaceable value.

---

### V. What the Noria Teaches Us

| Lesson | Explanation |
|---|---|
| **Harness nature's power** | The noria burns no oil, consumes no electricity — zero-carbon operation. It's the purest form of green energy. Today's push for solar, wind, and hydropower is fundamentally an extension of the noria-era philosophy. |
| **Simplicity is beauty** | The noria's core structure is just three parts: wooden wheel, bamboo tubes, and water trough. No gears, no precision bearings — yet it runs precisely day and night. Good engineering doesn't have to be complex. |
| **Local adaptation** | The south used bamboo (lightweight, water-resistant), the north used wood (sturdy, durable), and the Yellow River region built giant waterwheels (high water volume). Ancient people designed the best solutions based on local materials and hydrological conditions. |
| **The philosophy of if-else** | The noria's working logic is essentially an if-else: if (water flows) { rotate and lift water } else { stay still and wait }. The sound-controlled program you wrote today follows the exact same decision logic. The if-else in code is like the waterwheel's sluice gate — **it decides whether the power flows or stops**. |

> **Reflection:** Two thousand years ago, facing a rushing stream, ancient people thought of using wooden wheels and bamboo tubes to borrow its power for irrigation. Today, facing a circuit board and a few lines of code, you are accomplishing the same thing — using wisdom and tools to make machines work for you. From noria to servo, from waterwheel to sensor — what has changed is merely the carrier; what remains unchanged is the human impulse to create and reshape the world.
