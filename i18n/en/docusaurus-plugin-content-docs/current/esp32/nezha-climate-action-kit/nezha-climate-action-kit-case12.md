---
title: Urban Climate Safety Station
sidebar_label: "Case 12: Urban Climate Safety Station"
sidebar_position: 13
---



# Case 12: Urban Climate Safety Station

## Project Introduction

How can one model coordinate responses to heat, intense sunlight, and flooding at the same time? The Urban Climate Safety Station integrates temperature and humidity, water level, light, air pressure, orientation, and RFID interactions. Coordinated by **Nezha ESP32**, it provides displays, fan cooling, shading, and flood warnings, and can upload data to SmartIoT. Students apply knowledge from earlier projects to design a system whose behavior can be explained and tested.

Through building, programming, and testing, students connect their observations with the model's displays or actions and learn to explain phenomena using data.

This project combines classroom observation with engineering practice, encouraging students to consider how technology can improve school and urban environments.

<!-- Image placeholder: finished Urban Climate Safety Station model -->
<!-- Suggested filename: ./images/urban-climate-safety-station.png -->

## Preparation

| Item | Quantity | Purpose |
| --- | ---: | --- |
| Climate Action Kit | 1 set | Build the Urban Climate Safety Station model |
| Nezha ESP32 | 1 | Run the program, read data, and display information |
| Temperature and humidity, water level, air pressure, and RFID modules with compatible cards | As configured | Carry out the sensing, control, or networking tasks for this project |
| Fan, shade and warning mechanisms, and matching motors | As configured | Carry out the sensing, control, or networking tasks for this project |
| Optional compatible wireless network and SmartIoT project | As configured | Carry out the sensing, control, or networking tasks for this project |
| RJ11 cables | As needed | Connect compatible external modules; onboard-only functions require no external connections |
| Computer and data cable | 1 set | Write, download, and debug the program |

<!-- Image placeholder: preparation / kit and main modules -->
<!-- Suggested filename: ./images/urban-climate-safety-station-materials.png -->

## Learning Objectives

After completing this project, students will be able to:

1. Map the relationships between multiple inputs, decision rules, and actuator outputs.
2. Set priorities for shared actuators to prevent conflicting commands.
3. Coordinate multiple tasks using states and timing.
4. Create a combined test plan and explain system performance using records.
5. Adjust parameters based on test results and follow the engineering process of design, programming, testing, and improvement.

## Lesson Introduction

Ask each group to act as an urban facilities design team. One station may face high temperatures, intense light, flooding, and card requests simultaneously. List the required tasks, discuss their priorities, and draw an input–rule–output table for the design.

In this lesson, we will act as urban environment designers, build the Urban Climate Safety Station, and test our design through real observations.

## Explore and Discuss

Before building, discuss the following questions in groups:

1. If a flood warning and a card-triggered gate-opening request occur together, which has priority?
2. Can other sensors still update promptly while one action waits for several seconds?
3. Can all modules be connected simultaneously and powered reliably by the current supply?
4. How will you record the test conditions to show whether the results meet your expectations?
5. What other factors would you need to consider if this model were used in a real environment?

## Building Steps

Follow the building instructions to construct the base, controller mount, and functional structures of the Urban Climate Safety Station.

Pay particular attention to the following during construction:

- Build separate sensing, shading, and access / warning areas first, ensuring that mechanisms cannot collide.
- Isolate the water experiment container from the power supply, controller, and wiring.
- Create an actual port allocation table and check power requirements and bus addresses one by one.
- Test each submodule separately, then add them to the full model one at a time; retain a common way to stop the system.

<!-- Image placeholder: building steps; insert images for Step 1, Step 2, and so on -->
<!-- Suggested filename: ./images/urban-climate-safety-station-build-01.png and so on -->

## Hardware Connections

Turn off the power, then connect the modules as shown below:

| Module | Connection | Function |
| --- | --- | --- |
| Onboard light and orientation sensors | Onboard; output fields to be confirmed | Light and tilt status |
| Temperature and humidity, water level, air pressure, and RFID | Assign compatible connections individually; verify bus addresses and power supply | Multiple input sources |
| Fan, shade, and warning mechanism | Connection count, loads, and motor control methods to be confirmed | Multiple outputs |
| Screen, speaker, and platform | Display layout, reminder timing, and upload fields to be configured | Local feedback and optional remote records |

:::tip
Onboard functions require no external wiring. For external modules, confirm compatible ports against the final program; for IIC modules, also check the bus addresses. Align connectors correctly, and do not connect or disconnect modules while the device is powered on.
:::

<!-- Image placeholder: hardware wiring diagram -->
<!-- Suggested filename: ./images/urban-climate-safety-station-wiring.png -->

## Program Design

The program consists of two parts: startup initialization and the main loop.

:::note
The following is a suggested outline of the teaching logic. The actual program for this project is not currently provided. Port numbers, block names, and control parameters must be verified on the physical device; program screenshot locations are temporarily indicated by clearly labeled placeholders. The screen layout below is also a suggestion.
:::

### 1. Startup Initialization

<!-- Image placeholder: startup initialization program screenshot -->
<!-- Suggested filename: ./images/urban-climate-safety-station-program-init.png -->

At startup, the program performs the following actions:

1. List each subtask's inputs, thresholds, states, outputs, and update interval.
2. Initialize the screen and data variables so that states from the previous run are not reused.
3. Show data labels and the initial operating status at the designated screen positions.

Suggested controller screen layout:

