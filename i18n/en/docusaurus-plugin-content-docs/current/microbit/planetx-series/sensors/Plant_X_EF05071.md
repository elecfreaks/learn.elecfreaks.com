# PlanetX Smart Brick Motor  (EF05071)

## Introduction

PlanetX Smart Brick Motor combines high-precision servo and high-efficiency motor features to create an unprecedented all-around drive core. It has ultra-high control accuracy, instantaneous response speed and powerful torque, and built-in intelligent protection systems, including temperature monitoring, blocking detection and voltage stabilization protection, to ensure a safe and stable operating environment, injecting surging power for your creative projects.

Translated with DeepL.com (free version)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-introduction-05.png)



## Product Features

- **Two-in-one design**: integrates the functions of servo and motor to realize multi-function drive.
- **High-precision control**: Using coded motors, it is able to accurately control and feedback the current angle.
- **Powerful torque**: Provides enough power for various application scenarios that require larger torque.
- **Intelligent Protection System**: Built-in temperature monitoring, blocking detection and voltage stabilization protection ensure safe and stable operation of the equipment.
- **Durable wire**: Adopts RJ11 wire, which is designed to be durability-proof, not easy to break, and replaceable.
- **Good compatibility**: Fully compatible with building block structural components, easy to combine with other building block components.
- **Stable Installation**: Full pin hole design makes the structure installation more solid.
- **Color recognition**: Supports color recognition system, effectively reducing the difficulty for beginners to get started.

These features make PlanetX Smart Brick Motor up to a versatile, high-precision, safe and reliable drive core, ideal for a variety of creative projects and robotics.

Translated with DeepL.com (free version)

## Introduction to the main modules

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-motor02.png)

## Technical specifications

|         project          |                          parameter                           |
| :----------------------: | :----------------------------------------------------------: |
|       Product Name       |                  PlanetX Smart Brick Motor                   |
|           SKU            |                           EF05071                            |
|    Operating Voltage     |                           5.0~9.0V                           |
|      No-load Speed       |                           125 rpm                            |
|       StallTorque        |                           ≥29 Ncm                            |
|        Accuracy          |                             ≤3°                              |
|  Operating Travel Angle  |                          360°  * N                           |
|   Connector Interface    |                             RJ11                             |
| Building Block Interface |                           support                            |
|      Speed Reading       |                           support                            |
|      Angle Reading       |                           support                            |
|  Protection Mechanisms   | Temperature protection, blocking protection, voltage protection |
| Color Recognition System |                           support                            |
|          Weight          |                             31g                              |


## Quick Start

Open [https://makecode.microbit.org/](https://makecode.microbit.org/)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode.png)

### New Project

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode-new-project-01.png)

Enter a project name and click Create.

After entering the editor interface we can see Micro:bit Simulator，Toolbox，Workspace。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode-new-project-03.png)

### Add Proprietary Extension Libraries

In order to program Nezha Pro, we need to add an extension library. Find “Extensions” in the code drawer and click on it.。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-02.png)

A dialog box will pop up, search for “nezha2” and click on download the code base.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/nezha-v2-add-extension-02.png)

*Note:* If you get a prompt that some codebase will be removed for incompatibility reasons, you can either follow the prompt and continue, or create a new project inside the project menu bar

### Introduction to Software Building Blocks

| Building Block | Founction | Parameter |
| ------ | ----- | -------- |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/nezha-v2-block-notes-01.png) | Sets the motor of the corresponding interface to rotate in the specified direction. | Parameter 1: Drop-down options <br /> Options: M1, M2, M3, M4 <br /> Parameter 2: Drop-down options <br /> Options: Clockwise, Counterclockwise <br /> Parameter 3: Integer <br /> Parameter 4: Drop-down options <br /> Options: Degrees, Circles, Seconds |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/nezha-v2-block-notes-02.png) | Sets the motor of the corresponding interface to rotate the specified angle in the specified direction. | Parameter 1: Drop-down options <br /> Options: M1, M2, M3, M4 <br /> Parameter 2: Drop-down options <br /> Options: Clockwise, Counterclockwise <br /> Parameter 3: Integer |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/nezha-v2-block-notes-03.png) | Set the motor of the corresponding interface to rotate in the specified direction | Parameter 1: Drop-down options <br /> Options: M1, M2, M3, M4 <br /> Parameter 2: Drop-down options <br /> Options: Clockwise, Counterclockwise |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/nezha-v2-block-notes-04.png) | Setting the motor of the corresponding interface to stop runningParameter 1: Drop-down options <br /> Options: M1, M2, M3, M4 |                                                              |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/nezha-v2-block-notes-05.png) | Set the motor of the corresponding interface to run at the specified speed | Parameter 1: Drop-down options <br /> Options: M1, M2, M3, M4 <br /> Parameter 2: Integer <br /> Value range: -100~100 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/nezha-v2-block-notes-06.png) | With this block you can get the current angle value of the motor |  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/nezha-v2-block-notes-07.png) | The current speed of the motor can be obtained from this block |  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/nezha-v2-block-notes-08.png) | Set the motor of the corresponding interface to rotate to zero position |  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/nezha-v2-block-notes-09.png) | Set the connection interface between the left and right wheel motors of the car | Parameter 1: Drop-down options <br /> Options: M1, M2, M3, M4 <br /> Parameter 2: Drop-down options <br /> Options: M1, M2, M3, M4 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/nezha-v2-block-notes-10.png) | Setting the speed of the cart | Parameter 1: Value <br /> Value range: -100~100 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/nezha-v2-block-notes-11.png) | Setting the trolley to stop running | Parameter 1: Value <br /> Value range: -100~100 <br /> Parameter 2: Value <br /> Value range: -100~100 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/nezha-v2-block-notes-12.png) | Setting the car to go forward or backward | Parameter 1: Drop-down options <br /> Options: forward, backward |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/nezha-v2-block-notes-13.png) | Setting the speed of the left and right wheels of the cart | Parameter 1: Value <br /> Value range: -100~100 <br /> Parameter 2: Value <br /> Value range: -100~100 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/nezha-v2-block-notes-14.png) | Get the current firmware version number |  |

