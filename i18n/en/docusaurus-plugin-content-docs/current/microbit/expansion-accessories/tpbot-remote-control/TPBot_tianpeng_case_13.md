﻿---

sidebar_position: 15
sidebar_label: Remote Control with micro:bit Accelerometer

---

# Remote Control with micro:bit Accelerometer

## Purpose
---
- Programme to control the TPBot with the accelerometer.

## Material
---

- 1 x [TPBot](https://item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-18602834185.41.68d15ccfBFHNPy&id=618758535761)

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

### Sample

### Remote Control Part

- Set the micro:bit showing a set icon and the radio group as 1.
- Radio send x which is given by its acceleration dividing 10 in the forever brick.
- Radio send y which is given by its acceleration dividing 10  in the forever brick.
-
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-tpbot/tpbot-remote-control/images/TPBot_tianpeng_case_13_04.png)

### Link
- Link: [https://makecode.microbit.org/_11kPTbbxM9Mf](https://makecode.microbit.org/_11kPTbbxM9Mf)

- You may also download it directly below:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_11kPTbbxM9Mf"
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

- Set the micro:bit showing a set icon and the radio group as 1.
- Drag two" if...else..." sentences to the "on radio received..." block, judge if the received name is x or y.
- If it's x, save it as the variable as the accelaration from the x.
- If it's y, save it as the variable as the accelaration from the y.
- Set the speed of the left wheel being y+x and the right wheel being y-x.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-tpbot/tpbot-remote-control/images/TPBot_tianpeng_case_13_05.png)

### Link
- Link: [https://makecode.microbit.org/_a6LLFsMfDT7K](https://makecode.microbit.org/_a6LLFsMfDT7K)

- You may also download it directly below:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_a6LLFsMfDT7K"
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

- Power up to show the set icon on the micro:bit display, and the movement of TPBot is controlled by the changing angel from the micro:bit.

## Exploration
---


## FAQ
---


## Relevant File
---
