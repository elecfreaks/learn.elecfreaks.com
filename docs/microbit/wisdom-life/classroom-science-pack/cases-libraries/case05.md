---
sidebar_position: 5
sidebar_label: 案例五：探索力的相互作用
---

# 案例五：探索力的相互作用

## 简介

本项目旨在引导学生使用classroom科学套装中的舵机和micro:bit探索力的相互作用。通过编程控制舵机的转动，并通过按键输入改变舵机的运动状态，学生将了解力和运动的关系，以及牛顿第三定律——作用力和反作用力的原理。此项目将加深学生对物理学基础概念的理解和应用。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-05-01.png)

## 教学目标

理解力的相互作用和牛顿第三定律。

学习如何使用micro:bit控制舵机的运动。


## 教学准备

在开始教学之前，请确保您已经准备好以下必要的材料：

| 图片 | 名称 |
| :-: | :-: |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-01-02.png) | classroom科学套装 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-03.png) | micro:bit V2 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-04.png) | 个人电脑（PC） |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-05.png) | USB 数据线 |

这些材料将为您提供一个完整的体验，确保您可以顺利地进行后续的操作和学习。如果您已准备好以上内容，我们可以继续进入下一步。

## 教学过程

### 课程引入

力是物体间相互作用的结果。当我们推一个物体时，它也会给我们一个相等的反作用力。在本节课中，我们将通过控制舵机的转动来探索力的相互作用。

### 探究活动

1. 学习如何使用micro:bit上的编程环境，编写代码来控制舵机的转动。

2. 理解舵机转动的基本原理和力的相互作用。


### 硬件连接

将舵机连接到wukong扩展板的S1接口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-05-06.png)

### 代码编程

*** 添加软件库 ***

打开``makecode.microbit.org``并点击``新建项目``.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-01.png)

点击``扩展``.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-02.png)

搜索``iot-environment-kit``，添加iot-environment-kit软件库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-03.png)

搜索``wukong``，添加wukong软件库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-04.png)

*** 示例代码 ***

1. 当开机时，显示Yes图标。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-05-09.png)

2. 当按键A被按下时，设置连接到S1的180°舵机转动到0度位置，显示大爱心图标。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-05-10.png)

3. 当按键B被按下时，设置连接到S1的180°舵机转动到180度位置，显示小爱心图标。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-05-11.png)


请参考程序连接：[https://makecode.microbit.org/_iE0FRyLoA7ak](https://makecode.microbit.org/_iE0FRyLoA7ak)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_iE0FRyLoA7ak"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

*** 下载程序 ***

使用USB线连接PC和micro:bit V2。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/connect-microbit.gif)

连接成功后，电脑上会识别出一个名为`MICROBIT`的盘符。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-drive.png)

点击左下角的![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-01.png)，选择`Connect Device`。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-02.png)

点击![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-03.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-04.png)

点击![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-05.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-06.png)


在弹出窗口选择`BBC micro:bit CMSIS-DAP`，然后选择连接，至此，我们的micro:bit就已经连接成功。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-07.png)

点击下载程序。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-08.png)

### 团队合作与展示

学生分成小组，共同完成案例的制作和程序编写。

鼓励学生之间相互合作、交流和分享经验。

每个小组有机会向其他小组展示他们制作的案例，并演示。

*** 预期效果：通过按键控制舵机的转动，观察力的相互作用。 ***

（GIF动图）

### 总结与反思

回顾课程内容，提醒学生掌握了哪些知识和技能。

引导学生讨论他们在制作过程中遇到的问题和困难，以及如何解决这些问题。

引导学生思考力的相互作用在现实生活中的应用，如火箭发射、划船等。

## 扩展知识

**力的作用**：力是物体对物体的作用，它可以改变物体的运动状态，包括运动的速度和方向。

**力的相互作用**：根据牛顿第三定律，力是相互作用的，即作用力和反作用力总是成对出现，大小相等，方向相反。

**力的类型**：在推动木块的实验中，舵机对木块施加的是推力，这是一种接触力。此外，还有非接触力，如重力、磁力等。

**力的效果**：力可以产生两种效果：一是改变物体的形状，二是改变物体的运动状态。

**力与运动的关系**：力是改变物体运动状态的原因，但物体若不受力，会保持原来的静止或匀速直线运动状态，这是牛顿第一定律的内容。

**能量转换**：舵机将电能转换为机械能，推动木块移动，这是能量转换的一个实例。

**力的相互作用与日常现象**：力的相互作用不仅存在于物理学的抽象概念中，它在我们的日常生活中无处不在。例如，当我们走路时，我们的脚对地面施加一个向后的力，根据牛顿第三定律，地面也给我们的脚一个相等大小但方向相反的力，这个反作用力推动我们前进。
