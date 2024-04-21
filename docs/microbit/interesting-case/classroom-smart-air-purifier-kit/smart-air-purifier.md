---
sidebar_position: 4
sidebar_label: 智能空气净化器
---

# 智能空气净化器

## 功能简介

灰尘传感器能够实时检测室内空气中的灰尘浓度，并将数据传输给 micro:bit。当灰尘浓度超过设定的阈值时，micro:bit 会发出信号，控制电机风扇启动。电机风扇被安装在小房子的一侧，当接收到信号后，它会自动启动并开始吹拂室内空气。通过风扇的运转，室内的空气得以循环流动，从而有效净化室内空气，提高空气质量。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-smart-air-purifier-kit/images/microbit-smart-maker-kit-01.png)

## 课前准备

1 × micro:bit V2

1 × Classroom Smart Air Purifier Kit

1 × micro USB 数据线

1 × Smart Home Material Pack

## 课程目标

（1）了解空气质量指数。

（2）了解影响环境空气质量的因素以及如何提升室内空气质量。

（3）制作空气净化器案例。

## 扩展知识

**空气质量指数**

空气质量指数（Air Quality Index，简称AQI）是定量描述空气质量状况的指数，其数值越大说明空气污染状况越严重，对人体健康的危害也就越大。参与空气质量评价的主要污染物为细颗粒物（PM2.5）、可吸入颗粒物（PM10）、二氧化硫（SO2）、二氧化氮（NO2）、臭氧（O3）、一氧化碳（CO）等六项。AQI 适合于表示城市的短期空气质量状况和变化趋势。AQI分级计算参考的标准是《环境空气质量标准》(GB3095－2012)、《环境空气质量指数(AQI)技术规定(试行)》HJ633-2012，AQI指标从2012年开始在我国推行。

| 空气质量指数 | 空气质量指数级别 | 空气质量指数类别 |  颜色  |                        对健康影响情况                        |                        建议采取的措施                        |
| :----------: | :--------------: | :--------------: | :----: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|     0~50     |       一级       |        优        |  绿色  |               空气质量令人满意，基本无空气污染               |                      各类人群可正常活动                      |
|    51~100    |       二级       |        良        |  黄色  | 空气质量可接受，但某些污染物可能对极少数异常敏感人群健康有较弱影响 |               极少数异常敏感人群应减少户外活动               |
|   101~150    |       三级       |     轻度污染     |  橙色  |         易感人群症状有轻度加剧，健康人群出现刺激症状         | 儿童、老年人及心脏病、呼吸系统疾病患者应减少长时间、高强度的户外锻炼 |
|   151~200    |       四级       |     中度污染     |  红色  |  进一步加剧易感人群症状，可能对健康人群心脏、呼吸系统有影响  | 儿童、老年人及心脏病、呼吸系统疾病患者避免长时间、高强度的户外锻炼，一般人群适量减少户外运动 |
|   201~300    |       五级       |     重度污染     |  紫色  | 心脏病和肺病患者症状显著加剧，运动耐受力降低，健康人群普遍出现症状 | 儿童、老年人及心脏病、肺病患者应停留在室内，停止户外运动，一般人群减少户外运动 |
|     >300     |       六级       |     严重污染     | 褐红色 |   健康人群运动耐受力降低，有明显强烈症状，提前出现某些疾病   | 儿童、老年人及病人应停留在室内，避免体力消耗，一般人群应避免户外活动 |

**空气质量影响因素**

空气质量受多种因素的影响，包括以下几个方面：

1. 大气污染物：包括颗粒物（PM2.5和PM10）、臭氧（O3）、二氧化氮（NO2）、二氧化硫（SO2）等。这些污染物主要来自于工业排放、交通尾气、燃煤和燃油等燃烧过程。
2. 人为活动：工业生产、交通运输、能源消耗等人类活动会产生大量的污染物排放，直接或间接地影响空气质量。
3. 天气条件：气温、风速和风向等天气条件会影响空气质量。例如，高温和低风速会导致污染物在空气中积聚，降低空气质量。
4. 地理位置：地理位置也会对空气质量产生影响。例如，城市周边地区通常受到城市排放的影响，而海洋和山区通常空气质量较好。

以下是一些关于空气质量影响因素的链接，供您参考：

