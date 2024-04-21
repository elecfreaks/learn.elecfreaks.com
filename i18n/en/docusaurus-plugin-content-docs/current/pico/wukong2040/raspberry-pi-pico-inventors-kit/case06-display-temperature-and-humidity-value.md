---
sidebar_position: 13
sidebar_label: Case 06 Display Temperature and Humidity Value
---

# Case 06: Display Temperature and Humidity Value

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/pico/wukong2040/raspberry-pi-pico-inventors-kit/images/wukong2040-inventors-case06-01.png)

## Introduction

We all want to live in an environment with the right temperature and humidity. The data we get from the weather forecast is always a bit different from the temperature and humidity of our surroundings, so if we can know the temperature and humidity data of our surroundings in real time, we can also organise our next activities. We use a temperature and humidity sensor and an OLED display to create this monitor.

## Materials Requested

1 × Raspberry Pi Pico

1 × Wukong2040 expansion board

1 × USB cable

1 × Temperature and Humidity sensor

1 × OLED display

1 × 3P Dupont cable with buckle

## Introduction to main components

### Temperature and Humidity sensor

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/pico/wukong2040/raspberry-pi-pico-inventors-kit/images/wukong2040-inventors-introduction-10.png)

A temperature and humidity sensor is a sensor device equipped with moisture and heat sensitive elements that can be used to measure temperature and humidity, either with or without a live display. Due to their small size and stable performance, temperature and humidity sensors are widely used in all areas of production and life.



### Hardware Connection

Connect your components according to the following connection diagram:

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/pico/wukong2040/raspberry-pi-pico-inventors-kit/images/wukong2040-inventors-case06-07.png)

## MicroBlocks Graphical Programming

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/pico/wukong2040/raspberry-pi-pico-inventors-kit/images/wukong2040-inventors-case06-03.png)

## CircuitPython Code

```python
# Import the relevant libraries
from OLED import *
from DHT11 import *
import time

# Create objects
oled = OLED(board.GP17, board.GP16)
dht = DHT11(board.GP26)

while True:
    # Display the data of the temperature
    oled.set_show(0, 0, "Temperature:")
    oled.set_show(75, 0, dht.get_temperature())

    # Display the data of the moisture
    oled.set_show(0, 15, "Humidity:")
    oled.set_show(55, 15, dht.get_humidity())
    time.sleep(5)

    # Clear the display
    oled.set_clear()
```

## Case display

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/pico/wukong2040/raspberry-pi-pico-inventors-kit/images/wukong2040-inventors-kit-case06-06.gif)

## Think

Can you set a threshold value for temperature and humidity and have the buzzer sound an alarm when this value is reached?



### FAQ



### For more information, please visit:

[micro:bit Accessories Store | ELECFREAKS](https://www.elecfreaks.com/)
