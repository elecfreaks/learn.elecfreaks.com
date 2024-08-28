---
sidebar_position: 6
sidebar_label: 案例06 建立植物水源报警器
---
# 案例06 建立植物水源报警器

## 简介

本课程将向学生介绍通过 API 接口平台 IFTTT 搭建植物水源报警器。学生将学习设计植物水源报警器以及通过 API 的调用将报警信息发送到个人邮箱上的方式。

## 教学目标

- 了解 IFTTT 平台的使用方式 。
- 分析极限条件下的触发条件并编写程序。

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

在前面的课程中，我们通过 ThingSpeak 平台实时观看到植物生长的环境数据，但是植物生长周期是很长的，我们并不能一直盯着 ThingSpeak 平台的看板数据，我们只是希望当植物生长环境发生变化并对植物生长造成危害时，能及时了解并根据情况做出调整，这节课我们将使用 API 平台 IFTTT 制作植物水源报警器。

现在，那我们开始吧！

### 探究活动

- 如何通过编程获取植物生长过程中需要检测的所有数据？
- 如何使用 IFTTT 平台设置植物生长环境触达条件并发送数据到个人邮箱？



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

请参考程序链接：https://makecode.microbit.org/_a06HbiXK1767。

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

## IFTTT 平台调用 API 

关于 IFTTT 平台的使用方式请参考这篇文章：https://wiki.elecfreaks.com/en/microbit/wisdom-life/microbit-smart-science-iot-kit/how-to-use-IFTTT/

参考如下图所示：



### 团队合作与展示

学生分成小组，共同完成智能温室大棚的安装和程序编写。

鼓励学生之间相互合作、交流和分享经验。

每个小组有机会向其他小组展示他们制作的智能温室大棚，并演示。

**预期效果：** 。

（GIF动图）

### 总结与反思

回顾课程内容，提醒学生掌握了哪些知识和技能。

引导学生讨论他们在制作过程中遇到的问题和困难，以及如何解决这些问题。

引导学生思考程序的优化和改进方向，比如利用 micro:bit 还能制作哪些有趣的案例。

## 扩展知识

IFTTT（If This Then That）是一个在线服务，它允许用户创建简单的条件语句，这些语句被称为“Applets”。这些Applets可以连接不同的应用程序和服务，实现自动化任务和工作流。IFTTT支持大量的服务，包括社交媒体、智能家居设备、天气服务等等。

### IFTTT 的主要组成部分：

1. **Triggers（触发器）**：这是 Applet 的“如果”部分，即触发自动动作的事件或条件。例如，“当我离开家时”或“当我在 Twitter 上发布新推文时”。
2. **Actions（动作）**：这是 Applet 的“那么”部分，即在触发器激活时发生的动作。例如，“打开我的智能灯”或“发送电子邮件通知”。

### 使用场景：

- **智能家居**：当检测到你离家时自动关闭灯光。
- **社交媒体管理**：当你在 Instagram 上发布新照片时，自动转发到 Facebook。
- **健康与健身**：当你在 Fitbit 上达到一定的步数目标时，自动记录在 Google Sheets 中。
- **信息提醒**：当天气预报显示有雨时，发送提醒消息。
