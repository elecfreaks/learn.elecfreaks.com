# case 04 trimpot

## Introduction ##

The trimpot is a common pressure regulation component. In this case, we are going to read output voltage of the trimpot and show the voltage with a bar graph in 5*5 LED allay of micro:bit.


## Products Link

[ELECFREAKS Experiment Box Kit](https://shop.elecfreaks.com/products/elecfreaks-experiment-box-kit-without-micro-bit-board?_pos=1&_sid=ac099db2f&_ss=r)

## Hardware Connect ##


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/circuit-design/microbit-experiment-box-kit/images/LMsve7H.png)
 Connect circuit as above picture and put 2 AAA batteries to the batteries pack.

## Principles of Circuits ##

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/circuit-design/microbit-experiment-box-kit/images/VFmWZkG.png)

The GND of slot on micro:bit is into innards of batteries' GND to generate current loop.


## Introduction of Components ##

### Trimpot ###
 The trimpot is a pressure regulation component which included a resistance and a slide system. The resistance measured varies based on the movement of a knob or slider between the middle terminal and outer terminals.
 There is a 10KΩ trimpot on the experiment box. When it turns left, it will be 0Ω; when it turns right, it will be 10KΩ.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/circuit-design/microbit-experiment-box-kit/images/jHZQhOu.png)

## Software

### Step 1

 Click [makecode https://makecode.microbit.org/#](https://makecode.microbit.org/#)。

 Click on "New Project" and set a new Project.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/circuit-design/microbit-experiment-box-kit/images/t34k5Zb.png)

### Step 2

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/circuit-design/microbit-experiment-box-kit/images/3Ekc31T.png)

 Snap plot bar graph into the forever to show a bar graph.（A bar graph is a kind of table which can show number by diffrent lengths.）

 "analog read pin" is to read a signal of a pin.（0~1023）

### Program

 Program link：[https://makecode.microbit.org/_VewWgwe8HVT1](https://makecode.microbit.org/_VewWgwe8HVT1)

 You also could directly download program by visiting website as below:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_VewWgwe8HVT1"
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

 Rotate the trimpot, the height of the bar graph will change.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/circuit-design/microbit-experiment-box-kit/images/WDagGas.gif)

## think

 Is the trimpot could be a fixed resistance？

## Questions



## More Information
