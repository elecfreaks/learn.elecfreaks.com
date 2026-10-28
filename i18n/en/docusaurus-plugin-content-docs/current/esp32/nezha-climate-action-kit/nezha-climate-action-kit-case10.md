---
title: Smart Bus Stop
sidebar_label: "Case 10: Smart Bus Stop"
sidebar_position: 11
---

# Case 10: Smart Bus Stop

## Project Introduction

Urban bus stops are important facilities for green travel, but hot or very sunny conditions can make waiting uncomfortable. This project integrates temperature sensing, light sensing, automatic cooling, automatic shading, and RFID low-carbon travel check-ins into a building-block bus stop model.

Students use **Nezha ESP32** to read the temperature and humidity sensor and onboard light sensor. The fan starts automatically when temperature reaches the set value, and a motor extends the shade when light reaches its set value. Passengers can also use RFID cards to simulate bus card check-ins. The system counts low-carbon trips and displays temperature, light readings, and the total count on the controller's screen in real time.

This project combines environmental sensing, conditional logic, variable-based counting, and mechanical structures, encouraging students to consider how technology can improve urban public spaces and support low-carbon travel.

<!-- Image placeholder: finished Smart Bus Stop model -->
<!-- Suggested filename: ./images/smart-low-carbon-bus-stop.png -->

## Preparation

| Item | Quantity | Purpose |
| --- | ---: | --- |
| Climate Action Kit | 1 set | Build the Smart Bus Stop model |
| Nezha ESP32 | 1 | Run the program, read data, and display information |
| Temperature and humidity sensor | 1 | Measure ambient temperature |
| Fan module | 1 | Simulate ventilation and cooling in hot conditions |
| Smart motor | 1 | Drive the movable shade |
| RFID sensor and RFID cards | 1 set | Simulate bus card check-ins and record low-carbon trips |
| RJ11 cables | As needed | Connect sensors and actuators |
| Computer and data cable | 1 set | Write, download, and debug the program |

<!-- Image placeholder: preparation / kit and main modules -->
<!-- Suggested filename: ./images/smart-low-carbon-bus-stop-materials.png -->

## Learning Objectives

After completing this project, students will be able to:

1. Understand how heat and intense sunlight affect bus stop waiting conditions and how public transport relates to low-carbon travel.
2. Read temperature, light, and RFID detection results and display the data on screen.
3. Use “if…else…” conditions to control the fan and shade.
4. Record RFID check-ins with a variable and understand initialization and incrementing.
5. Adjust temperature and light thresholds based on test results and follow the engineering process of design, programming, testing, and improvement.

## Lesson Introduction

On hot summer days, people waiting at bus stops may experience direct sunlight and high temperatures. Would waiting be more comfortable if a bus stop could sense its surroundings and automatically start a fan or extend a shade? Could recording low-carbon trips with card check-ins also encourage more people to choose public transport?

In this lesson, we will act as urban environment designers, build the Smart Bus Stop, and test our design through real observations.

## Explore and Discuss

Before building, discuss the following questions in groups:

1. Under what conditions should the bus stop start its fan?
2. Should the shade extend based on temperature or light intensity? Why?
3. Are light readings the same in different classrooms or at different times? How can a suitable threshold be chosen?
4. How can repeated counting be prevented when the same RFID card remains in the scanning area?
5. What data besides temperature and light could improve the waiting experience?

## Building Steps

Follow the building instructions to construct the base, controller mount, and functional structures of the Smart Bus Stop.

Pay particular attention to the following during construction:

- The shade moves smoothly between `0°` and `180°` without interfering with other blocks;
- There is enough clearance around the fan blades for safe rotation;
- The temperature and humidity sensor is ventilated and not completely covered by the controller or blocks;
- The RFID sensing surface faces upward so cards can be presented and removed easily;
- All cables are kept away from gears, shafts, and fan blades.

<!-- Image placeholder: building steps; insert images for Step 1, Step 2, and so on -->
<!-- Suggested filename: ./images/smart-low-carbon-bus-stop-build-01.png and so on -->

## Hardware Connections

Turn off the power, then connect the modules as shown below:

| Module | Connection | Function |
| --- | --- | --- |
| Temperature and humidity sensor | J1 | Read ambient temperature |
| Fan module | J2 | Start cooling at high temperatures |
| Smart motor | M1 | Extend or retract the shade |
| RFID sensor | IIC | Detect RFID cards |

:::tip
The RFID sensor uses the IIC interface. Align connectors correctly, and do not connect or disconnect modules while the device is powered on.
:::

<!-- Image placeholder: hardware wiring diagram -->
<!-- Suggested filename: ./images/smart-low-carbon-bus-stop-wiring.png -->

## Program Design

The program consists of two parts: startup initialization and the main loop.

### 1. Startup Initialization

<!-- Image placeholder: startup initialization program screenshot -->
<!-- Suggested filename: ./images/smart-low-carbon-bus-stop-program-init.png -->

At startup, the program performs the following actions:

1. Hide the screen's title bar to leave more space for data.
2. Set the variable `Low-Carbon Trip Count` to `0`.
3. Display `Temp:`, `Lux:`, and `Low-Carbon Count` on rows 1, 3, and 5 respectively.

Suggested controller screen layout:

| Screen row | Display content |
| ---: | --- |
| Row 1 | `Temp:` |
| Row 2 | Current temperature |
| Row 3 | `Lux:` |
| Row 4 | Current light value |
| Row 5 | `Low-Carbon Count` |
| Row 6 | Total RFID low-carbon trips |

### 2. Repeated Sensing and Control

<!-- Image placeholder: main sensing and control loop screenshot -->
<!-- Suggested filename: ./images/smart-low-carbon-bus-stop-program-main.png -->

