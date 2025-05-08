---
sidebar_position: 3
sidebar_label: Case 03:Raspberry Pi Tutorial - Remote File Transfer
---

# Case 03: Raspberry Pi Tutorial - Remote File Transfer

## Introduction

This course aims to introduce students to the operation of remote file transfer.
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-read-01.png)**Note: After XGO Rider is turned on, it needs to move back and forth slightly to keep the fuselage balanced. Please do not place XGO Rider on the edge of the table or in dangerous places to avoid damage. **

## Teaching Objectives

Understand the basic concepts and practical operations of WinSCP installation and remote file transfer.

## Teaching Preparation

Before starting teaching, please make sure you have prepared the following necessary materials:

| Picture | Name | Quantity | Note |
|---|---|---|---|
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/xgo-rider-cm4-kit-introdutin-01.png)| CM4 XGO Rider | 1 |   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-03.png) | PC | 1 | Prepare on your own |

## Course Introduction

When you need to transfer files between a computer (such as Windows, macOS, or Linux) and a single-board computer such as Raspberry Pi, considering that the two may run different operating systems and file systems, the SSH (Secure Shell) protocol provides a secure and reliable method for cross-platform file transfer.

Next, let's start our learning journey.

## Exploration Activities

How to use WinSCP software to transfer files remotely.

## Software

WinSCP is a powerful file transfer software that supports multiple protocols, including SSH, SFTP, FTP, WebDAV, etc. WinSCP can run on operating systems such as Windows, macOS, and Linux.

WinSCP official website download link: [https://winscp.net/eng/download.php](https://winscp.net/eng/download.php)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-read-01.png)**Note: After XGO Rider is turned on, it needs to be moved back and forth slightly to keep the body balanced. Please do not place XGO Rider on the edge of the table or in dangerous places to avoid damage. **

### 1. Get the IP address of XGO Rider Raspberry Pi

After turning on XGO Rider, enter the remote control mode interface to query the corresponding IP address. If there is no IP address, please reconnect to the network according to the network operation.

### 2. Install WinSCP software

Official download link of WinSCP software: https://winscp.net/eng/download.php

After downloading, double-click the installation package and follow the prompts to complete the installation.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/cm4-xgo-rider-kit-case04-01.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/cm4-xgo-rider-kit-case04-02.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/cm4-xgo-rider-kit-case04-03.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/cm4-xgo-rider-kit-case04-04.png)

### 3. WinSCP remote file transfer

Double-click the WinSCP icon on the desktop to open the WinSCP software. The following login interface appears after opening the WinSCP software.

File protocol: select SFTP for the file protocol, Host name: Raspberry Pi IP address, Port number: 22 is the default, User name: Raspberry Pi user name (pi), Password: login password (pi).

After entering the correct information, you can click Save to save the filled information so that you don’t have to re-enter it the next time you log in.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/cm4-xgo-rider-kit-case04-05.png)

Click Login and the following interface will be displayed after successful login. The folder on the left is the folder of the win computer, and the folder on the right is the folder of the Raspberry Pi.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/cm4-xgo-rider-kit-case04-06.png)

There are three ways to transfer files. The first is to directly drag the file from the left to the right, or from the right to the left, and the system will automatically copy a copy of the file and transfer it.

The second is to select the file with the mouse and press the F5 key, and the selected file will be copied to the other side.

The third is to select the file and click the right button of the mouse. If it is transferred from a Windows computer to a Raspberry Pi, click upload.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/cm4-xgo-rider-kit-case04-07.png)

A prompt will pop up. You can choose not to be prompted again and click OK, and the file will be automatically transferred.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/cm4-xgo-rider-kit-case04-08.png)

If you want to transfer files from the Raspberry Pi to a Windows computer, right-click the file and select Download.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-rider-kit/images/cm4-xgo-rider-kit-case04-09.png)

Note: File transfer requires that the computer and Raspberry Pi are in the same LAN and the SSH service is enabled on the Raspberry Pi. If file transfer fails, it is usually because the Raspberry Pi does not have sufficient permissions. Please operate within the permissions of the user pi directory.
