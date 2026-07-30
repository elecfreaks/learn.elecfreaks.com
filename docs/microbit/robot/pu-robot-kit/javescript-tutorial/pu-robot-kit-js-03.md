---
sidebar_position: 3
sidebar_label: 3:Robot PU扩展与骨架程序
---

# 3:Robot PU扩展与骨架程序

## 以下是使用Microsoft MakeCode为BBC micro:bit安装Robot PU扩展的分步教程。

本指南涵盖如何安装特定的扩展，并解释一个将micro:bit变为机器人无线接收器的"骨架"程序。

[https://makecode.microbit.org/extensions](https://makecode.microbit.org/extensions)

[https://makecode.microbit.org/reference/radio](https://makecode.microbit.org/reference/radio)

### 1. 什么是MakeCode扩展？
**MakeCode扩展**是一个自定义库或代码包，为MakeCode编辑器添加新的积木块。默认情况下，MakeCode只显示标准积木（如基础、输入和音乐）。

当使用特定硬件时——比如Robot PU——你需要加载其专属扩展。这将告诉micro:bit如何与机器人的电机和传感器通信，让你能够使用诸如 `robotPu.runStringCommand` 或 `robotPu.setWalkSpeedRange` 等专属积木块。

### 2. 如何添加Robot PU扩展
要使用Robot PU，你必须从 `robotgyms` 仓库导入代码。

1. **打开MakeCode：** 前往 [makecode.microbit.org](https://makecode.microbit.org) 并创建一个新项目。
2. **打开扩展：** 点击右上角的**设置（齿轮图标）**，然后从菜单中选择"扩展"。
3. **搜索仓库：** 在顶部的搜索栏中，粘贴以下URL：`robotgyms/pxt-robotpu`
4. **安装：** 你应该会看到一张搜索结果卡片出现（通常标有机器人名称或仓库名称）。**点击该卡片**将其添加到项目中。
**注意：点击后，编辑器可能会短暂重新加载。现在你将在左侧工具箱中看到一个新的分类（通常名为Robot PU或类似名称）。**

### 3. 骨架程序
这个程序充当"桥接"。它先配置机器人，然后监听无线信号来控制它。

JavaScript / TypeScript视图：

（你可以直接将以下代码复制粘贴到MakeCode的JavaScript标签页中）

TypeScript

``` TypeScript
// 1. 处理接收到的文本命令
radio.onReceivedString(function (receivedString) {
    robotPu.runStringCommand(receivedString)
})

// 2. 处理接收到的键值对（例如，"speed"=100）
radio.onReceivedValue(function (name, value) {
    robotPu.runKeyValueCommand(name, value)
})

// 3. 设置命令
robotPu.setChannel(166)
robotPu.setWalkSpeedRange(-3, 4)
```
JavaScript版本：


<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_RV81mdarhWo8"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>
关联的积木程序：

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_39qDw556zCyk"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

### 4. 工作原理
以下是代码各部分功能的详细说明。

**A. 设置部分**

这些代码行在micro:bit开机时立即运行。

- `robotPu.setChannel(166)`：配置Robot PU硬件的内部通信通道，确保micro:bit在机器人主控制器期望的特定频率或ID（本例中为通道166）上发送信号。
- `robotPu.setWalkSpeedRange(-3, 4)`：校准运动逻辑。定义机器人可用的最低和最高速度"步长"或范围。
  - 下限值（可能是最大后退速度或步幅）。
  - 上限值（可能是最大前进速度或步幅）。

**B. 无线电处理程序**

这些代码块坐等来自另一个micro:bit（遥控器）的无线数据。

- `radio.onReceivedString(function (receivedString) { … })`：当micro:bit无线电收到简单的文本字符串（如"forward"、"stop"或"dance"）时触发。
    - `robotPu.runStringCommand(receivedString)`：将文本直接传递给机器人。机器人的固件解析字符串并执行相应的动作。

- `radio.onReceivedValue(function (name, value) { … })`：当无线电收到键值对（例如 name:"turn"，value:90）时触发。
    - `robotPu.runKeyValueCommand(name, value)`：将特定参数和值传递给机器人。这对于精确控制非常有用，例如将舵机角度设置为特定度数或将电机设置为特定速度百分比。
