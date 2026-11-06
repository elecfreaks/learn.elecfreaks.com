---
title: Urban Heat Island Explorer
sidebar_label: "Case 11: Urban Heat Island Explorer"
sidebar_position: 12
---

# Case 11: Urban Heat Island Explorer

## Project Introduction

Are ambient temperatures the same in sunlight, under trees, and beside buildings? This project builds a mobile environmental exploration vehicle carrying a temperature and humidity sensor and using the light sensor of **Nezha ESP32**. It stops at several locations to sample data. Students record locations and measurement conditions, compare nearby air conditions in different parts of the school, and begin exploring questions related to heat islands.

Students build, program, and test a model, then use their observations and recorded data to explain how it works. The project connects classroom science with engineering design and invites students to suggest improvements for their school or community.

<!-- Image placeholder: finished Urban Heat Island Explorer model -->
<!-- Suggested filename: ./images/urban-heat-island-rover.png -->

## Materials and Preparation

| Item | Quantity | Purpose |
| --- | ---: | --- |
| Climate Action Kit | 1 set | Build the Urban Heat Island Explorer model |
| Nezha ESP32 | 1 | Run the program, read data, and display information |
| Kit temperature and humidity sensor | As required by the build | Measure the air near the sensor at each stop |
| Optional SmartIoT network access | As arranged by the teacher | Share location-labeled readings on a dashboard |
| RJ11 cables | As needed | Connect compatible external modules; onboard-only functions require no external connections |
| Computer and data cable | 1 set | Write, download, and debug the program |

<!-- Image placeholder: preparation / kit and main modules -->
<!-- Suggested filename: ./images/urban-heat-island-rover-materials.png -->

## Learning Objectives

**Fair comparison:** keep the measurement method, sensor height, and other conditions as similar as possible when comparing locations.

After completing this project, students will be able to:

1. Move the vehicle safely and stop at designated sampling locations.
2. Record temperature, humidity, and relative light values and compare multiple locations.
3. Distinguish local environmental differences from conclusions about urban-scale heat islands.
4. Use test results to improve the design through a cycle of designing, programming, testing, and improving.

## Lesson Starter

Ask students to recall how shade and concrete surfaces feel in summer and predict which locations might be hotter. Plan a short route and compare predictions with measurements. Remind students that this is a investigation of local conditions around the school: a few locations or a single measurement cannot establish urban heat island intensity.

In this lesson, we will act as urban environment designers, build the Urban Heat Island Explorer, and test our design through real observations.

**Project connection:** Extend the fair-comparison methods from [Case 01](./nezha-climate-action-kit-case01.md) and the temperature measurements from [Case 05](./nezha-climate-action-kit-case05.md). Use [the IoT dashboard](./nezha-climate-action-kit-case04.md) to share results if a network is available.

## Explore and Discuss

Before building, discuss the following questions in groups:

1. How does measuring while moving differ from measuring after stopping and waiting?
2. Does direct sunlight on the sensor affect its temperature reading?
3. Can data measured by different groups at different times be compared directly?
4. What conditions and results will you record to check whether your design works as expected?
5. What else would need to be tested before a design like this could be used outside the classroom?

## Build the Model

Follow the building instructions to construct the base, controller mount, and functional structures of the Urban Heat Island Explorer.

Check the following as you build:

- Build a balanced chassis and secure the controller, power supply, and cables so they cannot become caught in the wheels.
- Keep the temperature and humidity probe away from motors, the controller, and other heat sources, with good ventilation.
- Plan a level route away from roads and steps; outdoor testing must be supervised by a teacher.

<!-- Image placeholder: building steps; insert images for Step 1, Step 2, and so on -->
<!-- Suggested filename: ./images/urban-heat-island-rover-build-01.png and so on -->

## Hardware Connections

Turn off the power, then connect the modules as shown below:

| Module | Connection | Function |
| --- | --- | --- |
| Temperature and humidity sensor | Compatible connection to be confirmed | Collect ambient temperature and humidity |
| Onboard light sensor | Onboard | Collect relative light readings |
| Vehicle drive motors | Connections, quantity, and directions depend on the actual chassis | Move and stop the vehicle |

:::tip
Onboard functions require no external wiring. For external modules, confirm compatible ports against the final program; for IIC modules, also check the bus addresses. Align connectors correctly, and do not connect or disconnect modules while the device is powered on.
:::

<!-- Image placeholder: hardware wiring diagram -->
<!-- Suggested filename: ./images/urban-heat-island-rover-wiring.png -->

## Program Design

Plan the program in two parts: setup steps that run once at startup, and a main loop that repeats while the model is running.

:::note
This section is a planning guide, not a tested program. A working program is not yet provided for this project. Before classroom use, verify the ports, block names, and control settings on the actual hardware. The suggested screen layout and image placeholders are guides only; the placeholders contain no executable program.
:::

### 1. Set Up at Startup

<!-- Image placeholder: startup initialization program screenshot -->
<!-- Suggested filename: ./images/urban-heat-island-rover-program-init.png -->

Before the investigation, test forward movement, turning, and stopping at low speed in the designated test area.

At startup, the program performs the following actions:

