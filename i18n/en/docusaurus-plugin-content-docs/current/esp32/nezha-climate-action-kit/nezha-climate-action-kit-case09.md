---
title: Urban Weather Trend Logger
sidebar_label: "Case 09: Urban Weather Trend Logger"
sidebar_position: 10
---


# Case 09: Urban Weather Trend Logger

## Project Introduction

How does air pressure change before and after weather changes? This project samples an air pressure sensor at regular intervals and uploads data to the SmartIoT platform to form a graph. By recording continuously at the same location and observing actual weather, students learn to compare time series and offer evidence-based explanations.

Through building, programming, and testing, students connect their observations with the model's displays or actions and learn to explain phenomena using data.

This project combines classroom observation with engineering practice, encouraging students to consider how technology can improve school and urban environments.

<!-- Image placeholder: finished Urban Weather Trend Logger model -->
<!-- Suggested filename: ./images/weather-trend-recorder.png -->

## Preparation

| Item | Quantity | Purpose |
| --- | ---: | --- |
| Climate Action Kit | 1 set | Build the Urban Weather Trend Logger model |
| Nezha ESP32 | 1 | Run the program, read data, and display information |
| Kit air pressure sensor | As configured | Carry out the sensing, control, or networking tasks for this project |
| Compatible wireless network and SmartIoT configuration | As configured | Carry out the sensing, control, or networking tasks for this project |
| RJ11 cables | As needed | Connect compatible external modules; onboard-only functions require no external connections |
| Computer and data cable | 1 set | Write, download, and debug the program |

<!-- Image placeholder: preparation / kit and main modules -->
<!-- Suggested filename: ./images/weather-trend-recorder-materials.png -->

## Learning Objectives

After completing this project, students will be able to:

1. Read air pressure data and confirm its units.
2. Build a continuous record using fixed intervals.
3. Compare trends with weather observations and distinguish correlation from a definite forecast.
4. Adjust parameters based on test results and follow the engineering process of design, programming, testing, and improvement.

## Lesson Introduction

Ask students to record today's cloud cover, rainfall, and wind, then ask: can one pressure reading tell us whether it will rain tomorrow? Continuous recording shows that trends offer more information than single points, but still cannot replace professional weather forecasts.

In this lesson, we will act as urban environment designers, build the Urban Weather Trend Logger, and test our design through real observations.

## Explore and Discuss

Before building, discuss the following questions in groups:

1. Why should data from different floors or elevations not be compared directly?
2. Does rising pressure always mean sunny weather?
3. Which conclusions might be affected by a gap in the data?
4. How will you record the test conditions to show whether the results meet your expectations?
5. What other factors would you need to consider if this model were used in a real environment?

## Building Steps

Follow the building instructions to construct the base, controller mount, and functional structures of the Urban Weather Trend Logger.

Pay particular attention to the following during construction:

- Mount the sensor in a fixed position and keep its sensing opening unobstructed.
- Avoid additional effects from direct sunlight, air vents, local heat sources, and movement.
- Record the location and height, keeping them unchanged as far as possible during continuous observation.

<!-- Image placeholder: building steps; insert images for Step 1, Step 2, and so on -->
<!-- Suggested filename: ./images/weather-trend-recorder-build-01.png and so on -->

## Hardware Connections

Turn off the power, then connect the modules as shown below:

| Module | Connection | Function |
| --- | --- | --- |
| Air pressure sensor | Connect according to module requirements; connection to be confirmed | Read atmospheric pressure |
| Wi-Fi / SmartIoT | Fields, authentication, and upload frequency to be configured | Upload and display a time series |

:::tip
Onboard functions require no external wiring. For external modules, confirm compatible ports against the final program; for IIC modules, also check the bus addresses. Align connectors correctly, and do not connect or disconnect modules while the device is powered on.
:::

<!-- Image placeholder: hardware wiring diagram -->
<!-- Suggested filename: ./images/weather-trend-recorder-wiring.png -->

## Program Design

The program consists of two parts: startup initialization and the main loop.

:::note
The following is a suggested outline of the teaching logic. The actual program for this project is not currently provided. Port numbers, block names, and control parameters must be verified on the physical device; program screenshot locations are temporarily indicated by clearly labeled placeholders. The screen layout below is also a suggestion.
:::

### 1. Startup Initialization

<!-- Image placeholder: startup initialization program screenshot -->
<!-- Suggested filename: ./images/weather-trend-recorder-program-init.png -->

