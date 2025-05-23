﻿---
sidebar_position: 12
sidebar_label: 自动车大灯
---

# 案例05：自动车大灯

## 目的
---
- 通过编程让天蓬智能车在黑暗中自动打开车灯，照亮前进的道路。

## 使用材料
---

- [天蓬智能车（淘宝购买链接）](https://item.taobao.com/item.htm?ft=t&id=627045784239)



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-tpbot/images/TPBot_tianpeng_case_01_01.png)





## 软件
---
[微软makecode](https://makecode.microbit.org/#)


## 编程
---


- 在MakeCode的代码抽屉中点击`高级`，查看更多代码选项。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-tpbot/images/TPBot_tianpeng_case_01_02.png)

- 为了给天蓬智能车编程，我们需要添加一个扩展库。在代码抽屉底部找到`扩展`，并点击它。这时会弹出一个对话框，搜索`tpbot`，然后点击下载这个代码库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-tpbot/images/TPBot_tianpeng_case_01_03.png)

##示例程序
- `当开机时`设置天蓬智能车以`100%`的速度前进。
- 在`无限循环`中，判断当前环境光强度是否低于设定阈值，当环境光强度低于设定阈值时，则自动打开车大灯，如果检测到环境光强度高于设定阈值时，则自动关闭车大灯。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-tpbot/images/TPBot_tianpeng_case_05_04.png)

### 程序
- 请参考程序连接：[https://makecode.microbit.org/_YV0LTr8KcKP3](https://makecode.microbit.org/_YV0LTr8KcKP3)

- 你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_YV0LTr8KcKP3"
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

## 结论
---

- 开机时天蓬智能车向前行驶，当行驶到光线较暗的区域时，自动打开车灯照亮道路，当行驶到光线较亮的区域时，则自动关闭车灯。


## 思考
---


## 常见问题
---


## 相关阅读
---
