# case 09 selflocking button

## Introduction ##

 The selflocking switch is a common use button switch. When we fisrt press the button and the circuit of switch will be connection, it means selflock. And when we press the button again, the circuit of switch will be disconnection. In this case, we are going to use the selflocking switch to control on and off of the LED.

## Products Link

[ELECFREAKS Experiment Box Kit](https://shop.elecfreaks.com/products/elecfreaks-experiment-box-kit-without-micro-bit-board?_pos=1&_sid=ac099db2f&_ss=r)

## Hardware Connect ##

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/circuit-design/microbit-experiment-box-kit/images/2hsQnmL.png)

  Connect circuit as above picture and put 2 AAA batteries into batteries pack.

## Principles of Circuits ##

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/circuit-design/microbit-experiment-box-kit/images/VT0SVKN.png)

 The GND of slot on micro:bit is into innards of batteries' GND to generate the current loop.

## Introduction of Components ##

### Selflocking switch ###
 The selflocking switch is usually a normal switch with a mechanical lock built in. When pressed down and released, it doesn't bounce back automatically. Only after a second press will it unlock and fully release.
 The experiment box included a selflocking button with a red hat.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/circuit-design/microbit-experiment-box-kit/images/3iIZPHP.png)

***Note:*** Please note the positive and the negative when you are connecting.

## Software

### Step 1

 Click [makecode https://makecode.microbit.org/#](https://makecode.microbit.org/#)。

 Click on "New Project" and set a new Project.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/circuit-design/microbit-experiment-box-kit/images/t34k5Zb.png)

### Step 2

 Snap the set pin block into the on start to emit the edge events. Then, set pull pin P0 to up to set a default high level and to detect the edge of the level fluctuation.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/circuit-design/microbit-experiment-box-kit/images/aIzHYGY.png)

 Every time you press the button, the voltage of P0 port P0 changes. From 0V to 3.3 V, we call this RISE. From3.3V to 0V, we call this FALL.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/circuit-design/microbit-experiment-box-kit/images/kcnveNe.jpg)

### Step 3

 Set a event to monitor rise and fall of P0 voltage. When the RISE comes, write 1 to P2 port to light up the LED.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/circuit-design/microbit-experiment-box-kit/images/c6aX7T8.png)

### Step 4

 When the FALL comes, write 0 to P2 port to turn off the LED.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/circuit-design/microbit-experiment-box-kit/images/c6aX7T8.png)

### Program

 Program link：[https://makecode.microbit.org/_33tJqiCC8DL0](https://makecode.microbit.org/_33tJqiCC8DL0)

 You also could directly download program by visiting website as below:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_33tJqiCC8DL0"
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

  Press down selflocking switch, LED turns on; press again, LED turns off.

## Think

 How can we control the micro:bit screen with the selflocking switch ?

## Questions



## More Information
