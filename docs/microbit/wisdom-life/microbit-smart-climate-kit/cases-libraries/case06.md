---
sidebar_position: 6
sidebar_label: 案例六：智能气象站&SmartIoT
---

# 案例六：智能气象站&SmartIoT

## 简介

本课程基于原有智能气候套装案例，新增物联网数据上传与AI 分析环节，引导学生通过搭建智能气候站采集环境数据（温度、湿度、风速、紫外线、灰尘浓度），将数据实时上传至 SmartIoT 平台实现可视化，再通过平台数据导出功能，将数据发送至 AI 助手（如豆包）进行深度分析。课程旨在帮助学生融合 “传感器技术 + 物联网平台 + AI 工具”，建立 “数据采集 - 可视化 - 智能分析” 的完整思维链，进一步理解气候变化监测的技术路径，培养利用科技解决环境问题的能力。

## 教学目标

### 知识目标

巩固气候变化对环境和人类的影响的相关知识，掌握智能气候套装的使用原理；

了解 SmartIoT 平台的核心功能（设备管理、数据上传、可视化）及物联网数据传输的基本逻辑；

理解 “传感器采集→平台上传→AI 分析” 的全流程。

### 技能目标

能独立完成智能气候站硬件搭建，实现多传感器数据采集；

掌握 SmartIoT 平台设备创建、API 配置与数据实时上传的操作；

学会从 SmartIoT 导出数据，并通过 AI 助手完成数据趋势分析、相关性探究；

能结合 OLED 显示、平台可视化、AI 分析结果，综合呈现气候数据结论。

### 态度目标

深化对气候变化的关注，形成 “用数据说话” 的科学探究意识；

培养团队协作解决技术问题（如 WiFi 连接失败、数据上传异常）的能力；

激发利用 “物联网 + AI” 技术应对环境挑战的创新思维。

### 扩展目标

了解物联网平台与 AI 工具协同的实际应用场景（如智慧农业、城市环境监测）；

尝试自主设计数据采集方案（如增加采集频率、扩展传感器类型），优化 AI 分析维度。

## 教学准备

在开始教学之前，请确保您已经准备好以下必要的材料：

| 图片 | 名称 |
| :-: | :-: |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-02.png) | 智能气候套装 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-03.png) | micro:bit V2 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-04.png) | 个人电脑（PC） |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-05.png) | USB 数据线 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-05-05.png) | ELECFREAKS Smart Home Material Pack |

这些材料将为您提供一个完整的体验，确保您可以顺利地进行后续的操作和学习。如果您已准备好以上内容，我们可以继续进入下一步。


## 教学过程

### 课程引入

欢迎各位同学们！今天我们将进入一个引人入胜的主题——气候变化。你是否好奇地想知道，气候变化对我们的生活和环境意味着什么？你是否想了解如何利用科技来探索和解决这一全球性的挑战？那么今天，我们将一起制作一个令人兴奋的智能气候站，通过使用智能气候套装的传感器和设备，我们将探索并分析环境中的温度、湿度和空气质量等数据。我们不仅将了解气候变化的重要性，还将学习如何采取措施来应对这一全球性挑战。让我们一起探索气候变化的奥秘，培养环保意识，并成为改变世界的力量！准备好了吗？让我们开始吧！

### 探究活动

分组讨论：“要实现‘数据采集→云端上传→AI 分析’，我们需要解决哪几个关键问题？”（引导学生说出：硬件如何连 WiFi、数据怎么传到平台、平台怎么导出数据、AI 怎么分析数据）；

任务拆解：每组认领 1 个关键问题，结合原有知识（如传感器连接）推测解决方案，教师汇总并明确本节课实施步骤。

### 硬件连接

风速传感器连接到P1接口，紫外线传感器连接到P2接口，灰尘传感器的LED连接到P3接口，out连接到P4接口，DHT11温湿度传感器连接到P10接口，并将OLED显示屏安装在IoT:bit上。

### SmartIoT平台设置

平台链接：[https://www.smartiot.space/](https://www.smartiot.space/)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-01.png)

## 语言切换

SmartIoT平台支持多种语言（机器翻译），用户可以自己选择对应语言。

点击右上角切换语言按钮。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-02.png)

选择语言进行切换。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-03.png)

如果可选语言中无法满足需求或翻译错误，可以点击下载模板自行翻译。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-04.png)

翻译完成后点击上传，自行上传翻译文件，此翻译功能只能适用于本地机器。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-05.png)


## SmartIoT 账号注册

进入SmartIot 官网，点击Login进入账号登录页面。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-06.png)

点击Create an Account进入注册新账号页面。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-07.png)

填好注册信息(邮箱、用户名、密码)点击Sign Up。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-08.png)

点击Sign Up注册，会发送一封邮件到你填写的账号邮箱。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-09.png)

检查你的邮箱的收件箱或者垃圾箱（可能会被识别为垃圾邮件），打开邮件中的网址以激活你的账号。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_05.png)

注册成功。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_06.png)



## 登陆 SmartIot

在Log in下输入账号密码，并选择登陆。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-10.png)



## SmartIot 平台班级管理

*** 通过班级管理功能可以为学生创建学生账号。 ***

