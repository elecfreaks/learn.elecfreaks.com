# Case 2: Rice Pounding Machine

---

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Jacdac%E8%83%BD%E6%BA%90%E5%AE%9E%E8%B7%B5%E5%A5%97%E4%BB%B6/2.%E8%88%82%E7%B1%B3%E6%9C%BA.jpg)

---

## Introduction

Press **button A** on the micro:bit V2 board, and the 360° building-block servo rotates at full speed (-100) to drive a cam mechanism, simulating the reciprocating pounding motion of an ancient rice pounding machine (water-powered trip hammer). Press **button B**, and the servo stops rotating.

---

## Learning Objectives

1. Learn about the rice pounding machine (water-powered trip hammer / shuǐ duì) — an ancient mechanical device that uses water power to process grain.
2. Understand **event-driven programming** — using **button A and button B** to control the start and stop of the servo respectively.
3. Understand the **cam mechanism** — the mechanical principle of converting rotational motion into reciprocating linear motion.
4. Explore the history of ancient grain processing and humanity's ingenious use of water power.

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
| Jacdac Energy Practice Kit Building Blocks |  | 1 |

---

## Sensor Principle

This case does not use an external sensor module; control is achieved entirely through the built-in button A and button B of the micro:bit V2 board.

## Assembly Steps

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case02/jacdac-energypractice-kit%2BAssembly%20Diagram%2BCase02.pdf" type="application/pdf" width="100%" height="600px" />

---

## Model Principle

### 360° Building-Block Servo and the Cam Mechanism

The 360° building-block servo provides continuous rotational power. The **cam** mounted on the servo's output shaft is an irregular disc with a protruding lobe. As the cam rotates, its protruding part periodically lifts the pounder (follower). After the cam lobe rotates past, the pounder drops under gravity, striking the grain inside the stone mortar. Thus, with each full rotation of the servo, the pounder completes one cycle of "lift → drop → pound."

| Phase | Motion | Mechanical Principle |
|---|---|---|
| ① Cam rise | Cam lobe lifts the pounder | Rotation → Ascent |
| ② Pounder lift | Pounder raised to highest point | Potential energy accumulation |
| ③ Cam return | Cam lobe rotates away | Support removed |
| ④ Pounder drop | Pounder falls under gravity into mortar | Potential → Kinetic → Impact force |
| ⑤ Cycle repeat | Cam keeps rotating, next pounding cycle begins | Continuous rotation → Intermittent impact |

> **Core Principle: The cam mechanism is one of the most classic mechanical structures for converting continuous rotational motion into intermittent reciprocating linear motion.**

### The Rice Pounding Machine (Water-Powered Trip Hammer / Shuǐ Duì)

The rice pounding machine, known in ancient China as "duì" (碓), was originally a human-powered foot-operated dehusking tool — a person stepped on a pedal to lift the hammer head, and when the foot was released, the hammer head dropped into the stone mortar to pound grain. In the **late Western Han Dynasty** (~1st century CE), the Chinese invented the **water-powered trip hammer (shuǐ duì)** — using flowing water to turn a waterwheel, whose axle-mounted paddles intermittently pressed down on the hammer lever, achieving automatic rice pounding. During the Three Kingdoms period (260–270 CE), Du Yu invented the **linked trip hammer (lián jī duì)** — a single waterwheel could simultaneously drive 4–12 hammer heads, increasing efficiency by more than tenfold.

---

## Connection Diagram

As shown below, insert the micro:bit V2 board into the Jacdac expansion board, and use a cable to connect the servo module to the Jacdac expansion board's edge connector.

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

![Program Screenshot](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case02/jacdac-energypractice-kit%2BProgram%2BCase02.png)

---

## Reference Program Link

[https://makecode.microbit.org/_R8wF0r2ktJR5](https://makecode.microbit.org/_R8wF0r2ktJR5)

You can also download the program directly from the webpage below. Once downloaded, you can start running the program.
<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_R8wF0r2ktJR5"
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

Press **button A** on the micro:bit V2 board, and the 360° building-block servo rotates at full speed, driving the cam mechanism. The pounder begins reciprocating up and down, simulating the water-powered trip hammer starting operation. Press **button B**, and the building-block servo stops rotating and the pounder stops pounding — simulating the closing of the sluice gate and the waterwheel coming to a halt.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/%E6%A8%A1%E5%9E%8BGIF/%E8%88%82%E7%B1%B3%E6%9C%BA.gif)

---

## Think

1. Besides pounding rice, what other applications of the cam mechanism can you find in daily life? (Hint: look at sewing machines, engine valves)
2. If you wanted the pounder to strike with more force, how could you modify the shape of the cam?

---

## Program Logic

| Trigger Condition | Action | Source |
|---|---|---|
| Button A pressed | 360° building-block servo rotates at full speed (-100), driving the cam mechanism; pounder begins reciprocating up and down | micro:bit Button A |
| Button B pressed | 360° building-block servo stops rotating; pounder stops pounding | micro:bit Button B |

---

## Knowledge Extension: From Manual Pounding to Water-Powered Automation — The Millennia-Long Evolution of Grain Processing

### I. The Journey of a Grain of Rice — Why Do Humans "Pound" Rice?

Rice harvested from the field cannot be eaten directly. Each grain of rice is encased in a hard **husk (chaff)** that must be removed before the edible grain is obtained. In ancient times without machines, humans first used stones to smash and wooden sticks to pound. Later, they invented the **mortar and pestle (chǔ jiù)** — a stone mortar paired with a wooden pestle, manually pounded up and down to remove the husk.