| Screen row | Display content |
| ---: | --- |
| Row 1 | System status |
| Row 2 | Sensor readings and validity |
| Row 3 | Operating status |
| Row 4 | Warning / Access / Actuator status |

### 2. Repeated Sensing and Control

<!-- Image placeholder: main sensing and control loop screenshot -->
<!-- Suggested filename: ./images/urban-climate-safety-station-program-main.png -->

The system continuously performs the following tasks in the `forever` loop.

#### State Design

- Track fan, shade, flooding, orientation, and card states separately, rather than letting tasks compete directly for the same actuator.

#### Priorities

- If warnings and card access share a gate, the suggested rule is to prioritize warnings and suspend access; if mechanisms are separate, define each one's meaning and movement range clearly.

#### Coordinate the Loop

- Use timing to update sampling, movement, and upload tasks; avoid long waits that block other decisions.

#### Handle Exceptions

- Design clear prompts and safe outputs for failed readings, network disconnection, and device restarts.

### 3. Key Parameters

| Parameter | Example value | Meaning | Adjustment guidance |
| --- | ---: | --- | --- |
| Temperature, light, water level, and orientation thresholds | To be verified on the device | Recalibrate after mechanical or mounting changes | Start from verified subprojects and measure again |
| Actuator priorities | To be verified on the device | Define rules for the final model and program | Warnings take priority over ordinary interactions, as a suggested approach |
| Sampling, movement, and upload intervals | To be verified on the device | Stay within module and platform support | Set separately |
| Motor targets and power configuration | To be verified on the device | Do not specify fixed ports or angles before verification | Confirm using the actual complete system |

:::note
The system first samples data, then updates each subtask's state, and finally applies coordinated outputs. Temperature controls the fan, light controls shading, water level and orientation provide warnings, RFID supports interaction counting, and air pressure supports trend records. Before full integration, verify port count, bus addresses, library support, and power capacity. If resources are insufficient, build in stages or split the system into cooperating stations; do not assume all hardware can connect simultaneously.
:::

:::caution
Verify available connections, bus addresses, and power capacity before adding modules gradually. Keep the water experiment area isolated from the controller and power supply, and check priorities for shared actuators.
:::

## Testing

After completing the program, test it in the following order:

1. **Startup check**: Connect the device and download the verified program. Check that the initial state and screen labels are correct.
2. **Trigger temperature, light, and card conditions individually**: Each subsystem runs independently, with states matching actions.
3. **Simulate intense light and high temperature together**: Both the shade and fan respond, and the screen continues updating.
4. **Scan a card during a warning**: Shared actuators follow the agreed priorities and are not overridden by ordinary events.
5. **Change the environment during uploads and briefly disconnect the network**: Local decisions continue, and the platform receives new data after recovery.
6. **Restart the model**: Counts and states behave as specified, with no unintended continuous mechanism movement.
7. **Retest and record**: Change one condition, repeat the test, and record inputs, outputs, and results; stop the actuators when finished.

If operation becomes unstable after adding modules, check bus addresses, library compatibility, port allocation, and power loads individually, then retest in batches.

If alarms cannot respond promptly during movement, reduce long blocking waits and divide actions into states and timed steps.

If one motor moves back and forth, check whether several subtasks control it simultaneously; coordinate the output and define priorities.

## Project Demonstration

When the program is running, the Urban Climate Safety Station can demonstrate the following results:

- Each subsystem runs independently, with states matching actions.
- Both the shade and fan respond, and the screen continues updating.
- Shared actuators follow the agreed priorities and are not overridden by ordinary events.
- Local decisions continue, and the platform receives new data after recovery.
- Counts and states behave as specified, with no unintended continuous mechanism movement.

<!-- Image placeholder: project in operation or animated demonstration -->
<!-- Suggested filename: ./images/urban-climate-safety-station-demo.gif -->

## Reflection and Sharing

Ask each group to present its work and discuss the following questions:

1. What data did you record? Were the test conditions kept consistent?
2. What decision rules or data processing methods did this project use?
3. What structural or programming problems occurred during testing? How did you solve them?
4. Which test best demonstrates that the project performs its intended function?
5. What would you most like to improve next, and why?

## Extension Challenges

### Challenge 1: Record State Change Times

Record when warning, fan, shade, and access states change. Use the log to explain the order in which the system responds to input changes.

### Challenge 2: Design a Combined Test Checklist

List single-condition, simultaneous-trigger, recovery, and exception scenarios. Write the expected output for each, then verify them one by one.

### Challenge 3: Add Error Recovery

Design separate responses for reading failures, network disconnection, and restart. Test whether recovery obtains valid readings again and restores the correct state.

### Challenge 4: Optimize Task Update Intervals

Adjust sampling, display, and upload intervals separately. Compare response speed and check whether any task blocks others.

### Challenge 5: Perform Cross-Group Acceptance Checks

Exchange projects and test checklists between groups and evaluate them using the same criteria. Record functional, connection, and power limitations, and suggest improvements.

## Further Learning

### Why Are Task Priorities Needed?

Several tasks may request control of the same mechanism simultaneously. Defining priorities before coordinating outputs prevents a card action from overriding a warning or a motor from repeatedly receiving opposing commands.

### What Are States and Timing?

A state records what the system is currently doing, while timing determines when to take the next step. Breaking long actions into state changes reduces the impact of waiting on other sampling and reminder tasks.

### Why Test System Integration Gradually?

As module count increases, there may be too few connections, bus address conflicts, unstable power, or blocking code. Testing individual modules first and combining them gradually helps locate problems.
