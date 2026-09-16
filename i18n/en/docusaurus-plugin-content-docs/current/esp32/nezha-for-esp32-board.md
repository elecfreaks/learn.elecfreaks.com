# Nezha For ESP32 Board

<img src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/esp32/images/nezha-for-esp32-board-101.png" alt="Nezha For ESP32 Board" height="250"/>

***

## Overview

The Nezha For ESP32 Board is a core controller designed for K–12 coding education, robotics competitions, and AIoT projects.

Its modular controller-and-sensor design works with building-block systems. Students can use it for introductory coding, sensor projects, robot control, smart environmental monitoring, and creative construction. A fully enclosed housing protects the electronics, while keyed RJ11 ports and a color-coded port system help students connect sensors and expansion modules quickly in classrooms, clubs, and competitions.

The Nezha For ESP32 Board supports block-based programming with MicroBlocks, as well as MicroPython and Python. It can also connect to the Smart IoT platform for data visualization and project expansion.

**SKU: EF03480**

***

## Features
![Nezha For ESP32 Board feature overview](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/esp32/images/nezha-for-esp32-board-en-102.jpg)

### Fully Enclosed Protective Housing

The fully enclosed housing helps reduce the risk of hardware damage caused by drops and impacts during classroom activities, model building, and competition testing.

![Drop-resistance demonstration](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/esp32/images/nezha-for-esp32-board-103.gif)

***

### Keyed RJ11 Ports

Keyed RJ11 ports help prevent reversed or incorrect connections and reduce connector wear. This design is well suited to large classes and younger learners.

![Connecting and disconnecting an RJ11 cable](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/esp32/images/nezha-for-esp32-board-104.gif)

***

### Color-Coded Port System

Different colors identify different port types. This helps students find the correct connection quickly and reduces classroom troubleshooting time.

| Port Color | Port Type | Description |
| --- | --- | --- |
| Yellow | Analog / digital | Connects compatible analog or digital modules |
| Orange | Digital | Connects digital modules |
| Blue | IIC | Connects modules that use IIC communication |
| Red | Motor | Connects motors or supported actuators |

![Color-coded port system](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/esp32/images/nezha-for-esp32-board-105.gif)

***

### Block-Based Programming with MicroBlocks

The board supports block-based programming with MicroBlocks for K–12 coding lessons and hands-on classroom projects. Students can build programs with visual blocks and develop projects that use the controller and connected sensors.

![MicroBlocks programming demonstration](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/esp32/images/nezha-for-esp32-board-106.gif)

***

### Wired and Bluetooth Programming

The board supports both wired and Bluetooth programming. Users can choose the most suitable connection for classroom activities or robotics competitions, reducing the need to reconnect cables during testing.

![Wired and Bluetooth connection options](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/esp32/images/nezha-for-esp32-board-107.gif)

***


### Built-In Input and Output Components

The Nezha For ESP32 Board includes essential input and output components, enabling students to complete beginner projects without external modules.

| Onboard Component | Typical Uses |
| --- | --- |
| 2.4-inch color display | Displays program interfaces, sensor readings, prompts, and project status |
| Three programmable buttons | Provides program input, menu navigation, and interactive control |
| Three RGB LEDs | Provides status indications, program feedback, and lighting effects |
| Ambient light sensor | Measures ambient light for projects such as automatic lighting, light logging, and sunshade alerts |
| Dual noise-reducing microphone array | Detects sound for noise monitoring, voice interaction, and AIoT projects |
| Gyroscope | Detects orientation and movement for tilt sensing, motion control, and robotics projects |
| Speaker | Provides audio feedback and notification tones |

![Custom functions for the onboard buttons](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/esp32/images/nezha-for-esp32-board-108.gif)

***

### Smart IoT Platform Support

The board can connect to the Smart IoT platform. Users can create project-specific dashboards to display and record data in real time.

![Smart IoT dashboard demonstration](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/esp32/images/nezha-for-esp32-board-109.gif)

***

### Support for Modular Building Systems

The board is designed to work with commonly available studded building blocks and modular beam-and-connector structural components. These parts can be used to build robots, environmental monitoring systems, smart devices, and other creative projects.

***

## Specifications

| Item | Specification |
| --- | --- |
| Product Name | Nezha For ESP32 Board |
| SKU | EF03480 |
| Main Controller | ESP32-S3, dual-core, 240 MHz |
| Dimensions | 80 × 60 × 36 mm |
| Net Weight | 140 g |
| Charging Port | USB Type-C |
| Recommended Charging Input | 5 V / 3 A |
| Charging Time | Approximately 60 minutes |
| Battery | Built-in 7.4 V / 900 mAh lithium battery |
| Display | 2.4-inch, 240 × 320 color display |
| Onboard Inputs | Three programmable buttons, ambient light sensor, dual noise-reducing microphone array, and gyroscope |
| Onboard Outputs | Three RGB LEDs, speaker, and display |
| Programming Languages and Environments | MicroBlocks, MicroPython |
| Programming Connections | Wired and Bluetooth |
| IoT Support | Smart IoT platform |
| Building-System Support | Designed to work with commonly available studded building blocks and modular beam-and-connector structural components |

***

### Power Indicator

The power indicator shows power-on, power-off, battery-level, and charging states.

| Status | Indicator Behavior |
| --- | --- |
| Powering on | Flashes green once |
| Powering off | Flashes red once |
| Powered off | Off |
| Battery &gt; 50% | Solid green |
| 20% &lt; battery ≤ 50% | Solid yellow |
| 10% &lt; battery ≤ 20% | Solid red |
| Battery ≤ 9% | Rapid red flashing |
| Charging while powered on | Slowly flashes in the current battery-level color |
| Charging while powered off | Slowly flashes red |
| Fully charged | Solid green |

***

## User Interface

***

### Button Functions

The current development firmware and the planned production release use different menu controls. In user programs, all three buttons can also be assigned custom functions.

| Version | A Button | B Button | C Button |
| --- | --- | --- | --- |
| Current development version | Back | Confirm | Next option |
| Production version | Back | Switch option | Confirm |

***

### Main Screens

#### Home Screen
The default screen displayed at startup.

<img src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/esp32/images/nezha-for-esp32-board-en-110.jpg" alt="User interface home screen" height="300"/>

#### Run and Load Programs
From the Home screen, press button A once to open this page in the current development version.

<img src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/esp32/images/nezha-for-esp32-board-en-111.jpg" alt="Run and load programs screen" height="300"/>

#### Module Selection
From the Home screen, press button C once to open this page in the current development version.

<img src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/esp32/images/nezha-for-esp32-board-en-112.jpg" alt="Module selection screen" height="300"/>



***



## Quick Start

### Open MicroBlocks

Development and testing access:

