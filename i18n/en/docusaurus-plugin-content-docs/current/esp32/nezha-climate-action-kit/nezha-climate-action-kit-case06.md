---
title: Smart Shade Station
sidebar_label: "Case 06: Smart Shade Station"
sidebar_position: 7
---

# Case 06: Smart Shade Station

## Project Introduction

Can a shade in a public rest area extend automatically as light conditions change? This project uses the onboard light sensor of **Nezha ESP32** to detect ambient brightness and controls a motor to extend or retract a shade. Students combine sensor-based decisions with mechanical movement to explore the design of an automatic shading model.

Students build, program, and test a model, then use their observations and recorded data to explain how it works. The project connects classroom science with engineering design and invites students to suggest improvements for their school or community.

<!-- Image placeholder: finished Smart Shade Station model -->
<!-- Suggested filename: ./images/smart-shading-station.png -->

## Materials and Preparation

| Item | Quantity | Purpose |
| --- | ---: | --- |
| Climate Action Kit | 1 set | Build the Smart Shade Station model |
| Nezha ESP32 | 1 | Run the program, read data, and display information |
| Supplied motor and shade mechanism | As required by the build | Extend and retract the shade |
| RJ11 cables | As needed | Connect compatible external modules; onboard-only functions require no external connections |
| Computer and data cable | 1 set | Write, download, and debug the program |

<!-- Image placeholder: preparation / kit and main modules -->
<!-- Suggested filename: ./images/smart-shading-station-materials.png -->

## Learning Objectives

**Target state:** what you want the shade to do—extend or retract. The program compares this with its current state before moving the motor.

After completing this project, students will be able to:

1. Set extension and retraction conditions using relative light readings.
2. Identify the motor type and its corresponding control method.
3. Adjust mechanical travel so the shade moves within a safe range.
4. Use test results to improve the design through a cycle of designing, programming, testing, and improving.

## Lesson Starter

Ask students to observe shading at bus stops or windows and discuss when fixed or adjustable shades are useful. Set the task of designing a model that adjusts its shade as light conditions change.

In this lesson, we will act as urban environment designers, build the Smart Shade Station, and test our design through real observations.

**Project connection:** Reuse the light measurements from [Case 01](./nezha-climate-action-kit-case01.md) and the input–decision–action pattern from [Case 05](./nezha-climate-action-kit-case05.md). This shade becomes part of [the bus stop project](./nezha-climate-action-kit-case10.md).

## Explore and Discuss

Before building, discuss the following questions in groups:

1. Will the extended shade cover the light sensor?
2. Can an ordinary DC motor be controlled directly with an angle block?
3. Why check mechanical travel manually before powering on?
4. What conditions and results will you record to check whether your design works as expected?
5. What else would need to be tested before a design like this could be used outside the classroom?

## Build the Model

Follow the building instructions to construct the base, controller mount, and functional structures of the Smart Shade Station.

Check the following as you build:

- Build a stable frame so the moving shade does not hit the controller or cables.
- With the power off, check travel manually and mark the extended and retracted endpoints.
- Position the light sensor where the model's own shade will not cover it.

<!-- Image placeholder: building steps; insert images for Step 1, Step 2, and so on -->
<!-- Suggested filename: ./images/smart-shading-station-build-01.png and so on -->

## Hardware Connections

Turn off the power, then connect the modules as shown below:

| Module | Connection | Function |
| --- | --- | --- |
| Onboard light sensor | Onboard; no external connection required | Detect ambient brightness |
| Shade motor | Compatible motor connection and angle / limit method to be confirmed | Extend and retract the shade |

:::tip
Onboard functions require no external wiring. For external modules, confirm compatible ports against the final program; for IIC modules, also check the bus addresses. Align connectors correctly, and do not connect or disconnect modules while the device is powered on.
:::

<!-- Image placeholder: hardware wiring diagram -->
<!-- Suggested filename: ./images/smart-shading-station-wiring.png -->

## Program Design

Plan the program in two parts: setup steps that run once at startup, and a main loop that repeats while the model is running.

:::note
This section is a planning guide, not a tested program. A working program is not yet provided for this project. Before classroom use, verify the ports, block names, and control settings on the actual hardware. The suggested screen layout and image placeholders are guides only; the placeholders contain no executable program.
:::

### 1. Set Up at Startup

<!-- Image placeholder: startup initialization program screenshot -->
<!-- Suggested filename: ./images/smart-shading-station-program-init.png -->

At startup, the program performs the following actions:

1. Determine safe start and end positions for the actual motor setup and initialize the target state.
2. Set the initial values of variables and states, and prepare the screen for a new run.
3. Show each data label and the starting status in a fixed place on the screen.

