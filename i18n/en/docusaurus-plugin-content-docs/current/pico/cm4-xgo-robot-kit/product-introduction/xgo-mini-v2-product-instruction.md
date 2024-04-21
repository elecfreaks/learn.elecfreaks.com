---
sidebar_position: 3
sidebar_label: CM4 XGO-mini robot kit V2
---

# CM4 XGO-mini Robot Kit V2

## Introduction

XGO-mini2 is a powerful desktop-grade Al robot dog with fifteen degrees of freedom and excellent performance. It is equipped with a robotic arm and end grippers on its back, and a built-in Raspberry Pi CM4 module to realize AI edge computing applications.

XGO-mini2 has omnidirectional mobility, six-dimensional attitude control and multiple motion gaits, which can flexibly respond to different scenarios and tasks. It is equipped with IMU, joint position sensors and current sensors, which can provide real-time feedback of its own attitude, joint angle and torque information, and provide support for internal algorithms and secondary development.

In terms of joints, XGO-mini2 uses a 4.5KG.CM all-metal magnetically encoded bus serial servo. This steering gear has a larger torque and keeps the attitude stable under the condition of more load. The speed of the steering gear is very fast, and at the same time, it has high precision. This high-precision control can ensure that the XGO-mini2 has a more stable and precise attitude during the movement.

In addition to the powerful performance of the steering gear, XGO-mini2 is also equipped with a powerful AI module. Supports H.265 and H.264 video decoding, enabling high-definition video playback and encoding. Excellent graphics processing capability enables XGO-mini2 to present exquisite image effects.

The memory capacity of XGO-mini2 is 4GB, which can support large-scale data processing and storage. It is also equipped with 4 programmable buttons, providing more interaction and control options. Micro HDMI video output interface and Type-C USB interface enable XGO-mini2 to connect with external devices and transfer data.

The power system of XGO-mini2 is also very reliable and safe. The charger has an over-current protection feature to prevent explosions caused by overcharging. The battery adopts 18650 standard 3500 mAh 3C discharge battery, which has high capacity and discharge capacity, and can support the long-term operation of the robot dog.

In addition, XGO-mini2 supports cross-platform graphical programming, Python programming and ROS programming, which can realize rich artificial intelligence applications, such as face detection, object classification and speech recognition. Whether it is in the field of home entertainment, education or research, XGO-mini2 can show excellent performance and application potential.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/pico/cm4-xgo-robot-kit/images/cm4-xgo-mini-index.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/pico/cm4-xgo-robot-kit/images/cm4-xgo-products-01.gif)

## Functional description

1. It can realize AI edge computing graphical programming, such as face detection, object classification, speech recognition and other common programs.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/pico/cm4-xgo-robot-kit/images/cm4-xgo-products-06.png)


2. It can realize omnidirectional movement, six-dimensional attitude control, multiple sports gaits and superposition of sports, and a built-in gyroscope to maintain body self-balance.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/pico/cm4-xgo-robot-kit/images/cm4-xgo-products-05.gif)



3. The product supports cross-platform graphics and Python programming cloud platform, and there are related supporting courses.


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/pico/cm4-xgo-robot-kit/images/cm4-xgo-products-04.gif)


4. The servo servo has a joint angle readback function, allowing it to remember the joint position of each action and execute the action group you designed, which can be used for teaching programming.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/pico/cm4-xgo-robot-kit/images/cm4-xgo-products-02.gif)

## Product Features

- IMU posture self-stabilization--The posture data obtained through the IMU adopts a closed-loop control method, and the robot dog remains stable no matter how the plane shakes.

- Six-degree-of-freedom attitude control of the whole machine--under the condition of not moving the toes, it can realize the motion control of six degrees of freedom of the body.

- IMU posture suppleness--Through the posture data obtained by the IMU, the closed-loop control realizes that the robot dog can actually adapt to the external force, adjust to the target posture of the hand, and realize the teaching function.

- User communication and secondary programming interface - open the underlying serial port protocol for secondary development and verification.

- Motion gait planning--low, medium, and high three postures of the robot dog match three speeds, using different gait strategies and planning algorithms.

- Kinematics and dynamics simulation interface--Under the ros environment, perform kinematics and dynamics simulation on the Rviz and gazebo platforms.

- Omni-directional motion control--With 15 active joints, the robot dog can move forward, translate, and rotate in all directions through kinematic decoupling, and supports motion superposition in multiple directions.

- Artificial intelligence - AI functions such as machine vision, face recognition, speech recognition, model training, etc.

## Mechanical Structure

The main structure of XGO-mini2 is composed of aluminum alloy structural parts, lower legs, and bus servos. The AI module and driver board on the head are connected by 4pin signal lines, and 2 built-in 18650 lithium batteries.

