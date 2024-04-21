# case 08 Light Follow

## Our Goal


- Make the ring:bit car to light follow.

## Requiered Materials


- 1 x [Ring:bit Car](https://shop.elecfreaks.com/products/elecfreaks-micro-bit-ring-bit-v2-car-kit-without-micro-bit-board?_pos=4&_sid=66ba68dec&_ss=r)

## Hardware Connect

- Connect the left wheel servo to P1 of the Ring:bit expansion board and the right wheel servo to P2.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/jBVHea8.png)

## Software

[makecode](https://makecode.microbit.org/#)


## Coding

### Step 1
- Click on "Advanced" in the MakeCode Drawer to see more code sections.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/2qCyzQ7.png)

- Search for “ringbitcar” and click on the ring:bit car package to add it to your project. (As below picture)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/1Wq2Mov.jpg)

***Note：*** If you get a warning telling you some packages will be removed because of incompatibility issues, either follow the prompts or create a new project in the Project file menu.

### Step 2

- Snap the `on start` block from the Basic and initialize the P1 port to left wheel and the P2 port to right wheel.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/RFccHpJ.png)

### Step 3

- Snap the `light level` from the Input. The car will move to the light source when the light level is greater than the defined value.
- The car will spin around to find the light source when the light level is less than the defined value.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/i1lAR3X.png)

### Program

Program Link：[https://makecode.microbit.org/_H7c7DPWTPYKY](https://makecode.microbit.org/_H7c7DPWTPYKY)

If you don't want to type these code by yourself, you can directly download the whole program from the link below:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_H7c7DPWTPYKY"
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


- The car spins around and will move to the light source when it is detecting the light.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/ENMYgJm.gif)

## Think


- How can you make a smart car to detect the fire?

## Questions



## More Information
