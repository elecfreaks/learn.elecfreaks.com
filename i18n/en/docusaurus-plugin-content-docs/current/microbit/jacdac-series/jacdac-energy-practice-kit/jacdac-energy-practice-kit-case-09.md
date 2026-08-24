# Case 9: Internal Combustion Engine

---

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Jacdac%E8%83%BD%E6%BA%90%E5%AE%9E%E8%B7%B5%E5%A5%97%E4%BB%B6/%E5%86%85%E7%87%83%E6%9C%BA.jpg)

---

## Introduction

Hold down the Jacdac **external button module**, and the 360° building-block servo rotates continuously. Through a crank-connecting rod mechanism, the rotational motion is converted into the piston's reciprocating linear motion, simulating an internal combustion engine firing up and running. Release the button, and the servo stops — simulating engine stall. Button pressed = throttle engaged; released = engine off.

---

## Learning Objectives

1. Learn about the **internal combustion engine** and understand how it converts the chemical energy of fuel into mechanical energy.
2. Understand the **crank-connecting rod mechanism** — the core mechanical structure that converts between rotational and reciprocating motion.
3. Explore the **energy conversion chain** — chemical energy → thermal energy → kinetic energy → mechanical energy, experiencing the transformation of energy forms.

---

## Required Materials

| Item | Image | Quantity |
|---|---|---|
| micro:bit V2 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/microbit%20%E6%AD%A3(1).png) | 1 |
| Jacdac Expansion Board | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20bit.png) | 1 |
| Jacdac 25cm Connector Cable | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac-smart-exploration-kit-25cm-cable.png) | 2 |
| Jacdac Button Sensor | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20Button%20sensor.png) | 1 |
| Jacdac Servo Module | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Sensor/Jacdac%20Servo.png) | 1 |
| 360° Building-Block Servo | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Sensor/img_v3_0213q_cfc7e5b2-67bb-45ac-856e-d875221271ag.png) | 1 |
| USB Cable | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/usb%20cable1.png) | 1 |
| Jacdac Energy Practice Kit Building Blocks |  | 1 |

---

## Assembly Steps

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case09/jacdac-energypractice-kit%2BAssembly%20Diagram%2BCase09.pdf" type="application/pdf" width="100%" height="600px" />

---

## Model Principle

### Crank-Connecting Rod Mechanism

The crank-connecting rod mechanism is the most critical transmission component in an internal combustion engine, consisting of three key parts:

| Component | Motion Type | Implementation in This Model |
|---|---|---|
| **Crankshaft (Crank)** | Continuous rotation around an axis | Directly driven by the 360° building-block servo output shaft |
| **Connecting Rod** | Complex planar oscillation | One end hinged to the crank pin, the other connected to the piston |
| **Piston** | Reciprocating linear motion along the cylinder wall | Slides up and down in the "cylinder" (guide rail) |

The working cycle is as follows:

```
Servo rotation → Crank pin moves in a circle → Connecting rod oscillates → Piston reciprocates up and down
       ↑                                                                          ↓
  Rotational kinetic energy                                            Linear motion (simulating power stroke)
```

Each full rotation completes one complete up-and-down reciprocation of the piston (from Top Dead Center to Bottom Dead Center and back) — corresponding to two stroke cycles of a four-stroke engine.

### The Internal Combustion Engine — The "Heart" of the Industrial Age

The internal combustion engine is a power device that directly converts the thermal energy of high-temperature, high-pressure gas produced by burning fuel inside a cylinder into mechanical energy. Unlike the steam engine (where fuel burns in an external boiler), combustion in an internal combustion engine occurs inside the cylinder, resulting in a more compact structure and higher thermal efficiency. Since German engineer **Nicolaus Otto** invented the first practical four-stroke internal combustion engine in 1876, it has powered virtually all modern transportation — cars, airplanes, ships, construction machinery — profoundly transforming the way humans live.

---

## Sensor Principle

This case uses the **Jacdac external button module** as the input sensor. The button module is a digital switch sensor: when pressed, the circuit closes and outputs a high-level signal (1); when released, the circuit opens and outputs a low-level signal (0). The program continuously detects the button's pressed/released state to control the servo's operation and stop, implementing the intuitive "hold = throttle engaged, release = engine off" control logic.

---

## Connection Diagram

As shown below, insert the micro:bit V2 board into the Jacdac expansion board, and connect the servo module to the Jacdac expansion board's edge connector.

![Connection Diagram](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/%E7%A1%AC%E4%BB%B6%E8%BF%9E%E7%BA%BF%E5%9B%BE/micro%EF%BC%9Abit%20%2B%E8%88%B5%E6%9C%BA%E6%A8%A1%E5%9D%97%2B%E8%88%B5%E6%9C%BA%2B%E6%8C%89%E9%94%AE.png)

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

![Program Screenshot](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case09/jacdac-energypractice-kit%2BProgram%2BCase09.png)

---

## Reference Program Link

