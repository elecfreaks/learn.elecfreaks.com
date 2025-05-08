---
sidebar_position: 2
sidebar_label: Software Library Documentation
---

# Software Library Documentation

## XGO Serial Communication Protocol

### Document Purpose and Target

This document applies to the communication protocol for command/data interaction between any host computer and the XGO series machine driver board. It is intended for advanced developers to perform secondary development on XGO.

### Software interface

Uses standard TTL serial communication.

| Baud rate  | 115200 |
| ---------- | ------ |
| Data bits  | 8      |
| Stop bits  | 1      |
| Parity bit | No     |

**Data frame format**

The data frame uses a fixed format: frame header + frame length + data + checksum + frame tail.

| Frame Header | Fixed to 0x55 0x00                                           |
| ------------ | ------------------------------------------------------------ |
| Frame length | The number of bytes in the entire data frame                 |
| Data         | It has different meanings depending on the instruction type, see the second part |
| Checksum     | Add all bytes of the length and data, take the lowest byte, and then invert it |
| Frame end    | Fixed to 0x00 0xAA                                           |

### Instructions

It is recommended that the interval between each instruction of the host computer is at least 1ms to prevent the robot dog from losing packets due to sending instructions too quickly.

You can refer to the send and read codes in the python library.

#### Write command, no response (0x00)

| **Frame header** | **Frame Length** | **Command type** | **First address** | **Data** | **Checksum** | **Frame end** |
| ---------------- | ---------------- | ---------------- | ----------------- | -------- | ------------ | ------------- |
| 0x55 0x00        |                  | 0x00             |                   | data     |              | 0x00 0xAA     |

The write command will modify the data starting from the first address and will not generate a response.

\>For example, to modify the forward speed of the robot dog, the forward speed address is 0x30, and it moves at the maximum speed, that is, the speed content is 0xFF. The specific instructions are as follows:
\>0x55 0x00 0x09 0x00 **0x30** **0xFF** 0xC7 0x00 0xAA
\>The checksum calculation process is as follows:
\>0x09+0x00+0x30+0xFF=0x138, take the lowest byte 0x38, and invert it to get 0xC7

#### Read command, response (0x02)

| **Frame header** | **Frame Length** | **Command type** | **First address** | **Read Length** | **Checksum** | **Frame end** |
| ---------------- | ---------------- | ---------------- | ----------------- | --------------- | ------------ | ------------- |
| 0x55 0x00        |                  | 0x02             |                   | uint_8          |              | 0x00 0xAA     |

The write command will continuously read data starting from the first address and will not generate a response.
The format of the returned data packet is:

| **Frame header** | **Frame Length** | **Command type** | **First address** | **Data** | **Checksum** | **Frame end** |
| ---------------- | ---------------- | ---------------- | ----------------- | -------- | ------------ | ------------- |
| 0x55 0x00        |                  | 0x12             |                   | data     |              | 0x00 0xAA     |

\>For example, to read the angles of 12 servos, 0x50 is the address of the first servo position, and 0x0C means to read 12 servos in succession. The specific instructions are as follows:
\>0x55 0x00 0x09 0x02 0x50 0x0C 0x98 0x00 0xAA
\>The checksum calculation process is as follows:
\>0x09+0x02+0x50+0x0C=0x67, inverted to get 0x98
\>Read the return data packet:
\>0x55 0x00 0x14 0x12 0x50 0x80 0x80 0x80 0x80 0x80 0x80 0x80 0x80 0x80 0x80 0x80 0x89 0x00 0xAA

### Double wheel foot memory table 2024-11

