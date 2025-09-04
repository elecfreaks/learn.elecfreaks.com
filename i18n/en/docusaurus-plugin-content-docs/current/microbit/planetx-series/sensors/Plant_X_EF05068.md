# PS2 Joystick Kit

## Introduction
The PS2 controller is a remote control suitable for various types and structures of devices such as remote-controlled robots, smart cars, and robotic arms. We can use the controller's joysticks, buttons, and other components to control robots to perform corresponding actions.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/ef05068-01.png)

**Note: The controller kit includes one controller and one receiver, and their communication is pre-bound by default. They cannot be paired with other controllers or receivers. The receiver is used by connecting it to the Ne Zha Pro Expansion Box. Install two AAA batteries on the back of the controller, then toggle the power button (located between the two joysticks) to the left to turn it on.**
**Without pairing, the controller will enter sleep mode after 30 seconds; after turning on and completing pairing, if no buttons are pressed for 5 minutes, it will automatically enter sleep mode. Press the START button to wake up the controller.**

## Features
- RJ11 port design prevents incorrect insertion and ensures easy use.
- The controller is bound to the receiver, so multiple controllers used simultaneously will not interfere with each other.

## Technical Specifications

| Item       | Specification |
| :--------- | :------------ |
| SKU        | EF05068       |
| Interface  | RJ11          |
| Interface Type | IIC (also known as I2C) |
| Operating Voltage | 3.3V      |


## External and Positioning Dimensions
---

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/ef05068-02.png)


## Quick Start

### Required Equipment and Connection Diagram
As shown in the figure below, connect the PS2 controller adapter to the IIC port of the Ne Zha Expansion Board.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/ef05068_03.png)

## MakeCode Programming

### Step 1
Click "Advanced" in the MakeCode to see more choices.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/sensor/planet-x-sensors/images/05001_04.png)

For programming, we need to add a package: click "Extensions" at the bottom of the MakeCode drawer and search with "PlanetX" in the dialogue box to download it.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/sensor/planet-x-sensors/images/05001_05.png)

*Note: If you receive a prompt that some code libraries will be deleted due to incompatibility, you can proceed as prompted or create a new project in the project menu bar.*

### Step 2
### Write the Program as Shown in the Figure

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/ef05068_04.png)


### Reference Program
Please refer to the program link: [https://makecode.microbit.org/_Ma4PDshtPXJf](https://makecode.microbit.org/_Ma4PDshtPXJf)

You can also download the program directly through the following webpage; after downloading, you can start running the program.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_Ma4PDshtPXJf"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>
---

### Result
The controller can control the content displayed on the LED matrix of the micro:bit.
