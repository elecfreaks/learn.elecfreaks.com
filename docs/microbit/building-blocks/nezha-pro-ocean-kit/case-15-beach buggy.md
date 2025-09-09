---
sidebar_position: 15
sidebar_label: 案例十五：沙滩车
---

# 沙滩车

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/tupian/nezha-pro-ocean-kit-step-15-00.png.JPG)

## 故事导入

小恩累了一天，早早睡下了。第二天清晨，阳光刚爬上沙滩，杰克就蹦蹦跳跳地敲响了门，眼睛亮晶晶地喊：“快来看呀！沙滩上铺满了海浪送来的白贝壳，还有好多金黄的沙丘，咱们动手造一辆能自己躲开障碍的沙滩车比赛吧！” 快叫上你的好朋友，一起加入这场超酷的沙滩车大冒险吧！

--- 

## 教学准备

|     名称     |            图示            |
| :----------: | :--------------------------: |
|   哪吒Pro海洋套件  |   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/nezha-pro-ocean-kit-products-introduction-002.png.png)  |

--- 
## 教学目标 

1.认识沙滩车，了解沙滩车特点。

2.探索小车方式。

3.认识随机数积木块，掌握随机数积木块的使用。

--- 

## 学习探究

1.你知道挖掘机、小汽车怎么进行转向吗？

2.尝试总结对比不同转向方式差异性。

--- 
## 搭建步骤

**注意事项** 安装时请注意与1号电机的零点位置对齐！如下图所示。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/nezha-pro-ocean-kit-00.png)

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case15/nezha-pro-ocean-kit-15-1.png.pdf" type="application/pdf" width="100%" height="600px" />

--- 

## 硬件连接

超声波传感连接哪吒扩展板“J1”端口；

1号电机连接哪吒扩展板“M1”端口；

2号电机连接哪吒扩展板“M4”端口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case15/nezha-pro-ocean-kit-15-3.png.png)

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

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case15/nezha-pro-ocean-kit-15-2.png(1).png)

程序链接
[https://makecode.microbit.org/_HYmi2gKFeh6j](https://makecode.microbit.org/_HYmi2gKFeh6j)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_HYmi2gKFeh6j"
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

超声波传感检测到距离＜20CM时，沙滩车随机的向左或者向右后退，如果超声波检测距离＞20CM沙滩车向前走。


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/GIF/nezha-pro-ocean-kit-step-15-00.png.gif)

---
## 扩展知识

### 小汽车VS挖掘机转向

小汽车与挖掘机的转向系统在原理、结构和功能上存在显著差异，核心原因是两者的使用场景（道路行驶 vs 工程作业）和行驶方式（轮式 vs 履带 / 轮式）不同，导致转向设计目标截然不同。以下从关键维度对比：

#### 一、转向原理：“偏转车轮” vs “速度差驱动”

**小汽车**：属于轮式偏转转向，通过改变车轮的偏转角度实现转向。
方向盘转动时，通过转向机（如齿轮齿条式、循环球式）带动转向拉杆，使前轮（少数车型为后轮或四轮）偏转一定角度，利用车轮与地面的摩擦力改变行驶方向。本质是 “通过车轮指向变化引导车身转向”。

**挖掘机**：主流为履带式差速转向（部分小型挖掘机为轮式，但原理仍与小汽车不同），通过两侧履带的转速差实现转向。
挖掘机无 “转向轮”，而是通过液压系统控制两侧履带的驱动马达：
两侧履带同速同向转动时，机身直线行驶；
一侧履带减速 / 停止，另一侧正常转动时，机身向减速侧转弯（转弯半径较大）；
两侧履带反向转动时，机身可原地 360° 转向（“零转弯半径”，适合狭窄场地作业）。

#### 二、结构与动力来源：“助力辅助” vs “液压驱动”
**小汽车：**
结构：方向盘→转向柱→转向机（核心部件，将旋转运动转为直线推拉）→转向拉杆→车轮转向节。
动力：依赖驾驶员体力 + 助力系统（液压助力 HPS、电动助力 EPS），助力系统的作用是 “省力”，让驾驶员在低速（如停车）时轻松转动方向盘，高速时增加转向阻力以保证稳定性。

**挖掘机：**
结构：操纵杆（或方向盘，小型轮式）→液压阀组→液压管路→两侧履带驱动马达（或轮式驱动桥）。
动力：完全依赖液压系统，驾驶员通过操纵杆控制液压油的流量和方向，直接驱动履带 / 车轮的转速差。液压系统提供强大扭矩，可在重载（如机身承载物料时）下轻松转向，无需驾驶员额外发力。

#### 三、转向特性：“精准平顺” vs “灵活重载”

**小汽车：**
转向比（方向盘转动角度与车轮偏转角度的比值）较小（通常 12:1~20:1），即方向盘转动小角度，车轮即可明显偏转，适合道路行驶的 “精准微调”（如变道、绕弯）。
转弯半径较大（依赖车身长度和轴距），且转向过程需保持车身稳定（避免侧翻），因此设计上强调 “线性响应”（方向盘转动幅度与转向角度成正比）。

**挖掘机：**
无固定 “转向比”，转向幅度完全由两侧履带的速度差决定，可实现 “无级调节”（从缓慢小角度转向到原地打转）。
转弯半径极小（甚至零半径），适合狭窄工地（如室内拆除、基坑作业），且能在泥泞、松软地面（履带接地面积大，不易陷车）稳定转向，即使机身承载重物（如铲斗装满物料），转向动力仍能保证。

简言之，小汽车的转向是 “为道路行驶优化的精准引导”，而挖掘机的转向是 “为工程场景设计的灵活重载驱动”，两者的差异源于使用需求的根本不同。
