﻿---

sidebar_position: 16
sidebar_label: Remote Control with Joystick:bit
---

# Remote Control with Joystick:bit

## Purpose
---
- Programme to control the TPBot with the Joystick:bit.

## Material
---

- 1 x [TPBot](https://www.elecfreaks.com/tpbot.html)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-tpbot/tpbot-remote-control/images/TPBot_tianpeng_case_01_01.png)

## Software
---
[MicroSoftmakecode](https://makecode.microbit.org/#)


## Programming
---


- Click "Advanced" to see more choices in the MakeCode drawer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-tpbot/tpbot-remote-control/images/TPBot_tianpeng_case_01_02.png)

- We need to add a package for programming. Click "Extensions" in the bottom of the drawer and search with "tpbot" in the dialogue box to download it.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-tpbot/tpbot-remote-control/images/TPBot_tianpeng_case_01_03.png)

- We need to add a package for programming the Joystick also. Click "Extensions" in the bottom of the drawer and seach with "joystick" in the dialogue box to download it.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-tpbot/tpbot-remote-control/images/TPBot_tianpeng_case_14_03.png)

### Sample

### Remote Control Part

- Set the radio group as 1.
- Judge the value of x&y of the Joystick in the forever brick, if the value of the x is below 200, radio send number 4;  if the value of the x is over 800, radio send number 3; if the value of the y is below 200, radio send number 2; if the value of the y over 800, radio send number 1; or radio send number 0.


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-tpbot/tpbot-remote-control/images/TPBot_tianpeng_case_14_04.png)

### Link
- Link: [https://makecode.microbit.org/_7rzb5TEfrbu7](https://makecode.microbit.org/_7rzb5TEfrbu7)

- You may also download it directly below:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_7rzb5TEfrbu7"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

### Receiving Part

- Set the radio group as 1.
- Save the received number as the variable in "on radio received..."block.
- Judge if the value is 1, if yes, set the TPBot moving forward at the speed of 100%; if it's 2, set the TPBot reversing at the speed of 50%; if it's 3, set the TPBot turning left at the speed of 50%;  if it's 4, set the TPBot turning right at the speed of 50%; If it's 0, set the TPBot to stop.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-tpbot/tpbot-remote-control/images/TPBot_tianpeng_case_14_05.png)

### Link
- Link: [https://makecode.microbit.org/_HPVCEx29zTPx](https://makecode.microbit.org/_HPVCEx29zTPx)

- You may also download it dorectly below:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_HPVCEx29zTPx"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

### Conclusion

- The movement of the TPBot is controlled via the Joystick:bit.

## Exploration
---


## FAQ
---
Q: The car does not work with the code in the wiki.
A: It should be the batteries that are lack of power, please try to fix it by adding the value of the speed in the code.


## Relevant File
---
