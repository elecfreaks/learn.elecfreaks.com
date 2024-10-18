---
sidebar_position: 1
sidebar_label: 案例01 测量植物生长环境温湿度
---

# 案例01 测量植物生长环境温湿度

## 简介

本课程将向学生介绍 makecode 图形化编程平台、 micro:bit 温度传感器以及智能温室大棚套件。学生将使用智能温室大棚套件学习如何编写程序来测量植物生长周围环境的温度值以及土壤湿度值并显示在 micro:bit LED 显示屏上面。

## 教学目标

- 了解图形化编程平台 MakeCode 。
- 学习编程中变量的概念和使用方式。
- 了解 micro:bit 板载温度传感器以及编程方式。
- 了解智能温室大棚套件。

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

现代植物种植技术的进步将人们从繁重的劳动中解放出来，那么现代植物种植使用了哪些技术？如何通过智能化的管理更有效的种植植物？在本节课中，我们将了解智能温室大棚的原理以及通过编程获取植物生长环境的温湿度数据。

准备好使用智能温室套件探索现代植物种植技术的世界了吗？现在，让我们踏上这个有趣的学习旅程吧！

### 探究活动

- 如何正确添加智能温室大棚套装所需要的软件库？
- 如何在 mciro:bit LED 显示屏显示不同数字？
- 如何通过变量机制记录温度传感器检测的温度值以及土壤湿度传感器检测的土壤湿度值并显示？

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



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-case01-1.png)

请参考程序链接：https://makecode.microbit.org/_ipbEHbbjtfiT

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



### 团队合作与展示

学生分成小组，共同完成智能温室大棚的安装和程序编写。

鼓励学生之间相互合作、交流和分享经验。

每个小组有机会向其他小组展示他们制作的智能温室大棚，并演示。

**预期效果：**按下按钮 A，micro:bit LED 显示屏显示温度和湿度。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-case1.gif)

### 总结与反思

回顾课程内容，提醒学生掌握了哪些知识和技能。

引导学生讨论他们在制作过程中遇到的问题和困难，以及如何解决这些问题。

引导学生思考程序的优化和改进方向，比如利用 micro:bit 还能制作哪些有趣的案例。

## 扩展知识

**智能温室大棚**：智能温室大棚是一种利用现代科技手段，通过自动化控制系统来监测、调节和管理温室内环境的设施。它利用各种传感器和执行器，结合数据采集、分析和处理技术，实现对温室内温度、湿度、光照、二氧化碳浓度等环境因素的实时监测和调节，以提高作物的生长质量和产量。

智能温室大棚通常包括以下特点和功能：

1. 温度、湿度、光照、二氧化碳浓度等环境因素的实时监测和数据记录；
2. 自动化的温室通风、遮阳、灌溉系统，根据环境参数实现自动调节；
3. 智能灯光系统，可以根据作物需求和光照时间进行智能控制；
4. 远程监控和控制功能，可以通过手机或电脑远程实时监测和控制温室环境；
5. 数据分析和预测功能，通过收集的数据进行分析和预测，提供决策支持。

智能温室大棚的应用可以有效提高作物的生长速度、产量和质量，减少能源和资源的浪费，降低生产成本，同时也减少对环境的影响。因此，它在现代农业生产中得到了广泛的应用和推广。
