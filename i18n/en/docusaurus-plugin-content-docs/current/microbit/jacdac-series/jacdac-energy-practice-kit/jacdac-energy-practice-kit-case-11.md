# Case 11: Solar Tracking

---

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Jacdac%E8%83%BD%E6%BA%90%E5%AE%9E%E8%B7%B5%E5%A5%97%E4%BB%B6/%E5%A4%AA%E9%98%B3%E8%83%BD%E8%BF%BD%E5%85%89.jpg)

---

## Introduction

Using **two sets of light sensors** — the micro:bit V2's built-in LED matrix light sensor and the Jacdac external light sensor — to compare light intensity on the left and right sides in real time. The 360° building-block servo drives the solar panel model to **automatically rotate toward the darker side** (Note: the tracking direction depends on the mounting positions of the two light sensors — in this model, rotating toward the darker side means rotating toward the light source), until the light values on both sides approach equilibrium, achieving automatic solar panel light tracking and alignment with the light source. When the light direction changes, the system automatically re-adjusts.

---

## Learning Objectives

1. Learn about the principle of **solar power generation** — directly converting sunlight into electrical energy.
2. Understand the principle of **light tracking / automatic tracking systems** — using differential comparison to keep the solar panel always facing the light source.
3. Explore the important role of **solar energy utilization** in humanity's energy system.

---

## Required Materials

| Item | Image | Quantity |
|---|---|---|
| micro:bit V2 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/microbit%20%E6%AD%A3(1).png) | 1 |
| Jacdac Expansion Board | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20bit.png) | 1 |
| Jacdac 10cm Connector Cable | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac-smart-exploration-kit-10cm-cable.png) | 1 |
| Jacdac 25cm Connector Cable | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac-smart-exploration-kit-25cm-cable.png) | 1 |
| Jacdac Light Sensor | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20Light%20Sensor.png) | 1 |
| Jacdac Servo Module | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Sensor/Jacdac%20Servo.png) | 1 |
| 360° Building-Block Servo | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Sensor/img_v3_0213q_cfc7e5b2-67bb-45ac-856e-d875221271ag.png) | 1 |
| USB Cable | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/usb%20cable1.png) | 1 |
| Jacdac Energy Practice Kit Building Blocks |  | 1 |

---

## Sensor Principle

### Dual-Sensor Light Tracking Principle

Two sets of light sensors are placed on the **left and right sides** of the solar panel model, simulating "left eye" and "right eye." The program continuously compares the light values from both sides:

```
Left Light Sensor (micro:bit built-in)      Right Light Sensor (Jacdac external)
        │                                              │
        └──────────────┬───────────────────────────────┘
                       ↓
              Compare both sides' light values
                       ↓
        ┌──────────────┼──────────────┐
        ↓              ↓              ↓
    Left darker     Both close      Right darker
        ↓              ↓              ↓
   Servo turns     Servo stops     Servo turns
     left             (aligned ✓)     right
   (tracking)                        (tracking)
```

---

## Assembly Steps

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case11/jacdac-energypractice-kit%2BAssembly%20Diagram%2BCase11.pdf" type="application/pdf" width="100%" height="600px" />

---

## Model Principle

### 360° Building-Block Servo and Light-Tracking Solar Panel

The 360° building-block servo drives a small solar panel model to rotate. The servo automatically adjusts its direction based on the reading difference between the two light sensors — the larger the difference, the faster it rotates; the smaller the difference, the slower it rotates; when the difference disappears, it stops. The entire system forms a **closed-loop feedback control**: sensor (eyes) → program judgment (brain) → servo action (hands) → solar panel movement → sensor re-reads (eyes), repeating until the light source is aligned.

### Solar Power Generation — Turning Sunlight into Electricity

The core of a solar panel (photovoltaic panel) is **semiconductor material** (typically silicon). When sunlight (photons) strikes the PV panel, the energy of the photons "knocks" electrons out of silicon atoms, creating free electrons. The **PN junction**'s built-in electric field inside the PV panel drives these free electrons directionally, generating an electric current. The entire process involves no mechanical motion and burns no fuel — it is truly "stationary power generation" clean energy.

```
Sunlight (photons) → Excites silicon atom electrons → PN junction electric field directional drive → DC current → Electrical energy
```

---

## Connection Diagram

