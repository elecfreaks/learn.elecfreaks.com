﻿# case 03 Turn at an angle

## Our Goal

- To make the Ring:bit Car draw a circle in the clockwise direction.

## Requiered Materials

- 1 x [Ring:bit Car](https://shop.elecfreaks.com/products/elecfreaks-micro-bit-ring-bit-v2-car-kit-without-micro-bit-board?_pos=4&_sid=66ba68dec&_ss=r)

## Hardware Connect

- Connect the left wheel servo to P1 of the Ring:bit expansion board and the right wheel servo to P2.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-ringbit-car-v2/images/jBVHea8.png)

- Use a rubber band to fix a pencil on the base board of the Ring:bit car.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-ringbit-car-v2/images/EfYkq79.jpg)

## Software

[makecode](https://makecode.microbit.org/#)

## Coding

### Step 1
- Click on "Advanced" in the MakeCode Drawer to see more code sections.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-ringbit-car-v2/images/2qCyzQ7.png)

- Search for “ringbitcar” and click on the ring:bit car package to add it to your project. (As below picture)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-ringbit-car-v2/images/1Wq2Mov.jpg)

***Note：*** If you get a warning telling you some packages will be removed because of incompatibility issues, either follow the prompts or create a new project in the Project file menu.

### Step 2

- Snap the block `set left wheel at pin P1 right wheel at pin P2` into the on start block.
- The port number is based on the actual servo connection port.
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-ringbit-car-v2/images/igG5TVD.png)

### Step 3

- Snap the `set left wheel speed right wheel speed` block into the `on button A pressed` block.
- Set the left wheel's speed to 10 and the right to 50.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-ringbit-car-v2/images/Mnakk7a.png)


### Step 4

- Snap the `brake` block into the `on button B pressed` block.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-ringbit-car-v2/images/4UStidJ.png)


### Program

Program Link：[https://makecode.microbit.org/_YejCA2AJDDVV](https://makecode.microbit.org/_YejCA2AJDDVV)

If you don't want to type these code by yourself, you can directly download the whole program from the link below:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_YejCA2AJDDVV"
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

- On button A pressed, the car draws a circle.
- On button B pressed, stop car.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-ringbit-car-v2/images/HStJeJY.jpg)

## Think

- How can you make your car draw an eight?

## Questions



## More Information
