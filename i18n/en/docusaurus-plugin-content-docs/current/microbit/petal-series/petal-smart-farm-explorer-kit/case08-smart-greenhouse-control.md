---
sidebar_position: 10
sidebar_label: "Case 08: Integrated Environment Manager · Local Greenhouse Control"
description: "Combine the first seven lessons: soil moisture controls irrigation, light controls supplementary lighting, and temperature and humidity drive the display and alarms. Build a fully automatic greenhouse that works locally."
---

# Case 08: Integrated Environment Manager · Local Greenhouse Control

## Introduction

Combine the first seven lessons: soil moisture controls irrigation, light controls supplementary lighting, and temperature and humidity drive the display and alarms. Build a fully automatic greenhouse that works locally.

![Case 08 smart greenhouse](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/case_08_intro.jpg)

## Learning Objectives

1. Merge several independent examples into one program.

2. Understand how multiple tasks coordinate inside `forever`.

## Teaching Preparation

| Image | Item | Quantity | Notes |
| --- | --- | --- | --- |
| | Smart Farm Explorer Kit | 1 | Includes basswood structural parts |
| ![micro:bit](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/prep_microbit.png) | micro:bit | 1 | Prepare separately |
| ![PC](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/prep_pc.png) | PC | 1 | Prepare separately |

## Lesson Introduction

Individual functions are like organs; together they form a living system. Connect the greenhouse eyes (sensors), hands (actuators), and brain (program) to bring the whole greenhouse to life.

## Project Implementation

### Hardware Connection

Connect the modules listed in Teaching Preparation to the designated Petal:bit ports (J1, J2, J3, J4 or IIC).

### Programming Platform

Use the graphical programming platform [MakeCode](https://makecode.microbit.org/).

### Create a New Project

1. Open [MakeCode](https://makecode.microbit.org/).

   ![MakeCode home page](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/setup_01_newproject_home.png)

2. Click **New Project**.

   ![Click New Project](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/setup_02_newproject_click.png)

3. Enter a project name, such as `smart_farm_08`, and click **Create**.

   ![Name the project and click Create](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/setup_03_name_create.png)

### Add the Extension

1. Click **Extensions** in the MakeCode toolbox.

   ![Click Extensions](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/setup_04_extensions.png)

2. Search for `petal`.

   ![Search for petal](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/setup_05_petal_search.png)

3. Select the petal extension with the ELECFREAKS logo.

### Write the Program

![Case 08 program blocks](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/program-case-08-white.png)

Use the preview below to view and run the complete program, or open the shared project in MakeCode to edit it.

<div style={{ position: 'relative', paddingBottom: '60%', overflow: 'hidden' }}>
    <iframe
        title={"Case 08: Integrated Environment Manager · Local Greenhouse Control MakeCode sample program"}
        src="https://makecode.microbit.org/S65394-32250-31499-11202?lang=en&embed=1"
        frameBorder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{ position: 'absolute', width: '100%', height: '100%' }}
    />
</div>

**MakeCode project:** [https://makecode.microbit.org/S65394-32250-31499-11202](https://makecode.microbit.org/S65394-32250-31499-11202)

> You can also download the program to your micro:bit from the webpage.

### Download the Program to micro:bit

1. Connect the PC to your micro:bit V2 with a USB cable.

   ![Connect micro:bit by USB](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/download_01_usb.png)

2. A drive named `MICROBIT` appears on the computer when the connection succeeds.

   ![MICROBIT drive](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/download_02_microbit_disk.png)

3. Click `...` at the bottom left of MakeCode, then select **Connect Device**.

   ![Click the three dots](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/download_03_dots.png)

   ![Select Connect Device](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/download_04_connect_device.png)

4. Click **Next** in the dialog.

   ![Click Next](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/download_05_next.png)

5. Hold the button on the back of the micro:bit until the display shows **PAIRING MODE**, then release it. Return to the webpage and click **Pair**. Select `BBC micro:bit CMSIS-DAP` from the list and click **Connect**.

   ![Pairing dialog](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/download_06_pair_popup.png)

   ![Click Pair](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/download_07_pair.png)

   ![Select BBC micro:bit CMSIS-DAP](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/download_08_select_cmsis.png)

   ![Device connected](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/download_09_connected.png)

6. Click **Download** to transfer the program to micro:bit.

   ![Click Download](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/download_10_button.png)

## Result

The greenhouse waters dry soil automatically, adds light when needed, displays temperature and humidity in real time, and raises alarms for abnormal conditions.

![Case 08 demonstration](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/case_08_result.gif)

## Extended Knowledge

Automation keeps the cycle of observing, deciding and acting running. Our integrated environment manager connects sensors and actuators into a system that adjusts its own behavior.

### 1. Closed-Loop Control

An open-loop controller sends a command without checking its result, like a simple timer. A closed-loop controller measures the result and corrects its actions using feedback.

The sequence is: measure with a sensor → compare with a target → decide in the controller → act through an actuator → measure again. Thermostatic air conditioning, pressure regulation in a rice cooker, and car cruise control illustrate this pattern.

### 2. Agricultural Automation

Greenhouses can adjust ventilation, lighting and irrigation according to measured conditions. Drones inspect fields, automated machines sow seeds, and robots harvest crops. Automation can extend from seedlings and cultivation to sorting and traceability.

### 3. The Science of Feedback

Negative feedback opposes a deviation from a target, such as cooling an overheated space, and helps maintain stability. Positive feedback amplifies a change; an escalating pest outbreak may require intervention to interrupt it.

Delays matter. Water takes time to soak into soil. Checking too often can cause repeated switching or excessive watering, so a waiting period helps prevent oscillation.

### 4. Benefits and Trade-Offs

Automation can improve consistency, reduce labor, operate overnight and retain records. It also requires investment, power and sometimes networking, while faults may develop unnoticed. Designs should support people and preserve their connection with work and nature.

### 5. Future Automation

Edge intelligence processes data locally and can continue working without a network. Connected greenhouses or farms can coordinate water, fertilizer and energy. In human-machine collaboration, people set goals and machines carry out tasks while decision-making responsibility stays with people.

A feedback loop embeds human experience in a system. Teaching a greenhouse when to water creates a tireless digital gardener: effective action depends on useful feedback from its environment.