| Processing Method | Approximate Era | Efficiency (per person/day) | Labor Intensity |
|---|---|---|---|
| Stone smashing / hand peeling | Neolithic (~10,000 years ago) | ~5–10 kg | Extremely high |
| Mortar and pestle (handheld) | ~5,000 years ago | ~15–20 kg | Very high |
| Foot-operated trip hammer | Warring States (~400 BCE) | ~50–80 kg | High |
| Water-powered trip hammer (single head) | Late Western Han (~1st century CE) | ~150–300 kg | Very low (automated) |
| Linked trip hammer (4–12 heads) | Three Kingdoms (260 CE) | ~600–3,600 kg | Very low (automated) |
| Modern rice mill | Late 19th century–present | Several tons per hour | Zero (fully automatic) |

> From mortar-and-pestle to linked trip hammer, efficiency increased by over **300 times**. The water-powered trip hammer is one of the earliest great inventions in human history to achieve "production automation."

---

### II. The Water-Powered Trip Hammer — Ancient China's "Smart Factory"

The water-powered trip hammer is hailed as one of the most ingenious water-powered machines of antiquity, integrating three core technologies:

```
                         ┌─────────────────────────┐
                         │  Trip Hammer System      │
                         └──────────┬──────────────┘
            ┌───────────────────────┼───────────────────────┐
            ▼                       ▼                       ▼
    ┌───────────────┐     ┌───────────────┐     ┌───────────────┐
    │  Power Section │     │ Transmission  │     │  Work Section │
    │  (Waterwheel)  │ ──► │ (Axle+Board)  │ ──► │ (Lever+Head)  │
    └───────────────┘     └───────────────┘     └───────────────┘
    Water flow turns      Paddles on axle       Paddle pushes lever
    the waterwheel        intermittently        tail down; head
    Potential→Kinetic     push the lever        rises→drops under
    (Nature's input)      (Rotation→Recip.)     gravity (impact)
```

| Technical Element | Corresponding Principle | Implementation in This Case |
|---|---|---|
| Waterwheel rotation | Hydraulic → Rotational kinetic energy | 360° building-block servo rotation |
| Paddle / Cam | Rotation → Reciprocating linear motion | Cam mechanism |
| Pounder impact | Gravity-driven drop impact | Free drop after cam rise |
| Water flow controls speed | Input energy regulation | Microphone sound level → RPM mapping |

---

### III. The Impact of Water-Powered Trip Hammers on Ancient Society

- **Population growth support:** During the Southern Dynasties, the widespread adoption of trip hammers dramatically increased grain processing efficiency, supporting rapid population growth in the Jiangnan region. Historical records indicate that at its peak, the Gushui River basin near Luoyang alone hosted **dozens** of trip hammers.
- **Rice price reduction:** Western Jin dynasty documents record that after the spread of trip hammers, rice prices in the Luoyang area fell by about **30%**, significantly reducing living costs for ordinary people.
- **Expanded applications:** Trip hammers were not only used for pounding rice, but also for crushing medicinal herbs, grinding spices, pounding porcelain clay (ceramic raw material), pulping paper material, and crushing ores — truly the ancient "universal pulverizer."
- **Living heritage:** At its peak, the Cangnan Wanyao Village in Zhejiang had over a hundred trip hammers for pounding porcelain clay. In mountainous regions of Fujian, Jiangxi, and Hunan, trip hammers were still in normal use as late as the **1990s**.

---

### IV. Humanity's Ingenious Use of Water Energy Through the Ages

| Period | Water Energy Application | Representative Invention |
|---|---|---|
| ~4000 BCE | Water transport | Ancient Egyptian Nile sailboats |
| 1st century BCE | Water lifting | Greek Archimedes' screw pump |
| 1st century CE | Water-powered grain pounding | Chinese water-powered trip hammer |
| 1st century CE | Water-powered grinding | Greek/Roman water mill |
| 3rd century CE | Water-powered bellows | Chinese water-powered blast furnace bellows |
| 3rd–4th century CE | Water-powered spinning | Chinese water-powered spinning wheel |
| Late 19th century | Hydroelectric power | World's first hydroelectric station (Wisconsin, USA, 1882) |
| 21st century | Pumped storage / Tidal energy | Three Gorges Dam (22,500 MW), offshore tidal power stations |

As of 2024, hydropower remains the world's largest source of renewable electricity, accounting for approximately **14.3%** of global electricity generation and providing clean power to over **1 billion** people. And it all traces back to a flash of inspiration two thousand years ago, when an ancient Chinese person facing a small stream thought: "Why not let the flowing water pound the rice for us?"

---

### V. The Loop — From Mechanism to Program

The working rhythm of the water-powered trip hammer embodies the profound wisdom of the "loop":

| | Mechanical Loop (Trip Hammer) | Program Loop (This Case's Code) |
|---|---|---|
| **Power source** | Water continuously striking the waterwheel | Loop block repeatedly executing code |
| **Repetition unit** | One waterwheel revolution = one pound | One loop iteration = read sound + adjust speed |
| **Regulation mechanism** | More water → faster wheel → higher pounding frequency | Button A pressed → servo full speed → higher pounding frequency |
| **Stop condition** | Close sluice gate to block water flow | Button B pressed → servo stops |

> **Reflection:** Ancient craftsmen achieved "automated loops" with mechanisms; today's programmers achieve "program loops" with code. Two millennia of technological progress share the same underlying logic: **discover repetition → build loops → continuously optimize**. The rice pounding program you are writing continues this millennia-spanning engineering wisdom.