At startup, the program performs the following actions:

1. Confirm the sensor's output unit and configure the platform's pressure field.
2. Initialize the screen and data variables so that states from the previous run are not reused.
3. Show data labels and the initial operating status at the designated screen positions.

Suggested controller screen layout:

| Screen row | Display content |
| ---: | --- |
| Row 1 | Air pressure |
| Row 2 | Pressure reading with units |
| Row 3 | Operating status |
| Row 4 | Recording / Data error |

### 2. Repeated Sensing and Control

<!-- Image placeholder: main sensing and control loop screenshot -->
<!-- Suggested filename: ./images/weather-trend-recorder-program-main.png -->

The system continuously performs the following tasks in the `forever` loop.

#### Record at Regular Intervals

- Read pressure at fixed intervals, display it locally, and upload it.

#### Compare Changes

- View the graph using consistent units and keep records alongside time and weather observations.

### 3. Key Parameters

| Parameter | Example value | Meaning | Adjustment guidance |
| --- | ---: | --- | --- |
| Pressure unit | To be verified on the device | Confirm the original unit before any conversion | Pa or hPa, depending on the actual output |
| Recording interval | To be verified on the device | Short classroom tests and long-term observations may use different intervals | Set according to platform limits and observation duration |
| Observation location | To be verified on the device | Annotate changes after moving the device | Keep location and height fixed |

:::note
An air pressure sensor measures pressure at its location. With reasonably consistent placement and sampling methods, a continuous record can reveal trends. Units may be Pa or hPa; check the module and blocks. 1 hPa = 100 Pa. Do not refer to uncorrected measurements directly as sea-level pressure.
:::

## Testing

After completing the program, test it in the following order:

1. **Startup check**: Connect the device and download the verified program. Check that the initial state and screen labels are correct.
2. **Read and verify units**: The local display and platform fields use consistent units.
3. **Record several consecutive time points**: The graph contains continuous time information, and missing readings are not disguised as zero.
4. **Analyze alongside the day's observations**: Describe rising, falling, or stable pressure without making definite weather predictions.
5. **Retest and record**: Change one condition, repeat the test, and record the inputs, outputs, and results.

If values differ by approximately a factor of 100, check whether Pa and hPa have been mixed.

If a sudden step change appears, check for changes in location, height, power supply, or data processing.

## Project Demonstration

When the program is running, the Urban Weather Trend Logger can demonstrate the following results:

- The local display and platform fields use consistent units.
- The graph contains continuous time information, and missing readings are not disguised as zero.
- Describe rising, falling, or stable pressure without making definite weather predictions.

<!-- Image placeholder: project in operation or animated demonstration -->
<!-- Suggested filename: ./images/weather-trend-recorder-demo.gif -->

## Reflection and Sharing

Ask each group to present its work and discuss the following questions:

1. What data did you record? Were the test conditions kept consistent?
2. What decision rules or data processing methods did this project use?
3. What structural or programming problems occurred during testing? How did you solve them?
4. Which test best demonstrates that the project performs its intended function?
5. What would you most like to improve next, and why?

## Extension Challenges

### Challenge 1: Keep a Multi-Day Weather Log

Record pressure and actual weather over several days. Compare graph changes and describe associations without making definite forecasts.

### Challenge 2: Add Temperature and Humidity Graphs

Add temperature and humidity fields and observe them on the same time axis. Check field units and sampling times.

### Challenge 3: Calculate Differences Between Consecutive Records

Calculate the difference between the current pressure and the previous valid record. Indicate rising, falling, or little change, and specify the comparison interval.

### Challenge 4: Mark Missing Data Periods

Mark data as missing when the network disconnects or readings fail; do not substitute zero. After recovery, check that the graph still conveys the missing-data periods.

### Challenge 5: Compare Recording Intervals

Use different recording intervals and compare graph detail and data volume. Explain why the interval affects trend observation.

## Further Learning

### What Is Air Pressure?

Air pressure is the force exerted by air per unit area. It is affected by elevation and weather, among other factors, so record measurement location and time when comparing data.

### How Are Pa and hPa Converted?

1 hPa equals 100 Pa. Keep units consistent in program displays, uploaded fields, and graphs. If values differ by about a factor of 100, check unit conversions first.

### Can Air Pressure Directly Predict the Weather?

Continuous pressure changes can help observe weather trends, but should be considered alongside temperature, humidity, wind, and actual weather. A single reading cannot guarantee an accurate prediction.
