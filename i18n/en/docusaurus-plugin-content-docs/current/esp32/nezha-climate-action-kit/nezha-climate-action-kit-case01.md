---
title: Urban Light Monitor
sidebar_label: "Case 01: Urban Light Monitor"
sidebar_position: 2
---

# Case 01: Urban Light Monitor

## Project Introduction

Why do a classroom window area and a corridor have different brightness levels? Do different locations give the same light readings at the same time? This project uses the onboard light sensor of **Nezha ESP32** to measure ambient light and display the readings on screen. By taking and recording measurements at fixed locations, students compare light conditions in different areas and learn to describe their surroundings using data.

Through building, programming, and testing, students connect their observations with the model's displays or actions and learn to explain phenomena using data.

This project combines classroom observation with engineering practice, encouraging students to consider how technology can improve school and urban environments.

<!-- Image placeholder: finished Urban Light Monitor model -->
<!-- Suggested filename: ./images/urban-light-observer.png -->

## Preparation

| Item | Quantity | Purpose |
| --- | ---: | --- |
| Climate Action Kit | 1 set | Build the Urban Light Monitor model |
| Nezha ESP32 | 1 | Run the program, read data, and display information |
| RJ11 cables | As needed | Connect compatible external modules; onboard-only functions require no external connections |
| Computer and data cable | 1 set | Write, download, and debug the program |

<!-- Image placeholder: preparation / kit and main modules -->
<!-- Suggested filename: ./images/urban-light-observer-materials.png -->

## Learning Objectives

After completing this project, students will be able to:

1. Read light data and understand how readings change with environmental brightness.
2. Store data in variables and display labeled measurement results on screen.
3. Control measurement conditions, compare readings from multiple locations, and explain differences.
4. Adjust parameters based on test results and follow the engineering process of design, programming, testing, and improvement.

## Lesson Introduction

Light affects reading, activities, and plant growth. Ask students to observe the classroom, predict its brightest and darkest locations, and verify their predictions with the sensor. Remind them that perception and measurement may differ, and conclusions should be supported by repeated observations.

In this lesson, we will act as urban environment designers, build the Urban Light Monitor, and test our design through real observations.

## Explore and Discuss

Before building, discuss the following questions in groups:

1. Why should you avoid covering the sensor with your hand during measurement?
2. Will readings at the same location be identical in the morning and afternoon?
3. Can a single reading represent the light conditions of an entire location?
4. How will you record the test conditions to show whether the results meet your expectations?
5. What other factors would you need to consider if this model were used in a real environment?

## Building Steps

Follow the building instructions to construct the base, controller mount, and functional structures of the Urban Light Monitor.

Pay particular attention to the following during construction:

- Build a stable observation platform with the light sensor facing the environment being measured.
- Leave space around the sensor so that blocks and cables do not obstruct it.
- Use the same height and orientation for every measurement.

<!-- Image placeholder: building steps; insert images for Step 1, Step 2, and so on -->
<!-- Suggested filename: ./images/urban-light-observer-build-01.png and so on -->

## Hardware Connections

Turn off the power, then connect the modules as shown below:

| Module | Connection | Function |
| --- | --- | --- |
| Onboard light sensor | Onboard; no external connection required | Ambient light input |
| Onboard screen | Onboard; no external connection required | Display light readings |

:::tip
Onboard functions require no external wiring. For external modules, confirm compatible ports against the final program; for IIC modules, also check the bus addresses. Align connectors correctly, and do not connect or disconnect modules while the device is powered on.
:::

<!-- Image placeholder: hardware wiring diagram -->
<!-- Suggested filename: ./images/urban-light-observer-wiring.png -->

## Program Design

The program consists of two parts: startup initialization and the main loop.

:::note
The following is a suggested outline of the teaching logic. The actual program for this project is not currently provided. Port numbers, block names, and control parameters must be verified on the physical device; program screenshot locations are temporarily indicated by clearly labeled placeholders. The screen layout below is also a suggestion.
:::

### 1. Startup Initialization

<!-- Image placeholder: startup initialization program screenshot -->
<!-- Suggested filename: ./images/urban-light-observer-program-init.png -->

At startup, the program performs the following actions:

