---
sidebar_position: 5
sidebar_label: "Case 03: Greenhouse Weather Station · Temperature and Humidity"
description: "Read air temperature and humidity with the IIC temperature and RH sensor and display both readings on the OLED to build a miniature weather station."
---

# Case 03: Greenhouse Weather Station · Temperature and Humidity

## Introduction

Read air temperature and humidity with the IIC temperature and RH sensor and display both readings on the OLED to build a miniature weather station.

![Case 03 smart greenhouse](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/case_03_intro.jpg)

## Learning Objectives

1. Read the temperature (°C) and humidity (%) values from the temperature and RH sensor.

2. Display the two readings in separate areas on the OLED.

## Teaching Preparation

| Image | Item | Quantity | Notes |
| --- | --- | --- | --- |
| | Smart Farm Explorer Kit | 1 | Includes basswood structural parts |
| ![micro:bit](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/prep_microbit.png) | micro:bit | 1 | Prepare separately |
| ![PC](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/prep_pc.png) | PC | 1 | Prepare separately |

## Lesson Introduction

Temperature and humidity are two important numbers to watch in a greenhouse. Excessive heat or moisture can make crops vulnerable to disease. Displaying both readings gives the greenhouse a health dashboard.

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

3. Enter a project name, such as `smart_farm_03`, and click **Create**.

   ![Name the project and click Create](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/setup_03_name_create.png)

### Add the Extension

1. Click **Extensions** in the MakeCode toolbox.

   ![Click Extensions](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/setup_04_extensions.png)

2. Search for `petal`.

   ![Search for petal](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/setup_05_petal_search.png)

3. Select the petal extension with the ELECFREAKS logo.

### Write the Program

![Case 03 program blocks](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/program-case-03-white.png)

Use the preview below to view and run the complete program, or open the shared project in MakeCode to edit it.

<div style={{ position: 'relative', paddingBottom: '60%', overflow: 'hidden' }}>
    <iframe
        title={"Case 03: Greenhouse Weather Station · Temperature and Humidity MakeCode sample program"}
        src="https://makecode.microbit.org/_gpq3TD447FP7?lang=en&embed=1"
        frameBorder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{ position: 'absolute', width: '100%', height: '100%' }}
    />
</div>

**MakeCode project:** [https://makecode.microbit.org/_gpq3TD447FP7](https://makecode.microbit.org/_gpq3TD447FP7)

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

The OLED shows temperature at the top and humidity at the bottom, refreshing once every second.

![Case 03 demonstration](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/case_03_result.gif)

## Extended Knowledge

Weather is a diary of Earth's atmosphere. Temperature and humidity are two entries closely connected to people and agriculture. Our greenhouse station is a miniature climate observatory.

### 1. Temperature, Humidity and Comfort

Building and health discussions often describe air temperatures around 20–25°C and relative humidity around 40% as comfortable conditions. Urban heat islands can substantially change the local experience of these conditions.

### 2. Weather and Agriculture

Frost, prolonged rain, and hot dry winds are major agricultural hazards. Advance knowledge of temperature and humidity trends can help farmers bring harvests forward, cover crops or improve drainage.

Crops require accumulated warmth to mature. Rice, for example, may require about 2,000–3,000°C·days over its growing period; weather records help calculate agricultural timing. High humidity favors fungi, so weather data can also support warnings of powdery or downy mildew.

### 3. Extreme Weather and Climate Change

Heavy rain, drought and heatwaves have become more intense or frequent in recent decades. IPCC assessments identify human activity as a principal driver. Around one-third of food-producing regions face climate risks, with smallholders particularly exposed.

Stress-tolerant varieties, water-conserving cultivation and climate-smart agriculture (CSA) are approaches to adaptation.

### 4. The Development of Weather Monitoring

Observation has progressed from clouds, seasonal signs and experience to networks of ground stations, radar and weather satellites. Small sensor modules make measurement affordable enough for students and citizen science. Open meteorological data also supports applications for planting, travel and energy.

### 5. Personal and Community Responses

Household temperature and humidity meters can help people notice conditions in rooms used by children or older adults, including dry winter air or damp rainy seasons. Communities can improve drainage and shade to reduce heat effects. School weather corners develop data literacy.

Lower-emission transport and energy conservation contribute to climate mitigation. Recording weather is more than collecting numbers: it is a way to understand how people coexist with the atmosphere.
