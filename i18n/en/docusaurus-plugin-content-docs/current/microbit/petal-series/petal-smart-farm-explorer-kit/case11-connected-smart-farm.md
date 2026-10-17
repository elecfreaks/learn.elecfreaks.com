---
sidebar_position: 13
sidebar_label: "Case 11: Complete Smart Farm · Cloud Integration"
description: "Combine lessons 9 and 10 with local automation, cloud data uploads and remote web control to build a complete IoT smart farm."
---

# Case 11: Complete Smart Farm · Cloud Integration

## Introduction

Combine lessons 9 and 10 with local automation, cloud data uploads and remote web control to build a complete IoT smart farm.

![Case 11 smart greenhouse](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/case_11_intro.jpg)

## Learning Objectives

1. Integrate local feedback control with cloud communication.

2. Understand how automatic and remote control modes coexist.

## Teaching Preparation

| Image | Item | Quantity | Notes |
| --- | --- | --- | --- |
| | Smart Farm Explorer Kit | 1 | Includes basswood structural parts |
| ![micro:bit](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/prep_microbit.png) | micro:bit | 1 | Prepare separately |
| ![PC](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/prep_pc.png) | PC | 1 | Prepare separately |

## Lesson Introduction

You have learned each function separately. Now make them work together: the farm normally cares for itself, while you can intervene through the platform whenever needed.

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

3. Enter a project name, such as `smart_farm_11`, and click **Create**.

   ![Name the project and click Create](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/setup_03_name_create.png)

### Add the Extension

1. Click **Extensions** in the MakeCode toolbox.

   ![Click Extensions](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/setup_04_extensions.png)

2. Search for `petal`.

   ![Search for petal](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/setup_05_petal_search.png)

3. Select the petal extension with the ELECFREAKS logo.

### Write the Program

![Case 11 program blocks](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/program-case-11-white.png)

Use the preview below to view and run the complete program, or open the shared project in MakeCode to edit it.

<div style={{ position: 'relative', paddingBottom: '60%', overflow: 'hidden' }}>
    <iframe
        title={"Case 11: Complete Smart Farm · Cloud Integration MakeCode sample program"}
        src="https://makecode.microbit.org/_AekceqTebTR5?lang=en&embed=1"
        frameBorder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{ position: 'absolute', width: '100%', height: '100%' }}
    />
</div>

**MakeCode project:** [https://makecode.microbit.org/_AekceqTebTR5](https://makecode.microbit.org/_AekceqTebTR5)

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

Combine local automatic control, cloud uploads and remote web control: soil-controlled irrigation, light-controlled supplementary lighting, temperature and humidity display and alarms, with cloud monitoring and control.

![Case 11 demonstration](../../../../../../../docs/microbit/petal-series/petal-smart-farm-explorer-kit/images/case_08_result.gif)

## Extended Knowledge

When sensing, control, networking and decisions work together, individual devices become a connected system. The complete smart farm is a small example of this integration.

### 1. The Value of Integration

Separate technologies have limited value in isolation. Linking their data and decisions can make the whole more effective than its parts. A single dashboard for irrigation, lighting, ventilation and alarms reduces the burden on operators.

Local automatic control provides a dependable foundation, while cloud coordination can improve broader decisions.

### 2. The Smart Agriculture Supply Chain

Upstream suppliers make sensors, chips, communication modules and intelligent equipment. Platform and algorithm companies provide data and decision services. Growers, cooperatives, retailers and consumers participate downstream in a more transparent supply chain.

Subsidies, insurance and carbon markets can provide policy and financial support.

### 3. Supporting Sustainable Agriculture

Precise use of water and fertilizer reduces waste and pollution. Photovoltaic agriculture and recirculating hydroponics can reduce environmental impacts, while market premiums for greener produce can support farmers. Local, intelligent production can strengthen resilience to disruptions.

### 4. Policy and Standards

Many countries connect smart agriculture with food security and rural development. Shared data interfaces, communication protocols and security standards are necessary to reduce data silos. Demonstration sites in agricultural parks and schools can help develop approaches that others can adopt.

### 5. Lessons from Global Examples

The Netherlands combines glass greenhouses with data-driven cultivation for high productivity per unit area. Israel combines drip irrigation and IoT in arid agriculture and exports related technology. China applies BeiDou positioning, 5G and drones at scale.

A smart farm is an interacting system rather than a pile of equipment. Your integrated miniature farm models the move toward understanding, using and adapting to environmental conditions.
