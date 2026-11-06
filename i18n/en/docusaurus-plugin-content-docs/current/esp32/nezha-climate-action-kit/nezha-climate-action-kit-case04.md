---
title: IoT Urban Microclimate Dashboard
sidebar_label: "Case 04: IoT Urban Microclimate Dashboard"
sidebar_position: 5
---

# Case 04: IoT Urban Microclimate Dashboard

## Project Introduction

How can environmental changes at different school locations be viewed from another device? This project uploads light, sound, and orientation-related data collected by **Nezha ESP32** to the SmartIoT platform over a wireless network. Students connect local displays with remote graphs and learn the complete process of data collection, transmission, and presentation.

Students build, program, and test a model, then use their observations and recorded data to explain how it works. The project connects classroom science with engineering design and invites students to suggest improvements for their school or community.

<!-- Image placeholder: finished IoT Urban Microclimate Dashboard model -->
<!-- Suggested filename: ./images/iot-urban-microenvironment-dashboard.png -->

## Materials and Preparation

| Item | Quantity | Purpose |
| --- | ---: | --- |
| Climate Action Kit | 1 set | Build the IoT Urban Microclimate Dashboard model |
| Nezha ESP32 | 1 | Run the program, read data, and display information |
| SmartIoT account with a configured project or device | As arranged by the teacher | Receive readings and display them on a dashboard |
| RJ11 cables | As needed | Connect compatible external modules; onboard-only functions require no external connections |
| Computer and data cable | 1 set | Write, download, and debug the program |

<!-- Image placeholder: preparation / kit and main modules -->
<!-- Suggested filename: ./images/iot-urban-microenvironment-dashboard-materials.png -->

## Learning Objectives

**IoT (Internet of Things):** devices exchanging data over a network. A dashboard displays those readings so you can explore changes over time.

After completing this project, students will be able to:

1. Distinguish the roles of sensors, the local controller, the wireless network, and the platform.
2. Configure clear field names and unit descriptions for different data types.
3. Read a graph over time and identify missing readings, unusual values, and environmental changes.
4. Use test results to improve the design through a cycle of designing, programming, testing, and improving.

## Lesson Starter

Present this task: if a classroom monitor is placed by the window, can the teacher view its changes on a computer? Ask students to draw the data path from sensor to dashboard and predict what happens if the network disconnects.

In this lesson, we will act as urban environment designers, build the IoT Urban Microclimate Dashboard, and test our design through real observations.

**Project connection:** Bring together the light, sound, and orientation readings from Cases [01](./nezha-climate-action-kit-case01.md), [02](./nezha-climate-action-kit-case02.md), and [03](./nezha-climate-action-kit-case03.md). Reuse this upload process in [the weather logger](./nezha-climate-action-kit-case09.md).

## Explore and Discuss

Before building, discuss the following questions in groups:

1. How does each value on the dashboard match a reading on the controller screen?
2. Does losing the network connection mean the sensors stop working?
3. What problems can uploading too frequently cause?
4. What conditions and results will you record to check whether your design works as expected?
5. What else would need to be tested before a design like this could be used outside the classroom?

## Build the Model

Follow the building instructions to construct the base, controller mount, and functional structures of the IoT Urban Microclimate Dashboard.

Check the following as you build:

- Build a fixed base that is easy to observe, keeping sensors unobstructed.
- Choose a location with good network coverage that the teacher can manage easily.
- Label the device name and sampling location to avoid mixing up groups' data.

<!-- Image placeholder: building steps; insert images for Step 1, Step 2, and so on -->
<!-- Suggested filename: ./images/iot-urban-microenvironment-dashboard-build-01.png and so on -->

## Hardware Connections

Turn off the power, then connect the modules as shown below:

| Module | Connection | Function |
| --- | --- | --- |
| Onboard light sensor, microphone, and orientation sensor | Onboard; field support to be confirmed | Collect environmental and orientation data |
| Wi-Fi | Network settings provided by the teacher | Communicate with the platform |
| SmartIoT data fields | Field mapping and authentication to be confirmed for the actual project | Store and display uploaded values |

:::tip
Onboard functions require no external wiring. For external modules, confirm compatible ports against the final program; for IIC modules, also check the bus addresses. Align connectors correctly, and do not connect or disconnect modules while the device is powered on.
:::

<!-- Image placeholder: hardware wiring diagram -->
<!-- Suggested filename: ./images/iot-urban-microenvironment-dashboard-wiring.png -->

## Program Design

Plan the program in two parts: setup steps that run once at startup, and a main loop that repeats while the model is running.

:::note
This section is a planning guide, not a tested program. A working program is not yet provided for this project. Before classroom use, verify the ports, block names, and control settings on the actual hardware. The suggested screen layout and image placeholders are guides only; the placeholders contain no executable program.
:::

### 1. Set Up at Startup

<!-- Image placeholder: startup initialization program screenshot -->
<!-- Suggested filename: ./images/iot-urban-microenvironment-dashboard-program-init.png -->

