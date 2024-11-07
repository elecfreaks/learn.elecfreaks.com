# 行星系列智能积木马达(EF05071)

## 简介

行星系列智能积木马达融合高精度舵机与高效电机特性，打造出前所未有的全能驱动核心。它拥有超高的控制精度、瞬时响应速度及强大扭力，同时内置智能保护系统，包括温度监控、堵转检测与电压稳定保护，确保安全稳定的运行环境，为您的创意项目注入澎湃动力。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-introduction-05.png)



## 产品特性

- **二合一设计**：集成了舵机和电机的功能，实现多功能驱动。
- **高精度控制**：使用编码电机，能够精确控制和反馈当前角度。
- **强大扭力**：提供足够的动力，适合各种需要较大扭力的应用场景。
- **智能保护系统**：内置温度监控、堵转检测和电压稳定保护，确保设备安全稳定运行。
- **耐用线材**：采用RJ11线材，设计防呆、不易断裂，并且可替换。
- **兼容性好**：全面兼容积木结构件，方便与其他积木组件结合使用。
- **稳固安装**：全销孔设计，使得结构安装更加牢固。
- **颜色识别功能**：支持颜色识别系统，有效降低初学者上手难度。

这些特性使得行星系列智能积木马达成为一个多功能、高精度、安全可靠的驱动核心，非常适合用于各种创意项目和机器人制作。

## 主要模块介绍

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-motor02.png)

## 技术规格

|     项目     |             参数             |
| :----------: | :--------------------------: |
|   产品名称   |     行星系列智能积木马达     |
|     SKU      |           EF05071            |
|   工作电压   |           5.0~9.0V           |
|   空载速度   |          125转/min           |
|   停止扭力   |          ≥29  Ncm           |
| 重复定位精度 |             ≤3°              |
|   操作角度   |          360°  * N           |
|   连线接口   |             RJ11             |
|   积木接口   |             支持             |
|   速度读取   |             支持             |
|   角度读取   |             支持             |
|   保护机制   | 温度保护，堵转保护，电压保护 |
| 颜色识别系统 |             支持             |
|     重量     |             31g              |


## 快速入门

打开[https://makecode.microbit.org/](https://makecode.microbit.org/)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode.png)

### 新建项目

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode-new-project-01.png)

输入项目名称并点击创建。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode-new-project-02.png)

进入编辑器界面后我们可以看到Micro:bit Simulator，Toolbox，Workspace。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode-new-project-03.png)

### 添加专属扩展库

为了给哪吒Pro多功能扩展盒编程，我们需要添加一个扩展库。在代码抽屉中找到“扩展”，并点击它。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-02.png)

这时会弹出一个对话框，搜索“nezha pro”，然后点击下载这个代码库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/nezha-v2-add-extension-02.png)

*注意：*如果你得到一个提示说一些代码库因为不兼容的原因将被删除，你可以根据提示继续操作，或者在项目菜单栏里面新建一个项目。

### 软件积木块简介

| 积木块 | 功能 | 参数 |
| ------ | ----- | -------- |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/nezha-v2-block-notes-01.png) | 设置对应接口的电机以指定方向转动。 | 参数一：下拉选项 <br /> 选项：M1、M2、M3、M4 <br /> 参数二：下拉选项 <br /> 选项：顺时针、逆时针 <br />参数三：整数 <br /> 参数四：下拉选项 <br /> 选项：度、圈、秒  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/nezha-v2-block-notes-02.png) | 设置对应接口的电机以指定方向转动指定角度。 | 参数一：下拉选项 <br /> 选项：M1、M2、M3、M4 <br /> 参数二：下拉选项 <br /> 选项：顺时针、逆时针 <br />参数三：整数 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/nezha-v2-block-notes-03.png) | 设置对应接口的电机以指定方向转动 | 参数一：下拉选项 <br /> 选项：M1、M2、M3、M4 <br /> 参数二：下拉选项 <br /> 选项：顺时针、逆时针 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/nezha-v2-block-notes-04.png) | 设置对应接口的电机停止运行 | 参数一：下拉选项 <br /> 选项：M1、M2、M3、M4 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/nezha-v2-block-notes-05.png) | 设置对应接口的电机以指定速度运行 |  参数一：下拉选项 <br /> 选项：M1、M2、M3、M4 <br /> 参数二：整数 <br /> 数值范围：-100~100 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/nezha-v2-block-notes-06.png) | 通过此积木块可以获取当前电机的角度值 |  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/nezha-v2-block-notes-07.png) | 通过此积木块可以获取当前电机的速度 |  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/nezha-v2-block-notes-08.png) | 设置对应接口的电机转动到零位 |  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/nezha-v2-block-notes-09.png) | 设置小车左轮电机和右轮电机的连接接口 | 参数一：下拉选项 <br /> 选项：M1、M2、M3、M4 <br /> 参数二：下拉选项 <br /> 选项：M1、M2、M3、M4  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/nezha-v2-block-notes-10.png) | 设置小车的速度 | 参数一：数值 <br /> 数值范围：-100~100 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/nezha-v2-block-notes-11.png) | 设置小车停止运行 | 参数一：数值 <br /> 数值范围：-100~100 <br /> 参数二：数值 <br /> 数值范围：-100~100 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/nezha-v2-block-notes-12.png) | 设置小车前进或者后退 | 参数一：下拉选项 <br /> 选项：前进、后退 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/nezha-v2-block-notes-13.png) | 设置小车左轮和右轮的速度 | 参数一：数值 <br /> 数值范围：-100~100 <br /> 参数二：数值 <br /> 数值范围：-100~100 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/nezha-v2-block-notes-14.png) | 获取当前固件版本号 |  |

