---
sidebar_position: 3
sidebar_label: 硬件介绍
---

# 硬件介绍

### micro:bit 主板介绍

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-smart-pet-feeder-kit/images/microbit-smart-maker-kit-case02-01.png)

micro:bit 是一款专为青少年编程教育目的而设计的微型计算机，尺寸只有4cm x 5cm，但它拥有一系列的传感器和LED灯，可以用来控制和监测物理世界。

micro:bit 可以通过 USB 线或蓝牙连接到计算机，并使用编程软件进行编程。它支持多种编程语言，包括Microsoft MakeCode、Python和 JavaScript 等。学生可以使用这些编程语言来编写代码，控制 micro:bit 上的传感器和 LED 灯，创造各种有趣的项目。

micro:bit 的设计简单易用，适合初学者使用。它可以用于各种教育活动，如编程课程、科学实验和创客活动等。通过使用 micro:bit，学生可以培养创造力、解决问题的能力和团队合作精神。

更多关于 micro:bit 的信息，欢迎访问：[micro:bit 官网](https://microbit.org/)。

## IOT:bit

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-smart-pet-feeder-kit/images/hardware-introduction-01.png)

IOT:bit扩展板是一款功能丰富的扩展板，专为micro:bit设计。下面是更详细的介绍：

WiFi模块：
IOT:bit板载了WiFi模块，使您能够轻松连接到无线网络。通过WiFi模块，您可以实现与云平台（如Thingspeak和HiveMQ）的快速通信，将数据传输到云端或从云端获取数据。这为您的智能家居项目提供了广阔的连接和远程控制的可能性。

RTC时钟模块：
IOT:bit还集成了RTC时钟模块（实时时钟），它具有精准的计时功能。即使主板断电，独立供电的RTC模块仍可继续计时。这为您的应用提供了持续准确的时间记录，例如时间戳、定时任务和事件触发等。

蜂鸣器：
IOT:bit还包含了一个蜂鸣器，通过它您可以播放旋律、音效或警报声。蜂鸣器能够产生不同频率的声音，为您的项目增加了声音反馈和交互性。

IO口扩展：
IOT:bit扩展了micro:bit上所有可用的IO口，并以GVS形式引出，方便您与各种3V的电子积木模块连接。您可以扩展各种模块，如LED灯、光敏传感器、舵机等，以构建更丰富、多样化的智能家居系统。

IOT:bit扩展板的功能丰富，能够满足您在智能家居开发中的需求。它提供了WiFi连接、RTC时钟、蜂鸣器和IO口扩展等功能，为您的项目带来更多可能性。不仅可以实现数据的快速传输和远程控制，还可以增加音效和各种传感器的接入，让您的智能家居系统更加智能化和互动性。

更多关于 IOT:bit 的信息请访问：[IOT:bit 物联网扩展板](http://wiki.elecfreaks.com/en/microbit/expansion-board/iot-bit/)。

### 八爪鱼系列人体红外传感器

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-smart-pet-feeder-kit/images/microbit-smart-maker-kit-case03-01-3-1.png)

人体红外传感器模块是一种采用AM412热释电数字智能传感器的电子积木。这个模块设计用于感知和检测人体或动物的运动。当人体或动物接近传感器时，它能够检测到体温的变化并发出信号。该传感器的感应距离约为4-5米，意味着它能够在这个范围内检测到运动，并向系统发送相应的信号。这种传感器模块常用于安防系统、自动照明系统或其他需要感知和响应运动的应用中。

当检测到人体或动物运动时，返回数值 1 ，并且板载LED灯会亮起，否则返回数值 0 ，并且板载LED灯熄灭。

关于更多人体红外传感器的信息，欢迎访问：[八爪鱼系列人体红外传感器介绍 Wiki 链接](http://wiki.elecfreaks.com/en/microbit/sensor/octopus-sensors/sensor/octopus_ef04055/)。

**注意：人体红外传感器模块检测的是运动信号，而不是热信号。当人体或动物靠近该模块后没有动作后一段时间，板载LED灯熄灭并返回数值 0。**

### 八爪鱼系列超声波传感器

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-smart-pet-feeder-kit/images/microbit-smart-maker-kit-case03-01-3.png)

Sonar:bit 是一款基于超声波传感技术的传感器模块，专为 micro:bit 教育开发板设计。

它可以用于测量距离和检测障碍物，为用户提供了一种简单而可靠的方式来实现距离测量和避障功能。Sonar:bit采用超声波传感器，可以向周围发射超声波信号，并通过接收回波来计算物体与传感器之间的距离。它具有高精度和稳定性，可以测量范围为2厘米到400厘米。

通过编程 micro:bit，用户可以根据 Sonar:bit 的测量结果来实现各种应用，如智能小车的避障功能、距离测量等。总之，用户可以创造各种有趣的应用。无论是教育还是创客项目，Sonar:bit 都是一个不可或缺的工具。

关于更多超声波传感器的信息，欢迎访问：[八爪鱼系列超声波传感器介绍 Wiki 链接](http://wiki.elecfreaks.com/en/microbit/sensor/octopus-sensors/sensor/sonar_bit)。

### 180° 舵机

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-smart-pet-feeder-kit/images/microbit-smart-maker-kit-case03-01-4.png)

伺服电机通常被称为舵机，它是一种带有输出轴的小装置。当我们向伺服器发送一个控制信号时，输出轴就可以转到特定的位置。只要控制信号持续不变，伺服机构就会保持轴的角度位置不改变。如果控制信号发生变化，输出轴的位置也会相应发生变化。日常生活中，舵机常被用于遥控飞机、遥控汽车、机器人等领域。
