---
sidebar_position: 11
sidebar_label: Case 3: Make the Robot "Obey Commands"
---

# Case 3: Make the Robot "Obey Commands"

## Case Introduction
Master the basics of MakeCode graphical programming, understand the correspondence between "commands and actions". By dragging and dropping programming blocks and conducting practical debugging, students' basic programming logic and hands-on operation abilities will be cultivated, and they will experience the fun and practicality of programming.

## Teaching Preparation

| Name | Diagram |
| :---: | :---: |
| PU Robot Kit | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/pu-robot-kit/pu-robot-01.png) |
| Programming Device (Computer) |  |
| Flat Ground |  |

## Course Objectives
- Master the basics of MakeCode graphical programming
- Learn to add software libraries and download programs
- Control the robot's walking through programming

## Course Introduction
In the last class, we made the robot obey commands with a remote control. Today, we will learn a more amazing method - programming. By dragging blocks and setting commands, we can make the robot complete actions according to our ideas, just like setting a exclusive password for it. Next, let's step into the world of MakeCode programming and unlock the programming skills of the robot!

## Learning Exploration
1. **Tool Cognition**: Guide students to open the MakeCode programming page on the computer, introduce the basic interface of the tool (block drawer, programming area), and focus on explaining the position and function of the "action blocks" and "control blocks", helping students establish an initial understanding of graphical programming tools.

2. **Block Learning**: The teacher focuses on core needs, explains the usage of basic action blocks such as "walk", "stop" and "kick", demonstrates the operation of "dragging blocks and combining commands", guides students to understand that "each block corresponds to a specific action", and clarifies the core logic that "programming is to combine multiple action blocks to issue continuous commands to the robot".

3. **Practical Exploration**: The teacher gives an example task (move forward for 3 seconds → stop → kick once), guides students to try dragging the corresponding action blocks in groups, set the action duration, adjust the block order, and calculate the rationality of the action duration combined with mathematical knowledge. Let students perceive the correspondence between "commands and actions" in practice and understand the core principles of programming.

## Makecode Programming

### Programming Platform
Go to "[makecode.microbit.org](https://makecode.microbit.org)" and click **New Project**.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-07.png)

### Create a New Project
Enter the project name in the pop-up window and click **Create**.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-11.png)

### Add Software Library
Click **Extensions** in the code drawer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-09.png)

Enter **pu robot** in the pop-up interface and click the search icon. After the **pu robot** software library is displayed, click it.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-pu-robot-kit-software-library-01.png)

### Write the Program

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/robot/pu-robot/pu-robot-case-03-01.png)

Program Link: [https://makecode.microbit.org/_DwbHT85Ve5a1](https://makecode.microbit.org/_DwbHT85Ve5a1)

### Download the Program
To download the program, we first need to remove the micro:bit from the PU Robot.

**Removal and Installation of micro:bit**
1. Rotate the PU Robot's body by 90°

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/pu-robot-kit/pu-robot-kit-program-download-01.png)

2. Unscrew the fixing screws

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/pu-robot-kit/pu-robot-kit-program-download-02.png)

3. Open the head cover and take out the micro:bit

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/pu-robot-kit/pu-robot-kit-program-download-03.png)

**Warning:** Do not forcibly twist the joints of the PU Robot when it is powered on, as this will damage the servo motors.

**Program Download Steps**
Connect the PC and micro:bit V2 with a USB cable.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual03.gif)

After a successful connection, a drive named MICROBIT will be recognized on the computer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual06.png)

Click the icon in the lower left corner ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual07.png) and select **Connect Device**.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual11.png)

Click ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual08.png).

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual12.png)

Click ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual09.png).

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual13.png)

Select **BBC micro:bit CMSIS-DAP** in the pop-up window, then select **Connect**. At this point, our micro:bit has been connected successfully.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual14.png)

Click **Download Program**

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual10.png)

## Result
The PU Robot performs a kicking action after walking forward for three seconds.
