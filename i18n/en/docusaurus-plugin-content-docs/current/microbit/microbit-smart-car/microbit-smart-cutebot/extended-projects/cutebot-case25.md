﻿# The Angry Cutebot

## Purpose
Display the expressions through an 8 x 16 dot matrix screen.


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-smart-cutebot/extended-projects/images/cutebot-case-25-01.png)

## Materials

1 × Cutebot smart car

1 × [ELECFREAKS 8x16 Matrix Module](https://www.elecfreaks.com/planetx-8x16-matrix.html)




### Hardware Connections
Plug the 8*16 dot matrix screen into the IIC interface of cutebot car, you need to pay attention to whether the connection interface is correct.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-smart-cutebot/extended-projects/images/cutebot-case-25-step-01.png)



## Software
[MicroSoft Makecode](https://makecode.microbit.org/#)

## Program
### Add extensions
Click “Advanced” in the drawer of MakeCode to see more choices.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-smart-cutebot/extended-projects/images/cutebot-case-24-01.png)

For programming, we need to add a package. Click “Extensions” at the bottom of the drawer and then search `Cutebot` in the dialogue box to download it.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-smart-cutebot/extended-projects/images/cutebot-case-24-02.png)


In order to program the 8*16 dot matrix screen, we need to add a code library. Find "Extensions" at the bottom of the code drawer and click on it. This will bring up a dialog box. Search for ` https://github.com/elecfreaks/pxt-Matrix-8x16 ` and click to Download it.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-smart-cutebot/extended-projects/images/cutebot-case-25-03.png)

***Note:*** If you get a warning indicating some packages will be removed because of incompatibility issues, you can follow the prompts or create a new project in the menu.

### Program

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-smart-cutebot/extended-projects/images/cutebot-case-25-04.png)

Link: [https://makecode.microbit.org/_PL2hrV271WfU](https://makecode.microbit.org/_PL2hrV271WfU)

You can also download the program directly from the following webpage.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_PL2hrV271WfU"
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

When the micro:bit V2 logo is touched, the 8×16 dot matrix screen displays expressions and the cutebot smart car moves forward.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-smart-cutebot/extended-projects/images/cutebot-case-25.gif)

## Exploration
