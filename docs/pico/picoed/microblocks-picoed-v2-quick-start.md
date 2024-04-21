---
sidebar_position: 5
---

# MicroBlocks-Pico:ed v2 快速上手

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-microblocks-1.png)

> 本教程将向您介绍在 MicroBlocks 平台与 Pico:ed v2 进行编程交互的方式。

## MicroBlocks 介绍

MicroBlocks 是一种开放的图形化编程平台，可以通过与微控制器进行交互的同时学习编程知识。虽然 MicroBlocks 只是众多图形化编程平台中的一种，但真正让 MicroBlocks 脱颖而出的是它结合了实时编译和自主操作。

它的优秀特性主要有：

* MicroBlocks 是一个实时编程环境，无需等待程序编译和下载，单击代码块，即刻看到运行结果。
* MicroBlocks 可以为每个元器件编写单独脚本并同时运行。
* MicroBlocks 可以在众多微控制器主板上运行，并且它将不同机器上面相同功能的元器件进行归类并用相同的编程方式控制，您编写的代码具有很强的可移植性。
* MicroBlocks 可以读取微控制器主板中的程序，方便您查阅和分享。

> 更多关于 MicroBlocks 编程平台的信息，您可以在其官网进行浏览：[MicroBlocks 官网](https://microblocks.fun/)。

## 编程准备

首先，您需要在电脑浏览器中打开 MicroBlocks 官网，并点击右上角 “**Run**” 按钮，进入图形化编程界面。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-microblocks-2.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-microblocks-3.png)

点击 MicroBlocks 编程平台界面左上角小齿轮图标，在下拉选项中选择 “**updata firmware on board**” 选项，在出现的选项中选择 “**Elecfreaks Pico:ed**” 固件。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-microblocks-4.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-microblocks-5.png)

根据出现的弹窗提示，首先需要按下 Pico:ed v2 背后的 “**BOOTSEL**” 按钮(*其中①为 BOOTSEL 按钮，②为 RESET 按钮*)，并使用 USB 数据线将 Pico:ed v2 与电脑连接，然后点击 MicroBlocks 平台弹出窗口的 “**OK**” 按钮，将驱动程序保存到 “**RPI-RP2**” 磁盘中。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-microblocks-6.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-microblocks-7.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-microblocks-8.png)

经过以上步骤，您已经在 MicroBlocks 平台将 Pico:ed v2 的驱动程序烧录完成了，在开始编程之前还需要将 MicroBlocks 平台与 Pico:ed v2 连接。点击菜单栏中 USB 线母头图标，点击 ”**connect**“ 选项，在弹出的窗口中，选择 ”**PicoArduino**“，（*COM19是本电脑识别端口号，您电脑上面显示的可能不同编号，以您电脑显示为准*）然后点击“**连接**”即可，您可以看到菜单栏 USB 线母头图标已经有绿色背景，证明已经连接成功，接下来您可以快乐的进入编程世界了。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-microblocks-9.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-microblocks-10.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-microblocks-11.png)

## 开始编程

接下来，我们将学习对 Pico:ed v2 板载每个可编程元器件进行编程交互，比如 A/B 按键、7*17 LED 屏幕，蜂鸣器、金手指引脚以及 Pico:ed v2 特有的 LED 指示灯(引脚号为25)，那我们开始吧。

#### 点亮 Pico:ed v2 标志指示灯

点开左边积木库菜单中的 ”**Output**“ 积木库，将 ”**set user LED** “  积木块拖到右边编辑区，”**set user LED**“ 积木块有两种模式（开/关），对应 Pico:ed v2 板载指示灯（亮/灭）。如下图所示：

> 提示：在 MicroBlocks 平台中编程，无需下载程序，只需要点击已拖到编辑区的积木块就可以看到运行效果。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-microblocks-12.png)

#### 点亮 Pico:ed v2 LED 灯矩阵屏幕

对 Pico:ed v2 LED 灯矩阵屏幕进行编程需要添加 “ **TFT** ”库，点击 “**Libraries**” 右边的“**＋**”号，在出现的选项中选择 “**Graphics**” ，然后双击 “**TFT**” 库，或者点击 “**Open**” 就完成将TFT库添加进来了。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-microblocks-13.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-microblocks-14.png)

##### 点亮 7*17 LED 矩阵屏幕上的每一个 LED

MicroBlocks 平台将 Pico:ed v2 7*17 LED 矩阵屏幕的左上角的 LED 灯坐标定义为零点（0，0），右下角的 LED 灯坐标定义为（16，6）。可以使用 “set TFT pixel x()y()to()” 积木块对每个 LED 灯进行点亮或熄灭操作。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-microblocks-16.png)

举例如下：

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-microblocks-15.png)

