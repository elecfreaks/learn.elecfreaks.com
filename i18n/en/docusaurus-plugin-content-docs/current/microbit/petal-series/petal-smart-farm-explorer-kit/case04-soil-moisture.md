---
sidebar_position: 6
sidebar_label: "Case 04: Soil Monitoring · The Soil Thirst Index"
description: "Insert the soil moisture sensor connected to J1 into the growing medium. Read its moisture value from 0 to 100 and display it on the OLED to see whether the crop needs water."
---

# Case 04: Soil Monitoring · The Soil Thirst Index

## Introduction

Insert the soil moisture sensor connected to J1 into the growing medium. Read its moisture value from 0 to 100 and display it on the OLED to see whether the crop needs water.

![Case 04 smart greenhouse](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/case_04_intro.jpg)

## Learning Objectives

1. Read `soil moisture sensor J1 value (0–100)`.

2. Understand how moisture readings relate to dry and wet soil.

## Teaching Preparation

| Image | Item | Quantity | Notes |
| --- | --- | --- | --- |
| | Smart Farm Explorer Kit | 1 | Includes basswood structural parts |
| ![micro:bit](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/prep_microbit.png) | micro:bit | 1 | Prepare separately |
| ![PC](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/prep_pc.png) | PC | 1 | Prepare separately |

## Lesson Introduction

People drink when thirsty; crops wilt when their soil becomes too dry. Touch alone cannot precisely indicate moisture, while a sensor provides a numerical reading. Compare readings before and after watering to understand this soil thirst index.

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

3. Enter a project name, such as `smart_farm_04`, and click **Create**.

   ![Name the project and click Create](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/setup_03_name_create.png)

### Add the Extension

1. Click **Extensions** in the MakeCode toolbox.

   ![Click Extensions](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/setup_04_extensions.png)

2. Search for `petal`.

   ![Search for petal](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/setup_05_petal_search.png)

3. Select the petal extension with the ELECFREAKS logo.

### Write the Program

![Case 04 program blocks](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/program-case-04-white.png)

Use the preview below to view and run the complete program, or open the shared project in MakeCode to edit it.

<div style={{ position: 'relative', paddingBottom: '60%', overflow: 'hidden' }}>
    <iframe
        title={"Case 04: Soil Monitoring · The Soil Thirst Index MakeCode sample program"}
        src="https://makecode.microbit.org/S67954-68312-51166-62160?lang=en&embed=1"
        frameBorder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{ position: 'absolute', width: '100%', height: '100%' }}
    />
</div>

**MakeCode project:** [https://makecode.microbit.org/S67954-68312-51166-62160](https://makecode.microbit.org/S67954-68312-51166-62160)

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

The OLED displays soil moisture from 0 to 100 in real time. Compare the reading before and after watering.

![Case 04 demonstration](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/case_04_result.gif)

## Extended Knowledge

Soil is a thin, valuable skin covering Earth's surface. It forms slowly—only a few millimeters per century under natural conditions—yet supports about 95% of our food. Reading its moisture is a first step toward understanding its health.

### 1. Formation and Irreplaceable Value

One centimeter of fertile topsoil can take centuries to form, while a storm or inappropriate cultivation can remove it rapidly. Soil microorganisms represent about one-quarter of Earth's biodiversity and help decompose organic matter, cycle nutrients and clean water.

Soil holds roughly twice as much carbon as the atmosphere. Healthy soils are therefore important carbon stores.

### 2. Global Soil Degradation

FAO estimates have placed about 33% of the world's soils in moderately or severely degraded condition. Annual losses of cultivable soil have been compared with the cultivated area of Ukraine.

Over-cultivation, excessive fertilizer use, deforestation and overgrazing contribute to erosion, compaction, salinization and acidification. Degradation threatens food security; projections have called for about 60% more production by 2050 to meet demand.

### 3. How Soil Moisture Monitoring Works

Moisture indicates water available to roots. Too little causes wilting; too much restricts oxygen and can damage roots. Suitable levels differ between crops; many vegetables grow well at around 60–80% of field capacity.

Low-cost resistive or capacitive sensors infer moisture from soil electrical properties. Continuous readings create a moisture curve that can guide irrigation rather than relying on touch alone.

### 4. Soil Management in Precision Agriculture

Soil testing allows fertilizer to be supplied according to nutrient needs, reducing waste and diffuse pollution. No-till practices, cover crops and crop rotation can build organic matter and improve water and nutrient retention.

Sensors and remote sensing can create digital soil maps for decisions suited to individual areas of a field.

### 5. Protecting Soil

Reduce disposable materials and unnecessary chemical dependence. Compost suitable kitchen waste to return organic matter to soil. Support ecological farming and take part in school or community soil education.

Soil is a foundation of civilization. The moisture reading on your micro:bit connects a small experiment to the wider challenge of caring for the land that sustains us.