Before starting the program, use the SmartIoT tutorial to create a project or device, set up data fields, and prepare the dashboard. Ask the teacher to provide the network and account settings.

At startup, the program performs the following actions:

1. Load the connection and field settings for the prepared SmartIoT project.
2. Set the initial values of variables and states, and prepare the screen for a new run.
3. Show each data label and the starting status in a fixed place on the screen.

Suggested controller screen layout:

| Screen row | Display content |
| ---: | --- |
| Row 1 | Environmental data |
| Row 2 | Sampled light, sound, and orientation values |
| Row 3 | Operating status |
| Row 4 | Online / Offline |

### 2. Read, Decide, and Respond

<!-- Image placeholder: main sensing and control loop screenshot -->
<!-- Suggested filename: ./images/iot-urban-microenvironment-dashboard-program-main.png -->

Repeat the following tasks in the `forever` loop:

#### Use the Prepared Data Fields

- Send each reading to its matching field in the project prepared before the loop starts. Keep the same field names and units throughout the test.

#### Connect to the Network

- Configure connection parameters in the program and display connection status; do not expose passwords or keys in public screenshots.

#### Collect and Upload

- Sample each data source and display values locally; send data when the upload interval has elapsed and the network is available.

#### Handle Exceptions

- Continue local sampling and display while offline, indicate the offline status, and resume uploads after reconnection.

### 3. Key Parameters

| Parameter | Example value | Meaning | Adjustment guidance |
| --- | ---: | --- | --- |
| Local sampling interval | To be verified on the device | May differ from the upload interval | Set according to observation needs |
| Upload interval | To be verified on the device | Start with a lower frequency in class | Follow the platform's rate limits |
| Fields and units | To be verified on the device | Do not label relative readings as lux or dB | Match each platform field explicitly |

:::note
The controller collects data periodically, maps it to the configured platform fields, and sends it. The platform displays records by reception time. Use relative readings for light and sound, and specify the chosen axis and output meaning for orientation fields. Follow the actual SmartIoT tutorial and current extension library for account creation, connection methods, authentication parameters, and transmission rate limits.
:::

## Test and Troubleshoot

After completing the program, test it in the following order:

1. **Startup check**: Connect the device and download the verified program. Check that the initial state and screen labels are correct.
2. **Change the lighting after connecting successfully**: Local values change, followed by corresponding platform records.
3. **Compare the three fields**: Each field has the correct name, data type, and sensor reading.
4. **Temporarily disconnect and restore the network**: The local display continues, offline status is indicated, and uploads resume after reconnection.
5. **Retest and record**: Change one condition, repeat the test, and record the inputs, outputs, and results.

If local values are available but the platform has no records, check the network, authentication, selected device or project, and transmission interval.

If a graph looks unexpected or shows the wrong sensor, upload known test values to one field at a time. Check the field names, times, and data types.

## Project Demonstration

With a verified program running, the IoT Urban Microclimate Dashboard can demonstrate the following results:

- Changing the light produces a local reading followed by a corresponding record on the dashboard.
- Each dashboard field shows the correct sensor value and label.
- During a network interruption, the local display continues and shows an offline status. New uploads resume after reconnection.

<!-- Image placeholder: project in operation or animated demonstration -->
<!-- Suggested filename: ./images/iot-urban-microenvironment-dashboard-demo.gif -->

## Reflection and Sharing

Ask each group to present its work and discuss the following questions:

1. What data did you record? Were the test conditions kept consistent?
2. What decision rules or data processing methods did this project use?
3. What structural or programming problems occurred during testing? How did you solve them?
4. Which test best demonstrates that the project performs its intended function?
5. What would you most like to improve next, and why?

## Extension Challenges

### Challenge 1: Add Location IDs

Add a location ID to each uploaded record. Update it when changing locations and confirm that the platform can distinguish each group's data.

### Challenge 2: Record Offline Status

Display network status and record upload failures. Temporarily disconnect the network and check whether local sampling continues.

### Challenge 3: Compare Upload Intervals

Run experiments of equal duration with different upload intervals. Compare record counts, graph detail, and platform limits.

### Challenge 4: Add Trend Descriptions

Observe data over a period of time and describe rises, falls, or fluctuations in words. Relate these observations to real environmental changes.

### Challenge 5: Design a Shared Dashboard

Assign distinguishable devices or data fields to different groups. Show only classroom data on the shared dashboard and avoid exposing network credentials.

## Further Learning

### What Is the Internet of Things?

The Internet of Things lets devices exchange data over a network. Here, sensors take samples, Nezha ESP32 processes the data, and the platform displays it, extending local observation to remote viewing.

### Are Upload and Sampling Intervals the Same?

A device can sample frequently while uploading less often. Set the two intervals separately, respect platform limits, and avoid unnecessary repeated transmissions.

### Why Record Time and Data Status?

The same value may have different meanings at different times. Recording time and whether data is valid, missing, or offline helps interpret graphs correctly and avoids treating missing data as zero.
