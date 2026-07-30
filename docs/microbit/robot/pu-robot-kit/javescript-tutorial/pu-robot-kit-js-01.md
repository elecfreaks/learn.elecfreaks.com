---
sidebar_position: 1
sidebar_label: 1:micro:bit上的JavaScript快速入门
---

# 1:micro:bit上的JavaScript快速入门

## 掌握micro:bit上的JavaScript
从积木编程过渡到静态TypeScript（STS）——MakeCode中使用的JavaScript版本——将解锁PU机器人的全部潜能。本指南涵盖从界面操作到高级面向对象设计的一切。

### 1. 编程界面
当你打开 [makecode.microbit.org](https://makecode.microbit.org) 时，主要工作区是**积木**编辑器。切换到JavaScript的方法：

1. 找到屏幕顶部中央的**切换开关**。
2. 点击**JavaScript**。
3. 左侧工具箱仍然存在，但点击某个类别现在会提供代码片段而非积木块。

### 2. 基础JavaScript语法
STS是"强类型"的，意味着它倾向于明确知道你正在使用什么类型的数据。

- **变量：** 对会改变的值使用 `let`，对保持不变的值使用 `const`。

```js
let speed = 100;
const robotName = "PU";
```

- **函数：** 将可复用的逻辑封装在函数中。

```js
function waveHand() {
    pins.servoWritePin(AnalogPin.P1, 90);
    basic.pause(500);
    pins.servoWritePin(AnalogPin.P1, 0);
}
```
- **循环：** `basic.forever` 函数是一个特殊的循环，在后台不断重复运行你的代码。

### 3. 面向对象设计（OOD）
类允许你将数据和行为组合在一起。这正是我们为PU胸前的声呐等传感器构建"驱动程序"的方式。

#### 示例：一个简单的机器人组件
```js
class LedEye {
    pin: DigitalPin;

    constructor(targetPin: DigitalPin) {
        this.pin = targetPin;
    }

    blink() {
        pins.digitalWritePin(this.pin, 1);
        basic.pause(200);
        pins.digitalWritePin(this.pin, 0);
    }
}

// 在引脚P16上创建一个眼睛"实例"
let leftEye = new LedEye(DigitalPin.P16);
leftEye.blink();
```
### 4. 编译与上传
MakeCode将你的JavaScript编译为 **.hex** 文件——一种micro:bit硬件能理解的格式。

**逐步上传操作：**
1. **连接：** 通过USB将micro:bit插入电脑。
2. **下载：** 点击紫色的**下载**按钮。
3. **传输：**
    - **直接烧录（WebUSB）：** 如果浏览器已配对，代码将立即烧录。
    - **手动：** 将 `.hex` 文件从下载文件夹拖到电脑上的 **MICROBIT** 驱动器中。
4. **运行：** 传输过程中背面的黄色指示灯会闪烁。传输完成后，程序自动开始运行。
### 5. 编写整洁且可复用代码的技巧
编写"整洁"的代码能让你（以及他人）将来更容易修复错误。

- **使用描述性命名：** 用 `let sonarDistance = 10` 代替 `let x = 10`。
- **单一职责原则：** 一个类或函数应该**只**做好一件事。例如，`Sonar` 类应该只处理距离测量，而不该播放音乐。
- **为逻辑添加注释：** 使用 `//` 解释你为什么做某件复杂的事情。
- **避免"魔法数字"：** 与其在逻辑中使用 0.0171821，不如创建一个名为 `SOUND_SPEED_CONSTANT` 的变量。
- **保持模块化：** 将你的类放在文件顶部或单独的标签页中，让 `forever` 主循环保持整洁。
