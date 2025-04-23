# 案例四：模拟摔倒报警器
___
## 简介 
通过采集与训练自定义手势数据，模拟人摔倒后发出警报。

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
|个人电脑|![]((microbit-smart-climate-kit-case-01-04.png (150×150))|1|

___
## 使用教程。
1. 用Chrome或Edge网络浏览器访问[https://createai.microbit.org/](https://createai.microbit.org/)如下图所示，点击“开始使用”。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case03/microbit-smart-coding-kit-create-ai-1.png)
___
2. 点击“新的会话”并给该项目命名。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case03/microbit-smart-coding-kit-create-ai-2.png)
___
3. 使用数据线将您的micro:bit主板连接至计算机，点击“连接”。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case03/microbit-smart-coding-kit-create-ai-3.png)
___
4. 准备好对应的物料设备，点击“下一步”。
   
（若您的个人电脑具备蓝牙连接功能，仅需准备一个micro:bit主板。若您的个人电脑不支持蓝牙连接，点击“使用micro:bit无线连接”并按照教程完成连接。）

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-6.png)
___
5. 请使用数据线将您的micro：bit主板连接至计算机，接着点击“下一步”，依照教程完成程序的下载。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-7.png)

6. 请等待程序下载并安装到micro：bit主板。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-8.png)

___
7. 断开USB连接线，并打开手表套件Pro电源，点击“下一步”。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-9.png)
___
8. 点击“下一步”按照教程完成蓝牙连接的认证过程。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-10.png)
___

9. 选择“micro:bit 主板”，然后点击“配对”，等待直到连接成功。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-11-1.png)

---
10. 若连接成功，"实时数据区"内的"X"、"Y"、"Z"线条将随着手表的晃动而相应地发生变化。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case03/microbit-smart-coding-kit-create-ai-13.png)
___
11. 在“行动名称”输入框“Action One”进行命名。点击“三角形”图标，即可选择该行动在micro:bit上显示的相应图案。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case03/microbit-smart-coding-kit-create-ai-14.png)

___
12. **请将手表套件安装在塑料瓶的中间部分，确保micro:bit按键A朝上，** 然后用手轻轻推倒塑料瓶来模拟人体跌倒的过程，以收集数据。



___
13. 点击“记录”开始收集摔倒数据样本，屏幕上将显示一个3.2.1的倒计，当“GO”字样出现时，请轻轻推倒塑料瓶。根据需要采集的数据样本数量，重复此过程相应次数。
**注意：** 在采集动作数据时，可以尝试让塑料瓶往不同的方向倒下，这样有助于获取更高质量的有用数据。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case03/microbit-smart-coding-kit-create-ai-16.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case02/microbit-smart-coding-kit-create-ai-case21-1.png)

___
**采集原理说明**。
Create AI 通过采集micro:bit主板陀螺仪的“X”、“Y”、“Z”轴数据，并以线条图的形式将这些数据绘制出来，提取特定时间段内的“X”、“Y”、“Z”轴数据，形成一组数据样本。

![]()
___
14.  在完成动作一数据采集后，点击“添加动作”以创建新的动作数据集，然后命名为“静止”，并开始采集动作数据。注意：采集数据时可以采集多个角度静止状态作为数据样本。

![]()
___
15. 点击“训练模型”并等待模型训练完成。

![]()
___
16. 检测动作数据模型的准确率超过80%。若所有项目均达到此准确率，则完成数据采集。若某一动作数据模型的准确率低于80%，则需返回数据采集页面，重新采集数据并进行训练，直至这个动作数据模型的准确率达到或超过80%。

![]()
___
17. 点击“在MakeCode编辑”。

![]()
___
18. 请根据下图所示，完成程序的编写，并使用数据线将micro:bit主板与个人电脑连接。

![]()
___
19. 点击“下一步”
如果你下载位置是数据采集用micro:bit的主板，则选择“相同的micro: bit”, 如果你下载是另一块micro:bit主板，则选择“不同的micro：bit”。

![](![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-20-1.png))
___
20. 按照教程指引完成下载后，用手轻轻推倒塑料瓶来模拟人体跌倒的过程，检测到塑料瓶倒下micro:bit发出警报。

![]()
---
## 结果



---
## 常见问题