1. 空气质量指数（AQI）：[https://zh.wikipedia.org/wiki/%E7%A9%BA%E6%B0%94%E8%B4%A8%E9%87%8F%E6%8C%87%E6%95%B0](https://zh.wikipedia.org/wiki/空气质量指数)
2. 空气污染物：[https://zh.wikipedia.org/wiki/%E7%A9%BA%E6%B0%94%E6%B1%A1%E6%9F%93%E7%89%A9](https://zh.wikipedia.org/wiki/空气污染物)
3. 大气污染源：[https://zh.wikipedia.org/wiki/%E5%A4%A7%E6%B0%94%E6%B1%A1%E6%9F%93%E6%BA%90](https://zh.wikipedia.org/wiki/大气污染源)
4. 空气质量监测：[https://zh.wikipedia.org/wiki/%E7%A9%BA%E6%B0%94%E8%B4%A8%E9%87%8F%E7%9B%91%E6%B5%8B](https://zh.wikipedia.org/wiki/空气质量监测)

**提升室内空气质量方式**

提升室内空气质量对于我们的健康和舒适非常重要。以下是一些提升室内空气质量的方法：

1. 定期通风：定期打开窗户通风，可以将室内的污染物排出去，引入新鲜空气。特别是在天气良好的时候，尽量多通风。

2. 使用空气净化器：空气净化器可以过滤空气中的颗粒物和污染物，提高空气质量。选择适合房间面积的净化器，并定期清洁和更换滤芯。

3. 减少室内污染源：尽量减少室内的污染源，如烟草烟雾、化学清洁剂、挥发性有机化合物（VOCs）等。选择环保和低挥发性的家具、装修材料和清洁产品。

4. 室内植物：室内植物可以吸收空气中的有害物质，并释放氧气，有助于改善空气质量。常见的空气净化植物包括吊兰、常春藤、芦荟等。

5. 注意保持清洁：保持室内的清洁和卫生，定期清洁地板、家具、窗帘等，减少灰尘和污染物的积聚。

6. 控制湿度：保持适宜的室内湿度，过高的湿度容易滋生霉菌和细菌，而过低的湿度会导致皮肤干燥。使用加湿器或除湿器来调节湿度。

7. 避免使用有害化学物质：尽量避免使用含有甲醛、苯等有害化学物质的产品，如胶水、染料、清洁剂等。

8. 定期清洁空调和过滤器：定期清洁和更换空调和空气过滤器，以保持其正常运行和过滤效果。

这些方法可以帮助改善室内空气质量，但具体措施应根据实际情况和需求进行调整和实施。

## 探究问题

（1）如何检测周围环境空气质量以及确定空气质量等级？

（2）如何确定触发风扇转动和停止转动的条件？

（3）更改电机风扇的位置，寻找最优的室内空气流动方案？

### 硬件连接

将灰尘传感器的 LED IN 连接 IOT:bit  的 P1端口,OUT 连接 P2 端口，电机风扇连接 P3 端口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-smart-air-purifier-kit/images/microbit-smart-maker-kit-02.png)

## 开始编程

### 编程准备

本案例的控制程序将在 micro:bit 官方编程平台：MakeCode上完成编写。请点击并打开 MakeCode 官方链接：https://makecode.microbit.org/。如下图所示：

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-smart-air-purifier-kit/images/microbit-smart-maker-kit-case02-02.png)



第一步需要新建项目文件，请点击“New Project”，输入项目名称并点击“Create”。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-smart-air-purifier-kit/images/microbit-smart-maker-kit-case02-03.png)



第二步需要添加 iot-environment-kit 库文件，点击积木库列表中的"Extensions"，输入“iot-environment-kit”搜索并添加。在返回的编程界面中看到已经将 iot-environment-kit 库文件添加成功。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-smart-air-purifier-kit/images/microbit-smart-maker-kit-case02-04.png)

### 编程示例

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-smart-air-purifier-kit/images/microbit-smart-maker-kit-case02-05.png)



程序示例链接：https://makecode.microbit.org/S78289-58742-68994-22523

## 案例演示

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-smart-air-purifier-kit/images/smart-maker-kit-demo.gif)

## 思考

室内温湿度的变化也是我们很关心的话题。通过本案例的学习，请您举一反三思考使用八爪鱼系列的温湿度传感器检测室内的温湿度数值变化并在达到某一阈值时发出警报的作品如何实现？

## 常见问题

1. 八爪鱼系列的电机风扇需要采用 IOT:bit  扩展板中 USB 充电口供电，否则无法运行。
2. 请将 IOT:bit  的电源开关打开。
3. 在将 micro:bit 插入和拔出 IOT:bit  的插槽的时候，请按住 micro:bit 左右两侧操作，这样更容易操作。

## 更多信息，欢迎访问：

ELECFREAKS 官方网站：[ELECFREAKS 官网](https://www.elecfreaks.com/)。
