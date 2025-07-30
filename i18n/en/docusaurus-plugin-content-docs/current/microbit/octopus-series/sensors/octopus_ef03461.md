# Solar Power Management Module

## Introduction
This solar power management module supports charging via solar panels and Type-C ports. It is equipped with a power output control switch and has a built-in battery compartment where 18650 batteries can be installed to expand the power storage capacity.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/input/images/03461-1.png)

## Product List
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/input/images/03461-packing-list.png)

## Features
- Support charging via solar energy or Type-C.
- Built-in battery compartment.
- Equipped with a power output control switch.

## Technical Specifications

### Solar Power Manager
| Project | Parameter |
| :---: | :---: |
| Product Name | Solar Power Manager V1.0.7 |
| SKU | EF03461 |
| Power Requirement | 3V - 5.5V |
| Interface Types | PH2.0<br />Type-C<br />USB-A<br />Pins |
| Product Dimensions | 87.8 x 55.8 x 26mm |
| Product Weight | ? (excluding lithium battery) |
| Charging Voltage | 5V |
| Charging Current | 1A |
| Maximum Operating Voltage | 5V |
| Rated Operating Voltage | 5V |
| Minimum Operating Voltage | 4.3V |
| Standby Current | 0.03A |
| Maximum Load Output Current | 1.5A |

### Solar Panel
| Project | Parameter |
| :---: | :---: |
| Product Name | Solar Panel |
| Operating Voltage (Vmp) | 6V ±3% |
| Operating Current (Imp) | 0.16A ±3% |
| Open Circuit Voltage (Voc) | 7.2V ±3% |
| Short Circuit Current (Isc) | 0.17A ±3% |
| Peak Power (Pmax) | 1W ±3% |
| Crystalline Silicon Wafer Efficiency | Over 20% |
| Power Output Operating Temperature | -20 °C to +60°C |
| Power Tolerance | ±3% |
| Dimensions | 110 × 60 × 2.2 - 2.5mm |
| Weight | 0.03kg ±0.01 |

## Outline and Location Dimensions
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/input/images/03461-2.png)

## Hardware Modules

### Power Input
It is compatible with the PH.0 port and Type-C interface, supporting 5V/1A input.
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/input/images/03461-3.png)

### Power Output
It is compatible with pins and USB-A interface, supporting 5V/1.5A output.
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/input/images/03461-4.png)

### Battery Compartment
18650 lithium batteries can be installed to expand the power storage capacity.
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/input/images/03461-5.png)

### Power Switch
The power can be turned on or off by toggling the power switch.
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/input/images/03461-6.png)

### Power Indicator
The power indicator is used to display the battery level.
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/input/images/03461-7.png)

The definitions of the indicator icons are as follows:
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-1.png) indicates that the LED light is constantly on.
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-2.png) indicates that the LED light is off.
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-3.png) indicates that the LED light is flashing.

### Discharging
| Current State | LED 1 | LED 2 | LED 3 | LED 4 | Battery Level |
| --- | --- | --- | --- | --- | --- |
| Discharging | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-1.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-1.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-1.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-1.png) | 76% - 100% |
|  | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-1.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-1.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-1.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-2.png) | 51% - 75% |
|  | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-1.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-1.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-2.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-2.png) | 26% - 50% |
|  | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-1.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-2.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-2.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-2.png) | 6% - 25% |
|  | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-3.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-2.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-2.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-2.png) | 0% - 5% |

### Charging
| Current State | LED 1 | LED 2 | LED 3 | LED 4 | Battery Level |
| --- | --- | --- | --- | --- | --- |
| Charging | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-1.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-1.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-1.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-1.png) | 100% |
|  | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-1.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-1.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-1.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-3.png) | 75% - 99% |
|  | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-1.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-1.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-3.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-2.png) | 50% - 74% |
|  | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-1.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-3.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-2.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-2.png) | 26% - 49% |
|  | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-3.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-2.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-2.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-2.png) | 0% - 25% |

1. Connect the power supply when the power is off.
2. The power indicator will show the current battery level and flash when charging.
3. When fully charged, all power indicators will light up. Please disconnect the power supply to complete the charging.

## Usage Instructions
If you do not install the 18650 lithium battery, you can connect an external power source (such as a solar charging panel) through the power input interface, turn on the power switch, then connect the solar power management module to the electrical appliance through the USB-A interface, and turn on the power switch.
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/input/images/03461-8.png)

**Note: When power is connected to both power input interfaces (PH2.0 interface/Type-C interface) simultaneously, the solar power management module will preferentially use the power from the Type-C interface.**

**Note: The charging power of the solar charging panel is related to the light intensity. When the light intensity is too low, the charging efficiency is too low to activate the power management chip of the solar power management module, and the charging state cannot be entered at this time.**

If you install the 18650 lithium battery, you can power the device through the lithium battery, connect the solar power management module to the electrical appliance through the USB-A interface, and turn on the power switch.
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/input/images/03461-9.png)
