---
sidebar_position: 18
sidebar_label: 案例11 Pico W 获取新闻并显示
---

# 案例11 Pico W 获取新闻并显示

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/wukong2040/raspberry-pi-pico-inventors-kit/images/wukong2040-inventors-case11-01.png)

## 简介

本案例将使用 Raspberry Pi Pico W 主板连接互联网获取新闻网站的消息并在OLED屏幕上显示内容。

本案例介绍了如何使用 Raspberry Pi Pico W 微控制器和 CircuitPython 编程语言来制作一个实时新闻提醒的智能设备。通过连接网络模块和 OLED 显示屏，可以访问 RSS 新闻源并将最新的新闻标题和摘要显示在屏幕上。

该教程不仅适合初学者学习Raspberry Pi Pico W 和 CircuitPython 编程，也为有经验的创客提供了一个有趣的项目来挑战自己的技能。

## 组件清单

1 × Raspberry Pi Pico W

1 × Wukong2040 扩展板

1 × USB 数据线

1 × OLED 显示屏

## 相关知识介绍

### 爬虫

爬虫（Web crawler）是一种自动化程序，用于在互联网上浏览和收集信息。它通过模拟人类用户的行为，自动访问网页并提取所需的数据。

爬虫通常用于搜索引擎、数据挖掘、数据分析、价格比较、内容聚合等应用。它们可以自动访问网页、提取文本、图片、视频等媒体文件，并将这些数据保存下来或进行进一步的处理和分析。

爬虫的工作原理一般包括以下几个步骤：
1. 发送 HTTP 请求：爬虫向目标网址发送 HTTP 请求，获取网页的内容。
2. 解析 HTML：爬虫解析获取到的 HTML 页面，提取出需要的数据。
3. 处理数据：对提取的数据进行清洗、整理和存储等处理操作。
4. 遍历链接：爬虫从当前页面中提取出其他链接，然后递归地访问这些链接，实现对整个网站的爬取。

需要注意的是，爬虫在进行网页抓取时，应遵守网站的规则和政策，尊重网站的隐私和使用限制。

## 硬件连接

按照下面连接示意图，将您的元器件连接起来：

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/wukong2040/raspberry-pi-pico-inventors-kit/images/wukong2040-inventors-case05-06.png)

## 编程准备

关于 Pico W 的固件烧录和 settings.toml 文件设置已在案例11中详细介绍，若您还没有准备好基础环境准备，请先参考案例11的编程准备部分内容。

在此之外，还需要添加额外的库文件，如下图所示：

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/wukong2040/raspberry-pi-pico-inventors-kit/images/wukong2040-inventors-case12-04.png)

首先需要转到 [CircuitPython Libraries 网站](https://circuitpython.org/libraries)下载与已经烧录的 Pico W 的固件相同版本的库捆绑包。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/wukong2040/raspberry-pi-pico-inventors-kit/images/wukong2040-inventors-case12-05.png)

将压缩包解压并找到上图中显示的文件和文件夹复制到 CIRCUITPY 磁盘的 lib 文件夹中。

## CircuitPython 代码编程

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

## 案例演示

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/wukong2040/raspberry-pi-pico-inventors-kit/images/wukong2040-inventors-kit-case12-06.gif)

## 思考

您能根据这篇案例的思路制作获取 Twitter 消息的程序吗？



## 常见问题



## 更多信息，欢迎访问：

[micro:bit Accessories Store | ELECFREAKS](https://www.elecfreaks.com/)
