---
sidebar_position: 7
sidebar_label: 案例七：灯塔
---

# 灯塔
## 故事导入
小恩在海上航行了两周。深夜，他翻看着父亲的航海日志，明明记载附近有岛，却始终不见踪影。突然，狂风骤雨袭来，巨浪将船体掀斜 15 度，木板在摇晃中发出吱呀声。他死死攥住舵轮，眼神坚定的看着海面，终于在雨幕中瞥见岛屿轮廓。可夜色如墨，根本找不到港口位置，这可怎么办？小伙伴们有什么办法帮助到小恩吗？

--- 

## 教学准备

|     名称     |            图示            |
| :----------: | :--------------------------: |
|   哪吒Pro海洋套件  |   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/nezha-pro-ocean-kit-products-introduction-002.png.png)  |

--- 
## 教学目标 
1.认识灯塔。

2.认识光敏传感器与灯环

3.掌握光敏传感器积木块与灯环积木块使用。

--- 

## 学习探究

1.你认识灯塔吗？你知道它的作用吗？

--- 
## 搭建步骤

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case07/nezha-pro-ocean-kit-step-07-1.png.pdf" type="application/pdf" width="100%" height="600px" />

--- 

## 硬件连接

1号电机连接哪吒扩展板“M4”端口，光线传感器连接哪吒拓展板“J1”端口，

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case07/nezha-pro-ocean-kit-step-07-3.png.png)

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

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case07/nezha-pro-ocean-kit-step-07-2.png.png)

程序链接
[https://makecode.microbit.org/_UtCdk8JVoVJK](https://makecode.microbit.org/_UtCdk8JVoVJK)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_UtCdk8JVoVJK"
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

吹开或者用手拨开船帆控制杆，直到双路巡线传感器检测不到控制杆，小船向前进，帆船控制杆回到原位，小船停止前进。

**图片**

---
## 扩展知识

### 船的发展历史

#### 一、史前萌芽期：自然材料的原始航行（公元前 100 万年 - 前 3000 年）

**1. 天然浮具的利用**

- 浮木与葫芦：旧石器时代人类发现树木、葫芦等天然浮体可承载重量，用藤蔓捆绑树枝制成简易木筏，最早证据见于非洲刚果河流域的考古发现。

- 树皮船：新石器时代北欧人将桦树皮缝合在木框架上，涂动物油脂防水，用于湖泊渔猎，现存最早树皮船可追溯至公元前 8000 年。

**2. 技术突破：独木舟的诞生**

- 约公元前 6000 年，美索不达米亚与中国长江流域独立发明独木舟：用石斧将整段树干挖空，载重能力提升至 2-3 人，标志人类主动改造航行工具的开端。

#### 二、古代文明期：帆船与桨船的黄金时代（前 3000 年 - 15 世纪）

**1. 地中海与西亚的帆船革命**

- 古埃及莎草船（前 3000 年）：用尼罗河莎草捆扎成船身，竖起木桅悬挂亚麻帆，顺流航行速度达 5km/h，壁画中记载用于运输金字塔石料。

- 腓尼基双层桨船（前 1200 年）：船身两侧各一排桨手（约 50 人），搭配三角帆，可在逆风时划桨前进，成为地中海贸易与海战的主力。

**2. 东亚的船舶创新**

- 中国楼船（汉代）：高达 3 层，甲板设瞭望塔与弩炮，最大载重千吨，《后汉书》记载用于跨海远征朝鲜半岛。

- 日本遣唐使船（7 世纪）：采用「遣唐船」型，船头尖翘、船尾方阔，配备平衡舵与竹帆，横渡东海成功率较前代提升 40%。

**3. 印度洋与非洲的航海技术**

- 阿拉伯三角帆船（独桅帆船）（9 世纪）：使用灵活的三角帆（可适应侧风），载重 200-300 吨，垄断印度洋香料贸易，达伽马远航即借鉴其船型。

#### 三、大航海时代：帆船的巅峰与地理大发现（15-17 世纪）

**1. 欧洲船舶的革命性设计**

- 卡拉维尔帆船（Caravel）（15 世纪）：葡萄牙人发明，采用三桅三角帆组合，吃水浅、转向灵活，哥伦布 1492 年远航美洲的「圣玛利亚号」即为此型。

- 盖伦帆船（Galleon）（16 世纪）：西班牙主力战船，船体高大如城堡，装备 30-50 门火炮，1588 年西班牙无敌舰队曾用此船远征英国。

**2. 中国的航海绝唱**

- 郑和宝船（15 世纪）：据《明史》记载，最大宝船长 44 丈（约 138 米），九桅十二帆，可载千人，比哥伦布船队早半个世纪抵达东非，但因海禁政策未能延续航海传统。

#### 四、工业革命期：蒸汽动力与钢铁船体（18-19 世纪）

**1. 蒸汽船的诞生**

- 1807 年，富尔顿建造「克莱蒙特号」：以明轮为推进器，蒸汽机功率 20 马力，沿哈德逊河航行时速 8km，开启商业蒸汽船时代。

- 1838 年，「大西部号」成为首艘横渡大西洋的蒸汽船（燃煤动力，木质船体），航行时间从帆船的 21 天缩短至 15 天。

**2. 钢铁船与螺旋桨的普及**

- 1858 年，英国「大东方号」：船长 211 米，铁制船体，同时装备明轮与螺旋桨，载重 2.7 万吨，曾铺设跨大西洋海底电缆。

- 1860 年，螺旋桨取代明轮成为主流：普鲁士「阿里阿德涅号」首次采用全螺旋桨推进，效率比明轮高 30%
