---
sidebar_position: 2
sidebar_label: Case 1: Simple Quadruped Robot
---

# Case 1: Simple Quadruped Robot

## Case Introduction
Build a simple quadruped robot. Through a basic linkage mechanism, realize the walking movement of the simple quadruped robot.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-01-01.png)

## Teaching Preparation

| Name | Illustration |
| :----------: | :--------------------------: |
| Nezha Pro AI Mechanical Power Kit | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-01.png) |

## Teaching Objectives
1. Complete the assembly of the simple quadruped robot, master the assembly method of the linkage mechanism, correctly connect the motor and ultrasonic sensor, and understand the cooperative relationship between various components.
2. Develop a preliminary understanding of the movement principle of the linkage mechanism, learn about the functions of the ultrasonic sensor (e.g., distance detection), and master the method of controlling the flexion and extension of the robot's legs through the motor.
3. During the process of debugging the robot's walking and sensor detection, cultivate hands-on practical ability, observation and analysis ability, and problem-solving ability (e.g., adjusting the length of the linkage to optimize the walking posture).
4. Stimulate interest in bionic robots, perceive the connection between mechanical structures and biological movements, and establish a preliminary understanding of "technology imitating nature".

## Story Introduction
"Ding ——" The alarm of the miniature teleportation pod woke up the young engineers in their sleep. A holographic image suddenly popped up on the screen: the village chief of the Robot Village was stamping his feet anxiously, and the metal ground under his feet was covered with cracks. "Help us!" The chief's voice was mixed with current noise. "After the core system crashed, even the most basic patrol robots are out of action. The gear beasts in the forest are going to break into the village!"
Following the holographic map, the children arrived at the village entrance, only to see the quadruped robot "Tiedan" lying on the ground, with all the linkages of its four legs loose. "We must get Tiedan to stand up first!"

## Learning Exploration
1. How many sets of linkages make up the legs of the quadruped robot? How does adjusting the length or angle of the linkages affect the robot's walking posture (e.g., stride length, stability)?
2. What is the function of the ultrasonic sensor on the robot? How to use the sensor to help the robot avoid obstacles ahead? Try changing the detection distance of the sensor and observe the robot's response.
3. Does the rotation speed of the motor affect the walking speed of the robot? If the robot has a "limp" (one leg not moving), what might be the causes? (Analyze from the perspectives of linkage connection, motor wiring, etc.)
4. Compare the walking methods of the quadruped robot and real quadruped animals (e.g., cats, dogs). What are the similarities and differences in their leg movements?

## Assembly Steps
<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/files/nezha-pro-ai-mechanical-power-kit-case-01.pdf" type="application/pdf" width="100%" height="600px" />

## Hardware Connection
Connect the smart motor to the M2 interface of the Nezha Pro Expansion Board, and connect the ultrasonic sensor to the J1 interface of the Nezha Pro Expansion Board.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-01-02.png)

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
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-01-03.png)

Program link: [https://makecode.microbit.org/_c6ge4pJFp3qo](https://makecode.microbit.org/_c6ge4pJFp3qo)

You can also download the program directly through the following webpage.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_c6ge4pJFp3qo"
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
After turning on the power, the quadruped robot walks forward and automatically retreats when encountering obstacles.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-01.gif)

## Extended Knowledge
1. Inspiration source of bionic robots: Many quadruped robots (such as Boston Dynamics' Spot) imitate the skeletal and muscular structures of animals. The linkage mechanism is equivalent to the "skeleton" of the robot, and the motor is similar to "muscles", helping to achieve flexible movement.
2. Application scenarios of ultrasonic sensors: In addition to robot obstacle avoidance, ultrasonic sensors are also used in car reverse radar, water level detection, industrial distance measurement and other fields. The core principle is to calculate distance by transmitting and receiving ultrasonic waves.
3. Daily applications of linkage mechanisms: Daily items such as scissors, umbrella opening-closing structures, and folding chairs all use linkage mechanisms. Their core is to realize specific movement trajectories through the rotation or movement of multiple rods.
