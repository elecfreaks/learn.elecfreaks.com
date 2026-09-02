---
sidebar_position: 3
sidebar_label: Case 2:Bipedal Walking Robot
---

# Case 2: Bipedal Walking Robot

## Case Introduction
Build a bipedal walking robot. Through a basic linkage mechanism, realize the simple walking movement of the bipedal robot.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-02-01.png)

## Teaching Preparation

| Name | Illustration |
| :----------: | :--------------------------: |
| Nezha Pro AI Mechanical Power Kit | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-01.png) |

## Teaching Objectives
1. Complete the assembly of the bipedal walking robot, master the assembly skills of the linkage mechanism for the bipedal legs, correctly connect and debug the motors, and realize the basic walking movement of the robot.
2. Understand the balance principle of bipedal walking, recognize the role of the linkage mechanism in simulating human/animal leg movements, and distinguish the structural differences between bipedal and quadrupedal walking.
3. During the process of debugging the robot's balance and walking rhythm, improve logical thinking ability and patience, and learn to solve the problem of unstable walking by adjusting motor speed and linkage angle.
4. Perceive the technical difficulties of bipedal walking robots, and stimulate interest in exploring human movement mechanics and robot control technology.

## Story Introduction
After repairing Tiedan, the group had just walked into the village square when they heard a loud "clang". Upright, the bipedal robot in charge of the flag-raising ceremony, was hitting the flagpole with its head, its two legs as stiff as wooden sticks. "It used to be able to walk like a human!" The robot baker ran over holding a burnt gear-shaped bread. "After the system failure yesterday, its knee joints got locked."
Aji (the guide robot) projected a slow-motion video of human walking: "See that? When walking, one leg supports the body, and the other swings like a pendulum. You need to install flexible, rotatable knee joints for Upright."

## Learning Exploration
1. Why is a bipedal robot more prone to "falling over" than a quadrupedal robot? How to improve stability by adjusting the structure or motor parameters?
2. What is the connection between the forward and reverse rotation of the motor and the "stepping" movement of the robot's legs? Try setting the time interval for the alternating rotation of the motors and observe whether the robot can achieve continuous walking.
3. If the robot can only walk tilted to one side, what might be the causes? (e.g., inconsistent linkage lengths on both sides, different motor speeds)


## Assembly Steps
<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/files/nezha-pro-ai-mechanical-power-kit-case-02.pdf" type="application/pdf" width="100%" height="600px" />

## Hardware Connection
Connect the two smart motors to the M2 and M3 interfaces of the Nezha Pro Expansion Board respectively.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-02-02.png)

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
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-02-03.png)

Program link: [https://makecode.microbit.org/_ffgi7UXiHEL8](https://makecode.microbit.org/_ffgi7UXiHEL8)

You can also download the program directly through the following webpage.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_ffgi7UXiHEL8"
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
After turning on the power, the bipedal robot walks forward and automatically retreats when encountering obstacles.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-02.gif)

## Extended Knowledge
1. Balance control of bipedal robots: Real-world bipedal robots (such as Honda ASIMO) use gyroscopes and accelerometers to detect body posture in real time, then adjust leg movements to maintain balance. This case simulates basic balance through a simplified linkage structure.
2. Mechanical principles of human walking: When humans walk, the body's center of gravity moves slightly up and down with leg movements. Bipedal robots need to coordinate linkages and motors to minimize fluctuations in the center of gravity and avoid falling.
3. Applications of bipedal robots: In the future, bipedal robots may be used for home services (e.g., companionship, cleaning) and operations in dangerous environments (e.g., post-disaster rescue). They can move flexibly in "biped-friendly" scenarios in human life (e.g., stairs, narrow passages).
