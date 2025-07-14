---
sidebar_position: 10
sidebar_label: 案例十：螃蟹
---

# 螃蟹
## 故事导入

几场比赛结束，小恩和杰克仍意犹未尽。小恩感慨道：“你们好像特别钟爱大海，连比赛都充满海洋元素。” 杰克笑着点头：“当然！大海是我们的宝藏，给我们带来数不清的食物，我们打心底感激它。” 话音刚落，周边居民已伴着鼓点跳起欢快的舞蹈。杰克眼睛发亮，一把拉住小恩：“最热闹的时刻到啦！走，一起跳进这场音乐狂欢！

--- 

## 教学准备

|     名称     |            图示            |
| :----------: | :--------------------------: |
|   哪吒Pro海洋套件  |   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/nezha-pro-ocean-kit-products-introduction-002.png.png)  |

--- 
## 教学目标 

1.掌握条件语句的嵌套，理解条件语句嵌套的逻辑

2.了解什么时候区间分类。


--- 

## 学习探究

1.你知道哪些乐器，你会哪些乐器。

2.你知道声音是如何产生的吗？

--- 
## 搭建步骤

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case11/nezha-pro-ocean-kit-step-11-1.png.pdf" type="application/pdf" width="100%" height="600px" />

--- 

## 硬件连接

超声波传感器连接哪吒拓展板“J1”端口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case11/nezha-pro-ocean-kit-step-11-3.png.png)

--- 
## 代码编程

进入“[makecode.microbit.org](https://makecode.microbit.org)”，点击**新建项目**。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-07.png)

在弹出窗口输入项目名称并点击**创建**。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-11.png)

点击代码抽屉中的**扩展**。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-09.png)

在弹出界面输入**nezha pro**并点击搜索图标，在显示**nezha pro**软件库后点击。同样的方式加载PlanetX软件库。

![]()

---
### 示例程序

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case11/nezha-pro-ocean-kit-step-11-2.png.png)

程序链接
[https://makecode.microbit.org/_bbk2X1L1TDs1](https://makecode.microbit.org/_bbk2X1L1TDs1)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_bbk2X1L1TDs1"
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
当按键A按下时，如果超声波传感器检测距离9~10区间播放铃声Middle C；超声波传感器检测距离11~12区间播放铃声Middle D；超声波传感器检测距离13~14区间播放铃声Middle E；超声波传感器检测距离15~16区间播放铃声Middle F；超声波传感器检测距离17~18区间播放铃声Middle G；超声波传感器检测距离19~20区间播放铃声Middle A；超声波传感器检测距离20~21区间播放铃声Middle B。



**图片**

---
## 扩展知识

### 吉他的起源与发展

吉他是一种深受人们喜爱的弹拨乐器，以下将从其起源与发展、种类、构造、演奏技巧等方面进行详细介绍：

### 起源与发展

起源说法：关于吉他的起源，一种说法是起源于古希腊的吉他拉，后演变成维卫拉琴流行于欧洲；另一种说法是起源于古埃及的琉特琴，由阿拉伯人传入西班牙。

发展历程：14 世纪以前，摩尔人将吉他带到西班牙，早期有八弦、十弦、十二弦等类型。十六世纪西班牙人发明五弦吉他，1790 年增加一根低音弦后正式命名为吉他。

18 世纪后期，琴体加大，音柱改为扇形排列，记谱改进为五线谱，吉他进入鼎盛时期。19 世纪中叶，因钢琴、管弦乐等发展，吉他进入第二次衰退期。十九世纪后期，吉他在演奏技巧、制作工艺方面日渐成熟，进入第二个高峰时期。二十世纪，发明电吉他，吉他开始向多元化发展。

### 种类

古典吉他：也被称为西班牙吉他，指板扁平且略宽，指板上由弦枕到琴柄与琴箱结合处是 12 品格，音箱较厚，有 19 个音品，装有三根尼龙琴弦和三根金属缠弦，音色高雅，常用于独奏，在弗拉明哥音乐以及爵士音乐中也有应用。

民谣吉他：指板较细、指板与音箱连接处是 14 品格，音箱较大，棱角呈方形，面板上有护板，使用钢弦，音色清脆明亮，音量大于古典吉他，金属感较重，琴尾有背带扣，演奏形式自由，常用于伴奏与弹唱。

电吉他：指板很窄，使用磁性钢丝弦，琴体是实心的，无共鸣箱，使用磁性拾音器，根据弦振动到电声转换的原理用扬声器发声，常用于摇滚、流行、布鲁斯等音乐风格，作为独奏乐器较为理想。

匹克吉他：又称为爵士吉他，琴颈比较长，指板有微小的弧度，使用钢丝弦，共鸣箱比古典吉他小且薄，面板和背板呈弧形，面板中间无圆孔，两侧各开一个 f 形孔，右手采用拨片弹拨，常用于主奏、伴奏和低音弹奏民间音乐。

弗拉门哥吉他：琴身较大，琴身的底板和横板使用柏木和依托斯木，卷轴使用像小提琴旋钮般的木制品，各弦定音稍低，在奏强音时弦会打在指板上，发出特殊音色，演奏时需敲打面板。

### 演奏技巧

#### 右手技巧
拨弦：包括手指拨弦和拨片拨弦。手指拨弦音色柔和、细腻，能够演奏出丰富的和声与旋律；拨片拨弦则音色明亮、清脆，适合演奏节奏明快的音乐。
扫弦：用手指或拨片快速地从低音弦向高音弦或从高音弦向低音弦划过，产生丰富的和声效果，常用于节奏型的演奏。

#### 左手技巧
按弦：通过左手手指在指板上按下不同的位置，改变琴弦的振动长度，从而产生不同的音高，要求手指按弦准确、有力，且不影响其他琴弦的发声。
滑音：左手手指在琴弦上从一个位置滑动到另一个位置，产生连贯的音高变化，使音乐更加流畅、富有表现力。
揉弦：左手手指在按弦的基础上，通过轻微地晃动手指，使琴弦的音高产生微小的波动，给音色增添温暖、柔和的效果。
