# Case 03: Thermometer

## Purpose

 Use the Smart Coding Kit to create a wearable thermometer.

## Products Link

 1 x [ELECFREAKS micro:bit Smart Coding Watch Kit](https://www.elecfreaks.com/micro-bit-smart-coding-kit.html)





![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/smart_coding_kit_case_03_01.png)



## Software


[MakeCodemakecode](https://makecode.microbit.org/#)

## Programming

### Step 1

 Create a variable `flag`. Initialize this variable to 0 when we startup our micro:bit.


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/smart_coding_kit_case_03_02.png)



### Step 2

 Create a `forever` loop to show the variable `i`. If it is over the default value, it alarms; Or it does not alram.




![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/smart_coding_kit_case_03_03.png)


### Step 3

 When button A being pressed, set the returned value as `i` displaying on the micro:bit.


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/smart_coding_kit_case_03_04.png)



### Link
 Link：[https://makecode.microbit.org/_dJyipJCjd75J](https://makecode.microbit.org/_dJyipJCjd75J)

 You can also download it below:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_dJyipJCjd75J"
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


 The current value will be detected and displayed on the micro:bit when button A being pressed.


## Exploration



## FAQ

Q: Sometimes the temperature is below 20 degrees, but the value detected is even higher?

A: The temperature detected is the micro:bit chips but not the environment, the chips will get hot obviously when powering on for a long time.

## Relevant File
