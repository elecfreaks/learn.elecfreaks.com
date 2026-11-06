---
title: Automatic Cooling Fan
sidebar_label: "Case 05: Automatic Cooling Fan"
sidebar_position: 6
---

# Case 05: Automatic Cooling Fan

## Project Introduction

Can a fan run automatically when needed in hot weather? This project reads ambient temperature with a temperature and humidity sensor. **Nezha ESP32** determines whether the reading exceeds a threshold and switches the fan on or off. By adjusting the threshold and comparing operating states, students learn the automatic control process of sensing, deciding, and acting.

Students build, program, and test a model, then use their observations and recorded data to explain how it works. The project connects classroom science with engineering design and invites students to suggest improvements for their school or community.

<!-- Image placeholder: finished Automatic Cooling Fan model -->
<!-- Suggested filename: ./images/automatic-cooling-fan.png -->

## Materials and Preparation

| Item | Quantity | Purpose |
| --- | ---: | --- |
| Climate Action Kit | 1 set | Build the Automatic Cooling Fan model |
| Nezha ESP32 | 1 | Run the program, read data, and display information |
| Kit temperature and humidity sensor | As required by the build | Measure ambient temperature; optionally display humidity |
| Kit fan module | As required by the build | Switch airflow on and off in response to temperature |
| RJ11 cables | As needed | Connect compatible external modules; onboard-only functions require no external connections |
| Computer and data cable | 1 set | Write, download, and debug the program |

<!-- Image placeholder: preparation / kit and main modules -->
<!-- Suggested filename: ./images/automatic-cooling-fan-materials.png -->

## Learning Objectives

**Automatic control:** a sensor measures a condition, the program checks a rule, and an output device such as a fan takes action.

After completing this project, students will be able to:

1. Read temperature data and distinguish the roles of temperature and humidity.
2. Use conditional branches to switch the fan on and off.
3. Adjust thresholds through testing and recognize the problem of frequent switching.
4. Use test results to improve the design through a cycle of designing, programming, testing, and improving.

## Lesson Starter

Begin with the example of forgetting to turn off a fan when leaving a room, and discuss how a device could operate according to environmental conditions. Ask students to describe the rules before converting them into a program. Fans usually improve thermal comfort by moving air; this does not necessarily mean they lower ambient temperature.

In this lesson, we will act as urban environment designers, build the Automatic Cooling Fan, and test our design through real observations.

**Project connection:** Use the threshold decisions practiced in [Case 02](./nezha-climate-action-kit-case02.md) to control a fan. Combine this fan with shading and card check-ins in [the Smart Low-Carbon Bus Stop](./nezha-climate-action-kit-case10.md).

## Explore and Discuss

Before building, discuss the following questions in groups:

1. What should the fan do when the temperature equals the threshold?
2. Why should the sensor not be placed directly against the controller or motor?
3. What happens when the temperature fluctuates around the threshold?
4. What conditions and results will you record to check whether your design works as expected?
5. What else would need to be tested before a design like this could be used outside the classroom?

## Build the Model

Follow the building instructions to construct the base, controller mount, and functional structures of the Automatic Cooling Fan.

Check the following as you build:

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

Plan the program in two parts: setup steps that run once at startup, and a main loop that repeats while the model is running.

:::note
This section is a planning guide, not a tested program. A working program is not yet provided for this project. Before classroom use, verify the ports, block names, and control settings on the actual hardware. The suggested screen layout and image placeholders are guides only; the placeholders contain no executable program.
:::

### 1. Set Up at Startup

<!-- Image placeholder: startup initialization program screenshot -->
<!-- Suggested filename: ./images/automatic-cooling-fan-program-init.png -->

At startup, the program performs the following actions:

1. Initialize the sensor, set the fan to stopped, and set the temperature threshold.
2. Set the initial values of variables and states, and prepare the screen for a new run.
3. Show each data label and the starting status in a fixed place on the screen.

Suggested controller screen layout:

| Screen row | Display content |
| ---: | --- |
| Row 1 | Temperature |
| Row 2 | Ambient temperature |
| Row 3 | Operating status |
| Row 4 | Fan on / off |

### 2. Read, Decide, and Respond

<!-- Image placeholder: main sensing and control loop screenshot -->
<!-- Suggested filename: ./images/automatic-cooling-fan-program-main.png -->

Repeat the following tasks in the `forever` loop:

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

## Test and Troubleshoot

After completing the program, test it in the following order:

1. **Startup check**: Connect the device and download the verified program. Check that the initial state and screen labels are correct.
2. **Set the threshold above the current room temperature**: The fan stops.
3. **Set the threshold below the current room temperature**: The fan starts, and the displayed status matches the output.
4. **Restore the intended threshold and observe**: Record switching behavior and stop the fan when testing ends.
5. **Retest and record**: Change one condition, repeat the test, and record inputs, outputs, and results; stop the actuators when finished.

If the fan does not rotate, check the power supply, connection, and module type, and confirm that the output block matches the hardware.

If the fan repeatedly switches on and off, increase the decision interval or use separate on and off thresholds.

## Project Demonstration

With a verified program running, the Automatic Cooling Fan can demonstrate the following results:

- The fan stays off when the temperature is at or below the threshold.
- The fan starts when the temperature rises above the threshold, and the screen shows the matching status.
- Students can compare switching behavior with different thresholds and stop the fan after the demonstration.

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

Set a temperature for switching on and a lower temperature for switching off. Between these two values, keep the current fan state. Compare this with using one threshold: does the fan switch less often near the boundary?

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
