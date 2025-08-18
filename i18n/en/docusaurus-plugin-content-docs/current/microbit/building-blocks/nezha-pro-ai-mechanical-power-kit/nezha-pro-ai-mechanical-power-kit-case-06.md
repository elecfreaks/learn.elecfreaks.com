---
sidebar_position: 7
sidebar_label: Case 6:Wood-Sawing Robot
---

# Case 6: Wood-Sawing Robot

## Case Introduction
Build a wood-sawing robot, and make the robot simulate wood-sawing action by controlling the reciprocating rotation of the servo.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-06-01.png)

## Teaching Preparation

| Name | Illustration |
| :----------: | :--------------------------: |
| Nezha Pro AI Mechanical Power Kit | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-01.png) |

## Teaching Objectives
1. Complete the assembly of the wood-sawing robot, master the assembly method of the servo and the "saw blade" component, correctly connect the servo and program to control its reciprocating rotation, and realize the simulated wood-sawing action.
2. Understand the "angle-controllable" feature of the servo, recognize the connection between reciprocating rotation and wood-sawing action, and learn to set the rotation angle and frequency of the servo through programming.
3. Stimulate interest in industrial machinery, perceive the role of servos in precise control, and establish the cognition that "technology simulates industrial production".

## Story Introduction
After repairing Xuan Yi (the helicopter), the image it sent back showed that the gear beasts were gnawing at the village's guardrail with their sharp teeth. "We must reinforce the fence quickly!" The carpenter robot pushed a pile of logs over. "But my wood-sawing robot 'Juchi' (Sawtooth) isn't working—it can't saw the logs into planks."
The children found that the motor wire connection next to the saw blade was loose. Aji pressed the start button, and the motor only made a "buzzing" idle sound: "Its principle is simple, just like the electric saw at home—the motor directly drives the saw blade to rotate; once the motor runs, it can drive the saw blade to work."

## Learning Exploration
1. What impact does the reciprocating rotation angle of the servo (e.g., 0°-90°, 0°-180°) have on the "wood-sawing effect" of the wood-sawing robot? What problems will occur if the angle is too large or too small?
2. Will adjusting the rotation frequency of the servo (e.g., 1 reciprocation per second, 2 reciprocations per second) change the "efficiency" of the wood-sawing action?
3. Compare the actions of a real electric saw (e.g., handheld electric saw) and the wood-sawing robot—does the saw blade of a real electric saw rotate continuously or reciprocate? What are the differences in their application scenarios?

## Assembly Steps
<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/files/nezha-pro-ai-mechanical-power-kit-case-06.pdf" type="application/pdf" width="100%" height="600px" />

## Hardware Connection
Connect the smart motor to the M2 interface of the Nezha Pro Expansion Board.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-06-02.png)

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
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-06-03.png)

Program link: [https://makecode.microbit.org/_CdFHfTU17aV7](https://makecode.microbit.org/_CdFHfTU17aV7)

You can also download the program directly through the following webpage.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_CdFHfTU17aV7"
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
After turning on the power, the wood-sawing robot starts to operate.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-06.gif)


## Extended Knowledge
1. Application scenarios of servos: Servos are widely used in robot joints (e.g., robotic arms, robot fingers), remote-controlled toys (e.g., remote-controlled car steering, aircraft model wing adjustment), and smart homes (e.g., automatic curtain angle control) due to their ability to control angles precisely.
2. The development of sawing tools: From hand saws (relying on manual reciprocation) to electric saws (driven by motors for continuous rotation or reciprocation), and then to industrial CNC saws (controlling sawing angle and speed precisely), the progress of sawing technology is inseparable from the upgrading of mechanical control technology.
3. The working principle of servos: A servo contains a motor, a gear set, a potentiometer, and a control circuit inside. It adjusts the motor rotation by receiving signals, and then realizes precise angle positioning through gear reduction and potentiometer feedback—this is the core reason why it can achieve reciprocating rotation.
