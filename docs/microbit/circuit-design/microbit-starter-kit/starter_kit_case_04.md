# 课程_04 光敏二极管

![](./images/MwngMAi.jpg)

## 简介
---
光敏二极管是一种半导体器件，能够将光能转换成电能。光控开关通常就是以光敏电阻为核心元件。本次实验，我们通过光敏二极管来控制micro:bit5x5LED屏幕显示爱心图标。

## 元件清单
---
### 硬件：
- 1 x micro:bit
- 1 x USB线
- 1 x micro:bit面包板扩展板
- 1 x 面包板83 x 55 mm
- 1 x 光敏二极管
- 1 x 10kΩ电阻
- 若干跳线

**温馨提示：如果你需要以上所有元件，你可以购买我们的[Elecfreaks小小科学家套件](https://item.taobao.com/item.htm?ft=t&id=597096675822)。**

![](./images/W4tseua.jpg)

## 主要元件介绍
---
### 光敏二极管

光敏二极管是一种半导体器件，能够将光能转换成电能。它是一种特殊设计的二极管，用于检测和测量光的强度、光的频率或者光的功率。

光敏二极管的基本原理是光电效应，即当光照射到半导体材料上时，光子的能量被吸收，使得半导体中的电子被激发到导带，从而产生电流。光敏二极管的结构中通常包含一个P-N结，光照射在P-N结的区域上，形成一个光生载流子。当外加电压施加在光敏二极管上时，光生载流子的移动会导致电流的流动，从而检测到光的存在。

![](./images/jS03zGQ.jpg)

## 实验步骤
---
### 硬件连接
根据下面的图片将你的元件连接起来：

- 1.将光敏二极管与P0口连接

- 2.将10kΩ电阻与光敏二极管并连（请注意光敏二极管的方向，长的一端为正极）

![](./images/FtQDhiS.jpg)

连接完成后如图:

![](./images/TMd3Fq8.jpg)

### 软件

[微软Makecode在线编辑器:makecode.microbit.org](https://makecode.microbit.org/)



### 如图所示编写程序

![](./images/case_04_01.png)

### 代码详解
- 1.当开机时，读取模拟电压作为亮度的参考值。

![](./images/case_04_02.png)

- 2.在无限循环程序块中，循环扫描P0口的模拟电压。一旦当前电压值低于基准值减去2（表示光照强度变低，光敏电阻阻值下降），就说明已经关灯，此时显示一个爱心图标，calibrationVal-2用于调节感应灵敏度，数值越小灵敏度越高。

![](./images/case_04_03.png)

### 参考程序
请参考程序连接：[https://makecode.microbit.org/_3tFFoPhLF7hX](https://makecode.microbit.org/_3tFFoPhLF7hX)

你也可以通过以下网页直接下载程序，下载完成后即可开始运行程序。




<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_3tFFoPhLF7hX"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

## 实验结果
---
开灯时，micro:bit的LED屏幕上什么都不显示；而关灯后，屏幕上显示了一个爱心图标。

![](./images/1Xu4lBR.gif)


## 思考
---
如果想要用光敏二极管来控制一颗LED的开与关，那么我们该如何设计电路与编程？

## 常见问题
---

## 更多信息，欢迎访问：
---
[micro:bit知识库地址](https://www.elecfreaks.com/learn-cn/)
micro:bit官方推荐供应商：[恩孚科技淘宝店](https://shop69086944.taobao.com/?spm=a230r.7195193.1997079397.2.RSthR0)
QQ技术交流群：570756726
