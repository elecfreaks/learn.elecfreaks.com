# Case 16: Smart Soil Moisture Device

---

## Introduction

Use the **Jacdac soil moisture sensor** to detect soil water content in real time. The **Jacdac LED ring** color and brightness visually indicate the soil moisture status: **Red high brightness (100%)** = soil is dry and urgently needs watering (moisture < 20); **Blue medium brightness (80%)** = soil is slightly dry (moisture 20–50); **Green low brightness (60%)** = soil is moist and suitable (moisture 50–70); **LED off** = soil is overly wet (moisture > 70). A simple three-color indicator so watering no longer relies on guesswork.

---

## Learning Objectives

1. Understand **multi-threshold graded judgment (if-elif-elif-else)** — executing different actions based on which range a value falls into.
2. Learn **LED color coding** — using the three colors red/blue/green to intuitively convey "dry/medium/wet" information.
3. Explore the water-saving significance of **precision irrigation** in modern agriculture.

---

## Required Materials

| Item | Image | Quantity |
|---|---|---|
| micro:bit V2 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/microbit%20%E6%AD%A3(1).png) | 1 |
| Jacdac Expansion Board | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20bit.png) | 1 |
| Jacdac 25cm Connector Cable | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac-smart-exploration-kit-25cm-cable.png) | 2 |
| Jacdac Soil Moisture Sensor | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Sensor/Jacdac%20Moisture.png) | 1 |
| Jacdac LED Ring | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20LED%20Ring.png) | 1 |
| USB Cable | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/usb%20cable1.png) | 1 |

---

## Sensor Principle

### Soil Moisture Sensor

The Jacdac soil moisture sensor estimates water content by measuring the **dielectric constant** of the soil. Water molecules are polar; the higher the water content, the greater the soil's dielectric constant. The sensor converts this physical quantity into an analog numerical output.

| Moisture Range | Soil Condition | LED Indication | Recommendation |
|---|---|---|---|
| 0–20% | Dry | Red LED, brightness 100% | ⚠️ Water urgently needed! |
| 20–50% | Slightly dry | Blue LED, brightness 80% | 💧 Can water moderately |
| 50–70% | 💚 Moist | Green LED, brightness 60% | ✅ Moisture suitable; no watering needed |
| 70+% | 💧 Overly wet | LED off | 🛑 Stop watering; prevent root rot |

> The suitable moisture range for most plant root systems is between **50%–70%**. Below 20%, water stress begins; above 80%, roots lack oxygen and may rot. Precisely controlling soil moisture is the most critical aspect of agricultural irrigation.

---

## Assembly Steps

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case16/jacdac-energypractice-kit%2BAssembly%20Diagram%2BCase16.pdf" type="application/pdf" width="100%" height="600px" />

---

## Model Principle

### Soil Moisture Sensor — The Plant's "Thirst Meter"

In traditional farming, people insert a finger into the soil to judge wetness — it's crude and imprecise. The soil moisture sensor acts as the plant's "electronic thirst meter":

| Traditional Method | Sensor Method |
|---|---|
| Finger test; subjective judgment | Precise numerical value; objective quantification |
| Can only check a few times a day | 24/7 continuous monitoring |
| Can only judge the surface layer | Can measure moisture at root depth |
| Cannot record history | Connectable to IoT for long-term tracking |

This case converts sensor readings into an intuitive three-color LED display — red stop (water shortage), green go (suitable), blue alert (slightly dry, needs attention) — as simple and easy to understand as a traffic light.

---

## Connection Diagram

As shown below, insert the micro:bit V2 board into the Jacdac expansion board, and use cables to connect the soil moisture sensor and LED ring to the Jacdac expansion board's edge connector.

![Connection Diagram](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/%E7%A1%AC%E4%BB%B6%E8%BF%9E%E7%BA%BF%E5%9B%BE/micro%EF%BC%9Abit%20%2B%E5%9C%9F%E5%A3%A4%2BLED.png)

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

![Program Screenshot](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case16/jacdac-energypractice-kit%2BProgram%2BCase16.png)

---

## Reference Program Link

