# Speech Recognition Sensor

## Introduction
Speech recognition sensor can realize the voice recognition function, and support self-learning words. Combined with rainbow LED, intelligent cars and other hardware can realize voice recognition control lamps, voice recognition control cars and other interesting cases.

 ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/sensor/octopus-sensors/sensor/images/EF04108-01.png)

## Technical Specifications
| Item | Parameter |
| :-: | :-: |
| SKU | EF04109 |
| Interface Type | IIC |
| Operating Voltage | 3.3V |
| Core IC | SNR9815 |

## Outlook and Dimensions

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/sensor/octopus-sensors/sensor/images/EF04108-02.png)

## Speech Recognition Sensor Preset Phrases and Feedback

**Wake-up Call**

| Lexical Item | Feedback Voice | IIC Return Data |
| :-: | :-: | :-: |
| Hi Shaun | Hi, I’m here | 0x01 |

**Functional Group 1**

| Lexical Item | Feedback Voice | IIC Return Data |
| :-: | :-: | :-: |
| Lights on | Already on | 0x10 |
| Lights off | Already off | 0x11 |
| Turn left | Turn left | 0x12 |
| Turn right | Turn right | 0x13 |
| Full speed ahead | Full speed ahead | 0x14 |
| Reversing | Reversing | 0x15 |
| Line tracking | Line tracking | 0x16 |
| Avoid objects | Objects avoided | 0x17 |
| Stop | Already stopped | 0x18 |

**Function Group 2**

| Lexical Item | Feedback Voice | IIC Return Data |
| :-: | :-: | :-: |
| Start device | Device started | 0x20 |
| Turn off device | Device turned off | 0x21 |
| Pause | Have arest | 0x22 |
| Keep going | Keep going | 0x23 |
| Raise a level | Level raised | 0x24 |
| Lower a level | Level lowered | 0x25 |
| Music on | Enjoy the music | 0x26 |
| Music off | Music off | 0x27 |
| Switch music | Enjoy next music | 0x28 |

**Function Group 3**

| Lexical Item | Feedback Voice | IIC Return Data |
| :-: | :-: | :-: |
| Execute function one | Execute function one | 0x31 |
| Execute function two | Execute function two | 0x32 |

**Self-Learning Lexical Item**

| IIC Return Data | Feedback Voice | Function |
| :-: | :-: | :-: |
| 0×50 | Enter the learning mode and learn the Xth entry | Learn the entries sequentially |
| 0×60 | Initialization completed | Delete all learned entries |

| Lexical Item | Feedback Voice | IIC Return Data |
| :-: | :-: | :-: |
| Quit learning | Quit learning |  |
| Learning entry one |  | 0x50 |
| Learning entry two |  | 0x51 |
| Learning entry three |  | 0x52 |
| Learning entry four |  | 0x53 |
| Learning entry five |  | 0x54 |
| Learning entry six |  | 0x55 |
| Learning entry seven |  | 0x56 |
| Learning entry eight |  | 0x57 |
| Learning entry nine |  | 0x58 |
| Learning entry ten |  | 0x59 |

## Quick Start

### Required Materials and Diagram of Connection

The speech recognition sensor is connected to the IIC interface as shown in the figure below.

***Take IOT:bit as an example***

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/sensor/octopus-sensors/sensor/images/EF04108-03.png)

### Add Software Library
Click "Advanced" in MakeCode's code drawer to see more code options.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/sensor/octopus-sensors/sensor/images/EF04108-04.png)

Click "Extension" and search "https://github.com/elecfreaks/pxt-ASR" in the pop-up dialog box to download the code base for speech recognition building blocks.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/sensor/octopus-sensors/sensor/images/EF04108-05.png)


### Write the program as shown



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/sensor/octopus-sensors/sensor/images/EF04108-06.png)




### Reference Program
Link: [https://makecode.microbit.org/_7TLYW8WzyLka](https://makecode.microbit.org/_7TLYW8WzyLka)

You can also download the program directly from the following web page, and you can start running the program after the download is complete.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_7TLYW8WzyLka"
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
The content of the LED display is controlled by a voice recognition sensor.

## Related Cases


## Technical File
