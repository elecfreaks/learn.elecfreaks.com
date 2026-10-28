---
title: Automatic Cooling Fan
sidebar_label: "Case 05: Automatic Cooling Fan"
sidebar_position: 6
---


# Case 05: Automatic Cooling Fan

## Project Introduction

Can a fan run automatically when needed in hot weather? This project reads ambient temperature with a temperature and humidity sensor. **Nezha ESP32** determines whether the reading exceeds a threshold and switches the fan on or off. By adjusting the threshold and comparing operating states, students learn the automatic control process of sensing, decision-making, and actuation.

Through building, programming, and testing, students connect their observations with the model's displays or actions and learn to explain phenomena using data.

This project combines classroom observation with engineering practice, encouraging students to consider how technology can improve school and urban environments.

<!-- Image placeholder: finished Automatic Cooling Fan model -->
<!-- Suggested filename: ./images/automatic-cooling-fan.png -->

## Preparation

| Item | Quantity | Purpose |
| --- | ---: | --- |
| Climate Action Kit | 1 set | Build the Automatic Cooling Fan model |
| Nezha ESP32 | 1 | Run the program, read data, and display information |
| Kit temperature and humidity sensor | As configured | Carry out the sensing, control, or networking tasks for this project |
| Kit fan module | As configured | Carry out the sensing, control, or networking tasks for this project |
| RJ11 cables | As needed | Connect compatible external modules; onboard-only functions require no external connections |
| Computer and data cable | 1 set | Write, download, and debug the program |

<!-- Image placeholder: preparation / kit and main modules -->
<!-- Suggested filename: ./images/automatic-cooling-fan-materials.png -->

## Learning Objectives

After completing this project, students will be able to:

1. Read temperature data and distinguish the roles of temperature and humidity.
2. Use conditional branches to switch the fan on and off.
3. Adjust thresholds through testing and recognize the problem of frequent switching.
4. Adjust parameters based on test results and follow the engineering process of design, programming, testing, and improvement.

## Lesson Introduction

Begin with the example of forgetting to turn off a fan when leaving a room, and discuss how a device could operate according to environmental conditions. Ask students to describe the rules before converting them into a program. Fans usually improve thermal comfort by moving air; this does not necessarily mean they lower ambient temperature.

In this lesson, we will act as urban environment designers, build the Automatic Cooling Fan, and test our design through real observations.

## Explore and Discuss

Before building, discuss the following questions in groups:

1. What should the fan do when the temperature equals the threshold?
2. Why should the sensor not be placed directly against the controller or motor?
3. What happens when the temperature fluctuates around the threshold?
4. How will you record the test conditions to show whether the results meet your expectations?
5. What other factors would you need to consider if this model were used in a real environment?

## Building Steps

Follow the building instructions to construct the base, controller mount, and functional structures of the Automatic Cooling Fan.

Pay particular attention to the following during construction:

- Secure the fan and keep blocks, cables, and fingers out of the blade rotation area.
- Place the temperature and humidity sensor in a ventilated position, away from local heat sources such as the controller and motors.
- Connect modules with the power off, organize the cables, then turn on the power.

<!-- Image placeholder: building steps; insert images for Step 1, Step 2, and so on -->
<!-- Suggested filename: ./images/automatic-cooling-fan-build-01.png and so on -->

## Hardware Connections

Turn off the power, then connect the modules as shown below:

| Module | Connection | Function |
| --- | --- | --- |
| Temperature and humidity sensor | Select a compatible connection for the module type; port to be confirmed | Read temperature and optionally humidity |
| Fan module | Connect to a compatible output according to the module specifications; port to be confirmed | Switch the fan on and off |

:::tip
Onboard functions require no external wiring. For external modules, confirm compatible ports against the final program; for IIC modules, also check the bus addresses. Align connectors correctly, and do not connect or disconnect modules while the device is powered on.
:::

<!-- Image placeholder: hardware wiring diagram -->
<!-- Suggested filename: ./images/automatic-cooling-fan-wiring.png -->

## Program Design

The program consists of two parts: startup initialization and the main loop.

:::note
The following is a suggested outline of the teaching logic. The actual program for this project is not currently provided. Port numbers, block names, and control parameters must be verified on the physical device; program screenshot locations are temporarily indicated by clearly labeled placeholders. The screen layout below is also a suggestion.
:::

### 1. Startup Initialization

<!-- Image placeholder: startup initialization program screenshot -->
<!-- Suggested filename: ./images/automatic-cooling-fan-program-init.png -->