1. Create a “light value” variable; display the project title and data labels.
2. Initialize the screen and data variables so that states from the previous run are not reused.
3. Show data labels and the initial operating status at the designated screen positions.

Suggested controller screen layout:

| Screen row | Display content |
| ---: | --- |
| Row 1 | Light reading |
| Row 2 | Relative light value |
| Row 3 | Operating status |
| Row 4 | Brightness level |

### 2. Repeated Sensing and Control

<!-- Image placeholder: main sensing and control loop screenshot -->
<!-- Suggested filename: ./images/urban-light-observer-program-main.png -->

The system continuously performs the following tasks in the `forever` loop.

#### Repeated Sampling

- Read the onboard light sensor and store the result in the “light value” variable.

#### Display and Wait

- Update the value at a fixed position, wait an appropriate interval, and sample again; avoid repeatedly clearing the entire screen.

### 3. Key Parameters

| Parameter | Example value | Meaning | Adjustment guidance |
| --- | ---: | --- | --- |
| Sampling interval | To be verified on the device | Used to observe changes; adjust to the available blocks | Start with 0.5–1 second in class |
| Number of measurements | To be verified on the device | Keep height and orientation consistent | At least 3 measurements per location |

:::note
The light sensor converts changes in ambient brightness into readable data. The program repeatedly reads the value, stores it in a variable, and updates the screen for continuous observation. Treat these light readings as relative values. Unless the module documentation and calibration confirm otherwise, do not label them as lux or use them to assess compliance with classroom lighting standards.
:::

## Testing

After completing the program, test it in the following order:

1. **Startup check**: Connect the device and download the verified program. Check that the initial state and screen labels are correct.
2. **Gently cover the sensor, then uncover it**: Readings change with brightness, and the screen updates continuously.
3. **Measure near the window, in the classroom center, and in the corridor**: Record the location, time, and multiple readings, then compare differences.
4. **Return to the first location and measure again**: Check whether changes relate to environmental conditions.
5. **Retest and record**: Change one condition, repeat the test, and record the inputs, outputs, and results.

If readings change very little, check that blocks are not covering the sensor and try environments with a greater difference in brightness.

If the screen flickers or old digits remain, reduce the refresh rate; use a fixed display area or erase the previous value.

## Project Demonstration

When the program is running, the Urban Light Monitor can demonstrate the following results:

- Readings change with brightness, and the screen updates continuously.
- Record the location, time, and multiple readings, then compare differences.
- Check whether changes relate to environmental conditions.

<!-- Image placeholder: project in operation or animated demonstration -->
<!-- Suggested filename: ./images/urban-light-observer-demo.gif -->

## Reflection and Sharing

Ask each group to present its work and discuss the following questions:

1. What data did you record? Were the test conditions kept consistent?
2. What decision rules or data processing methods did this project use?
3. What structural or programming problems occurred during testing? How did you solve them?
4. Which test best demonstrates that the project performs its intended function?
5. What would you most like to improve next, and why?

## Extension Challenges

### Challenge 1: Compare Readings at Different Distances

Keep the light source brightness constant and change its distance from the sensor. Repeat measurements at each distance, record readings, and compare changes.

### Challenge 2: Add Brightness Levels

Define high, medium, and low light levels and display the corresponding status. Record data at the site before choosing classification thresholds.

### Challenge 3: Record Changes Throughout a Day

Record light readings at the same location at equal time intervals. Explain changes throughout the day in relation to weather and obstructions.

### Challenge 4: Compare Shading Materials

Use different materials to cover the same light source while keeping distance and orientation consistent. Compare how the materials affect light readings.

### Challenge 5: Create a School Light Map

Choose several locations around the school and record their positions, times, and light readings. Mark the results on a map and describe the measurement conditions.

## Further Learning

### Why Do Readings Differ Between Locations?

Light source position, obstructions, and sensor orientation all affect readings. When comparing locations, keep measurement height, orientation, and time as consistent as possible.

### How Do Relative Readings Differ from Illuminance?

Relative readings compare the brightness sensed by the current device; illuminance is usually expressed in lx. Without calibration and unit confirmation, relative readings should not be labeled as standard illuminance.

### Why Repeat Measurements?

A single measurement may be affected by people moving around or temporary obstructions. Repeating measurements and recording the range of variation provides a stronger basis for comparison.
