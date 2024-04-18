---
sidebar_position: 6
sidebar_label: Blocks Introduction
---

# Blocks Introduction

| Block Type | Diagram | Parameter | Functions |
| :-: | :-: | :-: | :-: |
| **IOT:bit** | ![](./images/blocks-01.png) | Parameter 1 type: drop-down option<br />: P0, P1, P2, P12, P13, P14, P15, P16, USB_TX, USB_RX<br /><br />Parameter 2 type: drop-down option<br />Parameter 2 ranges: P0, P1, P2, P8, P13, P14, P15, P16, USB_TX, USB_RX<br />Parameter 3 type: drop-down option<br />Parameter 3 ranges: 115200, 57600, 38400, 31250, 28800, 19200, 14400, 9600, 4800, 2400, 1200 | Initialize wifi module |
|  | ![](./images/blocks-02.png) | Parameter 1 type: string<br />Parameter 1 range: 0~9, a~z, A~Z, special characters<br />Parameter 2 type: string<br />Parameter 2 range: 0~9 , a~z, A~Z, special characters | This command is to set the name and password for connecting to WiFi and is used to connect to the network. <br />**Note: The 8266 module does not support the 5G router WIFI signal temporarily, please connect the 2.4G router WIKI signal** | Connect to wifi |
| **ThingSpeak** | ![](./images/blocks-03.png) | No | Connect thingspeak platform |
|  | ![](./images/blocks-04.png) | Parameter 1 type: string<br />Parameter 1 range: 0~9, a~z, A~Z, special characters<br />Parameter 2 type: integer<br />Parameter 2 range: 0~9 | Set the Write API KEY of the ThingSpeak platform and set the upload data |
|  | ![](./images/blocks-05.png) | No | Connect to ThingSpeak |
| **OLED** | ![](./images/blocks-06.png) | Parameter 1 type: integer<br />Parameter 1 range: 0~9 | Initialize OLED display |
| | ![](./images/blocks-07.png) | No | Clear OLED Display |
| | ![](./images/blocks-08.png) ||Parameter 1 type: string<br />Parameter 1 range: 0~9, a~z, A~Z, special characters<br /> | OLED display shows string |
| **Sensor** | ![](./images/blocks-09.png) | Parameter 1 type: drop-down option<br />Parameter 1 range: P0 ~ P16 | Display current wind speed (m/s) |
| | ![](./images/blocks-10.png) | Parameter 1 type: drop-down option<br />Parameter 1 range: P0 ~ P16 | Display the current intensity of ultraviolet rays (0 ~ 15) |
| | ![](./images/blocks-11.png) | Parameter 1 type: drop-down option<br />Parameter 1 range: P0 ~ P16 | Display current dust concentration (μg/m³) |
| | ![](./images/blocks-12.png) | Parameter 1 type: drop-down option<br />Parameter 1 range: temperature (°C), temperature (°F), humidity (0~100)<br /> Parameter 2 type: drop-down option<br />Parameter 1 range :P0 ~ P16 | Display current temperature (℃) or humidity (0~100) |
