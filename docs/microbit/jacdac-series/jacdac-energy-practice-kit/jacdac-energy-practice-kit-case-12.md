# 案例十二：智能台灯

---

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Jacdac%E8%83%BD%E6%BA%90%E5%AE%9E%E8%B7%B5%E5%A5%97%E4%BB%B6/%E6%99%BA%E8%83%BD%E5%8F%B0%E7%81%AF.jpg
)

---

## 简介

利用**Jacdac光敏传感器**实时检测环境光照强度。当环境变暗时，按下Jacdac**外接按钮模块**，LED灯环点亮红色、台灯开启；再次按下按钮，LED熄灭、台灯关闭。只有在光线不足时按钮才起作用——白天按了也没反应，模拟智能台灯"天黑才需要开灯"的逻辑。

---

## 案例目的

1. 认识**光敏传感器**——一种可以精确检测环境光照强度的电子元件。
2. 理解**自动反馈控制**——传感器（眼）→ 程序（脑）→ 执行器（手）的闭环逻辑。
3. 学习**条件触发的状态切换**——只有当环境暗+按下按钮两个条件同时满足，灯才切换开关状态。
4. 了解**智能照明**在现代生活中的应用和节能意义。

---

## 所需材料

| 项目 | 图片 | 数量 |
|---|---|---|
| micro:bit V2 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/microbit%20%E6%AD%A3(1).png) | 1 |
| Jacdac扩展板 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20bit.png) | 1 |
| Jacdac 10cm连接线 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac-smart-exploration-kit-10cm-cable.png) |2|
| Jacdac 25cm连接线 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac-smart-exploration-kit-25cm-cable.png) | 1 |
|Jacdac按钮传感器|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20Button%20sensor.png)|1|
| Jacdac 光敏传感器 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20Light%20Sensor.png) | 1 |
| Jacdac LED灯环 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/jacdac%20LED%20Ring.png) | 1 |
| USB数据线 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/usb%20cable1.png) | 1 |

---


## 搭建步骤

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case12/jacdac-energypractice-kit%2BAssembly%20Diagram%2BCase12.pdf" type="application/pdf" width="100%" height="600px" />

---

## 模型原理说明

### 按钮模块与LED灯环——天黑开灯，天亮自动关

本案例中，外接按钮模块和LED灯环在光敏传感器的条件判断下协同工作：

| 组件 | 作用 | 控制方式 |
|---|---|---|
| 光敏传感器 | 判断白天/黑夜（环境亮度） | 持续读取光线值（阈值30） |
| 按钮模块 | 切换灯的开关状态 | 按一次→开灯（Count=1），再按→关灯（Count=2→归零） |
| LED灯环 | 提供照明光源（红色） | Count=1时亮度100%点亮红色；其余状态熄灭 |

工作流程：光敏传感器如同"门卫"，判断天黑才允许按钮生效。按钮如同"开关"，在天黑环境中按一次亮、再按一次灭——但如果天亮了，灯自动关、计数器归零，一切重置。

>  程序使用一个**Count变量**来追踪按钮被按下的次数——Count=1代表开灯状态，Count=2代表关灯状态并自动归零。这种用变量记录状态的方法叫做**状态机（State Machine）**，是编程中最基础也最重要的设计模式之一。

---

## 传感器原理说明

本案例使用**Jacdac光敏传感器**和**Jacdac按钮模块**作为输入传感器，**Jacdac LED灯环**作为输出执行器。

**光敏传感器**的工作原理：光敏传感器内部含有光敏电阻（LDR）或光电二极管，其电阻值（或反向漏电流）会随环境光照强度的变化而改变——光照越强、电阻越小（电流越大），光照越弱、电阻越大（电流越小）。传感器将光信号转换为模拟电压值，再由ADC（模数转换器）转化为数字信号（0~255）供程序读取。

**条件触发的状态切换逻辑**：本案例的核心在于"双重条件判断"——只有当**光敏值 < 30（天黑）** AND **按钮被按下**两个条件同时满足时，LED灯环才会切换开关状态。如果任意一个条件不满足（例如白天或按钮未被按下），系统不执行任何操作。这种"与逻辑"（AND逻辑）确保了智能台灯只在真正需要时才会亮起，避免白天误开灯造成的能源浪费。

---

## 连接示意图

如下图所示，将micro:bit主板插入Jacdac扩展板，用连接线将光敏传感器、按钮模块和LED灯环采用**菊花链方式**连接在Jacdac扩展板金手指接口上。

![连接示意图](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/%E7%A1%AC%E4%BB%B6%E8%BF%9E%E7%BA%BF%E5%9B%BE/micro%EF%BC%9Abit%20%2B%E8%88%B5%E6%9C%BA%E6%A8%A1%E5%9D%97%2B%E8%88%B5%E6%9C%BA%2BLED%2B%E5%85%89%E6%95%8F.png)

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