[依据坐标点亮LED等案例演示程序链接](https://microblocks.fun/run/microblocks.html#scripts=GP%20Scripts%0Adepends%20%27TFT%27%0A%0Ascript%20549%2088%20%7B%0AwhenStarted%0Aforever%20%7B%0A%20%20%27%5Btft%3AsetPixel%5D%27%200%200%20%28colorSwatch%2035%20190%2030%20255%29%0A%20%20waitMillis%20500%0A%20%20%27%5Btft%3AsetPixel%5D%27%2016%200%20%28colorSwatch%2035%20190%2030%20255%29%0A%20%20waitMillis%20500%0A%20%20%27%5Btft%3AsetPixel%5D%27%2016%206%20%28colorSwatch%2035%20190%2030%20255%29%0A%20%20waitMillis%20500%0A%20%20%27%5Btft%3AsetPixel%5D%27%200%206%20%28colorSwatch%2035%20190%2030%20255%29%0A%20%20waitMillis%20500%0A%20%20%27%5Bdisplay%3AmbDisplayOff%5D%27%0A%20%20waitMillis%20500%0A%7D%0A%7D%0A%0A)

TFT 积木库中还有绘制图形的积木块，您可以多尝试。下面举一个很有趣的案例作为参考：

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-microblocks-1.gif)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-microblocks-17.png)

[图形案例程序链接](https://microblocks.fun/run/microblocks.html#scripts=GP%20Scripts%0Adepends%20%27TFT%27%0A%0Ascript%20443%2089%20%7B%0AwhenStarted%0Aforever%20%7B%0A%20%20%27%5Bdisplay%3AmbDisplayOff%5D%27%0A%20%20%27%5Btft%3Arect%5D%27%200%202%203%203%20%28colorSwatch%2035%20190%2030%20255%29%0A%20%20%27%5Btft%3Arect%5D%27%204%201%205%205%20%28colorSwatch%2035%20190%2030%20255%29%0A%20%20%27%5Btft%3Arect%5D%27%2010%200%207%207%20%28colorSwatch%2035%20190%2030%20255%29%0A%20%20waitMillis%20500%0A%20%20%27%5Bdisplay%3AmbDisplayOff%5D%27%0A%20%20%27%5Btft%3AroundedRect%5D%27%200%202%203%203%202%20%28colorSwatch%2035%20190%2030%20255%29%0A%20%20%27%5Btft%3AroundedRect%5D%27%204%201%205%205%202%20%28colorSwatch%2035%20190%2030%20255%29%0A%20%20%27%5Btft%3AroundedRect%5D%27%2010%200%207%207%202%20%28colorSwatch%2035%20190%2030%20255%29%0A%20%20waitMillis%20500%0A%20%20%27%5Bdisplay%3AmbDisplayOff%5D%27%0A%20%20%27%5Btft%3Aline%5D%27%200%200%206%206%20%28colorSwatch%2035%20190%2030%20255%29%0A%20%20%27%5Btft%3Aline%5D%27%200%200%2016%200%20%28colorSwatch%2035%20190%2030%20255%29%0A%20%20%27%5Btft%3Aline%5D%27%2016%200%2016%206%20%28colorSwatch%2035%20190%2030%20255%29%0A%20%20waitMillis%20500%0A%20%20%27%5Bdisplay%3AmbDisplayOff%5D%27%0A%20%20%27%5Btft%3Atriangle%5D%27%201%201%2015%201%206%206%20%28colorSwatch%2035%20190%2030%20255%29%0A%20%20waitMillis%20500%0A%20%20%27%5Bdisplay%3AmbDisplayOff%5D%27%0A%20%20waitMillis%20500%0A%20%20for%20i%2017%20%7B%0A%20%20%20%20local%20%27brightness%27%20%28i%20%2B%200%29%0A%20%20%20%20%27%5Btft%3Aline%5D%27%20%28i%20-%201%29%200%20%28i%20-%201%29%206%20%285%20%2A%20i%29%0A%20%20%7D%0A%20%20waitMillis%201000%0A%7D%0A%7D%0A%0A)

#### A/B 按键编程

按键交互编程是较为简单易学的。可以直接使用 “**Control**” 与 “**Input**” 积木库中的下方指令：

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-microblocks-18.png)

A\B 按键编程举例如下：

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-microblocks-19.png)

[A\B 按键编程案例链接](https://microblocks.fun/run/microblocks.html#scripts=GP%20Scripts%0Adepends%20%27TFT%27%0A%0Ascript%20725%20128%20%7B%0AwhenButtonPressed%20%27A%27%0A%27%5Btft%3Arect%5D%27%200%200%2017%207%20%28colorSwatch%2035%20190%2030%20255%29%0A%7D%0A%0Ascript%20727%20216%20%7B%0AwhenStarted%0Aforever%20%7B%0A%20%20if%20%28buttonB%29%20%7B%27%5Bdisplay%3AmbDisplayOff%5D%27%7D%0A%7D%0A%7D%0A%0A)

#### 蜂鸣器编程

对蜂鸣器编程需要添加 “**Ringtone**” 积木库和 “**Tone**” 积木库。如下图所示：

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-microblocks-20.png)

