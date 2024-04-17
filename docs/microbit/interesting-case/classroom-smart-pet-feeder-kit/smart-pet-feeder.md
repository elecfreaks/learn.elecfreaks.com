---
sidebar_position: 4
sidebar_label: 智能宠物喂食器
---

# 智能宠物喂食器

## 功能简介

首先，人体红外传感器负责检测是否是宠物靠近；其次，超声波传感器用于检测宠物是否到达木制小房子前20厘米以内的范围。当以上两个条件均满足时，舵机将会转动，从而使得存储宠物粮食的储粮箱将宠物粮食倾倒出来。在倾倒宠物粮食过程完成后，舵机将恢复到原来的位置，等待下一次喂食。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-smart-pet-feeder-kit/images/microbit-smart-maker-kit-pet.png)

## 课前准备

1 × micro:bit V2

1 × Classroom Smart Pet Feeder Kit

1 × micro USB 数据线

1 × Smart Home Material Pack

## 课程目标

（1）了解红外检测传感器的工作原理。

（2）了解超声波原理。

（3）了解舵机的控制方式。

（4）制作宠物喂食器案例。

## 扩展知识

**人体红外检测**

人体红外检测的原理是利用人体散发的红外辐射进行检测。

人体散发的红外辐射主要来自于体表的热辐射，其波长一般在8-14微米之间，被称为远红外波段。人体的温度通常比周围环境温度高，因此会发出红外辐射。红外辐射的强度与人体的温度有关，当人体静止时，红外辐射的强度相对稳定。而当人体移动时，由于人体的不同部位的温度有所不同，红外辐射的强度也会发生变化。

人体红外检测通常使用红外传感器来接收和测量人体散发的红外辐射。红外传感器通常由红外探测器和信号处理电路组成。红外探测器可以将红外辐射转化为电信号，而信号处理电路则可以对电信号进行放大和处理，从而检测到人体的存在和移动。

人体红外检测主要用于安防系统、自动照明系统等领域。通过检测人体的红外辐射，可以实现对人体的监测和跟踪，从而实现自动开关灯、报警等功能。

**超声波原理**

超声波是一种高频的声波，我们听不到它。

它的产生和传播是通过一种特殊的材料实现的，这种材料叫做压电材料。当我们给压电材料加上电压或电流时，它会开始振动，就像弹簧一样。这种振动会产生机械波，也就是超声波。

超声波在传播的过程中，会遇到各种物体，比如空气、水、金属等。它会发生折射、反射和散射等现象，就像光线在镜子上反射一样。这些现象会影响超声波的传播路径和强度。当超声波到达接收器时，它会使接收器中的压电材料振动，产生电荷。接收器会把这个电荷转化为电信号，然后我们可以用仪器来放大和处理这个信号，从而得到超声波的信息。

超声波的应用非常广泛。在医学上，医生可以用超声波来检查人体内部的器官和组织，比如看宝宝在妈妈肚子里的情况。在工业上，超声波可以用来检测材料的质量，比如找出金属里的裂纹。在日常生活中，我们也可以用超声波来清洗物品，比如眼镜或者餐具。

## 探究问题

（1）当宠物持续在木房子前面时，合理控制倾倒宠物粮食的次数？

（2）如何合理规划宠物的每天喂餐次数？

（3）如何合理使用其他器材，将作品更改成喂宠物喝水？

## 硬件连接

将人体红外传感器链接 IOT:bit 的 P2 端口，超声波传感器连接 IOT:bit 的 P1 端口，180°舵机连接 IOT:bit 的 P3 端口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-smart-pet-feeder-kit/images/microbit-smart-maker-kit-pet-2.png)

## 开始编程

### 编程准备

本案例的控制程序将在 micro:bit 官方编程平台：MakeCode上完成编写。请点击并打开 MakeCode 官方链接：https://makecode.microbit.org/。如下图所示：

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-smart-pet-feeder-kit/images/microbit-smart-maker-kit-case02-02.png)



第一步需要新建项目文件，请点击“New Project”，输入项目名称并点击“Create”。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-smart-pet-feeder-kit/images/microbit-smart-maker-kit-case02-03.png)



第二步需要添加 iot-environment-kit 库文件，点击积木库列表中的"Extensions"，输入“iot-environment-kit”搜索并添加。在返回的编程界面中看到已经将 iot-environment-kit 库文件添加成功。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-smart-pet-feeder-kit/images/microbit-smart-maker-kit-case02-04.png)



第三步需要添加 servo 库文件，同样在扩展库中输入“servo”搜索并添加。在返回的编程界面中看到已经将 servo 库文件添加成功。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-smart-pet-feeder-kit/images/microbit-smart-maker-kit-case03-04.png)

### 180° 舵机设置初始角度

为了更好的后续编程，需要设置舵机的初始角度和旋转方向。本案例中将舵机的初始角度设置为180°。

#### 舵机初始设置程序

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-smart-pet-feeder-kit/images/microbit-smart-maker-kit-case02-06.png)

舵机初始设置程序链接：https://makecode.microbit.org/S06902-77501-41447-67913。

### 编程示例

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-smart-pet-feeder-kit/images/microbit-smart-maker-kit-case02-05.png)



程序示例链接：https://makecode.microbit.org/S05304-43123-83650-69002。

## 案例演示

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-smart-pet-feeder-kit/images/smart-maker-kit-demo.gif)

## 思考

虽然我们制作了智能的宠物喂食器，使我们得到更多的休息时间，但是这个案例并不能控制宠物喂食的次数，你能否修改程序，当智能宠物喂食器每天喂食到一定次数就停止喂食？或者通过连接互联网控制喂食次数？

## 常见问题

1. IOT:bit 扩展板板载引脚排针比较尖锐，在插拔传感器接口时注意手指，避免受伤。
2. 请将 IOT:bit  的电源开关打开。
3. 在将 micro:bit 插入和拔出 IOT:bit  的插槽的时候，请按住 micro:bit 左右两侧操作，这样更容易操作。

## 更多信息，欢迎访问：

ELECFREAKS 官方网站：[ELECFREAKS 官网](https://www.elecfreaks.com/)。
