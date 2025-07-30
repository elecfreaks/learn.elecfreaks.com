# 2.4-inch TFT Display

## Introduction
The 2.4-inch TFT display is a high-performance color screen specially designed for educational scenarios. With its excellent color performance and high-resolution image display capabilities, this display brings a vivid visual experience to your projects. It comes with built-in chart templates such as line charts, pie charts, and bar charts, making your data presentation more intuitive and professional.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04110_01.png)

## Features
- Color display: Rich colors and clear images.
- Graphic and text display: Whether it's complex graphics or clear text, our display can easily present them, meeting your needs for visual information presentation.
- Built-in chart templates: To simplify the data visualization process, we have built-in various chart templates such as line charts, pie charts, and bar charts, making your data presentation more intuitive and professional.

## Specifications
| Item | Parameter |
| --- | --- |
| Product Name | 2.4-inch TFT Display |
| SKU | EF04110 |
| Screen Resolution | 320*240 (RGB) |
| Operating Voltage | 3.3V - 5V |
| Operating Current | 60mA |
| Connection Mode | IIC |
| Dimensions | 72mm (Length) x 68mm (Width) x 8mm (Height) |
| Net Weight | 23g (excluding packaging) |

## Appearance and Positioning Dimensions
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04110_02.png)

## Quick Start

### Hardware Connection
Connect the 2.4-inch TFT display to the IIC interface of the iot:bit.
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04110_03.png)

### Software Programming

#### Add Extension
Add the extension [https://github.com/ZY2516/tft_lcd](https://github.com/ZY2516/tft_lcd) to MakeCode.
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04110_04.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04110_05.png)

#### Block Definition
| Category | Block | Function Definition |
| ------- | --- | --- |
| **Basic** | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04110_block_01.png) | Turn on or off the backlight |
|  | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04110_block_02.png) | Clear the screen display content |
|  | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04110_block_03.png) | Set the background color to a preset color |
|  | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04110_block_04.png) | Set the brush/font color |
|  | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04110_block_05.png) | Clear the content of the first line |
|  | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04110_block_06.png) | Display text information on the Nth (1 - 8) line |
|  | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04110_block_07.png) | Display numerical information on the Nth (1 - 8) line |
|  | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04110_block_08.png) | Display text information at the specified coordinates (X: 0 - 320, Y: 0 - 240) |
|  | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04110_block_09.png) | Display numerical information at the specified coordinates (X: 0 - 320, Y: 0 - 240) |
| **Graphics** | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04110_block_10.png) | Set the starting and ending points of a line and draw the line |
|  | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04110_block_11.png) | Set the starting and ending points of the diagonal of a rectangle, whether to fill it, and draw the rectangle |
|  | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04110_block_12.png) | Set the center, radius, and whether to fill a circle and draw the circle |
|  | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04110_block_13.png) | Draw an arc loader and set its background color |
|  | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04110_block_14.png) | Display a progress bar |
| **Charts** | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04110_block_15.png) | Draw a bar chart/line chart and initialize its data domain, number of columns, color, and label of each group of data |
|  | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04110_block_16.png) | Set the label name and data input of each column of data in the bar chart/line chart |
|  | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/04110_block_17.png) | Draw a pie chart and set its data, labels, and colors |

#### Example Programs

**Set Background Color and Brush Color**
Program code link: [https://makecode.microbit.org/_1qggm50bD4Rk](https://makecode.microbit.org/_1qggm50bD4Rk)
You can also directly download the code through the following window:
<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_1qggm50bD4Rk"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

**Result**
After pressing button A, display the text "A" and a random number (0 - 9) at a random position.

**Display Numbers and Text**
Program code link: [https://makecode.microbit.org/_PF5Ym1a0e45M](https://makecode.microbit.org/_PF5Ym1a0e45M)
You can also directly download the code through the following window:
<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_PF5Ym1a0e45M"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

**Result**
After power-on, display the text "A" on the first line and the number 0 on the second line.

**Draw Lines, Circles, and Rectangles**
Program code link: [https://makecode.microbit.org/_57hLj6aTA2ap](https://makecode.microbit.org/_57hLj6aTA2ap)
You can also directly download the code through the following window:
<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_57hLj6aTA2ap"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

**Result**
After pressing button A, draw a straight line;
After pressing button B, draw a rectangular frame;
After pressing the logo, draw a filled circle.

**Draw an Arc Loader**
Program code link: [https://makecode.microbit.org/_FqYiqfL3y0VL](https://makecode.microbit.org/_FqYiqfL3y0VL)
You can also directly download the code through the following window:
<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_FqYiqfL3y0VL"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

**Result**
After pressing button A, draw an arc loader.

**Draw a Progress Bar**
Program code link: [https://makecode.microbit.org/_hxcfvg22vWmL](https://makecode.microbit.org/_hxcfvg22vWmL)
You can also directly download the code through the following window:
<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_hxcfvg22vWmL"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

**Result**
After pressing button A, draw a progress bar.

**Draw a Line Chart**
Program code link: [https://makecode.microbit.org/_Wqr0fTKvE4ua](https://makecode.microbit.org/_Wqr0fTKvE4ua)
You can also directly download the code through the following window:
<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_Wqr0fTKvE4ua"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

**Result**
After pressing button A, draw a line chart.

**Draw a Bar Chart**
Program code link: [https://makecode.microbit.org/_bj5eqf16kXjY](https://makecode.microbit.org/_bj5eqf16kXjY)
You can also directly download the code through the following window:
<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_bj5eqf16kXjY"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

**Result**
After pressing button A, draw a bar chart.

**Draw a Pie Chart**
Program code link: [https://makecode.microbit.org/_4C9Jq2efHDC2](https://makecode.microbit.org/_4C9Jq2efHDC2)
You can also directly download the code through the following window:
<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_4C9Jq2efHDC2"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

**Result**
After pressing button A, draw a pie chart.

**Overall Test Program**
Program code link: [https://makecode.microbit.org/_7rXKwwR6JgLK](https://makecode.microbit.org/_7rXKwwR6JgLK)
You can also directly download the code through the following window:
<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_7rXKwwR6JgLK"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

### Result
Each time you press button A, the display function will switch:
- Function 1: Display lines, rectangles, circles, and text.
- Function 2: Display a bar chart.
- Function 3: Display a line chart.
- Function 4: Display a pie chart.
- Function 5: Display a progress bar.
- Function 6: Display a loading graph.
After pressing the logo, randomly switch the background color and brush color.