- The robot dog front cover, rear cover, and the bottom cover are used as the robot dog rack for connecting various components. The front and rear legs are respectively fixed to the front and rear sides of the robot dog bottom cover by four screws; the core driver board is fixed to the middle of the robot dog bottom cover by four screws.

- Each leg is equipped with three servos as elbow, shoulder and hip joints. Mechanically, the three joint servos are fixedly connected with aluminum alloy structural parts. Electrically, the elbow servo and the shoulder servo, the shoulder servo and the hip servo, and the hip servo and the core drive board are each connected by a servo wire, so that the core drive board can drive and control all joint steering gear.

- The AI module is fixed on the front cover of the robot dog, and is connected to the core driver board through the serial port connection line of the AI module.

- The switch is fixed on the back cover of the robot dog through nuts, and is connected with the core driver board. The switch is a self-locking type, that is, it does not rebound after being pressed and the robot dog is in a continuous power-on state; when it is pressed again, the robot dog is powered off and turns off after 3~4 seconds.

- The 18650 2S battery is glued to the driver board by Velcro, and the charging hole is fixed on the bottom board.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/pico/cm4-xgo-robot-kit/images/cm4-xgo-overview-03.png)



## XGO-CM4 Module

The AI module adopts the Raspberry Pi CM4 technology solution, equipped with a 2.0-inch IPS color display screen and 4 programmable buttons, a 5-megapixel camera, a digital microphone and a cavity speaker. It is an AI terminal with human-computer interaction capabilities. It can realize image recognition, face detection, speech recognition and other functions to help students learn AI knowledge.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/pico/cm4-xgo-robot-kit/images/cm4-xgo-index-03.png)

## XGO-mini2 driver board

Choose the ESP32-WROVER module, ESP32-WROVER series module is based on ESP32-D0WD dual-core chip design, and has enough interfaces to communicate with peripherals, use the serial port to communicate with serial port steering gear, IIC interface to read gyroscope MPU6050 data, the system uses Powered by two 18650 lithium batteries.

Choose the ESP32-WROVER module, ESP32-WROVER module is a high-performance, low-power Wi-Fi + Bluetooth/Bluetooth LE dual-module component, based on ESP32 series chips from Espressif Systems. In the driver board of XGO-mini2, it plays a very critical role. The following is a detailed introduction to the ESP32-WROVER module.

Main features:

- Integrated dual-core processor: ESP32-WROVER module integrates a high-performance dual-core Tensilica LX6 microprocessor with a working frequency of up to 240 MHz, which provides powerful computing capabilities for XGO-mini2 and satisfies real-time kinematics inverse calculation computing power requirements.
- Wireless communication: Support 2.4 GHz Wi-Fi and Bluetooth (including classic Bluetooth and Bluetooth low energy BLE) dual-mode communication, making the robot dog easy to realize remote control and data transmission.
- Large-capacity memory: up to 4MB SPI Flash and 8MB PSRAM, providing sufficient memory space for complex digital processing tasks.
- Low power consumption mode: Support multiple low power consumption modes, which is beneficial to prolong the service life of the robot dog and reduce energy consumption.
- Powerful I/O interface: Contains up to 34 programmable GPIO pins to support various sensors, actuators and communication interfaces for easy function expansion.
- Security: The built-in hardware encryption engine supports AES, SHA-2, RSA, Elliptic Curve Cryptography (ECC) and other encryption algorithms to ensure data security.

Thanks to the high performance, low power consumption and rich features of the ESP32-WROVER module, it is widely used in various Internet of Things (IoT) projects, such as smart home, wearable devices, wireless sensor networks, remote control, etc. field. In XGO-mini2, the ESP32-WROVER module realizes the core control, data processing and communication functions of the device, creating an intelligent, flexible and expandable robot dog product for users.

## XGO-mini2 Joint

The modular servo joint of XGO-mini is composed of a DC hollow cup motor, a metal reduction gear set, a 12-bit magnetic encoder and an integrated control circuit. It has its own closed-loop control and planning algorithm, high-speed bus communication, 360-degree angle control, and supports speed, position, current, temperature feedback and control parameter adjustment functions providing high-performance. The customized joints provides PID parameter adjustment, optimizes the joint impedance characteristics (compliance), and based on the basic kinematic gait planning, combined with the consideration of the center of gravity and the feedback of the IMU, as well as the requirements of the upper-level control commands, real-time adjustments can be performed. At the same time, a large speed ratio and high-efficiency reducer is used, which ensures lexibility and improves on the load-to-weight ratio.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/pico/cm4-xgo-robot-kit/images/cm4-xgo-overview-06.png)
