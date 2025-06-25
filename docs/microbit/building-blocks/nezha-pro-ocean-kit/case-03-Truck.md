---
sidebar_position: 3
sidebar_label: 案例三：运输车

---

# 运输车
## 故事导入
晨雾还未散尽，小恩望着堆在镇口的成箱物资发愁 —— 三十桶淡水、五十多箱粮食、半捆麻绳，还有父亲留下的那箱航海仪器、众多的生活物资，靠他独自搬运港口，至少需要往返很多趟。请小伙伴想方法帮助小恩搬运物资到港口。

--- 

## 教学准备

|     名称     |            图示            |
| :----------: | :--------------------------: |
|   哪吒Pro海洋套件  |   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/nezha-pro-ocean-kit-products-introduction-002.png.png)  |

--- 
## 教学目标 
1.认识电位器传感器。

2.认识碰撞传感器。

3.了解海洋运输发展历史与特点。

--- 

## 学习探究

1、探索小车转向的原理。

2、分享汽车发展的历史。

3、与小伙伴分享自己想象的未来运输车有哪些功能

## 搭建步骤

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case03/nezha-pro-ocean-kit-step-03-1.png.pdf" type="application/pdf" width="100%" height="600px" />

--- 

## 硬件连接
使用RJ11线将2号马达连接到哪吒扩展板的“M1”端口上；
使用RJ11线将1号马达连接到哪吒扩展板的“M2”端口上；
使用RJ11线将电位器传感器连接到哪吒扩展板的“J1”端口上；
使用RJ11线将1号碰撞传感器连接到哪吒扩展板的“J2”端口上；
使用RJ11线将2号碰撞传感器连接到哪吒扩展板的“J3”端口上；

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case03/nezha-pro-ocean-kit-step-03-3.png.png)

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

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case03/nezha-pro-ocean-kit-step-03-2.png.png)

程序链接
[https://makecode.microbit.org/_cYtXh0TfwbfK](https://makecode.microbit.org/_cYtXh0TfwbfK)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_cYtXh0TfwbfK"
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

按1号碰撞传感器，小车向前进，按2号碰撞传感器，小车向后退，通过电位传感器的控制小车速度。

**图片**

---
### 扩展知识

###海洋运输：连接世界的蓝色动脉

#### 一、海洋运输的历史演进

**古代至中世纪（帆船时代）**

技术特征：依靠风力驱动，典型如中国明代宝船、阿拉伯三角帆船、欧洲卡拉维尔帆船。

贸易网络：丝绸之路的海上分支（印度洋 - 太平洋航线）、地中海贸易圈（罗马帝国谷物运输）。

局限：航速慢（约 5-7 节），依赖季风，航线受地理限制。

**工业革命至 20 世纪（蒸汽与机械化时代）**

技术突破：1807 年富尔顿蒸汽船问世，19 世纪铁壳船取代木质船，20 世纪集装箱化（1956 年麦克莱恩首次使用集装箱）。

影响：1900 年全球海运贸易量约 5 亿吨，二战后集装箱运输使成本降低 90%，推动全球化分工。

**21 世纪至今（智能化与绿色转型）**

现状：2023 年全球海运承担约 80% 的国际贸易量（按吨公里计算），商船队总吨位超 20 亿吨（UNCTAD 数据）。

趋势：自动化港口（如上海洋山港）、LNG 动力船舶、数字化航运管理（区块链提单）。

#### 二、海洋运输的主要方式与船舶类型
|运输方式|	船舶类型|	典型货物|	特点|
|---|---|---|---|
|集装箱运输|	集装箱船（超大型如 24,000TEU）|	工业制品、消费品	|标准化装卸，占海运贸易量 35%（按价值），航线覆盖全球主要港口。|
|散货运输|	好望角型、巴拿马型散货船|	铁矿石、煤炭、谷物|	单船载重超 20 万吨，航线集中于资源出口国（如澳大利亚 - 中国铁矿航线）。|
|油轮运输|	VLCC（超大型油轮，载重 30 万吨 +）|	原油、成品油	航线受地缘政治影响显著（如霍尔木兹海峡、马六甲海峡），需防污染设计。|
|液化气运输|	LNG/LPG 运输船|	液化天然气、石油气|	需低温或高压储存，船舶建造成本高，航线集中于中东 - 东亚、北美 - 欧洲。|
|件杂货运输|	多用途货船|	机械、车辆、建材|	适合非标准化货物，逐渐被集装箱替代，占比下降至 10% 以下。|
|特种运输、	滚装船、重吊船、冷藏船|	汽车、重型设备、生鲜食品	|滚装船可直接装卸车辆（如汽车出口），冷藏船温控精度达 ±0.5℃。|

#### 三、全球海洋运输的关键航线与枢纽

**主要国际航线**

亚欧航线：苏伊士运河航线（亚洲 - 欧洲，航程较绕好望角缩短 40%）、北极东北航道（中俄航线，夏季通航）。

跨太平洋航线：远东 - 北美西海岸（长滩、洛杉矶）、远东 - 北美东海岸（经巴拿马运河）。

大西洋航线：欧洲 - 北美（传统贸易线）、南美东海岸 - 欧洲（大豆、铁矿运输）。

**枢纽港口（2023 年吞吐量数据）**

集装箱港：上海港（4,730 万 TEU）、新加坡港（3,740 万 TEU）、宁波舟山港（3,335 万 TEU）。

散货港：澳大利亚黑德兰港（铁矿石，年吞吐量 1.8 亿吨）、巴西图巴朗港（铁矿石）。

油轮港：沙特朱拜勒港、阿联酋富查伊拉港（波斯湾原油转运枢纽）。

#### 四、海洋运输的挑战与可持续发展

**环境挑战**
碳排放：航运业占全球温室气体排放 2.8%（2023 年），国际海事组织（IMO）要求 2050 年实现净零排放。

污染风险：船舶硫排放（2020 年 IMO 限硫令，硫含量≤0.5%）、压载水导致的生物入侵（如斑马贻贝扩散）。

事故影响：原油泄漏（如 1989 年埃克森瓦尔迪兹号事故，污染阿拉斯加海域）、集装箱落水（每年约 1 万标准箱丢失）。

**地缘与安全风险**

海盗威胁：几内亚湾（2023 年发生 54 起海盗袭击）、亚丁湾（经国际护航后风险降低）。

地缘冲突：俄乌战争影响黑海谷物运输（2022 年黑海谷物协议）、红海航运受也门冲突干扰。
可持续发展实践

绿色技术：甲醇动力船（如马士基 2023 年首艘甲醇集装箱船）、氨燃料试验船、风力辅助推进（安装帆翼或风筝）。

数字化转型：区块链提单（如马士基与 IBM 合作的 TradeLens 平台）、AI 预测航线优化（降低油耗 10-15%）。

国际治理：IMO《2021 年国际航运碳强度指标（CII）》，要求船舶每年碳强度提升 2%。

#### 五、未来趋势：智能化、低碳化与区域化

**技术创新**

自动驾驶船舶（如日本 2024 年测试的无人集装箱船）、氢燃料船舶（2030 年目标）。

**区域化贸易**

近岸航运（欧洲短海运输占比提升至 30%）、区域内港口联盟（如东南亚港口网络）。

**新兴市场**

非洲沿海航运开发（如尼日利亚拉各斯港扩建）、北极航线商业化（中俄合作亚马尔液化天然气项目）。

海洋运输作为全球化的基石，正从 “效率优先” 向 “绿色智能” 转型，其发展与地缘政治、技术革新、生态保护深度交织，重塑着 21 世纪的世界经济格局。
