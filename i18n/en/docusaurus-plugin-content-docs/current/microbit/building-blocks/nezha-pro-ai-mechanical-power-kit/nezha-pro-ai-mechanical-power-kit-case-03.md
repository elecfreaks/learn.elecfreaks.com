---
sidebar_position: 4
sidebar_label: Case 3:Simple Mechanical Dog
---

# Case 3: Simple Mechanical Dog

## Case Introduction
Build a simple mechanical dog. Through basic gear transmission, realize the movement of the simple mechanical dog.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-03-01.png)

## Teaching Preparation

| Name | Illustration |
| :----------: | :--------------------------: |
| Nezha Pro AI Mechanical Power Kit | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-01.png) |

## Teaching Objectives
1. Complete the assembly of the simple mechanical dog and master the assembly method of the gear transmission structure.
2. Understand the basic principles of gear transmission (e.g., meshing, and the relationship between rotational speed and torque), and recognize the impact of gears with different numbers of teeth on the movement speed of the mechanical dog.
3. During the process of debugging gear engagement and motor parameters, cultivate hands-on operation ability and detailed observation ability, and learn to solve motion jamming problems by optimizing gear engagement.
4. Stimulate interest in mechanical transmission technology, perceive the core role of gears in robot movement, and establish the cognition that "technology serves functions".

## Story Introduction
Right after getting Upright to stand straight again, a chaotic clatter of metal came from the direction of the ranch. "Oh no!" Aji’s sensor suddenly lit up red. "Something’s wrong with Wangcai, the one in charge of guarding the mechanical sheep!"
When everyone rushed to the ranch, they saw more than twenty mechanical sheep charging around wildly inside the fence. Wangcai, the mechanical dog in charge of watching them, was slipping and staggering in place—its gear set was stuck like a jammed chain and couldn’t rotate. "The gears are misaligned; it can’t even take a step!" [The ranch manager robot shouted anxiously.] "The sheep are about to break through the fence and run away!"
Aji knelt down and pointed at Wangcai’s gear structure: "Now we need to realign the misaligned gears and make them mesh tightly together like biting something."

## Learning Exploration
1. Which sets of gears does the mechanical dog rely on for movement? Try replacing gears with different numbers of teeth (e.g., a large gear driving a small gear, a small gear driving a large gear)—how does the speed of the mechanical dog change?
2. Does the engagement tightness between gears affect the movement of the mechanical dog? What problems (e.g., slipping, jamming) will occur if the gears are too loosely or too tightly engaged? How to adjust this?

## Assembly Steps
<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/files/nezha-pro-ai-mechanical-power-kit-case-03.pdf" type="application/pdf" width="100%" height="600px" />

## Hardware Connection
Connect the smart motor to the M1 interface of the Nezha Pro Expansion Board.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-03-02.png)

## Code Programming
Go to "[makecode.microbit.org](https://makecode.microbit.org)" and click **New Project**.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-07.png)

Enter the project name in the pop-up window and click **Create**.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-11.png)

Click **Extensions** in the code drawer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-09.png)

In the pop-up interface, enter **nezha pro** and click the search icon. After the **nezha pro** software library appears, click it. Load the PlanetX software library in the same way.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-10.png)

## Sample Program
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-03-03.png)

Program link: [https://makecode.microbit.org/_d2V4Wjh34du5](https://makecode.microbit.org/_d2V4Wjh34du5)

You can also download the program directly through the following webpage.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_d2V4Wjh34du5"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

## Program Download
Use a USB cable to connect the PC and micro:bit V2.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual03.gif)

After successful connection, a drive named MICROBIT will be recognized on the computer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual06.png)

Click the icon at the bottom left ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual07.png) and select **Connect Device**.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual11.png)

Click ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual08.png).

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual12.png)

Click ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual09.png).

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual13.png)

In the pop-up window, select **BBC micro:bit CMSIS-DAP**, then select **Connect**. Now, the micro:bit has been successfully connected.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual14.png)

Click **Download Program**

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual10.png)


## Case Demonstration
After turning on the power, press button A to make the simple mechanical dog walk forward; press button B to make it stop walking.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-03.gif)

## Extended Knowledge
1. Types and applications of gears: In addition to the gears used in this case, there are also bevel gears (used to change the direction of transmission, such as in automotive steering systems) and worm gears (used for speed reduction, such as in winches) in daily life. Different gears are suitable for different transmission needs.
2. Advantages of gear transmission: Gear transmission has the characteristics of high transmission efficiency, stable power transfer, and long service life. It is widely used in devices such as bicycles (chains + gears), clocks, and automobile engines.
3. Development of mechanical dogs: Modern mechanical dogs (such as Aibo by Sony) not only have a motion structure with gear transmission but also integrate sensors and AI algorithms. They can perceive the environment and interact with humans, becoming "intelligent companion robots".
