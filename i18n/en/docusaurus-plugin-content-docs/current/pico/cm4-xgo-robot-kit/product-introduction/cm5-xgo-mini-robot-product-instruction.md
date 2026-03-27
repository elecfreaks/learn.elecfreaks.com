---
sidebar_position: 3
sidebar_label: CM5 XGO mini Robot Kit
---

# CM5 XGO mini Robot Kit

## Introduction

The XGO-mini robot is a powerful desktop AI quadruped robot with 15 degrees of freedom and outstanding performance. It is equipped with a robotic arm and an end effector on its back. The built-in Raspberry Pi CM5 module enables AI edge computing applications.

Supporting omnidirectional movement, six-dimensional attitude control and multiple motion gaits, the XGO-mini robot adapts flexibly to various scenarios and tasks. It integrates an IMU, joint position sensors and current sensors to feedback real-time attitude, joint angle and torque data, supporting internal algorithms and secondary development.

For joints, the XGO-mini robot adopts 4.5KG.CM full-metal magnetic encoding bus serial servos. These servos provide higher torque and maintain stable posture under heavy loads. With fast response speed and high precision control, they ensure stable and accurate movement of the robot.

Beyond high-performance servos, the XGO-mini robot integrates an advanced AI module supporting H.265 and H.264 video decoding for high-definition video playback and encoding. Its powerful graphics processing delivers excellent visual effects.

Equipped with 4GB memory, it supports large-scale data processing and storage. Four programmable buttons enrich interaction methods. The Micro HDMI video output and Type‑C USB ports facilitate connection and data transmission with external devices.

The power system is reliable and safe. The charger features over-current protection to prevent safety hazards caused by overcharging. The robot uses standard 18650 3500mAh 3C discharge batteries with large capacity and high discharge performance for long operating hours.

Furthermore, the XGO-mini supports cross-platform graphical programming, Python programming and ROS programming to implement rich AI functions such as face detection, object classification and voice recognition. It shows excellent performance and application potential for home entertainment, education and research scenarios.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-robot-kit/images/cm4-xgo-mini-index.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-robot-kit/images/cm4-xgo-products-01.gif)

## Function Description

1. Supports AI edge computing graphical programming including face detection, object classification, voice recognition and other common applications.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-robot-kit/images/cm4-xgo-products-06.png)

2. Realizes omnidirectional movement, six-dimensional attitude control, multiple motion gaits and motion superposition. Built-in gyroscope enables automatic body balance maintenance.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-robot-kit/images/cm4-xgo-products-05.gif)

3. Matched with a cross-platform graphical & Python programming cloud platform and supporting teaching courses.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-robot-kit/images/cm4-xgo-products-04.gif)

4. Servo supports joint angle feedback to record joint positions and execute custom action groups for teaching programming.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-robot-kit/images/cm4-xgo-products-02.gif)

## Product Features

- IMU Attitude Stabilization: Closed-loop control based on IMU attitude data keeps the robot stable even on shaking surfaces.
- Full-body 6-DOF Attitude Control: Realizes six-dimensional body movement while keeping foot positions fixed.
- IMU Compliance Control: Closed-loop control adapts to external force and follows manual posture adjustment for teaching functions.
- Open Communication & Secondary Development Interface: Underlying serial protocol open for custom development and verification.
- Motion Gait Planning: Three height postures matching three speed levels with independent gait strategies and algorithms.
- Kinematics & Dynamics Simulation Interface: Supports simulation on RViz and Gazebo within the ROS environment.
- Omnidirectional Motion Control: 15 active joints realize decoupled forward, lateral and rotational movement with multi-direction superposition.
- Artificial Intelligence: Supports machine vision, face recognition, voice recognition, model training and other AI functions.

## Mechanical Structure

The main structure of XGO-mini V2 consists of 1.5mm aluminum alloy frames, legs and bus servos. The head AI module and main control driver board are connected via 4-pin signal cables. Two built-in 18650 lithium batteries provide power supply.

- The front cover, rear cover and bottom cover form the main frame to assemble all components. Front and rear legs are fixed to the bottom cover with screws. The main driver board is mounted in the center of the bottom cover.
- Each leg contains three servos for hip, shoulder and elbow joints. Joints are fixed with aluminum alloy structures. Servos are daisy-chained by servo cables and controlled by the main driver board.
- The AI module is fixed on the front cover and connected to the main driver board via serial cable.
- The latching power switch is installed on the rear cover. Press once to power on continuously; press again to power off, and the robot will lie down after 3~4 seconds.
- The 18650 2S battery is fixed on the driver board with hook-and-loop fastener, and the charging port is fixed on the base plate.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-robot-kit/images/cm4-xgo-overview-03.png)

## XGO-CM5 Module

This AI module adopts the Raspberry Pi CM5 solution. It is equipped with a 2.0‑inch IPS color display, four programmable buttons, a 5MP camera, a digital microphone and a cavity speaker. As an interactive AI terminal, it supports image recognition, face detection, voice recognition and helps students learn AI knowledge.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-robot-kit/images/cm4-xgo-index-03.png)

## XGO-mini Driver Board

The driver board adopts the ESP32-WROVER module based on the dual-core ESP32-D0WD chip. It communicates with serial servos via UART and reads MPU6050 gyroscope data through the IIC interface. The system is powered by two 18650 lithium batteries.

The ESP32-WROVER is a high-performance, low-power Wi-Fi & Bluetooth/BLE dual-module component widely used in IoT applications.

Main Features:

- Dual-core Processor: Integrated high-performance Tensilica LX6 dual-core MCU running up to 240 MHz, providing sufficient computing power for real-time inverse kinematics calculation.
- Wireless Communication: Supports 2.4GHz Wi-Fi and dual-mode Bluetooth for remote control and data transmission.
- Large Memory: Up to 4MB SPI Flash and 8MB PSRAM for complex data processing tasks.
- Low Power Modes: Multiple power-saving modes extend battery life and reduce energy consumption.
- Rich I/O Interfaces: 34 programmable GPIO pins support various sensors, actuators and extended peripherals.
- Hardware Security: Built-in encryption engine supports AES, SHA-2, RSA and ECC encryption algorithms to ensure data safety.

Thanks to its high performance, low power consumption and rich peripherals, the ESP32-WROVER realizes core control, data processing and communication functions for the XGO-mini robot.

## XGO-mini Joint Servos

The robot adopts 6V 4.5KG.CM metal shell steel gear 360° magnetic encoding dual-axis TTL serial servos.

Each servo consists of a coreless DC motor, reduction gear set, 12-bit magnetic encoder and integrated control circuit. It supports closed-loop control, planning algorithms and high-speed bus communication with full 360° angle control. It provides feedback and adjustable parameters for speed, position, current and temperature to deliver high-performance servo drive. Custom PID tuning optimizes joint compliance. Combined with gait planning, center-of-gravity calculation and IMU feedback, joints adjust posture in real time according to upper control commands. High reduction ratio and high-efficiency reducers improve load-to-weight ratio while maintaining compliance performance.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-robot-kit/images/cm4-xgo-overview-06.png)
