---
sidebar_position: 5
sidebar_label: 5:Make PU Talk via pxt-billy
---

# 5:Make PU Talk via pxt-billy

## Lesson: Giving PU Robot a Voice

In this lesson, we will transform **PU Robot** from a silent dancer into a talking companion! You will learn how to install a “speech engine” and use a clever script to make PU say something new every time you press a button.

Knowledge:
[https://makecode.microbit.org/types/string](https://makecode.microbit.org/types/string)

[https://makecode.microbit.org/reference/text](https://makecode.microbit.org/types/string)

[https://github.com/adamish/pxt-billy](https://makecode.microbit.org/types/string)

[https://ia803202.us.archive.org/30/items/user_manual_s.a.m./s.a.m.pdf](https://makecode.microbit.org/types/string)

### 1. Background Setup
**Robot PU** is an AI-powered humanoid buddy that uses a **micro:bit** for its brain. While PU is great at moonwalking, he needs a special code library called **pxt-billy** to speak.

This library uses “Speech Synthesis” to build words out of digital sounds, all without needing an internet connection. It is based on a classic engine called SAM (Software Automatic Mouth).

### 2. Problem Definition

To make Robot PU talk effectively, we need to solve three challenges:

- **The Voice Box:** We need to add the speech extension to the MakeCode editor.
- **The Script:** We need a way to generate random sentences so PU doesn’t sound like a broken record.
- **The Performance:** We need to make PU’s LED face change while he is talking so it looks natural.

### 3. Basic Idea of Solutions

1. **Extensions:** We will use the MakeCode Extension UI to search for and add pxt-billy.
2. **Procedural Generation:** We will create a Content class that stores lists of words (Subjects, Actions, Objects, and Locations) and picks them at random to form a sentence.
3. **Visual Feedback:** We will use “blocking” code—commands that run one after another—to open PU’s “mouth” (LEDs) before he speaks and close it after he is finished.

### 4. Implementation
#### Step A: Add the Extension
You must teach MakeCode how to speak before the code will work:

1. Open your project at makecode.microbit.org.
2. Click **Extensions** at the bottom of the toolbox.
3. Paste this URL into the search bar: https://github.com/adamish/pxt-billy.
4. Select the **billy** extension to add it.

#### Step B: The Script
Copy and paste this code into your **JavaScript** tab:


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

// 1. Set global hardware volume (0-255)
music.setVolume(150)

// 2. Set PU's Voice to sound like a high-pitched Elf!
billy.voicePreset(BillyVoicePreset.Elf)

// 3. Make PU talk when a button is pressed
input.onButtonPressed(Button.A, function () {
    let phrase = generator.cute_words();

    // Show a talking face on the LEDs
    basic.showIcon(IconNames.SmallSquare)

    // PU speaks the phrase (This is a blocking command!)
    billy.say(phrase)

    // PU "closes" his mouth
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

### 5. Testing
1. **Download** the code to your Robot PU.
2. **Press Button A:** Does PU say a full sentence in a squeaky Elf voice?
3. **The Wait:** Notice that PU stays on the “Small Square” LED icon until he is completely finished talking. This is because `billy.say()` is a **blocking command.**
4. **Hardware:** If you have a micro:bit V2, the sound comes from his chest. If using V1, check that your speaker is on **Pin 0**.


### 6. What Can Be Done Next?

- **Custom Vocabulary:** Change the words inside the `Content` class to make PU talk about space, dinosaurs, or school!
- **Button B Switch:** Add an `input.onButtonPressed(Button.B)` block that changes the voice to `BillyVoicePreset.Dalek` for a scary robot effect.
- **Chatty Sonar:** Use PU’s chest sonar to trigger speech. Make him say “Excuse me!” if someone gets closer than 20cm.

**Would you like me to help you add more words to your `Content` class to make PU’s sentences longer?**

To make Robot PU’s sentences longer and more descriptive, we can expand the `Content` class by adding a **descriptor** (adjective) and a **conjunction** (joining word).

Here is the updated script with a more advanced sentence structure.

### Advanced Implementation Script

Replace your previous `Content` class and `Button A` code with this version:
```js
class Content {
    loc: string[];
    act: string[];
    sub: string[];
    obj: string[];
    adj: string[]; // New: Descriptors
    conj: string[]; // New: Joining words

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
     * Creates longer, more complex sentences
     * Structure: [Subject] [Action] [Adjective] [Object] [Conjunction] [Location].
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

    // Animate the face
    basic.showIcon(IconNames.SmallSquare);

    // PU speaks the longer phrase
    billy.say(phrase);

    basic.showIcon(IconNames.Asleep);
})
```


### How it Works?
- **Expanded Vocabulary:** We added this.adj for adjectives like “shiny” and `this.conj` for conjunctions like “because.”
- **Complex Structure:** The cute_words() function now builds a much longer string. Instead of just “I saw the code,” PU might now say: “Robot PU loves the shiny code because there.”
- **Memory Usage:** Even with more words, the micro:bit can easily handle this because strings are stored efficiently in its memory.

### What’s Next?
Since PU can now speak long sentences, would you like me to show you how to add **Button B** as a “Mood Switcher” that changes his voice from a **High-Pitched Elf** to a **Grumpy Robot**?

To add a “Mood Switcher” for **Robot PU**, we will use **Button B** to toggle between different vocal personalities. This is done by changing the `billy.voicePreset()` setting, which alters the speed, pitch, and tone of the speech synthesis engine.

### Mood Switcher Implementation
Add this code block to your project. It uses a “variable” to keep track of PU’s current mood so he knows which voice to use when you press Button A.

```js
// 1. Create a variable to track the current mood (0 = Elf, 1 = Robot)
let puMood = 0;

// 2. Button B: The Mood Switcher
input.onButtonPressed(Button.B, function () {
    if (puMood == 0) {
        // Switch to Grumpy Robot mode
        puMood = 1;
        billy.voicePreset(BillyVoicePreset.Robot);
        basic.showIcon(IconNames.Angry); // Visual mood indicator
        billy.say("I am a grumpy robot");
    } else {
        // Switch back to High-Pitched Elf mode
        puMood = 0;
        billy.voicePreset(BillyVoicePreset.Elf);
        basic.showIcon(IconNames.Happy); // Visual mood indicator
        billy.say("I am a happy elf");
    }
    basic.pause(500);
    basic.showIcon(IconNames.Asleep);
});
```
### How it Works
- **State Management:** The variable `puMood` acts like a memory. It remembers if PU is currently in “Elf mode” or “Robot mode.”
- **Voice Presets:** The `BillyVoicePreset.Robot` setting slows down the speech and lowers the pitch, while `BillyVoicePreset.Elf` makes it fast and squeaky.
- **Visual Cues:** We use `basic.showIcon` to give PU an “Angry” or “Happy” face so you can see his mood change before he even speaks.
- **Blocking Speech:** Just like our other speech commands, `billy.say()` will wait for the robot to finish introducing its new mood before the code continues.


### Advanced Tip: The “Dalek” Mood
If you want a third mood that sounds like a sci-fi villain, you can add `BillyVoicePreset.Dalek` to your logic! This preset adds a vibrating, metallic effect to PU’s voice.

Would you like me to show you how to use the **V2 Touch Logo** on PU’s head to make him “Giggle” when you touch it?

To tweak the voice of the **ptx-billy** extension for the BBC micro:bit, you primarily adjust two parameters in the `config` API: **Pitch** (the frequency of the voice) and **Speed** (how fast the words are spoken).

The “Billy” extension uses an 8-bit style synthesis. Generally, higher pitches sound younger/feminine, while lower pitches sound older/masculine.

### Voice Configuration Guide
According to [billy API](https://github.com/adamish/pxt-billy.git):
```js
/**
     * Configure voice parameters
     * @param speed how quickly the voice talks. 0 slow, 255 fast.
     * @param pitch how high or low the voice sounds
     * @param throat how relaxed or tense is the tone of voice
     * @param mouth how tight-lipped or overtly enunciating the voice sounds
     */
    //% block Configure Voice
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
| Age Group   | Target Voice       | Pitch    | Speed | Why these settings?                                                                 |
|-------------|--------------------|----------|-------|-------------------------------------------------------------------------------------|
| Toddler     | High-pitched/Squeaky | 200–255  | 80    | Max pitch creates a tiny, cartoonish feel; slower speed mimics early speech.       |
| 10yo Boy    | Pre-pubescent      | 160      | 100   | High pitch, but lower than a toddler. Standard speed for clarity.                   |
| 10yo Girl   | Bright/Light       | 180      | 110   | Slightly higher pitch and faster tempo than a boy of the same age.                  |
| Teenager    | Fast/Energetic     | 140      | 150   | Mid-range pitch but very high speed to mimic fast-talking teens.                    |
| Young Adult | Clear/Balanced     | 100–120  | 110   | Standard “default” settings; clear and modern-sounding.                            |
| Middle Age  | Deep/Settled       | 80       | 95    | Lower pitch creates a more “authoritative” or mature tone.                          |
| Old Person  | Raspy/Slow         | 60       | 70    | Very low pitch and slow speed creates the effect of a weathered voice.              |

### How to apply this in MakeCode
In the **JavaScript/Python** editor, your configuration block would look like this (using the “Middle Age” example):

```js
// Middle Age Voice Example
billy.configure(80, 95, 128, 0)
billy.say("Hello, how are you today?")
```
**Note: The configure function usually takes four arguments: (speed, pitch, throat, mouth). While Pitch and Speed are the most impactful, you can slightly increase the Throat value (the 4th parameter) to 140+ for older voices to make them sound “grittier.”**

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

To improve the performance of wall detection, move walk command right after the sonar distance reading, then, reduce the talking by adding pause.

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

### Talking Longer
Following is an example in which robot PU made a joke.
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
