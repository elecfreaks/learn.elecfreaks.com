---
sidebar_position: 4
sidebar_label: 软件库说明文档
---



# 软件库说明文档

micro:bit XGO-Rider 是以 micro:bit 为主控板，其编程平台是采用 makecode 平台，为方便用户编程使用 micro:bit XGO-Rider，恩孚团队专为 micro:bit XGO-Rider 开发了独立的编程库文件。下面将详细介绍每个编程命令的作用和参数范围：

| 功能     | 命令                                                         | 参数                                                         | 详解                                                         |
| -------- | :----------------------------------------------------------- | :----------------------------------------------------------- | ------------------------------------------------------------ |
| 基础控制 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-functions-01.png) | 参数1类型：下拉选项<br />参数1范围：默认P14<br />参数2类型：下拉选项<br />参数2范围：默认P13<br /> | 设置 micro:bit与XGO-Rider 的通信串口，默认 TX:P14，RX:P13。  |
|          | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-quick-start-02.png) | 参数1类型：下拉选项<br />参数1范围：normal mode, cyclical pattern1, cyclical pattern2。<br /> | 设置 XGO-Rider 的表演模式。XGO-Rider 会表演设定的一组动作。  |
|          | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-quick-start-18.png) | 参数1类型：下拉选项<br />参数1范围：playPendulum,AdvanceAndRetreat,<br />upsAndDowns,TetragonalSnake,<br />LiftRotation,CircularSloshing | 设置 XGO-Rider 执行标准动作。                                |
|          | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-quick-start-03.png) | 无                                                           | 设置 XGO-Rider 恢复到初始状态。                              |
|          | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-quick-start-04.png) | 返回值：数字<br />返回值范围：0~100                          | 获取 XGO-Rider 的当前电量。                                  |
|          | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-quick-start-05.png) | 返回值：字符串<br />                                         | 获取 XGO-Rider 的当前固件版本号。                            |
|          | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-quick-start-06.png) | 参数1类型：下拉选项<br />参数1范围：全部、1号、2号、3号、4号<br />参数2类型：下拉选项<br />参数2范围：16种常用颜色 | 设置 XGO-Rider 的灯珠颜色。                                  |
|          | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-quick-start-07.png) | 参数类型：字符串<br />参数范围：a~z,A~Z,_<br /               | 设置 XGO-Rider 的蓝牙名称。                                  |
|          | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-quick-start-08.png) | 参数1类型：数字<br />参数1范围：0~255<br />参数2类型：数字<br />参数2范围：0~255<br />参数3类型：数字<br />参数3范围：0~255<br /> | 设置 XGO-Rider 驱动板板载的彩虹灯环颜色。                    |
| 舵机控制 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-quick-start-09.png) | 参数类型：下拉选项<br />参数范围：打开/关闭<br />            | 设置 XGO-Rider 机身的动态平衡状态是否打开。若打开动态平衡状态，XGO-Rider 会实时调整自身姿态以保持身体平衡。 |
|          | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-quick-start-10.png) | 参数类型：下拉选项<br />参数范围：进入/完成                  | 设置 XGO-Rider 进入标定模式和完成标定。标定的意思指重新设置 XGO-Rider 的舵机初始角度。进入标定状态后，用户可以自行调整舵机角度，完成标定后，XGO-Rider 会在默认站姿下保持标定时的状态。 |
|          | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-quick-start-11.png) | 参数类型：下拉选项<br />参数范围：roll/pitch/yaw             | 获取 XGO-Rider 机身在roll/pitch/yaw三个方向的角度数据。      |
|          | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-quick-start-12.png) | 参数类型：数字<br />参数范围：-20~20                         | 设置 XGO-Rider 机身的上升和下降调整的高度。                  |
|          | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-quick-start-13.png) | 参数1类型：数字<br />参数1范围：-100~100<br />               | 设置 XGO-Rider 机身的左右倾斜角度。                          |
| 运动控制 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-quick-start-14.png) | 参数1类型：下拉选项<br />参数1范围：前进/后退<br />参数2类型：数字<br />参数2范围：0~100<br />参数3类型：数字<br />参数3范围：0~<br /> | 设置 XGO-Rider 以设定速度运行设定时间前进或者后退运动。      |
|          | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-quick-start-15.png) | 参数1类型：下拉选项<br />参数1范围：顺时针/逆时针<br />参数2类型：数字<br />参数2范围：0~100<br />参数3类型：数字<br />参数3范围：0~<br /> | 设置 XGO-Rider 以设定速度运行设定时间顺时针或者逆时针运动。  |
|          | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-quick-start-16.png) | 参数1类型：数字<br />参数1范围：2~4<br />                    | 设置 XGO-Rider 以设定时间周期上下蹲起运动。                  |
|          | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/robot/xgo-rider-kit/images/microbit-xgo-rider-kit-quick-start-17.png) | 参数1类型：数字<br />参数1范围：2~4<br />                    | 设置 XGO-Rider 以设定时间周期左右晃动。                      |
