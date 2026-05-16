---
sidebar_position: 9
sidebar_label: 9:Robot PU and Music
---

# 9:Robot PU and Music

## Lesson: Music Theory on micro:bit (rhythm, tempo, pitch, scales, chords)
This lesson teaches **music theory** using small MakeCode JavaScript programs that play sound with `music.playTone()`.

### Knowledge

[https://makecode.microbit.org/reference/music/](https://makecode.microbit.org/reference/music/)

[https://makecode.microbit.org/blocks/math](https://makecode.microbit.org/blocks/math)

[https://arcade.makecode.com/courses/csintro3/intro/math](https://arcade.makecode.com/courses/csintro3/intro/math)

[https://makecode.microbit.org/types/number](https://makecode.microbit.org/types/number)

[https://en.wikipedia.org/wiki/Octave](https://en.wikipedia.org/wiki/Octave)

[https://en.wikipedia.org/wiki/Chord_(music)](https://en.wikipedia.org/wiki/Chord_(music))

Important limitations:

- The built-in tone output is typically **monophonic** (one frequency at a time).
- The micro:bit microphone only gives **loudness (amplitude)** via `input.soundLevel()` (0–255). Without extra audio hardware + DSP, you generally **cannot detect real pitch / notes** from the built-in microphone.

### Why music is math
Music feels like art, but a lot of what we hear can be described with numbers and patterns:

- **Rhythm is fractions of time**
    - Notes have lengths like whole, half, quarter, eighth notes.
    - That’s just dividing time into equal parts (for example, 2 eighth notes fit in 1 quarter note).
- **Tempo is a rate**
    - Tempo in BPM (beats per minute) is “how many beats happen in 60 seconds”.
    - If you can estimate the time between beats (periodMs), you can compute BPM with 60000 / periodMs.
- **Pitch is frequency (and often ratios)**
    - A note is a sound wave vibrating at some frequency (like 440 Hz for A4).
    - Musical intervals are ratios: doubling frequency sounds like “the same note” an octave higher.
- **Songs use patterns**
    - Repeating beats, repeating chord progressions, and repeated sections (verse/chorus) are all pattern + timing.
    - That’s why simple data structures (arrays of durations, loops, and averages) are useful for music analysis.

## 1. Music theory workbook (micro:bit + `music.playTone()`)
This section teaches core music theory with small programs you can run on a micro:bit. Because `music.playTone()` is **one frequency at a time**, we’ll treat harmony (chords) as **arpeggios/strums**.

### 1.1. Setup helpers (pitch + timing)
```js

// Equal temperament tuning helper
function midiToHz(n: number): number {
    return 440 * Math.pow(2, (n - 69) / 12)
}

// Tempo helper
function bpmToBeatMs(bpm: number): number {
    return 60000 / bpm
}

```
### 1.2. Rhythm: beats, note lengths, and patterns
Treat note durations as fractions of a beat:

- `1.0` = 1 beat (quarter note)
- `0.5` = half beat (eighth note)
- `2.0` = 2 beats (half note)

**Example: metronome with an accent every 4 beats**

```js

const bpm = 120
const beatMs = bpmToBeatMs(bpm)
let beat = 0

basic.forever(function () {
    const accent = (beat % 4 == 0)
    music.playTone(accent ? 880 : 440, 40)
    basic.pause(Math.round(beatMs - 40))
    beat++
})

```
**Example: a simple drum pattern (kick/snare using low/high tones)**

```js

const bpm = 110
const beatMs = bpmToBeatMs(bpm)

// 16-step pattern (4 beats, each step is a 16th note)
// 1 = play, 0 = rest
const kick: number[]  = [1,0,0,0,  0,0,1,0,  1,0,0,0,  0,1,0,0]
const snare: number[] = [0,0,0,0,  1,0,0,0,  0,0,0,0,  1,0,0,0]

for (let bar = 0; bar < 4; bar++) {
    for (let step = 0; step < 16; step++) {
        if (kick[step]) music.playTone(120, 30)
        if (snare[step]) music.playTone(330, 30)
        basic.pause(Math.round(beatMs / 4))
    }
}

```
### 1.3. Pitch: frequency, octaves, and transposition
Here’s a handy reference table for a common scale that is easy to play on micro:bit. Frequencies are rounded to whole Hz (good enough for `music.playTone()`).

| Scale (C major) | MIDI | Frequency (Hz) |
|-----------------|------|----------------|
| C4              | 60   | 262            |
| D4              | 62   | 294            |
| E4              | 64   | 330            |
| F4              | 65   | 349            |
| G4              | 67   | 392            |
| A4              | 69   | 440            |
| B4              | 71   | 494            |
| C5              | 72   | 523            |

**Example: play the scale from the table**

```js

const cMajorMidi: number[] = [60, 62, 64, 65, 67, 69, 71, 72]
for (let i = 0; i < cMajorMidi.length; i++) {
    music.playTone(Math.round(midiToHz(cMajorMidi[i])), 220)
    basic.pause(20)
}

```
**Example: play a chromatic scale using `2^(1/12)`**

```js

const start = 60 // C4
for (let i = 0; i <= 12; i++) {
    const hz = Math.round(midiToHz(start + i))
    music.playTone(hz, 180)
    basic.pause(20)
}

```
**Example: transpose a melody by N semitones**
```js

const melody: number[] = [60, 62, 64, 67, 64, 62, 60] // C D E G E D C
const transpose = 5 // up a perfect fourth

for (let i = 0; i < melody.length; i++) {
    const hz = Math.round(midiToHz(melody[i] + transpose))
    music.playTone(hz, 180)
    basic.pause(20)
}

```
### 1.4. Intervals: semitone distances
An interval is “how many semitones apart” two notes are.

**Example: interval trainer (press A to hear, B to reveal the number)**
```js
const root = 60 // C4
let interval = 0

input.onButtonPressed(Button.A, function () {
    interval = Math.randomRange(0, 12)
    music.playTone(Math.round(midiToHz(root)), 250)
    basic.pause(50)
    music.playTone(Math.round(midiToHz(root + interval)), 250)
})

input.onButtonPressed(Button.B, function () {
    basic.showNumber(interval)
})
```
### 1.5. Scales and keys
Use scale steps (in semitones) to stay “in key”.

**Example: C major scale (degrees 1..7)**
```js
const majorScale: number[] = [0, 2, 4, 5, 7, 9, 11]
const root = 60 // C4

for (let i = 0; i < majorScale.length; i++) {
    music.playTone(Math.round(midiToHz(root + majorScale[i])), 200)
    basic.pause(20)
}
music.playTone(Math.round(midiToHz(root + 12)), 250)
```
**Example: natural minor scale (A minor)**
```js
const naturalMinor: number[] = [0, 2, 3, 5, 7, 8, 10]
const root = 57 // A3

for (let i = 0; i < naturalMinor.length; i++) {
    music.playTone(Math.round(midiToHz(root + naturalMinor[i])), 200)
    basic.pause(20)
}
music.playTone(Math.round(midiToHz(root + 12)), 250)
```
**Example: pentatonic and blues scales (great for improvising)**
```js
const majorPentatonic: number[] = [0, 2, 4, 7, 9]
const minorPentatonic: number[] = [0, 3, 5, 7, 10]
const blues: number[] = [0, 3, 5, 6, 7, 10]

const root = 60 // C4
const scale = blues

for (let i = 0; i < 24; i++) {
    const idx = Math.randomRange(0, scale.length - 1)
    const octave = (Math.randomRange(0, 5) == 0) ? 12 : 0
    const midi = root + scale[idx] + octave
    music.playTone(Math.round(midiToHz(midi)), 150)
    basic.pause(20)
}
```
**Example: generate a melody from random scale degrees**
```js
const majorScale: number[] = [0, 2, 4, 5, 7, 9, 11]
const root = 60 // C4
const bpm = 120
const beatMs = bpmToBeatMs(bpm)

for (let i = 0; i < 32; i++) {
    const degree = Math.randomRange(0, 6)
    const octave = (Math.randomRange(0, 4) == 0) ? 12 : 0
    const midi = root + majorScale[degree] + octave
    music.playTone(Math.round(midiToHz(midi)), Math.round(beatMs * 0.5))
    basic.pause(10)
}
```
### 1.6. Chords and progressions (micro:bit style)
A chord is multiple notes at the same time. Because `music.playTone()` is one frequency at a time, you usually represent chords by **arpeggiating** (playing notes quickly in sequence) or **strumming** (adding small gaps).

**Example: chord helper (major / minor / diminished / sus2 / sus4)**
```js
function chordOffsets(quality: string): number[] {
    if (quality == "maj") return [0, 4, 7]
    if (quality == "min") return [0, 3, 7]
    if (quality == "dim") return [0, 3, 6]
    if (quality == "sus2") return [0, 2, 7]
    if (quality == "sus4") return [0, 5, 7]
    return [0, 4, 7]
}

function playChordArp(rootMidi: number, quality: string, noteMs: number, spacingMs: number = 0): void {
    const offs = chordOffsets(quality)
    for (let i = 0; i < offs.length; i++) {
        music.playTone(Math.round(midiToHz(rootMidi + offs[i])), noteMs)
        if (spacingMs > 0) basic.pause(spacingMs)
    }
}

playChordArp(60, "maj", 120)
basic.pause(80)
playChordArp(69, "min", 120)
```
**Example: I–V–vi–IV in C major (C–G–Am–F)**
```js
const roots: number[] = [60, 67, 69, 65]
const qual: string[] = ["maj", "maj", "min", "maj"]

for (let bar = 0; bar < 2; bar++) {
    for (let i = 0; i < roots.length; i++) {
        // Strum each chord twice
        playChordArp(roots[i], qual[i], 120, 15)
        playChordArp(roots[i], qual[i], 120, 15)
    }
}
```
**Example: 12-bar blues in A (dominant-style feel using power/blues triads)**
```js
// We keep it simple: use major triads as a stand-in for the blues harmony
const A = 57 // A3
const D = 62 // D4
const E = 64 // E4

const progRoots: number[] = [
    A, A, A, A,
    D, D, A, A,
    E, D, A, E
]

for (let i = 0; i < progRoots.length; i++) {
    playChordArp(progRoots[i], "maj", 110, 12)
    playChordArp(progRoots[i], "maj", 110, 12)
}
```
### 1.7. Song structure: sections + repetition
A practical songwriting pattern is to build “sections” (A, B, chorus) and then sequence them.

**Example: A/B sections as note arrays**
```js
const A: number[] = [60, 62, 64, 67, 64, 62, 60]
const B: number[] = [67, 69, 71, 72, 71, 69, 67]

function playSection(section: number[], bpm: number): void {
    const beatMs = bpmToBeatMs(bpm)
    for (let i = 0; i < section.length; i++) {
        music.playTone(Math.round(midiToHz(section[i])), Math.round(beatMs * 0.5))
        basic.pause(10)
    }
}

playSection(A, 120)
playSection(A, 120)
playSection(B, 120)
playSection(A, 120)
```
### 2. Summary
You can model rhythm as arrays of durations and loops.

Pitch maps to frequency, and equal temperament uses `2^((n - 69) / 12)`.

Scales and keys constrain note choices so melodies sound “intentional”.

Chords on micro:bit are usually represented as arpeggios/strums.

### 3. AI song composer (idea)
An “AI song composer” doesn’t have to be complicated. At its core, it’s a program that:

- **Chooses notes** (often randomly), but only from a **scale** or **chord** so it stays in key.

- **Chooses rhythms** from a small set of beat lengths so the groove stays consistent.

- **Uses patterns** like repetition, call-and-response, and sections (A/B) so it sounds like a song instead of noise.

On micro:bit, you can build a simple composer by combining:

- `Math.randomRange(...)` for variation
- arrays (notes, scale steps, durations)
- the `midiToHz(...)` helper + `music.playTone(...)`

### 4. AI composer: seed with 5 scales
One simple “AI composer” strategy is to let the user choose a seed scale, then generate a melody by:

- **Restricting notes** to that scale (so it stays coherent)
- **Reusing a rhythm pattern** (so it sounds like a song)
- **Generating two** sections (A and B) and playing A–A–B–A

In this example, the “seed input” is selecting **1 of 5 scales** using buttons.

- Press **A** to cycle the scale seed (1–5)
- Press **B** to compose + play

```js
// 5-scale seeded composer
// Press A to change seed (1..5), press B to compose and play.

function midiToHz(n: number): number {
    return 440 * Math.pow(2, (n - 69) / 12)
}

function bpmToBeatMs(bpm: number): number {
    return 60000 / bpm
}

// Scale definitions as semitone offsets
const SCALE_NAMES: string[] = ["Major", "Natural minor", "Major pentatonic", "Minor pentatonic", "Blues"]
const SCALES: number[][] = [
    [0, 2, 4, 5, 7, 9, 11],      // major
    [0, 2, 3, 5, 7, 8, 10],      // natural minor
    [0, 2, 4, 7, 9],             // major pentatonic
    [0, 3, 5, 7, 10],            // minor pentatonic
    [0, 3, 5, 6, 7, 10]          // blues
]

// A consistent rhythm makes random notes feel musical
// 1.0 = 1 beat, 0.5 = half beat
const RHYTHM: number[] = [0.5, 0.5, 1, 1, 0.5, 0.5, 1, 2]

// Choose a note from a scale with a small bias toward the root and fifth
function pickScaleMidi(rootMidi: number, scale: number[]): number {
    const r = Math.randomRange(0, 9)
    let idx = 0

    if (r <= 2) idx = 0 // root
    else if (r == 3 && scale.length > 4) idx = 4 // fifth-ish if present
    else idx = Math.randomRange(0, scale.length - 1)

    const octave = (Math.randomRange(0, 7) == 0) ? 12 : 0
    return rootMidi + scale[idx] + octave
}

function playMelody(rootMidi: number, scale: number[], bpm: number, bars: number): void {
    const beatMs = bpmToBeatMs(bpm)
    for (let bar = 0; bar < bars; bar++) {
        for (let i = 0; i < RHYTHM.length; i++) {
            const midi = pickScaleMidi(rootMidi, scale)
            const ms = Math.round(RHYTHM[i] * beatMs)
            music.playTone(Math.round(midiToHz(midi)), ms)
            basic.pause(10)
        }
    }
}

let seed = 0
basic.showNumber(seed + 1)

input.onButtonPressed(Button.A, function () {
    seed = (seed + 1) % 5
    basic.showNumber(seed + 1)
})

input.onButtonPressed(Button.B, function () {
    const scale = SCALES[seed]
    const bpm = 120

    // Pick a comfortable register for micro:bit speaker/buzzer
    const rootMidi = 60 // C4

    // A section: 2 bars
    playMelody(rootMidi, scale, bpm, 2)
    // A section repeated
    playMelody(rootMidi, scale, bpm, 2)
    // B section: shift root up (variation)
    playMelody(rootMidi + 5, scale, bpm, 2)
    // Return to A
    playMelody(rootMidi, scale, bpm, 2)
})
```
### 5. AI composer (seed + melody + chords)
If you want the song to feel more “complete”, you can add a simple **harmony layer**.

Because micro:bit is monophonic, we can’t play melody and chord tones at the exact same time. Instead, we fake it by:

- playing a quick **chord arpeggio** at the start of each bar (or before each phrase)
- then playing the melody notes

The chord roots are chosen from a simple progression (I–V–vi–IV), but they are mapped onto whichever of the **5 seed scales** you selected.

How to use this program:

- **Step 1:** Create a new MakeCode micro:bit project and switch to JavaScript.
- **Step 2:** Paste the full code below (it’s intended to run as a complete program).
- **Step 3:** Download/flash to the micro:bit.
- **Step 4:** Press **A** to choose a seed scale (it shows 1 to 5 on the LED display).
- **Step 5:** Press **B** to generate and play a short song with chords + melody.

What to listen for:

- At the start of each bar you should hear a quick **3-note chord arpeggio**.
- After that, you’ll hear the **melody notes** generated from the selected scale.
- The song form is **A–A–B–A** (the B section shifts the root up for variation).

Easy tweaks:

- Change `bpm` for speed.
- Change `rootMidi` to move the whole song up/down in pitch.
- Change `progression` (degrees) to try a new chord pattern.
- Change the `RHYTHM` array to make a different groove.

```js
// 5-scale seeded composer (melody + arpeggiated chords)
// Press A to change seed (1..5), press B to compose and play.

function midiToHz(n: number): number {
    return 440 * Math.pow(2, (n - 69) / 12)
}

function bpmToBeatMs(bpm: number): number {
    return 60000 / bpm
}

const SCALE_NAMES: string[] = ["Major", "Natural minor", "Major pentatonic", "Minor pentatonic", "Blues"]
const SCALES: number[][] = [
    [0, 2, 4, 5, 7, 9, 11],
    [0, 2, 3, 5, 7, 8, 10],
    [0, 2, 4, 7, 9],
    [0, 3, 5, 7, 10],
    [0, 3, 5, 6, 7, 10]
]

const RHYTHM: number[] = [0.5, 0.5, 1, 1, 0.5, 0.5, 1, 2]

function chordOffsets(quality: string): number[] {
    if (quality == "maj") return [0, 4, 7]
    if (quality == "min") return [0, 3, 7]
    // fallback (sounds okay for pentatonic/blues too)
    return [0, 3, 7]
}

function playChordArp(rootMidi: number, quality: string, noteMs: number): void {
    const offs = chordOffsets(quality)
    for (let i = 0; i < offs.length; i++) {
        music.playTone(Math.round(midiToHz(rootMidi + offs[i])), noteMs)
        basic.pause(10)
    }
}

// Map a "degree" number into the chosen scale.
// For 7-note scales: 1..7 maps directly.
// For 5/6-note scales: wrap degrees to available notes.
function degreeToMidi(rootMidi: number, scale: number[], degree: number): number {
    const idx = (degree - 1) % scale.length
    return rootMidi + scale[idx]
}

function pickScaleMidi(rootMidi: number, scale: number[]): number {
    const r = Math.randomRange(0, 9)
    let idx = 0

    if (r <= 2) idx = 0
    else if (r == 3 && scale.length > 2) idx = 2
    else idx = Math.randomRange(0, scale.length - 1)

    const octave = (Math.randomRange(0, 7) == 0) ? 12 : 0
    return rootMidi + scale[idx] + octave
}

function playBar(rootMidi: number, scale: number[], chordDegree: number, chordQuality: string, bpm: number): void {
    const beatMs = bpmToBeatMs(bpm)

    // Harmony "hit" (arpeggio) at start of bar
    const chordRoot = degreeToMidi(rootMidi, scale, chordDegree)
    playChordArp(chordRoot, chordQuality, 90)

    // Melody for the rest of the bar
    for (let i = 0; i < RHYTHM.length; i++) {
        const midi = pickScaleMidi(rootMidi, scale)
        const ms = Math.round(RHYTHM[i] * beatMs)
        music.playTone(Math.round(midiToHz(midi)), ms)
        basic.pause(10)
    }
}

let seed = 0
basic.showNumber(seed + 1)

input.onButtonPressed(Button.A, function () {
    seed = (seed + 1) % 5
    basic.showNumber(seed + 1)
})

input.onButtonPressed(Button.B, function () {
    const scale = SCALES[seed]
    const bpm = 120
    const rootMidi = 60 // C4

    // Pick a simple chord flavor based on the seed
    const chordQuality = (seed == 0 || seed == 2) ? "maj" : "min"

    // I–V–vi–IV (degrees 1, 5, 6, 4)
    const progression: number[] = [1, 5, 6, 4]

    // A section: 4 bars
    for (let i = 0; i < progression.length; i++) {
        playBar(rootMidi, scale, progression[i], chordQuality, bpm)
    }
    // A again
    for (let i = 0; i < progression.length; i++) {
        playBar(rootMidi, scale, progression[i], chordQuality, bpm)
    }
    // B section: move the root up (variation)
    for (let i = 0; i < progression.length; i++) {
        playBar(rootMidi + 5, scale, progression[i], chordQuality, bpm)
    }
    // Back to A
    for (let i = 0; i < progression.length; i++) {
        playBar(rootMidi, scale, progression[i], chordQuality, bpm)
    }
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
        src="https://makecode.microbit.org/_idAeDcTefA65"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>
