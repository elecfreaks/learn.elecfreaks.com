---
sidebar_position: 4
sidebar_label: 软件库说明文档
---



# 软件库说明文档

micro:bit 太空科创套装是以哪吒多功能扩展盒V2为核心，以 micro:bit 为主控板，其编程平台是采用微软的 makecode ，为方便用户编程使用 micro:bit 太空科创套装，恩孚团队专为哪吒多功能扩展盒V2 开发独立的编程库文件。下面将详细介绍每个编程命令的作用和参数范围：

| 功能     | 命令                                                         | 参数                                                         | 详解                                                         |
| -------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 基础控制 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-soft01.png) | 参数1类型：下拉选项<br />参数1范围：A/B/C/D<br />参数2类型：下拉选项<br />参数2范围：顺时针<br />参数3类型：数字<br />参数3范围：0~360<br />参数4类型：下拉选项<br />参数4范围：度/圈/秒 | 设置马达以设定方向旋转设定的角度/圈数/时间                   |
|          | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-soft02.png) | 参数1类型：下拉选项<br />参数1范围：A/B/C/D<br />参数2类型：下拉选项<br />参数2范围：顺时针/逆时针/最短路径<br />参数3类型：数字<br />参数3范围：0~360 | 设置马达以设定的方向或者最短路径旋转设定的角度               |
|          | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-soft03.png) | 参数1类型：下拉选项<br />参数1范围：A/B/C/D<br />参数2类型：下拉选项<br />参数2范围：顺时针<br />逆时针 | 设置马达以设定方向旋转                                       |
|          | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-soft04.png) | 参数类型：下拉选项<br />参数范围：A/B/C/D                    | 关闭设置电机                                                 |
|          | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-soft05.png) | 参数1类型：下拉选项<br />参数1范围：A/B/C/D<br />参数2类型：数字<br />参数2范围：0~100 | 设置电机速度为设定的数值                                     |
|          | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-soft06.png) | 参数类型：下拉选项<br />参数范围：A/B/C/D<br />返回值：数字<br />返回值范围：0~360 | 获取设置电机的旋转角度值                                     |
|          | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-soft07.png) | 参数类型：下拉选项<br />参数范围：A/B/C/D<br />返回值：数字<br />返回值范围：0~360 | 获取设置电机的旋转速度                                       |
|          | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-soft08.png) | 参数类型：下拉选项<br />参数范围：A/B/C/D                    | 设置电机归零                                                 |
| 组合控制 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-soft09.png) | 参数1类型：下拉选项<br />参数1范围：A/B/C/D<br />参数2类型：下拉选项<br />参数2范围：A/B/C/D | 指定设置左轮马达和右轮马达                                   |
|          | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-soft10.png) | 参数类型：数字<br />参数范围：0~100                          | 设置左轮和右轮速度为设定值                                   |
|          | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-soft11.png) | 无                                                           | 停止左轮和右轮马达旋转                                       |
|          | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-soft12.png) | 参数类型：下拉选项<br />参数范围：前/后                      | 设置左轮和右轮马达同方向旋转。例如在智能小车案例中，达到前进或后退的效果。 |
|          | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-soft13.png) | 参数1类型：数字<br />参数1范围：0~100<br />参数2类型：数字<br />参数2范围：0~100 | 分别设置左轮马达和右轮马达速度值                             |
| 其他     | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-soft14.png) | 返回值类型：数字<br />返回值范围：0~9组成的编码              | 返回哪吒多功能扩展盒版本号                                   |
