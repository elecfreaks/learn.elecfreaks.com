---

sidebar_position: 17
sidebar_label: Speed Adjustable TPBot
---

# Speed Adjustable TPBot

## Purpose
---
- Adjust the speed of the TPBot with the potentiometer.

## Material
---

- 1 x [TPBot](https://www.elecfreaks.com/tpbot.html)


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/TPBot_tianpeng_case_01_01.png)


## Hardware connection
---
Connect potentiometer to port 1 on TPBot.


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/TPBot_tianpeng_case_15_02.png)



## Software
---

[MicroSoftmakecode](https://makecode.microbit.org/#)


## Programming
---

Click "Advanced" to see more choices in the MakeCode drawer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/TPBot_tianpeng_case_01_02.png)

- We need to add a package for programming. Click "Extensions" in the bottom of the drawer and search with "tpbot" in the dialogue box to download it.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/TPBot_tianpeng_case_01_03.png)

- We need to add a package for programming. Click "Extensions" in the bottom of the drawer and seach with "PlanetX" in the dialogue box to download it.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/TPBot_tianpeng_case_15_03.png)

### Sample

- Drag the show icon brick into on start.
- In forever brick, map the returned value of the potentiometer from 0~1023 to 0~100, and set the mapping value as the speed for the car to move forward.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/TPBot_tianpeng_case_15_04.png)


### Link
- Link：[https://makecode.microbit.org/_ArRM71PD6de0](https://makecode.microbit.org/_ArRM71PD6de0)

- You may also download it directly below:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_ArRM71PD6de0"
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

- After powering on, the speed of the TPBot could be adjusted by the potentioneter.


## Exploration
---


## FAQ
---
Q: While operating this case, why the car might not work properly?
A: It might be the low power of the batteries, please try adding the value of TPBot's speed and test again.

## Relevant File
---
