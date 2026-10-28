---
title: Tilt-Alert Weather Tower
sidebar_label: "Case 03: Tilt-Alert Weather Tower"
sidebar_position: 4
---


# Case 03: Tilt-Alert Weather Tower

## Project Introduction

How can tilt be detected promptly when a small weather tower is bumped or its base becomes unstable? This project builds a weather tower model and uses the onboard orientation sensor of **Nezha ESP32** to detect orientation changes. When tilt in the selected direction exceeds a threshold, the screen shows a warning, optionally accompanied by sound. By adjusting the base and alarm conditions, students learn about orientation sensing and model stability.

Through building, programming, and testing, students connect their observations with the model's displays or actions and learn to explain phenomena using data.

This project combines classroom observation with engineering practice, encouraging students to consider how technology can improve school and urban environments.

<!-- Image placeholder: finished Tilt-Alert Weather Tower model -->
<!-- Suggested filename: ./images/tilt-safety-weather-tower.png -->

## Preparation

| Item | Quantity | Purpose |
| --- | ---: | --- |
| Climate Action Kit | 1 set | Build the Tilt-Alert Weather Tower model |
| Nezha ESP32 | 1 | Run the program, read data, and display information |
| RJ11 cables | As needed | Connect compatible external modules; onboard-only functions require no external connections |
| Computer and data cable | 1 set | Write, download, and debug the program |

<!-- Image placeholder: preparation / kit and main modules -->
<!-- Suggested filename: ./images/tilt-safety-weather-tower-materials.png -->

## Learning Objectives

After completing this project, students will be able to:

1. Observe the relationship between orientation readings and the controller's mounting direction.
2. Set a reference orientation and use angles or deviations for conditional decisions.
3. Evaluate structural stability and alarm sensitivity through testing.
4. Adjust parameters based on test results and follow the engineering process of design, programming, testing, and improvement.

## Lesson Introduction

Show a block tower with a narrow base and ask students to predict which direction it is most likely to fall. Discuss whether orientation changes can reveal a problem before the tower falls. This project only simulates a tilt warning; it is not a safety monitoring device for real buildings.

In this lesson, we will act as urban environment designers, build the Tilt-Alert Weather Tower, and test our design through real observations.

## Explore and Discuss

Before building, discuss the following questions in groups:

1. If the controller's mounting direction changes, which axis will correspond to the same tilt?
2. Why should the upright model's readings be recorded first?
3. Should slight shaking and sustained tilt use the same alarm response?
4. How will you record the test conditions to show whether the results meet your expectations?
5. What other factors would you need to consider if this model were used in a real environment?

## Building Steps

Follow the building instructions to construct the base, controller mount, and functional structures of the Tilt-Alert Weather Tower.

Pay particular attention to the following during construction:

- Build a tower with a low center of gravity and a wide base, and secure the controller firmly.
- Mark the controller's front and axis directions so its mounting direction is not repeatedly changed during debugging.
- Support the model by hand during small-angle tests and leave space to prevent falls.

<!-- Image placeholder: building steps; insert images for Step 1, Step 2, and so on -->
<!-- Suggested filename: ./images/tilt-safety-weather-tower-build-01.png and so on -->

## Hardware Connections

Turn off the power, then connect the modules as shown below:

| Module | Connection | Function |
| --- | --- | --- |
| Onboard orientation sensor | Onboard; output fields depend on the extension library | Read orientation or tilt-related data |
| Onboard screen / optional speaker | Onboard; no external connection required | Display safety status / reminders |

:::tip
Onboard functions require no external wiring. For external modules, confirm compatible ports against the final program; for IIC modules, also check the bus addresses. Align connectors correctly, and do not connect or disconnect modules while the device is powered on.
:::

<!-- Image placeholder: hardware wiring diagram -->
<!-- Suggested filename: ./images/tilt-safety-weather-tower-wiring.png -->

## Program Design

The program consists of two parts: startup initialization and the main loop.

:::note
The following is a suggested outline of the teaching logic. The actual program for this project is not currently provided. Port numbers, block names, and control parameters must be verified on the physical device; program screenshot locations are temporarily indicated by clearly labeled placeholders. The screen layout below is also a suggestion.
:::

### 1. Startup Initialization

<!-- Image placeholder: startup initialization program screenshot -->
<!-- Suggested filename: ./images/tilt-safety-weather-tower-program-init.png -->

At startup, the program performs the following actions:

1. Record the selected axis angle or reference value while the model is upright and still.
2. Initialize the screen and data variables so that states from the previous run are not reused.
3. Show data labels and the initial operating status at the designated screen positions.