📎[https://makecode.microbit.org/_REC9MMYeX3rP](https://makecode.microbit.org/_REC9MMYeX3rP)

You can also download the program directly from the webpage below. Once downloaded, you can start running the program.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_REC9MMYeX3rP"
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

Hold down the Jacdac **external button module**, and the 360° building-block servo rotates at full speed. The crank drives the connecting rod and piston in up-and-down reciprocating motion, simulating an internal combustion engine firing up and running — "full throttle." Release the button, and the servo immediately stops, the piston freezes, simulating engine stall. Hold = running, release = stopped — simple and intuitive.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/%E6%A8%A1%E5%9E%8BGIF/%E5%86%85%E7%87%83%E6%9C%BA.gif)

---

## Think

1. What are the similarities and differences between the crank-connecting rod mechanism and the cam mechanism from the rice pounding machine case?
2. If you replaced the servo and turned the crankshaft by hand, could you feel the difference in resistance at different piston positions? Why?

---

## Program Logic

| Trigger Condition | Action | Source |
|---|---|---|
| External button module held down (pressed and held) | 360° building-block servo rotates continuously at full speed (100), simulating engine running | Jacdac Button Sensor |
| External button module released | 360° building-block servo stops rotating immediately, simulating engine stall | Jacdac Button Sensor |

---

## Knowledge Extension: The Internal Combustion Engine — 150 Years of Thermal Revolution

### I. Four Strokes — The Soul Rhythm of the Internal Combustion Engine

A complete working cycle of a four-stroke internal combustion engine consists of four strokes, with the crankshaft rotating twice (720°) to complete one "intake → compression → power → exhaust" cycle:

```
        ┌──────────────────────────────────────────────────────┐
        │              Four-Stroke Working Cycle               │
        └──────────────────────────────────────────────────────┘

  Stroke 1: Intake               Stroke 2: Compression
  ┌──────────┐                ┌──────────┐
  │Intake open│                │Both closed│
  │Exhaust cls│                │Piston up  │
  │Piston down│                │Gas comprsd│
  │Draws fuel │                │Temp & P ↑ │
  └──────────┘                └──────────┘
       ↓                            ↓
  Stroke 4: Exhaust             Stroke 3: Power (the only stroke that outputs power)
  ┌──────────┐                ┌──────────┐
  │Intake cls│                │Both closed│
  │Exhaust opn│                │Spark ignites│
  │Piston up  │                │Gas burns    │
  │Expels exh │                │Pushes piston│
  └──────────┘                └──────────┘
```

| Stroke | Piston Direction | Intake Valve | Exhaust Valve | What Happens Inside |
|---|---|---|---|---|
| **① Intake** | Down (TDC→BDC) | Open | Closed | Draws in fuel-air mixture |
| **② Compression** | Up (BDC→TDC) | Closed | Closed | Mixture compressed, temperature rises to ~400°C |
| **③ Power** | Down (TDC→BDC) | Closed | Closed | Spark plug fires! Fuel burns and expands, pushing piston — **the only stroke that outputs power** |
| **④ Exhaust** | Up (BDC→TDC) | Closed | Open | Combustion exhaust gases pushed out |

> **Key Insight:** Among the four strokes, only the **power stroke** outputs power to the outside; the other three strokes consume energy. This is why engines need a **flywheel** — to store energy during the power stroke and release it during the other three strokes to maintain smooth operation. Your servo model doesn't have a flywheel, but in a real engine, the flywheel is crucial for smooth running. Out of every two crankshaft revolutions (720°), only about 180° is actually "delivering power."

---

### II. Energy Conversion in the Internal Combustion Engine — Four Leaps of Energy Form

How does a tank of gasoline become wheel rotation in an engine? Four transformations of energy form occur:

```
Chemical Energy      Thermal Energy        Kinetic Energy        Mechanical Energy
(Chemical)     →    (Thermal)       →    (Kinetic)        →    (Mechanical)

  Bonds in            Combustion           Hot gases             Piston→Connecting
  gasoline            produces             rapidly               rod→Crankshaft
  molecules           2000°C+              expand &              rotation→
                       high T & P          push piston           flywheel output

     ↓                    ↓                    ↓                    ↓
  Stored in            Inside the           Collective            Usable rotational
  the fuel             cylinder             molecular motion      force at crank end
```

| Conversion Stage | Energy Form Change | Where It Happens | Efficiency Loss |
|---|---|---|---|
| **Stage 1** Chemical→Thermal | Fuel burns, releasing chemical bond energy as high-T, high-P gas | Cylinder combustion chamber | ~2–5% (incomplete combustion) |
| **Stage 2** Thermal→Kinetic | Hot gases expand, pushing piston at high speed | Inside cylinder (power stroke) | ~30–35% (heat lost to cooling system) |
| **Stage 3** Kinetic→Exhaust Heat | Unused thermal energy exits with exhaust | Exhaust pipe | ~30% (carried away by exhaust) |
| **Stage 4** Kinetic→Mechanical | Piston linear motion converted to crankshaft rotation via connecting rod | Crank-connecting rod mechanism | ~6% (friction losses) |

