---
sidebar_position: 3
sidebar_label: Unboxing self-test
---


#  Unboxing self-test

The purpose of the unboxing self-test is to make sure that the product you purchased is as expected and that it has not been damaged in any way. Please follow the steps below to perform the unpacking self-test:

## 1. Check the package

Check that the packaging is intact and that the label and description on the packaging match the product you purchased.

## 2. Confirm accessories

Verify that all accessories included with the product are complete and as described in the kit listing.

Packing list:

| project                                                   | Picture | Quantity |
| :-------------------------------------------------------- | ------- | -------- |
| XGO-Lite V2 complete machine (with XGO Adapter installed) |         | 1        |
| Type-C                                     |         | 1        |
| Quick Start Manual                                        |         | 1        |
| 30mm EVA ball                                             |         | 3        |
| 25mm side length wooden cubes                             |         | 3        |
| 3.0 Phillips screwdriver                                  |         | 1        |
| 2.0 Phillips screwdriver                                  |         | 1        |
| M3 * 5 Phillips countersunk head screws                    |         | 2        |
| Rudder screws                                              |         | 6        |
| Servo fixing screws                                        |         | 4        |
| Case fixing screwss                                        |         | 2        |
| Mechanical claw set screws                                 |         | 2        |
| Gear set screws                                            |         | 2        |

## 3. Check the appearance

Check that the product is in good condition and that there are no obvious scuffs, scratches or dents.

## 4. Check function

Check that the product functions as expected.

### Boot detection

Put the robot dog in a prone position to avoid joints from being stuck, then press the power switch on the back of the robot dog, the power ring light on the switch flashes quickly and then stays on, the robot dog stands slowly, and the mechanical arm retracts automatically after opening, indicating Boot up successfully. **Note: Don’t hold it in your hand to turn it on. The shaking of the robot dog during the startup process will cause the robot dog to move abnormally. **

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/robot/xgo-robot-kit-v2/images/microbit-xgo-lite2-detection-01.gif)

### Shutdown detection

Press the power switch on the back, the ring light flashes slowly, the robot dog slowly gets down, the mechanical arm retracts, and then the ring light goes out, indicating that the system is completely shut down.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/robot/xgo-robot-kit-v2/images/microbit-xgo-lite2-detection-02.gif)

### Smartphone Remote Detection

If your smartphone's operating system is Android, you can download and install it through the following download link. After installation, open the XGO APP to see the startup interface as shown in the figure:

Download link: https://www.elecfreaks.com/download/xgo/XGO_v3.2.3.apk

![xgo app打开界面](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-robot-kit/images/microbit-xgo-robot-kit-08-1.png)


**Notice**:

1. As of the completion date of this tutorial, the version number of the XGO APP used is: 3.2.3, please ensure that the downloaded XGO APP version is not lower than 3.2.3.

2. After installing the XGO APP, please open the permissions of the XGO APP in the settings, including: location information, nearby devices, otherwise XGO-lite V2 may not be searchable.
3. The XGO APP is still being improved gradually. If you encounter any problems during use, please give us feedback, at the after-sales email address: support@elecfreakc.com.

### Connect XGO-lite V2

Turn on the Bluetooth function of the smartphone, turn on the XGO-lite V2, open the XGO APP, there is a ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/robot/xgo-robot-kit-v2/images/microbit-xgo-lite-v2-app-2.png) icon in the upper left corner of the home page, click the Bluetooth icon, and follow the prompts to connect the smartphone to XGO-lite V2.

![xgo app蓝牙连接界面](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-robot-kit/images/microbit-xgo-robot-kit-08-2.png)

After the connection is successful, as shown in the figure below:

![xgo app蓝牙连接界面](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-robot-kit/images/microbit-xgo-robot-kit-08-7.png)

After the Bluetooth connection is successful, you will automatically return to the main page, where an arrow prompt will appear, as shown in the following figure:

![xgo app蓝牙连接界面](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-robot-kit/images/microbit-xgo-robot-kit-08-4.png)

##  Control Mode

On the main interface of the XGO App, we can see that there are three ways to remotely control the XGO-lite V2, namely **MOTION**、**ARM**.

![xgo app蓝牙连接界面](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-robot-kit/images/microbit-xgo-robot-kit-08-8.png)

![xgo app蓝牙连接界面](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-robot-kit/images/microbit-xgo-robot-kit-08-9.png)

### micro:bit programming detection

(1) As shown in the figure below, connect XGO-lite V2 to the computer with a USB data cable, open the [MakeCode](https://makecode.microbit.org/#) platform, and click "New Project" to create a new project. document.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/robot/xgo-robot-kit-v2/images/microbit-xgo-lite2-examine-01.png)

(2) Add the 'XGO' library file as shown below.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/robot/xgo-robot-kit-v2/images/microbit-xgo-lite2-examine-02.png)

(3) Operate according to the programming case and download it to the micro:bit mainboard, and operate according to the program to see if XGO-lite V2 makes corresponding actions. If XGO-lite V2 makes a handshake action, it means that XGO-lite V2 is intact.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/robot/xgo-robot-kit-v2/images/microbit-xgo-lite2-examine-03.png)

## 5. Check the manual

Check the instructions to make sure you understand all the operating steps and safety precautions.

## 6. Contact us

If any problems are found during the unpacking self-inspection, please do not deal with them by yourself, but contact the after-sales service center for help in time.

**Please note that before using the product, you should read the product instruction manual carefully and follow all safety precautions and operating procedures. If you are not sure how to use the product, please consult us or professional advice. **
