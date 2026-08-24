# Case 3: Hydroelectric Power Station

---

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Jacdac%E8%83%BD%E6%BA%90%E5%AE%9E%E8%B7%B5%E5%A5%97%E4%BB%B6/%E6%B0%B4%E5%8A%9B%E5%8F%91%E7%94%B5.jpg)

---

## Introduction

**Speak, clap, or make sounds** toward the micro:bit V2 board — the louder the sound, the brighter the LED light ring and the faster the 360° building-block servo drives the water turbine generator model, simulating stronger water flow and higher power generation. The quieter the sound, the dimmer the LED and slower the servo. In complete silence, the LED turns off and the servo stops, simulating a dry-season shutdown. The sound represents the "force of the water current."

---

## Learning Objectives

1. Learn about **hydroelectric power stations** and understand the basic principle of converting the potential energy of water into electrical energy.
2. Understand the **energy conversion chain** — water potential energy → water kinetic energy → turbine rotational kinetic energy → generator electromagnetic induction → electrical energy.
3. Understand the **advantages and disadvantages** of hydroelectric power, developing a comprehensive perspective on renewable energy.

---

## Required Materials

| Item | Image | Quantity |
|---|---|---|
| micro:bit V2 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/microbit%20%E6%AD%A3(1).png) | 1 |
| Jacdac Expansion Board | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20bit.png) | 1 |
| Jacdac 10cm Connector Cable | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac-smart-exploration-kit-10cm-cable.png) | 1 |
| Jacdac 25cm Connector Cable | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac-smart-exploration-kit-25cm-cable.png) | 1 |
| Jacdac Servo Module | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Sensor/Jacdac%20Servo.png) | 1 |
| Jacdac LED Ring | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20LED%20Ring.png) | 1 |
| 360° Building-Block Servo | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Sensor/img_v3_0213q_cfc7e5b2-67bb-45ac-856e-d875221271ag.png) | 1 |
| USB Cable | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/usb%20cable1.png) | 1 |
| Jacdac Energy Practice Kit Building Blocks |  | 1 |

---

## Sensor Principle

This case uses the built-in microphone of the micro:bit V2 as the sensor. It captures ambient sound levels (0–255) in real time and maps them to both the servo rotation speed and the LED ring brightness.

## Assembly Steps

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case03/jacdac-energypractice-kit%2BAssembly%20Diagram%2BCase03.pdf" type="application/pdf" width="100%" height="600px" />

---

## Model Principle

### 360° Building-Block Servo and the Water Turbine Generator Model

The 360° building-block servo provides continuous rotational power and is mounted on the central axle of the water turbine generator model. As the servo rotates, it drives the turbine blades, simulating the process of water flow striking a turbine to spin it, which in turn drives a generator to produce electricity. The servo speed corresponds to the "water flow intensity" — the faster the rotation, the stronger the water flow and the higher the power generation.

### Hydroelectric Power Station — The Energy Code of a Dam

The core principle of a hydroelectric power station is using the **drop height (head)** of water to generate electricity. As water flows from a higher elevation to a lower one, its **gravitational potential energy** is converted into **kinetic energy** — this high-speed water flow strikes the turbine blades, causing them to rotate. The turbine then drives a generator, which converts the rotational kinetic energy into electrical energy via **electromagnetic induction**. The entire process burns no fuel and produces zero carbon emissions.

> **Key Formula:** Hydroelectric power ≈ water density × gravitational acceleration × water flow rate × head height. The higher the head (drop height) and the greater the flow rate, the greater the power generated. With a 100-meter head, each ton of water falling can generate approximately 0.27 kWh of electricity.

---

## Connection Diagram

As shown below, insert the micro:bit V2 board into the Jacdac expansion board, and use cables to connect the servo module and LED ring to the Jacdac expansion board's edge connector via **daisy-chaining**.

![Connection Diagram](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/%E7%A1%AC%E4%BB%B6%E8%BF%9E%E7%BA%BF%E5%9B%BE/micro%EF%BC%9Abit%20%2B%E8%88%B5%E6%9C%BA%E6%A8%A1%E5%9D%97%2B%E8%88%B5%E6%9C%BA%2BLED.png)

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

![Program Screenshot](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case03/jacdac-energypractice-kit%2BProgram%2BCase03.png)

---

## Reference Program Link

[https://makecode.microbit.org/_1gAhi03bcemx](https://makecode.microbit.org/_1gAhi03bcemx)

You can also download the program directly from the webpage below. Once downloaded, you can start running the program.
<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_1gAhi03bcemx"
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

Sound level is correlated in real time — the louder the sound, the faster the 360° building-block servo rotates and the brighter the Jacdac LED ring shines; the quieter the sound, the slower the servo and the dimmer the LED ring. This simulates a hydroelectric power station in operation.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/%E6%A8%A1%E5%9E%8BGIF/%E6%B0%B4%E5%8A%9B%E5%8F%91%E7%94%B5.gif)

