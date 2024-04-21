---
sidebar_position: 1
sidebar_label: XGO2 Specifications per Model
---

# XGO2 Specifications per Model

|                      |             XGO-lite2              |                XGO-mini2                |
| :------------------: | :--------------------------------: | :-------------------------------------: |
|         Host         |           Raspberry CM4            |              Raspberry CM4              |
|       Program        |       Blockly & Python & ROS       |         Blockly & Python & ROS          |
|      Structure       |            1mm Al alloy            |             1.5mm Al alloy              |
|      Dimensions      |       default 250-145-170mm        |          default 270-150-180mm          |
|        Weight        |                610g                |                  900g                   |
|    Servo (Number)    |   6V 2.3kg serial bus servo (15)   |     6V 4.5kg serial bus servo (15)      |
|     Legs & feet      |                ABS                 |             Silicone & ABS              |
|        Client        |               ESP32                |                  ESP32                  |
|       Battery        |          18650 2S 2500mah          |            18650 2S 3500mah             |
|       Charger        |               8.4V1A               |                 8.4V1A                  |
| Endurance (run time) |                 2h                 |                   1h                    |
|       Exterior       | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/cm4-xgo-index.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/cm4-xgo-mini-index.png) |

| XGO-Mini vs XGO-Lite Bus Servos Comparison |                                 |                                              |                         |
| ------------------------------------------ | :-----------------------------: | :------------------------------------------: | :---------------------: |
| No.                                        |              Item               |              Servos in XGO-Lite              |   Servos in XGO-Mini    |
| 1                                          |          No Load Speed          |            0.1sec/60°(100RPM) @6V            | 0.09sec/60°(111RPM) @6V |
| 2                                          |    Stall Torque (at locked)     |                 2.3kg.cm @6V                 |      4.5kg.cm @6V       |
| 3                                          |    Running Current (no load)    |                    150mA                     |          150mA          |
| 4                                          |    Stall Current (at locked)    |                    1000mA                    |         1200mA          |
| 5                                          |    Idle Current (at stopped)    |                     6mA                      |           6mA           |
| 6                                          |          Input Voltage          |                   4V-8.4V                    |         4V-8.4V         |
| 7                                          |          Rated Torgue           |                  0.75kg.cm                   |        1.5kg.cm         |
| 8                                          |          Rated Current          |                    400mA                     |          400mA          |
| 9                                          |       Terminal resistance       |                     0.6Ω                     |          2.8Ω           |
| 10                                         |       Torque constant Kt        |                  2.3kg.cm/A                  |       3.5kg.cm/A        |
| 11                                         |        Housing material         |                      PC                      |        Aluminium        |
| 12                                         |          Gear material          |            Copper(output) + Steel            | Steel(output) + Copper  |
| 13                                         |          Bearing type           |                      NO                      |      Ball bearings      |
| 14                                         |          Angle Sansor           |          Carbon-Film potentiometer           |    Magnetic encoder     |
| 15                                         |           Gear Ratio            |                    1/416                     |          1/205          |
| 16                                         |            Backlash             |                    ≦0.5°                     |          ≦0.5°          |
| 17                                         |              Motor              |                  Core Motor                  |     Coreless Motor      |
| 18                                         |           The Weight            |                  13.2 ± 1g                   |        22.6 ± 1g        |
| 19                                         |       Connector and Cable       |                 Single cable                 |     Dual connectors     |
| 20                                         |         Running degree          |              300°(when 0～1024)              |   360°(when 0～4096)    |
| 21                                         |     Resolution [deg/pulse]      |              0.293°(300°/1024)               |    0.088°(360°/4096)    |
| 22                                         |         Operating Modes         |               Angle servo mode               |    Angle servo mode     |
| 23                                         |   Speed open-loop servo mode    |          Speed open-loop servo mode          |                         |
| 24                                         |                                 |         Speed closed-loop servo mode         |                         |
| 25                                         |                                 |                  Step mode                   |                         |
| 26                                         |           Bus Signal            |                     TTL                      |                         |
| 27                                         |    Max Position Update Rate     |                     1ms                      |                         |
| 28                                         |       Signal high Voltage       |                   2V - 5V                    |                         |
| 29                                         |       Signal Low Voltage        |                 0.0V - 0.45V                 |                         |
| 30                                         |          Protocol Type          | Half Duplex AsynchronousSerial Communication |                         |
| 31                                         |            ID range             |                   0 - 253                    |                         |
| 32                                         |     Communication Baud Rate     |              38400bps ~ 1 Mbps               |                         |
| 33                                         |            Feedback             |                   Position                   |                         |
| 34                                         |              Speed              |                                              |                         |
| 35                                         |              Load               |                                              |                         |
| 36                                         |          Input Voltage          |                                              |                         |
| 37                                         |           Temperature           |                                              |                         |
| 38                                         |      Electronic Protection      |                  Over Load                   |                         |
| 39                                         |          Over Voltage           |                                              |                         |
| 40                                         |            Over Hot             |                                              |                         |
| 41                                         |    Storage Temperature Range    |                  -30℃ - 80℃                  |                         |
| 42                                         |   Operating Temperature Range   |                  -20℃ - 60℃                  |                         |
| 43                                         | Standard Test Temperature Range |                   25℃ ± 5℃                   |                         |
| 44                                         |  Standard Test Humidity Range   |                  65% ± 10%                   |                         |

Both servo motors use TTL bus communication, and both have similar communication parameters (in the current version). However, the mini servo has a larger angular control range and more control modes due to the difference in encoder type.  The core benefits of the mini servos are higher power motors with higher resolution encoders combined with more robust gears and housing to provide better motion control, which includes speed, accuracy, and load characteristics. A few intuitive benefits of the servos in XGO-mini compared to the servos in XGO-lite:

1) Greater Durability: Longer use before a servo will fail;
2) Faster Robot Action: All movements should be noticeably faster;
3) Greater Payload Capacity: Although the mini weighs more it has significantly more payload capacity;
4) Higher control accuracy: mini has a smoother movement;
5) Compact wiring arrangement: mini servos allow a daisy-chain wiring connection, which makes the wiring arrangement more compact.
6) Lower noise: Due to the lower ratio and better gears, the joint transmission efficiency of mini is higher and the noise is lower.
