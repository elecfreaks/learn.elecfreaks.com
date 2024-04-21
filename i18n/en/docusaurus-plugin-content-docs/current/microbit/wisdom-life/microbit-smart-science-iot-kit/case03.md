# iot:kit case03: An environmental quality monitoring station

## Our goal


 Let's make an environmental quality monitoring station.


## Required materials


 1 x [IOT:kit](https://www.elecfreaks.com/micro-bit-smart-science-iot-kit.html)


## Background


### What is the environmental monitoring

 Environmental monitoringn Environmental monitoring is to design environemntal monitoring and display & save the collected information by using of GIS, it can also give a detailed analysis towards it's monitoring spot.


## Hardware connection


As below picture, let the light sensor be connected to `P1`.

Let the BME280 module be connected to `SCLP19` `SDAP20` of the `IIC`.

Let the onboard RTC be connected to `IIC`.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_03_01.png)


## Software


[makecode](https://makecode.microbit.org/#)

## Coding


### Step 1
 Click on "Advanced" in the MakeCode Drawer to see more code sections.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/iot_bit_11.jpg)

 We need to add an extension for coding to the IOT. Click on the “Extension” at bottom of coding drawer, then Search for “IOT” and click on the IOT package to add it to your project. (As below picture)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/iot_bit_12.jpg)

***Note：*** If you get a warning telling you some packages will be removed because of incompatibility issues, either follow the prompts or create a new project in the Project file menu.

### Step 2

Snap the `initialize OLED` in to the `on start`, initialize OLED screen pixels to `64*128`.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_03_02.png)

### Step 2

Snap the `show string` and `show number` blocks into the `forever` in turn.

Display current light intensity, humidity and temperature.

Then, snap into the `insert newline`.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/case_03_03.png)

### Program

Program link：[https://makecode.microbit.org/_ePDLFuUwqUhK](https://makecode.microbit.org/_ePDLFuUwqUhK)

If you don't want to type these code by yourself, you can directly download the whole program from the link below:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_ePDLFuUwqUhK"
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

The light intensity, temperature and humidity are displayed every minute.

## Think


How do you count the data in a day ?

## Questions


## More Information
