---
sidebar_position: 7
sidebar_label: 案例七：灯塔
---

# 灯塔

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/tupian/nezha-pro-ocean-kit-step-07-00.png.png)

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

2.认识光敏传感器与彩虹灯环模块

3.掌握光敏传感器积木块与彩虹灯环积木块使用。

--- 

## 学习探究

1.你认识灯塔吗？你知道它的作用吗？

--- 
## 搭建步骤

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case07/nezha-pro-ocean-kit-step-07-1.png.pdf" type="application/pdf" width="100%" height="600px" />

--- 

## 硬件连接

1号电机连接哪吒扩展板“M4”端口；

光线传感器连接哪吒拓展板“J1”端口；

彩虹灯环模块连接哪吒拓展板“J2”端口。

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

光纤传感器检测到环境光照度＜100，彩虹灯环亮黄色灯。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/GIF/nezha-pro-ocean-kit-step-07-00.png.gif)

---
## 扩展知识

灯塔是建于航道关键部位附近的一种塔状发光航标，以下将从其历史、构造、作用、著名灯塔实例等维度展开介绍：

### 1、发展历史

**古代灯塔：** 公元前约 270 年，托勒密二世委派希腊建筑师索斯特拉图斯在法罗斯岛东端建造了世界上第一座灯塔 —— 法罗斯灯塔，它既为进入亚历山大港的船只指引方向，又展示了埃及君主的显赫名声，成为古代世界七大奇观之一。古罗马人也建造了一系列灯塔，创建了最早的灯塔网络体系，其中奥斯蒂亚灯塔建于公元 50 年，一直留存到公元 15 世纪。

**近代灯塔：** 18 世纪末至 19 世纪相继出现有反射镜的发光器、透镜灯塔、电力灯塔等。1858 年中英《天津条约》签订后规定 “通商各口分设浮桩、号船、塔表、望楼，由领事官与地方官会同酌视建造”，由此拉开了中国近代灯塔建设的序幕。

**现代灯塔：** 20 世纪初，电力和电石乙炔气开始取代煤油作为灯塔的光源，并借由达伦光得以进一步发展，使得黄昏时塔灯能自动点亮，黎明时自动熄灭。随着科学技术的迅猛发展，雷达应答器、DGPS 系统、AIS 船舶自动识别系统等综合导航体系建立，灯塔的导航作用虽被弱化，但其历史文化价值受到各国重视。

### 2、基本构造

**塔身：** 可由各种建筑材料构筑，如石头、砖块、钢铁等，主要是要适应和抵抗风浪等恶劣的自然条件，以保持自身的稳定性和耐久性，塔身高度要适应灯光射程要求。

**灯具：** 由发光器和光辐射器两个基本部分构成。现代灯塔的发光能源主要采用电力，发光器的发光体中心位于聚光透镜的焦点，光源辐射出呈球面的光通过聚光透镜成为有一定扩散角的平行光束。

### 3、主要作用

**导航助航：** 引导船舶航行，帮助船员在茫茫大海中确定方向，找到正确的航道，避开危险区域，如浅滩、暗礁、沙洲等。

**军事防御：** 过去灯塔常被用于军事用途，进行海防瞭望和防范偷渡等，一般与灯塔临近的还有炮台、城堡等防御设施。此外，灯塔在心理战方面也能起到一定作用。

**主权宣誓：** 在争议海域，灯塔常常被当成是主权的象征。

**地理坐标：** 伴随着现代导航技术的发展，灯塔的导航价值在日益减少，但它拥有着潜在的历史文化价值，成为了各国追捧的人文地理坐标。

### 4、著名灯塔

**托雷多赫拉克勒斯灯塔：** 位于西班牙，建造于公元 2 世纪，是到目前为止唯一一座还在使用的古罗马灯塔，还保有 “世界上最古老的可使用灯塔” 的称号。

**好望角灯塔：** 位于南非开普敦省好望角半岛顶端，是非洲最南端的灯塔，也是世界上最著名的灯塔之一。其最初的灯塔建于 1859 年，后因位置不佳等原因进行了多次重建和迁移。

**老铁山灯塔：** 位于中国辽宁省大连市旅顺口南端，三面环海，塔高 14.2 米，直径 6 米，系清政府于 1893 年请法国人制造，由英国人修筑，1997 年被国际航标协会列入 “世界一百座历史文物灯塔之一”。

