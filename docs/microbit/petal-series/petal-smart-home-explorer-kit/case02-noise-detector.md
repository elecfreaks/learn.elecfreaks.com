---
sidebar_position: 4
sidebar_label: 噪音检测仪
---

# 噪音检测仪

## 简介

本项目将指导您使用micro:bit开发板制作一款简易噪音检测仪。通过板载麦克风模块实时采集环境声音信号，经数据处理后在OLED矩阵显示噪音等级，实现对环境噪音的可视化监测。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/petal-series/petal-smart-home-explorer-kit/images/case-02-01.png)

## 教学目标

了解micro:bit是如何检测噪音强度的。

掌握使用micro:bit控制LED灯的基本编程技能。

## 教学准备

在开始教学之前，请确保您已经准备好以下必要的材料：

| **图片** | **名称** | **数量** | **备注** |
| --- | --- | --- | --- |
| <!-- 套装产品图 -->| 智能家居探索者套装 | 1 |  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit.png) | micro:bit | 1 | 自行准备 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/pc.png) | PC | 1 | 自行准备 |

这些材料将为您提供一个完整的体验，确保您可以顺利地进行后续的操作和学习。如果您已准备好以上内容，我们可以继续进入下一步。

## 课程引入

**声学环境小课堂**
- 正常谈话声：40-60分贝
- 城市交通噪音：70-85分贝（超过80分贝可能损害听力）
- 工业设备噪音：100分贝以上（需佩戴防护设备）

**思考互动**：观察身边的噪音源，思考噪音监测对环境保护和健康管理的意义？

## 项目制作

### 硬件连接

将OLED显示屏连接到花瓣基础扩展板的IIC接口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/petal-series/petal-smart-home-explorer-kit/images/case-02-02.png)

### 编程平台

我们通常使用[图形化编程平台makecode](https://makecode.microbit.org/)对micro:bit进行编程

编程平台入口：[https://makecode.microbit.org/](https://makecode.microbit.org/)

### 新建项目

打开[https://makecode.microbit.org/](https://makecode.microbit.org/)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode.png)

新建项目

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode-new-project-01.png)

输入项目名称并点击创建。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode-new-project-02.png)

### 添加软件库

在makecode编程界面的Toolbox点击Extensions。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-02.png)

在弹出页面搜索`petal`，并点击选择petal的软件库。


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-03.png)


### 编写程序

示例程序：[https://makecode.microbit.org/_XDP81wYyXbf8](https://makecode.microbit.org/_XDP81wYyXbf8)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/petal-series/petal-smart-home-explorer-kit/images/case-02-03.png)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_XDP81wYyXbf8"
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

点击![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-05.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-06.png)


在弹出窗口选择`BBC micro:bit CMSIS-DAP`，然后选择连接，至此，我们的micro:bit就已经连接成功。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-07.png)

点击下载程序。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-08.png)


### 结果

开机后，OLED显示屏显示当前噪音强度，并在LED矩阵上显示柱状图进行提示。



## 扩展知识

噪音作为现代社会的 “隐形污染”，对人类生活、健康和环境的影响广泛且深远。以下从多个维度解析噪音的具体影响：

**一、对人体健康的危害**

1. 听觉系统损伤
听力下降：长期暴露于 85 分贝以上的噪音（如交通、工厂机械）会导致耳蜗毛细胞受损，引发噪声性耳聋。例如，施工现场工人、机场地勤人员的听力损伤率显著高于普通人群。
耳鸣：40% 的长期噪音暴露者会出现持续性耳鸣，影响睡眠和注意力。
2. 心血管系统影响
血压升高：噪音刺激交感神经，导致肾上腺素分泌增加，长期可引发高血压。研究显示，居住在交通主干道旁的人群高血压发病率比安静区域高 15%~20%。
心率异常：突发强噪音（如飞机起降）可能诱发心律失常，增加心脏病发作风险。
3. 神经系统与心理健康
睡眠障碍：30 分贝以上的噪音即可干扰浅睡眠，导致入睡困难、多梦易醒。长期睡眠不足会引发焦虑、抑郁等心理问题。
注意力分散：办公室背景噪音超过 50 分贝时，员工工作效率下降 20%，错误率增加 30%。
4. 其他生理影响
消化系统：噪音可能通过神经内分泌系统抑制胃肠功能，导致消化不良、胃溃疡。
儿童发育：胎儿期或婴幼儿期暴露于高分贝环境，可能影响语言发育和认知能力。

**二、对日常生活的干扰**

1. 沟通与社交障碍
餐厅、商场等公共场所噪音超过 65 分贝时，正常交谈需提高音量（“噪音螺旋” 效应），长期可能引发社交疲劳。
电话会议中背景噪音超过 55 分贝时，信息传递准确率下降 40%。
2. 居住质量下降
城市居民投诉中，建筑噪音（如装修、施工）和交通噪音占比超 60%，严重影响居住舒适度。
机场周边居民因夜间航班噪音，平均睡眠时间比正常人群少 1.5 小时 / 晚。
3. 生态环境破坏
野生动物影响：海洋噪音（如航运、石油勘探）干扰鲸类、海豚的声呐通讯，导致觅食、繁殖受阻，甚至搁浅死亡。
鸟类生存：城市噪音迫使鸟类调整鸣叫声频率，可能降低求偶成功率和领地防御能力。

**三、对生产与安全的威胁**

1. 工业生产效率
工厂噪音超过 85 分贝时，工人误操作率增加 25%，工伤事故风险上升。
噪音环境下，精密仪器的校准精度可能下降，影响产品质量。
2. 公共安全隐患
交通噪音掩盖紧急警报声（如消防车、救护车），可能延误救援时机。
建筑工地噪音干扰周边居民，易引发邻里纠纷甚至群体投诉事件。

**四、经济成本影响**

1. 健康医疗支出
世界卫生组织（WHO）估算，欧洲每年因噪音导致的健康损失超 1000 亿欧元，包括医疗费用、生产力下降等。
美国研究表明，噪音污染每年造成约 400 亿美元经济损失，主要来自听力损伤赔偿和工作效率降低。
2. 城市规划成本
为降低交通噪音，城市需投入巨资建设隔音屏障、低噪音路面等设施。例如，东京高速公路隔音墙建设成本达每公里 2000 万美元。
机场周边房产因噪音贬值约 20%~30%，影响区域经济发展。

**五、噪音污染的应对措施**

1. 个人防护
佩戴降噪耳机或耳塞（适用于通勤、施工现场）。
选择低噪音家电（如一级能效冰箱、静音风扇）。
2. 城市规划优化
实施 “声环境功能区划”，分离居住区与工业区。
推广绿色建筑，使用隔音材料（如双层中空玻璃、吸音墙板）。
3. 技术革新
开发低噪音交通工具（如电动汽车、降噪飞机引擎）。
工业设备安装减震装置、隔音罩，降低声源强度。
4. 政策与法规
各国制定噪音排放标准：如中国《社会生活环境噪声排放标准》规定，居住区夜间噪音限值为 40 分贝。
建立噪音投诉机制，加强施工、交通噪音监管。

**总结**

噪音污染已成为全球关注的环境问题之一，其影响贯穿健康、生活、经济多个层面。减少噪音需要个人习惯的改变、技术创新与政策协同作用，最终实现 “安静城市” 与 “可持续生活” 的目标。正如 WHO 指出：“安静是一种基本人权，也是健康生态的必要条件。”
