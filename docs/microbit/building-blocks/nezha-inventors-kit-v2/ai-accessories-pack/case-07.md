---
sidebar_position: 8
---

# Case 07 AI路牌识别车


## 简介

本课程将带领学生们使用哪吒发明家套装V2和AI扩展包，制作一个AI路牌识别车。通过学习卡片识别技术，学生们将能够让小车根据识别到的路牌信息自动调整行驶路线。

![](./images/ai-accessories-pack-case-07-01.png)

## 教学目标

- 了解卡片识别的基本原理。
- 学习使用AI摄像头进行卡片识别的操作。
- 掌握将卡片识别与小车控制相结合的方法。
- 培养学生的动手实践能力和创新思维。

## 教学准备

[哪吒发明家套装 V2](https://www.elecfreaks.com/nezha-inventor-s-kit-v2-for-micro-bit.html)

[AI扩展包](https://www.elecfreaks.com/nezha-inventor-s-kit-v2-for-micro-bit.html)

电脑

## 教学过程

### 引入

>教师可以引导学生思考以下问题：什么是人脸识别技术？它在现实生活中有哪些应用？如何将这个技术应用于一个有趣的装置中，比如一个人脸追踪装置？通过这些问题，激发学生的兴趣，并引导他们思考如何将技术与创意相结合。

大家好，今天我们将一起制作一个非常有趣的小车。这个小车能够自动识别路牌信息，并根据路牌信息自动调整行驶路线。那么，这个卡片识别小车是怎么实现的呢？让我们一起探索吧！

### 探究

>分组讨论，让学生思考如何用AI摄像头来制作一个AI路牌识别车，重点关注卡片识别功能的使用和无人驾驶场景的引入。

- AI摄像头是如何识别卡片的？
- 如何将AI摄像头与小车控制连接？
- 如何编写程序实现卡片识别与小车控制？
- 如何优化小车的行驶路线和识别准确性？

### 实践

>分组动手，按照自己的设计方案，用积木材料来制作一个AI路牌识别车。

按照自己的设计方案，用积木材料来制作一个AI路牌识别车。

#### 示例

##### 搭建步骤

![](./images/ai-accessories-pack-step-07-01.png)

![](./images/ai-accessories-pack-step-07-02.png)

![](./images/ai-accessories-pack-step-07-03.png)

![](./images/ai-accessories-pack-step-07-04.png)

![](./images/ai-accessories-pack-step-07-05.png)

![](./images/ai-accessories-pack-step-07-06.png)

![](./images/ai-accessories-pack-step-07-07.png)

![](./images/ai-accessories-pack-step-07-08.png)

![](./images/ai-accessories-pack-step-07-09.png)

![](./images/ai-accessories-pack-step-07-10.png)

![](./images/ai-accessories-pack-step-07-11.png)

![](./images/ai-accessories-pack-step-07-12.png)

![](./images/ai-accessories-pack-step-07-13.png)

![](./images/ai-accessories-pack-step-07-14.png)

![](./images/ai-accessories-pack-step-07-15.png)

![](./images/ai-accessories-pack-step-07-16.png)

![](./images/ai-accessories-pack-step-07-17.png)

![](./images/ai-accessories-pack-step-07-18.png)

![](./images/ai-accessories-pack-step-07-19.png)

![](./images/ai-accessories-pack-step-07-20.png)

![](./images/ai-accessories-pack-step-07-21.png)


**搭建完成**

![](./images/ai-accessories-pack-case-01-01.png)

##### 硬件连接

将两个电机分别连接到哪吒扩展板的M1和M2接口，将AI摄像头连接到哪吒扩展板的IIC接口。

 ![](./images/ai-accessories-pack-case-07-02.png)

##### 软件编程

打开编程平台[makecode](https://makecode.microbit.org/#)

新建项目

![](./images/ai-accessories-pack-case-01-03.png)

点击扩展

![](./images/ai-accessories-pack-case-01-04.png)

在搜索栏搜索`nezha`添加哪吒多功能扩展盒的扩展库

![](./images/ai-accessories-pack-case-01-06.png)

在搜索栏搜索`planetx`添加行星系列传感器的扩展库

![](./images/ai-accessories-pack-case-01-07.png)

编写程序

![](./images/ai-accessories-pack-case-07-08.png)


程序链接:[https://makecode.microbit.org/_DhcWbYUAWYcK](https://makecode.microbit.org/_DhcWbYUAWYcK)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_DhcWbYUAWYcK"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>


### 团队合作与展示

学生分成小组，共同完成案例的制作和程序编写。

鼓励学生之间相互合作、交流和分享经验。

每个小组有机会向其他小组展示他们制作的案例。

#### 示例案例效果

小车能够自动识别路牌信息，并根据路牌信息自动调整行驶路线。

![](./images/ai-accessories-pack-case-07.gif)

### 反思

>分组分享，让每组的学生分享自己的制作过程和心得，总结自己遇到的问题和解决办法，评价自己的优点和不足。

### 扩展知识

*** 卡片识别技术的应用场景 ***

在现实生活中，卡片识别技术有着广泛的应用。例如，在物流行业中，可以通过卡片识别技术对快递单信息进行自动化识别和处理，提高物流效率。在医疗行业中，也可以利用卡片识别技术对病历信息进行自动化识别和分析，提高医疗诊断的准确性和效率。此外，卡片识别技术还可以应用于身份认证、支付验证等领域。学生们可以进一步探索这些应用场景，并思考如何通过创新和创意，将这些技术应用于更多领域。

*** 无人驾驶技术 ***

无人驾驶技术是传感器、计算机、人工智能、通信、导航定位、模式识别、机器视觉、智能控制等多门前沿学科的综合体。它涉及到多个领域的知识，包括计算机视觉、控制理论、传感器技术、人工智能等等。无人驾驶技术可以应用于汽车、飞机、火箭、航天飞机等交通工具，具有非常重要的实用价值。

在汽车领域，无人驾驶技术被用于开发自动驾驶汽车。这种汽车使用多种传感器，如雷达、激光雷达、摄像头、惯性测量单元等，来感知周围环境，并通过计算机进行决策和控制。无人驾驶汽车能够自动进行转向、加速和制动等操作，从而实现无人驾驶。

除了汽车，无人驾驶技术还可以应用于飞机领域。例如，无人机可以利用无人驾驶技术进行飞行和导航。它们可以通过遥控器或自主飞行模式进行操作，可以用于航拍、物流配送、农业等领域。

此外，在航天领域，无人驾驶技术也有重要的应用。例如，在探索外太空时，无人驾驶航天器可以利用无人驾驶技术进行自主导航和探索。

总之，无人驾驶技术是一种非常复杂和综合的技术，它涉及到多个领域的知识和技术。随着相关技术的不断发展和进步，无人驾驶技术将会在更多领域得到应用和发展。
