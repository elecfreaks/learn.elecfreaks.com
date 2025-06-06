﻿---
sidebar_position: 1
sidebar_label: XGO2 对照表
---

# XGO2 对照表

XGO系列产品功能对照表：

|  **参数**  |               **XGO-lite2**               |                  **XGO-mini2**                  |
| :--------: | :---------------------------------------: | :---------------------------------------------: |
|   上位机   |              树莓派CM4  2GB               |                 树莓派CM4  4GB                  |
|  编程环境  |              Python/Blockly               |                 Python/Blockly                  |
|   结构件   |                 1mm铝合金                 |                   1.5mm铝合金                   |
|  整机尺寸  |           默认站姿250-145-170mm           |              默认站姿270-150-180mm              |
|  整机重量  |                   575g                    |                      915g                       |
| 机器狗关节 | 6V 2.3KG.塑料壳金属齿300度双轴TTL串口舵机 | 6V 4.5KG.CM金属壳钢齿360度磁编码双轴TTL串口舵机 |
|  腿和足端  |                    ABS                    |                    硅胶+ABS                     |
|   下位机   |                   ESP32                   |                      ESP32                      |
|    电池    |             18650 2S 2500毫安             |                18650 2S 3500毫安                |
|   充电器   |                  8.4V1A                   |                     8.4V1A                      |
|  续航时间  |               综合工况2小时               |                  综合工况1小时                  |
|    展示    |    ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-robot-kit/images/cm4-xgo-index.png)     |       ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-robot-kit/images/cm4-xgo-mini-index.png)       |

## XGO-mini 与 XGO-lite 总线伺服舵机比较

两种伺服舵机都使用 TTL 总线通信，并且都具有相似的通信参数（在当前版本中）。但是，由于编码器类型的不同，mini 的舵机具有更大的角度控制范围和更多的控制模式。mini 的伺服系统的核心优点是更高功率的电机和更高分辨率的编码器，结合更坚固的齿轮和外壳，以提供更好的运动控制，包括速度、精度和负载特性。与XGO-lite 中的伺服系统相比，XGO-mini 中的舵机具有一些直观的优势：

1、更高的耐用性：在伺服器发生故障之前使用时间更长；

2、更快的机器人动作：所有动作都应该明显更快；

3、更大的有效载荷能力：虽然 mini 的重量更大，但它的有效载荷能力要大得多；

4、更高的控制精度：mini 具有更平滑的运动；

5、紧凑的接线布置：mini 舵机允许布线布置更加紧凑；

6、噪音更低：由于传动比更低，齿轮更好，mini的联合传动效率更好，噪音更低。
