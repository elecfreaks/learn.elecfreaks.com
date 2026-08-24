# Case 4: Wave Power Generation

---

## Introduction

**Speak, clap, or make sounds** toward the micro:bit V2 board — the louder the sound, the faster the 360° building-block servo drives the cam, the more vigorously the "buoy" oscillates up and down, simulating stronger waves and higher power generation. The quieter the sound, the gentler the oscillation. In complete silence, the servo stops, simulating a calm sea. The sound represents the "power of the waves."

---

## Learning Objectives

1. Learn about the principle of **wave power generation** — converting the oscillating kinetic energy of waves into electrical energy.
2. Explore the **types and potential of ocean energy** — tidal, wave, thermal gradient, ocean current, and salinity gradient energy.
3. Understand the **relationship between humans and the ocean** — the ocean is not only a source of food and shipping routes, but also a vast treasure trove of future clean energy.

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

---

## Sensor Principle

This case uses the built-in microphone of the micro:bit V2 as the sensor. It captures ambient sound levels (0–255) in real time and maps them to the servo rotation speed.

## Assembly Steps

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case04/jacdac-energypractice-kit%2BAssembly%20Diagram%2BCase04.pdf" type="application/pdf" width="100%" height="600px" />

---

## Model Principle

### 360° Building-Block Servo and Cam — Simulating Wave Motion

The 360° building-block servo rotates continuously, and the cam on the output shaft periodically lifts and lowers the "buoy" (follower), causing it to oscillate up and down — simulating how a buoy rises and falls on the sea surface under wave action. Each full rotation of the servo completes one "rise → fall" wave cycle for the buoy. The shape of the cam determines the wave "morphology" — a smoothly curved cam produces gentle swells, while a sharply profiled cam produces steep wave crests.

> In real-world wave power devices, the oscillating motion of the buoy is converted directly into electrical energy through hydraulic systems or linear generators — each breath of the ocean delivers clean electricity to the grid.

### Wave Power Generation — The Ocean's Breath

The basic principle of wave power generation is **three-stage energy conversion**:

```
Wave kinetic / potential energy (oscillation)
        ↓ Stage 1
Device motion (buoy oscillation, OWC water column vibration, pendulum swing)
        ↓ Stage 2
Rotational mechanical energy (turbine / hydraulic motor)
        ↓ Stage 3
Electrical energy (generator electromagnetic induction)
```

Three mainstream wave power technologies:

| Technology Type | Principle | Characteristics |
|---|---|---|
| **Oscillating Water Column (OWC)** | Waves cause water column inside a chamber to oscillate vertically, compressing air to drive a turbine | Rotating parts don't contact seawater; good corrosion resistance; easy maintenance |
| **Pendulum Device** | Waves push a pendulum to swing back/forth or up/down, generating power via hydraulics | High conversion efficiency; well-suited to waves' low-frequency, high-thrust characteristics |
| **Overtopping Reservoir** | Waves are funneled by a tapered channel and overflow into an elevated reservoir; the water level difference drives a turbine | No moving parts; good reliability; requires specific coastal topography |

---

## Connection Diagram

As shown below, insert the micro:bit V2 board into the Jacdac expansion board, and connect the servo module to the Jacdac expansion board's edge connector.

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

![Program Screenshot](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case04/microbit-screenshot(1).png)

---

## Reference Program Link

