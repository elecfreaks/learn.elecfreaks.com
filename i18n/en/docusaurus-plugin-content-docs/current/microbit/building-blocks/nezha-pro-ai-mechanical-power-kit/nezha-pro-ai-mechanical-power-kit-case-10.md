---
sidebar_position: 11
sidebar_label: Case 10: Gesture-Controlled Robotic Arm
---

# Case 10: Gesture-Controlled Robotic Arm

## Case Introduction
Build a gesture-controlled robotic arm and control the robotic arm's movements through gestures.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-10-01.png)

## Teaching Preparation

| Name | Illustration |
| :----------: | :--------------------------: |
| Nezha Pro AI Mechanical Power Kit | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-01.png) |

## Teaching Objectives
1. Complete the assembly of the gesture-controlled robotic arm, master the assembly and connection methods of the robotic arm's joints (including servos), gripping components, and gesture recognition sensor, and realize the control of the robotic arm's joint rotation and gripping actions through gestures.
2. Understand the "multi-joint collaboration" feature of the robotic arm, recognize the correspondence between gesture recognition and joint movements, and learn to program to set the rotation angles of different joints.
3. During the process of debugging joint rotation ranges and gripping component tightness, cultivate hands-on ability, spatial logical thinking, and problem-solving ability, and learn to solve problems such as unstable gripping of the robotic arm and joint jamming.
4. Stimulate interest in robotics technology, perceive the possibility of "robotic arms replacing human hands", and establish the cognition that "technology extends human capabilities".

## Story Introduction
After cleaning up the gravel, everyone went to the damaged warehouse. Parts on the shelves were scattered all over the floor, and Qiaoshou (Skillful Hand), the robotic arm in charge of organizing, was standing with its arms hanging down, in a daze. "It was supposed to grab different parts according to gestures!" The warehouse manager sighed while holding a screw. "Now it can't even hold the lightest nut."
Aji manipulated the joints of the robotic arm: "Look at these 3-degree-of-freedom joints—they’re just like the human shoulder, elbow, and wrist. You need to make it re-understand the gesture codes for 'grab' and 'release'."

## Learning Exploration
1. How many movable joints does the robotic arm have? Which component (e.g., servo) controls each joint? Try using different gestures (e.g., waving the left hand = controlling the upper arm, waving the right hand = controlling the forearm) to control different joints respectively. How to ensure no conflicting movements?
2. What determines the gripping force of the robotic arm? (e.g., servo torque, material of the gripping component) If the gripping force is too strong, will it damage the "gripped object" (e.g., foam block)? How to adjust this through programming?
3. If a certain joint of the robotic arm fails to reach the preset angle, what might be the causes? (e.g., insufficient servo power, jammed joint components)
4. Compare the structures of the human arm and the robotic arm. Which parts of the human arm do the robotic arm's joints simulate (e.g., shoulder, elbow, wrist)? What are the differences in flexibility between the two?

## Assembly Steps
<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/files/nezha-pro-ai-mechanical-power-kit-case-10.pdf" type="application/pdf" width="100%" height="600px" />

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

Program link: [https://makecode.microbit.org/_XVCJ9rAWb2ex](https://makecode.microbit.org/_XVCJ9rAWb2ex)

You can also download the program directly through the following webpage.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_XVCJ9rAWb2ex"
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
After turning on the power, control the robotic arm's movements through gestures.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-10.gif)


## Extended Knowledge
1. Applications of industrial robotic arms: Industrial robotic arms are widely used in automotive manufacturing (e.g., welding, assembly), electronic production (e.g., chip handling), and food processing (e.g., packaging). They can perform high-precision and repetitive tasks, improving production efficiency.
2. Control technologies for robotic arms: In addition to gesture control, industrial robotic arms also operate through programming control (preset movements), visual control (locating objects via cameras), and force feedback control (sensing gripping force). The gesture control in this case is a simplified form of "human-computer interaction control".
3. Flexible robotic arms: To avoid damaging fragile objects (e.g., fruits, glass), scientists have developed flexible robotic arms (made of soft materials). Combined with gesture control, they can be used in fields such as medicine (e.g., minimally invasive surgery) and agriculture (e.g., fruit picking), reflecting the "humanized" trend in mechanical design.
