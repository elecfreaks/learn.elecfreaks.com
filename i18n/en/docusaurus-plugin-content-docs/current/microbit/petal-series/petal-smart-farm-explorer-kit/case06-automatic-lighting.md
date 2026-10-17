---
sidebar_position: 8
sidebar_label: "Case 06: Automatic Lighting · Light-Controlled Rainbow RGB"
description: "Automatically turn on the RGB light when ambient light is insufficient and switch it off when the surroundings are bright enough, modeling supplementary lighting in a modern greenhouse."
---

# Case 06: Automatic Lighting · Light-Controlled Rainbow RGB

## Introduction

Automatically turn on the RGB light when ambient light is insufficient and switch it off when the surroundings are bright enough, modeling supplementary lighting in a modern greenhouse.

![Case 06 smart greenhouse](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/case_06_intro.jpg)

## Learning Objectives

1. Combine the light sensor and RGB light again.

2. Understand the automation rule: insufficient light → turn on the light.

## Teaching Preparation

| Image | Item | Quantity | Notes |
| --- | --- | --- | --- |
| | Smart Farm Explorer Kit | 1 | Includes basswood structural parts |
| ![micro:bit](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/prep_microbit.png) | micro:bit | 1 | Prepare separately |
| ![PC](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/prep_pc.png) | PC | 1 | Prepare separately |

## Lesson Introduction

Short winter days can limit crop growth. Greenhouses use supplementary lights as artificial suns. We will make the RGB light turn on automatically in the dark, like switching on a desk lamp for a plant.

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

3. Enter a project name, such as `smart_farm_06`, and click **Create**.

   ![Name the project and click Create](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/setup_03_name_create.png)

### Add the Extension

1. Click **Extensions** in the MakeCode toolbox.

   ![Click Extensions](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/setup_04_extensions.png)

2. Search for `petal`.

   ![Search for petal](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/setup_05_petal_search.png)

3. Select the petal extension with the ELECFREAKS logo.

### Write the Program

![Case 06 program blocks](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/program-case-06-white.png)

Use the preview below to view and run the complete program, or open the shared project in MakeCode to edit it.

<div style={{ position: 'relative', paddingBottom: '60%', overflow: 'hidden' }}>
    <iframe
        title={"Case 06: Automatic Lighting · Light-Controlled Rainbow RGB MakeCode sample program"}
        src="https://makecode.microbit.org/_doMbueU2MRCo?lang=en&embed=1"
        frameBorder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{ position: 'absolute', width: '100%', height: '100%' }}
    />
</div>

**MakeCode project:** [https://makecode.microbit.org/_doMbueU2MRCo](https://makecode.microbit.org/_doMbueU2MRCo)

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

When ambient light is insufficient (below 100 lux), the RGB light shines white. It switches off automatically when the light is sufficient.

![Case 06 demonstration](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/case_06_result.gif)

## Extended Knowledge

For plants, light is the energy source used to make food through photosynthesis. Supplementary lighting supplies part of the work normally done by the sun.

### 1. The Science of Supplementary Light

Chlorophyll strongly absorbs red light around 660 nm and blue light around 450 nm. Red-blue combinations support growth, while far-red and green light also influence development.

Artificial light can extend perceived daylight and change flowering schedules, allowing growers to bring flowering forward or delay it for market timing. Crops have different light requirements; strawberries may use around 300–500 μmol/m²/s. Excess light can waste energy without improving growth.

### 2. LED Plant Factories

A plant factory is a controlled growing space in which LEDs replace sunlight and nutrient solution can replace soil. Examples include Japan's Spread, the Netherlands' PlantLab, and urban vegetable production in Singapore.

These systems can operate throughout the year, avoid occupying fertile farmland, reduce pesticide needs, and produce many times the output per unit footprint of open fields.

### 3. Growing in Special Environments

Red and blue LEDs have supported lettuce growing on the International Space Station, providing fresh food and a connection to living plants. Supplementary lighting can also help polar stations, remote islands and ocean-going vessels reduce dependence on supplies.

Disused factories and underground shelters can become urban farms, reusing spaces within the food system.

### 4. Energy and Sustainability

Electricity can account for around 60–80% of plant-factory costs, making LED efficiency and renewable power important. Electricity emissions must be balanced against reductions in transport and refrigeration; the overall outcome depends on the system.

LED waste heat can be recovered for heating. Closed nutrient-solution loops can reduce water use by more than 90%.

### 5. Future Directions

Tunable spectra may help produce crops with selected characteristics, such as tomatoes rich in lycopene. AI can adjust lighting to measured growth. Small home plant factories may become kitchen appliances.

Supplementary lighting extends the possibilities of sunlight. Making an RGB light respond to darkness is a small experiment in giving plants the light they need.
