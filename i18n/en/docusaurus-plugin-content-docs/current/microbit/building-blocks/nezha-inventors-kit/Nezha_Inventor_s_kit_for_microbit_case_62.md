# Case 62: The Gesture-controlled Fan
## Introduction

Use [Nezha 48 IN 1 Inventor's Kit](https://www.elecfreaks.com/nezha-inventor-s-kit-for-micro-bit-without-micro-bit-board.html) with [ELECFREAKS Planetx Gesture Sensor](https://shop.elecfreaks.com/products/elecfreaks-planetx-gesture-sensor?_pos=1&_sid=e300bc9f9&_ss=r), [8 RGB Rainbow LED Ring](https://shop.elecfreaks.com/products/elecfreaks-planetx-led-rainbow?_pos=2&_sid=a43c5c85b&_ss=r) and [ELECFREAKS PlanetX Motor Fan](https://shop.elecfreaks.com/products/elecfreaks-planetx-motor-fan?_pos=1&_sid=d6d4e0ca2&_ss=r) to create a fan that can control the wind speed through gestures.


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-inventors-kit/images/neza-inventor-s-kit-case-62-01.png)



## Case Build-up

### Materials Required

[Nezha 48 IN 1 Inventor's Kit](https://www.elecfreaks.com/nezha-inventor-s-kit-for-micro-bit-without-micro-bit-board.html)

[ELECFREAKS Planetx Gesture Sensor](https://www.elecfreaks.com/planetx-gesture.html)

[8 RGB Rainbow LED Ring](https://www.elecfreaks.com/planetx-rainbow-led.html)

[ELECFREAKS PlanetX Motor Fan](https://www.elecfreaks.com/planetx-motor-fan.html)

### Structure building

Component Details

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-inventors-kit/images/neza-inventor-s-kit-case-62-02.png)


Build it as the assembly steps suggest:

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-inventors-kit/images/neza-inventor-s-kit-step-62-01.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-inventors-kit/images/neza-inventor-s-kit-step-62-02.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-inventors-kit/images/neza-inventor-s-kit-step-62-03.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-inventors-kit/images/neza-inventor-s-kit-step-62-04.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-inventors-kit/images/neza-inventor-s-kit-step-62-05.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-inventors-kit/images/neza-inventor-s-kit-step-62-06.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-inventors-kit/images/neza-inventor-s-kit-step-62-07.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-inventors-kit/images/neza-inventor-s-kit-step-62-08.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-inventors-kit/images/neza-inventor-s-kit-step-62-09.png)



Build completion :

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-inventors-kit/images/neza-inventor-s-kit-step-62-10.png)



### Connection Diagram

As the picture suggests, Connect the [ELECFREAKS Planetx Gesture Sensor](https://shop.elecfreaks.com/products/elecfreaks-planetx-gesture-sensor?_pos=1&_sid=e300bc9f9&_ss=r) to IIC port and the [ELECFREAKS PlanetX Motor Fan](https://shop.elecfreaks.com/products/elecfreaks-planetx-motor-fan?_pos=1&_sid=d6d4e0ca2&_ss=r) to J1 port and the [8 RGB Rainbow LED Ring](https://shop.elecfreaks.com/products/elecfreaks-planetx-led-rainbow?_pos=2&_sid=a43c5c85b&_ss=r) to J2 port on [Nezha breakout board](https://shop.elecfreaks.com/products/elecfreaks-nezha-breakout-board?_pos=1&_sid=00432325a&_ss=r).

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-inventors-kit/images/neza-inventor-s-kit-case-62-03.png)

## MakeCode Programming

### Step 1

Click “Advanced” in the MakeCode drawer to see more choices.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-inventors-kit/images/neza-inventor-s-kit-case-37-04.png)

For programming the ELECFREAKS Planetx Gesture Sensor, ELECFREAKS PlanetX Motor Fan, and the 8 RGB Rainbow LED Ring, enter "PlanetX" in the dialog box and click search to download it.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-inventors-kit/images/neza-inventor-s-kit-case-37-05.png)

For programming the Nezha, click “Extensions” at the bottom of the drawer and search with “nezha” to download it.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-inventors-kit/images/neza-inventor-s-kit-case-37-06.png)

*Notice*: If you met a tip indicating that some codebases would be deleted due to incompatibility, you may continue as the tips say or create a new project in the menu.

### Step 2

### Program as picture suggests

Initialize the 8 RGB Rainbow LED Ring to connect to the J2 port of the Nezha expansion board.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-inventors-kit/images/neza-inventor-s-kit-case-62-07.png)

Set when the gesture sensor detects upward gesture, judge whether the level is less than 8, if less than 8 then the variable level will automatically add one.
Set when the gesture sensor detects a downward gesture, judge whether the level is greater than 0, if greater than 0 then the variable level is automatically minus one, and set the light to black.
Set when the gesture sensor detects the gesture to the left, turn off the fan, and lights, and set the variable level to 0.


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-inventors-kit/images/neza-inventor-s-kit-case-62-08.png)

When the value of the variable level is not 0, set speed=level×10+20, set the speed of the motor fan module connected to the J1 port of which Zha expansion board to speed%, set the number of lights to be lit according to the value of level, and set the light color to blue.
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-inventors-kit/images/neza-inventor-s-kit-case-62-09.png)

Full procedure :

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-inventors-kit/images/neza-inventor-s-kit-case-62-10.png)

### Reference

Link: [https://makecode.microbit.org/v4.0.18#editor/_fv3Fht0bbEXT](https://makecode.microbit.org/v4.0.18#editor/_fv3Fht0bbEXT)

You may also download it directly:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_fv3Fht0bbEXT"
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

Fan speed is controlled by gestures. Upward gestures control fan acceleration, downward gestures control fan deceleration, leftward gestures control fan stop rotation, and fan speed is displayed by the LED rings, and the faster the speed is, the stronger lights are lit.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-inventors-kit/images/neza-inventor-s-kit-case-62.gif)
