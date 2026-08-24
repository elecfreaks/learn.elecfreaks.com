# Case 6: Wind Power Generation

---

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Jacdac%E8%83%BD%E6%BA%90%E5%AE%9E%E8%B7%B5%E5%A5%97%E4%BB%B6/3.%E9%A3%8E%E5%8A%9B%E5%8F%91%E7%94%B5.jpg)

---

## Introduction

Tilt the micro:bit V2 board to control the "wind strength" — **the greater the tilt angle, the stronger the wind**, and the faster the 360° building-block servo drives the wind turbine blades. When the board is held upright (no-wind state), the blades stop rotating. The built-in accelerometer senses the tilt angle and adjusts rotation speed in real time, simulating a wind turbine operating in response to changing wind conditions.

---

## Learning Objectives

1. Learn about **wind turbines** and understand the basic principle of converting wind energy into electrical energy.
2. Learn about the micro:bit V2's **accelerometer** — a MEMS sensor capable of detecting tilt angle and motion state.
3. Understand the **difference between gyroscopes and accelerometers** and their respective applications in daily life.
4. Learn **multi-condition branching (if-else if-else)** — categorizing wind levels based on tilt angle and executing different rotation speeds for each level.
5. Understand the important role of wind energy in the history of human energy utilization.

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

This case uses the built-in accelerometer of the micro:bit V2 as the sensor. It detects the board's tilt angle (pitch direction) and maps the tilt angle to different wind levels with corresponding servo speeds.

## Assembly Steps

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case06/jacdac-energypractice-kit%2BAssembly%20Diagram%2BCase06.pdf" type="application/pdf" width="100%" height="600px" />

---

## Model Principle

### Wind Turbine — Capturing the Energy of the Wind

A wind turbine consists of three major parts: the **tower, blades, and nacelle (housing the generator)**. The wind pushes the blades to rotate, transmitting rotational kinetic energy through the main shaft to the generator, which uses electromagnetic induction to convert kinetic energy into electrical energy. In simple terms:

```
Wind energy → Blade rotation (kinetic energy) → Gearbox speed change → Generator rotation → Electromagnetic induction → Electrical energy
```

The faster the blades spin, the greater the generator's power output. A single modern large wind turbine (10 MW) operating at full capacity can generate **10,000 kWh** per hour — enough to power an average household for about **3 years**.

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

![Program Screenshot](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case06/jacdac-energypractice-kit%2BProgram%2BCase06.png)

---

## Reference Program Link

[https://makecode.microbit.org/_5uu7PU2ojFTc](https://makecode.microbit.org/_5uu7PU2ojFTc)

You can also download the program directly from the webpage below. Once downloaded, you can start running the program.
<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_5uu7PU2ojFTc"
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

When the micro:bit V2 board is held **upright**, the servo is stationary — no-wind state. Tilt the board slightly forward (small angle), and the servo rotates at **low speed** — a gentle breeze. Increase the tilt to a medium angle, and the servo rotates at **medium speed** — the wind picks up. Tilt it steeply, and the servo rotates at **high speed** — strong wind incoming. The tilt angle determines the "wind strength" and blade speed in real time.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/%E6%A8%A1%E5%9E%8BGIF/%E9%A3%8E%E5%8A%9B%E5%8F%91%E7%94%B5.gif)

---

## Think

1. Besides tilt detection, what other motions can an accelerometer sense? (Hint: shaking, free fall)
2. If you attached the micro:bit to a spinning bicycle wheel, how would the accelerometer readings change?

---

## Program Logic

| Trigger Condition | Action | Source |
|---|---|---|
| Board held upright (no tilt) | Servo stationary — no-wind state | micro:bit Accelerometer |
| Slight tilt (small angle) | Servo rotates at low speed — gentle breeze | micro:bit Accelerometer |
| Medium tilt | Servo rotates at medium speed — wind strengthening | micro:bit Accelerometer |
| Steep tilt | Servo rotates at high speed — strong wind | micro:bit Accelerometer |

---

## Knowledge Extension: Wind Energy — A Ten-Thousand-Year Journey from Sailboats to Offshore Wind Farms

### I. Wind — Humanity's Earliest "Free Energy"

Before coal and oil were discovered, wind and water were the only two forms of natural power that humans could harness at scale. The history of wind energy utilization is almost as long as human civilization itself:

