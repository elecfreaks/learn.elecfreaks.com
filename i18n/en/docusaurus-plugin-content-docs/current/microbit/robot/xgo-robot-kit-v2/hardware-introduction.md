---
sidebar_position: 5
sidebar_label: Hardware Introduction
---

# Hardware Introduction

## XGO-Lite V2 Main Structure

The main structure of XGO-lite V2 is composed of aluminum alloy structural parts, lower legs, and bus servos. The XGO Adapter expansion board on the head is connected by 4-pin signal lines and has two built-in 18650 lithium batteries.

- The robot dog front cover, the robot dog rear cover, and the robot dog bottom cover are used as the robot dog rack for connecting various components. The front and rear legs are respectively fixed on the front and rear sides of the bottom cover of the robot dog by screws; the core drive board is fixed on the inner bottom cover of the robot dog body.

- Each leg is equipped with three servos as elbow, shoulder, and hip joints. Mechanically, the three joint servos are fixedly connected with aluminum alloy structural parts. Electrically, the elbow servo and the shoulder servo, the shoulder servo and the hip servo, and the hip servo and the core drive board are each connected by a servo wire, so that the core drive board can drive and control all joint steering gear.

- The XGO Adapter expansion board is fixed on the front cover of the robot dog, and is connected to the core driver board through a 4-pin signal serial cable.

- The switch is fixed on the back cover of the robot dog through nuts and is connected to the core driver board. The switch is a self-locking type, that is, it does not rebound after being pressed and the robot dog is in a continuous power-on state; when it is pressed again, the robot dog is powered off and turns off after 3~4 seconds.

- The 18650 2S battery is glued to the driver board by Velcro, and the charging hole is fixed on the bottom board.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/robot/xgo-robot-kit-v2/images/microbit-xgo-lite-v2-hardward-01.png)

## Micro:bit Board

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/robot/xgo-robot-kit-v2/images/microbit-xgo-lite2-hardware-02.png)

Micro:bit XGO Robot Kit V2 controls the movement of XGO-lite V2 by writing a program for micro:bit V2 and sending instructions to the driver board of the lower computer.

The micro:bit is a microcomputer designed by the BBC (British Broadcasting Corporation) in the United Kingdom to help students learn programming and electronics. It has a 32-bit ARM Cortex-M0 processor and 5x5 LED matrix, and some other sensors and interfaces, such as accelerometer, magnetometer, Bluetooth and USB connector. Controlled by micro:bit programming, XGO-lite V2 becomes a very interactive and learning tool.

For the learning and use of micro:bit, you can refer to its official website tutorial, official website link: [Micro:bit](https://microbit.org/).

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/robot/xgo-robot-kit-v2/images/microbit-xgo-lite-v2-hardward-02.png)

## XGO Adapter Expansion Board

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/robot/xgo-robot-kit-v2/images/microbit-xgo-lite2-hardware-03.png)

XGO Adapter is an expansion board that can be used with micro:bit to provide users with more interfaces and functions. The expansion board includes a micro:bit slot, a 4pin signal cable connection port, a speaker connection port, GPIO and IIC interfaces, and is fixed to the XGO-lite2 front cover with screws, providing users with a more convenient and stable fixing method.

First, let's understand the functions and components of the XGO Adapter. It provides users with the following features:

1. Provide more interfaces: XGO Adapter includes 4 pin signal cable connection ports, speaker connection ports, GPIO and IIC interfaces, etc., which can provide users with more interfaces and expansion methods.
2. Enhanced system functions: Through the XGO Adapter, users can expand the functions of the micro:bit, such as adding modules such as Bluetooth and sensors, to further enhance the functions of the system.
3. Improved stability: The XGO Adapter is fixed to the XGO-lite V2 front cover with screws, which can improve the stability and reliability of the expansion board.

The components of the XGO Adapter include:

1. micro:bit slot: The slot of the XGO Adapter is compatible with the micro:bit, and can be directly inserted into the micro:bit motherboard to achieve extended functions.
2. 4pin signal cable connection port: This interface is used to connect the 4pin signal cable of XGO-lite V2, which can not only supply power to the micro:bit motherboard, but also allow the command transmission between micro:bit and XGO-lite V2.
3. Speaker connection port: This port can be used to connect a speaker to realize the sound output function.
4. GPIO and IIC interface: These interfaces can be used to connect various modules, such as Octopus series sensors, planetary series sensors, etc., to achieve more functional expansion.

