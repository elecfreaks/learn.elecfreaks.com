﻿# Case 06: Temperature-controlled Fan

## Introduction

If staying in a room under a high temperature with dry air, our noses and throats are prone to dryness, congestion, pain, and sometimes nosebleeds. Also, people will become irritable, lack of concentration, poor accuracy and coordination, and slower reaction speed under such condition. What’s more, the body temperature regulation mechanism temporarily becomes obstructed, and heat accumulation in the body occurs, leading to heat stroke. Thus, we can make a smart temperature-controlled fan, when the temperature is high, the fan will be automatically turned on for heat dissipation and cooling, and when the temperature is low, the fan will be automatically turned off to save energy.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-inventors-kit/images/case_06_01.png)

## Quick Start


### Materials Required

Nezha expansion board × 1

micro:bit × 1

Motor × 1
***Tips: You may need to purchase [Nezha Inventor's Kit](https://www.elecfreaks.com/nezha-inventor-s-kit-for-micro-bit-without-micro-bit-board.html) if you want all the above compoents.***

### Connection Diagram

Connect the motor to M1 on the Nezha expansion board as the picture shows.


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-inventors-kit/images/case_06_03.png)

### Assembly Video


Video reference: [https://youtu.be/shI_D7j6M7o](https://youtu.be/shI_D7j6M7o)


<iframe width="560" height="315" src="https://www.youtube.com/embed/shI_D7j6M7o" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


### Assembly Steps

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-inventors-kit/images/case_step_06_01.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-inventors-kit/images/case_step_06_02.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-inventors-kit/images/case_step_06_03.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-inventors-kit/images/case_step_06_04.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-inventors-kit/images/case_step_06_05.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-inventors-kit/images/case_step_06_06.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-inventors-kit/images/case_step_06_07.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-inventors-kit/images/case_step_06_08.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-inventors-kit/images/case_step_06_09.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-inventors-kit/images/case_step_06_10.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-inventors-kit/images/case_step_06_11.png)



## MakeCode Programming


### Step 1

Click "Advanced" in the MakeCode to see more choices.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-inventors-kit/images/case_01_10.png)

For programming, we need to add a package: click "Extensions" at the bottom of the MakeCode drawer and search with "nezha" in the dialogue box to download it.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-inventors-kit/images/case_03_09.png)

***Notice:*** If you met a tip indicating that some codebases would be deleted due to incompatibility, you may continue as the tips say or create a new project in the menu.

### Step 2

### Code as below:

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-inventors-kit/images/case_06_10.png)


### Reference
Link：[https://makecode.microbit.org/_3gkW8U8Vk55v](https://makecode.microbit.org/_3gkW8U8Vk55v)

You may also download it directly below:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_3gkW8U8Vk55v"
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
The fan turns on/off automatically according to the temperature.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-inventors-kit/images/case-gif-06.gif)
