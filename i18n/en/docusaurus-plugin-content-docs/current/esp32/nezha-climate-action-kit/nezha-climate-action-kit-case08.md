---
title: Flood Warning Gate
sidebar_label: "Case 08: Flood Warning Gate"
sidebar_position: 9
---


# Case 08: Flood Warning Gate

## Project Introduction

Low-lying roads may flood after heavy rain. How can a model warn people? This project uses a water level sensor to detect water conditions. When the reading exceeds a warning threshold, **Nezha ESP32** raises a warning barrier and issues on-screen and audible reminders. Through a simulated experiment, students learn how threshold decisions coordinate with safety states.

Through building, programming, and testing, students connect their observations with the model's displays or actions and learn to explain phenomena using data.

This project combines classroom observation with engineering practice, encouraging students to consider how technology can improve school and urban environments.

<!-- Image placeholder: finished Flood Warning Gate model -->
<!-- Suggested filename: ./images/flood-warning-gate.png -->

## Preparation

| Item | Quantity | Purpose |
| --- | ---: | --- |
| Climate Action Kit | 1 set | Build the Flood Warning Gate model |
| Nezha ESP32 | 1 | Run the program, read data, and display information |
| Kit water level sensor | As configured | Carry out the sensing, control, or networking tasks for this project |
| Shallow container, a small amount of clean water, and a dry mat | As configured | Carry out the sensing, control, or networking tasks for this project |
| RJ11 cables | As needed | Connect compatible external modules; onboard-only functions require no external connections |
| Computer and data cable | 1 set | Write, download, and debug the program |

<!-- Image placeholder: preparation / kit and main modules -->
<!-- Suggested filename: ./images/flood-warning-gate-materials.png -->

## Learning Objectives

After completing this project, students will be able to:

1. Observe how water level sensor readings relate to water contact.
2. Define normal and warning states and control the gate model.
3. Design a safe testing process and recognize the model's limitations.
4. Adjust parameters based on test results and follow the engineering process of design, programming, testing, and improvement.

## Lesson Introduction

Present this scenario: a low-lying road in a school model has flooded. How can passersby be warned? Ask students to describe the warning device and what its states mean. Specify that in this project, a raised warning barrier means a warning, not that an access gate is open for passage.

In this lesson, we will act as urban environment designers, build the Flood Warning Gate, and test our design through real observations.

## Explore and Discuss

Before building, discuss the following questions in groups:

1. Will different water qualities give the same reading at the same immersion depth?
2. Does a raised barrier mean warning or permission to pass in this model?
3. Why should environmental safety still be checked after the water level drops?
4. How will you record the test conditions to show whether the results meet your expectations?
5. What other factors would you need to consider if this model were used in a real environment?

## Building Steps

Follow the building instructions to construct the base, controller mount, and functional structures of the Flood Warning Gate.

Pay particular attention to the following during construction:

- Secure the controller, power supply, and motor above the container or in a dry area away from it.
- Only let the sensing section approved for water contact touch water; do not immerse connectors or electronic components.
- Mark the normal and warning positions and check movement at low speed.

<!-- Image placeholder: building steps; insert images for Step 1, Step 2, and so on -->
<!-- Suggested filename: ./images/flood-warning-gate-build-01.png and so on -->

## Hardware Connections

Turn off the power, then connect the modules as shown below:

| Module | Connection | Function |
| --- | --- | --- |
| Water level sensor | Compatible sensor connection to be confirmed | Detect water contact conditions |
| Warning barrier motor | Motor connection and angle or limit method to be confirmed | Perform the warning movement |
| Onboard screen / optional speaker | Onboard | Indicate warning status |

:::tip
Onboard functions require no external wiring. For external modules, confirm compatible ports against the final program; for IIC modules, also check the bus addresses. Align connectors correctly, and do not connect or disconnect modules while the device is powered on.
:::

<!-- Image placeholder: hardware wiring diagram -->
<!-- Suggested filename: ./images/flood-warning-gate-wiring.png -->

## Program Design

The program consists of two parts: startup initialization and the main loop.

:::note
The following is a suggested outline of the teaching logic. The actual program for this project is not currently provided. Port numbers, block names, and control parameters must be verified on the physical device; program screenshot locations are temporarily indicated by clearly labeled placeholders. The screen layout below is also a suggestion.
:::

### 1. Startup Initialization

<!-- Image placeholder: startup initialization program screenshot -->
<!-- Suggested filename: ./images/flood-warning-gate-program-init.png -->

At startup, the program performs the following actions:

1. Record readings when dry and under different water contact conditions, then choose a warning threshold.
2. Initialize the screen and data variables so that states from the previous run are not reused.
3. Show data labels and the initial operating status at the designated screen positions.

