﻿# case 05 Crazy dance

## Our Goal

- To make the Ring:bit car to dance in free style.

## Requiered Materials

- 1 x [Ring:bit Car](https://shop.elecfreaks.com/products/elecfreaks-micro-bit-ring-bit-v2-car-kit-without-micro-bit-board?_pos=4&_sid=66ba68dec&_ss=r)

## Hardware Connect

- Connect the left wheel servo to P1 of the Ring:bit expansion board and the right wheel servo to P2.
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-ringbit-car-v2/images/jBVHea8.png)

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

- Snap the block `set left wheel at pin P1 right wheel at pin P2` to the `On start` block.
- The port number is based on the actual servo connection port.
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-ringbit-car-v2/images/igG5TVD.png)

### Step 3
- Snap blocks into `forever` block.
- Set an varieble to `left` and an variable to `right`.
- Generate a random number and assinment to the `left` and the `right`.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-ringbit-car-v2/images/2PPYJ0T.png)

### Step 4

- Set the left wheel speed to the variable left abd the right wheel speed to the variable right.
- Pause for one second.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-ringbit-car-v2/images/HSujBjF.png)


### Program

Program Link：[https://makecode.microbit.org/_WrC1kWhizc6E](https://makecode.microbit.org/_WrC1kWhizc6E)

If you don't want to type these code by yourself, you can directly download the whole program from the link below:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_WrC1kWhizc6E"
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

- The car runs at different speed.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-ringbit-car-v2/images/j6kX56N.jpg)

## Think

- How do you ensure the car moves at a slower speed constantly?

## Questions



## More Information
