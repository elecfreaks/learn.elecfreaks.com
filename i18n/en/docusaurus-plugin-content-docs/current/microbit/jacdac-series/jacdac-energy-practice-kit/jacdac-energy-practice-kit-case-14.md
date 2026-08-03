# Case 14: Weather Detection Robot

---

## Introduction

Use the **Jacdac temperature & humidity sensor** to build a portable weather detection station. Press **button A** to read the current air humidity via serial output and display it; press **button B** to read the current temperature and display it. The program continuously monitors the environment automatically: when **humidity exceeds 80**, the LED matrix displays 「✕」 and a buzzer alarm sounds (excessive humidity); when **temperature exceeds 33**, it displays a **frowny face** and a buzzer alarm sounds (excessive temperature).

---

## Learning Objectives

1. Learn about the **temperature & humidity sensor** — a fundamental sensor for meteorological observation.
2. Understand the **threshold alarm** mechanism — triggering audible and visual alarms when sensor readings exceed set limits.
3. Explore the basic elements of **meteorological observation** and the data sources behind weather forecasting.
4. Learn **multi-tasking concurrency** — button queries + automatic monitoring running simultaneously.

---

## Required Materials

| Item | Image | Quantity |
|---|---|---|
| micro:bit V2 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/microbit%20%E6%AD%A3(1).png) | 1 |
| Jacdac Expansion Board | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20bit.png) | 1 |
| Jacdac 25cm Connector Cable | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac-smart-exploration-kit-25cm-cable.png) | 1 |
| Jacdac Temperature & Humidity Sensor | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Sensor/Jacdac%20HT.png) | 1 |
| USB Cable | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/usb%20cable1.png) | 1 |

---

## Sensor Principle

### Temperature & Humidity Sensor

The Jacdac temperature & humidity sensor integrates both temperature and humidity detection functions, capable of simultaneously outputting ambient temperature and air humidity values.

| Measurement | Threshold in This Case | Description |
|---|---|---|
| Temperature | > 33°C (alarm) (Note: the 33°C threshold can be adjusted based on local climate) | Temperature too high → LED shows frowny face + buzzer alarm |
| Humidity | > 80% (alarm) | Humidity too high → LED shows ✕ + buzzer alarm |

> Temperature and humidity are closely related — as temperature rises, the air's capacity to hold water vapor increases. Hot and humid weather feels oppressively muggy ("sauna weather"), which is why these two parameters are the most critical in meteorological observation.

## Assembly Steps

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case14/jacdac-energypractice-kit%2BAssembly%20Diagram%2BCase14.pdf" type="application/pdf" width="100%" height="600px" />

---

## Model Principle

### Weather Station — From Stevenson Screen to Microchip

Traditional weather stations use a **Stevenson screen** (a white louvered wooden box) to house thermometers and hygrometers — the louvered structure ensures ventilation while blocking direct sunlight, ensuring accurate readings. Yet the set of equipment in your hands accomplishes the same task with a chip the size of a fingernail:

| Comparison | Traditional Stevenson Screen | Jacdac Sensor |
|---|---|---|
| Volume | ~1 cubic meter | ~2 cubic centimeters |
| Reading method | Manual visual reading | Digital output |
| Recording method | Manual recording | Automatic storage + transmission |
| Response time | Several minutes | Milliseconds |
| Cost | Thousands of yuan | Tens of yuan |

---

## Connection Diagram

As shown below, insert the micro:bit V2 board into the Jacdac expansion board, and use a cable to connect the temperature & humidity sensor to the Jacdac expansion board's edge connector.

![Connection Diagram](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/%E7%A1%AC%E4%BB%B6%E8%BF%9E%E7%BA%BF%E5%9B%BE/1.png)

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

![Program Screenshot](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case14/jacdac-energypractice-kit%2BProgram%2BCase14.png)

---

## Reference Program Link

