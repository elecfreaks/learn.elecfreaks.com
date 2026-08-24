# 案例十四：天气检测机器人

---
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Jacdac%E8%83%BD%E6%BA%90%E5%AE%9E%E8%B7%B5%E5%A5%97%E4%BB%B6/%E5%A4%A9%E6%B0%94%E5%B0%8F%E4%BA%BA.jpg)

---

## 简介

利用**Jacdac温湿度传感器**组成一个便携式气象检测站。按下**按键A**，通过串口读取当前空气湿度并显示；按下**按键B**，读取当前温度并显示。程序持续自动监测环境：当**湿度高于80**时，LED矩阵显示「✕」并蜂鸣报警（湿度过高）；当**温度高于33**时，显示**哭脸**并蜂鸣报警（温度过高）。

---

## 案例目的

1. 认识**温湿度传感器**——气象观测的基础传感器。
2. 理解**阈值报警**机制——当传感器读数超出设定范围时触发声光报警。
3. 了解**气象观测**的基本要素及天气预报的数据来源。
4. 学习**多任务并发**——按键查询 + 自动监测同时运行。

---

## 所需材料

| 项目 | 图片 | 数量 |
|---|---|---|
| micro:bit V2 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/microbit%20%E6%AD%A3(1).png) | 1 |
| Jacdac扩展板 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20bit.png) | 1 |
| Jacdac 25cm连接线 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac-smart-exploration-kit-25cm-cable.png) | 1 |
| Jacdac 温湿度传感器 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Sensor/Jacdac%20HT.png) | 1 |
| USB数据线 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/usb%20cable1.png) | 1 |

---

## 传感器原理说明

### 温湿度传感器

Jacdac温湿度传感器集成了温度检测和湿度检测功能，可同时输出环境温度和空气湿度两个数值。

| 检测内容 | 本案例阈值 | 说明 |
|---|---|---|
| 温度 | >33°C（报警）（注：33°C阈值可根据当地气候调整） | 温度过高→LED显示哭脸+蜂鸣报警 |
| 湿度 | >80%（报警） | 湿度过高→LED显示✕+蜂鸣报警 |

> 温度与湿度密切相关——温度升高，空气可以容纳的水汽量增大。高温高湿的天气会让人感到闷热难耐（"桑拿天"），这也是气象观测中最关注的两个核心参数。


## 搭建步骤

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case14/jacdac-energypractice-kit%2BAssembly%20Diagram%2BCase14.pdf" type="application/pdf" width="100%" height="600px" />

---

## 模型原理说明

### 气象站——从百叶箱到芯片

传统气象站使用**百叶箱**（一种白色百叶窗式木箱）来放置温度计和湿度计——百叶结构保证通风但遮挡阳光直射，确保读数准确。而你手中的这套设备，用一枚指甲盖大小的芯片就完成了同样的工作：

| 对比 | 传统百叶箱 | Jacdac传感器 |
|---|---|---|
| 体积 | 约1立方米 | 约2立方厘米 |
| 读数方式 | 人工目测 | 数字输出 |
| 记录方式 | 手动记录 | 可自动存储+传输 |
| 响应时间 | 数分钟 | 毫秒级 |
| 成本 | 数千元 | 数十元 |

---

## 连接示意图

如下图所示，将micro:bit主板插入Jacdac扩展板，用连接线将温湿度传感器连接在Jacdac扩展板金手指接口上。

![连接示意图](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/%E7%A1%AC%E4%BB%B6%E8%BF%9E%E7%BA%BF%E5%9B%BE/1.png)

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

   > **注意：** 若micro:bit主板初次运行Jacdac程序，请先预装一个空白Jacdac程序至主板，否则跳过此步骤。

   ![连接micro:bit](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/jacdac-smart-exploration-kit-5.png)

2. 连接传感器，MakeCode自动识别并仿真呈现，在仿真区内传感器实时反馈传感器状态。

   ![传感器仿真](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/1jacdac-smart-exploration-kit-6.png)

3. 点击 **"ADD BLOCKS"** 传感器扩展模块。

   > **注意：** 连接新的传感器，重复执行一次"点击'ADD BLOCKS'传感器扩展模块"操作流程。

   ![ADD BLOCKS](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/Step%20Diagram/jacdac-smart-exploration-kit-7.png)

