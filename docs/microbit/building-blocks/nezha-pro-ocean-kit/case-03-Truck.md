---
sidebar_position: 3
sidebar_label: 案例三：运输车

---

# 运输车
## 故事导入
晨雾还未散尽，小恩望着堆在镇口的成箱物资发愁 —— 三十桶淡水、五十多箱粮食、半捆麻绳，还有父亲留下的那箱航海仪器、众多的生活物资，靠他独自搬运港口，至少需要往返很多趟。有方法帮助小恩搬运物资到港口吗？

--- 

## 教学准备

|     名称     |            图示            |
| :----------: | :--------------------------: |
|   哪吒Pro海洋套件  |   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/nezha-pro-ocean-kit-products-introduction-002.png.png)  |

--- 
## 教学目标 
1.认识电位器传感器。

2.认识碰撞传感器。

3.探索小车转向的原理 。

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
## 扩展知识
### 运输车的发展历史

#### 一、古代运输雏形（公元前 —18 世纪）

**人力与畜力运输时代**

1.原始工具：公元前 4000 年，美索不达米亚地区出现木制滚轮车，依靠人力或畜力（牛、马）拉动，用于运输货物和人员。

2.马车的普及：公元前 2000 年，中亚草原游牧民族发明辐条轮马车，速度与载重能力显著提升，成为古代陆上运输的核心工具（如中国商周时期的战车、古罗马的货运马车）。

3.水上运输：古埃及人利用尼罗河划桨船运输石材，中国隋唐时期的大运河漕运系统则通过帆船、漕船实现大规模物资运输。

**技术局限与突破**

1.运输工具以木质结构为主，载重有限（如古罗马货车载重约 1 吨），依赖自然动力，运输效率受地理和气候制约。

#### 二、工业革命推动机械化运输（18 世纪 —20 世纪初）

**蒸汽动力的应用**

1.蒸汽货车的萌芽：1769 年，法国工程师尼古拉・古诺发明首辆蒸汽驱动三轮车（“卡布奥雷”），虽因技术缺陷未普及，却是机械化运输的开端。

2.铁路运输崛起：1825 年，英国斯托克顿 - 达灵顿铁路开通，蒸汽机车（如 “火箭号”）推动货运铁路发展，首次实现长距离、大运量货物运输（载重可达数十吨）。

**内燃机与公路运输车的诞生**

1.汽车时代的序幕：1886 年，卡尔・本茨发明首辆内燃机驱动的三轮汽车（专利号 37435），1896 年，英国工程师杜里埃兄弟制造出首辆汽油动力货车，载重约 1.5 吨。

2.商业化量产：1901 年，美国奥兹莫比尔公司推出量产货车 “Curved Dash”，1910 年代福特 T 型卡车（1917 年推出）以流水线生产降低成本，推动货车普及。


#### 三、20 世纪：专业化与规模化发展（1920—1990 年代）

**载重能力与结构革新**

1.重型卡车崛起：1920 年代，美国怀特汽车公司推出首辆六轮卡车，载重提升至 5 吨；1930 年代，柴油发动机因油耗低、扭矩大成为货车主流（如德国曼恩、美国彼得比尔特卡车）。

2.挂车与模块化设计：1930 年代，半挂卡车（Trailer Truck）出现，通过牵引车与挂车分离实现高效装卸，载重突破 10 吨（如二战期间美军 GMC CCKW 卡车）。


