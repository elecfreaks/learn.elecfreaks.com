---
sidebar_position: 9
sidebar_label: 案例九：螃蟹
---

# 螃蟹
## 故事导入
刚结束紧张刺激的模型搭建赛，杰克就拉着小恩跑到另一个场地。赛道上，几只积木螃蟹正你追我赶，观众们围在旁边，大声喊着加油，为自己支持的 “选手” 助威。现场热闹非凡，快来和小恩、杰克一起加入这场欢乐的积木螃蟹竞速赛吧！

--- 

## 教学准备

|     名称     |            图示            |
| :----------: | :--------------------------: |
|   哪吒Pro海洋套件  |   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/nezha-pro-ocean-kit-products-introduction-002.png.png)  |

--- 
## 教学目标 

1.认识连杆机构。

2.掌握随机积木块的使用。

3.探究海洋动物的移动方式。

--- 

## 学习探究

1.知道螃蟹是怎么移动吗？

2.为什么鱼用尾巴游泳，螃蟹却是用步足爬行呢？

--- 
## 搭建步骤

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case09/nezha-pro-ocean-kit-step-09-1.png.pdf" type="application/pdf" width="100%" height="600px" />

--- 

## 硬件连接

1号电机连接哪吒扩展板“M1”端口，超声波传感器连接哪吒拓展板“J4”端口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case09/nezha-pro-ocean-kit-step-09-2.png.png)

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

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case09/nezha-pro-ocean-kit-step-09-3.png.png)

程序链接
[https://makecode.microbit.org/_3M21552mJU0s](https://makecode.microbit.org/_3M21552mJU0s)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_3M21552mJU0s"
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

超声波检测到物体距离＞2CM且＜10CM时，螃蟹随机向左或向右移动。

**图片**

---
## 扩展知识

### 螃蟹

螃蟹是软甲纲十足目短尾次目的通称，以下将从其种类分布、形态特征、生活习性、主要价值等维度展开详细介绍：

### 种类与分布

全球种类：全世界蟹类约有 4700 种.

### 栖息环境：

海洋： 多数蟹类以海为生，热带浅海种类最多，如蛙蟹科、馒头蟹科等主要生活在沿岸一带；方蟹科、沙蟹科生活在广阔的潮间带；还有一些如漂泊蟹和弓腿蟹能附着在木材或其他漂浮物上生活；不少蟹类与其他动物共栖，如豆蟹类常潜入一些软体动物的外套腔中。
淡水： 一些蟹类完全在淡水中生长繁殖，如中华绒螯蟹，在江、河、湖、溪都有分布，溪蟹主要分布于热带地区，并扩展至亚热带和温带边缘区，多在山溪石下或溪岸两旁的水草丛和泥沙间。
半咸水： 如青蟹，喜居在海淡水交汇的近岸浅海和河口处的泥沙底内。

### 形态特征
身体结构： 螃蟹身体分为头胸部与腹部。头胸部的背面覆以头胸甲，形状因种而异，额部中央具第 1、2 对触角，外侧是有柄的复眼，口器包括 1 对大颚，2 对小颚和 3 对颚足。头胸甲两侧有 5 对胸足，腹部退化，扁平，曲折在头胸部的腹面。
附肢特点： 雄性腹部窄长，多呈三角形，只有前两对附肢变形为交接器；雌性腹部宽阔，第 2-5 节各具 1 对双枝型附肢，密布刚毛，用以抱卵。第一对螯足，既是掘洞的工具，又是防御和进攻的武器，其余四对是用来步行的步足，每只脚都由七节组成，关节只能上下活动。

### 生活习性
觅食行为： 绝大部分的蟹类为杂食性，仅有一部分为肉食性，还有少部分是植食性或腐食性。肉食性蟹类会运用多种方法捕获猎物，如埋伏、潜袭或是集中地追逐；植食性蟹类主要包括食藻类和食维管束植物两种类型。
自我保护： 蟹类具有多种自我保护功能，大螯可用于自卫和格斗，甲壳上的硬刺能让捕食者难以靠近，部分蟹类还善于伪装。此外，蟹类在遇到危险时常有自切和再生现象，大螯以及 4 对步足的自切较为常见。
活动特点： 绝大部分蟹类利用 4 对步足爬行和奔跑，通常斜向或直向，也有部分蟹类使用较少对数的步足行动。有些蟹类行动速度很快，如沙蟹在沙滩上快速奔跑速度可达 1-1.6 米每秒。善于游泳的蟹类，如梭子蟹，使用桨形的步足向前或向后打水移动。
攻击防御： 蟹类之间的攻击性互动通常分为一系列步骤或阶段，攻击行为一般发生在雄性蟹类之间，起始通常是从侧面螯的展示开始，接着通过彼此前足的交替伸展和收缩来进行推拉运动，最后收缩螯肢肌肉来施加力量，决出胜负。

### 主要价值
食用价值： 蟹肉味道鲜美，营养丰富，含有丰富的蛋白质、微量元素以及维生素等。常见的食用蟹有三疣梭子蟹、远海梭子蟹、青蟹和中华绒螯蟹等。
药用价值： 螃蟹性寒、味咸，归肝、胃经，有清热解毒、补骨添髓、养筋活血、通经络等功效，对于淤血、损伤、黄疸、腰腿酸痛和风湿性关节炎等疾病有一定的食疗效果。
经济价值： 蟹类的养殖和捕捞是许多地区重要的经济产业，为当地带来了可观的收入，同时也带动了相关产业的发展，如加工、运输、销售等。
生态价值： 螃蟹在生态系统中扮演着重要角色，它们是许多水生生物的食物来源，同时也通过摄食和挖掘等活动影响着水生生态系统的物质循环和能量流动。

