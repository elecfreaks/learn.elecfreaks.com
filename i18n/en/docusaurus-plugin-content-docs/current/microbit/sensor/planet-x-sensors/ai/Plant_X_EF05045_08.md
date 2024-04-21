# Case 08: Balls Recognition

## Purpose

Recognize the balls with the AI lens.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/sensor/planet-x-sensors/ai/images/05035_01.png)

## Products Link

[ELECFREAKS Smart AI Lens Kit](https://www.elecfreaks.com/elecfreaks-smart-ai-lens-kit.html)

[ELECFREAKS Nezha Breakout Board](https://www.elecfreaks.com/nezha-breakout-board.html)


### Materials Required and Connection Diagram


 Connect the AI Lens to the IIC port on the Nezha expansion board as the picture shows.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/sensor/planet-x-sensors/ai/images/05035_01_03.png)



## MakeCode Programming


### Step 1

Click "Advanced" in the MakeCode drawer to see more choices.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/sensor/planet-x-sensors/ai/images/05001_04.png)

We need to add a package for programming. Click "Extensions" in the bottom of the drawer and search with "PlanetX" in the dialogue box to download it.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/sensor/planet-x-sensors/ai/images/05001_05.png)

***Note:*** If you met a tip indicating that the codebase will be deleted due to incompatibility, you may continue as the tips say or build a new project in the menu.

### Step 2

### Code as below:

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/sensor/planet-x-sensors/ai/images/05035-08-06.png)



### Link
Link：[https://makecode.microbit.org/_2bxYTEbFU1H8](https://makecode.microbit.org/_2bxYTEbFU1H8)

You may also download it directly below:


<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_2bxYTEbFU1H8"
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
 A smile face displays on the micro:bit if the the blue ball is recognized by the AI lens and a sad face displays on the micro:bit if it recognizes a red ball.