---

## Think

1. Both hydroelectric power generation and waterwheel water lifting (the noria case) use the power of water — how are they different?
2. If you live in a place without large rivers, what other methods of power generation could you use?

---

## Program Logic

| Trigger Condition | Action | Source |
|---|---|---|
| Sound level detected | 360° building-block servo rotates at a speed mapped from the sound value, driving the water turbine generator; LED ring brightness varies with sound level | micro:bit Sound Sensor |

---

## Knowledge Extension: Hydroelectric Power — From a Single Drop of Water to Lighting Up a City

### I. Where Does Water's Energy Come From — The Science of Energy Conversion

What exactly happens to a drop of water falling from a reservoir hundreds of meters high? Below is the complete energy conversion chain in hydroelectric power generation:

```
Solar radiation        Evaporation         Cloud precipitation     Mountain reservoir
(Nuclear fusion)  →   (Thermal)      →   (Gravitational PE)  →   (PE storage)
                                                                      ↓
                                                               Water falls from height
                                                                      ↓
                                                                  Water kinetic energy
                                                                (High-speed water flow)
                                                                      ↓
                                                             Strikes turbine blades
                                                                      ↓
                                                              Turbine rotational KE
                                                               (Mechanical rotation)
                                                                      ↓
                                                             Generator electromagnetic
                                                                   induction
                                                                      ↓
                                                                 Electrical energy
                                                                (To homes everywhere)
```

| Conversion Stage | Energy Form Change | Where It Happens | Efficiency |
|---|---|---|---|
| Stage 1 | Gravitational PE → Water kinetic energy | Penstock (water rushes down from dam height) | ~95% |
| Stage 2 | Water kinetic energy → Rotational kinetic energy | Turbine (water flow strikes blades) | ~90–95% |
| Stage 3 | Rotational kinetic energy → Electrical energy | Generator (rotor cuts magnetic field lines) | ~95–98% |
| **Overall Efficiency** | | | **~85–92%** |

> The comprehensive energy conversion efficiency of hydroelectric power reaches **85%–92%**, among the highest of all power generation methods. For comparison: thermal power ~35–45%, solar photovoltaic ~15–22%, wind power ~35–45%. One ton of water falling from a height of 100 meters can theoretically generate about 0.27 kWh — enough to keep an LED light on for 10 continuous hours.

---

### II. How a Hydroelectric Power Station Is Built

A large hydroelectric power station typically includes the following core components:

```
                            ┌─────────────────────────────┐
                            │  Hydroelectric Station       │
                            └─────────────┬───────────────┘
                                          │
    ┌─────────┐    ┌─────────┐    ┌───────┴───────┐    ┌──────────┐
    │Reservoir│    │   Dam   │    │  Powerhouse   │    │Transmission│
    └────┬────┘    └────┬────┘    └───────┬───────┘    └─────┬────┘
         │              │                 │                  │
    Stores water    Blocks river       Turbine + Gen       Power to grid
    Provides head   Creates drop       Water→Electricity   Homes everywhere
```

| Component | Function | Interesting Fact |
|---|---|---|
| **Reservoir** | Stores large volumes of water, provides stable head and flow | Three Gorges Reservoir capacity: **39.3 billion m³**, equivalent to 2,800 West Lakes |
| **Dam** | Blocks the river, creating a water level drop | Three Gorges Dam: **181 m** tall, ~**2.3 km** long — as tall as a 60-story building |
| **Penstock** | Guides water from the high reservoir to the low turbine | Water speeds can reach tens of meters per second with enormous impact force |
| **Turbine** | Converts water flow kinetic energy into rotational mechanical energy | A single turbine runner can exceed **10 m** in diameter and weigh hundreds of tons |
| **Generator** | Uses electromagnetic induction to convert rotational kinetic energy into electricity | A single Three Gorges generator: **700 MW** — enough for a medium-sized city |
| **Tailrace** | Discharges spent water back into the downstream river | Ensures downstream river ecology is not interrupted |

---

### III. Global Hydropower — A Giant in Numbers

