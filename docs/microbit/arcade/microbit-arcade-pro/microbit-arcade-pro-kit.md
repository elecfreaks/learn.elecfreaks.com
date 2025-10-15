# micro:bit Arcade Pro Kit

## 产品介绍

micro:bit Arcade Pro Kit是专为micro:bit V2打造的彩屏手柄式扩展板，它包含一个TFT 240 × 320彩屏、4个方向按钮、AB两个按钮、一个复位按钮、一个菜单键、一个电源开关,兼容jacdac传感器及积木结构。它外观小巧，手感舒适。Microbit Retro Arcade搭配micro:bit V2可以在微软Arcade编程平台实现游戏的脱机玩耍。通过简单趣味的方式帮助孩子自己编写游戏、了解游戏背后的奥义。它还支持自定义游戏角色、多样化场景和剧情设计，使用图形化编程软件，让每个人都能轻松实现有趣的电子创作和无限的游戏创意。
micro:bit Arcade Pro Kit除了作为游戏编程学习机，还可以作为遥控手柄。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/retro-arcade/microbit-arcade-pro-kit/microbit-arcade-pro-kit.png)

## 特点

- 可作为遥控手柄，与机器人小车通讯控制

- 可作为扩展游戏掌机，通过图形化编程创作个性游戏

- 可作为jacdac系列扩展板，外接jacdac传感器

## 基础参数

| 项目 | 参数 |
|---|---|
| 产品名称 | micro:bit Arcade Pro |
| SKU | EF08438 |
| 产品尺寸 | 长140 X 宽82 X 高21mm（不含micro:bit主板） |
| 产品重量 | 102g（含电池、壳料） |
| 接口类型 | Type-C、micro:bit、jacdac |
| 屏幕类型 | TFT LCD屏幕 |
| 屏幕参数 | 240 × 320 |
| 供电方式 | 锂电池供电 |
| 充电电压 | 5V |
| 充电电流 | 1A |
| 最大工作电压 | 4.2V |
| 额定工作电压 | 3.7V |
| 最小工作电压 | 3.5V |
| 待机电流 | 0.03A |
| jacdac供电电压 | 4.2V |
| jacdac接口最大电流 | 1A |
| 充电时间 | 65min |

## 产品清单

arcade pro kit × 1
Type-C × 1
挂绳 × 1
说明书 × 1

## 产品说明

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/retro-arcade/microbit-arcade-pro-kit/microbit-arcade-pro-kit-01.png)

##  开关方式

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/retro-arcade/microbit-arcade-pro-kit/microbit-arcade-pro-kit-02.png)

## 指示灯状态

| 工作状态 | 灯光状态 |
|---|---|
|工作中|绿灯|
|低电量(剩余20%可用电)|红灯|
|电量过低自动关机|红灯闪烁五秒后自动关机|
|充电中|红灯闪烁|
|充满|绿灯|

## 快速入门

欢迎学习Retro Arcade Pro使用教程！本文档只提供一个简单的程序编写示例，用于测试机器处于正常使用状态。

如需了解更多相关知识，请参考：[https://arcade.makecode.com/](https://arcade.makecode.com/)

点击对应项目，即可进入项目教程，通过编写游戏的过程来学习知识。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/expansion-board/microbit-retro-arcade-se/images/microbit-retro-arcade-28.png)

## 编程平台

Arcade游戏编程平台地址：[https://arcade.makecode.com](https://arcade.makecode.com)

### 编程页面介绍

1. 点击编号1的部分输入项目名称建立一个项目开始编程
2. 编号2以下的部分是一些平台提供的简单教程和社区分享的游戏作品

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/expansion-board/microbit-retro-arcade-se/images/microbit-retro-arcade-08.png)

**编程界面介绍，对于基础入门来说大致先分为3部分需要了解**

1. 在线模拟器：按照代码的逻辑实时模拟运行效果
2. 编程积木栏：我们从这里拖入编程代码进行编程
3. 代码编辑区：我们将代码从积木栏拖出后在这里拼接，完成游戏的形象、界面和逻辑构建

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/expansion-board/microbit-retro-arcade-se/images/microbit-retro-arcade-09.png)

## 快速创作

点击新建项目。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/expansion-board/microbit-retro-arcade-se/images/microbit-retro-arcade-10.png)

输入项目名称新建项目。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/expansion-board/microbit-retro-arcade-se/images/microbit-retro-arcade-11.png)


创建精灵，并点击积木块中的灰色矩形打开图片编辑器。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/expansion-board/microbit-retro-arcade-se/images/microbit-retro-arcade-12.png)

自定义精灵形象或者从图库中选择预设精灵即可。
通过使用按键移动精灵积木块控制精灵移动。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/expansion-board/microbit-retro-arcade-se/images/microbit-retro-arcade-13.png)

设置画面背景颜色。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/expansion-board/microbit-retro-arcade-se/images/microbit-retro-arcade-14.png)

为了防止精灵移动时走出屏幕画面外，设置精灵处于屏幕范围内。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/expansion-board/microbit-retro-arcade-se/images/microbit-retro-arcade-15.png)

## 程序下载教程

由于目前对于Arcade平台官方而言，micro:bit V2（nRF52833）还在测试阶段，所以我们需要首先去到平台的设置页面将还在试验版本的硬件选项开放出来。

点击编程界面的右上角上的小齿轮，选择`关于`。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/expansion-board/microbit-retro-arcade-se/images/microbit-retro-arcade-16.png)

在弹出页面选择`实验`。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/expansion-board/microbit-retro-arcade-se/images/microbit-retro-arcade-17.png)

确保Expermental Hardware是已`启用`状态（只需要设定一次即可）。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/expansion-board/microbit-retro-arcade-se/images/microbit-retro-arcade-18.png)

接着返回到编程主页，点击左下角的下载按钮，在弹出的选择硬件窗口拉到最底部选择`micro:bit Retro Shield`。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/expansion-board/microbit-retro-arcade-se/images/microbit-retro-arcade-19.png)

点击下载会得到一个.hex格式的文件，将他拖入到MICROBIT盘符下即可在micro:bit V2 + Microbit Retro Arcade上运行。
