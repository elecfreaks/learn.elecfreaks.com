---
sidebar_position: 4
sidebar_label: Case 01:Move Forward or Reverse
---


# Case 01: Move Forward or Reverse
## Introduction
Use the A and B buttons on the Pico:ed to control the [Cutebot](https://shop.elecfreaks.com/products/elecfreaks-pico-ed-smart-cutebot-kit-with-pico-ed-board?_pos=2&_sid=40bbc85e4&_ss=r) to complete the basic forward and backward actions.
## Programming Preparation
Please refer to: [Preparing the Programming Environment](http://www.elecfreaks.com/learn-en/pico-ed-kit/pico-ed-cutebot-kit/preparation-for-the-programming.html)
###  Sample code :

```python
from picoed import *
from cutebot import *

# Create a sample for Cutebot category
cutebot = Cutebot()

# While true, detect whether the A/B button is pressed, control the cutebot to move forward or backward
while True:
    if button_a.is_pressed():
        cutebot.set_speed(50,50)
    if button_b.is_pressed():
        cutebot.set_speed(-50,-50)
```
### Code details

1.  Import the modules that we need: `cutebot` module contains classes and functions that operate on the Cutebot smart car, and `picoed` module contains functions that operate on keys A\B.
```python
from picoed import *
from cutebot import *
```

2.  Create a sample for Cutebot category
```python
cutebot = Cutebot()
```

3. While true, detect whether the A/B button is pressed, control the cutebot to move forward or backward.
```python
while True:
    if button_a.is_pressed():
        cutebot.set_speed(50,50)
    if button_b.is_pressed():
        cutebot.set_speed(-50,-50)
```
## Results

After button A is pressed, the car moves forward at its full speed.

After button B is pressed, the car reverses at its full speed.

## Exploration

How to program the car to stop moving after pressing the A and B buttons at the same time?
