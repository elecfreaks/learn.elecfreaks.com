---
sidebar_position: 10
sidebar_label: 10:Robot PU and Minions
---

# 10:Robot PU and Minions

## Lesson: Robot PU Minion Chorus Quartet (4 tracks via radio channel)
### Introduction
This lesson turns **four Robot PUs** into a “Minion chorus quartet”.

Each robot plays **one vocal track**, and the track is selected automatically from the robot’s **radio channel number**.

You can line up multiple Robot PUs and quickly assign them different parts by changing channel.

### Knowledge:

[https://makecode.microbit.org/reference/radio](https://makecode.microbit.org/reference/radio)

[https://en.wikipedia.org/wiki/Synchronization_(computer_science)](https://en.wikipedia.org/wiki/Synchronization_(computer_science))

### Problem definition

We want a simple way to coordinate multiple robots so that:

- each Robot PU plays exactly one of **4** song parts
- the selection is deterministic and easy to configure
- robots can share the same code, but behave differently based on their **radio channel**

### Basic diea of solutions
- **4 tracks:** implement `track1()`, `track2()`, `track3()`, `track4()`.
- **Channel → track mapping:** use:`trackIndex = robotPu.channel() % 4`which maps channels to tracks like:
    - channel % 4 == 0 → track1
    - channel % 4 == 1 → track2
    - channel % 4 == 2 → track3
    - channel % 4 == 3 → track4
- **Quick assignment:** use buttons to change the radio channel, then press the logo to start singing the mapped track.

### Implemenation
Copy this program into your MakeCode **JavaScript** editor.

Notes before you run:

- Button **A** increments channel.
- Button **B** decrements channel.
- **Logo** starts the singing track selected by `channel % 4`.
- `robotPu.greet()` initializes Robot PU.

```js
function track3 () {
   music.rest(music.beat(BeatFraction.Breve))
   started = 1
   music.playTone(554, music.beat(BeatFraction.Half))
   music.playTone(554, music.beat(BeatFraction.Half))
   music.playTone(554, music.beat(BeatFraction.Half))
   music.playTone(554, music.beat(BeatFraction.Quarter))
   music.playTone(554, music.beat(BeatFraction.Quarter))
   music.playTone(554, music.beat(BeatFraction.Quarter))
   music.playTone(554, music.beat(BeatFraction.Half))
   music.playTone(554, music.beat(BeatFraction.Quarter))
   music.playTone(554, music.beat(BeatFraction.Whole))
   music.playTone(554, music.beat(BeatFraction.Half))
   music.playTone(554, music.beat(BeatFraction.Half))
   music.playTone(554, music.beat(BeatFraction.Half))
   music.playTone(554, music.beat(BeatFraction.Quarter))
   music.playTone(554, music.beat(BeatFraction.Quarter))
   music.playTone(554, music.beat(BeatFraction.Quarter))
   music.playTone(554, music.beat(BeatFraction.Half))
   music.playTone(554, music.beat(BeatFraction.Quarter))
   music.playTone(554, music.beat(BeatFraction.Whole))
   music.playTone(554, music.beat(BeatFraction.Half))
   music.playTone(554, music.beat(BeatFraction.Half))
   music.playTone(554, music.beat(BeatFraction.Half))
   music.playTone(554, music.beat(BeatFraction.Quarter))
   music.playTone(554, music.beat(BeatFraction.Quarter))
   music.playTone(554, music.beat(BeatFraction.Quarter))
   music.playTone(554, music.beat(BeatFraction.Half))
   music.playTone(554, music.beat(BeatFraction.Quarter))
   music.playTone(554, music.beat(BeatFraction.Whole))
   music.playTone(554, music.beat(BeatFraction.Half))
   music.playTone(554, music.beat(BeatFraction.Half))
   music.playTone(554, music.beat(BeatFraction.Half))
   music.playTone(554, music.beat(BeatFraction.Quarter))
   music.playTone(554, music.beat(BeatFraction.Quarter))
   music.playTone(554, music.beat(BeatFraction.Quarter))
   music.playTone(554, music.beat(BeatFraction.Half))
   music.playTone(554, music.beat(BeatFraction.Quarter))
   music.playTone(554, music.beat(BeatFraction.Whole))
   music.playTone(554, music.beat(BeatFraction.Half))
   music.playTone(554, music.beat(BeatFraction.Half))
   music.playTone(554, music.beat(BeatFraction.Half))
   music.playTone(554, music.beat(BeatFraction.Quarter))
   music.playTone(554, music.beat(BeatFraction.Quarter))
   music.playTone(554, music.beat(BeatFraction.Quarter))
   music.playTone(554, music.beat(BeatFraction.Half))
   music.playTone(554, music.beat(BeatFraction.Quarter))
   music.playTone(554, music.beat(BeatFraction.Quarter))
   music.playTone(440, music.beat(BeatFraction.Quarter))
   music.playTone(440, music.beat(BeatFraction.Quarter))
   music.playTone(440, music.beat(BeatFraction.Quarter))
   music.playTone(494, music.beat(BeatFraction.Quarter))
   music.playTone(494, music.beat(BeatFraction.Quarter))
   music.playTone(494, music.beat(BeatFraction.Quarter))
   music.playTone(494, music.beat(BeatFraction.Quarter))
   music.playTone(330, music.beat(BeatFraction.Half))
   music.playTone(330, music.beat(BeatFraction.Quarter))
   music.playTone(554, music.beat(BeatFraction.Quarter))
   music.playTone(554, music.beat(BeatFraction.Quarter))
   music.playTone(494, music.beat(BeatFraction.Quarter))
   music.playTone(554, music.beat(BeatFraction.Quarter))
   music.playTone(494, music.beat(BeatFraction.Quarter))
   music.playTone(554, music.beat(BeatFraction.Quarter))
   music.playTone(494, music.beat(BeatFraction.Quarter))
   music.playTone(440, music.beat(BeatFraction.Quarter))
   music.playTone(370, music.beat(BeatFraction.Quarter))
   music.playTone(440, music.beat(BeatFraction.Half))
   music.playTone(554, music.beat(BeatFraction.Half))
   music.playTone(554, music.beat(BeatFraction.Half))
   music.playTone(554, music.beat(BeatFraction.Quarter))
   music.playTone(554, music.beat(BeatFraction.Quarter))
   music.playTone(554, music.beat(BeatFraction.Quarter))
   music.playTone(554, music.beat(BeatFraction.Half))
   music.playTone(554, music.beat(BeatFraction.Quarter))
   music.playTone(554, music.beat(BeatFraction.Whole))
   music.playTone(440, music.beat(BeatFraction.Half))
   music.playTone(440, music.beat(BeatFraction.Quarter))
   music.playTone(440, music.beat(BeatFraction.Half))
   music.playTone(440, music.beat(BeatFraction.Whole))
   music.playTone(440, music.beat(BeatFraction.Quarter))
   music.playTone(440, music.beat(BeatFraction.Quarter))
   music.playTone(440, music.beat(BeatFraction.Quarter))
   music.playTone(440, music.beat(BeatFraction.Quarter))
   music.playTone(440, music.beat(BeatFraction.Whole))
   music.playTone(440, music.beat(BeatFraction.Half))
   music.playTone(440, music.beat(BeatFraction.Quarter))
   music.playTone(440, music.beat(BeatFraction.Quarter))
   music.playTone(440, music.beat(BeatFraction.Half))
   music.playTone(440, music.beat(BeatFraction.Quarter))
   music.playTone(440, music.beat(BeatFraction.Quarter))
   music.playTone(740, music.beat(BeatFraction.Quarter))
   music.playTone(740, music.beat(BeatFraction.Quarter))
   music.playTone(659, music.beat(BeatFraction.Quarter))
   music.playTone(659, music.beat(BeatFraction.Quarter))
   music.playTone(554, music.beat(BeatFraction.Half))
   music.playTone(494, music.beat(BeatFraction.Quarter))
   music.playTone(440, music.beat(BeatFraction.Quarter))
   music.playTone(370, music.beat(BeatFraction.Half))
   music.playTone(370, music.beat(BeatFraction.Half))
   music.playTone(370, music.beat(BeatFraction.Half))
   music.playTone(370, music.beat(BeatFraction.Quarter))
   music.playTone(370, music.beat(BeatFraction.Quarter))
   music.playTone(370, music.beat(BeatFraction.Quarter))
   music.playTone(370, music.beat(BeatFraction.Half))
   music.playTone(370, music.beat(BeatFraction.Quarter))
   music.playTone(370, music.beat(BeatFraction.Whole))
   music.playTone(330, music.beat(BeatFraction.Half))
   music.playTone(330, music.beat(BeatFraction.Half))
   music.playTone(330, music.beat(BeatFraction.Half))
   music.playTone(330, music.beat(BeatFraction.Quarter))
   music.playTone(330, music.beat(BeatFraction.Quarter))
   music.playTone(330, music.beat(BeatFraction.Quarter))
   music.playTone(330, music.beat(BeatFraction.Half))
   music.rest(music.beat(BeatFraction.Whole))
   music.rest(music.beat(BeatFraction.Double))
   started = 0
}

function track4 () {
   started = 1
   music.playTone(440, music.beat(BeatFraction.Half))
   music.playTone(440, music.beat(BeatFraction.Half))
   music.playTone(440, music.beat(BeatFraction.Half))
   music.playTone(440, music.beat(BeatFraction.Quarter))
   music.playTone(440, music.beat(BeatFraction.Quarter))
   music.playTone(440, music.beat(BeatFraction.Quarter))
   music.playTone(440, music.beat(BeatFraction.Half))
   music.playTone(440, music.beat(BeatFraction.Quarter))
   music.playTone(440, music.beat(BeatFraction.Whole))
   music.playTone(440, music.beat(BeatFraction.Half))
   music.playTone(440, music.beat(BeatFraction.Half))
   music.playTone(440, music.beat(BeatFraction.Half))
   music.playTone(440, music.beat(BeatFraction.Quarter))
   music.playTone(440, music.beat(BeatFraction.Quarter))
   music.playTone(440, music.beat(BeatFraction.Quarter))
   music.playTone(440, music.beat(BeatFraction.Half))
   music.playTone(440, music.beat(BeatFraction.Quarter))
   music.playTone(440, music.beat(BeatFraction.Whole))
   music.playTone(440, music.beat(BeatFraction.Half))
   music.playTone(440, music.beat(BeatFraction.Half))
   music.playTone(440, music.beat(BeatFraction.Half))
   music.playTone(440, music.beat(BeatFraction.Quarter))
   music.playTone(440, music.beat(BeatFraction.Quarter))
   music.playTone(440, music.beat(BeatFraction.Quarter))
   music.playTone(440, music.beat(BeatFraction.Half))
   music.playTone(440, music.beat(BeatFraction.Quarter))
   music.playTone(440, music.beat(BeatFraction.Half))
   music.playTone(220, music.beat(BeatFraction.Half))
   music.playTone(440, music.beat(BeatFraction.Half))
   music.playTone(440, music.beat(BeatFraction.Half))
   music.playTone(440, music.beat(BeatFraction.Half))
   music.playTone(440, music.beat(BeatFraction.Quarter))
   music.playTone(440, music.beat(BeatFraction.Quarter))
   music.playTone(440, music.beat(BeatFraction.Quarter))
   music.playTone(440, music.beat(BeatFraction.Half))
   music.playTone(440, music.beat(BeatFraction.Quarter))
   music.playTone(440, music.beat(BeatFraction.Whole))
   music.playTone(440, music.beat(BeatFraction.Half))
   music.playTone(440, music.beat(BeatFraction.Half))
   music.playTone(440, music.beat(BeatFraction.Half))
   music.playTone(440, music.beat(BeatFraction.Quarter))
   music.playTone(440, music.beat(BeatFraction.Quarter))
   music.playTone(440, music.beat(BeatFraction.Quarter))
   music.playTone(440, music.beat(BeatFraction.Half))
   music.playTone(440, music.beat(BeatFraction.Quarter))
   music.playTone(440, music.beat(BeatFraction.Whole))
   music.playTone(440, music.beat(BeatFraction.Half))
   music.playTone(440, music.beat(BeatFraction.Half))
   music.playTone(440, music.beat(BeatFraction.Half))
   music.playTone(440, music.beat(BeatFraction.Quarter))
   music.playTone(440, music.beat(BeatFraction.Quarter))
   music.playTone(440, music.beat(BeatFraction.Quarter))
   music.playTone(440, music.beat(BeatFraction.Half))
   music.playTone(440, music.beat(BeatFraction.Quarter))
   music.playTone(440, music.beat(BeatFraction.Quarter))
   music.playTone(440, music.beat(BeatFraction.Quarter))
   music.playTone(440, music.beat(BeatFraction.Quarter))
   music.playTone(440, music.beat(BeatFraction.Quarter))
   music.playTone(494, music.beat(BeatFraction.Quarter))
   music.playTone(494, music.beat(BeatFraction.Quarter))
   music.playTone(494, music.beat(BeatFraction.Quarter))
   music.playTone(494, music.beat(BeatFraction.Quarter))
   music.playTone(330, music.beat(BeatFraction.Half))
   music.playTone(330, music.beat(BeatFraction.Quarter))
   music.playTone(554, music.beat(BeatFraction.Quarter))
   music.playTone(554, music.beat(BeatFraction.Quarter))
   music.playTone(494, music.beat(BeatFraction.Quarter))
   music.playTone(554, music.beat(BeatFraction.Quarter))
   music.playTone(494, music.beat(BeatFraction.Quarter))
   music.playTone(554, music.beat(BeatFraction.Quarter))
   music.playTone(494, music.beat(BeatFraction.Quarter))
   music.playTone(440, music.beat(BeatFraction.Quarter))
   music.playTone(370, music.beat(BeatFraction.Quarter))
   music.playTone(440, music.beat(BeatFraction.Half))
   music.playTone(440, music.beat(BeatFraction.Half))
   music.playTone(440, music.beat(BeatFraction.Half))
   music.playTone(440, music.beat(BeatFraction.Quarter))
   music.playTone(440, music.beat(BeatFraction.Quarter))
   music.playTone(440, music.beat(BeatFraction.Quarter))
   music.playTone(440, music.beat(BeatFraction.Half))
   music.playTone(440, music.beat(BeatFraction.Quarter))
   music.playTone(440, music.beat(BeatFraction.Whole))
   music.playTone(196, music.beat(BeatFraction.Half))
   music.playTone(277, music.beat(BeatFraction.Half))
   music.playTone(330, music.beat(BeatFraction.Half))
   music.playTone(370, music.beat(BeatFraction.Half))
   music.playTone(392, music.beat(BeatFraction.Half))
   music.playTone(370, music.beat(BeatFraction.Half))
   music.playTone(330, music.beat(BeatFraction.Half))
   music.playTone(277, music.beat(BeatFraction.Half))
   music.playTone(196, music.beat(BeatFraction.Half))
   music.playTone(277, music.beat(BeatFraction.Half))
   music.playTone(330, music.beat(BeatFraction.Half))
   music.playTone(370, music.beat(BeatFraction.Half))
   music.playTone(392, music.beat(BeatFraction.Half))
   music.playTone(370, music.beat(BeatFraction.Half))
   music.playTone(330, music.beat(BeatFraction.Half))
   music.playTone(277, music.beat(BeatFraction.Half))
   music.playTone(294, music.beat(BeatFraction.Half))
   music.playTone(370, music.beat(BeatFraction.Half))
   music.playTone(440, music.beat(BeatFraction.Half))
   music.playTone(494, music.beat(BeatFraction.Half))
   music.playTone(523, music.beat(BeatFraction.Half))
   music.playTone(494, music.beat(BeatFraction.Half))
   music.playTone(440, music.beat(BeatFraction.Half))
   music.playTone(370, music.beat(BeatFraction.Half))
   music.playTone(220, music.beat(BeatFraction.Half))
   music.playTone(262, music.beat(BeatFraction.Half))
   music.playTone(330, music.beat(BeatFraction.Half))
   music.playTone(370, music.beat(BeatFraction.Half))
   music.playTone(392, music.beat(BeatFraction.Half))
   music.playTone(370, music.beat(BeatFraction.Half))
   music.playTone(330, music.beat(BeatFraction.Half))
   music.rest(music.beat(BeatFraction.Whole))
   music.rest(music.beat(BeatFraction.Double))
   started = 0
}
function track1 () {
   music.rest(music.beat(BeatFraction.Breve))
   music.rest(music.beat(BeatFraction.Breve))
   music.rest(music.beat(BeatFraction.Double))
   music.rest(music.beat(BeatFraction.Whole))
   started = 1
   music.playTone(247, music.beat(BeatFraction.Half))
   music.playTone(277, music.beat(BeatFraction.Half))
   music.playTone(277, music.beat(BeatFraction.Half))
   music.playTone(247, music.beat(BeatFraction.Half))
   music.playTone(220, music.beat(BeatFraction.Whole))
   music.playTone(220, music.beat(BeatFraction.Half))
   music.playTone(277, music.beat(BeatFraction.Half))
   music.playTone(330, music.beat(BeatFraction.Half))
   music.playTone(277, music.beat(BeatFraction.Half))
   music.playTone(277, music.beat(BeatFraction.Half))
   music.playTone(247, music.beat(BeatFraction.Half))
   music.playTone(220, music.beat(BeatFraction.Whole))
   music.playTone(220, music.beat(BeatFraction.Whole))
   music.playTone(247, music.beat(BeatFraction.Half))
   music.playTone(277, music.beat(BeatFraction.Half))
   music.playTone(277, music.beat(BeatFraction.Half))
   music.playTone(247, music.beat(BeatFraction.Half))
   music.playTone(220, music.beat(BeatFraction.Whole))
   music.playTone(220, music.beat(BeatFraction.Whole))
   music.rest(music.beat(BeatFraction.Whole))
   music.playTone(196, music.beat(BeatFraction.Whole))
   music.rest(music.beat(BeatFraction.Whole))
   music.rest(music.beat(BeatFraction.Double))
   music.rest(music.beat(BeatFraction.Breve))
   music.playTone(277, music.beat(BeatFraction.Half))
   music.playTone(277, music.beat(BeatFraction.Quarter))
   music.playTone(277, music.beat(BeatFraction.Quarter))
   music.playTone(277, music.beat(BeatFraction.Whole))
   music.playTone(277, music.beat(BeatFraction.Quarter))
   music.playTone(277, music.beat(BeatFraction.Quarter))
   music.playTone(277, music.beat(BeatFraction.Quarter))
   music.playTone(277, music.beat(BeatFraction.Quarter))
   music.playTone(277, music.beat(BeatFraction.Whole))
   music.playTone(277, music.beat(BeatFraction.Half))
   music.playTone(277, music.beat(BeatFraction.Quarter))
   music.playTone(277, music.beat(BeatFraction.Quarter))
   music.playTone(277, music.beat(BeatFraction.Half))
   music.playTone(277, music.beat(BeatFraction.Quarter))
   music.playTone(277, music.beat(BeatFraction.Quarter))
   music.playTone(277, music.beat(BeatFraction.Quarter))
   music.playTone(277, music.beat(BeatFraction.Quarter))
   music.playTone(277, music.beat(BeatFraction.Quarter))
   music.playTone(277, music.beat(BeatFraction.Quarter))
   music.playTone(277, music.beat(BeatFraction.Half))
   music.playTone(277, music.beat(BeatFraction.Quarter))
   music.playTone(294, music.beat(BeatFraction.Quarter))
   music.playTone(330, music.beat(BeatFraction.Half))
   music.playTone(330, music.beat(BeatFraction.Half))
   music.playTone(330, music.beat(BeatFraction.Half))
   music.playTone(330, music.beat(BeatFraction.Quarter))
   music.playTone(330, music.beat(BeatFraction.Quarter))
   music.playTone(330, music.beat(BeatFraction.Quarter))
   music.playTone(330, music.beat(BeatFraction.Half))
   music.playTone(330, music.beat(BeatFraction.Quarter))
   music.playTone(330, music.beat(BeatFraction.Whole))
   music.playTone(277, music.beat(BeatFraction.Half))
   music.playTone(277, music.beat(BeatFraction.Half))
   music.playTone(277, music.beat(BeatFraction.Half))
   music.playTone(277, music.beat(BeatFraction.Quarter))
   music.playTone(277, music.beat(BeatFraction.Quarter))
   music.playTone(277, music.beat(BeatFraction.Quarter))
   music.playTone(277, music.beat(BeatFraction.Half))
   music.playTone(277, music.beat(BeatFraction.Quarter))
   music.playTone(277, music.beat(BeatFraction.Quarter))
   music.playTone(220, music.beat(BeatFraction.Quarter))
   music.playTone(220, music.beat(BeatFraction.Quarter))
   music.playTone(220, music.beat(BeatFraction.Quarter))
   music.playTone(247, music.beat(BeatFraction.Quarter))
   music.playTone(247, music.beat(BeatFraction.Quarter))
   music.playTone(247, music.beat(BeatFraction.Quarter))
   music.playTone(247, music.beat(BeatFraction.Quarter))
   music.playTone(247, music.beat(BeatFraction.Half))
   music.playTone(247, music.beat(BeatFraction.Quarter))
   music.playTone(330, music.beat(BeatFraction.Quarter))
   music.playTone(330, music.beat(BeatFraction.Quarter))
   music.playTone(294, music.beat(BeatFraction.Quarter))
   music.playTone(330, music.beat(BeatFraction.Quarter))
   music.playTone(294, music.beat(BeatFraction.Quarter))
   music.playTone(330, music.beat(BeatFraction.Quarter))
   music.rest(music.beat(BeatFraction.Whole))
   music.rest(music.beat(BeatFraction.Double))
   started = 0
}
function track2 () {
   music.rest(music.beat(BeatFraction.Breve))
   music.rest(music.beat(BeatFraction.Breve))
   started = 1
   music.playTone(330, music.beat(BeatFraction.Half))
   music.playTone(330, music.beat(BeatFraction.Half))
   music.playTone(330, music.beat(BeatFraction.Half))
   music.playTone(330, music.beat(BeatFraction.Quarter))
   music.playTone(330, music.beat(BeatFraction.Quarter))
   music.playTone(330, music.beat(BeatFraction.Quarter))
   music.playTone(330, music.beat(BeatFraction.Half))
   music.playTone(330, music.beat(BeatFraction.Quarter))
   music.playTone(330, music.beat(BeatFraction.Whole))
   music.playTone(330, music.beat(BeatFraction.Half))
   music.playTone(330, music.beat(BeatFraction.Half))
   music.playTone(330, music.beat(BeatFraction.Half))
   music.playTone(330, music.beat(BeatFraction.Quarter))
   music.playTone(330, music.beat(BeatFraction.Quarter))
   music.playTone(330, music.beat(BeatFraction.Quarter))
   music.playTone(330, music.beat(BeatFraction.Half))
   music.playTone(330, music.beat(BeatFraction.Quarter))
   music.playTone(330, music.beat(BeatFraction.Whole))
   music.playTone(330, music.beat(BeatFraction.Half))
   music.playTone(330, music.beat(BeatFraction.Half))
   music.playTone(330, music.beat(BeatFraction.Half))
   music.playTone(330, music.beat(BeatFraction.Quarter))
   music.playTone(330, music.beat(BeatFraction.Quarter))
   music.playTone(330, music.beat(BeatFraction.Quarter))
   music.playTone(330, music.beat(BeatFraction.Half))
   music.playTone(330, music.beat(BeatFraction.Quarter))
   music.playTone(330, music.beat(BeatFraction.Whole))
   music.playTone(330, music.beat(BeatFraction.Half))
   music.playTone(330, music.beat(BeatFraction.Half))
   music.playTone(330, music.beat(BeatFraction.Half))
   music.playTone(330, music.beat(BeatFraction.Quarter))
   music.playTone(330, music.beat(BeatFraction.Quarter))
   music.playTone(330, music.beat(BeatFraction.Quarter))
   music.playTone(330, music.beat(BeatFraction.Half))
   music.playTone(330, music.beat(BeatFraction.Quarter))
   music.playTone(330, music.beat(BeatFraction.Whole))
   music.playTone(330, music.beat(BeatFraction.Whole))
   music.rest(music.beat(BeatFraction.Whole))
   music.rest(music.beat(BeatFraction.Double))
   music.playTone(330, music.beat(BeatFraction.Half))
   music.playTone(330, music.beat(BeatFraction.Half))
   music.playTone(330, music.beat(BeatFraction.Half))
   music.playTone(330, music.beat(BeatFraction.Quarter))
   music.playTone(330, music.beat(BeatFraction.Quarter))
   music.playTone(330, music.beat(BeatFraction.Quarter))
   music.playTone(330, music.beat(BeatFraction.Half))
   music.playTone(330, music.beat(BeatFraction.Quarter))
   music.playTone(330, music.beat(BeatFraction.Whole))
   music.playTone(208, music.beat(BeatFraction.Half))
   music.playTone(208, music.beat(BeatFraction.Quarter))
   music.playTone(208, music.beat(BeatFraction.Quarter))
   music.playTone(208, music.beat(BeatFraction.Whole))
   music.playTone(208, music.beat(BeatFraction.Quarter))
   music.playTone(208, music.beat(BeatFraction.Quarter))
   music.playTone(208, music.beat(BeatFraction.Quarter))
   music.playTone(208, music.beat(BeatFraction.Quarter))
   music.playTone(208, music.beat(BeatFraction.Whole))
   music.playTone(208, music.beat(BeatFraction.Half))
   music.playTone(208, music.beat(BeatFraction.Quarter))
   music.playTone(208, music.beat(BeatFraction.Quarter))
   music.playTone(208, music.beat(BeatFraction.Half))
   music.playTone(208, music.beat(BeatFraction.Quarter))
   music.playTone(208, music.beat(BeatFraction.Quarter))
   music.playTone(370, music.beat(BeatFraction.Quarter))
   music.playTone(370, music.beat(BeatFraction.Quarter))
   music.playTone(330, music.beat(BeatFraction.Quarter))
   music.playTone(330, music.beat(BeatFraction.Quarter))
   music.playTone(277, music.beat(BeatFraction.Half))
   music.playTone(247, music.beat(BeatFraction.Quarter))
   music.playTone(220, music.beat(BeatFraction.Quarter))
   music.playTone(220, music.beat(BeatFraction.Half))
   music.playTone(220, music.beat(BeatFraction.Half))
   music.playTone(220, music.beat(BeatFraction.Half))
   music.playTone(220, music.beat(BeatFraction.Quarter))
   music.playTone(220, music.beat(BeatFraction.Quarter))
   music.playTone(220, music.beat(BeatFraction.Quarter))
   music.playTone(220, music.beat(BeatFraction.Half))
   music.playTone(220, music.beat(BeatFraction.Quarter))
   music.playTone(247, music.beat(BeatFraction.Half))
   music.playTone(247, music.beat(BeatFraction.Half))
   music.playTone(277, music.beat(BeatFraction.Half))
   music.playTone(247, music.beat(BeatFraction.Half))
   music.playTone(220, music.beat(BeatFraction.Half))
   music.playTone(220, music.beat(BeatFraction.Quarter))
   music.playTone(220, music.beat(BeatFraction.Quarter))
   music.playTone(220, music.beat(BeatFraction.Quarter))
   music.playTone(220, music.beat(BeatFraction.Half))
   music.playTone(220, music.beat(BeatFraction.Quarter))
   music.playTone(220, music.beat(BeatFraction.Quarter))
   music.playTone(220, music.beat(BeatFraction.Quarter))
   music.playTone(220, music.beat(BeatFraction.Quarter))
   music.playTone(220, music.beat(BeatFraction.Quarter))
   music.playTone(247, music.beat(BeatFraction.Quarter))
   music.playTone(247, music.beat(BeatFraction.Quarter))
   music.playTone(247, music.beat(BeatFraction.Quarter))
   music.playTone(247, music.beat(BeatFraction.Quarter))
   music.playTone(247, music.beat(BeatFraction.Half))
   music.playTone(247, music.beat(BeatFraction.Quarter))
   music.playTone(277, music.beat(BeatFraction.Quarter))
   music.playTone(277, music.beat(BeatFraction.Quarter))
   music.playTone(247, music.beat(BeatFraction.Quarter))
   music.playTone(277, music.beat(BeatFraction.Quarter))
   music.playTone(247, music.beat(BeatFraction.Quarter))
   music.playTone(277, music.beat(BeatFraction.Quarter))
   music.playTone(247, music.beat(BeatFraction.Quarter))
   music.playTone(220, music.beat(BeatFraction.Quarter))
   music.rest(music.beat(BeatFraction.Whole))
})
// press button B to walk backward in circles
input.onButtonPressed(Button.B, function () {
   robotPu.changeChannel(-1)
})
// listen to radio messages for commands of key value pairs
radio.onReceivedValue(function (name, value) {
   robotPu.runKeyValueCommand(name, value)
})
// press logo button to dance using set mode
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
   track = robotPu.channel() % 4
   if (track == 0) {
       track1()
   } else if (track == 1) {
       track2()
   } else if (track == 2) {
       track3()
   } else {
       track4()
   }
})
let track = 0
let started = 0
// Initialize robot by ask it to greet
robotPu.greet()
```
Example program can be downloaded from [https://makecode.microbit.org/S24031-00421-18959-80697](https://makecode.microbit.org/S24031-00421-18959-80697)


### Full quartet soundtrack template (Tenor / Whistle / Baritone / Bass)
This section provides a **runnable** quartet “soundtrack” template (4 independent parts) using `music.playTone(...)`.

Mapping used:

- `track = 0` = Tenor Solo (melody)
- `track = 1` = Whistle
- `track = 2` = Baritone
- `track = 3` = Bass

Tempo/time settings used:

- `music.setTempo(...)` (see MIDI note below)
- durations are expressed as milliseconds in `tracksDursMs[]`

To use this with the synchronization methods above:

- Keep your existing `radio` handlers.
- Fill `tracksFreqs[]` and `tracksDursMs[]` with the note sequences you want.

Continue transcription workflow (repeatable):

For each staff (Tenor/Whistle/Baritone/Bass), go **measure by measure**.
For each measure, append to `tracksFreqs[trackId]` and `tracksDursMs[trackId]`.
Use frequency `0` for rests.

```js
robotPu.setChannel(166)
// Set your tempo here. The MIDI-extraction script below uses this BPM to convert ticks -> milliseconds.
music.setTempo(120)
music.setVolume(255)
let track = 0
let started = 0

function playTrack(freqs: number[], dursMs: number[]) {
    for (let i = 0; i < freqs.length; i++) {
        if (freqs[i] <= 0) music.rest(dursMs[i])
        else music.playTone(freqs[i], dursMs[i])
    }
}

let tracksFreqs: number[][] = [
    [0,294,330,330,294,262,330,392,330,330],
    [
        // Fill in
        0,392,392,392,392,392,392,392,392,392
    ],
    [
        // Fill in
        0,659,659,659,659,659,659,659,659,659
    ],
    [
        // Fill in
        523,523,523,523,523,523,523,523,523,523
    ]
]

let tracksDursMs: number[][] = [
    [
        5500,250,250,250,250,750,250,250,250,250
    ],
    [
        // Fill in
        4000,250,250,375,500,125,500,250,250,375
    ],
    [
        // Fill in
        2000,250,250,375,250,250,125,500,250,250
    ],
    [
        // Fill in
        250,250,375,250,250,125,500,250,250,375
    ]
]

function playSelectedTrack () {
    const n = tracksFreqs.length
    if (n <= 0) return
    const idx = ((track % n) + n) % n
    started = 1
    playTrack(tracksFreqs[idx], tracksDursMs[idx])
    started = 0
}

radio.onReceivedString(function (receivedString) {
    if (receivedString == "#puChorus") {
        playSelectedTrack()
    }
    robotPu.runStringCommand(receivedString)
})

radio.onReceivedValue(function (name, value) {
    robotPu.runKeyValueCommand(name, value)
})

input.onButtonPressed(Button.A, function () {
    track += 1
    basic.showNumber(((track % tracksFreqs.length) + tracksFreqs.length) % tracksFreqs.length)
})

input.onButtonPressed(Button.B, function () {
    track -= 1
    basic.showNumber(((track % tracksFreqs.length) + tracksFreqs.length) % tracksFreqs.length)
})

input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    playSelectedTrack()
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
        src="https://makecode.microbit.org/_X4wcbC4Akaai"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

You can also download from here:[https://makecode.microbit.org/_fq9VkJYgY8qM](https://makecode.microbit.org/_fq9VkJYgY8qM)

Upload to 4 robot PU’s microbit. Press the microbit button A or B to set sound track of each robot PU to 0,1,2,3.

Then load this gamepad program to gamepad’s microbit: [https://makecode.microbit.org/_Lp31Ec4tXXM8](https://makecode.microbit.org/_Lp31Ec4tXXM8)

When you make the gamepad face-down, the chorus of 4 robot PU will start.

### Generate `freqs[]` + `durs[]` using GenAI for any quartet song

Simply use following prompt in Microsoft Copilot to fill in the blank of the
---
let tracksFreqs: number[][] = []
let tracksDursMs: number[][] = []
---
Prompts: Generate a chorus quartet about 60 seconds, similar to the Minion banana. Using javascript, pack the frequence into tracksFreqs as number[][], pack the duration into tracksDursMs as number[][]

then, copy and paste the code from Copilot outputs to replace the code above.

here is am example.
```js
robotPu.setChannel(166)
// Set your tempo here. The MIDI-extraction script below uses this BPM to convert ticks -> milliseconds.
music.setTempo(120)
music.setVolume(255)
let track = 0
let started = 0

function playTrack(freqs: number[], dursMs: number[]) {
    for (let i = 0; i < freqs.length; i++) {
        if (freqs[i] <= 0) music.rest(dursMs[i])
        else music.playTone(freqs[i], dursMs[i])
    }
}

let tracksFreqs: number[][] = [
    // TRACK 0 — TENOR (Main Melody)
    [
        // INTRO
        523.25, 659.25, 783.99, 1046.5,
        987.77, 880.0, 783.99, 659.25,

        // THEME A
        523.25, 587.33, 659.25, 783.99,
        880.0, 783.99, 659.25, 587.33,
        659.25, 783.99, 880.0, 987.77,
        880.0, 783.99, 659.25, 523.25,

        // THEME B
        659.25, 783.99, 987.77, 1046.5,
        987.77, 880.0, 783.99, 880.0,
        987.77, 1046.5, 1174.66, 1046.5,
        987.77, 880.0, 783.99, 659.25,

        // BRIDGE
        523.25, 587.33, 659.25, 698.46,
        739.99, 698.46, 659.25, 587.33,

        // FINAL CHORUS
        523.25, 659.25, 783.99, 880.0,
        987.77, 1046.5, 987.77, 880.0,
        783.99, 659.25, 523.25, 523.25
    ],

    // TRACK 1 — WHISTLE (Counter‑Melody)
    [
        // INTRO
        0, 880.0, 987.77, 1174.66,
        1046.5, 987.77, 880.0, 0,

        // THEME A
        880.0, 987.77, 1046.5, 987.77,
        880.0, 783.99, 880.0, 987.77,
        1046.5, 1174.66, 1046.5, 987.77,
        880.0, 783.99, 880.0, 987.77,

        // THEME B
        1174.66, 1318.51, 1174.66, 1046.5,
        987.77, 880.0, 987.77, 1046.5,
        1174.66, 1318.51, 1396.91, 1318.51,
        1174.66, 1046.5, 987.77, 880.0,

        // BRIDGE
        880.0, 987.77, 1046.5, 987.77,
        880.0, 783.99, 698.46, 659.25,

        // FINAL CHORUS
        880.0, 987.77, 1046.5, 1174.66,
        1318.51, 1396.91, 1318.51, 1174.66,
        1046.5, 987.77, 880.0, 880.0
    ],

    // TRACK 2 — BARITONE (Harmony)
    [
        // INTRO
        130.81, 196.0, 261.63, 196.0,
        174.61, 220.0, 246.94, 220.0,

        // THEME A
        130.81, 164.81, 196.0, 164.81,
        146.83, 174.61, 196.0, 174.61,
        130.81, 164.81, 196.0, 164.81,
        146.83, 174.61, 196.0, 174.61,

        // THEME B
        174.61, 220.0, 261.63, 220.0,
        196.0, 246.94, 293.66, 246.94,
        174.61, 220.0, 261.63, 220.0,
        196.0, 246.94, 293.66, 246.94,

        // BRIDGE
        130.81, 146.83, 164.81, 174.61,
        196.0, 174.61, 164.81, 146.83,

        // FINAL CHORUS
        130.81, 164.81, 196.0, 220.0,
        246.94, 261.63, 246.94, 220.0,
        196.0, 164.81, 130.81, 130.81
    ],

    // TRACK 3 — BASS (Foundation)
    [
        // INTRO
        65.41, 98.0, 130.81, 98.0,
        73.42, 110.0, 146.83, 110.0,

        // THEME A
        65.41, 98.0, 65.41, 98.0,
        55.0, 82.41, 55.0, 82.41,
        43.65, 65.41, 43.65, 65.41,
        49.0, 73.42, 49.0, 73.42,

        // THEME B
        65.41, 98.0, 130.81, 98.0,
        73.42, 110.0, 146.83, 110.0,
        82.41, 123.47, 164.81, 123.47,
        98.0, 146.83, 196.0, 146.83,

        // BRIDGE
        65.41, 73.42, 82.41, 87.31,
        98.0, 87.31, 82.41, 73.42,

        // FINAL CHORUS
        65.41, 98.0, 130.81, 146.83,
        164.81, 196.0, 164.81, 146.83,
        130.81, 98.0, 65.41, 65.41
    ]
];

let tracksDursMs: number[][] = [
    // TRACK 0 — TENOR
    [
        // INTRO
        500, 500, 500, 750,
        500, 500, 500, 750,

        // THEME A
        500, 250, 250, 500,
        750, 500, 500, 500,
        250, 250, 500, 750,
        500, 500, 500, 1000,

        // THEME B
        500, 500, 750, 500,
        500, 500, 500, 500,
        500, 500, 750, 500,
        500, 500, 500, 1000,

        // BRIDGE
        500, 250, 250, 500,
        500, 500, 500, 750,

        // FINAL CHORUS
        500, 500, 500, 500,
        750, 750, 500, 500,
        500, 500, 1000, 1000
    ],

    // TRACK 1 — WHISTLE
    [
        // INTRO
        500, 250, 250, 500,
        500, 250, 250, 500,

        // THEME A
        250, 250, 500, 250,
        250, 500, 250, 250,
        500, 500, 250, 250,
        500, 250, 250, 500,

        // THEME B
        250, 250, 500, 500,
        250, 250, 500, 250,
        250, 250, 500, 500,
        500, 250, 250, 500,

        // BRIDGE
        250, 250, 500, 250,
        250, 500, 250, 500,

        // FINAL CHORUS
        250, 250, 500, 500,
        500, 500, 250, 250,
        500, 500, 750, 750
    ],

    // TRACK 2 — BARITONE
    [
        // INTRO
        1000, 500, 500, 1000,
        750, 750, 500, 1000,

        // THEME A
        1000, 500, 500, 1000,
        750, 750, 500, 1000,
        1000, 500, 500, 1000,
        750, 750, 500, 1000,

        // THEME B
        1000, 500, 500, 1000,
        750, 750, 500, 1000,
        1000, 500, 500, 1000,
        750, 750, 500, 1000,

        // BRIDGE
        750, 500, 500, 750,
        1000, 750, 500, 750,

        // FINAL CHORUS
        1000, 500, 500, 750,
        750, 1000, 750, 750,
        1000, 750, 1000, 1000
    ],

    // TRACK 3 — BASS
    [
        // INTRO
        500, 500, 750, 250,
        500, 500, 750, 250,

        // THEME A
        500, 250, 250, 500,
        500, 250, 250, 500,
        500, 250, 250, 500,
        500, 250, 250, 500,

        // THEME B
        500, 500, 750, 250,
        500, 500, 750, 250,
        500, 500, 750, 250,
        500, 500, 750, 250,

        // BRIDGE
        500, 250, 250, 500,
        500, 250, 250, 500,

        // FINAL CHORUS
        500, 500, 750, 250,
        500, 500, 750, 250,
        500, 500, 1000, 1000
    ]
];

function playSelectedTrack(trackID:number) {
    const n = tracksFreqs.length
    if (n <= 0) return
    const idx = ((trackID % n) + n) % n
    started = 1
    playTrack(tracksFreqs[idx], tracksDursMs[idx])
    started = 0
}

radio.onReceivedString(function (receivedString) {
    if (receivedString == "#puChorus") {
        playSelectedTrack(track)
    }
    robotPu.runStringCommand(receivedString)
})

radio.onReceivedValue(function (name, value) {
    robotPu.runKeyValueCommand(name, value)
})

input.onButtonPressed(Button.A, function () {
    track += 1
    basic.showNumber(((track % tracksFreqs.length) + tracksFreqs.length) % tracksFreqs.length)
})

input.onButtonPressed(Button.B, function () {
    track -= 1
    basic.showNumber(((track % tracksFreqs.length) + tracksFreqs.length) % tracksFreqs.length)
})

input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    playSelectedTrack(track)
})
```
Another example:

```js
robotPu.setChannel(166)
// Set your tempo here. The MIDI-extraction script below uses this BPM to convert ticks -> milliseconds.
music.setTempo(120)
music.setVolume(255)
let track = 0
let started = 0

function playTrack(freqs: number[], dursMs: number[]) {
    for (let i = 0; i < freqs.length; i++) {
        if (freqs[i] <= 0) music.rest(dursMs[i])
        else music.playTone(freqs[i], dursMs[i])
    }
}

let tracksFreqs: number[][] = [
    // TRACK 0 — TENOR (Main goofy melody)
    [
        // INTRO
        523.25, 587.33, 659.25, 698.46,
        659.25, 587.33, 523.25, 392.00,

        // THEME A
        523.25, 659.25, 783.99, 880.0,
        783.99, 659.25, 587.33, 523.25,
        659.25, 783.99, 880.0, 987.77,
        880.0, 783.99, 659.25, 523.25,

        // THEME B (more excited)
        659.25, 698.46, 783.99, 880.0,
        987.77, 880.0, 783.99, 698.46,
        783.99, 880.0, 987.77, 1046.5,
        987.77, 880.0, 783.99, 659.25,

        // BRIDGE (curious)
        523.25, 587.33, 659.25, 698.46,
        739.99, 698.46, 659.25, 587.33,

        // FINAL CHORUS
        523.25, 659.25, 783.99, 880.0,
        987.77, 1046.5, 987.77, 880.0,
        783.99, 659.25, 523.25, 523.25
    ],

    // TRACK 1 — WHISTLE (Minion‑style silliness)
    [
        // INTRO
        0, 880.0, 987.77, 1174.66,
        1046.5, 987.77, 880.0, 0,

        // THEME A
        880.0, 987.77, 1046.5, 987.77,
        880.0, 783.99, 880.0, 987.77,
        1046.5, 1174.66, 1046.5, 987.77,
        880.0, 783.99, 880.0, 987.77,

        // THEME B
        1174.66, 1318.51, 1174.66, 1046.5,
        987.77, 880.0, 987.77, 1046.5,
        1174.66, 1318.51, 1396.91, 1318.51,
        1174.66, 1046.5, 987.77, 880.0,

        // BRIDGE
        880.0, 987.77, 1046.5, 987.77,
        880.0, 783.99, 698.46, 659.25,

        // FINAL CHORUS
        880.0, 987.77, 1046.5, 1174.66,
        1318.51, 1396.91, 1318.51, 1174.66,
        1046.5, 987.77, 880.0, 880.0
    ],

    // TRACK 2 — BARITONE (Harmony support)
    [
        // INTRO
        261.63, 329.63, 392.00, 329.63,
        293.66, 349.23, 392.00, 349.23,

        // THEME A
        261.63, 293.66, 329.63, 293.66,
        261.63, 293.66, 329.63, 293.66,
        261.63, 329.63, 392.00, 329.63,
        293.66, 349.23, 392.00, 349.23,

        // THEME B
        329.63, 392.00, 440.00, 392.00,
        349.23, 392.00, 440.00, 392.00,
        329.63, 392.00, 440.00, 392.00,
        349.23, 392.00, 440.00, 392.00,

        // BRIDGE
        261.63, 293.66, 329.63, 349.23,
        392.00, 349.23, 329.63, 293.66,

        // FINAL CHORUS
        261.63, 329.63, 392.00, 440.00,
        493.88, 523.25, 493.88, 440.00,
        392.00, 329.63, 261.63, 261.63
    ],

    // TRACK 3 — BASS (Bouncy Minion stomp)
    [
        // INTRO
        130.81, 196.0, 130.81, 196.0,
        146.83, 220.0, 146.83, 220.0,

        // THEME A
        130.81, 196.0, 130.81, 196.0,
        110.0, 164.81, 110.0, 164.81,
        98.0, 146.83, 98.0, 146.83,
        110.0, 164.81, 110.0, 164.81,

        // THEME B
        130.81, 196.0, 261.63, 196.0,
        146.83, 220.0, 293.66, 220.0,
        164.81, 246.94, 329.63, 246.94,
        196.0, 293.66, 392.00, 293.66,

        // BRIDGE
        130.81, 146.83, 164.81, 174.61,
        196.0, 174.61, 164.81, 146.83,

        // FINAL CHORUS
        130.81, 196.0, 261.63, 293.66,
        329.63, 392.00, 329.63, 293.66,
        261.63, 196.0, 130.81, 130.81
    ]
];

let tracksDursMs: number[][] = [
    // TRACK 0 — TENOR
    [
        // INTRO
        300, 300, 300, 500,
        300, 300, 300, 500,

        // THEME A
        400, 200, 200, 400,
        600, 400, 300, 300,
        200, 200, 400, 600,
        400, 300, 300, 800,

        // THEME B
        400, 300, 500, 400,
        300, 300, 300, 300,
        400, 400, 600, 400,
        300, 300, 300, 800,

        // BRIDGE
        400, 200, 200, 400,
        400, 400, 300, 500,

        // FINAL CHORUS
        400, 400, 400, 400,
        600, 600, 400, 400,
        400, 400, 800, 800
    ],

    // TRACK 1 — WHISTLE
    [
        // INTRO
        400, 200, 200, 400,
        400, 200, 200, 400,

        // THEME A
        200, 200, 400, 200,
        200, 400, 200, 200,
        400, 400, 200, 200,
        400, 200, 200, 400,

        // THEME B
        200, 200, 400, 400,
        200, 200, 400, 200,
        200, 200, 400, 400,
        400, 200, 200, 400,

        // BRIDGE
        200, 200, 400, 200,
        200, 400, 200, 400,

        // FINAL CHORUS
        200, 200, 400, 400,
        400, 400, 200, 200,
        400, 400, 600, 600
    ],

    // TRACK 2 — BARITONE
    [
        // INTRO
        800, 400, 400, 800,
        600, 600, 400, 800,

        // THEME A
        800, 400, 400, 800,
        600, 600, 400, 800,
        800, 400, 400, 800,
        600, 600, 400, 800,

        // THEME B
        800, 400, 400, 800,
        600, 600, 400, 800,
        800, 400, 400, 800,
        600, 600, 400, 800,

        // BRIDGE
        600, 400, 400, 600,
        800, 600, 400, 600,

        // FINAL CHORUS
        800, 400, 400, 600,
        600, 800, 600, 600,
        800, 600, 800, 800
    ],

    // TRACK 3 — BASS
    [
        // INTRO
        400, 400, 600, 200,
        400, 400, 600, 200,

        // THEME A
        400, 200, 200, 400,
        400, 200, 200, 400,
        400, 200, 200, 400,
        400, 200, 200, 400,

        // THEME B
        400, 400, 600, 200,
        400, 400, 600, 200,
        400, 400, 600, 200,
        400, 400, 600, 200,

        // BRIDGE
        400, 200, 200, 400,
        400, 200, 200, 400,

        // FINAL CHORUS
        400, 400, 600, 200,
        400, 400, 600, 200,
        400, 400, 800, 800
    ]
];

function playSelectedTrack(trackID:number) {
    const n = tracksFreqs.length
    if (n <= 0) return
    const idx = ((trackID % n) + n) % n
    started = 1
    playTrack(tracksFreqs[idx], tracksDursMs[idx])
    started = 0
}

radio.onReceivedString(function (receivedString) {
    if (receivedString == "#puChorus") {
        playSelectedTrack(track)
    }
    robotPu.runStringCommand(receivedString)
})

radio.onReceivedValue(function (name, value) {
    robotPu.runKeyValueCommand(name, value)
})

input.onButtonPressed(Button.A, function () {
    track += 1
    basic.showNumber(((track % tracksFreqs.length) + tracksFreqs.length) % tracksFreqs.length)
})

input.onButtonPressed(Button.B, function () {
    track -= 1
    basic.showNumber(((track % tracksFreqs.length) + tracksFreqs.length) % tracksFreqs.length)
})

input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    playSelectedTrack(track)
})

