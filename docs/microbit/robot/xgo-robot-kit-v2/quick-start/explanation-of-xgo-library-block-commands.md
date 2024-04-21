---
sidebar_position: 5
sidebar_label: XGO 库积木命令讲解
---

# XGO 库积木命令讲解

本文档是为初次接触 XGO 图形化编程的创客而编写的，目的是让用户对 XGO 库每个积木命令有详细的了解。

| 分布         | 积木命令                                                | 说明                                                         |
| ------------ | ------------------------------------------------------- | ------------------------------------------------------------ |
| **基础命令** | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite-v2-xgolibrary-2.png)  | XGO-lite 与 micro:bit 的通信是通过串口进行传输。所以首先需要设置通信串口的 TX(发送)，RX(接收)端口号。<br />XGO-lite V2 默认的 TX-14,RX-13；<br />XGO-lite V1 默认的 TX-2，RX-1；<br />所以在对不同 XGO-lite 版本进行编程时，要选择好对应的 TX,RX 串口号。 |
|              | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite-v2-xgolibrary-1.png)  | XGO-lite 默认有19种标准动作，这些动作在执行的过程中不会被打断。 |
|              | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite-v2-xgolibrary-3.png)  | 获取到的是 XGO-lite 下位机固件驱动的版本号，返回的数据类型为字符串。 |
|              | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite-v2-xgolibrary-4.png)  | 获取到 XGO-lite 当前状态的电池电量。                         |
|              | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite-v2-xgolibrary-5.png)  | 恢复到 XGO-lite 开机稳定后的状态。                           |
|              | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite-v2-xgolibrary-6.png)  | “动态平衡模式”即当 XGO-lite 站立的平面发生晃动时，XGO-lite 会动态调整四足舵机角度，在一定范围内保持机身与地面平行。但是，当执行其他动作时，默认是关闭动态平衡模式。 |
| **设置舵机** | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite-v2-xgolibrary-8.png)  | 将当前 XGO-lite 的所有舵机角度值记录到变量“pose#”中。        |
|              | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite-v2-xgolibrary-11.png) | 将 XGO-lite 的所有舵机角度设置为变量“pose#”中保存的舵机角度值。 |
|              | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite-v2-xgolibrary-9.png)  | 获取 XGO-lite 四条腿每个关节舵机角度值。                     |
|              | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite-v2-xgolibrary-10.png) | 改变“舵机速度”的值，会影响直接控制舵机的积木命令。<br />改变“迈步频率”的值，会影响控制动作的积木命令。 |
|              | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite-v2-xgolibrary-12.png) | 舵机"加载"即让关节舵机产生驱动力，舵机“卸载”即让舵机失去驱动力，该积木命令是作用于 XGO-lite 所有关节舵机。 |
|              | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite-v2-xgolibrary-7.png)  | 该积木命令是作用于 XGO-lite 每条腿的关节舵机。               |
|              | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite-v2-xgolibrary-13.png) | 设置 XGO-lite 的身体高度，输入值为 0 时，身体高度最低，输入值为100 时，身体高度最高。 |
| **运动**     | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite-v2-xgolibrary-14.png) | 设置 XGO-lite 四足不动，身体绕 X\Y\Z 轴往复转动。周期输入值越大，转动速度越慢。 |
|              | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite-v2-xgolibrary-15.png) | 停止 XGO-lite 绕X\Y\Z轴转动动作。                            |
|              | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite-v2-xgolibrary-16.png) | 设置左\右转动。速度(0~150)输入值越大，转动越快；转动时间为输入的时间数值。 |
|              | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite-v2-xgolibrary-17.png) | 设置 XGO-lite 绕 X\Y\Z 转动到输入值的角度（-20~20）。        |
|              | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite-v2-xgolibrary-20.png) | 设置 XGO-lite 四足不动，在 X\Y\Z 方向以输入时间值为周期往复平移运动。 |
|              | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite-v2-xgolibrary-18.png) | 停止 XGO-lite 身体在 X\Y\Z 方向的往复平移运动。              |
|              | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite-v2-xgolibrary-19.png) | 设置 XGO-lite 执行 前进\后退\左移\右移 方向平移运动，周期为输入的时间值。步长(5~25mm)越大，运动幅度越大。 |
|              | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite-v2-xgolibrary-21.png) | 设置 XGO-lite 四足不动，身体向X(-35~35mm) \ Y(-18~18mm) \ Z(75mm~115mm)方向平移在相应方向范围内的距离。 |
|              | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite-v2-xgolibrary-33.png) | 设置 XGO-lite 不同身体高度(11~35mm)执行原地踏步动作，动作执行时间为输入的时间值。 |
|              | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite-v2-xgolibrary-22.png) | 设置 XGO-lite 不同身体高度(11~35mm)执行原地踏步动作。        |
|              | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite-v2-xgolibrary-23.png) | 设置 XGO-lite 腿足尖 X\Y\Z 三个方向的位置。                  |
|              | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite-v2-xgolibrary-24.png) | 设置 XGO-lite 执行 左转\右转 方向转动，速度为输入的值(0~150)。若 XGO-lite 没有执行其他命令，会一直保持旋转运动。 |
|              | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite-v2-xgolibrary-25.png) | 设置 XGO-lite 执行 前进\后退\左移\右移 方向平移运动，输入的步长值越大，速度越快。若 XGO-lite 没有执行其他命令，会一直保持平移运动。 |
|              | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite-v2-xgolibrary-26.png) | 设置 XGO-lite 四条腿的每个关节舵机角度，范围(-70~90)。       |
|              | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite-v2-xgolibrary-27.png) | 设置 XGO-lite 向 前\后\左\右 方向移动，速度为输入的值(0~100)。 |
|              | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite-v2-xgolibrary-28.png) | 设置 XGO-lite 向 左\右 方向转动，速度为输入的值(0~100)。     |
| 机械臂(V2)   | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite-v2-xgolibrary-29.png) | 当 XGO-lite V2 开启自稳定后，机械狗高度变化是，夹爪位置会保持不变。 |
|              | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite-v2-xgolibrary-30.png) | 设置 XGO-lite V2 机械臂在 X 轴方向移动距离，以夹爪为观察对象。 |
|              | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite-v2-xgolibrary-31.png) | 设置 XGO-lite V2 机械臂在 Z 轴方向移动距离，以夹爪为观察对象。 |
|              | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite-v2-xgolibrary-32.png) | 设置 XGO-lite V2 机械臂夹爪向中间收缩距离。                  |
