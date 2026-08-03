# Case 13: Smart Greenhouse

---

## Introduction

Simultaneously use the **Jacdac temperature & humidity sensor and soil moisture sensor** to monitor the greenhouse environment in real time. Only when all three indicators are within acceptable ranges (temperature < 35, humidity < 75, soil moisture < 50) does the micro:bit LED matrix display a **smiley face** indicating "crop growing conditions are good." If any indicator falls outside the range, a **frowny face** alarm is displayed. Press **button A** to rotate the 360° building-block servo forward and open the ventilation window; press **button B** to reverse the servo and close the ventilation window; touch the **Logo** to stop the servo.

---

## Learning Objectives

1. Learn about the **temperature & humidity sensor and soil moisture sensor** — core sensors for greenhouse environmental monitoring.
2. Understand **multi-condition logic judgment (AND)** — all conditions must be met simultaneously to be considered satisfactory.
3. Learn **multi-sensor fusion** — synthesizing readings from multiple sensors to make comprehensive judgments.
4. Explore the applications and significance of **smart greenhouses** in modern agriculture.

---

## Required Materials

| Item | Image | Quantity |
|---|---|---|
| micro:bit V2 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/microbit%20%E6%AD%A3(1).png) | 1 |
| Jacdac Expansion Board | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20bit.png) | 1 |
| Jacdac 10cm Connector Cable | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac-smart-exploration-kit-10cm-cable.png) | 1 |
| Jacdac 25cm Connector Cable | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac-smart-exploration-kit-25cm-cable.png) | 2 |
| Jacdac Temperature & Humidity Sensor | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Sensor/Jacdac%20HT.png) | 1 |
| Jacdac Soil Moisture Sensor | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Sensor/Jacdac%20Moisture.png) | 1 |
| Jacdac Servo Module | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Sensor/Jacdac%20Servo.png) | 1 |
| 360° Building-Block Servo | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Sensor/img_v3_0213q_cfc7e5b2-67bb-45ac-856e-d875221271ag.png) | 1 |
| USB Cable | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/usb%20cable1.png) | 1 |

---

## Sensor Principle

### Two Key Greenhouse Sensors

This case simultaneously uses two types of Jacdac sensors, forming a complete greenhouse environmental monitoring system:

| Sensor | Measurement | Threshold in This Case | Role in the Greenhouse |
|---|---|---|---|
| Temperature & Humidity Sensor | Ambient temperature; air humidity | < 35 (suitable); < 75 (suitable) | Moderate temperature → comfortable; too low → close window for insulation; moderate humidity → not stuffy or dry |
| Soil Moisture Sensor | Soil water content | < 50 (suitable) | Moderate soil moisture → no irrigation needed |

---

## Assembly Steps

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case13/jacdac-energypractice-kit%2BAssembly%20Diagram%2BCase13.pdf" type="application/pdf" width="100%" height="600px" />

---

## Model Principle

### Smart Greenhouse — Replacing the Farmer's Eyes with Sensors

In traditional farming, farmers rely on experience to judge "should I ventilate today? should I water today?" A smart greenhouse replaces human senses with sensors:

| Traditional Method | Smart Greenhouse Method | Advantage |
|---|---|---|
| Touch the soil to judge wet/dry | Soil moisture sensor | Precise numerical values, 24/7 monitoring |
| Feel whether it's hot or cold | Temperature sensor | Accuracy to 0.1°C |
| Judge stuffiness by feel | Humidity sensor | Quantified indicators, automatic recording |

In this case, the 360° building-block servo simulates the greenhouse's **motorized ventilation window** — forward rotation opens the window for ventilation and cooling; reverse rotation closes the window for insulation; touch the Logo to stop.

---

## Connection Diagram

As shown below, insert the micro:bit V2 board into the Jacdac expansion board, and use cables to connect the temperature & humidity sensor, soil moisture sensor, and 360° building-block servo module to the Jacdac expansion board's edge connector.

![Connection Diagram](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/%E7%A1%AC%E4%BB%B6%E8%BF%9E%E7%BA%BF%E5%9B%BE/micro%EF%BC%9Abit%20%2B%E8%88%B5%E6%9C%BA%E6%A8%A1%E5%9D%97%2B%E8%88%B5%E6%9C%BA%2B%E5%9C%9F%E5%A3%A4%2B%E6%B8%A9%E6%B9%BF%E5%BA%A6.png)

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

![Program Screenshot](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case13/jacdac-energypractice-kit%2BProgram%2BCase13.png)