```
### Generate `freqs[]` + `durs[]` from the MIDI file (recommended)
If you have `Minions Banana Song.mid` in the project root, you can generate paste-ready arrays directly from MIDI.

The MIDI in this repo has 4 tracks (one channel each):

Track 0: Elec. Piano (Classic)
Track 1: Grand Piano
Track 2: Music Box
Track 3: Acoustic Gtr (Classic)
Suggested mapping to the quartet parts:

Tenor Solo = Track 3 (Acoustic Gtr)
Whistle = Track 2 (Music Box)
Baritone = Track 0 (Elec. Piano)
Bass = Track 1 (Grand Piano)
Run this command locally to print arrays you can paste into `tracksFreqs[]` / `tracksDursMs[]`:
```js
.venv/bin/python - <<'PY'
import mido

mid = mido.MidiFile('Minions Banana Song.mid')
TPB = mid.ticks_per_beat

# BPM used to convert ticks -> milliseconds.
# Keep this in sync with the MakeCode program's music.setTempo(...)
BPM = 120

def midi_note_to_freq(n: int) -> int:
    return int(round(440.0 * (2.0 ** ((n - 69) / 12.0))))

def ticks_to_ms(dt: int) -> int:
    return int(round((dt / TPB) * (60000.0 / BPM)))

