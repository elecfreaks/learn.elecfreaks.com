---
sidebar_position: 5
sidebar_label: 软件库说明文档
---

# 软件库说明文档


## cutebot软件积木块详解

| 积木块 | 功能 | 参数 |
| ------ | ----- | -------- |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/cutebot-block-notes-01.png) | 设置小车左轮或右轮的速度 | 参数一：数值 <br /> 数值范围：-100~100 <br /> 参数二：数值 <br /> 数值范围：-100~100 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/cutebot-block-notes-02.png) | 设置小车以固定速度朝某个方向运行指定时间 | 参数一：下拉选项 <br /> 可选项：前进、后退、左、右 <br /> 参数二：整数 <br /> 数值范围为-100~100 <br /> 参数三：自然数 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/cutebot-block-notes-03.png) | 设置小车全速前进 |  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/cutebot-block-notes-04.png) | 设置小车全速后退 |  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/cutebot-block-notes-05.png) | 设置小车全速左转 |  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/cutebot-block-notes-06.png) | 设置小车全速右转 |  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/cutebot-block-notes-07.png) | 设置小车立刻停车 |  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/cutebot-block-notes-08.png) | 设置小车车头灯为预设颜色 | 参数一：下拉选项 <br /> 可选项：右侧RGB、左侧RGB、全部 <br /> 参数二：下拉选项 <br /> 选项：![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/cutebot-block-notes-08-01.png) |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/cutebot-block-notes-09.png) | 以RGB模式设置小车车头灯颜色 | 参数一：下拉选项 <br /> 可选项：右侧RGB、左侧RGB、全部 <br /> 参数二：自然数 <br /> 数值范围：0 ~ 255 <br /> 参数三：自然数 <br /> 数值范围：0 ~ 255 <br /> 参数四：自然数 <br /> 数值范围：0 ~ 255 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/cutebot-block-notes-10.png) | 关闭小车车头灯 |  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/cutebot-block-notes-11.png) | 判断两个巡线传感器的状态 |  参数一：下拉选项 <br /> 可选项：黑黑、白黑、黑白、白白 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/cutebot-block-notes-12.png) | 分别判断两个巡线传感器的状态 | 参数一：下拉选项 <br /> 可选项：左、右 <br /> 参数二：下拉选项 <br /> 可选项：找到、丢失 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/cutebot-block-notes-13.png) | 当小车的巡线头检测到对应状态时，执行内部程序 | 参数一：下拉选项 <br /> 可选项：左、右 <br /> 参数二：下拉选项 <br /> 可选项：找到、丢失 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/cutebot-block-notes-14.png) | 检测小车前方障碍物的距离 | 参数一：下拉选项 <br /> 可选项：厘米、英寸 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/cutebot-block-notes-15.png) | 设置连接到指定接口的180°舵机转动到指定角度 | 参数一：下拉选项 <br /> 可选项：S1、S2 <br /> 参数二：自然数 <br /> 数值范围：0 ~ 180 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/cutebot-block-notes-16.png) | 当接收到红外信号时，执行内部程序 |  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/cutebot-block-notes-17.png) | 判断接收到的红外信号信息 | 参数一：下拉选项 <br /> 可选项：Menu、Up、Left、Right、Down、OK、Plus、Minus、Back、0、1、2、3、4、5、6、7、8、9 |

## joysticks:bit V2软件积木块详解

| 积木块 | 功能 | 参数 |
| ------ | ----- | -------- |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/joysticks-block-notes-01.png) | 设置手柄震动 | 参数一：自然数 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/joysticks-block-notes-02.png)  | 获取摇杆X轴或者Y轴的返回值 | 参数一：下拉选项 <br /> 选项：X轴、Y轴 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/joysticks-block-notes-03.png)  | 当指定按键处于设定状态时，运行内部程序 | 参数一：下拉选项 <br /> 选项：C、D、E、F <br /> 参数二：下拉选项 <br /> 选项：按下、松开 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/joysticks-block-notes-04.png)  | 判断按键状态 | 参数一：下拉选项 <br /> 选项：C、D、E、F |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/joysticks-block-notes-05.png)  | 初始化手柄 |  |
