---
sidebar_position: 8
sidebar_label: Case 7: Gesture-Controlled Racing Car
---

# Case 7: Gesture-Controlled Racing Car

## Case Introduction
Build a gesture-controlled racing car and control the car's movement through gestures.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-07-01.png)

## Teaching Preparation

| Name | Illustration |
| :----------: | :--------------------------: |
| Nezha Pro AI Mechanical Power Kit | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-01.png) |

## Teaching Objectives
1. Complete the assembly of the gesture-controlled racing car, master the assembly and connection methods of the racing car chassis, motors, and gesture recognition sensor, and realize the control of the racing car's forward movement, turning, and stopping through gestures.
2. Understand the working principle of the gesture recognition sensor (e.g., capturing the trajectory of hand movements), and learn to program to associate specific gestures (such as waving forward, waving to the right) with the racing car's actions.
3. Stimulate interest in intelligent interaction technology, experience the convenience of "gesture control", and establish the cognition of "diversified human-computer interaction".

## Story Introduction
Several thick logs sawn down while reinforcing the fence accidentally blocked the path to the command center. Everyone was worrying about how to move them when the traffic robot ran over pushing a streamlined car: "Try 'Flash Racing Car'! It can go around along the path outside the fence to send a message, but now it’s just spinning in circles on the spot."
The children saw the gesture sensor of the racing car flashing red. Aji picked up a twig and waved it in front of the car: "It moves by recognizing gestures—waving forward is acceleration, and swinging to the right is turning, just like a magic wand guiding it. Look, the sensor lens is blocked by wood chips; no wonder it can’t recognize commands." The gear beasts roared in the distance, and Aji urged: "Hurry up and get it moving—the command center is still waiting for us to report the fence reinforcement progress!"

## Learning Exploration
1. What distance range does the gesture recognition sensor need to be in to accurately recognize gestures? What problems (such as failure to recognize, false recognition) will occur if the distance is too far or too close?
2. Try setting different gesture commands (e.g., wave forward = move forward, wave backward = move backward, wave left = turn left). How to ensure "one-to-one correspondence" between gestures and the racing car's actions during programming?
3. If the racing car has "false actions" (e.g., moving without any gesture being made), what might be the causes? (e.g., excessive ambient light, waving gestures too fast)
4. Compare gesture control and remote control for racing cars. What are the advantages and disadvantages of gesture control? (e.g., no need for a handheld device, high susceptibility to environmental interference)

## Assembly Steps
<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/files/nezha-pro-ai-mechanical-power-kit-case-07.pdf" type="application/pdf" width="100%" height="600px" />

## Hardware Connection
Connect the gesture recognition sensor to the IIC interface of the Nezha Pro Expansion Board, and connect the two smart motors to the M1 and M2 interfaces of the Nezha Pro Expansion Board respectively.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-07-02.png)

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
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-07-03.png)

Program link: [https://makecode.microbit.org/_2EuYKHF23aDX](https://makecode.microbit.org/_2EuYKHF23aDX)

You can also download the program directly through the following webpage.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_2EuYKHF23aDX"
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
After turning on the power, the gesture-controlled racing car starts moving according to gesture commands.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-07.gif)


## Extended Knowledge
1. Types of gesture recognition technology: Common types include infrared gesture sensors (which detect hand movements through infrared reflection) and visual gesture sensors (which recognize movements by capturing images via cameras). They are widely used in scenarios such as mobile phone unlocking, VR games, and smart home control.
2. Development of intelligent racing cars: Modern intelligent racing cars not only support gesture control but also can achieve autonomous obstacle avoidance and line-following (e.g., following a black line) through AI algorithms. Some even enable more complex controls (such as custom gestures) via mobile apps.
3. Future trends in human-computer interaction: Beyond gestures, voice, eye movements, and brainwaves may all become methods of human-computer interaction. For example, future cars may allow controlling air conditioning and audio systems through gestures, making operations safer and more convenient.