> **Overall Efficiency:** A typical gasoline engine ultimately converts only about **25%–35%** of the fuel's energy into useful mechanical work. This means: of every $100 spent on gasoline, only $25–35 worth of energy actually moves the car forward — the remaining $65–75 becomes heat, dissipated uselessly into the air through the radiator and exhaust pipe.

---

### III. A Brief History of the Internal Combustion Engine — Four Engineers Who Changed the World

| Year | Person | Nationality | Milestone |
|---|---|---|---|
| 1673 | Christiaan Huygens | Netherlands | First proposed using gunpowder burning in a cylinder to push a piston — the seed of the ICE idea, though unsuccessful |
| 1824 | Sadi Carnot | France | Proposed the "Carnot cycle" theory, revealing the theoretical efficiency limit of heat engines; laid the thermodynamic foundation for ICEs |
| 1860 | Étienne Lenoir | Belgium | Built the world's first practical internal combustion engine (two-stroke, no compression); thermal efficiency only ~4% |
| 1861 | Alphonse Beau de Rochas | France | First fully described the four-stroke cycle theory in a paper (intake→compression→expansion→exhaust), identifying compression as key to efficiency |
| **1876** | **Nicolaus Otto** | **Germany** | **Invented the first practical four-stroke ICE**, achieving 14% thermal efficiency; hailed as the "Father of the Internal Combustion Engine." The four-stroke cycle is named the "Otto cycle" in his honor |
| 1885 | Daimler & Maybach | Germany | Developed a high-speed gasoline engine based on Otto's design; built the world's first motorcycle |
| **1897** | **Rudolf Diesel** | **Germany** | **Invented the compression-ignition diesel engine**, achieving 26% thermal efficiency — far higher than contemporary gasoline engines. The word "diesel" is named in his memory |

> **Efficiency Evolution:** From Lenoir's 4% in 1860, to Otto's 14% in 1876, to Diesel's 26% in 1897, and finally to modern gasoline engines at 35%+ and diesel engines at 40%+ — over 160 years, humanity has improved ICE efficiency by more than tenfold.

---

### IV. The Crank-Connecting Rod Mechanism — The Translator Between Rotation and Reciprocation

Mathematically, the motion of the crank-connecting rod mechanism can be precisely described:

Let crank radius = r, connecting rod length = l, crank angle = θ:

- **Piston displacement formula** (measured from TDC):
  ```
  x = r(1 − cosθ) + l − √(l² − r²sin²θ)
  ```

- **Key geometric relationship:** When the crank pin is at the highest point (θ=0°), the piston is at **Top Dead Center (TDC)**; when the crank has rotated 180°, the piston is at **Bottom Dead Center (BDC)**. Total piston stroke = 2 × crank radius.

| Crank Angle | Piston Position | Corresponding Four-Stroke Phase (power stroke example) |
|---|---|---|
| 0° (TDC) | Highest point | Spark plug fires, combustion begins |
| 90° | Rapidly descending | Fuel burns and expands, piston pushed forcefully down |
| 180° (BDC) | Lowest point | Power stroke ends, exhaust valve about to open |
| 270° | Ascending | Exhaust stroke |
| 360° (TDC) | Back to highest point | Two strokes completed, next cycle begins |

Your servo model perfectly demonstrates this motion pattern — the servo's continuous rotation output (crankshaft) is converted via the connecting rod into the piston's reciprocating sliding motion. Although in the model the servo is the "power source" (rotation producing reciprocation), while in a real engine the direction is reversed — the piston is the power source (combustion drives it), and the crankshaft outputs rotation — the **bidirectional reversibility of the crank-connecting rod mechanism** is precisely what makes it so ingenious.

---

### V. The Internal Combustion Engine and the Future of Energy

Today, we stand at the intersection of the ICE era and the electric era:

| | Internal Combustion Engine | Electric Motor |
|---|---|---|
| Energy source | Gasoline / Diesel (fossil fuels) | Battery / Grid (can come from clean energy) |
| Efficiency | 25%–40% | 85%–95% |
| Carbon emissions | Direct tailpipe CO₂ emissions | Zero tailpipe emissions (indirect emissions from power generation possible) |
| Energy density | Extremely high (1 kg gasoline ≈ 12 kWh) | Lower (1 kg Li-ion battery ≈ 0.25 kWh) |
| Maturity | 150 years of history, extremely mature | Rapidly developing |

> Although electric vehicles are gaining popularity, the internal combustion engine is not exiting the stage of history. In 2024, over **1.4 billion** fuel-powered vehicles were still on the world's roads, with about **70 million** new ones added annually. In aviation, ocean shipping, and heavy construction machinery, the ICE — with its extremely high energy density and convenient refueling — remains difficult to fully replace. The future may lie in **hybrid power** (ICE + electric motor synergy), **hydrogen-fueled ICEs** (burning hydrogen, zero carbon emissions), and **synthetic fuels** (carbon-neutral fuels made with renewable energy). The story of the internal combustion engine is far from over.
