---
sidebar_position: 6
sidebar_label: 6:PU中尉，声呐操作员
---

# 6:PU中尉，声呐操作员

## 课程：Robot PU 潜艇声呐操作员

在本课中，我们将把**Robot PU**晋升为潜艇声呐操作员！你将学习如何把PU胸前的传感器变成一个高科技追踪系统，既能向你报告，又能在物体靠得太近时发出"红色警报"。

知识点：

[https://makecode.microbit.org/blocks/logic](https://makecode.microbit.org/blocks/logic)

[https://makecode.microbit.org/courses/logic-lab](https://makecode.microbit.org/courses/logic-lab)

[https://makecode.microbit.org/courses/logic-lab/expressions](https://makecode.microbit.org/courses/logic-lab/expressions)

[https://makecode.microbit.org/blocks/logic/if](https://makecode.microbit.org/blocks/logic/if)

[https://makecode.microbit.org/blocks/logic/boolean](https://makecode.microbit.org/blocks/logic/boolean)

[https://makecode.microbit.org/courses/logic-lab/programmable](https://makecode.microbit.org/courses/logic-lab/programmable)

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND)

### 1. 背景设置（引言）
**Robot PU**是一个互动式人形伙伴，胸前配备**超声波声呐传感器**。这个传感器就像潜艇上的声呐一样工作：发射高频声波并监听回波。通过测量回波返回的时间，PU可以在黑暗中"看见"。

### 2. 问题定义

一个专业的声呐操作员需要根据目标的距离做出不同的反应。我们需要：

1. **持续扫描：** 保持声呐不断"乒乒"作响，以便始终拥有实时数据。
2. **报告发现：** 使用数字语音以厘米为单位报告精确距离。
3. **拉响警报：** 如果物体进入"危险区域"，PU必须切换到响亮的警报声并高喊警告。

### 3. 基本解决思路

- **声呐驱动程序：** 我们使用自定义`HCSR04`类来处理PU胸前的触发（P2）和回波（P8）引脚。
- **数学映射：** 我们使用`Math.map`将距离转化为声音。更近的物体会产生更高音调、更快频率的"乒"声。
- **逻辑分区：** 我们使用`if-else`语句创建三种状态：**危险**（红色警报）、**检测**（语音报告）和**晴空**（待机）。

### 4. 实现
#### 步骤A：添加扩展
要让PU说话，你必须添加语音库：

1. 在MakeCode编辑器中打开**扩展**。
2. 搜索：[https://github.com/adamish/pxt-billy](https://github.com/adamish/pxt-billy)
3. 选择**billy**将其添加到你的项目中。

#### 步骤B：操作员脚本
将此完整脚本复制到**JavaScript**标签页中：


``` js
/** * HCSR04 驱动类 — PU机器人胸前声呐
 */
class HCSR04 {
    trig: DigitalPin; echo: DigitalPin;
    constructor(t: DigitalPin, e: DigitalPin) {
        this.trig = t; this.echo = e;
        pins.digitalWritePin(this.trig, 0);
    }
    distance_cm(): number {
        pins.digitalWritePin(this.trig, 0);
        control.waitMicros(5);
        pins.digitalWritePin(this.trig, 1);
        control.waitMicros(10);
        pins.digitalWritePin(this.trig, 0);
        let t = pins.pulseIn(this.echo, PulseValue.High, 30000);
        return (t <= 0) ? 500 : t * 0.0171821;
    }
}

// 1. 设置硬件和语音
let sonarDevice = new HCSR04(DigitalPin.P2, DigitalPin.P8);
billy.voicePreset(BillyVoicePreset.LittleRobot);
music.setVolume(150);

basic.forever(function () {
    // 对距离进行四舍五入以避免卡顿
    let distance = Math.round(sonarDevice.distance_cm());

    // --- 声呐乒声逻辑 ---
    // 物体越近，音调越高、蜂鸣越快
    let pitch = Math.map(distance, 2, 100, 2000, 200);
    let pulseDelay = Math.map(distance, 2, 100, 100, 800);
    music.playTone(pitch, 50);
    basic.pause(pulseDelay);

    // --- 情况1：危险区域（太近了！） ---
    if (distance > 0 && distance < 6) {
        music.setVolume(255); // 紧急情况最大音量！
        basic.showIcon(IconNames.Skull);
        music.playMelody("C5 P C5 P C5 P C5 P", 500);
        billy.say("Danger, stop!");
    }
    // --- 情况2：检测区域（报告距离） ---
    else if (distance >= 6 && distance < 20) {
        music.setVolume(220); // 正常报告音量
        basic.showIcon(IconNames.Target);
        billy.say("Distance " + distance);
        basic.pause(500);
    }
    // --- 情况3：晴空 ---
    else {
        music.setVolume(150);
        basic.showIcon(IconNames.Asleep);
        basic.pause(500);
    }
});
```

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_g792yUiuKMTd"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

### 5. 技术解释：工作原理
#### 声呐驱动程序
`HCSR04`类充当micro:bit与物理世界之间的"翻译器"。它向引脚2发送一个精确计时的10微秒脉冲，触发传感器发出超声波。然后它在引脚8上等待回波返回。代码使用常量`0.0171821`计算距离，该常量考虑了声速以及声音需要往返的事实。

#### 理解映射
我们使用`Math.map`创建反比关系。通常，数值越大输出越大。但在声呐中，我们想要相反的效果：随着距离**减小**，我们希望音调和速度**增大**。这创造了告诉你碰撞即将来临的"紧急"潜艇声。

#### 为什么使用`Math.round()`？
超声波传感器可能"抖动"。它可能在一毫秒内报告15.2cm，下一毫秒报告14.8cm。通过使用`Math.round()`，我们将其变成确定的"15"，防止Robot PU在说出距离时听起来语无伦次或卡顿。


### 6. 测试与后续步骤
1. **下载**代码到你的Robot PU。
2. **跟踪测试：** 将手放在距PU胸前15cm处。他应该说"Distance 15"。
3. **红色警报：** 将手非常靠近（6cm以内）。PU应该调高音量并高喊"Danger, stop!"。

**接下来可以做什么？**

- 自动规避：当检测到"危险"时，添加命令让PU向后太空步。
- 视觉雷达：使用`led.plotBarGraph`在蜂鸣声的同时在屏幕上显示距离。

为Robot PU添加**视觉雷达**让你能在听到声呐乒声的同时，在5×5 LED矩阵上看到距离。我们使用`led.plotBarGraph`命令，它会根据距离值自动点亮LED，像进度条一样。

### 视觉雷达实现
用此更新版本替换当前的`basic.forever`循环。它包含了在PU脸上显示距离的逻辑。
```js
basic.forever(function () {
    // 四舍五入距离以获得稳定读数
    let distance = Math.round(sonarDevice.distance_cm());

    // --- 视觉雷达 ---
    // 在5x5 LED矩阵上绘制条形图
    // 我们使用50cm作为图形的"最大值"
    led.plotBarGraph(distance, 50);

    // --- 声呐乒声逻辑 ---
    let pitch = Math.map(distance, 2, 100, 2000, 200);
    let pulseDelay = Math.map(distance, 2, 100, 100, 800);
    music.playTone(pitch, 50);
    basic.pause(pulseDelay);

    // --- 情况1：危险区域（< 6cm） ---
    if (distance > 0 && distance < 6) {
        music.setVolume(255);
        // 骷髅图标将暂时覆盖条形图
        basic.showIcon(IconNames.Skull);
        music.playMelody("C5 P C5 P C5 P C5 P", 500);
        billy.say("Danger, stop!");
    }
    // --- 情况2：检测区域（6cm - 20cm） ---
    else if (distance >= 6 && distance < 20) {
        music.setVolume(220);
        billy.say("Distance " + distance);
        basic.pause(500);
    }
    // --- 情况3：晴空 ---
    else {
        music.setVolume(150);
        // 此处无图标，条形图保持可见
    }
});
```


### 工作原理？

1. **`led.plotBarGraph(value, high)`：** 此命令将当前`distance`值与`high`值（本例中为50cm）进行比较。如果距离为50cm或更大，整个屏幕点亮；如果为10cm，只有底部一行点亮。
2. 视觉反馈：这创造了一个"雷达"效果，当你靠近Robot PU胸前时可以看到条形下降。
3. 图标覆盖：像`basic.showIcon`这样的命令会暂时覆盖条形图。图标序列完成后，`forever`循环在下一次扫描时将再次绘制条形图。

这是弥合差距的绝佳方式！当你使用"切换技巧"时，你可以看到简单的积木逻辑如何扩展为JavaScript的健壮结构。

你想让我展示你当前的声呐操作员积木在JavaScript中的样子，以便我们开始将其重构为类吗？

下面是从**声呐操作员积木**过渡到专业的**面向对象类**。

### 1. "之前"：JavaScript中的基础积木
如果你用积木搭建声呐扫描然后切换，你的代码看起来像这样：

```js
// 这是MakeCode从基础积木生成的代码
basic.forever(function () {
    let distance = pins.pulseIn(DigitalPin.P8, PulseValue.High, 30000) * 0.0171821
    if (distance < 10) {
        music.playTone(988, 100)
    }
})
```
- **问题：** 如果你想在不同的项目中使用声呐，你必须再次复制所有这些引脚和数学运算。代码很"杂乱"。

### 2. "之后"：重构为类
现在，我们将这些逻辑"包装"在一个**类**中。这使代码变得**可复用**且**整洁**。

TypeScript

```TypeScript

/**
 * 声呐类：这是一个可复用的"蓝图"
 */
class SonarOperator {
    trig: DigitalPin;
    echo: DigitalPin;

    constructor(trigPin: DigitalPin, echoPin: DigitalPin) {
        this.trig = trigPin;
        this.echo = echoPin;
    }

    // 这个"方法"将复杂的数学运算从主程序中隐藏起来
    getDistance(): number {
        pins.digitalWritePin(this.trig, 0);
        control.waitMicros(2);
        pins.digitalWritePin(this.trig, 1);
        control.waitMicros(10);
        pins.digitalWritePin(this.trig, 0);

        let pulse = pins.pulseIn(this.echo, PulseValue.High, 25000);
        return Math.round(pulse * 0.0171821);
    }
}

// 为Robot PU创建类的"实例"
let puSonar = new SonarOperator(DigitalPin.P2, DigitalPin.P8);

```
### 3. 为什么这个JavaScript"更好"
1. **封装：** 所有"凌乱的"引脚数学运算都隐藏在`getDistance()`方法中。在主循环中，你只需调用`puSonar.getDistance()`。
2. **可读性：** 你的主循环现在读起来像故事，而不是数学方程。
3. **"切换技巧"的秘密：** 你仍然可以切换回积木！MakeCode会将你的类显示为自定义积木，在保持工作区整洁的同时，你的"专业代码"在幕后运行。

### 4. 最终整洁的主循环
有了类来处理复杂工作，你的主逻辑变得极其简单：

TypeScript

```TypeScript

basic.forever(function () {
    let d = puSonar.getDistance();

    if (d < 6) {
        billy.say("Danger");
    } else {
        led.plotBarGraph(d, 50);
    }
})

```
### 提速的终极技巧
当你在JavaScript编辑器中时，使用**自动补全**。开始输入`puSonar.`，就会弹出一个列表显示`getDistance()`。你甚至不需要打完！这是积木做不到的，也是专业程序员速度如此之快的原因。

**你想让我演示如何添加"鱼雷"检测逻辑吗？**

真正的声呐操作员不仅仅对距离做出反应。他们还关心：

1. **接近速度**：物体是否在快速向你移动？

2. **碰撞时间（TTC）**：如果以这个速度继续接近，还有多少秒会撞上？

---
以下是一个更复杂的演示，通过比较当前声呐读数与上一读数来估算目标速度，然后计算预估TTC。如果目标**很近** *且* 接近速度**很高**，它将：

1. 发送无线电消息：`"torpedo warning"`
2. 说出预估的接触时间：`"Contact in X seconds"`
---

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_67g4mdKf5TYR"
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
需要注意的关键思路：

1. 速度来自差值：`closingSpeed = (lastDistance - distance) / dt`
2. 碰撞时间是一种预测：`ttc = distance / closingSpeed`
3. 复杂逻辑结合多种条件（距离+速度）来决定触发哪个警告。

一个重要细节：这个演示使用了两个`basic.forever`循环。

1. 一个循环根据`mode`持续**选择动作**（行走/规避/停止/跳跃）。
2. 另一个循环持续**测量距离+速度**并更新`mode`。

这避免了长阻塞循环，保持机器人响应灵敏。
---
