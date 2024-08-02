# Product Introduction

The XGO-Rider is a desktop-level dual-wheeled bipedal robot based on the micro:bit platform. It features a 4.5KG.CM all-metal magnetic encoder bus serial port servo as joints and FOC wheel hub integrated motors as wheels, which can achieve omnidirectional movement, stable posture, and various motion superpositions. Equipped with an IMU for internal algorithms and secondary development, it supports graphical programming.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/introdution-01.png)

## Product Features

- Flexible and stable motion performance - The shoulder joints are controlled by a 360° magnetic encoder, with a roll angle of ±35°, and the FOC direct drive wheel hub motor has precise angle positioning.

- Obstacle terrain crossing - The robot adjusts its position based on the IMU feedback to adapt to obstacles such as single-sided and double-sided barriers.

- User communication and secondary programming interface - The underlying serial port protocol and Python interface are open for secondary development and verification.

| Product Name            | micro:bit XGO-Rider                                          |
| :---------------------- | :----------------------------------------------------------- |
| Upper Computer          | micro:bit V2                                                 |
| Speaker                 | 8 Ohm 3W cavity speaker                                      |
| Programming Environment | Python/Blockly                                               |
| Structural Components   | 1mm aluminum alloy, PC, carbon fiber                         |
| Overall Dimensions      | Length 135mm, Width 118mm, Height 116-158mm                  |
| Overall Weight          | 600g                                                         |
| Joint Servo             | 6V 4.5KG.CM metal shell steel gear 360-degree magnetic encoder dual-axis TTL serial port servo |
| Wheel Hub Motor         | 8.4V magnetic encoder external rotor brushless motor, rated torque 0.1N.m |
| Lower Computer          | ESP32 main control, Type-C charging port, DIP switch, etc.   |
| Battery                 | 18500 2S 1200mAh                                             |
| Endurance Time          | 2 hours under comprehensive working conditions               |

## Remote Control Mode

Bluetooth remote control is used to control the Rider with the XGO mobile app. After opening the location permissions on the mobile phone, you can connect to the robot through Bluetooth to remotely control the Rider.