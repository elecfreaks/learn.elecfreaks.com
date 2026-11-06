---
title: Flood Warning Gate
sidebar_label: "Case 08: Flood Warning Gate"
sidebar_position: 9
---

# Case 08: Flood Warning Gate

## Project Introduction

Low-lying roads may flood after heavy rain. How can a model warn people? This project uses a water level sensor to detect water conditions. When the reading exceeds a warning threshold, **Nezha ESP32** raises a warning barrier and issues on-screen and audible reminders. In this classroom experiment, students connect a sensor threshold with a warning message and a mechanical response.

Students build, program, and test a model, then use their observations and recorded data to explain how it works. The project connects classroom science with engineering design and invites students to suggest improvements for their school or community.

<!-- Image placeholder: finished Flood Warning Gate model -->
<!-- Suggested filename: ./images/flood-warning-gate.png -->

## Materials and Preparation

| Item | Quantity | Purpose |
| --- | ---: | --- |
| Climate Action Kit | 1 set | Build the Flood Warning Gate model |
| Nezha ESP32 | 1 | Run the program, read data, and display information |
| Kit water level sensor | As required by the build | Compare dry and wet sensor readings |
| Shallow container, a small amount of clean water, and a dry mat | As needed | Hold the test water and keep the work area dry |
| RJ11 cables | As needed | Connect compatible external modules; onboard-only functions require no external connections |
| Computer and data cable | 1 set | Write, download, and debug the program |

<!-- Image placeholder: preparation / kit and main modules -->
<!-- Suggested filename: ./images/flood-warning-gate-materials.png -->

## Learning Objectives

**Warning state:** a condition in which the model signals that people should not pass. Make this meaning clear with labels and a screen message.

After completing this project, students will be able to:

1. Observe how water level sensor readings relate to water contact.
2. Define normal and warning states and control the gate model.
3. Design a safe testing process and recognize the model's limitations.
4. Use test results to improve the design through a cycle of designing, programming, testing, and improving.

## Lesson Starter

Present this scenario: a low-lying road in a school model has flooded. How can passersby be warned? Ask students to describe the warning device and what its states mean. Specify that in this project, a raised warning barrier means a warning, not that an access gate is open for passage.

In this lesson, we will act as urban environment designers, build the Flood Warning Gate, and test our design through real observations.

**Project connection:** Reuse the motor-state ideas from [Case 06](./nezha-climate-action-kit-case06.md). Compare this warning barrier with the access gate in [Case 07](./nezha-climate-action-kit-case07.md): label clearly what each position means.

## Explore and Discuss

Before building, discuss the following questions in groups:

1. Could different types of water give different readings at the same depth?
2. Does a raised barrier mean warning or permission to pass in this model?
3. Why should environmental safety still be checked after the water level drops?
4. What conditions and results will you record to check whether your design works as expected?
5. What else would need to be tested before a design like this could be used outside the classroom?

## Build the Model

Follow the building instructions to construct the base, controller mount, and functional structures of the Flood Warning Gate.

Check the following as you build:

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

Plan the program in two parts: setup steps that run once at startup, and a main loop that repeats while the model is running.

:::note
This section is a planning guide, not a tested program. A working program is not yet provided for this project. Before classroom use, verify the ports, block names, and control settings on the actual hardware. The suggested screen layout and image placeholders are guides only; the placeholders contain no executable program.
:::

### 1. Set Up at Startup

<!-- Image placeholder: startup initialization program screenshot -->
<!-- Suggested filename: ./images/flood-warning-gate-program-init.png -->

Before programming, record readings with the sensing section dry and with different amounts of permitted water contact. Use these results to choose the warning threshold.

At startup, the program performs the following actions:

1. Set the warning threshold and the calibrated normal and warning positions.
2. Set the initial values of variables and states, and prepare the screen for a new run.
3. Show each data label and the starting status in a fixed place on the screen.

Suggested controller screen layout:

| Screen row | Display content |
| ---: | --- |
| Row 1 | Water level value |
| Row 2 | Water level sensor reading |
| Row 3 | Operating status |
| Row 4 | Normal / Flood warning |

### 2. Read, Decide, and Respond

<!-- Image placeholder: main sensing and control loop screenshot -->
<!-- Suggested filename: ./images/flood-warning-gate-program-main.png -->

Repeat the following tasks in the `forever` loop:

#### Use the Test Threshold

- Use the threshold selected from the dry and wet tests. Keep it unchanged while checking the model's response.

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

## Test and Troubleshoot

After completing the program, test it in the following order:

1. **Startup check**: Connect the device and download the verified program. Check that the initial state and screen labels are correct.
2. **Keep the sensing section dry**: The display shows normal status and the warning barrier stays in its reset position.
3. **Gradually increase the approved section's water contact area**: The barrier moves and a reminder appears when warning conditions are met.
4. **Dry and reposition the sensor**: Record reset behavior; switch off and clean up after testing.
5. **Retest and record**: Change one condition, repeat the test, and record inputs, outputs, and results; stop the actuators when finished.

If the warning remains with no water present, check for residual moisture, wiring issues, and threshold settings, then record a new dry reading.

If water conditions change without a response, check the sensing area, compatible connection, and reading method.

## Project Demonstration

With a verified program running, the Flood Warning Gate can demonstrate the following results:

- With the sensing section dry, the display shows normal status and the barrier stays in its reset position.
- When water contact produces a reading above the threshold, the barrier moves to its warning position and the model displays a warning.
- After the sensor is dried, students can check the agreed reset behavior, then switch off and clean up.

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

### Challenge 1: Show Three Water Level States

Use measured readings to define normal, attention, and warning levels. Provide clear on-screen or light feedback for each level.

### Challenge 2: Decide When to Clear the Warning

Set a separate condition for clearing a warning, or require the water level to remain lower for a period. Test whether frequent switching still occurs near the boundary.

### Challenge 3: Track Warning Duration

Record when warnings begin and end, and accumulate warning duration. Compare different patterns of water level change.

### Challenge 4: Show Sensor Errors

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
