---
sidebar_position: 2
sidebar_label: 软件库说明文档
---

# 软件库说明文档

| 积木块类别 | 积木块图示 | 参数 | 积木块功能说明 |
| :-: | :-: | :-: | :-: |
| **行驶控制** | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-tpbot-edu/tpbot-edu-code-01.png) | 参数1类型：整型<br />参数范围：-100~100<br />参数2类型：整型<br />参数范围：-100~100 | 分别设置左轮和右轮的速度 |
|  | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-tpbot-edu/tpbot-edu-code-02.png) | 参数1类型：下拉选项<br />可选项：前进、后退、左转、右转<br />参数2类型：整型<br />参数范围：-100~100<br />参数3类型：整型<br />参数范围：自然数 | 设置小车的行驶方向、速度和持续时间 |
|  | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-tpbot-edu/tpbot-edu-code-03.png) | 参数1类型：下拉选项<br />可选项：前进、后退、左转、右转<br />参数2类型：整型<br />参数范围：-100~100 | 设置小车的行驶方向、速度 |
|  | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-tpbot-edu/tpbot-edu-code-04.png) |  | 设置小车立刻停车 |
| **巡线传感器** | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-tpbot-edu/tpbot-edu-code-05.png) | 参数1类型：下拉选项<br />可选项：左侧、右侧<br />参数2类型：下拉选项<br />可选项：黑色、白色 | 单独判断小车左侧或右侧的巡线头状态 |
|  | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-tpbot-edu/tpbot-edu-code-06.png) | 参数1类型：下拉选项<br />可选项：●●，○●，●○，○○ | 判断小车的巡线头状态 |
|  | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-tpbot-edu/tpbot-edu-code-07.png) | 参数1类型：下拉选项<br />可选项：左侧、右侧<br />参数2类型：下拉选项<br />可选项：黑色、白色 | 单独判断小车左侧或右侧的巡线头状态 | 根据小车左侧或右侧巡线头的状态执行内部程序 |
| **超声波传感器** | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-tpbot-edu/tpbot-edu-code-08.png) | 参数1类型：下拉选项<br />可选项：厘米、英寸 | 获取超声波传感器的返回值 |
|  | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-tpbot-edu/tpbot-edu-code-09.png) | 参数1类型：下拉选项<br />可选项：＜，＞ <br />参数2类型：整型<br />参数范围：自然数 | 获取超声波传感器的返回值 |
| **灯光控制** | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-tpbot-edu/tpbot-edu-code-10.png) | 参数1类型：下拉选项<br />可选项：![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-tpbot-edu/tpbot-edu-code-10-01.png)  | 设置车头灯的颜色为预设颜色 |
|  | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-tpbot-edu/tpbot-edu-code-11.png) | 参数1类型：整型<br />参数范围：0~255，参数2类型：整型<br />参数范围：0~255，参数3类型：整型<br />参数范围：0~255| 设置车头灯的颜色 |
|  | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-tpbot-edu/tpbot-edu-code-12.png) | | 关闭车头灯 |
| **舵机控制** | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-tpbot-edu/tpbot-edu-code-13.png) | 参数1类型：下拉选项<br />可选项：180°，360° <br />参数2类型：下拉选项<br />可选项：S1,S2,S3,S4<br />参数3类型：整型<br />参数范围：0~360 | 控制舵机的转动角度 |
| | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-tpbot-edu/tpbot-edu-code-14.png) | 参数1类型：下拉选项<br />可选项：S1,S2,S3,S4<br />参数2类型：整型<br />参数范围：-100~100 | 控制连续旋转舵机的速度 |
| **PID控制** | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-tpbot-edu/tpbot-edu-code-15.png) | 参数1类型：整型<br />参数范围：20~50 <br />参数2类型：下拉选项<br />可选项：厘米/秒，英寸/秒| 控制小车的行驶速度 |
| | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-tpbot-edu/tpbot-edu-code-16.png) | 参数1类型：整型<br />参数范围：20~50<br />参数2类型：整型<br />参数范围：20~50 参数3类型：下拉选项<br />可选项：厘米/秒，英寸/秒 | 分别设置两小车两个轮子的转动速度 |
| | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-tpbot-edu/tpbot-edu-code-17.png) | 参数1类型：下拉选项<br />可选项：前方，后方<br />参数2类型：整型<br />参数范围：自然数<br />参数3类型：下拉选项<br />可选项：厘米，英寸  | 控制小车的行驶方向和距离 |
| | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-tpbot-edu/tpbot-edu-code-18.png) | 参数1类型：下拉选项<br />可选项：左转，右转，原地左转，原地右转<br />参数2类型：整型<br />参数范围：0~360  | 控制小车的转向方式和转向角度 |
| | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-tpbot-edu/tpbot-edu-code-19.png) | 参数1类型：整型<br />参数范围：自然数<br />参数2类型：下拉选项<br />可选项：厘米，英寸 | 初始化方格的尺寸 |
| | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-tpbot-edu/tpbot-edu-code-20.png) | 参数1类型：整型<br />参数范围：自然数 | 控制小车的行驶指定方格数量 |
