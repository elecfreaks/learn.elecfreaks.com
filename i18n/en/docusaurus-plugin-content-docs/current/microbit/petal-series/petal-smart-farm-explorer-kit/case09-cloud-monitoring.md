---
sidebar_position: 11
sidebar_label: "Case 09: Data to the Cloud · Live Farm Monitoring"
description: "Configure the WiFi module on J3 and regularly upload temperature, humidity, soil moisture and light readings to the SmartIoT web platform for cloud monitoring and charts."
---

# Case 09: Data to the Cloud · Live Farm Monitoring

## Introduction

Configure the WiFi module on J3 and regularly upload temperature, humidity, soil moisture and light readings to the SmartIoT web platform for cloud monitoring and charts.

![Case 09 smart greenhouse](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/case_09_intro.jpg)

## Learning Objectives

1. Connect the WiFi module on J3 to a WiFi network using its SSID and password.

2. Regularly upload a topic and data through the WiFi module to the platform.

## Teaching Preparation

| Image | Item | Quantity | Notes |
| --- | --- | --- | --- |
| | Smart Farm Explorer Kit | 1 | Includes basswood structural parts |
| ![micro:bit](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/prep_microbit.png) | micro:bit | 1 | Prepare separately |
| ![PC](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/prep_pc.png) | PC | 1 | Prepare separately |

## Lesson Introduction

Displaying data on a local screen is only the beginning. Upload it to the cloud so teachers and parents can view its charts on the web at any time. This is an Internet of Things farm.

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

3. Enter a project name, such as `smart_farm_09`, and click **Create**.

   ![Name the project and click Create](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/setup_03_name_create.png)

### Add the Extension

1. Click **Extensions** in the MakeCode toolbox.

   ![Click Extensions](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/setup_04_extensions.png)

2. Search for `petal`.

   ![Search for petal](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/setup_05_petal_search.png)

3. Select the petal extension with the ELECFREAKS logo.

### Write the Program

![Case 09 program blocks](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/program-case-09-white.png)

Use the preview below to view and run the complete program, or open the shared project in MakeCode to edit it.

<div style={{ position: 'relative', paddingBottom: '60%', overflow: 'hidden' }}>
    <iframe
        title={"Case 09: Data to the Cloud · Live Farm Monitoring MakeCode sample program"}
        src="https://makecode.microbit.org/S33971-35077-49390-44135?lang=en&embed=1"
        frameBorder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{ position: 'absolute', width: '100%', height: '100%' }}
    />
</div>

**MakeCode project:** [https://makecode.microbit.org/S33971-35077-49390-44135](https://makecode.microbit.org/S33971-35077-49390-44135)

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

Every 5 seconds, upload four readings—temperature, humidity, soil moisture and light—to SmartIoT, where live charts can be viewed in a browser.

![Case 09 demonstration](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/case_09_result.gif)

## Extended Knowledge

The Internet of Things (IoT) connects objects so they can share information. Uploading farm readings to the cloud is a practical example of this idea.

### 1. IoT Concepts and Architecture

A four-layer model includes sensing (sensors), networking (WiFi or cellular links), platforms (cloud storage and computation), and applications (dashboards and decisions). Its features include broad sensing, reliable transmission, intelligent processing and proactive services.

Estimates have put connected devices above 15 billion, with projections of further rapid growth. Agriculture is an important application area.

### 2. Digital Agriculture Applications

Precision growing combines field-level weather, soil and crop-growth data to produce irrigation and fertilizer recommendations. Livestock collars can monitor location, temperature and rumination to help identify illness early.

Traceability systems record the journey from sowing to the table so consumers can inspect information by scanning a code. Recorded conditions can also support evidence-based insurance assessments.

### 3. The Value of Agricultural Data

Historical records reveal relationships among varieties, climate and yields, helping growers select crops and schedules. Weather and crop-development models can support yield and hazard forecasts and reduce market uncertainty. Repeated records of water, fertilizer and labor use help improve quality and efficiency over time.

### 4. Security and Privacy

A compromised device could issue incorrect control actions. Leaked location or yield data could affect a farm's business. Strong passwords, firmware updates, minimum necessary permissions and encrypted transmission reduce risk.

Clear rules and consent are needed to define who owns data and who may use it.

### 5. Challenges and Future Development

Remote fields may have poor coverage, creating a role for low-power wide-area networks such as LoRa and NB-IoT. Incompatible vendor protocols create data silos. Affordable systems and understandable interfaces are essential if smallholders are to benefit.

Uploading data is a means to informed action. Your first uploaded reading is a small step toward understanding agriculture through connected observations.