[https://www.smartiot.space/microblocks/](https://www.smartiot.space/microblocks/)

> **Development note:** The Smart IoT branch of MicroBlocks is intended for early-stage development, testing, and evaluation. It will be closed after the product is officially launched.

Production access after launch: [https://microblocksfun.cn/run/microblocks.html](https://microblocksfun.cn/run/microblocks.html)

***

### Connect the Board

![Choose a connection method](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/esp32/images/nezha-for-esp32-board-en-113.png)

- **Wired connection:** Connect the Nezha For ESP32 Board to your computer with a USB Type-C data cable.

<img src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/esp32/images/nezha-for-esp32-board-114.jpg" alt="Wired connection" height="300"/>

- **Wireless connection:** Connect the Nezha For ESP32 Board to your computer via Bluetooth.

<img src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/esp32/images/nezha-for-esp32-board-en-115.png" alt="Bluetooth connection" height="300"/>

***

### Update the Firmware (Optional)

Follow these steps to update the firmware on the Nezha For ESP32 Board.

1. In MicroBlocks, select the option to update firmware from a URL.

![Select the firmware update from URL option](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/esp32/images/nezha-for-esp32-board-en-116.png)

2. Use the following URL to download the firmware file:

   **Firmware version:** V0.9.3  
   **Firmware update date:** 26/08/28

   [https://www.smartiot.space/static_resource/NEZHA-ESP32-S3_all.bin](https://www.smartiot.space/static_resource/NEZHA-ESP32-S3_all.bin)

![Enter the firmware URL](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/esp32/images/nezha-for-esp32-board-en-117.jpg)

3. After the firmware file has downloaded, press and hold the power button to turn on the Nezha For ESP32 Board. Connect the board to a computer with a USB-C data cable.

![Connect the board to a computer](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/esp32/images/nezha-for-esp32-board-en-118.png)

4. Select the corresponding serial port to begin the firmware update.

![Select the serial port](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/esp32/images/nezha-for-esp32-board-en-119.png)

5. When the update-complete message appears, disconnect the USB-C cable and restart the Nezha For ESP32 Board.

![Firmware update complete](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/esp32/images/nezha-for-esp32-board-en-120.png)

***

### Add the Nezha ESP32 Extension Library

Add the dedicated extension library to use the blocks for the Nezha For ESP32 Board.

Current library path: **Libraries → Elecfreaks → Nezha ESP32 → Board**

![Add the Nezha ESP32 extension library](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/esp32/images/nezha-for-esp32-board-en-121.png)

***

## Programming Block Categories

| Category | Description | Status |
| --- | --- | --- |
| Basic Control | Read device information, initialize the board, and set its operating state |  |
| Display | Show text, values, icons, or pages on the color display |  |
| Button Input | Read the state of buttons A, B, and C |  |
| RGB LEDs | Set the color of one or all RGB LEDs |  |
| Onboard Light Sensor | Read ambient light data |  |
| Onboard Microphone | Read sound or noise data |  |
| Onboard Gyroscope | Read orientation, tilt, or motion data |  |
| External Sensors | Read data from sensors connected through RJ11 ports |  |
| Motion | Control motor speed, direction, stop commands, and motion states |  |
| IoT Platform | Upload data to the Smart IoT platform |  |

***

## Example Programs

### Example 1: Light-Activated Music Alarm

This example reads the onboard ambient light sensor. When the light level reaches or exceeds 3,000 lux, the board plays music.

<a href="https://microblocks.fun/run/microblocks.html?project=projectName%20%27%27%0A%0Amodule%20main%0Aauthor%20unknown%0Aversion%201%200%20%0Adescription%20%27%27%0A%0Ascript%20269%20224%20%7B%0AwhenStarted%0Aforever%20%7B%0A%20%20if%20%28%28%27%5Bdata%3AconvertType%5D%27%20%28%27%5Belfreaks_dev_sensor%3AlightLevel%5D%27%29%20%27number%27%29%20%3E%3D%203000%29%20%7B%0A%20%20%20%20efsound_play_sound%20%27Chinese%20style%27%20%27background%20off%27%0A%20%20%7D%20else%20%7B%0A%20%20%20%20efsound_stop_all_sounds%0A%20%20%7D%0A%7D%0A%7D%0A%0A%0Amodule%20KPBoardSensor%20Black%0Aauthor%20%27Elecfreaks%20Team%27%0Aversion%201%200%20%0Atags%20smallmv%20esp32%20onboard%20button%20light%20%0Achoices%20EFEsp32_lvglTitleBarState%20show%20hide%20%0Achoices%20efsound_beatFraction%20%271%27%20%271%2F2%27%20%271%2F4%27%20%271%2F8%27%20%271%2F16%27%20%272%27%20%274%27%20%0Achoices%20ioAdcPort%20J1%20J2%20J3%20J4%20%0Achoices%20efsound_stopMode%20all%20foreground%20background%20%0Achoices%20efsound_soundName%20%27Chinese%20style%27%20country%20symphony%20lyrical%20Japanese%20punk%20pop%20%27jazz%20music%27%20blues%20%27door%20opening%27%20%27birthday%20song%27%20wind%20rain%20thunder%20%0Achoices%20efsound_noteBase%20C%20%27C%23%27%20D%20Eb%20E%20F%20%27F%23%27%20G%20%27G%23%27%20A%20Bb%20B%20%0Achoices%20smvSoundMenu%20notification%20confirmation%20error%20start%20stop%20%0Achoices%20smvButtonMenu%20A%20B%20C%20%27A%2BB%27%20%27A%2BC%27%20%27B%2BC%27%20%0Achoices%20efsound_melodyMenu%20%27C%20D%20E%20F%20G%20A%20B%20C5%27%20%27C5%20B%20A%20G%20F%20E%20D%20C%27%20%27C%20E%20G%20C5%27%20%27C%20F%20A%20C5%27%20%27C%20D%20E%20C%20C%20D%20E%20C%27%20%27G%20G%20A%20G%20C5%20B%27%20%0Achoices%20efsound_playbackMode%20%27until%20done%27%20%27in%20background%27%20%27looping%20in%20background%27%20%0Achoices%20smvButtonPressReleaseMenu%20pressed%20released%20%0Achoices%20efsound_note%20C%20%27C%23%27%20D%20Eb%20E%20F%20%27F%23%27%20G%20%27G%23%27%20A%20Bb%20B%20C3%20%27C%233%27%20D3%20Eb3%20E3%20F3%20%27F%233%27%20G3%20%27G%233%27%20A3%20Bb3%20B3%20C4%20%27C%234%27%20D4%20Eb4%20E4%20F4%20%27F%234%27%20G4%20%27G%234%27%20A4%20Bb4%20B4%20C5%20%27C%235%27%20D5%20Eb5%20E5%20F5%20%27F%235%27%20G5%20%27G%235%27%20A5%20Bb5%20B5%20%0Achoices%20efsound_backgroundMode%20%27background%20off%27%20%27background%20on%27%20%0Adescription%20%27KunPen%20board%20blocks%20for%20A%2FB%2FC%20button%20events%2C%20device%20version%2C%20light%20and%20noise%20readings%2C%20onboard%20RGB%20LEDs%2C%20port%20fan%20control%2C%20I2C%20scanning%2C%20screen%20text%20objects%2C%20and%20sound%20control.%27%0Avariables%20_smv_buttonEdges%20_EFEsp32_lvgl_bgColor%20_EFEsp32_lvgl_penColor%20_EFEsp32_lvgl_spinnerId%20_EFEsp32_lvgl_progressId%20_efsound_tempo%20_efsound_play_id%20_efsound_bg_melody%20_efsound_bg_bpm%20_efsound_bg_loop%20%0A%0A%20%20spec%20%27r%27%20%27smv_buttonEvent%27%20%27SMALLMV%20button%20_%20_%20event%3F%27%20%27menu.smvButtonMenu%20menu.smvButtonPressReleaseMenu%27%20%27A%27%20%27pressed%27%0A%20%20spec%20%27r%27%20%27%5Belfreaks_dev_sensor%3AdeviceVersion%5D%27%20%27device%20version%27%0A%20%20spec%20%27r%27%20%27%5Belfreaks_dev_sensor%3AlightLevel%5D%27%20%27light%20level%20%28lux%29%27%0A%20%20spec%20%27r%27%20%27%5Belfreaks_dev_sensor%3AnoiseDb%5D%27%20%27noise%20level%20%28dB%29%27%0A%20%20space%0A%20%20spec%20%27%20%27%20%27smv_board_rgb%27%20%27set%20RGB%20_%20to%20_%27%20%27menu.range%3A1-3%20color%27%201%0A%20%20spec%20%27%20%27%20%27smv_board_rgb_all%27%20%27set%20all%20RGB%20LEDs%20to%20_%27%20%27color%27%0A%20%20spec%20%27%20%27%20%27smv_board_rgb_off%27%20%27turn%20off%20all%20RGB%20LEDs%27%0A%20%20space%0A%20%20spec%20%27%20%27%20%27motorFan%27%20%27_%20turn%20_%20%3A%20speed%20_%20%25%27%20%27menu.ioAdcPort%20bool%20num%27%20%27J1%27%20false%20100%0A%20%20space%0A%20%20spec%20%27r%27%20%27%5Belfreaks_dev_sensor%3Ai2cPortScan%5D%27%20%27scan%20I2C_PORT%20addresses%20timeout%20_%20ms%27%20%27num%27%2010%0A%20%20space%0A%20%20spec%20%27%20%27%20%27EFEsp32_lvgl_title_bar%27%20%27_%20title%20bar%27%20%27menu.EFEsp32_lvglTitleBarState%27%20%27show%27%0A%20%20spec%20%27%20%27%20%27EFEsp32_lvgl_set_bg%27%20%27screen%20background%20color%20_%27%20%27color%27%0A%20%20spec%20%27%20%27%20%27EFEsp32_lvgl_set_pen%27%20%27pen%20color%20_%27%20%27color%27%0A%20%20space%0A%20%20spec%20%27r%27%20%27EFEsp32_screenText%27%20%27create%20text%20_%20x%20_%20y%20_%20width%20_%20lines%20_%20color%20_%20background%20_%20wrap%20_%20and%20return%20object%20ID%27%20%27str%20num%20num%20num%20num%20color%20color%20bool%27%20%27text%27%200%2032%20240%201%20nil%20nil%20false%0A%20%20spec%20%27%20%27%20%27EFEsp32_screenUpdateText%27%20%27update%20ID%20_%20text%20_%20x%20_%20y%20_%20width%20_%20lines%20_%20color%20_%20background%20_%20wrap%20_%27%20%27num%20str%20num%20num%20num%20num%20color%20color%20bool%27%201%20%27text%27%200%2032%20240%201%20nil%20nil%20false%0A%20%20spec%20%27%20%27%20%27EFEsp32_screenDelete%27%20%27delete%20object%20ID%20_%27%20%27num%27%201%0A%20%20space%0A%20%20spec%20%27%20%27%20%27efsound_play_melody%27%20%27play%20melody%20_%20at%20tempo%20_%20bpm%20_%27%20%27str.efsound_melodyMenu%20num%20menu.efsound_playbackMode%27%20%27C%20D%20E%20F%20G%20A%20B%20C5%27%20120%20%27until%20done%27%0A%20%20spec%20%27%20%27%20%27efsound_play_sound%27%20%27play%20sound%20_%20background%20_%27%20%27menu.efsound_soundName%20menu.efsound_backgroundMode%27%20%27Chinese%20style%27%20%27background%20off%27%0A%20%20spec%20%27%20%27%20%27efsound_set_volume%27%20%27set%20volume%20to%20_%20%25%27%20%27num%27%20100%0A%20%20spec%20%27%20%27%20%27efsound_play_tone%27%20%27play%20tone%20_%20Hz%20for%20_%20ms%27%20%27num%20num%27%20440%20500%0A%20%20spec%20%27%20%27%20%27efsound_play_note%27%20%27play%20note%20_%20octave%20_%20for%20_%20ms%27%20%27menu.efsound_noteBase%20num%20num%27%20%27C%27%204%20500%0A%20%20spec%20%27%20%27%20%27efsound_ring_tone%27%20%27ring%20tone%20_%20Hz%27%20%27num%27%20440%0A%20%20spec%20%27%20%27%20%27efsound_rest%27%20%27rest%20for%20_%20ms%27%20%27num%27%20500%0A%20%20spec%20%27%20%27%20%27efsound_stop_melody%27%20%27stop%20melody%20_%27%20%27menu.efsound_stopMode%27%20%27all%27%0A%20%20spec%20%27%20%27%20%27efsound_stop_all_sounds%27%20%27stop%20all%20sounds%27%0A%20%20space%0A%20%20spec%20%27r%27%20%27efsound_note_frequency%27%20%27note%20_%20frequency%27%20%27menu.efsound_note%27%20%27C%27%0A%20%20spec%20%27r%27%20%27efsound_beat%27%20%27_%20beat%27%20%27menu.efsound_beatFraction%27%201%0A%20%20spec%20%27r%27%20%27efsound_tempo%27%20%27tempo%20bpm%27%0A%20%20spec%20%27%20%27%20%27efsound_change_tempo_by%27%20%27change%20tempo%20by%20_%20bpm%27%20%27num%27%2020%0A%20%20spec%20%27%20%27%20%27efsound_set_tempo%27%20%27set%20tempo%20to%20_%20bpm%27%20%27num%27%20120%0A%0Ato%20EFEsp32_lvgl_set_bg%20color%20%7B%0A%20%20%27_EFEsp32_lvgl_defaults%27%0A%20%20_EFEsp32_lvgl_bgColor%20%3D%20color%0A%20%20%27%5Btft%3AscreenSetBackground%5D%27%20color%0A%20%20%27_EFEsp32_lvgl_forget_objects%27%0A%7D%0A%0Ato%20EFEsp32_lvgl_text_at%20x%20y%20text%20%7B%0A%20%20%27_EFEsp32_lvgl_defaults%27%0A%20%20%27%5Btft%3AscreenText%5D%27%20text%20x%20y%20%28maximum%201%20%28%28%27%5Btft%3AgetWidth%5D%27%29%20-%20x%29%29%201%20_EFEsp32_lvgl_penColor%20-1%20false%0A%7D%0A%0Ato%20EFEsp32_lvgl_title_bar%20state%20%7B%0A%20%20if%20%28or%20%28state%20%3D%3D%20%27hide%27%29%20%28state%20%3D%3D%20%27%E9%9A%90%E8%97%8F%27%29%29%20%7B%0A%20%20%20%20%27%5Btft%3AscreenSetTitleBarVisible%5D%27%20false%0A%20%20%7D%20else%20%7B%0A%20%20%20%20%27%5Btft%3AscreenSetTitleBarVisible%5D%27%20true%0A%20%20%7D%0A%7D%0A%0Ato%20EFEsp32_screenDelete%20id%20%7B%0A%20%20%27%5Btft%3AscreenDelete%5D%27%20id%0A%7D%0A%0Ato%20EFEsp32_screenText%20text%20x%20y%20width%20lines%20color%20bgColor%20wrap%20%7B%0A%20%20return%20%28%27%5Btft%3AscreenText%5D%27%20text%20x%20y%20width%20lines%20color%20bgColor%20wrap%29%0A%7D%0A%0Ato%20EFEsp32_screenUpdateText%20id%20text%20x%20y%20width%20lines%20color%20bgColor%20wrap%20%7B%0A%20%20%27%5Btft%3AscreenUpdateText%5D%27%20id%20text%20x%20y%20width%20lines%20color%20bgColor%20wrap%0A%7D%0A%0Ato%20%27_EFEsp32_lvgl_defaults%27%20%7B%0A%20%20if%20%28isNil%20_EFEsp32_lvgl_bgColor%29%20%7B_EFEsp32_lvgl_bgColor%20%3D%2016777215%7D%0A%20%20if%20%28isNil%20_EFEsp32_lvgl_penColor%29%20%7B_EFEsp32_lvgl_penColor%20%3D%200%7D%0A%7D%0A%0Ato%20%27_EFEsp32_lvgl_forget_objects%27%20%7B%0A%20%20_EFEsp32_lvgl_spinnerId%20%3D%200%0A%20%20_EFEsp32_lvgl_progressId%20%3D%200%0A%7D%0A%0Ato%20%27_efsound_background_loop%27%20%7B%0A%20%20local%20%27my_id%27%20_efsound_play_id%0A%20%20repeatUntil%20%28my_id%20%21%3D%20_efsound_play_id%29%20%7B%0A%20%20%20%20local%20%27played%27%20%28%27_efsound_play_melody_once%27%20_efsound_bg_melody%20my_id%29%0A%20%20%20%20if%20%28not%20played%29%20%7B%0A%20%20%20%20%20%20return%200%0A%20%20%20%20%7D%0A%20%20%20%20if%20%28not%20_efsound_bg_loop%29%20%7B%0A%20%20%20%20%20%20return%200%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%0Ato%20%27_efsound_init%27%20%7B%0A%20%20if%20%28_efsound_tempo%20%3C%3D%200%29%20%7B_efsound_tempo%20%3D%20120%7D%0A%20%20if%20%28_efsound_play_id%20%3D%3D%200%29%20%7B_efsound_play_id%20%3D%201%7D%0A%7D%0A%0Ato%20%27_efsound_note_frequency_from_string%27%20note%20%7B%0A%20%20note%20%3D%20%28%27_efsound_upper_trimmed%27%20note%29%0A%20%20if%20%28or%20%28note%20%3D%3D%20%27%27%29%20%28or%20%28note%20%3D%3D%20%27-%27%29%20%28note%20%3D%3D%20%27R%27%29%29%29%20%7B%0A%20%20%20%20return%200%0A%20%20%7D%0A%20%20local%20%27name%27%20%28at%201%20note%29%0A%20%20local%20%27pos%27%202%0A%20%20if%20%28%28size%20note%29%20%3E%3D%202%29%20%7B%0A%20%20%20%20local%20%27acc%27%20%28at%202%20note%29%0A%20%20%20%20if%20%28or%20%28acc%20%3D%3D%20%27%23%27%29%20%28acc%20%3D%3D%20%27B%27%29%29%20%7B%0A%20%20%20%20%20%20name%20%3D%20%28%27%5Bdata%3Ajoin%5D%27%20name%20acc%29%0A%20%20%20%20%20%20pos%20%3D%203%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20local%20%27octave%27%204%0A%20%20if%20%28%28size%20note%29%20%3E%3D%20pos%29%20%7B%0A%20%20%20%20local%20%27ch%27%20%28%27%5Bdata%3AunicodeAt%5D%27%20pos%20note%29%0A%20%20%20%20if%20%28and%20%2848%20%3C%3D%20ch%29%20%28ch%20%3C%3D%2057%29%29%20%7B%0A%20%20%20%20%20%20octave%20%3D%20%28ch%20-%2048%29%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20local%20%27semitone%27%20%28%27_efsound_semitone%27%20name%29%0A%20%20if%20%28semitone%20%3C%3D%200%29%20%7B%0A%20%20%20%20return%200%0A%20%20%7D%0A%20%20local%20%27freqs%27%20%28%27%5Bdata%3AmakeList%5D%27%20262%20277%20294%20311%20330%20349%20370%20392%20415%20440%20466%20494%29%0A%20%20local%20%27freq%27%20%28at%20semitone%20freqs%29%0A%20%20if%20%28octave%20%3C%204%29%20%7B%0A%20%20%20%20repeat%20%284%20-%20octave%29%20%7B%0A%20%20%20%20%20%20freq%20%3D%20%28freq%20%2F%202%29%0A%20%20%20%20%7D%0A%20%20%7D%20else%20%7B%0A%20%20%20%20repeat%20%28octave%20-%204%29%20%7B%0A%20%20%20%20%20%20freq%20%3D%20%28freq%20%2A%202%29%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20return%20freq%0A%7D%0A%0Ato%20%27_efsound_play_melody_once%27%20melody%20playId%20%7B%0A%20%20local%20%27tokens%27%20%28%27%5Bdata%3Asplit%5D%27%20melody%20%27%20%27%29%0A%20%20for%20i%20%28size%20tokens%29%20%7B%0A%20%20%20%20if%20%28and%20%28playId%20%3E%200%29%20%28playId%20%21%3D%20_efsound_play_id%29%29%20%7Breturn%20%28booleanConstant%20false%29%7D%0A%20%20%20%20local%20%27token%27%20%28at%20i%20tokens%29%0A%20%20%20%20if%20%28token%20%21%3D%20%27%27%29%20%7B%0A%20%20%20%20%20%20%27_efsound_play_melody_token%27%20token%20_efsound_bg_bpm%20playId%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20return%20%28booleanConstant%20true%29%0A%7D%0A%0Ato%20%27_efsound_play_melody_token%27%20token%20bpm%20playId%20%7B%0A%20%20if%20%28and%20%28playId%20%3E%200%29%20%28playId%20%21%3D%20_efsound_play_id%29%29%20%7Breturn%200%7D%0A%20%20token%20%3D%20%28%27_efsound_upper_trimmed%27%20token%29%0A%20%20if%20%28token%20%3D%3D%20%27%27%29%20%7B%0A%20%20%20%20return%200%0A%20%20%7D%0A%20%20local%20%27note_part%27%20token%0A%20%20local%20%27duration_units%27%204%0A%20%20local%20%27colon%27%20%28%27%5Bdata%3Afind%5D%27%20%27%3A%27%20token%29%0A%20%20if%20%28colon%20%3E%200%29%20%7B%0A%20%20%20%20note_part%20%3D%20%28%27%5Bdata%3AcopyFromTo%5D%27%20token%201%20%28colon%20-%201%29%29%0A%20%20%20%20duration_units%20%3D%20%28%27%5Bdata%3AconvertType%5D%27%20%28%27%5Bdata%3AcopyFromTo%5D%27%20token%20%28colon%20%2B%201%29%29%20%27number%27%29%0A%20%20%20%20if%20%28duration_units%20%3C%3D%200%29%20%7B%0A%20%20%20%20%20%20duration_units%20%3D%204%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20local%20%27duration%27%20%28%28%2860000%20%2F%20bpm%29%20%2A%20duration_units%29%20%2F%204%29%0A%20%20local%20%27freq%27%20%28%27_efsound_note_frequency_from_string%27%20note_part%29%0A%20%20if%20%28freq%20%3C%3D%200%29%20%7B%0A%20%20%20%20efsound_rest%20duration%0A%20%20%7D%20else%20%7B%0A%20%20%20%20efsound_play_tone%20freq%20duration%0A%20%20%7D%0A%7D%0A%0Ato%20%27_efsound_semitone%27%20note%20%7B%0A%20%20note%20%3D%20%28%27_efsound_upper_trimmed%27%20note%29%0A%20%20if%20%28note%20%3D%3D%20%27C%27%29%20%7B%0A%20%20%20%20return%201%0A%20%20%7D%0A%20%20if%20%28or%20%28note%20%3D%3D%20%27C%23%27%29%20%28note%20%3D%3D%20%27DB%27%29%29%20%7B%0A%20%20%20%20return%202%0A%20%20%7D%0A%20%20if%20%28note%20%3D%3D%20%27D%27%29%20%7B%0A%20%20%20%20return%203%0A%20%20%7D%0A%20%20if%20%28or%20%28note%20%3D%3D%20%27D%23%27%29%20%28note%20%3D%3D%20%27EB%27%29%29%20%7B%0A%20%20%20%20return%204%0A%20%20%7D%0A%20%20if%20%28or%20%28note%20%3D%3D%20%27E%27%29%20%28note%20%3D%3D%20%27FB%27%29%29%20%7B%0A%20%20%20%20return%205%0A%20%20%7D%0A%20%20if%20%28or%20%28note%20%3D%3D%20%27F%27%29%20%28note%20%3D%3D%20%27E%23%27%29%29%20%7B%0A%20%20%20%20return%206%0A%20%20%7D%0A%20%20if%20%28or%20%28note%20%3D%3D%20%27F%23%27%29%20%28note%20%3D%3D%20%27GB%27%29%29%20%7B%0A%20%20%20%20return%207%0A%20%20%7D%0A%20%20if%20%28note%20%3D%3D%20%27G%27%29%20%7B%0A%20%20%20%20return%208%0A%20%20%7D%0A%20%20if%20%28or%20%28note%20%3D%3D%20%27G%23%27%29%20%28note%20%3D%3D%20%27AB%27%29%29%20%7B%0A%20%20%20%20return%209%0A%20%20%7D%0A%20%20if%20%28note%20%3D%3D%20%27A%27%29%20%7B%0A%20%20%20%20return%2010%0A%20%20%7D%0A%20%20if%20%28or%20%28note%20%3D%3D%20%27A%23%27%29%20%28note%20%3D%3D%20%27BB%27%29%29%20%7B%0A%20%20%20%20return%2011%0A%20%20%7D%0A%20%20if%20%28or%20%28note%20%3D%3D%20%27B%27%29%20%28note%20%3D%3D%20%27CB%27%29%29%20%7B%0A%20%20%20%20return%2012%0A%20%20%7D%0A%20%20return%200%0A%7D%0A%0Ato%20%27_efsound_sound_asset_name%27%20soundName%20%7B%0A%20%20if%20%28or%20%28soundName%20%3D%3D%20%27Chinese%20style%27%29%20%28soundName%20%3D%3D%20%27%E4%B8%AD%E5%9B%BD%E9%A3%8E%27%29%29%20%7Breturn%20%27china_style%27%7D%0A%20%20if%20%28or%20%28soundName%20%3D%3D%20%27country%27%29%20%28soundName%20%3D%3D%20%27%E4%B9%A1%E6%9D%91%27%29%29%20%7Breturn%20%27country%27%7D%0A%20%20if%20%28or%20%28soundName%20%3D%3D%20%27symphony%27%29%20%28soundName%20%3D%3D%20%27%E4%BA%A4%E5%93%8D%27%29%29%20%7Breturn%20%27symphony%27%7D%0A%20%20if%20%28or%20%28soundName%20%3D%3D%20%27lyrical%27%29%20%28soundName%20%3D%3D%20%27%E6%8A%92%E6%83%85%27%29%29%20%7Breturn%20%27lyrical%27%7D%0A%20%20if%20%28or%20%28soundName%20%3D%3D%20%27Japanese%27%29%20%28soundName%20%3D%3D%20%27%E6%97%A5%E5%BC%8F%27%29%29%20%7Breturn%20%27japanese%27%7D%0A%20%20if%20%28or%20%28soundName%20%3D%3D%20%27punk%27%29%20%28soundName%20%3D%3D%20%27%E6%9C%8B%E5%85%8B%27%29%29%20%7Breturn%20%27punk_music%27%7D%0A%20%20if%20%28or%20%28soundName%20%3D%3D%20%27pop%27%29%20%28soundName%20%3D%3D%20%27%E6%B5%81%E8%A1%8C%27%29%29%20%7Breturn%20%27pop_music%27%7D%0A%20%20if%20%28or%20%28soundName%20%3D%3D%20%27jazz%20music%27%29%20%28soundName%20%3D%3D%20%27%E7%88%B5%E5%A3%AB%27%29%29%20%7Breturn%20%27jazz%27%7D%0A%20%20if%20%28or%20%28soundName%20%3D%3D%20%27blues%27%29%20%28soundName%20%3D%3D%20%27%E8%93%9D%E8%B0%83%27%29%29%20%7Breturn%20%27blues%27%7D%0A%20%20if%20%28or%20%28soundName%20%3D%3D%20%27door%20opening%27%29%20%28soundName%20%3D%3D%20%27%E5%BC%80%E9%97%A8%E5%A3%B0%27%29%29%20%7Breturn%20%27door_open%27%7D%0A%20%20if%20%28or%20%28soundName%20%3D%3D%20%27birthday%20song%27%29%20%28soundName%20%3D%3D%20%27%E7%94%9F%E6%97%A5%E6%AD%8C%27%29%29%20%7Breturn%20%27birthday%27%7D%0A%20%20if%20%28or%20%28soundName%20%3D%3D%20%27wind%27%29%20%28soundName%20%3D%3D%20%27%E9%A3%8E%E5%A3%B0%27%29%29%20%7Breturn%20%27wind%27%7D%0A%20%20if%20%28or%20%28soundName%20%3D%3D%20%27rain%27%29%20%28soundName%20%3D%3D%20%27%E9%9B%A8%E5%A3%B0%27%29%29%20%7Breturn%20%27rain%27%7D%0A%20%20if%20%28or%20%28soundName%20%3D%3D%20%27thunder%27%29%20%28soundName%20%3D%3D%20%27%E6%89%93%E9%9B%B7%E5%A3%B0%27%29%29%20%7Breturn%20%27thunder%27%7D%0A%20%20return%20%28%27%5Bdata%3Ajoin%5D%27%20%27%27%20soundName%29%0A%7D%0A%0Ato%20%27_efsound_upper_trimmed%27%20s%20%7B%0A%20%20local%20%27result%27%20%28newList%20%28size%20s%29%29%0A%20%20%27%5Bdata%3Adelete%5D%27%20%27all%27%20result%0A%20%20for%20i%20%28size%20s%29%20%7B%0A%20%20%20%20local%20%27ch%27%20%28%27%5Bdata%3AunicodeAt%5D%27%20i%20s%29%0A%20%20%20%20if%20%28ch%20%3E%2032%29%20%7B%0A%20%20%20%20%20%20if%20%28and%20%2897%20%3C%3D%20ch%29%20%28ch%20%3C%3D%20122%29%29%20%7Bch%20%3D%20%28ch%20-%2032%29%7D%0A%20%20%20%20%20%20%27%5Bdata%3AaddLast%5D%27%20ch%20result%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20return%20%28%27%5Bdata%3AunicodeString%5D%27%20result%29%0A%7D%0A%0Ato%20%27_smv_buttonEdgeEntry%27%20key%20%7B%0A%20%20if%20%28_smv_buttonEdges%20%3D%3D%200%29%20%7B_smv_buttonEdges%20%3D%20%28%27%5Bdata%3AmakeList%5D%27%29%7D%0A%20%20for%20edge%20_smv_buttonEdges%20%7B%0A%20%20%20%20if%20%28%28at%201%20edge%29%20%3D%3D%20key%29%20%7Breturn%20edge%7D%0A%20%20%7D%0A%20%20local%20%27newEdge%27%20%28%27%5Bdata%3AmakeList%5D%27%20key%20false%20false%20false%29%0A%20%20%27%5Bdata%3AaddLast%5D%27%20newEdge%20_smv_buttonEdges%0A%20%20return%20newEdge%0A%7D%0A%0Ato%20%27_smv_buttonNow%27%20button%20%7B%0A%20%20local%20%27aPressed%27%20%28%27%5Belfreaks_dev_sensor%3AbuttonA%5D%27%29%0A%20%20local%20%27bPressed%27%20%28%27%5Belfreaks_dev_sensor%3AbuttonB%5D%27%29%0A%20%20local%20%27cPressed%27%20%28%27%5Belfreaks_dev_sensor%3AbuttonC%5D%27%29%0A%20%20if%20%28button%20%3D%3D%20%27A%27%29%20%7B%0A%20%20%20%20return%20aPressed%0A%20%20%7D%20%28button%20%3D%3D%20%27B%27%29%20%7B%0A%20%20%20%20return%20bPressed%0A%20%20%7D%20%28button%20%3D%3D%20%27C%27%29%20%7B%0A%20%20%20%20return%20cPressed%0A%20%20%7D%20%28button%20%3D%3D%20%27A%2BB%27%29%20%7B%0A%20%20%20%20return%20%28and%20aPressed%20bPressed%29%0A%20%20%7D%20%28button%20%3D%3D%20%27A%2BC%27%29%20%7B%0A%20%20%20%20return%20%28and%20aPressed%20cPressed%29%0A%20%20%7D%20%28button%20%3D%3D%20%27B%2BC%27%29%20%7B%0A%20%20%20%20return%20%28and%20bPressed%20cPressed%29%0A%20%20%7D%0A%20%20return%20false%0A%7D%0A%0Ato%20efsound_beat%20fraction%20%7B%0A%20%20%27_efsound_init%27%0A%20%20local%20%27beat%27%20%2860000%20%2F%20_efsound_tempo%29%0A%20%20if%20%28fraction%20%3D%3D%20%271%2F2%27%29%20%7B%0A%20%20%20%20return%20%28beat%20%2F%202%29%0A%20%20%7D%0A%20%20if%20%28fraction%20%3D%3D%20%271%2F4%27%29%20%7B%0A%20%20%20%20return%20%28beat%20%2F%204%29%0A%20%20%7D%0A%20%20if%20%28fraction%20%3D%3D%20%271%2F8%27%29%20%7B%0A%20%20%20%20return%20%28beat%20%2F%208%29%0A%20%20%7D%0A%20%20if%20%28fraction%20%3D%3D%20%271%2F16%27%29%20%7B%0A%20%20%20%20return%20%28beat%20%2F%2016%29%0A%20%20%7D%0A%20%20if%20%28or%20%28fraction%20%3D%3D%202%29%20%28fraction%20%3D%3D%20%272%27%29%29%20%7B%0A%20%20%20%20return%20%28beat%20%2A%202%29%0A%20%20%7D%0A%20%20if%20%28or%20%28fraction%20%3D%3D%204%29%20%28fraction%20%3D%3D%20%274%27%29%29%20%7B%0A%20%20%20%20return%20%28beat%20%2A%204%29%0A%20%20%7D%0A%20%20return%20beat%0A%7D%0A%0Ato%20efsound_change_tempo_by%20bpm%20%7B%0A%20%20%27_efsound_init%27%0A%20%20efsound_set_tempo%20%28_efsound_tempo%20%2B%20bpm%29%0A%7D%0A%0Ato%20efsound_note_frequency%20note%20%7B%0A%20%20return%20%28%27_efsound_note_frequency_from_string%27%20note%29%0A%7D%0A%0Ato%20efsound_play_melody%20melody%20bpm%20playbackMode%20%7B%0A%20%20%27_efsound_init%27%0A%20%20if%20%28bpm%20%3C%3D%200%29%20%7B%0A%20%20%20%20bpm%20%3D%20_efsound_tempo%0A%20%20%7D%0A%20%20efsound_set_tempo%20bpm%0A%20%20if%20%28playbackMode%20%3D%3D%20%27until%20done%27%29%20%7B%0A%20%20%20%20_efsound_bg_bpm%20%3D%20bpm%0A%20%20%20%20%27_efsound_play_melody_once%27%20melody%200%0A%20%20%7D%20else%20%7B%0A%20%20%20%20_efsound_play_id%20%2B%3D%201%0A%20%20%20%20_efsound_bg_melody%20%3D%20melody%0A%20%20%20%20_efsound_bg_bpm%20%3D%20bpm%0A%20%20%20%20_efsound_bg_loop%20%3D%20%28playbackMode%20%3D%3D%20%27looping%20in%20background%27%29%0A%20%20%20%20sendBroadcast%20%27_efsound_background_loop%27%0A%20%20%7D%0A%7D%0A%0Ato%20efsound_play_note%20note%20octave%20ms%20%7B%0A%20%20efsound_play_tone%20%28%27_efsound_note_frequency_from_string%27%20%28%27%5Bdata%3Ajoin%5D%27%20note%20octave%29%29%20ms%0A%7D%0A%0Ato%20efsound_play_sound%20soundName%20backgroundMode%20%7B%0A%20%20%27%5Belfreaks_dev_sensor%3AplaySoundByName%5D%27%20%28%27_efsound_sound_asset_name%27%20soundName%29%20%28or%20%28backgroundMode%20%3D%3D%20%27background%20on%27%29%20%28backgroundMode%20%3D%3D%20%27%E6%98%AF%27%29%29%0A%7D%0A%0Ato%20efsound_play_tone%20frequency%20ms%20%7B%0A%20%20if%20%28ms%20%3C%3D%200%29%20%7B%0A%20%20%20%20%27%5Bio%3AplayTone%5D%27%20-1%20frequency%0A%20%20%20%20return%200%0A%20%20%7D%0A%20%20local%20%27ok%27%20%28%27%5Belfreaks_dev_sensor%3AplayTone%5D%27%20frequency%20ms%29%0A%20%20if%20%28not%20ok%29%20%7B%0A%20%20%20%20%27%5Bio%3AplayTone%5D%27%20-1%20frequency%0A%20%20%20%20waitMillis%20ms%0A%20%20%20%20%27%5Bio%3AplayTone%5D%27%20-1%200%0A%20%20%7D%0A%7D%0A%0Ato%20efsound_rest%20ms%20%7B%0A%20%20if%20%28ms%20%3E%200%29%20%7B%0A%20%20%20%20local%20%27ok%27%20%28%27%5Belfreaks_dev_sensor%3AplayTone%5D%27%200%20ms%29%0A%20%20%20%20if%20%28not%20ok%29%20%7B%0A%20%20%20%20%20%20waitMillis%20ms%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%0Ato%20efsound_ring_tone%20frequency%20%7B%0A%20%20local%20%27ok%27%20%28%27%5Belfreaks_dev_sensor%3AstartTone%5D%27%20frequency%29%0A%20%20if%20%28not%20ok%29%20%7B%0A%20%20%20%20%27%5Bio%3AplayTone%5D%27%20-1%20frequency%0A%20%20%7D%0A%7D%0A%0Ato%20efsound_set_tempo%20bpm%20%7B%0A%20%20if%20%28bpm%20%3E%200%29%20%7B_efsound_tempo%20%3D%20%28maximum%201%20bpm%29%7D%0A%7D%0A%0Ato%20efsound_set_volume%20volume%20%7B%0A%20%20volume%20%3D%20%28maximum%200%20volume%29%0A%20%20volume%20%3D%20%28minimum%20100%20volume%29%0A%20%20%27%5Belfreaks_dev_sensor%3AsetSpeakerVolumePercent%5D%27%20volume%0A%7D%0A%0Ato%20efsound_stop_all_sounds%20%7B%0A%20%20efsound_stop_melody%20%27all%27%0A%7D%0A%0Ato%20efsound_stop_melody%20mode%20%7B%0A%20%20_efsound_play_id%20%2B%3D%201%0A%20%20%27%5Belfreaks_dev_sensor%3AstopTone%5D%27%0A%20%20%27%5Bio%3AplayTone%5D%27%20-1%200%0A%7D%0A%0Ato%20efsound_tempo%20%7B%0A%20%20%27_efsound_init%27%0A%20%20return%20_efsound_tempo%0A%7D%0A%0Ato%20motorFan%20ioAdcPort%20up%20optionalSpeed%20%7B%0A%20%20local%20%27speed%27%20%28argOrDefault%203%20100%29%0A%20%20speed%20%3D%20%28maximum%200%20%28minimum%20speed%20100%29%29%0A%20%20local%20%27_pb_pin%27%204%0A%20%20if%20%28ioAdcPort%20%3D%3D%20%27J2%27%29%20%7B%0A%20%20%20%20_pb_pin%20%3D%206%0A%20%20%7D%20%28ioAdcPort%20%3D%3D%20%27J3%27%29%20%7B%0A%20%20%20%20_pb_pin%20%3D%2015%0A%20%20%7D%20%28ioAdcPort%20%3D%3D%20%27J4%27%29%20%7B%0A%20%20%20%20_pb_pin%20%3D%2017%0A%20%20%7D%0A%20%20local%20%27angleVal%27%200%0A%20%20if%20%28up%20%3D%3D%20true%29%20%7B%0A%20%20%20%20angleVal%20%3D%20%28%281023%20%2A%20speed%29%20%2F%20100%29%0A%20%20%20%20analogWriteOp%20_pb_pin%20angleVal%0A%20%20%7D%20else%20%7B%0A%20%20%20%20angleVal%20%3D%200%0A%20%20%20%20digitalWriteOp%20_pb_pin%20false%0A%20%20%7D%0A%7D%0A%0Ato%20smv_board_rgb%20led%20color%20%7B%0A%20%20%27%5Belfreaks_dev_sensor%3AboardRgbSet%5D%27%20%28led%20-%201%29%20%28%28color%20%3E%3E%2016%29%20%26%20255%29%20%28%28color%20%3E%3E%208%29%20%26%20255%29%20%28color%20%26%20255%29%0A%7D%0A%0Ato%20smv_board_rgb_all%20color%20%7B%0A%20%20%27%5Belfreaks_dev_sensor%3AboardRgbSetAll%5D%27%20%28%28color%20%3E%3E%2016%29%20%26%20255%29%20%28%28color%20%3E%3E%208%29%20%26%20255%29%20%28color%20%26%20255%29%0A%7D%0A%0Ato%20smv_board_rgb_off%20%7B%0A%20%20%27%5Belfreaks_dev_sensor%3AboardRgbSetAll%5D%27%200%200%200%0A%7D%0A%0Ato%20smv_buttonEvent%20button%20event%20%7B%0A%20%20local%20%27entry%27%20%28%27_smv_buttonEdgeEntry%27%20button%29%0A%20%20local%20%27now%27%20%28%27_smv_buttonNow%27%20button%29%0A%20%20local%20%27was%27%20%28at%202%20entry%29%0A%20%20if%20%28now%20%21%3D%20was%29%20%7B%0A%20%20%20%20atPut%202%20entry%20now%0A%20%20%20%20if%20now%20%7B%0A%20%20%20%20%20%20atPut%203%20entry%20true%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20atPut%204%20entry%20true%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20if%20%28or%20%28event%20%3D%3D%20%27pressed%27%29%20%28event%20%3D%3D%20%27%E6%8C%89%E4%B8%8B%27%29%29%20%7B%0A%20%20%20%20if%20%28at%203%20entry%29%20%7B%0A%20%20%20%20%20%20atPut%203%20entry%20false%0A%20%20%20%20%20%20return%20true%0A%20%20%20%20%7D%0A%20%20%20%20return%20false%0A%20%20%7D%0A%20%20if%20%28at%204%20entry%29%20%7B%0A%20%20%20%20atPut%204%20entry%20false%0A%20%20%20%20return%20true%0A%20%20%7D%0A%20%20return%20false%0A%7D%0A%0Ato%20smv_whenButtonEvent%20button%20event%20%7B%0A%20%20return%20%28smv_buttonEvent%20button%20event%29%0A%7D%0A%0Ato%20soilHumidity%20ioAdcPort%20%7B%0A%20%20local%20%27_pb_pin%27%204%0A%20%20if%20%28ioAdcPort%20%3D%3D%20%27J2%27%29%20%7B%0A%20%20%20%20_pb_pin%20%3D%206%0A%20%20%7D%20%28ioAdcPort%20%3D%3D%20%27J3%27%29%20%7B%0A%20%20%20%20_pb_pin%20%3D%2015%0A%20%20%7D%20%28ioAdcPort%20%3D%3D%20%27J4%27%29%20%7B%0A%20%20%20%20_pb_pin%20%3D%2017%0A%20%20%7D%0A%20%20local%20%27voltage%27%20%28%28%28analogReadOp%20_pb_pin%29%20%2A%20100%29%20%2F%201023%29%0A%20%20local%20%27soilmoisture%27%20%28100%20-%20voltage%29%0A%20%20return%20%28maximum%200%20%28minimum%20soilmoisture%20100%29%29%0A%7D%0A%0A" target="_blank">
  <button>Open the Music Alarm Example</button>
</a>


***

### Example 2: Read Microphone Data and Control the RGB LEDs

This example reads data from the onboard microphone. The display continuously shows the current sound level in decibels (dB). When the sound exceeds a defined threshold, the RGB LEDs change color to provide a visual alert.

<a href="https://microblocks.fun/run/microblocks.html?project=projectName%20%27%E5%99%AA%E9%9F%B3%E7%9B%91%E6%B5%8B%27%0A%0Amodule%20main%0Aauthor%20unknown%0Aversion%201%200%20%0Adescription%20%27%27%0A%0Ascript%20133%2033%20%7B%0AwhenStarted%0Aforever%20%7B%0A%20%20nezhaEsp32_screenTextToLine%20%27Noise%20Level%3A%27%20%271%27%20%28colorSwatch%2012%20244%20244%20255%29%0A%20%20if%20%28%28%27%5Bsensors%3AnoiseDb%5D%27%29%20%3E%3D%2075%29%20%7B%0A%20%20%20%20nezhaEsp32_board_rgb_off_all%0A%20%20%20%20nezhaEsp32_board_rgb_all%20%28colorSwatch%20255%2023%2012%20255%29%0A%20%20%20%20nezhaEsp32_screenTextToLine%20%28%27%5Bsensors%3AnoiseDb%5D%27%29%202%20%28colorSwatch%20255%2013%2028%20255%29%0A%20%20%7D%20%28%28%27%5Bsensors%3AnoiseDb%5D%27%29%20%3E%3D%2050%29%20%7B%0A%20%20%20%20nezhaEsp32_board_rgb_off_all%0A%20%20%20%20nezhaEsp32_board_rgb%201%20%28colorSwatch%20247%20226%2014%20255%29%0A%20%20%20%20nezhaEsp32_board_rgb%202%20%28colorSwatch%20247%20226%2014%20255%29%0A%20%20%20%20nezhaEsp32_screenTextToLine%20%28%27%" target="_blank">
  <button>Open the Noise Indicator Example</button>
</a>

***

## Run a Program on the Board


1. Connect the board to your computer with a USB Type-C data cable or via Bluetooth.
2. Select the corresponding device in MicroBlocks.
3. After the connection is established, run the program or transfer it to the board.
4. Confirm that the program runs correctly before disconnecting the board.
5. To keep the program on the device, use the board's program storage function.

**Note：**

Short-press the power button to **reset the program** when powered on.

To save the current program, manually click **"Save As"** in the Program Management page of the UI.

![Run and stop a program](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/esp32/images/nezha-for-esp32-board-en-122.png)

***

## Expected Result

After a program is transferred or started, the board can read data from onboard or external sensors according to the program logic. It can provide feedback through the display, RGB LEDs, speaker, motors, or the IoT platform.

***

## FAQ

### The computer does not recognize the board.

Make sure the USB Type-C cable supports data transfer. Try another USB port, reconnect the device, or restart the board.

### MicroBlocks cannot connect to the board.

Check the browser permissions, device connection status, and USB data cable. If the problem continues, refresh the MicroBlocks page or try another cable.

### A sensor is not returning data.

Make sure the RJ11 cable is fully inserted, the port color matches the module type, and the sensor is connected to the correct port.

### A motor does not run.

Check the motor port, battery level, and program settings. Charge the board before continuing if the battery level is low.

***

## Related Resources

- MicroBlocks development and testing platform: [https://www.smartiot.space/microblocks/](https://www.smartiot.space/microblocks/)
