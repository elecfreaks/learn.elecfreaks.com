# Case 12: Smart Desk Lamp

---

## Introduction

Use the **Jacdac light sensor** to detect ambient light intensity in real time. When the environment becomes dark, press the Jacdac **external button module**, and the LED ring lights up red — the lamp turns on. Press the button again, and the LED turns off — the lamp turns off. The button only works when light is insufficient — pressing it during the day has no effect, simulating the smart lamp logic of "only need light when it's dark."

---

## Learning Objectives

1. Learn about the **light sensor** — an electronic component that precisely detects ambient light intensity.
2. Understand **automatic feedback control** — the closed-loop logic of sensor (eyes) → program (brain) → actuator (hands).
3. Learn **condition-triggered state toggling** — the lamp only toggles on/off when both conditions (dark environment + button pressed) are met simultaneously.
4. Explore the applications and energy-saving significance of **smart lighting** in modern life.

---

## Required Materials

| Item | Image | Quantity |
|---|---|---|
| micro:bit V2 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/microbit%20%E6%AD%A3(1).png) | 1 |
| Jacdac Expansion Board | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20bit.png) | 1 |
| Jacdac 10cm Connector Cable | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac-smart-exploration-kit-10cm-cable.png) | 2 |
| Jacdac 25cm Connector Cable | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac-smart-exploration-kit-25cm-cable.png) | 1 |
| Jacdac Button Sensor | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20Button%20sensor.png) | 1 |
| Jacdac Light Sensor | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20Light%20Sensor.png) | 1 |
| Jacdac LED Ring | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20LED%20Ring.png) | 1 |
| USB Cable | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/usb%20cable1.png) | 1 |

---

## Assembly Steps

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case12/jacdac-energypractice-kit%2BAssembly%20Diagram%2BCase12.pdf" type="application/pdf" width="100%" height="600px" />

---

## Model Principle

### Button Module and LED Ring — Light On When Dark, Auto Off When Bright

In this case, the external button module and LED ring work together under the conditional judgment of the light sensor:

| Component | Function | Control Method |
|---|---|---|
| Light Sensor | Determines day/night (ambient brightness) | Continuously reads light value (threshold: 30) |
| Button Module | Toggles the lamp on/off | Press once → on (Count=1); press again → off (Count=2→reset to 0) |
| LED Ring | Provides illumination (red) | When Count=1, lights red at 100% brightness; otherwise off |

Workflow: The light sensor acts like a "gatekeeper" — it only allows the button to take effect when it's dark. The button acts like a "switch" — in a dark environment, press once to turn on, press again to turn off. But if it becomes bright, the light turns off automatically, the counter resets, and everything starts anew.

> The program uses a **Count variable** to track how many times the button has been pressed — Count=1 represents the on state, Count=2 represents the off state and auto-resets to zero. This method of using a variable to record state is called a **State Machine** — one of the most fundamental and important design patterns in programming.

---

## Sensor Principle

This case uses the **Jacdac Light Sensor** and **Jacdac Button Module** as input sensors, and the **Jacdac LED Ring** as the output actuator.

**Light Sensor Working Principle:** The light sensor contains a light-dependent resistor (LDR) or photodiode. Its resistance value (or reverse leakage current) changes with ambient light intensity — stronger light → smaller resistance (larger current); weaker light → larger resistance (smaller current). The sensor converts the optical signal into an analog voltage, which is then converted by an ADC (Analog-to-Digital Converter) into a digital signal (0–255) for the program to read.

**Condition-Triggered State Toggle Logic:** The core of this case lies in "dual-condition judgment" — the LED ring only toggles its on/off state when both **light value < 30 (dark)** AND **button pressed** are simultaneously satisfied. If either condition is not met (e.g., daytime or button not pressed), the system performs no action. This "AND logic" ensures the smart lamp only lights up when truly needed, preventing energy waste from accidentally turning it on during the day.

---

## Connection Diagram

As shown below, insert the micro:bit V2 board into the Jacdac expansion board, and use cables to connect the light sensor, button module, and LED ring to the Jacdac expansion board's edge connector via **daisy-chaining**.

![Connection Diagram](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/%E7%A1%AC%E4%BB%B6%E8%BF%9E%E7%BA%BF%E5%9B%BE/micro%EF%BC%9Abit%20%2B%E8%88%B5%E6%9C%BA%E6%A8%A1%E5%9D%97%2B%E8%88%B5%E6%9C%BA%2BLED%2B%E5%85%89%E6%95%8F.png)

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

