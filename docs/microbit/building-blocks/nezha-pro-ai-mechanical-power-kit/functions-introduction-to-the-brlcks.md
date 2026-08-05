---
sidebar_position: 1
sidebar_label: 软件积木块简介
---

# 软件积木块简介

此套装是以哪吒多功能扩展盒V2为核心，以 micro:bit 为主控板，其编程平台是采用微软的 makecode ，为方便用户编程使用，恩孚团队专为哪吒多功能扩展盒V2 开发独立的编程库文件。下面将详细介绍每个编程命令的作用和参数范围：

| 积木块 | 功能 | 参数 |
| ------ | ----- | -------- |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/nezha-v2-block-notes-01.png) | 设置对应接口的电机以指定速度朝指定方向转动。 | 参数一：下拉选项 <br /> 选项：M1、M2、M3、M4 <br />参数二：整数<br /> 数值范围：-100~100 <br /> 参数三：下拉选项 <br /> 选项：顺时针、逆时针 <br />参数四：整数 <br /> 参数五：下拉选项 <br /> 选项：度、圈、秒  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/nezha-v2-block-notes-02.png) | 设置对应接口的电机以指定方向转动指定角度。 | 参数一：下拉选项 <br /> 选项：M1、M2、M3、M4 <br /> 参数二：下拉选项 <br /> 选项：顺时针、逆时针 <br />参数三：整数 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/nezha-v2-block-notes-03.png) | 设置对应接口的电机停止运行 | 参数一：下拉选项 <br /> 选项：M1、M2、M3、M4 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/nezha-v2-block-notes-04.png) | 设置对应接口的电机以指定速度运行 |  参数一：下拉选项 <br /> 选项：M1、M2、M3、M4 <br /> 参数二：整数 <br /> 数值范围：-100~100 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/nezha-v2-block-notes-05.png) | 通过此积木块可以获取当前电机的相对角度值 | 参数一：下拉选项 <br /> 选项：M1、M2、M3、M4 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/nezha-v2-block-notes-06.png) | 通过此积木块可以获取当前电机的绝对角度值 | 参数一：下拉选项 <br /> 选项：M1、M2、M3、M4 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/nezha-v2-block-notes-07.png) | 通过此积木块可以获取当前电机的速度 | 参数一：下拉选项 <br /> 选项：M1、M2、M3、M4 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/nezha-v2-block-notes-08.png) | 设置对应接口的电机当前位置为相对角度的零位 | 参数一：下拉选项 <br /> 选项：M1、M2、M3、M4 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/nezha-v2-block-notes-09.png) | 设置对应接口的电机转动到零位 | 参数一：下拉选项 <br /> 选项：M1、M2、M3、M4 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/nezha-v2-block-notes-10.png) | 设置小车左轮电机和右轮电机的连接接口 | 参数一：下拉选项 <br /> 选项：M1、M2、M3、M4 <br /> 参数二：下拉选项 <br /> 选项：M1、M2、M3、M4  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/nezha-v2-block-notes-11.png) | 设置小车的速度及行驶方向 | 参数一：数值 <br /> 数值范围：-100~100 参数二：下拉选项 <br /> 选项：前、后|
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/nezha-v2-block-notes-12.png) | 设置小车停止运行 |  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/nezha-v2-block-notes-13.png) | 设置车轮的周长 | 参数一：整数 <br /> 参数二：下拉选项 <br /> 选项：厘米、英寸 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/nezha-v2-block-notes-14.png) | 设置小车以指定速度向指定方向移动指定距离 | 参数一：数值 <br /> 数值范围：-100~100 <br /> 参数二：下拉选项 <br /> 选项：前、后 参数三：整数 <br /> 参数四：下拉选项 <br /> 选项：度、圈、秒、厘米、英寸 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/nezha-v2-block-notes-15.png) | 设置小车左轮和右轮的速度 | 参数一：数值 <br /> 数值范围：-100~100 <br /> 参数二：数值 <br /> 数值范围：-100~100 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/nezha-v2-block-notes-16.png) | 设置轮距（两轮之间的距离） | 参数一：数值 <br /> 参数二：下拉选项 <br /> 选项：厘米、英寸  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/nezha-v2-block-notes-17.png) | 设置组合旋转校准系数 | 参数一：数值 <br /> |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/nezha-v2-block-notes-18.png) | 设置电机旋转角度及转动速度 | 参数一：数值 <br /> 参数二：数值 <br /> 数值范围：-100~100 <br /> |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/nezha-v2-block-notes-19.png) | 获取当前固件版本号 |  |