def extract_monophonic(track: mido.MidiTrack):
    t=0
    active=set()
    segments=[]
    last_t=0
    def current_pitch():
        return max(active) if active else None

    for msg in track:
        t += msg.time
        if msg.type not in ('note_on','note_off'):
            continue
        if msg.type=='note_on' and msg.velocity>0:
            if t>last_t:
                p=current_pitch()
                segments.append((p, t-last_t))
                last_t=t
            active.add(msg.note)
        else:
            if t>last_t:
                p=current_pitch()
                segments.append((p, t-last_t))
                last_t=t
            active.discard(msg.note)

    freqs=[]
    durs_ms=[]
    for pitch, dt in segments:
        if dt<=0:
            continue
        f = 0 if pitch is None else midi_note_to_freq(pitch)
        freqs.append(f)
        durs_ms.append(ticks_to_ms(dt))
    return freqs, durs_ms

def js_array_int(arr):
    return '[' + ','.join(str(x) for x in arr) + ']'

mapping = {
    'TENOR': 3,
    'WHISTLE': 2,
    'BARITONE': 0,
    'BASS': 1,
}

for role, ti in mapping.items():
    freqs, durs_ms = extract_monophonic(mid.tracks[ti])
    print('\nROLE', role, 'TRACK', ti)
    print('FREQS', js_array_int(freqs))
    print('DURS_MS', js_array_int(durs_ms))
