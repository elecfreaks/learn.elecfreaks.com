﻿# Case 11: Control the Ring:bit Car with the Joystick:bit



## Purpose


- Control the ring:bit car via the Joystick:bit.




## Materials


1 × [Ring:bit car V2](https://shop.elecfreaks.com/products/elecfreaks-micro-bit-ring-bit-v2-car-kit-without-micro-bit-board?_pos=4&_sid=66ba68dec&_ss=r)

1 × [Joystick:bit](https://shop.elecfreaks.com/products/elecfreaks-micro-bit-joystick-bit-v2-kit?_pos=2&_sid=e0b457673&_ss=r)




## Software


[MicroSoft makecode](https://makecode.microbit.org/#)

## Programming



### Step 1

Click "Advanced" in the MakeCode drawer to see more choices.



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-ringbit-car-v2/images/2qCyzQ7.png)




### Step 2    Coding


We need to add a package for programming. Click "Extensions" in the bottom of the drawer and search with "Ringbit" in the dialogue box to download it.




![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-ringbit-car-v2/images/1Wq2Mov.jpg)

***Note:*** If you met a tip indicating it might be deleted due to incompatibility, you may continue as it indicates or create a new project in the menu.



In the on start brick, set the radio group as 1, please make sure it is in the same radio group with the remote controlling end so they can match.

Drag two "if...else..." bricks into the on radio data received brick, judge if the recevied value "name" is X or Y.

If "name" is x, set it as the data of xValue.

If "name" is y, set it as the data of yValue.

In forever brick, set the speed of the left wheel as  yValue+xValue and the speed of the right wheel as yValue-xValue.



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-ringbit-car-v2/images/Ringbit_Bricks_Pack_case_cn_07_05.png)

### Link

Link:  [https://makecode.microbit.org/_1vAgLo3Ky5Rm](https://makecode.microbit.org/_1vAgLo3Ky5Rm)


You may download it directly below:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_1vAgLo3Ky5Rm"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>



### Step 3    Coding the Joystick:bit

We need to add a package for programming. Click "Extensions" in the bottom of the drawer and search with "joystickbit" in the dialogue box to download it.




![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-ringbit-car-v2/images/Ringbit_Bricks_Pack_case_cn_07_06.png)



***Note:*** If you met a tip indicating it might be deleted due to incompatibility, you may continue as it indicates or create a new project in the menu.

In the on start brick, set the radio group as 1;

The value of X and Y ranges from 0~1023, the theoretical value is 512 while the Joystick is placed in the middle position, thus we need to map that range to -100~100;

In forever brick, set the value of x is among -100~100 mapping from x-axis;

In forever brick, set the value of y is among -100~100 mapping from y-axis;

Send the value of x and y via radio.



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-ringbit-car-v2/images/Ringbit_Bricks_Pack_case_cn_07_07.png)




### Link

Link：[https://makecode.microbit.org/_Ct3UpWKx3eb0](https://makecode.microbit.org/_Ct3UpWKx3eb0)

You may also download it directly below:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_Ct3UpWKx3eb0"
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

The Joystick:bit is able to control the movement of the ring:bit car.


## Exploration


## FAQ

## Relevant File