As shown below, insert the micro:bit V2 board into the Jacdac expansion board, and use cables to connect the light sensor and servo module to the Jacdac expansion board's edge connector via **daisy-chaining**.

![Connection Diagram](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/%E7%A1%AC%E4%BB%B6%E8%BF%9E%E7%BA%BF%E5%9B%BE/micro%EF%BC%9Abit%20%2B%E8%88%B5%E6%9C%BA%E6%A8%A1%E5%9D%97%2B%E8%88%B5%E6%9C%BA%2B%E5%85%89%E6%95%8F.png)

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

2. Connect the sensors. MakeCode will automatically detect and simulate them in the simulator area, where sensor status is displayed in real time.

   ![Sensor Simulation](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/1jacdac-smart-exploration-kit-6.png)

3. Click **"ADD BLOCKS"** to add the sensor extension module.

   > **Note:** When connecting a new sensor, repeat the "click 'ADD BLOCKS'" workflow once.

   ![ADD BLOCKS](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/jacdac-smart-exploration-kit-7.png)

---

## Write the Program as Shown

![Program Screenshot](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case11/jacdac-energypractice-kit%2BProgram%2BCase11.png)

---

## Reference Program Link

[https://makecode.microbit.org/_hK6K3yigEW0v](https://makecode.microbit.org/_hK6K3yigEW0v)

You can also download the program directly from the webpage below. Once downloaded, you can start running the program.
<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_hK6K3yigEW0v"
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

When a light source shines on the solar tracking model, the two light sensors detect the light intensity on the left and right sides respectively. If one side is darker, the servo automatically rotates toward the darker side, turning the solar panel toward the light source, and stops once the light values on both sides are close (difference < threshold). When the light source position is moved, the system automatically re-tracks, keeping the solar panel always facing the light source.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/%E6%A8%A1%E5%9E%8BGIF/%E5%A4%AA%E9%98%B3%E8%83%BD%E8%BF%BD%E5%85%89.gif)

---

## Think

