# Case 07: Fall-arrest Cutebot
## Purpose
---
- The  [Cutebot](https://shop.elecfreaks.com/products/elecfreaks-micro-bit-smart-cutebot-kit-without-micro-bit-board?_pos=1&_sid=4c6909119&_ss=r) reverses quickly when detecting the edge of a table and goes forward after making a turn.

## Materials
---
- 1 x [Cutebot Kit](https://shop.elecfreaks.com/products/elecfreaks-micro-bit-smart-cutebot-kit-without-micro-bit-board?_pos=1&_sid=4c6909119&_ss=r)

## Software Platform
---
[MicroSoft makecode](https://makecode.microbit.org/#)

## Programming
---
### Step 1
- Click the "Advanced" to see more choices in the MakeCode drawer.

![](./images/cutebot-pk-1.png)

- A codebase is required for  [Cutebot](https://shop.elecfreaks.com/products/elecfreaks-micro-bit-smart-cutebot-kit-without-micro-bit-board?_pos=1&_sid=4c6909119&_ss=r) programming, click “Add Package” at the bottom of the drawer, search  [Cutebot](https://shop.elecfreaks.com/products/elecfreaks-micro-bit-smart-cutebot-kit-without-micro-bit-board?_pos=1&_sid=4c6909119&_ss=r)` in the dialogue box and download it.

![](./images/cutebot-pk-11.png)

***Note:*** If you met a tip indicating incompatibility of the codebase, you can continue with the tips or build a new project there.

### Step 2

- Choose "show icon" in the `On start` brick.

![](./images/case_07_01.png)

### Step 3

- Drag `if` brick into `forever` brick and judge if both of the line-tracking sensors are detecting the edges of the black line, then set the right wheel speed to `20`.
- If not, set the speed of both wheels as `-50` to reverse, pause `300ms` and keep the left wheel still but the right wheel moves at a random speed from 50~100 and lasts 100ms.
- Set the speed of both wheels to 0 and pause 1s to move forward again.

![](./images/case_07_02.png)

### Programming

Links: [https://makecode.microbit.org/_2z1hh4iEUgTY](https://makecode.microbit.org/_2z1hh4iEUgTY)

You can also download it directly below:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_2z1hh4iEUgTY"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>


## Result
---
- The  [Cutebot](https://shop.elecfreaks.com/products/elecfreaks-micro-bit-smart-cutebot-kit-without-micro-bit-board?_pos=1&_sid=4c6909119&_ss=r) reverses quickly when detecting the edge of a table and goes forward after making a turn.

## Exploration
---

## FAQ
---

## Relevant Files
---
