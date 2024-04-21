---
sidebar_position: 18
sidebar_label: Case 11 Pico W gets news and displays
---

# Case 11 Pico W gets news and displays

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/wukong2040-inventors-case11-01.png)

## Introduction

This case will use the Raspberry Pi Pico W motherboard to connect to the Internet to obtain news from news websites and display the content on the OLED screen.

This case study describes how to use the Raspberry Pi Pico W microcontroller and the CircuitPython programming language to make a smart device with real-time news alerts. By connecting the network module and the OLED display, it is possible to access RSS news feeds and display the latest news headlines and summaries on the screen.

This tutorial is not only suitable for beginners to learn Raspberry Pi Pico W and CircuitPython programming, but also provides experienced makers with a fun project to challenge their skills.

## Component List

1 × Raspberry Pi Pico W

1 × Wukong2040 Breakout board

1 × USB Wire

1 × OLED Module

## Related knowledge introduction

### Web Crawler

A web crawler is an automated program used to browse and collect information on the Internet. It automatically visits web pages and extracts the required data by simulating the behavior of human users.

Crawlers are usually used in applications such as search engines, data mining, data analysis, price comparison, and content aggregation. They can automatically access web pages, extract text, pictures, video and other media files, and save these data or perform further processing and analysis.

The working principle of crawlers generally includes the following steps:

1. Send HTTP request: The crawler sends an HTTP request to the target URL to obtain the content of the web page.
2. Parsing HTML: The crawler parses the obtained HTML pages and extracts the required data.
3. Data processing: perform processing operations such as cleaning, sorting, and storage on the extracted data.
4. Traversing links: The crawler extracts other links from the current page, and then recursively visits these links to crawl the entire website.

It should be noted that when crawling web pages, crawlers should abide by the rules and policies of the website, and respect the privacy and usage restrictions of the website.

## Hardware Connection

Connect your components according to the connection diagram below:

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/wukong2040-inventors-case05-06.png)

## Programming Preparation

The firmware burning and settings.toml file settings of Pico W have been introduced in detail in Case 11. If you have not prepared the basic environment, please refer to the programming preparation part of Case 11.

In addition, additional library files need to be added, as shown in the following figure:

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/wukong2040-inventors-case12-04.png)

You first need to go to the [CircuitPython Libraries website](https://circuitpython.org/libraries) to download the same version of the library bundle as the Pico W's firmware that you have burned.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/wukong2040-inventors-case12-05.png)

Unzip the archive and find the files and folders shown in the image above and copy them to the lib folder of the CIRCUITPY disk.

## CircuitPython code programming

```python
import time
import os
import wifi
import socketpool
import ssl
import adafruit_requests
import board
import busio
import displayio
import terminalio
from adafruit_display_text.scrolling_label import ScrollingLabel
import adafruit_displayio_ssd1306

# Setup the display
displayio.release_displays()
i2c = busio.I2C(board.GP17, board.GP16)
display_bus = displayio.I2CDisplay(i2c, device_address=0x3C)
display = adafruit_displayio_ssd1306.SSD1306(display_bus, width=128, height=32)
ssid = os.getenv("DEMO_WIFI_SSID")
password = os.getenv("DEMO_WIFI_PASSWORD")
wifi.radio.connect(ssid, password)
pool = socketpool.SocketPool(wifi.radio)
request = adafruit_requests.Session(pool, ssl.create_default_context())
while True:
    toms = "*" * 10 + " Tom's Hardware News" + "*" * 10
    my_scrolling_label = ScrollingLabel(terminalio.FONT, text=toms, max_characters=20, animate_time=0.1, scale=3)
    my_scrolling_label.x = 10
    my_scrolling_label.y = 10
    display.show(my_scrolling_label)
    for i in range(len(toms) - 6):
        my_scrolling_label.update()
        time.sleep(0.1)

    feed = request.get("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.tomshardware.com%2Ffeeds%2Fall")
    for story in range(5):
        print(feed.json()['items'][story]['title'])
        my_scrolling_label = ScrollingLabel(terminalio.FONT, text=" " * 20 + str(feed.json()['items'][story]['title']),
                                            max_characters=20, animate_time=0.1, scale=2)
        my_scrolling_label.x = 10
        my_scrolling_label.y = 10
        display.show(my_scrolling_label)
        for i in range(len(feed.json()['items'][story]['title']) + 21):
            my_scrolling_label.update()
            time.sleep(0.1)
time.sleep(1800)
```

## Case presentation

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/wukong2040-inventors-kit-case12-06.gif)

## Thinking

Can you make a program to get Twitter messages based on the idea of this case?

## Common Problem



## For more information, welcome to visit：

[micro:bit Accessories Store | ELECFREAKS](https://www.elecfreaks.com/)
