---
sidebar_position: 4
sidebar_label: 4:Submarine Sonar Beacon
---

# 4:Submarine Sonar Beacon

## Make Robot PU “Ping” like a Submarine!

Welcome to the world of **Robot PU (Pair Up)**! PU is more than just a toy; it is an AI-powered humanoid performer with a personality. Today, we are going to use the **sonar sensor on PU’s chest** to turn him into a deep-sea navigator. If time allowed, let’s play the “Don’t Bonk” game using your program with robot PU.

**Knowledge:**
[https://makecode.microbit.org/blocks/variables](https://makecode.microbit.org/blocks/variables)
[https://makecode.microbit.org/blocks/variables/var](https://makecode.microbit.org/blocks/variables/var)
[https://makecode.microbit.org/blocks/variables/assign](https://makecode.microbit.org/blocks/variables/assign)
[https://makecode.microbit.org/blocks/variables/change](https://makecode.microbit.org/blocks/variables/change)
[https://en.wikipedia.org/wiki/Ultrasonic_transducer](https://en.wikipedia.org/wiki/Ultrasonic_transducer)
[https://wiki.ros.org/Drivers/Tutorials/DistanceMeasurementWithUltrasonicSensorHC-SR04ArduinoI2CPython](https://wiki.ros.org/Drivers/Tutorials/DistanceMeasurementWithUltrasonicSensorHC-SR04ArduinoI2CPython)

### 1. Background Setup
**Robot PU** is an interactive STEM learning buddy controlled by a **micro:bit**. He is famous for his “Electrifying AI-Powered Dance”—executing moonwalks, spins, and splits with fluid motion.

But PU is also a smart explorer. He features an **Autopilot Mode** that lets him navigate smoothly and avoid obstacles. To do this, he uses his **ultrasonic sonar sensor** located right on his chest to “see” how far away walls or friends are by bouncing sound waves off them.

### 2. Problem Definition
We want to give PU a “Submarine Sonar” mode. Instead of just walking silently, we want PU to:

1. **Sense the world** through his chest sonar.

2. **Sound an alarm** that changes as he gets closer to something.

3. **Create Urgency**: We want the “ping” to get higher and faster as he approaches an object, just like a submarine in a movie!

### 3. Basic Idea of Solutions

The secret is **Mapping**. We will take the raw distance data from PU’s chest sensor and turn it into sound:

- **The Pitch:** If a wall is far away, PU will play a low-pitched tone. As PU gets closer, the pitch will rise.

- **The Speed:** We will change the timing of the “pings.” Far away means slow pings; close up means a rapid “beep-beep-beep!”.

- **The Brain:** Because PU is powered by micro:bit, we can run this sonar logic in its own forever loop while he still moonwalks or chats.

### 4. Implementation
Copy this complete code into the **JavaScript** tab of your MakeCode editor. It includes the HCSR04 class which acts as the “driver” for PU’s chest sensor.


TypeScript

``` TypeScript
/**
 * HCSR04 Driver Class for Robot PU's Chest Sonar
 */
class HCSR04 {
    timeout_us: number;
    trig: DigitalPin;
    echo: DigitalPin;

    constructor(trigPin: DigitalPin = DigitalPin.P2, echoPin: DigitalPin = DigitalPin.P8) {
        this.timeout_us = 30000; // Approx 500cm max range
        this.trig = trigPin;
        this.echo = echoPin;
        pins.digitalWritePin(this.trig, 0);
    }

    distance_cm(): number {
        // Trigger the sensor
        pins.digitalWritePin(this.trig, 0);
        control.waitMicros(5);
        pins.digitalWritePin(this.trig, 1);
        control.waitMicros(10);
        pins.digitalWritePin(this.trig, 0);

        // Listen for the echo
        let t = pins.pulseIn(this.echo, PulseValue.High, this.timeout_us);
        if (t <= 0) t = 500;

        // Convert time to cm (speed of sound)
        return t * 0.0171821;
    }
}


// Initialize the sonar on Robot PU's chest pins
let sonar = new HCSR04(DigitalPin.P2, DigitalPin.P8);

// Submarine Sonar Loop
basic.forever(function () {
    let distance = sonar.distance_cm();

    if (distance > 2 && distance < 100) {
        // Map 2cm->2000Hz and 100cm->200Hz
        let pitch = Math.map(distance, 2, 100, 2000, 200);
        // Map 2cm->100ms and 100cm->800ms
        let pulseDelay = Math.map(distance, 2, 100, 100, 800);

        music.setVolume(128);
        music.playTone(pitch, 50);
        basic.pause(pulseDelay);
    } else {
        basic.pause(500);
    }
});
```


### How the `HCSR04` Code Works:
1. **Triggering (`trig`):** The micro:bit sends a tiny 10-microsecond electrical pulse to PU’s chest. This tells the sensor to scream a sound too high for humans to hear.
2. **Echo Listening (`echo`):** The sensor waits for that sound to bounce off a wall and return. The `pins.pulseIn` command measures exactly how many microseconds that sound was “in the air.”
3. **The Math:** Sound travels at about 343 meters per second. The code multiplies the time by `0.0171821` to convert that “flight time” into centimeters.
4. **The Timeout:** If the sound never comes back (because the room is too big), the code assumes a default distance so PU doesn’t get “stuck” waiting.

### 5. Testing
1. **Download** the code to the micro:bit inside your Robot PU.
2. **Place PU on the floor** and slowly walk toward him.
3. **Listen to his chest!** As you get closer, you should hear his pings get higher and more urgent.
4. **Try different objects:** Does PU “see” a soft teddy bear as well as a hard wooden door? (Hint: Soft surfaces absorb sound waves!).
A version with Gamepad support:


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
You can control your robot PU while listen to the sonar beep sound.

### 6. What Can Be Done Next?
Your PU is now a sonar expert! What else can he do?

- **Scared Robot:** Make PU walk **backward** automatically if his chest sonar detects something closer than 10cm!.
- **Expressive Eyes:** Use PU’s LED spotlight eyes to change colors based on distance—**Green** for far, **Red** for near.
- **Talking Sonar:** Combine this with the `pxt-billy` library to have PU say “Obstacle detected!” when he gets too close.

About the “Don’t Bonk” game, here is the example program:

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

The key method to tweak is:

`robotPu.walkDo(Math.map(distance, 8, 20, 0, 4), 0)`

**Would you like me to show you how to add the “Scared Robot” backward movement to the sonar loop?**

You can map closer distance to negative speed (moving backwards if too close to the wall)

`robotPu.walkDo(Math.map(distance, 7, 20, -1, 6), 0)`

Other tricks to win the game:

- How adjust the mapping function to map the sonar distance to speed
- How to smooth the sonar distance values to avoid measurement outliers and errors
- How to feed forward to handle sensor delays.

To make movement more smoothly, move the walk command to a dedicated forever loop. It make robot PU walk and play beeps at same time.

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

### How to win the Don’t Bonk Game

The basic idea is to get distance and walk, do not add any other code to slow down the observe-think-action loop.

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
