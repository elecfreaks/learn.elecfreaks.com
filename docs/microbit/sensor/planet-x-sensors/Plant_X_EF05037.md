# 语音识别模块

## 简介

实现语音智能控制，如语音控制智能车前进、后退、启动巡线模式等。

![](./images/05037_01.png)

## 特性
---
- RJ11端口设计，防止误插，易于使用。
## 技术规格

---

项目 | 参数
:-: | :-:
接口|RJ11
接口类型|IIC
工作电压|3.3V
核心IC|SNR3512M

## 外形与定位尺寸

---


![](./images/05037_02.png)


## 快速上手
---

### 所需器材及连接示意图
---

- 如下图所示，将语音识别模块连接到哪吒扩展板的IIC端口，并将风扇模块连接到哪吒扩展板的J1端口。

![](./images/05037_03.png)

*注意：开机后，请务必说：“你好，小恩”激活语音识别模块之后再进行操作。*

## makecode编程
---

### 步骤 1

在MakeCode的代码抽屉中点击“高级”，查看更多代码选项。

![](./images/05001_04.png)

为了给语音识别模块编程，我们需要添加一个扩展库。在代码抽屉底部找到“扩展”，并点击它。这时会弹出一个对话框，搜索”PlanetX“，然后点击下载这个代码库。

![](./images/05001_05.png)

*注意：*如果你得到一个提示说一些代码库因为不兼容的原因将被删除，你可以根据提示继续操作，或者在项目菜单栏里面新建一个项目。

### 可选词条

![](./images/05037_05.png)

### 步骤 2

### 语音识别控制案例
### 如图所示编写程序

![](./images/05037_06.png)


### 参考程序
请参考程序连接：[https://makecode.microbit.org/_9j8UEEYi82tF](https://makecode.microbit.org/_9j8UEEYi82tF)

你也可以通过以下网页直接下载程序，下载完成后即可开始运行程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_9j8UEEYi82tF"
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

### 结果
- 通过语音识别模块控制风扇转动。





### 语音识别自学习词条案例
### 如图所示编写程序

![](./images/05037_11.png)


### 参考程序
请参考程序连接：[https://makecode.microbit.org/_7eT9Vbhq0hHh](https://makecode.microbit.org/_7eT9Vbhq0hHh)

你也可以通过以下网页直接下载程序，下载完成后即可开始运行程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_7eT9Vbhq0hHh"
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

### 结果
- 开机后，说：“你好，小恩”进行激活，激活后再按下按键A进入学习模式，进入学习模式后请根据语音提示进行操作。



## python编程
---


### 步骤 1

为了方便的使用python对行星系列传感进行编程，我们可以使用已经编写好的库[PlanetX_MicroPython]，只需要调用函数并修改参数即可实现对应的功能。

下载压缩包并解压[PlanetX_MicroPython](https://github.com/lionyhw/PlanetX_MicroPython/archive/master.zip)

推荐使用官方平台：[Python editor](https://python.microbit.org/v/2.0)进行编程

![](./images/05001_07.png)

为了给语音识别模块编程，我们需要添加文件ASR.py。点击Load/Save，然后点击Show Files（1）下拉菜单，再点击Add file在本地找到下载并解压完成的PlanetX_MicroPython文件夹，从中选择ASR.py文件添加进来。

![](./images/05001_08.png)
![](./images/05001_09.png)
![](./images/05037_10.png)


## 语音识别模块预设词条及反馈

**唤醒词**

| 词条 | 反馈音 | IIC返回数据 |
| :-: | :-: | :-: |
| 你好小恩 | 你好啊/我在呢 | 0x01 |

**功能组一**

| 词条 | 反馈音 | IIC返回数据 |
| :-: | :-: | :-: |
| 打开车灯 | 车灯已打开 | 0x10 |
| 关闭车灯 | 已打开 | 0x11 |
| 向左转 | 左转弯 | 0x12 |
| 向右转 | 右转弯 | 0x13 |
| 向前进 | 全速前进 | 0x14 |
| 向后退 | 倒车请注意 | 0x15 |
| 巡线模式 | 进入巡线模式 | 0x16 |
| 避障模式 | 进入避障模式 | 0x17 |
| 停车 | 已停车 | 0x18 |

**功能组二**

| 词条 | 反馈音 | IIC返回数据 |
| :-: | :-: | :-: |
| 启动设备 | 设备运行 | 0x20 |
| 停止设备 | 设备关闭 | 0x21 |
| 暂停运行 | 休息一下 | 0x22 |
| 继续运行 | 开始工作啦 | 0x23 |
| 增加一档 | 已增加 | 0x24 |
| 降低一档 | 已降低 | 0x25 |
| 播放音乐 | 欣赏音乐吧 | 0x26 |
| 关闭音乐 | 已关闭 | 0x27 |
| 切换音乐 | 欣赏下一首音乐 | 0x28 |

**功能组三**

| 词条 | 反馈音 | IIC返回数据 |
| :-: | :-: | :-: |
| 执行功能一 | 执行功能一 | 0x31 |
| 执行功能二 | 执行功能二 | 0x32 |

**自学习词条**

| IIC发送指令 | 反馈音 | 功能 |
| :-: | :-: | :-: |
| 0×50 | 进入学习模式，学习第 X 条词条 | 顺序学习词条 |
| 0×60 | 初始化完成 | 删除所有已学习词条 |

| 词条 | 反馈音 | IIC返回数据 |
| :-: | :-: | :-: |
| 自学词条一 | 默认 | 0x50 |
| 自学词条二 | 默认 | 0x51 |
| 自学词条三 | 默认 | 0x52 |
| 自学词条四 | 默认 | 0x53 |
| 自学词条五 | 默认 | 0x54 |
| 自学词条六 | 默认 | 0x55 |
| 自学词条七 | 默认 | 0x56 |
| 自学词条八 | 默认 | 0x57 |
| 自学词条九 | 默认 | 0x58 |
| 自学词条十 | 默认 | 0x59 |











### 步骤 2
### 参考程序
```
from microbit import *
from ASR import *

asr = ASR()


while True:
    display.scroll(asr.get_ASR())
```


### 结果
- LED矩阵显示语音识别模块的返回值。

## 相关案例
---

## 技术文档
---
