# Case 8: Oil Pump

---

## Introduction

Press **button A** on the micro:bit V2 board, and the 360° building-block servo rotates at full speed (100), simulating a beam pumping unit (nodding donkey oil pump) in continuous operation extracting oil. Press **button B**, and the servo stops rotating, simulating pump shutdown.

---

## Learning Objectives

1. Learn about the servo module.
2. Learn about the **button A and button B blocks** in MakeCode — triggering different servo actions via different button presses.
3. Understand what petroleum is.

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

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case08/jacdac-energypractice-kit%2BAssembly%20Diagram%2BCase08.pdf" type="application/pdf" width="100%" height="600px" />

---

## Model Principle

### Servo Module (360° Continuous Rotation Servo)

![Servo Module](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Sensor/img_v3_0213q_cfc7e5b2-67bb-45ac-856e-d875221271ag.png)

The servo module (360° continuous rotation servo) is a motor module that can rotate continuously through 360°. Its rotation speed and direction are adjusted via control signals, rather than being fixed at a specific angle like a standard servo. It is commonly used for driving robot wheels, conveyor belts, and simulating reciprocating mechanical motion.

### Beam Pumping Unit (Nodding Donkey)

The beam pumping unit (walking beam pump) is one of the primary oil extraction devices in oilfields. Driven by an electric motor, it causes the walking beam to oscillate up and down, which in turn drives the sucker rod to pump underground oil to the surface. Its appearance and motion resemble a "nodding" or "kowtowing" action, hence the nickname "nodding donkey."

> **Fun Fact:** Petroleum is a fossil fuel buried deep underground, formed from the remains of ancient organisms over millions of years of geological processes. It is known as the "blood of industry" and serves as a key raw material for gasoline, diesel, plastics, synthetic fibers, and many other products.

---

## Sensor Principle

This case does not use an external sensor module; control is achieved entirely through the built-in button A and button B of the micro:bit V2 board.

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

![Program Screenshot](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case08/jacdac-energypractice-kit%2BProgram%2BCase08.png)

---

## Reference Program Link

