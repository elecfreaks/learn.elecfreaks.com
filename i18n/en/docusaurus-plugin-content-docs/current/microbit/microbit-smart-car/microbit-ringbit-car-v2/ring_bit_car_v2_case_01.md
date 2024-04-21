# case 01 Full speed ahead

## Our Goal

- To make the Ring:bit Car to go ahead and reverse.

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

- Snap the block `go straight at full speed` into the `On start` block.
- The port number is based on the actual servo connection port.
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/igG5TVD.png)

### Step 3

- Snap the `go straight at full speed` block into the `on button A pressed` block.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/Wyo2R9B.png)


### Step 4

- Snap the `reverse at full speed` block into the `on button B pressed` block.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/jHFkpm1.png)

### Program

Program Link：[https://makecode.microbit.org/_5md9ofDyRigh](https://makecode.microbit.org/_5md9ofDyRigh)

If you don't want to type these code by yourself, you can directly download the whole program from the link below:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_5md9ofDyRigh"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>


## Completed!

- When button A is pressed, the car will go straight at full speed.
- When button B is pressed, the car will reverse at full speed.
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/wwV0YDe.jpg)

## Think

How can you make your car to stop when button A is pressed ?

## Questions



## More Information