### Hardware Connection

Connect the PlanetX Smart Brick Motor to the motor M1 port of the Nezha Breakout Board Pro as shown in the picture.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/nezha-v2-hardware-wiring.png)

### Program example

*** Take the current position as the zero point and run 180 degrees clockwise ***

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/nezha-v2-example-01.png)

#### Reference Program

Please refer to the program link: [https://makecode.microbit.org/_E6vawDM7yX87](https://makecode.microbit.org/_E6vawDM7yX87)

You can also download the program directly from the following website, and start running the program after downloading.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_E6vawDM7yX87"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>
### How to download the program to micro:bit?

Use a USB cable to connect PC and micro:bit V2.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/connect-microbit.gif)

After the connection is successful, a drive letter named `MICROBIT` will be recognized on the computer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-drive.png)

Click the ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-01.png) in the lower left corner and select `Connect Device`.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-02.png)

Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-03.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-04.png)

Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-05.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-06.png)


In the pop-up window, select `BBC micro:bit CMSIS-DAP`, and then select Connect. At this point, our micro:bit has been successfully connected.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-07.png)

Click Download.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-08.png)

#### Result

When button A is pressed, the motor connected to port A rotates 180° clockwise.

*** The servo rotates to the preset zero position and runs 180 degrees clockwise ***

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/nezha-v2-example-02.png)

#### Reference Program

Please refer to the program link: [https://makecode.microbit.org/_1w9VLsEE8fdi](https://makecode.microbit.org/_1w9VLsEE8fdi)

You can also download the program directly from the following website, and start running the program after downloading.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_1w9VLsEE8fdi"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>
#### Result

When button A is pressed, the motor connected to port A automatically rotates to the preset zero position. When button B is pressed, the motor connected to port A rotates 180° clockwise.

*** Set the motor rotation speed and control the motor to start or stop ***

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/nezha-v2-example-03.png)

#### Reference Program

Please refer to the program link: [https://makecode.microbit.org/_fdiPdcJ71f4X](https://makecode.microbit.org/_fdiPdcJ71f4X)

You can also download the program directly from the following webpage, and start running the program after downloading.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_fdiPdcJ71f4X"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>
#### Result

Set the motor speed and start or stop the motor using the A and B buttons.

*** Read the rotation angle ***

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/nezha-v2-example-04.png)

#### Reference Program

Please refer to the program link: [https://makecode.microbit.org/_Axw3drgX6Y3V](https://makecode.microbit.org/_Axw3drgX6Y3V)

You can also download the program directly from the following website, and start running the program after downloading.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_Axw3drgX6Y3V"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>
#### Result

After turning on the power, press the A key to control the motor to rotate for 3 seconds, and then display the current angle value.

*** Read the rotation speed (turns/second) ***

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/nezha-v2-example-05.png)

#### Reference Program

Please refer to the program link: [https://makecode.microbit.org/_01x60dRX9Ros](https://makecode.microbit.org/_01x60dRX9Ros)

You can also download the program directly from the following webpage, and start running the program after downloading.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_01x60dRX9Ros"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>
#### Result

After turning on the power, the motor starts to rotate, and the LED matrix of micro:bit displays the current speed (rotation/second).

*** Read the firmware version number ***

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/nezha-v2-example-06.png)

#### Reference Program

Please refer to the program link: [https://makecode.microbit.org/_V0tJ15dkhLVq](https://makecode.microbit.org/_V0tJ15dkhLVq)

You can also download the program directly from the following webpage, and start running the program after downloading.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_V0tJ15dkhLVq"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>
#### Result

After turning on the power, the LED matrix of micro:bit displays the current firmware version number.
