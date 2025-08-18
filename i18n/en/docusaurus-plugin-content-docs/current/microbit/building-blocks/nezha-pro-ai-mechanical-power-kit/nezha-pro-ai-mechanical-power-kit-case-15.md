---
sidebar_position: 16
sidebar_label: Case 15: Voice-Controlled Transport Vehicle
---

# Case 15: Voice-Controlled Transport Vehicle

## Case Introduction
Build a voice-controlled transport vehicle, and control the vehicle's movement direction as well as the lifting and lowering of its cargo bed through voice commands.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-15-01.png)

## Teaching Preparation

| Name | Illustration |
| :----------: | :--------------------------: |
| Nezha Pro AI Mechanical Power Kit | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-01.png) |

## Teaching Objectives
1. Complete the assembly of the voice-controlled transport vehicle, master the assembly and connection methods of the vehicle chassis, cargo platform, and voice recognition sensor, and realize the control of the vehicle's forward movement, backward movement, turning, and stopping through voice commands.
2. Understand the collaboration principle between the voice recognition sensor and motors (controlling the chassis), and learn to program to associate specific voice commands (e.g., "transport vehicle forward", "transport vehicle turn left") with the vehicle's movement states.
3. During the process of debugging the vehicle's movement direction and voice command response speed, cultivate hands-on ability, programming logic, and problem-solving ability, and learn to solve problems such as the vehicle deviating from the path and no response to voice commands.
4. Stimulate interest in intelligent handling equipment, perceive the application of "voice control" in transportation scenarios, and establish the cognition that "technology simplifies handling work".

## Story Introduction
After the lights turned on, everyone saw scattered parts next to the core server. "We need to transport these parts to the maintenance table," the system engineer pointed to the transport vehicle in the corner. "Little Train can move by recognizing voice commands, but now it won’t move at all."
The children tried saying, "Move forward!" The vehicle’s wheels turned slightly. "Great!" Aji clapped. "Try saying 'turn left' next to make it stop accurately in front of the maintenance table."

## Learning Exploration
1. Which motor needs to be controlled for the "turning" action of the transport vehicle?
2. Try placing "simulated cargo" (e.g., small building blocks) on the transport vehicle. When controlling the vehicle to move via voice commands, does the cargo easily fall off? How to optimize the cargo platform (e.g., adding rails) or adjust the movement speed to prevent falling?
3. If the transport vehicle deviates from the direction when executing the "move backward" command, what might be the causes?
4. Compare the voice-controlled transport vehicle with real logistics transport vehicles (e.g., express sorting vehicles). How do real transport vehicles achieve "precision transportation"? (Hint: Refer to GPS and visual navigation)

## Assembly Steps
<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/files/nezha-pro-ai-mechanical-power-kit-case-15.pdf" type="application/pdf" width="100%" height="600px" />

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
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-15-03.png)

Program link: [https://makecode.microbit.org/_dzvgAz4R5MJJ](https://makecode.microbit.org/_dzvgAz4R5MJJ)

You can also download the program directly through the following webpage.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_dzvgAz4R5MJJ"
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
After turning on the power, control the transport vehicle to operate via voice commands.

- Full speed ahead: Move forward
- Reversing: Move backward
- Turn left: Turn left
- Turn right: Turn right
- Execute function one: Lift the cargo bed
- Turn off device: Lower the cargo bed


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-15.gif)


## Extended Knowledge
1. Practical applications of intelligent transport vehicles: Intelligent transport vehicles (e.g., AGV sorting vehicles) in real scenarios are widely used in express warehouses and factory workshops. They achieve autonomous movement through laser navigation and visual navigation. Combined with voice control, workers can "remotely command" the transport route, improving flexibility.
2. Transportation advantages of voice control: In narrow warehouse aisles, it is difficult for workers to follow the transport vehicle to operate. Voice control enables "remote command" (e.g., saying "transport vehicle to Area A" next to the shelf), reducing operation difficulty and avoiding collisions.
3. Power and load capacity of transport vehicles: The load-carrying capacity of real transport vehicles depends on motor power and chassis structure. Although the small transport vehicle in this case has limited load capacity, its core principle is consistent with that of real transport vehicles — realizing movement through motor power and ensuring accurate direction through control algorithms.
