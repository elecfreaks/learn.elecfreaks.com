---
sidebar_position: 5
sidebar_label: 5:通过pxt-billy让PU说话
---

# 5:通过pxt-billy让PU说话

## 课程：赋予PU机器人声音

在本课中，我们将把**PU机器人**从一个沉默的舞者变成一个会说话的伙伴！你将学习如何安装"语音引擎"并使用巧妙的脚本，让你每次按下按钮时PU都能说出不同的话。

知识点：
[https://makecode.microbit.org/types/string](https://makecode.microbit.org/types/string)

[https://makecode.microbit.org/reference/text](https://makecode.microbit.org/types/string)

[https://github.com/adamish/pxt-billy](https://makecode.microbit.org/types/string)

[https://ia803202.us.archive.org/30/items/user_manual_s.a.m./s.a.m.pdf](https://makecode.microbit.org/types/string)

### 1. 背景设置
**Robot PU**是一个以**micro:bit**为大脑的AI驱动人形伙伴。虽然PU擅长太空步，但他需要一个名为**pxt-billy**的特殊代码库才能说话。

这个库使用"语音合成"来从数字声音中构建词汇，完全不需要互联网连接。它基于一个名为SAM（Software Automatic Mouth，软件自动嘴巴）的经典引擎。

### 2. 问题定义

要让Robot PU有效说话，我们需要解决三个挑战：

- **"声带"：** 需要将语音扩展添加到MakeCode编辑器。
- **脚本：** 我们需要一种生成随机句子的方式，让PU听起来不像是坏掉的唱片。
- **表演：** 我们需要让PU的LED脸部在他说话时发生变化，让它看起来更自然。

### 3. 基本解决思路

1. **扩展：** 我们将使用MakeCode的扩展界面搜索并添加pxt-billy。
2. **程序化生成：** 我们将创建一个Content类，存储单词列表（主语、动作、宾语和地点）并随机选择来组成句子。
3. **视觉反馈：** 我们将使用"阻塞式"代码——一个接一个运行的命令——在PU说话之前打开他的"嘴巴"（LED），说完之后合上。

### 4. 实现
#### 步骤A：添加扩展
你必须先教会MakeCode如何说话，代码才能工作：

1. 在 makecode.microbit.org 打开你的项目。
2. 点击工具箱底部的**扩展**。
3. 在搜索栏中粘贴此URL：https://github.com/adamish/pxt-billy。
4. 选择**billy**扩展来添加它。

#### 步骤B：脚本
将此代码复制粘贴到你的**JavaScript**标签页中：


``` js
class Content {
    loc: string[];
    act: string[];
    sub: string[];
    obj: string[];

    constructor() {
        this.sub = ["I", "He", "She", "They", "Robot PU"];
        this.act = ["liked", "saw", "heard", "felt", "loves"];
        this.obj = ["me", "you", "the dance", "the song", "the code"];
        this.loc = ["here", "there", "up", "down", "in the lab"];
    }

    private choice(arr: string[]): string {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    cute_words(): string {
        return this.choice(this.sub) + " " +
            this.choice(this.act) + " " +
            this.choice(this.obj) + " " +
            this.choice(this.loc) + ".";
    }
}

let generator = new Content();

// 1. 设置全局硬件音量（0-255）
music.setVolume(150)

// 2. 将PU的声音设置为高音精灵！
billy.voicePreset(BillyVoicePreset.Elf)

// 3. 按下按钮时让PU说话
input.onButtonPressed(Button.A, function () {
    let phrase = generator.cute_words();

    // 在LED上显示说话的"脸"
    basic.showIcon(IconNames.SmallSquare)

    // PU说出这个句子（这是一个阻塞命令！）
    billy.say(phrase)

    // PU"合上"嘴巴
    basic.showIcon(IconNames.Asleep)
})
```

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_Ku2399bb78pv"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

### 5. 测试
1. **下载**代码到你的Robot PU。
2. **按下按钮A：** PU能用尖细的精灵声音说出完整句子吗？
3. **等待：** 注意PU一直保持在"小方块"LED图标上直到完全说完。这是因为`billy.say()`是一个**阻塞命令**。
4. **硬件：** 如果你使用micro:bit V2，声音来自他的胸前。如果使用V1，请检查扬声器是否连接到**引脚0**。


### 6. 接下来可以做什么？

- **自定义词汇：** 更改`Content`类中的单词，让PU谈论太空、恐龙或学校！
- **按钮B切换：** 添加一个`input.onButtonPressed(Button.B)`代码块，将语音切换为`BillyVoicePreset.Dalek`以获得可怕的机器人效果。
- **健谈的声呐：** 使用PU胸前的声呐触发语音。如果有人靠近到20cm以内，让他说"请让一下！"。

**你想让我帮你向`Content`类添加更多单词，让PU的句子更长吗？**

为了让Robot PU的句子更长、更具描述性，我们可以通过添加**描述词**（形容词）和**连接词**（连词）来扩展`Content`类。

以下是具有更高级句子结构的更新脚本。

### 高级实现脚本

用此版本替换你之前的`Content`类和`Button A`代码：
```js
class Content {
    loc: string[];
    act: string[];
    sub: string[];
    obj: string[];
    adj: string[]; // 新增：描述词
    conj: string[]; // 新增：连接词

    constructor() {
        this.sub = ["I", "He", "She", "They", "Robot PU"];
        this.act = ["liked", "saw", "heard", "felt", "loves"];
        this.obj = ["me", "you", "the dance", "the song", "the code"];
        this.loc = ["here", "there", "up", "down", "in the lab"];
        this.adj = ["shiny", "happy", "weird", "fast", "super"];
        this.conj = ["and", "but", "because", "so"];
    }

    private choice(arr: string[]): string {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    /**
     * 创建更长、更复杂的句子
     * 结构：[主语] [动作] [形容词] [宾语] [连接词] [地点]。
     */
    cute_words(): string {
        return this.choice(this.sub) + " " +
            this.choice(this.act) + " " +
            this.choice(this.adj) + " " +
            this.choice(this.obj) + " " +
            this.choice(this.conj) + " " +
            this.choice(this.loc) + ".";
    }
}

let generator = new Content();
music.setVolume(150);
billy.voicePreset(BillyVoicePreset.Elf);

input.onButtonPressed(Button.A, function () {
    let phrase = generator.cute_words();

    // 动画脸部
    basic.showIcon(IconNames.SmallSquare);

    // PU说出更长的句子
    billy.say(phrase);

    basic.showIcon(IconNames.Asleep);
})
```


### 它是如何工作的？
- **扩展词汇：** 我们添加了`this.adj`用于形容词如"shiny"，以及`this.conj`用于连词如"because"。
- **复杂结构：** `cute_words()`函数现在构建了更长的字符串。PU不再只说"I saw the code"，现在可能会说："Robot PU loves the shiny code because there."
- **内存使用：** 即使有更多词汇，micro:bit也能轻松处理，因为字符串在其内存中存储效率很高。

### 接下来？
既然PU现在能说长句了，你想让我演示如何添加**按钮B**作为"情绪切换器"，将他的声音从**高音精灵**变成**暴躁机器人**吗？

要为**Robot PU**添加"情绪切换器"，我们将使用**按钮B**在不同声音人格之间切换。这是通过更改`billy.voicePreset()`设置来实现的，该设置会改变语音合成引擎的速度、音调和音色。

### 情绪切换器实现
将此代码块添加到你的项目中。它使用一个"变量"来跟踪PU当前的情绪，这样当你按下按钮A时他就知道该用什么声音。

```js
// 1. 创建一个变量来跟踪当前情绪（0 = 精灵，1 = 机器人）
let puMood = 0;

// 2. 按钮B：情绪切换器
input.onButtonPressed(Button.B, function () {
    if (puMood == 0) {
        // 切换到暴躁机器人模式
        puMood = 1;
        billy.voicePreset(BillyVoicePreset.Robot);
        basic.showIcon(IconNames.Angry); // 视觉情绪指示器
        billy.say("I am a grumpy robot");
    } else {
        // 切换回高音精灵模式
        puMood = 0;
        billy.voicePreset(BillyVoicePreset.Elf);
        basic.showIcon(IconNames.Happy); // 视觉情绪指示器
        billy.say("I am a happy elf");
    }
    basic.pause(500);
    basic.showIcon(IconNames.Asleep);
});
```
### 它是如何工作的
- **状态管理：** 变量`puMood`像记忆一样。它记住PU当前是"精灵模式"还是"机器人模式"。
- **语音预设：** `BillyVoicePreset.Robot`设置减慢语速并降低音调，而`BillyVoicePreset.Elf`使其快速且尖细。
- **视觉提示：** 我们使用`basic.showIcon`给PU一个"愤怒"或"开心"的脸，让你在PU说话之前就能看到他的情绪变化。
- **阻塞式语音：** 就像其他语音命令一样，`billy.say()`会等待机器人完成其新情绪的介绍后才继续执行代码。


### 高级技巧："Dalek"情绪
如果你想要第三种听起来像科幻反派的情绪，可以将`BillyVoicePreset.Dalek`添加到你的逻辑中！这个预设为PU的声音添加了震动金属效果。

你想让我演示如何使用PU头顶的**V2触摸标志**，让你触摸它时PU会"咯咯笑"吗？

要调整BBC micro:bit的**pxt-billy**扩展的语音，你主要通过`config` API调整两个参数：**音调**（语音频率）和**速度**（单词说出的快慢）。

"Billy"扩展使用8位风格合成。通常，音调越高听起来越年轻/女性化，音调越低听起来越年长/男性化。

### 语音配置指南
根据 [billy API](https://github.com/adamish/pxt-billy.git)：
```js
/**
     * 配置语音参数
     * @param speed 语音说话的快慢。0 慢，255 快。
     * @param pitch 语音听起来的高低
     * @param throat 声音的放松或紧张程度
     * @param mouth 语音听起来是咬字紧还是夸张清晰
     */
    //% block 配置语音
    //% speed.min=1 speed.max=255 speed.defl=72
    //% pitch.min=1 pitch.max=255 pitch.defl=64
    //% throat.min=1 throat.max=255 throat.defl=128
    //% mouth.min=1 mouth.max=255 mouth.defl=128
    //% group="micro:bit (V2)"
    //% weight=8
    export function configureVoice(speed: number, pitch: number, throat: number, mouth: number): void {
....
}
```
| 年龄段       | 目标声音            | 音调    | 速度 | 为什么用这些设置？                                                              |
|-------------|--------------------|----------|-------|-------------------------------------------------------------------------------|
| 幼儿         | 高音/尖细           | 200–255  | 80    | 最高音调营造小巧卡通感；较慢速度模仿早期语音。                                    |
| 10岁男孩     | 变声前               | 160      | 100   | 高音调但低于幼儿。标准速度保持清晰。                                              |
| 10岁女孩     | 明亮/轻快            | 180      | 110   | 比同龄男孩音调稍高、速度稍快。                                                    |
| 青少年       | 快速/活力            | 140      | 150   | 中等音调但极高速度，模仿说话快的青少年。                                           |
| 年轻人       | 清晰/平衡            | 100–120  | 110   | 标准"默认"设置；清晰现代。                                                       |
| 中年人       | 低沉/稳重            | 80       | 95    | 较低音调营造更"权威"或成熟的声调。                                                |
| 老年人       | 沙哑/缓慢            | 60       | 70    | 极低音调和慢速营造沧桑嗓音效果。                                                  |

### 如何在MakeCode中应用
在**JavaScript/Python**编辑器中，你的配置代码块如下所示（以"中年人"为例）：

```js
// 中年人语音示例
billy.configure(80, 95, 128, 0)
billy.say("Hello, how are you today?")
```
**注意：configure 函数通常接受四个参数：(speed, pitch, throat, mouth)。虽然音调和速度影响最大，但你可以将 Throat 值（第4个参数）略微增加到 140+ 来让更年长的声音听起来更"沙哑"。**

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_MPcgi7XAFXzY"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

要提高墙壁检测性能，将walk命令移到声呐距离读取之后，然后通过添加暂停来减少说话频率。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_WhaMpKVD5dm1"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

### 说更长的话
以下是Robot PU讲笑话的示例。
<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_FPYXjEiUzd1f"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>