[https://makecode.microbit.org/_0JXiAC5rCeYd](https://makecode.microbit.org/_0JXiAC5rCeYd)

You can also download the program directly from the webpage below. Once downloaded, you can start running the program.
<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_0JXiAC5rCeYd"
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

Insert the soil moisture sensor probe **into dry soil**, and the LED ring **lights up red (brightness 100%)** — "Water shortage! Watering needed." Slowly add water to the soil; as the moisture value gradually rises, the LED changes from red to **blue (brightness 80%)** — "Soil absorbing water." Continue adding water to reach a suitable moisture level, and the LED changes to **green (brightness 60%)** — "Moisture just right." If too much water is added, the LED **turns off** — "Too wet, stop watering!" The entire process requires no reading of any numbers — the soil condition can be judged by the LED color alone.

---

## Think

1. Besides LED ring color, what other methods could be used to indicate soil moisture? (Hint: sound, micro:bit 5×5 LED matrix displaying emoji expressions)
2. If you wanted to turn this device into a true "automatic watering system," what additional actuator would you need?

---

## Program Logic

| Trigger Condition | Action | Source |
|---|---|---|
| Soil moisture < 20 (dry) | LED ring lights red at 100% brightness — urgent watering warning | Jacdac Soil Moisture Sensor |
| Soil moisture 20–50 (slightly dry) | LED ring lights blue at 80% brightness — slightly dry; can water moderately | Jacdac Soil Moisture Sensor |
| Soil moisture 50–70 (suitable) | LED ring lights green at 60% brightness — moisture suitable | Jacdac Soil Moisture Sensor |
| Soil moisture > 70 (overly wet) | LED ring turns off — over-wet warning; stop watering | Jacdac Soil Moisture Sensor |

---

## Knowledge Extension: From "Finger Test" to "Electronic Sensing" — The Precision Irrigation Revolution

### I. Global Water Crisis and Agricultural Water Use

Agriculture is the world's largest consumer of freshwater, accounting for approximately **70%** of human freshwater withdrawals. However, about **50%–60%** of water used in traditional irrigation methods is wasted through evaporation, seepage, and runoff — never actually reaching plant roots.

| Irrigation Method | Water Use Efficiency | Suitable Scenarios |
|---|---|---|
| Flood irrigation | 30%–40% | Traditional agriculture |
| Sprinkler irrigation | 60%–70% | Large-scale farmland |
| Drip irrigation | 90%–95% | Greenhouses, orchards, high-value crops |
| **Sensor-based precision irrigation** | **95%+** | **Smart greenhouses, vertical farms** |

> Global agricultural water accounts for approximately 70% of freshwater withdrawals. Promoting sensor-based precision irrigation could save hundreds of billions of cubic meters of water annually.

### II. if-elif-else — The Programming Paradigm of Multi-Level Classification

The four-level moisture judgment in this case (if-elif-elif-else) is the programming embodiment of multi-level classification thinking:

```
if moisture < 20: Red LED → Dry
elif moisture < 50:  Blue LED → Slightly dry
elif moisture < 70:  Green LED → Suitable
else:  LED off → Overly wet
```

This structure has countless applications in daily life:

| Application Scenario | Classification Basis | Multi-Level Output |
|---|---|---|
| Grade levels | Score | 90+ Excellent / 80+ Good / 60+ Pass / <60 Fail |
| Weather warnings | Temperature | Red / Orange / Yellow heat alerts |
| Air quality | AQI index | Good / Moderate / Unhealthy for Sensitive / Unhealthy / Very Unhealthy / Hazardous |
| Phone battery | Percentage | 100% green / 20% yellow / 10% red flashing |

### III. Soil Moisture — More Than Just Watering

Plant roots require a delicate balance of air and moisture. Soil that is too dry prevents roots from absorbing water and nutrients; soil that is too wet deprives roots of oxygen, leading to root rot. Different plants have entirely different soil moisture requirements:

| Plant Type | Suitable Moisture Range | Watering Frequency |
|---|---|---|
| Cactus / Succulents | 20%–40% | Once a week or less |
| Tomato / Pepper | 50%–70% | Every 1–2 days |
| Rice | 80%–100% (flooded) | Continuous flooding |
| Orchids | 40%–60% (well-aerated) | Every 3–5 days |

> **Reflection:** The numerical value returned by the soil moisture sensor (0–100 or 0–255) is not the true soil water content percentage, but a **relative value** output by the sensor. In real applications, **calibration** using standard methods such as the "oven-drying gravimetric method" is required to convert sensor readings into accurate soil water content percentages. Calibration is an indispensable key step in all sensor engineering.
