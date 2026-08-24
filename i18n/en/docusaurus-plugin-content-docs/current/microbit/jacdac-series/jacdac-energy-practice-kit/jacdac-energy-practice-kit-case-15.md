# Case 15: High-Altitude Wind Turbine

---

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Jacdac%E8%83%BD%E6%BA%90%E5%AE%9E%E8%B7%B5%E5%A5%97%E4%BB%B6/%E9%AB%98%E7%A9%BA%E5%8F%91%E7%94%B5.jpg)

---

## Introduction

Use the micro:bit V2 board's **built-in light sensor** to distinguish day and night — the wind turbine only starts when **there is sufficient daylight (light value > 30)**. Once started, the rotational speed of the 360° building-block servo is controlled in real time by the **sound level detected by the micro:bit V2's microphone** — the louder the sound, the faster the rotation speed (0–100), simulating a wind turbine generating power by relying on airflow when there is sufficient light. When it is dim (light value ≤ 30), the servo automatically stops.

---

## Learning Objectives

1. Understand **dual-condition judgment** — both "sufficient light" and "wind (sound)" conditions must be met simultaneously to generate power.
2. Learn the **combined use of light sensor and sound sensor** — simulating real high-altitude wind turbine wind speed + light perception.
3. Explore **high-altitude wind energy** — at 300–500 meters altitude, wind speeds are 2–3× higher than at ground level, making it one of the most promising renewable energy sources.
4. Learn **conditional nesting** — first check light, then control speed based on sound.

---

## Required Materials

| Item | Image | Quantity |
|---|---|---|
| micro:bit V2 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/microbit%20%E6%AD%A3(1).png) | 1 |
| Jacdac Expansion Board | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20bit.png) | 1 |
| Jacdac 10cm Connector Cable | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac-smart-exploration-kit-10cm-cable.png) | 2 |
| Jacdac 25cm Connector Cable | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac-smart-exploration-kit-25cm-cable.png) | 1 |
| Jacdac Light Sensor | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20Light%20Sensor.png) | 1 |
| Jacdac Servo Module | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Sensor/Jacdac%20Servo.png) | 1 |
| 360° Building-Block Servo | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Sensor/img_v3_0213q_cfc7e5b2-67bb-45ac-856e-d875221271ag.png) | 1 |
| USB Cable | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/usb%20cable1.png) | 1 |
| Jacdac Energy Practice Kit Building Blocks |  | 1 |

---

## Sensor Principle

### micro:bit V2 Built-in Light Sensor and Microphone

This case uses two types of sensors built into the micro:bit V2 board, requiring no external sensor modules:

| Sensor | Measurement | Threshold in This Case | Description |
|---|---|---|---|
| micro:bit V2 Light Sensor | Ambient light intensity | > 30 (start generation) | Sufficient light → start servo, simulating wind turbine operation |
| micro:bit V2 Microphone | Sound level | 0–255 (mapped to 0–100 speed) | Louder sound → faster servo speed, simulating wind speed |

> **Note:** This case uses a light sensor to simulate "daytime" judgment for teaching simplification purposes only. Real high-altitude wind turbines can operate around the clock.

---

## Assembly Steps

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case15/jacdac-energypractice-kit%2BAssembly%20Diagram%2BCase15.pdf" type="application/pdf" width="100%" height="600px" />

---

## Model Principle

### High-Altitude Wind Turbine — Capturing Stronger Winds

Traditional wind turbines are built on the ground or at sea, with tower heights typically not exceeding 160 meters. However, at altitudes of 300–500 meters, wind speeds are **2–3× higher** than at ground level and more stable. High-Altitude Wind Energy (HAWE) is one of the hottest research areas in renewable energy in recent years.

| Altitude | Typical Wind Speed | Wind Power Density |
|---|---|---|
| Ground (10 m) | ~4–6 m/s | Baseline |
| Tower top (100–160 m) | ~7–10 m/s | ~3–5× |
| High altitude (300–500 m) | ~10–15 m/s | ~8–27× |

> Wind power is proportional to the **cube** of wind speed — double the wind speed, and power increases eightfold. This is why engineers go to great lengths to send wind turbines to high altitudes.

The 360° building-block servo drives the blades, simulating a high-altitude wind turbine continuously generating power in powerful airflow.

---

