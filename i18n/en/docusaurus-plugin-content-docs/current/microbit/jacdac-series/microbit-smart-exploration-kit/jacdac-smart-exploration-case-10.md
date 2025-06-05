# Case 10: Password Master

## Introduction:

A password system built using a rotary encoder and a button sensor, where a light ring acts as an indicator for password verification.

---

## Case Purpose:

1. Understand the variable building blocks in MakeCode

2. Understand the For loop building blocks in MakeCode

---
## 所需材料：
|Item|Picture|Number|
|--|--|--|
|micro:bit V2|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/microbit%20%E6%AD%A3(1).png)|1|
|Jacdac expansion board|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20bit.png)|1|
|Jacdac 10cm Connection lines|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac-smart-exploration-kit-10cm-cable.png)|3|
|button sensors|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20Button%20sensor.png)|1|
|knob encoders|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20Rotray%20Encoder%20sensor.png)|1|
|Light Ring|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20LED%20Ring.png)|1|
|USB Cable|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/usb%20cable1.png)|1|

---
## Sensor principle description:

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/Jacdac%20Button-1.png)

**Principle description**

Button sensor: A sensor used to detect the status of a button, which outputs signals carrying "0" and "1".

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/Jacdac%20Rotray%20Encoder-1-1.png)
**Principle description**:

Rotary encoder: A sensor used to detect the direction and value of rotational motion.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/Jacdac%20LED%20Ring-1.png)

**Principle description**:

Light ring: A circular light ring composed of 8 RGB lights.

---
## Connection diagram

As shown in the figure below, insert the micro:bit into the Jacdac expansion board, and use the connecting wire to connect the rotary encoder, button sensor, and light ring to the gold finger interface of the Jacdac expansion board in a daisy chain manner.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/hardware-connection-diagram/jacdac-smart-exploration-kit-case-10.png)

---
## Programming software

[Microsoft makecode](https://makecode.microbit.org/#)

---
## Makecode programming
### Step 1: How to add Jacdac extension
1. Enter [Microsoft Makecode](https://makecode.microbit.org/#) and click "New Project"

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-07.png)

2. In the pop-up window, enter a project name and click Create.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-11.png)

---
3. Click "Extend" in the code drawer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-09.png)

4. In the pop-up interface, enter "Jacdac" and click the search icon, select the Jacdac software library, as shown in the figure.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/jacdac-smart-exploration-kit-3.png)

---
### Step 2：
1. Connect the micro:bit mainboard to the computer with a data cable.
   
   **Note**: If the micro:bit is running the Jacdac program for the first time, please pre-install a blank Jacdac program on the mainboard, otherwise skip this step.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/jacdac-smart-exploration-kit-5.png)

2. Connect the sensor, MakeCode will automatically identify and simulate it, and the sensor will provide real-time feedback of the sensor status in the simulation area.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/1jacdac-smart-exploration-kit-6.png)

3. Click on "ADD BLOCKS" sensor expansion module.
   
   **Note**: To connect a new sensor, repeat the "Click on "ADD BLOCKS" sensor expansion module" operation process.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/jacdac-smart-exploration-kit-7.png)

---
## Write the program as shown
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/program/jacdac-smart-exploration-kit-case-%2001110.png)

---
## Reference program link:
 ![https://makecode.microbit.org/_VT8PKvJvLCLi](https://makecode.microbit.org/_VT8PKvJvLCLi)

---
You can also download the program directly from the following webpage and start running the program after the download is complete.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_VT8PKvJvLCLi"
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

## Result

After the micro:bit is turned on, it will automatically generate a random number of "-5 ~ 5" as the password. Press the micro:bit motherboard button "A" to start the game. After the game starts, the micro:bit motherboard will display a countdown from 9 to 0 and play a sound. The player needs to enter the password he guessed by rotating the encoder. **The initial position of the rotary encoder is the password "0". Rotating it one grid to the left will reduce the password by 1, and rotating it one grid to the right will increase the secret by 1. ** When the player rotates the code to the password he thinks is correct, press the button sensor to confirm whether it is correct. If the password is correct, the screen will display a "√" pattern. If the correct password is not entered before the countdown ends, the game fails.

**If you need to restart the game, press the reset button of the micro:bit motherboard. Note that the rotary encoder will not initialize the position. **
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/hardware-connection-diagram/jacdac-smart-exploration-kit-case-01021.gif)

## Thinking

How to build a more complex password?