PY
```
**Notes:**

- This extraction is monophonic (one note at a time). If a MIDI track contains chords, it will keep the highest note.
- If you want a different mapping, swap the track numbers in `mapping`.

### Technical explaination

**A. Why “channel % 4” works**

`robotPu.channel()` returns the current radio group ID.

Using modulo:

- keeps the mapping stable
- allows you to use any channel number (0–255)
- guarantees you always land in one of 4 tracks

This is a common technique for distributing roles among identical devices.

**B. How the tracks are triggered**

The code triggers tracks only when you press the **logo button**:

- read `robotPu.channel()`
- compute `track = channel % 4`
- call `track1..track4()` based on the value

Buttons A/B only change the channel; they do not start singing.

**C. Radio listeners**

This program also registers:

- `radio.onReceivedString(...)` → `robotPu.runStringCommand(...)`
- `radio.onReceivedValue(...)` → `robotPu.runKeyValueCommand(name, value)`

So you can control Robot PU over radio while preparing the quartet.

### Testing

**A. Single-robot test**

Flash the program to one Robot PU.

Press **A** a few times to change channel.

Press the **logo** to start singing.

Verify you get different tracks when `channel % 4` changes.

**B. Quartet test (4 robots)**

- Flash the same program to **4 Robot PUs**.

- Set each robot to a different channel group such that `channel % 4` differs:

    - Robot 1: channel 0 (track1)
    - Robot 2: channel 1 (track2)
    - Robot 3: channel 2 (track3)
    - Robot 4: channel 3 (track4)

- Press the **logo** on each robot to start its part.

Tip:

- If the track start timing matters, try counting down and pressing the logo buttons together.
### Next steps
- **Synchronize start time by radio**
    - broadcast a single “START” message from a controller micro:bit
    - have all robots start their track when they receive it
- **Add choreography**
    - on beat boundaries, call robotPu.dance() / robotPu.walk(...) to make the chorus look alive
- **Add a conductor UI**
    - a separate micro:bit to assign channels and broadcast start/stop commands

### Synchronization methods (practical options)
When multiple robots must start a song together, there are a few common synchronization strategies. Each has tradeoffs in complexity vs accuracy.

**A. Manual count-in (simplest)**

- Someone counts “3, 2, 1, go” and everyone presses the logo.

- Works for demos, but humans introduce large timing error.

**B. Radio START trigger (good)**

- A conductor micro:bit sends a single radio message like `START`.

- Each robot starts when the message is received.

- Better than humans, but there can still be small arrival-time differences between robots.

**Conductor code (send START)**
```js
radio.setGroup(166)

