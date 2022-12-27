---
sidebar_position: 1
sidebar_label: Pico:ed common library
---

# Pico:ed library documentation
## Buttons

Pico:ed contains two keys: A and B.
### Attributes
#### `button_a`
An instance of a class [Button](#w8UmM) representing the button on the left.
#### `button_b`
An instance of a class [Button](#w8UmM) representing the button on the right.
### Classes
#### `class Button(pin)`
It is for representing a button.

- **unit -** Button pins

> `**is_pressed()**`

Returns "True" if the button is pressed, otherwise it returns "False".

> `**was_pressed()**`

Returns "True" if the button is pressed and only once before the next press.
### Example
1.Controls the LED

```python
# Import the modules that we need for the program
from picoed import *

#  While true, detect if buton A is pressed and also the status of the LED
while True:
    if button_a.is_pressed():
        led.on()
    else:
        led.off()

```

2. Count the times of pressing the buttons

```python
from picoed import *

times = 0
display.show(times)

while True:
    # Press button A once, count minus 1
    if button_a.was_pressed():
        times -= 1
        display.show(times)
    # Press button_B once, add 1 to the count
    if button_b.was_pressed():
        times += 1
        display.show(times)

```


## LED dot-matrix screen

Picoe:ed contains a 17x7 LED dot matrix screen.

### Attributes

#### `display`
The instance of class [Display](#okDdW) represents the LED dot screen on board Pico:ed.
### Classes
#### `class Display`
It is to represent a dot matrix screen driven by IS31FL3731 which is used internally in Pico:ed to generate display instances.
> `**clear()**`

Clear the screen

> `**pixel(self, x, y, color=None, blink=None, frame=None)**`

Set x, y pixel blink or brightness

- **x - **horizontal pixel position
- **y - **vertical pixel position
- **color - **pixel brightness (0~255)
- **blink - **Set to "True", then blink the pixel
- **frame - **sets the number of frames of the pixel

> `**scroll(value, brightness=30)**`

Scroll to show strings or numbers

- **value - **the string or number to display
- **brghtness - ** brightness of the display (0~255), default value 30
#### `class Image`
It is to describe a frame of dot matrix images, and contains a series of built-in images.
> - **value - **Image text description, it uses 0 to 9 to specify the brightness of the LED at the corresponding position. The format is as follows:
> 
'12345678908765432:'
>         '12345678908765432:'
>         '12345678908765432:'
>         '12345678908765432:'
>         '12345678908765432:'
>         '12345678908765432:'
>         '12345678908765432:'


The list of built-in images is as follows:

- NO
- SQUARE
- RECTANGLE
- RHOMBUS
- TARGET
- CHESSBOARD
- HAPPY
- SAD
- YES
- HEART
- TRIANGLE
- CHAGRIN
- SMILING_FACE
- CRY
- DOWNCAST
- LOOK_RIGHT
- LOOK_LEFT
- TONGUE
- PEEK_RIGHT
- PEEK_LEFT
- TEAR_EYES
- PROUD
- SNEER_LEFT
- SNEER_RIGHT
- SUPERCILIOUS_LOOK
- EXCITED
### Example
1. Display strings and numbers

```python
import time
from picoed import display

# Display statically of 3 letters
display.scroll("ABC")
time.sleep(1)

# Scroll to display the numbers
display.scroll(1234567890)

# Scroll to display the strings
display.scroll("Hello, world!")

```

2. Display boxes

```python
from picoed import display

# Draw a box on the screen
# Firstly, draw the top and bottom edges
for x in range(display.width):
    display.pixel(x, 0, 50)
    display.pixel(x, display.height - 1, 50)
# Now draw the left and right edges
for y in range(display.height):
    display.pixel(0, y, 50)
    display.pixel(display.width - 1, y, 50)

```

3. Display the built-in image

```python
from picoed import display, Image

display.show(Image.HAPPY)

```

4. Display self-defined images

```python
from picoed import display, Image

while True:
    display.show(Image(
        '12345678987654321:'
        '12345678987654321:'
        '12345678987654321:'
        '12345678987654321:'
        '12345678987654321:'
        '12345678987654321:'
        '12345678987654321:'
    ))
    display.show(Image(
        '87654321112345678:'
        '87654321112345678:'
        '87654321112345678:'
        '87654321112345678:'
        '87654321112345678:'
        '87654321112345678:'
        '87654321112345678:'
    ))

```

## Onboard LED
Pico:ed includes an onboard LED. This LED is a firmware status indicator that flashes rapidly several times when reset and every 5 seconds when the program is idle, and this LED is programmable.
### Attributes
#### `led`
The instance of class [Led](#d1QQW)  represents the onboard LEDs.
### Classes
#### `class Led(pin)`
It is to represent an LED.

- **pin -**  Led pins

> `**on**`

Turns on the LED.

> `**off()**`

Turn off the LED.

> `**toggle()**`

Toggle the LED state.

> `**deinit()**`

Deinit the LED and release the pin.
### Example
1. Blink1

```python
import time
from picoed import *

while True:
    led.on()
    time.sleep(0.5)
    led.off()
    time.sleep(0.5)
```

2. Blink2

```python
import time
from picoed import *

while True:
    led.toggle()
    time.sleep(0.5)
```

## Music

### Attributes
#### `music`
The instance of class [Music](#NNZvx) is used to control the on-board buzzer to play melodies.
### Classes
#### `class Music(pin, ticks=4, bpm=120)`
The Music class can be used to play melodies through the Pico:ed on-board buzzer.

- **pin -** buzzer pin
- **ticks -** Many ticks to form a beat. The default value is 4.
- **bpm -** The number of beats per minute. The default value is 120.

> `**set_tempo(ticks=4, bpm=120)**`

Sets the approximate speed of play.

- **ticks -** Many ticks form a beat. The default value is 4.
- **bpm -**The number of beats per minute. The default value is 120.

> `**get_tempo()**`

Get the current tempo as an integer tuple:（ticks，bpm）。

> `**play(music)**`

Play the melody.

- **music -** Music DSL.

> `**play_async(music)**`

Play melody asynchronously.

- **music -** Sheet music DSL.

> `**pitch(frequency, duration=-1)**`

Play the pitch for the given number of milliseconds at the given integer frequency.

- **frequency -** The specified frequency.
- **duration -** The number of delay milliseconds.

> `**pitch_async(frequency, duration=-1)**`

Play the specified number of milliseconds of pitch asynchronously at the given integer frequency.

- **frequency -** The specified frequency.
- **duration -** The number of milliseconds of delay.

> `**stop()**`

Stop playing the music. In fact, it only works for`**play_async(music)**`**。**

> `**reset()**`

Resets to default status.
### Sheet Music DSL
The individual notes are as follows :
```python
NOTE[octave][:duration]
```
For example, `A1:4` refers to the note “A” in octave 1 that lasts for four ticks (a tick is an arbitrary length of time defined by a tempo setting function - see below). If the note name `R` is used then it is treated as a rest (silence).
Accidentals (flats and sharps) are denoted by the `b` (flat - a lower case b) and `#` (sharp - a hash symbol). For example, `Ab` is A-flat and `C#` is C-sharp.
**Note that names are not case-sensitive.**
The `octave` and `duration` parameters are states that carry over to subsequent notes until re-specified. The default states are `octave = 4` (containing middle C) and `duration = 4` (a crotchet, given the default tempo settings - see below).
For example, if 4 ticks is a crotchet, the following list is crotchet, quaver, quaver, crotchet based arpeggio:

```python
['c1:4', 'e:2', 'g', 'c2:4']
```
The opening of Beethoven’s 5th Symphony would be encoded thus:
```python
['r4:2', 'g', 'g', 'g', 'eb:8', 'r:2', 'f', 'f', 'f', 'd:8']
```
The definition and scope of an octave conforms to the table listed [on this page about scientific pitch notation](https://en.wikipedia.org/wiki/Scientific_pitch_notation#Table_of_note_frequencies). For example, middle “C” is `'c4'` and concert “A” (440) is `'a4'`. Octaves start on the note “C”.
The library has quite a lot of built-in melodies. Here’s a complete list:

- DADADADUM
- ENTERTAINER
- PRELUDE
- ODE
- NYAN
- RINGTONE
- FUNK
- BLUES
- BIRTHDAY
- WEDDING
- FUNERAL
- PUNCHLINE
- PYTHON
- BADDY
- CHASE
- BA_DING
- WAWAWAWAA
- JUMP_UP
- JUMP_DOWN
- POWER_UP
- POWER_DOWN
### Example
1. Play built-in music

```python
from picoed import music

music.play(music.DADADADUM)
```

2. Simultaneous play

```python
from picoed import music

# play Prelude in C.
notes = [
    'c4:1', 'e', 'g', 'c5', 'e5', 'g4', 'c5', 'e5', 'c4', 'e', 'g', 'c5', 'e5', 'g4', 'c5', 'e5',
    'c4', 'd', 'a', 'd5', 'f5', 'a4', 'd5', 'f5', 'c4', 'd', 'a', 'd5', 'f5', 'a4', 'd5', 'f5',
    'b3', 'd4', 'g', 'd5', 'f5', 'g4', 'd5', 'f5', 'b3', 'd4', 'g', 'd5', 'f5', 'g4', 'd5', 'f5',
    'c4', 'e', 'g', 'c5', 'e5', 'g4', 'c5', 'e5', 'c4', 'e', 'g', 'c5', 'e5', 'g4', 'c5', 'e5',
    'c4', 'e', 'a', 'e5', 'a5', 'a4', 'e5', 'a5', 'c4', 'e', 'a', 'e5', 'a5', 'a4', 'e5', 'a5',
    'c4', 'd', 'f#', 'a', 'd5', 'f#4', 'a', 'd5', 'c4', 'd', 'f#', 'a', 'd5', 'f#4', 'a', 'd5',
    'b3', 'd4', 'g', 'd5', 'g5', 'g4', 'd5', 'g5', 'b3', 'd4', 'g', 'd5', 'g5', 'g4', 'd5', 'g5',
    'b3', 'c4', 'e', 'g', 'c5', 'e4', 'g', 'c5', 'b3', 'c4', 'e', 'g', 'c5', 'e4', 'g', 'c5',
    'a3', 'c4', 'e', 'g', 'c5', 'e4', 'g', 'c5', 'a3', 'c4', 'e', 'g', 'c5', 'e4', 'g', 'c5',
    'd3', 'a', 'd4', 'f#', 'c5', 'd4', 'f#', 'c5', 'd3', 'a', 'd4', 'f#', 'c5', 'd4', 'f#', 'c5',
    'g3', 'b', 'd4', 'g', 'b', 'd', 'g', 'b', 'g3', 'b3', 'd4', 'g', 'b', 'd', 'g', 'b'
]

music.play(notes)
```

3. Asynchronous play

```python
import asyncio
from picoed import music, led

# play Prelude in C.
notes = [
    'c4:1', 'e', 'g', 'c5', 'e5', 'g4', 'c5', 'e5', 'c4', 'e', 'g', 'c5', 'e5', 'g4', 'c5', 'e5',
    'c4', 'd', 'a', 'd5', 'f5', 'a4', 'd5', 'f5', 'c4', 'd', 'a', 'd5', 'f5', 'a4', 'd5', 'f5',
    'b3', 'd4', 'g', 'd5', 'f5', 'g4', 'd5', 'f5', 'b3', 'd4', 'g', 'd5', 'f5', 'g4', 'd5', 'f5',
    'c4', 'e', 'g', 'c5', 'e5', 'g4', 'c5', 'e5', 'c4', 'e', 'g', 'c5', 'e5', 'g4', 'c5', 'e5',
    'c4', 'e', 'a', 'e5', 'a5', 'a4', 'e5', 'a5', 'c4', 'e', 'a', 'e5', 'a5', 'a4', 'e5', 'a5',
    'c4', 'd', 'f#', 'a', 'd5', 'f#4', 'a', 'd5', 'c4', 'd', 'f#', 'a', 'd5', 'f#4', 'a', 'd5',
    'b3', 'd4', 'g', 'd5', 'g5', 'g4', 'd5', 'g5', 'b3', 'd4', 'g', 'd5', 'g5', 'g4', 'd5', 'g5',
    'b3', 'c4', 'e', 'g', 'c5', 'e4', 'g', 'c5', 'b3', 'c4', 'e', 'g', 'c5', 'e4', 'g', 'c5',
    'a3', 'c4', 'e', 'g', 'c5', 'e4', 'g', 'c5', 'a3', 'c4', 'e', 'g', 'c5', 'e4', 'g', 'c5',
    'd3', 'a', 'd4', 'f#', 'c5', 'd4', 'f#', 'c5', 'd3', 'a', 'd4', 'f#', 'c5', 'd4', 'f#', 'c5',
    'g3', 'b', 'd4', 'g', 'b', 'd', 'g', 'b', 'g3', 'b3', 'd4', 'g', 'b', 'd', 'g', 'b'
]

async def blink(interval):
    while True:
        led.on()
        await asyncio.sleep(interval)
        led.off()
        await asyncio.sleep(interval)

async def main():
    player = asyncio.create_task(music.play_async(notes))
    light = asyncio.create_task(blink(0.1))
    await asyncio.gather(player)
    await asyncio.gather(light)

asyncio.run(main())

```
