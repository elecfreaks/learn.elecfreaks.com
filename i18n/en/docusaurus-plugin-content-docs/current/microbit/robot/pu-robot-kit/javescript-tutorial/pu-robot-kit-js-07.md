---
sidebar_position: 7
sidebar_label: 7:Lesson:Robot PU Sensors (Observation)
---

# 7:Lesson:Robot PU Sensors (Observation)

## Robot PU “senses” the world using a mix of:

- micro:bit built-in sensors (IMU, buttons, microphone)
- Robot PU add-on sensors (ultrasonic sonar) This lesson shows which sensor APIs you can use and how to build simple observation behaviors.
Knowledge

[https://makecode.microbit.org/types](https://makecode.microbit.org/types)

[https://makecode.microbit.org/javascript/types](https://makecode.microbit.org/javascript/types)

[https://arcade.makecode.com/types](https://arcade.makecode.com/types)

[https://microbit.org/get-started/features/sensors/](https://microbit.org/get-started/features/sensors/)


### 1. What sensors are available?
#### A. micro:bit motion (IMU)

The micro:bit has an accelerometer (and magnetometer depending on board/runtime). In MakeCode you can read motion using:

- `input.isGesture(Gesture.FreeFall)`
- `input.isGesture(Gesture.Shake)`
- `input.rotation(Rotation.Roll)` / `input.rotation(Rotation.Pitch)` Robot PU internally uses FreeFall detection as part of its safety behavior (see the updateStates() logic in the extension). B. micro:bit buttons
- `input.onButtonPressed(Button.A, ...)`
- `input.onButtonPressed(Button.B, ...)`
- `input.onButtonPressed(Button.AB, ...) `Buttons are useful for manual control / testing. C. micro:bit microphone (sound level)
- `input.soundLevel()` returns 0–255 Robot PU uses sound level in some behaviors (for example, some dance/rest behaviors react to audio). D. Ultrasonic sonar (distance) Robot PU includes an HCSR04 ultrasonic sensor interface. In this extension, you can read it using:
- `robotPu.sonarDistanceCm()` Wiring note (default pins used by the extension):
Trigger: `P2`
Echo: `P8`

### 2. Example: show sonar distance on the LED display

``` js
 basic.forever(function () {
     const cm = robotPu.sonarDistanceCm()
     basic.showNumber(Math.round(cm))
     basic.pause(200)
 })
 ```


### 3. Example: obstacle stop / backup (sonar)
This is a simple reactive behavior:

- If something is too close, stop and back up / turn
- Otherwise, keep walking forward

```js
 basic.forever(function () {
     const cm = robotPu.sonarDistanceCm()

     if (cm > 0 && cm < 20) {
         // Too close: turn away
         for (let i = 0; i < 200; i++) {
             robotPu.walk(-2, 0)
         }
         for (let i = 0; i < 200; i++) {
             robotPu.walk(2, 0.8)
         }
     } else {
         // Clear: walk forward
         robotPu.walk(2, 0)
     }
 })
 ```
**Notes:**

**`robotPu.walk(...)` is an action that advances when you call it repeatedly.**
**Sonar readings can be noisy; consider averaging if you see jitter.**

### 4. Example: fall / free-fall safety response (IMU)
The micro:bit can detect a free-fall gesture.

You can use this to stop movement and return to a safe pose:


``` js
 basic.forever(function () {
     if (input.isGesture(Gesture.FreeFall)) {
         // Try to stop motion and recover pose
         for (let i = 0; i < 200; i++) {
             robotPu.stand()
         }
     } else {
         robotPu.walk(2, 0)
     }
 })
```

### 5. Example: clap to jump (microphone)
```js
 basic.forever(function () {
     const s = input.soundLevel()
     if (s > 140) {
         // One jump (call repeatedly until you see completion boundaries)
         for (let i = 0; i < 200; i++) {
             robotPu.jump()
         }
     }
 })
```


### 6.Example: send the front distance array via radio (key/value pairs)

This example uses **two micro:bits**:

- Robot PU micro:bit = **sender**
- Gamepad micro:bit = **receiver**

The sender transmits 5 values using `radio.sendValue(key, value)`.

#### A. Sender (Robot PU) code
```js
radio.onReceivedString(function (receivedString) {
    robotPu.runStringCommand(receivedString)
})
radio.onReceivedValue(function (name, value) {
    robotPu.runKeyValueCommand(name, value)
})
let d: number[] = []
robotPu.setChannel(166)
basic.forever(function () {
    d = robotPu.frontDistanceArray()
    radio.sendValue("fd0", d[0])
    radio.sendValue("fd1", d[1])
    radio.sendValue("fd2", d[2])
    radio.sendValue("fd3", d[3])
    radio.sendValue("fd4", d[4])
    radio.sendValue("broll", robotPu.bodyRoll())
    radio.sendValue("bpitch", robotPu.bodyPitch())
    basic.pause(100)
})
```
**Notes:**

- `robotPu.frontDistanceArray()` returns 5 bins from left-to-right across the front view.
- If you’re already using a specific radio group/channel elsewhere, keep them consistent on both devices.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_4Lt19v4b6hwx"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>



### B. Receiver (Gamepad) code

The receiver listens for the 5 keys and plots them as **5 columns** on the 5×5 LED display.

```js
radio.setGroup(166)

 let d: number[] = [0, 0, 0, 0, 0]
 let minD = 0

 function clampInt(x: number, lo: number, hi: number): number {
     if (x < lo) return lo
     if (x > hi) return hi
     return x
 }

 function updateMinDistance(): void {
     minD = d[0]
     for (let i = 1; i < 5; i++) {
         if (d[i] < minD) minD = d[i]
     }
 }

ffunction drawDistances () {
    basic.clearScreen()
    for (let x2 = 0; x2 <= 4; x2++) {
        h = Math.map(d[x2], 2, 50, 5, 0)
        for (let y2 = 4; y2 >= h; y2--) {
            led.plot(x2, y2)
        }
    }
}

 radio.onReceivedValue(function (name: string, value: number) {
     if (name == "fd0") d[0] = value
     else if (name == "fd1") d[1] = value
     else if (name == "fd2") d[2] = value
     else if (name == "fd3") d[3] = value
     else if (name == "fd4") d[4] = value
 })

 basic.forever(function () {
     const distance = clampInt(minD, 0, 100)

     // Closer = Higher Frequency
     let pitch = Math.map(distance, 2, 100, 2000, 200);

     // Closer = Faster Beeps
     let pulseDelay = Math.map(distance, 2, 100, 100, 800);

     // Play the ping
     music.playTone(pitch, 50);

     // Wait before the next pulse
     basic.pause(pulseDelay);
 })

```

**Notes:**

- The LED visualization maps distance (0–100cm) into a column height.
- You can tune the display mapping by changing the `100`cm max range.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_cMF7t5PRRPer"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>


### 7. Summary

- Use `robotPu.sonarDistanceCm()` to measure distance in cm.
- Use `input.isGesture(…)` and `input.rotation(…)` for motion sensing.
- Use `input.soundLevel()` for sound-reactive behaviors.
- Use buttons for simple manual triggers during testing.