| Key Data Point | Value |
|---|---|
| 2024 global installed hydropower capacity | **1,283 GW** |
| 2024 global hydropower generation | ~**4,200 TWh**, ~**14.3%** of global electricity |
| Global hydropower generation cost | ~**$0.057/kWh** (among the lowest of all renewables) |
| World's largest hydroelectric station | **China's Three Gorges Dam**, **22.5 GW** capacity, ~**80–100 TWh** annually |
| Countries with hydropower | **134** |
| Oldest still-operating hydro station | Some over **100 years** (extremely long lifespan) |
| China's installed hydropower capacity | Over **420 GW**, #1 globally for many consecutive years |

| Rank | Country | Installed Capacity | Share of National Electricity |
|---|---|---|---|
| 1 | China | ~420 GW | ~16% |
| 2 | Brazil | ~110 GW | ~63% |
| 3 | USA | ~102 GW | ~6% |
| 4 | Canada | ~83 GW | ~60% |
| 5 | Russia | ~56 GW | ~17% |

> In countries like **Brazil, Canada, Norway, and Venezuela**, hydropower provides over half of all electricity. Norway generates almost **100%** of its electricity from hydropower — the most "water-powered" country in the world.

---

### IV. The Two Sides of Hydropower — No Perfect Energy Source

#### ✅ Advantages

| Advantage | Description |
|---|---|
| **Extremely high efficiency** | 85%–92%, far exceeding thermal (~40%) and solar PV (~20%) |
| **Zero-carbon operation** | No fossil fuels burned during generation, no greenhouse gas emissions |
| **Dispatchable / fast response** | Hydro units can go from shutdown to full power in minutes — much faster than thermal or nuclear, ideal for peak load balancing |
| **Extremely long lifespan** | Dams and stations can operate for **50–100 years**; excellent long-term ROI |
| **Low operating cost** | Once built, the "fuel" is free (water falls from the sky); O&M costs far lower than thermal |
| **Multi-purpose utilization** | One dam can simultaneously provide: power generation, flood control, irrigation, water supply, navigation, tourism, aquaculture |

Beyond power generation, the Three Gorges Project raised the Yangtze River's middle and lower reaches' flood protection standard from **"once in 10 years"** to **"once in 100 years,"** safeguarding approximately 15 million people.

#### ❌ Disadvantages

| Disadvantage | Description | Real-World Example |
|---|---|---|
| **Submerges large areas of land** | Reservoir inundation floods upstream farmland, forests, villages, and even ancient towns | Three Gorges Reservoir submerged **1,084 km²** — roughly half the area of Shenzhen |
| **Population displacement** | Estimates suggest up to **80 million** people worldwide have been displaced by dam construction | Three Gorges displaced ~**1.3 million** people — the largest reservoir resettlement in human history |
| **Ecological damage** | Dams block fish migration, alter river temperature and water quality, disrupt aquatic ecosystems | The Chinese sturgeon is critically endangered due to blocked migration routes from Gezhouba and Three Gorges Dams |
| **Sediment trapping** | Sediment trapped behind dams deprives downstream deltas of replenishment, causing coastal retreat | After Egypt's Aswan Dam, the Nile Delta has retreated tens of meters annually |
| **Reservoir greenhouse gases** | In tropical regions, submerged vegetation decomposes to produce methane (25× the greenhouse effect of CO₂) | Some tropical reservoirs in early filling stages produce significant methane — but this is limited to specific regions and initial periods, not a universal hydro characteristic |
| **Climate vulnerability** | Droughts cause significant drops in generation | Global drought in 2021 reduced hydropower output by **0.4%**, with some countries seeing drops over 20% |

> **Core Dilemma:** Hydropower is clean — but the process of dam building is not "clean." Hydropower is green — but the forests it submerges are also green. Whether hydro is truly "green energy" depends on how we balance the benefits of generation against the ecological costs.

---

### V. The Future of Hydropower — From Mega-Dams to "Micro-Hydro"

| Trend | Description |
|---|---|
| **Pumped storage** | Use surplus electricity (e.g., nighttime wind power) to pump water back to a higher reservoir, then release it to generate during peak demand — essentially a giant "water battery." Currently accounts for over **90%** of global energy storage |
| **Small / micro hydropower** | Uses natural stream drops without large dams to generate (tens to thousands of kW), minimal ecological impact, suitable for remote mountainous areas and villages |
| **Retrofitting aging stations** | ~40% of global hydro equipment has operated for over 40 years; technology upgrades can boost efficiency 10%–20% |
| **Improved fish passages** | Designing more fish-friendly ladders and passages to help migratory fish bypass dams |
| **Environmental flow mandates** | Requiring stations to release minimum ecological flows downstream to keep rivers from running dry |

> **Reflection:** Your servo model simulates a turbine rotating to generate power, but the greatest real-world challenge is this — how to generate electricity without inflicting irreversible harm on rivers and the people who live alongside them. Future engineers, this puzzle awaits your solution.