| Address                  | Function                                                  | Read  | Initial Value | Note                                                         |
| ------------------------ | --------------------------------------------------------- | ----- | ------------- | ------------------------------------------------------------ |
| 0x01                     | Battery level                                             | read  | 0xff          | The range is 0-100, linearly corresponding to the minimum value - maximum value of power |
| 0x02                     | Working status                                            | read  | 0x01          | 0x00 Falling state                                           |
| 0x03                     | Performance Mode                                          | write | 0x00          | 0x00 Normal control mode                                     |
| 0x04                     | Calibration mode                                          | write | 0x00          | 0x01 Enter calibration mode 0x00 Exit calibration mode Complete calibration |
| 0x05 Update the firmware | Update the firmware                                       | write | 0x00          | 0x01 Enter update mode, the lower computer will send a command with the content of 0x55 as a reply, and the upper computer will start transmitting hex after a delay of 1s |
| 0x06                     | Setting the origin                                        | write | 0x00          | 0x01 setting, set the current direction to 0 degrees, and reset the odometer to zero |
| 0x07                     | Firmware version                                          | read  |               | Returns a 10-byte string, for example "R-1.2.3" L stands for lite, M stands for mini, and R stands for rider |
| 0x08                     | Automatic data feedback                                   | write | 0x00          | Send data packets of power, joint angle, IMU6-axis data and odometer to the serial port at a frequency of 50Hz |
| 0x0A                     | Static steering ring switch                               | write | 0x01          | 0x00 Off \|0x01 On By default, the orientation is kept. After turning it manually, it will return to the original orientation. |
| 0x13                     | Bluetooth Name                                            | write |               | The name length is 20 bytes and can only be a combination of English and numbers. The Bluetooth name after naming is XGORider_xxxx |
| 0x30                     | Moving speed                                              | write | 0x80          | The range is 0x00- 0xff, linearly corresponding to the reverse maximum value - the forward maximum value |
| 0x32                     | Clockwise and counterclockwise rotation speed             | write | 0x80          | Face the z-axis and point clockwise to the direction of the maximum value |
| 0x35                     | Body height                                               | write | 0x80          |                                                              |
| 0x39                     | Rotate the body around the x-axis at a certain period     | write | 0x00          | 0x00 stops, 0x01- 0xff linearly corresponds to the minimum-maximum rotation speed. This function cannot work at the same time as directly setting roll. |
| 0x3E                     | Action Instructions                                       | write | 0x00          | For details, see the action instruction table. 255 is to restore the default posture. 1-N is each action. |
| 0x82                     | Translational motion along the Z axis at a certain period | write | 0x00          | 0x00 Stop， 0x01- 0xff Corresponding to the minimum-maximum rotation speed, the movement amplitude is half of the position limit |
| 0x61                     | ROLL balance mode                                         | write | 0x00          | 0x00 Off  0x01Self-stabilizing mode                          |
| 0x62                     | ROLL angle                                                | read  |               | float                                                        |
| 0x63                     | PITCH angle                                               | read  |               | float                                                        |
| 0x64                     | YAW angle                                                 | read  |               | float                                                        |
| 0x65                     | IMU 6-axis data                                           | read  |               | float*6 A total of 24 bytes                                  |
| 0x66                     | ROLL angel                                                | read  |               | int16                                                        |
| 0x67                     | PITCH angel                                               | read  |               | int16                                                        |
| 0x68                     | YAW angel                                                 | read  |               | int16                                                        |
| 0x69                     | Color of LED No. 1                                        | write |               | Three bytes, the value range is 0-255, [0,0,0] represents off, [255,255,255] represents the brightest white light |
| 0x6A                     | Color of LED No. 2                                        | write |               | Same as above                                                |
| 0x6B                     | Color of LED No. 3                                        | write |               | Same as above                                                |
| 0x6C                     | Color of LED No. 4                                        | write |               | Same as above                                                |

| Action ID (decimal) | Action content               |
| ------------------- | ---------------------------- |
| 1                   | Swinging                     |
| 2                   | Ups and downs                |
| 3                   | Forward and Backward         |
| 4                   | Four-sided serpentine motion |
| 5                   | Lift and rotate              |
| 6                   | Circular shake               |
