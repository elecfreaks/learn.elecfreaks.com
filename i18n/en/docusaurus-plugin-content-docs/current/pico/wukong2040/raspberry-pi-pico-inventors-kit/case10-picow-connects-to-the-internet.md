---
sidebar_position: 17
sidebar_label: Case 10 Pico W connected to the Internet
---

# Case 10 Pico W connected to the Internet

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/wukong2040-inventors-case10-01.png)

## Introduction

The Raspberry Pi Pico W is an ideal development board for beginners and professional developers alike for a wide range of IoT and embedded applications including smart home, sensor networks, robotics and automation control, and more.

The Raspberry Pi Pico W is a Raspberry Pi Pico-based microcontroller board that integrates wireless connectivity, including WiFi and Bluetooth. It uses a dual-core ARM Cortex-M0+ processor with a clock frequency of up to 133MHz, built-in 264KB RAM and 2MB flash memory, and supports various interfaces such as SPI, I2C, UART, and PWM. In addition, it supports CircuitPython and MicroBlocks programming, making it easy for developers to develop and program.

## Component List

1 × Raspberry Pi Pico W

1 × Wukong2040 Breakout Board

1 × USB Wire

1 × Module

## Related knowledge introduction

### Pico W Product Features

- Using the RP2040 microcontroller chip officially designed by Raspberry Pi
- Equipped with a dual-core ARM Cortex M0+ processor running up to 133MHz flexible clock
- Built-in 264KB SRAM and 2MB on-chip Flash
- Onboard 2.4GHz wireless interface chip (802.11n or Wifi4).
- Stamp hole design, which can be directly welded and integrated into the base plate designed by the user
- USB1.1 host and device support
- Supports low-power sleep and hibernate modes
- Drag-and-drop program downloadable via USB recognition as mass storage
- Up to 26 multi-function GPIO pins
- 2 SPIs, 2 I2Cs, 2 UARTs, 3 12-bit ADCs, 16 controllable PWM channels
- Accurate on-chip clock and timer
- Temperature Sensor
- On-chip accelerated floating-point library
- Eight programmable I/O (PIO) state machines for custom peripheral support

## Programming Preparation

### Pico W Firmware Burning

The first thing to understand is that the Raspberry Pi Pico W is different from the CircuitPython UF2 file for the Raspberry Pi Pico. You need to download the latest Pico W UF2 file from the CircuitPython official website, as shown in the figure below:

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/wukong2040-inventors-case15-04.png)



Press and hold the BOOTSEL button on the Rasberry Pi Pico W and connect it to the computer with a USB cable. The RPI-RP2 disk will appear in the computer file explorer, just drag the UF2 file you downloaded to this disk, and the disk will become a disk named CIRCUITPY.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/wukong2040-inventors-program-06.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/wukong2040-inventors-program-18.png)

### settings.toml file settings

The following example will use the WiFi function of Pico W, so you need to save it to settings.toml according to the WiFi name and password you use, and save the file to CIRCUITPY disk.

Example settings.toml file:

```python
DEMO_WIFI_SSID = "ELECFREAKS"  # WIFI Name
DEMO_WIFI_PASSWORD = "elecfreaks2023"  # WiFi Password
```

CIRCUITPY Disk：

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/wukong2040-inventors-case15-06.png)

### Access settings.toml information in code.py

In the **code.py** file, you need access to the library in order to access the **settings.toml** file. Your settings are accessible through this function. You need to pass a settings entry to the function to import it into your **code.py** file.

```
import os

print(os.getenv("DEMO_WIFI_SSID"))
print(os.getenv("DEMO_WIFI_PASSWORD"))
```

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/wukong2040-inventors-case15-05.png)

### Basic WiFi Test Validation

You can copy the following code into code.py to verify whether the network is unblocked:

```python
import os
import ipaddress
import wifi
import socketpool

print("Connecting to WiFi")

#  connect to your SSID
wifi.radio.connect(os.getenv('DEMO_WIFI_SSID'), os.getenv('DEMO_WIFI_PASSWORD'))

#  pings Google
ipv4 = ipaddress.ip_address("8.8.4.4")
print("Ping google.com: %f ms" % (wifi.radio.ping(ipv4) * 1000))
```

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/wukong2040-inventors-case15-07.png)

## Think



## Common Problem



## For more information, welcome to visit:

[micro:bit Accessories Store | ELECFREAKS](https://www.elecfreaks.com/)
