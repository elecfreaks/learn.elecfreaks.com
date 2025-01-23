# case 06 NTC

## Introduction ##

 The temperature sensor is a sensor that can sense the temperature and convert the temperature to output signal. The temperature sensor is core of temperature measurement instrument.


## Products Link

[ELECFREAKS Experiment Box Kit](https://shop.elecfreaks.com/products/elecfreaks-experiment-box-kit-without-micro-bit-board?_pos=1&_sid=ac099db2f&_ss=r)

## Hardware Connect ##

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/circuit-design/microbit-experiment-box-kit/images/Tk7Ddy9.png)

 Connect circuit as above picture and put 2 AAA batteries into batteries pack.

## Principles of Circuits ##

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/circuit-design/microbit-experiment-box-kit/images/8pV3WaA.png)

 The GND of slot on micro:bit is into innards of batteries' GND to generate current loop.

## Introduction of Components ##

### NTC ###
 The NTC is an analog temperature sensor where the output voltage and temperature form a liner relationship. The higher the temperature, the larger the output voltage.
 The experiment box included a NTC.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/circuit-design/microbit-experiment-box-kit/images/M3k99Lj.png)

***Note:*** Please note the positive and the negative when you are connecting.

## Software

### Step 1

 Click [makecode https://makecode.microbit.org/#](https://makecode.microbit.org/#)。

 Click on "New Project" and set a new Project.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/circuit-design/microbit-experiment-box-kit/images/t34k5Zb.png)

### Step 2

 Reduction Formula：

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/circuit-design/microbit-experiment-box-kit/images/sTfPnYc.png)

 The reading is an analog value of the IO port, we need a formula as above to convert the values into Celsius.


### Step 3

 Set "Temperature" as a variable to store the Celsius.
 As above formula, convert the values of P0 into Celsius.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/circuit-design/microbit-experiment-box-kit/images/N91GU48.png)

 Show the temperature value and pauce a second.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/circuit-design/microbit-experiment-box-kit/images/poCULlT.png)

### Program

 Program link：[https://makecode.microbit.org/_h8hUjXYFM0yH](https://makecode.microbit.org/_h8hUjXYFM0yH)

 You also could directly download program by visiting website as below:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_h8hUjXYFM0yH"
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

 Show the current temperature on the micro:bit allay.



## Think



## Questions



## More Information
