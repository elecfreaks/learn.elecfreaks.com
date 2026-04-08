---
sidebar_position: 1
sidebar_label: CM5 XGO-mini3W
---

# Introduction

XGO-mini3W is a 15-degree-of-freedom desktop-grade AI wheeled-legged robot dog. It is equipped with a robotic arm and an end gripper on its back, and integrates a Raspberry Pi CM5 module to support AI edge computing applications. It adopts 4.5 kg·cm metal-gear magnetic encoder bus serial servos for its joints, enabling omnidirectional movement, six-dimensional attitude control, posture stabilization, various gaits, and grasping tasks. The integrated FOC hub motors at the foot ends simplify the transmission structure, improve efficiency, and make the robot respond agilely and move smoothly, adapting to various terrains. It is internally equipped with an IMU, joint position sensors, and current sensors to feed back its attitude, joint angles and torque for internal algorithms and secondary development.



# Overview: The Ultimate Hybrid Form

XGO-mini3W represents the pinnacle of the XGO desktop robot series. Building on the proven 15-DOF architecture of the XGO series, it introduces a revolutionary wheeled-legged powertrain. By replacing the traditional static foot ends with integrated FOC hub motors, the mini3W completely eliminates the trade-off between speed and terrain adaptability. It can cruise silently on flat ground like a sports car, instantly lock the wheel sets to overcome obstacles like a robot dog, and perform complex grasping tasks with the integrated robotic arm.

# Key Innovations

### Hybrid Locomotion Strategy

- **High-Speed Rolling**: On flat ground, the robot moves efficiently with four powered wheels, achieving speed and quiet operation unmatched by traditional legged robots.
- **Terrain Adaptation**: When encountering obstacles or rough roads, the robot activates 12 leg joints to handle them calmly by stepping, climbing, and adjusting the height and inclination of the body.
- **Skating Mode**: A unique hybrid mode — the robot uses leg kinematics to "push off" for acceleration or attitude adjustment, achieving ice-like gliding and "drifting" effects while rolling.

### Integrated FOC Hub Motor

Different from bulky external wheel sets, the mini3W adopts a custom-designed miniature FOC hub motor directly integrated at the foot ends:

- **Minimalist Transmission**: Adopts a direct-drive design without gear sets, achieving zero backlash and silent operation.
- **Ultra-Fast Response**: The coreless structure ensures extremely low moment of inertia, supporting millisecond-level rapid start and stop control.

### Optimized All-Purpose Architecture

- **Powerful Joints**: The legs adopt 4.5 kg·cm magnetic encoder bus servos, providing explosive torque for quickly standing up from a crouching state.
- **Mobile Manipulation**: Equipped with a standard 3-DOF robotic arm, making it a full-featured mobile manipulator.

# System Architecture

## System Architecture: The Bi-Level Intelligence

### Overview: Heterogeneous Computing

XGO adopts a heterogeneous bi-level architecture that imitates the biological nervous system. Just as humans rely on the cerebrum for logical reasoning and the cerebellum for motor coordination, we completely decouple high-level AI processing tasks from low-level real-time motion execution tasks.

This architecture defines two core computing units:
- **Upper Computer (Cerebrum)**: Responsible for high-bandwidth, soft real-time tasks (such as visual perception, large model inference).
- **Lower Computer (Cerebellum)**: Responsible for low-latency, deterministic tasks (such as gait generation, attitude balancing).

**Core Advantage**: This physical isolation ensures extreme safety and stability of the system — even if the AI load on the Raspberry Pi is too heavy or the operating system freezes, the underlying MCU can still run the balance control loop independently to prevent the robot from losing control and falling.

### Layer 1: The Cognitive Layer / Upper Computer

- **Hardware Core**: Raspberry Pi Compute Module 5 (CM5).
- **Core Functions**: As the decision-making center of the robot. It focuses on complex computing tasks, including AI computer vision analysis and large language model (LLM) interaction.
- **Architectural Thinking**: Why separation? Because AI processes usually have variable execution time (non-deterministic). Isolating them on the CM5 ensures that temporary freezes in video processing will never affect the physical balance control of the robot.

### Layer 2: The Control Layer / Lower Computer

- **Hardware Core**: ESP32-WROVER (dual-core 240MHz).
- **Operating System**: FreeRTOS.
- **Core Functions**: As the execution center of the robot. It receives "motion intentions" from the upper computer and calculates the target angle of each actuator accurately in real time through inverse kinematics (IK) or dynamic model (LQR).
- **Control Cycle**: Strict deterministic timing, with the motion control loop running at 200Hz - 1000Hz.
- **Sensor Fusion**: Deeply integrates internal 6-axis IMU (ICM-42670) or 9-axis IMU (ICM-20948) data with real-time servo feedback (position/current), ensuring excellent stability of the robot even on uneven ground.

### The Neural Bridge: Communication Protocol

A high-speed UART (serial communication) link is established between the upper and lower computers, forming the "central nervous system" of the XGO robot. To achieve highly reliable data transmission between a non-real-time operating system (Linux) and a real-time control system (RTOS), we have designed a proprietary communication protocol.

### Protocol Safety & Frame Structure

To prevent data misalignment or loss during high-speed transmission, each frame of data is strictly packaged with the following core fields:

- **Header**: Used for synchronization and alignment of data streams, ensuring the lower computer can accurately identify the start position of data packets from a continuous bitstream.
- **Command ID**: Defines the service type of the current data packet (e.g., 0x01 for position control, 0x12 for status query), realizing hierarchical processing of business logic.
- **Payload**: Carries specific control parameters (such as target joint angles, linear velocity vectors) or sensor feedback data.
- **Length**: Defines the number of bytes of the payload, supporting variable-length instruction transmission.
- **Checksum**: Adopts an efficient verification algorithm to verify the integrity of the entire frame. Once bit flipping or noise interference is detected, the lower computer will immediately discard the frame without executing wrong instructions, eliminating the risk of "twitching" or out-of-control at the source.

### Communication Mechanism: Full-Duplex Closed Loop

- **Downlink (Command)**: The upper computer sends motion instructions (Motion Intentions) at high frequency.
- **Uplink (Telemetry)**: The lower computer feeds back the robot status (IMU attitude, joint current, battery voltage) in real time to provide decision-making basis for the upper-level AI, forming a complete perception-decision-execution closed loop.
