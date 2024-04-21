---
sidebar_position: 4
sidebar_label: 硬件装配
---

# 硬件装配

## 步骤
---
### 步骤一

- 使用较短的平头螺丝将micro:bit安装到Ring:bit扩展板上面。


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-robot-kit-17.png)



### 步骤二

- 使用较长的平头螺丝将七孔梁固定到 XGO 相应的螺孔上面。


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-robot-kit-18.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-robot-kit-19.png)

### 步骤三

- 将安装了 micro:bit 的 Ring:bit 扩展板使用长销安装到七孔梁上面。


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-robot-kit-20.png)

### 步骤四


-  将 XGO 预留的杜邦线连接到 Ring:bit 相应的端口上面，其中，黑色杜邦线连接到G端口，黄色杜邦线和蓝色杜邦线接在1号和2号端口上面，在编程的时候要选择相应的端口号。


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-robot-kit-21.png)

### 步骤五


- 使用数据线将电脑和 micro:bit 相连接；


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-robot-kit-22.png)





## 开始编程
---
XGO 的程序编写是在 [Makecode](https://makecode.microbit.org/#) 平台进行; Makecode平台可以使用图形化编程，同时还可以使用python代码编程和JavaScript代码编程；



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-robot-kit-10.png)



## 添加 XGO 扩展库
---
### 步骤图如下:

- 新建程序，命名程序名后点击积木库中的Advanced按钮，如下：




![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-robot-kit-11.png)



- 点击Extentions按钮，如下：




![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-robot-kit-12.png)



- 在输入框输入：XGO 搜索 XGO 的扩展库，如下：




![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-robot-kit-13.png)

注意：若通过搜索 XGO 没有得到相应的结果，可以输入：https://github.com/elecfreaks/pxt-xgo ，如下：

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-robot-kit-23.png)



- 点开 XGO 积木块库可以看到如下积木块：




![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-robot-kit-14.png)



- 当程序编写完成，将micro:bit和电脑用数据线进行相连接，然后点击左下角的Download按钮，将程序下载到micro:bit主板上；




![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-robot-kit-15.png)





## 编程指南
---


初始化 XGO



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-robot-kit-square-24.png)



设置 XGO 动作，一共12种动作，可以任选一种动作；



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-robot-kit-square-01.png)



获取 XGO 四肢关节的舵机角度以及获取 XGO 的当前电量；



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-robot-kit-square-02.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-robot-kit-square-03.png)



设置 XGO 单个腿部舵机加载和全部腿部舵机为调试模式；



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-robot-kit-square-04.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-robot-kit-square-05.png)



打开或关闭 XGO 的表演模式；



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-robot-kit-square-06.png)



打开或关闭 XGO 的陀螺仪；



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-robot-kit-square-07.png)



停止 XGO 周期绕X,Y,Z轴往复转动；



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-robot-kit-square-08.png)



设置 XGO 绕 X,Y,Z轴往复转动的时间、度数；



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-robot-kit-square-09.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-robot-kit-square-10.png)



设置 XGO 向X,Y,Z方向平移或停止以及移动的时间；



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-robot-kit-square-11.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-robot-kit-square-12.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-robot-kit-square-13.png)



设置 XGO 腿部抬高的距离和时间；



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-robot-kit-square-14.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-robot-kit-square-15.png)



设置  XGO 旋转运动的方向、速度、时间；



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-robot-kit-square-16.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-robot-kit-square-17.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-robot-kit-square-18.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-robot-kit-square-19.png)



设置 XGO 四足的足尖方向；



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-robot-kit-square-20.png)



设置 XGO 四足关节的舵机转动和设置舵机速度或者迈步频率；



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-robot-kit-square-21.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-robot-kit-square-22.png)

设置 XGO 移动或旋转以及相应的速度；

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-robot-kit-square-23.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-robot-kit-square-26.png)



设置 XGO 身体高度；

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-robot-kit-square-25.png)





### 简单示例



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-robot-kit-square-28.png)

参考程序链接：[XGO](https://makecode.microbit.org/_Rs2MPv5uebYd)

同时，可以直接下载下方程序；


<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_Rs2MPv5uebYd"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

##  常见问题
---


*注意：想要运行编号的代码程序要打开 Ring:bit 的开关，同时也要关注 XGO 的电量是否充足*



## 相关文档
---
