---
sidebar_position: 14
sidebar_label: Case 13:Voice-Controlled Forklift
---

# Case 13: Voice-Controlled Forklift

## Case Introduction
Build a voice-controlled forklift, and control the forklift's movement as well as the lifting and lowering of its forks through voice commands.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-13-01.png)

## Teaching Preparation

| Name | Illustration |
| :----------: | :--------------------------: |
| Nezha Pro AI Mechanical Power Kit | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-01.png) |

## Teaching Objectives
1. Complete the assembly of the voice-controlled forklift, master the assembly and connection methods of the forklift chassis, fork lifting mechanism, and voice recognition sensor, and realize the control of the forklift's forward movement, backward movement, and fork lifting/lowering through voice commands.
2. Understand the collaboration principle between the voice recognition sensor and motors (controlling the chassis and forks), and learn to program to associate specific voice commands (e.g., "forklift forward", "fork up") with the forklift's actions.
3. During the process of debugging the fork lifting height and voice recognition distance, cultivate hands-on ability, programming logic, and problem-solving ability, and learn to solve problems such as stuck fork lifting and delayed response to voice commands.
4. Stimulate interest in industrial intelligent equipment, perceive the application potential of "voice control" in logistics scenarios, and establish the cognition that "technology improves logistics efficiency".

## Story Introduction
Upon arriving outside the core equipment room, everyone found that the door was blocked by a heavy alloy plate. "'Dalisheng (Hercules)' Forklift can move it!" the guard robot shouted. "But it only recognizes voice commands—now it’s like a deaf machine!"
The children tried speaking to the forklift’s microphone: "Start!" The forklift didn’t respond at all. Aji adjusted the voice module: "It needs clear commands, just like a soldier following orders. Try saying 'lift the forks'."

## Learning Exploration
1. Which component (e.g., motor, servo) does the forklift's fork lifting rely on? How to control the lifting height of the forks through voice commands?
2. Try setting "sequential commands" (e.g., "forklift forward → fork up → forklift backward"). How to ensure actions are executed in order without confusion during programming?
3. If the forklift moves while executing the "fork up" command, what might be the causes? (e.g., conflicting action logic in programming, false recognition by the sensor)
4. Compare the operation methods of real forklifts and the model—how do operators of real forklifts control the forks? What problems can voice-controlled forklifts solve in logistics warehouses (e.g., reducing the operator’s control steps)?

## Assembly Steps
<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/files/nezha-pro-ai-mechanical-power-kit-case-13.pdf" type="application/pdf" width="100%" height="600px" />

## Hardware Connection
Connect the voice recognition sensor to the IIC interface of the Nezha Pro Expansion Board, and connect the three smart motors to the M1, M2, and M3 interfaces of the Nezha Pro Expansion Board respectively.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-13-02.png)

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
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-13-03.png)

Program link: [https://makecode.microbit.org/_7hWct7a1pe1m](https://makecode.microbit.org/_7hWct7a1pe1m)

You can also download the program directly through the following webpage.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_7hWct7a1pe1m"
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
After turning on the power, control the forklift to operate via voice commands.

- Full speed ahead: Move forward
- Reversing: Move backward
- Turn left: Turn left
- Turn right: Turn right
- Start device: Lift the forks
- Turn off device: Lower the forks

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-13.gif)


## Extended Knowledge
1. Applications of real forklifts: Real forklifts are core handling equipment in logistics warehouses and factories, used for loading, unloading, and transporting goods. They are classified by power into electric forklifts and fuel-powered forklifts. This case uses motors to simulate the "power drive" and "fork control" functions of electric forklifts.
2. Development of intelligent logistics: Modern logistics warehouses have begun to adopt "unmanned forklifts" (AGV forklifts—Automated Guided Vehicle forklifts). Combined with voice recognition and visual recognition technologies, these forklifts can achieve autonomous navigation and automatic loading/unloading, reducing labor costs and improving handling efficiency (e.g., unmanned forklifts in Amazon warehouses).
3. Industrial advantages of voice control: In industrial scenarios, workers may need to operate multiple devices simultaneously. Voice control can free up hands (e.g., no need to press buttons) and enable "remote command" (e.g., controlling forklifts to transport goods from outside the warehouse), enhancing operational safety.
