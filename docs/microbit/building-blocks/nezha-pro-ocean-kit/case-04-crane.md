---
sidebar_position: 4
sidebar_label: 案例四：起重机
---

# 起重机
## 故事导入
正午的阳光晒得港口的礁石发烫，小恩望着港口上堆成小山的物资直搓手，小恩正在发愁，如何把这些物资从港口装到“希望号”上，特别是父亲留下的那箱航海仪器，重达一百五十多斤。小伙伴们有什么方法可以帮助小恩装载物资？

--- 

## 教学准备

|     名称     |            图示            |
| :----------: | :--------------------------: |
|   哪吒Pro海洋套件  |   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/nezha-pro-ocean-kit-products-introduction-002.png.png)  |

--- 
## 教学目标 
1.认识起重机 

2.认识蜗轮蜗杆结构。

3.探索起重机多种编程思路。

--- 

## 学习探究

1.分组讨论如何帮助小恩把物资转移到船上，尝试将方案通过图画展示出来，并与其他小伙伴分享方案。


## 搭建步骤

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case04/nezha-pro-ocean-kit-step-04-1.png.pdf" type="application/pdf" width="100%" height="600px" />

--- 

## 硬件连接

使用RJ11线将2号马达连接到哪吒扩展板的“M1”端口上；

使用RJ11(600)线将1号马达连接到哪吒扩展板的“M4”端口上；

使用RJ11线将电位器传感器连接到哪吒扩展板的“J1”端口上；

使用RJ11线将1号碰撞传感器连接到哪吒扩展板的“J2”端口上；

使用RJ11线将2号碰撞传感器连接到哪吒扩展板的“J3”端口上。


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

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case04/nezha-pro-ocean-kit-step-04-2.png.png)

程序链接
[https://makecode.microbit.org/_XYu4st3UF7X2](https://makecode.microbit.org/_XYu4st3UF7X2)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_XYu4st3UF7X2"
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

当电位器传感器的反馈数值低于300时，2号电机将以100%的速度启动转动；

当反馈数值高于700时，2号电机将以-100%的速度启动转动；

若数值介于两者之间，则2号电机停止。

若“J2”端口的碰撞传感器被按下，1号电机将以100%的速度启动转动；

若“J3”端口的碰撞传感器被按下，1号电机将以-100%的速度启动转动。

在其他情况下，1号电机将停止。


**图片**

---
## 扩展知识

### 起重机：从古代到现代的技术演进
#### 一、古代起重工具的起源（公元前 — 中世纪）

**人力与畜力驱动的雏形** 

1.杠杆与滑轮系统：公元前 3 世纪，古希腊学者阿基米德提出杠杆原理，古埃及人利用杠杆搬运金字塔石材；同时期，中国战国时期出现辘轳（滑轮组雏形），用于提水和重物运输。

2.罗马 “Polyspaston” 起重机：公元 1 世纪，罗马人发明由人力或畜力驱动的多滑轮起重机（Polyspaston），通过绳索和绞盘提升重物，常用于建筑施工（如斗兽场建设）。

**质结构与动力局限** 

1.起重工具以木材为主要材料，载重通常不超过 10 吨，依赖人力或畜力驱动，效率低且适用场景有限。

####  二、工业革命时期的机械化突破（18—19 世纪）

**蒸汽动力的应用**

1.首台蒸汽起重机：18 世纪末，英国工程师威廉・阿姆斯特朗发明以蒸汽为动力的固定式起重机，用于码头装卸货物，载重提升至 20 吨以上。

2.铁路与港口的革新：1830 年代，蒸汽驱动的轨道式起重机在英国铁路建设中普及，1850 年代港口蒸汽起重机（如 “蒸汽绞盘”）实现规模化货物装卸。

**金属结构与旋转设计**

1.19 世纪中期，钢铁替代木材成为起重机主要材料，结构强度大幅提升；1870 年代，法国工程师发明可 360 度旋转的蒸汽起重机，扩大作业范围。

#### 三、20 世纪：专业化与多元化发展

**内燃机与电力驱动的普及**

1.移动式起重机诞生：1910 年代，美国推出内燃机驱动的轮式起重机（如 “蒸汽铲车” 改良版），1920 年代履带式起重机（如 Caterpillar 推土机改造机型）适用于复杂地形。

2.电力驱动与塔式起重机：1930 年代，电力驱动起重机在工厂和建筑工地普及；1950 年代，塔式起重机（如德国 Liebherr 早期型号）因高度可调、起重量大，成为高层建筑施工的核心设备。

**技术细分与载重突破**

1.港口专用设备：1960 年代，集装箱起重机（桥吊）出现，单吊具载重达 30 吨以上，推动全球海运效率革命。

2.超大型起重机：1980 年代，德国利勃海尔（Liebherr）推出 LR 13000 履带式起重机，最大起重量突破 3000 吨，用于风电设备和重型工业安装。

#### 四、现代起重机：智能化与绿色化（21 世纪至今）

1.智能化技术应用
配备传感器与自动化控制系统，实现负载监测、防摇摆控制（如日本 Tadano 智能起重机）；部分型号支持远程操控或无人机辅助定位。

2.新能源与环保设计
电动起重机（如比亚迪电动卡车底盘改装机型）在城市施工中普及，零排放；氢燃料起重机（如法国 Air Liquide 试点项目）进入研发阶段。

3.极端场景专用设备
深海工程起重机（如新加坡 SSCV Thialf）最大起重量达 1.4 万吨，用于海底管道铺设；太空起重机（如 NASA “毅力号” 机械臂）应用于行星探测。

**关键里程碑时间轴** 

|时期|事件|
|---|---|
|公元前 3 世纪|古希腊应用杠杆原理，中国出现辘轳|
|1784 年|	威廉・阿姆斯特朗发明首台蒸汽起重机|
|1860 年|	钢铁结构起重机替代木质结构|
|1925 年|	履带式起重机首次用于工程施工|
|1955 年|	塔式起重机在高层建筑中普及|
|2010 年|	智能化控制系统成为起重机标配|

从古代杠杆到现代智能装备，起重机的发展史本质是动力、材料与控制技术的迭代史，持续推动人类工程能力向极限挑战。


