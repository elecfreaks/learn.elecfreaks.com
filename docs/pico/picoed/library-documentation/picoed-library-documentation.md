
# Pico:ed 库文档

## 按钮

Pico:ed包含A、B两个按键。

### 属性

#### `button_a`

类[Button](#w8UmM)的实例，代表左侧的按键。

#### `button_b`
类[Button](#w8UmM)的实例，代表右侧的按键。

### 类

#### `class Button(pin)`

用来表示一个按键。

- **pin -  **按键引脚

> `**is_pressed()**`

如果按钮被按住，则返回 True，否则返回 False。

> `**was_pressed()**`

如果按钮被按下，且在下一次按下之前只返回一次 True。

### 示例
1.按键状态改变LED状态

```python
# 导入程序所需要的模块
from picoed import *

# 循环检测是否按下A键以及对LED的状态改变
while True:
    if button_a.is_pressed():
        led.on()
    else:
        led.off()

```

2.按键次数计数
```python
from picoed import *

times = 0
display.show(times)

while True:
    # 按一次A键，计数减1
    if button_a.was_pressed():
        times -= 1
        display.show(times)
    # 按一次B键，计数加1
    if button_b.was_pressed():
        times += 1
        display.show(times)

```

## LED点阵屏
Picoe:ed包含一个17x7的LED点阵屏。

### 属性

#### `display`
类[Display](#okDdW)的实例，表示Pico:ed板载的LED点阵屏。

### 类

#### `class Display`
用来表示一个由IS31FL3731驱动的点阵屏，在Pico:ed内部使用，用来生成display实例。
> `**clear()**`

清除屏幕

> `**pixel(self, x, y, color=None, blink=None, frame=None)**`

设置x、y 像素闪烁或亮度

- **x - **水平像素位置
- **y - **垂直像素位置
- **color - **像素亮度(0~255)
- **blink - **设置为True，则闪烁该像素
- **frame - **设置像素的帧数

> `**scroll(value, brightness=30)**`

滚动显示字符串或数字

- **value - **要显示的字符串或数字
- **brghtness - **显示屏的亮度(0~255)，默认值30

#### `class Image`
用来描述一帧点阵图像，并包含一系列内置图像。
> - **value - **图像文本描述，用0～9指定对应位置LED的亮度。格式如下：
>
'12345678908765432:'
>         '12345678908765432:'
>         '12345678908765432:'
>         '12345678908765432:'
>         '12345678908765432:'
>         '12345678908765432:'
>         '12345678908765432:'


内置图像列表如下：

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

### 示例
1.显示字符串和数字
```python
import time
from picoed import display

# 静态显示3个字母
display.scroll("ABC")
time.sleep(1)

# 滚动显示数字
display.scroll(1234567890)

# 滚动显示字符串
display.scroll("Hello, world!")

```

2.显示方框
```python
from picoed import display

# 在屏幕上画一个方框
# 首先绘制顶部和底部边缘
for x in range(display.width):
    display.pixel(x, 0, 50)
    display.pixel(x, display.height - 1, 50)
# 现在绘制左右边缘
for y in range(display.height):
    display.pixel(0, y, 50)
    display.pixel(display.width - 1, y, 50)

```

3.显示内置图像
```python
from picoed import display, Image

display.show(Image.HAPPY)

```

4.显示自定义图像
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

## 板载LED灯
Pico:ed包含一颗板载LED灯。该LED灯是固件状态指示灯，当复位时会快速闪烁数次，当程序空闲时会每隔5秒亮一次，同时这颗LED灯可以编程控制。

### 属性

#### `led`
类[Led](#d1QQW)的实例，表示板载LED灯。

### 类

#### `class Led(pin)`
用来表示一颗LED灯。

- **pin -  **Led引脚

> `**`

打开LED。

> `**off()**`

关闭LED。

> `**toggle()**`

切换LED状态。

> `**deinit()**`

Deinit LED，释放引脚。

### 示例
1.blink1
```python
import time
from picoed import *

while True:
    led.on()
    time.sleep(0.5)
    led.off()
    time.sleep(0.5)
```

2.blink2
```python
import time
from picoed import *

while True:
    led.toggle()
    time.sleep(0.5)
```

## 音乐

### 属性

#### `music`
类[Music](#NNZvx)的实例，用来控制Pico:ed板载蜂鸣器播放旋律。

### 类

#### `class Music(pin, ticks=4, bpm=120)`
可以使用 Music 类通过Pico:ed板载的蜂鸣器播放旋律。

- **pin - **蜂鸣器引脚
- **ticks - **许多刻度构成一个节拍。默认值为 4。
- **bpm - **每分钟节拍次数。默认值为 120。

> `**set_tempo(ticks=4, bpm=120)**`

设置播放的近似速度。

- **ticks - **许多刻度构成一个节拍。默认值为 4。
- **bpm -** 每分钟节拍次数。默认值为 120。

> `**get_tempo()**`

获取当前速度作为整数元组：（ticks，bpm）。

> `**play(music)**`

播放旋律。

- **music -** 乐谱DSL。

> `**play_async(music)**`

异步播放旋律。

- **music -** 乐谱DSL。

> `**pitch(frequency, duration=-1)**`

以给定的整数频率播放指定毫秒数的音高。

- **frequency -** 指定的频率。
- **duration -** 延时毫秒数。

> `**pitch_async(frequency, duration=-1)**`

以给定的整数频率异步播放指定毫秒数的音高。

- **frequency -** 指定的频率。
- **duration -** 延时毫秒数。

> `**stop()**`

停止音乐播放。事实上，只适用于`**play_async(music)**`**。**

> `**reset()**`

重置为默认状态。

### 乐谱DSL
单个音符如下：
```python
NOTE[octave][:duration]
```
例如，`A1:4` refers to the note “A” in octave 1 that lasts for four ticks (a tick is an arbitrary length of time defined by a tempo setting function - see below). If the note name `R` is used then it is treated as a rest (silence).

Accidentals (flats and sharps) are denoted by the `b` (flat - a lower case b) and `#` (sharp - a hash symbol). For example, `Ab` is A-flat and `C#` is C-sharp.

**注意名称不区分大小写。**

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

### 示例
1.播放内置音乐
```python
from picoed import music

music.play(music.DADADADUM)
```

2.同步播放
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

3.异步播放
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