[https://makecode.microbit.org/_HHgJmiT3XXFr](https://makecode.microbit.org/_HHgJmiT3XXFr)

You can also download the program directly from the webpage below. Once downloaded, you can start running the program.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_HHgJmiT3XXFr"
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

When you **speak loudly or clap** toward the micro:bit V2 board, the 360° building-block servo rotates at high speed driving the cam, and the buoy oscillates vigorously — simulating "stormy seas, full-load power generation." When you speak softly, the oscillation is gentle — "light breeze, gentle waves." In complete silence, the servo stops and the buoy remains still — "sea as smooth as a mirror." Sound level controls wave intensity in real time.

---

## Think

1. The cam was used in the rice pounding machine case, and it is also used in the wave power station — the same mechanism simulates pounding grain in one case and wave oscillation in another. What other natural phenomena or production actions can you think of that could be simulated with a cam?
2. One of the greatest challenges facing wave power generation is "typhoons" — monster waves can destroy power generation devices. If you were an engineer, how would you design the system to withstand extreme weather?

---

## Program Logic

| Trigger Condition | Action | Source |
|---|---|---|
| Sound level detected | 360° building-block servo rotates at a speed mapped from the sound value, driving the cam to move the buoy up and down | micro:bit Sound Sensor |

---

## Knowledge Extension: Blue Energy — The Ocean, Humanity's Untapped Super Battery

### I. The Ocean Never Rests — Why Ocean Energy Is So Alluring

Approximately **71%** of the Earth's surface is covered by oceans. The solar energy absorbed by the ocean each day is equivalent to the heat released by burning approximately **250 billion** barrels of oil — about **2,400 times** the 2024 global daily petroleum consumption. More importantly, ocean energy has advantages that land-based renewables lack:

| Comparison Dimension | Solar | Wind | Ocean Energy |
|---|---|---|---|
| Intermittency | Zero at night | Fluctuates unpredictably | **Tides are regular; waves are persistent** |
| Predictability | Affected by cloud cover | Difficult to forecast precisely | **Tides can be accurately forecast years in advance** |
| Space footprint | Occupies large land areas | Occupies large land areas | On/under the sea surface; does not compete for land |
| Energy density | ~0.2 kW/m² | ~0.5 kW/m² | **Seawater is 832× denser than air; large power even at low speeds** |

> Global theoretical ocean energy reserves are estimated at **10¹⁰–10¹¹ kW** (10–100 billion kW), roughly **10–100 times** the current total global installed electricity capacity. Yet as of end-2024, actual operational ocean energy capacity worldwide is only about **513 MW** (0.513 GW) — less than **one millionth** of the theoretical potential.

---

### II. The Ocean Energy Family — Five "Blue Energies"

| Energy Type | Energy Source | Technology Maturity | Global Theoretical Reserve | China's Resource-Rich Regions |
|---|---|---|---|---|
| **Tidal** | Lunar & solar gravity causing sea level rise/fall | ✅ Commercialized (La Rance 240 MW, Sihwa 254 MW) | ~10⁹ kW range | Zhejiang, Fujian |
| **Wave** | Wind blowing over sea surface forming waves | 🔧 Full-scale prototype sea trials | ~10⁹ kW range | Zhejiang, Fujian, Guangdong, Taiwan |
| **OTEC (Thermal Gradient)** | Temperature difference between surface & deep water (~20°C) | 🔬 Scale-model testing | ~10¹⁰ kW range | South China Sea (99% of China's resource) |
| **Ocean Current / Tidal Stream** | Earth's rotation, temperature gradients, gravity driving seawater flow | 🔧 Full-scale prototype testing | ~10⁸ kW range | Zhoushan Islands |
| **Salinity Gradient** | Osmotic pressure from salinity difference between fresh & salt water | 🧪 Laboratory validation | ~10⁹ kW range | Major river estuaries |

---

### III. Wave Power — Capturing Every Breath of the Ocean

Waves are the result of interaction between wind and seawater. Wind blowing over the sea surface transfers part of its kinetic energy to the water, forming waves. Waves can travel thousands of kilometers without significant attenuation — a swell formed in the central Pacific can travel all the way to coastlines tens of thousands of kilometers away.

| Wave Power Key Facts | Data |
|---|---|
| Global theoretical wave energy reserve | ~**2×10⁹ kW (2 billion kW)** |
| China's coastal annual average wave power | ~**1.3×10⁷ kW (13 million kW)** |
| Typhoon wave power density | Up to several **thousand kW per meter** of wave front |
| 2024 European cumulative wave energy capacity | ~**13.5 MW** (only 830 kW operational) |
| Global ocean energy new installations (2024) | Only **1.6 MW** |

> Wave power is still at the **full-scale prototype sea-trial stage** — meaning there is not yet a single truly commercial wave power station anywhere in the world. An energy treasure trove of trillion-ton scale awaits the keys to be forged by engineers. And your servo-cam model is the first step in exploring this treasure.

---

### IV. Humans and the Ocean — From Fear to Reverence to Symbiosis

| Era | Human-Ocean Relationship | Typical Events |
|---|---|---|
| Ancient times | **Fear & Mystery** | Sea gods, dragon kings, sea monsters in mythology |
| Age of Sail (15th–17th c.) | **Conquest & Exploration** | Columbus crossing the Atlantic, Magellan's circumnavigation, Maritime Silk Road |
| Industrial Age (19th–20th c.) | **Exploitation & Pollution** | Overfishing, offshore oil extraction, plastic pollution (~8 million tons enter the ocean annually) |
| Contemporary (21st c.) | **Awakening & Coexistence** | Marine protected areas, carbon-sink fisheries, ocean ranching, clean ocean energy development |

Today, humanity stands at a new starting point. The ocean is no longer an object to be "conquered," nor an inexhaustible "free dumping ground" — it is a vast ecological and energy partner with whom we must **live in symbiosis**:

| Dimension | What the Ocean Gives Humanity | What Humanity Returns to the Ocean |
|---|---|---|
| Food | ~**3 billion** people rely on seafood as their primary protein source | Sustainable fisheries, combatting illegal fishing, establishing marine protected areas |
| Climate | Oceans absorb ~**25%** of CO₂ emissions and **90%** of excess heat | Reducing carbon emissions, controlling ocean acidification |
| Energy | Tidal, wave, thermal gradient, ocean current, salinity gradient — five "blue energies" | Developing clean ocean energy technology without harming marine ecosystems |
| Transport | ~**90%** of global cargo travels by sea | Low-sulfur fuels, reducing ship noise to protect whales |
| Medicine | Marine organisms are a key source of new drug discovery (anti-cancer, antiviral, etc.) | Protecting marine biodiversity, avoiding over-harvesting |

> **Reflection:** In your servo-cam model, every rise and fall of the "buoy" simulates a breath of the ocean. The tides and waves of Earth have existed for billions of years — long before humans appeared, long before fossil fuels formed. Learning to harvest energy from the ocean's breath is learning to live in harmony with the planet's most ancient force. The future blue energy era awaits your creation.
