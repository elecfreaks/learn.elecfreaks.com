---
sidebar_position: 5
sidebar_label: 案例05 实时观察植物温湿度及关照强度
---
# 案例05 实时观察植物温湿度及光照强度

## 简介

本课程将向学生介绍通过 IOT 平台 ThingSpeak 实时观察植物生长环境中土壤温湿度以及光照强度的编程方式。

## 教学目标

- 了解 ThingSpeak 平台设置多参数的方式 。
- 学习同时检测植物生长环境的温度数据、土壤湿度数据、光线强度数据。

## 教学准备

在开始教学之前，请确保您已经准备好以下必要的物品：

|                             图片                             |                名称                |
| :----------------------------------------------------------: | :--------------------------------: |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-014.png) |             micro:bit              |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-020.png) |              IOT:bit               |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-030.png) |          3V Relay Module           |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-040.png) |       3V Vertical Water Pump       |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-050.png) |        8 Rainbow LED Light         |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-060.png) | Octopus Soil Moisture Sensor Brick |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-070.png) |        Octopus Light Sensor        |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-078.png) |          Greenhouse Model          |
|                                                              |                                    |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-090.png) |         Double-sided Tape          |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-011.png) |          Flat Screwdriver          |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-012.png) |                 PC                 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-013.png) |             USB Cable              |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-015.png) |           4P公对母杜邦线           |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-016.png) |           5P母对母杜邦线           |

这些物品将为您提供一个完整的体验，确保您可以顺利地进行后续的操作和学习。如果您已准备好以上内容，我们可以继续进入下一步。

## 教学过程

### 课程引入

在前面的课程中我们逐渐学习了通过编程的方式获取植物生长环境的温度数据、土壤湿度数据、日光强度数据并通过 3V 水泵以及 8 颗彩虹灯环改变植物的土壤湿度和光线强度，并学习了通过 IOT 平台 ThingSpeak 观看温度数据和土壤湿度数据，这节课我们将前面所有学到的知识点综合运用并通过编程观察植物生长过程中需要检测的数据并显示在 ThingSpeak 平台上面。

现在，那我们开始吧！

### 探究活动

- 如何通过编程获取植物生长过程中需要检测的所有数据？
- 如何使用 ThingSpeak 平台观看到所有检测的数据？



### 组装智能温室大棚

将micro:bit 插入IOT:bit 扩展板，在IOT:bit 扩展板背面贴上无痕胶后，固定到温室大棚模型底座上面，如下图所示：

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-017.png)

将3V水泵和3V继电器放置如下图所示位置：

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-018.png)

将适量的土壤倒入温室基地植物生长池和放置种子，将土壤湿度传感器插入土壤中。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-019.png)

将8颗彩虹灯环固定到透明外罩的顶部。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-021.png)

使用无痕胶将光线传感器黏贴到温室大棚模型透明外罩顶部，如下图所示。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-022.png)

将土壤湿度传感器的连接线、8颗彩虹灯环的连接线、光线传感器的连接线、3V水泵软管，按如下图所示穿过温室大棚透明外罩孔，然后将其放下：

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-023.png)

按下方连线图所示，将3V水泵、3V继电器、土壤湿度传感器、光线传感器和8颗彩虹LED灯连接到 IOT:bit 扩展板上。

|     元器件     | IOT:bit 对应引脚 |
| :------------: | :--------------: |
|  8颗彩虹LED灯  |        P1        |
| 土壤湿度传感器 |        P2        |
|   光线传感器   |        P3        |
|    3V继电器    |        P9        |

​

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-026.png)

将适量的水倒入温室底部水槽。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-024.png)

将电源连接到 IOT:bit 扩展使用 USB 数据线连接板，然后打开电源开关。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-025.png)

### 代码编程

#### 添加软件库

进入“[makecode.microbit.org](https://makecode.microbit.org/)”，点击“**New Project**”。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-01.png)



在弹出窗口中输入项目名称并点击“**Create**”。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-02.png)



在打开的编程界面中，点击编程积木抽屉中“**Extensions**”。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-03.png)



打开拓展页面后，在搜索栏中输入“**iot-environment-kit**”，点击搜索，在搜索结果中选择 “**iot-environment-kit**” 编程积木库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-04.png)



添加成功后，可以在编程积木抽屉栏看到 “**ESP8266_IoT**、**OLED**、**RTC1307**、**Octopus**”。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-05.png)



### 示例代码



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-case05-1.png)

请参考程序链接：https://makecode.microbit.org/_PM5f54hj14yq。

### 下载程序

使用 USB 数据线连接电脑和 micro:bit V2。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-06.gif)

连接成功后，电脑上会识别出一个名为 **MICROBIT** 的盘符。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-07.png)

点击左下角的![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-08.png)，选择 **Connect Device**。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-09.png)

点击![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-10.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-11.png)

点击![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-12.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-13.png)



在弹出窗口选择 “**BBC micro:bit CMSIS-DAP**”，然后选择 “**Connect**”，至此，我们的 micro:bit 就已经连接成功。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-14.png)

点击下载程序。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-15.png)

### ThingSpeak 平台建立数据看板

关于ThingSpeak平台的使用以及建立看板可以参考这篇文章：[how-to-use-thinkspeak](https://wiki.elecfreaks.com/en/microbit/wisdom-life/microbit-smart-science-iot-kit/how-to-use-thinkspeak/)。

参考如下图所示：

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-18.png)

### 团队合作与展示

学生分成小组，共同完成智能温室大棚的安装和程序编写。

鼓励学生之间相互合作、交流和分享经验。

每个小组有机会向其他小组展示他们制作的智能温室大棚，并演示。

**预期效果：** 当植物生长的土壤湿度值小于200时，水泵开始抽水并输送到植物生长池中。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-case2.gif)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-case5.gif)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-preparation-19.png)

### 总结与反思

回顾课程内容，提醒学生掌握了哪些知识和技能。

引导学生讨论他们在制作过程中遇到的问题和困难，以及如何解决这些问题。

引导学生思考程序的优化和改进方向，比如利用 micro:bit 还能制作哪些有趣的案例。

## 扩展知识

ThingSpeak 是一个物联网 (IoT) 平台，允许用户收集、分析和分发来自传感器的数据。它特别适用于那些希望快速设置和测试物联网应用而无需自己构建完整后端服务的开发人员和爱好者。

### 主要功能：

1. **数据收集**：通过 HTTP POST 请求或使用 MATLAB API 从各种传感器收集数据。
2. **数据存储**：将收集到的数据存储在云端的“频道”中。
3. **数据分析**：使用 MATLAB 或其他工具对数据进行实时分析。
4. **数据可视化**：创建图表和仪表板来展示数据。
5. **事件触发**：当数据达到特定阈值时，可以配置 ThingSpeak 以发送电子邮件、短信或执行其他操作。
6. **数据分享**：可以公开分享频道中的数据，也可以将其保持私密。

### 使用场景：

- **环境监测**：监测温度、湿度等。
- **家庭自动化**：监控和控制智能家居设备。
- **工业监控**：监测机器状态、生产线效率等。
- **健康监测**：跟踪个人健康指标如心率、步数等。
