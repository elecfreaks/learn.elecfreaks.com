---
sidebar_position: 12
sidebar_label: 案例十二：模拟潮汐发电
---

# 模拟潮汐发电
## 故事导入

小恩和杰克正随着音乐尽情舞动，一名神色匆匆的人跑来，在杰克耳边低语几句。杰克立刻转头对小恩说：“你先在这儿玩，我有点急事得回去！” 话音未落，他便和那人迅速融入熙攘的人群，不见了踪影。
杰克离开后，小恩只能在街上闲逛。走着走着，他听见路人纷纷议论 —— 原来小岛遇上大麻烦了！前几日的风暴损毁了发电设备，如今电力供应告急，急需更换新设备，可大家一时也想不出解决办法 。

--- 

## 教学准备

|     名称     |            图示            |
| :----------: | :--------------------------: |
|   哪吒Pro海洋套件  |   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/nezha-pro-ocean-kit-products-introduction-002.png.png)  |

--- 
## 教学目标 

1.了解什么是潮汐发电。

2.探索能源之间的转换关系。


--- 

## 学习探究

1.你知道什么是潮汐吗？与朋友分享自己知道潮汐发电知识。

2.与同学一起讨论的，生活中电是从哪里的。

--- 
## 搭建步骤

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case12/nezha-pro-ocean-kit-12-1.png.pdf" type="application/pdf" width="100%" height="600px" />

--- 

## 硬件连接

1号电机连接哪吒扩展板“M1”端口；

2号电机连接哪吒扩展板“M2”端口；

双路巡线传感器连接哪吒扩展板“J1”端口；

彩虹灯环连接哪吒扩展板“J4”端口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case12/nezha-pro-ocean-kit-12-2.png.png)

--- 
## 代码编程

进入“[makecode.microbit.org](https://makecode.microbit.org)”，点击**新建项目**。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-07.png)

在弹出窗口输入项目名称并点击**创建**。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-11.png)

点击代码抽屉中的**扩展**。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-09.png)

在弹出界面输入**nezha pro**并点击搜索图标，在显示**nezha pro**软件库后点击。同样的方式加载PlanetX软件库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-10.png)

---
### 示例程序

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case12/nezha-pro-ocean-kit-12-3.png(1).png)

程序链接
[https://makecode.microbit.org/_MFeCcz31mJct](https://makecode.microbit.org/_MFeCcz31mJct)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_MFeCcz31mJct"
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
### 下载程序

使用 USB 线连接 PC 和 micro:bit V2。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual03.gif)

连接成功后，电脑上会识别出一个名为 MICROBIT 的盘符。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual06.png)

点击左下角的![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual07.png)，选择**Connect Device**。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual11.png)

点击![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual08.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual12.png)

点击![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual09.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual13.png)

在弹出窗口选择 **BBC micro:bit CMSIS-DAP**，然后选择**连接**，至此，我们的 micro:bit 就已经连接成功。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual14.png)

点击**下载程序**

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual10.png)

---
## 案例演示

长按micro:bit的按键A控制潮汐发电机向下移动，当双路巡线传感检测潮汐发电机下降到一定位置时，潮汐发电机停止向下移动，并触发潮汐发电机旋转，彩虹灯环亮起，模拟潮汐发电的场景；
长按micro:bit的按键B控制潮汐发电机向上移动，当双路巡线传感器检测没有检测到潮汐发电机，潮汐发电机停止转动，彩虹灯环关闭。

**图片**

---
## 扩展知识

### 潮汐发电

潮汐发电是利用海水潮汐涨落形成的水位差（潮差）或潮流的动能，通过特定装置将其转化为电能的可再生能源利用技术。其核心是对潮汐能量的捕获与转化，具有清洁、可再生、可预测性强等特点。

### 一、原理：潮汐能量的来源与转化

潮汐的形成主要源于月球和太阳对地球的引力（引潮力），其中月球的影响更为显著。地球表面的海水在引潮力作用下产生周期性涨落：白天的涨落称为 “潮”，夜晚的称为 “汐”，合称 “潮汐”。

潮汐发电的能量转化路径分为两类：

**势能利用**：利用涨潮与落潮时的水位差（潮差），通过堤坝形成水库，蓄水后驱动水轮机旋转，带动发电机发电（类似水电站的原理）。

**动能利用**：直接利用潮流（海水水平流动）的动能，通过水下涡轮机（类似风力发电机）捕获能量，驱动发电。

### 二、主要形式
**坝式潮汐电站（势能型）**

最常见的形式。在海湾或河口修建堤坝，形成封闭水库，坝体中安装水轮机和发电机。

**涨潮时**：海水通过闸门进入水库，储存势能；

**落潮时**：水库水位高于外海，放水驱动水轮机发电；

部分电站可双向发电（涨潮和落潮时均能利用水位差）。

**潮流电站（动能型）**

无需建坝，直接在潮流较强的海域（如海峡、水道）放置水下涡轮机。潮流推动涡轮旋转，带动发电机发电，类似 “水下风车”。其优势是对环境影响较小，建设成本相对较低，但依赖较强的潮流速度（通常需≥2 米 / 秒）。

### 三、优点与局限
**优点**

**可再生与清洁**：潮汐能量源于天体引力，取之不尽，且发电过程无燃料消耗、无温室气体排放。

**可预测性强**：潮汐的时间和幅度可通过天文规律精确计算（误差≤10 分钟），发电量稳定，便于电网调度（优于风能、太阳能的随机性）。

**寿命长**：设备（如堤坝、涡轮机）可运行数十年，维护成本较低。

**局限**

**地理限制严格**：坝式电站需潮差≥3 米的海湾 / 河口（全球仅约 200 处符合条件）；潮流电站需强潮流区域，适用范围窄。

**建设成本高**：坝式电站的堤坝工程规模大、投资高（如法国朗斯电站造价相当于同规模火电站的 2 倍）。

**生态影响**：堤坝可能阻断海水自然流动，影响水生生物洄游、产卵，改变局部海洋生态环境。

### 四、典型案例

法国朗斯潮汐电站（1966 年建成）：全球首个大型潮汐电站，装机容量 24 万千瓦，采用双向发电模式，是坝式电站的标杆。

中国江厦潮汐试验电站（1980 年建成）：亚洲最大潮汐电站，位于浙江温岭，装机容量 3.9 万千瓦，为多机组试验性电站。

英国塞文潮汐项目（规划中）：拟利用塞文河大潮汐（潮差达 15 米），规划装机容量可达 320 万千瓦，是全球最大潜在潮汐电站之一。

#### 五、发展前景
随着技术进步（如低成本涡轮机、模块化潮流设备），潮汐发电的经济性正逐步提升。目前全球潮汐发电装机容量约 0.5 吉瓦（GW），远低于风电、太阳能，但在沿海国家（如英国、加拿大、中国）的能源转型中被视为重要补充。未来，结合海洋生态保护的 “低影响设计” 将是其发展核心方向。
