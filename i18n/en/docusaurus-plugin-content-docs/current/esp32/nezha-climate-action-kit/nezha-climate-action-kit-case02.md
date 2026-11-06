---
title: Urban Noise Monitor
sidebar_label: "Case 02: Urban Noise Monitor"
sidebar_position: 3
---

# Case 02: Urban Noise Monitor

## Project Introduction

Conversations, footsteps, and vehicle sounds around a school change over time. This project uses the onboard microphone of **Nezha ESP32** to read relative sound levels, display sound status on screen, and provide a reminder when a threshold is exceeded. By collecting and comparing data and adjusting thresholds, students learn about sound sensing and conditional logic.

Students build, program, and test a model, then use their observations and recorded data to explain how it works. The project connects classroom science with engineering design and invites students to suggest improvements for their school or community.

<!-- Image placeholder: finished Urban Noise Monitor model -->
<!-- Suggested filename: ./images/urban-sound-observer.png -->

## Materials and Preparation

| Item | Quantity | Purpose |
| --- | ---: | --- |
| Climate Action Kit | 1 set | Build the Urban Noise Monitor model |
| Nezha ESP32 | 1 | Run the program, read data, and display information |
| Optional onboard RGB LEDs or speaker, if supported by the blocks | As available | Give a visual or audible reminder |
| RJ11 cables | As needed | Connect compatible external modules; onboard-only functions require no external connections |
| Computer and data cable | 1 set | Write, download, and debug the program |

<!-- Image placeholder: preparation / kit and main modules -->
<!-- Suggested filename: ./images/urban-sound-observer-materials.png -->

## Learning Objectives

**Threshold:** a chosen value that separates two states, such as normal sound and a reminder to speak softly.

After completing this project, students will be able to:

1. Read sound level data and distinguish relative readings from sound pressure level.
2. Use conditional logic to classify readings into different states.
3. Select an appropriate reminder method and assess its impact on the surroundings.
4. Use test results to improve the design through a cycle of designing, programming, testing, and improving.

## Lesson Starter

Ask students to recall how sounds differ between a library and a playground. Which settings need quiet? Could they design a sign that reminds people to speak softly? Discuss reminder methods first, then use measurements to determine a threshold.

In this lesson, we will act as urban environment designers, build the Urban Noise Monitor, and test our design through real observations.

**Project connection:** Use the same read–compare–display pattern from [Case 01](./nezha-climate-action-kit-case01.md). Later, send your sound readings to the [IoT dashboard](./nezha-climate-action-kit-case04.md).

## Explore and Discuss

Before building, discuss the following questions in groups:

1. Will the same sound produce identical readings at near and far distances?
2. Why should sensor readings not be labeled directly as decibels?
3. Could the microphone detect the speaker's own reminder sound?
4. What conditions and results will you record to check whether your design works as expected?
5. What else would need to be tested before a design like this could be used outside the classroom?

## Build the Model

Follow the building instructions to construct the base, controller mount, and functional structures of the Urban Noise Monitor.

Check the following as you build:

- Build a reminder sign and keep the microphone openings unobstructed.
- Place the model on a stable surface to avoid interference from rubbing against the table.
- If using audible reminders, start at a low volume and keep the speaker away from the microphone.

<!-- Image placeholder: building steps; insert images for Step 1, Step 2, and so on -->
<!-- Suggested filename: ./images/urban-sound-observer-build-01.png and so on -->

## Hardware Connections

Turn off the power, then connect the modules as shown below:

| Module | Connection | Function |
| --- | --- | --- |
| Onboard microphone | Onboard; no external connection required | Sound level input |
| Onboard screen | Onboard; no external connection required | Display readings and status |
| Onboard RGB LEDs or speaker | Onboard; block support to be confirmed | Optional status feedback |

:::tip
Onboard functions require no external wiring. For external modules, confirm compatible ports against the final program; for IIC modules, also check the bus addresses. Align connectors correctly, and do not connect or disconnect modules while the device is powered on.
:::

<!-- Image placeholder: hardware wiring diagram -->
<!-- Suggested filename: ./images/urban-sound-observer-wiring.png -->

## Program Design

Plan the program in two parts: setup steps that run once at startup, and a main loop that repeats while the model is running.

:::note
This section is a planning guide, not a tested program. A working program is not yet provided for this project. Before classroom use, verify the ports, block names, and control settings on the actual hardware. The suggested screen layout and image placeholders are guides only; the placeholders contain no executable program.
:::

### 1. Set Up at Startup

