---
sidebar_position: 7
sidebar_label: 软件库说明
---



# 软件库说明

## 编程平台

进入“[makecode.microbit.org](https://makecode.microbit.org)”，点击**新建项目**。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-07.png)

## 新建项目

在弹出窗口输入项目名称并点击**创建**。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-11.png)

## 添加软件库

点击代码抽屉中的**扩展**。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-09.png)

在弹出界面输入**pu robot**并点击搜索图标，在显示**pu robot**软件库后点击。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/pu-robot-kit/microbit-pu-robot-kit-software-library-01.png)

## 积木块说明

| 功能 | 命令 | 参数 | 详解 |
|:---|:---|:---|:---|
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/pu-robot-kit/microbit-pu-robot-kit-black-01.png) | 设置行走速度范围前进（参数1）后退（参数2） | 参数1：数字量（0~4）参数2：数字量（0~3） | 配置机器人前进 / 后退最大速度 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/pu-robot-kit/microbit-pu-robot-kit-black-02.png) | 超声波传感器返回值(厘米/英寸) |  |  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/pu-robot-kit/microbit-pu-robot-kit-black-03.png) | 机身滚动角 |  |  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/pu-robot-kit/microbit-pu-robot-kit-black-04.png) | 机身俯仰角 |  |  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/pu-robot-kit/microbit-pu-robot-kit-black-18.png) | 音乐节拍 |  |  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/pu-robot-kit/microbit-pu-robot-kit-black-05.png) | 前方距离数组 |  |  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/pu-robot-kit/microbit-pu-robot-kit-black-06.png) | 设置氛围灯（参数1）灯光颜色R：（参数2）G：（参数3）B：（参数4） | 参数1：可选项（1/2/3/4/all）参数2~4：数字量，（0~255） |  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/pu-robot-kit/microbit-pu-robot-kit-black-07.png) | 设置左眼（参数1）右眼（参数2） | 参数1：可选项（开/关）参数2：可选项（开/关） |  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/pu-robot-kit/microbit-pu-robot-kit-black-08.png) | 设置左眼亮度（参数1） | 参数1：数字量，0~100 |  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/pu-robot-kit/microbit-pu-robot-kit-black-09.png) | 设置右眼亮度（参数1） | 参数1：数字量，0~100 |  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/pu-robot-kit/microbit-pu-robot-kit-black-10.png) | 设置（参数1）舵机转动到（参数2）度 | 参数1：可选项（左脚/左腿/右脚/右腿/头部偏移/头部俯仰）参数2：数字量（0-180，默认 90） |  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/pu-robot-kit/microbit-pu-robot-kit-black-11.png) | 平滑设置（参数1）舵机角度为（参数2）步长（参数3） | 参数1：可选项（左脚/左腿/右脚/右腿/头部偏移/头部俯仰）参数2：数字量（0-180，默认 90）参数3：数字量 | 平滑设置舵机角度。以指定步长将指定舵机平滑旋转到目标角度。 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/pu-robot-kit/microbit-pu-robot-kit-black-12.png) | 执行动作（参数1） | 参数1：可选项（打招呼/休息/自主探索/跳跃/跳舞/踢腿） |  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/pu-robot-kit/microbit-pu-robot-kit-black-13.png) | 设置PU机器人（参数1） | 参数1：可选项（向前行走/向后行走/向左侧移/向右侧移/向左转/向右转） |  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/pu-robot-kit/microbit-pu-robot-kit-black-14.png) | 设置（参数1）走（参数2）步以速度（参数3） | 参数1：可选项（向前行走/向后行走/向左侧移/向右侧移/向左转/向右转）参数2：数字量  参数3：数字量 |  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/pu-robot-kit/microbit-pu-robot-kit-black-15.png) | 说话（参数1） | 参数1：字符串 |  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/pu-robot-kit/microbit-pu-robot-kit-black-16.png) | 唱歌（参数1） | 参数1：字符串 |  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/pu-robot-kit/microbit-pu-robot-kit-black-17.png) | 停止动作 | 无 | 设置机器人停止动作 |

---