"**Ringtone**" 积木库中 “**play ringtone**” 积木块可以编写铃声，您可以尝试编写想要的铃声。如果您想寻找已经编写好的铃声，下面的网站链接中收藏了近一万首铃声供您选择。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-microblocks-21.png)

[铃声库网站链接](http://microblocks.fun/mbtest/NokringTunes.txt)

“**Tone**” 积木库中可以设置播放特定音符多长时间，还可以设置播放频率多长时间等。

蜂鸣器编程方式举例如下：

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-microblocks-22.png)

[蜂鸣器案例演示程序链接](https://microblocks.fun/run/microblocks.html#scripts=GP%20Scripts%0Adepends%20%27Ringtone%27%20%27Tone%27%0A%0Ascript%20597%20128%20%7B%0AwhenButtonPressed%20%27B%27%0A%27play%20ringtone%27%20%27Pacman%3Ad%3D16%2Co%3D6%2Cb%3D140%3A%0Ab5%2Cb%2Cf%23%2Cd%23%2C8b%2C8d%23%2Cc%2Cc7%2Cg%2Cf%2C8c7%2C8e%2Cb5%2Cb%2Cf%23%2Cd%23%2C8b%2C8d%23%2C32d%23%2C32e%2Cf%2C32f%2C32f%23%2Cg%2C32g%2C32g%23%2Ca%2C8b%27%0A%7D%0A%0Ascript%20596%20248%20%7B%0AwhenStarted%0Anum%20%3D%200%0A%7D%0A%0Ascript%20781%20239%20%7B%0AwhenButtonPressed%20%27B%27%0Anum%20%2B%3D%2050%0A%27play%20frequency%27%20num%20500%0A%7D%0A%0A)

#### Pico:ed v2 引脚的编程

接下来我们将使用 Pico:ed Starter Kit 套件演示在 MicroBlocks 平台通过 Pico:ed v2 金手指引脚控制 LED 灯。如果您有鳄鱼夹线、led 灯、100Ω电阻等元器件同样可以复现本案例。

Pico:ed Starter Kit 套件购买链接：[Pico:ed Starter Kit 套件](https://www.elecfreaks.com/elecfreaks-pico-ed-starter-kit.html)。

##### 硬件连接

根据下面的图片将你的元件连接起来：

1.将 LED 灯的短引脚与 GND 连接；

2.将 LED 灯的长引脚通过电阻，与 P0 口与 P1 口连接。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-microblocks-23.png)

连接完成后如图：

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-microblocks-24.png)

Pico:ed v2 引脚编程演示案例编程如下：

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-microblocks-25.png)

[Pico:ed v2 引脚编程演示案例链接](https://microblocks.fun/run/microblocks.html#scripts=GP%20Scripts%0A%0Ascript%20576%20175%20%7B%0AwhenStarted%0Aforever%20%7B%0A%20%20digitalWriteOp%200%20true%0A%20%20digitalWriteOp%201%20false%0A%20%20waitMillis%20500%0A%20%20digitalWriteOp%200%20false%0A%20%20digitalWriteOp%201%20true%0A%20%20waitMillis%20500%0A%7D%0A%7D%0A%0A)

案例展示：

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/pico-microblocks-2.gif)

#### 结语

以上就是 Pico:ed v2 在 MicroBlocks 平台的编程方式简单演示，您可以探索更多有趣好玩的编程案例，当然我们也非常欢迎您将案例分享给我们，以下是我们的官媒账号，我们会及时更新有趣的案例，欢迎关注和参与讨论：

Facebook 账号：[https://www.facebook.com/ElecFreaksTech](https://www.facebook.com/ElecFreaksTech)

Discord 群组：[https://discord.gg/WuJ8xPW8jQ](https://discord.gg/WuJ8xPW8jQ?fbclid=IwAR3jqK85hconVmG3LBhdmDN5_kTne63ES7t9OKP6dX15JLsPxbxIKYLiS-g)

YouTube 账号：[https://www.youtube.com/ELECFREAKS](https://www.youtube.com/ELECFREAKS)

Twitter 账号：[https://twitter.com/ELECFREAKS](https://twitter.com/ELECFREAKS?fbclid=IwAR3Q5Ne8aSKifktAFkGJfC1IQcI0X8cgrWk4kBDnAdyG7kIEPlRDXuh4dho)

官方网站：[https://shop.elecfreaks.com](https://shop.elecfreaks.com/?fbclid=IwAR0fYII-qA1lU7TV8ye3Tl9hs4wyHQ0qtHF1WCQnTYF29Okj1lGGaGXeZbk)
