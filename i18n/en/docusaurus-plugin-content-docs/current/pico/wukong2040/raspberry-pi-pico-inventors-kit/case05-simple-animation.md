---
sidebar_position: 12
sidebar_label: Case 05 Simple Animation
---


# Case 05: Simple Animation

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/pico/wukong2040/raspberry-pi-pico-inventors-kit/images/wukong2040-inventors-case05-01.png)

## Introduction

As children we loved cartoons and when we watched them we could not help but put ourselves into that world view as if it were real. Now we know that cartoons are dynamic effects created by the flashing of a picture frame by frame in a very short period of time. In this case, let's also create a very simple animation effect, so let's get started.

## Materials Requested

1 × Raspberry Pi Pico

1 × Wukong2040 expansion board

1 × USB cable

1 × OLED display

## Relevant Information Introduction

### The principle of animation

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/pico/wukong2040/raspberry-pi-pico-inventors-kit/images/wukong2040-inventors-case05-02.gif)

The principle of animation is to create the illusion of movement by playing a series of still images in rapid succession. This illusion is caused by the visual retention effect of the human eye, which means that when an image disappears from the field of view, the human eye still retains the image of that image for a period of time until the next image appears. By playing a series of still images in rapid succession, each slightly different from the other, the human eye synthesises these images into continuous motion.

Animation can be implemented using techniques such as traditional hand-drawn animation, digital animation or hybrid animation. Traditional hand-drawn animation involves drawing each frame by hand on transparent plastic paper, then filming it frame by frame and putting the frames on film to make a movie. Digital animation, on the other hand, uses computers to draw and process images to produce animation, which has the advantage of being cheaper and more efficient to produce. Hybrid animation is a combination of traditional and digital animation techniques, where images are drawn by hand and then post-produced by computer to achieve a higher quality of image and effect.

### Hardware Connection

Connect your components according to the following connection diagram:

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/pico/wukong2040/raspberry-pi-pico-inventors-kit/images/wukong2040-inventors-case04-06.png)

## MicroBlocks Graphical Programming

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/pico/wukong2040/raspberry-pi-pico-inventors-kit/images/wukong2040-inventors-case05-05.png)

## CircuitPython Code

```python
# Import the libraries of OLED and time
from OLED import *
import time

# Create OLED object and pass in SDA/SCL pin number
oled = OLED(board.GP17, board.GP16)

while True:
    # Vertical lines are shown from left to right
    for i in range(0, 128, 5):
        oled.draw_line(i, 0, i, 64)
        time.sleep(0.01)
        oled.set_clear()
    # Show horizontal lines from top to bottom
    for j in range(0, 64, 3):
        oled.draw_line(0, j, 128, j)
        time.sleep(0.01)
        oled.set_clear()
```

## Case Display

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/pico/wukong2040/raspberry-pi-pico-inventors-kit/images/wukong2040-inventors-kit-case05-06.gif)

## Think

Can you make a piece that displays a photo at regular intervals and uses a trimpot sensor to control the interval?



### FAQ



### For more information, please visit:

[micro:bit Accessories Store | ELECFREAKS](https://www.elecfreaks.com/)