---

## 如图所示编写程序

![程序截图](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case14/jacdac-energypractice-kit%2BProgram%2BCase14.png)

---

## 参考程序链接

[https://makecode.microbit.org/_6io7diRHP9tW](https://makecode.microbit.org/_6io7diRHP9tW)

你也可以通过以下网页直接下载程序，下载完成后即可开始运行程序。
<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_6io7diRHP9tW"
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

按下**按键A**，串口输出当前空气湿度值（停留5秒），方便查看数据；按下**按键B**，串口输出当前温度值（停留5秒）。程序持续在后台自动监测：当**湿度高于80**时，LED矩阵显示「✕」图标并蜂鸣器发出报警音——"湿度过高！"；当**温度高于33**（注：33°C阈值可根据当地气候调整）时，显示哭脸并蜂鸣——"温度太高！"。温湿度恢复正常后报警自动停止。

---

## 思考

1. 本案例的报警是"高于阈值"触发（温度太高、湿度太高→报警），生活中还有哪些场景用"低于阈值"触发报警？（提示：烟雾报警器、水位报警）
2. 如果想把温湿度数据通过无线电发送到另一块micro:bit上远程显示，需要用到什么功能？

---

## 程序逻辑说明

| 触发条件 | 动作 | 来源 |
|---|---|---|
| 按下按键A | 串口输出湿度传感器读数，等待5秒后返回 | micro:bit V2 按键A + Jacdac 温湿度传感器 |
| 按下按键B | 串口输出温度传感器读数，等待5秒后返回 | micro:bit V2 按键B + Jacdac 温湿度传感器 |
| 湿度 > 80（自动监测） | LED显示✕ + 蜂鸣报警——湿度过高警告 | Jacdac 温湿度传感器 |
| 温度 > 33（注：33°C阈值可根据当地气候调整）（自动监测） | LED显示哭脸 + 蜂鸣报警——温度过高警告 | Jacdac 温湿度传感器 |
| 温湿度均正常 | 停止所有报警音 | Jacdac 温湿度传感器 |

---

## 知识拓展：天气预报——从肉眼观天到超级计算机

### 一、气象观测简史

人类对天气的观测和预报，经历了几千年的漫长进化：

| 时期 | 观测方式 | 典型工具 | 预报能力 |
|---|---|---|---|
| 古代 | 观天象、看云识天气 | 肉眼 | 几小时内 |
| 17世纪 | 温度计、气压计发明 | 水银温度计、水银气压计 | 定性判断 |
| 19世纪 | 电报组网、天气图 | 电报+手绘天气图 | 1~2天 |
| 20世纪中 | 无线电探空、气象雷达 | 探空气球、雷达 | 3~5天 |
| 20世纪末 | 气象卫星、超级计算机 | 卫星云图、数值预报 | 7~10天 |
| 21世纪 | AI预报、物联网传感器网 | 智能手机传感器、AI模型 | 15天+ |

### 二、温度与湿度——最亲密的两个气象参数

| 温度 (°C) | 饱和水汽含量 (g/m³) | 体感 |
|---|---|---|
| 0 | 4.8 | 干冷 |
| 10 | 9.4 | 凉爽 |
| 20 | 17.3 | 舒适 |
| 30 | 30.4 | 闷热 |
| 35 | 39.6 | 酷热难耐 |

>  相对湿度 = 实际水汽含量 ÷ 该温度下饱和水汽含量 × 100%。温度升高，空气中的"蓄水能力"增大——这就是为什么夏天闷热（高温+高湿）、冬天干燥（低温+低湿）。

### 三、阈值报警——从气象到生活的通用模式

"超出阈值就报警"这一逻辑在生活中有无数应用：

| 应用场景 | 监测量 | 阈值 | 报警方式 |
|---|---|---|---|
| 烟雾报警器 | 烟雾颗粒浓度 | 超过安全值 | 声光报警 |
| 汽车油量表 | 剩余油量 | 低于10% | 仪表盘警示灯 |
| 手机低电量 | 电池电量 | 低于20% | 弹窗+声音 |
| 洪水预警 | 河流水位 | 超过警戒线 | 广播+短信 |
| 冰箱门报警 | 开门时间 | 超过60秒 | 蜂鸣提醒 |


---
