# Case 10: Solar-Powered Fan

---

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Jacdac%E8%83%BD%E6%BA%90%E5%AE%9E%E8%B7%B5%E5%A5%97%E4%BB%B6/%E5%A4%AA%E9%98%B3%E8%83%BD%E9%A3%8E%E6%89%87.jpg)

---

## Introduction

Use the **LED matrix light-sensing function** of the micro:bit V2 board to detect ambient light intensity in real time. The stronger the light, the **faster the 360° building-block servo drives the fan blades** (minimum 20%, maximum 100% speed). The weaker the light, the slower the rotation. In complete darkness, the fan runs at a minimum speed of 20% (simulating standby mode). This simulates a solar-powered fan — the stronger the sunlight, the faster the fan spins.

---

## Learning Objectives

1. Learn about the micro:bit **LED matrix light-sensing** function — LEDs repurposed as light sensors.
2. Understand **automatic control** — light intensity automatically adjusts fan speed in real time.
3. Explore real-world **solar energy** applications — solar-powered fans, solar streetlights, etc.
4. Learn **data mapping** — mapping light level values (0–255) to servo speed for smooth speed regulation.

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

## Assembly Steps

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case10/jacdac-energypractice-kit%2BAssembly%20Diagram%2BCase10.pdf" type="application/pdf" width="100%" height="600px" />

---

## Model Principle

### 360° Building-Block Servo and the Solar-Powered Fan

The 360° building-block servo provides continuous rotational power, driving the fan blades to generate airflow. The servo speed is adjusted in real time based on ambient light intensity — the stronger the light, the faster the rotation, simulating the causal chain of "more sunlight received by the solar panel → greater electrical power output → faster fan speed."

### Solar-Powered Fan — Turning Sunlight into a Cool Breeze

A solar-powered fan consists of three parts: **solar panel + motor + fan blades**. The solar panel (photovoltaic panel) converts sunlight into electrical energy, which drives the motor to spin the fan blades. It requires no batteries or external power source — as long as there is sunlight, it works. It is a model of "zero-carbon" clean energy application. Small fans on sun hats, outdoor solar exhaust fans, and solar car radiator fans all use this principle.

```
Sunlight → PV Panel (light→electricity) → Motor rotation (electricity→kinetic) → Fan blades push air → Cool breeze
```

---

## Sensor Principle

This case uses the micro:bit V2 board's **LED matrix light-sensing function** as the sensor. Besides displaying patterns, the micro:bit's LED matrix can be repurposed as a light sensor — by measuring the reverse leakage current of the LEDs to sense ambient light intensity. Light level values range from 0 to 255 (0 = darkest, 255 = brightest). The program uses the `map` function to map light values to servo speed (20–100), achieving automatic speed regulation where stronger light results in faster fan rotation.

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

![Program Screenshot](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case10/jacdac-energypractice-kit%2BProgram%2BCase10.png)

---

## Reference Program Link

📎[https://makecode.microbit.org/_2aFbbrEteHf1](https://makecode.microbit.org/_2aFbbrEteHf1)

You can also download the program directly from the webpage below. Once downloaded, you can start running the program.
<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_2aFbbrEteHf1"
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

When shining a flashlight or phone flashlight on the micro:bit V2's LED matrix, the fan blades spin at **high speed** (up to 100%) — the stronger the sunlight, the stronger the wind. When covering the LED matrix with your hand (simulating an overcast day), the fan speed automatically drops to the minimum ~20%. After removing the cover, the fan speed immediately picks back up. Light intensity determines fan speed in real time, with no manual operation needed.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/%E6%A8%A1%E5%9E%8BGIF/%E9%A3%8E%E5%8A%9B%E5%8F%91%E7%94%B5.gif)

---

## Think

1. If you wanted the fan to automatically shut off when light drops below a certain threshold (to protect the motor from repeated low-speed starts), how could you improve the program?
2. Why do real solar products (like solar streetlights, solar power banks) typically come equipped with a **rechargeable battery**?

---

## Program Logic

| Trigger Condition | Action | Source |
|---|---|---|
| Light intensity changes (continuous detection) | Maps light value (0–255) to servo speed (20–100); stronger light → faster speed, weaker light → slower speed | micro:bit LED Matrix light sensing |
| Complete darkness (light value ≈ 0) | Servo runs at minimum 20% speed (simulating standby) | micro:bit LED Matrix light sensing |
| Strong light exposure (light value ≈ 255) | Servo runs at maximum 100% full speed | micro:bit LED Matrix light sensing |

---

## Knowledge Extension: Solar Energy — The Most "Generous" Free Energy on Earth

### I. Just How "Generous" Is Solar Energy?

The Earth receives as much energy from the Sun in **1.5 hours** as the entire human race consumes in **a full year**. Every second, the Sun releases approximately **3.8×10²⁶ watts** through nuclear fusion, of which about **1.7×10¹⁷ watts** reaches the top of Earth's atmosphere — **one hundred thousand times** the total energy content of all fossil fuel reserves on Earth.

| Key Data Point | Value |
|---|---|
| 2025 global solar installed capacity | ~**2,900 GW** |
| 2025 global new solar installations | **647 GW**, 79% of global new renewable capacity |
| 2024 global solar electricity generation | **2,132 TWh**, **6.9%** of global electricity |
| Solar module price (2024) | ~**$0.10/watt**, down ~45% in one year |
| PV module price reduction over the past decade | ~**90%** |

### II. Everyday Applications of Solar Products

Solar energy is not just for large power stations — it has become deeply integrated into our daily lives:

| Product | Principle | Typical Power |
|---|---|---|
| Solar calculator | Tiny PV panel drives LCD display | < 0.01 W |
| Solar fan hat | PV panel → small motor → fan | 0.5–2 W |
| Solar streetlight | Daytime PV charging → battery → nighttime LED lighting | 20–100 W |
| Solar power bank | Foldable PV panel → charging circuit → USB output | 5–28 W |
| Home rooftop solar | PV array → inverter → home use + grid feed-in | 3–10 kW |

### III. The Wisdom of Automatic Control

This case demonstrates the concept of pure automatic control — the micro:bit's LED matrix light sensor detects ambient light intensity in real time, and the program automatically maps the light value to fan speed, requiring no manual intervention. Stronger light → faster fan; weaker light → slower fan; complete darkness → fan runs at minimum speed (simulating standby).

The core advantage of automatic control is "no human intervention needed" — the system senses environmental changes through sensors, makes decisions autonomously via the program, and drives actuators to act. This closed-loop logic of "sense → decide → act" is the foundation of all intelligent systems, from thermostats to self-driving cars. Real solar products (such as solar streetlights and solar exhaust fans) rely on precisely this automatic control logic to achieve 24/7 unattended operation.
