---
sidebar_position: 3
sidebar_label: "Case 01: Smart Greenhouse · First Build"
description: "Assemble the greenhouse and write your first program: show a farm icon at startup, scroll \"Smart Farm\" when button A is pressed, and display \"Sensors Ready\" when button B is pressed to celebrate completion."
---

# Case 01: Smart Greenhouse · First Build

## Introduction

Assemble the greenhouse and write your first program: show a farm icon at startup, scroll "Smart Farm" when button A is pressed, and display "Sensors Ready" when button B is pressed to celebrate completion.

![Case 01 smart greenhouse](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/case_01_intro.jpg)

## Learning Objectives

1. Identify the kit structure and the ports used by each component.

2. Complete the greenhouse assembly and perform a power-on check.

3. Learn basic micro:bit programming for icons and button interactions.

## Teaching Preparation

| Image | Item | Quantity | Notes |
| --- | --- | --- | --- |
| | Smart Farm Explorer Kit | 1 | Includes basswood structural parts |
| ![micro:bit](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/prep_microbit.png) | micro:bit | 1 | Prepare separately |
| ![PC](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/prep_pc.png) | PC | 1 | Prepare separately |

## Lesson Introduction

A real farm needs a greenhouse before seeds can be planted. Our smart greenhouse is similar: assemble its frame and hardware, then bring it to life with a program. After assembly, what would be a fun way to tell everyone, "I am ready"?

## Project Implementation

### Hardware Connection

Connect the micro:bit to the Petal:bit base expansion board.

![Connect the micro:bit to Petal:bit](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/case01-microbit-petalbit-connection.png)

### Programming Platform

Use the graphical programming platform [MakeCode](https://makecode.microbit.org/).

### Create a New Project

1. Open [MakeCode](https://makecode.microbit.org/).

   ![MakeCode home page](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/setup_01_newproject_home.png)

2. Click **New Project**.

   ![Click New Project](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/setup_02_newproject_click.png)

3. Enter a project name, such as `smart_farm_01`, and click **Create**.

   ![Name the project and click Create](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/setup_03_name_create.png)

### Add the Extension

1. Click **Extensions** in the MakeCode toolbox.

   ![Click Extensions](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/setup_04_extensions.png)

2. Search for `petal`.

   ![Search for petal](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/setup_05_petal_search.png)

3. Select the petal extension with the ELECFREAKS logo.

### Write the Program

![Case 01 program blocks](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/program-case-01-white.png)

Use the preview below to view and run the complete program, or open the shared project in MakeCode to edit it.

<div style={{ position: 'relative', paddingBottom: '60%', overflow: 'hidden' }}>
    <iframe
        title={"Case 01: Smart Greenhouse · First Build MakeCode sample program"}
        src="https://makecode.microbit.org/S07013-71294-18599-42695?lang=en&embed=1"
        frameBorder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{ position: 'absolute', width: '100%', height: '100%' }}
    />
</div>

**MakeCode project:** [https://makecode.microbit.org/S07013-71294-18599-42695](https://makecode.microbit.org/S07013-71294-18599-42695)

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

At startup, micro:bit shows the farm icon. Press A to scroll "Smart Farm", or press B to display "Sensors Ready".

![Case 01 demonstration](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/case_01_result.gif)

## Extended Knowledge

The greenhouse is both an ancient and a modern agricultural tool for managing climate. From Roman mica-covered growing spaces to photovoltaic smart greenhouses, it reflects the wish to overcome natural limits and obtain a dependable food supply.

### 1. A Brief History of Greenhouses

Early forms: Romans used mica panels to retain warmth while growing cucumbers. The modern greenhouse developed from seventeenth-century European orangeries, which protected citrus trees through winter.

Industrial development: Cheap glass and steel became available during the Industrial Revolution. London's Crystal Palace of 1851 demonstrated large, light-transmitting structures. In the twentieth century, Dutch multispan glass greenhouses helped lead protected cultivation worldwide.

Today's intelligent greenhouse combines sensors, automatic ventilation, supplementary lighting, and integrated irrigation and fertilization: a building that can respond to its environment.

### 2. Transforming Crop Growth

Greenhouses extend the growing season, allowing crops such as tomatoes and strawberries to be produced in temperate winters. Yields per unit area can reach five to ten times those of open-field cultivation; Dutch tomato greenhouses can exceed 70 kilograms per square meter annually.

Closed circulation systems can improve water and fertilizer use by 30–50% and reduce diffuse pollution.

### 3. Urban Agriculture and Food Security

Greenhouses near cities shorten the journey from field to table, reducing transport losses and emissions. Community farms and school greenhouses let residents and students participate in food production and reconnect with its origins. Local production also supports supply-chain resilience during disruptions such as pandemic lockdowns.

### 4. Environmental Benefits and Challenges

Controlled environments can reduce disease and pesticide use. Reliable output can also reduce pressure to clear wild land. Challenges include winter heating, summer cooling, disposable plastic films, and high initial investment.

Photovoltaics, geothermal heating, and recyclable structural materials, including the basswood used in this kit, offer ways to reduce the environmental footprint.

### 5. Future Directions

Vertical farms grow crops on multiple shelves with LED lighting and can achieve high output per unit volume in urban buildings. Plant factories use fully controlled environments; Japan and Singapore have commercial examples. Digital twins model crop growth to help predict and adjust environmental conditions, adding algorithms to farming experience.

Greenhouses have developed from warm shelters into data-driven agricultural systems. Your miniature greenhouse represents this wider change: using protected cultivation to help feed a growing population on limited land.
