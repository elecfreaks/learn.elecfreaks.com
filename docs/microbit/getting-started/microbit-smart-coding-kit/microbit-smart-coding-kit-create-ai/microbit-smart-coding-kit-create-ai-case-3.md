# 案例三：音乐指挥家

___
## 简介 
通过采集与训练自定义手势数据，让micro:bit自动播放音乐。
___
## 案例目的

1.学习Create AI自定义手势的数据采集方法。
___
## 所需材料
|项目|图片|数量|
|--|--|--|
|手表套件Pro|图片|1|
|micro:bit|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/microbit%20%E6%AD%A3(1).png)|1|
|USB数据线|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/usb%20cable1.png)|1|
|个人电脑|![](microbit-smart-climate-kit-case-01-04.png (150×150))|1|
___
## 使用教程。

---
### 步骤一：新建项目

1. 用Chrome或Edge网络浏览器访问[https://createai.microbit.org/](https://createai.microbit.org/)如下图所示，点击“开始使用”。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case03/microbit-smart-coding-kit-create-ai-1.png)

2. 点击“新的会话”并给该项目命名。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case03/microbit-smart-coding-kit-create-ai-2.png)

___
### 步骤二：连接micro:bit 主板

1. 使用数据线将您的micro:bit主板连接至计算机，点击“连接”。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case03/microbit-smart-coding-kit-create-ai-3.png)

2. 准备好对应的物料设备，点击“下一步”。
   
（若您的个人电脑具备蓝牙连接功能，仅需准备一个micro:bit主板。若您的个人电脑不支持蓝牙连接，点击“使用micro:bit无线连接”并按照教程完成连接。）

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-6.png)

3. 请使用数据线将您的micro：bit主板连接至计算机，接着点击“下一步”，依照教程完成程序的下载。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-7.png)

4. 请等待程序下载并安装到micro：bit主板。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-8.png)

5. 断开USB连接线，并打开手表套件Pro电源，点击“下一步”。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-9.png)

6. 点击“下一步”按照教程完成蓝牙连接的认证过程。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-10.png)

7. 选择“micro:bit 主板”，然后点击“配对”，等待直到连接成功。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-11-1.png)

8. 若连接成功，"实时数据区"内的"X"、"Y"、"Z"线条将随着手表的晃动而相应地发生变化。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case03/microbit-smart-coding-kit-create-ai-13.png)

___
### 步骤三：数据采集

1. 在“行动名称”输入框“Action One”进行命名。点击“三角形”图标，即可选择该行动在micro:bit上显示的相应图案。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case03/microbit-smart-coding-kit-create-ai-14.png)

2. **请将手表套件佩戴在右手手腕上，确保徽标朝外，同时让micro:bit主板的引脚靠近身体一侧。**

3. 如何采集数据，这里介绍三种方法。

**方法一：**

点击“记录”开始收集该动作的陀螺仪数据。屏幕上将显示一个3.2.1的倒计，当“GO”字样出现时，请迅速晃动你的右手。根据需要采集的数据样本数量，重复此过程相应次数。

**注意：** 在采集动作数据时，尽量确保每次右手都处于大致相同的位置。在采集过程中，分别记录下该动作在快速、中速、慢速频率下的数据，这样有助于获取更高质量的有用数据。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case03/microbit-smart-coding-kit-create-ai-16.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case02/microbit-smart-coding-kit-create-ai-case21-1.png)

**数据采集原理。**
CreateAI 通过采集micro:bit主板陀螺仪的“X”、“Y”、“Z”轴数据，并以线条图的形式将这些数据绘制出来，提取特定时间段内的“X”、“Y”、“Z”轴数据，形成一组数据样本。

**方法二：**

点击记录按钮旁边的三个竖点，选择“记录10个样本”这种模式会连续采集10个样本，但是采集每个样本之间都会有倒计时。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case03/microbit-smart-coding-kit-create-ai-16-1.png)

**方法三：**

点击记录按钮旁边的三个竖点，选择“录制10秒”这种模式在倒数结束后，会连续的采集10个数据样本。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case03/microbit-smart-coding-kit-create-ai-16-2.png)

4. 在完成动作一数据采集后，点击“添加动作”以创建新的动作数据集，然后命名为“静止”，并开始采集动作数据。注意：采集数据时可以采集多个角度静止状态作为数据样本。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case03/microbit-smart-coding-kit-create-ai-14-1.png)

---
### 步骤四：训练模型与数据模型识别校对

1 .点击“训练模型”并等待模型训练完成。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case03/microbit-smart-coding-kit-create-ai-18.png)

2 .检测动作数据模型的准确率超过80%。若所有项目均达到此准确率，则完成数据采集。若某一动作数据模型的准确率低于80%，则需返回数据采集页面，重新采集数据并进行训练，直至这个动作数据模型的准确率达到或超过80%。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case03/microbit-smart-coding-kit-create-ai-20.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case03/microbit-smart-coding-kit-create-ai-21.png)

___
### 步骤五：程序编写与下载

1. 点击“在MakeCode编辑”。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-18.png)
___
2. 请根据下图所示，完成程序的编写，并使用数据线将micro:bit主板与个人电脑连接。

![]()
___
3. 点击“下一步”
如果你下载位置是数据采集用micro:bit的主板，则选择“相同的micro: bit”, 如果你下载是另一块micro:bit主板，则选择“不同的micro：bit”。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-20-1.png)
___
4. 按照教程指引完成下载后，当你轻轻晃动手腕，micro:bit主板便会播放音乐。

---
## 结果

当你轻轻晃动手腕，micro:bit主板便会播放音乐。

---
## 常见问题



