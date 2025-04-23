# 案例一：简单的AI运动计时器

___
## 简介 
通过训练的数据模型对比，并下到micro:bit主板上，按micro:bit主板上的“A”按钮，可以查看自己已经运动了多少秒；而按下按钮“B”，则可以查看静止不动的时间。

___
## 案例目的

1.学习Create AI项目基本操作。

___
## 所需材料
|项目|图片|数量|
|--|--|--|
|手表套件Pro|图片|1|
|micro:bit|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/microbit%20%E6%AD%A3(1).png)|1|
|USB数据线|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/usb%20cable1.png)|1|
|个人电脑|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-04.png)|1|

--
## 使用教程
1. 用Chrome或Edge网络浏览器访问[https://createai.microbit.org/](https://createai.microbit.org/)如下图所示。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-1.png)

---
2. 浏览并阅读相关知识要点，定位到“Projects”点击“Simple Al exercise timer”项目。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-2.png)

---
3. 浏览并阅读相关知识要点，然后定位至“Collect data samples”目录，点击“Open in micro:bit CreateAl”。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-3.png)

---
4. 创建新项目，并为其命名，然后点击“开始项目”。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-4.png)

---
5. 在数据样本页面中，找到“connect”并点击它。
 
   **（本项目使用预先采集的数据）**

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-5.png)

---
6. 请确保所有必需的物料和设备已经准备就绪，然后点击“下一步”。
   
（若您的个人电脑具备蓝牙连接功能，仅需准备一个micro:bit主板。若您的个人电脑不支持蓝牙连接，点击“使用micro:bit无线连接”并按照教程完成连接。）

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-6.png)

---
7. 请使用数据线将您的micro:bit主板连接至计算机，接着点击“下一步”，依照教程完成程序的下载。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-7.png)

---
8. 请等待程序下载并安装到micro:bit主板。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-8.png)

---
9. 请断开USB连接线，并开启手表套件Pro的电源，点击“下一步”。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-9.png)

---
10. 点击“下一步”按照教程完成蓝牙连接的认证过程。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-10.png)

---
11. 选择“micro:bit 主板”，然后点击“配对”，等待直到连接成功。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-11-1.png)

---
12. 若连接成功，"实时数据区"内的"X"、"Y"、"Z"线条将随着手表的晃动而相应地发生变化。。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-12.png)

---
13. 点击“训练模型”

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-13.png)

---
14. 点击“开始训练”并等待数据模型部署完成。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-14.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-14-1.png)

---
15. 点击“下一步” 按照教程完成引导。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-15.png)

---
16. 请将手表套件佩戴在您的右手手腕上，注意确保带有徽标的那一面朝外。在您进行大幅度活动时，可以观察到到“锻炼”数据模型的识别率超过80%。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-16.png)

---
17. 当你处于静止状态时，可以观察到“静止”数据模型的识别准确率超过80%。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-17.png)

---
18. 点击“在MakeCode编辑”。

![]9https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-18.png0

---
19. 用数据线连接micro:bit主板，点击“下载”。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-19.png)

---
20. 点击“下一步”
    
您下载的目标是用于采集数据的micro:bit主板，请选择“相同的micro:bit”。若您下载的目标是另一块不同的micro:bit主板，请选择“不同的micro:bit”。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-20-1.png)

---
22. 遵循教程指引完成下载后，当你处于运动状态时，手表内的micro:bit主板LED矩阵屏将显示“stick figure”图标。而在静止不动时，手表中的micro:bit主板LED矩阵屏则会显示“asleep”图标。

---
## 结果

当你处于运动状态时，手表内的micro:bit主板LED矩阵屏将显示“stick figure”图标。而在静止不动时，手表中的micro:bit主板LED矩阵屏则会显示“asleep”图标。按micro:bit主板上的“A”按钮，可以查看自己已经运动了多少秒；而按下按钮“B”，则可以查看静止不动的时间。

---
## 常见问题