<!-- Image placeholder: startup initialization program screenshot -->
<!-- Suggested filename: ./images/urban-sound-observer-program-init.png -->

Before writing the program, take readings in quiet and normal-conversation conditions. Choose a threshold that separates the two sets of readings.

At startup, the program performs the following actions:

1. Set the sound threshold using your test results.
2. Set the initial values of variables and states, and prepare the screen for a new run.
3. Show each data label and the starting status in a fixed place on the screen.

Suggested controller screen layout:

| Screen row | Display content |
| ---: | --- |
| Row 1 | Sound value |
| Row 2 | Relative sound level |
| Row 3 | Operating status |
| Row 4 | Normal / Please speak softly |

### 2. Read, Decide, and Respond

<!-- Image placeholder: main sensing and control loop screenshot -->
<!-- Suggested filename: ./images/urban-sound-observer-program-main.png -->

Repeat the following tasks in the `forever` loop:

#### Repeated Decisions

- Read the sound value; enter the reminder state if it exceeds the threshold, otherwise enter the normal state.

#### Status Feedback

- Display the reading and status; prioritize icons or lights for feedback.

### 3. Key Parameters

| Parameter | Example value | Meaning | Adjustment guidance |
| --- | ---: | --- | --- |
| Sound threshold | To be verified on the device | No universal fixed value; do not use unverified decibel units | Measure before choosing a threshold |
| Reminder interval | To be verified on the device | Add a cooldown for audible reminders to reduce self-triggering | Adjust based on classroom results |

:::note
The microphone detects sound changes. The program reads the sound level value provided by the current programming environment and compares it with a threshold. It displays a reminder above the threshold and a normal status otherwise. This project does not assume that dual microphones support finding the direction of a sound source, and it does not label uncalibrated values as dB.
:::

## Test and Troubleshoot

After completing the program, test it in the following order:

1. **Startup check**: Connect the device and download the verified program. Check that the initial state and screen labels are correct.
2. **Stay quiet, then talk normally**: Readings change, and the status changes accordingly when the threshold is appropriate.
3. **Change the distance to the sound source**: Record how distance affects readings.
4. **Make a continuous sound, then return to quiet**: The reminder clears without repeatedly triggering itself.
5. **Retest and record**: Change one condition, repeat the test, and record the inputs, outputs, and results.

If the device stays in the reminder state, measure background sound again and adjust the threshold; check whether the reminder sound is causing feedback.

If tapping the table produces abnormal readings, isolate the model from the vibration source and test with normal conversation instead.

## Project Demonstration

With a verified program running, the Urban Noise Monitor can demonstrate the following results:

- The screen shows a relative sound reading and a normal or reminder status.
- Changing the distance to the same sound source produces readings that students can compare.
- When the room becomes quiet again, the reminder clears without the device triggering itself.

<!-- Image placeholder: project in operation or animated demonstration -->
<!-- Suggested filename: ./images/urban-sound-observer-demo.gif -->

## Reflection and Sharing

Ask each group to present its work and discuss the following questions:

1. What data did you record? Were the test conditions kept consistent?
2. What decision rules or data processing methods did this project use?
3. What structural or programming problems occurred during testing? How did you solve them?
4. Which test best demonstrates that the project performs its intended function?
5. What would you most like to improve next, and why?

## Extension Challenges

### Challenge 1: Wait for Sound to Stay Above the Threshold

Display a reminder only after sound remains above the threshold for a period of time. Compare the number of false triggers caused by short sounds before and after this change.

### Challenge 2: Count Reminders

Create a reminder counter and increment it once each time the device changes from normal to reminder status. Discuss what the count can and cannot indicate.

### Challenge 3: Show Sound Levels with Colors

Define several sound levels and indicate them with different colors or icons. Specify each level's range and test the boundaries.

### Challenge 4: Compare Sound Source Distances

Keep the way sound is produced similar while changing the distance to the microphone. Compare readings and discuss how background sound affects results.

### Challenge 5: Improve the Reminder Method

Compare icons, lights, and audible reminders. Observe how effectively each method reminds users and how the device's own sound causes interference.

## Further Learning

### Where Does Sound Come From?

Vibrating objects can produce sound. The microphone converts sound changes into electrical signals, and the program reads sound level data provided by the extension library.

### Why Not Label Readings Directly as Decibels?

Sound pressure level measurements require a defined reference, sample processing, and calibration. Classroom sound readings can be used to compare changes, but should not be treated directly as professional noise measurements.

### What Is Feedback Interference?

The microphone may detect the device's own reminder sound. Using icons or lights, or adding intervals between audible reminders, can reduce continuous triggering.
