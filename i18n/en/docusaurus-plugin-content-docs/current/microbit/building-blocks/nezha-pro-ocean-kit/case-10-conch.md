---
sidebar_position: 10
sidebar_label: 案例十：海螺
---

# 海螺
## 故事导入

小恩还沉浸在螃蟹竞速的兴奋中，就被杰克拽到新场地。主持人宣布：“接下来是海螺爬行大赛，谁搭的海螺模型爬得最慢，谁就是冠军！” 杰克两眼放光，冲小恩挑眉：“瞧见没？搭海螺我可是行家！敢不敢和我一决高下？

--- 

## 教学准备

|     名称     |            图示            |
| :----------: | :--------------------------: |
|   哪吒Pro海洋套件  |   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/nezha-pro-ocean-kit-products-introduction-002.png.png)  |

--- 
## 教学目标 

1.认识蜗轮蜗杆

2.掌握逻辑运算积木块的使用。

3.探究海洋动物的移动方式。

--- 

## 学习探究

1.你知道海螺是怎么移动的吗？

2.为什么海螺是采用腹足爬行。

--- 
## 搭建步骤

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case10/nezha-pro-ocean-kit-step-10-1.png.pdf" type="application/pdf" width="100%" height="600px" />

--- 

## 硬件连接

1号电机连接哪吒扩展板“M1”端口；

超声波传感器连接哪吒拓展板“J1”端口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case10/nezha-pro-ocean-kit-step-10-3.png.png)

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

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case10/nezha-pro-ocean-kit-step-10-2.png.png)

程序链接
[https://makecode.microbit.org/_hXXKfwCukXaK](https://makecode.microbit.org/_hXXKfwCukXaK)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_hXXKfwCukXaK"
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
超声波传感器检测距离大＞5CM，海螺停止移动，检测距离＜5CM，海螺向前移动。


**图片**

---
## 扩展知识

###  海螺为什么用腹足爬行

海螺之所以主要依靠底部爬行，是由其生理结构、生存需求及进化适应共同决定的，具体原因如下：

### 1. 生理结构决定运动方式
海螺属于腹足纲软体动物，其最核心的运动器官是腹足—— 这是一个宽大、扁平的肌肉质足，位于身体腹面（底部）。腹足通过波浪状的肌肉收缩产生动力：肌肉从前端向后端依次收缩，带动身体缓慢向前移动，同时腹足会分泌黏液，减少与底部（如岩石、泥沙）的摩擦，让爬行更顺畅。
这种结构与昆虫的足、脊椎动物的四肢不同，无法支撑身体离开地面跳跃或奔跑，只能紧贴底部借助摩擦力移动，因此自然形成 “底部爬行” 的运动模式。

### 2. 生存环境的适应
海螺多栖息于潮间带、浅海海底或淡水水域的底部，周围环境以岩石、泥沙、珊瑚礁等为主。底部爬行能让它们更高效地：
获取食物： 海螺以底部的藻类、有机碎屑、微生物或小型无脊椎动物为食，贴近底部便于直接摄食附着在岩石或泥沙上的食物。
躲避天敌： 底部的缝隙、岩石下方或泥沙中是天然的隐蔽场所，爬行时能快速躲入其中，减少被捕食者（如鱼类、海鸟）发现的概率。
适应底质环境： 不同海螺对底质（如沙质、泥质、岩质）有特定偏好，底部爬行能让它们更好地附着在适应的底质上，避免被水流冲走。

### 3. 能量消耗与生存策略
海螺的代谢速率较低，能量储备有限，底部爬行是一种节能的运动方式。相比游泳或跳跃，爬行所需的能量更少，能让它们在食物获取不稳定的环境中更高效地分配能量，专注于生长和繁殖。
此外，多数海螺外壳厚重，重心较低，底部爬行能保持身体平衡，避免因外壳重量导致倾倒，这也是长期进化中形成的稳定生存策略。

综上，海螺的底部爬行是其生理结构、栖息环境及能量利用等多方面因素共同作用的结果，是对自然环境的高效适应。