Suggested controller screen layout:

| Screen row | Display content |
| ---: | --- |
| Row 1 | Light value |
| Row 2 | Relative light value |
| Row 3 | Operating status |
| Row 4 | Shade extended / retracted |

### 2. Read, Decide, and Respond

<!-- Image placeholder: main sensing and control loop screenshot -->
<!-- Suggested filename: ./images/smart-shading-station-program-main.png -->

Repeat the following tasks in the `forever` loop:

#### Use the Calibrated Positions

- Use the safe extended and retracted positions established during setup. Keep the saved positions unchanged during normal sensing.

#### Evaluate Light

- Read the light value; set the target to extended above the threshold and retracted otherwise.

#### Control Movement

- Move only when the target differs from the current state; stop at the endpoint and update the state.

### 3. Key Parameters

| Parameter | Example value | Meaning | Adjustment guidance |
| --- | ---: | --- | --- |
| Light threshold | To be verified on the device | A relative value; do not label directly with illuminance units | Determine from classroom light and dark measurements |
| Extended / retracted endpoints | To be verified on the device | Do not specify fixed angles before the actual program is available | Calibrate using the physical mechanism |
| Movement speed | To be verified on the device | Avoid stalling and pinching | Start testing at low speed |

:::note
The program compares the light reading with a threshold and converts the result into a target state. The motor moves only when the target state changes, avoiding repeated driving in the loop. Angle, encoder, limit-switch, or timed control must be selected according to the actual motor and mechanism; control methods for different motor types must not be mixed.
:::

:::caution
First calibrate the mechanical zero position and travel at low speed. Confirm that the shade cannot strike its stops or pinch cables before running automatic control.
:::

## Test and Troubleshoot

After completing the program, test it in the following order:

1. **Startup check**: Connect the device and download the verified program. Check that the initial state and screen labels are correct.
2. **Change ambient brightness**: The shade extends or retracts according to the rules.
3. **Keep the environment unchanged**: The motor does not repeatedly push against an endpoint or run continuously.
4. **Switch conditions several times**: Movement is smooth, and the shade covering the sensor does not cause repeated back-and-forth motion.
5. **Retest and record**: Change one condition, repeat the test, and record inputs, outputs, and results; stop the actuators when finished.

If the motor moves in the wrong direction, check its mounting direction and adjust the control direction or target position.

If the shade repeatedly opens and closes near the threshold, check self-shading and add hysteresis or a sustained-condition check.

## Project Demonstration

With a verified program running, the Smart Shade Station can demonstrate the following results:

- The shade extends in bright conditions and retracts in dim conditions according to the chosen threshold.
- With steady light, the motor stops at the intended position instead of repeatedly pushing against the endpoint.
- The shade moves smoothly without covering its own light sensor and causing repeated opening and closing.

<!-- Image placeholder: project in operation or animated demonstration -->
<!-- Suggested filename: ./images/smart-shading-station-demo.gif -->

## Reflection and Sharing

Ask each group to present its work and discuss the following questions:

1. What data did you record? Were the test conditions kept consistent?
2. What decision rules or data processing methods did this project use?
3. What structural or programming problems occurred during testing? How did you solve them?
4. Which test best demonstrates that the project performs its intended function?
5. What would you most like to improve next, and why?

## Extension Challenges

### Challenge 1: Use Separate Extension and Retraction Thresholds

Use different light thresholds for extending and retracting. Observe whether repeated movements decrease near the boundary.

### Challenge 2: Add Manual Mode

Add manual extension and retraction. Define how to switch between manual and automatic modes so opposing commands cannot be issued simultaneously.

### Challenge 3: Compare Shade Materials

Compare different shade materials while keeping the movement range unchanged. Observe shading effectiveness, structural weight, and operating stability.

### Challenge 4: Count Movements

Increment the movement counter only when the target state changes. Compare movement frequency under different threshold strategies.

### Challenge 5: Combine Temperature and Light

Add temperature data and use it together with light to determine shade status. Make a table showing the desired shade state for each combination of temperature and light, then test every combination.

## Further Learning

### How Does Shading Improve the Environment?

A shade can reduce direct sunlight. In the model, a sensor provides brightness information and a motor moves the mechanism, helping students understand how environmental data can drive physical actions.

### Does Motor Angle Equal Shade Angle?

Gears, linkages, and worm drives change the relationship between movements. Motor rotation cannot be equated directly with the shade's extension angle; the mechanism's travel must be measured.

### Why Confirm the Mechanical Zero Position?

The programmed position must correspond to the model's actual starting point. Calibrating retracted and extended positions at low speed reduces impacts against stops and repeated stalling.