input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendString("START")
})
```
**Robot code (start on receive)**

Paste this near the bottom of the quartet program (where radio handlers are registered).

```js
radio.setGroup(166)

radio.onReceivedString(function (msg: string) {
    if (msg == "START") {
        // pick role and start immediately
        track = robotPu.channel() % 4
        if (track == 0) track1()
        else if (track == 1) track2()
        else if (track == 2) track3()
        else track4()
    }
})
```
### C. Start-at-timestamp (best on micro:bit)

- Conductor sends a **future start time** such as startAt = control.millis() + 800.
- Each robot waits until its own control.millis() reaches startAt before starting.
- Even if radio packets arrive at slightly different times, robots still start together.

Why it’s better than `START`:

- Radio packet delivery time varies. A shared future timestamp makes the start time deterministic.
- You can also send tempo and other “settings” before the start.

Minimal conductor example:

```js
radio.setGroup(166)

input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    const startAt = control.millis() + 800
    radio.sendValue("startAt", startAt)
})
```
Minimal robot example:
```js
radio.setGroup(166)
let startAt = -1

radio.onReceivedValue(function (name: string, value: number) {
    if (name == "startAt") {
        startAt = value
        control.inBackground(function () {
            while (control.millis() < startAt) {
                basic.pause(5)
            }
            track = robotPu.channel() % 4
            if (track == 0) track1()
            else if (track == 1) track2()
            else if (track == 2) track3()
            else track4()
        })
    }
})
```
### D. Tempo/beat agreement (important)
Even with a synchronized start, the robots can drift if they don’t share the same tempo.

- Conductor broadcasts a tempo like `bpm=120`.
- Robots call `music.setTempo(bpm)` before starting.

**Conductor code (broadcast BPM)**
```js
radio.setGroup(166)
let bpm = 120

