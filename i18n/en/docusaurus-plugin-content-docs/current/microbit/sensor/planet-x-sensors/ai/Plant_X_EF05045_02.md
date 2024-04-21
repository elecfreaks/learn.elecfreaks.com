# Case 02: Color-controlled Lights

## Purpose

To make the LED strip be able to adjust the color of the lights according to the recognized color from the AI Lens.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/05035_01.png)


## Products Link

[ELECFREAKS Smart AI Lens Kit](https://www.elecfreaks.com/elecfreaks-smart-ai-lens-kit.html)

[ELECFREAKS Nezha Breakout Board](https://www.elecfreaks.com/nezha-breakout-board.html)

[ELECFREAKS PlanetX Rainbow LED Strip (10 Pixels)](https://www.elecfreaks.com/planetx-rainbow-led-strip-10-pixels.html)

### Materials Required and Connection Diagram


 Connect the AI Lens to the IIC port and the LED strip to the J1 port on the Nezha expansion board as the picture shows.


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/05035_02_03.png)



## MakeCode Programming


### Step 1

Click "Advanced" in the MakeCode drawer to see more choices.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/05001_04.png)

We need to add a package for programming. Click "Extensions" in the bottom of the drawer and search with "PlanetX" in the dialogue box to download it.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/05001_05.png)

***Note:*** If you met a tip indicating that the codebase will be deleted due to incompatibility, you may continue as the tips say or build a new project in the menu.

### Step 2

### Project 1: Card(s) Recognition

### Code as below:

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/05035_02_06.png)


### Link
Link: [https://makecode.microbit.org/_K9zFd9dEjTDY](https://makecode.microbit.org/_K9zFd9dEjTDY)

You may also download it directly below:


<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_K9zFd9dEjTDY"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>


### Result
 The LED strip displays the color in accordance with the color that is recognized from the AI Lens.