Through the XGO Adapter expansion board, users can further expand the functions of the micro:bit motherboard and realize more flexible hardware design. For example, users can realize environmental monitoring by connecting sensors, robot control by connecting drivers, and sound output by connecting speakers. At the same time, the screw fixing design of the XGO Adapter can improve the stability of the expansion board.

In a word, XGO Adapter is a powerful expansion board, which can provide users with more interfaces and functions, and further expand the application range of micro:bit motherboards. Through XGO Adapter, users can realize more flexible and innovative hardware design, providing more possibilities for education, makers and other fields.

## XGO-Lite V2 Driver Board

Choose the ESP32-WROVER module, ESP32-WROVER series module is based on ESP32-D0WD dual-core chip design, and has enough interfaces to communicate with peripherals, use serial port to communicate with serial port steering gear, IIC interface to read gyroscope MPU6050 data, the system uses Powered by two 18650 lithium batteries

Choose the ESP32-WROVER module, ESP32-WROVER module is a high-performance, low-power Wi-Fi + Bluetooth/Bluetooth LE dual-module component, based on ESP32 series chips from Espressif Systems. In the driver board of XGO-lite V2, it plays a very critical role. The following is a detailed introduction to the ESP32-WROVER module.

Main Features:

- Integrated dual-core processor: The ESP32-WROVER module integrates a high-performance dual-core Tensilica LX6 microprocessor with a working frequency of up to 240 MHz, which provides powerful computing capabilities for XGO-lite V2 and meets the requirements of real-time kinematics inverse calculation. Computing power requirements.
- Wireless communication: Support 2.4 GHz Wi-Fi and Bluetooth (including classic Bluetooth and Bluetooth low energy BLE) dual-mode communication, so that the robot dog can easily realize remote control and data transmission.
- Large-capacity memory: up to 4MB SPI Flash and 8MB PSRAM, providing sufficient memory space for complex digital processing tasks.
- Low power consumption mode: Support multiple low power consumption modes, which is beneficial to prolong the service life of the robot dog and reduce energy consumption.
- Powerful I/O interface: Contains up to 34 programmable GPIO pins to support various sensors, actuators, and communication interfaces for easy function expansion.
- Security: The built-in hardware encryption engine supports AES, SHA-2, RSA, Elliptic Curve Cryptography (ECC) and other encryption algorithms to ensure data security.

Thanks to the high performance, low power consumption and rich features of the ESP32-WROVER module, it is widely used in various Internet of Things (IoT) projects, such as smart home, wearable devices, wireless sensor networks, remote control, etc. field. In XGO-lite V2, the ESP32-WROVER module realizes the core control, data processing and communication functions of the device, creating an intelligent, flexible and expandable robot dog product for users.

## XGO-Lite V2 Joint

The XGO-lite2 robot dog uses a high-quality 6V 2.3KG plastic shell metal tooth 300-degree dual-axis TTL serial servo as one of its key components. The steering gear adopts plastic shell, metal gear box, iron core motor, TTL control board and high-quality potentiometer, and the output head adopts 25T type. It has a stall torque of 2.3kg.cm, an effective control angle of 300 degrees, and can switch between servo mode and continuous motor operation mode. In addition, the steering gear can also feedback position, speed, voltage, temperature and load parameters, so as to realize overload protection.

By adopting this servo, the motion control of the XGO-lite2 robot dog is more precise and stable. The metal gear box and iron core motor of the steering gear ensure its high torque and high precision, and the effective control angle of 300 degrees also makes the movement of the robot dog more flexible. At the same time, the steering gear also has servo mode and continuous rotation motor working mode, as well as the function of feedback position, speed, voltage, temperature and load parameters, so as to realize overload protection and ensure the stability and safety of the robot dog.

In short, the 6V 2.3KG. plastic shell metal teeth 300-degree dual-axis TTL serial servo is a high-quality, high-performance servo, which is suitable for motion control of various robots and smart devices. In the XGO-lite2 robot dog, it provides strong support for the motion control of XGO-lite V2, improving the performance and application value of XGO-lite V2.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/robot/xgo-robot-kit-v2/images/microbit-xgo-lite2-introduce-07.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/robot/xgo-robot-kit-v2/images/microbit-xgo-lite2-introduce-08.png)