点击class management选项，进入班级管理界面，如果发现需要教师账号激活码，请联系ELECFREAKS官方人员，邮箱**support@elecfreaks.com**。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-21.png)

点击Create Class创建班级。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-22.png)

在弹出页面输入班级名称及录入学生姓名。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-23.png)

**注意：每个名称最多可包含 15 个字符，每行一个名称（请不要留下任何空白行）。**

创建完成班级后，点击图标，进入学生信息管理界面。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-24.png)

点击Add Student可以填写学生信息

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-25.png)

点击Export可以导出全部学生数据

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-26.png)


## User Token和Topic

点击Log in进入设备管理页面，左上角是用户名，个人邮箱，User Token是平台唯一识别码，对应你的账号。全网唯一，不会重复。

*** 注意：User Token 在后续程序使用中需要使用。 ****

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-11.png)



### 代码编程

*** 添加软件库 ***

进入“[makecode.microbit.org](https://makecode.microbit.org/)”，点击新建项目。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/smart-weather-station-kit-add-extension-01.png)

在弹出窗口输入项目名称并点击“创建”。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/smart-weather-station-kit-add-extension-02.png)

点击代码抽屉中的“扩展”。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/smart-weather-station-kit-add-extension-03.png)

在弹出界面输入“IOT”，按下回车键进行搜索，并选择加载IOT软件库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/smart-weather-station-kit-add-extension-04.png)

#### 代码解释


连接SmartIot平台。User Token 为账户唯一识别码，与账户绑定不可修改。
TOPIC，设备唯一识别码，连接时需要指定上传设备。设备号（Topic）顺序排列。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_12.png)

在SmartIot平台上获取这两个数据。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-17.png)

判断平台连接状态是否成功，成功（True），失败（False）。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_14.png)

点击积木块下方`+`可添加上传数据，最多同时上传8个数据.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_17.png)

*** 示例代码 ***

初始化WIFI模块，并连接wifi。

*** 注意：连接Wi-Fi网络的时候，请确保您的Wi-Fi网络运行在2.4GHz模式下 ***

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-06-01.png)

连接到SmartIoT平台，填入` userToken `和` Topic `。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-06-02.png)

初始化OLED显示屏。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-06-03.png)

因为使用到了micro:bit上的LED矩阵屏幕的公用引脚，所以需要禁用LED。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-06-04.png)

获取噪音强度、风速、UV强度、灰尘浓度、温度、湿度等数据。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-06-05.png)

将数据通过OLED显示屏显示出来。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-06-06.png)

并将数据上传到SmartIoT平台。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-06-07.png)

整体程序

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-06-08.png)


请参考程序连接：[https://makecode.microbit.org/_Fc3d3q9mKMsK](https://makecode.microbit.org/_Fc3d3q9mKMsK)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_Fc3d3q9mKMsK"
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



## 添加设备

添加一个新的设备（Create new device），Topic是你的设备识别号（在账号中的唯一设备）。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-12.png)

可以修改设备名称及配置设备（你只能拥有10个设备）。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-13.png)


## 设备页面组件管理

点击左上角Add Component。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-42.png)

在弹出窗口选择组件及尺寸。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-43.png)


### 折线图

最多可显示8组数据，适用于展示数据变化趋势。

可通过 `Start Time` 和 `End Time`设定图表显示的数据范围。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-32.png)

或者通过数据标签选择图表的显示数据。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-33.png)

或者点击`Edit`进入设置界面。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-34.png)

通过勾选标签选择显示数据信息。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-35.png)

### 团队合作与展示

学生分成小组，共同完成案例的制作和程序编写。

鼓励学生之间相互合作、交流和分享经验。

每个小组有机会向其他小组展示他们制作的案例，并演示。

*** 预期效果：连接电源后，在SmartIoT上显示当前风速、紫外线强度、灰尘量、温度、湿度、噪音强度。 ***

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-06-09.png)

上传数据到SmartIoT之后，通过数据导出按钮将上传的数据导出为EXCEL表格。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-06-10.png)

通过Deepseek进行简单的数据分析。

打开[Deepseek](https://chat.deepseek.com/)

通过文件上传按钮将数据上传到Deepseek。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-06-11.png)


输入提示词，让Deepseek基于文件数据进行分析。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-06-12.png)



### 总结与反思

小组整理分析结论：将 AI 给出的趋势图描述、相关性结论，结合 SmartIoT 的可视化图表，形成小组分析报告。

说明 “数据从采集到分析” 的全流程，分享遇到的问题（如 WiFi 调试、数据格式错误）及解决方法；

重点关注数据上传成功率、AI 分析结论的合理性，鼓励创新思路（如调整采集频率优化分析精度）。

知识回顾：梳理 “传感器采集→WiFi 传输→SmartIoT 存储可视化→AI 分析” 的技术链，强调每一步的关键节点（如数据格式、API 密钥）；

问题反思：“如果想让 AI 分析更准确，我们可以优化哪些环节？”（如延长数据采集时间、增加样本量、校准传感器精度）；

行动延伸：鼓励学生课后用气候站监测家庭 / 校园环境，将 AI 分析结论反馈给学校环保社团，提出具体环保建议（如 “午间紫外线强，建议户外活动戴防晒帽”）。
