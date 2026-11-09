---
sidebar_position: 14
sidebar_label: Rhythm Detection
---

# Case Study: AI Rhythm Flasher

Analyze a recording's tempo and represent it with LED flashes

## Introduction

How can we express musical tempo as a number? Use AI Lens Pro to record a clearly defined rhythm, read its recognized **BPM**, and flash the micro:bit LEDs at the corresponding interval.

The project records first, analyzes next, and then flashes at the average tempo. It does not listen and synchronize live. Compare slow and fast rhythms to understand the relationship between BPM and time interval.

<!-- Image placeholder: completed rhythm flasher -->

## Learning Objectives

1. Understand BPM as beats per minute.
2. Start recording and recognition, then check the result status.
3. Convert BPM into a period in milliseconds.
4. Handle recognition failure, timeout, and invalid values.

## Materials

| Item | Quantity | Image |
| --- | --- | --- |
| AI Lens Pro | 1 | <!-- Image placeholder: AI Lens Pro --> |
| micro:bit and compatible breakout board with IIC port | 1 set | <!-- Image placeholder: controller and board --> |
| IIC cable and USB data cable | 1 each | <!-- Image placeholder: cables --> |
| Metronome or device playing rhythmic audio | 1 | <!-- Image placeholder: sound source --> |

## Hardware Connection

1. Turn off the power, install micro:bit, and connect AI Lens Pro to the board's **IIC port**.
2. Place the camera steadily and leave its built-in microphone unobstructed.
3. Put the sound source nearby at a clear, undistorted volume.
4. Power on AI Lens Pro before running the controller.

<!-- Image placeholder: wiring and sound source placement -->

## Software Setup

1. Open [MakeCode](https://makecode.microbit.org/) and create an “AI Rhythm Flasher” project.
2. Add `planetX-AI` through **Extensions**.
3. Find rhythm recognition, button events, running time, math, and LED display blocks.

## Using the Blocks

### 1. Record and Recognize Rhythm

Initialize the camera and switch to **Rhythm Recognition**. Use **Record for [10] Seconds and Recognize Rhythm**. Duration can be 1–25 seconds; use 10 seconds here. Do not repeatedly start recording tasks in the loop.

### 2. Read the Analysis Result

Refresh results after submitting a task and check **Is Rhythm Recognition Successful?**. Only then read **Get BPM of Current Rhythm**. Beat count and duration can support observation. Do not drive the LEDs with a previous task's BPM while the new task has not succeeded.

### 3. Convert BPM to a Period

Each beat lasts **P = 60000 ÷ BPM** milliseconds. At BPM = 120, P = 500 ms. Keep the LEDs on for half a beat and off for half a beat by waiting P ÷ 2 in each phase.

<!-- Image placeholder: recording, success check, and BPM blocks -->

## Example Program: Flash at the Recording's Average Tempo

### How It Works

Use **Task State** to distinguish Idle, Waiting, and Flashing. A starts one recording and valid results enable flashing. B stops the LED demonstration and returns to Idle; it does not cancel recording inside the camera.

### Parameter Settings

| Parameter | Initial value | Purpose |
| --- | --- | --- |
| Recording duration | 10 seconds | Capture a rhythm segment |
| Result wait limit | 30 seconds | Maximum wait after task submission returns |
| Demonstration BPM range | 30–240 | Limit this example's flash period; not the device's recognition range |

### Build the Program

The following text describes the block logic. The recording block in the A event may wait for a device response; the time depends on the library and firmware.

```text
On start
    Initialize AI Lens Pro
    Switch to Rhythm Recognition
    Set Task State = Idle
On button A pressed
    If Task State = Idle
        Set Task State = Submitting
        Clear screen
        Record for 10 seconds and recognize rhythm
        If Task State = Submitting
            Set Wait Start = current running time
            Set Task State = Waiting
On button B pressed
    Set Task State = Idle
    Clear screen

Forever
    If Task State = Waiting
        Capture a frame from AI Lens Pro (refresh results)
        If rhythm recognition succeeded
            Set BPM = current rhythm BPM
            If 30 ≤ BPM and BPM ≤ 240
                Set P = 60000 ÷ BPM
                Set Task State = Flashing
            Else
                Show cross; set Task State = Idle
        Else if current running time - Wait Start > 30000
            Show cross; set Task State = Idle
    If Task State = Flashing
        Show small square
        Pause P ÷ 2 ms
        Clear screen
        Pause P ÷ 2 ms
    Else
        Pause 100 ms
```

<!-- Image placeholder: complete rhythm flasher MakeCode blocks -->
### Example Program

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_fL20FPTYJijm"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

[Open the Rhythm Flasher MakeCode blocks](https://makecode.microbit.org/_fL20FPTYJijm)

**Program Notes:** Because the flash loop includes pauses, the current iteration may take up to one period to finish after B is pressed. Inspect status through serial while waiting to confirm that the result belongs to the current task. After a timeout, wait for the device's task to finish before recording again. Flashes represent average tempo and are not guaranteed to align with every beat of the original audio.

## Download the Program

1. Connect micro:bit with a USB data cable and download. Power on the camera before the controller.
2. Play a continuous, clear beat and press A. Keep the source steady during recording.
3. Wait for analysis and observe the flashes. Press B to stop; change the tempo and repeat.

## Demonstration

With the same setup, a slower recording produces a longer flash period and a faster recording produces a shorter one. Invalid results or waiting timeouts produce a cross.

<!-- Video placeholder: recordings at different BPM values and flash comparisons -->

## Learning Connections

Complete the [Raised-Hand Counter](./pose-recognition.md) first.

Reuse state variables to distinguish recording, waiting, and flashing. Compare consecutive confirmation with timed waiting to prepare for motor-action timeout handling.

Next lesson: [Traffic Card Command Car](./card-recognition.md).

## Questions and Extensions

1. How many milliseconds is one beat at 60, 90, and 120 BPM?
2. Why might speech or irregular tapping fail to produce a stable BPM?
3. How could you display a different pattern every four beats?
4. Can you analyze an audio file already stored on the device and compare results for the same recording?
