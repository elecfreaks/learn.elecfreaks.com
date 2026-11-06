---
title: Urban Climate Safety Station
sidebar_label: "Case 12: Urban Climate Safety Station"
sidebar_position: 13
---

# Case 12: Urban Climate Safety Station

## Project Introduction

How can one model coordinate responses to heat, intense sunlight, and flooding at the same time? The Urban Climate Safety Station integrates temperature and humidity, water level, light, air pressure, orientation, and RFID interactions. Coordinated by **Nezha ESP32**, it provides displays, fan cooling, shading, and flood warnings, and can upload data to SmartIoT. Students apply knowledge from earlier projects to design a system whose behavior can be explained and tested.

Students build, program, and test a model, then use their observations and recorded data to explain how it works. The project connects classroom science with engineering design and invites students to suggest improvements for their school or community.

<!-- Image placeholder: finished Urban Climate Safety Station model -->
<!-- Suggested filename: ./images/urban-climate-safety-station.png -->

## Materials and Preparation

| Item | Quantity | Purpose |
| --- | ---: | --- |
| Climate Action Kit | 1 set | Build the Urban Climate Safety Station model |
| Nezha ESP32 | 1 | Run the program, read data, and display information |
| Temperature and humidity, water level, air pressure, and RFID modules with compatible cards | As required by the tested design | Collect environmental readings and identify classroom cards |
| Fan, shade and warning mechanisms, and matching motors | As required by the tested design | Provide airflow, shading, and a visible warning |
| Optional compatible wireless network and SmartIoT project | As arranged by the teacher | Record and display data remotely |
| RJ11 cables | As needed | Connect compatible external modules; onboard-only functions require no external connections |
| Computer and data cable | 1 set | Write, download, and debug the program |

<!-- Image placeholder: preparation / kit and main modules -->
<!-- Suggested filename: ./images/urban-climate-safety-station-materials.png -->

## Learning Objectives

**Priority:** a rule for deciding which task takes control when two tasks request different actions from the same device.

After completing this project, students will be able to:

1. Map the relationships between multiple inputs, decision rules, and actuator outputs.
2. Set priorities for shared actuators to prevent conflicting commands.
3. Coordinate multiple tasks using states and timing.
4. Create a combined test plan and explain system performance using records.
5. Use test results to improve the design through a cycle of designing, programming, testing, and improving.

## Lesson Starter

Ask each group to act as an urban facilities design team. One station may face high temperatures, intense light, flooding, and card requests simultaneously. List the required tasks, discuss their priorities, and draw an input–rule–output table for the design.

In this lesson, we will act as urban environment designers, build the Urban Climate Safety Station, and test our design through real observations.

**Project connection:** Build on [the Smart Low-Carbon Bus Stop](./nezha-climate-action-kit-case10.md), then add [flood warnings](./nezha-climate-action-kit-case08.md), [tilt warnings](./nezha-climate-action-kit-case03.md), and [weather records](./nezha-climate-action-kit-case09.md) in stages. Use only hardware combinations that you have checked.

## Explore and Discuss

Before building, discuss the following questions in groups:

1. If a flood warning and a card-triggered gate-opening request occur together, which has priority?
2. Can other sensors still update promptly while one action waits for several seconds?
3. Can all modules be connected simultaneously and powered reliably by the current supply?
4. What conditions and results will you record to check whether your design works as expected?
5. What else would need to be tested before a design like this could be used outside the classroom?

## Build the Model

Follow the building instructions to construct the base, controller mount, and functional structures of the Urban Climate Safety Station.

Check the following as you build:

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

Plan the program in two parts: setup steps that run once at startup, and a main loop that repeats while the model is running.

:::note
This section is a planning guide, not a tested program. A working program is not yet provided for this project. Before classroom use, verify the ports, block names, and control settings on the actual hardware. The suggested screen layout and image placeholders are guides only; the placeholders contain no executable program.
:::

### 1. Set Up at Startup

<!-- Image placeholder: startup initialization program screenshot -->
<!-- Suggested filename: ./images/urban-climate-safety-station-program-init.png -->

Before coding, make a table of each task's inputs, thresholds, states, outputs, and update interval. Agree on which task has priority if an output is shared.

At startup, the program performs the following actions:

1. Initialize the sensors, timers, counters, and starting states using the tested settings from earlier projects.
2. Set the initial values of variables and states, and prepare the screen for a new run.
3. Show each data label and the starting status in a fixed place on the screen.

Suggested controller screen layout:

| Screen row | Display content |
| ---: | --- |
| Row 1 | System status |
| Row 2 | Sensor readings and validity |
| Row 3 | Operating status |
| Row 4 | Warning / Access / Actuator status |

### 2. Read, Decide, and Respond

<!-- Image placeholder: main sensing and control loop screenshot -->
<!-- Suggested filename: ./images/urban-climate-safety-station-program-main.png -->

Repeat the following tasks in the `forever` loop:

#### Update Each State

- Track fan, shade, flooding, orientation, and card states separately, rather than letting tasks compete directly for the same actuator.

#### Apply the Priority Rules

- If warnings and card access share a gate, the suggested rule is to prioritize warnings and suspend access; if mechanisms are separate, define each one's meaning and movement range clearly.

#### Coordinate the Loop

- Use timing to update sampling, movement, and upload tasks; avoid long waits that block other decisions.

#### Handle Exceptions

- Check for failed readings and network disconnection. Apply the messages and output states agreed during design, and use the startup routine to restore the agreed states after a restart.

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

## Test and Troubleshoot

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

With a verified program running, the Urban Climate Safety Station can demonstrate the following results:

- Each tested subsystem responds to its own input with the expected screen status and action.
- The fan and shade respond together while the display keeps updating.
- During a warning, a shared gate follows the agreed priority instead of opening for an ordinary card request.
- Local decisions continue while offline, and new uploads resume after reconnection.
- After restart, counts and states follow the agreed design, without unintended continuous movement.

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

List tests for one input at a time, several inputs together, recovery, and faults. Write the expected output for each, then verify them one by one.

### Challenge 3: Add Error Recovery

Design separate responses for reading failures, network disconnection, and restart. Test whether recovery obtains valid readings again and restores the correct state.

### Challenge 4: Optimize Task Update Intervals

Adjust sampling, display, and upload intervals separately. Compare response speed and check whether any task blocks others.

### Challenge 5: Test Another Group's Design

Exchange projects and test checklists between groups and evaluate them using the same criteria. Record functional, connection, and power limitations, and suggest improvements.

## Further Learning

### Why Are Task Priorities Needed?

Several tasks may request control of the same mechanism simultaneously. Defining priorities before coordinating outputs prevents a card action from overriding a warning or a motor from repeatedly receiving opposing commands.

### What Are States and Timing?

A state records what the system is currently doing, while timing determines when to take the next step. Breaking long actions into state changes reduces the impact of waiting on other sampling and reminder tasks.

### Why Test System Integration Gradually?

As module count increases, there may be too few connections, bus address conflicts, unstable power, or blocking code. Testing individual modules first and combining them gradually helps locate problems.
