# ASR(Automatic Speech Recognition) Module

## Introduction

It is able to control the device via your voice such as to give commands of  moving forward, reversing and starting the line-tracking mode etc.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/05037_01.png)

## Products Link

[ELECFREAKS PlanetX PIR Sensor](https://www.elecfreaks.com/planetx-pir.html)


## Characteristics

 Designed with RJ11 ports and easy to plug.

## Specification


Item | Parameter
:-: | :-:
Connection|RJ11
Connection Type|IIC
Working Voltage|3.3V
Core IC|SNR3512M


## Outlook and Dimension



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/05037_02.png)

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

| Lexical Item | IIC Return Data |
| :-: | :-: |
| Learning entry one | 0x50 |
| Learning entry two | 0x51 |
| Learning entry three | 0x52 |
| Learning entry four | 0x53 |
| Learning entry five | 0x54 |
| Learning entry six | 0x55 |
| Learning entry seven | 0x56 |
| Learning entry eight | 0x57 |
| Learning entry nine | 0x58 |
| Learning entry ten | 0x59 |

## Quick to Start


### Materials required and connections diagram

 Connect the ASR module to the IIC port and the motor fan to J1 port on Nezha expansion board.


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/05037_03.png)



## MakeCode Programming


### Step 1
Click "Advanced" in the drawer of the MakeCode to see more choices.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/05001_04.png)

We need to add a package for programming. Click "Extensions" in the bottom of the drawer and search with "PlanetX" in the dialogue box to download it.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/05001_05.png)

***Note:*** If you met a tip indicating that the codebase will be deleted due to incompatibility, you may continue as the tips say or build a new project in the menu.

### Available Commands of ASR Module



### Step 2
### Code as below



### Link
Link: [https://makecode.microbit.org/_9j8UEEYi82tF](https://makecode.microbit.org/_9j8UEEYi82tF)

You may also download it directly below:


<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_9j8UEEYi82tF"
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
 The motor fan is controlled by the ASR module.


## Relevant File


## Technique File
