---
sidebar_position: 8
sidebar_label: 如何下载程序
---



# 如何下载程序

## 如何取出PU Robot的micro:bit

为了给PU机器人进行编程，我们需要将micro:bit取出来

**警告:下载自行编写的程序将会覆盖原本的程序，导致无法通过遥控器进行控制，如果需要恢复原始状态，请找到固件下载文档，按教程进行固件更新。**

**警告:PU机器人通电时,请勿强行扭动其关节，这将对伺服电机造成损坏。**

1. 将PU机器人身体旋转90°

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/pu-robot-kit/pu-robot-kit-program-download-01.png)

2. 拧下固定螺丝

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/pu-robot-kit/pu-robot-kit-program-download-02.png)

3. 打开头盖

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/pu-robot-kit/pu-robot-kit-program-download-03.png)

4. 取出micro:bit

## 编程平台

进入“[makecode.microbit.org](https://makecode.microbit.org)”，点击**新建项目**。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-07.png)

## 新建项目

在弹出窗口输入项目名称并点击**创建**。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-11.png)

## 添加软件库

点击代码抽屉中的**扩展**。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-09.png)

在弹出界面输入**pu robot**并点击搜索图标，在显示**pu robot**软件库后点击。同样的方式加载PlanetX软件库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-pu-robot-kit-software-library-01.png)

## 程序编写

将`执行动作`拉取到`当按钮A被按下时`下并选取自主探索。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-pu-robot-kit-program-download-04.png)

程序连接：[https://makecode.microbit.org/_e1c2d338VEFL](https://makecode.microbit.org/_e1c2d338VEFL)

## 程序下载步骤

使用 USB 线连接 PC 和 micro:bit V2。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual03.gif)

连接成功后，电脑上会识别出一个名为 MICROBIT 的盘符。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual06.png)

点击左下角的![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual07.png)，选择**Connect Device**。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual11.png)

点击![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual08.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual12.png)

点击![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual09.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual13.png)

在弹出窗口选择 **BBC micro:bit CMSIS-DAP**，然后选择**连接**，至此，我们的 micro:bit 就已经连接成功。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual14.png)

点击**下载程序**

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual10.png)

## 结果

启动电源后，按下micro:bit上面的按键A，则机器人自动向前行走，当遇到障碍物时会自动避让。
