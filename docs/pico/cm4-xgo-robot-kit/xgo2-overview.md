---
sidebar_position: 5
sidebar_label: XGO 2 产品概述
---

# XGO 2 产品概述

## XGO 2系统架构

XGO 2 版本核心架构上位机是树莓派 CM4 计算模组，机器狗 AI 相关任务都由上位机完成。下位机使用 ESP32 开发，负责机器狗的电源管理，舵机驱动和核心步态算法等，封装了完整的串口通信协议方便上位机调用。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/cm4-xgo-overview-01.png)

（XGO 2系统架构图）

## XGO 2机械结构

XGO 2的主体结构是由铝合金结构件，小腿和总线舵机组成，头部的 AI 模组和驱动板由 4pin 信号线连接，内置2节18650锂电池。

- 机器狗前盖，机器狗后盖和机器狗底盖作为机器狗机架，用于联接各部件。前后腿分别通过四颗螺钉固定在机器狗底盖前后侧；核心驱动板通过四颗螺钉固定在机器狗底盖中间。

- 每条腿上各搭载三个舵机作为肘、肩、髋关节。机械上，三个关节舵机使用铝合金结构件进行固定联接。电气上，肘关节舵机和肩关节舵机，肩关节舵机和髋关节舵机，髋关节舵机和核心驱动板之间各使用一条舵机线连接，使得核心驱动板能够驱动并控制所有的关节舵机。

- AI 模组固定在机器狗前盖上，并通过 AI 模组串口连接线与核心驱动板进行连接。

- 开关通过螺母固定在机器狗后盖上，并与核心驱动板进行连接。开关为自锁类型，即按下后不回弹且机器狗处于持续通电状态；再次按下后机器狗断电并在3~4秒后趴下关机。

- 18650 2S电池通过魔术贴粘在驱动板上，充电孔固定在底板。

XGO-lite2 3D图下载链接：https://www.elecfreaks.com/download/xgo/xgo-lite2.step

XGO-mini2 3D图下载链接：https://www.elecfreaks.com/download/xgo/xgo-mini2.step

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/cm4-xgo-overview-02.png)

XGO-lite2 爆炸图

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/cm4-xgo-overview-03.png)

XGO-mini2爆炸图

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/cm4-xgo-overview-04.png)

机器狗坐标系，腿，舵机，编号图

（舵机ID如图所示：左前腿，右前腿，右后腿，左后腿，机械臂依次为舵机ID的第一位1，2，3 ， 4，5。每条腿下，中，上舵机分别为舵机ID的第二位1，2，3 。机械臂的上，中，下分别为51，52，53）。

## XGO-CM4模组

AI模组采用树莓派CM4技术方案，配有2.0寸IPS彩色显示屏幕和4个可编程按键，500万像素摄像头,数字麦克风及腔体扬声器，是一款拥有人机交互能力的AI终端，可以实现图像识别，人脸检测，语音识别等功能，帮助学生学习AI知识。

XGO-CM4原理图下载：链接：https://www.elecfreaks.com/download/xgo/raspberry-cm4.pdf

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/cm4-xgo-overview-05.png)

XGO-CM4爆炸图

## XGO 2 驱动板

选用 ESP32-WROVER 模组，ESP32-WROVER 系列模组基于 ESP32-D0WD 双核芯片设计，满足了实时运动学逆解算的算力需求，并且拥有足够的接口与外设通讯，使用串口与串口舵机通信，IIC接口读取陀螺仪MPU6050数据，系统使用两节18650锂电池供电。

XGO2驱动板原理图：

XGO-lite2 原理图下载链接：https://www.elecfreaks.com/download/xgo/xgolite-esp32.pdf

XGO-mini2 原理图下载链接：https://www.elecfreaks.com/download/xgo/xgomini-esp32.pdf

## XGO 2 关节

**XGO-mini2 选用 6V 4.5KG.CM 金属壳钢齿 360 度磁编码双轴TTL串口舵机。**

由直流空心杯电机、减速齿轮组、12位磁编码器和集成控制电路组成，自带闭环控制与规划算法，高速总线通讯，360度角度可控，支持速度、位置、电流、温度反馈与控制参数调整功能，为机器人提供高性能伺服驱动 。定制的关节提供了 PID 参数调节，优化了关节阻抗特性（柔顺性），在基本的运动学步态规划基础上，结合对重心的考虑和IMU的反馈，以及上层控制指令的要求，可进行实时的调整。同时采用了大速比，高效率的减速器，保证了柔顺性的同时，提高了负载自重比。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/cm4-xgo-overview-06.png)

XGO-mini2舵机爆炸图



**XGO-lite2选用6V 2.3KG.塑料壳金属齿300度双轴TTL串口舵机。**

该舵机采用了塑胶外壳、金属齿轮箱、铁芯电机、TTL 控制板和高品质电位器，输出头采用25T型。它具有堵转扭矩2.3kg.cm，有效控制角度为300度，可切换伺服模式和连续转电机工作模式。此外，该舵机还可反馈位置、速度、电压、温度和负载参数，从而实现过载保护。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite2-introduce-07.png)