1. Initialize the sensors, stop the drive motors, and set the starting location ID and sampling state.
2. Set the initial values of variables and states, and prepare the screen for a new run.
3. Show each data label and the starting status in a fixed place on the screen.

Suggested controller screen layout:

| Screen row | Display content |
| ---: | --- |
| Row 1 | Environmental data |
| Row 2 | Temperature, humidity, and relative light values |
| Row 3 | Operating status |
| Row 4 | Location ID / Sampling status |

### 2. Read, Decide, and Respond

<!-- Image placeholder: main sensing and control loop screenshot -->
<!-- Suggested filename: ./images/urban-heat-island-rover-program-main.png -->

Repeat the following tasks in the `forever` loop:

#### Movement Control

- Use the tested movement controls to travel slowly between sampling points. Keep a working stop control available.

#### Sampling State

- Enter the sampling state after stopping and allow the sensor to adjust to its surroundings.

#### Record and Display

- Record location ID, time, temperature, humidity, and light; optionally upload to the platform.

#### Next Location

- Confirm that recording is complete before moving to the next location; do not mix readings taken while moving into fixed-location comparisons.

### 3. Key Parameters

| Parameter | Example value | Meaning | Adjustment guidance |
| --- | ---: | --- | --- |
| Travel speed | To be verified on the device | Test turning and stopping separately first | Start testing at low speed |
| Time for the sensor to settle | To be verified on the device | Do not specify an unverified universal wait time | Judge by stable readings and sensor response |
| Sampling strategy | To be verified on the device | Minimize the time difference between measurements at different locations | Repeat measurements at the same position and height |

:::note
The vehicle provides movement while the sensors collect data. The temperature and humidity probe needs time to adjust to its surroundings, so stop and wait for readings to stabilize before recording. Heat sources on the vehicle, sunlight, and sampling time affect comparisons. Measurements describe the air near the sensor, not the ground surface temperature.
:::

:::caution
First verify turning and stopping at low speed, then enter a level test area. Outdoor activities must be supervised by a teacher and kept away from roads, steps, and water.
:::

## Test and Troubleshoot

After completing the program, test it in the following order:

1. **Startup check**: Connect the device and download the verified program. Check that the initial state and screen labels are correct.
2. **Raise the wheels off the ground or use a safe test area**: Verify correct forward movement, turning, and stopping.
3. **Take repeated measurements at one location**: Record only after readings stabilize and describe the range of variation.
4. **Compare sunlight and shade, then repeat**: Use the same method and record influencing factors rather than comparing single numbers alone.
5. **Retest and record**: Change one condition, repeat the test, and record inputs, outputs, and results; stop the actuators when finished.

If temperature readings are consistently high, check whether the probe is in direct sunlight, against a heat source, or not yet stable.

If the vehicle moves in the wrong direction, check left and right motor wiring and forward/reverse definitions, then verify the stop command again.

## Project Demonstration

With a verified program running, the Urban Heat Island Explorer can demonstrate the following results:

- The vehicle moves, turns, and stops as intended in the designated test area.
- At each sampling stop, students wait for stable readings before recording the location, time, temperature, humidity, and light.
- Repeated measurements let the group compare nearby air conditions while explaining sunlight, sensor placement, and other influences.

<!-- Image placeholder: project in operation or animated demonstration -->
<!-- Suggested filename: ./images/urban-heat-island-rover-demo.gif -->

## Reflection and Sharing

Ask each group to present its work and discuss the following questions:

1. What data did you record? Were the test conditions kept consistent?
2. What decision rules or data processing methods did this project use?
3. What structural or programming problems occurred during testing? How did you solve them?
4. Which test best demonstrates that the project performs its intended function?
5. What would you most like to improve next, and why?

## Extension Challenges

### Challenge 1: Reverse the Sampling Order

Measure in sunlight before shade, then repeat in the reverse order. Discuss whether changes over time affect the comparison.

### Challenge 2: Map the School's Local Conditions

Mark sampling locations, times, and temperature and humidity data on a school map. Note sunlight exposure, ground materials, and probe height.

### Challenge 3: Add Repeated Measurements

Measure several times at each location and record the average level and variation. Compare single results with repeated measurements.

### Challenge 4: Compare Probe Mounting Positions

Compare different probe mounting positions while keeping other conditions as consistent as possible. Observe effects from motor heat, sunlight, and ventilation.

### Challenge 5: Connect to an IoT Dashboard

Upload location IDs and environmental data to an IoT platform. Confirm that the vehicle can stop when the network is disconnected and that local sampling does not depend on successful uploads.

## Further Learning

### What Is an Urban Heat Island?

Some urban areas may be hotter than surrounding areas because of surface materials, vegetation, buildings, and human-generated heat. Observations at a few school locations can only support discussion of local differences.

### Why Measure After Stopping?

Temperature and humidity sensors need time to adjust to their surroundings. Sampling while moving may also be affected by airflow, motor heat, and changing positions. Stopping and waiting for readings to stabilize makes comparisons easier.

### Is Air Temperature the Same as Ground Temperature?

A temperature and humidity sensor usually measures the air near its probe, not the road surface temperature directly. Keep the probe ventilated and record sunlight conditions.
