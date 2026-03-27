---
sidebar_position: 3
sidebar_label: XGO-Rider Wheeled Biped Robot Kit - CM5 Version
---

# XGO-Rider Wheeled Biped Robot Kit - CM5 Version

## Product Introduction

The CM5 XGO-Rider is a desktop-level wheeled biped development platform based on Raspberry Pi. It is built with the Raspberry Pi CM5 module to support AI edge computing applications. It adopts 4.5KG.CM full-metal magnetic encoding serial bus servos for joints and integrated FOC hub motors as wheels. An Inertial Measurement Unit (IMU) is embedded inside, which can adjust joint angles in real time according to feedback from different terrains to realize omnidirectional movement, posture stabilization, superposition of multiple motions and other actions.
It supports Python programming and ROS programming, and features wireless remote control, face recognition, gesture recognition, color tracking, object detection, license plate recognition, QR code motion control and a series of intelligent functions. Integrated with the SparkDesk large AI model, it supports voice dialogue communication, text-to-image, image-to-text and other multiple AI functions. Systematic and comprehensive learning tutorials are provided to help you quickly get started with the intelligent control of wheeled biped robots.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/xgo-rider-cm5-kit-introdutin-01.png)

## Product Features

**Integrated AIGC Capability**: Built-in Raspberry Pi CM5 module enables AI edge computing, supporting face recognition, voice dialogue, text-to-image, image-to-text, gesture recognition, color tracking, object detection and other intelligent functions.

**Compact Size & Powerful Performance**: Equipped with integrated FOC hub motors and 4.5KG.CM full-metal magnetic encoding serial bus servos, achieving agile, stable and omnidirectional movement with strong power and precise control.

**Adaptive to Terrain**: Embedded 6-axis Inertial Measurement Unit (IMU). It adjusts joint angles in real time based on IMU feedback to adapt to various terrains and obstacles.

**Easy Programming & Remote Control**: Supports Python and ROS programming. Bluetooth remote control and graphical programming are available via the XGO mobile APP for convenient secondary development and operation.

**Abundant Learning Resources**: Systematic and comprehensive tutorials are offered to help users quickly master the intelligent control of wheeled biped robots.

## Packing List

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/xgo-rider-cm4-kit-packing-list.png)

## Specifications

### XGO-Rider Wheeled Biped Robot Kit - CM5 Version Parameters

| Product Name | XGO-Rider Wheeled Biped Robot Kit - CM5 Version |
| :----------: | :---------------------------------------------: |
| SKU | EF08445 |
| Package Dimension | 202 mm × 150 mm × 146 mm |
| Product Weight | 720 g |
| Electronic Modules Quantity | 2 pcs |
| Electronic Modules | XGO-Rider Main Body, Raspberry Pi CM5 Module |
| Recommended Age | 10+ |
| Sample Projects | 15+ |
| Programming Methods | ROS Programming, Python Coding, XGO APP Bluetooth Remote Control |

### XGO-Rider Main Body Parameters

| Item | Specification |
| :---: | :---: |
| Overall Dimension | Length 135mm / Width 118 mm / Height 116-158mm |
| Overall Weight | 560g |
| Structural Materials | 1mm Aluminum Alloy, PC, Carbon Fiber |
| Joint Servo | 6V 4.5KG.CM Metal Shell Steel Gear 360° Magnetic Encoding Dual-axis TTL Serial Servo |
| Hub Motor | 8.4V Magnetic Encoding Outer Rotor Brushless Motor, Rated Torque 0.1N.m |
| Lower Controller | ESP32-WROVER-B Module (WiFi & Bluetooth), Type-C Charging Port, Toggle Switch |
| Battery | 18500 2S 1400mAh |
| Speaker | 8Ω 3W Cavity Speaker |
| Battery Life | 2 Hours under Comprehensive Working Conditions |

### AI Module Parameters

| Controller | Raspberry Pi CM5 |
| :---: | :---: |
| Screen | 2.0-inch IPS Display, 320 × 240 Resolution |
| Camera | 5MP OV5647 Camera |
| Microphone | Dual MEMS Digital Microphones |
| Video Codec | H.265 (HEVC) (4Kp60 Decoding Max); H.264 (1080p60 Decoding & 1080p30 Encoding Max) |
| Interfaces | Micro HDMI Video Output, Type-C USB, PH2.0 4PIN Serial Communication & Power Port |
| Buttons | 4 Programmable Buttons |

### Servo Parameters

| Item | Specification |
| :---: | :---: |
| Servo Type | Serial Bus Servo |
| Material | Aluminum Alloy Shell, 7075 Titanium-plated Aluminum Gears |
| Rated Torque | 4.5 KG.CM |
| Speed | 0.08 S/60° |
| Operating Voltage | 4.8V ~ 7.4V |
| Operating Temperature | -10°C ~ +50°C |
| Weight | 25g |
| Motor Type | Coreless Motor |

### Motor Parameters

| Item | Specification |
| :---: | :---: |
| Motor Type | Brushless Motor |
| Voltage | 8.4 V |
| Rated Current | 940 mA |
| Rated Torque | 0.13 N.m |
| No-load Speed | 400 RPM |
| KV Value | 75 |
| Dimension | Length 48mm / Height 20mm |
| Weight | 130g |

## Product Dimensions

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/cm4-xgo-rider-kit-products-sescription-06.png)

## Product Structure

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/cm5-xgo-rider-kit-products-sescription-04.png)

## System Architecture

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/cm5-xgo-rider-kit-products-sescription-05.png)

## Quick Start

### Power On

Place the XGO-Rider on the **GROUND! GROUND! GROUND!** in a reclining posture, then turn on the power switch. The robot will stand up and keep balance automatically.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/xgo-rider-cm4-kit-introdutin-02.png)

### Demo Mode

After powering on, press **A** or **B** to enter Demo Mode. Use **A** and **B** to scroll up and down to select applications, press **D** to confirm and run, and press **C** to return to the previous menu.

**The interface may differ from the pictures due to different CM5 system images.**

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/xgo-rider-cm4-kit-introdutin-03.png)

### Charging

Power off the robot first. Connect the included Type-C charging cable to any 5V power adapter for charging. The red indicator lights up during charging, and turns green when fully charged.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/xgo-rider-cm4-kit-introdutin-04.png)

### Precautions

After power-on, XGO-Rider will move slightly back and forth to maintain balance. Do not place it on the edge of tables or dangerous areas to avoid damage.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/xgo-rider-cm4-kit-introdutin-05.png)

Place the XGO-Rider on the **GROUND! GROUND! GROUND!** in a reclining posture before powering on, then toggle the power switch. The robot will stand up and keep balance automatically.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/xgo-rider-cm4-kit-introdutin-02.png)

When powered on, if the robot is lifted, it will enter lock mode. Place it vertically on the ground, and it will return to normal state in a few seconds.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/xgo-rider-cm4-kit-introdutin-06.png)

### Demonstration

### FAQ