input.onButtonPressed(Button.A, function () {
    bpm += 5
})

input.onButtonPressed(Button.B, function () {
    bpm -= 5
})

input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    bpm = Math.max(60, Math.min(200, bpm))
    radio.sendValue("bpm", bpm)
```
**Robot code (apply BPM)**
```js
let bpm = 120

radio.onReceivedValue(function (name: string, value: number) {
    if (name == "bpm") {
        bpm = value
        music.setTempo(bpm)
    }
})
```
Tip:

- If you use **start-at-timestamp**, send `bpm` first, then send `startAt`.

### E. Resync / “bar beacons” (optional)
For long songs, you can periodically broadcast a “bar number” or “beat number” so everyone can correct drift.

Simple pattern:

- Conductor sends a `barStartAt` timestamp every bar.
- Robots re-align to the newest `barStartAt` (small corrections) and continue.

**Conductor code (bar beacon loop)**
```js
radio.setGroup(166)

let bpm = 120
let running = false

function barMs(): number {
    return Math.idiv(60000, bpm) * 4
}

input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    running = !running
})

basic.forever(function () {
    if (!running) {
        basic.pause(50)
        return
    }

    const now = control.millis()
    const barStartAt = now + 200
    radio.sendValue("barStartAt", barStartAt)
    basic.pause(barMs())
})
```
**Robot code (use bar beacons)**
```js
let barStartAt = -1