| Period | Wind Energy Application | Representative Example |
|---|---|---|
| ~5000 BCE | Wind-powered sailing | Ancient Egyptian Nile sailboats |
| ~200 BCE | Wind-powered water lifting | Persian (Iranian) vertical-axis windmills |
| 7th–13th century CE | Windmill drainage & grinding | Persian windmills spread westward → European windmills, Chinese vertical-sail windmills |
| 12th century | European windmill proliferation | Dutch windmills for drainage and land reclamation (see Windmill Case) |
| 1887–1888 | First wind turbine generators | James Blyth (Scotland) built one for his holiday home; Charles Brush (USA) built a 12 kW turbine |
| 1941 | First megawatt-class wind turbine | Smith-Putnam turbine, Vermont, USA, 1.25 MW |
| 1970s | Oil crisis spurs wind power revival | Denmark leads large-scale deployment |
| 1991 | World's first offshore wind farm | Vindeby, Denmark — 11 × 450 kW turbines |
| 2025 | Global wind capacity reaches 1,299 GW | 57 countries built new wind projects; China's installed capacity exceeds 520 GW |

---

### II. How a Wind Turbine Works

A modern wind turbine consists of the following key components:

```
                        ┌──────────────────────────────┐
                        │   Wind Turbine Structure      │
                        └──────────────┬───────────────┘
                                       │
     ┌─────────┐  ┌────────┐  ┌───────┴───────┐  ┌──────────┐
     │ Blades  │  │Nacelle │  │    Tower      │  │Foundation│
     └────┬────┘  └───┬────┘  └───────────────┘  └──────────┘
          │           │
    ┌─────┴─────┐ ┌──┴──────────────┐
    │Wind pushes│ │Gearbox→Generator│
    │rotation   │ │Kinetic→Electric │
    │Up to 140m+│ │Yaw system→align │
    └───────────┘ └─────────────────┘
```

| Component | Function | Interesting Fact |
|---|---|---|
| Blades | Capture wind energy, convert wind kinetic energy into rotational kinetic energy | Modern blades can exceed **140 meters** in length — longer than a football field |
| Nacelle (housing generator) | Convert rotational kinetic energy into electrical energy | Contains a yaw system that automatically rotates the nacelle to face the wind |
| Tower | Elevates the turbine to capture stronger, more stable winds at altitude | Modern tower heights can reach **140 meters** — about 50 stories tall |
| Foundation | Securely anchors the entire structure | Offshore turbine foundations can weigh **thousands of tons** — equivalent to a small warship |

> **Key Data:** A single 10 MW offshore wind turbine's blades take about 4–5 seconds per rotation, but each rotation generates approximately **15 kWh** of electricity. At that rate, one turbine can generate about **40 million kWh** annually — enough to power roughly **12,000** Chinese households for an entire year.

---

### III. Wind Power — A Vanguard of the Global Energy Transition

| Key Data Point | Value |
|---|---|
| 2025 global new wind installations | **165 GW**, up 40% year-on-year — a historic record |
| End-2025 global cumulative wind capacity | ~**1,299 GW** |
| 2024 global wind electricity generation | **2,494 TWh**, 8.1% of global electricity |
| World's largest wind power country | **China** (520 GW, ~40% of global total) |
| World's largest offshore wind farm | Dogger Bank, UK (planned total capacity 3.6 GW) |
| World's largest single wind turbine | Mingyang MySE 18.X-20MW (China, already rolled off production line) |
| 2024 wind industry employment | ~**1.6 million** people globally |
| 57 countries | Built new wind projects in 2025 |

> In 2024, **Denmark** generated approximately 55% of its electricity from wind power — the highest share globally. Ireland (36%), Uruguay (35%), and Portugal (29%) followed closely. In these countries, one out of every three kilowatt-hours comes from the gift of the wind.

---

### IV. The Future of Wind — How Much Potential Remains

| Prospect | Description |
|---|---|
| **Floating offshore wind** | Traditional offshore turbines require seabed fixation (water depth < 60 m). Floating turbines can be deployed in deep water (> 60 m), multiplying the accessible wind resource several-fold. Japan, Norway, and Scotland have built demonstration projects. |
| **High-altitude wind energy** | At 300–500 m altitude, wind speeds are 2–3× higher and more stable than at ground level. Multiple companies are developing tethered kite/drone power generation systems, replacing heavy towers with lightweight tethers. |
| **Turbine blade recycling** | Early fiberglass blades were difficult to recycle after decommissioning. From 2025, multiple manufacturers have started introducing **recyclable blades** whose materials can be reused after retirement. |
| **Wind + energy storage** | Wind is intermittent? Pair it with large-scale battery storage or hydrogen production (using surplus wind power for electrolysis to produce hydrogen) to "shave peaks and fill valleys," making wind power available 24/7. |

> According to IEA projections, by 2050, wind and solar together will provide approximately **70%** of global electricity. The tiny servo-driven blades you control on the micro:bit today could one day grow into giant rotors over 200 meters in diameter sweeping across the sea surface. **The wind keeps blowing — the key is whether we are ready to capture it.**
