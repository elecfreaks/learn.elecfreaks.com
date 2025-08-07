---
sidebar_position: 16
sidebar_label: 案例十六：闸门
---

# 闸门

## 故事导入

小恩和杰克走在街上，听到工人们正在讨论：由于连日大雨导致河水暴涨，需要开启闸门将河水排入海中；而在平时水位较低时，则要关闭闸门，既能保障城市的淡水供应，又能防止海水倒灌。听到这里，小恩和杰克开始思考如何帮助工人叔叔设计一个智能闸门系统。

（更多精彩故事更新中......）

--- 

## 教学准备

|     名称     |            图示            |
| :----------: | :--------------------------: |
|   哪吒Pro海洋套件  |   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/nezha-pro-ocean-kit-products-introduction-002.png.png)  |

--- 
## 教学目标 

1.认识闸门，知道闸门的功能。

2.尝试根据任务的需求设计一个智能闸门

--- 

## 学习探究

1.根据任务需求，分组讨论如何设计一个智能闸门，智能闸门应该具备哪些功能，请根据讨论的结果进行简单原型的绘制，并分享给其他的小组。

--- 
## 搭建步骤

**注意事项** 安装时请注意与智能电机的零点位置对齐！如下图所示

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/nezha-pro-ocean-kit-00.png)


<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case16/nezha-pro-ocean-kit-16-1.png.pdf" type="application/pdf" width="100%" height="600px" />

--- 

## 硬件连接

水位传感器连接哪吒扩展板“J1”端口；

1号电机连接哪吒扩展板“M1”端口。


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case16/nezha-pro-ocean-kit-16-4.png.png)

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

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case16/nezha-pro-ocean-kit-16-2.png.png)

程序链接
[https://makecode.microbit.org/_4Tw0b0cMWTcX](https://makecode.microbit.org/_4Tw0b0cMWTcX)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_4Tw0b0cMWTcX"
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

水位传感器检测海水的水位值＜50时，打开闸门，水位传感器检测到啊海水的水位值＞50时，关闭闸门防止海水倒灌。


**图片**

---
## 扩展知识

### 海水倒灌

海水倒灌是指海水通过地表或地下侵入内陆淡水系统的现象，全球沿海地区普遍面临这一挑战。以下从国内外案例、核心原因、影响及应对措施等方面展开分析：

### 一 、案例

**美国密西西比河（2023 年）**

持续干旱导致河水流量锐减，墨西哥湾海水倒灌至新奥尔良市以北 113 公里，威胁 80 万人口的饮用水安全。海水腐蚀老旧铅管道，可能引发重金属污染。

**意大利威尼斯（2019 年）**

极端天气导致水位达 1.87 米，全城 85% 区域被淹，圣马可广场多次被海水侵袭，旅游业和古建筑受损严重。

**越南湄公河三角洲（2024 年）**

海平面上升和干旱使海水倒灌范围扩大，土壤盐碱化导致水稻减产 30%-50%，数百万农民生计受威胁。

**辽宁盘锦（2024 年 10 月）**

受天文大潮、温带风暴潮边缘波增水叠加影响，盘锦市大洼区二界沟街道 231 户居民房屋被淹，水深超过半米。盘锦地处大辽河入海口，喇叭口地形放大了潮水涌入的冲击力，同时全球变暖导致的海平面上升（2024 年中国沿海海平面达历史同期最高）加剧了倒灌风险

### 二、核心原因

**2.1、自然因素**

**天文大潮与风暴潮叠加**
朔望月期间（农历初一、十五）太阳和月球引潮力叠加，若同时遭遇台风、冷空气等天气系统，风暴增水可使潮位突破橙色甚至红色预警级别。例如，2024 年辽宁沿海倒灌因温带风暴潮边缘波与天文大潮叠加，潮位达历史极值。

**海平面上升**

1993-2023 年全球海平面上升速率达 3.4 毫米 / 年，中国沿海为 4.0 毫米 / 年。海平面上升使基础潮位升高，放大了风暴潮的致灾性。

**地形影响**

喇叭口河口（如钱塘江、盘锦大辽河）和内凹海湾（如渤海湾）易因潮水汇聚抬高水位，引发倒灌。

**2.2、人为因素**

**地下水超采**

沿海城市过度抽取地下水导致地面沉降，形成漏斗区，加速海水入侵。中国已形成 8.7 万平方公里漏斗区，河北、山东等地海水入侵严重。

**河流改道与生态破坏**

水利工程拦截淡水、红树林湿地破坏削弱了自然屏障。例如，越南湄公河三角洲因堤坝建设和湿地开发，海水倒灌风险增加。

**气候变化**

全球变暖导致极地冰川融化和海水热膨胀，进一步推高海平面。IPCC 预测，2100 年全球海平面可能上升 0.56-0.77 米，沿海洪水频率将显著增加。

### 三、主要影响
**3.1、生态破坏**

海水倒灌导致土壤盐碱化（氯离子含量＞1000 毫克 / 升即重度盐碱化）、湿地退化，威胁红树林、珊瑚礁等生态系统。例如，美国路易斯安那州湿地因海水入侵年均消失约 13 平方公里。

**农业与饮水危机**

盐渍化土壤使农作物减产（氯化物＞600 毫克 / 升时蔬菜减产 20%），淡水水源被污染。越南湄公河三角洲已有 40% 农田受盐碱化影响。

**基础设施损毁**

海水腐蚀金属管道、道路和建筑。新奥尔良市 48% 供水管网为铅质，海水倒灌可能引发长期健康风险。

**经济损失**

2024 年中国沿海因海水倒灌直接经济损失 7200 万元，美国为应对密西西比河倒灌计划投入数亿美元建设反渗透装置。

### 四、国际经验

**荷兰 Delta Works 工程**

通过建设可调节水闸和堤坝，将莱茵河、马斯河等河口与北海隔离，有效防御风暴潮。该工程使荷兰洪水风险降低 90%。

**美国地下水管理**

佛罗里达州立法限制地下水开采，推广海水淡化（如坦帕湾反渗透厂），减少对淡水的依赖。

**威尼斯 MOSE 工程**

建设 78 座可升降式水坝，在高潮位时升起阻挡海水。2023 年投入使用后，威尼斯洪水频率下降 60%。

### 五、未来挑战与建议
**气候适应**

需加强海平面上升监测，推动沿海城市规划向高海拔区域转移，避免在低洼地带新建基础设施。

**技术升级**

推广数字孪生、卫星遥感等技术，提升风暴潮漫滩精细化预报能力。

**国际合作**

建立跨国监测网络，共享风暴潮、海平面数据。例如，东南亚国家联盟（ASEAN）合作应对湄公河三角洲倒灌问题。

**公众参与**

沿海居民需在天文大潮期做好防潮准备，避免在危险区域活动。例如，厦门沙坡尾社区通过电子围栏推送预警信息。
海水倒灌是气候变化与人类活动共同作用的结果，其治理需全球协作、技术创新与生态保护并重。通过 “工程 - 生态 - 管理” 多维度措施，可最大限度降低倒灌风险，保障沿海地区可持续发展。



