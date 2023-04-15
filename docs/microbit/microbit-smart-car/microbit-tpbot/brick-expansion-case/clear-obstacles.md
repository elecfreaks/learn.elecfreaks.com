---
sidebar_position: 1
sidebar_label: 清障小车
---

# 清障小车

## 目的

搭建一辆拥有清除障碍功能的天蓬智能车。


![](./images/tpbot-brick-expansion-case-01-01.png)

## 使用材料


[天蓬智能车（淘宝购买链接）](https://item.taobao.com/item.htm?ft=t&id=627045784239)
[360度舵机（淘宝购买链接）](https://item.taobao.com/item.htm?ft=t&id=628853715235)
扩展积木包



## 搭建步骤

![](./images/tpbot-brick-expansion-step-case-01-01.png)



## 硬件连接

将360°舵机连接到天蓬智能车的SERVO1端口。（舵机需要额外购买）

![](./images/tpbot-brick-expansion-case-01-02.png)

## 软件

[微软makecode](https://makecode.microbit.org/#)


## 编程



在MakeCode的代码抽屉中点击`高级`，查看更多代码选项。

![](./images/tpbot-brick-expansion-case-01-03.png)

为了给天蓬智能车编程，我们需要添加一个扩展库。在代码抽屉底部找到`扩展`，并点击它。这时会弹出一个对话框，搜索`tpbot`，然后点击下载这个代码库。

![](./images/tpbot-brick-expansion-case-01-04.png)


## 示例程序

`当开机时`设置显示图标，设置小车以30%的速度向前行驶；在`无限循环`中，设置连接S1的舵机转动至180°，然后延时1000ms，设置连接S1的舵机转动至0°，然后延时1000ms。

![](./images/tpbot-brick-expansion-case-01-05.png)


### 程序

请参考程序连接：[https://makecode.microbit.org/_664VpuAVMcCa](https://makecode.microbit.org/_664VpuAVMcCa)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_664VpuAVMcCa"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

## 结论


小车向前行驶，舵机循环正转、反转。


## 思考

## 常见问题

Q:使用案例中的代码发现小车不能正常运行？
A:电池电量不足，增大程序中的小车速度参数的数值，并测试。

## 相关阅读