1. If only one light sensor were used (e.g., only the micro:bit's LED matrix), could light tracking be achieved? Why or why not?
2. Why do real solar tracking systems generally not pursue perfect alignment (allowing a few degrees of deviation)? Can you guess the reason?

---

## Program Logic

| Trigger Condition | Action | Source |
|---|---|---|
| Left light value < Right light value (difference > threshold) | 360° building-block servo rotates left, turning solar panel toward the light source | micro:bit LED Matrix light sensing + Jacdac Light Sensor |
| Right light value < Left light value (difference > threshold) | 360° building-block servo rotates right, turning solar panel toward the light source | micro:bit LED Matrix light sensing + Jacdac Light Sensor |
| Both sides close (difference ≤ threshold) | Servo stops; solar panel facing the light source | micro:bit LED Matrix light sensing + Jacdac Light Sensor |

---

## Knowledge Extension: Chasing the Sun — Solar Energy and Humanity's Dream of Catching Sunlight

### I. The Wisdom of the Sunflower — Why Track the Light?

In nature, the young flower heads of sunflowers (*Helianthus annuus*) follow the sun from east to west throughout the day — a phenomenon called **heliotropism**. Plants track light through uneven distribution of auxin (growth hormone) — higher concentration on the shaded side causes cells to elongate faster, bending the stem toward the light. Mature sunflowers stop tracking and fix their heads facing east — facing the morning sun helps them warm up faster and attract pollinators.

Humans have learned a lesson from sunflowers: **always face the light source directly to receive the maximum energy.** Solar tracking systems are the engineering realization of this natural wisdom:

| Tracking Method | Gain Over Fixed Angle | Description |
|---|---|---|
| **No tracking (fixed mount)** | Baseline (100%) | Solar panel installed at a fixed angle; most efficient only around noon |
| **Single-axis tracking** | **+15%–25%** | Tracks the sun along one axis (typically east-west); cost increase ~10–15% |
| **Dual-axis tracking** | **+30%–45%** | Precisely tracks the sun on both horizontal and vertical axes, always facing directly; cost increase ~25–35% |

### II. Solar Energy — The Most "Generous" Energy on Earth

The Earth receives as much solar energy in **1.5 hours** as all of humanity consumes in **an entire year**. Every second, the Sun releases approximately **3.8×10²⁶ watts** through nuclear fusion, of which about **1.7×10¹⁷ watts** reaches the top of Earth's atmosphere — **one hundred thousand times** the total energy of all fossil fuel reserves.

| Global Solar Key Data | Value |
|---|---|
| 2025 global solar installed capacity | ~**2,900 GW** |
| 2025 global new solar installations | **647 GW**, ~79% of new renewable capacity |
| 2024 global solar electricity generation | **2,132 TWh**, **6.9%** of global electricity |
| Module price (2024) | ~**$0.10/watt**, dropped 45% in one year |
| World's largest solar plant | China's Talatan Solar Park, Qinghai — **15.7 GW**, area equivalent to Singapore |
| Fastest-growing solar country | China (378 GW added in 2025); 99 countries doubled capacity in 5 years |

> Solar electricity generation grew approximately **16-fold** between 2015 and 2024 — the fastest-growing energy form in human history. PV module prices have fallen ~**90%** over the past decade, transforming solar from "expensive future energy" into "the cheapest new-build electricity."

---

### III. From Sand to Power Station — How Solar Cells Are Made

The core material of solar panels is **silicon** — one of the most abundant elements on Earth, making up ~**27.7%** of the Earth's crust by mass, second only to oxygen. Turning sand (primarily silicon dioxide, SiO₂) into electricity-generating panels requires the following key steps:

```
Sand (SiO₂)
    ↓ High-temperature smelting (~2000°C)
Industrial-grade silicon (purity ~99%)
    ↓ Chemical purification
Polysilicon (purity 99.9999% — "six nines")
    ↓ Monocrystalline pulling or multicrystalline casting
Silicon ingot (mono or multi)
    ↓ Slicing (thickness ~0.15–0.2 mm)
Silicon wafer
    ↓ Doping (phosphorus/boron) → forms PN junction
Solar cell
    ↓ Series encapsulation (glass + EVA + backsheet)
PV module (panel)
    ↓ Installation at power station
Solar power station
```

> A standard solar panel has a lifespan of **25–30 years** and requires almost no maintenance during that time. After 25 years, its power generation efficiency still retains over **80%** of its initial level.

---

### IV. Cross-Disciplinary Applications of Light Tracking

The "differential comparison light tracking" you implemented in this case has principles that go far beyond solar panels:

| Application Field | Light Tracking Principle Embodied |
|---|---|
| **Astronomical telescopes** | Auto-guiding systems track celestial objects, compensating for Earth's rotation |
| **Robot navigation** | Infrared line-following cars use dual sensors to compare left/right reflectivity, staying on the black line |
| **Automatic door control** | Infrared sensors detect human approach and open doors automatically — the same dual-sensor differential comparison logic as the light tracking system |
| **Face tracking** | After a camera recognizes a face, a gimbal automatically rotates to keep the face centered in the frame |
| **Sound localization** | Dual-microphone arrays compare the time difference of sound arrival at two mics to locate the sound source direction |
| **Plant research** | Studying the molecular mechanisms of sunflower phototropism to inspire artificial photosynthesis systems |

> **Insight:** Those few lines of light-tracking code you wrote on the micro:bit — "compare two values → move toward the side with the difference → until balanced" — follow **the same logic** as algorithms in many high-end automatic control systems. Simple but universal.

---

### V. Light Tracking and the Future — Solar Power in Space

Perhaps humanity's biggest imagination about light tracking lies not in the desert, but in space:

- **Space-Based Solar Power (SBSP):** Build ultra-large solar arrays in geostationary orbit **36,000 km** above Earth. In space, there is no atmospheric absorption, no cloud cover, no day-night cycle — solar irradiance is **1.4×** that of the surface and available 24/7. Collected energy is transmitted back to Earth via microwaves or lasers.
- Japan, the United States, the European Space Agency, and other nations and organizations have launched space solar research programs, exploring the feasibility of wirelessly transmitting clean energy from space to Earth.
- One of the greatest technical challenges of this concept is **extremely high-precision light-tracking alignment** — from 36,000 km away, a microwave beam must be precisely aimed at a ground receiving antenna (a dish several kilometers across), with an extremely small margin for angular error.

> **Reflection:** The light-tracking model you built today using two light sensors is the starting point for all these grand endeavors. Once humanity learned to chase light, boundless possibilities opened up. The Sun is giving away energy for free every second — learning to "capture" it is learning to live in harmony with the cosmos.
