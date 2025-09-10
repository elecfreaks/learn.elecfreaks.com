---
sidebar_position: 14
sidebar_label: 案例十四：模拟清理海上垃圾
---

# 模拟清理海上垃圾

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/tupian/nezha-pro-ocean-kit-step-14-00.png.png)

## 故事导入

养殖场修复完毕，杰克望着海面漂浮的暴风雨遗留垃圾，满脸愁容：“这些垃圾要是跟着洋流漂走，海洋生物和环境都得遭殃。” 小恩拍拍他的肩膀：“别担心！咱们一起想办法，肯定能把它们清理干净！”小伙伴有好的方案帮忙处理海上的垃圾吗？除了处理海上垃圾还可以通过哪些方式来减少垃圾对海洋的污染。

--- 

## 教学准备

|     名称     |            图示            |
| :----------: | :--------------------------: |
|   哪吒Pro海洋套件  |   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/nezha-pro-ocean-kit-products-introduction-002.png.png)  |

--- 
## 教学目标 

1.了解海洋垃圾的危害性，

2.尝试针对海洋垃圾回收设计一个可行的方案。


--- 

## 学习探究

1.海洋垃圾的是如何产生的，海洋垃圾的危害有哪些，请查阅相关资料或者小伙伴讨论。

2.如何设计一个海洋垃圾回收装置，把自己的想法通过文字或者绘画的方式展示出来，并进行分享。

--- 
## 搭建步骤

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case14/nezha-pro-ocean-kit-14-1.png.pdf" type="application/pdf" width="100%" height="600px" />

--- 

## 硬件连接

碰撞传感器连接哪吒扩展板“J1”与“J2”端口；

超声波传感连接哪吒扩展板“J4”端口；

1号电机连接哪吒扩展板“M1”端口；

2号电机连接哪吒扩展板“M4”端口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case14/nezha-pro-ocean-kit-14-2.png.png)

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

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case14/nezha-pro-ocean-kit-14-3.png(1).png)

程序链接
[https://makecode.microbit.org/_CLeCmEPRAHyP](https://makecode.microbit.org/_CLeCmEPRAHyP)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_CLeCmEPRAHyP"
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

超声波传感器检测距离＞20CM，两个触碰传感器的被按下，垃圾清理装置向后退；如果左边碰撞传感器被按下，垃圾清理装置向右转动，如果右边碰撞传感器被按下，垃圾清理装置向左转动，否则垃圾清理装置向前移动。超声波传感器检测距离＜20CM，如果左边碰撞传感器被按下，垃圾清理装置向右转动，如果右边碰撞传感器被按下，垃圾清理装置向左转动，否则右转


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/GIF/nezha-pro-ocean-kit-step-14-00.png.gif)

---
## 扩展知识

### 海洋垃圾

海洋垃圾是指人类活动产生的各类废弃物进入海洋环境后形成的污染物，是全球性海洋生态环境问题之一，其成分以塑料为主（占比超 70%），还包括玻璃、金属、织物、渔网等，对海洋生态、人类健康及社会经济均构成严重威胁。

### 一、主要来源

海洋垃圾的来源可分为陆地来源和海上来源，其中陆地来源占比约 80%-85%：

**陆地来源**：城市生活垃圾（如塑料袋、饮料瓶）通过河流、雨水冲刷、沿海垃圾填埋场渗漏等进入海洋；农业塑料薄膜、工业废料（如塑料颗粒）随径流汇入；沿海旅游活动丢弃的垃圾（如食品包装）等。

**海上来源**：船舶航行中丢弃的垃圾（如塑料餐具、渔网）；渔业活动中废弃的渔具（如刺网、浮标，被称为 “幽灵渔具”）；海上石油平台、钻井作业产生的废弃物；船舶事故泄漏的货物等。

### 二、主要危害

**威胁海洋生物生存**：

海洋动物（如海龟、海鸟、鲸类）常误食塑料垃圾（如塑料袋被误认为水母），导致消化道阻塞死亡；

废弃渔网、塑料环等会缠绕海洋生物（如海豹、珊瑚），造成窒息、肢体损伤或无法捕食。

**破坏海洋生态系统**：

垃圾覆盖珊瑚礁、海草床等栖息地，阻碍光合作用，导致海洋植物死亡，破坏食物链基础；

微塑料（直径＜5 毫米的塑料颗粒）被浮游生物、贝类等摄入，通过食物链逐级累积，最终影响整个生态系统的稳定性。


**危害人类健康**：

微塑料可通过海产品（如鱼类、贝类）进入人体，其携带的有毒化学物质（如双酚 A、邻苯二甲酸酯）可能干扰内分泌系统，增加疾病风险。

**影响社会经济**：

海滩垃圾破坏旅游景观，降低海滨旅游业收入；

渔网缠绕船舶螺旋桨、堵塞港口，增加航运成本；清理海洋垃圾的费用高昂（全球每年超数十亿美元）。

###  三、治理与应对措施

海洋垃圾的治理需 “预防为主、多方协作”，涵盖源头控制、技术清理、政策约束及公众参与：

**源头减量与管控**：

减少一次性塑料制品（如塑料袋、吸管）的生产和使用，推广可降解材料；

完善沿海城市垃圾回收与处理系统，避免垃圾直接进入海洋；

规范渔业活动，要求渔民回收废弃渔具，推广环保渔具。

**技术清理与监测**：

开展海滩、港口垃圾定期清理行动；

研发海洋垃圾收集装置（如 “海洋吸尘器”“垃圾拦截系统”），针对洋流汇聚的垃圾带（如太平洋垃圾带）进行集中清理；

利用卫星遥感、无人机等技术监测海洋垃圾分布，提升治理效率。

**政策与国际合作**：

各国制定法律（如欧盟 “限塑令”、中国 “禁塑令”），禁止或限制特定塑料制品；

通过国际公约（如《防止船舶污染国际公约》《巴塞尔公约》塑料废物修正案）协调全球行动，管控跨境垃圾转移。

**公众意识提升**：

加强科普教育，倡导 “零废弃” 生活方式；

鼓励公众参与海洋垃圾清理志愿活动，推动企业承担环保责任。

海洋垃圾的治理是一项长期任务，需全球各国、企业及公众共同努力，从 “减少产生” 到 “有效清理” 形成闭环，才能守护海洋生态的可持续发展。
