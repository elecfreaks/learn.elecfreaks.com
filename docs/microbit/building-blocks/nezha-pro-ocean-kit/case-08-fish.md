---
sidebar_position: 8
sidebar_label: 案例八：鱼
---

# 灯塔
## 故事导入
哪天夜晚小恩在岛上朋友帮助下，成功登岛。小恩已经在岛上待了两天，结识了新朋友杰克。这天杰克兴奋地告诉他，岛上正在举办丰收节，有许多有趣活动，还拉着他去参加积木模型搭建大赛。两人匆匆赶到现场，只听主持人宣布：“今年主题是搭建鱼模型，看谁搭建的模型最神似。快来和小恩、杰克一起加入这场欢乐积木搭建比赛吧！

--- 

## 教学准备

|     名称     |            图示            |
| :----------: | :--------------------------: |
|   哪吒Pro海洋套件  |   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/nezha-pro-ocean-kit-products-introduction-002.png.png)  |

--- 
## 教学目标 

1.认识超声波传感器。

2.掌握超声波积木块使用。

3.探究海洋动物的移动方式。

--- 

## 学习探究

1.鱼在水中是怎么移动的，是所有的鱼都是用尾巴进行移动吗？

2.你知道海洋生物有哪些移动方式吗？

--- 
## 搭建步骤

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case08/nezha-pro-ocean-kit-step-08-1.png.pdf" type="application/pdf" width="100%" height="600px" />

--- 

## 硬件连接

1号电机连接哪吒扩展板“M1”端口，超声波传感器连接哪吒拓展板“J1”端口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case08/nezha-pro-ocean-kit-step-08-2.png.png)

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

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case08/nezha-pro-ocean-kit-step-08-3.png.png)

程序链接
[https://makecode.microbit.org/_amkeM9L6k1xE](https://makecode.microbit.org/_amkeM9L6k1xE)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_amkeM9L6k1xE"
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

超声波传感器检测物体距离越近，鱼游动幅度越大，当超声波检测到距离为0时，鱼停止游动。

**图片**

---
## 扩展知识

### 海洋动物移动方式

 海洋动物的移动方式丰富多样，这是它们为适应海洋环境（如水流、水压、食物分布等）长期进化的结果。不同种类的海洋动物因体型、生活习性和生存需求的差异，发展出了独特的移动策略，以下从主要类群展开详细介绍：
  
### 一、游泳类动物：主动快速移动

这类动物通过身体特定部位的摆动或划水来实现高效游动，是海洋中最活跃的移动者。

#### 鱼类：

依靠躯干和尾部的摆动产生动力，这是绝大多数鱼类的主要移动方式。例如鲨鱼，通过尾部左右摆动推动身体前进，尾鳍的形状（如新月形的金枪鱼尾鳍）还能减少水阻，使其成为游泳速度的佼佼者（金枪鱼时速可达 60-80 公里）。
部分鱼类辅助使用鳍：胸鳍和腹鳍负责平衡和转向，背鳍和臀鳍防止身体侧翻。比如比目鱼，通过胸鳍和腹鳍的协调划动，能在海底灵活移动。

#### 鲸豚类：

作为哺乳动物，它们依靠水平尾鳍（尾叶）上下摆动前进，与鱼类的左右摆动不同。这种方式能更高效地利用水流，蓝鲸等大型鲸类虽体型庞大，但游动时速可达 20-30 公里，紧急时能加速到 50 公里以上。
鳍肢（胸鳍）主要用于转向和减速，如海豚通过灵活的鳍肢完成跳跃、旋转等复杂动作。

#### 头足类：

乌贼、章鱼等通过 **“喷射推进”** 移动：它们收缩外套膜，将水从漏斗状的虹吸管中快速喷出，利用反作用力推动身体前进，这种方式能让乌贼瞬间加速到每小时 15 公里以上，便于躲避天敌。

### 二、爬行与匍匐类：贴底缓慢移动

这类动物多生活在海底（潮间带、浅海或深海），移动速度较慢，以底栖生物为食或附着生存。

#### 甲壳类：

螃蟹通过步足横向爬行，其 8 对步足中，前 3 对用于行走，后 5 对辅助，特殊的关节结构使其能在沙滩、岩石上灵活移动，部分螃蟹（如梭子蟹）还能通过尾部摆动短暂游泳。
龙虾则用步足缓慢爬行，遇危险时会弯曲尾部猛地弹向后方逃生。

#### 软体动物：

贝类（如蛤蜊、牡蛎）通常用斧足挖掘泥沙或缓慢爬行，斧足肌肉的伸缩能带动身体移动。
蜗牛（如笠螺）依靠腹足上的黏液和肌肉波浪状收缩，在岩石表面匍匐前进。

#### 棘皮动物：

海星通过管足移动：管足是海星腕足下的管状结构，通过水压控制伸缩，数百只管足协调配合，能让海星在海底 “行走”，甚至攀附在垂直的岩石上。
海参则靠体壁肌肉的收缩和伸展，像蚯蚓一样缓慢蠕动，遇危险时会吐出内脏迷惑天敌，同时加速逃离。

### 三、漂浮与浮游类：随水流被动移动

这类动物体型微小或身体结构特化，无法主动对抗水流，主要随洋流漂浮，是海洋食物链的基础。

#### 浮游动物：

如磷虾、水母、桡足类等，体型通常在毫米级，通过纤毛（桡足类）或伞状体收缩（水母）进行微弱运动，但主要依赖洋流扩散。水母的伞状体收缩时，水流从下方喷出，能实现短距离上浮或下沉，但整体仍随波逐流。

#### 某些大型动物的幼体：

海龟、鱼类的幼体在孵化后，会进入浮游阶段，依靠卵黄囊提供能量，随洋流漂浮到适宜的生长海域，直到发育到一定阶段才开始主动游动。

### 四、特殊移动方式

#### 跳跃与滑翔：

飞鱼能通过宽大的胸鳍在空中滑翔，它们在水中加速后，尾部猛烈摆动使身体跃出水面，胸鳍展开可滑行数十米，以躲避金枪鱼、海豚等天敌。

弹涂鱼（两栖鱼类）不仅能在水中游泳，还能依靠胸鳍和尾鳍在泥滩上跳跃或爬行，甚至爬上红树林的树干。

#### 附着与移动结合：

藤壶幼体阶段会随水流漂浮，找到合适的岩石、船底等附着物后，分泌钙质外壳固定，成年后不再移动，但通过过滤水流获取食物。
珊瑚虫幼虫随洋流漂浮，附着在礁石上后发育成成体，形成珊瑚礁，整体群落固定，但单个虫体可通过触手伸缩捕捉食物。

### 总结
海洋动物的移动方式与其生存环境、食性和防御策略紧密相关：主动游泳者追求速度和效率，底栖爬行类注重稳定性和隐蔽性，浮游类则依赖洋流扩散，特殊类群则演化出跳跃、滑翔等独特技能。这些多样的移动方式共同构成了海洋生态系统的动态平衡，也是生物适应性进化的生动体现。
