---
sidebar_position: 7
sidebar_label: 案例七：荷兰风车
---

# 案例七：荷兰风车

---

## 简介

按下micro:bit主板的**按键A**，360°积木舵机开始单方向持续旋转，带动风车叶片转动，模拟荷兰风车的工作状态；按下micro:bit主板的**按键B**，舵机停止转动。

---

## 案例目的

1. 认识360°积木舵机模块，了解其与普通舵机的区别。
2. 学习事件驱动编程的概念——通过按键事件控制程序的启动与停止。
3. 理解顺序执行结构——程序按照代码编写的顺序依次运行。
4. 了解荷兰风车的历史文化及风能利用。

---

## 所需材料

| 项目 | 图片 | 数量 |
|---|---|---|
| micro:bit V2 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/microbit%20%E6%AD%A3(1).png) | 1 |
| Jacdac扩展板 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20bit.png) | 1 |
| Jacdac 25cm连接线 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac-smart-exploration-kit-25cm-cable.png?x-oss-credential=LTAI5t9aG6u4N7PfV6n23XUj%2F20260723%2Fcn-hongkong%2Foss%2Faliyun_v4_request&x-oss-date=20260723T103530Z&x-oss-expires=3600&x-oss-signature-version=OSS4-HMAC-SHA256&x-oss-signature=7a743de279279e3155a0804920c1b4e13b8cf452b8e1c49c3d6b2b97d8496c2e) | 1 |
| Jacdac舵机模块 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Sensor/Jacdac%20Servo.png?x-oss-credential=LTAI5t9aG6u4N7PfV6n23XUj%2F20260723%2Fcn-hongkong%2Foss%2Faliyun_v4_request&x-oss-date=20260723T103330Z&x-oss-expires=3600&x-oss-signature-version=OSS4-HMAC-SHA256&x-oss-signature=4c6faf4c4385b9e34ec2180c882e451d7b9a6ef2c41d3f3e43c3451261aab160) | 1 |
| 360°积木舵机 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Sensor/img_v3_0213q_cfc7e5b2-67bb-45ac-856e-d875221271ag.png?x-oss-credential=LTAI5t9aG6u4N7PfV6n23XUj%2F20260723%2Fcn-hongkong%2Foss%2Faliyun_v4_request&x-oss-date=20260723T103304Z&x-oss-expires=3600&x-oss-signature-version=OSS4-HMAC-SHA256&x-oss-signature=346780dc133aadbb9ccb4e52942baf50879969b01d676ae61539e49c2ad1d203) | 1 |
| USB数据线 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/usb%20cable1.png) | 1 |


---

## 搭建步骤

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case07/jacdac-energypractice-kit%2BAssembly%20Diagram%2BCase07.pdf" type="application/pdf" width="100%" height="600px" />

---

## 模型原理说明

### 360°积木舵机模块

360°积木舵机（连续旋转舵机）与普通180°舵机不同：普通舵机只能转动到指定角度位置（如0°~180°），而360°积木舵机可以连续旋转，通过设置速度值来控制旋转的方向和快慢——正值控制正转、负值控制反转、0表示停止，非常适合模拟风车、车轮等需要持续旋转的场景。

### 荷兰风车

荷兰风车是荷兰的标志性景观，最早出现于13世纪。荷兰地处低洼地带，有"低地之国"之称，全国约四分之一的土地低于海平面。风车最初主要用于排水造田——将低洼地区的积水抽走，把沼泽变为可耕种的农田。后来，风车的用途不断扩展，还被用于研磨谷物、榨油、锯木等工业生产，成为荷兰历史上的"动力引擎"。

---

## 连接示意图

如下图所示，将micro:bit主板插入Jacdac扩展板，将360°积木舵机模块采连接在Jacdac扩展板金手指接口上。

![连接示意图](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/%E7%A1%AC%E4%BB%B6%E8%BF%9E%E7%BA%BF%E5%9B%BE/micro%EF%BC%9Abit%20%2B%E8%88%B5%E6%9C%BA%E6%A8%A1%E5%9D%97%2B%E8%88%B5%E6%9C%BA.png)

---

## 编程软件