radio.onReceivedValue(function (name: string, value: number) {
    if (name == "barStartAt") {
        barStartAt = value
    }
})

// In your track code, check barStartAt occasionally and correct timing.
// A simple approach is to wait for barStartAt before starting the *next* phrase/bar.
```
**Notes:**

Resync is most useful if you also make your track code “bar aware” (split into phrases).
For this quartet example (pre-written `music.playTone(...)` sequences), resync is harder unless you refactor tracks into bar-sized chunks.

### F. Leader/follower (conductor) pattern
If you want one robot to act as a “leader” instead of a separate conductor micro:bit:

- Pick one Robot PU as **leader**.
- Leader broadcasts `bpm` and `startAt`.
- Followers listen and start.

Leader can be chosen by channel, for example:

- if `robotPu.channel() % 4` == 0 then leader

**Leader snippet (broadcast)**

```js
radio.setGroup(166)
let bpm = 120

function amLeader(): boolean {
    return (robotPu.channel() % 4) == 0
}

input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (!amLeader()) return
    radio.sendValue("bpm", bpm)
    radio.sendValue("startAt", control.millis() + 800)
})
```
Followers use the same receiver logic shown above in method C/D.
### Synchronized Minion chorus: one conductor + many Robot PUs
In this pattern:

- All Robot PUs run the same quartet code.
- Each robot selects its part using `track = robotPu.channel() % 4`.
- A conductor micro:bit starts all robots together.

### A. Conductor micro:bit code (broadcast tempo + startAt)

Flash this to your conductor (a gamepad micro:bit or any micro:bit).

```js
radio.setGroup(166)

