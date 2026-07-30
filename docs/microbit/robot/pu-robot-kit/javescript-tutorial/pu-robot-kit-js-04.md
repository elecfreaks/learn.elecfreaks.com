---
sidebar_position: 4
sidebar_label: 4:潜艇声呐信标
---

# 4:潜艇声呐信标

## 让Robot PU像潜水艇一样发出"乒"声！

欢迎来到**Robot PU（Pair Up）**的世界！PU不仅仅是一个玩具，它是一个带有性格的AI驱动人形表演者。今天，我们将使用**PU胸前的声呐传感器**把他变成深海导航员。如果时间允许，我们还可以用你的程序和Robot PU玩"别撞墙"游戏。

**知识点：**
[https://makecode.microbit.org/blocks/variables](https://makecode.microbit.org/blocks/variables)

[https://makecode.microbit.org/blocks/variables/var](https://makecode.microbit.org/blocks/variables/var)

[https://makecode.microbit.org/blocks/variables/assign](https://makecode.microbit.org/blocks/variables/assign)

[https://makecode.microbit.org/blocks/variables/change](https://makecode.microbit.org/blocks/variables/change)

[https://en.wikipedia.org/wiki/Ultrasonic_transducer](https://en.wikipedia.org/wiki/Ultrasonic_transducer)

[https://wiki.ros.org/Drivers/Tutorials/DistanceMeasurementWithUltrasonicSensorHC-SR04ArduinoI2CPython](https://wiki.ros.org/Drivers/Tutorials/DistanceMeasurementWithUltrasonicSensorHC-SR04ArduinoI2CPython)

### 1. 背景设置
**Robot PU**是一个由**micro:bit**控制的交互式STEM学习伙伴。他以"震撼的AI动力舞蹈"而闻名——流畅地执行太空步、旋转和劈叉。

但PU也是一个聪明的探索者。他拥有**自动驾驶模式**，可以平稳导航并避开障碍物。为此，他使用位于胸前的**超声波声呐传感器**，通过向墙壁或朋友发射声波并接收回波来"看见"它们有多远。

### 2. 问题定义
我们希望给PU一个"潜艇声呐"模式。不是沉默地走路，而是希望PU能够：

1. **感知世界**——通过胸前声呐。
2. **发出警报声**——随着接近物体的距离而变化。
3. **制造紧迫感**——希望"乒"声在靠近物体时变得越来越高、越来越快，就像电影中的潜水艇一样！

### 3. 基本解决思路

秘诀是**映射**。我们将把PU胸前传感器的原始距离数据转化为声音：

- **音调：** 如果墙壁很远，PU将发出低音调。随着PU靠近，音调会升高。
- **速度：** 我们将改变"乒"声的时间间隔。距离远意味着慢速的乒声；距离近意味着快速的"哔-哔-哔！"。
- **大脑：** 由于PU由micro:bit驱动，我们可以在PU太空步或聊天时在一个独立的永久循环中运行这个声呐逻辑。

### 4. 实现
将以下完整代码复制到MakeCode编辑器的**JavaScript**标签页中。它包含HCSR04类，充当PU胸前传感器的"驱动程序"。


TypeScript

``` TypeScript
/**
 * HCSR04驱动类 — PU机器人胸前声呐
 */
class HCSR04 {
    timeout_us: number;
    trig: DigitalPin;
    echo: DigitalPin;

    constructor(trigPin: DigitalPin = DigitalPin.P2, echoPin: DigitalPin = DigitalPin.P8) {
        this.timeout_us = 30000; // 约500cm最大测量范围
        this.trig = trigPin;
        this.echo = echoPin;
        pins.digitalWritePin(this.trig, 0);
    }

    distance_cm(): number {
        // 触发传感器
        pins.digitalWritePin(this.trig, 0);
        control.waitMicros(5);
        pins.digitalWritePin(this.trig, 1);
        control.waitMicros(10);
        pins.digitalWritePin(this.trig, 0);

        // 监听回波
        let t = pins.pulseIn(this.echo, PulseValue.High, this.timeout_us);
        if (t <= 0) t = 500;

        // 将时间转换为厘米（声速）
        return t * 0.0171821;
    }
}


// 在PU机器人胸前引脚上初始化声呐
let sonar = new HCSR04(DigitalPin.P2, DigitalPin.P8);

// 潜艇声呐循环
basic.forever(function () {
    let distance = sonar.distance_cm();

    if (distance > 2 && distance < 100) {
        // 映射 2cm→2000Hz，100cm→200Hz
        let pitch = Math.map(distance, 2, 100, 2000, 200);
        // 映射 2cm→100ms，100cm→800ms
        let pulseDelay = Math.map(distance, 2, 100, 100, 800);

        music.setVolume(128);
        music.playTone(pitch, 50);
        basic.pause(pulseDelay);
    } else {
        basic.pause(500);
    }
});
```


### `HCSR04`代码如何工作：
1. **触发（`trig`）：** micro:bit向PU胸前发送一个微小的10微秒电脉冲。这告诉传感器发出人耳听不到的高频声波。
2. **回波监听（`echo`）：** 传感器等待声波碰到墙壁后返回。`pins.pulseIn`命令精确测量声音在"空中"的微秒数。
3. **数学计算：** 声音以约343米/秒的速度传播。代码将时间乘以`0.0171821`将"飞行时间"转换为厘米。
4. **超时处理：** 如果声音永不返回（因为房间太大），代码会假设一个默认距离，以免PU"卡住"等待。

### 5. 测试
1. **下载**代码到Robot PU内部的micro:bit。
2. **将PU放在地板上**，然后慢慢走向他。
3. **听他的胸前！** 当你靠近时，应该能听到乒声变得更高、更急促。
4. **尝试不同物体：** PU能像"看见"硬木门一样"看见"柔软的泰迪熊吗？（提示：柔软表面吸收声波！）。
支持游戏手柄的版本：


<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_9E9d1JP7g53w"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>
你可以一边控制Robot PU一边听声呐的蜂鸣声。

### 6. 接下来可以做什么？
你的PU现在是声呐专家了！他还能做什么？

- **害怕机器人：** 如果PU的胸前声呐检测到10cm以内有物体，让他自动**后退**！
- **表情眼神：** 使用PU的LED聚光灯眼睛根据距离变换颜色——远为**绿色**，近为**红色**。
- **会说话的声呐：** 将此与`pxt-billy`库结合起来，让PU在靠得太近时说"检测到障碍物！"。

关于"别撞墙"游戏，以下是示例程序：

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_ekqRt0KdUfF2"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

需要调整的关键方法是：

`robotPu.walkDo(Math.map(distance, 8, 20, 0, 4), 0)`

**你想让我演示如何将"害怕机器人"的后退运动添加到声呐循环中吗？**

你可以将更近的距离映射为负速度（太靠近墙壁时后退）

`robotPu.walkDo(Math.map(distance, 7, 20, -1, 6), 0)`

赢得比赛的其他技巧：

- 如何调整映射函数将声呐距离映射到速度
- 如何平滑声呐距离值以避免异常测量值和误差
- 如何使用前馈来处理传感器延迟。

为了使运动更加流畅，将walk命令移到专用的永久循环中。这让Robot PU能同时行走和发出蜂鸣声。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_fd9gTEYzuDYD"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

### 如何赢得"别撞墙"游戏

基本思路是获取距离并行走，不要添加任何其他会拖慢观察-思考-行动循环的代码。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_Y666476L9DA8"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>