The system continuously performs three tasks in the `forever` loop.

#### Temperature-Controlled Fan

- Read temperature from the temperature and humidity sensor on J1;
- When temperature is **greater than or equal to 26°C**, turn on the fan on J2;
- When temperature is below 26°C, turn off the fan;
- Display the current temperature on screen row 2.

#### Light-Controlled Shade

- Read the controller's onboard light sensor;
- When the light value is **greater than or equal to 5000**, rotate the M1 motor clockwise at 30% speed to the absolute angle `180°` to extend the shade;
- When the light value is below 5000, rotate the M1 motor counterclockwise at 30% speed to the absolute angle `0°` to retract the shade;
- Display the current light value on screen row 4.

#### Record Low-Carbon Trips with RFID

- When the RFID sensor detects a card, increment `Low-Carbon Trip Count` by `1`;
- Wait `500 ms` to reduce duplicate counts from one card presentation;
- Display the total count on screen row 6.

### 3. Key Parameters

| Parameter | Example value | Meaning | Adjustment guidance |
| --- | ---: | --- | --- |
| Temperature threshold | 26°C | Start the fan when this temperature is reached | Adjust within 25–30°C according to classroom temperature |
| Light threshold | 5000 | Extend the shade when this value is reached | Observe local readings before choosing a suitable threshold |
| Motor speed | 30% | Shade movement speed | Excessive speed may shake the structure |
| Extension angle | 180° | Shade's extended position | Calibrate according to the actual structure |
| Retraction angle | 0° | Shade's initial position | Confirm the mechanical zero position before powering on |
| Card scan wait time | 500 ms | Simply reduces the likelihood of duplicate counts | Remove the card promptly after scanning |

:::note
The program's light value is a relative reading returned by the controller's light sensor, not necessarily calibrated standard illuminance (lx). Ask students to record readings under dim and bright conditions before choosing a threshold appropriate to their environment.
:::

:::caution
The current program only waits 500 ms after detecting a card. If the card remains in the scanning area, the count may continue to increase. During testing, remove the card immediately after scanning. An advanced task can add duplicate-prevention logic that allows another count only after card removal.
:::

## Testing

After completing the program, test it in the following order:

1. **Screen test**: Start the device and confirm that temperature, light, and low-carbon trip count are displayed.
2. **Temperature test**: Briefly cup your hand around the temperature and humidity sensor, or change its surrounding temperature under teacher supervision. Observe whether the fan starts when temperature reaches 26°C.
3. **Light test**: Cover the light sensor with your hand, then use a desk lamp to increase the light. Observe whether the shade retracts and extends on opposite sides of the threshold.
4. **Card scan test**: Bring an RFID card near the scanning area, then remove it immediately. Check whether the total increases by 1.
5. **Integrated test**: Change temperature and light while scanning a card, and confirm that all three functions operate independently and continuously.

If extension and retraction directions are reversed, swap the motor directions in the program or adjust `0°` and `180°` according to the model's actual zero position.

## Project Demonstration

When running, the Smart Low-Carbon Bus Stop responds automatically to environmental changes:

- At high temperatures, the fan starts automatically to simulate ventilation and cooling in the waiting area;
- In intense light, the shade extends automatically to simulate shading for passengers;
- When conditions return to normal, the fan stops and the shade retracts;
- After a passenger scans an RFID card, the low-carbon trip count increases;
- The screen continuously displays temperature, light, and the total count.

<!-- Image placeholder: project in operation or animated demonstration -->
<!-- Suggested filename: ./images/smart-low-carbon-bus-stop-demo.gif -->

## Reflection and Sharing

Ask each group to present its work and discuss the following questions:

1. What temperature and light thresholds did you choose, and what was the basis for them?
2. What structural or programming problems occurred during testing? How did you solve them?
3. Do the fan and shade switch frequently near their thresholds? How could this be improved?
4. What other ways could the low-carbon trip count be communicated to passengers?
5. What other factors would need consideration if the model were used at a real bus stop?

## Extension Challenges

### Challenge 1: Display Humidity

Read humidity from the temperature and humidity sensor and add it to the screen.

### Challenge 2: Prevent Duplicate Card Counts

Add an “allow counting” variable. A new presentation can count only after the card has left the scanning area.

### Challenge 3: Reduce Frequent Switching

Set two fan temperature thresholds, for example starting at 27°C and stopping at 25°C, to explore how hysteresis control makes operation more stable.

### Challenge 4: Design Low-Carbon Points

Award points for each bus trip and provide feedback through the screen, RGB LEDs, or speaker when a specified count is reached.

### Challenge 5: Connect to an IoT Dashboard

Upload temperature, light, and low-carbon trip count to an IoT platform. Compare data across time periods and use charts to explain bus stop usage.

## Further Learning

### Why Does Public Transport Support Low-Carbon Travel?

A bus can carry many passengers on one journey. When more people choose public transport, walking, or cycling, energy consumption and emissions per person can usually be reduced. A smart bus stop not only supports travel but can also improve passenger experience through environmental monitoring, energy-saving control, and information prompts.

### What Is an Environmental Threshold?

A threshold is the boundary value that triggers a system action. Here, 26°C is the fan activation threshold and 5000 is the shade's light trigger value. Thresholds are not fixed for every setting; students should observe, measure, and test to choose suitable values for different environments.

### From Sensing to Action

Smart systems usually contain three basic stages:

1. **Sense**: Sensors obtain temperature, light, or card status;
2. **Decide**: The program compares data with thresholds;
3. **Act**: The fan, motor, and screen respond to the decision.

The Smart Low-Carbon Bus Stop combines these stages in one model so students can see directly how data drives physical actions.
