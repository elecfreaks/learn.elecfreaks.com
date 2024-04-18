---
sidebar_position: 6
sidebar_label: 软件积木块介绍
---

# 软件积木块介绍

| 积木块类别 | 积木块图示 | 参数 | 积木块功能说明 |
| :-: | :-: | :-: | :-: |
| **IOT:bit** | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/关于智能气候套装/images/smart-climate-kit-introduction-to-the-functions-of-the-blocks-01.png) | 参数1类型：下拉选项<br />参数1范围：P0、P1、P2、P12、P13、P14、P15、P16、USB_TX、USB_RX<br /><br />参数2类型：下拉选项<br />参数2范围：P0、P1、P2、P8、P13、P14、P15、P16、USB_TX、USB_RX<br />参数3类型：下拉选项<br />参数3范围：115200、57600、38400、31250、28800、19200、14400、9600、4800、2400、1200 | 初始化wifi模块 |
|  | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/关于智能气候套装/images/smart-climate-kit-introduction-to-the-functions-of-the-blocks-02.png) | 参数1类型：字符串<br />参数1范围：0~9、a~z、A~Z、特殊字符<br />参数2类型：字符串<br />参数2范围：0~9、a~z、A~Z、特殊字符 | 该命令是设置连接WiFi的名称和密码，用于连接网络。<br />**注意：8266模块暂时不支持5G路由器WIFI信号，请连接2.4G路由器WIKI信号** | 连接wifi |
| **ThingSpeak** | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/关于智能气候套装/images/smart-climate-kit-introduction-to-the-functions-of-the-blocks-03.png) | 无 | 连接thingspeak平台 |
|  | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/关于智能气候套装/images/smart-climate-kit-introduction-to-the-functions-of-the-blocks-04.png) | 参数1类型：字符串<br />参数1范围：0~9、a~z、A~Z、特殊字符<br />参数2类型：整型<br />参数2范围：0~9 | 设置ThingSpeak平台的Write API KEY，并设置上传数据|
|  | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/关于智能气候套装/images/smart-climate-kit-introduction-to-the-functions-of-the-blocks-05.png) | 无 | 将数据上传到ThingSpeak |
| **OLED** | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/关于智能气候套装/images/smart-climate-kit-introduction-to-the-functions-of-the-blocks-06.png) | 参数1类型：整型<br />参数1范围：0~9 | 初始化OLED显示屏 |
| | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/关于智能气候套装/images/smart-climate-kit-introduction-to-the-functions-of-the-blocks-07.png) | 无 | 清空OLED显示屏 |
| | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/关于智能气候套装/images/smart-climate-kit-introduction-to-the-functions-of-the-blocks-08.png) | 参数1类型：字符串<br />参数1范围：0~9、a~z、A~Z、特殊字符<br /> | OLED显示屏显示字符串 |
| **Sensor** | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/关于智能气候套装/images/smart-climate-kit-introduction-to-the-functions-of-the-blocks-09.png) | 参数1类型：下拉选项<br />参数1范围：P0 ~ P16 | 显示当前风速（m/s） |
| | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/关于智能气候套装/images/smart-climate-kit-introduction-to-the-functions-of-the-blocks-10.png) | 参数1类型：下拉选项<br />参数1范围：P0 ~ P16 | 显示当前紫外线的强度（0~15） |
| | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/关于智能气候套装/images/smart-climate-kit-introduction-to-the-functions-of-the-blocks-11.png) | 参数1类型：下拉选项<br />参数1范围：P0 ~ P16 | 显示当前灰尘浓度（μg/m³） |
| | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/关于智能气候套装/images/smart-climate-kit-introduction-to-the-functions-of-the-blocks-12.png) | 参数1类型：下拉选项<br />参数1范围：temperature（°C）、temperature（°F）、humidity（0~100）<br /> 参数2类型：下拉选项<br />参数1范围：P0 ~ P16 | 显示当前温度（℃）或者湿度（0~100） |