Suggested controller screen layout:

| Screen row | Display content |
| ---: | --- |
| Row 1 | Water level value |
| Row 2 | Water level sensor reading |
| Row 3 | Operating status |
| Row 4 | Normal / Flood warning |

### 2. Repeated Sensing and Control

<!-- Image placeholder: main sensing and control loop screenshot -->
<!-- Suggested filename: ./images/flood-warning-gate-program-main.png -->

The system continuously performs the following tasks in the `forever` loop.

#### Calibrate

- Record readings when dry and under different water contact conditions, then choose a warning threshold.

#### Decide

- Read the water level value and enter the warning state when it exceeds the threshold.

#### Coordinate Responses

- Raise the warning barrier and show a reminder during a warning; reset according to classroom rules when conditions recover.

### 3. Key Parameters

| Parameter | Example value | Meaning | Adjustment guidance |
| --- | ---: | --- | --- |
| Water level threshold | To be verified on the device | Do not assume a direct correspondence to centimeters | Determine from measured dry and wet readings |
| Warning / reset position | To be verified on the device | Clearly distinguish its meaning from an access gate's states | Calibrate using the model |
| Audible reminder frequency | To be verified on the device | Avoid continuous high-frequency reminders | Set according to classroom needs |

:::note
The sensor output changes with water contact, and the program compares the reading with an experimentally determined threshold. Readings may not convert directly to centimeters. The basic model enters the warning state above the threshold and resets below it. Real road closures require more information and human management; this model is for teaching demonstrations only.
:::

:::caution
Only let the approved water-contact part of the sensor touch the water. Keep the controller, power supply, and wiring dry. The warning state should clearly mean no passage.
:::

## Testing

After completing the program, test it in the following order:

1. **Startup check**: Connect the device and download the verified program. Check that the initial state and screen labels are correct.
2. **Keep the sensing section dry**: The display shows normal status and the warning barrier stays in its reset position.
3. **Gradually increase the approved section's water contact area**: The barrier moves and a reminder appears when warning conditions are met.
4. **Dry and reposition the sensor**: Record reset behavior; switch off and clean up after testing.
5. **Retest and record**: Change one condition, repeat the test, and record inputs, outputs, and results; stop the actuators when finished.

If the warning remains with no water present, check for residual moisture, wiring issues, and threshold settings, then record a new dry reading.

If water conditions change without a response, check the sensing area, compatible connection, and reading method.

## Project Demonstration

When the program is running, the Flood Warning Gate can demonstrate the following results:

- The display shows normal status and the warning barrier stays in its reset position.
- The barrier moves and a reminder appears when warning conditions are met.
- Record reset behavior; switch off and clean up after testing.

<!-- Image placeholder: project in operation or animated demonstration -->
<!-- Suggested filename: ./images/flood-warning-gate-demo.gif -->

## Reflection and Sharing

Ask each group to present its work and discuss the following questions:

1. What data did you record? Were the test conditions kept consistent?
2. What decision rules or data processing methods did this project use?
3. What structural or programming problems occurred during testing? How did you solve them?
4. Which test best demonstrates that the project performs its intended function?
5. What would you most like to improve next, and why?

## Extension Challenges

### Challenge 1: Add Graded Water Level Indications

Use measured readings to define normal, attention, and warning levels. Provide clear on-screen or light feedback for each level.

### Challenge 2: Add Warning Clearance Conditions

Set a separate condition for clearing a warning, or require the water level to remain lower for a period. Test whether frequent switching still occurs near the boundary.

### Challenge 3: Track Warning Duration

Record when warnings begin and end, and accumulate warning duration. Compare different patterns of water level change.

### Challenge 4: Add Sensor Error Indications

Detect abnormal or invalid readings if the module supports this. Show a check prompt rather than interpreting a failed reading directly as no flooding.

### Challenge 5: Coordinate Sound and Light

Make warning icons, lights, and sounds represent the same state. Adjust reminder intervals so continuous prompts do not disrupt classroom observation.

## Further Learning

### What Does a Water Level Reading Represent?

A water level sensor returns data related to water contact. Readings depend on mounting position, water quality, and sensor construction; without calibration, they cannot be treated directly as centimeters.

### How Should a Warning Gate Convey Its State?

The model should clearly indicate no passage when flooding is detected. Whether the gate rises, lowers, opens, closes, or rotates depends on its structure; the word “raised” alone does not determine access status.

### Why Is This Unsuitable for Real Disaster Prevention?

The classroom model teaches sensing and response and has not undergone the reliability, waterproofing, and safety validation required for real use. Actual flooding risks should be managed by professional systems and personnel.