![程序截图](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/Images/Case12/jacdac-energypractice-kit%2BProgram%2BCase12.png)

---

## 参考程序链接

[https://makecode.microbit.org/_VLgXsR1WpKbb](https://makecode.microbit.org/_VLgXsR1WpKbb)

你也可以通过以下网页直接下载程序，下载完成后即可开始运行程序。
<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_VLgXsR1WpKbb"
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

在光线充足时（光敏值≥30），按按钮无任何反应——"白天不需要开灯"。用手遮挡光敏传感器模拟天黑（光敏值<30）后，按下按钮：第一次按下，LED灯环点亮红色（亮度100），台灯开启；第二次按下，LED灯环熄灭（亮度0），台灯关闭。

---

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/jacdac-energypractice-kit/%E6%99%BA%E8%83%BD%E5%8F%B0%E7%81%AF.gif)

---

## 思考

1. 智能台灯和之前案例中的太阳能追踪都用到了光敏传感器，它们的使用方式有什么不同？
2. 如果想让台灯在检测到"有人靠近"时才亮（而不只是根据亮度），需要增加什么传感器？

---

## 程序逻辑说明

| 触发条件 | 动作 | 来源 |
|---|---|---|
| 光敏值 < 30（天黑）且按钮按下使 Count=1 | LED灯环点亮红色，亮度100%，台灯开启 | Jacdac 光敏传感器 + Jacdac 按钮模块 |
| 光敏值 < 30（天黑）且按钮按下使 Count=2 | LED灯环熄灭（亮度0），Count归零，台灯关闭 | Jacdac 光敏传感器 + Jacdac 按钮模块 |
| 光敏值 ≥ 30（天亮） | 按钮无效，LED保持熄灭——白天不需要开灯 | Jacdac 光敏传感器 |

---

## 知识拓展：智能照明——让每一度电都用在刀刃上

### 一、照明与能源——你可能不知道的数字

照明是全球电力消耗的重要组成部分：

| 关键数据 | 数值 |
|---|---|
| 全球照明用电占比 | 约 **15%**（约等于全球核电总量） |
| 全球照明碳排放占比 | 约 **5%** |
| LED灯 vs 白炽灯节能比例 | LED比白炽灯节能 **80%~90%** |
| LED灯寿命 | **15,000~50,000小时**（白炽灯仅约1,000小时） |
| 如果全球全部换用LED | 每年可减少约**14亿吨**CO₂排放 |

> 光是"换灯泡"这一项举措，就为全球减排做出了巨大贡献。而智能照明可以在此基础上再节约**30%~50%**的能源——因为灯只在需要时才亮。

### 二、智能照明的发展阶梯

| 年代 | 照明方式 | 控制方式 | 智能化程度 |
|---|---|---|---|
| 远古 | 火把、油灯 | 手动点燃 | 零 |
| 1879年 | 白炽灯（爱迪生） | 手动开关 | 零 |
| 1938年 | 荧光灯 | 手动开关 | 零 |
| 1960s | 声控灯（楼道） | 声音触发 | ★ |
| 1990s | 红外感应灯 | 人体感应 | ★★ |
| 2000s | LED + 定时开关 | 定时控制 | ★★★ |
| 2010s | 智能灯泡（Wi-Fi/蓝牙） | 手机APP + 语音 | ★★★★ |
| 2020s | AI智能照明系统 | 传感器融合 + 机器学习 | ★★★★★ |

你今天做的智能台灯——光敏传感器检测亮度自动开关——站在这条进化链的**第三级**。四十年间，人们走过了从"手动开关"到"自动感应"再到"AI控制"的完整进化。

### 三、智能台灯背后的传感器融合

真实的智能照明系统通常不只依赖一种传感器，而是融合多种传感器共同决策：

| 传感器 | 检测内容 | 在智能照明中的作用 |
|---|---|---|
| 光敏传感器 | 环境亮度 | 判断是否需要开灯 |
| 红外人体传感器（PIR） | 人体移动 | 判断"有没有人"，无人时自动关灯 |
| 毫米波雷达 | 人体存在（即使静止不动） | 比PIR更精准，办公室/教室常用 |
| 光照度传感器 | 精确照度（lux） | 确保工作面达到国家标准照度 |
| 时钟模块 | 日期时间 | 根据日出日落时间自动调整灯光计划 |

>  **思考：** 你今天用**1个**光敏传感器实现了智能台灯的自动开关。如果再加上人体红外传感器和时钟模块，你的台灯可以变得"更聪明"——知道什么时候有人、什么时候天会黑。工程设计的艺术，就是把多个简单传感器组合起来，创造出比单个传感器"聪明得多"的系统。
