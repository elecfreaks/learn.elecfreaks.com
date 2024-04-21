---
sidebar_position: 4
sidebar_label: 软件库说明文档
---

# 软件库说明文档

智能温室套件是以 micro:bit 为主控板，其编程平台采用微软的 makecode 平台，为方便用户编程使用智能温室套件，恩孚团队开发出 iot-environment-kit 库文件，在智能温室套件中包含 8 颗彩虹灯环元器件，所以还需要使用官方 neopixel 库文件。下面将详细介绍该套件使用到每个编程命令的作用和参数范围：

| 功能        | 命令                                                    | 参数                                                         | 详解                                                         |
| ----------- | ------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ESP8266_IoT | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-01.png) | 参数1类型：下拉选项<br />参数1范围：P0、P1、P2、P12、P13、P14、P15、P16、USB_TX、USB_RX<br />参数2类型：下拉选项<br />参数2范围：P0、P1、P2、P8、P13、P14、P15、P16、USB_TX、USB_RX<br />参数3类型：下拉选项<br />参数3范围：115200、57600、38400、31250、28800、19200、14400、9600、4800、2400、1200 | 该命令是设置ESP8266信号发送和接受的默认引脚号以及波特率，使用默认RX:P8,TX:P12,波特率115200即可。 |
|             | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-02.png) | 参数1类型：字符串<br />参数1范围：0-9、a-z、A-Z、特殊字符<br />参数2类型：字符串<br />参数2范围：0-9、a-z、A-Z、特殊字符 | 该命令是设置连接WiFi的名称和密码，用于连接网络。<br />**注意：8266模块暂时不支持5G路由器WIFI信号，请连接2.4G路由器WIKI信号** |
|             | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-03.png) | 参数1类型：下拉选项<br />参数1范围：false、true              | 该命令是判断ESP8266是否连接WiFi成功。                        |
| ThingSpeak  | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-04.png) | 无                                                           | 该命令是设置连接 Thingspeak 平台                             |
|             | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-05.png) | 参数1类型：字符串<br />参数1范围：                           |                                                              |
|             | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-06.png) |                                                              |                                                              |
|             | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-07.png) |                                                              |                                                              |
| Octopus     | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-08.png) |                                                              |                                                              |
| Pins        | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-09.png) |                                                              |                                                              |
| Neopixel    | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-10.png) |                                                              |                                                              |
|             | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-11.png) |                                                              |                                                              |
|             | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-12.png) |                                                              |                                                              |
|             | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-13.png) |                                                              |                                                              |
