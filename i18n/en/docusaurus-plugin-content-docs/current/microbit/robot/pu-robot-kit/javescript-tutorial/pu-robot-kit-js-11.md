---
sidebar_position: 11
sidebar_label: 11:Robot PU MusicLib
---

# 11:Robot PU MusicLib

## Lesson: MusicLib Beat + Tempo Detection (Syncing Artistic Moves)
### Introduction
Robot PU can look artistic when its body motion is synchronized to music.

On micro:bit, the microphone gives you l**oudness** (amplitude) via `input.soundLevel()`.

This lesson focuses on rhythm:

- detect **beats**
- estimate **tempo (BPM)**
- sync **dance / body movements** to those beats

### Knowledge

[https://makecode.microbit.org/types/array](https://makecode.microbit.org/types/array)

[https://arcade.makecode.com/courses/csintro2/arrays](https://arcade.makecode.com/courses/csintro2/arrays)

[https://en.wikipedia.org/wiki/Circular_buffer](https://en.wikipedia.org/wiki/Circular_buffer)

[https://en.wikipedia.org/wiki/Nyquist%E2%80%93Shannon_sampling_theorem](https://en.wikipedia.org/wiki/Nyquist%E2%80%93Shannon_sampling_theorem)

[https://en.wikipedia.org/wiki/Quasi-peak_detector](https://en.wikipedia.org/wiki/Quasi-peak_detector)

### Problem definition

We want Robot PU to:

- detect when a beat happens (clap/drum hit/strong rhythm)
- estimate tempo so the robot can stay “in time”
- trigger bigger motion on beats and smaller motion between beats

Constraints:

- `input.soundLevel()` is amplitude-only, so we can do beat/tempo well.
- detecting true musical pitch/notes from room audio is not reliable with `soundLevel` alone.

### Basic diea of solutions

There are two practical approaches:

- **Internal `MusicLib`** (extension development)
    - uses a ring buffer + adaptive threshold
    - outputs a beat event and a smoothed period
- **MakeCode-friendly beat detector** (normal projects)
    - threshold + cooldown to avoid double-triggering
    - smooth the measured beat period

Once we have beats + tempo:

- compute `BPM ≈ 60000 / periodMs`
- use a **beat clock** to schedule motion accents

### Arrays in MakeCode (useful for music + tempo)
Arrays let you store a sequence of values, like:

- recent loudness samples
- recent beat periods (ms)
- a musical track: arrays of `freqs[]` + `dursMs[]`

## A. Creating and indexing arrays

```js
let freqs: number[] = [262, 294, 330, 349]
let dursMs: number[] = [250, 250, 250, 500]

basic.showNumber(freqs[0])
basic.showNumber(dursMs[3])
```

**Notes:**

- Array indexes start at `0`
- `freqs.length` is the number of elements

## B. Looping over arrays (play a short tune)

```js
function playToneSequence(freqs: number[], dursMs: number[]): void {
    const n = Math.min(freqs.length, dursMs.length)
    for (let i = 0; i < n; i++) {
        const f = freqs[i]
        const d = dursMs[i]
        if (f <= 0) music.rest(d)
        else music.playTone(f, d)
    }
}

playToneSequence([262, 294, 330, 0, 330], [200, 200, 400, 120, 400])
```
## C. Building arrays over time (collect beat periods)

```js
let periods: number[] = []
let lastBeatMs = 0

function recordBeat(now: number): void {
    const p = now - lastBeatMs
    lastBeatMs = now
    if (p > 150 && p < 2000) {
        periods.push(p)
    }
}

input.onButtonPressed(Button.A, function () {
    const now = control.millis()
    recordBeat(now)
    basic.showNumber(periods.length)
})
```

**Notes:**

- `periods.push(value)` appends an item
- If you keep pushing forever, memory can grow. For long-running programs, prefer a fixed-size ring buffer (next section).

## Sub-sampling, Nyquist rule, and choosing bucket + ring buffer sizes

Because `input.soundLevel()` is already an amplitude/envelope value (not raw audio samples), we usually do **sub-sampling**:

- sample loudness every `bucketMs`
- optionally average (or peak) within a bucket
- run beat detection on that lower-rate signal

This is much cheaper than true audio processing, and it’s the right tool when you only care about **tempo**.


### A. Nyquist rule (applied to beats/tempo, not pitch)
Nyquist says: to measure a signal with maximum frequency `fMax`, you need a sampling rate `fs > 2 * fMax`.

For tempo:

- `BPM` corresponds to beat frequency in Hz: `fBeat = BPM / 60`
- for `BPM_MAX = 300`, `fBeatMax = 300 / 60 = 5 Hz`
- Nyquist requirement: `fs > 10 Hz` => `bucketMs < 100 ms`

So if you want to reliably detect up to **300 BPM**, pick a bucket/sample interval of about:

- `bucketMs = 50` (20 Hz) recommended when you can afford it
- `bucketMs = 80` (12.5 Hz) usually OK
- `ucketMs = 125` (8 Hz) can work for slower music, but it is below Nyquist for 300 BPM and may miss fast beats

Important:

- This Nyquist reasoning is about the **beat event rate**, not musical note pitch.

### B. Tempo range 25–300 BPM => period range

- `BPM_MIN = 25` => `periodMaxMs = 60000 / 25 = 2400 ms`
- `BPM_MAX = 300` => `periodMinMs = 60000 / 300 = 200 ms`

Your detector should reject impossible periods (too small/too large) to reduce false triggers.

### C. Ring buffer window length (how many buckets?)

Ring buffer size is mainly about **stability vs latency**:

- bigger window = more stable threshold / smoother tempo
- smaller window = reacts faster to tempo changes

Rule of thumb:

- to estimate tempo near the slow end (25 BPM), try to keep at least ~3 beats in your history
- `3 * periodMaxMs = 3 * 2400 = 7200 ms`

So a good starting point is:

- `windowMs = 8000` to `12000`

Then compute:

- `ringSize = windowMs / bucketMs`

Examples:

- `bucketMs=50`, `windowMs=8000` => `ringSize=160`
- `bucketMs=80`, `windowMs=8000` => `ringSize=100`
- `bucketMs=100`, `windowMs=8000` => `ringSize=80`

### D. Suggested constants (MakeCode TypeScript)

```js
const BPM_MIN = 25
const BPM_MAX = 300

const PERIOD_MIN_MS = Math.idiv(60000, BPM_MAX) // 200ms
const PERIOD_MAX_MS = Math.idiv(60000, BPM_MIN) // 2400ms

// Choose bucketMs so bucketMs < 100ms to satisfy Nyquist for 300 BPM
const BUCKET_MS = 50

// Keep ~3 slow beats worth of history for stability at 25 BPM
const WINDOW_MS = 8000
const RING_SIZE = Math.idiv(WINDOW_MS, BUCKET_MS)

// Typical beat cooldown: prevents double-triggering on the same beat
const COOLDOWN_MS = Math.max(100, Math.idiv(PERIOD_MIN_MS, 2))
```

**Notes:**

- If CPU load is high, try `BUCKET_MS = 80` first (and recompute `RING_SIZE`).
- If you want faster response to tempo changes, reduce `WINDOW_MS` (but keep it above ~7200ms if you care about 25 BPM stability).


## Implementation

### A. Using the internal MusicLib (extension development)
The Robot PU extension has an internal helper `MusicLib` (defined in `robotpu.ts`).

It provides:

- `isABeat(timestampMs, loudness, snr, sampleMs = 125): boolean`
- `period (ms)`: estimated time between beats

Important:

- `MusicLib` is **not exported as a public MakeCode block API**.
- You can only instantiate `new MusicLib()` if you are editing/running code inside the extension source.

Example (extension dev):

```js
let now = 0
let micLoudness = 0
let musicDetector = new MusicLib()

basic.forever(function () {
    micLoudness = input.soundLevel()
    now = control.millis()
    musicDetector.isABeat(now, micLoudness, 1.005)
    basic.pause(5)
})

basic.forever(function () {
    if (randint(0, 300) == 0) {
        basic.showNumber(musicDetector.period)
    } else {
        led.plotBarGraph(micLoudness,255)
    }
})
```

Example program can be downloaded from

[https://makecode.microbit.org/_0qMPvR9cjRu5](https://makecode.microbit.org/_0qMPvR9cjRu5)

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_0qMPvR9cjRu5"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

### B. MakeCode-friendly beat detector (public projects)
If you are writing a normal MakeCode project, implement a simple beat detector yourself:

```js

let lastBeatMs = 0
let periodMs = 500
let threshold = 140

function onBeat(now: number): void {
    // period estimate (smoothed)
    const newPeriod = now - lastBeatMs
    if (newPeriod > 150 && newPeriod < 2000) {
        periodMs = (periodMs * 3 + newPeriod) / 4
    }
    lastBeatMs = now
}

basic.forever(function () {
    const now = control.millis()
    const s = input.soundLevel()

    // Cooldown prevents double triggers
    if (s > threshold && (now - lastBeatMs) > periodMs * 0.4) {
        onBeat(now)
        led.toggle(2, 2)
    }
})

```

## Technical explanation

### A. Beat detection
Beat detection from loudness is typically:

- measure loudness
- detect peaks (above threshold)
- add a cooldown (so a single hit doesn’t count twice)

## Peak detection (local maxima + hysteresis)

The simplest detector uses a single threshold:

- `if (s > threshold) => beat`

But in real audio, a beat “hit” often stays loud for several samples, which can create double-triggers.

A more robust method is **peak detection**:

- look for a **local maximum** (going up, then going down)
- use **hysteresis** (a high threshold to trigger, and a lower threshold to re-arm)
- still keep a **cooldown** as a safety net

This works especially well when you sub-sample into buckets (e.g. `BUCKET_MS = 50` or `80`).

Example: bucketed peak detector

```js

const BUCKET_MS = 50

let thresholdHigh = 160
let thresholdLow = 120

let lastBeatMs = 0
let periodMs = 500

let armed = true

let s2 = 0
let s1 = 0
let s0 = 0

function onBeat(now: number): void {
    const newPeriod = now - lastBeatMs
    if (newPeriod > 150 && newPeriod < 2000) {
        periodMs = (periodMs * 3 + newPeriod) / 4
    }
    lastBeatMs = now
    led.toggle(2, 2)
}

basic.forever(function () {
    basic.pause(BUCKET_MS)
    const now = control.millis()

    // shift samples: s2 (older) <- s1 <- s0 (new)
    s2 = s1
    s1 = s0
    s0 = input.soundLevel()

    // local maximum at s1: rising then falling
    const isPeak = (s1 > s2) && (s1 >= s0)

    // re-arm when loudness falls back down
    if (!armed && s1 < thresholdLow) {
        armed = true
    }

    // trigger only on a peak above thresholdHigh
    if (armed && isPeak && s1 > thresholdHigh) {
        // cooldown (also avoids false positives on noise)
        if (now - lastBeatMs > periodMs * 0.4) {
            armed = false
            onBeat(now)
        }
    }
})

```
**Notes:**

- Start by adjusting `thresholdHigh` until it triggers on real beats.
- Set `thresholdLow` lower than `thresholdHigh` so the detector only re-arms after the sound drops.
- If you see missed fast beats near 300 BPM, reduce `BUCKET_MS`.

`MusicLib` does this more robustly by using a ring buffer and an adaptive threshold.

## Ring buffer (circular buffer) pattern

A ring buffer stores only the most recent N samples:

- fixed memory (does not grow)
- great for smoothing/noise reduction
- used inside `MusicLib` to keep a window of recent audio energy

Below is a minimal ring buffer for beat periods, and a moving-average to stabilize BPM.

```js

const RB_SIZE = 8
let rb: number[] = [0, 0, 0, 0, 0, 0, 0, 0]
let rbIndex = 0
let rbCount = 0

function rbPush(value: number): void {
    rb[rbIndex] = value
    rbIndex = (rbIndex + 1) % RB_SIZE
    rbCount = Math.min(RB_SIZE, rbCount + 1)
}

function rbAverage(): number {
    if (rbCount == 0) return 0
    let sum = 0
    for (let i = 0; i < rbCount; i++) {
        sum += rb[i]
    }
    return sum / rbCount
}

let lastBeatMs2 = 0

function onBeat2(now: number): void {
    const p = now - lastBeatMs2
    lastBeatMs2 = now
    if (p > 150 && p < 2000) {
        rbPush(p)
    }
}

basic.forever(function () {
    const now = control.millis()
    const s = input.soundLevel()

    if (s > threshold && (now - lastBeatMs2) > 150) {
        onBeat2(now)
    }
})

input.onButtonPressed(Button.B, function () {
    const avgPeriod = rbAverage()
    if (avgPeriod > 0) {
        basic.showNumber(Math.round(60000 / avgPeriod))
    } else {
        basic.showNumber(0)
    }
})

```
**Notes:**

- This is a pattern you can reuse for loudness windows too (store recent `soundLevel()` samples).
- If you want a weighted average (recent samples matter more), increase the ring size slightly and apply weights in the sum.

### B. Tempo estimation
Once you have an estimated beat period:

- `BPM ≈ 60000 / periodMs`

Example (show BPM on button A):

```js
input.onButtonPressed(Button.A, function () {
    const bpm = Math.round(60000 / periodMs)
    basic.showNumber(bpm)
})
```
### C. Syncing motion (making Robot PU look artistic)
The key trick is a **beat clock**:

- big move on beat (downbeat)
- smaller motion between beats
- change style every N beats

Example: “pop” on each beat, otherwise keep dancing.
```js
let beatCount = 0

function onBeatMotion(): void {
    beatCount += 1

    // Big accent move
    for (let i = 0; i < 120; i++) {
        robotPu.jump()
    }

    // Change style every 8 beats
    if (beatCount % 8 == 0) {
        robotPu.talk("yeah")
    }
}

basic.forever(function () {
    const now = control.millis()
    const s = input.soundLevel()

    if (s > threshold && (now - lastBeatMs) > periodMs * 0.4) {
        onBeat(now)
        onBeatMotion()
    } else {
        // Between beats: continuous motion
        robotPu.dance()
    }
})
```
**Notes:**

- `robotPu.dance()` is already music-reactive internally, but adding your own beat clock lets you design choreography.
- If jump is too aggressive, replace it with short bursts of `walk(...)`, `sideStep(...)`, or `stand()`.

## Testing

- **Beat test**

- play music with a clear beat (or clap)

- confirm the beat indicator (LED toggle / bar graph) triggers only once per beat

- **Tempo test**

- press button A to show BPM

- verify BPM is stable (not jumping wildly)

- **Artistic sync test**

- run the “pop on beat” example

- adjust `threshold` until the robot moves on the beat reliably

### Next steps
- **Tune thresholds** for different environments (quiet room vs loud room)
- **Adaptive threshold**: track background noise and set threshold automatically
- **Different choreography**: head/waist wiggles on off-beats, step accents on downbeats
- **More features**: detect “drops” (sudden loudness increase) to switch dance routines
