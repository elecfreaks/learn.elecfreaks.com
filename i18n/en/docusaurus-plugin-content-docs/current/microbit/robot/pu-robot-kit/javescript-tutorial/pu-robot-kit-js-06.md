---
sidebar_position: 6
sidebar_label: 6:Lieutenant PU, the Sonar Operator
---

# 6:Lieutenant PU, the Sonar Operator

## Lesson: Robot PU the Submarine Sonar Operator

In this lesson, we will promote **Robot PU** to the rank of Submarine Sonar Operator! You will learn how to turn PU’s chest sensor into a high-tech tracking system that talks to you and sounds a “Red Alert” when an object gets too close.

knowledge:

[https://makecode.microbit.org/blocks/logic](https://makecode.microbit.org/blocks/logic)
[https://makecode.microbit.org/courses/logic-lab](https://makecode.microbit.org/courses/logic-lab)
[https://makecode.microbit.org/courses/logic-lab/expressions](https://makecode.microbit.org/courses/logic-lab/expressions)
[https://makecode.microbit.org/blocks/logic/if](https://makecode.microbit.org/blocks/logic/if)
[https://makecode.microbit.org/blocks/logic/boolean](https://makecode.microbit.org/blocks/logic/boolean)
[https://makecode.microbit.org/courses/logic-lab/programmable](https://makecode.microbit.org/courses/logic-lab/programmable)
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND)

### 1. Background Setup (Introduction)
**Robot PU** is an interactive humanoid buddy equipped with an **ultrasonic sonar sensor** right on his chest. This sensor works just like the sonar on a submarine: it sends out high-frequency sound waves and listens for them to bounce back. By measuring the time it takes for the echo to return, PU can “see” in the dark.

### 2. Problem Definition

A professional sonar operator needs to react differently based on how close a target is. We need to:

1. **Constantly Scan:** Keep the sonar “pinging” so we always have live data.
2. **Report Findings:** Use a digital voice to tell us the exact distance in centimeters.
3. **Sound the Alarm:** If an object enters the “Danger Zone,” PU must switch to a loud siren and shout a warning.

### 3. Basic Idea of Solutions

- **The Sonar Driver:** We use a custom class to handle the Trigger (P2) and Echo (P8) pins on PU’s chest.`HCSR04`
- **Mathematical Mapping:** We use to turn distance into sound. Closer objects create higher-pitched and faster “pings”.`Math.map`
- **Logic Zones:** We use statements to create three states: **Danger** (Red Alert), **Detection** (Voice Reporting), and **Clear Skies** (Idle).`if-else`

### 4. Implementation
#### Step A: Add the Extension
To make PU talk, you must add the speech library:

1. Open **Extensions** in the MakeCode editor.
2. Search for: [https://github.com/adamish/pxt-billy](https://github.com/adamish/pxt-billy)
3. Select **billy** to add it to your project.

#### Step B: The Operator Script
Copy this complete script into your **JavaScript** tab:


``` js
/** * HCSR04 Driver Class for Robot PU's Chest Sonar
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

// 1. Setup the Hardware and Voice
let sonarDevice = new HCSR04(DigitalPin.P2, DigitalPin.P8);
billy.voicePreset(BillyVoicePreset.LittleRobot);
music.setVolume(150);

basic.forever(function () {
    // Round the distance to avoid stuttering
    let distance = Math.round(sonarDevice.distance_cm());

    // --- SONAR PING LOGIC ---
    // Higher pitch and faster beeps as objects get closer
    let pitch = Math.map(distance, 2, 100, 2000, 200);
    let pulseDelay = Math.map(distance, 2, 100, 100, 800);
    music.playTone(pitch, 50);
    basic.pause(pulseDelay);

    // --- CASE 1: DANGER ZONE (Too Close!) ---
    if (distance > 0 && distance < 6) {
        music.setVolume(255); // Max Volume for emergency!
        basic.showIcon(IconNames.Skull);
        music.playMelody("C5 P C5 P C5 P C5 P", 500);
        billy.say("Danger, stop!");
    }
    // --- CASE 2: DETECTION ZONE (Reporting Distance) ---
    else if (distance >= 6 && distance < 20) {
        music.setVolume(220); // Normal reporting volume
        basic.showIcon(IconNames.Target);
        billy.say("Distance " + distance);
        basic.pause(500);
    }
    // --- CASE 3: CLEAR SKIES ---
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

### 5. Technical Explanation: How it Works
#### The Sonar Driver
The class acts as the “translator” between the micro:bit and the physical world. It sends a precisely timed 10-microsecond pulse to Pin 2, which triggers the sensor to scream an ultrasonic sound. It then waits on Pin 8 for the echo to return. The code calculates distance using the constant , which accounts for the speed of sound and the fact that the sound has to travel to the object and back.`HCSR040.0171821`

#### Understanding Mapping
We use to create an inverse relationship. Usually, as a number goes up, its output goes up. However, in sonar, we want the opposite: as distance goes **down**, we want the pitch and speed to go **up**. This creates the “urgent” submarine sound that tells you a collision is coming.`Math.map`

#### Why do we use ?`Math.round()`
Ultrasonic sensors can be “jittery”. They might report 15.2cm one millisecond and 14.8cm the next. By using , we turn these into a solid “15,” which prevents Robot PU from sounding confused or stuttering when he speaks the distance.`Math.round()`


### 6.Testing & Next Steps
1. **Download** the code to your Robot PU.
2. **Tracking Test:** Hold your hand 15cm from PU’s chest. He should say “Distance 15”.
3. **The Red Alert:** Move your hand very close (under 6cm). PU should turn up his volume and shout “Danger, stop!”.

**What can be done next?**

- Automatic Evasion: When “Danger” is detected, add a command to make PU moonwalk backward.
- Visual Radar: Use to show the distance on the screen alongside the pings.`led.plotBarGraph`

Adding a **Visual Radar** to Robot PU allows you to see the distance on the 5×5 LED matrix while hearing the sonar pings. We use the command, which automatically lights up the LEDs like a progress bar based on the distance value.**led.plotBarGraph**

### Visual Radar Implementation
Replace your current loop with this updated version. It includes the logic to display the distance on PU’s face.`basic.forever`
```js
basic.forever(function () {
    // Round the distance for stable readings
    let distance = Math.round(sonarDevice.distance_cm());

    // --- VISUAL RADAR ---
    // Plots a bar graph on the 5x5 LED matrix
    // We use 50cm as the 'max' value for the graph
    led.plotBarGraph(distance, 50);

    // --- SONAR PING LOGIC ---
    let pitch = Math.map(distance, 2, 100, 2000, 200);
    let pulseDelay = Math.map(distance, 2, 100, 100, 800);
    music.playTone(pitch, 50);
    basic.pause(pulseDelay);

    // --- CASE 1: DANGER ZONE (< 6cm) ---
    if (distance > 0 && distance < 6) {
        music.setVolume(255);
        // The skull icon will temporarily override the bar graph
        basic.showIcon(IconNames.Skull);
        music.playMelody("C5 P C5 P C5 P C5 P", 500);
        billy.say("Danger, stop!");
    }
    // --- CASE 2: DETECTION ZONE (6cm - 20cm) ---
    else if (distance >= 6 && distance < 20) {
        music.setVolume(220);
        billy.say("Distance " + distance);
        basic.pause(500);
    }
    // --- CASE 3: CLEAR SKIES ---
    else {
        music.setVolume(150);
        // No icon here so the Bar Graph stays visible
    }
});
```


### How it Works?

1. **`led.plotBarGraph(value, high)`:** This command takes the current and compares it to the value (50cm in this case). If the distance is 50cm or more, the whole screen lights up; if it’s 10cm, only the bottom row lights up.`distance high`
2. Visual Feedback: This creates a “Radar” effect where you can see the bars drop as you get closer to Robot PU’s chest.
3. Icon Overriding: Commands like will temporarily draw over the bar graph. Once the icon sequence finishes, the loop will draw the bar graph again on the next scan.`basic.showIconforever`

That is a fantastic way to bridge the gap! When you use the “Switch Trick,” you can see how the simple logic of a block expands into the robust structure of JavaScript.

Would you like me to take your current Sonar Operator blocks and show you how they look in JavaScript so we can begin refactoring them into a Class?

Below is the transition from the **Sonar Operator Blocks** to a professional **Object-Oriented Class**.

### 1. The “Before”: Basic Blocks in JavaScript
If you were to build the sonar scan in blocks and flip the switch, your code would look like this:

```js
// This is what MakeCode generates from basic blocks
basic.forever(function () {
    let distance = pins.pulseIn(DigitalPin.P8, PulseValue.High, 30000) * 0.0171821
    if (distance < 10) {
        music.playTone(988, 100)
    }
})
```
- **The Problem:** If you want to use the sonar in a different project, you have to copy all those pins and math again. It is “cluttered.”

### 2. The “After”: Refactoring into a Class
Now, we take that logic and “wrap” it inside a **Class**. This makes the code **reusable** and **clean**.

TypeScript

```TypeScript

/**
 * SONAR CLASS: This is a reusable "blueprint"
 */
class SonarOperator {
    trig: DigitalPin;
    echo: DigitalPin;

    constructor(trigPin: DigitalPin, echoPin: DigitalPin) {
        this.trig = trigPin;
        this.echo = echoPin;
    }

    // This "Method" hides the complex math from the main program
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

// Create the "Instance" of the class for Robot PU
let puSonar = new SonarOperator(DigitalPin.P2, DigitalPin.P8);

```
### 3. Why this JavaScript is “Better”
1. **Encapsulation:** All the “messy” pin math is hidden inside the method. In your main loop, you just call .`getDistance()puSonar.getDistance()`
2. **Readability:** Your main loop now reads like a story, not a math equation.
3. **The “Switch Trick” Secret:** You can still switch back to Blocks! MakeCode will show your Class as a custom block, keeping your workspace tidy while keeping your “pro code” under the hood.

### 4. Final Clean Main Loop
With the Class doing the hard work, your main logic becomes incredibly simple:

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
### Final Tip for Speed
When you are in the JavaScript editor, use **Auto-complete**. Start typing and a list will pop up showing . You don’t even have to finish typing! This is something Blocks can’t do, and it’s why pro programmers move so fast.`puSonar.getDistance()`

**Would you like me to show you how to add a “torpedo” detection logic?**

Real sonar operators don’t react to distance alone. They also care about:

1. **Closing speed**: Is the object moving toward you quickly?

2. **Time-to-collision (TTC)**: If it keeps closing at this speed, how many seconds until contact?

---
Below is a more complex demo that estimates target speed by comparing the current sonar reading to the previous one, then computes an estimated TTC. If the target is **close** *and* the closing speed is **high**, it will:

1. Send a radio message: `”torpedo warning”`

2. Speak the estimated contact time: `”Contact in X seconds”`

Below is a more complex demo that estimates target speed by comparing the current sonar reading to the previous one, then computes an estimated TTC. If the target is **close** *and* the closing speed is **high**, it will:

1.  Send a radio message: `"torpedo warning"`
2.  Speak the estimated contact time: `"Contact in X seconds"`

It also adds two behaviors:

1.  **Jump** when the target is approaching fast (torpedo warning).
2.  **Stop** (rest) when the object is too close.
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
Key ideas to notice:

1. Speed comes from differences: `closingSpeed = (lastDistance - distance) / dt`
2. Time-to-collision is a prediction: `ttc = distance / closingSpeed`
3. Complex logic combines multiple conditions (distance + speed) to decide which warning to trigger.

One important detail: this demo uses two `basic.forever` loops.

1. One loop continuously **chooses an action** (walk / evade / stop / jump) based on `mode`.
2. One loop continuously **measures distance + speed** and updates `mode`.

This avoids long blocking loops and keeps the robot responsive.
---
