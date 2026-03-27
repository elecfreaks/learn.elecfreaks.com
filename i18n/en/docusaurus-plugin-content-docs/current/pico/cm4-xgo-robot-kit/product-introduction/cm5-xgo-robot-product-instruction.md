---
sidebar_position: 2
sidebar_label: CM5 XGO Robot Kit
---

# CM5 XGO Robot Kit

## Introduction
The XGO-lite robot is a desktop AI quadruped robot with 15 degrees of freedom. It is equipped with a robotic arm and an end gripper on its back. The built-in Raspberry Pi CM5 module supports AI edge computing applications. It adopts 2.3KG.CM bus serial servos as joints.

It realizes omnidirectional movement, six-dimensional attitude control, posture stabilization, multiple motion gaits and gripping tasks. An internal IMU, joint position sensors and current sensors feedback real-time posture, joint angle and torque data for internal algorithms and secondary development. It supports Blockly graphical programming, Python programming and ROS programming.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-robot-kit/images/cm4-xgo-index.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-robot-kit/images/cm4-xgo-products-01.gif)

## Function Description
1. Supports graphical programming for AI edge computing, including common applications such as face detection, object classification and voice recognition.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-robot-kit/images/cm4-xgo-products-06.png)

2. Realizes omnidirectional movement, six-dimensional attitude control, multiple motion gaits and motion superposition. The built-in gyroscope maintains automatic body balance.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-robot-kit/images/cm4-xgo-products-05.gif)

3. The product is matched with a cross‑platform graphical & Python programming cloud platform and supporting courses.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-robot-kit/images/cm4-xgo-products-04.gif)

4. Servos support joint angle feedback to record positions and execute custom action groups for teaching programming.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-robot-kit/images/cm4-xgo-products-02.gif)

## Product Features
- IMU Attitude Stabilization: Closed-loop control based on IMU data keeps the robot stable even on shaking surfaces.
- Full-body 6-DOF Attitude Control: Achieves six-dimensional body movement while keeping the toes fixed in place.
- IMU Compliance Control: Closed-loop control enables the robot to adapt to external force and follow manual posture adjustment for teaching functions.
- Open Communication & Development Interface: The underlying serial protocol is open for secondary development and verification.
- Motion Gait Planning: Three height postures correspond to three speed levels with independent gait strategies and algorithms.
- Kinematics & Dynamics Simulation: Supports simulation on RViz and Gazebo within the ROS environment.
- Omnidirectional Motion Control: With 15 active joints, kinematic decoupling enables forward, lateral and rotational movement with multi-direction superposition.
- Artificial Intelligence: Supports machine vision, face recognition, voice recognition, model training and other AI functions.

## Mechanical Structure
The main structure of XGO-lite V2 consists of aluminum alloy frames, legs and bus servos. The AI module on the head connects to the driver board via a 4-pin signal cable. It has two built-in 18650 lithium batteries.

- The front cover, rear cover and bottom cover form the main frame for assembling all components. Front and rear legs are fixed to the bottom cover with screws; the main driver board is mounted in the center of the bottom cover.
- Each leg is equipped with three servos for elbow, shoulder and hip joints. Mechanically, joints are fixed by aluminum alloy structural parts. Electrically, servos are connected in series by servo cables so that the main driver board can control all joints.
- The AI module is fixed on the front cover and connected to the main driver board via serial cable.
- The latching power switch is installed on the rear cover and connected to the driver board. Press once to power on continuously; press again to power off, and the robot will lie down automatically after 3–4 seconds.
- The 18650 2S battery is fixed on the driver board with hook-and-loop fastener; the charging port is fixed on the base plate.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-robot-kit/images/cm4-xgo-products-02.png)

## XGO-CM5 Module
This AI module adopts the Raspberry Pi CM5 solution. It is equipped with a 2.0‑inch IPS color display, four programmable buttons, a 5MP camera, a digital microphone and a cavity speaker. As an interactive AI terminal, it supports image recognition, face detection and voice recognition to help students learn AI knowledge.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-robot-kit/images/cm4-xgo-index-03.png)

## XGO-Lite V2 Driver Board
The driver board adopts the ESP32-WROVER module based on the dual-core ESP32-D0WD chip. It communicates with serial servos via UART and reads MPU6050 gyroscope data through the IIC interface. The system is powered by two 18650 lithium batteries.

The ESP32-WROVER is a high-performance, low-power Wi-Fi & Bluetooth/BLE dual-module developed by Espressif Systems, which plays a core role in the XGO-lite V2 driver board.

Main Features:
- Dual-core Processor: Integrated Tensilica LX6 dual-core MCU running up to 240 MHz, providing sufficient computing power for real-time inverse kinematics calculation.
- Wireless Communication: Supports 2.4 GHz Wi-Fi and dual-mode Bluetooth for remote control and data transmission.
- Large Memory: Up to 4 MB SPI Flash and 8 MB PSRAM for complex data processing tasks.
- Low Power Modes: Multiple power-saving modes extend battery life and reduce energy consumption.
- Rich I/O Interfaces: 34 programmable GPIO pins support various sensors, actuators and peripheral extensions.
- Security: Built-in hardware encryption engine supports AES, SHA-2, RSA and ECC encryption algorithms to ensure data security.

Thanks to its high performance, low power consumption and rich peripherals, the ESP32-WROVER is widely used in IoT scenarios such as smart home, wearable devices and wireless sensor networks. In the XGO-lite V2, it realizes core control, data processing and communication functions to create an intelligent, flexible and expandable robot platform.

## XGO-Lite V2 Joints
The XGO-lite robot adopts a high-quality 6 V, 2.3 kg·cm plastic-case metal-gear 300° dual-axis TTL serial servo. It features a plastic housing, metal gearbox, iron-core motor, TTL control board and high-precision potentiometer with a 25T output spline.

It provides a stall torque of 2.3 kg·cm and an effective control angle of 300°. It can switch between servo mode and continuous rotation mode. The servo feeds back position, speed, voltage, temperature and load parameters to realize overload protection.

With this servo, the XGO-lite achieves precise and stable motion control. The metal gearbox and iron-core motor ensure high torque and accuracy, while the 300° wide rotation angle improves flexibility. Dual working modes and multi-dimensional feedback support overload protection to ensure overall stability and safety.

In summary, the 6 V 2.3 kg·cm plastic-case metal-gear 300° dual-axis TTL serial servo is a high-performance component suitable for robots and intelligent devices. It greatly enhances the overall performance and application value of the XGO-lite V2 robot.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-robot-kit/images/microbit-xgo-lite2-introduce-07.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-robot-kit/images/microbit-xgo-lite2-introduce-08.png)
