---

sidebar_position: 18
sidebar_label: The Dazzling Lights

---

# The Dazzling Lights

## Purpose
---
- Simulate the lights of the police car.

## Material
---

- 1 x [TPBot](https://www.elecfreaks.com/tpbot.html)


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-tpbot/tpbot-interactive-coding-accessories-pack/images/TPBot_tianpeng_case_01_01.png)


## Hardware connection
---
Connect rainbow led to port 1 on TPBot.


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-tpbot/tpbot-interactive-coding-accessories-pack/images/TPBot_tianpeng_case_16_03.png)




## Software
---

  [MicroSoftmakecode](https://makecode.microbit.org/#)


## Programming
---

  Click "Advanced" to see more choices in the MakeCode drawer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-tpbot/tpbot-interactive-coding-accessories-pack/images/TPBot_tianpeng_case_01_02.png)

- We need to add a package for programming. Click "Extensions" in the bottom of the drawer and search with "tpbot" in the dialogue box to download it.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-tpbot/tpbot-interactive-coding-accessories-pack/images/TPBot_tianpeng_case_01_03.png)

- We need to add a package for programming. Click "Extensions" in the bottom of the drawer and seach with "PlanetX" in the dialogue box to download it.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-tpbot/tpbot-interactive-coding-accessories-pack/images/TPBot_tianpeng_case_15_03.png)

### Sample

- In on start brick, initialize the led strip and has it connected to J1 port, set TPBot move forward at the speed of 50%.
-  Save the variable "i" as 1 while pressing button A and set it as 0 while pressing button B.
- In forever brick, judge if the variable "i" is 1, if yes, set the led in red and pasue for 500ms, after in blue and pause another 500ms; or set it in black.


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-tpbot/tpbot-interactive-coding-accessories-pack/images/TPBot_tianpeng_case_16_04.png)


### Link
- Link：[https://makecode.microbit.org/_TvrRaMJLKPWr](https://makecode.microbit.org/_TvrRaMJLKPWr)

- You may also download it directly below:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_TvrRaMJLKPWr"
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

- The TPBot moves forward after powering on, press button A on the micro:bit to turn on the LED cycling with red and blue, press button B to turn it off.

## Exploration
---


## FAQ
---

Q: While operating this case, why the car might not work properly?
A: It might be the low power of the batteries, please try adding the value of TPBot's speed and test again.

## Relevant File
---
