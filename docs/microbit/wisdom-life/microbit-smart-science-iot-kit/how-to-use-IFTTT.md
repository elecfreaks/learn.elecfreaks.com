---
sidebar_position: 5
---



# 第四节：Iot套件搭配Thingspeak平台和IFTTT平台制作温度报警器

**请注意，使用IOT:bit连接Wi-Fi网络的时候，请确保您的Wi-Fi网络运行在2.4GHz模式下**

## 如何通过IFTTT发送温度阈值报警电子邮件
---
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/case_ifttt_01.jpg)



在本文中，我们将讨论如何使用 IFTTT 发送 micro:bit 温度预警邮件。

## 什么是IFTTT？ ##
IFTTT是“if this then that”的缩写。事实上，它会对您的网站行为产生一系列连锁反应，目标是“让互联网为您服务”，这将为您带来更多的使用便利。IFTTT 旨在帮助人们利用不同网站的公共 API，将网站（如 Facebook，Twitter 等）或应用程序链接在一起，以完成您的任务。因此，每个人都可以成为整个互联网的程序员而无需编写程序。IFTTT 通过流程连接各种信息，然后集中呈现您所需的信息，解决杂项信息的问题，接收或关注重要信息。根据 IFTTT，“this”的操作被称为“触发器”，也就是说你在某个网站上的行为; 而“that”意味着由连锁反应引起的另一种行为“行为”。这些触发器和操作都基于某个网站，在 IFTTT 中称为“渠道”。整个“if this then that”动作被定义为“任务”。让我用一个例子向你解释一下。在 IFTTT 中，用户可以通过创建和实现“任务”来实现网站连锁反应。例如，如果您刚刚使用 micro:bit 将温度数据上传到 Thingspeak，当温度达到阈值时，它将激活触发器以执行您指定的操作：向您的邮箱发送电子邮件。
通过 IFTTT 发送 micro:bit 温度报警电子邮件
首先，请确保您已成功将温度数据从 micro:bit 上传到 Thingspeak。如果您不知道如何操作，可以阅读本文 如何将 Micro:bit Data 发送到 ThingSpeak IoT Platform 以获取帮助。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/case_ifttt_02.png)

## 第1步：注册IFTTT帐户
---
如果您还没有帐户，请先注册一个 [IFTTT](https://ifttt.com/) 帐户。 

打开 IFTTT 官网之后点击 "Start today",进入登录界面。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/case_ifttt_03.png)

你可以选择多种方式登录 IFTTT，但是我们推荐您通过经常使用的电子邮箱注册一个新的账号，点击“**sign up**”之后会出现注册页面。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/case_ifttt_03_1.png)

在此输入邮箱账号和设置密码之后就会出现注册成功的页面。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/case_ifttt_03_2.png)



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/case_ifttt_03_3.png)

## 第2步：IFTTT Webhooks设置
---
在主页面右上角选择”Create“，创建一个小程序。提示我们可以创建2个小程序。我们点击"If This"后面的”Add“,要添加一个触发器。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/case_ifttt_04.png)

**注意：如果后面您创建超过2个“Applets”，需要修改或者删除“Applets“，方便您下次创建不同的”Applets“，本文后面会介绍到如何删除或者修改"Applets"。**



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/case_ifttt_05_1.png)

搜索“webhooks”。点击”Webhooks“。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/case_ifttt_06.png)

选择触发器。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/case_ifttt_07.png)

命名此任务。这里我们称之为“name”，其中"Event Name"可以自定义。点击”Create trigger“创建完成触发器。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/case_ifttt_08.png)

完成触发设置后，选择"Then That"后面的”Add“。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/case_ifttt_09.png)

搜索“email”并选择”Email“。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/case_ifttt_10.png)



选择”Send me an email“,然后选择”Create action“,然后点击”Continue“之后，最后选择”Finish“.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/case_ifttt_10_1.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/case_ifttt_10_2.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/case_ifttt_10_3.png)

## 第3步：Thingspeak设置
---
在此之前，您必须将温度数据从micro：bit上传到Thingspeak。如果您不知道如何操作，请阅读本文 如何将Micro：bit Data发送到ThingSpeak IoT平台 以获取帮助。首先，创建一个新的ThingHTTP服务。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/case_ifttt_15.png)

这是与IFTTT连接的设置：

 ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/case_ifttt_16.png)

**注意：**
其中①内容为URL，是Web请求的链接，可以从IFTTT中主页面搜索"webhooks"，点击“webhooks”。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/case_ifttt_06.png)



然后点击“Documentation”，将链接中的{event}改为触发事件名称，在本案例中使用的是“name”，将改好的链接复制到ThinkSpeak的①处。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/case_ifttt_16_1.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/case_ifttt_16_2.png)

在Body中，您可以调用Channel中的任何数据。这是将发送到IFTTT的数据，格式如下：{“data”：“%% channel_2009185_field_1 %%”},其中②处数字ID是你已经建立好的 Channel ID.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/case_ifttt_16_3.png)

有关ThingHTTP应用程序的更多详细信息，请参阅:[//ww2.mathworks.cn/help/thingspeak/thinghttp-app.html](https://ww2.mathworks.cn/help/thingspeak/thinghttp-app.html). 

最后，创建一个 React 服务。在 Apps 选项下，选择 React，可以点击 New React，也可以编辑之前创建好的React。

 ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/case_ifttt_17.png)



以下是设置：测试通道2009185（不同的帐户有不同的通道，请将其更改为您自己的通道）以查看温度值是否高于30.如果是，则触发 ThingHTTP 中的 Temp 服务。

 ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/case_ifttt_18.png)

有关React APP的更多详细信息，请参阅 [https://ww2.mathworks.cn/help/thingspeak/react-app.html](https://ww2.mathworks.cn/help/thingspeak/react-app.html).

### 第4步：MakeCode平台编程

我们需要对micro:bit进行编程，参考代码如下：

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/case_ifttt_18_1.png)

程序参考链接：https://makecode.microbit.org/_aLe2ddHwFCs6

### 第5步：测试
到此步骤，您已完成所有设置。现在让我们来测试吧！如果温度尚未达到30度，您可以用手握住micro：bit来提高温度。

我们可以从Thingspeak频道的数据中看到温度超过30m度。

 ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/case_ifttt_19.png)

检查您的电子邮箱，看看您是否收到了IFTTT的电子邮件！

 ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/case_ifttt_20.png)