[https://makecode.microbit.org/_6io7diRHP9tW](https://makecode.microbit.org/_6io7diRHP9tW)

You can also download the program directly from the webpage below. Once downloaded, you can start running the program.
<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_6io7diRHP9tW"
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

Press **button A**, and the current air humidity value is output via serial (displayed for 5 seconds) for easy data viewing. Press **button B**, and the current temperature value is output via serial (displayed for 5 seconds). The program continuously monitors in the background automatically: when **humidity exceeds 80**, the LED matrix displays the 「✕」 icon and the buzzer sounds an alarm — "Humidity too high!" When **temperature exceeds 33** (Note: the 33°C threshold can be adjusted based on local climate), it displays a frowny face and the buzzer sounds — "Temperature too high!" Alarms automatically stop once temperature and humidity return to normal.

---

## Think

1. The alarm in this case triggers on "above threshold" (temperature too high, humidity too high → alarm). What real-world scenarios use "below threshold" triggering? (Hint: smoke alarms, water level alarms)
2. If you wanted to send temperature and humidity data wirelessly to another micro:bit for remote display, what feature would you need?

---

## Program Logic

| Trigger Condition | Action | Source |
|---|---|---|
| Button A pressed | Serial output of humidity sensor reading; wait 5 seconds then return | micro:bit V2 Button A + Jacdac Temperature & Humidity Sensor |
| Button B pressed | Serial output of temperature sensor reading; wait 5 seconds then return | micro:bit V2 Button B + Jacdac Temperature & Humidity Sensor |
| Humidity > 80 (auto-monitoring) | LED shows ✕ + buzzer alarm — high humidity warning | Jacdac Temperature & Humidity Sensor |
| Temperature > 33 (Note: 33°C threshold adjustable based on local climate) (auto-monitoring) | LED shows frowny face + buzzer alarm — high temperature warning | Jacdac Temperature & Humidity Sensor |
| Both temperature and humidity normal | All alarm sounds stop | Jacdac Temperature & Humidity Sensor |

---

## Knowledge Extension: Weather Forecasting — From Naked-Eye Observation to Supercomputers

### I. A Brief History of Meteorological Observation

Humanity's observation and forecasting of weather has undergone millennia of evolution:

| Period | Observation Method | Typical Tools | Forecasting Capability |
|---|---|---|---|
| Ancient times | Observe the sky; read clouds to know weather | Naked eye | Within hours |
| 17th century | Thermometer and barometer invented | Mercury thermometer, mercury barometer | Qualitative judgment |
| 19th century | Telegraph networks, weather maps | Telegraph + hand-drawn weather maps | 1–2 days |
| Mid 20th century | Radiosondes, weather radar | Weather balloons, radar | 3–5 days |
| Late 20th century | Weather satellites, supercomputers | Satellite cloud images, numerical weather prediction | 7–10 days |
| 21st century | AI forecasting, IoT sensor networks | Smartphone sensors, AI models | 15+ days |

### II. Temperature and Humidity — The Two Most Intimate Meteorological Parameters

| Temperature (°C) | Saturated Water Vapor Content (g/m³) | Perceived Comfort |
|---|---|---|
| 0 | 4.8 | Dry and cold |
| 10 | 9.4 | Cool |
| 20 | 17.3 | Comfortable |
| 30 | 30.4 | Muggy |
| 35 | 39.6 | Oppressively hot |

> Relative humidity = actual water vapor content ÷ saturated water vapor content at that temperature × 100%. As temperature rises, the air's "water-holding capacity" increases — that's why summer feels muggy (high temperature + high humidity) and winter feels dry (low temperature + low humidity).

### III. Threshold Alarms — A Universal Pattern from Meteorology to Daily Life

The logic of "alarm when exceeding a threshold" has countless applications in life:

| Application Scenario | Measured Quantity | Threshold | Alarm Method |
|---|---|---|---|
| Smoke alarm | Smoke particle concentration | Exceeds safe level | Audible + visual alarm |
| Car fuel gauge | Remaining fuel | Below 10% | Dashboard warning light |
| Phone low battery | Battery level | Below 20% | Popup + sound |
| Flood warning | River water level | Exceeds warning line | Broadcast + SMS |
| Refrigerator door alarm | Door open time | Exceeds 60 seconds | Buzzer reminder |