---

## Reference Program Link

[https://makecode.microbit.org/_ac7XFk7rE4Fa](https://makecode.microbit.org/_ac7XFk7rE4Fa)

You can also download the program directly from the webpage below. Once downloaded, you can start running the program.
<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_ac7XFk7rE4Fa"
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

When all three conditions — temperature < 35, humidity < 75, soil moisture < 50 — are **simultaneously satisfied**, the micro:bit LED matrix displays a **smiley face**, indicating that the greenhouse environment is suitable for crop growth. If any one indicator exceeds its threshold (temperature ≥ 35 OR humidity ≥ 75 OR soil moisture ≥ 50), a **frowny face** alarm is immediately displayed. Press **button A** to rotate the 360° building-block servo forward (100), simulating opening the ventilation window. Press **button B** to reverse the servo (-100), simulating closing the ventilation window. Touch the **Logo** to stop the servo.

---

## Think

1. Real greenhouses need to monitor temperature, humidity, light, CO₂ concentration, and many other parameters simultaneously. If a light sensor were added, how should the program be modified?
2. In this case, all three conditions must be met to show a happy face. If the logic were changed to "alarm if any one exceeds the threshold," how should the logic be changed? (Hint: AND → OR)

---

## Program Logic

| Trigger Condition | Action | Source |
|---|---|---|
| Temperature < 35 AND humidity < 75 AND soil moisture < 50 (environment suitable) | LED matrix displays smiley face | Jacdac Temperature & Humidity + Soil Moisture Sensors |
| Any indicator exceeds threshold (temperature ≥ 35 OR humidity ≥ 75 OR soil moisture ≥ 50) | LED matrix displays frowny face | Jacdac Temperature & Humidity + Soil Moisture Sensors |
| Button A pressed | 360° building-block servo rotates forward (100), simulating opening the ventilation window | micro:bit V2 Button A |
| Button B pressed | 360° building-block servo rotates in reverse (-100), simulating closing the ventilation window | micro:bit V2 Button B |
| Logo touched | 360° building-block servo stops rotating | micro:bit V2 Logo touch key |

---

## Knowledge Extension: Smart Greenhouses — When Agriculture Meets IoT

### I. What Is a Smart Greenhouse?

A Smart Greenhouse is a modern agricultural production system that integrates **sensor monitoring, automatic control, and data analysis**. By deploying multiple sensors to collect environmental data in real time, the control system automatically adjusts temperature, humidity, light, irrigation, and more, creating the most suitable growing environment for crops.

| Traditional Farming | Smart Greenhouse |
|---|---|
| At the mercy of weather; heavily affected by climate | Environment controlled; stable year-round production |
| Manual watering and fertilizing based on experience | Precise sensor monitoring; automatic irrigation and fertilization |
| Pest and disease detection is late; heavy losses | Early warning; precision prevention and treatment |
| Severe water and fertilizer waste | Water and fertilizer savings of 30%–50% |
| Unstable yields | Yields can be **significantly increased** |

### II. Greenhouse Environmental Parameter Standards

| Environmental Parameter | Suitable Range (most crops) | Sensor Type |
|---|---|---|
| Temperature | 20°C–30°C (daytime) / 15°C–20°C (nighttime) | Temperature sensor |
| Air Humidity | 60%–80% | Humidity sensor |
| Soil Moisture | 50%–70% field capacity | Soil moisture sensor |
| Light Intensity | 20,000–50,000 lux | Light sensor |
| CO₂ Concentration | 800–1,200 ppm | CO₂ sensor |

> According to FAO statistics, the global population will reach **9.7 billion** by 2050, and food demand will increase by approximately **60%**. Precision agriculture, represented by smart greenhouses, is one of the key technologies to address this challenge.

---

### III. AND Logic — From Code to Life

The core logic of this case — **multiple conditions all satisfied simultaneously (AND)** — exists far beyond code:

| Scenario | AND Logic |
|---|---|
| Passing an exam | Language passed AND Math passed AND English passed |
| Rocket launch | Weather OK AND Equipment OK AND Trajectory OK AND Communications OK |
| Phone unlock | Face matched AND eyes looking at screen (anti-photo unlock) |
| Greenhouse达标 | Temperature OK AND Humidity OK AND Soil OK |

> The three-condition AND judgment program you wrote follows the **exact same logic** as SpaceX's pre-launch "Go/No-Go" checklist — thousands of conditions must all be green before ignition. Programming mindset is everywhere.
