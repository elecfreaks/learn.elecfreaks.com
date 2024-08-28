---
sidebar_position: 4
sidebar_label: 快速入门指南
---

# 快速入门指南

这份快速入门指南将为您提供使用智能温室大棚套装的简明指引。无论您是否具备编程经验，本指南都将帮助您迅速掌握基本操作。通过简单的步骤，您将了解如何组装智能温室大棚，并创建一个实际案例进行体验。让我们一同开启这个令人兴奋的智慧种植学习之旅！

## 准备工作

在开始快速入门之前，请确保您已经准备好以下必要的材料：

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

这些材料将为您提供一个完整的体验，确保您可以顺利地进行后续的操作和学习。如果您已准备好以上内容，我们可以继续进入下一步。

# 快速上手

## 1、组装温室大棚

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

## 2、下载程序

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-hardware-introduction-027.png)

下载智能温室大棚程序：[microbit-smart-greenhouse-kit.hex](https://www.elecfreaks.com/download/microbit-smart-greenhouse-kit.hex)

使用 USB 数据线连接 PC 和 micro:bit V2 。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual03.gif)

连接成功后，电脑上会识别出一个名为 MICROBIT 的盘符。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual06.png)

将下载好的程序文件 [microbit-smart-greenhouse-kit.hex](https://www.elecfreaks.com/download/microbit-smart-greenhouse-kit.hex) ，复制到 MICROBIT 中。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-read03.png)下载成功后，micro:bit V2 会自动断开并重新连接，此时你复制到 MICROBIT 中的程序文件 [microbit-smart-greenhouse-kit.hex](https://www.elecfreaks.com/download/microbit-smart-greenhouse-kit.hex) 将会消失，这是正常现象。



## 3、效果演示



