---
sidebar_position: 2
sidebar_label: micro:bit Retro Arcade Remote Control XGO-lite V2
---

# Micro:bit Retro Arcade Remote Control XGO-lite V2

## Introduction

The combination of micro:bit Retro Arcade and XGO Robot Kit V2 will bring you an unprecedented programming and remote control experience. In this innovative practice, we will use the micro:bit Retro Arcade's color-screen handle expansion board to control the XGO Robot Kit V2, a desktop-level quadruped robot dog with fifteen degrees of freedom, by remote control. You can develop more creativity, enhance logical thinking and hands-on ability in a fun programming learning environment.

Through the button control of the micro:bit Retro Arcade, we can realize the omnidirectional movement of XGO Robot Kit V2, six-dimensional attitude control, attitude stabilization, multiple motion gaits and gripping tasks, etc.

Writing games, designing plots, customizing characters, and flexible interaction with remote-controlled quadruped robot dogs will allow you to explore the mysteries of programming in a relaxed and pleasant atmosphere. At the same time, graphical programming can also be used to create more creative applications for XGO Robot Kit V2.

## Material Preparation

1 × micro:bit XGO Robot Kit V2

1 × micro:bit Retro Arcade

## Start Programming

The micro:bit Retro Arcade and micro:bit XGO Robot Kit V2 both use the micro:bit as the main controller. Based on the Bluetooth function of the micro:bit V2, the two main controllers can communicate with each other. Therefore, this tutorial will program the two devices through the graphical programming platforms: [MakeCode](https://makecode.microbit.org) and [MakeCode Arcade](https://arcade.makecode.com).

![](./../../images/microbit-xgo-lite-v2-makecode-01.png)

![](./../../images/microbit-xgo-lite-v2-makecode-011.png)

### XGO-lite V2 Programming Environment Preparation

1.  Open the [MakeCode](https://makecode.microbit.org) official website, click **New Project**, name the project and **Create**

![](./../../images/microbit-xgo-lite-v2-makecode-02.png)

2.  Click **Extension** and search for **XGO** in the search bar, select the XGO library, and you can load the XGO library into the makecode platform programming environment

   ![](./../../images/microbit-xgo-lite-v2-makecode-03.png)

![](./../../images/microbit-xgo-lite-v2-makecode-03-1.png)

### XGO-lite V2 Programming Example

![](./../../images/microbit-xgo-lite-v2-makecode-03-6.png)

Link: https://makecode.microbit.org/_ddT6ypdu34Ap

### Retro Arcade Programming environment preparation

Click **New Project**

![](./../../images/microbit-retro-arcade-10.png)

Enter a project name to create a new project.

![](./../../images/microbit-retro-arcade-11.png)

To add the wireless communication extension library, click Extend.

![](./../../images/microbit-retro-arcade-25.png)

Enter "radio" in the search bar and click Search to add the extension library.

![](./../../images/microbit-retro-arcade-26.png)

### Retro Arcade Program Example

![](./../../images/microbit-xgo-lite-v2-makecode-03-7.png)



Link: https://makecode.com/_T7FgaeRe294M

As far as the official Arcade platform is concerned, micro:bit V2 (nRF52833) is still in the testing stage, so we need to go to the platform’s settings page to open the hardware options that are still in the experimental version.

![](./../../images/microbit-retro-arcade-17.png)

Make sure that Experimental Hardware is enabled (you only need to set it once)

![](./../../images/microbit-retro-arcade-18.png)

Then return to the programming home page, click the download button in the lower left corner, and select N3 in the pop-up selection hardware window to the bottom

![](./../../images/microbit-retro-arcade-19.png)



You will get a file in .hex format, drag it into the MICROBIT drive letter to run it on micro:bit V2 + Microbit Retro Arcade.



## Case presentation
