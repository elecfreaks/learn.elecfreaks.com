---
sidebar_position: 1
sidebar_label: XGO-Rider Dual-wheeled Foot Robot Kit-CM4 Version
---

# XGO-Rider Dual-wheeled Foot Robot Kit-CM4 Version

## Product Introduction

CM4 XGO-Rider is a desktop-level dual-wheeled foot development platform based on Raspberry Pi. It has a built-in Raspberry Pi CM4 module to realize AI edge computing applications. It uses a 4.5KG.CM all-metal magnetic encoding bus serial port servo as a joint, FOC wheel hub integrated motor as a wheel, and an internal inertial measurement unit (IMU). It can adjust the joint angle in real time according to different terrain feedback to achieve omnidirectional movement, posture stability, multiple motion superposition and other actions. It supports Python programming and ROS programming, and supports a series of intelligent functions such as wireless remote control, face recognition, gesture recognition, color tracking, object detection, license plate recognition, and QR code motion control. It integrates the iFlytek Spark large model and supports multiple AI functions such as voice dialogue communication, text-to-picture, and picture-to-text. It provides a systematic and rich learning tutorial to help you quickly get started with the intelligent control of dual-wheeled foot robots.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/xgo-rider-cm4-kit-introdutin-01.png)

## Product Features

**Integrated AIGC capability**: Built-in Raspberry Pi CM4 module to realize AI edge computing applications, realize intelligent functions such as face recognition, voice dialogue, text-to-image, image-to-text, gesture recognition, color tracking, object detection, etc.

**Small size, powerful performance**: XGO Rider is equipped with FOC wheel hub integrated motor and 4.5KG.CM all-metal magnetic encoding bus serial port servo, realizing agile, stable, omnidirectional movement, ensuring powerful power and precise control.

**Adaptive terrain**: Built-in six-axis inertial measurement unit (IMU), adjust the joint angle according to the position feedback from IMU to adapt to various terrain obstacles in real time.

**Easy to program and remote control**: Support Python and ROS programming, realize Bluetooth remote control and graphical programming through XGO mobile APP, convenient for users to carry out secondary development and control.

**Rich learning resources**: Provide systematic and rich learning tutorials to help users quickly get started with the intelligent control of two-wheeled foot robots.

## Product list

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/xgo-rider-cm4-kit-packing-list.png)

## Specifications

### XGO-Rider Dual-wheeled Robot Set-CM4 Version Product Parameters

|         Product Name         |                          XGO-Rider                           |
| :--------------------------: | :----------------------------------------------------------: |
|             SKU              |                           EF08418                            |
|         Packing size         |                   202 mm × 150 mm × 146 mm                   |
|        Product Weight        |                            720 g                             |
| Number of electronic modules |                             2个                              |
|      Electronic modules      |     XGO-Rider complete machine, Raspberry Pi CM4 module      |
|        Applicable age        |                             10+                              |
|       Number of cases        |                             15+                              |
|       Programmatically       | ROS programming, Python code programming, XGO APP Bluetooth remote control |

### XGO-Rider body parameters

|   Product Name   |                          XGO-Rider                           |
| :--------------: | :----------------------------------------------------------: |
|   Machine size   |          Length 135mm Width 118mm Height 116-158mm           |
|  Machine weight  |                             560g                             |
| Structural parts |             1mm aluminum alloy, PC, carbon fiber             |
|   Joint servo    | 6V 4.5KG.CM Metal Shell Steel Gear 360 Degree Magnetic Encoding Dual Axis TTL Serial Port Servo |
|    Hub Motor     | 8.4V magnetically encoded outer rotor brushless motor, rated torque 0.1N.m |
|  Lower computer  | ESP32-WROVER-B module with WiFi and Bluetooth, Type-C charging port, toggle switch, etc. |
|     Battery      |                      18500 2S 1400 mAh                       |
|     speaker      |                   8 ohm 3W cavity speaker                    |
|   Battery life   |           Comprehensive working conditions 2 hours           |

### AI module parameters

| Controller  |                       Raspberry Pi CM4                       |
| :---------: | :----------------------------------------------------------: |
|   Screen    |                   2.0 inches IPS 320 × 240                   |
|   Camera    |                      5 megapixel OV5647                      |
| Microphone  |                Dual MEMS digital microphones                 |
| Video Codec | Supports H.265 (HEVC) (supports up to 4Kp60 decoding), H.264 (supports up to 1080p60 decoding, 1080p30 encoding) |
|  Interface  | Micro HDMI video output interface, Type-C USB interface, PH2.0 4PIN serial communication and power interface |
|   Button    |                    4 programmable buttons                    |

### Servo parameters

|       Servo Type        |                       Serial Bus Servo                       |
| :---------------------: | :----------------------------------------------------------: |
|        Material         | The housing is made of aluminum alloy and the gear is made of 7075 aluminum plated with titanium |
|      Rated torque       |                          4.5 KG.CM                           |
|     speed（S/60°）      |                          0.08 S/60°                          |
| Operating voltage range |                          4.8V ~7.4V                          |
|  Operating temperature  |                        -10°C ~ +50°C                         |
|          weigh          |                             25g                              |
|       Motor Type        |                        Coreless Motor                        |

### Motor parameters

|  Motor Type   |     Brushless Motor      |
| :-----------: | :----------------------: |
|    Voltage    |          8.4 V           |
| Rated current |          940 mA          |
| Rated torque  |         0.13 N.m         |
| No-load speed |         400 RPM          |
|   KV value    |            75            |
|     Size      | Length 48mm, height 20mm |
|     Weigh     |           130g           |

## Product size

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/cm4-xgo-rider-kit-products-sescription-06.png)



<!-- ## Product Structure

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/cm4-xgo-rider-kit-products-sescription-04.png)

## System Architecture

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/cm4-xgo-rider-kit-products-sescription-05.png) -->

## Quick Start

### Power On

Place XGO Rider in a backwards position on **the ground! the ground! the ground! **, then turn on the power switch, and XGO Rider will bounce up and maintain balance.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/xgo-rider-cm4-kit-introdutin-02.png)

### Sample Mode

After turning on the power, press "A" or "B" to select "Sample Mode", then use "A" and "B" to scroll up and down to select the desired application, then press "D" to confirm and execute the selected operation, and press "C" to return to the previous menu.

**Depending on the different CM4 images, the page information may be inconsistent with the current image**

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/xgo-rider-cm4-kit-introdutin-03.png)

### Charging

When the device is powered off, use the Type-C charging cable provided to plug into any 5V charger to charge. The red light will turn on during charging and the green light will turn on when fully charged.![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/xgo-rider-cm4-kit-introdutin-04.png)

### Notes

After turning on XGO Rider, you need to move it back and forth slightly to keep the body balanced. Please do not place XGO Rider on the edge of the table or in dangerous places to avoid damage

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/xgo-rider-cm4-kit-introdutin-05.png)

Please place XGO Rider in a backward position on **the ground! the ground! the ground! **, then turn on the power switch, XGO Rider will bounce up and keep balanced.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/xgo-rider-cm4-kit-introdutin-02.png)


When powered on, if XGO Rider is picked up, it will enter a locked state. At this time, place XGO Rider vertically on the ground and it will return to normal after a few seconds.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/xgo-rider-cm4-kit-introdutin-06.png)

### Demo

### FAQ
