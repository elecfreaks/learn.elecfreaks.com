---
sidebar_position: 2
sidebar_label: Case 02: Raspberry Pi Tutorial - SSH and VNC Remote Login
---

# Case 02: Raspberry Pi Tutorial - SSH and VNC Remote Login

## Introduction

This course aims to introduce students to SSH and VNC remote login operations.
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-read-01.png)**Note: After XGO Rider is turned on, it needs to move back and forth slightly to keep the body balanced. Please do not place XGO Rider on the edge of the table or in dangerous places to avoid damage. **

## Teaching Objectives

Understand the basic concepts and practical operations of SSH and VNC remote login.

## Teaching Preparation

Before starting teaching, please make sure you have prepared the following necessary materials:

| Picture | Name | Quantity | Name |
|---|---|---|---|
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/xgo-rider-cm4-kit-introdutin-01.png)| CM4 XGO Rider | 1 |   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-03.png) | PC | 1 | Prepare on your own |

## Course Introduction

Have you ever thought about how to easily control the Raspberry Pi without a keyboard, mouse, or monitor when you put it into a robot, an electronic photo frame on the wall, or even deploy it in a server room thousands of miles away?
——Remote control is your answer!

This course will teach you two "remote tools":

🔹 SSH: Use a line of command to connect directly to the Raspberry Pi terminal, manage code and install services efficiently like a hacker

🔹 VNC: Directly see the graphical desktop of the Raspberry Pi, and operate it with a click of the mouse, as if the screen is right in front of you

📢 Are you ready to get rid of the "wire system" for your Raspberry Pi?

Starting from the next minute, your computer will be the super remote control of the Raspberry Pi!

## Exploration Activities

How to use putty software to use the SSH service to remotely log in to the Raspberry Pi operating system.

Use VNC-Viewer software to remotely log in to the Raspberry Pi desktop.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-read-01.png)**Note: After XGO Rider is turned on, it needs to move back and forth slightly to keep the fuselage balanced. Please do not place XGO Rider on the edge of the table or in dangerous places to avoid damage. **

## Software

SSH remote login requires that the host computer and Raspberry Pi are in the same LAN to work properly. If the Raspberry Pi is connected to a network cable or WiFi signal, please confirm that the network signal connected to the computer is in the same LAN as the Raspberry Pi.

### 1. Get the IP address of the Raspberry Pi of XGO Rider

After turning on XGO Rider, enter the remote control mode interface to query the corresponding IP address. If there is no IP address, please reconnect to the network according to the network operation.

### 2. Putty remote login

Open the putty software and use the SSH service to remotely log in to the Raspberry Pi operating system. Official download link of putty software: https://www.putty.org/

Enter the username (pi) and password (pi). If you have changed the username and password, please enter them according to the actual situation.

### 3. VNC remote login

Open the VNC-Viewer software and use the VNC service to remotely log in to the Raspberry Pi desktop. Official download link of VNC-Viewer software: https://www.realvnc.com/en/connect/download/viewer/

Enter the VNC password (pi) and press OK to enter the desktop.
