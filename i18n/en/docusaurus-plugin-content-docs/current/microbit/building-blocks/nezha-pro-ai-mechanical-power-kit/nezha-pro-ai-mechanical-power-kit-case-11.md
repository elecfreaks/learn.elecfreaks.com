---
sidebar_position: 12
sidebar_label: Case 11: Gesture-Controlled Excavator
---

# Case 11: Gesture-Controlled Excavator

## Case Introduction
Build a gesture-controlled excavator and control the excavator's movement and actions through gestures.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-11-01.png)

## Teaching Preparation

| Name | Illustration |
| :----------: | :--------------------------: |
| Nezha Pro AI Mechanical Power Kit | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-01.png) |

## Teaching Objectives
1. Complete the assembly of the gesture-controlled excavator, master the assembly and connection methods of the excavator chassis, excavator arm (including transmission components), and gesture recognition sensor, and realize the control of the excavator's movement, excavator arm lifting, and bucket opening/closing through gestures.
2. Understand the principle of "multi-action collaboration" of the excavator (e.g., movement + excavator arm action), recognize the correspondence between gesture commands and excavation actions, and learn to program to coordinate the actions of different components.
3. During the process of debugging the excavator arm's movement range and bucket opening/closing angle, cultivate hands-on ability, logical thinking, and spatial imagination, and learn to solve problems such as stuck excavation actions and the bucket's inability to scoop up "simulated soil" (e.g., small stones).
4. Stimulate interest in engineering robots, perceive the technical charm of "intelligent excavation", and establish the cognition that "technology supports engineering construction".

## Story Introduction
While organizing the warehouse, everyone found that the stock of energy crystals was almost exhausted. "The crystals are hidden in the mine to the east," Aji brought up the map. "But the excavator 'Zuandishu (Ground-Drilling Rat)' is on strike—it needs gesture commands to direct the excavation direction."
At the mine entrance, the children saw that Zuandishu's drill bit was stuck in the rock. "When you wave your hand to the left, it excavates to the left; when you wave downward, it digs deeper," Aji demonstrated. "It’s just like a conductor directing a symphony—each gesture has a special meaning."

## Learning Exploration
1. Which components (e.g., motor, servo) control the excavator arm and bucket of the excavator respectively? Try using gesture commands (e.g., waving forward = excavator arm descending, waving backward = excavator arm ascending, making a fist = bucket closing) to control excavation actions. How to ensure smooth actions?
2. Will the excavator experience insufficient power when controlling the excavator arm while moving? How to optimize this through programming (e.g., prioritizing movement power before controlling the excavator arm)?
3. If the bucket cannot close tightly (causing "simulated soil" to leak out), what might be the causes? (e.g., loose connection of bucket components, insufficient servo rotation angle)
4. Compare the structures of real excavators and the model—how do real excavators' arms achieve "high-force excavation"? (Hint: Refer to the hydraulic system) Which function of real excavators do the model's transmission components simulate?

## Assembly Steps
<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/files/nezha-pro-ai-mechanical-power-kit-case-11.pdf" type="application/pdf" width="100%" height="600px" />

## Hardware Connection
Connect the gesture recognition sensor to the IIC interface of the Nezha Pro Expansion Board, and connect the three smart motors to the M1, M2, and M3 interfaces of the Nezha Pro Expansion Board respectively.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-10-02.png)

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
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-10-03.png)

Program link: [https://makecode.microbit.org/_ik31qLKCJW5C](https://makecode.microbit.org/_ik31qLKCJW5C)

You can also download the program directly through the following webpage.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_ik31qLKCJW5C"
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
After turning on the power, control the excavator's movement and actions through gestures.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-11.gif)


## Extended Knowledge
1. Core components of real excavators: Real excavators rely on hydraulic systems to provide powerful power. The lifting of the excavator arm and the opening/closing of the bucket are driven by hydraulic cylinders, which can scoop up tons of soil or rocks. This case uses motors/servos to simulate the "action control" function of the hydraulic system.
2. Development of intelligent excavators: Modern excavators have begun to integrate GPS positioning, visual recognition, and gesture control technologies—for example, using gestures to control the precise positioning of the excavator arm, or using AI algorithms to identify excavation objects (e.g., distinguishing between soil and rocks) to improve excavation efficiency.
3. Application scenarios of excavators: Excavators are core equipment in engineering construction, used in house construction (foundation excavation), road construction (earthwork), mine mining (ore excavation), and other fields. The progress of their mechanical structure and control technology directly affects project progress.
