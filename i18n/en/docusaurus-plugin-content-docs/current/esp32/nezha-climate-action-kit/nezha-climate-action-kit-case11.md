---
title: Urban Heat Island Explorer
sidebar_label: "Case 11: Urban Heat Island Explorer"
sidebar_position: 12
---


# Case 11: Urban Heat Island Explorer

## Project Introduction

Are ambient temperatures the same in sunlight, under trees, and beside buildings? This project builds a mobile environmental exploration vehicle carrying a temperature and humidity sensor and using the light sensor of **Nezha ESP32**. It stops at several locations to sample data. Students record locations and measurement conditions, compare school microenvironments, and begin exploring questions related to heat islands.

Through building, programming, and testing, students connect their observations with the model's displays or actions and learn to explain phenomena using data.

This project combines classroom observation with engineering practice, encouraging students to consider how technology can improve school and urban environments.

<!-- Image placeholder: finished Urban Heat Island Explorer model -->
<!-- Suggested filename: ./images/urban-heat-island-rover.png -->

## Preparation

| Item | Quantity | Purpose |
| --- | ---: | --- |
| Climate Action Kit | 1 set | Build the Urban Heat Island Explorer model |
| Nezha ESP32 | 1 | Run the program, read data, and display information |
| Kit temperature and humidity sensor | As configured | Carry out the sensing, control, or networking tasks for this project |
| Optional SmartIoT network access | As configured | Carry out the sensing, control, or networking tasks for this project |
| RJ11 cables | As needed | Connect compatible external modules; onboard-only functions require no external connections |
| Computer and data cable | 1 set | Write, download, and debug the program |

<!-- Image placeholder: preparation / kit and main modules -->
<!-- Suggested filename: ./images/urban-heat-island-rover-materials.png -->

## Learning Objectives

After completing this project, students will be able to:

1. Move the vehicle safely and stop at designated sampling locations.
2. Record temperature, humidity, and relative light values and compare multiple locations.
3. Distinguish local environmental differences from conclusions about urban-scale heat islands.
4. Adjust parameters based on test results and follow the engineering process of design, programming, testing, and improvement.

## Lesson Introduction

Ask students to recall how shade and concrete surfaces feel in summer and predict which locations might be hotter. Plan a short route and compare predictions with measurements. Remind students that this is a school microenvironment investigation: a few locations or a single measurement cannot establish urban heat island intensity.

In this lesson, we will act as urban environment designers, build the Urban Heat Island Explorer, and test our design through real observations.

## Explore and Discuss

Before building, discuss the following questions in groups:

1. How does measuring while moving differ from measuring after stopping and waiting?
2. Does direct sunlight on the sensor affect its temperature reading?
3. Can data measured by different groups at different times be compared directly?
4. How will you record the test conditions to show whether the results meet your expectations?
5. What other factors would you need to consider if this model were used in a real environment?

## Building Steps

Follow the building instructions to construct the base, controller mount, and functional structures of the Urban Heat Island Explorer.

Pay particular attention to the following during construction:

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

The program consists of two parts: startup initialization and the main loop.

:::note
The following is a suggested outline of the teaching logic. The actual program for this project is not currently provided. Port numbers, block names, and control parameters must be verified on the physical device; program screenshot locations are temporarily indicated by clearly labeled placeholders. The screen layout below is also a suggestion.
:::

### 1. Startup Initialization

<!-- Image placeholder: startup initialization program screenshot -->
<!-- Suggested filename: ./images/urban-heat-island-rover-program-init.png -->

At startup, the program performs the following actions:

1. First verify low-speed forward motion, turning, and stopping, using the control method of the actual program.
2. Initialize the screen and data variables so that states from the previous run are not reused.
3. Show data labels and the initial operating status at the designated screen positions.

Suggested controller screen layout:

| Screen row | Display content |
| ---: | --- |
| Row 1 | Environmental data |
| Row 2 | Temperature, humidity, and relative light values |
| Row 3 | Operating status |
| Row 4 | Location ID / Sampling status |

### 2. Repeated Sensing and Control

<!-- Image placeholder: main sensing and control loop screenshot -->
<!-- Suggested filename: ./images/urban-heat-island-rover-program-main.png -->

The system continuously performs the following tasks in the `forever` loop.

#### Movement Control

- First verify low-speed forward motion, turning, and stopping, using the control method of the actual program.

#### Sampling State

- Enter the sampling state after stopping and allow the sensor to adjust to its surroundings.

#### Record and Display

- Record location ID, time, temperature, humidity, and light; optionally upload to the platform.

#### Next Location

- Confirm that recording is complete before moving to the next location; do not mix readings taken while moving into fixed-location comparisons.

### 3. Key Parameters

| Parameter | Example value | Meaning | Adjustment guidance |
| --- | ---: | --- | --- |
| Travel speed | To be verified on the device | Test turning and stopping separately first | Begin debugging at low speed |
| Acclimation time | To be verified on the device | Do not specify an unverified universal wait time | Judge by stable readings and sensor response |
| Sampling strategy | To be verified on the device | Minimize the time difference between measurements at different locations | Repeat measurements at the same position and height |

:::note
The vehicle provides movement while the sensors collect data. The temperature and humidity probe needs time to adjust to its surroundings, so stop and wait for readings to stabilize before recording. Heat sources on the vehicle, sunlight, and sampling time affect comparisons. Measurements describe the air near the sensor, not the ground surface temperature.
:::

:::caution
First verify turning and stopping at low speed, then enter a level test area. Outdoor activities must be supervised by a teacher and kept away from roads, steps, and water.
:::

## Testing

After completing the program, test it in the following order:

1. **Startup check**: Connect the device and download the verified program. Check that the initial state and screen labels are correct.
2. **Raise the wheels off the ground or use a safe test area**: Verify correct forward movement, turning, and stopping.
3. **Take repeated measurements at one location**: Record only after readings stabilize and describe the range of variation.
4. **Compare sunlight and shade, then repeat**: Use the same method and record influencing factors rather than comparing single numbers alone.
5. **Retest and record**: Change one condition, repeat the test, and record inputs, outputs, and results; stop the actuators when finished.

If temperature readings are consistently high, check whether the probe is in direct sunlight, against a heat source, or not yet stable.

If the vehicle moves in the wrong direction, check left and right motor wiring and forward/reverse definitions, then verify the stop command again.

## Project Demonstration

When the program is running, the Urban Heat Island Explorer can demonstrate the following results:

- Forward movement, turning, and stopping operate correctly.
- Record only after readings stabilize and describe the range of variation.
- Use the same method and record influencing factors rather than comparing single numbers alone.

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

### Challenge 2: Create a School Microenvironment Map

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