### 硬件连接

如图所示将PlanetX Smart Brick Motor接入到Nezha Breakout Board V2的电机M1接口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/nezha-v2-hardware-wiring.png)

### 程序实例

*** 以当前位置为零点，向顺时针方向运行180度 ***

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/nezha-v2-example-01.png)


#### 参考程序
请参考程序连接：[https://makecode.microbit.org/_E6vawDM7yX87](https://makecode.microbit.org/_E6vawDM7yX87)

你也可以通过以下网页直接下载程序，下载完成后即可开始运行程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_E6vawDM7yX87"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

### 如何将程序下载到micro:bit？

使用USB线连接PC和micro:bit V2。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/connect-microbit.gif)

连接成功后，电脑上会识别出一个名为`MICROBIT`的盘符。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-drive.png)

点击左下角的![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-01.png)，选择`Connect Device`。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-02.png)

点击![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-03.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-04.png)

点击![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-05.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-06.png)


在弹出窗口选择`BBC micro:bit CMSIS-DAP`，然后选择连接，至此，我们的micro:bit就已经连接成功。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-07.png)

点击下载程序。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-08.png)

#### 结果

按键A按下时连接在A口的电机转动顺时针转动180°。


*** 舵机转动到预设零位，向顺时针方向运行180度 ***

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/nezha-v2-example-02.png)


#### 参考程序
请参考程序连接：[https://makecode.microbit.org/_1w9VLsEE8fdi](https://makecode.microbit.org/_1w9VLsEE8fdi)

你也可以通过以下网页直接下载程序，下载完成后即可开始运行程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_1w9VLsEE8fdi"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

#### 结果

按键A按下时连接在A口的电机自动转动到预设零位，按键B按下时连接在A口的电机转动顺时针转动180°。

*** 设定电机转动速度，控制电机启动或停止 ***

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/nezha-v2-example-03.png)


#### 参考程序
请参考程序连接：[https://makecode.microbit.org/_fdiPdcJ71f4X](https://makecode.microbit.org/_fdiPdcJ71f4X)

你也可以通过以下网页直接下载程序，下载完成后即可开始运行程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_fdiPdcJ71f4X"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

#### 结果

设定电机转动速度，通过A、B按键控制电机启动或停止。

*** 读取转动角度 ***

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/nezha-v2-example-04.png)


#### 参考程序

请参考程序连接：[https://makecode.microbit.org/_Axw3drgX6Y3V](https://makecode.microbit.org/_Axw3drgX6Y3V)

你也可以通过以下网页直接下载程序，下载完成后即可开始运行程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_Axw3drgX6Y3V"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

#### 结果

开启电源后，按下A键控制电机转动3秒，然后显示当前角度值。


*** 读取转动速度（圈/秒） ***

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/nezha-v2-example-05.png)


#### 参考程序

请参考程序连接：[https://makecode.microbit.org/_01x60dRX9Ros](https://makecode.microbit.org/_01x60dRX9Ros)

你也可以通过以下网页直接下载程序，下载完成后即可开始运行程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_01x60dRX9Ros"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

#### 结果

开启电源后，电机开始转动，micro:bit的LED矩阵显示当前转速（圈/秒）。

*** 读取固件版本号 ***

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/nezha-v2-example-06.png)


#### 参考程序

请参考程序连接：[https://makecode.microbit.org/_V0tJ15dkhLVq](https://makecode.microbit.org/_V0tJ15dkhLVq)

你也可以通过以下网页直接下载程序，下载完成后即可开始运行程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_V0tJ15dkhLVq"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

#### 结果

开启电源后，micro:bit的LED矩阵显示当前固件版本号。