[https://makecode.microbit.org/_eA4Pg13sPaj0](https://makecode.microbit.org/_eA4Pg13sPaj0)

You can also download the program directly from the webpage below. Once downloaded, you can start running the program.
<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_eA4Pg13sPaj0"
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

Press **button A** on the micro:bit V2 board, and the 360° building-block servo rotates at full speed, driving the walking beam to oscillate up and down, simulating a beam pumping unit continuously extracting oil. Press **button B**, and the servo stops rotating, simulating pump shutdown.

---

## Think

1. What other scenarios in daily life can a servo be applied to?
2. Besides the beam pumping unit, what other oil extraction equipment do you know of?

---

## Program Logic

| Trigger Condition | Action | Source |
|---|---|---|
| Button A pressed | 360° building-block servo rotates continuously at full speed (100) in a single direction, simulating oil pump operation | micro:bit Button A |
| Button B pressed | 360° building-block servo stops rotating, simulating pump shutdown | micro:bit Button B |

---

## Knowledge Extension: Petroleum and Our Future

### I. Petroleum — The "Blood" of Modern Civilization

Petroleum is not just a source of gasoline and diesel — it permeates every corner of modern life:

| Petroleum Product | Everyday Uses |
|---|---|
| Gasoline, diesel, jet fuel | Fuel for cars, trucks, airplanes, ships |
| Plastics (polyethylene, polypropylene, etc.) | Phone cases, stationery, toys, packaging, water pipes |
| Synthetic fibers (polyester, acrylic, nylon) | Clothing, backpacks, sneakers, carpets |
| Fertilizers, pesticides | Agricultural production, ensuring food supply |
| Asphalt | Road and airport runway paving |
| Synthetic rubber | Tires, seals, shoe soles |
| Pharmaceuticals, cosmetics | Aspirin, petroleum jelly, lipstick, shampoo |

> **The Numbers:** In 2024, the world consumed approximately **103 million barrels** of oil per day, totaling about **37.4 billion barrels** for the year. Since 1900, humanity has extracted approximately **1.57 trillion barrels** of oil. Petroleum accounts for **32%** of global fossil fuel carbon emissions, second only to coal (41%).

---

### II. The Real Challenges We Face

#### ⚠️ Challenge 1: Finite Resources

| Key Data Point | Value |
|---|---|
| Global proven oil reserves | ~**1.73 trillion barrels** |
| Years of extraction remaining at current rate | ~**47 years** |

This means: at current consumption rates, proven oil reserves will only last until around **2070**. While technological advances continue to discover new oil fields, exploration is becoming increasingly difficult and costly.

#### ⚠️ Challenge 2: Climate and Environmental Crisis

- **2024 global fossil fuel carbon emissions reached a record 37.4 billion tons**, up 0.8% year-on-year.
- Oil spills from extraction (e.g., offshore platform blowouts) cause devastating damage to marine ecosystems.
- Plastic pollution is staggering: approximately **8 million tons** of plastic enter the ocean each year — equivalent to dumping one truckload of plastic waste into the sea every minute.
- Wastewater and exhaust emissions from petrochemical production threaten water sources and air quality.

#### ⚠️ Challenge 3: Geopolitics and Energy Security

Oil resources are extremely unevenly distributed, with the Middle East (Saudi Arabia, Iraq, Kuwait, etc.) holding nearly half of the world's proven reserves. When conflict or political instability erupts in oil-producing regions, global oil prices fluctuate violently, directly affecting every country's economic development and every person's cost of living.

---

### III. A Glimmer of Hope — The Energy Transition Underway

Facing these challenges, the world is rapidly embracing clean energy. **The good news: change is already happening.**

#### ☀️ Solar Power: The Fastest-Growing Energy Source

| Year | Global New Solar Installations | Cumulative Capacity |
|---|---|---|
| 2024 | **582 GW** | **2.25 TW** |
| 2025 | **647 GW** | **~2.9 TW** |

- 2024 global solar electricity generation reached **2,132 TWh**, 6.9% of global electricity.
- Solar module prices plunged ~**45%** in the past year to just ~**$0.10 per watt**.
- **99 countries** have doubled their solar capacity in the past five years; **23 countries** now get over 10% of their electricity from solar (Hungary leads globally at 25%).

#### 💨 Wind Power: A Strong Comeback

- 2025 global new wind installations: **167 GW**, up **47%** year-on-year; cumulative ~**1,300 GW**.
- 2024 global wind electricity generation: **2,494 TWh**, 8.1% of global electricity.
- Wind + solar combined directly contributed ~**15%** of global electricity in 2024 (~**31.9%** if all renewables including hydro are counted).

#### 🚗 Electric Vehicles: Rewriting Oil Demand

- Mass adoption of new energy vehicles is reducing transportation's dependence on oil at the source.
- 2024 global EV sales (including plug-in hybrids) exceeded **17 million units**, up ~25% year-on-year. The electrification wave is accelerating globally.

---

### IV. What We Can Do

Facing the dual challenges of oil depletion and environmental crisis, everyone can contribute:

| Direction | Concrete Actions |
|---|---|
| **Save energy** | Turn off lights when leaving, set AC reasonably (≥26°C in summer), choose public transport, cycling, or walking |
| **Reduce plastic use** | Bring your own water bottle and shopping bags, refuse single-use plastics, practice proper waste sorting |
| **Support clean energy** | Learn about solar, wind, hydrogen, and other clean energy; share environmental awareness with those around you |
| **Cultivate scientific interest** | Study science seriously and consider future careers in energy technology, environmental protection, and innovation |
| **Practice low-carbon living** | Save paper, finish your food, recycle — every small habit reduces your carbon footprint |
