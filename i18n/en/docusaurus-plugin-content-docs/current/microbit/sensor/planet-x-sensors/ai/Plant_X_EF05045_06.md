# Case 06: Characteristics Acquisition

## Purpose

To make the AI Lens be able to recognize and learn from the objects.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/05035_01.png)

## Products Link

[ELECFREAKS Smart AI Lens Kit](https://www.elecfreaks.com/elecfreaks-smart-ai-lens-kit.html)

[ELECFREAKS Nezha Breakout Board](https://www.elecfreaks.com/nezha-breakout-board.html)


### Materials Required and Connection Diagram

 Connect the AI Lens to the IIC port on the Nezha expansion board as the picture shows.


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/05035_01_03.png)


## MakeCode Programming


### Step 1

Click "Advanced" in the MakeCode drawer to see more choices.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/05001_04.png)

We need to add a package for programming. Click "Extensions" in the bottom of the drawer and search with "PlanetX" in the dialogue box to download it.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/05001_05.png)

***Note:*** If you met a tip indicating that the codebase will be deleted due to incompatibility, you may continue as the tips say or build a new project in the menu.

### Step 2

### Code as below:

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/05035_06_06.png)


### Link
Link: [https://makecode.microbit.org/_TrA9rr77fEEb](https://makecode.microbit.org/_TrA9rr77fEEb)

You may also download it directly below:


<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_TrA9rr77fEEb"
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
 Press button A to recognize the object and give it an ID 1; press button B to recognize the object and give it an ID 2. Then the equivalent ID number should display on the micro:bit in accordance with the object that you place in the front of the AI Lens.