![Program Screenshot](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case12/jacdac-energypractice-kit%2BProgram%2BCase12.png)

---

## Reference Program Link

[https://makecode.microbit.org/_VLgXsR1WpKbb](https://makecode.microbit.org/_VLgXsR1WpKbb)

You can also download the program directly from the webpage below. Once downloaded, you can start running the program.
<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_VLgXsR1WpKbb"
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

When there is sufficient light (light value ≥ 30), pressing the button has no effect — "no need for light during the day." After covering the light sensor with your hand to simulate darkness (light value < 30), press the button: first press — LED ring lights up red (brightness 100), lamp on; second press — LED ring turns off (brightness 0), lamp off. Continue pressing to toggle on/off repeatedly. But once you remove the cover (daylight), the light automatically turns off, the counter resets to zero, and the system waits for the next darkness.

---

## Think

1. Both the smart desk lamp and the solar tracking case from earlier use a light sensor — how do their usage patterns differ?
2. If you wanted the lamp to only turn on when detecting "someone nearby" (not just based on brightness), what additional sensor would you need?

---

## Program Logic

| Trigger Condition | Action | Source |
|---|---|---|
| Light value < 30 (dark) AND button pressed → Count=1 | LED ring lights red at 100% brightness — lamp on | Jacdac Light Sensor + Jacdac Button Module |
| Light value < 30 (dark) AND button pressed → Count=2 | LED ring turns off (brightness 0), Count resets to 0 — lamp off | Jacdac Light Sensor + Jacdac Button Module |
| Light value ≥ 30 (daylight) | Button has no effect; LED stays off — no need for light during the day | Jacdac Light Sensor |

---

## Knowledge Extension: Smart Lighting — Making Every Kilowatt-Hour Count

### I. Lighting and Energy — Numbers You May Not Know

Lighting is a significant component of global electricity consumption:

| Key Data Point | Value |
|---|---|
| Global lighting share of electricity | ~**15%** (roughly equal to global nuclear power output) |
| Global lighting share of carbon emissions | ~**5%** |
| LED vs. incandescent energy savings | LED saves **80%–90%** compared to incandescent |
| LED lifespan | **15,000–50,000 hours** (incandescent: only ~1,000 hours) |
| If the whole world switched to LED | Could reduce CO₂ emissions by ~**1.4 billion tons** annually |

> The simple act of "changing a lightbulb" has made a huge contribution to global emissions reduction. And smart lighting can save an additional **30%–50%** of energy on top of that — because lights only turn on when they are actually needed.

### II. The Evolutionary Ladder of Smart Lighting

| Era | Lighting Method | Control Method | Intelligence Level |
|---|---|---|---|
| Ancient | Torches, oil lamps | Manual ignition | Zero |
| 1879 | Incandescent (Edison) | Manual switch | Zero |
| 1938 | Fluorescent lamps | Manual switch | Zero |
| 1960s | Sound-activated lights (hallways) | Sound trigger | ★ |
| 1990s | Infrared sensor lights | Human body detection | ★★ |
| 2000s | LED + timer switch | Timer control | ★★★ |
| 2010s | Smart bulbs (Wi-Fi/Bluetooth) | Phone app + voice | ★★★★ |
| 2020s | AI smart lighting systems | Sensor fusion + machine learning | ★★★★★ |

The smart desk lamp you built today — using a light sensor to detect brightness and automatically switch — stands at the **third tier** of this evolutionary chain. In just forty years, humanity has traversed the complete evolution from "manual switch" to "automatic sensing" to "AI control."

### III. Sensor Fusion Behind the Smart Desk Lamp

Real smart lighting systems typically don't rely on just one sensor — they fuse multiple sensors for joint decision-making:

| Sensor | What It Detects | Role in Smart Lighting |
|---|---|---|
| Light sensor | Ambient brightness | Determines whether light is needed |
| PIR infrared sensor | Human body movement | Detects "is anyone there?" — auto-off when unoccupied |
| mmWave radar | Human presence (even when stationary) | More precise than PIR; common in offices/classrooms |
| Illuminance sensor | Precise illuminance (lux) | Ensures work surfaces meet national standard illuminance levels |
| Clock module | Date and time | Automatically adjusts lighting schedules based on sunrise/sunset times |

> **Reflection:** You used just **one** light sensor today to achieve automatic on/off for the smart desk lamp. Add a PIR human body sensor and a clock module, and your lamp becomes "smarter" — knowing when someone is there and when it will get dark. The art of engineering design lies in combining multiple simple sensors to create a system far "smarter" than any single sensor alone.
