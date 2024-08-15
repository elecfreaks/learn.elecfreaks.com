---
sidebar_position: 5
sidebar_label: Learn about Joysticks:bit V2
---

# Learn about Joysticks:bit V2

## Course Description

In this lesson we will take a brief look at the features and use of Joysticks:bit V2.

## Lesson Preparation

micro:bit

Joysticks:bit V2

2 x #7 batteries

Computer

USB cable

## Introduction to Joysticks:bit V2

---

Joystick:bit V2 is a micro:bit based gamepad. It includes a 4-direction joystick and 4 undefined buttons. It is also paired with a buzzer and vibration motor to enhance the gaming experience. It is compact in appearance, comfortable in hand and can be remotely controlled.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot/images/cutebot_01_01.jpg)

## Introduction to Functional Modules

---

### Handles

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/expansion-board/images/joystick_v2_05.png)

X&Y are respectively connected to the P1 and P2 interfaces of the micro: bit.

 ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/expansion-board/images/joystick_v2_16.png)

Coordinate information of X&Y.

### Buzzer

The passive buzzer is connected to the P0 interface of the micro: bit.

### Vibration motor

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/expansion-board/images/joystick_v2_07.png)

The vibration motor is connected to the P16 interface.

### Buttom

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/expansion-board/images/joystick_v2_08.png)

 The C, D, E, and F buttons connect to the micro:bit's P12, P13, P14, and P15 ports accordingly.


## Quick Start

### Preparation

The joystick:bit will be assembled.![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/install-handle-01.png)

### Programming platforms

We usually use [graphical programming platform makecode](https://makecode.microbit.org/) to program the micro:bit.

Programming platform entry: [https://makecode.microbit.org/](https://makecode.microbit.org/)

### Create a new project

Open [https://makecode.microbit.org/

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode.png)

Create a new project![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode-new-project-01.png)

Enter the project name and click Create.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode-new-project-02.png)
After entering the editor interface, we can see Micro: bit Simulator, Toolbox，Workspace.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode-new-project-03.png)



### Add software library

Click on "Extensions" in the Toolbox of the makecode programming interface.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/add-extensions-1.png)

To program joysticks: bit, we need to add a software library for joysticks: bit. Please enter 'joypicksbit' in the search bar, press enter, and select the software library to add joypicks: bit.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/add-extensions-3.png)



### Software Blocks Explanation

| Block | Function | Parameter |
| ------ | ----- | -------- |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/joysticks-block-notes-01.png) | Set controller vibration | Parameter 1: natural number |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/joysticks-block-notes-02.png)  | Get the return value of the joystick X-axis or Y-axis | Parameter 1: drop-down options <br /> Options: X-axis, Y-axis |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/joysticks-block-notes-03.png)  | When the specified button is in the set state, run the internal program | Parameter 1: Drop-down options <br /> Options: C, D, E, F <br /> Parameter 2: Drop-down options <br /> Options: Press, Release |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/joysticks-block-notes-04.png)  | Determine the button status | Parameter 1: Drop-down options <br /> Options: C, D, E, F |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/joysticks-block-notes-05.png)  | Initialize the handle |  |

### Sample program

Sample Program:[https://makecode.microbit.org/_FgL6MY6L7YVq](https://makecode.microbit.org/_FgL6MY6L7YVq)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit-cutebot-block-01.png)

You can also download the program directly from the following page.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_FgL6MY6L7YVq"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>
### How do I download a program to the micro:bit?

Use a USB cable to connect your PC to the micro:bit V2.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/connect-microbit.gif)

After a successful connection, a disk drive named `MICROBIT` is recognized on the computer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-drive.png)

Click on the bottom left corner of the![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-01.png)，Select `Connect Device`.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-02.png)

Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-03.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-04.png)

Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-05.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-06.png)


Select `BBC micro:bit CMSIS-DAP` in the pop-up window and then select Connect, and at this point, our micro:bit has connected successfully.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-07.png)

Click to download the program.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-08.png)

### Result

Press the C button of the joystick, the micro:bit LED matrix displays the return value of the X-axis of the current joystick and the joystick vibrates for 500ms, press the E button of the joystick, the micro:bit LED matrix displays the return value of the Y-axis of the current joystick and the joystick vibrates for 500ms.
