﻿
# 课程_30 反应时间测试仪
---
- 用以Python为编程语言的micro:bit和OLED做一个小的测试游戏。由莱佛士书院的Jensen设计编辑。



## 目标
---

 1. 组装反应时间测试仪
 2. 测试的时候尽量不要损坏零件

 
              
## 所需材料
---
- 1 x Tinker Kit (或OLED显示屏)
- 1 x 头脑
- 1 x 你


## 步棸 1 – 输入/输出
---

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-tinker-kit/images/iEF8mjS.jpg)

- 将micro:bit和面包板连接。

- 连接LED至pin12数码引脚。

- 连接光感器至另一引脚pin 8。

- 棕色线至G (接地), 红色线至 V (电压) 以及 橙色线至S (信号)。

- 以上操作可以让我得知灯是开还是关。

- 将OLED显示屏连接至I^2C引脚。

- 连接micro:bit至电脑，下载Mu编辑器。



## 步棸 2 – 文件转换
---

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-tinker-kit/images/GTOykBX.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-tinker-kit/images/GheA49n.png)

- 我们需要下载一些模块，将会用于此项目。

- 在连接中下载zip文档（模块）。

- 在Mu编辑器中编写代码 (如上图1)  输入文件。

- 确认文件都在本项目同一个文件夹中。

- 将电脑上的文件转换至micro:bit。

- 在Windows中，确保把文件放在用户的/“用户名”/文件夹（mu-code）下，我的MU-编辑器会检测到文件内的MU代码。

- 这些文档不是micro:bit自带的，是需要传输给micro:bit的。


## 步棸 3 – 屏幕载入
---

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-tinker-kit/images/a673xL0.png)


- 此步棸不属于必须步棸, 但是可给你的程序加入一些基本性能。

- 在OLED屏上显示此载入。

- 使用模块 “add_text”，可以在屏幕上显示文本及其他字符。

- 运用功能“loading_screen()（屏幕载入）”可放映动画。

- 如果你想给屏幕载入添加更多变量，参考后文。


## 步棸 4 – 编程
---

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-tinker-kit/images/FFzB46b.png)

- 这是它真实的自测。

- 按下按钮后，屏幕会显示指令，在此我们需要设置一个等待时间。

- 初始数字转换为字符串后，我们会在末尾添加“000”随机生成数字并解析。

- 变量time1 和 time2 在“#”前适用于2个任意点。（显示指令）

- 需要注意的是在micropython和micro:bit中，time模组被utime模组替代，需要输入的是utime。



## 步棸 5 – 加点逻辑吧
---

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-tinker-kit/images/brOmadg.png)

- 此步棸为计算和显示游戏反应时间。

- 通过计算玩家按下按钮和显示指令的时间，来完成此步棸。

- 然后，OLED显示屏上会显示玩家反应时间。


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-tinker-kit/images/siPzaXf.jpg)



## 完工效果:
---

- 利用光感器和LED开始游戏。

- 可感知光线，一旦光线被感知，游戏将会开始。

动画很简单：游戏开始前显示倒数“3”, “2”，“1”。代码可自行解读。
