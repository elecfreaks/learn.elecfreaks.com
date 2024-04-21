---
sidebar_position: 16
sidebar_label: Case 09 Noise Monitor
---


# Case 09: Noise Monitor

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/pico/wukong2040/raspberry-pi-pico-inventors-kit/images/wukong2040-inventors-case09-01.png)

## Introduction

It is a painful and unpleasant experience to be surrounded by the annoying sound of car horns and pedestrians while we are concentrating on our studies. At the same time, we know that it is possible to complain to the authorities when the ambient noise exceeds 60 decibels, so now we can use noise sensors and OLED displays to monitor the noise level in real time.

## Materials Requested

1 × Raspberry Pi Pico

1 × Wukong2040 expansion board

1 × USB cable

1 × Noise sensor

1 × OLED display

1 × 3P Dupont cable with buckle

## Relevant information

### Noise level classification

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/pico/wukong2040/raspberry-pi-pico-inventors-kit/images/wukong2040-inventors-case09-02.png)

According to the National Environmental Law, the maximum environmental noise limits for five types of urban areas are as follows:

1. 50 dB during daytime and 40 dB during nighttime in sanatoriums, high-class villa areas and high-class hotel areas.

2. Areas dominated by residential, cultural and educational institutions, 55 dBA during the day and 45 dBA at night.

3. Mixed residential, commercial and industrial areas, 60 decibels during the day and 50 decibels during the night.

4. Industrial area, 65dB during daytime, 55dB during nighttime.

5. Area on both sides of the main road traffic routes, inland waterways and railway lines in the city, 70 db during the day and 55 db during the night (night means 22:00 to 6:00 am).

### Measurements of sound

Sound is essentially a wave that travels through the air to the human ear causing vibrations in the eardrum, in fact the size of the sound is a response to the intensity of the vibrations. The strength of sound is expressed in "decibels (db)", and it is important to understand that a 10db increase in the decibel value of sound is not an increase of 10db on top of the original, but rather a 10-fold increase in volume. range. If a person is in an environment of 70db for a long time, it starts to damage the hearing nerve, and sound reaching 90db or more will damage the hearing. You can get to know the decibel level of sound by looking at familiar scenes.

- Early morning bird calls at around 15db, where people feel comfortably quiet;
- the sound of you and your best friend whispering in your ear at around 30db;
- the sound of a washing machine drum spinning at high speed in your home at around 40 decibels;
- ambient sound in the region of 70 decibels as you stroll through a busy shopping street;

## Hardware connections

Connect your components according to the following connection diagram:

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/pico/wukong2040/raspberry-pi-pico-inventors-kit/images/wukong2040-inventors-case09-05.png)

## MicroBlocks Graphical Programming

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/pico/wukong2040/raspberry-pi-pico-inventors-kit/images/wukong2040-inventors-case09-04.png)

## CircuitPython Code

```python
from Noise import *  # Import the library of the noise sensor
from OLED import *  # Import the libraty of the OLED
import time  # Import the library of time

noise = Noise(board.GP26)  # Create a noise sensor object and pass in the pin number
oled = OLED(board.GP17, board.GP16)  # Create OLED screen object and pass in SDA-GP17,SCL-GP16 pin numbers

while True:
    noise_value = noise.get_noise()  # Get the value of the noise sensor and assign it to noise_value
    oled.set_show(0, 0, "DB:")  # Start displaying the character "DB" at the coordinates (0, 0)
    oled.set_show(20, 0, int(noise_value / 655.35))  # Start displaying content at coordinates (20, 0)
    time.sleep(0.5)
    oled.set_clear()  # Clear OLED screen display
```

## Case display

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/pico/wukong2040/raspberry-pi-pico-inventors-kit/images/wukong2040-inventors-kit-case09-06.gif)

## Think

Can you set a threshold value for monitoring the sound so that the buzzer will sound an alarm when this value is reached?



## FAQ



## For more information, please visit:

[micro:bit Accessories Store | ELECFREAKS](https://www.elecfreaks.com/)
