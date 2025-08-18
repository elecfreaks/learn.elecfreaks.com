---
sidebar_position: 6
sidebar_label: Case 5: Helicopter
---

# Case 5: Helicopter

## Case Introduction
Build a helicopter and make the propeller rotate through gear transmission.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-05-01.png)

## Teaching Preparation

| Name | Illustration |
| :----------: | :--------------------------: |
| Nezha Pro AI Mechanical Power Kit | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-01.png) |

## Teaching Objectives
1. Complete the assembly of the helicopter model, master the assembly methods of the gear transmission structure and propeller, correctly connect the power components, and realize the stable rotation of the propeller.
2. Understand how gear transmission transfers motor power to the propeller, recognize the connection between propeller rotation and "simulated lift", and learn about the impact of gear speed on the rotation speed of the propeller.
3. During the process of adjusting gear engagement and propeller installation angle, cultivate hands-on ability and attention to details, and learn to solve problems such as propeller rotation jamming and eccentricity.
4. Stimulate interest in aerospace technology, perceive the connection between mechanical structures and flight principles, and establish a preliminary understanding of "technology realizing the dream of flight".

## Story Introduction
As Tiaotiao resumed its patrol, a strange buzzing sound came from the sky. The helicopter robot "Xuan Yi" (Rotor), which was in charge of reconnaissance, tumbled awkwardly onto the roof, its propeller broken. "It was supposed to fly above the clouds to monitor the movements of the gear beasts!" the robot in the watchtower pointed at the sky. "Now we’re like being blind!"
Aji unfolded the helicopter’s mechanical diagram: "Look at this set of gears—they transfer power from the engine to the propeller. Just like how a bicycle chain drives the wheels, we can’t do without them."

## Learning Exploration
1. How many sets of gears does the helicopter model use to transfer motor power to the propeller? Try replacing gears with different numbers of teeth—how does the rotation speed of the propeller change?
2. Does the installation angle of the propeller affect its "simulated lift"? What problems (such as shaking during rotation or loud noise) will occur if the propeller is installed too loosely or at an inclined angle?
3. Compare the structure of a real helicopter with the model—what core component of a real helicopter (e.g., reducer) does the gear transmission in the model simulate? Why do real helicopters need a reducer?
4. What component can be added to the existing structure to enable the helicopter model to "turn"? (Hint: Refer to the tail rotor of a real helicopter)

## Assembly Steps
<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/files/nezha-pro-ai-mechanical-power-kit-case-05.pdf" type="application/pdf" width="100%" height="600px" />

## Hardware Connection
Connect the smart motor to the M2 interface of the Nezha Pro Expansion Board.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-05-02.png)

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
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-05-03.png)

Program link: [https://makecode.microbit.org/_7mTR09dis6g1](https://makecode.microbit.org/_7mTR09dis6g1)

You can also download the program directly through the following webpage.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_7mTR09dis6g1"
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
After turning on the power, press button A to start the propeller; press button B to stop the propeller.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-05.gif)

## Extended Knowledge
1. Flight principle of real helicopters: A real helicopter generates upward lift through the rotation of its main propeller, while the tail rotor counteracts the counter-torque of the main propeller (to prevent the fuselage from rotating). This case simulates the power transmission of the main propeller through simplified gear transmission.
2. Function of the gear reducer: The engine of a real helicopter rotates at a very high speed. A reducer (composed of multiple sets of gears) is needed to reduce the rotation speed of the propeller—this prevents the propeller from breaking due to excessive speed and increases torque (to help the propeller overcome air resistance).
3. Application scenarios of helicopters: Helicopters have the advantages of vertical take-off and landing (VTOL) and hovering. They are widely used in rescue (e.g., mountain rescue), transportation (e.g., low-altitude material transportation), and medical services (e.g., emergency medical evacuation). Their core mechanical transmission system is key to safe flight.