Suggested controller screen layout:

| Screen row | Display content |
| ---: | --- |
| Row 1 | Tilt deviation |
| Row 2 | Deviation from the upright reference |
| Row 3 | Operating status |
| Row 4 | Stable / Tilt warning |

### 2. Repeated Sensing and Control

<!-- Image placeholder: main sensing and control loop screenshot -->
<!-- Suggested filename: ./images/tilt-safety-weather-tower-program-main.png -->

The system continuously performs the following tasks in the `forever` loop.

#### Establish a Reference

- Record the selected axis angle or reference value while the model is upright and still.

#### Calculate Deviation

- Read the current value and calculate the absolute difference from the reference.

#### Alarm Decision

- Issue a reminder when deviation exceeds the threshold and clear it upon returning to the safe range.

### 3. Key Parameters

| Parameter | Example value | Meaning | Adjustment guidance |
| --- | ---: | --- | --- |
| Detection axis | To be verified on the device | First verify by tilting in each direction | Determined by the controller's mounting direction |
| Tilt threshold | To be verified on the device | An angle-based method requires confirming that the block outputs an angle | Set through model and classroom testing |
| Reference orientation | To be verified on the device | Reset after changing the controller's mounting position | Record while upright and still |

:::note
Available outputs from the onboard orientation sensor depend on the extension library. If pitch or roll angles are available, compare the current angle with the upright reference. If only acceleration or other data is provided, choose an appropriate method according to the module documentation. Static tilt should not be judged from gyroscope angular velocity alone.
:::

:::caution
Support the model by hand during testing and tilt it slowly through small angles to prevent falls. Do not use this classroom model to assess the safety of real buildings.
:::

## Testing

After completing the program, test it in the following order:

1. **Startup check**: Connect the device and download the verified program. Check that the initial state and screen labels are correct.
2. **Place the model upright**: The display shows normal status, and readings remain close to the reference.
3. **Slowly tilt in the selected direction, then return upright**: A reminder appears above the threshold and clears when upright.
4. **Tilt in another direction**: Verify which directions the current method covers and record blind spots.
5. **Retest and record**: Change one condition, repeat the test, and record the inputs, outputs, and results.

If the alarm sounds while upright, record the reference again and check the controller mounting and axis selection.

If tilt in one direction does not trigger an alarm, check the detection axis; add a second-axis condition if all-direction detection is required.

## Project Demonstration

When the program is running, the Tilt-Alert Weather Tower can demonstrate the following results:

- The display shows normal status, and readings remain close to the reference.
- A reminder appears above the threshold and clears when upright.
- Verify which directions the current method covers and record blind spots.

<!-- Image placeholder: project in operation or animated demonstration -->
<!-- Suggested filename: ./images/tilt-safety-weather-tower-demo.gif -->

## Reflection and Sharing

Ask each group to present its work and discuss the following questions:

1. What data did you record? Were the test conditions kept consistent?
2. What decision rules or data processing methods did this project use?
3. What structural or programming problems occurred during testing? How did you solve them?
4. Which test best demonstrates that the project performs its intended function?
5. What would you most like to improve next, and why?

## Extension Challenges

### Challenge 1: Require Sustained Tilt

Add a duration condition so that a reminder appears only after tilt persists for a period of time. Compare results for slight shaking and sustained tilt.

### Challenge 2: Compare Different Bases

Keep the tower body unchanged and vary the base width. Support the model by hand during small-angle tests and compare structural stability.

### Challenge 3: Record Maximum Deviation

Use a variable to record the largest orientation deviation during a test. Reset and repeat measurements, then explain differences.

### Challenge 4: Compare Tilt in Two Directions

Slowly tilt in each of two directions and identify the corresponding orientation fields. Design reminder logic that recognizes both directions.

### Challenge 5: Design Graded Reminders

Use different reminders for slight and pronounced tilt. First establish the relationship between thresholds and model stability, then test.

## Further Learning

### How Do Angle and Angular Velocity Differ?

Angle describes orientation or the amount of tilt, while angular velocity describes how quickly an object rotates. An object held still at a tilt may have angular velocity close to zero, so angular velocity alone cannot identify static tilt.

### Why Is an Upright Reference Needed?

The controller's mounting direction affects orientation readings. Recording the upright value first and then comparing deviations helps distinguish mounting differences from actual tilt.

### What Affects Tower Stability?

Base width, center of gravity, and connection strength all affect stability. Change one structural condition at a time and use small-angle tests to compare improvements.
