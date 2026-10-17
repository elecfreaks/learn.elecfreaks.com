---
sidebar_position: 12
sidebar_label: "Case 10: Remote Irrigation · Watering from the Web"
description: "Create a remote switch on the SmartIoT web platform and send commands to start or stop the local water pump on J2, even when you are away from the farm."
---

# Case 10: Remote Irrigation · Watering from the Web

## Introduction

Create a remote switch on the SmartIoT web platform and send commands to start or stop the local water pump on J2, even when you are away from the farm.

![Case 10 smart greenhouse](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/case_10_intro.jpg)

## Learning Objectives

1. Receive platform commands through the WiFi module J3 event handler.

2. Use incoming commands to turn the J2 water pump on or off.

## Teaching Preparation

| Image | Item | Quantity | Notes |
| --- | --- | --- | --- |
| | Smart Farm Explorer Kit | 1 | Includes basswood structural parts |
| ![micro:bit](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/prep_microbit.png) | micro:bit | 1 | Prepare separately |
| ![PC](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/prep_pc.png) | PC | 1 | Prepare separately |

## Lesson Introduction

Forgot to water before going out? Tap a control on a phone or computer webpage and the farm at home can water itself. That is the appeal of remote control.

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

3. Enter a project name, such as `smart_farm_10`, and click **Create**.

   ![Name the project and click Create](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/setup_03_name_create.png)

### Add the Extension

1. Click **Extensions** in the MakeCode toolbox.

   ![Click Extensions](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/setup_04_extensions.png)

2. Search for `petal`.

   ![Search for petal](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/setup_05_petal_search.png)

3. Select the petal extension with the ELECFREAKS logo.

### Write the Program

![Case 10 program blocks](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/program-case-10-white.png)

Use the preview below to view and run the complete program, or open the shared project in MakeCode to edit it.

<div style={{ position: 'relative', paddingBottom: '60%', overflow: 'hidden' }}>
    <iframe
        title={"Case 10: Remote Irrigation · Watering from the Web MakeCode sample program"}
        src="https://makecode.microbit.org/S00825-83623-47060-49548?lang=en&embed=1"
        frameBorder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{ position: 'absolute', width: '100%', height: '100%' }}
    />
</div>

**MakeCode project:** [https://makecode.microbit.org/S00825-83623-47060-49548](https://makecode.microbit.org/S00825-83623-47060-49548)

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

Send "pump_on" or "pump_off" commands from the SmartIoT webpage. The micro:bit receives them and starts or stops the pump on J2.

![Case 10 demonstration](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/case_10_result.gif)

## Extended Knowledge

Remote control lets people act without standing beside the equipment. Web-controlled watering moves one part of farm work from the field to a phone or computer.

### 1. Technical Foundations

A command travels from a webpage or phone to the cloud, then to the device. The device executes it and reports its state, completing a command-response loop.

Reliable networks and low latency support dependable control. A local fallback is needed when connectivity fails. Authentication and signed commands help prevent unauthorized or mistaken control.

### 2. Real-World Farm Applications

Jiansanjiang in Heilongjiang, China, demonstrates automation across rice transplanting, fertilization and harvesting, allowing one operator to oversee a large area. Dutch greenhouse clusters support remote management of light, water, nutrients and climate. Remote feeding, cleaning and environmental control in livestock farming can also reduce unnecessary contact and disease transmission.

### 3. Changing the Farmer's Role

Work shifts toward monitoring, decisions and maintenance. Reading data, using apps and basic troubleshooting become useful skills. Experienced farmers' knowledge can be recorded digitally and applied across larger areas.

### 4. The Digital Divide

Poor network access, limited equipment and insufficient training can exclude smallholders. Hardware and communication costs can remain difficult for low-income farmers. Affordable kits, interfaces in local languages, and community training can help close these gaps.

### 5. The Future Agricultural Workforce

People can set strategies while machines execute tasks. Technology may attract more young people and women to rural opportunities. Flexible remote scheduling can help farms respond to extreme weather or sudden market changes.

Remote control expands what an individual farmer can manage. A click to start a pump illustrates the wider shift from physically intensive work toward knowledge-intensive agriculture.
