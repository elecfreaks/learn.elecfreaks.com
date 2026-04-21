---
sidebar_position: 8
sidebar_label: How to Download Programs
---

# How to Download Programs

## How to Remove the micro:bit from the PU Robot
To program the PU Robot, you need to remove the micro:bit first.

**Warning: Downloading a self-written program will overwrite the original firmware and disable remote control. To restore the original functions, please refer to the firmware flashing document and update the firmware accordingly.**

**Warning: Do not forcibly twist the joints of the PU Robot while it is powered on, as this will damage the servo motors.**

1. Rotate the body of the PU Robot by 90°.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/pu-robot-kit/pu-robot-kit-program-download-01.png)

2. Unscrew the fixing screws.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/pu-robot-kit/pu-robot-kit-program-download-02.png)

3. Open the head cover.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/pu-robot-kit/pu-robot-kit-program-download-03.png)

4. Take out the micro:bit.

## Programming Platform
Go to "[makecode.microbit.org](https://makecode.microbit.org)" and click **New Project**.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-07.png)

## Create a New Project
Enter a project name in the pop-up window and click **Create**.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-11.png)

## Add Software Libraries
Click **Extensions** in the code drawer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-09.png)

Type **pu robot** in the pop-up interface and click the search icon. When the **pu robot** library appears, select it. Use the same method to add the PlanetX library.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-pu-robot-kit-software-library-01.png)

## Write the Program
Drag the **Perform Action** block under **On Button A Pressed**, and select **Auto Explore**.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-pu-robot-kit-program-download-04.png)

Program Link: [https://makecode.microbit.org/_e1c2d338VEFL](https://makecode.microbit.org/_e1c2d338VEFL)

## Program Download Steps
Connect the PC and micro:bit V2 using a USB cable.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual03.gif)

After a successful connection, a drive named **MICROBIT** will appear on your computer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual06.png)

Click the icon in the lower-left corner
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual07.png)
and select **Connect Device**.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual11.png)

Click
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual08.png).

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual12.png)

Click
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual09.png).

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual13.png)

In the pop-up window, select **BBC micro:bit CMSIS-DAP**, then click **Connect**. Your micro:bit is now connected successfully.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual14.png)

Click **Download Program**.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual10.png)

## Result
After turning on the power, press button A on the micro:bit. The robot will move forward automatically and avoid obstacles when detected.
