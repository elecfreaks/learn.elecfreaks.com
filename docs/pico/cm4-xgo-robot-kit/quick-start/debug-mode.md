---
sidebar_position: 6
sidebar_label: 调试模式
---

# 调试模式

 ## 一、移除后盖

首先拆除顶部、左右两侧、尾部的六颗螺丝。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/cm4-xgo-debug-01.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/cm4-xgo-debug-02.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/cm4-xgo-debug-03.png)

此时可将后盖拿起，注意不要断开开关线。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/cm4-xgo-debug-04.png)



 ## 二、确定串口端口号

首先让机器狗处于开机状态，然后插入TYPE-C数据线，让机器狗和电脑相连接。

打开电脑上的设备管理器(在底部任务栏的搜索框中搜索可直接打开)

可以在端口栏目中看到名称为USB-SERIAL CH340的设备，COM4即为串口号

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/cm4-xgo-debug-05.png)



 ## 三、编写代码调试

```python
import xgolib
xgo = xgolib.XGO("COM4", 115200)
```

在实例化对象时传入上述确定好的端口号。

 ## 四、关机

关机前需要将 Type-C 数据线移除，然后再将机器狗断电。
