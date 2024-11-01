---
sidebar_position: 3
sidebar_label: 案例03 你的名字
---

# 案例03 你的名字

## 简介

在本课程中，我们将向学生们展示如何通过编程来设置 XGO Rider 的蓝牙名称，并获取其固件版本号。学生们将首先了解蓝牙技术的基本原理，随后深入学习如何通过编程手段修改蓝牙设备的名称。此外，课程还将讲解固件的基本概念及其重要性，并指导学生们掌握获取固件版本号的相关编程技巧。通过这些学习，学生们将能够更加熟练地与XGO Rider进行交互，提升他们的编程实践能力。



## 教学目标

- 了解蓝牙技术原理。
- 学会通过编程方式修改 XGO Rider 的蓝牙名称。
- 理解智能设备中固件的作用。
- 学习通过编程方式获取 XGO Rider 固件的版本号。



## 教学准备

在开始教学之前，请确保您已经准备好以下必要的材料：

| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-01.png) | micro:bit  V2  |
| :----------------------------------------------------------: | :------------: |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-19.png) | XGO-Rider 整机 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-02.png) |   USB 数据线   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-03.png) | 个人电脑（PC） |

这些材料将为您提供一个完整的体验，确保您可以顺利地进行后续的操作和学习。如果您已准备好以上内容，我们可以继续进入下一步。



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-read-01.png)**XGO Rider 开机后，为保持机身平衡，需要小幅度来回移动，请不要将 XGO Rider 放在桌子边缘或者危险的地方，避免损坏。**



## 教学过程

### 课程引入

在之前的课程中，我们已经掌握了如何通过编程与 XGO Rider 进行通信和互动。然而，正如我们在与人初次见面时通常会询问对方的名字一样，与 XGO Rider 互动时，了解它的“名字”同样重要。本节课，我们将引导大家学习如何通过编程方法为 XGO Rider 设置蓝牙名称以及获取固件版本号，即赋予它一个独特的标识。你甚至可以根据自己的喜好，为它起一个富有意义的名字。那么，让我们开始这一节的学习之旅吧。



### 探究活动

- 三原色为什么是红、绿、蓝？其他颜色可以吗？
- 声音是如何产生的？人类能听到声音的范围是多少？
- 如何通过编程控制 XGO Rider 的彩虹灯与扬声器？



### 开始编程

#### 添加 XGO Rider 软件库

##### 1. 进入“[makecode.microbit.org](https://makecode.microbit.org)”，点击**新建项目**。



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-04.png)



##### 2. 在弹出窗口输入项目名称并点击**创建**。



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-05.png)



##### 3. 点击代码抽屉中的**扩展**，在弹出界面的搜索框中输入 **XGO Rider** 并点击搜索图标，在显示 **XGO Rider** 软件库后点击。



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-07.png)



### 示例程序



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-102.png)



**参考程序链接：**https://makecode.microbit.org/_0gT2Evd1cTqv



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-read03.png)**因为 XGO Rider 的表演模式中有前进和后退，请将 XGO Rider 放置在宽敞的平地上运行。**



### 下载程序

##### 1. 使用 USB 线连接 PC 和 micro:bit V2。



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-09.gif)



##### 2. 连接成功后，电脑上会识别出一个名为 MICROBIT 的盘符。



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-10.png)



##### 3. 点击左下角的![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-11.png)，选择**Connect Device**。



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-12.png)



##### 4. 点击![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-13.png)。



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-14.png)



##### 5. 点击![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-15.png)。



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-16.png)



##### 6. 在弹出窗口选择 **BBC micro:bit CMSIS-DAP**，然后选择**连接**，至此，我们的 micro:bit 就已经连接成功。



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-17.png)



##### 7. 点击**下载程序**。



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-case-18.png)



### 团队合作与展示

- 学生分成小组，共同完成 XGO Rider 蓝牙名称设置与获取固件版本号的编写。


- 鼓励学生之间相互合作、交流和分享经验。


- 每个小组有机会向其他小组展示他们编程完成的 XGO Rider，并演示。

**预期效果：**



### 总结与反思

- 回顾课程内容，提醒学生掌握了哪些知识和技能？

- 引导学生讨论他们在制作过程中遇到的问题和困难，以及如何解决这些问题。

- 引导学生思考共同讨论能否任意给 XGO Rider 设置蓝牙名称。



## 扩展知识

### 蓝牙技术

蓝牙技术是一种无线通信标准，主要用于短距离内的数据和语音传输。它允许电子设备之间通过无线信号进行通信，而无需物理连接。蓝牙技术的核心原理包括以下几个方面：

1. **无线电频率**：蓝牙使用2.4 GHz的ISM（工业、科学、医疗）频段进行通信，这是一个无需许可的频段，也是许多无线技术共用的频段。

2. **跳频技术**：为了减少干扰和提高信号的稳定性，蓝牙采用跳频扩频（FHSS）技术。这意味着蓝牙设备在传输数据时会不断更换工作频率，从而避免长时间停留在一个频率上。

3. **数据传输**：蓝牙设备通过无线电波传输数据，这些数据被编码成数字信号。蓝牙协议定义了数据包的结构和传输方式，确保数据在设备之间可靠地传输。

4. **设备配对**：两个蓝牙设备在首次通信前需要进行配对。这个过程涉及到设备之间的安全认证，以确保只有授权的设备可以连接。

5. **低功耗设计**：蓝牙技术特别适用于电池供电的设备，因为它设计了多种省电模式，可以在不传输数据时降低功耗。

6. **多设备连接**：蓝牙技术支持多设备之间的连接，一个设备可以同时与多个设备通信，这在一些应用场景中非常有用，比如音频设备可以同时连接多个音频源。

7. **协议栈**：蓝牙技术有一套完整的协议栈，包括物理层、链路层、逻辑链路控制和适配协议层（L2CAP）、服务发现协议（SDP）等，这些协议定义了设备如何建立连接、传输数据和发现服务。

蓝牙技术经过多年的发展，已经推出了多个版本，如蓝牙4.0、蓝牙4.2、蓝牙5.0等，每个新版本都在提高传输速率、降低功耗和增加功能方面有所改进。

### 智能设备固件

智能设备的固件是嵌入在硬件设备中的软件，它扮演着至关重要的角色，其主要作用包括：

1. **控制硬件操作**：固件直接与硬件交互，控制设备的启动过程、配置硬件参数、管理设备的基本功能。

2. **提供用户界面**：固件可以包含操作系统或应用程序，为用户提供操作界面，使得用户能够与设备进行交互。

3. **确保设备安全**：固件通常包含安全协议和加密机制，帮助保护设备免受恶意软件和黑客攻击。

4. **更新和维护**：通过固件更新，制造商可以修复安全漏洞、改进性能、添加新功能或提高设备的兼容性。

5. **诊断和故障排除**：固件可以包含诊断工具，帮助识别和解决硬件或软件问题。

6. **优化性能**：固件可以调整设备的性能，确保硬件资源得到最有效的利用。

7. **支持网络通信**：固件处理设备的网络连接，包括Wi-Fi、蓝牙等无线通信协议，确保设备能够与其他设备或互联网进行通信。

8. **实现特定功能**：在某些设备中，固件还负责实现特定的功能，如智能家居设备中的自动化控制。

简而言之，固件是智能设备正常运行的基石，它定义了设备的操作方式，并确保设备能够安全、高效地执行其设计的任务。