[微软 MakeCode](https://makecode.microbit.org/#)

---

## MakeCode 编程

### 步骤1：如何添加 Jacdac 扩展

1. 进入[微软 MakeCode](https://makecode.microbit.org/#)，点击 **"新建项目"**。

   ![新建项目](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-07.png)

2. 在弹出窗口输入项目名称并点击 **"创建"**。

   ![创建项目](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-11.png)

3. 点击代码抽屉中的 **"扩展"**。

   ![扩展](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-09.png)

4. 在弹出界面输入 **"Jacdac"** 并点击搜索图标，选择 Jacdac 软件库，如图所示。

   ![搜索Jacdac](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/jacdac-smart-exploration-kit-3.png)

---

### 步骤2：连接硬件

1. 用数据线将micro:bit主板连接到计算机。

   > ** 注意：** 若micro:bit主板初次运行Jacdac程序，请先预装一个空白Jacdac程序至主板，否则跳过此步骤。

   ![连接micro:bit](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/jacdac-smart-exploration-kit-5.png)

2. 连接传感器，MakeCode自动识别并仿真呈现，在仿真区内传感器实时反馈传感器状态。

   ![传感器仿真](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/1jacdac-smart-exploration-kit-6.png)

3. 点击 **"ADD BLOCKS"** 传感器扩展模块。

   > ** 注意：** 连接新的传感器，重复执行一次"点击'ADD BLOCKS'传感器扩展模块"操作流程。

   ![ADD BLOCKS](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/jacdac-smart-exploration-kit-7.png)

---

## 如图所示编写程序

![程序截图](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case07/jacdac-energypractice-kit%2BProgram%2BCase07.png)

---

## 参考程序链接

[https://makecode.microbit.org/_heHEYF3b2Lm5](https://makecode.microbit.org/_heHEYF3b2Lm5)

你也可以通过以下网页直接下载程序，下载完成后即可开始运行程序。
<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_heHEYF3b2Lm5"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

---

## 结果

按下micro:bit主板的**按键A**，360°积木舵机开始单方向连续旋转，模拟荷兰风车随风转动的场景；按下micro:bit主板的**按键B**，舵机停止转动。

---

## 思考

1. 除了荷兰风车，360°积木舵机还可以模拟哪些生活中的旋转场景？
2. 如果想让风车根据"风力大小"改变转速，可以怎么改进程序？

---


## 知识拓展：荷兰风车——从古老智慧到现代风能

### 一、风车——荷兰的国家名片

提到荷兰，人们最先想到的就是郁金香、风车和木鞋。风车之所以成为荷兰的象征，与荷兰独特的地理条件密不可分。

| 事实 | 数据 |
|---|---|
| 荷兰国土低于海平面的比例 | 约 **26%** |
| 荷兰最高点 | 仅海拔 **322米**（位于与比利时和德国交界处） |
| 历史上荷兰建造过的风车总数 | 超过 **10,000座** |
| 现存传统风车数量 | 约 **1,200座** |
| 小孩堤防风车群（UNESCO世界遗产） | **19座**风车，建于1740年前后 |

荷兰的国名"Netherlands"原意就是"低地之国"。几百年来，荷兰人用风车把低洼地区的积水抽走，硬是在大海和沼泽中"夺"出了一片宜居的土地。荷兰有一句古老的谚语：**"上帝创造了世界，但荷兰人创造了荷兰。"**

---

### 二、风车的工作原理

传统荷兰风车通过以下步骤将风能转化为机械能：

```
风力 → 推动风车叶片旋转 → 通过主轴传递动力 → 齿轮组变速 →
├── 驱动水车/螺旋泵（排水）
├── 驱动磨盘（研磨谷物）
├── 驱动榨油机（榨油）
└── 驱动锯木机（锯木）
```

风车的顶部（风车帽）可以360°旋转，使得叶片始终面向来风方向——这就是为什么荷兰风车看起来像一个"戴帽子"的塔楼。

---

### 三、从风车到风力发电——能源革命的缩影

荷兰风车是人类利用可再生能源的早期典范。今天，风能已成为全球最重要的清洁能源之一：

| 全球风能关键数据 | 数值 |
|---|---|
| 2025年全球新增风电装机 | **167 GW**（吉瓦），同比增长47% |
| 2025年全球累计风电装机 | 约 **1,300 GW** |
| 2024年全球风电发电量 | **2,494 TWh**，占全球电力的8.1% |
| 全球风电+太阳能发电占比（2024年） | 合计占全球电力的 **15%** |
| 目前全球最大单台风力发电机 | 功率达 **26 MW**（兆瓦），叶片长度超过150米 |

> 对比：一座现代大型风力发电机（10 MW）一天的发电量，大约相当于传统荷兰风车连续工作 **100年** 的排水量。技术的进步令人惊叹，但古老的智慧同样值得铭记。

---

### 四、荷兰风车给我们的启示

| 启示 | 说明 |
|---|---|
| **因地制宜** | 荷兰多风、低洼，风车是最优解。解决问题要善于利用本地条件。 |
| **人定胜天** | 面对恶劣的地理环境，荷兰人没有退缩，用智慧创造了生存空间。 |
| **清洁能源的远见** | 几百年前，荷兰人就已经在用零碳排的风能驱动整个国家的工农业。今天全球面临的能源转型挑战，答案或许就藏在历史的智慧中。 |
| **技术与文化的融合** | 风车既是生产工具，也是文化符号。好的技术，应当造福人类，也能融入生活。 |

>  **思考：** 从13世纪的简易风车，到今天海上的巨型风力发电机，人类利用风能的故事延续了800多年。未来的风能技术会是什么样？也许发明它的人，就是现在正在学习编程的你。
