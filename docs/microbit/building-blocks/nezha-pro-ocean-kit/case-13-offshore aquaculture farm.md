---
sidebar_position: 13
sidebar_label: 案例十三：模拟海上养殖场
---

# 模拟海洋养殖场
## 故事导入

解决完小岛电力危机，小恩惦记起匆匆离开的杰克。多方打听后得知，杰克家的海洋养殖场被暴风雨损毁，他赶回去抢修了。小恩决定前去帮忙，对于修复养殖场小伙伴们有什么建议，需要加入哪些传感器来监控环境，更好的来促进养殖。

--- 

## 教学准备

|     名称     |            图示            |
| :----------: | :--------------------------: |
|   哪吒Pro海洋套件  |   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/nezha-pro-ocean-kit-products-introduction-002.png.png)  |

--- 
## 教学目标 

1.了解什么是海洋养殖。

2.知道海水的盐度、温度等基本特性对养殖生物的影响。


--- 

## 学习探究

1.了解海洋养殖的概念吗？请与小伙伴们一同查阅相关资料，记录关键要点，并与小伙伴进行分享。

2.如果让你来设计的一个的海洋养殖场，你会怎么设计，尝试把自己的想法通过绘画的方式呈现出来。

--- 
## 搭建步骤

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case13/nezha-pro-ocean-kit-13-1.png.pdf" type="application/pdf" width="100%" height="600px" />

--- 

## 硬件连接

光线传感器连接哪吒扩展板J1端口；

彩虹灯环连接哪吒扩展板J2端口;

DHT11温湿度传感连接哪吒扩展J3端口；

OLED显示屏连接哪吒扩展传感IIC端口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case13/nezha-pro-ocean-kit-13-3.png.png)

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

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case13/nezha-pro-ocean-kit-13-2.png(1).png)

程序链接
[https://makecode.microbit.org/_aiU40Ai8zEcf](https://makecode.microbit.org/_aiU40Ai8zEcf)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_aiU40Ai8zEcf"
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

DHT11温湿度传感器获取当前环境的温湿度数据，并通过OLED显示屏进行显示，光线传感器检测当前环境光亮度＜100时，彩虹灯环点亮，否则彩虹灯环关闭。

**图片**

---
## 扩展知识

### 海洋养殖场

海洋养殖场是人类在海洋中人工培育、养殖海洋生物（如鱼类、贝类、藻类等）的场所，就像 “海洋里的农场”，既能为我们提供丰富的海鲜，又能保护野生海洋生物资源。

#### 一、海洋养殖场有哪些类型？

根据养殖的海域远近，主要分为两类：

**近海养殖场**：靠近岸边的浅海区域，比如海湾、滩涂。这里水浅、容易管理，适合养海带、扇贝、虾等。

**远海养殖场**：离岸边较远的深海区域，需要用大型网箱、养殖平台等设备，能养大黄鱼、金枪鱼等对环境要求高的鱼类。

#### 二、按养殖方式分

**筏式养殖**：用泡沫浮球或塑料浮子组成 “浮筏”，通过锚固定在海中，将养殖物（如扇贝、海带）挂在筏下的绳索上，让它们悬浮在适宜的水层（避免海底淤泥污染）。

**网箱养殖**：用高强度网衣围成 “水下笼子”，固定在海中，养殖鱼类（如鲈鱼、石斑鱼）。网眼大小刚好能让水流通过（带入氧气和天然饵料），又能拦住养殖鱼和大型敌害。

**底播养殖**：将贝类、海参等底栖生物的苗种直接播撒在海底泥沙或岩石区，让它们像在自然环境中一样生长，仅通过划定区域防止偷捕，适合对环境适应性强的物种。

**工船养殖**：在大型船只上搭建养殖舱，通过设备调控水温、盐度，可在远海移动，甚至能 “跟着鱼群习性走”，是近年新兴的高科技养殖方式。

#### 三、养殖对象：从 “菜篮子” 到 “经济链”

海洋养殖场的 “居民” 涵盖多种海洋生物，既有我们常吃的食材，也有用于加工的经济品种：

**藻类**：海带、紫菜、裙带菜（富含碘和膳食纤维，是 “海上蔬菜”）；

**贝类**：扇贝、牡蛎、花蛤（滤食海水里的浮游生物，养殖成本低）；

**鱼类**：大黄鱼、鲈鱼、三文鱼（高蛋白，是餐桌上的 “常客”）；

**甲壳类**：南美白对虾、青蟹（肉质鲜美，经济价值高）；

**棘皮类**：海参、海胆（营养丰富，兼具食用和药用价值）。

#### 四、重要意义：平衡需求与保护

**保障食物安全**：全球约 1/3 的海鲜来自养殖，海洋养殖场能稳定供应优质蛋白，缓解 “野生海鲜不够吃” 的问题。

**保护野生资源**：减少对野生鱼类、贝类的过度捕捞，让天然海域的生物种群有机会恢复。

**带动经济发展**：沿海地区通过养殖、加工、销售形成产业链，提供大量就业岗位（如育苗员、养殖工、海鲜加工员）。

**探索蓝色农业**：利用海洋空间发展 “不占耕地的农业”，为人口增长带来的粮食压力提供新解法。

#### 五、挑战：可持续发展的关键

海洋养殖虽有益，但也需避免 “顾此失彼”：

若养殖密度过高，残饵和排泄物会污染海水，导致水质恶化；

外来养殖物种可能逃逸到天然海域，挤占本土生物的生存空间；

台风、赤潮等自然灾害可能摧毁养殖设施，造成损失。


因此，现代海洋养殖场越来越注重 “生态养殖”：控制养殖规模、选用本土物种、采用循环水技术（减少污染），让养殖与海洋生态和谐共存。
简单说，海洋养殖场是人类用智慧在大海中开辟的 “可持续粮仓”—— 既让我们能安心享用海鲜，又努力守护着大海的健康。
