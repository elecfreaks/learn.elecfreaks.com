# microbit-retro-arcade-quick-start

## 准备步骤

安装电池

![](./images/microbit-retro-arcade-05.png)

打开开关

![](./images/microbit-retro-arcade-06.png)

## 游戏编程指南

欢迎学习micro:bit Retro Arcade！

如需了解更多相关知识，请参考：[https://arcade.makecode.com/](https://arcade.makecode.com/)

点击对应项目，即可进入项目教程，通过编写游戏的过程来学习知识。

![](./images/microbit-retro-arcade-28.png)

>micro:bit V2与扩展板结合，microUSB连接在micro:bit V2上。
>此时如果电源从micro:bit V2端供给，扩展板的电源开关无论开关都会导通。
>扩展板电源开关将控制的是从扩展板端供电的情况。

## 编程平台

Arcade游戏编程平台地址：[https://arcade.makecode.com](https://arcade.makecode.com)

### 编程页面介绍

1. 点击编号1的部分输入项目名称建立一个项目开始编程
2. 编号2以下的部分是一些平台提供的简单教程和社区分享的游戏作品

![](./images/microbit-retro-arcade-08.png)

**编程界面介绍，对于基础入门来说大致先分为3部分需要了解**

1. 在线模拟器：按照代码的逻辑实时模拟运行效果
2. 编程积木栏：我们从这里拖入编程代码进行编程
3. 代码编辑区：我们将代码从积木栏拖出后在这里拼接，完成游戏的形象、界面和逻辑构建

![](./images/microbit-retro-arcade-09.png)

## 快速创作

点击新建项目。

![](./images/microbit-retro-arcade-10.png)

输入项目名称新建项目。

![](./images/microbit-retro-arcade-11.png)


创建精灵，并点击积木块中的灰色矩形打开图片编辑器。

![](./images/microbit-retro-arcade-12.png)

自定义精灵形象或者从图库中选择预设精灵即可。
通过使用按键移动精灵积木块控制精灵移动。

![](./images/microbit-retro-arcade-13.png)

设置画面背景颜色。

![](./images/microbit-retro-arcade-14.png)

为了防止精灵移动时走出屏幕画面外，设置精灵处于屏幕范围内。

![](./images/microbit-retro-arcade-15.png)

# 程序下载步骤

由于目前对于Arcade平台官方而言，micro:bit V2（nRF52833）还在测试阶段，所以我们需要首先去到平台的设置页面将还在试验版本的硬件选项开放出来。

点击编程界面的右上角上的小齿轮，选择关于。

![](./images/microbit-retro-arcade-16.png)

在弹出页面选择实验。

![](./images/microbit-retro-arcade-17.png)

确保Expermental Hardware是已启用状态（只需要设定一次即可）。

![](./images/microbit-retro-arcade-18.png)

接着返回到编程主页，点击左下角的下载按钮，在弹出的选择硬件窗口拉到最底部选择N3。

![](./images/microbit-retro-arcade-19.png)

会得到一个.hex格式的文件，将他拖入到MICROBIT盘符下即可在micro:bit V2 + Microbit Retro Arcade上运行。
