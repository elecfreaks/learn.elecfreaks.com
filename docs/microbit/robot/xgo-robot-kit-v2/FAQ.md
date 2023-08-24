---
sidebar_position: 9
sidebar_label: FAQ
---

# 常见问题解决办法

## 机器狗走不直

1. 机器狗是通过陀螺仪纠偏的，开机的时候需要将机器狗放在地面或者桌子上，按下开关后陀螺仪会有3-5s的初始化过程，在此其间切勿移动机器狗，待开关灯常亮后再操作。

2. 如果排除陀螺仪初始化的问题后机器狗行走依然偏差很大，则需要对机器狗重新标定。

## 重新标定机器狗

当您发现您的机器狗姿态不正常时，如站立姿态时，某条腿严重偏离导致四条腿无法同时着地或者明显身体歪斜，很有可能是由于螺丝松动或舵机滑齿导致初始位置偏离预设值，此时您可以进行初始位置标定，以重新校准机器狗初始位置预设值。

1. 打开XGO APP，通过蓝牙连接上机器人后，点击设置按钮按钮，以开发者身份运行，如下图所示。

![](./images/microbit-xgo-lite2-faq-04.png)

2. 返回主页面，点击标定图标。

![](./images/microbit-xgo-lite2-faq-05.png)

3. 进入标定页面，点击开始标定。

![](./images/microbit-xgo-lite2-faq-07.png)

4. 此时机器狗的舵机将不再输出力矩，允许您转动所有关节。将机器狗按照下图姿势摆放，注意，使每条腿肩部垂直于身体，大腿垂直于地面，小腿垂直于大腿,**将夹爪打开至最大量程**，机械臂折叠放在背上，摆放是否垂直将直接影响机器狗工作时的姿态。

![](./images/microbit-xgo-lite2-faq-01.png)

![](./images/microbit-xgo-lite2-faq-02.png)

5. 摆放标准后，在标定界面中点击“完成标定”按钮，10秒后机器狗将恢复初始站立姿势。

![](./images/microbit-xgo-lite2-faq-06.png)

![](./images/microbit-xgo-lite2-faq-03.png)

## 更换舵机

以更换膝关节舵机为例，图示更换舵机。**注意：机器狗舵机共有15个不同的ID,必须使用相同ID替换**。

舵机更换视频教程链接：https://www.elecfreaks.com/download/xgo/XGO-LITE2_servo_replacement.mp4

步骤一，打开机器狗后盖，从驱动板上拔掉损坏的膝关节舵机线。

![](./images/microbit-xgo-lite2-faq-08.png)



步骤二，拆掉膝关节舵机主副舵盘的舵盘螺丝，把小腿取下来。

![](./images/microbit-xgo-lite2-faq-09.png)



步骤三，取下损坏的舵机，注意不要使劲拉扯舵机线。

![](./images/microbit-xgo-lite2-faq-10.png)

步骤四，把膝关节舵机线穿过对应的位置，并把舵机固定在大腿钣金上。

![](./images/microbit-xgo-lite2-faq-11.png)



![](./images/microbit-xgo-lite2-faq-12.png)



步骤五，把小腿固定在主副舵盘上，注意小腿和大腿需要形成90°直角。

![](./images/microbit-xgo-lite2-faq-13.png)



步骤六，把线插在主板上，关闭机器狗上盖，开机并重新标定机器狗。

![](./images/microbit-xgo-lite2-faq-14.png)
