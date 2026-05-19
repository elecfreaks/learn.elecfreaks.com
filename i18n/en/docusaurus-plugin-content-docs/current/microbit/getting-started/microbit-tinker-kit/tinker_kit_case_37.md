# Lesson 37 Invisible Robot
---
- Make an invisible robot scream when it is switched, touched, detects movement, lifted or bumped. This tutorial was written by Shaun Toh from the Singapore University of Technology and Design during his summer internship in 2018.

## Objectives
---
- 1. Assemble a shy invisible robot
- 2. Enter code to build a shy robot

## Materials
- 1 x Micro:bit
- Battery pack
- Any box (large enough to fit the Micro:bit)
- PIR Motion Sensor
- Potentiometer
- Passive Buzzer
- 2 x Jumper Wires

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-tinker-kit/images/wYzUFtC.jpg)

### Step 1 - Connect the Micro:bit

- Connect the buzzer to pin 0 as shown in the diagram. The "+" sign on the buzzer is connected to the yellow port on the breakout board.
- Connect the soil moisture sensor to pin 1.
- Connect the PIR motion sensor to pin 2.
- Connect the potentiometer to pin 3.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-tinker-kit/images/r0wBEcE.jpg)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-tinker-kit/images/SFxLcdg.jpg)

### Step 2 - Add the Tinker Kit Package
We need to add an extension library in the code editor to use the kit components. Click "Advanced" in the micro:bit MakeCode editor, then click "Extensions".

This will open a dialog box. Search for "Tinker kit". Click the search icon or press Enter, then select "tinkercademy-tinker-kit".

This will add two libraries: Tinkercademy for the general sensors in our kit, and OLED for the OLED module (our module has a height of 64 and a width of 128).
We are not using the OLED module in this tutorial, but you can try it out!

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-tinker-kit/images/S54AWdC.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-tinker-kit/images/Tinker_Kit_case_37_02.png)

### Step 3 - Start Coding!
Write the code for the Micro:bit - Coding the Invisible Robot
Your program includes several "if" statements. We want the robot to react to only four conditions.

- The first condition is when the robot is picked up.
- The second condition is when someone touches the soil moisture sensor.
- The third condition is when the robot detects movement in front of it.
- The final condition is when someone adjusts the potentiometer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-tinker-kit/images/Tinker_Kit_case_37_03.png)

## You're Done!
You have completed all the components needed to build the hidden robot, which will make a sound whenever someone startles it! Place it inside any box large enough to hold the components while letting some of them stick out, and you have your own invisible robot! Feel free to decorate it, but be careful — otherwise it will get startled and start screaming!
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-tinker-kit/images/CPK2fOZ.jpg)