At startup, the program performs the following actions:

1. Initialize the sensor, set the fan to stopped, and set the temperature threshold.
2. Initialize the screen and data variables so that states from the previous run are not reused.
3. Show data labels and the initial operating status at the designated screen positions.

Suggested controller screen layout:

| Screen row | Display content |
| ---: | --- |
| Row 1 | Temperature |
| Row 2 | Ambient temperature |
| Row 3 | Operating status |
| Row 4 | Fan on / off |

### 2. Repeated Sensing and Control

<!-- Image placeholder: main sensing and control loop screenshot -->
<!-- Suggested filename: ./images/automatic-cooling-fan-program-main.png -->

The system continuously performs the following tasks in the `forever` loop.

#### Read and Decide

- Read temperature; start the fan above the threshold and stop it otherwise.

#### Display Status

- Display temperature and fan status; if reading fails, stop the fan and show a check prompt.

### 3. Key Parameters

| Parameter | Example value | Meaning | Adjustment guidance |
| --- | ---: | --- | --- |
| Temperature threshold | To be verified on the device | Temporarily change the threshold to test branches without heating the device | Choose a value that is easy to test at room temperature |
| Sampling interval | To be verified on the device | Confirm using the module documentation | Do not sample faster than the sensor's supported update rate |
| Fan output value | To be verified on the device | Direction, speed range, and connection depend on the actual program | Set according to module support |

:::note
The temperature and humidity sensor provides a temperature reading. The program compares it with the threshold and sends fan control commands. This project uses temperature for control; humidity can be displayed or used in later extensions. The threshold is a classroom setting, not a human health or public-building control standard.
:::

:::caution
Leave clearance around the fan blades and keep fingers, hair, and cables away from the rotation area. Test on/off behavior by changing the threshold; there is no need to heat the device.
:::

## Testing

After completing the program, test it in the following order:

1. **Startup check**: Connect the device and download the verified program. Check that the initial state and screen labels are correct.
2. **Set the threshold above the current room temperature**: The fan stops.
3. **Set the threshold below the current room temperature**: The fan starts, and the displayed status matches the output.
4. **Restore the intended threshold and observe**: Record switching behavior and stop the fan when testing ends.
5. **Retest and record**: Change one condition, repeat the test, and record inputs, outputs, and results; stop the actuators when finished.

If the fan does not rotate, check the power supply, connection, and module type, and confirm that the output block matches the hardware.

If the fan repeatedly switches on and off, increase the decision interval or use separate on and off thresholds.

## Project Demonstration

When the program is running, the Automatic Cooling Fan can demonstrate the following results:

- The fan stops.
- The fan starts, and the displayed status matches the output.
- Record switching behavior and stop the fan when testing ends.

<!-- Image placeholder: project in operation or animated demonstration -->
<!-- Suggested filename: ./images/automatic-cooling-fan-demo.gif -->

## Reflection and Sharing

Ask each group to present its work and discuss the following questions:

1. What data did you record? Were the test conditions kept consistent?
2. What decision rules or data processing methods did this project use?
3. What structural or programming problems occurred during testing? How did you solve them?
4. Which test best demonstrates that the project performs its intended function?
5. What would you most like to improve next, and why?

## Extension Challenges

### Challenge 1: Add Hysteresis Control

Set an on temperature and a lower off temperature. Compare switching near the boundary with single-threshold and dual-threshold control.

### Challenge 2: Display Humidity

Read humidity and add it to the screen. Keep the existing fan control rules and first verify that the new data display is correct.

### Challenge 3: Track Running Time

Record when the fan starts and stops, and accumulate its running time. Compare operation under different thresholds.

### Challenge 4: Compare Sensor Positions

Keep environmental conditions similar and change the sensor's position relative to the controller and fan. Discuss how local heat sources and airflow affect readings.

### Challenge 5: Add a Manual Stop

Add an available button or other input to stop the fan. Define the priority of manual stopping relative to automatic control and verify how operation resumes.

## Further Learning

### Does a Fan Always Lower Room Temperature?

A fan mainly promotes air movement. It usually makes people feel cooler by improving heat loss from the body, but does not necessarily lower indoor air temperature.

### What Is a Conditional Decision?

A conditional decision selects an action based on input. For example, start the fan when temperature exceeds a threshold and stop it otherwise. Also test what happens when the temperature equals the threshold.

### What Is Hysteresis Control?

Using different on and off thresholds reduces repeated switching near a boundary. For example, start at a higher temperature and stop at a lower one; verify the specific thresholds in the classroom environment.
