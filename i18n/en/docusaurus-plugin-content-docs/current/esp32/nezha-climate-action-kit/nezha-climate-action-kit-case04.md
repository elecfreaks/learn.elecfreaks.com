---
title: IoT Urban Microclimate Dashboard
sidebar_label: "Case 04: IoT Urban Microclimate Dashboard"
sidebar_position: 5
---


# Case 04: IoT Urban Microclimate Dashboard

## Project Introduction

How can environmental changes at different school locations be viewed from another device? This project uploads light, sound, and orientation-related data collected by **Nezha ESP32** to the SmartIoT platform over a wireless network. Students connect local displays with remote graphs and learn the complete process of data collection, transmission, and presentation.

Through building, programming, and testing, students connect their observations with the model's displays or actions and learn to explain phenomena using data.

This project combines classroom observation with engineering practice, encouraging students to consider how technology can improve school and urban environments.

<!-- Image placeholder: finished IoT Urban Microclimate Dashboard model -->
<!-- Suggested filename: ./images/iot-urban-microenvironment-dashboard.png -->

## Preparation

| Item | Quantity | Purpose |
| --- | ---: | --- |
| Climate Action Kit | 1 set | Build the IoT Urban Microclimate Dashboard model |
| Nezha ESP32 | 1 | Run the program, read data, and display information |
| SmartIoT account and corresponding project / device configuration | As configured | Carry out the sensing, control, or networking tasks for this project |
| RJ11 cables | As needed | Connect compatible external modules; onboard-only functions require no external connections |
| Computer and data cable | 1 set | Write, download, and debug the program |

<!-- Image placeholder: preparation / kit and main modules -->
<!-- Suggested filename: ./images/iot-urban-microenvironment-dashboard-materials.png -->

## Learning Objectives

After completing this project, students will be able to:

1. Distinguish the roles of sensors, the local controller, the wireless network, and the platform.
2. Configure clear field names and unit descriptions for different data types.
3. Observe time series and identify missing readings, outliers, and environmental changes.
4. Adjust parameters based on test results and follow the engineering process of design, programming, testing, and improvement.

## Lesson Introduction

Present this task: if a classroom monitor is placed by the window, can the teacher view its changes on a computer? Ask students to draw the data path from sensor to dashboard and predict what happens if the network disconnects.

In this lesson, we will act as urban environment designers, build the IoT Urban Microclimate Dashboard, and test our design through real observations.

## Explore and Discuss

Before building, discuss the following questions in groups:

1. How do data on the platform correspond to readings on the screen?
2. Does losing the network connection mean the sensors stop working?
3. What problems can uploading too frequently cause?
4. How will you record the test conditions to show whether the results meet your expectations?
5. What other factors would you need to consider if this model were used in a real environment?

## Building Steps

Follow the building instructions to construct the base, controller mount, and functional structures of the IoT Urban Microclimate Dashboard.

Pay particular attention to the following during construction:

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

The program consists of two parts: startup initialization and the main loop.

:::note
The following is a suggested outline of the teaching logic. The actual program for this project is not currently provided. Port numbers, block names, and control parameters must be verified on the physical device; program screenshot locations are temporarily indicated by clearly labeled placeholders. The screen layout below is also a suggestion.
:::

### 1. Startup Initialization

<!-- Image placeholder: startup initialization program screenshot -->
<!-- Suggested filename: ./images/iot-urban-microenvironment-dashboard-program-init.png -->

At startup, the program performs the following actions:

1. Create a project or device on the platform and configure fields and the dashboard following the actual tutorial.
2. Initialize the screen and data variables so that states from the previous run are not reused.
3. Show data labels and the initial operating status at the designated screen positions.

Suggested controller screen layout:

| Screen row | Display content |
| ---: | --- |
| Row 1 | Environmental data |
| Row 2 | Sampled light, sound, and orientation values |
| Row 3 | Operating status |
| Row 4 | Online / Offline |

### 2. Repeated Sensing and Control

<!-- Image placeholder: main sensing and control loop screenshot -->
<!-- Suggested filename: ./images/iot-urban-microenvironment-dashboard-program-main.png -->

The system continuously performs the following tasks in the `forever` loop.

#### Prepare the Platform

- Create a project or device on the platform and configure fields and the dashboard following the actual tutorial.

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

## Testing

After completing the program, test it in the following order:

1. **Startup check**: Connect the device and download the verified program. Check that the initial state and screen labels are correct.
2. **Change the lighting after connecting successfully**: Local values change, followed by corresponding platform records.
3. **Compare the three fields**: Names, data types, and meanings match without misalignment.
4. **Temporarily disconnect and restore the network**: The local display continues, offline status is indicated, and uploads resume after reconnection.
5. **Retest and record**: Change one condition, repeat the test, and record the inputs, outputs, and results.

If local values are available but the platform has no records, check the network, authentication, selected device or project, and transmission interval.

If graphs are abnormal or fields are confused, upload known data one field at a time to check the mapping, then verify times and data types.

## Project Demonstration

When the program is running, the IoT Urban Microclimate Dashboard can demonstrate the following results:

- Local values change, followed by corresponding platform records.
- Names, data types, and meanings match without misalignment.
- The local display continues, offline status is indicated, and uploads resume after reconnection.

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
