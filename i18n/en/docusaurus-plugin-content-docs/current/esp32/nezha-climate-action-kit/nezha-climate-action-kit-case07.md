---
title: Low-Carbon Travel Check-In Station
sidebar_label: "Case 07: Low-Carbon Travel Check-In Station"
sidebar_position: 8
---


# Case 07: Low-Carbon Travel Check-In Station

## Project Introduction

How can walking, cycling, and public transport be incorporated into school activities? This project uses RFID cards to represent travel modes. **Nezha ESP32** reads card information, displays results, counts valid check-ins, and operates a model gate. Students learn information identification, variable-based counting, and event control.

Through building, programming, and testing, students connect their observations with the model's displays or actions and learn to explain phenomena using data.

This project combines classroom observation with engineering practice, encouraging students to consider how technology can improve school and urban environments.

<!-- Image placeholder: finished Low-Carbon Travel Check-In Station model -->
<!-- Suggested filename: ./images/low-carbon-travel-check-in.png -->

## Preparation

| Item | Quantity | Purpose |
| --- | ---: | --- |
| Climate Action Kit | 1 set | Build the Low-Carbon Travel Check-In Station model |
| Nezha ESP32 | 1 | Run the program, read data, and display information |
| RFID reader/writer module and compatible cards | As configured | Carry out the sensing, control, or networking tasks for this project |
| RJ11 cables | As needed | Connect compatible external modules; onboard-only functions require no external connections |
| Computer and data cable | 1 set | Write, download, and debug the program |

<!-- Image placeholder: preparation / kit and main modules -->
<!-- Suggested filename: ./images/low-carbon-travel-check-in-materials.png -->

## Learning Objectives

After completing this project, students will be able to:

1. Distinguish a card identifier from data written to the card.
2. Use conditional logic to identify valid cards and update a counter.
3. Design a process in which each card presentation triggers only once.
4. Adjust parameters based on test results and follow the engineering process of design, programming, testing, and improvement.

## Lesson Introduction

Use a class green travel activity as the setting and ask students to design bus, bicycle, and walking check-in cards. Discuss what the records mean: presenting a card may represent participation, but it does not prove actual travel distance or emissions reductions.

In this lesson, we will act as urban environment designers, build the Low-Carbon Travel Check-In Station, and test our design through real observations.

## Explore and Discuss

Before building, discuss the following questions in groups:

1. Are a card number and a travel mode the same information?
2. How many times should a card count if left on the reader?
3. How should an unknown card be handled?
4. How will you record the test conditions to show whether the results meet your expectations?
5. What other factors would you need to consider if this model were used in a real environment?

## Building Steps

Follow the building instructions to construct the base, controller mount, and functional structures of the Low-Carbon Travel Check-In Station.

Pay particular attention to the following during construction:

- Secure the reader, mark the scanning area, and leave room to bring cards close to it.
- Build a lightweight gate arm and manually check its opening and closing travel.
- Prepare test cards and record the travel mode for each; do not use real school access cards for writing experiments.

<!-- Image placeholder: building steps; insert images for Step 1, Step 2, and so on -->
<!-- Suggested filename: ./images/low-carbon-travel-check-in-build-01.png and so on -->

## Hardware Connections

Turn off the power, then connect the modules as shown below:

| Module | Connection | Function |
| --- | --- | --- |
| RFID module | Connect as required by the module; bus and port to be confirmed | Read cards and optionally write data |
| Gate motor | Compatible motor connection to be confirmed; safe travel to be calibrated | Operate the access gate model |

:::tip
Onboard functions require no external wiring. For external modules, confirm compatible ports against the final program; for IIC modules, also check the bus addresses. Align connectors correctly, and do not connect or disconnect modules while the device is powered on.
:::

<!-- Image placeholder: hardware wiring diagram -->
<!-- Suggested filename: ./images/low-carbon-travel-check-in-wiring.png -->

## Program Design

The program consists of two parts: startup initialization and the main loop.

:::note
The following is a suggested outline of the teaching logic. The actual program for this project is not currently provided. Port numbers, block names, and control parameters must be verified on the physical device; program screenshot locations are temporarily indicated by clearly labeled placeholders. The screen layout below is also a suggestion.
:::

### 1. Startup Initialization

<!-- Image placeholder: startup initialization program screenshot -->
<!-- Suggested filename: ./images/low-carbon-travel-check-in-program-init.png -->

At startup, the program performs the following actions:

1. If writing is supported, write travel information to an allowed data area; otherwise map UIDs to travel modes in the program.
2. Initialize the screen and data variables so that states from the previous run are not reused.
3. Show data labels and the initial operating status at the designated screen positions.

Suggested controller screen layout:

| Screen row | Display content |
| ---: | --- |
| Row 1 | Check-in count |
| Row 2 | Total valid check-ins |
| Row 3 | Operating status |
| Row 4 | Waiting for card / Access granted |

### 2. Repeated Sensing and Control

<!-- Image placeholder: main sensing and control loop screenshot -->
<!-- Suggested filename: ./images/low-carbon-travel-check-in-program-main.png -->

The system continuously performs the following tasks in the `forever` loop.

#### Prepare Cards

- If writing is supported, write travel information to an allowed data area; otherwise map UIDs to travel modes in the program.

#### Validate Identification

- Read the card and check the allowlist; show a prompt for unknown cards without counting them.

#### Count and Open the Gate

- If the card is valid and processing is not locked, increment the count, display the travel mode, and run one gate-opening sequence.

#### Re-enable Processing

- Unlock processing only after confirming the card has been removed; close the gate as required by the physical mechanism.

### 3. Key Parameters

| Parameter | Example value | Meaning | Adjustment guidance |
| --- | ---: | --- | --- |
| Card data method | To be verified on the device | Choose according to the actual module, card type, and program | UID mapping or a writable data area |
| Gate positions and hold time | To be verified on the device | Keep hands away from the movement area | Determine from the mechanism and classroom needs |
| Count persistence | To be verified on the device | Retaining counts after restart requires a separate design | Use a runtime variable in the basic version |

:::note
The RFID reader provides a card identifier or the contents of a specified data area. The program matches this information to allowed travel information. Once validated, it counts the check-in and opens the gate, then waits for card removal before enabling another scan. Write data only when the actual card and reader/writer support it. A UID is generally used for identification and should not be assumed to be rewritable.
:::

:::caution
Keep clear of pinch points when testing the gate. A card left in place may be counted repeatedly, so verify that the logic waits for card removal before allowing another trigger.
:::

## Testing

After completing the program, test it in the following order:

1. **Startup check**: Connect the device and download the verified program. Check that the initial state and screen labels are correct.
2. **Present a valid card and leave it in place**: The count increases only once, and one access sequence completes.
3. **Remove the card and present it again**: A new count is allowed.
4. **Use an unknown card**: An unrecognized-card prompt appears; the count does not increase and the gate stays closed.
5. **Retest and record**: Change one condition, repeat the test, and record inputs, outputs, and results; stop the actuators when finished.

If one card is counted many times, add a processed flag and reset it only after confirming card removal.

If a card is detected but its travel mode is wrong, check the UID mapping, data area, encoding, and stored contents.

## Project Demonstration

When the program is running, the Low-Carbon Travel Check-In Station can demonstrate the following results:

- The count increases only once, and one access sequence completes.
- A new count is allowed.
- An unrecognized-card prompt appears; the count does not increase and the gate stays closed.

<!-- Image placeholder: project in operation or animated demonstration -->
<!-- Suggested filename: ./images/low-carbon-travel-check-in-demo.gif -->

## Reflection and Sharing

Ask each group to present its work and discuss the following questions:

1. What data did you record? Were the test conditions kept consistent?
2. What decision rules or data processing methods did this project use?
3. What structural or programming problems occurred during testing? How did you solve them?
4. Which test best demonstrates that the project performs its intended function?
5. What would you most like to improve next, and why?

## Extension Challenges

### Challenge 1: Prevent Duplicate Counts

Allow the next count only after the card has been removed. Test a quick presentation, a card held in place, and repeated presentations separately.

### Challenge 2: Record Travel Modes Separately

Identify preset travel categories if the compatible cards and extension library support them. Use separate variables for simulated walking, cycling, and bus trips.

### Challenge 3: Design Low-Carbon Points

Set points for the classroom travel activity and show encouragement when a goal is reached. Explain that the points are activity rules, not actual emissions reductions.

### Challenge 4: Add a Counter Reset

Add a teacher-controlled reset function. Check that the display and variables agree after reset, and discuss whether records should be retained.

### Challenge 5: Compare Total Check-Ins and Participant Counts

Compare total check-ins with the number of distinct participants. Discuss how participants would need to be recorded, using only simulated classroom identities.

## Further Learning

### How Does RFID Identify Cards?

A reader communicates wirelessly with compatible cards. Whether specific data can be read or written depends on card type, storage area, and extension library support; do not assume all cards allow unrestricted reading and writing.

### Why Can One Card Presentation Be Counted Several Times?

A looping program repeatedly reads card status. If a card stays in place, each reading may trigger another increment. Detecting the change from no card to card present, and waiting for removal before counting again, can address this problem.

### Does the Count Equal Carbon Reduction?

Check-in counts are classroom activity records only. Calculating actual emissions reductions also requires travel distance, transport mode, and reasonable emissions factors; each scan cannot be treated as a fixed reduction.