let bpm = 120

input.onButtonPressed(Button.A, function () {
    bpm += 5
})

input.onButtonPressed(Button.B, function () {
    bpm -= 5
})

// Press logo to start everyone together
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    bpm = Math.max(60, Math.min(200, bpm))
    radio.sendValue("bpm", bpm)

    // Start a bit in the future so all robots can receive the packet
    const startAt = control.millis() + 800
    radio.sendValue("startAt", startAt)
})
```
### B. Robot PU code change (listen for startAt)
Add this receiver logic to the quartet program (near the bottom where radio handlers are registered). It will start the correct track `in sync`.

```js
let startAt = -1
let bpm = 120

radio.onReceivedValue(function (name: string, value: number) {
    // keep existing:
    // robotPu.runKeyValueCommand(name, value)

    if (name == "bpm") {
        bpm = value
    } else if (name == "startAt") {
        startAt = value
        control.inBackground(function () {
            // apply shared tempo before starting
            music.setTempo(bpm)

            // wait until the agreed start time
            while (control.millis() < startAt) {
                basic.pause(5)
            }

            // select the role and start that part
            track = robotPu.channel() % 4
            if (track == 0) track1()
            else if (track == 1) track2()
            else if (track == 2) track3()
            else track4()
        })
    }
})
```
**Notes:**

- `control.inBackground(...)` prevents the radio callback from blocking.
- Using `startAt` is more reliable than “start immediately on receive”.
- If you already use `radio.onReceivedValue` for `robotPu.runKeyValueCommand(...)`, merge the logic into one handler.

### Testing checklist
- Flash the quartet code to all Robot PUs.
- Set each robot’s channel so `channel % 4` covers 0,1,2,3.
- Flash the conductor code to a controller micro:bit.
- Press logo on the conductor and confirm all robots begin together.