## Connection Diagram

As shown below, insert the micro:bit V2 board into the Jacdac expansion board, and use cables to connect the 360° building-block servo module and light sensor to the Jacdac expansion board's edge connector.

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

2. Connect the sensor. MakeCode will automatically detect and simulate it in the simulator area, where sensor status is displayed in real time.

   ![Sensor Simulation](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/1jacdac-smart-exploration-kit-6.png)

3. Click **"ADD BLOCKS"** to add the sensor extension module.

   > **Note:** When connecting a new sensor, repeat the "click 'ADD BLOCKS'" workflow once.

   ![ADD BLOCKS](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/jacdac-smart-exploration-kit-7.png)

---

## Write the Program as Shown

![Program Screenshot](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case15/jacdac-energypractice-kit%2BProgram%2BCase15.png)

---

## Reference Program Link

📎[https://makecode.microbit.org/_8jiRxMVJ93v1](https://makecode.microbit.org/_8jiRxMVJ93v1)

You can also download the program directly from the webpage below. Once downloaded, you can start running the program.
<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_8jiRxMVJ93v1"
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

When there is **sufficient light (light value > 30)**, speak loudly or clap toward the micro:bit V2 board, and the 360° building-block servo begins to rotate — the louder the sound, the faster the rotation (0–100), simulating a daytime wind turbine spinning with the wind. When it's quiet, the servo stops. After covering the LED matrix **to simulate darkness or an overcast day (light value ≤ 30)**, no matter how loud the sound, the servo remains stationary — "insufficient light, no power generation."

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/%E6%A8%A1%E5%9E%8BGIF/%E9%AB%98%E7%A9%BA%E5%8F%91%E7%94%B5.gif)

---

## Think

1. This case uses sound to simulate wind speed. If you wanted to actually measure wind speed, what sensor would you need? (Hint: anemometer / wind cup)
2. Why do high-altitude wind turbines choose an altitude of 300–500 meters? Why not fly even higher? (Hint: aviation safety, tether cable weight)

---

## Program Logic

| Trigger Condition | Action | Source |
|---|---|---|
| Light value > 30 (daytime) AND sound detected | 360° building-block servo speed = sound value (0–255) → mapped (0–100); louder sound → faster rotation | micro:bit V2 Light Sensor + Microphone |
| Light value > 30 (daytime) AND complete silence | Servo stops (mapped value = 0) | micro:bit V2 Light Sensor + Microphone |
| Light value ≤ 30 (nighttime/dark) | Servo stops rotating | micro:bit V2 Light Sensor |

---

## Knowledge Extension: High-Altitude Wind Energy — The Next Generation of Clean Energy

### I. Why Send Wind Turbines to High Altitudes?

Ground-level wind is affected by terrain, buildings, and vegetation friction — it is slow and unstable. As altitude increases, surface friction decreases, and wind speed significantly increases. This phenomenon is called **Wind Shear**:

| Altitude | Wind Speed Multiple (relative to 10 m) | Power Multiple |
|---|---|---|
| 10 m (ground) | ×1.0 | ×1 |
| 100 m (tower top) | ×1.5–2.0 | ×3–8 |
| 300 m | ×2.0–2.5 | ×8–16 |
| 500 m | ×2.5–3.0 | ×16–27 |

### II. High-Altitude Wind Energy Technology Approaches

Multiple companies and technology pathways worldwide are competing in the high-altitude wind energy space:

| Technology Approach | Principle | Representative Company |
|---|---|---|
| **Tethered kite** | Large kites fly in "figure-8" patterns in the air, pulling a ground-based generator via tether cable | Kitekraft |
| **Tethered drone** | Multi-rotor drones carry small wind turbines aloft, transmitting power via cable | Altaeros (aerostat balloon + turbine) |
| **High-altitude aerostat** | Helium airship lifts a wind turbine to 300–600 m altitude | Altaeros BAT |

> It is estimated that the theoretical reserves of high-altitude wind energy far exceed those of ground-level wind energy. However, the technology is still in early stages — safely operating a tether system hundreds of meters long through thunderstorms, icing, and extreme winds is the greatest engineering challenge. Notably, real high-altitude wind turbines can operate around the clock (both day and night). This case's use of a light sensor to judge "sufficient light → generate power" is a simplified teaching design only.
